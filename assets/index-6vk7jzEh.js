(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Iu=window,_p=Iu.ShadowRoot&&(Iu.ShadyCSS===void 0||Iu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xp=Symbol(),Ox=new WeakMap;let o2=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==xp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(_p&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=Ox.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Ox.set(n,e))}return e}toString(){return this.cssText}};const ry=r=>new o2(typeof r=="string"?r:r+"",void 0,xp),an=(r,...e)=>{const n=r.length===1?r[0]:e.reduce(((a,o,c)=>a+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[c+1]),r[0]);return new o2(n,r,xp)},oy=(r,e)=>{_p?r.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const a=document.createElement("style"),o=Iu.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=n.cssText,r.appendChild(a)}))},Ux=_p?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return ry(n)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sh;const ju=window,Lx=ju.trustedTypes,ly=Lx?Lx.emptyScript:"",Nx=ju.reactiveElementPolyfillSupport,g0={toAttribute(r,e){switch(e){case Boolean:r=r?ly:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let n=r;switch(e){case Boolean:n=r!==null;break;case Number:n=r===null?null:Number(r);break;case Object:case Array:try{n=JSON.parse(r)}catch{n=null}}return n}},l2=(r,e)=>e!==r&&(e==e||r==r),Mh={attribute:!0,type:String,converter:g0,reflect:!1,hasChanged:l2},_0="finalized";let co=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,a)=>{const o=this._$Ep(a,n);o!==void 0&&(this._$Ev.set(o,a),e.push(o))})),e}static createProperty(e,n=Mh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const a=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,a,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,a){return{get(){return this[n]},set(o){const c=this[e];this[n]=o,this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Mh}static finalize(){if(this.hasOwnProperty(_0))return!1;this[_0]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of a)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const o of a)n.unshift(Ux(o))}else e!==void 0&&n.push(Ux(e));return n}static _$Ep(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,a;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)===null||a===void 0||a.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return oy(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)}))}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$EO(e,n,a=Mh){var o;const c=this.constructor._$Ep(e,a);if(c!==void 0&&a.reflect===!0){const u=(((o=a.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?a.converter:g0).toAttribute(n,a.type);this._$El=e,u==null?this.removeAttribute(c):this.setAttribute(c,u),this._$El=null}}_$AK(e,n){var a;const o=this.constructor,c=o._$Ev.get(e);if(c!==void 0&&this._$El!==c){const u=o.getPropertyOptions(c),d=typeof u.converter=="function"?{fromAttribute:u.converter}:((a=u.converter)===null||a===void 0?void 0:a.fromAttribute)!==void 0?u.converter:g0;this._$El=c,this[c]=d.fromAttribute(n,u.type),this._$El=null}}requestUpdate(e,n,a){let o=!0;e!==void 0&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||l2)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),a.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,a))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,c)=>this[c]=o)),this._$Ei=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var c;return(c=o.hostUpdate)===null||c===void 0?void 0:c.call(o)})),this.update(a)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(a)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((a=>{var o;return(o=a.hostUpdated)===null||o===void 0?void 0:o.call(a)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,a)=>this._$EO(a,this[a],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};co[_0]=!0,co.elementProperties=new Map,co.elementStyles=[],co.shadowRootOptions={mode:"open"},Nx==null||Nx({ReactiveElement:co}),((Sh=ju.reactiveElementVersions)!==null&&Sh!==void 0?Sh:ju.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Eh;const ku=window,ho=ku.trustedTypes,Px=ho?ho.createPolicy("lit-html",{createHTML:r=>r}):void 0,x0="$lit$",Ms=`lit$${(Math.random()+"").slice(9)}$`,c2="?"+Ms,cy=`<${c2}>`,cr=document,Ul=()=>cr.createComment(""),Ll=r=>r===null||typeof r!="object"&&typeof r!="function",u2=Array.isArray,uy=r=>u2(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Th=`[ 	
\f\r]`,bl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zx=/-->/g,Ix=/>/g,Zs=RegExp(`>|${Th}(?:([^\\s"'>=/]+)(${Th}*=${Th}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fx=/'/g,Bx=/"/g,f2=/^(?:script|style|textarea|title)$/i,fy=r=>(e,...n)=>({_$litType$:r,strings:e,values:n}),nn=fy(1),po=Symbol.for("lit-noChange"),Fn=Symbol.for("lit-nothing"),Hx=new WeakMap,rr=cr.createTreeWalker(cr,129,null,!1);function d2(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Px!==void 0?Px.createHTML(e):e}const dy=(r,e)=>{const n=r.length-1,a=[];let o,c=e===2?"<svg>":"",u=bl;for(let d=0;d<n;d++){const m=r[d];let p,g,_=-1,x=0;for(;x<m.length&&(u.lastIndex=x,g=u.exec(m),g!==null);)x=u.lastIndex,u===bl?g[1]==="!--"?u=zx:g[1]!==void 0?u=Ix:g[2]!==void 0?(f2.test(g[2])&&(o=RegExp("</"+g[2],"g")),u=Zs):g[3]!==void 0&&(u=Zs):u===Zs?g[0]===">"?(u=o??bl,_=-1):g[1]===void 0?_=-2:(_=u.lastIndex-g[2].length,p=g[1],u=g[3]===void 0?Zs:g[3]==='"'?Bx:Fx):u===Bx||u===Fx?u=Zs:u===zx||u===Ix?u=bl:(u=Zs,o=void 0);const S=u===Zs&&r[d+1].startsWith("/>")?" ":"";c+=u===bl?m+cy:_>=0?(a.push(p),m.slice(0,_)+x0+m.slice(_)+Ms+S):m+Ms+(_===-2?(a.push(void 0),d):S)}return[d2(r,c+(r[n]||"<?>")+(e===2?"</svg>":"")),a]};class Nl{constructor({strings:e,_$litType$:n},a){let o;this.parts=[];let c=0,u=0;const d=e.length-1,m=this.parts,[p,g]=dy(e,n);if(this.el=Nl.createElement(p,a),rr.currentNode=this.el.content,n===2){const _=this.el.content,x=_.firstChild;x.remove(),_.append(...x.childNodes)}for(;(o=rr.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const _=[];for(const x of o.getAttributeNames())if(x.endsWith(x0)||x.startsWith(Ms)){const S=g[u++];if(_.push(x),S!==void 0){const M=o.getAttribute(S.toLowerCase()+x0).split(Ms),T=/([.?@])?(.*)/.exec(S);m.push({type:1,index:c,name:T[2],strings:M,ctor:T[1]==="."?py:T[1]==="?"?gy:T[1]==="@"?_y:nf})}else m.push({type:6,index:c})}for(const x of _)o.removeAttribute(x)}if(f2.test(o.tagName)){const _=o.textContent.split(Ms),x=_.length-1;if(x>0){o.textContent=ho?ho.emptyScript:"";for(let S=0;S<x;S++)o.append(_[S],Ul()),rr.nextNode(),m.push({type:2,index:++c});o.append(_[x],Ul())}}}else if(o.nodeType===8)if(o.data===c2)m.push({type:2,index:c});else{let _=-1;for(;(_=o.data.indexOf(Ms,_+1))!==-1;)m.push({type:7,index:c}),_+=Ms.length-1}c++}}static createElement(e,n){const a=cr.createElement("template");return a.innerHTML=e,a}}function mo(r,e,n=r,a){var o,c,u,d;if(e===po)return e;let m=a!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[a]:n._$Cl;const p=Ll(e)?void 0:e._$litDirective$;return(m==null?void 0:m.constructor)!==p&&((c=m==null?void 0:m._$AO)===null||c===void 0||c.call(m,!1),p===void 0?m=void 0:(m=new p(r),m._$AT(r,n,a)),a!==void 0?((u=(d=n)._$Co)!==null&&u!==void 0?u:d._$Co=[])[a]=m:n._$Cl=m),m!==void 0&&(e=mo(r,m._$AS(r,e.values),m,a)),e}class hy{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:a},parts:o}=this._$AD,c=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:cr).importNode(a,!0);rr.currentNode=c;let u=rr.nextNode(),d=0,m=0,p=o[0];for(;p!==void 0;){if(d===p.index){let g;p.type===2?g=new ql(u,u.nextSibling,this,e):p.type===1?g=new p.ctor(u,p.name,p.strings,this,e):p.type===6&&(g=new xy(u,this,e)),this._$AV.push(g),p=o[++m]}d!==(p==null?void 0:p.index)&&(u=rr.nextNode(),d++)}return rr.currentNode=cr,c}v(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}}class ql{constructor(e,n,a,o){var c;this.type=2,this._$AH=Fn,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=o,this._$Cp=(c=o==null?void 0:o.isConnected)===null||c===void 0||c}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=mo(this,e,n),Ll(e)?e===Fn||e==null||e===""?(this._$AH!==Fn&&this._$AR(),this._$AH=Fn):e!==this._$AH&&e!==po&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):uy(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Fn&&Ll(this._$AH)?this._$AA.nextSibling.data=e:this.$(cr.createTextNode(e)),this._$AH=e}g(e){var n;const{values:a,_$litType$:o}=e,c=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Nl.createElement(d2(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===c)this._$AH.v(a);else{const u=new hy(c,this),d=u.u(this.options);u.v(a),this.$(d),this._$AH=u}}_$AC(e){let n=Hx.get(e.strings);return n===void 0&&Hx.set(e.strings,n=new Nl(e)),n}T(e){u2(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,o=0;for(const c of e)o===n.length?n.push(a=new ql(this.k(Ul()),this.k(Ul()),this,this.options)):a=n[o],a._$AI(c),o++;o<n.length&&(this._$AR(a&&a._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class nf{constructor(e,n,a,o,c){this.type=1,this._$AH=Fn,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Fn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,a,o){const c=this.strings;let u=!1;if(c===void 0)e=mo(this,e,n,0),u=!Ll(e)||e!==this._$AH&&e!==po,u&&(this._$AH=e);else{const d=e;let m,p;for(e=c[0],m=0;m<c.length-1;m++)p=mo(this,d[a+m],n,m),p===po&&(p=this._$AH[m]),u||(u=!Ll(p)||p!==this._$AH[m]),p===Fn?e=Fn:e!==Fn&&(e+=(p??"")+c[m+1]),this._$AH[m]=p}u&&!o&&this.j(e)}j(e){e===Fn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class py extends nf{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Fn?void 0:e}}const my=ho?ho.emptyScript:"";class gy extends nf{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Fn?this.element.setAttribute(this.name,my):this.element.removeAttribute(this.name)}}class _y extends nf{constructor(e,n,a,o,c){super(e,n,a,o,c),this.type=5}_$AI(e,n=this){var a;if((e=(a=mo(this,e,n,0))!==null&&a!==void 0?a:Fn)===po)return;const o=this._$AH,c=e===Fn&&o!==Fn||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Fn&&(o===Fn||c);c&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,e):this._$AH.handleEvent(e)}}class xy{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){mo(this,e)}}const Gx=ku.litHtmlPolyfillSupport;Gx==null||Gx(Nl,ql),((Eh=ku.litHtmlVersions)!==null&&Eh!==void 0?Eh:ku.litHtmlVersions=[]).push("2.8.0");const vy=(r,e,n)=>{var a,o;const c=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:e;let u=c._$litPart$;if(u===void 0){const d=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;c._$litPart$=u=new ql(e.insertBefore(Ul(),d),d,void 0,n??{})}return u._$AI(r),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ah,Rh;class Fa extends co{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const a=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=a.firstChild),a}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vy(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return po}}Fa.finalized=!0,Fa._$litElement$=!0,(Ah=globalThis.litElementHydrateSupport)===null||Ah===void 0||Ah.call(globalThis,{LitElement:Fa});const Vx=globalThis.litElementPolyfillSupport;Vx==null||Vx({LitElement:Fa});((Rh=globalThis.litElementVersions)!==null&&Rh!==void 0?Rh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rn=r=>e=>typeof e=="function"?((n,a)=>(customElements.define(n,a),a))(r,e):((n,a)=>{const{kind:o,elements:c}=a;return{kind:o,elements:c,finisher(u){customElements.define(n,u)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const by=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,r)}},yy=(r,e,n)=>{e.constructor.createProperty(n,r)};function Oe(r){return(e,n)=>n!==void 0?yy(r,e,n):by(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Sy(r){return Oe({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const My=({finisher:r,descriptor:e})=>(n,a)=>{var o;if(a===void 0){const c=(o=n.originalKey)!==null&&o!==void 0?o:n.key,u=e!=null?{kind:"method",placement:"prototype",key:c,descriptor:e(n.key)}:{...n,key:c};return r!=null&&(u.finisher=function(d){r(d,c)}),u}{const c=n.constructor;e!==void 0&&Object.defineProperty(n,a,e(a)),r==null||r(c,a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ln(r,e){return My({descriptor:n=>({get(){var o,c;return(c=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&c!==void 0?c:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wh;((wh=window.HTMLSlotElement)===null||wh===void 0?void 0:wh.prototype.assignedElements)!=null;var Ey=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ty=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const xn=an`
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
`;class vn extends Fa{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const n=this.canvasSize();if(!e&&n[0]===this.lastSize[0]&&n[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${n[0]}`),this.svg.setAttribute("height",`${n[1]}`),this.draw(this.svg,n),this.lastSize=n,this.classList.add("wired-rendered")}}fire(e,n){vp(this,e,n)}}Ey([Ln("svg"),Ty("design:type",SVGSVGElement)],vn.prototype,"svg",void 0);function Ay(){return Math.floor(Math.random()*2**31)}function vp(r,e,n){r.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:n}))}function v0(r,e,n){if(r&&r.length){const[a,o]=e,c=Math.PI/180*n,u=Math.cos(c),d=Math.sin(c);for(const m of r){const[p,g]=m;m[0]=(p-a)*u-(g-o)*d+a,m[1]=(p-a)*d+(g-o)*u+o}}}function Ry(r,e,n){const a=[];r.forEach(o=>a.push(...o)),v0(a,e,n)}function wy(r,e){return r[0]===e[0]&&r[1]===e[1]}function Cy(r,e,n,a=1){const o=n,c=Math.max(e,.1),u=r[0]&&r[0][0]&&typeof r[0][0]=="number"?[r]:r,d=[0,0];if(o)for(const p of u)v0(p,d,o);const m=Dy(u,c,a);if(o){for(const p of u)v0(p,d,-o);Ry(m,d,-o)}return m}function Dy(r,e,n){const a=[];for(const p of r){const g=[...p];wy(g[0],g[g.length-1])||g.push([g[0][0],g[0][1]]),g.length>2&&a.push(g)}const o=[];e=Math.max(e,.1);const c=[];for(const p of a)for(let g=0;g<p.length-1;g++){const _=p[g],x=p[g+1];if(_[1]!==x[1]){const S=Math.min(_[1],x[1]);c.push({ymin:S,ymax:Math.max(_[1],x[1]),x:S===_[1]?_[0]:x[0],islope:(x[0]-_[0])/(x[1]-_[1])})}}if(c.sort((p,g)=>p.ymin<g.ymin?-1:p.ymin>g.ymin?1:p.x<g.x?-1:p.x>g.x?1:p.ymax===g.ymax?0:(p.ymax-g.ymax)/Math.abs(p.ymax-g.ymax)),!c.length)return o;let u=[],d=c[0].ymin,m=0;for(;u.length||c.length;){if(c.length){let p=-1;for(let _=0;_<c.length&&!(c[_].ymin>d);_++)p=_;c.splice(0,p+1).forEach(_=>{u.push({s:d,edge:_})})}if(u=u.filter(p=>!(p.edge.ymax<=d)),u.sort((p,g)=>p.edge.x===g.edge.x?0:(p.edge.x-g.edge.x)/Math.abs(p.edge.x-g.edge.x)),(n!==1||m%e===0)&&u.length>1)for(let p=0;p<u.length;p=p+2){const g=p+1;if(g>=u.length)break;const _=u[p].edge,x=u[g].edge;o.push([[Math.round(_.x),d],[Math.round(x.x),d]])}d+=n,u.forEach(p=>{p.edge.x=p.edge.x+n*p.edge.islope}),m++}return o}function h2(r,e){var n;const a=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=e.strokeWidth*4),o=Math.round(Math.max(o,.1));let c=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(c=o),Cy(r,o,a,c||1)}class Oy{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const a=h2(e,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(e,n){const a=[];for(const o of e)a.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return a}}function Uy(r){const e=r[0],n=r[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class Ly extends Oy{fillPolygons(e,n){let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);const o=Object.assign({},n,{hachureGap:a}),c=h2(e,o),u=Math.PI/180*n.hachureAngle,d=[],m=a*.5*Math.cos(u),p=a*.5*Math.sin(u);for(const[_,x]of c)Uy([_,x])&&d.push([[_[0]-m,_[1]+p],[...x]],[[_[0]+m,_[1]-p],[...x]]);return{type:"fillSketch",ops:this.renderLines(d,n)}}}class Ny{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function p2(r,e,n,a,o){return{type:"path",ops:Xu(r,e,n,a,o)}}function Py(r,e,n){const a=(r||[]).length;if(a>2){const o=[];for(let c=0;c<a-1;c++)o.push(...Xu(r[c][0],r[c][1],r[c+1][0],r[c+1][1],n));return o.push(...Xu(r[a-1][0],r[a-1][1],r[0][0],r[0][1],n)),{type:"path",ops:o}}else if(a===2)return p2(r[0][0],r[0][1],r[1][0],r[1][1],n);return{type:"path",ops:[]}}function m2(r,e){return Py(r,!0,e)}function zy(r,e,n,a,o){const c=[[r,e],[r+n,e],[r+n,e+a],[r,e+a]];return m2(c,o)}function g2(r,e,n,a,o){const c=_2(n,a,o);return Iy(r,e,o,c).opset}function _2(r,e,n){const a=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(r/2,2)+Math.pow(e/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),c=Math.PI*2/o;let u=Math.abs(r/2),d=Math.abs(e/2);const m=1-n.curveFitting;return u+=Cn(u*m,n),d+=Cn(d*m,n),{increment:c,rx:u,ry:d}}function Iy(r,e,n,a){const[o,c]=kx(a.increment,r,e,a.rx,a.ry,1,a.increment*b0(.1,b0(.4,1,n),n),n);let u=jx(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[d]=kx(a.increment,r,e,a.rx,a.ry,1.5,0,n),m=jx(d,null,n);u=u.concat(m)}return{estimatedPoints:c,opset:{type:"path",ops:u}}}function Fy(r,e,n,a,o){return Xu(r,e,n,a,o,!0)}function x2(r){return r.randomizer||(r.randomizer=new Ny(r.seed||0)),r.randomizer.next()}function b0(r,e,n,a=1){return n.roughness*a*(x2(n)*(e-r)+r)}function Cn(r,e,n=1){return b0(-r,r,e,n)}function Xu(r,e,n,a,o,c=!1){const u=c?o.disableMultiStrokeFill:o.disableMultiStroke,d=y0(r,e,n,a,o,!0,!1);if(u)return d;const m=y0(r,e,n,a,o,!0,!0);return d.concat(m)}function y0(r,e,n,a,o,c,u){const d=Math.pow(r-n,2)+Math.pow(e-a,2),m=Math.sqrt(d);let p=1;m<200?p=1:m>500?p=.4:p=-.0016668*m+1.233334;let g=o.maxRandomnessOffset||0;g*g*100>d&&(g=m/10);const _=g/2,x=.2+x2(o)*.2;let S=o.bowing*o.maxRandomnessOffset*(a-e)/200,M=o.bowing*o.maxRandomnessOffset*(r-n)/200;S=Cn(S,o,p),M=Cn(M,o,p);const T=[],y=()=>Cn(_,o,p),v=()=>Cn(g,o,p),L=o.preserveVertices;return u?T.push({op:"move",data:[r+(L?0:y()),e+(L?0:y())]}):T.push({op:"move",data:[r+(L?0:Cn(g,o,p)),e+(L?0:Cn(g,o,p))]}),u?T.push({op:"bcurveTo",data:[S+r+(n-r)*x+y(),M+e+(a-e)*x+y(),S+r+2*(n-r)*x+y(),M+e+2*(a-e)*x+y(),n+(L?0:y()),a+(L?0:y())]}):T.push({op:"bcurveTo",data:[S+r+(n-r)*x+v(),M+e+(a-e)*x+v(),S+r+2*(n-r)*x+v(),M+e+2*(a-e)*x+v(),n+(L?0:v()),a+(L?0:v())]}),T}function jx(r,e,n){const a=r.length,o=[];if(a>3){const c=[],u=1-n.curveTightness;o.push({op:"move",data:[r[1][0],r[1][1]]});for(let d=1;d+2<a;d++){const m=r[d];c[0]=[m[0],m[1]],c[1]=[m[0]+(u*r[d+1][0]-u*r[d-1][0])/6,m[1]+(u*r[d+1][1]-u*r[d-1][1])/6],c[2]=[r[d+1][0]+(u*r[d][0]-u*r[d+2][0])/6,r[d+1][1]+(u*r[d][1]-u*r[d+2][1])/6],c[3]=[r[d+1][0],r[d+1][1]],o.push({op:"bcurveTo",data:[c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]]})}}else a===3?(o.push({op:"move",data:[r[1][0],r[1][1]]}),o.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[2][0],r[2][1]]})):a===2&&o.push(...y0(r[0][0],r[0][1],r[1][0],r[1][1],n,!0,!0));return o}function kx(r,e,n,a,o,c,u,d){const m=d.roughness===0,p=[],g=[];if(m){r=r/4,g.push([e+a*Math.cos(-r),n+o*Math.sin(-r)]);for(let _=0;_<=Math.PI*2;_=_+r){const x=[e+a*Math.cos(_),n+o*Math.sin(_)];p.push(x),g.push(x)}g.push([e+a*Math.cos(0),n+o*Math.sin(0)]),g.push([e+a*Math.cos(r),n+o*Math.sin(r)])}else{const _=Cn(.5,d)-Math.PI/2;g.push([Cn(c,d)+e+.9*a*Math.cos(_-r),Cn(c,d)+n+.9*o*Math.sin(_-r)]);const x=Math.PI*2+_-.01;for(let S=_;S<x;S=S+r){const M=[Cn(c,d)+e+a*Math.cos(S),Cn(c,d)+n+o*Math.sin(S)];p.push(M),g.push(M)}g.push([Cn(c,d)+e+a*Math.cos(_+Math.PI*2+u*.5),Cn(c,d)+n+o*Math.sin(_+Math.PI*2+u*.5)]),g.push([Cn(c,d)+e+.98*a*Math.cos(_+u),Cn(c,d)+n+.98*o*Math.sin(_+u)]),g.push([Cn(c,d)+e+.9*a*Math.cos(_+u*.5),Cn(c,d)+n+.9*o*Math.sin(_+u*.5)])}return[g,p]}const By={randOffset(r,e){return r},randOffsetWithRange(r,e,n){return(r+e)/2},ellipse(r,e,n,a,o){return g2(r,e,n,a,o)},doubleLineOps(r,e,n,a,o){return Fy(r,e,n,a,o)}};function Eo(r){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:r}}function Hy(r,e){let n="";for(const a of r.ops){const o=a.data;switch(a.op){case"move":if(e&&n)break;n+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":n+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":n+=`L${o[0]} ${o[1]} `;break}}return n.trim()}function go(r,e){const n=document.createElementNS("http://www.w3.org/2000/svg",r);if(e)for(const a in e)n.setAttributeNS(null,a,e[a]);return n}function Yl(r,e,n=!1){const a=go("path",{d:Hy(r,n)});return e&&e.appendChild(a),a}function fi(r,e,n,a,o,c){return Yl(zy(e+2,n+2,a-4,o-4,Eo(c)),r)}function _n(r,e,n,a,o,c){return Yl(p2(e,n,a,o,Eo(c)),r)}function Gy(r,e,n){return Yl(m2(e,Eo(n)),r,!0)}function ur(r,e,n,a,o,c){return a=Math.max(a>10?a-4:a-1,1),o=Math.max(o>10?o-4:o-1,1),Yl(g2(e,n,a,o,Eo(c)),r)}function af(r,e){const a=new Ly(By).fillPolygon(r,Eo(e));return Yl(a,null)}function bp(r,e,n,a,o){const c=Eo(o),u=_2(n,a,c),d=[];let m=0;for(;m<=Math.PI*2;)d.push([r+u.rx*Math.cos(m),e+u.ry*Math.sin(m)]),m+=u.increment;return af(d,o)}var sf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},rf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Pl=class extends vn{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[xn,an`
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
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};fi(e,0,0,o.width,o.height,this.seed);for(let c=1;c<a;c++)_n(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,_n(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`,_n(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,_n(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};sf([Oe({type:Number}),rf("design:type",Object)],Pl.prototype,"elevation",void 0);sf([Oe({type:Boolean,reflect:!0}),rf("design:type",Object)],Pl.prototype,"disabled",void 0);sf([Ln("button"),rf("design:type",HTMLButtonElement)],Pl.prototype,"button",void 0);Pl=sf([rn("wired-button"),rf("design:paramtypes",[])],Pl);var yp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Sp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let zl=class extends vn{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[xn,an`
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
    `}updated(e){const n=e.has("fill");this.wiredRender(n),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};if(this.fill&&this.fill.trim()){const c=af([[2,2],[o.width-4,2],[o.width-2,o.height-4],[2,o.height-4]],this.seed);c.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(c)}fi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)_n(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,_n(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,_n(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,_n(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};yp([Oe({type:Number}),Sp("design:type",Object)],zl.prototype,"elevation",void 0);yp([Oe({type:String}),Sp("design:type",String)],zl.prototype,"fill",void 0);zl=yp([rn("wired-card"),Sp("design:paramtypes",[])],zl);var $l=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},of=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let _o=class extends vn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[xn,an`
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
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){fi(e,0,0,n[0],n[1],this.seed),this.svgCheck=go("g"),e.appendChild(this.svgCheck),_n(this.svgCheck,n[0]*.3,n[1]*.4,n[0]*.5,n[1]*.7,this.seed),_n(this.svgCheck,n[0]*.5,n[1]*.7,n[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};$l([Oe({type:Boolean}),of("design:type",Object)],_o.prototype,"checked",void 0);$l([Oe({type:Boolean,reflect:!0}),of("design:type",Object)],_o.prototype,"disabled",void 0);$l([Sy(),of("design:type",Object)],_o.prototype,"focused",void 0);$l([Ln("input"),of("design:type",HTMLInputElement)],_o.prototype,"input",void 0);_o=$l([rn("wired-checkbox")],_o);var lf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Mp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Il=class extends vn{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[xn,an`
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
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){const a=af([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],this.seed);e.appendChild(a)}};lf([Oe(),Mp("design:type",Object)],Il.prototype,"value",void 0);lf([Oe(),Mp("design:type",Object)],Il.prototype,"name",void 0);lf([Oe({type:Boolean}),Mp("design:type",Object)],Il.prototype,"selected",void 0);Il=lf([rn("wired-item")],Il);var To=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Zl=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let fr=class extends Fa{constructor(){super(...arguments),this.disabled=!1,this.seed=Ay(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return an`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const n=this.svg;for(;n.hasChildNodes();)n.removeChild(n.lastChild);const a=this.shadowRoot.getElementById("container").getBoundingClientRect();n.setAttribute("width",`${a.width}`),n.setAttribute("height",`${a.height}`);const o=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=o.height+"px",fi(n,0,0,o.width,o.height,this.seed);const c=o.width-4;fi(n,c,0,34,o.height,this.seed);const u=Math.max(0,Math.abs((o.height-24)/2)),d=Gy(n,[[c+8,5+u],[c+26,5+u],[c+17,u+Math.min(o.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const m=this.shadowRoot.getElementById("slot").assignedNodes();if(m&&m.length)for(let p=0;p<m.length;p++){const g=m[p];g.tagName==="WIRED-ITEM"&&(g.setAttribute("role","option"),this.itemNodes.push(g))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||c.getAttribute("value")||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(a=>a.nodeType===Node.ELEMENT_NODE).forEach(a=>{const o=a;o.requestUpdate&&o.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){vp(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};To([Oe({type:Object}),Zl("design:type",Object)],fr.prototype,"value",void 0);To([Oe({type:String,reflect:!0}),Zl("design:type",String)],fr.prototype,"selected",void 0);To([Oe({type:Boolean,reflect:!0}),Zl("design:type",Object)],fr.prototype,"disabled",void 0);To([Ln("svg"),Zl("design:type",SVGSVGElement)],fr.prototype,"svg",void 0);To([Ln("#card"),Zl("design:type",HTMLDivElement)],fr.prototype,"card",void 0);fr=To([rn("wired-combo")],fr);var cf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ep=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Fl=class extends Fa{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return an`
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
    `}updated(){this.card&&this.card.wiredRender(!0)}};cf([Oe({type:Number}),Ep("design:type",Object)],Fl.prototype,"elevation",void 0);cf([Oe({type:Boolean,reflect:!0}),Ep("design:type",Object)],Fl.prototype,"open",void 0);cf([Ln("wired-card"),Ep("design:type",zl)],Fl.prototype,"card",void 0);Fl=cf([rn("wired-dialog")],Fl);var v2=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Vy=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let S0=class extends vn{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[xn,an`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return nn`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5);return[e.width,n*6]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5);for(let o=0;o<a;o++)_n(e,0,o*6+3,n[0],o*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};v2([Oe({type:Number}),Vy("design:type",Object)],S0.prototype,"elevation",void 0);S0=v2([rn("wired-divider")],S0);var Tp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},b2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Wu=class extends vn{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[xn,an`
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
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]),o=bp(a/2,a/2,a,a,this.seed);e.appendChild(o)}};Tp([Oe({type:Boolean,reflect:!0}),b2("design:type",Object)],Wu.prototype,"disabled",void 0);Tp([Ln("button"),b2("design:type",HTMLButtonElement)],Wu.prototype,"button",void 0);Wu=Tp([rn("wired-fab")],Wu);var Ap=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let qu=class extends vn{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[xn,an`
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
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]);e.setAttribute("width",`${a}`),e.setAttribute("height",`${a}`),ur(e,a/2,a/2,a,a,this.seed)}};Ap([Oe({type:Boolean,reflect:!0}),y2("design:type",Object)],qu.prototype,"disabled",void 0);Ap([Ln("button"),y2("design:type",HTMLButtonElement)],qu.prototype,"button",void 0);qu=Ap([rn("wired-icon-button")],qu);var Rp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},wp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const jy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Yu=class extends vn{constructor(){super(),this.elevation=1,this.src=jy,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[xn,an`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};fi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)_n(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,_n(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,_n(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,_n(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Rp([Oe({type:Number}),wp("design:type",Object)],Yu.prototype,"elevation",void 0);Rp([Oe({type:String}),wp("design:type",String)],Yu.prototype,"src",void 0);Yu=Rp([rn("wired-image"),wp("design:paramtypes",[])],Yu);var Hn=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Gn=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Dn=class extends vn{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[xn,an`
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
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-2,n[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};Hn([Oe({type:Boolean,reflect:!0}),Gn("design:type",Object)],Dn.prototype,"disabled",void 0);Hn([Oe({type:String}),Gn("design:type",Object)],Dn.prototype,"placeholder",void 0);Hn([Oe({type:String}),Gn("design:type",String)],Dn.prototype,"name",void 0);Hn([Oe({type:String}),Gn("design:type",String)],Dn.prototype,"min",void 0);Hn([Oe({type:String}),Gn("design:type",String)],Dn.prototype,"max",void 0);Hn([Oe({type:String}),Gn("design:type",String)],Dn.prototype,"step",void 0);Hn([Oe({type:String}),Gn("design:type",Object)],Dn.prototype,"type",void 0);Hn([Oe({type:String}),Gn("design:type",Object)],Dn.prototype,"autocomplete",void 0);Hn([Oe({type:String}),Gn("design:type",Object)],Dn.prototype,"autocapitalize",void 0);Hn([Oe({type:String}),Gn("design:type",Object)],Dn.prototype,"autocorrect",void 0);Hn([Oe({type:Boolean}),Gn("design:type",Object)],Dn.prototype,"required",void 0);Hn([Oe({type:Boolean}),Gn("design:type",Object)],Dn.prototype,"autofocus",void 0);Hn([Oe({type:Boolean}),Gn("design:type",Object)],Dn.prototype,"readonly",void 0);Hn([Oe({type:Number}),Gn("design:type",Number)],Dn.prototype,"minlength",void 0);Hn([Oe({type:Number}),Gn("design:type",Number)],Dn.prototype,"maxlength",void 0);Hn([Oe({type:Number}),Gn("design:type",Number)],Dn.prototype,"size",void 0);Hn([Ln("input"),Gn("design:type",HTMLInputElement)],Dn.prototype,"textInput",void 0);Dn=Hn([rn("wired-input"),Gn("design:paramtypes",[])],Dn);var Kl=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},uf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let xo=class extends vn{constructor(){super(...arguments),this.elevation=1}static get styles(){return[xn,an`
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
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0],height:n[1]-(a-1)*2};for(let c=0;c<a;c++)_n(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed),_n(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed)}};Kl([Oe({type:Number}),uf("design:type",Object)],xo.prototype,"elevation",void 0);Kl([Oe({type:String}),uf("design:type",String)],xo.prototype,"href",void 0);Kl([Oe({type:String}),uf("design:type",String)],xo.prototype,"target",void 0);Kl([Ln("a"),uf("design:type",HTMLAnchorElement)],xo.prototype,"anchor",void 0);xo=Kl([rn("wired-link")],xo);var ff=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Cp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Bl=class extends vn{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[xn,an`
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
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let n=0;n<e.length;n++){const a=e[n];a.tagName==="WIRED-ITEM"&&(a.setAttribute("role","option"),this.itemNodes.push(a))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,0,0,n[0],n[1],this.seed)}};ff([Oe({type:Object}),Cp("design:type",Object)],Bl.prototype,"value",void 0);ff([Oe({type:String}),Cp("design:type",String)],Bl.prototype,"selected",void 0);ff([Oe({type:Boolean}),Cp("design:type",Object)],Bl.prototype,"horizontal",void 0);Bl=ff([rn("wired-listbox")],Bl);var Ql=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},df=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let dr=class extends vn{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[xn,an`
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
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-2,n[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const n=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const a=n.width*Math.max(0,Math.min(e,100));this.progBox=af([[0,0],[a,0],[a,n.height],[0,n.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Ql([Oe({type:Number}),df("design:type",Object)],dr.prototype,"value",void 0);Ql([Oe({type:Number}),df("design:type",Object)],dr.prototype,"min",void 0);Ql([Oe({type:Number}),df("design:type",Object)],dr.prototype,"max",void 0);Ql([Oe({type:Boolean}),df("design:type",Object)],dr.prototype,"percentage",void 0);dr=Ql([rn("wired-progress")],dr);var Ao=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Jl=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let hr=class extends vn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[xn,an`
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
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){ur(e,n[0]/2,n[1]/2,n[0],n[1],this.seed),this.svgCheck=go("g"),e.appendChild(this.svgCheck);const a=Math.max(n[0]*.6,5),o=Math.max(n[1]*.6,5);ur(this.svgCheck,n[0]/2,n[1]/2,a,o,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Ao([Oe({type:Boolean}),Jl("design:type",Object)],hr.prototype,"checked",void 0);Ao([Oe({type:Boolean,reflect:!0}),Jl("design:type",Object)],hr.prototype,"disabled",void 0);Ao([Oe({type:String}),Jl("design:type",String)],hr.prototype,"name",void 0);Ao([Oe(),Jl("design:type",Object)],hr.prototype,"focused",void 0);Ao([Ln("input"),Jl("design:type",HTMLInputElement)],hr.prototype,"input",void 0);hr=Ao([rn("wired-radio")],hr);var S2=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ky=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let M0=class extends Fa{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return an`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return nn`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const n=e.detail.checked,a=e.target,o=a.name||"";n?(this.selected=n&&o||"",this.fireSelected()):a.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const n=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],n&&n.length)for(let a=0;a<n.length;a++){const o=n[a];if(o.tagName==="WIRED-RADIO"){this.radioNodes.push(o);const c=o.name||"";this.selected&&c===this.selected?o.checked=!0:o.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a--,a<0&&(a=e.length-1),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a++,a>=e.length&&(a=0),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}fireSelected(){vp(this,"selected",{selected:this.selected})}};S2([Oe({type:String}),ky("design:type",String)],M0.prototype,"selected",void 0);M0=S2([rn("wired-radio-group")],M0);var gr=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ro=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ws=class extends vn{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[xn,an`
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
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;n&&(n.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-2,n[1]-2,this.seed),this.searchIcon=go("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),ur(this.searchIcon,n[0]-30,(n[1]-30)/2+10,20,20,this.seed),_n(this.searchIcon,n[0]-10,(n[1]-30)/2+30,n[0]-25,(n[1]-30)/2+15,this.seed),this.closeIcon=go("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),_n(this.closeIcon,n[0]-33,(n[1]-30)/2+2,n[0]-7,(n[1]-30)/2+28,this.seed),_n(this.closeIcon,n[0]-7,(n[1]-30)/2+2,n[0]-33,(n[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};gr([Oe({type:Boolean,reflect:!0}),Ro("design:type",Object)],ws.prototype,"disabled",void 0);gr([Oe({type:String}),Ro("design:type",Object)],ws.prototype,"placeholder",void 0);gr([Oe({type:String}),Ro("design:type",Object)],ws.prototype,"autocomplete",void 0);gr([Oe({type:String}),Ro("design:type",Object)],ws.prototype,"autocorrect",void 0);gr([Oe({type:Boolean}),Ro("design:type",Object)],ws.prototype,"autofocus",void 0);gr([Ln("input"),Ro("design:type",HTMLInputElement)],ws.prototype,"textInput",void 0);ws=gr([rn("wired-search-input")],ws);var wo=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ec=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Cs=class extends vn{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[xn,an`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){this.canvasWidth=n[0];const a=Math.round(n[1]/2);_n(e,0,a,n[0],a,this.seed).classList.add("bar"),this.knob=ur(e,10,a,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,n=Math.max(this.step,this.max-this.min),a=(e-this.min)/n;this.knob&&(this.knob.style.transform=`translateX(${a*(this.canvasWidth-20)}px)`)}}};wo([Oe({type:Number}),ec("design:type",Object)],Cs.prototype,"min",void 0);wo([Oe({type:Number}),ec("design:type",Object)],Cs.prototype,"max",void 0);wo([Oe({type:Number}),ec("design:type",Object)],Cs.prototype,"step",void 0);wo([Oe({type:Boolean,reflect:!0}),ec("design:type",Object)],Cs.prototype,"disabled",void 0);wo([Ln("input"),ec("design:type",HTMLInputElement)],Cs.prototype,"input",void 0);Cs=wo([rn("wired-slider")],Cs);var Dp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},M2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let $u=class extends vn{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[xn,an`
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
      `]}render(){return nn`<svg></svg>`}canvasSize(){return[76,76]}draw(e,n){ur(e,n[0]/2,n[1]/2,Math.floor(n[0]*.8),Math.floor(.8*n[1]),this.seed),this.knob=bp(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Dp([Oe({type:Boolean}),M2("design:type",Object)],$u.prototype,"spinning",void 0);Dp([Oe({type:Number}),M2("design:type",Object)],$u.prototype,"duration",void 0);$u=Dp([rn("wired-spinner")],$u);var Op=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Up=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Zu=class extends vn{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[xn,an`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-4,n[1]-4,this.seed)}};Op([Oe({type:String}),Up("design:type",Object)],Zu.prototype,"name",void 0);Op([Oe({type:String}),Up("design:type",Object)],Zu.prototype,"label",void 0);Zu=Op([rn("wired-tab"),Up("design:paramtypes",[])],Zu);var Lp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},E2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ku=class extends Fa{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[xn,an`
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
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let n=0;n<e.length;n++){const a=e[n];if(a.nodeType===Node.ELEMENT_NODE&&a.tagName.toLowerCase()==="wired-tab"){const o=a;this.pages.push(o);const c=o.getAttribute("name")||"";c&&c.trim().split(" ").forEach(u=>{u&&this.pageMap.set(u,o)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let n=0;n<this.pages.length;n++){const a=this.pages[n];a===e?a.classList.remove("hidden"):a.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].name||""}}selectNext(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].name||""}}};Lp([Oe({type:String}),E2("design:type",String)],Ku.prototype,"selected",void 0);Lp([Ln("slot"),E2("design:type",HTMLSlotElement)],Ku.prototype,"slotElement",void 0);Ku=Lp([rn("wired-tabs")],Ku);var Ti=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ii=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let di=class extends vn{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[xn,an`
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
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.textarea;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,4,4,n[0]-4,n[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Ti([Oe({type:Boolean,reflect:!0}),Ii("design:type",Object)],di.prototype,"disabled",void 0);Ti([Oe({type:Number}),Ii("design:type",Object)],di.prototype,"rows",void 0);Ti([Oe({type:Number}),Ii("design:type",Object)],di.prototype,"maxrows",void 0);Ti([Oe({type:String}),Ii("design:type",Object)],di.prototype,"autocomplete",void 0);Ti([Oe({type:Boolean}),Ii("design:type",Object)],di.prototype,"autofocus",void 0);Ti([Oe({type:String}),Ii("design:type",Object)],di.prototype,"inputmode",void 0);Ti([Oe({type:String}),Ii("design:type",Object)],di.prototype,"placeholder",void 0);Ti([Oe({type:Boolean}),Ii("design:type",Object)],di.prototype,"required",void 0);Ti([Oe({type:Boolean}),Ii("design:type",Object)],di.prototype,"readonly",void 0);Ti([Oe({type:Number}),Ii("design:type",Number)],di.prototype,"minlength",void 0);Ti([Oe({type:Number}),Ii("design:type",Number)],di.prototype,"maxlength",void 0);Ti([Ln("textarea"),Ii("design:type",HTMLTextAreaElement)],di.prototype,"textareaInput",void 0);di=Ti([rn("wired-textarea")],di);var hf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Np=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Hl=class extends vn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[xn,an`
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
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,n){fi(e,16,8,n[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=go("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const o=bp(16,16,32,32,this.seed);o.classList.add("knobfill"),this.knob.appendChild(o),ur(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};hf([Oe({type:Boolean}),Np("design:type",Object)],Hl.prototype,"checked",void 0);hf([Oe({type:Boolean,reflect:!0}),Np("design:type",Object)],Hl.prototype,"disabled",void 0);hf([Ln("input"),Np("design:type",HTMLInputElement)],Hl.prototype,"input",void 0);Hl=hf([rn("wired-toggle")],Hl);var Zi=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ki=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let zi=class extends vn{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[xn,an`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-4,n[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const n=Math.floor(e/60),a=Math.round(e-n*60);return`${n}:${a}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};Zi([Oe({type:String}),Ki("design:type",Object)],zi.prototype,"src",void 0);Zi([Oe({type:Boolean}),Ki("design:type",Object)],zi.prototype,"autoplay",void 0);Zi([Oe({type:Boolean}),Ki("design:type",Object)],zi.prototype,"loop",void 0);Zi([Oe({type:Boolean}),Ki("design:type",Object)],zi.prototype,"muted",void 0);Zi([Oe({type:Boolean}),Ki("design:type",Object)],zi.prototype,"playsinline",void 0);Zi([Oe(),Ki("design:type",Object)],zi.prototype,"playing",void 0);Zi([Oe(),Ki("design:type",Object)],zi.prototype,"timeDisplay",void 0);Zi([Ln("wired-progress"),Ki("design:type",dr)],zi.prototype,"progressBar",void 0);Zi([Ln("wired-slider"),Ki("design:type",Cs)],zi.prototype,"slider",void 0);Zi([Ln("video"),Ki("design:type",HTMLVideoElement)],zi.prototype,"video",void 0);zi=Zi([rn("wired-video"),Ki("design:paramtypes",[])],zi);function T2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ch={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx;function Xy(){if(Xx)return yl;Xx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return yl.Fragment=e,yl.jsx=n,yl.jsxs=n,yl}var Wx;function Wy(){return Wx||(Wx=1,Ch.exports=Xy()),Ch.exports}var oe=Wy(),Dh={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx;function qy(){if(qx)return ht;qx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(D,ie,Se){this.props=D,this.context=ie,this.refs=y,this.updater=Se||M}v.prototype.isReactComponent={},v.prototype.setState=function(D,ie){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ie,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=v.prototype;function U(D,ie,Se){this.props=D,this.context=ie,this.refs=y,this.updater=Se||M}var I=U.prototype=new L;I.constructor=U,T(I,v.prototype),I.isPureReactComponent=!0;var k=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function C(D,ie,Se){var Te=Se.ref;return{$$typeof:r,type:D,key:ie,ref:Te!==void 0?Te:null,props:Se}}function w(D,ie){return C(D.type,ie,D.props)}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function te(D){var ie={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return ie[Se]})}var he=/\/+/g;function xe(D,ie){return typeof D=="object"&&D!==null&&D.key!=null?te(""+D.key):ie.toString(36)}function K(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(ie){D.status==="pending"&&(D.status="fulfilled",D.value=ie)},function(ie){D.status==="pending"&&(D.status="rejected",D.reason=ie)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function P(D,ie,Se,Te,Ue){var ae=typeof D;(ae==="undefined"||ae==="boolean")&&(D=null);var fe=!1;if(D===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(D.$$typeof){case r:case e:fe=!0;break;case g:return fe=D._init,P(fe(D._payload),ie,Se,Te,Ue)}}if(fe)return Ue=Ue(D),fe=Te===""?"."+xe(D,0):Te,k(Ue)?(Se="",fe!=null&&(Se=fe.replace(he,"$&/")+"/"),P(Ue,ie,Se,"",function(He){return He})):Ue!=null&&(V(Ue)&&(Ue=w(Ue,Se+(Ue.key==null||D&&D.key===Ue.key?"":(""+Ue.key).replace(he,"$&/")+"/")+fe)),ie.push(Ue)),1;fe=0;var Ne=Te===""?".":Te+":";if(k(D))for(var je=0;je<D.length;je++)Te=D[je],ae=Ne+xe(Te,je),fe+=P(Te,ie,Se,ae,Ue);else if(je=S(D),typeof je=="function")for(D=je.call(D),je=0;!(Te=D.next()).done;)Te=Te.value,ae=Ne+xe(Te,je++),fe+=P(Te,ie,Se,ae,Ue);else if(ae==="object"){if(typeof D.then=="function")return P(K(D),ie,Se,Te,Ue);throw ie=String(D),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return fe}function W(D,ie,Se){if(D==null)return D;var Te=[],Ue=0;return P(D,Te,"","",function(ae){return ie.call(Se,ae,Ue++)}),Te}function q(D){if(D._status===-1){var ie=D._result;ie=ie(),ie.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=ie)}if(D._status===1)return D._result.default;throw D._result}var pe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},me={map:W,forEach:function(D,ie,Se){W(D,function(){ie.apply(this,arguments)},Se)},count:function(D){var ie=0;return W(D,function(){ie++}),ie},toArray:function(D){return W(D,function(ie){return ie})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ht.Activity=_,ht.Children=me,ht.Component=v,ht.Fragment=n,ht.Profiler=o,ht.PureComponent=U,ht.StrictMode=a,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ht.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},ht.cache=function(D){return function(){return D.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(D,ie,Se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Te=T({},D.props),Ue=D.key;if(ie!=null)for(ae in ie.key!==void 0&&(Ue=""+ie.key),ie)!Q.call(ie,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&ie.ref===void 0||(Te[ae]=ie[ae]);var ae=arguments.length-2;if(ae===1)Te.children=Se;else if(1<ae){for(var fe=Array(ae),Ne=0;Ne<ae;Ne++)fe[Ne]=arguments[Ne+2];Te.children=fe}return C(D.type,Ue,Te)},ht.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ht.createElement=function(D,ie,Se){var Te,Ue={},ae=null;if(ie!=null)for(Te in ie.key!==void 0&&(ae=""+ie.key),ie)Q.call(ie,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Ue[Te]=ie[Te]);var fe=arguments.length-2;if(fe===1)Ue.children=Se;else if(1<fe){for(var Ne=Array(fe),je=0;je<fe;je++)Ne[je]=arguments[je+2];Ue.children=Ne}if(D&&D.defaultProps)for(Te in fe=D.defaultProps,fe)Ue[Te]===void 0&&(Ue[Te]=fe[Te]);return C(D,ae,Ue)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(D){return{$$typeof:d,render:D}},ht.isValidElement=V,ht.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:q}},ht.memo=function(D,ie){return{$$typeof:p,type:D,compare:ie===void 0?null:ie}},ht.startTransition=function(D){var ie=z.T,Se={};z.T=Se;try{var Te=D(),Ue=z.S;Ue!==null&&Ue(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,pe)}catch(ae){pe(ae)}finally{ie!==null&&Se.types!==null&&(ie.types=Se.types),z.T=ie}},ht.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ht.use=function(D){return z.H.use(D)},ht.useActionState=function(D,ie,Se){return z.H.useActionState(D,ie,Se)},ht.useCallback=function(D,ie){return z.H.useCallback(D,ie)},ht.useContext=function(D){return z.H.useContext(D)},ht.useDebugValue=function(){},ht.useDeferredValue=function(D,ie){return z.H.useDeferredValue(D,ie)},ht.useEffect=function(D,ie){return z.H.useEffect(D,ie)},ht.useEffectEvent=function(D){return z.H.useEffectEvent(D)},ht.useId=function(){return z.H.useId()},ht.useImperativeHandle=function(D,ie,Se){return z.H.useImperativeHandle(D,ie,Se)},ht.useInsertionEffect=function(D,ie){return z.H.useInsertionEffect(D,ie)},ht.useLayoutEffect=function(D,ie){return z.H.useLayoutEffect(D,ie)},ht.useMemo=function(D,ie){return z.H.useMemo(D,ie)},ht.useOptimistic=function(D,ie){return z.H.useOptimistic(D,ie)},ht.useReducer=function(D,ie,Se){return z.H.useReducer(D,ie,Se)},ht.useRef=function(D){return z.H.useRef(D)},ht.useState=function(D){return z.H.useState(D)},ht.useSyncExternalStore=function(D,ie,Se){return z.H.useSyncExternalStore(D,ie,Se)},ht.useTransition=function(){return z.H.useTransition()},ht.version="19.2.1",ht}var Yx;function Pp(){return Yx||(Yx=1,Dh.exports=qy()),Dh.exports}var Ve=Pp();const Yy=T2(Ve);var Oh={exports:{}},Sl={},Uh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x;function $y(){return $x||($x=1,(function(r){function e(P,W){var q=P.length;P.push(W);e:for(;0<q;){var pe=q-1>>>1,me=P[pe];if(0<o(me,W))P[pe]=W,P[q]=me,q=pe;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var W=P[0],q=P.pop();if(q!==W){P[0]=q;e:for(var pe=0,me=P.length,D=me>>>1;pe<D;){var ie=2*(pe+1)-1,Se=P[ie],Te=ie+1,Ue=P[Te];if(0>o(Se,q))Te<me&&0>o(Ue,Se)?(P[pe]=Ue,P[Te]=q,pe=Te):(P[pe]=Se,P[ie]=q,pe=ie);else if(Te<me&&0>o(Ue,q))P[pe]=Ue,P[Te]=q,pe=Te;else break e}}return W}function o(P,W){var q=P.sortIndex-W.sortIndex;return q!==0?q:P.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,x=3,S=!1,M=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(P){for(var W=n(p);W!==null;){if(W.callback===null)a(p);else if(W.startTime<=P)a(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=n(p)}}function k(P){if(T=!1,I(P),!M)if(n(m)!==null)M=!0,N||(N=!0,te());else{var W=n(p);W!==null&&K(k,W.startTime-P)}}var N=!1,z=-1,Q=5,C=-1;function w(){return y?!0:!(r.unstable_now()-C<Q)}function V(){if(y=!1,N){var P=r.unstable_now();C=P;var W=!0;try{e:{M=!1,T&&(T=!1,L(z),z=-1),S=!0;var q=x;try{t:{for(I(P),_=n(m);_!==null&&!(_.expirationTime>P&&w());){var pe=_.callback;if(typeof pe=="function"){_.callback=null,x=_.priorityLevel;var me=pe(_.expirationTime<=P);if(P=r.unstable_now(),typeof me=="function"){_.callback=me,I(P),W=!0;break t}_===n(m)&&a(m),I(P)}else a(m);_=n(m)}if(_!==null)W=!0;else{var D=n(p);D!==null&&K(k,D.startTime-P),W=!1}}break e}finally{_=null,x=q,S=!1}W=void 0}}finally{W?te():N=!1}}}var te;if(typeof U=="function")te=function(){U(V)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,xe=he.port2;he.port1.onmessage=V,te=function(){xe.postMessage(null)}}else te=function(){v(V,0)};function K(P,W){z=v(function(){P(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var q=x;x=W;try{return P()}finally{x=q}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return W()}finally{x=q}},r.unstable_scheduleCallback=function(P,W,q){var pe=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,P){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=q+me,P={id:g++,callback:W,priorityLevel:P,startTime:q,expirationTime:me,sortIndex:-1},q>pe?(P.sortIndex=q,e(p,P),n(m)===null&&P===n(p)&&(T?(L(z),z=-1):T=!0,K(k,q-pe))):(P.sortIndex=me,e(m,P),M||S||(M=!0,N||(N=!0,te()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var W=x;return function(){var q=x;x=W;try{return P.apply(this,arguments)}finally{x=q}}}})(Lh)),Lh}var Zx;function Zy(){return Zx||(Zx=1,Uh.exports=$y()),Uh.exports}var Nh={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx;function Ky(){if(Kx)return Yn;Kx=1;var r=Pp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Yn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Yn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},Yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Yn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Yn.requestFormReset=function(m){a.d.r(m)},Yn.unstable_batchedUpdates=function(m,p){return m(p)},Yn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},Yn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Yn.version="19.2.1",Yn}var Qx;function Qy(){if(Qx)return Nh.exports;Qx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nh.exports=Ky(),Nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx;function Jy(){if(Jx)return Sl;Jx=1;var r=Zy(),e=Pp(),n=Qy();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var b=!1,A=f.child;A;){if(A===s){b=!0,s=f,l=h;break}if(A===l){b=!0,l=f,s=h;break}A=A.sibling}if(!b){for(A=h.child;A;){if(A===s){b=!0,s=h,l=f;break}if(A===l){b=!0,l=h,s=f;break}A=A.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case I:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}var K=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function D(t){return{current:t}}function ie(t){0>me||(t.current=pe[me],pe[me]=null,me--)}function Se(t,i){me++,pe[me]=t.current,t.current=i}var Te=D(null),Ue=D(null),ae=D(null),fe=D(null);function Ne(t,i){switch(Se(ae,i),Se(Ue,t),Se(Te,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?ex(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=ex(i),t=tx(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Te),Se(Te,t)}function je(){ie(Te),ie(Ue),ie(ae)}function He(t){t.memoizedState!==null&&Se(fe,t);var i=Te.current,s=tx(i,t.type);i!==s&&(Se(Ue,t),Se(Te,s))}function st(t){Ue.current===t&&(ie(Te),ie(Ue)),fe.current===t&&(ie(fe),gl._currentValue=q)}var Ot,ft;function Rt(t){if(Ot===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ot=i&&i[1]||"",ft=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+t+ft}var H=!1;function _t(t,i){if(!t||H)return"";H=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ue){var se=ue}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ue){se=ue}t.call(ye.prototype)}}else{try{throw Error()}catch(ue){se=ue}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ue){if(ue&&se&&typeof ue.stack=="string")return[ue.stack,se.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],A=h[1];if(b&&A){var B=b.split(`
`),ne=A.split(`
`);for(f=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ne.length&&!ne[f].includes("DetermineComponentFrameRoot");)f++;if(l===B.length||f===ne.length)for(l=B.length-1,f=ne.length-1;1<=l&&0<=f&&B[l]!==ne[f];)f--;for(;1<=l&&0<=f;l--,f--)if(B[l]!==ne[f]){if(l!==1||f!==1)do if(l--,f--,0>f||B[l]!==ne[f]){var _e=`
`+B[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{H=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Rt(s):""}function vt(t,i){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==i&&i!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return _t(t.type,!1);case 11:return _t(t.type.render,!1);case 1:return _t(t.type,!0);case 31:return Rt("Activity");default:return""}}function Ft(t){try{var i="",s=null;do i+=vt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var We=Object.prototype.hasOwnProperty,kt=r.unstable_scheduleCallback,tt=r.unstable_cancelCallback,lt=r.unstable_shouldYield,O=r.unstable_requestPaint,E=r.unstable_now,J=r.unstable_getCurrentPriorityLevel,be=r.unstable_ImmediatePriority,Ee=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,Je=r.unstable_LowPriority,Ie=r.unstable_IdlePriority,nt=r.log,Ye=r.unstable_setDisableYieldValue,Ae=null,Ce=null;function et(t){if(typeof nt=="function"&&Ye(t),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ae,t)}catch{}}var ke=Math.clz32?Math.clz32:G,Ge=Math.log,ot=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ge(t)/ot|0)|0}var Pe=256,De=262144,re=4194304;function ce(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~h,l!==0?f=ce(l):(b&=A,b!==0?f=ce(b):s||(s=A&~t,s!==0&&(f=ce(s))))):(A=l&~h,A!==0?f=ce(A):b!==0?f=ce(b):s||(s=l&~t,s!==0&&(f=ce(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Fe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function $e(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var t=re;return re<<=1,(re&62914560)===0&&(re=4194304),t}function St(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function hn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Nn(t,i,s,l,f,h){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,ne=t.hiddenUpdates;for(s=b&~s;0<s;){var _e=31-ke(s),ye=1<<_e;A[_e]=0,B[_e]=-1;var se=ne[_e];if(se!==null)for(ne[_e]=null,_e=0;_e<se.length;_e++){var ue=se[_e];ue!==null&&(ue.lane&=-536870913)}s&=~ye}l!==0&&Xa(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function Xa(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ke(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function ua(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ke(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Os(t,i){var s=i&-i;return s=(s&42)!==0?1:Kn(s),(s&(t.suspendedLanes|i))!==0?0:s}function Kn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Us(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:Ex(t.type))}function Wa(t,i){var s=W.p;try{return W.p=t,i()}finally{W.p=s}}var An=Math.random().toString(36).slice(2),on="__reactFiber$"+An,ln="__reactProps$"+An,Bi="__reactContainer$"+An,Hi="__reactEvents$"+An,Ji="__reactListeners$"+An,Uo="__reactHandles$"+An,Ls="__reactResources$"+An,ea="__reactMarker$"+An;function qa(t){delete t[on],delete t[ln],delete t[Hi],delete t[Ji],delete t[Uo]}function Gi(t){var i=t[on];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Bi]||s[on]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=lx(t);t!==null;){if(s=t[on])return s;t=lx(t)}return i}t=s,s=t.parentNode}return null}function R(t){if(t=t[on]||t[Bi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function F(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Y(t){var i=t[Ls];return i||(i=t[Ls]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function $(t){t[ea]=!0}var X=new Set,Re={};function Me(t,i){we(t,i),we(t+"Capture",i)}function we(t,i){for(Re[t]=i,t=0;t<i.length;t++)X.add(i[t])}var ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Le={},Xe={};function Ze(t){return We.call(Xe,t)?!0:We.call(Le,t)?!1:ze.test(t)?Xe[t]=!0:(Le[t]=!0,!1)}function it(t,i,s){if(Ze(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ct(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function mt(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wt(t){if(!t._valueTracker){var i=gt(t)?"checked":"value";t._valueTracker=Ke(t,i,""+t[i])}}function dt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=gt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function jt(t){return t.replace(Vt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Qn(t,i,s,l,f,h,b,A){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ut(i)):t.value!==""+ut(i)&&(t.value=""+ut(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?bn(t,b,ut(i)):s!=null?bn(t,b,ut(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ut(A):t.removeAttribute("name")}function Bt(t,i,s,l,f,h,b,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){wt(t);return}s=s!=null?""+ut(s):"",i=i!=null?""+ut(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),wt(t)}function bn(t,i,s){i==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Rn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ut(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Pn(t,i,s){if(i!=null&&(i=""+ut(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ut(s):""}function Vn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(K(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ut(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),wt(t)}function ta(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var fa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||fa.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Qp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Kp(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&Kp(t,h,i[h])}function xf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var n1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rc(t){return i1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function da(){}var vf=null;function bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,xr=null;function Jp(t){var i=R(t);if(i&&(t=i.stateNode)){var s=t[ln]||null;e:switch(t=i.stateNode,i.type){case"input":if(Qn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+jt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[ln]||null;if(!f)throw Error(a(90));Qn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&dt(l)}break e;case"textarea":Pn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Rn(t,!!s.multiple,i,!1)}}}var yf=!1;function em(t,i,s){if(yf)return t(i,s);yf=!0;try{var l=t(i);return l}finally{if(yf=!1,(_r!==null||xr!==null)&&(qc(),_r&&(i=_r,t=xr,xr=_r=null,Jp(i),t)))for(i=0;i<t.length;i++)Jp(t[i])}}function Lo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[ln]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(ha)try{var No={};Object.defineProperty(No,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Sf=!1}var Ya=null,Mf=null,oc=null;function tm(){if(oc)return oc;var t,i=Mf,s=i.length,l,f="value"in Ya?Ya.value:Ya.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[h-l];l++);return oc=f.slice(t,1<l?1-l:void 0)}function lc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function nm(){return!1}function ti(t){function i(s,l,f,h,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cc:nm,this.isPropagationStopped=nm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=ti(Ns),Po=_({},Ns,{view:0,detail:0}),a1=ti(Po),Ef,Tf,zo,fc=_({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Ef=t.screenX-zo.screenX,Tf=t.screenY-zo.screenY):Tf=Ef=0,zo=t),Ef)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),im=ti(fc),s1=_({},fc,{dataTransfer:0}),r1=ti(s1),o1=_({},Po,{relatedTarget:0}),Af=ti(o1),l1=_({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),c1=ti(l1),u1=_({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f1=ti(u1),d1=_({},Ns,{data:0}),am=ti(d1),h1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=m1[t])?!!i[t]:!1}function Rf(){return g1}var _1=_({},Po,{key:function(t){if(t.key){var i=h1[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x1=ti(_1),v1=_({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=ti(v1),b1=_({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),y1=ti(b1),S1=_({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=ti(S1),E1=_({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T1=ti(E1),A1=_({},Ns,{newState:0,oldState:0}),R1=ti(A1),w1=[9,13,27,32],wf=ha&&"CompositionEvent"in window,Io=null;ha&&"documentMode"in document&&(Io=document.documentMode);var C1=ha&&"TextEvent"in window&&!Io,rm=ha&&(!wf||Io&&8<Io&&11>=Io),om=" ",lm=!1;function cm(t,i){switch(t){case"keyup":return w1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vr=!1;function D1(t,i){switch(t){case"compositionend":return um(i);case"keypress":return i.which!==32?null:(lm=!0,om);case"textInput":return t=i.data,t===om&&lm?null:t;default:return null}}function O1(t,i){if(vr)return t==="compositionend"||!wf&&cm(t,i)?(t=tm(),oc=Mf=Ya=null,vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rm&&i.locale!=="ko"?null:i.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!U1[t.type]:i==="textarea"}function dm(t,i,s,l){_r?xr?xr.push(l):xr=[l]:_r=l,i=eu(i,"onChange"),0<i.length&&(s=new uc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Fo=null,Bo=null;function L1(t){Y_(t,0)}function dc(t){var i=F(t);if(dt(i))return t}function hm(t,i){if(t==="change")return i}var pm=!1;if(ha){var Cf;if(ha){var Df="oninput"in document;if(!Df){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),Df=typeof mm.oninput=="function"}Cf=Df}else Cf=!1;pm=Cf&&(!document.documentMode||9<document.documentMode)}function gm(){Fo&&(Fo.detachEvent("onpropertychange",_m),Bo=Fo=null)}function _m(t){if(t.propertyName==="value"&&dc(Bo)){var i=[];dm(i,Bo,t,bf(t)),em(L1,i)}}function N1(t,i,s){t==="focusin"?(gm(),Fo=i,Bo=s,Fo.attachEvent("onpropertychange",_m)):t==="focusout"&&gm()}function P1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Bo)}function z1(t,i){if(t==="click")return dc(i)}function I1(t,i){if(t==="input"||t==="change")return dc(i)}function F1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hi=typeof Object.is=="function"?Object.is:F1;function Ho(t,i){if(hi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!We.call(i,f)||!hi(t[f],i[f]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,i){var s=xm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=xm(s)}}function bm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?bm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ym(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Jt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Jt(t.document)}return i}function Of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var B1=ha&&"documentMode"in document&&11>=document.documentMode,br=null,Uf=null,Go=null,Lf=!1;function Sm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lf||br==null||br!==Jt(l)||(l=br,"selectionStart"in l&&Of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=eu(Uf,"onSelect"),0<l.length&&(i=new uc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=br)))}function Ps(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var yr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Nf={},Mm={};ha&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function zs(t){if(Nf[t])return Nf[t];if(!yr[t])return t;var i=yr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Mm)return Nf[t]=i[s];return t}var Em=zs("animationend"),Tm=zs("animationiteration"),Am=zs("animationstart"),H1=zs("transitionrun"),G1=zs("transitionstart"),V1=zs("transitioncancel"),Rm=zs("transitionend"),wm=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function Vi(t,i){wm.set(t,i),Me(i,[t])}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ai=[],Sr=0,zf=0;function pc(){for(var t=Sr,i=zf=Sr=0;i<t;){var s=Ai[i];Ai[i++]=null;var l=Ai[i];Ai[i++]=null;var f=Ai[i];Ai[i++]=null;var h=Ai[i];if(Ai[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&Cm(s,f,h)}}function mc(t,i,s,l){Ai[Sr++]=t,Ai[Sr++]=i,Ai[Sr++]=s,Ai[Sr++]=l,zf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function If(t,i,s,l){return mc(t,i,s,l),gc(t)}function Is(t,i){return mc(t,null,null,i),gc(t)}function Cm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-ke(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function gc(t){if(50<cl)throw cl=0,Wd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Mr={};function j1(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,i,s,l){return new j1(t,i,s,l)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,i){var s=t.alternate;return s===null?(s=pi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Dm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function _c(t,i,s,l,f,h){var b=0;if(l=t,typeof t=="function")Ff(t)&&(b=1);else if(typeof t=="string")b=Yb(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=pi(31,s,i,f),t.elementType=C,t.lanes=h,t;case T:return Fs(s.children,f,h,i);case y:b=8,f|=24;break;case v:return t=pi(12,s,i,f|2),t.elementType=v,t.lanes=h,t;case k:return t=pi(13,s,i,f),t.elementType=k,t.lanes=h,t;case N:return t=pi(19,s,i,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:b=10;break e;case L:b=9;break e;case I:b=11;break e;case z:b=14;break e;case Q:b=16,l=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=pi(b,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Fs(t,i,s,l){return t=pi(7,t,l,i),t.lanes=s,t}function Bf(t,i,s){return t=pi(6,t,null,i),t.lanes=s,t}function Om(t){var i=pi(18,null,null,0);return i.stateNode=t,i}function Hf(t,i,s){return i=pi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Um=new WeakMap;function Ri(t,i){if(typeof t=="object"&&t!==null){var s=Um.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Ft(i)},Um.set(t,i),i)}return{value:t,source:i,stack:Ft(i)}}var Er=[],Tr=0,xc=null,Vo=0,wi=[],Ci=0,$a=null,na=1,ia="";function ma(t,i){Er[Tr++]=Vo,Er[Tr++]=xc,xc=t,Vo=i}function Lm(t,i,s){wi[Ci++]=na,wi[Ci++]=ia,wi[Ci++]=$a,$a=t;var l=na;t=ia;var f=32-ke(l)-1;l&=~(1<<f),s+=1;var h=32-ke(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,na=1<<32-ke(i)+f|s<<f|l,ia=h+t}else na=1<<h|s<<f|l,ia=t}function Gf(t){t.return!==null&&(ma(t,1),Lm(t,1,0))}function Vf(t){for(;t===xc;)xc=Er[--Tr],Er[Tr]=null,Vo=Er[--Tr],Er[Tr]=null;for(;t===$a;)$a=wi[--Ci],wi[Ci]=null,ia=wi[--Ci],wi[Ci]=null,na=wi[--Ci],wi[Ci]=null}function Nm(t,i){wi[Ci++]=na,wi[Ci++]=ia,wi[Ci++]=$a,na=i.id,ia=i.overflow,$a=t}var jn=null,en=null,Ut=!1,Za=null,Di=!1,jf=Error(a(519));function Ka(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(Ri(i,t)),jf}function Pm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[on]=t,i[ln]=l,s){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(s=0;s<fl.length;s++)At(fl[s],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":At("invalid",i),Bt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":At("invalid",i);break;case"textarea":At("invalid",i),Vn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Q_(i.textContent,s)?(l.popover!=null&&(At("beforetoggle",i),At("toggle",i)),l.onScroll!=null&&At("scroll",i),l.onScrollEnd!=null&&At("scrollend",i),l.onClick!=null&&(i.onclick=da),i=!0):i=!1,i||Ka(t,!0)}function zm(t){for(jn=t.return;jn;)switch(jn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:jn=jn.return}}function Ar(t){if(t!==jn)return!1;if(!Ut)return zm(t),Ut=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||oh(t.type,t.memoizedProps)),s=!s),s&&en&&Ka(t),zm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));en=ox(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));en=ox(t)}else i===27?(i=en,fs(t.type)?(t=dh,dh=null,en=t):en=i):en=jn?Ui(t.stateNode.nextSibling):null;return!0}function Bs(){en=jn=null,Ut=!1}function kf(){var t=Za;return t!==null&&(si===null?si=t:si.push.apply(si,t),Za=null),t}function jo(t){Za===null?Za=[t]:Za.push(t)}var Xf=D(null),Hs=null,ga=null;function Qa(t,i,s){Se(Xf,i._currentValue),i._currentValue=s}function _a(t){t._currentValue=Xf.current,ie(Xf)}function Wf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function qf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=f;for(var B=0;B<i.length;B++)if(A.context===i[B]){h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),Wf(h.return,s,t),l||(b=null);break e}h=A.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,h=b.alternate,h!==null&&(h.lanes|=s),Wf(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Rr(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var A=f.type;hi(f.pendingProps.value,b.value)||(t!==null?t.push(A):t=[A])}}else if(f===fe.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}f=f.return}t!==null&&qf(i,t,s,l),i.flags|=262144}function vc(t){for(t=t.firstContext;t!==null;){if(!hi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gs(t){Hs=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return Im(Hs,t)}function bc(t,i){return Hs===null&&Gs(t),Im(t,i)}function Im(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ga===null){if(t===null)throw Error(a(308));ga=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ga=ga.next=i;return s}var k1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},X1=r.unstable_scheduleCallback,W1=r.unstable_NormalPriority,yn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new k1,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&X1(W1,function(){t.controller.abort()})}var Xo=null,$f=0,wr=0,Cr=null;function q1(t,i){if(Xo===null){var s=Xo=[];$f=0,wr=Qd(),Cr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return $f++,i.then(Fm,Fm),i}function Fm(){if(--$f===0&&Xo!==null){Cr!==null&&(Cr.status="fulfilled");var t=Xo;Xo=null,wr=0,Cr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Y1(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Bm=P.S;P.S=function(t,i){S_=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&q1(t,i),Bm!==null&&Bm(t,i)};var Vs=D(null);function Zf(){var t=Vs.current;return t!==null?t:Qt.pooledCache}function yc(t,i){i===null?Se(Vs,Vs.current):Se(Vs,i.pool)}function Hm(){var t=Zf();return t===null?null:{parent:yn._currentValue,pool:t}}var Dr=Error(a(460)),Kf=Error(a(474)),Sc=Error(a(542)),Mc={then:function(){}};function Gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(da,da),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,km(t),t;default:if(typeof i.status=="string")i.then(da,da);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,km(t),t}throw ks=i,Dr}}function js(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ks=s,Dr):s}}var ks=null;function jm(){if(ks===null)throw Error(a(459));var t=ks;return ks=null,t}function km(t){if(t===Dr||t===Sc)throw Error(a(483))}var Or=null,Wo=0;function Ec(t){var i=Wo;return Wo+=1,Or===null&&(Or=[]),Vm(Or,t,i)}function qo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Tc(t,i){throw i.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Xm(t){function i(Z,j){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[j],Z.flags|=16):ee.push(j)}}function s(Z,j){if(!t)return null;for(;j!==null;)i(Z,j),j=j.sibling;return null}function l(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function f(Z,j){return Z=pa(Z,j),Z.index=0,Z.sibling=null,Z}function h(Z,j,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<j?(Z.flags|=67108866,j):ee):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function b(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,j,ee,ve){return j===null||j.tag!==6?(j=Bf(ee,Z.mode,ve),j.return=Z,j):(j=f(j,ee),j.return=Z,j)}function B(Z,j,ee,ve){var at=ee.type;return at===T?_e(Z,j,ee.props.children,ve,ee.key):j!==null&&(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Q&&js(at)===j.type)?(j=f(j,ee.props),qo(j,ee),j.return=Z,j):(j=_c(ee.type,ee.key,ee.props,null,Z.mode,ve),qo(j,ee),j.return=Z,j)}function ne(Z,j,ee,ve){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=Hf(ee,Z.mode,ve),j.return=Z,j):(j=f(j,ee.children||[]),j.return=Z,j)}function _e(Z,j,ee,ve,at){return j===null||j.tag!==7?(j=Fs(ee,Z.mode,ve,at),j.return=Z,j):(j=f(j,ee),j.return=Z,j)}function ye(Z,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Bf(""+j,Z.mode,ee),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return ee=_c(j.type,j.key,j.props,null,Z.mode,ee),qo(ee,j),ee.return=Z,ee;case M:return j=Hf(j,Z.mode,ee),j.return=Z,j;case Q:return j=js(j),ye(Z,j,ee)}if(K(j)||te(j))return j=Fs(j,Z.mode,ee,null),j.return=Z,j;if(typeof j.then=="function")return ye(Z,Ec(j),ee);if(j.$$typeof===U)return ye(Z,bc(Z,j),ee);Tc(Z,j)}return null}function se(Z,j,ee,ve){var at=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return at!==null?null:A(Z,j,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===at?B(Z,j,ee,ve):null;case M:return ee.key===at?ne(Z,j,ee,ve):null;case Q:return ee=js(ee),se(Z,j,ee,ve)}if(K(ee)||te(ee))return at!==null?null:_e(Z,j,ee,ve,null);if(typeof ee.then=="function")return se(Z,j,Ec(ee),ve);if(ee.$$typeof===U)return se(Z,j,bc(Z,ee),ve);Tc(Z,ee)}return null}function ue(Z,j,ee,ve,at){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get(ee)||null,A(j,Z,""+ve,at);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case S:return Z=Z.get(ve.key===null?ee:ve.key)||null,B(j,Z,ve,at);case M:return Z=Z.get(ve.key===null?ee:ve.key)||null,ne(j,Z,ve,at);case Q:return ve=js(ve),ue(Z,j,ee,ve,at)}if(K(ve)||te(ve))return Z=Z.get(ee)||null,_e(j,Z,ve,at,null);if(typeof ve.then=="function")return ue(Z,j,ee,Ec(ve),at);if(ve.$$typeof===U)return ue(Z,j,ee,bc(j,ve),at);Tc(j,ve)}return null}function qe(Z,j,ee,ve){for(var at=null,Pt=null,Qe=j,bt=j=0,Dt=null;Qe!==null&&bt<ee.length;bt++){Qe.index>bt?(Dt=Qe,Qe=null):Dt=Qe.sibling;var zt=se(Z,Qe,ee[bt],ve);if(zt===null){Qe===null&&(Qe=Dt);break}t&&Qe&&zt.alternate===null&&i(Z,Qe),j=h(zt,j,bt),Pt===null?at=zt:Pt.sibling=zt,Pt=zt,Qe=Dt}if(bt===ee.length)return s(Z,Qe),Ut&&ma(Z,bt),at;if(Qe===null){for(;bt<ee.length;bt++)Qe=ye(Z,ee[bt],ve),Qe!==null&&(j=h(Qe,j,bt),Pt===null?at=Qe:Pt.sibling=Qe,Pt=Qe);return Ut&&ma(Z,bt),at}for(Qe=l(Qe);bt<ee.length;bt++)Dt=ue(Qe,Z,bt,ee[bt],ve),Dt!==null&&(t&&Dt.alternate!==null&&Qe.delete(Dt.key===null?bt:Dt.key),j=h(Dt,j,bt),Pt===null?at=Dt:Pt.sibling=Dt,Pt=Dt);return t&&Qe.forEach(function(gs){return i(Z,gs)}),Ut&&ma(Z,bt),at}function rt(Z,j,ee,ve){if(ee==null)throw Error(a(151));for(var at=null,Pt=null,Qe=j,bt=j=0,Dt=null,zt=ee.next();Qe!==null&&!zt.done;bt++,zt=ee.next()){Qe.index>bt?(Dt=Qe,Qe=null):Dt=Qe.sibling;var gs=se(Z,Qe,zt.value,ve);if(gs===null){Qe===null&&(Qe=Dt);break}t&&Qe&&gs.alternate===null&&i(Z,Qe),j=h(gs,j,bt),Pt===null?at=gs:Pt.sibling=gs,Pt=gs,Qe=Dt}if(zt.done)return s(Z,Qe),Ut&&ma(Z,bt),at;if(Qe===null){for(;!zt.done;bt++,zt=ee.next())zt=ye(Z,zt.value,ve),zt!==null&&(j=h(zt,j,bt),Pt===null?at=zt:Pt.sibling=zt,Pt=zt);return Ut&&ma(Z,bt),at}for(Qe=l(Qe);!zt.done;bt++,zt=ee.next())zt=ue(Qe,Z,bt,zt.value,ve),zt!==null&&(t&&zt.alternate!==null&&Qe.delete(zt.key===null?bt:zt.key),j=h(zt,j,bt),Pt===null?at=zt:Pt.sibling=zt,Pt=zt);return t&&Qe.forEach(function(sy){return i(Z,sy)}),Ut&&ma(Z,bt),at}function Zt(Z,j,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===T&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var at=ee.key;j!==null;){if(j.key===at){if(at=ee.type,at===T){if(j.tag===7){s(Z,j.sibling),ve=f(j,ee.props.children),ve.return=Z,Z=ve;break e}}else if(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Q&&js(at)===j.type){s(Z,j.sibling),ve=f(j,ee.props),qo(ve,ee),ve.return=Z,Z=ve;break e}s(Z,j);break}else i(Z,j);j=j.sibling}ee.type===T?(ve=Fs(ee.props.children,Z.mode,ve,ee.key),ve.return=Z,Z=ve):(ve=_c(ee.type,ee.key,ee.props,null,Z.mode,ve),qo(ve,ee),ve.return=Z,Z=ve)}return b(Z);case M:e:{for(at=ee.key;j!==null;){if(j.key===at)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){s(Z,j.sibling),ve=f(j,ee.children||[]),ve.return=Z,Z=ve;break e}else{s(Z,j);break}else i(Z,j);j=j.sibling}ve=Hf(ee,Z.mode,ve),ve.return=Z,Z=ve}return b(Z);case Q:return ee=js(ee),Zt(Z,j,ee,ve)}if(K(ee))return qe(Z,j,ee,ve);if(te(ee)){if(at=te(ee),typeof at!="function")throw Error(a(150));return ee=at.call(ee),rt(Z,j,ee,ve)}if(typeof ee.then=="function")return Zt(Z,j,Ec(ee),ve);if(ee.$$typeof===U)return Zt(Z,j,bc(Z,ee),ve);Tc(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(s(Z,j.sibling),ve=f(j,ee),ve.return=Z,Z=ve):(s(Z,j),ve=Bf(ee,Z.mode,ve),ve.return=Z,Z=ve),b(Z)):s(Z,j)}return function(Z,j,ee,ve){try{Wo=0;var at=Zt(Z,j,ee,ve);return Or=null,at}catch(Qe){if(Qe===Dr||Qe===Sc)throw Qe;var Pt=pi(29,Qe,null,Z.mode);return Pt.lanes=ve,Pt.return=Z,Pt}finally{}}}var Xs=Xm(!0),Wm=Xm(!1),Ja=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function es(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ts(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=gc(t),Cm(t,null,s),i}return mc(t,l,i,s),gc(t)}function Yo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ua(t,s)}}function ed(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var td=!1;function $o(){if(td){var t=Cr;if(t!==null)throw t}}function Zo(t,i,s,l){td=!1;var f=t.updateQueue;Ja=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var B=A,ne=B.next;B.next=null,b===null?h=ne:b.next=ne,b=B;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,A=_e.lastBaseUpdate,A!==b&&(A===null?_e.firstBaseUpdate=ne:A.next=ne,_e.lastBaseUpdate=B))}if(h!==null){var ye=f.baseState;b=0,_e=ne=B=null,A=h;do{var se=A.lane&-536870913,ue=se!==A.lane;if(ue?(Ct&se)===se:(l&se)===se){se!==0&&se===wr&&(td=!0),_e!==null&&(_e=_e.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var qe=t,rt=A;se=i;var Zt=s;switch(rt.tag){case 1:if(qe=rt.payload,typeof qe=="function"){ye=qe.call(Zt,ye,se);break e}ye=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=rt.payload,se=typeof qe=="function"?qe.call(Zt,ye,se):qe,se==null)break e;ye=_({},ye,se);break e;case 2:Ja=!0}}se=A.callback,se!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=f.callbacks,ue===null?f.callbacks=[se]:ue.push(se))}else ue={lane:se,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_e===null?(ne=_e=ue,B=ye):_e=_e.next=ue,b|=se;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,f.lastBaseUpdate=ue,f.shared.pending=null}}while(!0);_e===null&&(B=ye),f.baseState=B,f.firstBaseUpdate=ne,f.lastBaseUpdate=_e,h===null&&(f.shared.lanes=0),rs|=b,t.lanes=b,t.memoizedState=ye}}function qm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Ym(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)qm(s[t],i)}var Ur=D(null),Ac=D(0);function $m(t,i){t=Aa,Se(Ac,t),Se(Ur,i),Aa=t|i.baseLanes}function nd(){Se(Ac,Aa),Se(Ur,Ur.current)}function id(){Aa=Ac.current,ie(Ur),ie(Ac)}var mi=D(null),Oi=null;function ns(t){var i=t.alternate;Se(pn,pn.current&1),Se(mi,t),Oi===null&&(i===null||Ur.current!==null||i.memoizedState!==null)&&(Oi=t)}function ad(t){Se(pn,pn.current),Se(mi,t),Oi===null&&(Oi=t)}function Zm(t){t.tag===22?(Se(pn,pn.current),Se(mi,t),Oi===null&&(Oi=t)):is()}function is(){Se(pn,pn.current),Se(mi,mi.current)}function gi(t){ie(mi),Oi===t&&(Oi=null),ie(pn)}var pn=D(0);function Rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||uh(s)||fh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xa=0,xt=null,Yt=null,Sn=null,wc=!1,Lr=!1,Ws=!1,Cc=0,Ko=0,Nr=null,$1=0;function cn(){throw Error(a(321))}function sd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!hi(t[s],i[s]))return!1;return!0}function rd(t,i,s,l,f,h){return xa=h,xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?Lg:yd,Ws=!1,h=s(l,f),Ws=!1,Lr&&(h=Qm(i,s,l,f)),Km(t),h}function Km(t){P.H=el;var i=Yt!==null&&Yt.next!==null;if(xa=0,Sn=Yt=xt=null,wc=!1,Ko=0,Nr=null,i)throw Error(a(300));t===null||Mn||(t=t.dependencies,t!==null&&vc(t)&&(Mn=!0))}function Qm(t,i,s,l){xt=t;var f=0;do{if(Lr&&(Nr=null),Ko=0,Lr=!1,25<=f)throw Error(a(301));if(f+=1,Sn=Yt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Ng,h=i(s,l)}while(Lr);return h}function Z1(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?Qo(i):i,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(xt.flags|=1024),i}function od(){var t=Cc!==0;return Cc=0,t}function ld(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function cd(t){if(wc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}wc=!1}xa=0,Sn=Yt=xt=null,Lr=!1,Ko=Cc=0,Nr=null}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?xt.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function mn(){if(Yt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var i=Sn===null?xt.memoizedState:Sn.next;if(i!==null)Sn=i,Yt=t;else{if(t===null)throw xt.alternate===null?Error(a(467)):Error(a(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Sn===null?xt.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(t){var i=Ko;return Ko+=1,Nr===null&&(Nr=[]),t=Vm(Nr,t,i),i=xt,(Sn===null?i.memoizedState:Sn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Lg:yd),t}function Oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qo(t);if(t.$$typeof===U)return kn(t)}throw Error(a(438,String(t)))}function ud(t){var i=null,s=xt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=xt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Dc(),xt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function va(t,i){return typeof i=="function"?i(t):i}function Uc(t){var i=mn();return fd(i,Yt,t)}function fd(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var A=b=null,B=null,ne=i,_e=!1;do{var ye=ne.lane&-536870913;if(ye!==ne.lane?(Ct&ye)===ye:(xa&ye)===ye){var se=ne.revertLane;if(se===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ye===wr&&(_e=!0);else if((xa&se)===se){ne=ne.next,se===wr&&(_e=!0);continue}else ye={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(A=B=ye,b=h):B=B.next=ye,xt.lanes|=se,rs|=se;ye=ne.action,Ws&&s(h,ye),h=ne.hasEagerState?ne.eagerState:s(h,ye)}else se={lane:ye,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(A=B=se,b=h):B=B.next=se,xt.lanes|=ye,rs|=ye;ne=ne.next}while(ne!==null&&ne!==i);if(B===null?b=h:B.next=A,!hi(h,t.memoizedState)&&(Mn=!0,_e&&(s=Cr,s!==null)))throw s;t.memoizedState=h,t.baseState=b,t.baseQueue=B,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function dd(t){var i=mn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);hi(h,i.memoizedState)||(Mn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Jm(t,i,s){var l=xt,f=mn(),h=Ut;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!hi((Yt||f).memoizedState,s);if(b&&(f.memoizedState=s,Mn=!0),f=f.queue,md(ng.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,Pr(9,{destroy:void 0},tg.bind(null,l,f,s,i),null),Qt===null)throw Error(a(349));h||(xa&127)!==0||eg(l,i,s)}return s}function eg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=xt.updateQueue,i===null?(i=Dc(),xt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function tg(t,i,s,l){i.value=s,i.getSnapshot=l,ig(i)&&ag(t)}function ng(t,i,s){return s(function(){ig(i)&&ag(t)})}function ig(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!hi(t,s)}catch{return!0}}function ag(t){var i=Is(t,2);i!==null&&ri(i,t,2)}function hd(t){var i=Jn();if(typeof t=="function"){var s=t;if(t=s(),Ws){et(!0);try{s()}finally{et(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},i}function sg(t,i,s,l){return t.baseState=s,fd(t,Yt,typeof l=="function"?l:va)}function K1(t,i,s,l,f){if(Pc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};P.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,rg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function rg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=P.T,b={};P.T=b;try{var A=s(f,l),B=P.S;B!==null&&B(b,A),og(t,i,A)}catch(ne){pd(t,i,ne)}finally{h!==null&&b.types!==null&&(h.types=b.types),P.T=h}}else try{h=s(f,l),og(t,i,h)}catch(ne){pd(t,i,ne)}}function og(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){lg(t,i,l)},function(l){return pd(t,i,l)}):lg(t,i,s)}function lg(t,i,s){i.status="fulfilled",i.value=s,cg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,rg(t,s)))}function pd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,cg(i),i=i.next;while(i!==l)}t.action=null}function cg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ug(t,i){return i}function fg(t,i){if(Ut){var s=Qt.formState;if(s!==null){e:{var l=xt;if(Ut){if(en){t:{for(var f=en,h=Di;f.nodeType!==8;){if(!h){f=null;break t}if(f=Ui(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){en=Ui(f.nextSibling),l=f.data==="F!";break e}}Ka(l)}l=!1}l&&(i=s[0])}}return s=Jn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ug,lastRenderedState:i},s.queue=l,s=Dg.bind(null,xt,l),l.dispatch=s,l=hd(!1),h=bd.bind(null,xt,!1,l.queue),l=Jn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=K1.bind(null,xt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function dg(t){var i=mn();return hg(i,Yt,t)}function hg(t,i,s){if(i=fd(t,i,ug)[0],t=Uc(va)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(b){throw b===Dr?Sc:b}else l=i;i=mn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(xt.flags|=2048,Pr(9,{destroy:void 0},Q1.bind(null,f,s),null)),[l,h,t]}function Q1(t,i){t.action=i}function pg(t){var i=mn(),s=Yt;if(s!==null)return hg(i,s,t);mn(),i=i.memoizedState,s=mn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Pr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=xt.updateQueue,i===null&&(i=Dc(),xt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function mg(){return mn().memoizedState}function Lc(t,i,s,l){var f=Jn();xt.flags|=t,f.memoizedState=Pr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Nc(t,i,s,l){var f=mn();l=l===void 0?null:l;var h=f.memoizedState.inst;Yt!==null&&l!==null&&sd(l,Yt.memoizedState.deps)?f.memoizedState=Pr(i,h,s,l):(xt.flags|=t,f.memoizedState=Pr(1|i,h,s,l))}function gg(t,i){Lc(8390656,8,t,i)}function md(t,i){Nc(2048,8,t,i)}function J1(t){xt.flags|=4;var i=xt.updateQueue;if(i===null)i=Dc(),xt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function _g(t){var i=mn().memoizedState;return J1({ref:i,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function xg(t,i){return Nc(4,2,t,i)}function vg(t,i){return Nc(4,4,t,i)}function bg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function yg(t,i,s){s=s!=null?s.concat([t]):null,Nc(4,4,bg.bind(null,i,t),s)}function gd(){}function Sg(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&sd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Mg(t,i){var s=mn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&sd(i,l[1]))return l[0];if(l=t(),Ws){et(!0);try{t()}finally{et(!1)}}return s.memoizedState=[l,i],l}function _d(t,i,s){return s===void 0||(xa&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=E_(),xt.lanes|=t,rs|=t,s)}function Eg(t,i,s,l){return hi(s,i)?s:Ur.current!==null?(t=_d(t,s,l),hi(t,i)||(Mn=!0),t):(xa&42)===0||(xa&1073741824)!==0&&(Ct&261930)===0?(Mn=!0,t.memoizedState=s):(t=E_(),xt.lanes|=t,rs|=t,i)}function Tg(t,i,s,l,f){var h=W.p;W.p=h!==0&&8>h?h:8;var b=P.T,A={};P.T=A,bd(t,!1,i,s);try{var B=f(),ne=P.S;if(ne!==null&&ne(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var _e=Y1(B,l);Jo(t,i,_e,vi(t))}else Jo(t,i,l,vi(t))}catch(ye){Jo(t,i,{then:function(){},status:"rejected",reason:ye},vi())}finally{W.p=h,b!==null&&A.types!==null&&(b.types=A.types),P.T=b}}function eb(){}function xd(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Ag(t).queue;Tg(t,f,i,q,s===null?eb:function(){return Rg(t),s(l)})}function Ag(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Rg(t){var i=Ag(t);i.next===null&&(i=t.alternate.memoizedState),Jo(t,i.next.queue,{},vi())}function vd(){return kn(gl)}function wg(){return mn().memoizedState}function Cg(){return mn().memoizedState}function tb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=vi();t=es(s);var l=ts(i,t,s);l!==null&&(ri(l,i,s),Yo(l,i,s)),i={cache:Yf()},t.payload=i;return}i=i.return}}function nb(t,i,s){var l=vi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pc(t)?Og(i,s):(s=If(t,i,s,l),s!==null&&(ri(s,t,l),Ug(s,i,l)))}function Dg(t,i,s){var l=vi();Jo(t,i,s,l)}function Jo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Pc(t))Og(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,A=h(b,s);if(f.hasEagerState=!0,f.eagerState=A,hi(A,b))return mc(t,i,f,0),Qt===null&&pc(),!1}catch{}finally{}if(s=If(t,i,f,l),s!==null)return ri(s,t,l),Ug(s,i,l),!0}return!1}function bd(t,i,s,l){if(l={lane:2,revertLane:Qd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(t)){if(i)throw Error(a(479))}else i=If(t,s,l,2),i!==null&&ri(i,t,2)}function Pc(t){var i=t.alternate;return t===xt||i!==null&&i===xt}function Og(t,i){Lr=wc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Ug(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ua(t,s)}}var el={readContext:kn,use:Oc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};el.useEffectEvent=cn;var Lg={readContext:kn,use:Oc,useCallback:function(t,i){return Jn().memoizedState=[t,i===void 0?null:i],t},useContext:kn,useEffect:gg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Lc(4194308,4,bg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Lc(4194308,4,t,i)},useInsertionEffect:function(t,i){Lc(4,2,t,i)},useMemo:function(t,i){var s=Jn();i=i===void 0?null:i;var l=t();if(Ws){et(!0);try{t()}finally{et(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Jn();if(s!==void 0){var f=s(i);if(Ws){et(!0);try{s(i)}finally{et(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=nb.bind(null,xt,t),[l.memoizedState,t]},useRef:function(t){var i=Jn();return t={current:t},i.memoizedState=t},useState:function(t){t=hd(t);var i=t.queue,s=Dg.bind(null,xt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:gd,useDeferredValue:function(t,i){var s=Jn();return _d(s,t,i)},useTransition:function(){var t=hd(!1);return t=Tg.bind(null,xt,t.queue,!0,!1),Jn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=xt,f=Jn();if(Ut){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Qt===null)throw Error(a(349));(Ct&127)!==0||eg(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,gg(ng.bind(null,l,h,t),[t]),l.flags|=2048,Pr(9,{destroy:void 0},tg.bind(null,l,h,s,i),null),s},useId:function(){var t=Jn(),i=Qt.identifierPrefix;if(Ut){var s=ia,l=na;s=(l&~(1<<32-ke(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Cc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=$1++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:vd,useFormState:fg,useActionState:fg,useOptimistic:function(t){var i=Jn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=bd.bind(null,xt,!0,s),s.dispatch=i,[t,i]},useMemoCache:ud,useCacheRefresh:function(){return Jn().memoizedState=tb.bind(null,xt)},useEffectEvent:function(t){var i=Jn(),s={impl:t};return i.memoizedState=s,function(){if((Ht&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},yd={readContext:kn,use:Oc,useCallback:Sg,useContext:kn,useEffect:md,useImperativeHandle:yg,useInsertionEffect:xg,useLayoutEffect:vg,useMemo:Mg,useReducer:Uc,useRef:mg,useState:function(){return Uc(va)},useDebugValue:gd,useDeferredValue:function(t,i){var s=mn();return Eg(s,Yt.memoizedState,t,i)},useTransition:function(){var t=Uc(va)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Jm,useId:wg,useHostTransitionStatus:vd,useFormState:dg,useActionState:dg,useOptimistic:function(t,i){var s=mn();return sg(s,Yt,t,i)},useMemoCache:ud,useCacheRefresh:Cg};yd.useEffectEvent=_g;var Ng={readContext:kn,use:Oc,useCallback:Sg,useContext:kn,useEffect:md,useImperativeHandle:yg,useInsertionEffect:xg,useLayoutEffect:vg,useMemo:Mg,useReducer:dd,useRef:mg,useState:function(){return dd(va)},useDebugValue:gd,useDeferredValue:function(t,i){var s=mn();return Yt===null?_d(s,t,i):Eg(s,Yt.memoizedState,t,i)},useTransition:function(){var t=dd(va)[0],i=mn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Jm,useId:wg,useHostTransitionStatus:vd,useFormState:pg,useActionState:pg,useOptimistic:function(t,i){var s=mn();return Yt!==null?sg(s,Yt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ud,useCacheRefresh:Cg};Ng.useEffectEvent=_g;function Sd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Md={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=vi(),f=es(l);f.payload=i,s!=null&&(f.callback=s),i=ts(t,f,l),i!==null&&(ri(i,t,l),Yo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=vi(),f=es(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ts(t,f,l),i!==null&&(ri(i,t,l),Yo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=vi(),l=es(s);l.tag=2,i!=null&&(l.callback=i),i=ts(t,l,s),i!==null&&(ri(i,t,s),Yo(i,t,s))}};function Pg(t,i,s,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,h):!0}function zg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Md.enqueueReplaceState(i,i.state,null)}function qs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Ig(t){hc(t)}function Fg(t){console.error(t)}function Bg(t){hc(t)}function zc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Hg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ed(t,i,s){return s=es(s),s.tag=3,s.payload={element:null},s.callback=function(){zc(t,i)},s}function Gg(t){return t=es(t),t.tag=3,t}function Vg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){Hg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Hg(i,s,l),typeof f!="function"&&(os===null?os=new Set([this]):os.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function ib(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Rr(i,s,f,!0),s=mi.current,s!==null){switch(s.tag){case 31:case 13:return Oi===null?Yc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),$d(t,l,f)),!1;case 22:return s.flags|=65536,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),$d(t,l,f)),!1}throw Error(a(435,s.tag))}return $d(t,l,f),Yc(),!1}if(Ut)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==jf&&(t=Error(a(422),{cause:l}),jo(Ri(t,s)))):(l!==jf&&(i=Error(a(423),{cause:l}),jo(Ri(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ri(l,s),f=Ed(t.stateNode,l,f),ed(t,f),un!==4&&(un=2)),!1;var h=Error(a(520),{cause:l});if(h=Ri(h,s),ll===null?ll=[h]:ll.push(h),un!==4&&(un=2),i===null)return!0;l=Ri(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Ed(s.stateNode,l,t),ed(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(os===null||!os.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Gg(f),Vg(f,t,s,l),ed(s,f),!1}s=s.return}while(s!==null);return!1}var Td=Error(a(461)),Mn=!1;function Xn(t,i,s,l){i.child=t===null?Wm(i,null,s,l):Xs(i,t.child,s,l)}function jg(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var b={};for(var A in l)A!=="ref"&&(b[A]=l[A])}else b=l;return Gs(i),l=rd(t,i,s,b,h,f),A=od(),t!==null&&!Mn?(ld(t,i,f),ba(t,i,f)):(Ut&&A&&Gf(i),i.flags|=1,Xn(t,i,l,f),i.child)}function kg(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!Ff(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,Xg(t,i,h,l,f)):(t=_c(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Ld(t,f)){var b=h.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(b,l)&&t.ref===i.ref)return ba(t,i,f)}return i.flags|=1,t=pa(h,l),t.ref=i.ref,t.return=i,i.child=t}function Xg(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Ho(h,l)&&t.ref===i.ref)if(Mn=!1,i.pendingProps=l=h,Ld(t,f))(t.flags&131072)!==0&&(Mn=!0);else return i.lanes=t.lanes,ba(t,i,f)}return Ad(t,i,s,l,f)}function Wg(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return qg(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&yc(i,h!==null?h.cachePool:null),h!==null?$m(i,h):nd(),Zm(i);else return l=i.lanes=536870912,qg(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(yc(i,h.cachePool),$m(i,h),is(),i.memoizedState=null):(t!==null&&yc(i,null),nd(),is());return Xn(t,i,f,s),i.child}function tl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function qg(t,i,s,l,f){var h=Zf();return h=h===null?null:{parent:yn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&yc(i,null),nd(),Zm(i),t!==null&&Rr(t,i,l,!0),i.childLanes=f,null}function Ic(t,i){return i=Bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Yg(t,i,s){return Xs(i,t.child,null,s),t=Ic(i,i.pendingProps),t.flags|=2,gi(i),i.memoizedState=null,t}function ab(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ut){if(l.mode==="hidden")return t=Ic(i,l),i.lanes=536870912,tl(null,t);if(ad(i),(t=en)?(t=rx(t,Di),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:$a!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=Om(t),s.return=i,i.child=s,jn=i,en=null)):t=null,t===null)throw Ka(i);return i.lanes=536870912,null}return Ic(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(ad(i),f)if(i.flags&256)i.flags&=-257,i=Yg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Mn||Rr(t,i,s,!1),f=(s&t.childLanes)!==0,Mn||f){if(l=Qt,l!==null&&(b=Os(l,s),b!==0&&b!==h.retryLane))throw h.retryLane=b,Is(t,b),ri(l,t,b),Td;Yc(),i=Yg(t,i,s)}else t=h.treeContext,en=Ui(b.nextSibling),jn=i,Ut=!0,Za=null,Di=!1,t!==null&&Nm(i,t),i=Ic(i,l),i.flags|=4096;return i}return t=pa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Fc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Ad(t,i,s,l,f){return Gs(i),s=rd(t,i,s,l,void 0,f),l=od(),t!==null&&!Mn?(ld(t,i,f),ba(t,i,f)):(Ut&&l&&Gf(i),i.flags|=1,Xn(t,i,s,f),i.child)}function $g(t,i,s,l,f,h){return Gs(i),i.updateQueue=null,s=Qm(i,l,s,f),Km(t),l=od(),t!==null&&!Mn?(ld(t,i,h),ba(t,i,h)):(Ut&&l&&Gf(i),i.flags|=1,Xn(t,i,s,h),i.child)}function Zg(t,i,s,l,f){if(Gs(i),i.stateNode===null){var h=Mr,b=s.contextType;typeof b=="object"&&b!==null&&(h=kn(b)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Md,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},Qf(i),b=s.contextType,h.context=typeof b=="object"&&b!==null?kn(b):Mr,h.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Sd(i,s,b,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&Md.enqueueReplaceState(h,h.state,null),Zo(i,l,h,f),$o(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var A=i.memoizedProps,B=qs(s,A);h.props=B;var ne=h.context,_e=s.contextType;b=Mr,typeof _e=="object"&&_e!==null&&(b=kn(_e));var ye=s.getDerivedStateFromProps;_e=typeof ye=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,_e||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||ne!==b)&&zg(i,h,l,b),Ja=!1;var se=i.memoizedState;h.state=se,Zo(i,l,h,f),$o(),ne=i.memoizedState,A||se!==ne||Ja?(typeof ye=="function"&&(Sd(i,s,ye,l),ne=i.memoizedState),(B=Ja||Pg(i,s,B,l,se,ne,b))?(_e||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),h.props=l,h.state=ne,h.context=b,l=B):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,Jf(t,i),b=i.memoizedProps,_e=qs(s,b),h.props=_e,ye=i.pendingProps,se=h.context,ne=s.contextType,B=Mr,typeof ne=="object"&&ne!==null&&(B=kn(ne)),A=s.getDerivedStateFromProps,(ne=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==ye||se!==B)&&zg(i,h,l,B),Ja=!1,se=i.memoizedState,h.state=se,Zo(i,l,h,f),$o();var ue=i.memoizedState;b!==ye||se!==ue||Ja||t!==null&&t.dependencies!==null&&vc(t.dependencies)?(typeof A=="function"&&(Sd(i,s,A,l),ue=i.memoizedState),(_e=Ja||Pg(i,s,_e,l,se,ue,B)||t!==null&&t.dependencies!==null&&vc(t.dependencies))?(ne||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,ue,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,ue,B)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ue),h.props=l,h.state=ue,h.context=B,l=_e):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Fc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Xs(i,t.child,null,f),i.child=Xs(i,null,s,f)):Xn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=ba(t,i,f),t}function Kg(t,i,s,l){return Bs(),i.flags|=256,Xn(t,i,s,l),i.child}var Rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wd(t){return{baseLanes:t,cachePool:Hm()}}function Cd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=xi),t}function Qg(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ut){if(f?ns(i):is(),(t=en)?(t=rx(t,Di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:$a!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=Om(t),s.return=i,i.child=s,jn=i,en=null)):t=null,t===null)throw Ka(i);return fh(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(is(),f=i.mode,A=Bc({mode:"hidden",children:A},f),l=Fs(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=wd(s),l.childLanes=Cd(t,b,s),i.memoizedState=Rd,tl(null,l)):(ns(i),Dd(i,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(h)i.flags&256?(ns(i),i.flags&=-257,i=Od(t,i,s)):i.memoizedState!==null?(is(),i.child=t.child,i.flags|=128,i=null):(is(),A=l.fallback,f=i.mode,l=Bc({mode:"visible",children:l.children},f),A=Fs(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Xs(i,t.child,null,s),l=i.child,l.memoizedState=wd(s),l.childLanes=Cd(t,b,s),i.memoizedState=Rd,i=tl(null,l));else if(ns(i),fh(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var ne=b.dgst;b=ne,l=Error(a(419)),l.stack="",l.digest=b,jo({value:l,source:null,stack:null}),i=Od(t,i,s)}else if(Mn||Rr(t,i,s,!1),b=(s&t.childLanes)!==0,Mn||b){if(b=Qt,b!==null&&(l=Os(b,s),l!==0&&l!==B.retryLane))throw B.retryLane=l,Is(t,l),ri(b,t,l),Td;uh(A)||Yc(),i=Od(t,i,s)}else uh(A)?(i.flags|=192,i.child=t.child,i=null):(t=B.treeContext,en=Ui(A.nextSibling),jn=i,Ut=!0,Za=null,Di=!1,t!==null&&Nm(i,t),i=Dd(i,l.children),i.flags|=4096);return i}return f?(is(),A=l.fallback,f=i.mode,B=t.child,ne=B.sibling,l=pa(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,ne!==null?A=pa(ne,A):(A=Fs(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,tl(null,l),l=i.child,A=t.child.memoizedState,A===null?A=wd(s):(f=A.cachePool,f!==null?(B=yn._currentValue,f=f.parent!==B?{parent:B,pool:B}:f):f=Hm(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=Cd(t,b,s),i.memoizedState=Rd,tl(t.child,l)):(ns(i),s=t.child,t=s.sibling,s=pa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function Dd(t,i){return i=Bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Bc(t,i){return t=pi(22,t,null,i),t.lanes=0,t}function Od(t,i,s){return Xs(i,t.child,null,s),t=Dd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Jg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Wf(t.return,i,s)}function Ud(t,i,s,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=h)}function e_(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=pn.current,A=(b&2)!==0;if(A?(b=b&1|2,i.flags|=128):b&=1,Se(pn,b),Xn(t,i,l,s),l=Ut?Vo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jg(t,s,i);else if(t.tag===19)Jg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Ud(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Rc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Ud(i,!0,s,null,h,l);break;case"together":Ud(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ba(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),rs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Rr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=pa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=pa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ld(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&vc(t)))}function sb(t,i,s){switch(i.tag){case 3:Ne(i,i.stateNode.containerInfo),Qa(i,yn,t.memoizedState.cache),Bs();break;case 27:case 5:He(i);break;case 4:Ne(i,i.stateNode.containerInfo);break;case 10:Qa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ad(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ns(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Qg(t,i,s):(ns(i),t=ba(t,i,s),t!==null?t.sibling:null);ns(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Rr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return e_(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(pn,pn.current),l)break;return null;case 22:return i.lanes=0,Wg(t,i,s,i.pendingProps);case 24:Qa(i,yn,t.memoizedState.cache)}return ba(t,i,s)}function t_(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Mn=!0;else{if(!Ld(t,s)&&(i.flags&128)===0)return Mn=!1,sb(t,i,s);Mn=(t.flags&131072)!==0}else Mn=!1,Ut&&(i.flags&1048576)!==0&&Lm(i,Vo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=js(i.elementType),i.type=t,typeof t=="function")Ff(t)?(l=qs(t,l),i.tag=1,i=Zg(null,i,t,l,s)):(i.tag=0,i=Ad(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===I){i.tag=11,i=jg(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=kg(null,i,t,l,s);break e}}throw i=xe(t)||t,Error(a(306,i,""))}}return i;case 0:return Ad(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=qs(l,i.pendingProps),Zg(t,i,l,f,s);case 3:e:{if(Ne(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,Jf(t,i),Zo(i,l,null,s);var b=i.memoizedState;if(l=b.cache,Qa(i,yn,l),l!==h.cache&&qf(i,[yn],s,!0),$o(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Kg(t,i,l,s);break e}else if(l!==f){f=Ri(Error(a(424)),i),jo(f),i=Kg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ui(t.firstChild),jn=i,Ut=!0,Za=null,Di=!0,s=Wm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Bs(),l===f){i=ba(t,i,s);break e}Xn(t,i,l,s)}i=i.child}return i;case 26:return Fc(t,i),t===null?(s=dx(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ut||(s=i.type,t=i.pendingProps,l=tu(ae.current).createElement(s),l[on]=i,l[ln]=t,Wn(l,s,t),$(l),i.stateNode=l):i.memoizedState=dx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return He(i),t===null&&Ut&&(l=i.stateNode=cx(i.type,i.pendingProps,ae.current),jn=i,Di=!0,f=en,fs(i.type)?(dh=f,en=Ui(l.firstChild)):en=f),Xn(t,i,i.pendingProps.children,s),Fc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ut&&((f=l=en)&&(l=Pb(l,i.type,i.pendingProps,Di),l!==null?(i.stateNode=l,jn=i,en=Ui(l.firstChild),Di=!1,f=!0):f=!1),f||Ka(i)),He(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,oh(f,h)?l=null:b!==null&&oh(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=rd(t,i,Z1,null,null,s),gl._currentValue=f),Fc(t,i),Xn(t,i,l,s),i.child;case 6:return t===null&&Ut&&((t=s=en)&&(s=zb(s,i.pendingProps,Di),s!==null?(i.stateNode=s,jn=i,en=null,t=!0):t=!1),t||Ka(i)),null;case 13:return Qg(t,i,s);case 4:return Ne(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Xs(i,null,l,s):Xn(t,i,l,s),i.child;case 11:return jg(t,i,i.type,i.pendingProps,s);case 7:return Xn(t,i,i.pendingProps,s),i.child;case 8:return Xn(t,i,i.pendingProps.children,s),i.child;case 12:return Xn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Qa(i,i.type,l.value),Xn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Gs(i),f=kn(f),l=l(f),i.flags|=1,Xn(t,i,l,s),i.child;case 14:return kg(t,i,i.type,i.pendingProps,s);case 15:return Xg(t,i,i.type,i.pendingProps,s);case 19:return e_(t,i,s);case 31:return ab(t,i,s);case 22:return Wg(t,i,s,i.pendingProps);case 24:return Gs(i),l=kn(yn),t===null?(f=Zf(),f===null&&(f=Qt,h=Yf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},Qf(i),Qa(i,yn,f)):((t.lanes&s)!==0&&(Jf(t,i),Zo(i,null,null,s),$o()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Qa(i,yn,l)):(l=h.cache,Qa(i,yn,l),l!==f.cache&&qf(i,[yn],s,!0))),Xn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ya(t){t.flags|=4}function Nd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(w_())t.flags|=8192;else throw ks=Mc,Kf}else t.flags&=-16777217}function n_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_x(i))if(w_())t.flags|=8192;else throw ks=Mc,Kf}function Hc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Et():536870912,t.lanes|=i,Br|=i)}function nl(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function tn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function rb(t,i,s){var l=i.pendingProps;switch(Vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return tn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),_a(yn),je(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ar(i)?ya(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kf())),tn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(ya(i),h!==null?(tn(i),n_(i,h)):(tn(i),Nd(i,f,null,l,s))):h?h!==t.memoizedState?(ya(i),tn(i),n_(i,h)):(tn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(i),tn(i),Nd(i,f,t,l,s)),null;case 27:if(st(i),s=ae.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}t=Te.current,Ar(i)?Pm(i):(t=cx(f,l,s),i.stateNode=t,ya(i))}return tn(i),null;case 5:if(st(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}if(h=Te.current,Ar(i))Pm(i);else{var b=tu(ae.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[on]=i,h[ln]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(Wn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(i)}}return tn(i),Nd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ae.current,Ar(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=jn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[on]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Q_(t.nodeValue,s)),t||Ka(i,!0)}else t=tu(t).createTextNode(l),t[on]=i,i.stateNode=t}return tn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ar(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[on]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),t=!1}else s=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(gi(i),i):(gi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return tn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ar(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[on]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),f=!1}else f=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(gi(i),i):(gi(i),null)}return gi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Hc(i,i.updateQueue),tn(i),null);case 4:return je(),t===null&&nh(i.stateNode.containerInfo),tn(i),null;case 10:return _a(i.type),tn(i),null;case 19:if(ie(pn),l=i.memoizedState,l===null)return tn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)nl(l,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Rc(t),h!==null){for(i.flags|=128,nl(l,!1),t=h.updateQueue,i.updateQueue=t,Hc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Dm(s,t),s=s.sibling;return Se(pn,pn.current&1|2),Ut&&ma(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&E()>Xc&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304)}else{if(!f)if(t=Rc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Hc(i,t),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Ut)return tn(i),null}else 2*E()-l.renderingStartTime>Xc&&s!==536870912&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=E(),t.sibling=null,s=pn.current,Se(pn,f?s&1|2:s&1),Ut&&ma(i,l.treeForkCount),t):(tn(i),null);case 22:case 23:return gi(i),id(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),s=i.updateQueue,s!==null&&Hc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ie(Vs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),_a(yn),tn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function ob(t,i){switch(Vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _a(yn),je(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return st(i),null;case 31:if(i.memoizedState!==null){if(gi(i),i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(gi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(pn),null;case 4:return je(),null;case 10:return _a(i.type),null;case 22:case 23:return gi(i),id(),t!==null&&ie(Vs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return _a(yn),null;case 25:return null;default:return null}}function i_(t,i){switch(Vf(i),i.tag){case 3:_a(yn),je();break;case 26:case 27:case 5:st(i);break;case 4:je();break;case 31:i.memoizedState!==null&&gi(i);break;case 13:gi(i);break;case 19:ie(pn);break;case 10:_a(i.type);break;case 22:case 23:gi(i),id(),t!==null&&ie(Vs);break;case 24:_a(yn)}}function il(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,b=s.inst;l=h(),b.destroy=l}s=s.next}while(s!==f)}}catch(A){Wt(i,i.return,A)}}function as(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,f=i;var B=s,ne=A;try{ne()}catch(_e){Wt(f,B,_e)}}}l=l.next}while(l!==h)}}catch(_e){Wt(i,i.return,_e)}}function a_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Ym(i,s)}catch(l){Wt(t,t.return,l)}}}function s_(t,i,s){s.props=qs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,i,l)}}function al(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Wt(t,i,f)}}function aa(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Wt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Wt(t,i,f)}else s.current=null}function r_(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Wt(t,t.return,f)}}function Pd(t,i,s){try{var l=t.stateNode;Cb(l,t.type,s,i),l[ln]=i}catch(f){Wt(t,t.return,f)}}function o_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&fs(t.type)||t.tag===4}function zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&fs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Id(t,i,s),t=t.sibling;t!==null;)Id(t,i,s),t=t.sibling}function Gc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&fs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Gc(t,i,s),t=t.sibling;t!==null;)Gc(t,i,s),t=t.sibling}function l_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Wn(i,l,s),i[on]=t,i[ln]=s}catch(h){Wt(t,t.return,h)}}var Sa=!1,En=!1,Fd=!1,c_=typeof WeakSet=="function"?WeakSet:Set,zn=null;function lb(t,i){if(t=t.containerInfo,sh=lu,t=ym(t),Of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var b=0,A=-1,B=-1,ne=0,_e=0,ye=t,se=null;t:for(;;){for(var ue;ye!==s||f!==0&&ye.nodeType!==3||(A=b+f),ye!==h||l!==0&&ye.nodeType!==3||(B=b+l),ye.nodeType===3&&(b+=ye.nodeValue.length),(ue=ye.firstChild)!==null;)se=ye,ye=ue;for(;;){if(ye===t)break t;if(se===s&&++ne===f&&(A=b),se===h&&++_e===l&&(B=b),(ue=ye.nextSibling)!==null)break;ye=se,se=ye.parentNode}ye=ue}s=A===-1||B===-1?null:{start:A,end:B}}else s=null}s=s||{start:0,end:0}}else s=null;for(rh={focusedElem:t,selectionRange:s},lu=!1,zn=i;zn!==null;)if(i=zn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,zn=t;else for(;zn!==null;){switch(i=zn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var qe=qs(s.type,f);t=l.getSnapshotBeforeUpdate(qe,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Wt(s,s.return,rt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)ch(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ch(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,zn=t;break}zn=i.return}}function u_(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ea(t,s),l&4&&il(5,s);break;case 1:if(Ea(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){Wt(s,s.return,b)}else{var f=qs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Wt(s,s.return,b)}}l&64&&a_(s),l&512&&al(s,s.return);break;case 3:if(Ea(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Ym(t,i)}catch(b){Wt(s,s.return,b)}}break;case 27:i===null&&l&4&&l_(s);case 26:case 5:Ea(t,s),i===null&&l&4&&r_(s),l&512&&al(s,s.return);break;case 12:Ea(t,s);break;case 31:Ea(t,s),l&4&&h_(t,s);break;case 13:Ea(t,s),l&4&&p_(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=_b.bind(null,s),Ib(t,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){i=i!==null&&i.memoizedState!==null||En,f=Sa;var h=En;Sa=l,(En=i)&&!h?Ta(t,s,(s.subtreeFlags&8772)!==0):Ea(t,s),Sa=f,En=h}break;case 30:break;default:Ea(t,s)}}function f_(t){var i=t.alternate;i!==null&&(t.alternate=null,f_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&qa(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,ni=!1;function Ma(t,i,s){for(s=s.child;s!==null;)d_(t,i,s),s=s.sibling}function d_(t,i,s){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ae,s)}catch{}switch(s.tag){case 26:En||aa(s,i),Ma(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:En||aa(s,i);var l=sn,f=ni;fs(s.type)&&(sn=s.stateNode,ni=!1),Ma(t,i,s),hl(s.stateNode),sn=l,ni=f;break;case 5:En||aa(s,i);case 6:if(l=sn,f=ni,sn=null,Ma(t,i,s),sn=l,ni=f,sn!==null)if(ni)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(s.stateNode)}catch(h){Wt(s,i,h)}else try{sn.removeChild(s.stateNode)}catch(h){Wt(s,i,h)}break;case 18:sn!==null&&(ni?(t=sn,ax(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),qr(t)):ax(sn,s.stateNode));break;case 4:l=sn,f=ni,sn=s.stateNode.containerInfo,ni=!0,Ma(t,i,s),sn=l,ni=f;break;case 0:case 11:case 14:case 15:as(2,s,i),En||as(4,s,i),Ma(t,i,s);break;case 1:En||(aa(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&s_(s,i,l)),Ma(t,i,s);break;case 21:Ma(t,i,s);break;case 22:En=(l=En)||s.memoizedState!==null,Ma(t,i,s),En=l;break;default:Ma(t,i,s)}}function h_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(s){Wt(i,i.return,s)}}}function p_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(s){Wt(i,i.return,s)}}function cb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new c_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new c_),i;default:throw Error(a(435,t.tag))}}function Vc(t,i){var s=cb(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=xb.bind(null,t,l);l.then(f,f)}})}function ii(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,b=i,A=b;e:for(;A!==null;){switch(A.tag){case 27:if(fs(A.type)){sn=A.stateNode,ni=!1;break e}break;case 5:sn=A.stateNode,ni=!1;break e;case 3:case 4:sn=A.stateNode.containerInfo,ni=!0;break e}A=A.return}if(sn===null)throw Error(a(160));d_(h,b,f),sn=null,ni=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)m_(i,t),i=i.sibling}var ji=null;function m_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ii(i,t),ai(t),l&4&&(as(3,t,t.return),il(3,t),as(5,t,t.return));break;case 1:ii(i,t),ai(t),l&512&&(En||s===null||aa(s,s.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=ji;if(ii(i,t),ai(t),l&512&&(En||s===null||aa(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[ea]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Wn(h,l,s),h[on]=t,$(h),l=h;break e;case"link":var b=mx("link","href",f).get(l+(s.href||""));if(b){for(var A=0;A<b.length;A++)if(h=b[A],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(A,1);break t}}h=f.createElement(l),Wn(h,l,s),f.head.appendChild(h);break;case"meta":if(b=mx("meta","content",f).get(l+(s.content||""))){for(A=0;A<b.length;A++)if(h=b[A],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(A,1);break t}}h=f.createElement(l),Wn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[on]=t,$(h),l=h}t.stateNode=l}else gx(f,t.type,t.stateNode);else t.stateNode=px(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?gx(f,t.type,t.stateNode):px(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Pd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ii(i,t),ai(t),l&512&&(En||s===null||aa(s,s.return)),s!==null&&l&4&&Pd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ii(i,t),ai(t),l&512&&(En||s===null||aa(s,s.return)),t.flags&32){f=t.stateNode;try{ta(f,"")}catch(qe){Wt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Pd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Fd=!0);break;case 6:if(ii(i,t),ai(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){Wt(t,t.return,qe)}}break;case 3:if(au=null,f=ji,ji=nu(i.containerInfo),ii(i,t),ji=f,ai(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qr(i.containerInfo)}catch(qe){Wt(t,t.return,qe)}Fd&&(Fd=!1,g_(t));break;case 4:l=ji,ji=nu(t.stateNode.containerInfo),ii(i,t),ai(t),ji=l;break;case 12:ii(i,t),ai(t);break;case 31:ii(i,t),ai(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 13:ii(i,t),ai(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kc=E()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 22:f=t.memoizedState!==null;var B=s!==null&&s.memoizedState!==null,ne=Sa,_e=En;if(Sa=ne||f,En=_e||B,ii(i,t),En=_e,Sa=ne,ai(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||B||Sa||En||Ys(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){B=s=i;try{if(h=B.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=B.stateNode;var ye=B.memoizedProps.style,se=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;A.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(qe){Wt(B,B.return,qe)}}}else if(i.tag===6){if(s===null){B=i;try{B.stateNode.nodeValue=f?"":B.memoizedProps}catch(qe){Wt(B,B.return,qe)}}}else if(i.tag===18){if(s===null){B=i;try{var ue=B.stateNode;f?sx(ue,!0):sx(B.stateNode,!1)}catch(qe){Wt(B,B.return,qe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Vc(t,s))));break;case 19:ii(i,t),ai(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 30:break;case 21:break;default:ii(i,t),ai(t)}}function ai(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(o_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=zd(t);Gc(t,h,f);break;case 5:var b=s.stateNode;s.flags&32&&(ta(b,""),s.flags&=-33);var A=zd(t);Gc(t,A,b);break;case 3:case 4:var B=s.stateNode.containerInfo,ne=zd(t);Id(t,ne,B);break;default:throw Error(a(161))}}catch(_e){Wt(t,t.return,_e)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function g_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;g_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ea(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)u_(t,i.alternate,i),i=i.sibling}function Ys(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:as(4,i,i.return),Ys(i);break;case 1:aa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&s_(i,i.return,s),Ys(i);break;case 27:hl(i.stateNode);case 26:case 5:aa(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}t=t.sibling}}function Ta(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:Ta(f,h,s),il(4,h);break;case 1:if(Ta(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ne){Wt(l,l.return,ne)}if(l=h,f=l.updateQueue,f!==null){var A=l.stateNode;try{var B=f.shared.hiddenCallbacks;if(B!==null)for(f.shared.hiddenCallbacks=null,f=0;f<B.length;f++)qm(B[f],A)}catch(ne){Wt(l,l.return,ne)}}s&&b&64&&a_(h),al(h,h.return);break;case 27:l_(h);case 26:case 5:Ta(f,h,s),s&&l===null&&b&4&&r_(h),al(h,h.return);break;case 12:Ta(f,h,s);break;case 31:Ta(f,h,s),s&&b&4&&h_(f,h);break;case 13:Ta(f,h,s),s&&b&4&&p_(f,h);break;case 22:h.memoizedState===null&&Ta(f,h,s),al(h,h.return);break;case 30:break;default:Ta(f,h,s)}i=i.sibling}}function Bd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&ko(s))}function Hd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t))}function ki(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)__(t,i,s,l),i=i.sibling}function __(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:ki(t,i,s,l),f&2048&&il(9,i);break;case 1:ki(t,i,s,l);break;case 3:ki(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t)));break;case 12:if(f&2048){ki(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,A=h.onPostCommit;typeof A=="function"&&A(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Wt(i,i.return,B)}}else ki(t,i,s,l);break;case 31:ki(t,i,s,l);break;case 13:ki(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?ki(t,i,s,l):sl(t,i):h._visibility&2?ki(t,i,s,l):(h._visibility|=2,zr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Bd(b,i);break;case 24:ki(t,i,s,l),f&2048&&Hd(i.alternate,i);break;default:ki(t,i,s,l)}}function zr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,A=s,B=l,ne=b.flags;switch(b.tag){case 0:case 11:case 15:zr(h,b,A,B,f),il(8,b);break;case 23:break;case 22:var _e=b.stateNode;b.memoizedState!==null?_e._visibility&2?zr(h,b,A,B,f):sl(h,b):(_e._visibility|=2,zr(h,b,A,B,f)),f&&ne&2048&&Bd(b.alternate,b);break;case 24:zr(h,b,A,B,f),f&&ne&2048&&Hd(b.alternate,b);break;default:zr(h,b,A,B,f)}i=i.sibling}}function sl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&Bd(l.alternate,l);break;case 24:sl(s,l),f&2048&&Hd(l.alternate,l);break;default:sl(s,l)}i=i.sibling}}var rl=8192;function Ir(t,i,s){if(t.subtreeFlags&rl)for(t=t.child;t!==null;)x_(t,i,s),t=t.sibling}function x_(t,i,s){switch(t.tag){case 26:Ir(t,i,s),t.flags&rl&&t.memoizedState!==null&&$b(s,ji,t.memoizedState,t.memoizedProps);break;case 5:Ir(t,i,s);break;case 3:case 4:var l=ji;ji=nu(t.stateNode.containerInfo),Ir(t,i,s),ji=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,Ir(t,i,s),rl=l):Ir(t,i,s));break;default:Ir(t,i,s)}}function v_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ol(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];zn=l,y_(l,t)}v_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)b_(t),t=t.sibling}function b_(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&as(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,jc(t)):ol(t);break;default:ol(t)}}function jc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];zn=l,y_(l,t)}v_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:as(8,i,i.return),jc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,jc(i));break;default:jc(i)}t=t.sibling}}function y_(t,i){for(;zn!==null;){var s=zn;switch(s.tag){case 0:case 11:case 15:as(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ko(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,zn=l;else e:for(s=t;zn!==null;){l=zn;var f=l.sibling,h=l.return;if(f_(l),l===s){zn=null;break e}if(f!==null){f.return=h,zn=f;break e}zn=h}}}var ub={getCacheForType:function(t){var i=kn(yn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return kn(yn).controller.signal}},fb=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Qt=null,Tt=null,Ct=0,Xt=0,_i=null,ss=!1,Fr=!1,Gd=!1,Aa=0,un=0,rs=0,$s=0,Vd=0,xi=0,Br=0,ll=null,si=null,jd=!1,kc=0,S_=0,Xc=1/0,Wc=null,os=null,wn=0,ls=null,Hr=null,Ra=0,kd=0,Xd=null,M_=null,cl=0,Wd=null;function vi(){return(Ht&2)!==0&&Ct!==0?Ct&-Ct:P.T!==null?Qd():Us()}function E_(){if(xi===0)if((Ct&536870912)===0||Ut){var t=De;De<<=1,(De&3932160)===0&&(De=262144),xi=t}else xi=536870912;return t=mi.current,t!==null&&(t.flags|=32),xi}function ri(t,i,s){(t===Qt&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(Gr(t,0),cs(t,Ct,xi,!1)),hn(t,s),((Ht&2)===0||t!==Qt)&&(t===Qt&&((Ht&2)===0&&($s|=s),un===4&&cs(t,Ct,xi,!1)),sa(t))}function T_(t,i,s){if((Ht&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Fe(t,i),f=l?pb(t,i):Yd(t,i,!0),h=l;do{if(f===0){Fr&&!l&&cs(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!db(s)){f=Yd(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var A=t;f=ll;var B=A.current.memoizedState.isDehydrated;if(B&&(Gr(A,b).flags|=256),b=Yd(A,b,!1),b!==2){if(Gd&&!B){A.errorRecoveryDisabledLanes|=h,$s|=h,f=4;break e}h=si,si=f,h!==null&&(si===null?si=h:si.push.apply(si,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){Gr(t,0),cs(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:cs(l,i,xi,!ss);break e;case 2:si=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=kc+300-E(),10<f)){if(cs(l,i,xi,!ss),ge(l,0,!0)!==0)break e;Ra=i,l.timeoutHandle=nx(A_.bind(null,l,s,si,Wc,jd,i,xi,$s,Br,ss,h,"Throttled",-0,0),f);break e}A_(l,s,si,Wc,jd,i,xi,$s,Br,ss,h,null,-0,0)}}break}while(!0);sa(t)}function A_(t,i,s,l,f,h,b,A,B,ne,_e,ye,se,ue){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},x_(i,h,ye);var qe=(h&62914560)===h?kc-E():(h&4194048)===h?S_-E():0;if(qe=Zb(ye,qe),qe!==null){Ra=h,t.cancelPendingCommit=qe(N_.bind(null,t,i,h,s,l,f,b,A,B,_e,ye,null,se,ue)),cs(t,h,b,!ne);return}}N_(t,i,h,s,l,f,b,A,B)}function db(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!hi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cs(t,i,s,l){i&=~Vd,i&=~$s,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-ke(f),b=1<<h;l[h]=-1,f&=~b}s!==0&&Xa(t,s,i)}function qc(){return(Ht&6)===0?(ul(0),!1):!0}function qd(){if(Tt!==null){if(Xt===0)var t=Tt.return;else t=Tt,ga=Hs=null,cd(t),Or=null,Wo=0,t=Tt;for(;t!==null;)i_(t.alternate,t),t=t.return;Tt=null}}function Gr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Ub(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ra=0,qd(),Qt=t,Tt=s=pa(t.current,null),Ct=i,Xt=0,_i=null,ss=!1,Fr=Fe(t,i),Gd=!1,Br=xi=Vd=$s=rs=un=0,si=ll=null,jd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ke(l),h=1<<f;i|=t[f],l&=~h}return Aa=i,pc(),s}function R_(t,i){xt=null,P.H=el,i===Dr||i===Sc?(i=jm(),Xt=3):i===Kf?(i=jm(),Xt=4):Xt=i===Td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,_i=i,Tt===null&&(un=1,zc(t,Ri(i,t.current)))}function w_(){var t=mi.current;return t===null?!0:(Ct&4194048)===Ct?Oi===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===Oi:!1}function C_(){var t=P.H;return P.H=el,t===null?el:t}function D_(){var t=P.A;return P.A=ub,t}function Yc(){un=4,ss||(Ct&4194048)!==Ct&&mi.current!==null||(Fr=!0),(rs&134217727)===0&&($s&134217727)===0||Qt===null||cs(Qt,Ct,xi,!1)}function Yd(t,i,s){var l=Ht;Ht|=2;var f=C_(),h=D_();(Qt!==t||Ct!==i)&&(Wc=null,Gr(t,i)),i=!1;var b=un;e:do try{if(Xt!==0&&Tt!==null){var A=Tt,B=_i;switch(Xt){case 8:qd(),b=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var ne=Xt;if(Xt=0,_i=null,Vr(t,A,B,ne),s&&Fr){b=0;break e}break;default:ne=Xt,Xt=0,_i=null,Vr(t,A,B,ne)}}hb(),b=un;break}catch(_e){R_(t,_e)}while(!0);return i&&t.shellSuspendCounter++,ga=Hs=null,Ht=l,P.H=f,P.A=h,Tt===null&&(Qt=null,Ct=0,pc()),b}function hb(){for(;Tt!==null;)O_(Tt)}function pb(t,i){var s=Ht;Ht|=2;var l=C_(),f=D_();Qt!==t||Ct!==i?(Wc=null,Xc=E()+500,Gr(t,i)):Fr=Fe(t,i);e:do try{if(Xt!==0&&Tt!==null){i=Tt;var h=_i;t:switch(Xt){case 1:Xt=0,_i=null,Vr(t,i,h,1);break;case 2:case 9:if(Gm(h)){Xt=0,_i=null,U_(i);break}i=function(){Xt!==2&&Xt!==9||Qt!==t||(Xt=7),sa(t)},h.then(i,i);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Gm(h)?(Xt=0,_i=null,U_(i)):(Xt=0,_i=null,Vr(t,i,h,7));break;case 5:var b=null;switch(Tt.tag){case 26:b=Tt.memoizedState;case 5:case 27:var A=Tt;if(b?_x(b):A.stateNode.complete){Xt=0,_i=null;var B=A.sibling;if(B!==null)Tt=B;else{var ne=A.return;ne!==null?(Tt=ne,$c(ne)):Tt=null}break t}}Xt=0,_i=null,Vr(t,i,h,5);break;case 6:Xt=0,_i=null,Vr(t,i,h,6);break;case 8:qd(),un=6;break e;default:throw Error(a(462))}}mb();break}catch(_e){R_(t,_e)}while(!0);return ga=Hs=null,P.H=l,P.A=f,Ht=s,Tt!==null?0:(Qt=null,Ct=0,pc(),un)}function mb(){for(;Tt!==null&&!lt();)O_(Tt)}function O_(t){var i=t_(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,i===null?$c(t):Tt=i}function U_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=$g(s,i,i.pendingProps,i.type,void 0,Ct);break;case 11:i=$g(s,i,i.pendingProps,i.type.render,i.ref,Ct);break;case 5:cd(i);default:i_(s,i),i=Tt=Dm(i,Aa),i=t_(s,i,Aa)}t.memoizedProps=t.pendingProps,i===null?$c(t):Tt=i}function Vr(t,i,s,l){ga=Hs=null,cd(i),Or=null,Wo=0;var f=i.return;try{if(ib(t,f,i,s,Ct)){un=1,zc(t,Ri(s,t.current)),Tt=null;return}}catch(h){if(f!==null)throw Tt=f,h;un=1,zc(t,Ri(s,t.current)),Tt=null;return}i.flags&32768?(Ut||l===1?t=!0:Fr||(Ct&536870912)!==0?t=!1:(ss=t=!0,(l===2||l===9||l===3||l===6)&&(l=mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),L_(i,t)):$c(i)}function $c(t){var i=t;do{if((i.flags&32768)!==0){L_(i,ss);return}t=i.return;var s=rb(i.alternate,i,Aa);if(s!==null){Tt=s;return}if(i=i.sibling,i!==null){Tt=i;return}Tt=i=t}while(i!==null);un===0&&(un=5)}function L_(t,i){do{var s=ob(t.alternate,t);if(s!==null){s.flags&=32767,Tt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=s}while(t!==null);un=6,Tt=null}function N_(t,i,s,l,f,h,b,A,B){t.cancelPendingCommit=null;do Zc();while(wn!==0);if((Ht&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=zf,Nn(t,s,h,b,A,B),t===Qt&&(Tt=Qt=null,Ct=0),Hr=i,ls=t,Ra=s,kd=h,Xd=f,M_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vb(de,function(){return B_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=W.p,W.p=2,b=Ht,Ht|=4;try{lb(t,i,s)}finally{Ht=b,W.p=f,P.T=l}}wn=1,P_(),z_(),I_()}}function P_(){if(wn===1){wn=0;var t=ls,i=Hr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=W.p;W.p=2;var f=Ht;Ht|=4;try{m_(i,t);var h=rh,b=ym(t.containerInfo),A=h.focusedElem,B=h.selectionRange;if(b!==A&&A&&A.ownerDocument&&bm(A.ownerDocument.documentElement,A)){if(B!==null&&Of(A)){var ne=B.start,_e=B.end;if(_e===void 0&&(_e=ne),"selectionStart"in A)A.selectionStart=ne,A.selectionEnd=Math.min(_e,A.value.length);else{var ye=A.ownerDocument||document,se=ye&&ye.defaultView||window;if(se.getSelection){var ue=se.getSelection(),qe=A.textContent.length,rt=Math.min(B.start,qe),Zt=B.end===void 0?rt:Math.min(B.end,qe);!ue.extend&&rt>Zt&&(b=Zt,Zt=rt,rt=b);var Z=vm(A,rt),j=vm(A,Zt);if(Z&&j&&(ue.rangeCount!==1||ue.anchorNode!==Z.node||ue.anchorOffset!==Z.offset||ue.focusNode!==j.node||ue.focusOffset!==j.offset)){var ee=ye.createRange();ee.setStart(Z.node,Z.offset),ue.removeAllRanges(),rt>Zt?(ue.addRange(ee),ue.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),ue.addRange(ee))}}}}for(ye=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&ye.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ye.length;A++){var ve=ye[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}lu=!!sh,rh=sh=null}finally{Ht=f,W.p=l,P.T=s}}t.current=i,wn=2}}function z_(){if(wn===2){wn=0;var t=ls,i=Hr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=W.p;W.p=2;var f=Ht;Ht|=4;try{u_(t,i.alternate,i)}finally{Ht=f,W.p=l,P.T=s}}wn=3}}function I_(){if(wn===4||wn===3){wn=0,O();var t=ls,i=Hr,s=Ra,l=M_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,Hr=ls=null,F_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(os=null),Fi(s),i=i.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=W.p,W.p=2,P.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var A=l[b];h(A.value,{componentStack:A.stack})}}finally{P.T=i,W.p=f}}(Ra&3)!==0&&Zc(),sa(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Wd?cl++:(cl=0,Wd=t):cl=0,ul(0)}}function F_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ko(i)))}function Zc(){return P_(),z_(),I_(),B_()}function B_(){if(wn!==5)return!1;var t=ls,i=kd;kd=0;var s=Fi(Ra),l=P.T,f=W.p;try{W.p=32>s?32:s,P.T=null,s=Xd,Xd=null;var h=ls,b=Ra;if(wn=0,Hr=ls=null,Ra=0,(Ht&6)!==0)throw Error(a(331));var A=Ht;if(Ht|=4,b_(h.current),__(h,h.current,b,s),Ht=A,ul(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ae,h)}catch{}return!0}finally{W.p=f,P.T=l,F_(t,i)}}function H_(t,i,s){i=Ri(s,i),i=Ed(t.stateNode,i,2),t=ts(t,i,2),t!==null&&(hn(t,2),sa(t))}function Wt(t,i,s){if(t.tag===3)H_(t,t,s);else for(;i!==null;){if(i.tag===3){H_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(os===null||!os.has(l))){t=Ri(s,t),s=Gg(2),l=ts(i,s,2),l!==null&&(Vg(s,l,i,t),hn(l,2),sa(l));break}}i=i.return}}function $d(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new fb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Gd=!0,f.add(s),t=gb.bind(null,t,i,s),i.then(t,t))}function gb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Qt===t&&(Ct&s)===s&&(un===4||un===3&&(Ct&62914560)===Ct&&300>E()-kc?(Ht&2)===0&&Gr(t,0):Vd|=s,Br===Ct&&(Br=0)),sa(t)}function G_(t,i){i===0&&(i=Et()),t=Is(t,i),t!==null&&(hn(t,i),sa(t))}function _b(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),G_(t,s)}function xb(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),G_(t,s)}function vb(t,i){return kt(t,i)}var Kc=null,jr=null,Zd=!1,Qc=!1,Kd=!1,us=0;function sa(t){t!==jr&&t.next===null&&(jr===null?Kc=jr=t:jr=jr.next=t),Qc=!0,Zd||(Zd=!0,yb())}function ul(t,i){if(!Kd&&Qc){Kd=!0;do for(var s=!1,l=Kc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,A=l.pingedLanes;h=(1<<31-ke(42|t)+1)-1,h&=f&~(b&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,X_(l,h))}else h=Ct,h=ge(l,l===Qt?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Fe(l,h)||(s=!0,X_(l,h));l=l.next}while(s);Kd=!1}}function bb(){V_()}function V_(){Qc=Zd=!1;var t=0;us!==0&&Ob()&&(t=us);for(var i=E(),s=null,l=Kc;l!==null;){var f=l.next,h=j_(l,i);h===0?(l.next=null,s===null?Kc=f:s.next=f,f===null&&(jr=s)):(s=l,(t!==0||(h&3)!==0)&&(Qc=!0)),l=f}wn!==0&&wn!==5||ul(t),us!==0&&(us=0)}function j_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-ke(h),A=1<<b,B=f[b];B===-1?((A&s)===0||(A&l)!==0)&&(f[b]=$e(A,i)):B<=i&&(t.expiredLanes|=A),h&=~A}if(i=Qt,s=Ct,s=ge(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&tt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Fe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&tt(l),Fi(s)){case 2:case 8:s=Ee;break;case 32:s=de;break;case 268435456:s=Ie;break;default:s=de}return l=k_.bind(null,t),s=kt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&tt(l),t.callbackPriority=2,t.callbackNode=null,2}function k_(t,i){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Zc()&&t.callbackNode!==s)return null;var l=Ct;return l=ge(t,t===Qt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(T_(t,l,i),j_(t,E()),t.callbackNode!=null&&t.callbackNode===s?k_.bind(null,t):null)}function X_(t,i){if(Zc())return null;T_(t,i,!0)}function yb(){Lb(function(){(Ht&6)!==0?kt(be,bb):V_()})}function Qd(){if(us===0){var t=wr;t===0&&(t=Pe,Pe<<=1,(Pe&261888)===0&&(Pe=256)),us=t}return us}function W_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rc(""+t)}function q_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Sb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=W_((f[ln]||null).action),b=l.submitter;b&&(i=(i=b[ln]||null)?W_(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var A=new uc("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(us!==0){var B=b?q_(f,b):new FormData(f);xd(s,{pending:!0,data:B,method:f.method,action:h},null,B)}}else typeof h=="function"&&(A.preventDefault(),B=b?q_(f,b):new FormData(f),xd(s,{pending:!0,data:B,method:f.method,action:h},h,B))},currentTarget:f}]})}}for(var Jd=0;Jd<Pf.length;Jd++){var eh=Pf[Jd],Mb=eh.toLowerCase(),Eb=eh[0].toUpperCase()+eh.slice(1);Vi(Mb,"on"+Eb)}Vi(Em,"onAnimationEnd"),Vi(Tm,"onAnimationIteration"),Vi(Am,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(H1,"onTransitionRun"),Vi(G1,"onTransitionStart"),Vi(V1,"onTransitionCancel"),Vi(Rm,"onTransitionEnd"),we("onMouseEnter",["mouseout","mouseover"]),we("onMouseLeave",["mouseout","mouseover"]),we("onPointerEnter",["pointerout","pointerover"]),we("onPointerLeave",["pointerout","pointerover"]),Me("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Me("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Me("onBeforeInput",["compositionend","keypress","textInput","paste"]),Me("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Me("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Me("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function Y_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var A=l[b],B=A.instance,ne=A.currentTarget;if(A=A.listener,B!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=ne;try{h(f)}catch(_e){hc(_e)}f.currentTarget=null,h=B}else for(b=0;b<l.length;b++){if(A=l[b],B=A.instance,ne=A.currentTarget,A=A.listener,B!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=ne;try{h(f)}catch(_e){hc(_e)}f.currentTarget=null,h=B}}}}function At(t,i){var s=i[Hi];s===void 0&&(s=i[Hi]=new Set);var l=t+"__bubble";s.has(l)||($_(i,t,2,!1),s.add(l))}function th(t,i,s){var l=0;i&&(l|=4),$_(s,t,l,i)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function nh(t){if(!t[Jc]){t[Jc]=!0,X.forEach(function(s){s!=="selectionchange"&&(Tb.has(s)||th(s,!1,t),th(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Jc]||(i[Jc]=!0,th("selectionchange",!1,i))}}function $_(t,i,s,l){switch(Ex(i)){case 2:var f=Jb;break;case 8:f=ey;break;default:f=_h}s=f.bind(null,i,s,t),f=void 0,!Sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function ih(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var A=l.stateNode.containerInfo;if(A===f)break;if(b===4)for(b=l.return;b!==null;){var B=b.tag;if((B===3||B===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;A!==null;){if(b=Gi(A),b===null)return;if(B=b.tag,B===5||B===6||B===26||B===27){l=h=b;continue e}A=A.parentNode}}l=l.return}em(function(){var ne=h,_e=bf(s),ye=[];e:{var se=wm.get(t);if(se!==void 0){var ue=uc,qe=t;switch(t){case"keypress":if(lc(s)===0)break e;case"keydown":case"keyup":ue=x1;break;case"focusin":qe="focus",ue=Af;break;case"focusout":qe="blur",ue=Af;break;case"beforeblur":case"afterblur":ue=Af;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=y1;break;case Em:case Tm:case Am:ue=c1;break;case Rm:ue=M1;break;case"scroll":case"scrollend":ue=a1;break;case"wheel":ue=T1;break;case"copy":case"cut":case"paste":ue=f1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=sm;break;case"toggle":case"beforetoggle":ue=R1}var rt=(i&4)!==0,Zt=!rt&&(t==="scroll"||t==="scrollend"),Z=rt?se!==null?se+"Capture":null:se;rt=[];for(var j=ne,ee;j!==null;){var ve=j;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||Z===null||(ve=Lo(j,Z),ve!=null&&rt.push(dl(j,ve,ee))),Zt)break;j=j.return}0<rt.length&&(se=new ue(se,qe,null,s,_e),ye.push({event:se,listeners:rt}))}}if((i&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",se&&s!==vf&&(qe=s.relatedTarget||s.fromElement)&&(Gi(qe)||qe[Bi]))break e;if((ue||se)&&(se=_e.window===_e?_e:(se=_e.ownerDocument)?se.defaultView||se.parentWindow:window,ue?(qe=s.relatedTarget||s.toElement,ue=ne,qe=qe?Gi(qe):null,qe!==null&&(Zt=c(qe),rt=qe.tag,qe!==Zt||rt!==5&&rt!==27&&rt!==6)&&(qe=null)):(ue=null,qe=ne),ue!==qe)){if(rt=im,ve="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(rt=sm,ve="onPointerLeave",Z="onPointerEnter",j="pointer"),Zt=ue==null?se:F(ue),ee=qe==null?se:F(qe),se=new rt(ve,j+"leave",ue,s,_e),se.target=Zt,se.relatedTarget=ee,ve=null,Gi(_e)===ne&&(rt=new rt(Z,j+"enter",qe,s,_e),rt.target=ee,rt.relatedTarget=Zt,ve=rt),Zt=ve,ue&&qe)t:{for(rt=Ab,Z=ue,j=qe,ee=0,ve=Z;ve;ve=rt(ve))ee++;ve=0;for(var at=j;at;at=rt(at))ve++;for(;0<ee-ve;)Z=rt(Z),ee--;for(;0<ve-ee;)j=rt(j),ve--;for(;ee--;){if(Z===j||j!==null&&Z===j.alternate){rt=Z;break t}Z=rt(Z),j=rt(j)}rt=null}else rt=null;ue!==null&&Z_(ye,se,ue,rt,!1),qe!==null&&Zt!==null&&Z_(ye,Zt,qe,rt,!0)}}e:{if(se=ne?F(ne):window,ue=se.nodeName&&se.nodeName.toLowerCase(),ue==="select"||ue==="input"&&se.type==="file")var Pt=hm;else if(fm(se))if(pm)Pt=I1;else{Pt=P1;var Qe=N1}else ue=se.nodeName,!ue||ue.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ne&&xf(ne.elementType)&&(Pt=hm):Pt=z1;if(Pt&&(Pt=Pt(t,ne))){dm(ye,Pt,s,_e);break e}Qe&&Qe(t,se,ne),t==="focusout"&&ne&&se.type==="number"&&ne.memoizedProps.value!=null&&bn(se,"number",se.value)}switch(Qe=ne?F(ne):window,t){case"focusin":(fm(Qe)||Qe.contentEditable==="true")&&(br=Qe,Uf=ne,Go=null);break;case"focusout":Go=Uf=br=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,Sm(ye,s,_e);break;case"selectionchange":if(B1)break;case"keydown":case"keyup":Sm(ye,s,_e)}var bt;if(wf)e:{switch(t){case"compositionstart":var Dt="onCompositionStart";break e;case"compositionend":Dt="onCompositionEnd";break e;case"compositionupdate":Dt="onCompositionUpdate";break e}Dt=void 0}else vr?cm(t,s)&&(Dt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Dt="onCompositionStart");Dt&&(rm&&s.locale!=="ko"&&(vr||Dt!=="onCompositionStart"?Dt==="onCompositionEnd"&&vr&&(bt=tm()):(Ya=_e,Mf="value"in Ya?Ya.value:Ya.textContent,vr=!0)),Qe=eu(ne,Dt),0<Qe.length&&(Dt=new am(Dt,t,null,s,_e),ye.push({event:Dt,listeners:Qe}),bt?Dt.data=bt:(bt=um(s),bt!==null&&(Dt.data=bt)))),(bt=C1?D1(t,s):O1(t,s))&&(Dt=eu(ne,"onBeforeInput"),0<Dt.length&&(Qe=new am("onBeforeInput","beforeinput",null,s,_e),ye.push({event:Qe,listeners:Dt}),Qe.data=bt)),Sb(ye,t,ne,s,_e)}Y_(ye,i)})}function dl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function eu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Lo(t,s),f!=null&&l.unshift(dl(t,f,h)),f=Lo(t,i),f!=null&&l.push(dl(t,f,h))),t.tag===3)return l;t=t.return}return[]}function Ab(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z_(t,i,s,l,f){for(var h=i._reactName,b=[];s!==null&&s!==l;){var A=s,B=A.alternate,ne=A.stateNode;if(A=A.tag,B!==null&&B===l)break;A!==5&&A!==26&&A!==27||ne===null||(B=ne,f?(ne=Lo(s,h),ne!=null&&b.unshift(dl(s,ne,B))):f||(ne=Lo(s,h),ne!=null&&b.push(dl(s,ne,B)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var Rb=/\r\n?/g,wb=/\u0000|\uFFFD/g;function K_(t){return(typeof t=="string"?t:""+t).replace(Rb,`
`).replace(wb,"")}function Q_(t,i){return i=K_(i),K_(t)===i}function $t(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ta(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ta(t,""+l);break;case"className":ct(t,"class",l);break;case"tabIndex":ct(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ct(t,s,l);break;case"style":Qp(t,l,h);break;case"data":if(i!=="object"){ct(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=rc(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&$t(t,i,"name",f.name,f,null),$t(t,i,"formEncType",f.formEncType,f,null),$t(t,i,"formMethod",f.formMethod,f,null),$t(t,i,"formTarget",f.formTarget,f,null)):($t(t,i,"encType",f.encType,f,null),$t(t,i,"method",f.method,f,null),$t(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=rc(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=da);break;case"onScroll":l!=null&&At("scroll",t);break;case"onScrollEnd":l!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=rc(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":At("beforetoggle",t),At("toggle",t),it(t,"popover",l);break;case"xlinkActuate":mt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":mt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":mt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":mt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":mt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":mt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":mt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":mt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":mt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":it(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=n1.get(s)||s,it(t,s,l))}}function ah(t,i,s,l,f,h){switch(s){case"style":Qp(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ta(t,l):(typeof l=="number"||typeof l=="bigint")&&ta(t,""+l);break;case"onScroll":l!=null&&At("scroll",t);break;case"onScrollEnd":l!=null&&At("scrollend",t);break;case"onClick":l!=null&&(t.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[ln]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):it(t,s,l)}}}function Wn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var b=s[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:$t(t,i,h,b,s,null)}}f&&$t(t,i,"srcSet",s.srcSet,s,null),l&&$t(t,i,"src",s.src,s,null);return;case"input":At("invalid",t);var A=h=b=f=null,B=null,ne=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":b=_e;break;case"checked":B=_e;break;case"defaultChecked":ne=_e;break;case"value":h=_e;break;case"defaultValue":A=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,i));break;default:$t(t,i,l,_e,s,null)}}Bt(t,h,A,B,ne,b,f,!1);return;case"select":At("invalid",t),l=b=h=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":h=A;break;case"defaultValue":b=A;break;case"multiple":l=A;default:$t(t,i,f,A,s,null)}i=h,s=b,t.multiple=!!l,i!=null?Rn(t,!!l,i,!1):s!=null&&Rn(t,!!l,s,!0);return;case"textarea":At("invalid",t),h=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(A=s[b],A!=null))switch(b){case"value":l=A;break;case"defaultValue":f=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:$t(t,i,b,A,s,null)}Vn(t,l,f,h);return;case"option":for(B in s)if(s.hasOwnProperty(B)&&(l=s[B],l!=null))switch(B){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(t,i,B,l,s,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(l=0;l<fl.length;l++)At(fl[l],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(l=s[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:$t(t,i,ne,l,s,null)}return;default:if(xf(i)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&ah(t,i,_e,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&$t(t,i,A,l,s,null))}function Cb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,A=null,B=null,ne=null,_e=null;for(ue in s){var ye=s[ue];if(s.hasOwnProperty(ue)&&ye!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":B=ye;default:l.hasOwnProperty(ue)||$t(t,i,ue,null,l,ye)}}for(var se in l){var ue=l[se];if(ye=s[se],l.hasOwnProperty(se)&&(ue!=null||ye!=null))switch(se){case"type":h=ue;break;case"name":f=ue;break;case"checked":ne=ue;break;case"defaultChecked":_e=ue;break;case"value":b=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,i));break;default:ue!==ye&&$t(t,i,se,ue,l,ye)}}Qn(t,b,A,B,ne,_e,h,f);return;case"select":ue=b=A=se=null;for(h in s)if(B=s[h],s.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":ue=B;default:l.hasOwnProperty(h)||$t(t,i,h,null,l,B)}for(f in l)if(h=l[f],B=s[f],l.hasOwnProperty(f)&&(h!=null||B!=null))switch(f){case"value":se=h;break;case"defaultValue":A=h;break;case"multiple":b=h;default:h!==B&&$t(t,i,f,h,l,B)}i=A,s=b,l=ue,se!=null?Rn(t,!!s,se,!1):!!l!=!!s&&(i!=null?Rn(t,!!s,i,!0):Rn(t,!!s,s?[]:"",!1));return;case"textarea":ue=se=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:$t(t,i,A,null,l,f)}for(b in l)if(f=l[b],h=s[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":se=f;break;case"defaultValue":ue=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&$t(t,i,b,f,l,h)}Pn(t,se,ue);return;case"option":for(var qe in s)if(se=s[qe],s.hasOwnProperty(qe)&&se!=null&&!l.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:$t(t,i,qe,null,l,se)}for(B in l)if(se=l[B],ue=s[B],l.hasOwnProperty(B)&&se!==ue&&(se!=null||ue!=null))switch(B){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:$t(t,i,B,se,l,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in s)se=s[rt],s.hasOwnProperty(rt)&&se!=null&&!l.hasOwnProperty(rt)&&$t(t,i,rt,null,l,se);for(ne in l)if(se=l[ne],ue=s[ne],l.hasOwnProperty(ne)&&se!==ue&&(se!=null||ue!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:$t(t,i,ne,se,l,ue)}return;default:if(xf(i)){for(var Zt in s)se=s[Zt],s.hasOwnProperty(Zt)&&se!==void 0&&!l.hasOwnProperty(Zt)&&ah(t,i,Zt,void 0,l,se);for(_e in l)se=l[_e],ue=s[_e],!l.hasOwnProperty(_e)||se===ue||se===void 0&&ue===void 0||ah(t,i,_e,se,l,ue);return}}for(var Z in s)se=s[Z],s.hasOwnProperty(Z)&&se!=null&&!l.hasOwnProperty(Z)&&$t(t,i,Z,null,l,se);for(ye in l)se=l[ye],ue=s[ye],!l.hasOwnProperty(ye)||se===ue||se==null&&ue==null||$t(t,i,ye,se,l,ue)}function J_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Db(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,b=f.initiatorType,A=f.duration;if(h&&A&&J_(b)){for(b=0,A=f.responseEnd,l+=1;l<s.length;l++){var B=s[l],ne=B.startTime;if(ne>A)break;var _e=B.transferSize,ye=B.initiatorType;_e&&J_(ye)&&(B=B.responseEnd,b+=_e*(B<A?1:(A-ne)/(B-ne)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sh=null,rh=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function ex(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tx(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function oh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function Ob(){var t=window.event;return t&&t.type==="popstate"?t===lh?!1:(lh=t,!0):(lh=null,!1)}var nx=typeof setTimeout=="function"?setTimeout:void 0,Ub=typeof clearTimeout=="function"?clearTimeout:void 0,ix=typeof Promise=="function"?Promise:void 0,Lb=typeof queueMicrotask=="function"?queueMicrotask:typeof ix<"u"?function(t){return ix.resolve(null).then(t).catch(Nb)}:nx;function Nb(t){setTimeout(function(){throw t})}function fs(t){return t==="head"}function ax(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),qr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")hl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,hl(s);for(var h=s.firstChild;h;){var b=h.nextSibling,A=h.nodeName;h[ea]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=b}}else s==="body"&&hl(t.ownerDocument.body);s=f}while(s);qr(i)}function sx(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function ch(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ch(s),qa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Pb(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ea])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ui(t.nextSibling),t===null)break}return null}function zb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ui(t.nextSibling),t===null))return null;return t}function rx(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ui(t.nextSibling),t===null))return null;return t}function uh(t){return t.data==="$?"||t.data==="$~"}function fh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ib(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ui(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var dh=null;function ox(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ui(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function lx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function cx(t,i,s){switch(i=tu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function hl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);qa(t)}var Li=new Map,ux=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=W.d;W.d={f:Fb,r:Bb,D:Hb,C:Gb,L:Vb,m:jb,X:Xb,S:kb,M:Wb};function Fb(){var t=wa.f(),i=qc();return t||i}function Bb(t){var i=R(t);i!==null&&i.tag===5&&i.type==="form"?Rg(i):wa.r(t)}var kr=typeof document>"u"?null:document;function fx(t,i,s){var l=kr;if(l&&typeof i=="string"&&i){var f=jt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),ux.has(f)||(ux.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Wn(i,"link",t),$(i),l.head.appendChild(i)))}}function Hb(t){wa.D(t),fx("dns-prefetch",t,null)}function Gb(t,i){wa.C(t,i),fx("preconnect",t,i)}function Vb(t,i,s){wa.L(t,i,s);var l=kr;if(l&&t&&i){var f='link[rel="preload"][as="'+jt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+jt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+jt(s.imageSizes)+'"]')):f+='[href="'+jt(t)+'"]';var h=f;switch(i){case"style":h=Xr(t);break;case"script":h=Wr(t)}Li.has(h)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Li.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(pl(h))||i==="script"&&l.querySelector(ml(h))||(i=l.createElement("link"),Wn(i,"link",t),$(i),l.head.appendChild(i)))}}function jb(t,i){wa.m(t,i);var s=kr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+jt(l)+'"][href="'+jt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Wr(t)}if(!Li.has(h)&&(t=_({rel:"modulepreload",href:t},i),Li.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ml(h)))return}l=s.createElement("link"),Wn(l,"link",t),$(l),s.head.appendChild(l)}}}function kb(t,i,s){wa.S(t,i,s);var l=kr;if(l&&t){var f=Y(l).hoistableStyles,h=Xr(t);i=i||"default";var b=f.get(h);if(!b){var A={loading:0,preload:null};if(b=l.querySelector(pl(h)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Li.get(h))&&hh(t,s);var B=b=l.createElement("link");$(B),Wn(B,"link",t),B._p=new Promise(function(ne,_e){B.onload=ne,B.onerror=_e}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,iu(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:A},f.set(h,b)}}}function Xb(t,i){wa.X(t,i);var s=kr;if(s&&t){var l=Y(s).hoistableScripts,f=Wr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0},i),(i=Li.get(f))&&ph(t,i),h=s.createElement("script"),$(h),Wn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function Wb(t,i){wa.M(t,i);var s=kr;if(s&&t){var l=Y(s).hoistableScripts,f=Wr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0,type:"module"},i),(i=Li.get(f))&&ph(t,i),h=s.createElement("script"),$(h),Wn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function dx(t,i,s,l){var f=(f=ae.current)?nu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Xr(s.href),s=Y(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Xr(s.href);var h=Y(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(pl(t)))&&!h._p&&(b.instance=h,b.state.loading=5),Li.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Li.set(t,s),h||qb(f,t,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Wr(s),s=Y(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Xr(t){return'href="'+jt(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function hx(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function qb(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Wn(i,"link",s),$(i),t.head.appendChild(i))}function Wr(t){return'[src="'+jt(t)+'"]'}function ml(t){return"script[async]"+t}function px(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+jt(s.href)+'"]');if(l)return i.instance=l,$(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),$(l),Wn(l,"style",f),iu(l,s.precedence,t),i.instance=l;case"stylesheet":f=Xr(s.href);var h=t.querySelector(pl(f));if(h)return i.state.loading|=4,i.instance=h,$(h),h;l=hx(s),(f=Li.get(f))&&hh(l,f),h=(t.ownerDocument||t).createElement("link"),$(h);var b=h;return b._p=new Promise(function(A,B){b.onload=A,b.onerror=B}),Wn(h,"link",l),i.state.loading|=4,iu(h,s.precedence,t),i.instance=h;case"script":return h=Wr(s.src),(f=t.querySelector(ml(h)))?(i.instance=f,$(f),f):(l=s,(f=Li.get(h))&&(l=_({},s),ph(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),$(f),Wn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,iu(l,s.precedence,t));return i.instance}function iu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var A=l[b];if(A.dataset.precedence===i)h=A;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function hh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ph(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var au=null;function mx(t,i,s){if(au===null){var l=new Map,f=au=new Map;f.set(s,l)}else f=au,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[ea]||h[on]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var A=l.get(b);A?A.push(h):l.set(b,[h])}}return l}function gx(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Yb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function _x(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $b(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Xr(l.href),h=i.querySelector(pl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=su.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,$(h);return}h=i.ownerDocument||i,l=hx(l),(f=Li.get(f))&&hh(l,f),h=h.createElement("link"),$(h);var b=h;b._p=new Promise(function(A,B){b.onload=A,b.onerror=B}),Wn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=su.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var mh=0;function Zb(t,i){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&mh===0&&(mh=62500*Db());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>mh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function ou(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,i.forEach(Kb,t),ru=null,su.call(t))}function Kb(t,i){if(!(i.state.loading&4)){var s=ru.get(t);if(s)var l=s.get(null);else{s=new Map,ru.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=s.get(b)||l,h===l&&s.set(null,f),s.set(b,f),this.count++,l=su.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var gl={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Qb(t,i,s,l,f,h,b,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=St(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=St(0),this.hiddenUpdates=St(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function xx(t,i,s,l,f,h,b,A,B,ne,_e,ye){return t=new Qb(t,i,s,b,B,ne,_e,ye,A),i=1,h===!0&&(i|=24),h=pi(3,null,null,i),t.current=h,h.stateNode=t,i=Yf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},Qf(h),t}function vx(t){return t?(t=Mr,t):Mr}function bx(t,i,s,l,f,h){f=vx(f),l.context===null?l.context=f:l.pendingContext=f,l=es(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=ts(t,l,i),s!==null&&(ri(s,t,i),Yo(s,t,i))}function yx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function gh(t,i){yx(t,i),(t=t.alternate)&&yx(t,i)}function Sx(t){if(t.tag===13||t.tag===31){var i=Is(t,67108864);i!==null&&ri(i,t,67108864),gh(t,67108864)}}function Mx(t){if(t.tag===13||t.tag===31){var i=vi();i=Kn(i);var s=Is(t,i);s!==null&&ri(s,t,i),gh(t,i)}}var lu=!0;function Jb(t,i,s,l){var f=P.T;P.T=null;var h=W.p;try{W.p=2,_h(t,i,s,l)}finally{W.p=h,P.T=f}}function ey(t,i,s,l){var f=P.T;P.T=null;var h=W.p;try{W.p=8,_h(t,i,s,l)}finally{W.p=h,P.T=f}}function _h(t,i,s,l){if(lu){var f=xh(l);if(f===null)ih(t,i,l,cu,s),Tx(t,l);else if(ny(f,t,i,s,l))l.stopPropagation();else if(Tx(t,l),i&4&&-1<ty.indexOf(t)){for(;f!==null;){var h=R(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=ce(h.pendingLanes);if(b!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var B=1<<31-ke(b);A.entanglements[1]|=B,b&=~B}sa(h),(Ht&6)===0&&(Xc=E()+500,ul(0))}}break;case 31:case 13:A=Is(h,2),A!==null&&ri(A,h,2),qc(),gh(h,2)}if(h=xh(l),h===null&&ih(t,i,l,cu,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else ih(t,i,l,null,s)}}function xh(t){return t=bf(t),vh(t)}var cu=null;function vh(t){if(cu=null,t=Gi(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return cu=t,null}function Ex(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case be:return 2;case Ee:return 8;case de:case Je:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var bh=!1,ds=null,hs=null,ps=null,_l=new Map,xl=new Map,ms=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tx(t,i){switch(t){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(i.pointerId)}}function vl(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=R(i),i!==null&&Sx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function ny(t,i,s,l,f){switch(i){case"focusin":return ds=vl(ds,t,i,s,l,f),!0;case"dragenter":return hs=vl(hs,t,i,s,l,f),!0;case"mouseover":return ps=vl(ps,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return _l.set(h,vl(_l.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,xl.set(h,vl(xl.get(h)||null,t,i,s,l,f)),!0}return!1}function Ax(t){var i=Gi(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Wa(t.priority,function(){Mx(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Wa(t.priority,function(){Mx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=xh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);vf=l,s.target.dispatchEvent(l),vf=null}else return i=R(s),i!==null&&Sx(i),t.blockedOn=s,!1;i.shift()}return!0}function Rx(t,i,s){uu(t)&&s.delete(i)}function iy(){bh=!1,ds!==null&&uu(ds)&&(ds=null),hs!==null&&uu(hs)&&(hs=null),ps!==null&&uu(ps)&&(ps=null),_l.forEach(Rx),xl.forEach(Rx)}function fu(t,i){t.blockedOn===i&&(t.blockedOn=null,bh||(bh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,iy)))}var du=null;function wx(t){du!==t&&(du=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){du===t&&(du=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(vh(l||s)===null)continue;break}var h=R(s);h!==null&&(t.splice(i,3),i-=3,xd(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function qr(t){function i(B){return fu(B,t)}ds!==null&&fu(ds,t),hs!==null&&fu(hs,t),ps!==null&&fu(ps,t),_l.forEach(i),xl.forEach(i);for(var s=0;s<ms.length;s++){var l=ms[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ms.length&&(s=ms[0],s.blockedOn===null);)Ax(s),s.blockedOn===null&&ms.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],b=f[ln]||null;if(typeof h=="function")b||wx(s);else if(b){var A=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[ln]||null)A=b.formAction;else if(vh(f)!==null)continue}else A=b.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),wx(s)}}}function Cx(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function yh(t){this._internalRoot=t}hu.prototype.render=yh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=vi();bx(s,l,t,i,null,null)},hu.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;bx(t.current,2,null,t,null,null),qc(),i[Bi]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Us();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ms.length&&i!==0&&i<ms[s].priority;s++);ms.splice(s,0,t),s===0&&Ax(t)}};var Dx=e.version;if(Dx!=="19.2.1")throw Error(a(527,Dx,"19.2.1"));W.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ay={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Ae=pu.inject(ay),Ce=pu}catch{}}return Sl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=Ig,h=Fg,b=Bg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=xx(t,1,!1,null,null,s,l,null,f,h,b,Cx),t[Bi]=i.current,nh(t),new yh(i)},Sl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",h=Ig,b=Fg,A=Bg,B=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(B=s.formState)),i=xx(t,1,!0,i,s??null,l,f,B,h,b,A,Cx),i.context=vx(null),s=i.current,l=vi(),l=Kn(l),f=es(l),f.callback=null,ts(s,f,l),s=l,i.current.lanes=s,hn(i,s),sa(i),t[Bi]=i.current,nh(t),new hu(i)},Sl.version="19.2.1",Sl}var ev;function eS(){if(ev)return Oh.exports;ev=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Oh.exports=Jy(),Oh.exports}var tS=eS();const nS=T2(tS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zp="181",iS=0,tv=1,aS=2,A2=1,sS=2,Pa=3,Ds=0,ci=1,za=2,Ba=0,uo=1,nv=2,iv=3,av=4,rS=5,ar=100,oS=101,lS=102,cS=103,uS=104,fS=200,dS=201,hS=202,pS=203,E0=204,T0=205,mS=206,gS=207,_S=208,xS=209,vS=210,bS=211,yS=212,SS=213,MS=214,A0=0,R0=1,w0=2,vo=3,C0=4,D0=5,O0=6,U0=7,R2=0,ES=1,TS=2,Rs=0,AS=1,RS=2,wS=3,CS=4,DS=5,OS=6,US=7,w2=300,bo=301,yo=302,L0=303,N0=304,pf=306,P0=1e3,Mi=1001,z0=1002,Ei=1003,LS=1004,mu=1005,qn=1006,Ph=1007,or=1008,Va=1009,C2=1010,D2=1011,Gl=1012,Ip=1013,pr=1014,Ia=1015,Co=1016,Fp=1017,Bp=1018,Vl=1020,O2=35902,U2=35899,L2=1021,N2=1022,$i=1023,jl=1026,kl=1027,P2=1028,Hp=1029,Gp=1030,Vp=1031,jp=1033,Fu=33776,Bu=33777,Hu=33778,Gu=33779,I0=35840,F0=35841,B0=35842,H0=35843,G0=36196,V0=37492,j0=37496,k0=37808,X0=37809,W0=37810,q0=37811,Y0=37812,$0=37813,Z0=37814,K0=37815,Q0=37816,J0=37817,ep=37818,tp=37819,np=37820,ip=37821,ap=36492,sp=36494,rp=36495,op=36283,lp=36284,cp=36285,up=36286,NS=3200,PS=3201,zS=0,IS=1,Es="",li="srgb",So="srgb-linear",Qu="linear",Kt="srgb",Yr=7680,sv=519,FS=512,BS=513,HS=514,z2=515,GS=516,VS=517,jS=518,kS=519,rv=35044,ov="300 es",la=2e3,Ju=2001;function I2(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function XS(){const r=Xl("canvas");return r.style.display="block",r}const lv={};function cv(...r){const e="THREE."+r.shift();console.log(e,...r)}function pt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function fn(...r){const e="THREE."+r.shift();console.error(e,...r)}function Wl(...r){const e=r.join(" ");e in lv||(lv[e]=!0,pt(...r))}function WS(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Do{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const $n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=Math.PI/180,fp=180/Math.PI;function tc(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return($n[r&255]+$n[r>>8&255]+$n[r>>16&255]+$n[r>>24&255]+"-"+$n[e&255]+$n[e>>8&255]+"-"+$n[e>>16&15|64]+$n[e>>24&255]+"-"+$n[n&63|128]+$n[n>>8&255]+"-"+$n[n>>16&255]+$n[n>>24&255]+$n[a&255]+$n[a>>8&255]+$n[a>>16&255]+$n[a>>24&255]).toLowerCase()}function Lt(r,e,n){return Math.max(e,Math.min(n,r))}function qS(r,e){return(r%e+e)%e}function Ih(r,e,n){return(1-n)*r+n*e}function Ml(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class qt{constructor(e=0,n=0){qt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Lt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nc{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],x=c[u+0],S=c[u+1],M=c[u+2],T=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=S,e[n+2]=M,e[n+3]=T;return}if(_!==T||m!==x||p!==S||g!==M){let y=m*x+p*S+g*M+_*T;y<0&&(x=-x,S=-S,M=-M,T=-T,y=-y);let v=1-d;if(y<.9995){const L=Math.acos(y),U=Math.sin(L);v=Math.sin(v*L)/U,d=Math.sin(d*L)/U,m=m*v+x*d,p=p*v+S*d,g=g*v+M*d,_=_*v+T*d}else{m=m*v+x*d,p=p*v+S*d,g=g*v+M*d,_=_*v+T*d;const L=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=L,p*=L,g*=L,_*=L}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],x=c[u+1],S=c[u+2],M=c[u+3];return e[n]=d*M+g*_+m*S-p*x,e[n+1]=m*M+g*x+p*_-d*S,e[n+2]=p*M+g*S+d*x-m*_,e[n+3]=g*M-d*_-m*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),_=d(c/2),x=m(a/2),S=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=x*g*_+p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_-x*S*M;break;case"YXZ":this._x=x*g*_+p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_+x*S*M;break;case"ZXY":this._x=x*g*_-p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_-x*S*M;break;case"ZYX":this._x=x*g*_-p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_+x*S*M;break;case"YZX":this._x=x*g*_+p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_-x*S*M;break;case"XZY":this._x=x*g*_-p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_+x*S*M;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],x=a+d+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(a>d&&a>_){const S=2*Math.sqrt(1+a-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-a-_);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-a-d);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,a=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(uv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-d*g,this.y=a+m*g+d*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this.z=Lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this.z=Lt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Lt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new le,uv=new nc;class yt{constructor(e,n,a,o,c,u,d,m,p){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],x=a[2],S=a[5],M=a[8],T=o[0],y=o[3],v=o[6],L=o[1],U=o[4],I=o[7],k=o[2],N=o[5],z=o[8];return c[0]=u*T+d*L+m*k,c[3]=u*y+d*U+m*N,c[6]=u*v+d*I+m*z,c[1]=p*T+g*L+_*k,c[4]=p*y+g*U+_*N,c[7]=p*v+g*I+_*z,c[2]=x*T+S*L+M*k,c[5]=x*y+S*U+M*N,c[8]=x*v+S*I+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*u-d*p,x=d*m-g*c,S=p*c-u*m,M=n*_+a*x+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(o*p-g*a)*T,e[2]=(d*a-o*u)*T,e[3]=x*T,e[4]=(g*n-o*m)*T,e[5]=(o*c-d*n)*T,e[6]=S*T,e[7]=(a*m-p*n)*T,e[8]=(u*n-a*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Bh.makeScale(e,n)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new yt,fv=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const r={enabled:!0,workingColorSpace:So,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Kt&&(o.r=Ha(o.r),o.g=Ha(o.g),o.b=Ha(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Kt&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Es?Qu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Wl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Wl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[So]:{primaries:e,whitePoint:a,transfer:Qu,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:a,transfer:Kt,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const It=YS();function Ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $r;class $S{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{$r===void 0&&($r=Xl("canvas")),$r.width=e.width,$r.height=e.height;const o=$r.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=$r}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ha(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ha(n[a]/255)*255):n[a]=Ha(n[a]);return{data:n,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZS=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=tc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Hh(o[u].image)):c.push(Hh(o[u]))}else c=Hh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$S.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let KS=0;const Gh=new le;class Bn extends Do{constructor(e=Bn.DEFAULT_IMAGE,n=Bn.DEFAULT_MAPPING,a=Mi,o=Mi,c=qn,u=or,d=$i,m=Va,p=Bn.DEFAULT_ANISOTROPY,g=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=tc(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){pt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case P0:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case z0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case P0:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case z0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=w2;Bn.DEFAULT_ANISOTROPY=1;class gn{constructor(e=0,n=0,a=0,o=1){gn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],S=m[5],M=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,I=(S+1)/2,k=(v+1)/2,N=(g+x)/4,z=(_+T)/4,Q=(M+y)/4;return U>I&&U>k?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=N/a,c=z/a):I>k?I<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(I),a=N/o,c=Q/o):k<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(k),a=z/c,o=Q/c),this.set(a,o,c,n),this}let L=Math.sqrt((y-M)*(y-M)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(_-T)/L,this.z=(x-g)/L,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this.z=Lt(this.z,e.z,n.z),this.w=Lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this.z=Lt(this.z,e,n),this.w=Lt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends Do{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new gn(0,0,e,n),this.scissorTest=!1,this.viewport=new gn(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new Bn(o);this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new kp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends QS{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class F2 extends Bn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends Bn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Xi):Xi.fromBufferAttribute(c,u),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),gu.copy(a.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),_u.subVectors(this.max,El),Zr.subVectors(e.a,El),Kr.subVectors(e.b,El),Qr.subVectors(e.c,El),_s.subVectors(Kr,Zr),xs.subVectors(Qr,Kr),Ks.subVectors(Zr,Qr);let n=[0,-_s.z,_s.y,0,-xs.z,xs.y,0,-Ks.z,Ks.y,_s.z,0,-_s.x,xs.z,0,-xs.x,Ks.z,0,-Ks.x,-_s.y,_s.x,0,-xs.y,xs.x,0,-Ks.y,Ks.x,0];return!Vh(n,Zr,Kr,Qr,_u)||(n=[1,0,0,0,1,0,0,0,1],!Vh(n,Zr,Kr,Qr,_u))?!1:(xu.crossVectors(_s,xs),n=[xu.x,xu.y,xu.z],Vh(n,Zr,Kr,Qr,_u))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new le,new le,new le,new le,new le,new le,new le,new le],Xi=new le,gu=new ic,Zr=new le,Kr=new le,Qr=new le,_s=new le,xs=new le,Ks=new le,El=new le,_u=new le,xu=new le,Qs=new le;function Vh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Qs.fromArray(r,c);const d=o.x*Math.abs(Qs.x)+o.y*Math.abs(Qs.y)+o.z*Math.abs(Qs.z),m=e.dot(Qs),p=n.dot(Qs),g=a.dot(Qs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const e3=new ic,Tl=new le,jh=new le;class mf{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):e3.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const n=Tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Tl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(jh)),this.expandByPoint(Tl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Da=new le,kh=new le,vu=new le,vs=new le,Xh=new le,bu=new le,Wh=new le;class Xp{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){kh.copy(e).add(n).multiplyScalar(.5),vu.copy(n).sub(e).normalize(),vs.copy(this.origin).sub(kh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(vu),d=vs.dot(this.direction),m=-vs.dot(vu),p=vs.lengthSq(),g=Math.abs(1-u*u);let _,x,S,M;if(g>0)if(_=u*m-d,x=u*d-m,M=c*g,_>=0)if(x>=-M)if(x<=M){const T=1/g;_*=T,x*=T,S=_*(_+u*x+2*d)+x*(u*_+x+2*m)+p}else x=c,_=Math.max(0,-(u*x+d)),S=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(u*x+d)),S=-_*_+x*(x+2*m)+p;else x<=-M?(_=Math.max(0,-(-u*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p):x<=M?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(_=Math.max(0,-(u*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p);else x=u>0?-c:c,_=Math.max(0,-(u*x+d)),S=-_*_+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(kh).addScaledVector(vu,x),S}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const a=Da.dot(this.direction),o=Da.dot(Da)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(a=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(a=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,a,o,c){Xh.subVectors(n,e),bu.subVectors(a,e),Wh.crossVectors(Xh,bu);let u=this.direction.dot(Wh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;vs.subVectors(this.origin,e);const m=d*this.direction.dot(bu.crossVectors(vs,bu));if(m<0)return null;const p=d*this.direction.dot(Xh.cross(vs));if(p<0||m+p>u)return null;const g=-d*vs.dot(Wh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,n,a,o,c,u,d,m,p,g,_,x,S,M,T,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,_,x,S,M,T,y)}set(e,n,a,o,c,u,d,m,p,g,_,x,S,M,T,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=u,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=M,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/Jr.setFromMatrixColumn(e,0).length(),c=1/Jr.setFromMatrixColumn(e,1).length(),u=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*g,S=u*_,M=d*g,T=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=S+M*p,n[5]=x-T*p,n[9]=-d*m,n[2]=T-x*p,n[6]=M+S*p,n[10]=u*m}else if(e.order==="YXZ"){const x=m*g,S=m*_,M=p*g,T=p*_;n[0]=x+T*d,n[4]=M*d-S,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=S*d-M,n[6]=T+x*d,n[10]=u*m}else if(e.order==="ZXY"){const x=m*g,S=m*_,M=p*g,T=p*_;n[0]=x-T*d,n[4]=-u*_,n[8]=M+S*d,n[1]=S+M*d,n[5]=u*g,n[9]=T-x*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const x=u*g,S=u*_,M=d*g,T=d*_;n[0]=m*g,n[4]=M*p-S,n[8]=x*p+T,n[1]=m*_,n[5]=T*p+x,n[9]=S*p-M,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const x=u*m,S=u*p,M=d*m,T=d*p;n[0]=m*g,n[4]=T-x*_,n[8]=M*_+S,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=S*_+M,n[10]=x-T*_}else if(e.order==="XZY"){const x=u*m,S=u*p,M=d*m,T=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=x*_+T,n[5]=u*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=d*g,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t3,e,n3)}lookAt(e,n,a){const o=this.elements;return bi.subVectors(e,n),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),bs.crossVectors(a,bi),bs.lengthSq()===0&&(Math.abs(a.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),bs.crossVectors(a,bi)),bs.normalize(),yu.crossVectors(bi,bs),o[0]=bs.x,o[4]=yu.x,o[8]=bi.x,o[1]=bs.y,o[5]=yu.y,o[9]=bi.y,o[2]=bs.z,o[6]=yu.z,o[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],x=a[9],S=a[13],M=a[2],T=a[6],y=a[10],v=a[14],L=a[3],U=a[7],I=a[11],k=a[15],N=o[0],z=o[4],Q=o[8],C=o[12],w=o[1],V=o[5],te=o[9],he=o[13],xe=o[2],K=o[6],P=o[10],W=o[14],q=o[3],pe=o[7],me=o[11],D=o[15];return c[0]=u*N+d*w+m*xe+p*q,c[4]=u*z+d*V+m*K+p*pe,c[8]=u*Q+d*te+m*P+p*me,c[12]=u*C+d*he+m*W+p*D,c[1]=g*N+_*w+x*xe+S*q,c[5]=g*z+_*V+x*K+S*pe,c[9]=g*Q+_*te+x*P+S*me,c[13]=g*C+_*he+x*W+S*D,c[2]=M*N+T*w+y*xe+v*q,c[6]=M*z+T*V+y*K+v*pe,c[10]=M*Q+T*te+y*P+v*me,c[14]=M*C+T*he+y*W+v*D,c[3]=L*N+U*w+I*xe+k*q,c[7]=L*z+U*V+I*K+k*pe,c[11]=L*Q+U*te+I*P+k*me,c[15]=L*C+U*he+I*W+k*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],S=e[14],M=e[3],T=e[7],y=e[11],v=e[15];return M*(+c*m*_-o*p*_-c*d*x+a*p*x+o*d*S-a*m*S)+T*(+n*m*S-n*p*x+c*u*x-o*u*S+o*p*g-c*m*g)+y*(+n*p*_-n*d*S-c*u*_+a*u*S+c*d*g-a*p*g)+v*(-o*d*g-n*m*_+n*d*x+o*u*_-a*u*x+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],S=e[11],M=e[12],T=e[13],y=e[14],v=e[15],L=_*y*p-T*x*p+T*m*S-d*y*S-_*m*v+d*x*v,U=M*x*p-g*y*p-M*m*S+u*y*S+g*m*v-u*x*v,I=g*T*p-M*_*p+M*d*S-u*T*S-g*d*v+u*_*v,k=M*_*m-g*T*m-M*d*x+u*T*x+g*d*y-u*_*y,N=n*L+a*U+o*I+c*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=L*z,e[1]=(T*x*c-_*y*c-T*o*S+a*y*S+_*o*v-a*x*v)*z,e[2]=(d*y*c-T*m*c+T*o*p-a*y*p-d*o*v+a*m*v)*z,e[3]=(_*m*c-d*x*c-_*o*p+a*x*p+d*o*S-a*m*S)*z,e[4]=U*z,e[5]=(g*y*c-M*x*c+M*o*S-n*y*S-g*o*v+n*x*v)*z,e[6]=(M*m*c-u*y*c-M*o*p+n*y*p+u*o*v-n*m*v)*z,e[7]=(u*x*c-g*m*c+g*o*p-n*x*p-u*o*S+n*m*S)*z,e[8]=I*z,e[9]=(M*_*c-g*T*c-M*a*S+n*T*S+g*a*v-n*_*v)*z,e[10]=(u*T*c-M*d*c+M*a*p-n*T*p-u*a*v+n*d*v)*z,e[11]=(g*d*c-u*_*c-g*a*p+n*_*p+u*a*S-n*d*S)*z,e[12]=k*z,e[13]=(g*T*o-M*_*o+M*a*x-n*T*x-g*a*y+n*_*y)*z,e[14]=(M*d*o-u*T*o-M*a*m+n*T*m+u*a*y-n*d*y)*z,e[15]=(u*_*o-g*d*o+g*a*m-n*_*m-u*a*x+n*d*x)*z,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,_=d+d,x=c*p,S=c*g,M=c*_,T=u*g,y=u*_,v=d*_,L=m*p,U=m*g,I=m*_,k=a.x,N=a.y,z=a.z;return o[0]=(1-(T+v))*k,o[1]=(S+I)*k,o[2]=(M-U)*k,o[3]=0,o[4]=(S-I)*N,o[5]=(1-(x+v))*N,o[6]=(y+L)*N,o[7]=0,o[8]=(M+U)*z,o[9]=(y-L)*z,o[10]=(1-(x+T))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=Jr.set(o[0],o[1],o[2]).length();const u=Jr.set(o[4],o[5],o[6]).length(),d=Jr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Wi.copy(this);const p=1/c,g=1/u,_=1/d;return Wi.elements[0]*=p,Wi.elements[1]*=p,Wi.elements[2]*=p,Wi.elements[4]*=g,Wi.elements[5]*=g,Wi.elements[6]*=g,Wi.elements[8]*=_,Wi.elements[9]*=_,Wi.elements[10]*=_,n.setFromRotationMatrix(Wi),a.x=c,a.y=u,a.z=d,this}makePerspective(e,n,a,o,c,u,d=la,m=!1){const p=this.elements,g=2*c/(n-e),_=2*c/(a-o),x=(n+e)/(n-e),S=(a+o)/(a-o);let M,T;if(m)M=c/(u-c),T=u*c/(u-c);else if(d===la)M=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(d===Ju)M=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=la,m=!1){const p=this.elements,g=2/(n-e),_=2/(a-o),x=-(n+e)/(n-e),S=-(a+o)/(a-o);let M,T;if(m)M=1/(u-c),T=u/(u-c);else if(d===la)M=-2/(u-c),T=-(u+c)/(u-c);else if(d===Ju)M=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Jr=new le,Wi=new dn,t3=new le(0,0,0),n3=new le(1,1,1),bs=new le,yu=new le,bi=new le,hv=new dn,pv=new nc;class ja{constructor(e=0,n=0,a=0,o=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Lt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pv.setFromEuler(this),this.setFromQuaternion(pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class Wp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i3=0;const mv=new le,eo=new nc,Oa=new dn,Su=new le,Al=new le,a3=new le,s3=new nc,gv=new le(1,0,0),_v=new le(0,1,0),xv=new le(0,0,1),vv={type:"added"},r3={type:"removed"},to={type:"childadded",child:null},qh={type:"childremoved",child:null};class ui extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i3++}),this.uuid=tc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new le,n=new ja,a=new nc,o=new le(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new yt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(gv,e)}rotateY(e){return this.rotateOnAxis(_v,e)}rotateZ(e){return this.rotateOnAxis(xv,e)}translateOnAxis(e,n){return mv.copy(e).applyQuaternion(this.quaternion),this.position.add(mv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gv,e)}translateY(e){return this.translateOnAxis(_v,e)}translateZ(e){return this.translateOnAxis(xv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Su.copy(e):Su.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(Al,Su,this.up):Oa.lookAt(Su,Al,this.up),this.quaternion.setFromRotationMatrix(Oa),o&&(Oa.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(Oa),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(fn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vv),to.child=e,this.dispatchEvent(to),to.child=null):fn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(r3),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vv),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,a3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,s3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),x=u(e.skeletons),S=u(e.animations),M=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),S.length>0&&(a.animations=S),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}ui.DEFAULT_UP=new le(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new le,Ua=new le,Yh=new le,La=new le,no=new le,io=new le,bv=new le,$h=new le,Zh=new le,Kh=new le,Qh=new gn,Jh=new gn,e0=new gn;class Yi{constructor(e=new le,n=new le,a=new le){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),qi.subVectors(e,n),o.cross(qi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){qi.subVectors(o,n),Ua.subVectors(a,n),Yh.subVectors(e,n);const u=qi.dot(qi),d=qi.dot(Ua),m=qi.dot(Yh),p=Ua.dot(Ua),g=Ua.dot(Yh),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(p*m-d*g)*x,M=(u*g-d*m)*x;return c.set(1-S-M,M,S)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,La)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,La.x),m.addScaledVector(u,La.y),m.addScaledVector(d,La.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Qh.setScalar(0),Jh.setScalar(0),e0.setScalar(0),Qh.fromBufferAttribute(e,n),Jh.fromBufferAttribute(e,a),e0.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qh,c.x),u.addScaledVector(Jh,c.y),u.addScaledVector(e0,c.z),u}static isFrontFacing(e,n,a,o){return qi.subVectors(a,n),Ua.subVectors(e,n),qi.cross(Ua).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),qi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Yi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;no.subVectors(o,a),io.subVectors(c,a),$h.subVectors(e,a);const m=no.dot($h),p=io.dot($h);if(m<=0&&p<=0)return n.copy(a);Zh.subVectors(e,o);const g=no.dot(Zh),_=io.dot(Zh);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(no,u);Kh.subVectors(e,c);const S=no.dot(Kh),M=io.dot(Kh);if(M>=0&&S<=M)return n.copy(c);const T=S*p-m*M;if(T<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(a).addScaledVector(io,d);const y=g*M-S*_;if(y<=0&&_-g>=0&&S-M>=0)return bv.subVectors(c,o),d=(_-g)/(_-g+(S-M)),n.copy(o).addScaledVector(bv,d);const v=1/(y+T+x);return u=T*v,d=x*v,n.copy(a).addScaledVector(no,u).addScaledVector(io,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function t0(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Gt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=It.workingColorSpace){return this.r=e,this.g=n,this.b=a,It.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=It.workingColorSpace){if(e=qS(e,1),n=Lt(n,0,1),a=Lt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=t0(u,c,e+1/3),this.g=t0(u,c,e),this.b=t0(u,c,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,n=li){function a(c){c!==void 0&&parseFloat(c)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=li){const a=B2[e.toLowerCase()];return a!==void 0?this.setHex(a,n):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return It.workingToColorSpace(Zn.copy(this),e),Math.round(Lt(Zn.r*255,0,255))*65536+Math.round(Lt(Zn.g*255,0,255))*256+Math.round(Lt(Zn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=It.workingColorSpace){It.workingToColorSpace(Zn.copy(this),n);const a=Zn.r,o=Zn.g,c=Zn.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=It.workingColorSpace){return It.workingToColorSpace(Zn.copy(this),n),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=li){It.workingToColorSpace(Zn.copy(this),e);const n=Zn.r,a=Zn.g,o=Zn.b;return e!==li?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+n,ys.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(ys),e.getHSL(Mu);const a=Ih(ys.h,Mu.h,n),o=Ih(ys.s,Mu.s,n),c=Ih(ys.l,Mu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new Gt;Gt.NAMES=B2;let o3=0;class ac extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o3++}),this.uuid=tc(),this.name="",this.type="Material",this.blending=uo,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=E0,this.blendDst=T0,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){pt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(a.blending=this.blending),this.side!==Ds&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==E0&&(a.blendSrc=this.blendSrc),this.blendDst!==T0&&(a.blendDst=this.blendDst),this.blendEquation!==ar&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ol extends ac{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ja,this.combine=R2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tn=new le,Eu=new qt;let l3=0;class ca{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:l3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=rv,this.updateRanges=[],this.gpuType=Ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(e),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix3(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyMatrix4(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.applyNormalMatrix(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Tn.fromBufferAttribute(this,n),Tn.transformDirection(e),this.setXYZ(n,Tn.x,Tn.y,Tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=oi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array),o=oi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array),o=oi(o,this.array),c=oi(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rv&&(e.usage=this.usage),e}}class H2 extends ca{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class G2 extends ca{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Ga extends ca{constructor(e,n,a){super(new Float32Array(e),n,a)}}let c3=0;const Ni=new dn,n0=new ui,ao=new le,yi=new ic,Rl=new ic,In=new le;class Qi extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c3++}),this.uuid=tc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I2(e)?G2:H2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new yt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,n,a){return Ni.makeTranslation(e,n,a),this.applyMatrix4(Ni),this}scale(e,n,a){return Ni.makeScale(e,n,a),this.applyMatrix4(Ni),this}lookAt(e){return n0.lookAt(e),n0.updateMatrix(),this.applyMatrix4(n0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ga(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){fn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){fn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const a=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Rl.setFromBufferAttribute(d),this.morphTargetsRelative?(In.addVectors(yi.min,Rl.min),yi.expandByPoint(In),In.addVectors(yi.max,Rl.max),yi.expandByPoint(In)):(yi.expandByPoint(Rl.min),yi.expandByPoint(Rl.max))}yi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)In.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(In));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)In.fromBufferAttribute(d,p),m&&(ao.fromBufferAttribute(e,p),In.add(ao)),o=Math.max(o,a.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&fn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){fn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ca(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<a.count;Q++)d[Q]=new le,m[Q]=new le;const p=new le,g=new le,_=new le,x=new qt,S=new qt,M=new qt,T=new le,y=new le;function v(Q,C,w){p.fromBufferAttribute(a,Q),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),x.fromBufferAttribute(c,Q),S.fromBufferAttribute(c,C),M.fromBufferAttribute(c,w),g.sub(p),_.sub(p),S.sub(x),M.sub(x);const V=1/(S.x*M.y-M.x*S.y);isFinite(V)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(V),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(V),d[Q].add(T),d[C].add(T),d[w].add(T),m[Q].add(y),m[C].add(y),m[w].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Q=0,C=L.length;Q<C;++Q){const w=L[Q],V=w.start,te=w.count;for(let he=V,xe=V+te;he<xe;he+=3)v(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const U=new le,I=new le,k=new le,N=new le;function z(Q){k.fromBufferAttribute(o,Q),N.copy(k);const C=d[Q];U.copy(C),U.sub(k.multiplyScalar(k.dot(C))).normalize(),I.crossVectors(N,C);const V=I.dot(m[Q])<0?-1:1;u.setXYZW(Q,U.x,U.y,U.z,V)}for(let Q=0,C=L.length;Q<C;++Q){const w=L[Q],V=w.start,te=w.count;for(let he=V,xe=V+te;he<xe;he+=3)z(e.getX(he+0)),z(e.getX(he+1)),z(e.getX(he+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ca(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,S=a.count;x<S;x++)a.setXYZ(x,0,0,0);const o=new le,c=new le,u=new le,d=new le,m=new le,p=new le,g=new le,_=new le;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(a,M),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,y),d.add(g),m.add(g),p.add(g),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)In.fromBufferAttribute(e,n),In.normalize(),e.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let S=0,M=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let v=0;v<g;v++)x[M++]=p[S++]}return new ca(x,g,_)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qi,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=e(x,a);m.push(S)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yv=new dn,Js=new Xp,Tu=new mf,Sv=new le,Au=new le,Ru=new le,wu=new le,i0=new le,Cu=new le,Mv=new le,Du=new le;class Si extends ui{constructor(e=new Qi,n=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Cu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(i0.fromBufferAttribute(_,e),u?Cu.addScaledVector(i0,g):Cu.addScaledVector(i0.sub(n),g))}n.add(Cu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Tu.copy(a.boundingSphere),Tu.applyMatrix4(c),Js.copy(e.ray).recast(e.near),!(Tu.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Tu,Sv)===null||Js.origin.distanceToSquared(Sv)>(e.far-e.near)**2))&&(yv.copy(c).invert(),Js.copy(e.ray).applyMatrix4(yv),!(a.boundingBox!==null&&Js.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Js)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,T=x.length;M<T;M++){const y=x[M],v=u[y.materialIndex],L=Math.max(y.start,S.start),U=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let I=L,k=U;I<k;I+=3){const N=d.getX(I),z=d.getX(I+1),Q=d.getX(I+2);o=Ou(this,v,e,a,p,g,_,N,z,Q),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let y=M,v=T;y<v;y+=3){const L=d.getX(y),U=d.getX(y+1),I=d.getX(y+2);o=Ou(this,u,e,a,p,g,_,L,U,I),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,T=x.length;M<T;M++){const y=x[M],v=u[y.materialIndex],L=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let I=L,k=U;I<k;I+=3){const N=I,z=I+1,Q=I+2;o=Ou(this,v,e,a,p,g,_,N,z,Q),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let y=M,v=T;y<v;y+=3){const L=y,U=y+1,I=y+2;o=Ou(this,u,e,a,p,g,_,L,U,I),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function u3(r,e,n,a,o,c,u,d){let m;if(e.side===ci?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Ds,d),m===null)return null;Du.copy(d),Du.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Du);return p<n.near||p>n.far?null:{distance:p,point:Du.clone(),object:r}}function Ou(r,e,n,a,o,c,u,d,m,p){r.getVertexPosition(d,Au),r.getVertexPosition(m,Ru),r.getVertexPosition(p,wu);const g=u3(r,e,n,a,Au,Ru,wu,Mv);if(g){const _=new le;Yi.getBarycoord(Mv,Au,Ru,wu,_),o&&(g.uv=Yi.getInterpolatedAttribute(o,d,m,p,_,new qt)),c&&(g.uv1=Yi.getInterpolatedAttribute(c,d,m,p,_,new qt)),u&&(g.normal=Yi.getInterpolatedAttribute(u,d,m,p,_,new le),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new le,materialIndex:0};Yi.getNormal(Au,Ru,wu,x.normal),g.face=x,g.barycoord=_}return g}class sc extends Qi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let x=0,S=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,o,u,2),M("x","z","y",1,-1,e,a,-n,o,u,3),M("x","y","z",1,-1,e,n,a,o,c,4),M("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Ga(p,3)),this.setAttribute("normal",new Ga(g,3)),this.setAttribute("uv",new Ga(_,2));function M(T,y,v,L,U,I,k,N,z,Q,C){const w=I/z,V=k/Q,te=I/2,he=k/2,xe=N/2,K=z+1,P=Q+1;let W=0,q=0;const pe=new le;for(let me=0;me<P;me++){const D=me*V-he;for(let ie=0;ie<K;ie++){const Se=ie*w-te;pe[T]=Se*L,pe[y]=D*U,pe[v]=xe,p.push(pe.x,pe.y,pe.z),pe[T]=0,pe[y]=0,pe[v]=N>0?1:-1,g.push(pe.x,pe.y,pe.z),_.push(ie/z),_.push(1-me/Q),W+=1}}for(let me=0;me<Q;me++)for(let D=0;D<z;D++){const ie=x+D+K*me,Se=x+D+K*(me+1),Te=x+(D+1)+K*(me+1),Ue=x+(D+1)+K*me;m.push(ie,Se,Ue),m.push(Se,Te,Ue),q+=6}d.addGroup(S,q,C),S+=q,x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function ei(r){const e={};for(let n=0;n<r.length;n++){const a=Mo(r[n]);for(const o in a)e[o]=a[o]}return e}function f3(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function V2(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const d3={clone:Mo,merge:ei};var h3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends ac{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h3,this.fragmentShader=p3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=f3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class j2 extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ss=new le,Ev=new qt,Tv=new qt;class Pi extends j2{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fp*2*Math.atan(Math.tan(zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,n){return this.getViewBounds(e,Ev,Tv),n.subVectors(Tv,Ev)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const so=-90,ro=1;class m3 extends ui{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(so,ro,e,n);o.layers=this.layers,this.add(o);const c=new Pi(so,ro,e,n);c.layers=this.layers,this.add(c);const u=new Pi(so,ro,e,n);u.layers=this.layers,this.add(u);const d=new Pi(so,ro,e,n);d.layers=this.layers,this.add(d);const m=new Pi(so,ro,e,n);m.layers=this.layers,this.add(m);const p=new Pi(so,ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===la)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ju)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(_,x,S),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class k2 extends Bn{constructor(e=[],n=bo,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g3 extends mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new k2(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new sc(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:Mo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ci,blending:Ba});c.uniforms.tEquirect.value=n;const u=new Si(o,c),d=n.minFilter;return n.minFilter===or&&(n.minFilter=qn),new m3(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class lr extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _3={type:"move"};class a0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,a),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_3)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new lr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class qp{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Gt(e),this.near=n,this.far=a}clone(){return new qp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class x3 extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ja,this.environmentIntensity=1,this.environmentRotation=new ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class v3 extends Bn{constructor(e=null,n=1,a=1,o,c,u,d,m,p=Ei,g=Ei,_,x){super(null,u,d,m,p,g,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const s0=new le,b3=new le,y3=new yt;class ir{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=s0.subVectors(a,n).cross(b3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(s0),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||y3.getNormalMatrix(e),o=this.coplanarPoint(s0).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new mf,S3=new qt(.5,.5),Uu=new le;class Yp{constructor(e=new ir,n=new ir,a=new ir,o=new ir,c=new ir,u=new ir){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=la,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],S=c[7],M=c[8],T=c[9],y=c[10],v=c[11],L=c[12],U=c[13],I=c[14],k=c[15];if(o[0].setComponents(p-u,S-g,v-M,k-L).normalize(),o[1].setComponents(p+u,S+g,v+M,k+L).normalize(),o[2].setComponents(p+d,S+_,v+T,k+U).normalize(),o[3].setComponents(p-d,S-_,v-T,k-U).normalize(),a)o[4].setComponents(m,x,y,I).normalize(),o[5].setComponents(p-m,S-x,v-y,k-I).normalize();else if(o[4].setComponents(p-m,S-x,v-y,k-I).normalize(),n===la)o[5].setComponents(p+m,S+x,v+y,k+I).normalize();else if(n===Ju)o[5].setComponents(m,x,y,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const n=S3.distanceTo(e.center);return er.radius=.7071067811865476+n,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Uu.x=o.normal.x>0?e.max.x:e.min.x,Uu.y=o.normal.y>0?e.max.y:e.min.y,Uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dp extends ac{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ef=new le,tf=new le,Av=new dn,wl=new Xp,Lu=new mf,r0=new le,Rv=new le;class M3 extends ui{constructor(e=new Qi,n=new dp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ef.fromBufferAttribute(n,o-1),tf.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ef.distanceTo(tf);e.setAttribute("lineDistance",new Ga(a,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Lu.copy(a.boundingSphere),Lu.applyMatrix4(o),Lu.radius+=c,e.ray.intersectsSphere(Lu)===!1)return;Av.copy(o).invert(),wl.copy(e.ray).applyMatrix4(Av);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const S=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let T=S,y=M-1;T<y;T+=p){const v=g.getX(T),L=g.getX(T+1),U=Nu(this,e,wl,m,v,L,T);U&&n.push(U)}if(this.isLineLoop){const T=g.getX(M-1),y=g.getX(S),v=Nu(this,e,wl,m,T,y,M-1);v&&n.push(v)}}else{const S=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let T=S,y=M-1;T<y;T+=p){const v=Nu(this,e,wl,m,T,T+1,T);v&&n.push(v)}if(this.isLineLoop){const T=Nu(this,e,wl,m,M-1,S,M-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Nu(r,e,n,a,o,c,u){const d=r.geometry.attributes.position;if(ef.fromBufferAttribute(d,o),tf.fromBufferAttribute(d,c),n.distanceSqToSegment(ef,tf,r0,Rv)>a)return;r0.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(r0);if(!(p<e.near||p>e.far))return{distance:p,point:Rv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const wv=new le,Cv=new le;class Dv extends M3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)wv.fromBufferAttribute(n,o),Cv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+wv.distanceTo(Cv);e.setAttribute("lineDistance",new Ga(a,1))}else pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E3 extends Bn{constructor(e,n,a,o,c=qn,u=qn,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class T3 extends Bn{constructor(e,n,a,o,c,u,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class X2 extends Bn{constructor(e,n,a=pr,o,c,u,d=Ei,m=Ei,p,g=jl,_=1){if(g!==jl&&g!==kl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class W2 extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ra extends Qi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,_=e/d,x=n/m,S=[],M=[],T=[],y=[];for(let v=0;v<g;v++){const L=v*x-u;for(let U=0;U<p;U++){const I=U*_-c;M.push(I,-L,0),T.push(0,0,1),y.push(U/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const U=L+p*v,I=L+p*(v+1),k=L+1+p*(v+1),N=L+1+p*v;S.push(U,I,N),S.push(I,k,N)}this.setIndex(S),this.setAttribute("position",new Ga(M,3)),this.setAttribute("normal",new Ga(T,3)),this.setAttribute("uv",new Ga(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class A3 extends ac{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R3 extends ac{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o0={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class w3{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const S=p[_],M=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const C3=new w3;class $p{constructor(e){this.manager=e!==void 0?e:C3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$p.DEFAULT_MATERIAL_NAME="__DEFAULT";const oo=new WeakMap;class D3 extends $p{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=o0.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=oo.get(u);_===void 0&&(_=[],oo.set(u,_)),_.push({onLoad:n,onError:o})}return u}const d=Xl("img");function m(){g(),n&&n(this);const _=oo.get(this)||[];for(let x=0;x<_.length;x++){const S=_[x];S.onLoad&&S.onLoad(this)}oo.delete(this),c.manager.itemEnd(e)}function p(_){g(),o&&o(_),o0.remove(`image:${e}`);const x=oo.get(this)||[];for(let S=0;S<x.length;S++){const M=x[S];M.onError&&M.onError(_)}oo.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),o0.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class O3 extends $p{constructor(e){super(e)}load(e,n,a,o){const c=new Bn,u=new D3(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class U3 extends j2{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class L3 extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ov=new dn;class N3{constructor(e,n,a=0,o=1/0){this.ray=new Xp(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new Wp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):fn("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Ov.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ov),this}intersectObject(e,n=!0,a=[]){return hp(e,this,a,n),a.sort(Uv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)hp(e[o],this,a,n);return a.sort(Uv),a}}function Uv(r,e){return r.distance-e.distance}function hp(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,d=c.length;u<d;u++)hp(c[u],e,n,!0)}}function Lv(r,e,n,a){const o=P3(a);switch(n){case L2:return r*e;case P2:return r*e/o.components*o.byteLength;case Hp:return r*e/o.components*o.byteLength;case Gp:return r*e*2/o.components*o.byteLength;case Vp:return r*e*2/o.components*o.byteLength;case N2:return r*e*3/o.components*o.byteLength;case $i:return r*e*4/o.components*o.byteLength;case jp:return r*e*4/o.components*o.byteLength;case Fu:case Bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hu:case Gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case F0:case H0:return Math.max(r,16)*Math.max(e,8)/4;case I0:case B0:return Math.max(r,8)*Math.max(e,8)/2;case G0:case V0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case j0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case k0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case X0:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case W0:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case q0:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Y0:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $0:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Z0:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case K0:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Q0:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case J0:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case np:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ip:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ap:case sp:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case op:case lp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P3(r){switch(r){case Va:case C2:return{byteLength:1,components:1};case Gl:case D2:case Co:return{byteLength:2,components:1};case Fp:case Bp:return{byteLength:2,components:4};case pr:case Ip:case Ia:return{byteLength:4,components:1};case O2:case U2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function q2(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function z3(r){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<_.length;S++){const M=_[x],T=_[S];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,_[x]=T)}_.length=x+1;for(let S=0,M=_.length;S<M;S++){const T=_[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var I3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F3=`#ifdef USE_ALPHAHASH
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
#endif`,B3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j3=`#ifdef USE_AOMAP
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
#endif`,k3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X3=`#ifdef USE_BATCHING
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
#endif`,W3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z3=`#ifdef USE_IRIDESCENCE
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
#endif`,K3=`#ifdef USE_BUMPMAP
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
#endif`,Q3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rM=`#define PI 3.141592653589793
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
} // validated`,oM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lM=`vec3 transformedNormal = objectNormal;
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
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EM=`#ifdef USE_GRADIENTMAP
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
}`,TM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
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
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,DM=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NM=`PhysicalMaterial material;
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
#endif`,PM=`uniform sampler2D dfgLUT;
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
}`,zM=`
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`#ifdef USE_MORPHTARGETS
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
#endif`,JM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sE=`#ifdef USE_NORMALMAP
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
#endif`,rE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yE=`float getShadowMask() {
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
}`,SE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,EE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TE=`#ifdef USE_SKINNING
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
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IE=`uniform sampler2D t2D;
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`#include <common>
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
}`,jE=`#if DEPTH_PACKING == 3200
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
}`,kE=`#define DISTANCE
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
}`,XE=`#define DISTANCE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`uniform float scale;
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
}`,$E=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,KE=`uniform vec3 diffuse;
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
}`,QE=`#define LAMBERT
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
}`,JE=`#define LAMBERT
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
}`,eT=`#define MATCAP
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
}`,tT=`#define MATCAP
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
}`,nT=`#define NORMAL
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
}`,iT=`#define NORMAL
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
}`,aT=`#define PHONG
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
}`,sT=`#define PHONG
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
}`,rT=`#define STANDARD
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
}`,oT=`#define STANDARD
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
}`,lT=`#define TOON
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
}`,cT=`#define TOON
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
}`,uT=`uniform float size;
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
}`,fT=`uniform vec3 diffuse;
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
}`,dT=`#include <common>
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
}`,hT=`uniform vec3 color;
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
}`,pT=`uniform float rotation;
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
}`,mT=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:I3,alphahash_pars_fragment:F3,alphamap_fragment:B3,alphamap_pars_fragment:H3,alphatest_fragment:G3,alphatest_pars_fragment:V3,aomap_fragment:j3,aomap_pars_fragment:k3,batching_pars_vertex:X3,batching_vertex:W3,begin_vertex:q3,beginnormal_vertex:Y3,bsdfs:$3,iridescence_fragment:Z3,bumpmap_pars_fragment:K3,clipping_planes_fragment:Q3,clipping_planes_pars_fragment:J3,clipping_planes_pars_vertex:eM,clipping_planes_vertex:tM,color_fragment:nM,color_pars_fragment:iM,color_pars_vertex:aM,color_vertex:sM,common:rM,cube_uv_reflection_fragment:oM,defaultnormal_vertex:lM,displacementmap_pars_vertex:cM,displacementmap_vertex:uM,emissivemap_fragment:fM,emissivemap_pars_fragment:dM,colorspace_fragment:hM,colorspace_pars_fragment:pM,envmap_fragment:mM,envmap_common_pars_fragment:gM,envmap_pars_fragment:_M,envmap_pars_vertex:xM,envmap_physical_pars_fragment:CM,envmap_vertex:vM,fog_vertex:bM,fog_pars_vertex:yM,fog_fragment:SM,fog_pars_fragment:MM,gradientmap_pars_fragment:EM,lightmap_pars_fragment:TM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:RM,lights_pars_begin:wM,lights_toon_fragment:DM,lights_toon_pars_fragment:OM,lights_phong_fragment:UM,lights_phong_pars_fragment:LM,lights_physical_fragment:NM,lights_physical_pars_fragment:PM,lights_fragment_begin:zM,lights_fragment_maps:IM,lights_fragment_end:FM,logdepthbuf_fragment:BM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:VM,map_fragment:jM,map_pars_fragment:kM,map_particle_fragment:XM,map_particle_pars_fragment:WM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:YM,morphinstance_vertex:$M,morphcolor_vertex:ZM,morphnormal_vertex:KM,morphtarget_pars_vertex:QM,morphtarget_vertex:JM,normal_fragment_begin:eE,normal_fragment_maps:tE,normal_pars_fragment:nE,normal_pars_vertex:iE,normal_vertex:aE,normalmap_pars_fragment:sE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:oE,clearcoat_pars_fragment:lE,iridescence_pars_fragment:cE,opaque_fragment:uE,packing:fE,premultiplied_alpha_fragment:dE,project_vertex:hE,dithering_fragment:pE,dithering_pars_fragment:mE,roughnessmap_fragment:gE,roughnessmap_pars_fragment:_E,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:vE,shadowmap_vertex:bE,shadowmask_pars_fragment:yE,skinbase_vertex:SE,skinning_pars_vertex:ME,skinning_vertex:EE,skinnormal_vertex:TE,specularmap_fragment:AE,specularmap_pars_fragment:RE,tonemapping_fragment:wE,tonemapping_pars_fragment:CE,transmission_fragment:DE,transmission_pars_fragment:OE,uv_pars_fragment:UE,uv_pars_vertex:LE,uv_vertex:NE,worldpos_vertex:PE,background_vert:zE,background_frag:IE,backgroundCube_vert:FE,backgroundCube_frag:BE,cube_vert:HE,cube_frag:GE,depth_vert:VE,depth_frag:jE,distanceRGBA_vert:kE,distanceRGBA_frag:XE,equirect_vert:WE,equirect_frag:qE,linedashed_vert:YE,linedashed_frag:$E,meshbasic_vert:ZE,meshbasic_frag:KE,meshlambert_vert:QE,meshlambert_frag:JE,meshmatcap_vert:eT,meshmatcap_frag:tT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:aT,meshphong_frag:sT,meshphysical_vert:rT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:dT,shadow_frag:hT,sprite_vert:pT,sprite_frag:mT},Be={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},oa={basic:{uniforms:ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:ei([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:ei([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:ei([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:ei([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:ei([Be.points,Be.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:ei([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:ei([Be.common,Be.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:ei([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:ei([Be.sprite,Be.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:ei([Be.common,Be.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:ei([Be.lights,Be.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};oa.physical={uniforms:ei([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Pu={r:0,b:0,g:0},tr=new ja,gT=new dn;function _T(r,e,n,a,o,c,u){const d=new Gt(0);let m=c===!0?0:1,p,g,_=null,x=0,S=null;function M(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?n:e).get(I)),I}function T(U){let I=!1;const k=M(U);k===null?v(d,m):k&&k.isColor&&(v(k,1),I=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?a.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||I)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,I){const k=M(I);k&&(k.isCubeTexture||k.mapping===pf)?(g===void 0&&(g=new Si(new sc(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Mo(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,z,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),tr.copy(I.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(tr)),g.material.toneMapped=It.getTransfer(k.colorSpace)!==Kt,(_!==k||x!==k.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=k,x=k.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Si(new ra(2,2),new ka({name:"BackgroundMaterial",uniforms:Mo(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=It.getTransfer(k.colorSpace)!==Kt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||x!==k.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=k,x=k.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,I){U.getRGB(Pu,V2(r)),a.buffers.color.setClear(Pu.r,Pu.g,Pu.b,I,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,I=1){d.set(U),m=I,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:T,addToRenderList:y,dispose:L}}function xT(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,u=!1;function d(w,V,te,he,xe){let K=!1;const P=_(he,te,V);c!==P&&(c=P,p(c.object)),K=S(w,he,te,xe),K&&M(w,he,te,xe),xe!==null&&e.update(xe,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,I(w,V,te,he),xe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,V,te){const he=te.wireframe===!0;let xe=a[w.id];xe===void 0&&(xe={},a[w.id]=xe);let K=xe[V.id];K===void 0&&(K={},xe[V.id]=K);let P=K[he];return P===void 0&&(P=x(m()),K[he]=P),P}function x(w){const V=[],te=[],he=[];for(let xe=0;xe<n;xe++)V[xe]=0,te[xe]=0,he[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:he,object:w,attributes:{},index:null}}function S(w,V,te,he){const xe=c.attributes,K=V.attributes;let P=0;const W=te.getAttributes();for(const q in W)if(W[q].location>=0){const me=xe[q];let D=K[q];if(D===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(D=w.instanceColor)),me===void 0||me.attribute!==D||D&&me.data!==D.data)return!0;P++}return c.attributesNum!==P||c.index!==he}function M(w,V,te,he){const xe={},K=V.attributes;let P=0;const W=te.getAttributes();for(const q in W)if(W[q].location>=0){let me=K[q];me===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const D={};D.attribute=me,me&&me.data&&(D.data=me.data),xe[q]=D,P++}c.attributes=xe,c.attributesNum=P,c.index=he}function T(){const w=c.newAttributes;for(let V=0,te=w.length;V<te;V++)w[V]=0}function y(w){v(w,0)}function v(w,V){const te=c.newAttributes,he=c.enabledAttributes,xe=c.attributeDivisors;te[w]=1,he[w]===0&&(r.enableVertexAttribArray(w),he[w]=1),xe[w]!==V&&(r.vertexAttribDivisor(w,V),xe[w]=V)}function L(){const w=c.newAttributes,V=c.enabledAttributes;for(let te=0,he=V.length;te<he;te++)V[te]!==w[te]&&(r.disableVertexAttribArray(te),V[te]=0)}function U(w,V,te,he,xe,K,P){P===!0?r.vertexAttribIPointer(w,V,te,xe,K):r.vertexAttribPointer(w,V,te,he,xe,K)}function I(w,V,te,he){T();const xe=he.attributes,K=te.getAttributes(),P=V.defaultAttributeValues;for(const W in K){const q=K[W];if(q.location>=0){let pe=xe[W];if(pe===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor)),pe!==void 0){const me=pe.normalized,D=pe.itemSize,ie=e.get(pe);if(ie===void 0)continue;const Se=ie.buffer,Te=ie.type,Ue=ie.bytesPerElement,ae=Te===r.INT||Te===r.UNSIGNED_INT||pe.gpuType===Ip;if(pe.isInterleavedBufferAttribute){const fe=pe.data,Ne=fe.stride,je=pe.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<q.locationSize;He++)v(q.location+He,fe.meshPerAttribute);w.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<q.locationSize;He++)y(q.location+He);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let He=0;He<q.locationSize;He++)U(q.location+He,D/q.locationSize,Te,me,Ne*Ue,(je+D/q.locationSize*He)*Ue,ae)}else{if(pe.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)v(q.location+fe,pe.meshPerAttribute);w.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let fe=0;fe<q.locationSize;fe++)y(q.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let fe=0;fe<q.locationSize;fe++)U(q.location+fe,D/q.locationSize,Te,me,D*Ue,D/q.locationSize*fe*Ue,ae)}}else if(P!==void 0){const me=P[W];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(q.location,me);break;case 3:r.vertexAttrib3fv(q.location,me);break;case 4:r.vertexAttrib4fv(q.location,me);break;default:r.vertexAttrib1fv(q.location,me)}}}}L()}function k(){Q();for(const w in a){const V=a[w];for(const te in V){const he=V[te];for(const xe in he)g(he[xe].object),delete he[xe];delete V[te]}delete a[w]}}function N(w){if(a[w.id]===void 0)return;const V=a[w.id];for(const te in V){const he=V[te];for(const xe in he)g(he[xe].object),delete he[xe];delete V[te]}delete a[w.id]}function z(w){for(const V in a){const te=a[V];if(te[w.id]===void 0)continue;const he=te[w.id];for(const xe in he)g(he[xe].object),delete he[xe];delete te[w.id]}}function Q(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:C,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:y,disableUnusedAttributes:L}}function vT(r,e,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];n.update(S,a,1)}function m(p,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T]*x[T];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function bT(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==$i&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Q=z===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Va&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ia&&!Q)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(pt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:I,vertexTextures:k,maxSamples:N}}function yT(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new ir,d=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||a!==0||o;return o=x,a=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,S){const M=_.clippingPlanes,T=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!o||M===null||M.length===0||c&&!y)c?g(null):p();else{const L=c?0:a,U=L*4;let I=v.clippingState||null;m.value=I,I=g(M,x,U,S);for(let k=0;k!==U;++k)I[k]=n[k];v.clippingState=I,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,x,S,M){const T=_!==null?_.length:0;let y=null;if(T!==0){if(y=m.value,M!==!0||y===null){const v=S+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,I=S;U!==T;++U,I+=4)u.copy(_[U]).applyMatrix4(L,d),u.normal.toArray(y,I),y[I+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function ST(r){let e=new WeakMap;function n(u,d){return d===L0?u.mapping=bo:d===N0&&(u.mapping=yo),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===L0||d===N0)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new g3(m.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Ts=4,Nv=[.125,.215,.35,.446,.526,.582],sr=20,MT=256,Cl=new U3,Pv=new Gt;let l0=null,c0=0,u0=0,f0=!1;const ET=new le;class zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=ET}=c;l0=this._renderer.getRenderTarget(),c0=this._renderer.getActiveCubeFace(),u0=this._renderer.getActiveMipmapLevel(),f0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(l0,c0,u0),this._renderer.xr.enabled=f0,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bo||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),l0=this._renderer.getRenderTarget(),c0=this._renderer.getActiveCubeFace(),u0=this._renderer.getActiveMipmapLevel(),f0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Co,format:$i,colorSpace:So,depthBuffer:!1},o=Iv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TT(c)),this._blurMaterial=RT(c,e,n),this._ggxMaterial=AT(c,e,n)}return o}_compileMaterial(e){const n=new Si(new Qi,e);this._renderer.compile(n,Cl)}_sceneToCubeUV(e,n,a,o,c){const m=new Pi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(Pv),_.toneMapping=Rs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new sc,new Ol({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,v=!0):(y.color.copy(Pv),v=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):I===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const k=this._cubeSize;lo(o,I*k,U>2?k:0,k,k),_.setRenderTarget(o),v&&_.render(T,m),_.render(e,m)}_.toneMapping=S,_.autoClear=x,e.background=L}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===bo||e.mapping===yo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;lo(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Cl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=.05+p*.95,S=_*x,{_lodMax:M}=this,T=this._sizeLods[a],y=3*T*(a>M-Ts?a-M+Ts:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=M-n,lo(c,y,v,3*T,2*T),o.setRenderTarget(c),o.render(d,Cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,lo(e,y,v,3*T,2*T),o.setRenderTarget(e),o.render(d,Cl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&fn("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const x=p.uniforms,S=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*sr-1),T=c/M,y=isFinite(c)?1+Math.floor(g*T):sr;y>sr&&pt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${sr}`);const v=[];let L=0;for(let z=0;z<sr;++z){const Q=z/T,C=Math.exp(-Q*Q/2);v.push(C),z===0?L+=C:z<y&&(L+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=M,x.mipInt.value=U-a;const I=this._sizeLods[o],k=3*I*(o>U-Ts?o-U+Ts:0),N=4*(this._cubeSize-I);lo(n,k,N,3*I,2*I),m.setRenderTarget(n),m.render(_,Cl)}}function TT(r){const e=[],n=[],a=[];let o=r;const c=r-Ts+1+Nv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>r-Ts?m=Nv[u-r+Ts-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,T=3,y=2,v=1,L=new Float32Array(T*M*S),U=new Float32Array(y*M*S),I=new Float32Array(v*M*S);for(let N=0;N<S;N++){const z=N%3*2/3-1,Q=N>2?0:-1,C=[z,Q,0,z+2/3,Q,0,z+2/3,Q+1,0,z,Q,0,z+2/3,Q+1,0,z,Q+1,0];L.set(C,T*M*N),U.set(x,y*M*N);const w=[N,N,N,N,N,N];I.set(w,v*M*N)}const k=new Qi;k.setAttribute("position",new ca(L,T)),k.setAttribute("uv",new ca(U,y)),k.setAttribute("faceIndex",new ca(I,v)),a.push(new Si(k,null)),o>Ts&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Iv(r,e,n){const a=new mr(r,e,n);return a.texture.mapping=pf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function lo(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function AT(r,e,n){return new ka({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function RT(r,e,n){const a=new Float32Array(sr),o=new le(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Fv(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Bv(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

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
	`}function wT(r){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===L0||m===N0,g=m===bo||m===yo;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new zv(r)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new zv(r)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function CT(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Wl("WebGLRenderer: "+a+" extension not supported."),o}}}function DT(r,e,n,a){const o={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",u),delete o[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,M=_.attributes.position;let T=0;if(S!==null){const L=S.array;T=S.version;for(let U=0,I=L.length;U<I;U+=3){const k=L[U+0],N=L[U+1],z=L[U+2];x.push(k,N,N,z,z,k)}}else if(M!==void 0){const L=M.array;T=M.version;for(let U=0,I=L.length/3-1;U<I;U+=3){const k=U+0,N=U+1,z=U+2;x.push(k,N,N,z,z,k)}}else return;const y=new(I2(x)?G2:H2)(x,1);y.version=T;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function OT(r,e,n){let a;function o(x){a=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function m(x,S){r.drawElements(a,S,c,x*u),n.update(S,a,1)}function p(x,S,M){M!==0&&(r.drawElementsInstanced(a,S,c,x*u,M),n.update(S,a,M))}function g(x,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,x,0,M);let y=0;for(let v=0;v<M;v++)y+=S[v];n.update(y,a,1)}function _(x,S,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/u,S[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,c,x,0,T,0,M);let v=0;for(let L=0;L<M;L++)v+=S[L]*T[L];n.update(v,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function UT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:fn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function LT(r,e,n){const a=new WeakMap,o=new gn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let w=function(){Q.dispose(),a.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let I=0;M===!0&&(I=1),T===!0&&(I=2),y===!0&&(I=3);let k=d.attributes.position.count*I,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*N*4*_),Q=new F2(z,k,N,_);Q.type=Ia,Q.needsUpdate=!0;const C=I*4;for(let V=0;V<_;V++){const te=v[V],he=L[V],xe=U[V],K=k*N*4*V;for(let P=0;P<te.count;P++){const W=P*C;M===!0&&(o.fromBufferAttribute(te,P),z[K+W+0]=o.x,z[K+W+1]=o.y,z[K+W+2]=o.z,z[K+W+3]=0),T===!0&&(o.fromBufferAttribute(he,P),z[K+W+4]=o.x,z[K+W+5]=o.y,z[K+W+6]=o.z,z[K+W+7]=0),y===!0&&(o.fromBufferAttribute(xe,P),z[K+W+8]=o.x,z[K+W+9]=o.y,z[K+W+10]=o.z,z[K+W+11]=xe.itemSize===4?o.w:1)}}x={count:_,texture:Q,size:new qt(k,N)},a.set(d,x),d.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const T=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function NT(r,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const Y2=new Bn,Hv=new X2(1,1),$2=new F2,Z2=new JS,K2=new k2,Gv=[],Vv=[],jv=new Float32Array(16),kv=new Float32Array(9),Xv=new Float32Array(4);function Oo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=Gv[o];if(c===void 0&&(c=new Float32Array(o),Gv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function On(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Un(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function _f(r,e){let n=Vv[e];n===void 0&&(n=new Int32Array(e),Vv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function PT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function zT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(On(n,e))return;r.uniform2fv(this.addr,e),Un(n,e)}}function IT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(On(n,e))return;r.uniform3fv(this.addr,e),Un(n,e)}}function FT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(On(n,e))return;r.uniform4fv(this.addr,e),Un(n,e)}}function BT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(On(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Un(n,e)}else{if(On(n,a))return;Xv.set(a),r.uniformMatrix2fv(this.addr,!1,Xv),Un(n,a)}}function HT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(On(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Un(n,e)}else{if(On(n,a))return;kv.set(a),r.uniformMatrix3fv(this.addr,!1,kv),Un(n,a)}}function GT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(On(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Un(n,e)}else{if(On(n,a))return;jv.set(a),r.uniformMatrix4fv(this.addr,!1,jv),Un(n,a)}}function VT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function jT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(On(n,e))return;r.uniform2iv(this.addr,e),Un(n,e)}}function kT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(On(n,e))return;r.uniform3iv(this.addr,e),Un(n,e)}}function XT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(On(n,e))return;r.uniform4iv(this.addr,e),Un(n,e)}}function WT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function qT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(On(n,e))return;r.uniform2uiv(this.addr,e),Un(n,e)}}function YT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(On(n,e))return;r.uniform3uiv(this.addr,e),Un(n,e)}}function $T(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(On(n,e))return;r.uniform4uiv(this.addr,e),Un(n,e)}}function ZT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Hv.compareFunction=z2,c=Hv):c=Y2,n.setTexture2D(e||c,o)}function KT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||Z2,o)}function QT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||K2,o)}function JT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||$2,o)}function eA(r){switch(r){case 5126:return PT;case 35664:return zT;case 35665:return IT;case 35666:return FT;case 35674:return BT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return jT;case 35668:case 35672:return kT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}function tA(r,e){r.uniform1fv(this.addr,e)}function nA(r,e){const n=Oo(e,this.size,2);r.uniform2fv(this.addr,n)}function iA(r,e){const n=Oo(e,this.size,3);r.uniform3fv(this.addr,n)}function aA(r,e){const n=Oo(e,this.size,4);r.uniform4fv(this.addr,n)}function sA(r,e){const n=Oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function rA(r,e){const n=Oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function oA(r,e){const n=Oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function lA(r,e){r.uniform1iv(this.addr,e)}function cA(r,e){r.uniform2iv(this.addr,e)}function uA(r,e){r.uniform3iv(this.addr,e)}function fA(r,e){r.uniform4iv(this.addr,e)}function dA(r,e){r.uniform1uiv(this.addr,e)}function hA(r,e){r.uniform2uiv(this.addr,e)}function pA(r,e){r.uniform3uiv(this.addr,e)}function mA(r,e){r.uniform4uiv(this.addr,e)}function gA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);On(a,c)||(r.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Y2,c[u])}function _A(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);On(a,c)||(r.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Z2,c[u])}function xA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);On(a,c)||(r.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||K2,c[u])}function vA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);On(a,c)||(r.uniform1iv(this.addr,c),Un(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||$2,c[u])}function bA(r){switch(r){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return aA;case 35674:return sA;case 35675:return rA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return dA;case 36294:return hA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return vA}}class yA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=eA(n.type)}}class SA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bA(n.type)}}class MA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const d0=/(\w+)(\])?(\[|\.)?/g;function Wv(r,e){r.seq.push(e),r.map[e.id]=e}function EA(r,e,n){const a=r.name,o=a.length;for(d0.lastIndex=0;;){const c=d0.exec(a),u=d0.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){Wv(n,p===void 0?new yA(d,r,e):new SA(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new MA(d),Wv(n,_)),n=_}}}class Vu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);EA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function qv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const TA=37297;let AA=0;function RA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const Yv=new yt;function wA(r){It._getMatrix(Yv,It.workingColorSpace,r);const e=`mat3( ${Yv.elements.map(n=>n.toFixed(4))} )`;switch(It.getTransfer(r)){case Qu:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $v(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+RA(r.getShaderSource(e),d)}else return c}function CA(r,e){const n=wA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function DA(r,e){let n;switch(e){case AS:n="Linear";break;case RS:n="Reinhard";break;case wS:n="Cineon";break;case CS:n="ACESFilmic";break;case OS:n="AgX";break;case US:n="Neutral";break;case DS:n="Custom";break;default:pt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zu=new le;function OA(){It.getLuminanceCoefficients(zu);const r=zu.x.toFixed(4),e=zu.y.toFixed(4),n=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function LA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function NA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Dl(r){return r!==""}function Zv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(r){return r.replace(PA,IA)}const zA=new Map;function IA(r,e){let n=Mt[e];if(n===void 0){const a=zA.get(e);if(a!==void 0)n=Mt[a],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return pp(n)}const FA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qv(r){return r.replace(FA,BA)}function BA(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Jv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function HA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===A2?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===sS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pa&&(e="SHADOWMAP_TYPE_VSM"),e}function GA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bo:case yo:e="ENVMAP_TYPE_CUBE";break;case pf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function jA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case R2:e="ENVMAP_BLENDING_MULTIPLY";break;case ES:e="ENVMAP_BLENDING_MIX";break;case TS:e="ENVMAP_BLENDING_ADD";break}return e}function kA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function XA(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=HA(n),p=GA(n),g=VA(n),_=jA(n),x=kA(n),S=UA(n),M=LA(c),T=o.createProgram();let y,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Dl).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Dl).join(`
`),v.length>0&&(v+=`
`)):(y=[Jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),v=[Jv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Rs?"#define TONE_MAPPING":"",n.toneMapping!==Rs?Mt.tonemapping_pars_fragment:"",n.toneMapping!==Rs?DA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,CA("linearToOutputTexel",n.outputColorSpace),OA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dl).join(`
`)),u=pp(u),u=Zv(u,n),u=Kv(u,n),d=pp(d),d=Zv(d,n),d=Kv(d,n),u=Qv(u),d=Qv(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=L+y+u,I=L+v+d,k=qv(o,o.VERTEX_SHADER,U),N=qv(o,o.FRAGMENT_SHADER,I);o.attachShader(T,k),o.attachShader(T,N),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function z(V){if(r.debug.checkShaderErrors){const te=o.getProgramInfoLog(T)||"",he=o.getShaderInfoLog(k)||"",xe=o.getShaderInfoLog(N)||"",K=te.trim(),P=he.trim(),W=xe.trim();let q=!0,pe=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,k,N);else{const me=$v(o,k,"vertex"),D=$v(o,N,"fragment");fn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+K+`
`+me+`
`+D)}else K!==""?pt("WebGLProgram: Program Info Log:",K):(P===""||W==="")&&(pe=!1);pe&&(V.diagnostics={runnable:q,programLog:K,vertexShader:{log:P,prefix:y},fragmentShader:{log:W,prefix:v}})}o.deleteShader(k),o.deleteShader(N),Q=new Vu(o,T),C=NA(o,T)}let Q;this.getUniforms=function(){return Q===void 0&&z(this),Q};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(T,TA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=N,this}let WA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new YA(e),n.set(e,a)),a}}class YA{constructor(e){this.id=WA++,this.code=e,this.usedTimes=0}}function $A(r,e,n,a,o,c,u){const d=new Wp,m=new qA,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,V,te,he){const xe=te.fog,K=he.geometry,P=C.isMeshStandardMaterial?te.environment:null,W=(C.isMeshStandardMaterial?n:e).get(C.envMap||P),q=W&&W.mapping===pf?W.image.height:null,pe=M[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&pt("WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,D=me!==void 0?me.length:0;let ie=0;K.morphAttributes.position!==void 0&&(ie=1),K.morphAttributes.normal!==void 0&&(ie=2),K.morphAttributes.color!==void 0&&(ie=3);let Se,Te,Ue,ae;if(pe){const St=oa[pe];Se=St.vertexShader,Te=St.fragmentShader}else Se=C.vertexShader,Te=C.fragmentShader,m.update(C),Ue=m.getVertexShaderID(C),ae=m.getFragmentShaderID(C);const fe=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),je=he.isInstancedMesh===!0,He=he.isBatchedMesh===!0,st=!!C.map,Ot=!!C.matcap,ft=!!W,Rt=!!C.aoMap,H=!!C.lightMap,_t=!!C.bumpMap,vt=!!C.normalMap,Ft=!!C.displacementMap,We=!!C.emissiveMap,kt=!!C.metalnessMap,tt=!!C.roughnessMap,lt=C.anisotropy>0,O=C.clearcoat>0,E=C.dispersion>0,J=C.iridescence>0,be=C.sheen>0,Ee=C.transmission>0,de=lt&&!!C.anisotropyMap,Je=O&&!!C.clearcoatMap,Ie=O&&!!C.clearcoatNormalMap,nt=O&&!!C.clearcoatRoughnessMap,Ye=J&&!!C.iridescenceMap,Ae=J&&!!C.iridescenceThicknessMap,Ce=be&&!!C.sheenColorMap,et=be&&!!C.sheenRoughnessMap,ke=!!C.specularMap,Ge=!!C.specularColorMap,ot=!!C.specularIntensityMap,G=Ee&&!!C.transmissionMap,Pe=Ee&&!!C.thicknessMap,De=!!C.gradientMap,re=!!C.alphaMap,ce=C.alphaTest>0,ge=!!C.alphaHash,Fe=!!C.extensions;let $e=Rs;C.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&($e=r.toneMapping);const Et={shaderID:pe,shaderType:C.type,shaderName:C.name,vertexShader:Se,fragmentShader:Te,defines:C.defines,customVertexShaderID:Ue,customFragmentShaderID:ae,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:He,batchingColor:He&&he._colorsTexture!==null,instancing:je,instancingColor:je&&he.instanceColor!==null,instancingMorph:je&&he.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:So,alphaToCoverage:!!C.alphaToCoverage,map:st,matcap:Ot,envMap:ft,envMapMode:ft&&W.mapping,envMapCubeUVHeight:q,aoMap:Rt,lightMap:H,bumpMap:_t,normalMap:vt,displacementMap:x&&Ft,emissiveMap:We,normalMapObjectSpace:vt&&C.normalMapType===IS,normalMapTangentSpace:vt&&C.normalMapType===zS,metalnessMap:kt,roughnessMap:tt,anisotropy:lt,anisotropyMap:de,clearcoat:O,clearcoatMap:Je,clearcoatNormalMap:Ie,clearcoatRoughnessMap:nt,dispersion:E,iridescence:J,iridescenceMap:Ye,iridescenceThicknessMap:Ae,sheen:be,sheenColorMap:Ce,sheenRoughnessMap:et,specularMap:ke,specularColorMap:Ge,specularIntensityMap:ot,transmission:Ee,transmissionMap:G,thicknessMap:Pe,gradientMap:De,opaque:C.transparent===!1&&C.blending===uo&&C.alphaToCoverage===!1,alphaMap:re,alphaTest:ce,alphaHash:ge,combine:C.combine,mapUv:st&&T(C.map.channel),aoMapUv:Rt&&T(C.aoMap.channel),lightMapUv:H&&T(C.lightMap.channel),bumpMapUv:_t&&T(C.bumpMap.channel),normalMapUv:vt&&T(C.normalMap.channel),displacementMapUv:Ft&&T(C.displacementMap.channel),emissiveMapUv:We&&T(C.emissiveMap.channel),metalnessMapUv:kt&&T(C.metalnessMap.channel),roughnessMapUv:tt&&T(C.roughnessMap.channel),anisotropyMapUv:de&&T(C.anisotropyMap.channel),clearcoatMapUv:Je&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:et&&T(C.sheenRoughnessMap.channel),specularMapUv:ke&&T(C.specularMap.channel),specularColorMapUv:Ge&&T(C.specularColorMap.channel),specularIntensityMapUv:ot&&T(C.specularIntensityMap.channel),transmissionMapUv:G&&T(C.transmissionMap.channel),thicknessMapUv:Pe&&T(C.thicknessMap.channel),alphaMapUv:re&&T(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(vt||lt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:he.isPoints===!0&&!!K.attributes.uv&&(st||re),fog:!!xe,useFog:C.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:he.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,decodeVideoTexture:st&&C.map.isVideoTexture===!0&&It.getTransfer(C.map.colorSpace)===Kt,decodeVideoTextureEmissive:We&&C.emissiveMap.isVideoTexture===!0&&It.getTransfer(C.emissiveMap.colorSpace)===Kt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===za,flipSided:C.side===ci,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Fe&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&C.extensions.multiDraw===!0||He)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Et.vertexUv1s=p.has(1),Et.vertexUv2s=p.has(2),Et.vertexUv3s=p.has(3),p.clear(),Et}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)w.push(V),w.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(L(w,C),U(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function U(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function I(C){const w=M[C.type];let V;if(w){const te=oa[w];V=d3.clone(te.uniforms)}else V=C.uniforms;return V}function k(C,w){let V;for(let te=0,he=g.length;te<he;te++){const xe=g[te];if(xe.cacheKey===w){V=xe,++V.usedTimes;break}}return V===void 0&&(V=new XA(r,w,C,c),g.push(V)),V}function N(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function z(C){m.remove(C)}function Q(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:I,acquireProgram:k,releaseProgram:N,releaseShaderCache:z,programs:g,dispose:Q}}function ZA(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function KA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function e2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function t2(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(_,x,S,M,T,y){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:M,renderOrder:_.renderOrder,z:T,group:y},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=T,v.group=y),e++,v}function d(_,x,S,M,T,y){const v=u(_,x,S,M,T,y);S.transmission>0?a.push(v):S.transparent===!0?o.push(v):n.push(v)}function m(_,x,S,M,T,y){const v=u(_,x,S,M,T,y);S.transmission>0?a.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function p(_,x){n.length>1&&n.sort(_||KA),a.length>1&&a.sort(x||e2),o.length>1&&o.sort(x||e2)}function g(){for(let _=e,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:m,finish:g,sort:p}}function QA(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new t2,r.set(a,[u])):o>=c.length?(u=new t2,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function JA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new Gt};break;case"SpotLight":n={position:new le,direction:new le,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=n,n}}}function eR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let tR=0;function nR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function iR(r){const e=new JA,n=eR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new le);const o=new le,c=new dn,u=new dn;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let S=0,M=0,T=0,y=0,v=0,L=0,U=0,I=0,k=0,N=0,z=0;p.sort(nR);for(let C=0,w=p.length;C<w;C++){const V=p[C],te=V.color,he=V.intensity,xe=V.distance,K=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=te.r*he,_+=te.g*he,x+=te.b*he;else if(V.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(V.sh.coefficients[P],he);z++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,a.directionalShadow[S]=q,a.directionalShadowMap[S]=K,a.directionalShadowMatrix[S]=V.shadow.matrix,L++}a.directional[S]=P,S++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(te).multiplyScalar(he),P.distance=xe,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,a.spot[T]=P;const W=V.shadow;if(V.map&&(a.spotLightMap[k]=V.map,k++,W.updateMatrices(V),V.castShadow&&N++),a.spotLightMatrix[T]=W.matrix,V.castShadow){const q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,a.spotShadow[T]=q,a.spotShadowMap[T]=K,I++}T++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(te).multiplyScalar(he),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),a.rectArea[y]=P,y++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const W=V.shadow,q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,a.pointShadow[M]=q,a.pointShadowMap[M]=K,a.pointShadowMatrix[M]=V.shadow.matrix,U++}a.point[M]=P,M++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(he),P.groundColor.copy(V.groundColor).multiplyScalar(he),a.hemi[v]=P,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Be.LTC_FLOAT_1,a.rectAreaLTC2=Be.LTC_FLOAT_2):(a.rectAreaLTC1=Be.LTC_HALF_1,a.rectAreaLTC2=Be.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const Q=a.hash;(Q.directionalLength!==S||Q.pointLength!==M||Q.spotLength!==T||Q.rectAreaLength!==y||Q.hemiLength!==v||Q.numDirectionalShadows!==L||Q.numPointShadows!==U||Q.numSpotShadows!==I||Q.numSpotMaps!==k||Q.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=T,a.rectArea.length=y,a.point.length=M,a.hemi.length=v,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=I+k-N,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=z,Q.directionalLength=S,Q.pointLength=M,Q.spotLength=T,Q.rectAreaLength=y,Q.hemiLength=v,Q.numDirectionalShadows=L,Q.numPointShadows=U,Q.numSpotShadows=I,Q.numSpotMaps=k,Q.numLightProbes=z,a.version=tR++)}function m(p,g){let _=0,x=0,S=0,M=0,T=0;const y=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const U=p[v];if(U.isDirectionalLight){const I=a.directional[_];I.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(y),_++}else if(U.isSpotLight){const I=a.spot[S];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const I=a.rectArea[M];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),u.identity(),c.copy(U.matrixWorld),c.premultiply(y),u.extractRotation(c),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const I=a.point[x];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const I=a.hemi[T];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:a}}function n2(r){const e=new iR(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function aR(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new n2(r),e.set(o,[d])):c>=u.length?(d=new n2(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const sR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rR=`uniform sampler2D shadow_pass;
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
}`;function oR(r,e,n){let a=new Yp;const o=new qt,c=new qt,u=new gn,d=new A3({depthPacking:PS}),m=new R3,p={},g=n.maxTextureSize,_={[Ds]:ci,[ci]:Ds,[za]:za},x=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:sR,fragmentShader:rR}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new Qi;M.setAttribute("position",new ca(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Si(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A2;let v=this.type;this.render=function(N,z,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Ba),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const he=v!==Pa&&this.type===Pa,xe=v===Pa&&this.type!==Pa;for(let K=0,P=N.length;K<P;K++){const W=N[K],q=W.shadow;if(q===void 0){pt("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const pe=q.getFrameExtents();if(o.multiply(pe),c.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/pe.x),o.x=c.x*pe.x,q.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/pe.y),o.y=c.y*pe.y,q.mapSize.y=c.y)),q.map===null||he===!0||xe===!0){const D=this.type!==Pa?{minFilter:Ei,magFilter:Ei}:{};q.map!==null&&q.map.dispose(),q.map=new mr(o.x,o.y,D),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const me=q.getViewportCount();for(let D=0;D<me;D++){const ie=q.getViewport(D);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),te.viewport(u),q.updateMatrices(W,D),a=q.getFrustum(),I(z,Q,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===Pa&&L(q,Q),q.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(C,w,V)};function L(N,z){const Q=e.update(T);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new mr(o.x,o.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,Q,x,T,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,Q,S,T,null)}function U(N,z,Q,C){let w=null;const V=Q.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)w=V;else if(w=Q.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const te=w.uuid,he=z.uuid;let xe=p[te];xe===void 0&&(xe={},p[te]=xe);let K=xe[he];K===void 0&&(K=w.clone(),xe[he]=K,z.addEventListener("dispose",k)),w=K}if(w.visible=z.visible,w.wireframe=z.wireframe,C===Pa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,Q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=r.properties.get(w);te.light=Q}return w}function I(N,z,Q,C,w){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===Pa)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,N.matrixWorld);const he=e.update(N),xe=N.material;if(Array.isArray(xe)){const K=he.groups;for(let P=0,W=K.length;P<W;P++){const q=K[P],pe=xe[q.materialIndex];if(pe&&pe.visible){const me=U(N,pe,C,w);N.onBeforeShadow(r,N,z,Q,he,me,q),r.renderBufferDirect(Q,null,he,me,N,q),N.onAfterShadow(r,N,z,Q,he,me,q)}}}else if(xe.visible){const K=U(N,xe,C,w);N.onBeforeShadow(r,N,z,Q,he,K,null),r.renderBufferDirect(Q,null,he,K,N,null),N.onAfterShadow(r,N,z,Q,he,K,null)}}const te=N.children;for(let he=0,xe=te.length;he<xe;he++)I(te[he],z,Q,C,w)}function k(N){N.target.removeEventListener("dispose",k);for(const Q in p){const C=p[Q],w=N.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const lR={[A0]:R0,[w0]:O0,[C0]:U0,[vo]:D0,[R0]:A0,[O0]:w0,[U0]:C0,[D0]:vo};function cR(r,e){function n(){let G=!1;const Pe=new gn;let De=null;const re=new gn(0,0,0,0);return{setMask:function(ce){De!==ce&&!G&&(r.colorMask(ce,ce,ce,ce),De=ce)},setLocked:function(ce){G=ce},setClear:function(ce,ge,Fe,$e,Et){Et===!0&&(ce*=$e,ge*=$e,Fe*=$e),Pe.set(ce,ge,Fe,$e),re.equals(Pe)===!1&&(r.clearColor(ce,ge,Fe,$e),re.copy(Pe))},reset:function(){G=!1,De=null,re.set(-1,0,0,0)}}}function a(){let G=!1,Pe=!1,De=null,re=null,ce=null;return{setReversed:function(ge){if(Pe!==ge){const Fe=e.get("EXT_clip_control");ge?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Pe=ge;const $e=ce;ce=null,this.setClear($e)}},getReversed:function(){return Pe},setTest:function(ge){ge?fe(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(ge){De!==ge&&!G&&(r.depthMask(ge),De=ge)},setFunc:function(ge){if(Pe&&(ge=lR[ge]),re!==ge){switch(ge){case A0:r.depthFunc(r.NEVER);break;case R0:r.depthFunc(r.ALWAYS);break;case w0:r.depthFunc(r.LESS);break;case vo:r.depthFunc(r.LEQUAL);break;case C0:r.depthFunc(r.EQUAL);break;case D0:r.depthFunc(r.GEQUAL);break;case O0:r.depthFunc(r.GREATER);break;case U0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=ge}},setLocked:function(ge){G=ge},setClear:function(ge){ce!==ge&&(Pe&&(ge=1-ge),r.clearDepth(ge),ce=ge)},reset:function(){G=!1,De=null,re=null,ce=null,Pe=!1}}}function o(){let G=!1,Pe=null,De=null,re=null,ce=null,ge=null,Fe=null,$e=null,Et=null;return{setTest:function(St){G||(St?fe(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(St){Pe!==St&&!G&&(r.stencilMask(St),Pe=St)},setFunc:function(St,hn,Nn){(De!==St||re!==hn||ce!==Nn)&&(r.stencilFunc(St,hn,Nn),De=St,re=hn,ce=Nn)},setOp:function(St,hn,Nn){(ge!==St||Fe!==hn||$e!==Nn)&&(r.stencilOp(St,hn,Nn),ge=St,Fe=hn,$e=Nn)},setLocked:function(St){G=St},setClear:function(St){Et!==St&&(r.clearStencil(St),Et=St)},reset:function(){G=!1,Pe=null,De=null,re=null,ce=null,ge=null,Fe=null,$e=null,Et=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],M=null,T=!1,y=null,v=null,L=null,U=null,I=null,k=null,N=null,z=new Gt(0,0,0),Q=0,C=!1,w=null,V=null,te=null,he=null,xe=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=W>=2);let pe=null,me={};const D=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Se=new gn().fromArray(D),Te=new gn().fromArray(ie);function Ue(G,Pe,De,re){const ce=new Uint8Array(4),ge=r.createTexture();r.bindTexture(G,ge),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<De;Fe++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Pe,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(Pe+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return ge}const ae={};ae[r.TEXTURE_2D]=Ue(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=Ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=Ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=Ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),fe(r.DEPTH_TEST),u.setFunc(vo),_t(!1),vt(tv),fe(r.CULL_FACE),Rt(Ba);function fe(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function Ne(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function je(G,Pe){return _[G]!==Pe?(r.bindFramebuffer(G,Pe),_[G]=Pe,G===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Pe),G===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(G,Pe){let De=S,re=!1;if(G){De=x.get(Pe),De===void 0&&(De=[],x.set(Pe,De));const ce=G.textures;if(De.length!==ce.length||De[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Fe=ce.length;ge<Fe;ge++)De[ge]=r.COLOR_ATTACHMENT0+ge;De.length=ce.length,re=!0}}else De[0]!==r.BACK&&(De[0]=r.BACK,re=!0);re&&r.drawBuffers(De)}function st(G){return M!==G?(r.useProgram(G),M=G,!0):!1}const Ot={[ar]:r.FUNC_ADD,[oS]:r.FUNC_SUBTRACT,[lS]:r.FUNC_REVERSE_SUBTRACT};Ot[cS]=r.MIN,Ot[uS]=r.MAX;const ft={[fS]:r.ZERO,[dS]:r.ONE,[hS]:r.SRC_COLOR,[E0]:r.SRC_ALPHA,[vS]:r.SRC_ALPHA_SATURATE,[_S]:r.DST_COLOR,[mS]:r.DST_ALPHA,[pS]:r.ONE_MINUS_SRC_COLOR,[T0]:r.ONE_MINUS_SRC_ALPHA,[xS]:r.ONE_MINUS_DST_COLOR,[gS]:r.ONE_MINUS_DST_ALPHA,[bS]:r.CONSTANT_COLOR,[yS]:r.ONE_MINUS_CONSTANT_COLOR,[SS]:r.CONSTANT_ALPHA,[MS]:r.ONE_MINUS_CONSTANT_ALPHA};function Rt(G,Pe,De,re,ce,ge,Fe,$e,Et,St){if(G===Ba){T===!0&&(Ne(r.BLEND),T=!1);return}if(T===!1&&(fe(r.BLEND),T=!0),G!==rS){if(G!==y||St!==C){if((v!==ar||I!==ar)&&(r.blendEquation(r.FUNC_ADD),v=ar,I=ar),St)switch(G){case uo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nv:r.blendFunc(r.ONE,r.ONE);break;case iv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case av:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:fn("WebGLState: Invalid blending: ",G);break}else switch(G){case uo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case iv:fn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:fn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fn("WebGLState: Invalid blending: ",G);break}L=null,U=null,k=null,N=null,z.set(0,0,0),Q=0,y=G,C=St}return}ce=ce||Pe,ge=ge||De,Fe=Fe||re,(Pe!==v||ce!==I)&&(r.blendEquationSeparate(Ot[Pe],Ot[ce]),v=Pe,I=ce),(De!==L||re!==U||ge!==k||Fe!==N)&&(r.blendFuncSeparate(ft[De],ft[re],ft[ge],ft[Fe]),L=De,U=re,k=ge,N=Fe),($e.equals(z)===!1||Et!==Q)&&(r.blendColor($e.r,$e.g,$e.b,Et),z.copy($e),Q=Et),y=G,C=!1}function H(G,Pe){G.side===za?Ne(r.CULL_FACE):fe(r.CULL_FACE);let De=G.side===ci;Pe&&(De=!De),_t(De),G.blending===uo&&G.transparent===!1?Rt(Ba):Rt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),c.setMask(G.colorWrite);const re=G.stencilWrite;d.setTest(re),re&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),We(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(G){w!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),w=G)}function vt(G){G!==iS?(fe(r.CULL_FACE),G!==V&&(G===tv?r.cullFace(r.BACK):G===aS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),V=G}function Ft(G){G!==te&&(P&&r.lineWidth(G),te=G)}function We(G,Pe,De){G?(fe(r.POLYGON_OFFSET_FILL),(he!==Pe||xe!==De)&&(r.polygonOffset(Pe,De),he=Pe,xe=De)):Ne(r.POLYGON_OFFSET_FILL)}function kt(G){G?fe(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function tt(G){G===void 0&&(G=r.TEXTURE0+K-1),pe!==G&&(r.activeTexture(G),pe=G)}function lt(G,Pe,De){De===void 0&&(pe===null?De=r.TEXTURE0+K-1:De=pe);let re=me[De];re===void 0&&(re={type:void 0,texture:void 0},me[De]=re),(re.type!==G||re.texture!==Pe)&&(pe!==De&&(r.activeTexture(De),pe=De),r.bindTexture(G,Pe||ae[G]),re.type=G,re.texture=Pe)}function O(){const G=me[pe];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function be(){try{r.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Je(){try{r.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ie(){try{r.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function nt(){try{r.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ye(){try{r.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ae(){try{r.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ce(G){Se.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function et(G){Te.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Te.copy(G))}function ke(G,Pe){let De=p.get(Pe);De===void 0&&(De=new WeakMap,p.set(Pe,De));let re=De.get(G);re===void 0&&(re=r.getUniformBlockIndex(Pe,G.name),De.set(G,re))}function Ge(G,Pe){const re=p.get(Pe).get(G);m.get(Pe)!==re&&(r.uniformBlockBinding(Pe,re,G.__bindingPointIndex),m.set(Pe,re))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},pe=null,me={},_={},x=new WeakMap,S=[],M=null,T=!1,y=null,v=null,L=null,U=null,I=null,k=null,N=null,z=new Gt(0,0,0),Q=0,C=!1,w=null,V=null,te=null,he=null,xe=null,Se.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:fe,disable:Ne,bindFramebuffer:je,drawBuffers:He,useProgram:st,setBlending:Rt,setMaterial:H,setFlipSided:_t,setCullFace:vt,setLineWidth:Ft,setPolygonOffset:We,setScissorTest:kt,activeTexture:tt,bindTexture:lt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Ye,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:Ie,texStorage3D:nt,texSubImage2D:be,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:Je,scissor:Ce,viewport:et,reset:ot}}function uR(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,E){return S?new OffscreenCanvas(O,E):Xl("canvas")}function T(O,E,J){let be=1;const Ee=lt(O);if((Ee.width>J||Ee.height>J)&&(be=J/Math.max(Ee.width,Ee.height)),be<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const de=Math.floor(be*Ee.width),Je=Math.floor(be*Ee.height);_===void 0&&(_=M(de,Je));const Ie=E?M(de,Je):_;return Ie.width=de,Ie.height=Je,Ie.getContext("2d").drawImage(O,0,0,de,Je),pt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+de+"x"+Je+")."),Ie}else return"data"in O&&pt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function y(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,E,J,be,Ee=!1){if(O!==null){if(r[O]!==void 0)return r[O];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=E;if(E===r.RED&&(J===r.FLOAT&&(de=r.R32F),J===r.HALF_FLOAT&&(de=r.R16F),J===r.UNSIGNED_BYTE&&(de=r.R8)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.R8UI),J===r.UNSIGNED_SHORT&&(de=r.R16UI),J===r.UNSIGNED_INT&&(de=r.R32UI),J===r.BYTE&&(de=r.R8I),J===r.SHORT&&(de=r.R16I),J===r.INT&&(de=r.R32I)),E===r.RG&&(J===r.FLOAT&&(de=r.RG32F),J===r.HALF_FLOAT&&(de=r.RG16F),J===r.UNSIGNED_BYTE&&(de=r.RG8)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RG8UI),J===r.UNSIGNED_SHORT&&(de=r.RG16UI),J===r.UNSIGNED_INT&&(de=r.RG32UI),J===r.BYTE&&(de=r.RG8I),J===r.SHORT&&(de=r.RG16I),J===r.INT&&(de=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RGB8UI),J===r.UNSIGNED_SHORT&&(de=r.RGB16UI),J===r.UNSIGNED_INT&&(de=r.RGB32UI),J===r.BYTE&&(de=r.RGB8I),J===r.SHORT&&(de=r.RGB16I),J===r.INT&&(de=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),J===r.UNSIGNED_INT&&(de=r.RGBA32UI),J===r.BYTE&&(de=r.RGBA8I),J===r.SHORT&&(de=r.RGBA16I),J===r.INT&&(de=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),E===r.RGBA){const Je=Ee?Qu:It.getTransfer(be);J===r.FLOAT&&(de=r.RGBA32F),J===r.HALF_FLOAT&&(de=r.RGBA16F),J===r.UNSIGNED_BYTE&&(de=Je===Kt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(O,E){let J;return O?E===null||E===pr||E===Vl?J=r.DEPTH24_STENCIL8:E===Ia?J=r.DEPTH32F_STENCIL8:E===Gl&&(J=r.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===Vl?J=r.DEPTH_COMPONENT24:E===Ia?J=r.DEPTH_COMPONENT32F:E===Gl&&(J=r.DEPTH_COMPONENT16),J}function k(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ei&&O.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function N(O){const E=O.target;E.removeEventListener("dispose",N),Q(E),E.isVideoTexture&&g.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),w(E)}function Q(O){const E=a.get(O);if(E.__webglInit===void 0)return;const J=O.source,be=x.get(J);if(be){const Ee=be[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&C(O),Object.keys(be).length===0&&x.delete(J)}a.remove(O)}function C(O){const E=a.get(O);r.deleteTexture(E.__webglTexture);const J=O.source,be=x.get(J);delete be[E.__cacheKey],u.memory.textures--}function w(O){const E=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(E.__webglFramebuffer[be]))for(let Ee=0;Ee<E.__webglFramebuffer[be].length;Ee++)r.deleteFramebuffer(E.__webglFramebuffer[be][Ee]);else r.deleteFramebuffer(E.__webglFramebuffer[be]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[be])}else{if(Array.isArray(E.__webglFramebuffer))for(let be=0;be<E.__webglFramebuffer.length;be++)r.deleteFramebuffer(E.__webglFramebuffer[be]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let be=0;be<E.__webglColorRenderbuffer.length;be++)E.__webglColorRenderbuffer[be]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[be]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=O.textures;for(let be=0,Ee=J.length;be<Ee;be++){const de=a.get(J[be]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),u.memory.textures--),a.remove(J[be])}a.remove(O)}let V=0;function te(){V=0}function he(){const O=V;return O>=o.maxTextures&&pt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),V+=1,O}function xe(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function K(O,E){const J=a.get(O);if(O.isVideoTexture&&kt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&J.__version!==O.version){const be=O.image;if(be===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(J,O,E);return}}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function P(O,E){const J=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){ae(J,O,E);return}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function W(O,E){const J=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){ae(J,O,E);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function q(O,E){const J=a.get(O);if(O.version>0&&J.__version!==O.version){fe(J,O,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const pe={[P0]:r.REPEAT,[Mi]:r.CLAMP_TO_EDGE,[z0]:r.MIRRORED_REPEAT},me={[Ei]:r.NEAREST,[LS]:r.NEAREST_MIPMAP_NEAREST,[mu]:r.NEAREST_MIPMAP_LINEAR,[qn]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[or]:r.LINEAR_MIPMAP_LINEAR},D={[FS]:r.NEVER,[kS]:r.ALWAYS,[BS]:r.LESS,[z2]:r.LEQUAL,[HS]:r.EQUAL,[jS]:r.GEQUAL,[GS]:r.GREATER,[VS]:r.NOTEQUAL};function ie(O,E){if(E.type===Ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===qn||E.magFilter===Ph||E.magFilter===mu||E.magFilter===or||E.minFilter===qn||E.minFilter===Ph||E.minFilter===mu||E.minFilter===or)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,pe[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,pe[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,pe[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,me[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,me[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ei||E.minFilter!==mu&&E.minFilter!==or||E.type===Ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function Se(O,E){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",N));const be=E.source;let Ee=x.get(be);Ee===void 0&&(Ee={},x.set(be,Ee));const de=xe(E);if(de!==O.__cacheKey){Ee[de]===void 0&&(Ee[de]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Ee[de].usedTimes++;const Je=Ee[O.__cacheKey];Je!==void 0&&(Ee[O.__cacheKey].usedTimes--,Je.usedTimes===0&&C(E)),O.__cacheKey=de,O.__webglTexture=Ee[de].texture}return J}function Te(O,E,J){return Math.floor(Math.floor(O/J)/E)}function Ue(O,E,J,be){const de=O.updateRanges;if(de.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,be,E.data);else{de.sort((Ae,Ce)=>Ae.start-Ce.start);let Je=0;for(let Ae=1;Ae<de.length;Ae++){const Ce=de[Je],et=de[Ae],ke=Ce.start+Ce.count,Ge=Te(et.start,E.width,4),ot=Te(Ce.start,E.width,4);et.start<=ke+1&&Ge===ot&&Te(et.start+et.count-1,E.width,4)===Ge?Ce.count=Math.max(Ce.count,et.start+et.count-Ce.start):(++Je,de[Je]=et)}de.length=Je+1;const Ie=r.getParameter(r.UNPACK_ROW_LENGTH),nt=r.getParameter(r.UNPACK_SKIP_PIXELS),Ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,Ce=de.length;Ae<Ce;Ae++){const et=de[Ae],ke=Math.floor(et.start/4),Ge=Math.ceil(et.count/4),ot=ke%E.width,G=Math.floor(ke/E.width),Pe=Ge,De=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,G),n.texSubImage2D(r.TEXTURE_2D,0,ot,G,Pe,De,J,be,E.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ie),r.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ye)}}function ae(O,E,J){let be=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(be=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(be=r.TEXTURE_3D);const Ee=Se(O,E),de=E.source;n.bindTexture(be,O.__webglTexture,r.TEXTURE0+J);const Je=a.get(de);if(de.version!==Je.__version||Ee===!0){n.activeTexture(r.TEXTURE0+J);const Ie=It.getPrimaries(It.workingColorSpace),nt=E.colorSpace===Es?null:It.getPrimaries(E.colorSpace),Ye=E.colorSpace===Es||Ie===nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Ae=T(E.image,!1,o.maxTextureSize);Ae=tt(E,Ae);const Ce=c.convert(E.format,E.colorSpace),et=c.convert(E.type);let ke=U(E.internalFormat,Ce,et,E.colorSpace,E.isVideoTexture);ie(be,E);let Ge;const ot=E.mipmaps,G=E.isVideoTexture!==!0,Pe=Je.__version===void 0||Ee===!0,De=de.dataReady,re=k(E,Ae);if(E.isDepthTexture)ke=I(E.format===kl,E.type),Pe&&(G?n.texStorage2D(r.TEXTURE_2D,1,ke,Ae.width,Ae.height):n.texImage2D(r.TEXTURE_2D,0,ke,Ae.width,Ae.height,0,Ce,et,null));else if(E.isDataTexture)if(ot.length>0){G&&Pe&&n.texStorage2D(r.TEXTURE_2D,re,ke,ot[0].width,ot[0].height);for(let ce=0,ge=ot.length;ce<ge;ce++)Ge=ot[ce],G?De&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Ce,et,Ge.data):n.texImage2D(r.TEXTURE_2D,ce,ke,Ge.width,Ge.height,0,Ce,et,Ge.data);E.generateMipmaps=!1}else G?(Pe&&n.texStorage2D(r.TEXTURE_2D,re,ke,Ae.width,Ae.height),De&&Ue(E,Ae,Ce,et)):n.texImage2D(r.TEXTURE_2D,0,ke,Ae.width,Ae.height,0,Ce,et,Ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Pe&&n.texStorage3D(r.TEXTURE_2D_ARRAY,re,ke,ot[0].width,ot[0].height,Ae.depth);for(let ce=0,ge=ot.length;ce<ge;ce++)if(Ge=ot[ce],E.format!==$i)if(Ce!==null)if(G){if(De)if(E.layerUpdates.size>0){const Fe=Lv(Ge.width,Ge.height,E.format,E.type);for(const $e of E.layerUpdates){const Et=Ge.data.subarray($e*Fe/Ge.data.BYTES_PER_ELEMENT,($e+1)*Fe/Ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,$e,Ge.width,Ge.height,1,Ce,Et)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Ge.width,Ge.height,Ae.depth,Ce,Ge.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ce,ke,Ge.width,Ge.height,Ae.depth,0,Ge.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?De&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,ce,0,0,0,Ge.width,Ge.height,Ae.depth,Ce,et,Ge.data):n.texImage3D(r.TEXTURE_2D_ARRAY,ce,ke,Ge.width,Ge.height,Ae.depth,0,Ce,et,Ge.data)}else{G&&Pe&&n.texStorage2D(r.TEXTURE_2D,re,ke,ot[0].width,ot[0].height);for(let ce=0,ge=ot.length;ce<ge;ce++)Ge=ot[ce],E.format!==$i?Ce!==null?G?De&&n.compressedTexSubImage2D(r.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Ce,Ge.data):n.compressedTexImage2D(r.TEXTURE_2D,ce,ke,Ge.width,Ge.height,0,Ge.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?De&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Ce,et,Ge.data):n.texImage2D(r.TEXTURE_2D,ce,ke,Ge.width,Ge.height,0,Ce,et,Ge.data)}else if(E.isDataArrayTexture)if(G){if(Pe&&n.texStorage3D(r.TEXTURE_2D_ARRAY,re,ke,Ae.width,Ae.height,Ae.depth),De)if(E.layerUpdates.size>0){const ce=Lv(Ae.width,Ae.height,E.format,E.type);for(const ge of E.layerUpdates){const Fe=Ae.data.subarray(ge*ce/Ae.data.BYTES_PER_ELEMENT,(ge+1)*ce/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Ce,et,Fe)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,et,Ae.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,Ae.width,Ae.height,Ae.depth,0,Ce,et,Ae.data);else if(E.isData3DTexture)G?(Pe&&n.texStorage3D(r.TEXTURE_3D,re,ke,Ae.width,Ae.height,Ae.depth),De&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,et,Ae.data)):n.texImage3D(r.TEXTURE_3D,0,ke,Ae.width,Ae.height,Ae.depth,0,Ce,et,Ae.data);else if(E.isFramebufferTexture){if(Pe)if(G)n.texStorage2D(r.TEXTURE_2D,re,ke,Ae.width,Ae.height);else{let ce=Ae.width,ge=Ae.height;for(let Fe=0;Fe<re;Fe++)n.texImage2D(r.TEXTURE_2D,Fe,ke,ce,ge,0,Ce,et,null),ce>>=1,ge>>=1}}else if(ot.length>0){if(G&&Pe){const ce=lt(ot[0]);n.texStorage2D(r.TEXTURE_2D,re,ke,ce.width,ce.height)}for(let ce=0,ge=ot.length;ce<ge;ce++)Ge=ot[ce],G?De&&n.texSubImage2D(r.TEXTURE_2D,ce,0,0,Ce,et,Ge):n.texImage2D(r.TEXTURE_2D,ce,ke,Ce,et,Ge);E.generateMipmaps=!1}else if(G){if(Pe){const ce=lt(Ae);n.texStorage2D(r.TEXTURE_2D,re,ke,ce.width,ce.height)}De&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,et,Ae)}else n.texImage2D(r.TEXTURE_2D,0,ke,Ce,et,Ae);y(E)&&v(be),Je.__version=de.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function fe(O,E,J){if(E.image.length!==6)return;const be=Se(O,E),Ee=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+J);const de=a.get(Ee);if(Ee.version!==de.__version||be===!0){n.activeTexture(r.TEXTURE0+J);const Je=It.getPrimaries(It.workingColorSpace),Ie=E.colorSpace===Es?null:It.getPrimaries(E.colorSpace),nt=E.colorSpace===Es||Je===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let ge=0;ge<6;ge++)!Ye&&!Ae?Ce[ge]=T(E.image[ge],!0,o.maxCubemapSize):Ce[ge]=Ae?E.image[ge].image:E.image[ge],Ce[ge]=tt(E,Ce[ge]);const et=Ce[0],ke=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type),ot=U(E.internalFormat,ke,Ge,E.colorSpace),G=E.isVideoTexture!==!0,Pe=de.__version===void 0||be===!0,De=Ee.dataReady;let re=k(E,et);ie(r.TEXTURE_CUBE_MAP,E);let ce;if(Ye){G&&Pe&&n.texStorage2D(r.TEXTURE_CUBE_MAP,re,ot,et.width,et.height);for(let ge=0;ge<6;ge++){ce=Ce[ge].mipmaps;for(let Fe=0;Fe<ce.length;Fe++){const $e=ce[Fe];E.format!==$i?ke!==null?G?De&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,$e.width,$e.height,ke,$e.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,ot,$e.width,$e.height,0,$e.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,$e.width,$e.height,ke,Ge,$e.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,ot,$e.width,$e.height,0,ke,Ge,$e.data)}}}else{if(ce=E.mipmaps,G&&Pe){ce.length>0&&re++;const ge=lt(Ce[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,re,ot,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){G?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ce[ge].width,Ce[ge].height,ke,Ge,Ce[ge].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ot,Ce[ge].width,Ce[ge].height,0,ke,Ge,Ce[ge].data);for(let Fe=0;Fe<ce.length;Fe++){const Et=ce[Fe].image[ge].image;G?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,Et.width,Et.height,ke,Ge,Et.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,ot,Et.width,Et.height,0,ke,Ge,Et.data)}}else{G?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ke,Ge,Ce[ge]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ot,ke,Ge,Ce[ge]);for(let Fe=0;Fe<ce.length;Fe++){const $e=ce[Fe];G?De&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,ke,Ge,$e.image[ge]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,ot,ke,Ge,$e.image[ge])}}}y(E)&&v(r.TEXTURE_CUBE_MAP),de.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ne(O,E,J,be,Ee,de){const Je=c.convert(J.format,J.colorSpace),Ie=c.convert(J.type),nt=U(J.internalFormat,Je,Ie,J.colorSpace),Ye=a.get(E),Ae=a.get(J);if(Ae.__renderTarget=E,!Ye.__hasExternalTextures){const Ce=Math.max(1,E.width>>de),et=Math.max(1,E.height>>de);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?n.texImage3D(Ee,de,nt,Ce,et,E.depth,0,Je,Ie,null):n.texImage2D(Ee,de,nt,Ce,et,0,Je,Ie,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,be,Ee,Ae.__webglTexture,0,Ft(E)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,be,Ee,Ae.__webglTexture,de),n.bindFramebuffer(r.FRAMEBUFFER,null)}function je(O,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const be=E.depthTexture,Ee=be&&be.isDepthTexture?be.type:null,de=I(E.stencilBuffer,Ee),Je=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=Ft(E);We(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ie,de,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Je,r.RENDERBUFFER,O)}else{const be=E.textures;for(let Ee=0;Ee<be.length;Ee++){const de=be[Ee],Je=c.convert(de.format,de.colorSpace),Ie=c.convert(de.type),nt=U(de.internalFormat,Je,Ie,de.colorSpace),Ye=Ft(E);J&&We(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,nt,E.width,E.height):We(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,nt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,nt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=a.get(E.depthTexture);be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const Ee=be.__webglTexture,de=Ft(E);if(E.depthTexture.format===jl)We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0);else if(E.depthTexture.format===kl)We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function st(O){const E=a.get(O),J=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const be=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),be){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,be.removeEventListener("dispose",Ee)};be.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=be}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const be=O.texture.mipmaps;be&&be.length>0?He(E.__webglFramebuffer[0],O):He(E.__webglFramebuffer,O)}else if(J){E.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[be]),E.__webglDepthbuffer[be]===void 0)E.__webglDepthbuffer[be]=r.createRenderbuffer(),je(E.__webglDepthbuffer[be],O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[be];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,de)}}else{const be=O.texture.mipmaps;if(be&&be.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),je(E.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,de)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(O,E,J){const be=a.get(O);E!==void 0&&Ne(be.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&st(O)}function ft(O){const E=O.texture,J=a.get(O),be=a.get(E);O.addEventListener("dispose",z);const Ee=O.textures,de=O.isWebGLCubeRenderTarget===!0,Je=Ee.length>1;if(Je||(be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture()),be.__version=E.version,u.memory.textures++),de){J.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Ie]=[];for(let nt=0;nt<E.mipmaps.length;nt++)J.__webglFramebuffer[Ie][nt]=r.createFramebuffer()}else J.__webglFramebuffer[Ie]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)J.__webglFramebuffer[Ie]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Je)for(let Ie=0,nt=Ee.length;Ie<nt;Ie++){const Ye=a.get(Ee[Ie]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&We(O)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Ee.length;Ie++){const nt=Ee[Ie];J.__webglColorRenderbuffer[Ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Ie]);const Ye=c.convert(nt.format,nt.colorSpace),Ae=c.convert(nt.type),Ce=U(nt.internalFormat,Ye,Ae,nt.colorSpace,O.isXRRenderTarget===!0),et=Ft(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Ce,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,J.__webglColorRenderbuffer[Ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),je(J.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){n.bindTexture(r.TEXTURE_CUBE_MAP,be.__webglTexture),ie(r.TEXTURE_CUBE_MAP,E);for(let Ie=0;Ie<6;Ie++)if(E.mipmaps&&E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)Ne(J.__webglFramebuffer[Ie][nt],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,nt);else Ne(J.__webglFramebuffer[Ie],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);y(E)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Je){for(let Ie=0,nt=Ee.length;Ie<nt;Ie++){const Ye=Ee[Ie],Ae=a.get(Ye);let Ce=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ce,Ae.__webglTexture),ie(Ce,Ye),Ne(J.__webglFramebuffer,O,Ye,r.COLOR_ATTACHMENT0+Ie,Ce,0),y(Ye)&&v(Ce)}n.unbindTexture()}else{let Ie=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ie,be.__webglTexture),ie(Ie,E),E.mipmaps&&E.mipmaps.length>0)for(let nt=0;nt<E.mipmaps.length;nt++)Ne(J.__webglFramebuffer[nt],O,E,r.COLOR_ATTACHMENT0,Ie,nt);else Ne(J.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,Ie,0);y(E)&&v(Ie),n.unbindTexture()}O.depthBuffer&&st(O)}function Rt(O){const E=O.textures;for(let J=0,be=E.length;J<be;J++){const Ee=E[J];if(y(Ee)){const de=L(O),Je=a.get(Ee).__webglTexture;n.bindTexture(de,Je),v(de),n.unbindTexture()}}}const H=[],_t=[];function vt(O){if(O.samples>0){if(We(O)===!1){const E=O.textures,J=O.width,be=O.height;let Ee=r.COLOR_BUFFER_BIT;const de=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Je=a.get(O),Ie=E.length>1;if(Ie)for(let Ye=0;Ye<E.length;Ye++)n.bindFramebuffer(r.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const nt=O.texture.mipmaps;nt&&nt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Ye=0;Ye<E.length;Ye++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),Ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Je.__webglColorRenderbuffer[Ye]);const Ae=a.get(E[Ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,J,be,0,0,J,be,Ee,r.NEAREST),m===!0&&(H.length=0,_t.length=0,H.push(r.COLOR_ATTACHMENT0+Ye),O.depthBuffer&&O.resolveDepthBuffer===!1&&(H.push(de),_t.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<E.length;Ye++){n.bindFramebuffer(r.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,Je.__webglColorRenderbuffer[Ye]);const Ae=a.get(E[Ye]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,Ae,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ft(O){return Math.min(o.maxSamples,O.samples)}function We(O){const E=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(O){const E=u.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function tt(O,E){const J=O.colorSpace,be=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==So&&J!==Es&&(It.getTransfer(J)===Kt?(be!==$i||Ee!==Va)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fn("WebGLTextures: Unsupported texture color space:",J)),E}function lt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=he,this.resetTextureUnits=te,this.setTexture2D=K,this.setTexture2DArray=P,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=We}function fR(r,e){function n(a,o=Es){let c;const u=It.getTransfer(o);if(a===Va)return r.UNSIGNED_BYTE;if(a===Fp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Bp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===O2)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===U2)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===C2)return r.BYTE;if(a===D2)return r.SHORT;if(a===Gl)return r.UNSIGNED_SHORT;if(a===Ip)return r.INT;if(a===pr)return r.UNSIGNED_INT;if(a===Ia)return r.FLOAT;if(a===Co)return r.HALF_FLOAT;if(a===L2)return r.ALPHA;if(a===N2)return r.RGB;if(a===$i)return r.RGBA;if(a===jl)return r.DEPTH_COMPONENT;if(a===kl)return r.DEPTH_STENCIL;if(a===P2)return r.RED;if(a===Hp)return r.RED_INTEGER;if(a===Gp)return r.RG;if(a===Vp)return r.RG_INTEGER;if(a===jp)return r.RGBA_INTEGER;if(a===Fu||a===Bu||a===Hu||a===Gu)if(u===Kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===I0||a===F0||a===B0||a===H0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===I0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===F0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===B0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===H0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===G0||a===V0||a===j0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===G0||a===V0)return u===Kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===j0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===k0||a===X0||a===W0||a===q0||a===Y0||a===$0||a===Z0||a===K0||a===Q0||a===J0||a===ep||a===tp||a===np||a===ip)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===k0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===X0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===W0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===q0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Y0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===$0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Z0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===K0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Q0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===J0)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ep)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===tp)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===np)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ip)return u===Kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ap||a===sp||a===rp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===ap)return u===Kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===op||a===lp||a===cp||a===up)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===op)return c.COMPRESSED_RED_RGTC1_EXT;if(a===lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===up)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new W2(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ka({vertexShader:dR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new ra(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Do{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,S=null,M=null;const T=typeof XRWebGLBinding<"u",y=new pR,v={},L=n.getContextAttributes();let U=null,I=null;const k=[],N=[],z=new qt;let Q=null;const C=new Pi;C.viewport=new gn;const w=new Pi;w.viewport=new gn;const V=[C,w],te=new L3;let he=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=k[ae];return fe===void 0&&(fe=new a0,k[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=k[ae];return fe===void 0&&(fe=new a0,k[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=k[ae];return fe===void 0&&(fe=new a0,k[ae]=fe),fe.getHandSpace()};function K(ae){const fe=N.indexOf(ae.inputSource);if(fe===-1)return;const Ne=k[fe];Ne!==void 0&&(Ne.update(ae.inputSource,ae.frame,p||u),Ne.dispatchEvent({type:ae.type,data:ae.inputSource}))}function P(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",W);for(let ae=0;ae<k.length;ae++){const fe=N[ae];fe!==null&&(N[ae]=null,k[ae].disconnect(fe))}he=null,xe=null,y.reset();for(const ae in v)delete v[ae];e.setRenderTarget(U),S=null,x=null,_=null,o=null,I=null,Ue.stop(),a.isPresenting=!1,e.setPixelRatio(Q),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,a.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,a.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",P),o.addEventListener("inputsourceschange",W),L.xrCompatible!==!0&&await n.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,je=null,He=null;L.depth&&(He=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ne=L.stencil?kl:jl,je=L.stencil?Vl:pr);const st={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(st),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new mr(x.textureWidth,x.textureHeight,{format:$i,type:Va,depthTexture:new X2(x.textureWidth,x.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ne={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,Ne),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new mr(S.framebufferWidth,S.framebufferHeight,{format:$i,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Ue.setContext(o),Ue.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(ae){for(let fe=0;fe<ae.removed.length;fe++){const Ne=ae.removed[fe],je=N.indexOf(Ne);je>=0&&(N[je]=null,k[je].disconnect(Ne))}for(let fe=0;fe<ae.added.length;fe++){const Ne=ae.added[fe];let je=N.indexOf(Ne);if(je===-1){for(let st=0;st<k.length;st++)if(st>=N.length){N.push(Ne),je=st;break}else if(N[st]===null){N[st]=Ne,je=st;break}if(je===-1)break}const He=k[je];He&&He.connect(Ne)}}const q=new le,pe=new le;function me(ae,fe,Ne){q.setFromMatrixPosition(fe.matrixWorld),pe.setFromMatrixPosition(Ne.matrixWorld);const je=q.distanceTo(pe),He=fe.projectionMatrix.elements,st=Ne.projectionMatrix.elements,Ot=He[14]/(He[10]-1),ft=He[14]/(He[10]+1),Rt=(He[9]+1)/He[5],H=(He[9]-1)/He[5],_t=(He[8]-1)/He[0],vt=(st[8]+1)/st[0],Ft=Ot*_t,We=Ot*vt,kt=je/(-_t+vt),tt=kt*-_t;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(tt),ae.translateZ(kt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),He[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const lt=Ot+kt,O=ft+kt,E=Ft-tt,J=We+(je-tt),be=Rt*ft/O*lt,Ee=H*ft/O*lt;ae.projectionMatrix.makePerspective(E,J,be,Ee,lt,O),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function D(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let fe=ae.near,Ne=ae.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(Ne=y.depthFar)),te.near=w.near=C.near=fe,te.far=w.far=C.far=Ne,(he!==te.near||xe!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),he=te.near,xe=te.far),te.layers.mask=ae.layers.mask|6,C.layers.mask=te.layers.mask&3,w.layers.mask=te.layers.mask&5;const je=ae.parent,He=te.cameras;D(te,je);for(let st=0;st<He.length;st++)D(He[st],je);He.length===2?me(te,C,w):te.projectionMatrix.copy(C.projectionMatrix),ie(ae,te,je)};function ie(ae,fe,Ne){Ne===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(Ne.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=fp*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(ae){m=ae,x!==null&&(x.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(ae){return v[ae]};let Se=null;function Te(ae,fe){if(g=fe.getViewerPose(p||u),M=fe,g!==null){const Ne=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let je=!1;Ne.length!==te.cameras.length&&(te.cameras.length=0,je=!0);for(let ft=0;ft<Ne.length;ft++){const Rt=Ne[ft];let H=null;if(S!==null)H=S.getViewport(Rt);else{const vt=_.getViewSubImage(x,Rt);H=vt.viewport,ft===0&&(e.setRenderTargetTextures(I,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(I))}let _t=V[ft];_t===void 0&&(_t=new Pi,_t.layers.enable(ft),_t.viewport=new gn,V[ft]=_t),_t.matrix.fromArray(Rt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Rt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(H.x,H.y,H.width,H.height),ft===0&&(te.matrix.copy(_t.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),je===!0&&te.cameras.push(_t)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const ft=_.getDepthInformation(Ne[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,o.renderState)}if(He&&He.includes("camera-access")&&T){e.state.unbindTexture(),_=a.getBinding();for(let ft=0;ft<Ne.length;ft++){const Rt=Ne[ft].camera;if(Rt){let H=v[Rt];H||(H=new W2,v[Rt]=H);const _t=_.getCameraImage(Rt);H.sourceTexture=_t}}}}for(let Ne=0;Ne<k.length;Ne++){const je=N[Ne],He=k[Ne];je!==null&&He!==void 0&&He.update(je,fe,p||u)}Se&&Se(ae,fe),fe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Ue=new q2;Ue.setAnimationLoop(Te),this.setAnimationLoop=function(ae){Se=ae},this.dispose=function(){}}}const nr=new ja,gR=new dn;function _R(r,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function a(y,v){v.color.getRGB(y.fogColor.value,V2(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,L,U,I){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,I)):v.isMeshMatcapMaterial?(c(y,v),M(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),T(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,L,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===ci&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===ci&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),U=L.envMap,I=L.envMapRotation;U&&(y.envMap.value=U,nr.copy(I),nr.x*=-1,nr.y*=-1,nr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),y.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(nr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,L,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=U*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ci&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function xR(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const I=U.program;a.uniformBlockBinding(L,I)}function p(L,U){let I=o[L.id];I===void 0&&(M(L),I=g(L),o[L.id]=I,L.addEventListener("dispose",y));const k=U.program;a.updateUBOMapping(L,k);const N=e.render.frame;c[L.id]!==N&&(x(L),c[L.id]=N)}function g(L){const U=_();L.__bindingPointIndex=U;const I=r.createBuffer(),k=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,k,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,I),I}function _(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return fn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=o[L.id],I=L.uniforms,k=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let N=0,z=I.length;N<z;N++){const Q=Array.isArray(I[N])?I[N]:[I[N]];for(let C=0,w=Q.length;C<w;C++){const V=Q[C];if(S(V,N,C,k)===!0){const te=V.__offset,he=Array.isArray(V.value)?V.value:[V.value];let xe=0;for(let K=0;K<he.length;K++){const P=he[K],W=T(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,te+xe,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,xe),xe+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,U,I,k){const N=L.value,z=U+"_"+I;if(k[z]===void 0)return typeof N=="number"||typeof N=="boolean"?k[z]=N:k[z]=N.clone(),!0;{const Q=k[z];if(typeof N=="number"||typeof N=="boolean"){if(Q!==N)return k[z]=N,!0}else if(Q.equals(N)===!1)return Q.copy(N),!0}return!1}function M(L){const U=L.uniforms;let I=0;const k=16;for(let z=0,Q=U.length;z<Q;z++){const C=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,V=C.length;w<V;w++){const te=C[w],he=Array.isArray(te.value)?te.value:[te.value];for(let xe=0,K=he.length;xe<K;xe++){const P=he[xe],W=T(P),q=I%k,pe=q%W.boundary,me=q+pe;I+=pe,me!==0&&k-me<W.storage&&(I+=k-me),te.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=I,I+=W.storage}}}const N=I%k;return N>0&&(I+=k-N),L.__size=I,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pt("WebGLRenderer: Unsupported uniform value type.",L),U}function y(L){const U=L.target;U.removeEventListener("dispose",y);const I=u.indexOf(U.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function v(){for(const L in o)r.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:m,update:p,dispose:v}}const vR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Na=null;function bR(){return Na===null&&(Na=new v3(vR,32,32,Gp,Co),Na.minFilter=qn,Na.magFilter=qn,Na.wrapS=Mi,Na.wrapT=Mi,Na.generateMipmaps=!1,Na.needsUpdate=!0),Na}class yR{constructor(e={}){const{canvas:n=XS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=u;const M=new Set([jp,Vp,Hp]),T=new Set([Va,pr,Gl,Vl,Fp,Bp]),y=new Uint32Array(4),v=new Int32Array(4);let L=null,U=null;const I=[],k=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1;this._outputColorSpace=li;let Q=0,C=0,w=null,V=-1,te=null;const he=new gn,xe=new gn;let K=null;const P=new Gt(0);let W=0,q=n.width,pe=n.height,me=1,D=null,ie=null;const Se=new gn(0,0,q,pe),Te=new gn(0,0,q,pe);let Ue=!1;const ae=new Yp;let fe=!1,Ne=!1;const je=new dn,He=new le,st=new gn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Rt(){return w===null?me:1}let H=a;function _t(R,F){return n.getContext(R,F)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zp}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),H===null){const F="webgl2";if(H=_t(F,R),H===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let vt,Ft,We,kt,tt,lt,O,E,J,be,Ee,de,Je,Ie,nt,Ye,Ae,Ce,et,ke,Ge,ot,G,Pe;function De(){vt=new CT(H),vt.init(),ot=new fR(H,vt),Ft=new bT(H,vt,e,ot),We=new cR(H,vt),Ft.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),kt=new UT(H),tt=new ZA,lt=new uR(H,vt,We,tt,Ft,ot,kt),O=new ST(N),E=new wT(N),J=new z3(H),G=new xT(H,J),be=new DT(H,J,kt,G),Ee=new NT(H,be,J,kt),et=new LT(H,Ft,lt),Ye=new yT(tt),de=new $A(N,O,E,vt,Ft,G,Ye),Je=new _R(N,tt),Ie=new QA,nt=new aR(vt),Ce=new _T(N,O,E,We,Ee,S,m),Ae=new oR(N,Ee,Ft),Pe=new xR(H,kt,Ft,We),ke=new vT(H,vt,kt),Ge=new OT(H,vt,kt),kt.programs=de.programs,N.capabilities=Ft,N.extensions=vt,N.properties=tt,N.renderLists=Ie,N.shadowMap=Ae,N.state=We,N.info=kt}De();const re=new mR(N,H);this.xr=re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(R){R!==void 0&&(me=R,this.setSize(q,pe,!1))},this.getSize=function(R){return R.set(q,pe)},this.setSize=function(R,F,Y=!0){if(re.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,pe=F,n.width=Math.floor(R*me),n.height=Math.floor(F*me),Y===!0&&(n.style.width=R+"px",n.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(q*me,pe*me).floor()},this.setDrawingBufferSize=function(R,F,Y){q=R,pe=F,me=Y,n.width=Math.floor(R*Y),n.height=Math.floor(F*Y),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(he)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,F,Y,$){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,F,Y,$),We.viewport(he.copy(Se).multiplyScalar(me).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,F,Y,$){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,F,Y,$),We.scissor(xe.copy(Te).multiplyScalar(me).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){We.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(R=!0,F=!0,Y=!0){let $=0;if(R){let X=!1;if(w!==null){const Re=w.texture.format;X=M.has(Re)}if(X){const Re=w.texture.type,Me=T.has(Re),we=Ce.getClearColor(),ze=Ce.getClearAlpha(),Le=we.r,Xe=we.g,Ze=we.b;Me?(y[0]=Le,y[1]=Xe,y[2]=Ze,y[3]=ze,H.clearBufferuiv(H.COLOR,0,y)):(v[0]=Le,v[1]=Xe,v[2]=Ze,v[3]=ze,H.clearBufferiv(H.COLOR,0,v))}else $|=H.COLOR_BUFFER_BIT}F&&($|=H.DEPTH_BUFFER_BIT),Y&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),Ce.dispose(),Ie.dispose(),nt.dispose(),tt.dispose(),O.dispose(),E.dispose(),Ee.dispose(),G.dispose(),Pe.dispose(),de.dispose(),re.dispose(),re.removeEventListener("sessionstart",ua),re.removeEventListener("sessionend",Os),Kn.stop()};function ce(R){R.preventDefault(),cv("WebGLRenderer: Context Lost."),z=!0}function ge(){cv("WebGLRenderer: Context Restored."),z=!1;const R=kt.autoReset,F=Ae.enabled,Y=Ae.autoUpdate,$=Ae.needsUpdate,X=Ae.type;De(),kt.autoReset=R,Ae.enabled=F,Ae.autoUpdate=Y,Ae.needsUpdate=$,Ae.type=X}function Fe(R){fn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $e(R){const F=R.target;F.removeEventListener("dispose",$e),Et(F)}function Et(R){St(R),tt.remove(R)}function St(R){const F=tt.get(R).programs;F!==void 0&&(F.forEach(function(Y){de.releaseProgram(Y)}),R.isShaderMaterial&&de.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,Y,$,X,Re){F===null&&(F=Ot);const Me=X.isMesh&&X.matrixWorld.determinant()<0,we=Ji(R,F,Y,$,X);We.setMaterial($,Me);let ze=Y.index,Le=1;if($.wireframe===!0){if(ze=be.getWireframeAttribute(Y),ze===void 0)return;Le=2}const Xe=Y.drawRange,Ze=Y.attributes.position;let it=Xe.start*Le,ct=(Xe.start+Xe.count)*Le;Re!==null&&(it=Math.max(it,Re.start*Le),ct=Math.min(ct,(Re.start+Re.count)*Le)),ze!==null?(it=Math.max(it,0),ct=Math.min(ct,ze.count)):Ze!=null&&(it=Math.max(it,0),ct=Math.min(ct,Ze.count));const mt=ct-it;if(mt<0||mt===1/0)return;G.setup(X,$,we,Y,ze);let ut,gt=ke;if(ze!==null&&(ut=J.get(ze),gt=Ge,gt.setIndex(ut)),X.isMesh)$.wireframe===!0?(We.setLineWidth($.wireframeLinewidth*Rt()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(X.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),We.setLineWidth(Ke*Rt()),X.isLineSegments?gt.setMode(H.LINES):X.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else X.isPoints?gt.setMode(H.POINTS):X.isSprite&&gt.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Wl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ke=X._multiDrawStarts,wt=X._multiDrawCounts,dt=X._multiDrawCount,Jt=ze?J.get(ze).bytesPerElement:1,Vt=tt.get($).currentProgram.getUniforms();for(let jt=0;jt<dt;jt++)Vt.setValue(H,"_gl_DrawID",jt),gt.render(Ke[jt]/Jt,wt[jt])}else if(X.isInstancedMesh)gt.renderInstances(it,mt,X.count);else if(Y.isInstancedBufferGeometry){const Ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wt=Math.min(Y.instanceCount,Ke);gt.renderInstances(it,mt,wt)}else gt.render(it,mt)};function hn(R,F,Y){R.transparent===!0&&R.side===za&&R.forceSinglePass===!1?(R.side=ci,R.needsUpdate=!0,ln(R,F,Y),R.side=Ds,R.needsUpdate=!0,ln(R,F,Y),R.side=za):ln(R,F,Y)}this.compile=function(R,F,Y=null){Y===null&&(Y=R),U=nt.get(Y),U.init(F),k.push(U),Y.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(U.pushLight(X),X.castShadow&&U.pushShadow(X))}),R!==Y&&R.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(U.pushLight(X),X.castShadow&&U.pushShadow(X))}),U.setupLights();const $=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Re=X.material;if(Re)if(Array.isArray(Re))for(let Me=0;Me<Re.length;Me++){const we=Re[Me];hn(we,Y,X),$.add(we)}else hn(Re,Y,X),$.add(Re)}),U=k.pop(),$},this.compileAsync=function(R,F,Y=null){const $=this.compile(R,F,Y);return new Promise(X=>{function Re(){if($.forEach(function(Me){tt.get(Me).currentProgram.isReady()&&$.delete(Me)}),$.size===0){X(R);return}setTimeout(Re,10)}vt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Nn=null;function Xa(R){Nn&&Nn(R)}function ua(){Kn.stop()}function Os(){Kn.start()}const Kn=new q2;Kn.setAnimationLoop(Xa),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(R){Nn=R,re.setAnimationLoop(R),R===null?Kn.stop():Kn.start()},re.addEventListener("sessionstart",ua),re.addEventListener("sessionend",Os),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){fn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,F,w),U=nt.get(R,k.length),U.init(F),k.push(U),je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ae.setFromProjectionMatrix(je,la,F.reversedDepth),Ne=this.localClippingEnabled,fe=Ye.init(this.clippingPlanes,Ne),L=Ie.get(R,I.length),L.init(),I.push(L),re.enabled===!0&&re.isPresenting===!0){const Re=N.xr.getDepthSensingMesh();Re!==null&&Fi(Re,F,-1/0,N.sortObjects)}Fi(R,F,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(D,ie),ft=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ft&&Ce.addToRenderList(L,R),this.info.render.frame++,fe===!0&&Ye.beginShadows();const Y=U.state.shadowsArray;Ae.render(Y,R,F),fe===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=L.opaque,X=L.transmissive;if(U.setupLights(),F.isArrayCamera){const Re=F.cameras;if(X.length>0)for(let Me=0,we=Re.length;Me<we;Me++){const ze=Re[Me];Wa($,X,R,ze)}ft&&Ce.render(R);for(let Me=0,we=Re.length;Me<we;Me++){const ze=Re[Me];Us(L,R,ze,ze.viewport)}}else X.length>0&&Wa($,X,R,F),ft&&Ce.render(R),Us(L,R,F);w!==null&&C===0&&(lt.updateMultisampleRenderTarget(w),lt.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(N,R,F),G.resetDefaultState(),V=-1,te=null,k.pop(),k.length>0?(U=k[k.length-1],fe===!0&&Ye.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function Fi(R,F,Y,$){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ae.intersectsSprite(R)){$&&st.setFromMatrixPosition(R.matrixWorld).applyMatrix4(je);const Me=Ee.update(R),we=R.material;we.visible&&L.push(R,Me,we,Y,st.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ae.intersectsObject(R))){const Me=Ee.update(R),we=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),st.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),st.copy(Me.boundingSphere.center)),st.applyMatrix4(R.matrixWorld).applyMatrix4(je)),Array.isArray(we)){const ze=Me.groups;for(let Le=0,Xe=ze.length;Le<Xe;Le++){const Ze=ze[Le],it=we[Ze.materialIndex];it&&it.visible&&L.push(R,Me,it,Y,st.z,Ze)}}else we.visible&&L.push(R,Me,we,Y,st.z,null)}}const Re=R.children;for(let Me=0,we=Re.length;Me<we;Me++)Fi(Re[Me],F,Y,$)}function Us(R,F,Y,$){const{opaque:X,transmissive:Re,transparent:Me}=R;U.setupLightsView(Y),fe===!0&&Ye.setGlobalState(N.clippingPlanes,Y),$&&We.viewport(he.copy($)),X.length>0&&An(X,F,Y),Re.length>0&&An(Re,F,Y),Me.length>0&&An(Me,F,Y),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Wa(R,F,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[$.id]===void 0&&(U.state.transmissionRenderTarget[$.id]=new mr(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Co:Va,minFilter:or,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Re=U.state.transmissionRenderTarget[$.id],Me=$.viewport||he;Re.setSize(Me.z*N.transmissionResolutionScale,Me.w*N.transmissionResolutionScale);const we=N.getRenderTarget(),ze=N.getActiveCubeFace(),Le=N.getActiveMipmapLevel();N.setRenderTarget(Re),N.getClearColor(P),W=N.getClearAlpha(),W<1&&N.setClearColor(16777215,.5),N.clear(),ft&&Ce.render(Y);const Xe=N.toneMapping;N.toneMapping=Rs;const Ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),fe===!0&&Ye.setGlobalState(N.clippingPlanes,$),An(R,Y,$),lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re),vt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let ct=0,mt=F.length;ct<mt;ct++){const ut=F[ct],{object:gt,geometry:Ke,material:wt,group:dt}=ut;if(wt.side===za&&gt.layers.test($.layers)){const Jt=wt.side;wt.side=ci,wt.needsUpdate=!0,on(gt,Y,$,Ke,wt,dt),wt.side=Jt,wt.needsUpdate=!0,it=!0}}it===!0&&(lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re))}N.setRenderTarget(we,ze,Le),N.setClearColor(P,W),Ze!==void 0&&($.viewport=Ze),N.toneMapping=Xe}function An(R,F,Y){const $=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Re=R.length;X<Re;X++){const Me=R[X],{object:we,geometry:ze,group:Le}=Me;let Xe=Me.material;Xe.allowOverride===!0&&$!==null&&(Xe=$),we.layers.test(Y.layers)&&on(we,F,Y,ze,Xe,Le)}}function on(R,F,Y,$,X,Re){R.onBeforeRender(N,F,Y,$,X,Re),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(N,F,Y,$,R,Re),X.transparent===!0&&X.side===za&&X.forceSinglePass===!1?(X.side=ci,X.needsUpdate=!0,N.renderBufferDirect(Y,F,$,X,R,Re),X.side=Ds,X.needsUpdate=!0,N.renderBufferDirect(Y,F,$,X,R,Re),X.side=za):N.renderBufferDirect(Y,F,$,X,R,Re),R.onAfterRender(N,F,Y,$,X,Re)}function ln(R,F,Y){F.isScene!==!0&&(F=Ot);const $=tt.get(R),X=U.state.lights,Re=U.state.shadowsArray,Me=X.state.version,we=de.getParameters(R,X.state,Re,F,Y),ze=de.getProgramCacheKey(we);let Le=$.programs;$.environment=R.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(R.isMeshStandardMaterial?E:O).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?F.environmentRotation:R.envMapRotation,Le===void 0&&(R.addEventListener("dispose",$e),Le=new Map,$.programs=Le);let Xe=Le.get(ze);if(Xe!==void 0){if($.currentProgram===Xe&&$.lightsStateVersion===Me)return Hi(R,we),Xe}else we.uniforms=de.getUniforms(R),R.onBeforeCompile(we,N),Xe=de.acquireProgram(we,ze),Le.set(ze,Xe),$.uniforms=we.uniforms;const Ze=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Ye.uniform),Hi(R,we),$.needsLights=Ls(R),$.lightsStateVersion=Me,$.needsLights&&(Ze.ambientLightColor.value=X.state.ambient,Ze.lightProbe.value=X.state.probe,Ze.directionalLights.value=X.state.directional,Ze.directionalLightShadows.value=X.state.directionalShadow,Ze.spotLights.value=X.state.spot,Ze.spotLightShadows.value=X.state.spotShadow,Ze.rectAreaLights.value=X.state.rectArea,Ze.ltc_1.value=X.state.rectAreaLTC1,Ze.ltc_2.value=X.state.rectAreaLTC2,Ze.pointLights.value=X.state.point,Ze.pointLightShadows.value=X.state.pointShadow,Ze.hemisphereLights.value=X.state.hemi,Ze.directionalShadowMap.value=X.state.directionalShadowMap,Ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ze.spotShadowMap.value=X.state.spotShadowMap,Ze.spotLightMatrix.value=X.state.spotLightMatrix,Ze.spotLightMap.value=X.state.spotLightMap,Ze.pointShadowMap.value=X.state.pointShadowMap,Ze.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Xe,$.uniformsList=null,Xe}function Bi(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=Vu.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function Hi(R,F){const Y=tt.get(R);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Ji(R,F,Y,$,X){F.isScene!==!0&&(F=Ot),lt.resetTextureUnits();const Re=F.fog,Me=$.isMeshStandardMaterial?F.environment:null,we=w===null?N.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:So,ze=($.isMeshStandardMaterial?E:O).get($.envMap||Me),Le=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xe=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ze=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color;let mt=Rs;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=N.toneMapping);const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=ut!==void 0?ut.length:0,Ke=tt.get($),wt=U.state.lights;if(fe===!0&&(Ne===!0||R!==te)){const Pn=R===te&&$.id===V;Ye.setState($,R,Pn)}let dt=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==wt.state.version||Ke.outputColorSpace!==we||X.isBatchedMesh&&Ke.batching===!1||!X.isBatchedMesh&&Ke.batching===!0||X.isBatchedMesh&&Ke.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ke.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ke.instancing===!1||!X.isInstancedMesh&&Ke.instancing===!0||X.isSkinnedMesh&&Ke.skinning===!1||!X.isSkinnedMesh&&Ke.skinning===!0||X.isInstancedMesh&&Ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ke.instancingMorph===!1&&X.morphTexture!==null||Ke.envMap!==ze||$.fog===!0&&Ke.fog!==Re||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ye.numPlanes||Ke.numIntersection!==Ye.numIntersection)||Ke.vertexAlphas!==Le||Ke.vertexTangents!==Xe||Ke.morphTargets!==Ze||Ke.morphNormals!==it||Ke.morphColors!==ct||Ke.toneMapping!==mt||Ke.morphTargetsCount!==gt)&&(dt=!0):(dt=!0,Ke.__version=$.version);let Jt=Ke.currentProgram;dt===!0&&(Jt=ln($,F,X));let Vt=!1,jt=!1,Qn=!1;const Bt=Jt.getUniforms(),bn=Ke.uniforms;if(We.useProgram(Jt.program)&&(Vt=!0,jt=!0,Qn=!0),$.id!==V&&(V=$.id,jt=!0),Vt||te!==R){We.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(H,"projectionMatrix",R.projectionMatrix),Bt.setValue(H,"viewMatrix",R.matrixWorldInverse);const Vn=Bt.map.cameraPosition;Vn!==void 0&&Vn.setValue(H,He.setFromMatrixPosition(R.matrixWorld)),Ft.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),te!==R&&(te=R,jt=!0,Qn=!0)}if(X.isSkinnedMesh){Bt.setOptional(H,X,"bindMatrix"),Bt.setOptional(H,X,"bindMatrixInverse");const Pn=X.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Bt.setValue(H,"boneTexture",Pn.boneTexture,lt))}X.isBatchedMesh&&(Bt.setOptional(H,X,"batchingTexture"),Bt.setValue(H,"batchingTexture",X._matricesTexture,lt),Bt.setOptional(H,X,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",X._indirectTexture,lt),Bt.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",X._colorsTexture,lt));const Rn=Y.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&et.update(X,Y,Jt),(jt||Ke.receiveShadow!==X.receiveShadow)&&(Ke.receiveShadow=X.receiveShadow,Bt.setValue(H,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bn.envMap.value=ze,bn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&F.environment!==null&&(bn.envMapIntensity.value=F.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=bR()),jt&&(Bt.setValue(H,"toneMappingExposure",N.toneMappingExposure),Ke.needsLights&&Uo(bn,Qn),Re&&$.fog===!0&&Je.refreshFogUniforms(bn,Re),Je.refreshMaterialUniforms(bn,$,me,pe,U.state.transmissionRenderTarget[R.id]),Vu.upload(H,Bi(Ke),bn,lt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Vu.upload(H,Bi(Ke),bn,lt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Bt.setValue(H,"center",X.center),Bt.setValue(H,"modelViewMatrix",X.modelViewMatrix),Bt.setValue(H,"normalMatrix",X.normalMatrix),Bt.setValue(H,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Pn=$.uniformsGroups;for(let Vn=0,ta=Pn.length;Vn<ta;Vn++){const fa=Pn[Vn];Pe.update(fa,Jt),Pe.bind(fa,Jt)}}return Jt}function Uo(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function Ls(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,F,Y){const $=tt.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),tt.get(R.texture).__webglTexture=F,tt.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,F){const Y=tt.get(R);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0};const ea=H.createFramebuffer();this.setRenderTarget=function(R,F=0,Y=0){w=R,Q=F,C=Y;let $=!0,X=null,Re=!1,Me=!1;if(R){const ze=tt.get(R);if(ze.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(ze.__webglFramebuffer===void 0)lt.setupRenderTarget(R);else if(ze.__hasExternalTextures)lt.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ze=R.depthTexture;if(ze.__boundDepthTexture!==Ze){if(Ze!==null&&tt.has(Ze)&&(R.width!==Ze.image.width||R.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(R)}}const Le=R.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Me=!0);const Xe=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?X=Xe[F][Y]:X=Xe[F],Re=!0):R.samples>0&&lt.useMultisampledRTT(R)===!1?X=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?X=Xe[Y]:X=Xe,he.copy(R.viewport),xe.copy(R.scissor),K=R.scissorTest}else he.copy(Se).multiplyScalar(me).floor(),xe.copy(Te).multiplyScalar(me).floor(),K=Ue;if(Y!==0&&(X=ea),We.bindFramebuffer(H.FRAMEBUFFER,X)&&$&&We.drawBuffers(R,X),We.viewport(he),We.scissor(xe),We.setScissorTest(K),Re){const ze=tt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,ze.__webglTexture,Y)}else if(Me){const ze=F;for(let Le=0;Le<R.textures.length;Le++){const Xe=tt.get(R.textures[Le]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Le,Xe.__webglTexture,Y,ze)}}else if(R!==null&&Y!==0){const ze=tt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ze.__webglTexture,Y)}V=-1},this.readRenderTargetPixels=function(R,F,Y,$,X,Re,Me,we=0){if(!(R&&R.isWebGLRenderTarget)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(ze=ze[Me]),ze){We.bindFramebuffer(H.FRAMEBUFFER,ze);try{const Le=R.textures[we],Xe=Le.format,Ze=Le.type;if(!Ft.textureFormatReadable(Xe)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ze)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-$&&Y>=0&&Y<=R.height-X&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+we),H.readPixels(F,Y,$,X,ot.convert(Xe),ot.convert(Ze),Re))}finally{const Le=w!==null?tt.get(w).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(R,F,Y,$,X,Re,Me,we=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(ze=ze[Me]),ze)if(F>=0&&F<=R.width-$&&Y>=0&&Y<=R.height-X){We.bindFramebuffer(H.FRAMEBUFFER,ze);const Le=R.textures[we],Xe=Le.format,Ze=Le.type;if(!Ft.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,it),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+we),H.readPixels(F,Y,$,X,ot.convert(Xe),ot.convert(Ze),0);const ct=w!==null?tt.get(w).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,ct);const mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await WS(H,mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,it),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.deleteBuffer(it),H.deleteSync(mt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,F=null,Y=0){const $=Math.pow(2,-Y),X=Math.floor(R.image.width*$),Re=Math.floor(R.image.height*$),Me=F!==null?F.x:0,we=F!==null?F.y:0;lt.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,Y,0,0,Me,we,X,Re),We.unbindTexture()};const qa=H.createFramebuffer(),Gi=H.createFramebuffer();this.copyTextureToTexture=function(R,F,Y=null,$=null,X=0,Re=null){Re===null&&(X!==0?(Wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=X,X=0):Re=0);let Me,we,ze,Le,Xe,Ze,it,ct,mt;const ut=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(Y!==null)Me=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,ze=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Xe=Y.min.y,Ze=Y.isBox3?Y.min.z:0;else{const Rn=Math.pow(2,-X);Me=Math.floor(ut.width*Rn),we=Math.floor(ut.height*Rn),R.isDataArrayTexture?ze=ut.depth:R.isData3DTexture?ze=Math.floor(ut.depth*Rn):ze=1,Le=0,Xe=0,Ze=0}$!==null?(it=$.x,ct=$.y,mt=$.z):(it=0,ct=0,mt=0);const gt=ot.convert(F.format),Ke=ot.convert(F.type);let wt;F.isData3DTexture?(lt.setTexture3D(F,0),wt=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(lt.setTexture2DArray(F,0),wt=H.TEXTURE_2D_ARRAY):(lt.setTexture2D(F,0),wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);const dt=H.getParameter(H.UNPACK_ROW_LENGTH),Jt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Vt=H.getParameter(H.UNPACK_SKIP_PIXELS),jt=H.getParameter(H.UNPACK_SKIP_ROWS),Qn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ut.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ut.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Le),H.pixelStorei(H.UNPACK_SKIP_ROWS,Xe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ze);const Bt=R.isDataArrayTexture||R.isData3DTexture,bn=F.isDataArrayTexture||F.isData3DTexture;if(R.isDepthTexture){const Rn=tt.get(R),Pn=tt.get(F),Vn=tt.get(Rn.__renderTarget),ta=tt.get(Pn.__renderTarget);We.bindFramebuffer(H.READ_FRAMEBUFFER,Vn.__webglFramebuffer),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let fa=0;fa<ze;fa++)Bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(R).__webglTexture,X,Ze+fa),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.get(F).__webglTexture,Re,mt+fa)),H.blitFramebuffer(Le,Xe,Me,we,it,ct,Me,we,H.DEPTH_BUFFER_BIT,H.NEAREST);We.bindFramebuffer(H.READ_FRAMEBUFFER,null),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||tt.has(R)){const Rn=tt.get(R),Pn=tt.get(F);We.bindFramebuffer(H.READ_FRAMEBUFFER,qa),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,Gi);for(let Vn=0;Vn<ze;Vn++)Bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Rn.__webglTexture,X,Ze+Vn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Rn.__webglTexture,X),bn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,Re,mt+Vn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,Re),X!==0?H.blitFramebuffer(Le,Xe,Me,we,it,ct,Me,we,H.COLOR_BUFFER_BIT,H.NEAREST):bn?H.copyTexSubImage3D(wt,Re,it,ct,mt+Vn,Le,Xe,Me,we):H.copyTexSubImage2D(wt,Re,it,ct,Le,Xe,Me,we);We.bindFramebuffer(H.READ_FRAMEBUFFER,null),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(wt,Re,it,ct,mt,Me,we,ze,gt,Ke,ut.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(wt,Re,it,ct,mt,Me,we,ze,gt,ut.data):H.texSubImage3D(wt,Re,it,ct,mt,Me,we,ze,gt,Ke,ut):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Re,it,ct,Me,we,gt,Ke,ut.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Re,it,ct,ut.width,ut.height,gt,ut.data):H.texSubImage2D(H.TEXTURE_2D,Re,it,ct,Me,we,gt,Ke,ut);H.pixelStorei(H.UNPACK_ROW_LENGTH,dt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Jt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Vt),H.pixelStorei(H.UNPACK_SKIP_ROWS,jt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qn),Re===0&&F.generateMipmaps&&H.generateMipmap(wt),We.unbindTexture()},this.initRenderTarget=function(R){tt.get(R).__webglFramebuffer===void 0&&lt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?lt.setTextureCube(R,0):R.isData3DTexture?lt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?lt.setTexture2DArray(R,0):lt.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){Q=0,C=0,w=null,We.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),n.unpackColorSpace=It._getUnpackColorSpace()}}const SR="/MarcoinSF/assets/2021-10-31-CDuc_qmG.JPG",MR=Object.freeze(Object.defineProperty({__proto__:null,default:SR},Symbol.toStringTag,{value:"Module"})),ER="/MarcoinSF/assets/2021-10-31-DcWNroCu.jpeg",TR=Object.freeze(Object.defineProperty({__proto__:null,default:ER},Symbol.toStringTag,{value:"Module"})),AR="/MarcoinSF/assets/2021-12-10-Cfb1W4aW.jpg",RR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),wR="/MarcoinSF/assets/2022-05-13-ZW7768q6.JPG",CR=Object.freeze(Object.defineProperty({__proto__:null,default:wR},Symbol.toStringTag,{value:"Module"})),DR="/MarcoinSF/assets/2022-06-13-CxNIdfIC.jpeg",OR=Object.freeze(Object.defineProperty({__proto__:null,default:DR},Symbol.toStringTag,{value:"Module"})),UR="/MarcoinSF/assets/2022-07-06-2-todjBix1.jpeg",LR=Object.freeze(Object.defineProperty({__proto__:null,default:UR},Symbol.toStringTag,{value:"Module"})),NR="/MarcoinSF/assets/2022-08-14-DUbsbZ4q.JPG",PR=Object.freeze(Object.defineProperty({__proto__:null,default:NR},Symbol.toStringTag,{value:"Module"})),zR="/MarcoinSF/assets/2022-10-29%20Large-BwUDGQao.jpeg",IR=Object.freeze(Object.defineProperty({__proto__:null,default:zR},Symbol.toStringTag,{value:"Module"})),FR="/MarcoinSF/assets/2023-01-01-ZvfabK-5.jpeg",BR=Object.freeze(Object.defineProperty({__proto__:null,default:FR},Symbol.toStringTag,{value:"Module"})),HR="/MarcoinSF/assets/2023-03-01-aqF_3lvk.jpeg",GR=Object.freeze(Object.defineProperty({__proto__:null,default:HR},Symbol.toStringTag,{value:"Module"})),VR="/MarcoinSF/assets/2024-03-09-1-5r1AjpoY.jpeg",jR=Object.freeze(Object.defineProperty({__proto__:null,default:VR},Symbol.toStringTag,{value:"Module"})),kR="/MarcoinSF/assets/2024-03-09-D0kOqaW7.jpeg",XR=Object.freeze(Object.defineProperty({__proto__:null,default:kR},Symbol.toStringTag,{value:"Module"})),WR="/MarcoinSF/assets/2024-05-05-BOtxUIu1.jpeg",qR=Object.freeze(Object.defineProperty({__proto__:null,default:WR},Symbol.toStringTag,{value:"Module"})),YR="/MarcoinSF/assets/2024-05-14-KI90_q1g.jpeg",$R=Object.freeze(Object.defineProperty({__proto__:null,default:YR},Symbol.toStringTag,{value:"Module"})),ZR="/MarcoinSF/assets/2024-07-21-DLIIzHuZ.mp4",KR=Object.freeze(Object.defineProperty({__proto__:null,default:ZR},Symbol.toStringTag,{value:"Module"})),QR="/MarcoinSF/assets/2024-07-28-BON0UAU4.mp4",JR=Object.freeze(Object.defineProperty({__proto__:null,default:QR},Symbol.toStringTag,{value:"Module"})),ew="/MarcoinSF/assets/2024-07-31-mlItGP0c.jpeg",tw=Object.freeze(Object.defineProperty({__proto__:null,default:ew},Symbol.toStringTag,{value:"Module"})),nw="/MarcoinSF/assets/2024-08-10-1-CLHfImQR.mp4",iw=Object.freeze(Object.defineProperty({__proto__:null,default:nw},Symbol.toStringTag,{value:"Module"})),aw="/MarcoinSF/assets/2024-08-10-usYrqNu_.jpeg",sw=Object.freeze(Object.defineProperty({__proto__:null,default:aw},Symbol.toStringTag,{value:"Module"})),rw="/MarcoinSF/assets/2024-08-23-1-BMj95jfC.jpg",ow=Object.freeze(Object.defineProperty({__proto__:null,default:rw},Symbol.toStringTag,{value:"Module"})),lw="/MarcoinSF/assets/2024-08-23-3-DkddrKGM.jpg",cw=Object.freeze(Object.defineProperty({__proto__:null,default:lw},Symbol.toStringTag,{value:"Module"})),uw="/MarcoinSF/assets/2024-08-23-4-CNdgbWFz.jpg",fw=Object.freeze(Object.defineProperty({__proto__:null,default:uw},Symbol.toStringTag,{value:"Module"})),dw="/MarcoinSF/assets/2024-08-23-CzaGYrwc.jpg",hw=Object.freeze(Object.defineProperty({__proto__:null,default:dw},Symbol.toStringTag,{value:"Module"})),pw="/MarcoinSF/assets/2024-08-23-CplMc93Q.mp4",mw=Object.freeze(Object.defineProperty({__proto__:null,default:pw},Symbol.toStringTag,{value:"Module"})),gw="/MarcoinSF/assets/2024-08-25-cOKYphAI.mp4",_w=Object.freeze(Object.defineProperty({__proto__:null,default:gw},Symbol.toStringTag,{value:"Module"})),xw="/MarcoinSF/assets/2024-09-01-CP4RYK6Z.jpeg",vw=Object.freeze(Object.defineProperty({__proto__:null,default:xw},Symbol.toStringTag,{value:"Module"})),bw="/MarcoinSF/assets/2024-09-02-BIdH0tQs.jpeg",yw=Object.freeze(Object.defineProperty({__proto__:null,default:bw},Symbol.toStringTag,{value:"Module"})),Sw="/MarcoinSF/assets/2024-09-08-DRZDdej9.jpeg",Mw=Object.freeze(Object.defineProperty({__proto__:null,default:Sw},Symbol.toStringTag,{value:"Module"})),Ew="/MarcoinSF/assets/2024-09-19-02-CRrM6iw-.JPG",Tw=Object.freeze(Object.defineProperty({__proto__:null,default:Ew},Symbol.toStringTag,{value:"Module"})),Aw="/MarcoinSF/assets/2024-09-19-03-98asKbHO.mp4",Rw=Object.freeze(Object.defineProperty({__proto__:null,default:Aw},Symbol.toStringTag,{value:"Module"})),ww="/MarcoinSF/assets/2024-09-19-Yttg9DWC.jpg",Cw=Object.freeze(Object.defineProperty({__proto__:null,default:ww},Symbol.toStringTag,{value:"Module"})),Dw="/MarcoinSF/assets/2024-09-25-BXZ-JE61.jpeg",Ow=Object.freeze(Object.defineProperty({__proto__:null,default:Dw},Symbol.toStringTag,{value:"Module"})),Uw="/MarcoinSF/assets/2024-10-15-BF3fCPW2.jpeg",Lw=Object.freeze(Object.defineProperty({__proto__:null,default:Uw},Symbol.toStringTag,{value:"Module"})),Nw="/MarcoinSF/assets/2024-10-20-1-UaeBmH8_.jpeg",Pw=Object.freeze(Object.defineProperty({__proto__:null,default:Nw},Symbol.toStringTag,{value:"Module"})),zw="/MarcoinSF/assets/2024-10-20-2-CXE_ZJ88.jpeg",Iw=Object.freeze(Object.defineProperty({__proto__:null,default:zw},Symbol.toStringTag,{value:"Module"})),Fw="/MarcoinSF/assets/2024-10-20-3-DFppJf_d.jpeg",Bw=Object.freeze(Object.defineProperty({__proto__:null,default:Fw},Symbol.toStringTag,{value:"Module"})),Hw="/MarcoinSF/assets/2024-10-20-4-DYSIXoD2.mp4",Gw=Object.freeze(Object.defineProperty({__proto__:null,default:Hw},Symbol.toStringTag,{value:"Module"})),Vw="/MarcoinSF/assets/2024-10-20-7%20Large-p3W3qreI.jpeg",jw=Object.freeze(Object.defineProperty({__proto__:null,default:Vw},Symbol.toStringTag,{value:"Module"})),kw="/MarcoinSF/assets/2024-10-20-Bd_4AOPQ.MOV",Xw=Object.freeze(Object.defineProperty({__proto__:null,default:kw},Symbol.toStringTag,{value:"Module"})),Ww="/MarcoinSF/assets/2024-10-20-DIUHYx3b.jpeg",qw=Object.freeze(Object.defineProperty({__proto__:null,default:Ww},Symbol.toStringTag,{value:"Module"})),Yw="/MarcoinSF/assets/2024-10-22-CiL1HWjJ.JPG",$w=Object.freeze(Object.defineProperty({__proto__:null,default:Yw},Symbol.toStringTag,{value:"Module"})),Zw="/MarcoinSF/assets/2024-10-26-6I-A6_EY.jpeg",Kw=Object.freeze(Object.defineProperty({__proto__:null,default:Zw},Symbol.toStringTag,{value:"Module"})),Qw="/MarcoinSF/assets/2024-11-01-B0vPq0V1.mp4",Jw=Object.freeze(Object.defineProperty({__proto__:null,default:Qw},Symbol.toStringTag,{value:"Module"})),eC="/MarcoinSF/assets/2024-11-03-C4k0HJqk.mp4",tC=Object.freeze(Object.defineProperty({__proto__:null,default:eC},Symbol.toStringTag,{value:"Module"})),nC="/MarcoinSF/assets/2024-11-08-kM8awXmA.jpeg",iC=Object.freeze(Object.defineProperty({__proto__:null,default:nC},Symbol.toStringTag,{value:"Module"})),aC="/MarcoinSF/assets/2024-11-17-1-XWAmTuvK.jpeg",sC=Object.freeze(Object.defineProperty({__proto__:null,default:aC},Symbol.toStringTag,{value:"Module"})),rC="/MarcoinSF/assets/2024-11-17-2-CMXhdSPr.jpeg",oC=Object.freeze(Object.defineProperty({__proto__:null,default:rC},Symbol.toStringTag,{value:"Module"})),lC="/MarcoinSF/assets/2024-11-17-2-ClCIFVUl.mp4",cC=Object.freeze(Object.defineProperty({__proto__:null,default:lC},Symbol.toStringTag,{value:"Module"})),uC="/MarcoinSF/assets/2024-11-17-3-CL__783K.jpg",fC=Object.freeze(Object.defineProperty({__proto__:null,default:uC},Symbol.toStringTag,{value:"Module"})),dC="/MarcoinSF/assets/2024-11-17-Dlj7Ggg_.jpeg",hC=Object.freeze(Object.defineProperty({__proto__:null,default:dC},Symbol.toStringTag,{value:"Module"})),pC="/MarcoinSF/assets/2024-12-07-D5ESRNF6.jpeg",mC=Object.freeze(Object.defineProperty({__proto__:null,default:pC},Symbol.toStringTag,{value:"Module"})),gC="/MarcoinSF/assets/2024-12-11-LCPTHdsD.JPG",_C=Object.freeze(Object.defineProperty({__proto__:null,default:gC},Symbol.toStringTag,{value:"Module"})),xC="/MarcoinSF/assets/2025-02-12-1-BX8k8eV8.mp4",vC=Object.freeze(Object.defineProperty({__proto__:null,default:xC},Symbol.toStringTag,{value:"Module"})),bC="/MarcoinSF/assets/2025-02-12-CmQmbk28.jpeg",yC=Object.freeze(Object.defineProperty({__proto__:null,default:bC},Symbol.toStringTag,{value:"Module"})),SC="/MarcoinSF/assets/2025-02-26-weniPF9W.JPG",MC=Object.freeze(Object.defineProperty({__proto__:null,default:SC},Symbol.toStringTag,{value:"Module"})),EC="/MarcoinSF/assets/2025-03-07-rHk_O326.jpeg",TC=Object.freeze(Object.defineProperty({__proto__:null,default:EC},Symbol.toStringTag,{value:"Module"})),AC="/MarcoinSF/assets/2025-03-08-1-4LawzdwT.jpeg",RC=Object.freeze(Object.defineProperty({__proto__:null,default:AC},Symbol.toStringTag,{value:"Module"})),wC="/MarcoinSF/assets/2025-03-08-CsRDiP1v.jpeg",CC=Object.freeze(Object.defineProperty({__proto__:null,default:wC},Symbol.toStringTag,{value:"Module"})),DC="/MarcoinSF/assets/2025-03-08-JZOWf09E.mp4",OC=Object.freeze(Object.defineProperty({__proto__:null,default:DC},Symbol.toStringTag,{value:"Module"})),UC="/MarcoinSF/assets/2025-03-12-Ie8pwHnw.jpeg",LC=Object.freeze(Object.defineProperty({__proto__:null,default:UC},Symbol.toStringTag,{value:"Module"})),NC="/MarcoinSF/assets/2025-04-20-02-CTl6eCl4.jpeg",PC=Object.freeze(Object.defineProperty({__proto__:null,default:NC},Symbol.toStringTag,{value:"Module"})),zC="/MarcoinSF/assets/2025-04-20-m521MAgC.jpeg",IC=Object.freeze(Object.defineProperty({__proto__:null,default:zC},Symbol.toStringTag,{value:"Module"})),FC="/MarcoinSF/assets/2025-04-24-BJB22Ibv.jpeg",BC=Object.freeze(Object.defineProperty({__proto__:null,default:FC},Symbol.toStringTag,{value:"Module"})),HC="/MarcoinSF/assets/2025-05-09-BgJ2uyI6.jpeg",GC=Object.freeze(Object.defineProperty({__proto__:null,default:HC},Symbol.toStringTag,{value:"Module"})),VC="/MarcoinSF/assets/2025-05-10-01-CmiKVq7X.jpeg",jC=Object.freeze(Object.defineProperty({__proto__:null,default:VC},Symbol.toStringTag,{value:"Module"})),kC="/MarcoinSF/assets/2025-05-10-03-C7cYxHVB.jpeg",XC=Object.freeze(Object.defineProperty({__proto__:null,default:kC},Symbol.toStringTag,{value:"Module"})),WC="/MarcoinSF/assets/2025-05-10-04-D51B-kbo.jpeg",qC=Object.freeze(Object.defineProperty({__proto__:null,default:WC},Symbol.toStringTag,{value:"Module"})),YC="/MarcoinSF/assets/2025-05-10-05-ZspL2DFk.jpg",$C=Object.freeze(Object.defineProperty({__proto__:null,default:YC},Symbol.toStringTag,{value:"Module"})),ZC="/MarcoinSF/assets/2025-05-23-DrMQ0MaP.mp4",KC=Object.freeze(Object.defineProperty({__proto__:null,default:ZC},Symbol.toStringTag,{value:"Module"})),QC="/MarcoinSF/assets/2025-05-30-B31ntIOA.jpeg",JC=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),e4="/MarcoinSF/assets/2025-06-09-StP8uvDz.mp4",t4=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),n4="/MarcoinSF/assets/2025-06-16-NxVx32rp.jpg",i4=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),a4="/MarcoinSF/assets/2025-06-17-C8HU58WO.jpeg",s4=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),r4="/MarcoinSF/assets/2025-06-19-DxprC_A4.jpeg",o4=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),l4="/MarcoinSF/assets/2025-06-20-DQi2tzWE.jpeg",c4=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),u4="/MarcoinSF/assets/2025-06-29-BcidFJty.JPG",f4=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),d4="/MarcoinSF/assets/2025-07-02-Or5BW8GN.jpeg",h4=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),p4="/MarcoinSF/assets/2025-07-04-C1wj0M1h.jpeg",m4=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),g4="/MarcoinSF/assets/2025-07-19-B14G1TL2.jpg",_4=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),x4="/MarcoinSF/assets/2025-07-23-CTlJaCIv.jpeg",v4=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),b4="/MarcoinSF/assets/2025-08-02-BYfa6nBi.jpeg",y4=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),S4="/MarcoinSF/assets/2025-08-15-BwvLJtju.jpeg",M4=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),E4="/MarcoinSF/assets/2025-08-16-CQmSO3ij.mp4",T4=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),A4="/MarcoinSF/assets/2025-10-04-BEvm4bRr.mp4",R4=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),w4="/MarcoinSF/assets/2025-10-08-2-BJssy64D.jpeg",C4=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),D4="/MarcoinSF/assets/2025-10-08-BbBU71mk.jpeg",O4=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),U4="/MarcoinSF/assets/2025-10-09-Be-NfefO.JPG",L4=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),N4="/MarcoinSF/assets/2025-10-10-DSgqI2iz.jpeg",P4=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),z4="/MarcoinSF/assets/2025-10-11-BE2_tkS1.jpeg",I4=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),F4="/MarcoinSF/assets/2025-10-31-2-4DBQdFfB.jpeg",B4=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),H4="/MarcoinSF/assets/2025-10-31-3-CMAQg5eZ.mp4",G4=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),V4="/MarcoinSF/assets/2025-10-31-C_2gu8e1.jpeg",j4=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),k4="/MarcoinSF/assets/2025-11-04-CxajqofK.jpeg",X4=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),W4="/MarcoinSF/assets/2025-11-09-xa64oJGS.jpeg",q4=Object.freeze(Object.defineProperty({__proto__:null,default:W4},Symbol.toStringTag,{value:"Module"})),Y4="/MarcoinSF/assets/2025-11-09-BxC_sGgm.mp4",$4=Object.freeze(Object.defineProperty({__proto__:null,default:Y4},Symbol.toStringTag,{value:"Module"})),Z4="/MarcoinSF/assets/2025-11-29-Dq6Asxu3.jpeg",K4=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),Q4="/MarcoinSF/assets/2025-12-03-DSQwbWlu.JPG",J4=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),eD="/MarcoinSF/assets/2025-12-03-BkHMkApE.jpeg",tD=Object.freeze(Object.defineProperty({__proto__:null,default:eD},Symbol.toStringTag,{value:"Module"})),nD="/MarcoinSF/assets/2025-12-04-02-CEkCKTxA.jpeg",iD=Object.freeze(Object.defineProperty({__proto__:null,default:nD},Symbol.toStringTag,{value:"Module"})),aD="/MarcoinSF/assets/2025-12-04-10-C3KxTeOd.mp4",sD=Object.freeze(Object.defineProperty({__proto__:null,default:aD},Symbol.toStringTag,{value:"Module"})),rD="/MarcoinSF/assets/2025-12-04-supQhv4p.jpeg",oD=Object.freeze(Object.defineProperty({__proto__:null,default:rD},Symbol.toStringTag,{value:"Module"})),lD="/MarcoinSF/assets/2025-12-05-01-BFaM4Oml.mp4",cD=Object.freeze(Object.defineProperty({__proto__:null,default:lD},Symbol.toStringTag,{value:"Module"})),uD="/MarcoinSF/assets/2025-12-05-02-BrtAXchK.mp4",fD=Object.freeze(Object.defineProperty({__proto__:null,default:uD},Symbol.toStringTag,{value:"Module"})),Q2="/MarcoinSF/assets/Ignore_2024-08-23-5-CqrWweLB.png",dD=Object.freeze(Object.defineProperty({__proto__:null,default:Q2},Symbol.toStringTag,{value:"Module"})),J2="/MarcoinSF/assets/Ignore_2025-05-10-06-YgLAOf2q.png",hD=Object.freeze(Object.defineProperty({__proto__:null,default:J2},Symbol.toStringTag,{value:"Module"})),pD="/MarcoinSF/assets/BeggingBuddha-CATTcvPs.mp3",mD="/MarcoinSF/assets/FujiMt-CkmfackC.mp3",gD="/MarcoinSF/assets/Handbeaten-fishball-55E7UMtG.mp3",_D="/MarcoinSF/assets/LouMei-B79Jap0g.mp3",h0=[{title:"Handbeaten Fishball",src:gD},{title:"Begging Buddha",src:pD},{title:"Fuji Mt",src:mD},{title:"Lou Mei",src:_D}],xD=Object.assign({"./assets/media/2021-10-31.JPG":MR,"./assets/media/2021-10-31.jpeg":TR,"./assets/media/2021-12-10.jpg":RR,"./assets/media/2022-05-13.JPG":CR,"./assets/media/2022-06-13.jpeg":OR,"./assets/media/2022-07-06-2.jpeg":LR,"./assets/media/2022-08-14.JPG":PR,"./assets/media/2022-10-29 Large.jpeg":IR,"./assets/media/2023-01-01.jpeg":BR,"./assets/media/2023-03-01.jpeg":GR,"./assets/media/2024-03-09-1.jpeg":jR,"./assets/media/2024-03-09.jpeg":XR,"./assets/media/2024-05-05.jpeg":qR,"./assets/media/2024-05-14.jpeg":$R,"./assets/media/2024-07-21.mp4":KR,"./assets/media/2024-07-28.mp4":JR,"./assets/media/2024-07-31.jpeg":tw,"./assets/media/2024-08-10-1.mp4":iw,"./assets/media/2024-08-10.jpeg":sw,"./assets/media/2024-08-23-1.jpg":ow,"./assets/media/2024-08-23-3.jpg":cw,"./assets/media/2024-08-23-4.jpg":fw,"./assets/media/2024-08-23.jpg":hw,"./assets/media/2024-08-23.mp4":mw,"./assets/media/2024-08-25.mp4":_w,"./assets/media/2024-09-01.jpeg":vw,"./assets/media/2024-09-02.jpeg":yw,"./assets/media/2024-09-08.jpeg":Mw,"./assets/media/2024-09-19-02.JPG":Tw,"./assets/media/2024-09-19-03.mp4":Rw,"./assets/media/2024-09-19.jpg":Cw,"./assets/media/2024-09-25.jpeg":Ow,"./assets/media/2024-10-15.jpeg":Lw,"./assets/media/2024-10-20-1.jpeg":Pw,"./assets/media/2024-10-20-2.jpeg":Iw,"./assets/media/2024-10-20-3.jpeg":Bw,"./assets/media/2024-10-20-4.mp4":Gw,"./assets/media/2024-10-20-7 Large.jpeg":jw,"./assets/media/2024-10-20.MOV":Xw,"./assets/media/2024-10-20.jpeg":qw,"./assets/media/2024-10-22.JPG":$w,"./assets/media/2024-10-26.jpeg":Kw,"./assets/media/2024-11-01.mp4":Jw,"./assets/media/2024-11-03.mp4":tC,"./assets/media/2024-11-08.jpeg":iC,"./assets/media/2024-11-17-1.jpeg":sC,"./assets/media/2024-11-17-2.jpeg":oC,"./assets/media/2024-11-17-2.mp4":cC,"./assets/media/2024-11-17-3.jpg":fC,"./assets/media/2024-11-17.jpeg":hC,"./assets/media/2024-12-07.jpeg":mC,"./assets/media/2024-12-11.JPG":_C,"./assets/media/2025-02-12-1.mp4":vC,"./assets/media/2025-02-12.jpeg":yC,"./assets/media/2025-02-26.JPG":MC,"./assets/media/2025-03-07.jpeg":TC,"./assets/media/2025-03-08-1.jpeg":RC,"./assets/media/2025-03-08.jpeg":CC,"./assets/media/2025-03-08.mp4":OC,"./assets/media/2025-03-12.jpeg":LC,"./assets/media/2025-04-20-02.jpeg":PC,"./assets/media/2025-04-20.jpeg":IC,"./assets/media/2025-04-24.jpeg":BC,"./assets/media/2025-05-09.jpeg":GC,"./assets/media/2025-05-10-01.jpeg":jC,"./assets/media/2025-05-10-03.jpeg":XC,"./assets/media/2025-05-10-04.jpeg":qC,"./assets/media/2025-05-10-05.jpg":$C,"./assets/media/2025-05-23.mp4":KC,"./assets/media/2025-05-30.jpeg":JC,"./assets/media/2025-06-09.mp4":t4,"./assets/media/2025-06-16.jpg":i4,"./assets/media/2025-06-17.jpeg":s4,"./assets/media/2025-06-19.jpeg":o4,"./assets/media/2025-06-20.jpeg":c4,"./assets/media/2025-06-29.JPG":f4,"./assets/media/2025-07-02.jpeg":h4,"./assets/media/2025-07-04.jpeg":m4,"./assets/media/2025-07-19.jpg":_4,"./assets/media/2025-07-23.jpeg":v4,"./assets/media/2025-08-02.jpeg":y4,"./assets/media/2025-08-15.jpeg":M4,"./assets/media/2025-08-16.mp4":T4,"./assets/media/2025-10-04.mp4":R4,"./assets/media/2025-10-08-2.jpeg":C4,"./assets/media/2025-10-08.jpeg":O4,"./assets/media/2025-10-09.JPG":L4,"./assets/media/2025-10-10.jpeg":P4,"./assets/media/2025-10-11.jpeg":I4,"./assets/media/2025-10-31-2.jpeg":B4,"./assets/media/2025-10-31-3.mp4":G4,"./assets/media/2025-10-31.jpeg":j4,"./assets/media/2025-11-04.jpeg":X4,"./assets/media/2025-11-09.jpeg":q4,"./assets/media/2025-11-09.mp4":$4,"./assets/media/2025-11-29.jpeg":K4,"./assets/media/2025-12-03.JPG":J4,"./assets/media/2025-12-03.jpeg":tD,"./assets/media/2025-12-04-02.jpeg":iD,"./assets/media/2025-12-04-10.mp4":sD,"./assets/media/2025-12-04.jpeg":oD,"./assets/media/2025-12-05-01.mp4":cD,"./assets/media/2025-12-05-02.mp4":fD,"./assets/media/Ignore_2024-08-23-5.png":dD,"./assets/media/Ignore_2025-05-10-06.png":hD}),mp=r=>{const e=r.match(/(\d{4}-\d{2}-\d{2})/);return e?e[1]:r},vD="ignore_",bD={"2025-05-23.mp4":"The best egg-fried rice in SF","2024-07-28.mp4":"Baby Seagull Rescue Mission"},yD={"2023-03-01.jpeg":"399开张","2024-10-20-3.jpeg":"Bye Caroline","2024-11-17-1.jpeg":"吴情吴义","2025-10-31.jpeg":"多邻国之神","2025-12-04.jpeg":"Last Day"},Zp=Object.entries(xD).map(([r,e])=>{const n=r.split("/").pop()||r;if(n.toLowerCase().startsWith(vD))return null;const a=e.default,c=n.toLowerCase().split(".").pop()||"",u=c==="mp4"||c==="mov";if(!u&&!(c==="jpg"||c==="jpeg"||c==="png"))return null;const m=u?"video":"image",p=mp(n);return{filename:n,src:a,previewSrc:a,type:m,sortKey:p}}).filter(r=>r!==null);Zp.push({filename:"Ignore_2025-05-10-06.png",src:"https://vimeo.com/1083175160/86c067f4f9",previewSrc:J2,embedUrl:"https://player.vimeo.com/video/1083175160?h=86c067f4f9",type:"embed",sortKey:"2025-05-10",dateOverride:"2025-05-10",titleOverride:"2025-05-10",description:"Mini-film Festival Winner",timelineLabel:"春天里"});Zp.push({filename:"Ignore_2024-08-23-5.png",src:"https://vimeo.com/1144210034",previewSrc:Q2,embedUrl:"https://player.vimeo.com/video/1144210034",type:"embed",sortKey:"2024-08-23",dateOverride:"2024-08-23",titleOverride:"2024-08-23",description:"Who makes the most authentic old Beijing Zhajiang Noodles?",timelineLabel:"炸酱面大赛"});const As=Zp.sort((r,e)=>r.sortKey.localeCompare(e.sortKey)||r.filename.localeCompare(e.filename)).map((r,e)=>({id:String(e+1),type:r.type,src:r.src,previewSrc:r.previewSrc,embedUrl:r.embedUrl,timelineLabel:r.timelineLabel||yD[r.filename],title:r.dateOverride||mp(r.filename),description:r.description??bD[r.filename]??"",date:r.dateOverride||mp(r.filename),filename:r.filename})),gp={"2021-10-31.JPG":{width:768,height:1024,aspectRatio:.75},"2021-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2021-12-10.jpg":{width:869,height:982,aspectRatio:.884928716904277},"2022-05-13.JPG":{width:1512,height:2016,aspectRatio:.75},"2022-06-13.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2022-07-06-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2022-08-14.JPG":{width:2231,height:4032,aspectRatio:.5533234126984127},"2022-10-29 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-01-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-03-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-05-05.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-05-14.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-07-21.mp4":{width:810,height:1080,aspectRatio:.75},"2024-07-28.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-07-31.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-08-10-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-08-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-08-23-1.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-3.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-4.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.mp4":{width:720,height:960,aspectRatio:.75},"2024-08-25.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-19-02.JPG":{width:2048,height:3089,aspectRatio:.6629977338944643},"2024-09-19-03.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-19.jpg":{width:2075,height:3130,aspectRatio:.6629392971246006},"2024-09-25.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-10-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20-1.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-3.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-4.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-20-7 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20.MOV":{width:3840,height:2160,aspectRatio:1.7777777777777777},"2024-10-20.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-22.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2024-10-26.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-11-01.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-03.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-11-17-3.jpg":{width:1290,height:2228,aspectRatio:.5789946140035906},"2024-11-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-11.JPG":{width:1170,height:2080,aspectRatio:.5625},"2025-02-12-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-02-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-02-26.JPG":{width:3089,height:2048,aspectRatio:1.50830078125},"2025-03-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-03-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-24.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-05-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-03.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-05.jpg":{width:1290,height:1710,aspectRatio:.7543859649122807},"2025-05-23.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-05-30.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-09.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-06-16.jpg":{width:1280,height:1707,aspectRatio:.7498535442296427},"2025-06-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-19.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-06-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-29.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2025-07-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-19.jpg":{width:3024,height:4032,aspectRatio:.75},"2025-07-23.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-16.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-10-04.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-08-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-09.JPG":{width:1080,height:1920,aspectRatio:.5625},"2025-10-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-11.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-31-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-10-31-3.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-11-29.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-03.JPG":{width:1263,height:1535,aspectRatio:.8228013029315961},"2025-12-03.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-12-04-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-04-10.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-12-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-05-01.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-12-05-02.mp4":{width:1630,height:1080,aspectRatio:1.5092592592592593},"Ignore_2024-08-23-5.png":{width:1090,height:1966,aspectRatio:.5544252288911495},"Ignore_2025-05-10-06.png":{width:3448,height:1724,aspectRatio:2}},p0="/MarcoinSF/assets/cover-BrcYv754.mp4",i2="/MarcoinSF/assets/Balloon-C59jG2U_.wav",SD="/MarcoinSF/assets/Typing-K6XFAZpo.mp3",MD="/MarcoinSF/assets/curtain-D_OCfkhx.wav",e1=r=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext y='32' font-size='32'%3E${encodeURIComponent(r)}%3C/text%3E%3C/svg%3E") 16 16, auto`,ED=e1("❤️"),TD=e1("🌸"),AD=({onStartTransition:r})=>{const[e,n]=Ve.useState(0),[a,o]=Ve.useState(!1),[c,u]=Ve.useState(!1),[d,m]=Ve.useState(null),[p,g]=Ve.useState([]),_="Chef of SF's Finest Egg Fried Rice, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys, Award-winning Transgender Actor, Watermelon Annihilator, 华埠老广地陪, Slayer of 100+ Arkvelds,连续戒烟成功者...",[x,S]=Ve.useState(""),M=Ve.useRef(0),T=Ve.useRef(!1),y=Ve.useRef(null),v=Ve.useRef(null),L=Ve.useRef(null),U=Ve.useRef(!1),I=(K,P,W)=>{M.current+=1;const q=M.current;g(pe=>[...pe,{id:q,x:K,y:P,scale:W}])};Ve.useEffect(()=>{let K=0;const P=As.slice(0,4),W=[{src:p0,previewSrc:p0,type:"video"},...As.filter(Te=>Te.type==="image"),...P],q=new Set,pe=W.filter(Te=>{const Ue=Te.previewSrc||Te.src;return q.has(Ue)?!1:(q.add(Ue),!0)}),me=pe.length||1,D=Te=>new Promise(Ue=>{const ae=new Image;ae.src=Te,ae.onload=()=>Ue(),ae.onerror=()=>Ue()}),ie=async()=>{const Te=pe.map(Ue=>D(Ue.previewSrc||Ue.src).then(()=>{K++,n(Math.floor(K/me*100))}));await Promise.all(Te),setTimeout(()=>o(!0),300)},Se=setTimeout(()=>{n(100),o(!0)},6e3);ie().finally(()=>clearTimeout(Se))},[]),Ve.useEffect(()=>{var q;if(!v.current){const pe=new Audio(SD);pe.loop=!0,pe.volume=.4,v.current=pe}(q=v.current)==null||q.play().catch(()=>{});let K=0;const W=setInterval(()=>{var pe;K+=1,S(_.slice(0,K)),K>=_.length&&((pe=v.current)==null||pe.pause(),v.current&&(v.current.currentTime=0),clearInterval(W))},30);return()=>{var pe;clearInterval(W),(pe=v.current)==null||pe.pause(),v.current&&(v.current.currentTime=0)}},[_]);const k=()=>{var K;u(!0),U.current=!0,T.current=!1,m(null),g(P=>P.map(W=>({...W,fading:!0}))),setTimeout(()=>g([]),250),y.current&&(y.current.pause(),y.current.currentTime=0),L.current||(L.current=new Audio(MD)),(K=L.current)==null||K.play().catch(()=>{}),setTimeout(()=>{r()},100)},N=.6,z=3,Q=2,C=4;Ve.useEffect(()=>{let K=0,P=performance.now();const W=q=>{const pe=(q-P)/1e3;P=q,m(me=>{if(!me)return null;let D=me.scale;return me.growing?(D=Math.min(z,D+Q*pe),D>=z&&y.current?(y.current.pause(),I(me.x,me.y,D),T.current=!1,{...me,growing:!1,scale:D}):{...me,scale:D}):(D=Math.max(N,D-C*pe),D<=N+.01?null:{...me,scale:D})}),K=requestAnimationFrame(W)};return K=requestAnimationFrame(W),()=>cancelAnimationFrame(K)},[]);const w=(K,P)=>{M.current+=1;const W=M.current;m({id:W,x:K,y:P,scale:N,growing:!0})},V=()=>{T.current=!1,m(K=>K&&K.growing?(I(K.x,K.y,K.scale),{...K,growing:!1}):K),y.current&&(y.current.pause(),y.current.currentTime=0)},te=K=>{var pe;if(c||U.current)return;const P=K.currentTarget.getBoundingClientRect(),W=K.clientX-P.left,q=K.clientY-P.top;if(T.current=!0,!y.current){const me=new Audio(i2);me.loop=!0,me.playbackRate=1.2,y.current=me}(pe=y.current)==null||pe.play().catch(()=>{}),w(W,q)},he=()=>{V()},xe=()=>{V()};return e<100&&!a?oe.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000",children:[oe.jsx("div",{className:"relative w-64 h-2 bg-gray-200 rounded overflow-hidden",children:oe.jsx("div",{className:"h-full bg-black transition-all duration-200",style:{width:`${e}%`}})}),oe.jsxs("div",{className:"mt-2 text-xs font-bold text-gray-400 font-mono",children:[e,"%"]}),oe.jsx("p",{className:"mt-1 font-bold text-gray-400 animate-pulse text-sm",children:"Loading Gallery..."})]}):oe.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${c?"pointer-events-none":""}`,onMouseDown:te,onMouseUp:he,onMouseLeave:xe,onTouchStart:K=>{var me;if(K.target.closest("wired-button")||c||U.current)return;const P=K.touches[0],W=K.currentTarget.getBoundingClientRect(),q=P.clientX-W.left,pe=P.clientY-W.top;if(T.current=!0,!y.current){const D=new Audio(i2);D.loop=!0,D.playbackRate=1.2,y.current=D}(me=y.current)==null||me.play().catch(()=>{}),w(q,pe)},onTouchEnd:()=>{V()},onTouchMove:K=>T.current&&K.preventDefault(),style:{cursor:ED},children:[oe.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1e4},children:[p.map(K=>oe.jsx("div",{style:{position:"absolute",left:K.x,top:K.y,transform:`translate(-50%, -50%) scale(${K.scale})`,opacity:K.fading?0:1,transition:K.fading?"opacity 200ms ease-out":void 0,fontSize:"32px",pointerEvents:"none",zIndex:10001},children:"❤️"},K.id)),d&&oe.jsx("div",{style:{position:"absolute",left:d.x,top:d.y,transform:`translate(-50%, -50%) scale(${d.scale})`,opacity:1,fontSize:"32px",pointerEvents:"none"},children:"❤️"})]}),oe.jsx("div",{className:`relative z-20 bg-white p-4 shadow-2xl border-2 border-gray-100 transform scale-100 transition-all duration-500 ease-out 
            ${c?"opacity-0 scale-95":"md:hover:scale-105 active:scale-100"}
        `,children:oe.jsxs("div",{className:"w-80 aspect-[4/5] flex flex-col items-center",children:[oe.jsxs("div",{className:"w-full h-64 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in",children:[oe.jsx("video",{src:p0,className:"w-full h-full object-cover grayscale contrast-125 opacity-80",muted:!0,loop:!0,autoPlay:!0,playsInline:!0}),oe.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),oe.jsx("h1",{className:"text-3xl text-center font-bold mb-1 select-none pointer-events-none",children:"The Secret Life of Warco Mu"}),oe.jsx("p",{className:"text-gray-500 text-sm text-center mb-6 select-none pointer-events-none",children:"2021.8-2025.12"}),oe.jsxs("p",{className:"text-gray-800 text-m text-center mb-6 select-none pointer-events-none",children:[x,x.length<_.length&&oe.jsx("span",{className:"animate-pulse",children:"|"})]}),oe.jsx("wired-button",{elevation:2,onClick:k,className:"bg-black text-white font-bold tracking-widest cursor-pointer select-none",style:{cursor:TD},children:"PAY RESPECT"})]})})]})},RD=({onCovered:r,onComplete:e})=>{const[n,a]=Ve.useState([]),o=Ve.useRef("raining"),c=Ve.useRef(0),u=Ve.useRef(null),d=40,m=1,p=1.5,g=80;Ve.useEffect(()=>{const x=window.innerWidth,S=Math.ceil(x/d),M=()=>{if(o.current==="clearing")return;const v=[];for(let L=0;L<S;L++)v.push({id:c.current++,colIndex:L,left:L/S*100+Math.random()*2,duration:m+Math.random()*(p-m),rotation:Math.random()*360});a(L=>[...L,...v])};u.current=window.setInterval(M,g);const T=m*1e3+200,y=setTimeout(()=>{r(),setTimeout(()=>{o.current="clearing",u.current&&clearInterval(u.current)},1500)},T);return()=>{u.current&&clearInterval(u.current),clearTimeout(y)}},[r]);const _=x=>{a(S=>{const M=S.filter(T=>T.id!==x);return o.current==="clearing"&&M.length===0&&setTimeout(e,0),M})};return oe.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,pointerEvents:"none",overflow:"hidden"},children:[oe.jsx("style",{children:`
          @keyframes tennisFall {
            0% {
              transform: translateY(-60px) rotate(0deg);
            }
            100% { transform: translateY(110vh) rotate(var(--rot)); }
          }
        `}),n.map(x=>oe.jsx("div",{onAnimationEnd:()=>_(x.id),style:{position:"absolute",left:`${x.left}%`,top:"-60px",width:`${d}px`,height:`${d}px`,fontSize:`${d}px`,lineHeight:"1",textAlign:"center","--rot":`${x.rotation}deg`,animationName:"tennisFall",animationDuration:`${x.duration}s`,animationTimingFunction:"cubic-bezier(0.3, 0.1, 0.7, 1)",animationFillMode:"forwards"},children:"🎾"},x.id))]})},wD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.5%201.99997C10.1347%201.99987%2010.7457%202.2412%2011.209%202.67501C11.6724%203.10882%2011.9534%203.70262%2011.995%204.33597L12%204.49997V9.10497L17.442%209.70997C18.3855%209.81483%2019.261%2010.2518%2019.9119%2010.9429C20.5628%2011.6339%2020.9467%2012.5339%2020.995%2013.482L21%2013.685V14C21%2016.0784%2020.1911%2018.0752%2018.7445%2019.5677C17.298%2021.0601%2015.3274%2021.931%2013.25%2021.996L13%2022H12.326C10.8885%2021.9999%209.47751%2021.6126%208.24148%2020.8786C7.00546%2020.1446%205.99004%2019.0911%205.302%2017.829L5.171%2017.578L2.329%2011.894C1.969%2011.174%202.236%2010.211%203.076%209.86597C4.119%209.43897%205.11%209.35897%206.131%209.87797C6.353%209.9913%206.571%2010.1293%206.785%2010.292L7%2010.462V4.49997C7%203.83693%207.26339%203.20104%207.73223%202.7322C8.20107%202.26336%208.83696%201.99997%209.5%201.99997ZM9.5%203.99997C9.38297%203.99993%209.26964%204.04094%209.17974%204.11586C9.08984%204.19078%209.02906%204.29486%209.008%204.40997L9%204.49997V13C8.99984%2013.207%208.93542%2013.4089%208.81565%2013.5777C8.69587%2013.7466%208.52663%2013.8741%208.3313%2013.9427C8.13596%2014.0113%207.92414%2014.0176%207.72509%2013.9607C7.52604%2013.9037%207.34956%2013.7865%207.22%2013.625L6.888%2013.218L6.585%2012.864C6.005%2012.207%205.584%2011.844%205.225%2011.661C5.01269%2011.5466%204.77084%2011.4989%204.531%2011.524L4.39%2011.544L6.96%2016.684C7.43992%2017.6435%208.16833%2018.4567%209.06935%2019.0391C9.97038%2019.6214%2011.0111%2019.9515%2012.083%2019.995L12.326%2020H13C14.5524%2020%2016.0444%2019.3984%2017.1625%2018.3215C18.2806%2017.2446%2018.9378%2015.7763%2018.996%2014.225L19%2014V13.685C19.0001%2013.2203%2018.8383%2012.77%2018.5425%2012.4116C18.2467%2012.0532%2017.8353%2011.809%2017.379%2011.721L17.221%2011.697L11.779%2011.093C11.317%2011.0417%2010.8872%2010.831%2010.5637%2010.4972C10.2401%2010.1635%2010.0429%209.72738%2010.006%209.26397L10%209.10497V4.49997C10%204.36736%209.94732%204.24018%209.85355%204.14642C9.75979%204.05265%209.63261%203.99997%209.5%203.99997ZM4%205.99997C4.26522%205.99997%204.51957%206.10533%204.70711%206.29286C4.89464%206.4804%205%206.73475%205%206.99997C5%207.26519%204.89464%207.51954%204.70711%207.70708C4.51957%207.89461%204.26522%207.99997%204%207.99997H3C2.73478%207.99997%202.48043%207.89461%202.29289%207.70708C2.10536%207.51954%202%207.26519%202%206.99997C2%206.73475%202.10536%206.4804%202.29289%206.29286C2.48043%206.10533%202.73478%205.99997%203%205.99997H4ZM16%204.99997C16.2549%205.00025%2016.5%205.09785%2016.6854%205.27282C16.8707%205.44779%2016.9822%205.68692%2016.9972%205.94136C17.0121%206.19581%2016.9293%206.44635%2016.7657%206.6418C16.6021%206.83725%2016.3701%206.96287%2016.117%206.99297L16%206.99997H15C14.7451%206.99969%2014.5%206.90209%2014.3146%206.72712C14.1293%206.55215%2014.0178%206.31302%2014.0028%206.05857C13.9879%205.80413%2014.0707%205.55359%2014.2343%205.35814C14.3979%205.16268%2014.6299%205.03707%2014.883%205.00697L15%204.99997H16ZM4.707%201.29297L5.707%202.29297C5.88916%202.48157%205.98995%202.73417%205.98767%202.99637C5.9854%203.25857%205.88023%203.50938%205.69482%203.69479C5.50941%203.8802%205.2586%203.98537%204.9964%203.98764C4.7342%203.98992%204.4816%203.88913%204.293%203.70697L3.293%202.70697C3.11084%202.51837%203.01005%202.26577%203.01233%202.00357C3.0146%201.74137%203.11977%201.49056%203.30518%201.30515C3.49059%201.11974%203.7414%201.01457%204.0036%201.0123C4.2658%201.01002%204.5184%201.11081%204.707%201.29297ZM15.707%201.29297C15.8945%201.4805%2015.9998%201.73481%2015.9998%201.99997C15.9998%202.26513%2015.8945%202.51944%2015.707%202.70697L14.707%203.70697C14.6148%203.80248%2014.5044%203.87866%2014.3824%203.93107C14.2604%203.98348%2014.1292%204.01107%2013.9964%204.01222C13.8636%204.01337%2013.7319%203.98807%2013.609%203.93779C13.4861%203.88751%2013.3745%203.81326%2013.2806%203.71936C13.1867%203.62547%2013.1125%203.51382%2013.0622%203.39092C13.0119%203.26803%2012.9866%203.13635%2012.9877%203.00357C12.9889%202.87079%2013.0165%202.73957%2013.0689%202.61757C13.1213%202.49556%2013.1975%202.38522%2013.293%202.29297L14.293%201.29297C14.4805%201.1055%2014.7348%201.00018%2015%201.00018C15.2652%201.00018%2015.5195%201.1055%2015.707%201.29297Z'%20fill='black'/%3e%3c/svg%3e",Nt={Z_SPACING:8,X_OFFSET:2.2,CAMERA_START_Z:8,FOG_COLOR:16579577,FADE_START:12,FADE_END:24,HIGHLIGHT_RANGE:4,AUDIO_MAX_DISTANCE:12,AUDIO_QUICK_FADE_BEHIND:1.2,BGM_FADE_ZONE:25,BGM_SILENCE_RADIUS:6,MAX_SCROLL_SPEED:.15,HOVER_MIN_SPEED_FACTOR:.05,TIMELINE_FOCUS_OFFSET:4},CD=()=>As.map((r,e)=>{let n=3.2,a=2.4;const o=gp[r.filename];if(o){const m=o.aspectRatio;m>1?(n=Math.min(o.width,3.2),a=n/m,a>3.2&&(a=3.2,n=a*m)):(a=Math.min(o.height,3.2),n=a*m,n>3.2&&(n=3.2,a=n/m))}return e===As.length-1?{...r,z:-e*Nt.Z_SPACING-8,x:0,y:0,rotationY:0,rotationZ:0,borderIntensity:2,initialWidth:n,initialHeight:a}:{...r,z:-e*Nt.Z_SPACING,x:(Math.random()-.5)*2+(e%2===0?-2.2:Nt.X_OFFSET),y:(Math.random()-.5)*.5,rotationY:(e%2===0?.12:-.12)+(Math.random()-.5)*.05,rotationZ:(Math.random()-.5)*.1,borderIntensity:Math.random()<.3?2:Math.random()<.6?1:0,initialWidth:n,initialHeight:a}}),a2=(r,e,n=1)=>{const a=[],o=r/2,c=e/2,u=n===0?1:n===1?2:3,d=n===0?.01:n===1?.02:.04,m=n===2?.1:.02,p=(_,x,S,M)=>{const T=S-_,y=M-x,v=Math.sqrt(T*T+y*y),L=T/v,U=y/v,I=_-L*(Math.random()*m),k=x-U*(Math.random()*m),N=S+L*(Math.random()*m),z=M+U*(Math.random()*m);a.push(new le(I,k,0));const Q=(I+N)/2+(Math.random()-.5)*d,C=(k+z)/2+(Math.random()-.5)*d;a.push(new le(Q,C,0)),a.push(new le(N,z,0))};for(let _=0;_<u;_++){const x=d*(_+1);p(-o-Math.random()*x,c+Math.random()*x,o+Math.random()*x,c-Math.random()*x),p(o+Math.random()*x,c-Math.random()*x,o-Math.random()*x,-c+Math.random()*x),p(o-Math.random()*x,-c+Math.random()*x,-o+Math.random()*x,-c-Math.random()*x),p(-o+Math.random()*x,-c-Math.random()*x,-o-Math.random()*x,c+Math.random()*x)}return new Qi().setFromPoints(a)},DD=()=>{const r=[],n=(M,T,y,v,L=.2)=>{let I=M,k=T;const N=(y-M)/6,z=(v-T)/6;for(let Q=0;Q<6;Q++){const C=M+N*(Q+1),w=T+z*(Q+1);r.push(new le(I,k,0));const V=Q===5?0:(Math.random()-.5)*L,te=Q===5?0:(Math.random()-.5)*L;r.push(new le(C+V,w+te,0)),I=C+V,k=w+te}};let a=0;for(let M=-120/2;M<=120/2;M+=2){const T=Math.sin(M*.05)*5+Math.sin(M*.15)*2-5;M>-120/2&&(n(M-2,a,M,T,.4),n(M-2,a-.2,M,T-.2,.6)),a=T}const o=15,c=Math.sin(o*.05)*5+Math.sin(o*.15)*2-5;n(o-4,c,o,c+18,.3),n(o+4,c,o,c+18,.3),n(o-3.8,c+2,o+3.8,c+2,.2),n(o-2.5,c+12,o+2.5,c+12,.2);const u=-25,d=Math.sin(u*.05)*5-5;n(u,d,u,d+12,.3),n(u+1,d,u+1,d+12,.3),n(u-.5,d+10,u+1.5,d+10,.1),n(u-15,d-2,u-15,d+10,.3);let m=u-15,p=d+10;for(let M=u-15;M<=u;M+=2){const T=d+10-Math.sin((M-(u-15))/15*Math.PI)*4;n(m,p,M,T,.1),m=M,p=T}const g=(M,T,y)=>{let L=M+Math.cos(0)*y,U=T+Math.sin(0)*y*.6;for(let I=1;I<=13;I++){const k=I/12*Math.PI*2,N=y+(Math.random()-.5)*(y*.4),z=M+Math.cos(k)*N,Q=T+Math.sin(k)*(N*.6);n(L,U,z,Q,.5),L=z,U=Q}};g(-30,15,6),g(-10,20,4),g(25,18,7);const _=35,x=22;g(_,x,3);for(let M=0;M<8;M++){const T=M/8*Math.PI*2,y=_+Math.cos(T)*4,v=x+Math.sin(T)*4,L=_+Math.cos(T)*6,U=x+Math.sin(T)*6;n(y,v,L,U,.2)}return new Qi().setFromPoints(r)},OD=r=>{const e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return null;e.width=512,e.height=128,n.clearRect(0,0,e.width,e.height),n.font='40px "Gloria Hallelujah", cursive',n.fillStyle="#666666",n.textAlign="center",n.textBaseline="middle",n.fillText(r,e.width/2,e.height/2);const a=new T3(e);return a.minFilter=qn,a},UD=()=>oe.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[oe.jsx("path",{d:"M9 18V5l12-2v13"}),oe.jsx("circle",{cx:"6",cy:"18",r:"3"}),oe.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),LD=()=>oe.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[oe.jsx("circle",{cx:"12",cy:"12",r:"3"}),oe.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),ND=()=>oe.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[oe.jsx("circle",{cx:"12",cy:"12",r:"10"}),oe.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),oe.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),s2=()=>oe.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[oe.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),oe.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),r2=()=>oe.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[oe.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),oe.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"})]}),PD=()=>oe.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:oe.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),zD=()=>oe.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:[oe.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),oe.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),m0=()=>oe.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[oe.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),oe.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ID=()=>{var Pe,De;const r=Ve.useRef(null),e=Ve.useRef(null),[n]=Ve.useState(CD),[a,o]=Ve.useState(null),[c,u]=Ve.useState(!1),[d,m]=Ve.useState(!1),[p,g]=Ve.useState(!1),[_,x]=Ve.useState(null),S=Ve.useRef(null),[M,T]=Ve.useState(!1),[y,v]=Ve.useState(!0),[L,U]=Ve.useState(0),[I,k]=Ve.useState(!1),[N,z]=Ve.useState(5),Q=Ve.useRef(0),C=Ve.useRef(1),[w,V]=Ve.useState(1),te=Ve.useRef(1),[he,xe]=Ve.useState(null),K=Ve.useRef(null),[P,W]=Ve.useState(0),q=Ve.useRef([]),pe=Ve.useRef({}),me=Ve.useRef({}),D=Ve.useRef([]),ie=Ve.useRef(!1),Se=Ve.useRef(!1),Te=Ve.useRef(0),Ue=Ve.useRef(0),ae=Ve.useRef(null),fe=Ve.useRef(null),Ne=Ve.useRef(!1),je=Ve.useRef(1),He=Ve.useRef(0),st=Ve.useRef(0),Ot=Ve.useRef(0),ft=Ve.useRef(!1),Rt=Ve.useRef(0),H=Ve.useRef(0);Ve.useEffect(()=>{ie.current=c,c?(document.body.style.overflow="hidden",Object.values(me.current).forEach(re=>re.pause())):d&&(document.body.style.overflow="auto")},[c,d]),Ve.useEffect(()=>{Se.current=d,d?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[d]),Ve.useEffect(()=>{Q.current=N},[N]),Ve.useEffect(()=>{Ne.current=I},[I]),Ve.useEffect(()=>{te.current=w},[w]),Ve.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&V(1.8)},[]),Ve.useEffect(()=>{S.current&&(M&&y?S.current.play().catch(re=>console.error("Audio playback failed:",re)):S.current.pause())},[M,y,L]);const _t=()=>T(!M),vt=re=>{U(re),T(!0),v(!0)},Ft=()=>{window.scrollTo({top:0,behavior:"auto"}),Te.current=0,Ue.current=0,He.current=0,Ot.current=0,g(!0)},We=()=>{m(!0),T(!0),z(5),Object.values(me.current).forEach(re=>{re.muted=!1,re.volume=0})},kt=()=>{g(!1)},tt=re=>{const ce=re.currentTarget.getBoundingClientRect(),ge=Math.min(Math.max((re.clientX-ce.left)/ce.width,0),1);W(re.clientX);const Fe=As.length,$e=Math.floor(ge*(Fe-1)),Et=As[$e];Et&&xe(Et.date)},lt=()=>{xe(null)},O=Nt.CAMERA_START_Z,E=n[n.length-1].z,J=O-(E+5),be=250/w;Ve.useEffect(()=>{st.current=J*be},[J,be]),Ve.useEffect(()=>{const re=$e=>{ie.current||!Se.current||(He.current+=$e.deltaY,He.current=Math.max(0,Math.min(He.current,st.current)),Ot.current=0)},ce=$e=>{$e.target.closest("button, wired-slider, input, .wired-rendered")||(ft.current=!0,Ot.current=0,Rt.current=$e.touches[0].clientY,H.current=performance.now())},ge=$e=>{if($e.target.closest("button, wired-slider, input, .wired-rendered")||ie.current||!Se.current)return;$e.preventDefault();const St=$e.touches[0].clientY,hn=Rt.current-St;Rt.current=St,He.current+=hn,He.current=Math.max(0,Math.min(He.current,st.current));const Nn=performance.now(),Xa=Nn-H.current;if(H.current=Nn,Xa>0){const ua=hn;Ot.current=Ot.current*.5+ua*.5}},Fe=()=>{ft.current=!1};return window.addEventListener("wheel",re,{passive:!1}),window.addEventListener("touchstart",ce,{passive:!1}),window.addEventListener("touchmove",ge,{passive:!1}),window.addEventListener("touchend",Fe),()=>{window.removeEventListener("wheel",re),window.removeEventListener("touchstart",ce),window.removeEventListener("touchmove",ge),window.removeEventListener("touchend",Fe)}},[]),Ve.useEffect(()=>{if(!r.current)return;const re=new x3;re.background=new Gt(Nt.FOG_COLOR),re.fog=new qp(Nt.FOG_COLOR,10,30);const ce=new Pi(50,window.innerWidth/window.innerHeight,.1,2e3);ce.position.set(0,0,Nt.CAMERA_START_Z),ae.current=ce;const ge=new yR({canvas:r.current,antialias:!0,alpha:!1});ge.setSize(window.innerWidth,window.innerHeight),ge.setPixelRatio(Math.min(window.devicePixelRatio,2));const Fe=new O3;Fe.crossOrigin="Anonymous";const $e=3.2,Et=3.2;new ra(3.2,2.4);const St=new Ol({color:16777215}),hn=2,Nn=.5,Xa=new ra(hn,Nn),ua=new dp({color:2236962,linewidth:2,opacity:.8,transparent:!0}),Os=DD(),Kn=new Dv(Os,new dp({color:8947848,opacity:.6,transparent:!0,fog:!1})),Fi=n[n.length-1].z,Us=Math.abs(Fi-Nt.CAMERA_START_Z)+20;Kn.position.set(0,0,Fi-10);const Wa=Math.max(1.5,Us/50);Kn.scale.set(Wa,Wa,1),re.add(Kn),q.current=[],pe.current={},D.current=[],n.forEach(F=>{const Y=new lr;Y.position.set(F.x,F.y,F.z),Y.rotation.y=F.rotationY,Y.rotation.z=F.rotationZ;const $=F.initialWidth,X=F.initialHeight,Re=new ra($,X),Me=new Si(Re,new Ol({transparent:!0,opacity:0}));Me.position.z=.1,Me.position.y=.15;const we=$+.3,ze=X+.8,Le=new ra(we,ze),Xe=new Si(Le,St.clone());Xe.position.z=0;const Ze=a2(we+.05,ze+.05,F.borderIntensity),it=new Dv(Ze,ua.clone());it.position.z=.15,pe.current[F.id]=it;const ct=(ut,gt)=>{const Ke=ut/gt;let wt=$e,dt=$e/Ke;dt>Et&&(dt=Et,wt=Et*Ke),Me.geometry.dispose(),Me.geometry=new ra(wt,dt);const Jt=wt+.3,Vt=dt+.8;Xe.geometry.dispose(),Xe.geometry=new ra(Jt,Vt);const jt=a2(Jt+.05,Vt+.05,F.borderIntensity);it.geometry.dispose(),it.geometry=jt;const Qn=-(Vt/2)+.4,Bt=Y.children.find(bn=>bn.userData.isDate);Bt&&(Bt.position.y=Qn)};D.current.push({item:F,contentMesh:Me,updateGeometry:ct,loadedOpacity:0,targetLoadedOpacity:0});const mt=OD(F.date);if(mt){const ut=new Ol({map:mt,transparent:!0,opacity:.8}),gt=new Si(Xa,ut);gt.userData={isDate:!0},gt.position.y=-(ze/2)+.4,gt.position.z=.11,Y.add(gt)}Y.add(Xe),Y.add(Me),Y.add(it),Y.userData={id:F.id},re.add(Y),q.current.push(Me)});const An={},on=F=>{const Y=F.item;if(!An[Y.id]){if(Y.type==="video"){const $=document.createElement("video");$.src=Y.src,$.crossOrigin="Anonymous",$.muted=!0,$.loop=!0,$.playsInline=!0,$.preload="auto",me.current[Y.id]=$,F.video=$,$.onloadedmetadata=()=>{F.updateGeometry($.videoWidth,$.videoHeight),F.targetLoadedOpacity=1};const X=new E3($);X.minFilter=qn,X.magFilter=qn,X.wrapS=Mi,X.wrapT=Mi,X.colorSpace=li,F.texture=X,F.contentMesh.material.map=X,F.contentMesh.material.needsUpdate=!0}else{const $=Y.type==="embed"&&Y.previewSrc||Y.src;Fe.load($,X=>{X.colorSpace=li,X.wrapS=Mi,X.wrapT=Mi,F.texture=X,F.contentMesh.material.map=X,F.contentMesh.material.needsUpdate=!0,X.image&&F.updateGeometry(X.image.width,X.image.height),F.targetLoadedOpacity=1})}An[Y.id]=!0}},ln=F=>{const Y=F.item.id;An[Y]&&(F.loadedOpacity=0,F.targetLoadedOpacity=0,F.texture&&(F.texture.dispose(),F.contentMesh.material.map=null,F.contentMesh.material.needsUpdate=!0,F.texture=void 0),F.video&&(F.video.pause(),F.video.src="",F.video.load(),delete me.current[Y],F.video=void 0),delete An[Y])},Bi=Nt.CAMERA_START_Z;n[n.length-1].z;const Hi=new N3,Ji=new qt,Uo=F=>{const Y=Math.abs(ce.position.z-F.position.z);return Y<=Nt.FADE_START?1:Y>=Nt.FADE_END?0:1-(Y-Nt.FADE_START)/(Nt.FADE_END-Nt.FADE_START)},Ls=F=>{var we,ze;if(ie.current||!Se.current)return;if(fe.current){const Le=n.find(Xe=>Xe.id===fe.current);if(Le){o(Le),u(!0);return}}Ji.x=F.clientX/window.innerWidth*2-1,Ji.y=-(F.clientY/window.innerHeight)*2+1,re.updateMatrixWorld(!0),Hi.setFromCamera(Ji,ce);const Y=re.children.filter(Le=>Le instanceof lr&&Le.userData.id),$=Hi.intersectObjects(Y,!0).filter(Le=>Le.object instanceof Si),X=new Yp,Re=new dn;Re.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),X.setFromProjectionMatrix(Re);const Me=ce.getWorldDirection(new le);for(const Le of $){let Xe=Le.object;for(;Xe.parent&&!((we=Xe.userData)!=null&&we.id);)Xe=Xe.parent;const Ze=(ze=Xe.userData)==null?void 0:ze.id;if(!Ze)continue;const it=Xe.getWorldPosition(new le);if(!X.containsPoint(it)||it.clone().sub(ce.position).dot(Me)<=0||Uo(Xe)<.1)continue;const ut=n.find(gt=>gt.id===Ze);if(ut){o(ut),u(!0);break}}};r.current.addEventListener("click",Ls);const ea=F=>{var Re,Me;if(ie.current||!Se.current)return;Ji.x=F.clientX/window.innerWidth*2-1,Ji.y=-(F.clientY/window.innerHeight)*2+1,Hi.setFromCamera(Ji,ce);const Y=re.children.filter(we=>we instanceof lr&&we.userData.id),X=Hi.intersectObjects(Y,!0).find(we=>we.object instanceof Si);if(X){let we=X.object;for(;we.parent&&!((Re=we.userData)!=null&&Re.id);)we=we.parent;fe.current=(Me=we.userData)==null?void 0:Me.id,document.body.style.cursor="pointer"}else fe.current=null,document.body.style.cursor="default"};window.addEventListener("mousemove",ea);let qa;window.matchMedia("(pointer: coarse)").matches;const Gi=()=>{if(qa=requestAnimationFrame(Gi),!ie.current&&Se.current){const Re=fe.current?Nt.HOVER_MIN_SPEED_FACTOR:1;if(C.current+=(Re-C.current)*.1,!ft.current){let Le=0;if(Q.current>0){const Xe=250/te.current;Le=Q.current*.8*(Xe/200)*C.current}Ot.current+=(Le-Ot.current)*.05,Math.abs(Le)<.01&&Math.abs(Ot.current)<.01&&(Ot.current=0),He.current+=Ot.current,He.current<0?(He.current=0,Ot.current=0):He.current>st.current&&(He.current=st.current,Ot.current=0)}st.current>0&&(Ue.current=He.current/st.current);const Me=Ue.current-Te.current,we=Math.max(-.15*.2,Math.min(Nt.MAX_SCROLL_SPEED*.2,Me));Te.current+=we*.1+Me*.05,ce.position.z=Bi-Te.current*J,e.current&&(e.current.style.width=`${Te.current*100}% `);const ze=Math.abs(ce.position.z-Fi);if(S.current&&y){let Le=1;ze<Nt.BGM_FADE_ZONE&&(Le=Math.max(0,(ze-Nt.BGM_SILENCE_RADIUS)/(Nt.BGM_FADE_ZONE-Nt.BGM_SILENCE_RADIUS))),je.current+=(Le-je.current)*.05,S.current.volume=Math.max(0,Math.min(1,je.current))}}Object.keys(An).forEach(Re=>{const Me=D.current.find(we=>we.item.id===Re);if(Me){const we=Me.contentMesh.parent;Math.abs(ce.position.z-we.position.z)>32&&ln(Me)}});const F=Math.max(0,Math.floor(-ce.position.z/Nt.Z_SPACING)),Y=8,$=Math.max(0,F-Y),X=Math.min(D.current.length-1,F+Y);for(let Re=$;Re<=X;Re++){const Me=D.current[Re],we=Me.contentMesh.parent,ze=Me.contentMesh,Le=Math.abs(ce.position.z-we.position.z);Le<22?on(Me):Le>32&&ln(Me);const it=Me.item.id,ct=pe.current[it];ct&&(fe.current===it?(ct.material.color.setHex(0),ct.material.opacity=1,ct.scale.setScalar(1.02)):(ct.material.color.setHex(2236962),ct.material.opacity=.8,ct.scale.setScalar(1)));let mt=0;const ut=4,gt=.5;Le<gt?mt=0:Le<ut?mt=(Le-gt)/(ut-gt):Le<=Nt.FADE_START?mt=1:Le>=Nt.FADE_END?mt=0:mt=1-(Le-Nt.FADE_START)/(Nt.FADE_END-Nt.FADE_START),Me.loadedOpacity+=(Me.targetLoadedOpacity-Me.loadedOpacity)*.05;const Ke=mt*Me.loadedOpacity;ze.material.opacity=Ke;const wt=we.children.find(Vt=>Vt.isMesh&&Vt!==ze&&!Vt.userData.isDate);if(wt&&wt.material&&(wt.material.opacity=Ke,wt.material.transparent=!0),ct){const Vt=fe.current===it?1:.8;ct.material.opacity=Vt*Ke,ct.material.transparent=!0}const dt=we.children.find(Vt=>Vt.userData.isDate);dt&&dt.material&&(dt.material.opacity=.8*Ke);let Jt=1;if(Le<Nt.HIGHLIGHT_RANGE&&(Jt=1+(1-Le/Nt.HIGHLIGHT_RANGE)*.15),we.scale.set(Jt,Jt,1),me.current[it]){const Vt=me.current[it];if(!ie.current&&Se.current)if(Ne.current)Vt.volume=0;else if(Le<Nt.AUDIO_MAX_DISTANCE){Vt.muted=!1;const jt=ce.position.z<we.position.z-2;let Qn=0;if(jt){const Bt=Math.abs(ce.position.z-we.position.z);Qn=Math.max(0,1-Bt/Nt.AUDIO_QUICK_FADE_BEHIND)}else Qn=Math.max(0,1-Le/Nt.AUDIO_MAX_DISTANCE);Vt.volume=Qn,Vt.paused&&Vt.play().catch(()=>{})}else Vt.volume>0&&(Vt.volume=0),Vt.paused||Vt.pause()}}ge.render(re,ce)};Gi();const R=()=>{ce.aspect=window.innerWidth/window.innerHeight,ce.updateProjectionMatrix(),ge.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",R),()=>{var F;window.removeEventListener("resize",R),window.removeEventListener("mousemove",ea),(F=r.current)==null||F.removeEventListener("click",Ls),cancelAnimationFrame(qa),K.current&&cancelAnimationFrame(K.current),ge.dispose(),document.body.style.height="auto",Object.values(me.current).forEach(Y=>{Y.pause(),Y.src="",Y.load()})}},[n]);const Ee=()=>{u(!1),o(null)},de=re=>{Ot.current=0,Ue.current=Math.max(0,Math.min(1,re)),st.current>0&&(He.current=Ue.current*st.current)},Je=re=>{const ce=re.currentTarget.getBoundingClientRect(),ge=re.touches[0],Fe=Math.min(Math.max((ge.clientX-ce.left)/ce.width,0),1);W(ge.clientX);const $e=As.length,Et=Math.floor(Fe*($e-1)),St=As[Et];St&&xe(St.date),de(Fe)},Ie=re=>{if(c||!d)return;const ce=re.currentTarget.getBoundingClientRect(),ge=Math.min(Math.max((re.clientX-ce.left)/ce.width,0),1);de(ot(ge))},nt=re=>{x(_===re?null:re)},Ye=Nt.CAMERA_START_Z,Ce=n[n.length-1].z+5,et=Ye-Ce||1,ke=re=>Math.min(Math.max((Ye-re)/et,0),1),Ge=re=>Ye-re*et,ot=re=>ke(Ge(re)+Nt.TIMELINE_FOCUS_OFFSET),G=n.filter(re=>re.timelineLabel).map(re=>({id:re.id,label:re.timelineLabel,pct:ke(re.z),focusPct:ke(re.z+Nt.TIMELINE_FOCUS_OFFSET),z:re.z}));return oe.jsxs(oe.Fragment,{children:[oe.jsx("canvas",{ref:r,className:"fixed top-0 left-0 w-full h-full block z-0"}),oe.jsx("audio",{ref:S,src:h0[L].src,onEnded:()=>vt((L+1)%h0.length)}),!d&&oe.jsx(AD,{onStartTransition:Ft}),p&&oe.jsx(RD,{onCovered:We,onComplete:kt}),oe.jsx("div",{className:`fixed top-6 left-0 right-6 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-500 flex justify-center ${d?"opacity-100":"opacity-0"} `,children:oe.jsxs("h1",{className:"text-1xl md:text-3xl font-bold text-gray-800 drop-shadow-sm rotate-[-2deg] text-center px-4",children:["The secret life of ",oe.jsx("span",{className:"text-gray-600",children:"Warco Mu"})]})}),oe.jsxs("div",{className:`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${d?"opacity-100":"opacity-0 pointer-events-none"} `,children:[oe.jsxs("div",{className:"relative flex flex-col items-end",children:[oe.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>nt("audio"),children:oe.jsx(UD,{})}),_==="audio"&&oe.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:oe.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-72 block",children:[oe.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[oe.jsx("span",{className:"font-bold text-sm",children:"Audio Settings"}),oe.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:oe.jsx(m0,{})})]}),oe.jsx("div",{className:"mb-4",children:oe.jsxs("div",{className:"flex justify-between items-center mb-1",children:[oe.jsx("label",{className:"text-xs text-gray-500",children:"Video Sound"}),oe.jsx("button",{onClick:()=>k(!I),className:"p-1 rounded hover:bg-gray-100",title:I?"Unmute Videos":"Mute Videos",children:I?oe.jsx(r2,{}):oe.jsx(s2,{})})]})}),oe.jsxs("div",{children:[oe.jsxs("div",{className:"flex justify-between items-center mb-2",children:[oe.jsx("label",{className:"text-xs text-gray-500",children:"Background Music"}),oe.jsx("div",{className:"flex items-center gap-2",children:oe.jsx("button",{onClick:()=>v(!y),className:"p-1 rounded hover:bg-gray-100",title:y?"Disable BGM":"Enable BGM",children:y?oe.jsx(s2,{}):oe.jsx(r2,{})})})]}),oe.jsx("div",{className:`flex items-center gap-2 justify-center py-2 transition-opacity ${y?"opacity-100":"opacity-50 pointer-events-none"} `,children:oe.jsx("button",{onClick:_t,className:"w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors",children:M?oe.jsx(zD,{}):oe.jsx(PD,{})})}),oe.jsx("div",{className:`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${y?"opacity-100":"opacity-50 pointer-events-none"} `,children:h0.map((re,ce)=>oe.jsxs("div",{onClick:()=>vt(ce),className:`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${L===ce?"bg-blue-50 font-bold text-blue-700":"text-gray-600"} `,children:[ce+1,". ",re.title]},ce))})]})]})})]}),oe.jsxs("div",{className:"relative flex flex-col items-end",children:[oe.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>nt("general"),children:oe.jsx(LD,{})}),_==="general"&&oe.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:oe.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[oe.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[oe.jsx("span",{className:"font-bold text-sm",children:"General Settings"}),oe.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:oe.jsx(m0,{})})]}),oe.jsxs("div",{children:[oe.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Auto-Forward Speed"}),oe.jsxs("div",{className:"flex items-center gap-2",children:[oe.jsx("span",{className:"text-xs text-gray-400",children:"Off"}),oe.jsx("input",{type:"range",min:"0",max:"20",step:"1",value:N,onChange:re=>z(Number(re.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),oe.jsx("span",{className:"text-xs font-bold w-4 text-center",children:N})]})]}),oe.jsxs("div",{className:"mt-4",children:[oe.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Scroll Sensitivity"}),oe.jsxs("div",{className:"flex items-center gap-2",children:[oe.jsx("span",{className:"text-xs text-gray-400",children:"Low"}),oe.jsx("input",{type:"range",min:"0.1",max:"5.0",step:"0.1",value:w,onChange:re=>V(Number(re.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),oe.jsx("span",{className:"text-xs text-gray-400",children:"High"})]})]})]})})]}),oe.jsxs("div",{className:"relative flex flex-col items-end",children:[oe.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>nt("credit"),children:oe.jsx(ND,{})}),_==="credit"&&oe.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:oe.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[oe.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[oe.jsx("span",{className:"font-bold text-sm",children:"Credits"}),oe.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:oe.jsx(m0,{})})]}),oe.jsxs("div",{className:"text-xs text-gray-600 leading-relaxed",children:[oe.jsx("p",{className:"mb-2",children:oe.jsx("strong",{children:"Coming Soon"})}),oe.jsxs("p",{className:"mb-2",children:["This gallery would like to thank the generous photo donors, who bravely surrendered their most questionable selfies. ",oe.jsx("br",{}),"Special thanks to the friends who helped build this website—your debugging tears now live forever in this exhibit."]}),oe.jsx("br",{}),oe.jsx("p",{children:"Built with Gemini 3 Pro, GPT, Suno and their humble human operators with React, Three.js & Wired Elements."}),oe.jsx("br",{}),oe.jsx("p",{children:"BGM from YouTube: https://www.youtube.com/watch?v=bYkyj1GbdGU&list=RDssxbJpuzruQ&index=4, https://www.youtube.com/results?search_query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B+low+fi"})]})]})})]})]}),d&&oe.jsxs("div",{className:"fixed left-0 right-0 bottom-0 h-4 bg-gray-200 cursor-pointer z-30 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in relative",style:{position:"fixed",bottom:0,left:0,right:0,top:"auto",touchAction:"none"},onClick:Ie,onMouseMove:tt,onMouseLeave:lt,onTouchStart:Je,onTouchMove:Je,onTouchEnd:lt,children:[G.map(re=>oe.jsxs("button",{onClick:ce=>{ce.stopPropagation(),de(re.focusPct)},className:"absolute flex flex-col items-center group/pin transition-transform duration-150",style:{left:`calc(${re.pct*100}% - 6px)`,bottom:"8px",zIndex:10},title:re.label,children:[oe.jsx("span",{className:"text-[10px] font-semibold text-gray-700 mb-1 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap",children:re.label}),oe.jsx("img",{src:wD,alt:re.label,className:"w-4 h-4 drop-shadow group-hover/pin:scale-110 transition-transform duration-150"})]},re.id)),oe.jsx("div",{ref:e,className:"h-full bg-blue-500 relative transition-all duration-75 z-0",style:{width:"0%",backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDI5OUUxIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')"}}),he&&oe.jsxs("div",{className:"absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50",style:{left:P},children:[he,oe.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"})]})]}),c&&a&&oe.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[oe.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:Ee}),oe.jsx("div",{className:"relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center",children:oe.jsx("wired-card",{elevation:4,className:"bg-white p-2 max-w-5xl",children:oe.jsxs("div",{className:"p-4 flex flex-col items-center",children:[oe.jsx("div",{className:"w-full flex justify-end mb-2",children:oe.jsx("wired-button",{onClick:Ee,elevation:2,children:"Close [X]"})}),oe.jsxs("div",{className:"relative flex items-center justify-center bg-black border-2 border-black rounded-sm shadow-inner overflow-hidden",style:{maxHeight:"65vh",maxWidth:"90vw",aspectRatio:a.type==="embed"?((Pe=gp[a.filename])==null?void 0:Pe.aspectRatio)||16/9:void 0,width:a.type==="embed"?`min(100%, calc(65vh * ${((De=gp[a.filename])==null?void 0:De.aspectRatio)||1.777}))`:"auto"},children:[a.type==="video"&&oe.jsx("video",{src:a.src,className:"block max-w-full max-h-[65vh] w-auto h-auto object-contain",controls:!0,autoPlay:!0}),a.type==="embed"&&oe.jsx("iframe",{src:(()=>{const re=a.embedUrl||a.src,ce=re.includes("?")?"&":"?";return`${re}${ce} autoplay=1&muted=1&playsinline=1&loop=1&controls=1`})(),className:"w-full h-full",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:a.title}),a.type==="image"&&oe.jsx("img",{src:a.src,alt:a.title,className:"block max-w-full max-h-[65vh] w-auto h-auto object-contain"})]}),oe.jsxs("div",{className:"mt-6 text-center",children:[oe.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2",children:a.title}),a.description&&oe.jsx("p",{className:"text-gray-600 text-lg font-light",children:a.description})]})]})})})]})]})},t1=document.getElementById("root");if(!t1)throw new Error("Could not find root element to mount to");const FD=nS.createRoot(t1);FD.render(oe.jsx(Yy.StrictMode,{children:oe.jsx(ID,{})}));
