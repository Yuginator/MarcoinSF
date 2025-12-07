(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Iu=window,m0=Iu.ShadowRoot&&(Iu.ShadyCSS===void 0||Iu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,g0=Symbol(),wx=new WeakMap;let ib=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==g0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(m0&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=wx.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&wx.set(n,e))}return e}toString(){return this.cssText}};const t1=r=>new ib(typeof r=="string"?r:r+"",void 0,g0),un=(r,...e)=>{const n=r.length===1?r[0]:e.reduce(((a,o,c)=>a+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[c+1]),r[0]);return new ib(n,r,g0)},n1=(r,e)=>{m0?r.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const a=document.createElement("style"),o=Iu.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=n.cssText,r.appendChild(a)}))},Cx=m0?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return t1(n)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sh;const ju=window,Dx=ju.trustedTypes,i1=Dx?Dx.emptyScript:"",Ox=ju.reactiveElementPolyfillSupport,mp={toAttribute(r,e){switch(e){case Boolean:r=r?i1:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let n=r;switch(e){case Boolean:n=r!==null;break;case Number:n=r===null?null:Number(r);break;case Object:case Array:try{n=JSON.parse(r)}catch{n=null}}return n}},ab=(r,e)=>e!==r&&(e==e||r==r),Mh={attribute:!0,type:String,converter:mp,reflect:!1,hasChanged:ab},gp="finalized";let oo=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,a)=>{const o=this._$Ep(a,n);o!==void 0&&(this._$Ev.set(o,a),e.push(o))})),e}static createProperty(e,n=Mh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const a=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,a,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,a){return{get(){return this[n]},set(o){const c=this[e];this[n]=o,this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Mh}static finalize(){if(this.hasOwnProperty(gp))return!1;this[gp]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of a)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const o of a)n.unshift(Cx(o))}else e!==void 0&&n.push(Cx(e));return n}static _$Ep(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,a;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)===null||a===void 0||a.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return n1(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)}))}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$EO(e,n,a=Mh){var o;const c=this.constructor._$Ep(e,a);if(c!==void 0&&a.reflect===!0){const u=(((o=a.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?a.converter:mp).toAttribute(n,a.type);this._$El=e,u==null?this.removeAttribute(c):this.setAttribute(c,u),this._$El=null}}_$AK(e,n){var a;const o=this.constructor,c=o._$Ev.get(e);if(c!==void 0&&this._$El!==c){const u=o.getPropertyOptions(c),d=typeof u.converter=="function"?{fromAttribute:u.converter}:((a=u.converter)===null||a===void 0?void 0:a.fromAttribute)!==void 0?u.converter:mp;this._$El=c,this[c]=d.fromAttribute(n,u.type),this._$El=null}}requestUpdate(e,n,a){let o=!0;e!==void 0&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||ab)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),a.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,a))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,c)=>this[c]=o)),this._$Ei=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var c;return(c=o.hostUpdate)===null||c===void 0?void 0:c.call(o)})),this.update(a)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(a)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((a=>{var o;return(o=a.hostUpdated)===null||o===void 0?void 0:o.call(a)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,a)=>this._$EO(a,this[a],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};oo[gp]=!0,oo.elementProperties=new Map,oo.elementStyles=[],oo.shadowRootOptions={mode:"open"},Ox==null||Ox({ReactiveElement:oo}),((Sh=ju.reactiveElementVersions)!==null&&Sh!==void 0?Sh:ju.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Eh;const ku=window,uo=ku.trustedTypes,Ux=uo?uo.createPolicy("lit-html",{createHTML:r=>r}):void 0,_p="$lit$",Ss=`lit$${(Math.random()+"").slice(9)}$`,sb="?"+Ss,a1=`<${sb}>`,or=document,Ul=()=>or.createComment(""),Ll=r=>r===null||typeof r!="object"&&typeof r!="function",rb=Array.isArray,s1=r=>rb(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Th=`[ 	
\f\r]`,bl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lx=/-->/g,Nx=/>/g,Ys=RegExp(`>|${Th}(?:([^\\s"'>=/]+)(${Th}*=${Th}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Px=/'/g,zx=/"/g,ob=/^(?:script|style|textarea|title)$/i,r1=r=>(e,...n)=>({_$litType$:r,strings:e,values:n}),cn=r1(1),fo=Symbol.for("lit-noChange"),kn=Symbol.for("lit-nothing"),Ix=new WeakMap,ar=or.createTreeWalker(or,129,null,!1);function lb(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ux!==void 0?Ux.createHTML(e):e}const o1=(r,e)=>{const n=r.length-1,a=[];let o,c=e===2?"<svg>":"",u=bl;for(let d=0;d<n;d++){const m=r[d];let p,g,_=-1,x=0;for(;x<m.length&&(u.lastIndex=x,g=u.exec(m),g!==null);)x=u.lastIndex,u===bl?g[1]==="!--"?u=Lx:g[1]!==void 0?u=Nx:g[2]!==void 0?(ob.test(g[2])&&(o=RegExp("</"+g[2],"g")),u=Ys):g[3]!==void 0&&(u=Ys):u===Ys?g[0]===">"?(u=o??bl,_=-1):g[1]===void 0?_=-2:(_=u.lastIndex-g[2].length,p=g[1],u=g[3]===void 0?Ys:g[3]==='"'?zx:Px):u===zx||u===Px?u=Ys:u===Lx||u===Nx?u=bl:(u=Ys,o=void 0);const y=u===Ys&&r[d+1].startsWith("/>")?" ":"";c+=u===bl?m+a1:_>=0?(a.push(p),m.slice(0,_)+_p+m.slice(_)+Ss+y):m+Ss+(_===-2?(a.push(void 0),d):y)}return[lb(r,c+(r[n]||"<?>")+(e===2?"</svg>":"")),a]};class Nl{constructor({strings:e,_$litType$:n},a){let o;this.parts=[];let c=0,u=0;const d=e.length-1,m=this.parts,[p,g]=o1(e,n);if(this.el=Nl.createElement(p,a),ar.currentNode=this.el.content,n===2){const _=this.el.content,x=_.firstChild;x.remove(),_.append(...x.childNodes)}for(;(o=ar.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const _=[];for(const x of o.getAttributeNames())if(x.endsWith(_p)||x.startsWith(Ss)){const y=g[u++];if(_.push(x),y!==void 0){const M=o.getAttribute(y.toLowerCase()+_p).split(Ss),T=/([.?@])?(.*)/.exec(y);m.push({type:1,index:c,name:T[2],strings:M,ctor:T[1]==="."?c1:T[1]==="?"?f1:T[1]==="@"?d1:nf})}else m.push({type:6,index:c})}for(const x of _)o.removeAttribute(x)}if(ob.test(o.tagName)){const _=o.textContent.split(Ss),x=_.length-1;if(x>0){o.textContent=uo?uo.emptyScript:"";for(let y=0;y<x;y++)o.append(_[y],Ul()),ar.nextNode(),m.push({type:2,index:++c});o.append(_[x],Ul())}}}else if(o.nodeType===8)if(o.data===sb)m.push({type:2,index:c});else{let _=-1;for(;(_=o.data.indexOf(Ss,_+1))!==-1;)m.push({type:7,index:c}),_+=Ss.length-1}c++}}static createElement(e,n){const a=or.createElement("template");return a.innerHTML=e,a}}function ho(r,e,n=r,a){var o,c,u,d;if(e===fo)return e;let m=a!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[a]:n._$Cl;const p=Ll(e)?void 0:e._$litDirective$;return(m==null?void 0:m.constructor)!==p&&((c=m==null?void 0:m._$AO)===null||c===void 0||c.call(m,!1),p===void 0?m=void 0:(m=new p(r),m._$AT(r,n,a)),a!==void 0?((u=(d=n)._$Co)!==null&&u!==void 0?u:d._$Co=[])[a]=m:n._$Cl=m),m!==void 0&&(e=ho(r,m._$AS(r,e.values),m,a)),e}class l1{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:a},parts:o}=this._$AD,c=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:or).importNode(a,!0);ar.currentNode=c;let u=ar.nextNode(),d=0,m=0,p=o[0];for(;p!==void 0;){if(d===p.index){let g;p.type===2?g=new ql(u,u.nextSibling,this,e):p.type===1?g=new p.ctor(u,p.name,p.strings,this,e):p.type===6&&(g=new h1(u,this,e)),this._$AV.push(g),p=o[++m]}d!==(p==null?void 0:p.index)&&(u=ar.nextNode(),d++)}return ar.currentNode=or,c}v(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}}class ql{constructor(e,n,a,o){var c;this.type=2,this._$AH=kn,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=o,this._$Cp=(c=o==null?void 0:o.isConnected)===null||c===void 0||c}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=ho(this,e,n),Ll(e)?e===kn||e==null||e===""?(this._$AH!==kn&&this._$AR(),this._$AH=kn):e!==this._$AH&&e!==fo&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):s1(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==kn&&Ll(this._$AH)?this._$AA.nextSibling.data=e:this.$(or.createTextNode(e)),this._$AH=e}g(e){var n;const{values:a,_$litType$:o}=e,c=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Nl.createElement(lb(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===c)this._$AH.v(a);else{const u=new l1(c,this),d=u.u(this.options);u.v(a),this.$(d),this._$AH=u}}_$AC(e){let n=Ix.get(e.strings);return n===void 0&&Ix.set(e.strings,n=new Nl(e)),n}T(e){rb(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,o=0;for(const c of e)o===n.length?n.push(a=new ql(this.k(Ul()),this.k(Ul()),this,this.options)):a=n[o],a._$AI(c),o++;o<n.length&&(this._$AR(a&&a._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class nf{constructor(e,n,a,o,c){this.type=1,this._$AH=kn,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=kn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,a,o){const c=this.strings;let u=!1;if(c===void 0)e=ho(this,e,n,0),u=!Ll(e)||e!==this._$AH&&e!==fo,u&&(this._$AH=e);else{const d=e;let m,p;for(e=c[0],m=0;m<c.length-1;m++)p=ho(this,d[a+m],n,m),p===fo&&(p=this._$AH[m]),u||(u=!Ll(p)||p!==this._$AH[m]),p===kn?e=kn:e!==kn&&(e+=(p??"")+c[m+1]),this._$AH[m]=p}u&&!o&&this.j(e)}j(e){e===kn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class c1 extends nf{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===kn?void 0:e}}const u1=uo?uo.emptyScript:"";class f1 extends nf{constructor(){super(...arguments),this.type=4}j(e){e&&e!==kn?this.element.setAttribute(this.name,u1):this.element.removeAttribute(this.name)}}class d1 extends nf{constructor(e,n,a,o,c){super(e,n,a,o,c),this.type=5}_$AI(e,n=this){var a;if((e=(a=ho(this,e,n,0))!==null&&a!==void 0?a:kn)===fo)return;const o=this._$AH,c=e===kn&&o!==kn||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==kn&&(o===kn||c);c&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,e):this._$AH.handleEvent(e)}}class h1{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){ho(this,e)}}const Fx=ku.litHtmlPolyfillSupport;Fx==null||Fx(Nl,ql),((Eh=ku.litHtmlVersions)!==null&&Eh!==void 0?Eh:ku.litHtmlVersions=[]).push("2.8.0");const p1=(r,e,n)=>{var a,o;const c=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:e;let u=c._$litPart$;if(u===void 0){const d=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;c._$litPart$=u=new ql(e.insertBefore(Ul(),d),d,void 0,n??{})}return u._$AI(r),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ah,Rh;class Fa extends oo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const a=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=a.firstChild),a}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=p1(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return fo}}Fa.finalized=!0,Fa._$litElement$=!0,(Ah=globalThis.litElementHydrateSupport)===null||Ah===void 0||Ah.call(globalThis,{LitElement:Fa});const Bx=globalThis.litElementPolyfillSupport;Bx==null||Bx({LitElement:Fa});((Rh=globalThis.litElementVersions)!==null&&Rh!==void 0?Rh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dn=r=>e=>typeof e=="function"?((n,a)=>(customElements.define(n,a),a))(r,e):((n,a)=>{const{kind:o,elements:c}=a;return{kind:o,elements:c,finisher(u){customElements.define(n,u)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m1=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,r)}},g1=(r,e,n)=>{e.constructor.createProperty(n,r)};function Ce(r){return(e,n)=>n!==void 0?g1(r,e,n):m1(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _1(r){return Ce({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x1=({finisher:r,descriptor:e})=>(n,a)=>{var o;if(a===void 0){const c=(o=n.originalKey)!==null&&o!==void 0?o:n.key,u=e!=null?{kind:"method",placement:"prototype",key:c,descriptor:e(n.key)}:{...n,key:c};return r!=null&&(u.finisher=function(d){r(d,c)}),u}{const c=n.constructor;e!==void 0&&Object.defineProperty(n,a,e(a)),r==null||r(c,a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fn(r,e){return x1({descriptor:n=>({get(){var o,c;return(c=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&c!==void 0?c:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wh;((wh=window.HTMLSlotElement)===null||wh===void 0?void 0:wh.prototype.assignedElements)!=null;var v1=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},b1=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const En=un`
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
`;class Tn extends Fa{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const n=this.canvasSize();if(!e&&n[0]===this.lastSize[0]&&n[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${n[0]}`),this.svg.setAttribute("height",`${n[1]}`),this.draw(this.svg,n),this.lastSize=n,this.classList.add("wired-rendered")}}fire(e,n){_0(this,e,n)}}v1([Fn("svg"),b1("design:type",SVGSVGElement)],Tn.prototype,"svg",void 0);function y1(){return Math.floor(Math.random()*2**31)}function _0(r,e,n){r.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:n}))}function xp(r,e,n){if(r&&r.length){const[a,o]=e,c=Math.PI/180*n,u=Math.cos(c),d=Math.sin(c);for(const m of r){const[p,g]=m;m[0]=(p-a)*u-(g-o)*d+a,m[1]=(p-a)*d+(g-o)*u+o}}}function S1(r,e,n){const a=[];r.forEach(o=>a.push(...o)),xp(a,e,n)}function M1(r,e){return r[0]===e[0]&&r[1]===e[1]}function E1(r,e,n,a=1){const o=n,c=Math.max(e,.1),u=r[0]&&r[0][0]&&typeof r[0][0]=="number"?[r]:r,d=[0,0];if(o)for(const p of u)xp(p,d,o);const m=T1(u,c,a);if(o){for(const p of u)xp(p,d,-o);S1(m,d,-o)}return m}function T1(r,e,n){const a=[];for(const p of r){const g=[...p];M1(g[0],g[g.length-1])||g.push([g[0][0],g[0][1]]),g.length>2&&a.push(g)}const o=[];e=Math.max(e,.1);const c=[];for(const p of a)for(let g=0;g<p.length-1;g++){const _=p[g],x=p[g+1];if(_[1]!==x[1]){const y=Math.min(_[1],x[1]);c.push({ymin:y,ymax:Math.max(_[1],x[1]),x:y===_[1]?_[0]:x[0],islope:(x[0]-_[0])/(x[1]-_[1])})}}if(c.sort((p,g)=>p.ymin<g.ymin?-1:p.ymin>g.ymin?1:p.x<g.x?-1:p.x>g.x?1:p.ymax===g.ymax?0:(p.ymax-g.ymax)/Math.abs(p.ymax-g.ymax)),!c.length)return o;let u=[],d=c[0].ymin,m=0;for(;u.length||c.length;){if(c.length){let p=-1;for(let _=0;_<c.length&&!(c[_].ymin>d);_++)p=_;c.splice(0,p+1).forEach(_=>{u.push({s:d,edge:_})})}if(u=u.filter(p=>!(p.edge.ymax<=d)),u.sort((p,g)=>p.edge.x===g.edge.x?0:(p.edge.x-g.edge.x)/Math.abs(p.edge.x-g.edge.x)),(n!==1||m%e===0)&&u.length>1)for(let p=0;p<u.length;p=p+2){const g=p+1;if(g>=u.length)break;const _=u[p].edge,x=u[g].edge;o.push([[Math.round(_.x),d],[Math.round(x.x),d]])}d+=n,u.forEach(p=>{p.edge.x=p.edge.x+n*p.edge.islope}),m++}return o}function cb(r,e){var n;const a=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=e.strokeWidth*4),o=Math.round(Math.max(o,.1));let c=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(c=o),E1(r,o,a,c||1)}class A1{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const a=cb(e,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(e,n){const a=[];for(const o of e)a.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return a}}function R1(r){const e=r[0],n=r[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class w1 extends A1{fillPolygons(e,n){let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);const o=Object.assign({},n,{hachureGap:a}),c=cb(e,o),u=Math.PI/180*n.hachureAngle,d=[],m=a*.5*Math.cos(u),p=a*.5*Math.sin(u);for(const[_,x]of c)R1([_,x])&&d.push([[_[0]-m,_[1]+p],[...x]],[[_[0]+m,_[1]-p],[...x]]);return{type:"fillSketch",ops:this.renderLines(d,n)}}}class C1{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function ub(r,e,n,a,o){return{type:"path",ops:Xu(r,e,n,a,o)}}function D1(r,e,n){const a=(r||[]).length;if(a>2){const o=[];for(let c=0;c<a-1;c++)o.push(...Xu(r[c][0],r[c][1],r[c+1][0],r[c+1][1],n));return o.push(...Xu(r[a-1][0],r[a-1][1],r[0][0],r[0][1],n)),{type:"path",ops:o}}else if(a===2)return ub(r[0][0],r[0][1],r[1][0],r[1][1],n);return{type:"path",ops:[]}}function fb(r,e){return D1(r,!0,e)}function O1(r,e,n,a,o){const c=[[r,e],[r+n,e],[r+n,e+a],[r,e+a]];return fb(c,o)}function db(r,e,n,a,o){const c=hb(n,a,o);return U1(r,e,o,c).opset}function hb(r,e,n){const a=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(r/2,2)+Math.pow(e/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),c=Math.PI*2/o;let u=Math.abs(r/2),d=Math.abs(e/2);const m=1-n.curveFitting;return u+=Nn(u*m,n),d+=Nn(d*m,n),{increment:c,rx:u,ry:d}}function U1(r,e,n,a){const[o,c]=Gx(a.increment,r,e,a.rx,a.ry,1,a.increment*vp(.1,vp(.4,1,n),n),n);let u=Hx(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[d]=Gx(a.increment,r,e,a.rx,a.ry,1.5,0,n),m=Hx(d,null,n);u=u.concat(m)}return{estimatedPoints:c,opset:{type:"path",ops:u}}}function L1(r,e,n,a,o){return Xu(r,e,n,a,o,!0)}function pb(r){return r.randomizer||(r.randomizer=new C1(r.seed||0)),r.randomizer.next()}function vp(r,e,n,a=1){return n.roughness*a*(pb(n)*(e-r)+r)}function Nn(r,e,n=1){return vp(-r,r,e,n)}function Xu(r,e,n,a,o,c=!1){const u=c?o.disableMultiStrokeFill:o.disableMultiStroke,d=bp(r,e,n,a,o,!0,!1);if(u)return d;const m=bp(r,e,n,a,o,!0,!0);return d.concat(m)}function bp(r,e,n,a,o,c,u){const d=Math.pow(r-n,2)+Math.pow(e-a,2),m=Math.sqrt(d);let p=1;m<200?p=1:m>500?p=.4:p=-.0016668*m+1.233334;let g=o.maxRandomnessOffset||0;g*g*100>d&&(g=m/10);const _=g/2,x=.2+pb(o)*.2;let y=o.bowing*o.maxRandomnessOffset*(a-e)/200,M=o.bowing*o.maxRandomnessOffset*(r-n)/200;y=Nn(y,o,p),M=Nn(M,o,p);const T=[],S=()=>Nn(_,o,p),b=()=>Nn(g,o,p),U=o.preserveVertices;return u?T.push({op:"move",data:[r+(U?0:S()),e+(U?0:S())]}):T.push({op:"move",data:[r+(U?0:Nn(g,o,p)),e+(U?0:Nn(g,o,p))]}),u?T.push({op:"bcurveTo",data:[y+r+(n-r)*x+S(),M+e+(a-e)*x+S(),y+r+2*(n-r)*x+S(),M+e+2*(a-e)*x+S(),n+(U?0:S()),a+(U?0:S())]}):T.push({op:"bcurveTo",data:[y+r+(n-r)*x+b(),M+e+(a-e)*x+b(),y+r+2*(n-r)*x+b(),M+e+2*(a-e)*x+b(),n+(U?0:b()),a+(U?0:b())]}),T}function Hx(r,e,n){const a=r.length,o=[];if(a>3){const c=[],u=1-n.curveTightness;o.push({op:"move",data:[r[1][0],r[1][1]]});for(let d=1;d+2<a;d++){const m=r[d];c[0]=[m[0],m[1]],c[1]=[m[0]+(u*r[d+1][0]-u*r[d-1][0])/6,m[1]+(u*r[d+1][1]-u*r[d-1][1])/6],c[2]=[r[d+1][0]+(u*r[d][0]-u*r[d+2][0])/6,r[d+1][1]+(u*r[d][1]-u*r[d+2][1])/6],c[3]=[r[d+1][0],r[d+1][1]],o.push({op:"bcurveTo",data:[c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]]})}}else a===3?(o.push({op:"move",data:[r[1][0],r[1][1]]}),o.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[2][0],r[2][1]]})):a===2&&o.push(...bp(r[0][0],r[0][1],r[1][0],r[1][1],n,!0,!0));return o}function Gx(r,e,n,a,o,c,u,d){const m=d.roughness===0,p=[],g=[];if(m){r=r/4,g.push([e+a*Math.cos(-r),n+o*Math.sin(-r)]);for(let _=0;_<=Math.PI*2;_=_+r){const x=[e+a*Math.cos(_),n+o*Math.sin(_)];p.push(x),g.push(x)}g.push([e+a*Math.cos(0),n+o*Math.sin(0)]),g.push([e+a*Math.cos(r),n+o*Math.sin(r)])}else{const _=Nn(.5,d)-Math.PI/2;g.push([Nn(c,d)+e+.9*a*Math.cos(_-r),Nn(c,d)+n+.9*o*Math.sin(_-r)]);const x=Math.PI*2+_-.01;for(let y=_;y<x;y=y+r){const M=[Nn(c,d)+e+a*Math.cos(y),Nn(c,d)+n+o*Math.sin(y)];p.push(M),g.push(M)}g.push([Nn(c,d)+e+a*Math.cos(_+Math.PI*2+u*.5),Nn(c,d)+n+o*Math.sin(_+Math.PI*2+u*.5)]),g.push([Nn(c,d)+e+.98*a*Math.cos(_+u),Nn(c,d)+n+.98*o*Math.sin(_+u)]),g.push([Nn(c,d)+e+.9*a*Math.cos(_+u*.5),Nn(c,d)+n+.9*o*Math.sin(_+u*.5)])}return[g,p]}const N1={randOffset(r,e){return r},randOffsetWithRange(r,e,n){return(r+e)/2},ellipse(r,e,n,a,o){return db(r,e,n,a,o)},doubleLineOps(r,e,n,a,o){return L1(r,e,n,a,o)}};function Mo(r){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:r}}function P1(r,e){let n="";for(const a of r.ops){const o=a.data;switch(a.op){case"move":if(e&&n)break;n+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":n+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":n+=`L${o[0]} ${o[1]} `;break}}return n.trim()}function po(r,e){const n=document.createElementNS("http://www.w3.org/2000/svg",r);if(e)for(const a in e)n.setAttributeNS(null,a,e[a]);return n}function Yl(r,e,n=!1){const a=po("path",{d:P1(r,n)});return e&&e.appendChild(a),a}function _i(r,e,n,a,o,c){return Yl(O1(e+2,n+2,a-4,o-4,Mo(c)),r)}function Mn(r,e,n,a,o,c){return Yl(ub(e,n,a,o,Mo(c)),r)}function z1(r,e,n){return Yl(fb(e,Mo(n)),r,!0)}function lr(r,e,n,a,o,c){return a=Math.max(a>10?a-4:a-1,1),o=Math.max(o>10?o-4:o-1,1),Yl(db(e,n,a,o,Mo(c)),r)}function af(r,e){const a=new w1(N1).fillPolygon(r,Mo(e));return Yl(a,null)}function x0(r,e,n,a,o){const c=Mo(o),u=hb(n,a,c),d=[];let m=0;for(;m<=Math.PI*2;)d.push([r+u.rx*Math.cos(m),e+u.ry*Math.sin(m)]),m+=u.increment;return af(d,o)}var sf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},rf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Pl=class extends Tn{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};_i(e,0,0,o.width,o.height,this.seed);for(let c=1;c<a;c++)Mn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Mn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Mn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Mn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};sf([Ce({type:Number}),rf("design:type",Object)],Pl.prototype,"elevation",void 0);sf([Ce({type:Boolean,reflect:!0}),rf("design:type",Object)],Pl.prototype,"disabled",void 0);sf([Fn("button"),rf("design:type",HTMLButtonElement)],Pl.prototype,"button",void 0);Pl=sf([dn("wired-button"),rf("design:paramtypes",[])],Pl);var v0=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},b0=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let zl=class extends Tn{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const n=e.has("fill");this.wiredRender(n),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};if(this.fill&&this.fill.trim()){const c=af([[2,2],[o.width-4,2],[o.width-2,o.height-4],[2,o.height-4]],this.seed);c.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(c)}_i(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Mn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Mn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Mn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Mn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};v0([Ce({type:Number}),b0("design:type",Object)],zl.prototype,"elevation",void 0);v0([Ce({type:String}),b0("design:type",String)],zl.prototype,"fill",void 0);zl=v0([dn("wired-card"),b0("design:paramtypes",[])],zl);var $l=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},of=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let mo=class extends Tn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[En,un`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return cn`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){_i(e,0,0,n[0],n[1],this.seed),this.svgCheck=po("g"),e.appendChild(this.svgCheck),Mn(this.svgCheck,n[0]*.3,n[1]*.4,n[0]*.5,n[1]*.7,this.seed),Mn(this.svgCheck,n[0]*.5,n[1]*.7,n[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};$l([Ce({type:Boolean}),of("design:type",Object)],mo.prototype,"checked",void 0);$l([Ce({type:Boolean,reflect:!0}),of("design:type",Object)],mo.prototype,"disabled",void 0);$l([_1(),of("design:type",Object)],mo.prototype,"focused",void 0);$l([Fn("input"),of("design:type",HTMLInputElement)],mo.prototype,"input",void 0);mo=$l([dn("wired-checkbox")],mo);var lf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y0=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Il=class extends Tn{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){const a=af([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],this.seed);e.appendChild(a)}};lf([Ce(),y0("design:type",Object)],Il.prototype,"value",void 0);lf([Ce(),y0("design:type",Object)],Il.prototype,"name",void 0);lf([Ce({type:Boolean}),y0("design:type",Object)],Il.prototype,"selected",void 0);Il=lf([dn("wired-item")],Il);var Eo=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Zl=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let cr=class extends Fa{constructor(){super(...arguments),this.disabled=!1,this.seed=y1(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return un`
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
    `}render(){return cn`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const n=this.svg;for(;n.hasChildNodes();)n.removeChild(n.lastChild);const a=this.shadowRoot.getElementById("container").getBoundingClientRect();n.setAttribute("width",`${a.width}`),n.setAttribute("height",`${a.height}`);const o=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=o.height+"px",_i(n,0,0,o.width,o.height,this.seed);const c=o.width-4;_i(n,c,0,34,o.height,this.seed);const u=Math.max(0,Math.abs((o.height-24)/2)),d=z1(n,[[c+8,5+u],[c+26,5+u],[c+17,u+Math.min(o.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const m=this.shadowRoot.getElementById("slot").assignedNodes();if(m&&m.length)for(let p=0;p<m.length;p++){const g=m[p];g.tagName==="WIRED-ITEM"&&(g.setAttribute("role","option"),this.itemNodes.push(g))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||c.getAttribute("value")||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(a=>a.nodeType===Node.ELEMENT_NODE).forEach(a=>{const o=a;o.requestUpdate&&o.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){_0(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Eo([Ce({type:Object}),Zl("design:type",Object)],cr.prototype,"value",void 0);Eo([Ce({type:String,reflect:!0}),Zl("design:type",String)],cr.prototype,"selected",void 0);Eo([Ce({type:Boolean,reflect:!0}),Zl("design:type",Object)],cr.prototype,"disabled",void 0);Eo([Fn("svg"),Zl("design:type",SVGSVGElement)],cr.prototype,"svg",void 0);Eo([Fn("#card"),Zl("design:type",HTMLDivElement)],cr.prototype,"card",void 0);cr=Eo([dn("wired-combo")],cr);var cf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},S0=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Fl=class extends Fa{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return un`
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
    `}render(){return cn`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};cf([Ce({type:Number}),S0("design:type",Object)],Fl.prototype,"elevation",void 0);cf([Ce({type:Boolean,reflect:!0}),S0("design:type",Object)],Fl.prototype,"open",void 0);cf([Fn("wired-card"),S0("design:type",zl)],Fl.prototype,"card",void 0);Fl=cf([dn("wired-dialog")],Fl);var mb=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},I1=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let yp=class extends Tn{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[En,un`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return cn`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5);return[e.width,n*6]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5);for(let o=0;o<a;o++)Mn(e,0,o*6+3,n[0],o*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};mb([Ce({type:Number}),I1("design:type",Object)],yp.prototype,"elevation",void 0);yp=mb([dn("wired-divider")],yp);var M0=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},gb=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Wu=class extends Tn{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]),o=x0(a/2,a/2,a,a,this.seed);e.appendChild(o)}};M0([Ce({type:Boolean,reflect:!0}),gb("design:type",Object)],Wu.prototype,"disabled",void 0);M0([Fn("button"),gb("design:type",HTMLButtonElement)],Wu.prototype,"button",void 0);Wu=M0([dn("wired-fab")],Wu);var E0=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_b=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let qu=class extends Tn{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]);e.setAttribute("width",`${a}`),e.setAttribute("height",`${a}`),lr(e,a/2,a/2,a,a,this.seed)}};E0([Ce({type:Boolean,reflect:!0}),_b("design:type",Object)],qu.prototype,"disabled",void 0);E0([Fn("button"),_b("design:type",HTMLButtonElement)],qu.prototype,"button",void 0);qu=E0([dn("wired-icon-button")],qu);var T0=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},A0=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const F1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Yu=class extends Tn{constructor(){super(),this.elevation=1,this.src=F1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};_i(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Mn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Mn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Mn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Mn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};T0([Ce({type:Number}),A0("design:type",Object)],Yu.prototype,"elevation",void 0);T0([Ce({type:String}),A0("design:type",String)],Yu.prototype,"src",void 0);Yu=T0([dn("wired-image"),A0("design:paramtypes",[])],Yu);var Wn=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},qn=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Pn=class extends Tn{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-2,n[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};Wn([Ce({type:Boolean,reflect:!0}),qn("design:type",Object)],Pn.prototype,"disabled",void 0);Wn([Ce({type:String}),qn("design:type",Object)],Pn.prototype,"placeholder",void 0);Wn([Ce({type:String}),qn("design:type",String)],Pn.prototype,"name",void 0);Wn([Ce({type:String}),qn("design:type",String)],Pn.prototype,"min",void 0);Wn([Ce({type:String}),qn("design:type",String)],Pn.prototype,"max",void 0);Wn([Ce({type:String}),qn("design:type",String)],Pn.prototype,"step",void 0);Wn([Ce({type:String}),qn("design:type",Object)],Pn.prototype,"type",void 0);Wn([Ce({type:String}),qn("design:type",Object)],Pn.prototype,"autocomplete",void 0);Wn([Ce({type:String}),qn("design:type",Object)],Pn.prototype,"autocapitalize",void 0);Wn([Ce({type:String}),qn("design:type",Object)],Pn.prototype,"autocorrect",void 0);Wn([Ce({type:Boolean}),qn("design:type",Object)],Pn.prototype,"required",void 0);Wn([Ce({type:Boolean}),qn("design:type",Object)],Pn.prototype,"autofocus",void 0);Wn([Ce({type:Boolean}),qn("design:type",Object)],Pn.prototype,"readonly",void 0);Wn([Ce({type:Number}),qn("design:type",Number)],Pn.prototype,"minlength",void 0);Wn([Ce({type:Number}),qn("design:type",Number)],Pn.prototype,"maxlength",void 0);Wn([Ce({type:Number}),qn("design:type",Number)],Pn.prototype,"size",void 0);Wn([Fn("input"),qn("design:type",HTMLInputElement)],Pn.prototype,"textInput",void 0);Pn=Wn([dn("wired-input"),qn("design:paramtypes",[])],Pn);var Kl=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},uf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let go=class extends Tn{constructor(){super(...arguments),this.elevation=1}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0],height:n[1]-(a-1)*2};for(let c=0;c<a;c++)Mn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed),Mn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed)}};Kl([Ce({type:Number}),uf("design:type",Object)],go.prototype,"elevation",void 0);Kl([Ce({type:String}),uf("design:type",String)],go.prototype,"href",void 0);Kl([Ce({type:String}),uf("design:type",String)],go.prototype,"target",void 0);Kl([Fn("a"),uf("design:type",HTMLAnchorElement)],go.prototype,"anchor",void 0);go=Kl([dn("wired-link")],go);var ff=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R0=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Bl=class extends Tn{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let n=0;n<e.length;n++){const a=e[n];a.tagName==="WIRED-ITEM"&&(a.setAttribute("role","option"),this.itemNodes.push(a))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,0,0,n[0],n[1],this.seed)}};ff([Ce({type:Object}),R0("design:type",Object)],Bl.prototype,"value",void 0);ff([Ce({type:String}),R0("design:type",String)],Bl.prototype,"selected",void 0);ff([Ce({type:Boolean}),R0("design:type",Object)],Bl.prototype,"horizontal",void 0);Bl=ff([dn("wired-listbox")],Bl);var Ql=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},df=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ur=class extends Tn{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-2,n[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const n=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const a=n.width*Math.max(0,Math.min(e,100));this.progBox=af([[0,0],[a,0],[a,n.height],[0,n.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Ql([Ce({type:Number}),df("design:type",Object)],ur.prototype,"value",void 0);Ql([Ce({type:Number}),df("design:type",Object)],ur.prototype,"min",void 0);Ql([Ce({type:Number}),df("design:type",Object)],ur.prototype,"max",void 0);Ql([Ce({type:Boolean}),df("design:type",Object)],ur.prototype,"percentage",void 0);ur=Ql([dn("wired-progress")],ur);var To=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Jl=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let fr=class extends Tn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[En,un`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return cn`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){lr(e,n[0]/2,n[1]/2,n[0],n[1],this.seed),this.svgCheck=po("g"),e.appendChild(this.svgCheck);const a=Math.max(n[0]*.6,5),o=Math.max(n[1]*.6,5);lr(this.svgCheck,n[0]/2,n[1]/2,a,o,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};To([Ce({type:Boolean}),Jl("design:type",Object)],fr.prototype,"checked",void 0);To([Ce({type:Boolean,reflect:!0}),Jl("design:type",Object)],fr.prototype,"disabled",void 0);To([Ce({type:String}),Jl("design:type",String)],fr.prototype,"name",void 0);To([Ce(),Jl("design:type",Object)],fr.prototype,"focused",void 0);To([Fn("input"),Jl("design:type",HTMLInputElement)],fr.prototype,"input",void 0);fr=To([dn("wired-radio")],fr);var xb=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},B1=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Sp=class extends Fa{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return un`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return cn`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const n=e.detail.checked,a=e.target,o=a.name||"";n?(this.selected=n&&o||"",this.fireSelected()):a.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const n=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],n&&n.length)for(let a=0;a<n.length;a++){const o=n[a];if(o.tagName==="WIRED-RADIO"){this.radioNodes.push(o);const c=o.name||"";this.selected&&c===this.selected?o.checked=!0:o.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a--,a<0&&(a=e.length-1),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a++,a>=e.length&&(a=0),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}fireSelected(){_0(this,"selected",{selected:this.selected})}};xb([Ce({type:String}),B1("design:type",String)],Sp.prototype,"selected",void 0);Sp=xb([dn("wired-radio-group")],Sp);var pr=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ao=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Rs=class extends Tn{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;n&&(n.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-2,n[1]-2,this.seed),this.searchIcon=po("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),lr(this.searchIcon,n[0]-30,(n[1]-30)/2+10,20,20,this.seed),Mn(this.searchIcon,n[0]-10,(n[1]-30)/2+30,n[0]-25,(n[1]-30)/2+15,this.seed),this.closeIcon=po("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),Mn(this.closeIcon,n[0]-33,(n[1]-30)/2+2,n[0]-7,(n[1]-30)/2+28,this.seed),Mn(this.closeIcon,n[0]-7,(n[1]-30)/2+2,n[0]-33,(n[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};pr([Ce({type:Boolean,reflect:!0}),Ao("design:type",Object)],Rs.prototype,"disabled",void 0);pr([Ce({type:String}),Ao("design:type",Object)],Rs.prototype,"placeholder",void 0);pr([Ce({type:String}),Ao("design:type",Object)],Rs.prototype,"autocomplete",void 0);pr([Ce({type:String}),Ao("design:type",Object)],Rs.prototype,"autocorrect",void 0);pr([Ce({type:Boolean}),Ao("design:type",Object)],Rs.prototype,"autofocus",void 0);pr([Fn("input"),Ao("design:type",HTMLInputElement)],Rs.prototype,"textInput",void 0);Rs=pr([dn("wired-search-input")],Rs);var Ro=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ec=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ws=class extends Tn{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[En,un`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return cn`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){this.canvasWidth=n[0];const a=Math.round(n[1]/2);Mn(e,0,a,n[0],a,this.seed).classList.add("bar"),this.knob=lr(e,10,a,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,n=Math.max(this.step,this.max-this.min),a=(e-this.min)/n;this.knob&&(this.knob.style.transform=`translateX(${a*(this.canvasWidth-20)}px)`)}}};Ro([Ce({type:Number}),ec("design:type",Object)],ws.prototype,"min",void 0);Ro([Ce({type:Number}),ec("design:type",Object)],ws.prototype,"max",void 0);Ro([Ce({type:Number}),ec("design:type",Object)],ws.prototype,"step",void 0);Ro([Ce({type:Boolean,reflect:!0}),ec("design:type",Object)],ws.prototype,"disabled",void 0);Ro([Fn("input"),ec("design:type",HTMLInputElement)],ws.prototype,"input",void 0);ws=Ro([dn("wired-slider")],ws);var w0=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},vb=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let $u=class extends Tn{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[En,un`
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
      `]}render(){return cn`<svg></svg>`}canvasSize(){return[76,76]}draw(e,n){lr(e,n[0]/2,n[1]/2,Math.floor(n[0]*.8),Math.floor(.8*n[1]),this.seed),this.knob=x0(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};w0([Ce({type:Boolean}),vb("design:type",Object)],$u.prototype,"spinning",void 0);w0([Ce({type:Number}),vb("design:type",Object)],$u.prototype,"duration",void 0);$u=w0([dn("wired-spinner")],$u);var C0=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},D0=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Zu=class extends Tn{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[En,un`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return cn`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-4,n[1]-4,this.seed)}};C0([Ce({type:String}),D0("design:type",Object)],Zu.prototype,"name",void 0);C0([Ce({type:String}),D0("design:type",Object)],Zu.prototype,"label",void 0);Zu=C0([dn("wired-tab"),D0("design:paramtypes",[])],Zu);var O0=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},bb=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ku=class extends Fa{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <div id="bar">
      ${this.pages.map(e=>cn`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let n=0;n<e.length;n++){const a=e[n];if(a.nodeType===Node.ELEMENT_NODE&&a.tagName.toLowerCase()==="wired-tab"){const o=a;this.pages.push(o);const c=o.getAttribute("name")||"";c&&c.trim().split(" ").forEach(u=>{u&&this.pageMap.set(u,o)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let n=0;n<this.pages.length;n++){const a=this.pages[n];a===e?a.classList.remove("hidden"):a.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].name||""}}selectNext(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].name||""}}};O0([Ce({type:String}),bb("design:type",String)],Ku.prototype,"selected",void 0);O0([Fn("slot"),bb("design:type",HTMLSlotElement)],Ku.prototype,"slotElement",void 0);Ku=O0([dn("wired-tabs")],Ku);var Oi=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ji=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let xi=class extends Tn{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.textarea;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,4,4,n[0]-4,n[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Oi([Ce({type:Boolean,reflect:!0}),ji("design:type",Object)],xi.prototype,"disabled",void 0);Oi([Ce({type:Number}),ji("design:type",Object)],xi.prototype,"rows",void 0);Oi([Ce({type:Number}),ji("design:type",Object)],xi.prototype,"maxrows",void 0);Oi([Ce({type:String}),ji("design:type",Object)],xi.prototype,"autocomplete",void 0);Oi([Ce({type:Boolean}),ji("design:type",Object)],xi.prototype,"autofocus",void 0);Oi([Ce({type:String}),ji("design:type",Object)],xi.prototype,"inputmode",void 0);Oi([Ce({type:String}),ji("design:type",Object)],xi.prototype,"placeholder",void 0);Oi([Ce({type:Boolean}),ji("design:type",Object)],xi.prototype,"required",void 0);Oi([Ce({type:Boolean}),ji("design:type",Object)],xi.prototype,"readonly",void 0);Oi([Ce({type:Number}),ji("design:type",Number)],xi.prototype,"minlength",void 0);Oi([Ce({type:Number}),ji("design:type",Number)],xi.prototype,"maxlength",void 0);Oi([Fn("textarea"),ji("design:type",HTMLTextAreaElement)],xi.prototype,"textareaInput",void 0);xi=Oi([dn("wired-textarea")],xi);var hf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},U0=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Hl=class extends Tn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[En,un`
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
      `]}render(){return cn`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,n){_i(e,16,8,n[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=po("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const o=x0(16,16,32,32,this.seed);o.classList.add("knobfill"),this.knob.appendChild(o),lr(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};hf([Ce({type:Boolean}),U0("design:type",Object)],Hl.prototype,"checked",void 0);hf([Ce({type:Boolean,reflect:!0}),U0("design:type",Object)],Hl.prototype,"disabled",void 0);hf([Fn("input"),U0("design:type",HTMLInputElement)],Hl.prototype,"input",void 0);Hl=hf([dn("wired-toggle")],Hl);var Qi=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ji=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Vi=class extends Tn{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[En,un`
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
      `]}render(){return cn`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-4,n[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const n=Math.floor(e/60),a=Math.round(e-n*60);return`${n}:${a}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};Qi([Ce({type:String}),Ji("design:type",Object)],Vi.prototype,"src",void 0);Qi([Ce({type:Boolean}),Ji("design:type",Object)],Vi.prototype,"autoplay",void 0);Qi([Ce({type:Boolean}),Ji("design:type",Object)],Vi.prototype,"loop",void 0);Qi([Ce({type:Boolean}),Ji("design:type",Object)],Vi.prototype,"muted",void 0);Qi([Ce({type:Boolean}),Ji("design:type",Object)],Vi.prototype,"playsinline",void 0);Qi([Ce(),Ji("design:type",Object)],Vi.prototype,"playing",void 0);Qi([Ce(),Ji("design:type",Object)],Vi.prototype,"timeDisplay",void 0);Qi([Fn("wired-progress"),Ji("design:type",ur)],Vi.prototype,"progressBar",void 0);Qi([Fn("wired-slider"),Ji("design:type",ws)],Vi.prototype,"slider",void 0);Qi([Fn("video"),Ji("design:type",HTMLVideoElement)],Vi.prototype,"video",void 0);Vi=Qi([dn("wired-video"),Ji("design:paramtypes",[])],Vi);function yb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ch={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx;function H1(){if(Vx)return yl;Vx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return yl.Fragment=e,yl.jsx=n,yl.jsxs=n,yl}var jx;function G1(){return jx||(jx=1,Ch.exports=H1()),Ch.exports}var ue=G1(),Dh={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx;function V1(){if(kx)return dt;kx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function b(N,ie,be){this.props=N,this.context=ie,this.refs=S,this.updater=be||M}b.prototype.isReactComponent={},b.prototype.setState=function(N,ie){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ie,"setState")},b.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function U(){}U.prototype=b.prototype;function O(N,ie,be){this.props=N,this.context=ie,this.refs=S,this.updater=be||M}var z=O.prototype=new U;z.constructor=O,T(z,b.prototype),z.isPureReactComponent=!0;var j=Array.isArray;function L(){}var P={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function C(N,ie,be){var Te=be.ref;return{$$typeof:r,type:N,key:ie,ref:Te!==void 0?Te:null,props:be}}function w(N,ie){return C(N.type,ie,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function K(N){var ie={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(be){return ie[be]})}var le=/\/+/g;function _e(N,ie){return typeof N=="object"&&N!==null&&N.key!=null?K(""+N.key):ie.toString(36)}function fe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(L,L):(N.status="pending",N.then(function(ie){N.status==="pending"&&(N.status="fulfilled",N.value=ie)},function(ie){N.status==="pending"&&(N.status="rejected",N.reason=ie)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function I(N,ie,be,Te,ze){var ne=typeof N;(ne==="undefined"||ne==="boolean")&&(N=null);var ce=!1;if(N===null)ce=!0;else switch(ne){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(N.$$typeof){case r:case e:ce=!0;break;case g:return ce=N._init,I(ce(N._payload),ie,be,Te,ze)}}if(ce)return ze=ze(N),ce=Te===""?"."+_e(N,0):Te,j(ze)?(be="",ce!=null&&(be=ce.replace(le,"$&/")+"/"),I(ze,ie,be,"",function(qe){return qe})):ze!=null&&(V(ze)&&(ze=w(ze,be+(ze.key==null||N&&N.key===ze.key?"":(""+ze.key).replace(le,"$&/")+"/")+ce)),ie.push(ze)),1;ce=0;var Oe=Te===""?".":Te+":";if(j(N))for(var Ve=0;Ve<N.length;Ve++)Te=N[Ve],ne=Oe+_e(Te,Ve),ce+=I(Te,ie,be,ne,ze);else if(Ve=y(N),typeof Ve=="function")for(N=Ve.call(N),Ve=0;!(Te=N.next()).done;)Te=Te.value,ne=Oe+_e(Te,Ve++),ce+=I(Te,ie,be,ne,ze);else if(ne==="object"){if(typeof N.then=="function")return I(fe(N),ie,be,Te,ze);throw ie=String(N),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ce}function q(N,ie,be){if(N==null)return N;var Te=[],ze=0;return I(N,Te,"","",function(ne){return ie.call(be,ne,ze++)}),Te}function W(N){if(N._status===-1){var ie=N._result;ie=ie(),ie.then(function(be){(N._status===0||N._status===-1)&&(N._status=1,N._result=be)},function(be){(N._status===0||N._status===-1)&&(N._status=2,N._result=be)}),N._status===-1&&(N._status=0,N._result=ie)}if(N._status===1)return N._result.default;throw N._result}var me=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ve={map:q,forEach:function(N,ie,be){q(N,function(){ie.apply(this,arguments)},be)},count:function(N){var ie=0;return q(N,function(){ie++}),ie},toArray:function(N){return q(N,function(ie){return ie})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return dt.Activity=_,dt.Children=ve,dt.Component=b,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=O,dt.StrictMode=a,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,dt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},dt.cache=function(N){return function(){return N.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(N,ie,be){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Te=T({},N.props),ze=N.key;if(ie!=null)for(ne in ie.key!==void 0&&(ze=""+ie.key),ie)!$.call(ie,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ie.ref===void 0||(Te[ne]=ie[ne]);var ne=arguments.length-2;if(ne===1)Te.children=be;else if(1<ne){for(var ce=Array(ne),Oe=0;Oe<ne;Oe++)ce[Oe]=arguments[Oe+2];Te.children=ce}return C(N.type,ze,Te)},dt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},dt.createElement=function(N,ie,be){var Te,ze={},ne=null;if(ie!=null)for(Te in ie.key!==void 0&&(ne=""+ie.key),ie)$.call(ie,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(ze[Te]=ie[Te]);var ce=arguments.length-2;if(ce===1)ze.children=be;else if(1<ce){for(var Oe=Array(ce),Ve=0;Ve<ce;Ve++)Oe[Ve]=arguments[Ve+2];ze.children=Oe}if(N&&N.defaultProps)for(Te in ce=N.defaultProps,ce)ze[Te]===void 0&&(ze[Te]=ce[Te]);return C(N,ne,ze)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(N){return{$$typeof:d,render:N}},dt.isValidElement=V,dt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:W}},dt.memo=function(N,ie){return{$$typeof:p,type:N,compare:ie===void 0?null:ie}},dt.startTransition=function(N){var ie=P.T,be={};P.T=be;try{var Te=N(),ze=P.S;ze!==null&&ze(be,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(L,me)}catch(ne){me(ne)}finally{ie!==null&&be.types!==null&&(ie.types=be.types),P.T=ie}},dt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},dt.use=function(N){return P.H.use(N)},dt.useActionState=function(N,ie,be){return P.H.useActionState(N,ie,be)},dt.useCallback=function(N,ie){return P.H.useCallback(N,ie)},dt.useContext=function(N){return P.H.useContext(N)},dt.useDebugValue=function(){},dt.useDeferredValue=function(N,ie){return P.H.useDeferredValue(N,ie)},dt.useEffect=function(N,ie){return P.H.useEffect(N,ie)},dt.useEffectEvent=function(N){return P.H.useEffectEvent(N)},dt.useId=function(){return P.H.useId()},dt.useImperativeHandle=function(N,ie,be){return P.H.useImperativeHandle(N,ie,be)},dt.useInsertionEffect=function(N,ie){return P.H.useInsertionEffect(N,ie)},dt.useLayoutEffect=function(N,ie){return P.H.useLayoutEffect(N,ie)},dt.useMemo=function(N,ie){return P.H.useMemo(N,ie)},dt.useOptimistic=function(N,ie){return P.H.useOptimistic(N,ie)},dt.useReducer=function(N,ie,be){return P.H.useReducer(N,ie,be)},dt.useRef=function(N){return P.H.useRef(N)},dt.useState=function(N){return P.H.useState(N)},dt.useSyncExternalStore=function(N,ie,be){return P.H.useSyncExternalStore(N,ie,be)},dt.useTransition=function(){return P.H.useTransition()},dt.version="19.2.1",dt}var Xx;function L0(){return Xx||(Xx=1,Dh.exports=V1()),Dh.exports}var ut=L0();const j1=yb(ut);var Oh={exports:{}},Sl={},Uh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx;function k1(){return Wx||(Wx=1,(function(r){function e(I,q){var W=I.length;I.push(q);e:for(;0<W;){var me=W-1>>>1,ve=I[me];if(0<o(ve,q))I[me]=q,I[W]=ve,W=me;else break e}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var q=I[0],W=I.pop();if(W!==q){I[0]=W;e:for(var me=0,ve=I.length,N=ve>>>1;me<N;){var ie=2*(me+1)-1,be=I[ie],Te=ie+1,ze=I[Te];if(0>o(be,W))Te<ve&&0>o(ze,be)?(I[me]=ze,I[Te]=W,me=Te):(I[me]=be,I[ie]=W,me=ie);else if(Te<ve&&0>o(ze,W))I[me]=ze,I[Te]=W,me=Te;else break e}}return q}function o(I,q){var W=I.sortIndex-q.sortIndex;return W!==0?W:I.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,M=!1,T=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function z(I){for(var q=n(p);q!==null;){if(q.callback===null)a(p);else if(q.startTime<=I)a(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=n(p)}}function j(I){if(T=!1,z(I),!M)if(n(m)!==null)M=!0,L||(L=!0,K());else{var q=n(p);q!==null&&fe(j,q.startTime-I)}}var L=!1,P=-1,$=5,C=-1;function w(){return S?!0:!(r.unstable_now()-C<$)}function V(){if(S=!1,L){var I=r.unstable_now();C=I;var q=!0;try{e:{M=!1,T&&(T=!1,U(P),P=-1),y=!0;var W=x;try{t:{for(z(I),_=n(m);_!==null&&!(_.expirationTime>I&&w());){var me=_.callback;if(typeof me=="function"){_.callback=null,x=_.priorityLevel;var ve=me(_.expirationTime<=I);if(I=r.unstable_now(),typeof ve=="function"){_.callback=ve,z(I),q=!0;break t}_===n(m)&&a(m),z(I)}else a(m);_=n(m)}if(_!==null)q=!0;else{var N=n(p);N!==null&&fe(j,N.startTime-I),q=!1}}break e}finally{_=null,x=W,y=!1}q=void 0}}finally{q?K():L=!1}}}var K;if(typeof O=="function")K=function(){O(V)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,_e=le.port2;le.port1.onmessage=V,K=function(){_e.postMessage(null)}}else K=function(){b(V,0)};function fe(I,q){P=b(function(){I(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(I){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var W=x;x=q;try{return I()}finally{x=W}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=x;x=I;try{return q()}finally{x=W}},r.unstable_scheduleCallback=function(I,q,W){var me=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?me+W:me):W=me,I){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=W+ve,I={id:g++,callback:q,priorityLevel:I,startTime:W,expirationTime:ve,sortIndex:-1},W>me?(I.sortIndex=W,e(p,I),n(m)===null&&I===n(p)&&(T?(U(P),P=-1):T=!0,fe(j,W-me))):(I.sortIndex=ve,e(m,I),M||y||(M=!0,L||(L=!0,K()))),I},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(I){var q=x;return function(){var W=x;x=q;try{return I.apply(this,arguments)}finally{x=W}}}})(Lh)),Lh}var qx;function X1(){return qx||(qx=1,Uh.exports=k1()),Uh.exports}var Nh={exports:{}},ei={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx;function W1(){if(Yx)return ei;Yx=1;var r=L0();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ei.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ei.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},ei.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},ei.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},ei.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},ei.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ei.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},ei.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ei.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},ei.requestFormReset=function(m){a.d.r(m)},ei.unstable_batchedUpdates=function(m,p){return m(p)},ei.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},ei.useFormStatus=function(){return u.H.useHostTransitionStatus()},ei.version="19.2.1",ei}var $x;function q1(){if($x)return Nh.exports;$x=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nh.exports=W1(),Nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx;function Y1(){if(Zx)return Sl;Zx=1;var r=X1(),e=L0(),n=q1();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var v=!1,A=f.child;A;){if(A===s){v=!0,s=f,l=h;break}if(A===l){v=!0,l=f,s=h;break}A=A.sibling}if(!v){for(A=h.child;A;){if(A===s){v=!0,s=h,l=f;break}if(A===l){v=!0,l=h,s=f;break}A=A.sibling}if(!v)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),O=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case b:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case L:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case O:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case $:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}var fe=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},me=[],ve=-1;function N(t){return{current:t}}function ie(t){0>ve||(t.current=me[ve],me[ve]=null,ve--)}function be(t,i){ve++,me[ve]=t.current,t.current=i}var Te=N(null),ze=N(null),ne=N(null),ce=N(null);function Oe(t,i){switch(be(ne,i),be(ze,t),be(Te,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?K_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=K_(i),t=Q_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Te),be(Te,t)}function Ve(){ie(Te),ie(ze),ie(ne)}function qe(t){t.memoizedState!==null&&be(ce,t);var i=Te.current,s=Q_(i,t.type);i!==s&&(be(ze,t),be(Te,s))}function pt(t){ze.current===t&&(ie(Te),ie(ze)),ce.current===t&&(ie(ce),gl._currentValue=W)}var hn,mt;function wt(t){if(hn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);hn=i&&i[1]||"",mt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hn+t+mt}var B=!1;function ft(t,i){if(!t||B)return"";B=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(re){var te=re}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(re){te=re}t.call(xe.prototype)}}else{try{throw Error()}catch(re){te=re}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(re){if(re&&te&&typeof re.stack=="string")return[re.stack,te.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),v=h[0],A=h[1];if(v&&A){var F=v.split(`
`),J=A.split(`
`);for(f=l=0;l<F.length&&!F[l].includes("DetermineComponentFrameRoot");)l++;for(;f<J.length&&!J[f].includes("DetermineComponentFrameRoot");)f++;if(l===F.length||f===J.length)for(l=F.length-1,f=J.length-1;1<=l&&0<=f&&F[l]!==J[f];)f--;for(;1<=l&&0<=f;l--,f--)if(F[l]!==J[f]){if(l!==1||f!==1)do if(l--,f--,0>f||F[l]!==J[f]){var de=`
`+F[l].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=l&&0<=f);break}}}finally{B=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?wt(s):""}function Fe(t,i){switch(t.tag){case 26:case 27:case 5:return wt(t.type);case 16:return wt("Lazy");case 13:return t.child!==i&&i!==null?wt("Suspense Fallback"):wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return wt("Activity");default:return""}}function Qe(t){try{var i="",s=null;do i+=Fe(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ne=Object.prototype.hasOwnProperty,Ct=r.unstable_scheduleCallback,We=r.unstable_cancelCallback,nt=r.unstable_shouldYield,D=r.unstable_requestPaint,E=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,he=r.unstable_ImmediatePriority,ye=r.unstable_UserBlockingPriority,oe=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,Ue=r.unstable_IdlePriority,Je=r.log,Ye=r.unstable_setDisableYieldValue,Se=null,Ee=null;function Ze(t){if(typeof Je=="function"&&Ye(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(Se,t)}catch{}}var je=Math.clz32?Math.clz32:H,Ie=Math.log,rt=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Ie(t)/rt|0)|0}var De=256,Ae=262144,Re=4194304;function Me(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~h,l!==0?f=Me(l):(v&=A,v!==0?f=Me(v):s||(s=A&~t,s!==0&&(f=Me(s))))):(A=l&~h,A!==0?f=Me(A):v!==0?f=Me(v):s||(s=l&~t,s!==0&&(f=Me(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Be(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function lt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=Re;return Re<<=1,(Re&62914560)===0&&(Re=4194304),t}function ke(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function gt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Pt(t,i,s,l,f,h){var v=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,F=t.expirationTimes,J=t.hiddenUpdates;for(s=v&~s;0<s;){var de=31-je(s),xe=1<<de;A[de]=0,F[de]=-1;var te=J[de];if(te!==null)for(J[de]=null,de=0;de<te.length;de++){var re=te[de];re!==null&&(re.lane&=-536870913)}s&=~xe}l!==0&&An(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(v&~i))}function An(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-je(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function pn(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-je(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function an(t,i){var s=i&-i;return s=(s&42)!==0?1:Mt(s),(s&(t.suspendedLanes|i))!==0?0:s}function Mt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ct(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:yx(t.type))}function xt(t,i){var s=q.p;try{return q.p=t,i()}finally{q.p=s}}var Zt=Math.random().toString(36).slice(2),kt="__reactFiber$"+Zt,Xt="__reactProps$"+Zt,ii="__reactContainer$"+Zt,vi="__reactEvents$"+Zt,Ds="__reactListeners$"+Zt,Oo="__reactHandles$"+Zt,Os="__reactResources$"+Zt,ca="__reactMarker$"+Zt;function Uo(t){delete t[kt],delete t[Xt],delete t[vi],delete t[Ds],delete t[Oo]}function Xa(t){var i=t[kt];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ii]||s[kt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=sx(t);t!==null;){if(s=t[kt])return s;t=sx(t)}return i}t=s,s=t.parentNode}return null}function R(t){if(t=t[kt]||t[ii]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function k(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function ae(t){var i=t[Os];return i||(i=t[Os]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ee(t){t[ca]=!0}var Y=new Set,we={};function Le(t,i){He(t,i),He(t+"Capture",i)}function He(t,i){for(we[t]=i,t=0;t<i.length;t++)Y.add(i[t])}var Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},ot={};function et(t){return Ne.call(ot,t)?!0:Ne.call(at,t)?!1:Ge.test(t)?ot[t]=!0:(at[t]=!0,!1)}function vt(t,i,s){if(et(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Nt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function zt(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function Dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){s=""+v,h.call(this,v)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function tn(t){if(!t._valueTracker){var i=jt(t)?"checked":"value";t._valueTracker=it(t,i,""+t[i])}}function Ot(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=jt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wa=/[\n"\\]/g;function sn(t){return t.replace(Wa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ua(t,i,s,l,f,h,v,A){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Dt(i)):t.value!==""+Dt(i)&&(t.value=""+Dt(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?Hn(t,v,Dt(i)):s!=null?Hn(t,v,Dt(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Dt(A):t.removeAttribute("name")}function rn(t,i,s,l,f,h,v,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){tn(t);return}s=s!=null?""+Dt(s):"",i=i!=null?""+Dt(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),tn(t)}function Hn(t,i,s){i==="number"&&Bn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Un(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Dt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Gn(t,i,s){if(i!=null&&(i=""+Dt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Dt(s):""}function Yn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(fe(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Dt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),tn(t)}function ta(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var fa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Y0(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||fa.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function $0(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Y0(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&Y0(t,h,i[h])}function xf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rc(t){return Qb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function da(){}var vf=null;function bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mr=null,gr=null;function Z0(t){var i=R(t);if(i&&(t=i.stateNode)){var s=t[Xt]||null;e:switch(t=i.stateNode,i.type){case"input":if(ua(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+sn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Xt]||null;if(!f)throw Error(a(90));ua(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Ot(l)}break e;case"textarea":Gn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Un(t,!!s.multiple,i,!1)}}}var yf=!1;function K0(t,i,s){if(yf)return t(i,s);yf=!0;try{var l=t(i);return l}finally{if(yf=!1,(mr!==null||gr!==null)&&(qc(),mr&&(i=mr,t=gr,gr=mr=null,Z0(i),t)))for(i=0;i<t.length;i++)Z0(t[i])}}function Lo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Xt]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(ha)try{var No={};Object.defineProperty(No,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Sf=!1}var qa=null,Mf=null,oc=null;function Q0(){if(oc)return oc;var t,i=Mf,s=i.length,l,f="value"in qa?qa.value:qa.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var v=s-t;for(l=1;l<=v&&i[s-l]===f[h-l];l++);return oc=f.slice(t,1<l?1-l:void 0)}function lc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function J0(){return!1}function li(t){function i(s,l,f,h,v){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cc:J0,this.isPropagationStopped=J0,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),i}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=li(Us),Po=_({},Us,{view:0,detail:0}),Jb=li(Po),Ef,Tf,zo,fc=_({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Ef=t.screenX-zo.screenX,Tf=t.screenY-zo.screenY):Tf=Ef=0,zo=t),Ef)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),em=li(fc),ey=_({},fc,{dataTransfer:0}),ty=li(ey),ny=_({},Po,{relatedTarget:0}),Af=li(ny),iy=_({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=li(iy),sy=_({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ry=li(sy),oy=_({},Us,{data:0}),tm=li(oy),ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=uy[t])?!!i[t]:!1}function Rf(){return fy}var dy=_({},Po,{key:function(t){if(t.key){var i=ly[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hy=li(dy),py=_({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=li(py),my=_({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),gy=li(my),_y=_({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),xy=li(_y),vy=_({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),by=li(vy),yy=_({},Us,{newState:0,oldState:0}),Sy=li(yy),My=[9,13,27,32],wf=ha&&"CompositionEvent"in window,Io=null;ha&&"documentMode"in document&&(Io=document.documentMode);var Ey=ha&&"TextEvent"in window&&!Io,im=ha&&(!wf||Io&&8<Io&&11>=Io),am=" ",sm=!1;function rm(t,i){switch(t){case"keyup":return My.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function Ty(t,i){switch(t){case"compositionend":return om(i);case"keypress":return i.which!==32?null:(sm=!0,am);case"textInput":return t=i.data,t===am&&sm?null:t;default:return null}}function Ay(t,i){if(_r)return t==="compositionend"||!wf&&rm(t,i)?(t=Q0(),oc=Mf=qa=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return im&&i.locale!=="ko"?null:i.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Ry[t.type]:i==="textarea"}function cm(t,i,s,l){mr?gr?gr.push(l):gr=[l]:mr=l,i=eu(i,"onChange"),0<i.length&&(s=new uc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Fo=null,Bo=null;function wy(t){X_(t,0)}function dc(t){var i=k(t);if(Ot(i))return t}function um(t,i){if(t==="change")return i}var fm=!1;if(ha){var Cf;if(ha){var Df="oninput"in document;if(!Df){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Df=typeof dm.oninput=="function"}Cf=Df}else Cf=!1;fm=Cf&&(!document.documentMode||9<document.documentMode)}function hm(){Fo&&(Fo.detachEvent("onpropertychange",pm),Bo=Fo=null)}function pm(t){if(t.propertyName==="value"&&dc(Bo)){var i=[];cm(i,Bo,t,bf(t)),K0(wy,i)}}function Cy(t,i,s){t==="focusin"?(hm(),Fo=i,Bo=s,Fo.attachEvent("onpropertychange",pm)):t==="focusout"&&hm()}function Dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Bo)}function Oy(t,i){if(t==="click")return dc(i)}function Uy(t,i){if(t==="input"||t==="change")return dc(i)}function Ly(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bi=typeof Object.is=="function"?Object.is:Ly;function Ho(t,i){if(bi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ne.call(i,f)||!bi(t[f],i[f]))return!1}return!0}function mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,i){var s=mm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=mm(s)}}function _m(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?_m(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Bn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Bn(t.document)}return i}function Of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Ny=ha&&"documentMode"in document&&11>=document.documentMode,xr=null,Uf=null,Go=null,Lf=!1;function vm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lf||xr==null||xr!==Bn(l)||(l=xr,"selectionStart"in l&&Of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=eu(Uf,"onSelect"),0<l.length&&(i=new uc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=xr)))}function Ls(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var vr={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionrun:Ls("Transition","TransitionRun"),transitionstart:Ls("Transition","TransitionStart"),transitioncancel:Ls("Transition","TransitionCancel"),transitionend:Ls("Transition","TransitionEnd")},Nf={},bm={};ha&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Ns(t){if(Nf[t])return Nf[t];if(!vr[t])return t;var i=vr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in bm)return Nf[t]=i[s];return t}var ym=Ns("animationend"),Sm=Ns("animationiteration"),Mm=Ns("animationstart"),Py=Ns("transitionrun"),zy=Ns("transitionstart"),Iy=Ns("transitioncancel"),Em=Ns("transitionend"),Tm=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function ki(t,i){Tm.set(t,i),Le(i,[t])}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ui=[],br=0,zf=0;function pc(){for(var t=br,i=zf=br=0;i<t;){var s=Ui[i];Ui[i++]=null;var l=Ui[i];Ui[i++]=null;var f=Ui[i];Ui[i++]=null;var h=Ui[i];if(Ui[i++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}h!==0&&Am(s,f,h)}}function mc(t,i,s,l){Ui[br++]=t,Ui[br++]=i,Ui[br++]=s,Ui[br++]=l,zf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function If(t,i,s,l){return mc(t,i,s,l),gc(t)}function Ps(t,i){return mc(t,null,null,i),gc(t)}function Am(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-je(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function gc(t){if(50<cl)throw cl=0,Wd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var yr={};function Fy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(t,i,s,l){return new Fy(t,i,s,l)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,i){var s=t.alternate;return s===null?(s=yi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Rm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function _c(t,i,s,l,f,h){var v=0;if(l=t,typeof t=="function")Ff(t)&&(v=1);else if(typeof t=="string")v=jS(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=yi(31,s,i,f),t.elementType=C,t.lanes=h,t;case T:return zs(s.children,f,h,i);case S:v=8,f|=24;break;case b:return t=yi(12,s,i,f|2),t.elementType=b,t.lanes=h,t;case j:return t=yi(13,s,i,f),t.elementType=j,t.lanes=h,t;case L:return t=yi(19,s,i,f),t.elementType=L,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:v=10;break e;case U:v=9;break e;case z:v=11;break e;case P:v=14;break e;case $:v=16,l=null;break e}v=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=yi(v,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function zs(t,i,s,l){return t=yi(7,t,l,i),t.lanes=s,t}function Bf(t,i,s){return t=yi(6,t,null,i),t.lanes=s,t}function wm(t){var i=yi(18,null,null,0);return i.stateNode=t,i}function Hf(t,i,s){return i=yi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Cm=new WeakMap;function Li(t,i){if(typeof t=="object"&&t!==null){var s=Cm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Qe(i)},Cm.set(t,i),i)}return{value:t,source:i,stack:Qe(i)}}var Sr=[],Mr=0,xc=null,Vo=0,Ni=[],Pi=0,Ya=null,na=1,ia="";function ma(t,i){Sr[Mr++]=Vo,Sr[Mr++]=xc,xc=t,Vo=i}function Dm(t,i,s){Ni[Pi++]=na,Ni[Pi++]=ia,Ni[Pi++]=Ya,Ya=t;var l=na;t=ia;var f=32-je(l)-1;l&=~(1<<f),s+=1;var h=32-je(i)+f;if(30<h){var v=f-f%5;h=(l&(1<<v)-1).toString(32),l>>=v,f-=v,na=1<<32-je(i)+f|s<<f|l,ia=h+t}else na=1<<h|s<<f|l,ia=t}function Gf(t){t.return!==null&&(ma(t,1),Dm(t,1,0))}function Vf(t){for(;t===xc;)xc=Sr[--Mr],Sr[Mr]=null,Vo=Sr[--Mr],Sr[Mr]=null;for(;t===Ya;)Ya=Ni[--Pi],Ni[Pi]=null,ia=Ni[--Pi],Ni[Pi]=null,na=Ni[--Pi],Ni[Pi]=null}function Om(t,i){Ni[Pi++]=na,Ni[Pi++]=ia,Ni[Pi++]=Ya,na=i.id,ia=i.overflow,Ya=t}var $n=null,on=null,Ut=!1,$a=null,zi=!1,jf=Error(a(519));function Za(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(Li(i,t)),jf}function Um(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[kt]=t,i[Xt]=l,s){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(s=0;s<fl.length;s++)Tt(fl[s],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":Tt("invalid",i),rn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Tt("invalid",i);break;case"textarea":Tt("invalid",i),Yn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||$_(i.textContent,s)?(l.popover!=null&&(Tt("beforetoggle",i),Tt("toggle",i)),l.onScroll!=null&&Tt("scroll",i),l.onScrollEnd!=null&&Tt("scrollend",i),l.onClick!=null&&(i.onclick=da),i=!0):i=!1,i||Za(t,!0)}function Lm(t){for($n=t.return;$n;)switch($n.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:$n=$n.return}}function Er(t){if(t!==$n)return!1;if(!Ut)return Lm(t),Ut=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||oh(t.type,t.memoizedProps)),s=!s),s&&on&&Za(t),Lm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));on=ax(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));on=ax(t)}else i===27?(i=on,us(t.type)?(t=dh,dh=null,on=t):on=i):on=$n?Fi(t.stateNode.nextSibling):null;return!0}function Is(){on=$n=null,Ut=!1}function kf(){var t=$a;return t!==null&&(di===null?di=t:di.push.apply(di,t),$a=null),t}function jo(t){$a===null?$a=[t]:$a.push(t)}var Xf=N(null),Fs=null,ga=null;function Ka(t,i,s){be(Xf,i._currentValue),i._currentValue=s}function _a(t){t._currentValue=Xf.current,ie(Xf)}function Wf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function qf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var v=f.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=f;for(var F=0;F<i.length;F++)if(A.context===i[F]){h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),Wf(h.return,s,t),l||(v=null);break e}h=A.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(a(341));v.lanes|=s,h=v.alternate,h!==null&&(h.lanes|=s),Wf(v,s,t),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===t){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Tr(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(a(387));if(v=v.memoizedProps,v!==null){var A=f.type;bi(f.pendingProps.value,v.value)||(t!==null?t.push(A):t=[A])}}else if(f===ce.current){if(v=f.alternate,v===null)throw Error(a(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}f=f.return}t!==null&&qf(i,t,s,l),i.flags|=262144}function vc(t){for(t=t.firstContext;t!==null;){if(!bi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bs(t){Fs=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zn(t){return Nm(Fs,t)}function bc(t,i){return Fs===null&&Bs(t),Nm(t,i)}function Nm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ga===null){if(t===null)throw Error(a(308));ga=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ga=ga.next=i;return s}var By=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Hy=r.unstable_scheduleCallback,Gy=r.unstable_NormalPriority,Rn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new By,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&Hy(Gy,function(){t.controller.abort()})}var Xo=null,$f=0,Ar=0,Rr=null;function Vy(t,i){if(Xo===null){var s=Xo=[];$f=0,Ar=Qd(),Rr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return $f++,i.then(Pm,Pm),i}function Pm(){if(--$f===0&&Xo!==null){Rr!==null&&(Rr.status="fulfilled");var t=Xo;Xo=null,Ar=0,Rr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function jy(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var zm=I.S;I.S=function(t,i){v_=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Vy(t,i),zm!==null&&zm(t,i)};var Hs=N(null);function Zf(){var t=Hs.current;return t!==null?t:nn.pooledCache}function yc(t,i){i===null?be(Hs,Hs.current):be(Hs,i.pool)}function Im(){var t=Zf();return t===null?null:{parent:Rn._currentValue,pool:t}}var wr=Error(a(460)),Kf=Error(a(474)),Sc=Error(a(542)),Mc={then:function(){}};function Fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(da,da),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gm(t),t;default:if(typeof i.status=="string")i.then(da,da);else{if(t=nn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gm(t),t}throw Vs=i,wr}}function Gs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Vs=s,wr):s}}var Vs=null;function Hm(){if(Vs===null)throw Error(a(459));var t=Vs;return Vs=null,t}function Gm(t){if(t===wr||t===Sc)throw Error(a(483))}var Cr=null,Wo=0;function Ec(t){var i=Wo;return Wo+=1,Cr===null&&(Cr=[]),Bm(Cr,t,i)}function qo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Tc(t,i){throw i.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Vm(t){function i(X,G){if(t){var Q=X.deletions;Q===null?(X.deletions=[G],X.flags|=16):Q.push(G)}}function s(X,G){if(!t)return null;for(;G!==null;)i(X,G),G=G.sibling;return null}function l(X){for(var G=new Map;X!==null;)X.key!==null?G.set(X.key,X):G.set(X.index,X),X=X.sibling;return G}function f(X,G){return X=pa(X,G),X.index=0,X.sibling=null,X}function h(X,G,Q){return X.index=Q,t?(Q=X.alternate,Q!==null?(Q=Q.index,Q<G?(X.flags|=67108866,G):Q):(X.flags|=67108866,G)):(X.flags|=1048576,G)}function v(X){return t&&X.alternate===null&&(X.flags|=67108866),X}function A(X,G,Q,pe){return G===null||G.tag!==6?(G=Bf(Q,X.mode,pe),G.return=X,G):(G=f(G,Q),G.return=X,G)}function F(X,G,Q,pe){var tt=Q.type;return tt===T?de(X,G,Q.props.children,pe,Q.key):G!==null&&(G.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===$&&Gs(tt)===G.type)?(G=f(G,Q.props),qo(G,Q),G.return=X,G):(G=_c(Q.type,Q.key,Q.props,null,X.mode,pe),qo(G,Q),G.return=X,G)}function J(X,G,Q,pe){return G===null||G.tag!==4||G.stateNode.containerInfo!==Q.containerInfo||G.stateNode.implementation!==Q.implementation?(G=Hf(Q,X.mode,pe),G.return=X,G):(G=f(G,Q.children||[]),G.return=X,G)}function de(X,G,Q,pe,tt){return G===null||G.tag!==7?(G=zs(Q,X.mode,pe,tt),G.return=X,G):(G=f(G,Q),G.return=X,G)}function xe(X,G,Q){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Bf(""+G,X.mode,Q),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return Q=_c(G.type,G.key,G.props,null,X.mode,Q),qo(Q,G),Q.return=X,Q;case M:return G=Hf(G,X.mode,Q),G.return=X,G;case $:return G=Gs(G),xe(X,G,Q)}if(fe(G)||K(G))return G=zs(G,X.mode,Q,null),G.return=X,G;if(typeof G.then=="function")return xe(X,Ec(G),Q);if(G.$$typeof===O)return xe(X,bc(X,G),Q);Tc(X,G)}return null}function te(X,G,Q,pe){var tt=G!==null?G.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return tt!==null?null:A(X,G,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===tt?F(X,G,Q,pe):null;case M:return Q.key===tt?J(X,G,Q,pe):null;case $:return Q=Gs(Q),te(X,G,Q,pe)}if(fe(Q)||K(Q))return tt!==null?null:de(X,G,Q,pe,null);if(typeof Q.then=="function")return te(X,G,Ec(Q),pe);if(Q.$$typeof===O)return te(X,G,bc(X,Q),pe);Tc(X,Q)}return null}function re(X,G,Q,pe,tt){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return X=X.get(Q)||null,A(G,X,""+pe,tt);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case y:return X=X.get(pe.key===null?Q:pe.key)||null,F(G,X,pe,tt);case M:return X=X.get(pe.key===null?Q:pe.key)||null,J(G,X,pe,tt);case $:return pe=Gs(pe),re(X,G,Q,pe,tt)}if(fe(pe)||K(pe))return X=X.get(Q)||null,de(G,X,pe,tt,null);if(typeof pe.then=="function")return re(X,G,Q,Ec(pe),tt);if(pe.$$typeof===O)return re(X,G,Q,bc(G,pe),tt);Tc(G,pe)}return null}function Xe(X,G,Q,pe){for(var tt=null,It=null,$e=G,bt=G=0,Rt=null;$e!==null&&bt<Q.length;bt++){$e.index>bt?(Rt=$e,$e=null):Rt=$e.sibling;var Ft=te(X,$e,Q[bt],pe);if(Ft===null){$e===null&&($e=Rt);break}t&&$e&&Ft.alternate===null&&i(X,$e),G=h(Ft,G,bt),It===null?tt=Ft:It.sibling=Ft,It=Ft,$e=Rt}if(bt===Q.length)return s(X,$e),Ut&&ma(X,bt),tt;if($e===null){for(;bt<Q.length;bt++)$e=xe(X,Q[bt],pe),$e!==null&&(G=h($e,G,bt),It===null?tt=$e:It.sibling=$e,It=$e);return Ut&&ma(X,bt),tt}for($e=l($e);bt<Q.length;bt++)Rt=re($e,X,bt,Q[bt],pe),Rt!==null&&(t&&Rt.alternate!==null&&$e.delete(Rt.key===null?bt:Rt.key),G=h(Rt,G,bt),It===null?tt=Rt:It.sibling=Rt,It=Rt);return t&&$e.forEach(function(ms){return i(X,ms)}),Ut&&ma(X,bt),tt}function st(X,G,Q,pe){if(Q==null)throw Error(a(151));for(var tt=null,It=null,$e=G,bt=G=0,Rt=null,Ft=Q.next();$e!==null&&!Ft.done;bt++,Ft=Q.next()){$e.index>bt?(Rt=$e,$e=null):Rt=$e.sibling;var ms=te(X,$e,Ft.value,pe);if(ms===null){$e===null&&($e=Rt);break}t&&$e&&ms.alternate===null&&i(X,$e),G=h(ms,G,bt),It===null?tt=ms:It.sibling=ms,It=ms,$e=Rt}if(Ft.done)return s(X,$e),Ut&&ma(X,bt),tt;if($e===null){for(;!Ft.done;bt++,Ft=Q.next())Ft=xe(X,Ft.value,pe),Ft!==null&&(G=h(Ft,G,bt),It===null?tt=Ft:It.sibling=Ft,It=Ft);return Ut&&ma(X,bt),tt}for($e=l($e);!Ft.done;bt++,Ft=Q.next())Ft=re($e,X,bt,Ft.value,pe),Ft!==null&&(t&&Ft.alternate!==null&&$e.delete(Ft.key===null?bt:Ft.key),G=h(Ft,G,bt),It===null?tt=Ft:It.sibling=Ft,It=Ft);return t&&$e.forEach(function(e1){return i(X,e1)}),Ut&&ma(X,bt),tt}function Jt(X,G,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===T&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:e:{for(var tt=Q.key;G!==null;){if(G.key===tt){if(tt=Q.type,tt===T){if(G.tag===7){s(X,G.sibling),pe=f(G,Q.props.children),pe.return=X,X=pe;break e}}else if(G.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===$&&Gs(tt)===G.type){s(X,G.sibling),pe=f(G,Q.props),qo(pe,Q),pe.return=X,X=pe;break e}s(X,G);break}else i(X,G);G=G.sibling}Q.type===T?(pe=zs(Q.props.children,X.mode,pe,Q.key),pe.return=X,X=pe):(pe=_c(Q.type,Q.key,Q.props,null,X.mode,pe),qo(pe,Q),pe.return=X,X=pe)}return v(X);case M:e:{for(tt=Q.key;G!==null;){if(G.key===tt)if(G.tag===4&&G.stateNode.containerInfo===Q.containerInfo&&G.stateNode.implementation===Q.implementation){s(X,G.sibling),pe=f(G,Q.children||[]),pe.return=X,X=pe;break e}else{s(X,G);break}else i(X,G);G=G.sibling}pe=Hf(Q,X.mode,pe),pe.return=X,X=pe}return v(X);case $:return Q=Gs(Q),Jt(X,G,Q,pe)}if(fe(Q))return Xe(X,G,Q,pe);if(K(Q)){if(tt=K(Q),typeof tt!="function")throw Error(a(150));return Q=tt.call(Q),st(X,G,Q,pe)}if(typeof Q.then=="function")return Jt(X,G,Ec(Q),pe);if(Q.$$typeof===O)return Jt(X,G,bc(X,Q),pe);Tc(X,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,G!==null&&G.tag===6?(s(X,G.sibling),pe=f(G,Q),pe.return=X,X=pe):(s(X,G),pe=Bf(Q,X.mode,pe),pe.return=X,X=pe),v(X)):s(X,G)}return function(X,G,Q,pe){try{Wo=0;var tt=Jt(X,G,Q,pe);return Cr=null,tt}catch($e){if($e===wr||$e===Sc)throw $e;var It=yi(29,$e,null,X.mode);return It.lanes=pe,It.return=X,It}finally{}}}var js=Vm(!0),jm=Vm(!1),Qa=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function es(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=gc(t),Am(t,null,s),i}return mc(t,l,i,s),gc(t)}function Yo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,pn(t,s)}}function ed(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var v={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=v:h=h.next=v,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var td=!1;function $o(){if(td){var t=Rr;if(t!==null)throw t}}function Zo(t,i,s,l){td=!1;var f=t.updateQueue;Qa=!1;var h=f.firstBaseUpdate,v=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var F=A,J=F.next;F.next=null,v===null?h=J:v.next=J,v=F;var de=t.alternate;de!==null&&(de=de.updateQueue,A=de.lastBaseUpdate,A!==v&&(A===null?de.firstBaseUpdate=J:A.next=J,de.lastBaseUpdate=F))}if(h!==null){var xe=f.baseState;v=0,de=J=F=null,A=h;do{var te=A.lane&-536870913,re=te!==A.lane;if(re?(At&te)===te:(l&te)===te){te!==0&&te===Ar&&(td=!0),de!==null&&(de=de.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Xe=t,st=A;te=i;var Jt=s;switch(st.tag){case 1:if(Xe=st.payload,typeof Xe=="function"){xe=Xe.call(Jt,xe,te);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=st.payload,te=typeof Xe=="function"?Xe.call(Jt,xe,te):Xe,te==null)break e;xe=_({},xe,te);break e;case 2:Qa=!0}}te=A.callback,te!==null&&(t.flags|=64,re&&(t.flags|=8192),re=f.callbacks,re===null?f.callbacks=[te]:re.push(te))}else re={lane:te,tag:A.tag,payload:A.payload,callback:A.callback,next:null},de===null?(J=de=re,F=xe):de=de.next=re,v|=te;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;re=A,A=re.next,re.next=null,f.lastBaseUpdate=re,f.shared.pending=null}}while(!0);de===null&&(F=xe),f.baseState=F,f.firstBaseUpdate=J,f.lastBaseUpdate=de,h===null&&(f.shared.lanes=0),ss|=v,t.lanes=v,t.memoizedState=xe}}function km(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Xm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)km(s[t],i)}var Dr=N(null),Ac=N(0);function Wm(t,i){t=Aa,be(Ac,t),be(Dr,i),Aa=t|i.baseLanes}function nd(){be(Ac,Aa),be(Dr,Dr.current)}function id(){Aa=Ac.current,ie(Dr),ie(Ac)}var Si=N(null),Ii=null;function ts(t){var i=t.alternate;be(bn,bn.current&1),be(Si,t),Ii===null&&(i===null||Dr.current!==null||i.memoizedState!==null)&&(Ii=t)}function ad(t){be(bn,bn.current),be(Si,t),Ii===null&&(Ii=t)}function qm(t){t.tag===22?(be(bn,bn.current),be(Si,t),Ii===null&&(Ii=t)):ns()}function ns(){be(bn,bn.current),be(Si,Si.current)}function Mi(t){ie(Si),Ii===t&&(Ii=null),ie(bn)}var bn=N(0);function Rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||uh(s)||fh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xa=0,_t=null,Kt=null,wn=null,wc=!1,Or=!1,ks=!1,Cc=0,Ko=0,Ur=null,ky=0;function mn(){throw Error(a(321))}function sd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!bi(t[s],i[s]))return!1;return!0}function rd(t,i,s,l,f,h){return xa=h,_t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?Dg:yd,ks=!1,h=s(l,f),ks=!1,Or&&(h=$m(i,s,l,f)),Ym(t),h}function Ym(t){I.H=el;var i=Kt!==null&&Kt.next!==null;if(xa=0,wn=Kt=_t=null,wc=!1,Ko=0,Ur=null,i)throw Error(a(300));t===null||Cn||(t=t.dependencies,t!==null&&vc(t)&&(Cn=!0))}function $m(t,i,s,l){_t=t;var f=0;do{if(Or&&(Ur=null),Ko=0,Or=!1,25<=f)throw Error(a(301));if(f+=1,wn=Kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=Og,h=i(s,l)}while(Or);return h}function Xy(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?Qo(i):i,t=t.useState()[0],(Kt!==null?Kt.memoizedState:null)!==t&&(_t.flags|=1024),i}function od(){var t=Cc!==0;return Cc=0,t}function ld(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function cd(t){if(wc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}wc=!1}xa=0,wn=Kt=_t=null,Or=!1,Ko=Cc=0,Ur=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?_t.memoizedState=wn=t:wn=wn.next=t,wn}function yn(){if(Kt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=wn===null?_t.memoizedState:wn.next;if(i!==null)wn=i,Kt=t;else{if(t===null)throw _t.alternate===null?Error(a(467)):Error(a(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},wn===null?_t.memoizedState=wn=t:wn=wn.next=t}return wn}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(t){var i=Ko;return Ko+=1,Ur===null&&(Ur=[]),t=Bm(Ur,t,i),i=_t,(wn===null?i.memoizedState:wn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Dg:yd),t}function Oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qo(t);if(t.$$typeof===O)return Zn(t)}throw Error(a(438,String(t)))}function ud(t){var i=null,s=_t.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=_t.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Dc(),_t.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function va(t,i){return typeof i=="function"?i(t):i}function Uc(t){var i=yn();return fd(i,Kt,t)}function fd(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var v=f.next;f.next=h.next,h.next=v}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var A=v=null,F=null,J=i,de=!1;do{var xe=J.lane&-536870913;if(xe!==J.lane?(At&xe)===xe:(xa&xe)===xe){var te=J.revertLane;if(te===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),xe===Ar&&(de=!0);else if((xa&te)===te){J=J.next,te===Ar&&(de=!0);continue}else xe={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(A=F=xe,v=h):F=F.next=xe,_t.lanes|=te,ss|=te;xe=J.action,ks&&s(h,xe),h=J.hasEagerState?J.eagerState:s(h,xe)}else te={lane:xe,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(A=F=te,v=h):F=F.next=te,_t.lanes|=xe,ss|=xe;J=J.next}while(J!==null&&J!==i);if(F===null?v=h:F.next=A,!bi(h,t.memoizedState)&&(Cn=!0,de&&(s=Rr,s!==null)))throw s;t.memoizedState=h,t.baseState=v,t.baseQueue=F,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function dd(t){var i=yn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var v=f=f.next;do h=t(h,v.action),v=v.next;while(v!==f);bi(h,i.memoizedState)||(Cn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Zm(t,i,s){var l=_t,f=yn(),h=Ut;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var v=!bi((Kt||f).memoizedState,s);if(v&&(f.memoizedState=s,Cn=!0),f=f.queue,md(Jm.bind(null,l,f,t),[t]),f.getSnapshot!==i||v||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,Lr(9,{destroy:void 0},Qm.bind(null,l,f,s,i),null),nn===null)throw Error(a(349));h||(xa&127)!==0||Km(l,i,s)}return s}function Km(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=_t.updateQueue,i===null?(i=Dc(),_t.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Qm(t,i,s,l){i.value=s,i.getSnapshot=l,eg(i)&&tg(t)}function Jm(t,i,s){return s(function(){eg(i)&&tg(t)})}function eg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!bi(t,s)}catch{return!0}}function tg(t){var i=Ps(t,2);i!==null&&hi(i,t,2)}function hd(t){var i=ai();if(typeof t=="function"){var s=t;if(t=s(),ks){Ze(!0);try{s()}finally{Ze(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},i}function ng(t,i,s,l){return t.baseState=s,fd(t,Kt,typeof l=="function"?l:va)}function Wy(t,i,s,l,f){if(Pc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};I.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,ig(i,h)):(h.next=s.next,i.pending=s.next=h)}}function ig(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=I.T,v={};I.T=v;try{var A=s(f,l),F=I.S;F!==null&&F(v,A),ag(t,i,A)}catch(J){pd(t,i,J)}finally{h!==null&&v.types!==null&&(h.types=v.types),I.T=h}}else try{h=s(f,l),ag(t,i,h)}catch(J){pd(t,i,J)}}function ag(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){sg(t,i,l)},function(l){return pd(t,i,l)}):sg(t,i,s)}function sg(t,i,s){i.status="fulfilled",i.value=s,rg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,ig(t,s)))}function pd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,rg(i),i=i.next;while(i!==l)}t.action=null}function rg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function og(t,i){return i}function lg(t,i){if(Ut){var s=nn.formState;if(s!==null){e:{var l=_t;if(Ut){if(on){t:{for(var f=on,h=zi;f.nodeType!==8;){if(!h){f=null;break t}if(f=Fi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){on=Fi(f.nextSibling),l=f.data==="F!";break e}}Za(l)}l=!1}l&&(i=s[0])}}return s=ai(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:og,lastRenderedState:i},s.queue=l,s=Rg.bind(null,_t,l),l.dispatch=s,l=hd(!1),h=bd.bind(null,_t,!1,l.queue),l=ai(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=Wy.bind(null,_t,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function cg(t){var i=yn();return ug(i,Kt,t)}function ug(t,i,s){if(i=fd(t,i,og)[0],t=Uc(va)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(v){throw v===wr?Sc:v}else l=i;i=yn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(_t.flags|=2048,Lr(9,{destroy:void 0},qy.bind(null,f,s),null)),[l,h,t]}function qy(t,i){t.action=i}function fg(t){var i=yn(),s=Kt;if(s!==null)return ug(i,s,t);yn(),i=i.memoizedState,s=yn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Lr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=_t.updateQueue,i===null&&(i=Dc(),_t.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function dg(){return yn().memoizedState}function Lc(t,i,s,l){var f=ai();_t.flags|=t,f.memoizedState=Lr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Nc(t,i,s,l){var f=yn();l=l===void 0?null:l;var h=f.memoizedState.inst;Kt!==null&&l!==null&&sd(l,Kt.memoizedState.deps)?f.memoizedState=Lr(i,h,s,l):(_t.flags|=t,f.memoizedState=Lr(1|i,h,s,l))}function hg(t,i){Lc(8390656,8,t,i)}function md(t,i){Nc(2048,8,t,i)}function Yy(t){_t.flags|=4;var i=_t.updateQueue;if(i===null)i=Dc(),_t.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function pg(t){var i=yn().memoizedState;return Yy({ref:i,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function mg(t,i){return Nc(4,2,t,i)}function gg(t,i){return Nc(4,4,t,i)}function _g(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function xg(t,i,s){s=s!=null?s.concat([t]):null,Nc(4,4,_g.bind(null,i,t),s)}function gd(){}function vg(t,i){var s=yn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&sd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function bg(t,i){var s=yn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&sd(i,l[1]))return l[0];if(l=t(),ks){Ze(!0);try{t()}finally{Ze(!1)}}return s.memoizedState=[l,i],l}function _d(t,i,s){return s===void 0||(xa&1073741824)!==0&&(At&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=y_(),_t.lanes|=t,ss|=t,s)}function yg(t,i,s,l){return bi(s,i)?s:Dr.current!==null?(t=_d(t,s,l),bi(t,i)||(Cn=!0),t):(xa&42)===0||(xa&1073741824)!==0&&(At&261930)===0?(Cn=!0,t.memoizedState=s):(t=y_(),_t.lanes|=t,ss|=t,i)}function Sg(t,i,s,l,f){var h=q.p;q.p=h!==0&&8>h?h:8;var v=I.T,A={};I.T=A,bd(t,!1,i,s);try{var F=f(),J=I.S;if(J!==null&&J(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var de=jy(F,l);Jo(t,i,de,Ai(t))}else Jo(t,i,l,Ai(t))}catch(xe){Jo(t,i,{then:function(){},status:"rejected",reason:xe},Ai())}finally{q.p=h,v!==null&&A.types!==null&&(v.types=A.types),I.T=v}}function $y(){}function xd(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Mg(t).queue;Sg(t,f,i,W,s===null?$y:function(){return Eg(t),s(l)})}function Mg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:W},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Eg(t){var i=Mg(t);i.next===null&&(i=t.alternate.memoizedState),Jo(t,i.next.queue,{},Ai())}function vd(){return Zn(gl)}function Tg(){return yn().memoizedState}function Ag(){return yn().memoizedState}function Zy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ai();t=Ja(s);var l=es(i,t,s);l!==null&&(hi(l,i,s),Yo(l,i,s)),i={cache:Yf()},t.payload=i;return}i=i.return}}function Ky(t,i,s){var l=Ai();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pc(t)?wg(i,s):(s=If(t,i,s,l),s!==null&&(hi(s,t,l),Cg(s,i,l)))}function Rg(t,i,s){var l=Ai();Jo(t,i,s,l)}function Jo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Pc(t))wg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var v=i.lastRenderedState,A=h(v,s);if(f.hasEagerState=!0,f.eagerState=A,bi(A,v))return mc(t,i,f,0),nn===null&&pc(),!1}catch{}finally{}if(s=If(t,i,f,l),s!==null)return hi(s,t,l),Cg(s,i,l),!0}return!1}function bd(t,i,s,l){if(l={lane:2,revertLane:Qd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(t)){if(i)throw Error(a(479))}else i=If(t,s,l,2),i!==null&&hi(i,t,2)}function Pc(t){var i=t.alternate;return t===_t||i!==null&&i===_t}function wg(t,i){Or=wc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Cg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,pn(t,s)}}var el={readContext:Zn,use:Oc,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};el.useEffectEvent=mn;var Dg={readContext:Zn,use:Oc,useCallback:function(t,i){return ai().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:hg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Lc(4194308,4,_g.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Lc(4194308,4,t,i)},useInsertionEffect:function(t,i){Lc(4,2,t,i)},useMemo:function(t,i){var s=ai();i=i===void 0?null:i;var l=t();if(ks){Ze(!0);try{t()}finally{Ze(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=ai();if(s!==void 0){var f=s(i);if(ks){Ze(!0);try{s(i)}finally{Ze(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Ky.bind(null,_t,t),[l.memoizedState,t]},useRef:function(t){var i=ai();return t={current:t},i.memoizedState=t},useState:function(t){t=hd(t);var i=t.queue,s=Rg.bind(null,_t,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:gd,useDeferredValue:function(t,i){var s=ai();return _d(s,t,i)},useTransition:function(){var t=hd(!1);return t=Sg.bind(null,_t,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=_t,f=ai();if(Ut){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),nn===null)throw Error(a(349));(At&127)!==0||Km(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,hg(Jm.bind(null,l,h,t),[t]),l.flags|=2048,Lr(9,{destroy:void 0},Qm.bind(null,l,h,s,i),null),s},useId:function(){var t=ai(),i=nn.identifierPrefix;if(Ut){var s=ia,l=na;s=(l&~(1<<32-je(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Cc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=ky++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:vd,useFormState:lg,useActionState:lg,useOptimistic:function(t){var i=ai();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=bd.bind(null,_t,!0,s),s.dispatch=i,[t,i]},useMemoCache:ud,useCacheRefresh:function(){return ai().memoizedState=Zy.bind(null,_t)},useEffectEvent:function(t){var i=ai(),s={impl:t};return i.memoizedState=s,function(){if((Gt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},yd={readContext:Zn,use:Oc,useCallback:vg,useContext:Zn,useEffect:md,useImperativeHandle:xg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:bg,useReducer:Uc,useRef:dg,useState:function(){return Uc(va)},useDebugValue:gd,useDeferredValue:function(t,i){var s=yn();return yg(s,Kt.memoizedState,t,i)},useTransition:function(){var t=Uc(va)[0],i=yn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Zm,useId:Tg,useHostTransitionStatus:vd,useFormState:cg,useActionState:cg,useOptimistic:function(t,i){var s=yn();return ng(s,Kt,t,i)},useMemoCache:ud,useCacheRefresh:Ag};yd.useEffectEvent=pg;var Og={readContext:Zn,use:Oc,useCallback:vg,useContext:Zn,useEffect:md,useImperativeHandle:xg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:bg,useReducer:dd,useRef:dg,useState:function(){return dd(va)},useDebugValue:gd,useDeferredValue:function(t,i){var s=yn();return Kt===null?_d(s,t,i):yg(s,Kt.memoizedState,t,i)},useTransition:function(){var t=dd(va)[0],i=yn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Zm,useId:Tg,useHostTransitionStatus:vd,useFormState:fg,useActionState:fg,useOptimistic:function(t,i){var s=yn();return Kt!==null?ng(s,Kt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ud,useCacheRefresh:Ag};Og.useEffectEvent=pg;function Sd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Md={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Ai(),f=Ja(l);f.payload=i,s!=null&&(f.callback=s),i=es(t,f,l),i!==null&&(hi(i,t,l),Yo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Ai(),f=Ja(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=es(t,f,l),i!==null&&(hi(i,t,l),Yo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ai(),l=Ja(s);l.tag=2,i!=null&&(l.callback=i),i=es(t,l,s),i!==null&&(hi(i,t,s),Yo(i,t,s))}};function Ug(t,i,s,l,f,h,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,v):i.prototype&&i.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,h):!0}function Lg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Md.enqueueReplaceState(i,i.state,null)}function Xs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Ng(t){hc(t)}function Pg(t){console.error(t)}function zg(t){hc(t)}function zc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ig(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ed(t,i,s){return s=Ja(s),s.tag=3,s.payload={element:null},s.callback=function(){zc(t,i)},s}function Fg(t){return t=Ja(t),t.tag=3,t}function Bg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){Ig(i,s,l)}}var v=s.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Ig(i,s,l),typeof f!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function Qy(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Tr(i,s,f,!0),s=Si.current,s!==null){switch(s.tag){case 31:case 13:return Ii===null?Yc():s.alternate===null&&gn===0&&(gn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),$d(t,l,f)),!1;case 22:return s.flags|=65536,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),$d(t,l,f)),!1}throw Error(a(435,s.tag))}return $d(t,l,f),Yc(),!1}if(Ut)return i=Si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==jf&&(t=Error(a(422),{cause:l}),jo(Li(t,s)))):(l!==jf&&(i=Error(a(423),{cause:l}),jo(Li(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Li(l,s),f=Ed(t.stateNode,l,f),ed(t,f),gn!==4&&(gn=2)),!1;var h=Error(a(520),{cause:l});if(h=Li(h,s),ll===null?ll=[h]:ll.push(h),gn!==4&&(gn=2),i===null)return!0;l=Li(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Ed(s.stateNode,l,t),ed(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rs===null||!rs.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Fg(f),Bg(f,t,s,l),ed(s,f),!1}s=s.return}while(s!==null);return!1}var Td=Error(a(461)),Cn=!1;function Kn(t,i,s,l){i.child=t===null?jm(i,null,s,l):js(i,t.child,s,l)}function Hg(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var v={};for(var A in l)A!=="ref"&&(v[A]=l[A])}else v=l;return Bs(i),l=rd(t,i,s,v,h,f),A=od(),t!==null&&!Cn?(ld(t,i,f),ba(t,i,f)):(Ut&&A&&Gf(i),i.flags|=1,Kn(t,i,l,f),i.child)}function Gg(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!Ff(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,Vg(t,i,h,l,f)):(t=_c(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Ld(t,f)){var v=h.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(v,l)&&t.ref===i.ref)return ba(t,i,f)}return i.flags|=1,t=pa(h,l),t.ref=i.ref,t.return=i,i.child=t}function Vg(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Ho(h,l)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=l=h,Ld(t,f))(t.flags&131072)!==0&&(Cn=!0);else return i.lanes=t.lanes,ba(t,i,f)}return Ad(t,i,s,l,f)}function jg(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return kg(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&yc(i,h!==null?h.cachePool:null),h!==null?Wm(i,h):nd(),qm(i);else return l=i.lanes=536870912,kg(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(yc(i,h.cachePool),Wm(i,h),ns(),i.memoizedState=null):(t!==null&&yc(i,null),nd(),ns());return Kn(t,i,f,s),i.child}function tl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function kg(t,i,s,l,f){var h=Zf();return h=h===null?null:{parent:Rn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&yc(i,null),nd(),qm(i),t!==null&&Tr(t,i,l,!0),i.childLanes=f,null}function Ic(t,i){return i=Bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Xg(t,i,s){return js(i,t.child,null,s),t=Ic(i,i.pendingProps),t.flags|=2,Mi(i),i.memoizedState=null,t}function Jy(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ut){if(l.mode==="hidden")return t=Ic(i,l),i.lanes=536870912,tl(null,t);if(ad(i),(t=on)?(t=ix(t,zi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=wm(t),s.return=i,i.child=s,$n=i,on=null)):t=null,t===null)throw Za(i);return i.lanes=536870912,null}return Ic(i,l)}var h=t.memoizedState;if(h!==null){var v=h.dehydrated;if(ad(i),f)if(i.flags&256)i.flags&=-257,i=Xg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Cn||Tr(t,i,s,!1),f=(s&t.childLanes)!==0,Cn||f){if(l=nn,l!==null&&(v=an(l,s),v!==0&&v!==h.retryLane))throw h.retryLane=v,Ps(t,v),hi(l,t,v),Td;Yc(),i=Xg(t,i,s)}else t=h.treeContext,on=Fi(v.nextSibling),$n=i,Ut=!0,$a=null,zi=!1,t!==null&&Om(i,t),i=Ic(i,l),i.flags|=4096;return i}return t=pa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Fc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Ad(t,i,s,l,f){return Bs(i),s=rd(t,i,s,l,void 0,f),l=od(),t!==null&&!Cn?(ld(t,i,f),ba(t,i,f)):(Ut&&l&&Gf(i),i.flags|=1,Kn(t,i,s,f),i.child)}function Wg(t,i,s,l,f,h){return Bs(i),i.updateQueue=null,s=$m(i,l,s,f),Ym(t),l=od(),t!==null&&!Cn?(ld(t,i,h),ba(t,i,h)):(Ut&&l&&Gf(i),i.flags|=1,Kn(t,i,s,h),i.child)}function qg(t,i,s,l,f){if(Bs(i),i.stateNode===null){var h=yr,v=s.contextType;typeof v=="object"&&v!==null&&(h=Zn(v)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Md,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},Qf(i),v=s.contextType,h.context=typeof v=="object"&&v!==null?Zn(v):yr,h.state=i.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(Sd(i,s,v,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&Md.enqueueReplaceState(h,h.state,null),Zo(i,l,h,f),$o(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var A=i.memoizedProps,F=Xs(s,A);h.props=F;var J=h.context,de=s.contextType;v=yr,typeof de=="object"&&de!==null&&(v=Zn(de));var xe=s.getDerivedStateFromProps;de=typeof xe=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,de||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||J!==v)&&Lg(i,h,l,v),Qa=!1;var te=i.memoizedState;h.state=te,Zo(i,l,h,f),$o(),J=i.memoizedState,A||te!==J||Qa?(typeof xe=="function"&&(Sd(i,s,xe,l),J=i.memoizedState),(F=Qa||Ug(i,s,F,l,te,J,v))?(de||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=J),h.props=l,h.state=J,h.context=v,l=F):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,Jf(t,i),v=i.memoizedProps,de=Xs(s,v),h.props=de,xe=i.pendingProps,te=h.context,J=s.contextType,F=yr,typeof J=="object"&&J!==null&&(F=Zn(J)),A=s.getDerivedStateFromProps,(J=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==xe||te!==F)&&Lg(i,h,l,F),Qa=!1,te=i.memoizedState,h.state=te,Zo(i,l,h,f),$o();var re=i.memoizedState;v!==xe||te!==re||Qa||t!==null&&t.dependencies!==null&&vc(t.dependencies)?(typeof A=="function"&&(Sd(i,s,A,l),re=i.memoizedState),(de=Qa||Ug(i,s,de,l,te,re,F)||t!==null&&t.dependencies!==null&&vc(t.dependencies))?(J||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,re,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,re,F)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===t.memoizedProps&&te===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&te===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=re),h.props=l,h.state=re,h.context=F,l=de):(typeof h.componentDidUpdate!="function"||v===t.memoizedProps&&te===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&te===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Fc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=js(i,t.child,null,f),i.child=js(i,null,s,f)):Kn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=ba(t,i,f),t}function Yg(t,i,s,l){return Is(),i.flags|=256,Kn(t,i,s,l),i.child}var Rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wd(t){return{baseLanes:t,cachePool:Im()}}function Cd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ti),t}function $g(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,v;if((v=h)||(v=t!==null&&t.memoizedState===null?!1:(bn.current&2)!==0),v&&(f=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ut){if(f?ts(i):ns(),(t=on)?(t=ix(t,zi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},s=wm(t),s.return=i,i.child=s,$n=i,on=null)):t=null,t===null)throw Za(i);return fh(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(ns(),f=i.mode,A=Bc({mode:"hidden",children:A},f),l=zs(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=wd(s),l.childLanes=Cd(t,v,s),i.memoizedState=Rd,tl(null,l)):(ts(i),Dd(i,A))}var F=t.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(h)i.flags&256?(ts(i),i.flags&=-257,i=Od(t,i,s)):i.memoizedState!==null?(ns(),i.child=t.child,i.flags|=128,i=null):(ns(),A=l.fallback,f=i.mode,l=Bc({mode:"visible",children:l.children},f),A=zs(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,js(i,t.child,null,s),l=i.child,l.memoizedState=wd(s),l.childLanes=Cd(t,v,s),i.memoizedState=Rd,i=tl(null,l));else if(ts(i),fh(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var J=v.dgst;v=J,l=Error(a(419)),l.stack="",l.digest=v,jo({value:l,source:null,stack:null}),i=Od(t,i,s)}else if(Cn||Tr(t,i,s,!1),v=(s&t.childLanes)!==0,Cn||v){if(v=nn,v!==null&&(l=an(v,s),l!==0&&l!==F.retryLane))throw F.retryLane=l,Ps(t,l),hi(v,t,l),Td;uh(A)||Yc(),i=Od(t,i,s)}else uh(A)?(i.flags|=192,i.child=t.child,i=null):(t=F.treeContext,on=Fi(A.nextSibling),$n=i,Ut=!0,$a=null,zi=!1,t!==null&&Om(i,t),i=Dd(i,l.children),i.flags|=4096);return i}return f?(ns(),A=l.fallback,f=i.mode,F=t.child,J=F.sibling,l=pa(F,{mode:"hidden",children:l.children}),l.subtreeFlags=F.subtreeFlags&65011712,J!==null?A=pa(J,A):(A=zs(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,tl(null,l),l=i.child,A=t.child.memoizedState,A===null?A=wd(s):(f=A.cachePool,f!==null?(F=Rn._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=Im(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=Cd(t,v,s),i.memoizedState=Rd,tl(t.child,l)):(ts(i),s=t.child,t=s.sibling,s=pa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=s,i.memoizedState=null,s)}function Dd(t,i){return i=Bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Bc(t,i){return t=yi(22,t,null,i),t.lanes=0,t}function Od(t,i,s){return js(i,t.child,null,s),t=Dd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Zg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Wf(t.return,i,s)}function Ud(t,i,s,l,f,h){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=s,v.tailMode=f,v.treeForkCount=h)}function Kg(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var v=bn.current,A=(v&2)!==0;if(A?(v=v&1|2,i.flags|=128):v&=1,be(bn,v),Kn(t,i,l,s),l=Ut?Vo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zg(t,s,i);else if(t.tag===19)Zg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Ud(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Rc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Ud(i,!0,s,null,h,l);break;case"together":Ud(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ba(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ss|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Tr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=pa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=pa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ld(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&vc(t)))}function eS(t,i,s){switch(i.tag){case 3:Oe(i,i.stateNode.containerInfo),Ka(i,Rn,t.memoizedState.cache),Is();break;case 27:case 5:qe(i);break;case 4:Oe(i,i.stateNode.containerInfo);break;case 10:Ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ad(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ts(i),i.flags|=128,null):(s&i.child.childLanes)!==0?$g(t,i,s):(ts(i),t=ba(t,i,s),t!==null?t.sibling:null);ts(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Tr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Kg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),be(bn,bn.current),l)break;return null;case 22:return i.lanes=0,jg(t,i,s,i.pendingProps);case 24:Ka(i,Rn,t.memoizedState.cache)}return ba(t,i,s)}function Qg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Cn=!0;else{if(!Ld(t,s)&&(i.flags&128)===0)return Cn=!1,eS(t,i,s);Cn=(t.flags&131072)!==0}else Cn=!1,Ut&&(i.flags&1048576)!==0&&Dm(i,Vo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Gs(i.elementType),i.type=t,typeof t=="function")Ff(t)?(l=Xs(t,l),i.tag=1,i=qg(null,i,t,l,s)):(i.tag=0,i=Ad(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===z){i.tag=11,i=Hg(null,i,t,l,s);break e}else if(f===P){i.tag=14,i=Gg(null,i,t,l,s);break e}}throw i=_e(t)||t,Error(a(306,i,""))}}return i;case 0:return Ad(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Xs(l,i.pendingProps),qg(t,i,l,f,s);case 3:e:{if(Oe(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,Jf(t,i),Zo(i,l,null,s);var v=i.memoizedState;if(l=v.cache,Ka(i,Rn,l),l!==h.cache&&qf(i,[Rn],s,!0),$o(),l=v.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Yg(t,i,l,s);break e}else if(l!==f){f=Li(Error(a(424)),i),jo(f),i=Yg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Fi(t.firstChild),$n=i,Ut=!0,$a=null,zi=!0,s=jm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Is(),l===f){i=ba(t,i,s);break e}Kn(t,i,l,s)}i=i.child}return i;case 26:return Fc(t,i),t===null?(s=cx(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ut||(s=i.type,t=i.pendingProps,l=tu(ne.current).createElement(s),l[kt]=i,l[Xt]=t,Qn(l,s,t),ee(l),i.stateNode=l):i.memoizedState=cx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return qe(i),t===null&&Ut&&(l=i.stateNode=rx(i.type,i.pendingProps,ne.current),$n=i,zi=!0,f=on,us(i.type)?(dh=f,on=Fi(l.firstChild)):on=f),Kn(t,i,i.pendingProps.children,s),Fc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ut&&((f=l=on)&&(l=DS(l,i.type,i.pendingProps,zi),l!==null?(i.stateNode=l,$n=i,on=Fi(l.firstChild),zi=!1,f=!0):f=!1),f||Za(i)),qe(i),f=i.type,h=i.pendingProps,v=t!==null?t.memoizedProps:null,l=h.children,oh(f,h)?l=null:v!==null&&oh(f,v)&&(i.flags|=32),i.memoizedState!==null&&(f=rd(t,i,Xy,null,null,s),gl._currentValue=f),Fc(t,i),Kn(t,i,l,s),i.child;case 6:return t===null&&Ut&&((t=s=on)&&(s=OS(s,i.pendingProps,zi),s!==null?(i.stateNode=s,$n=i,on=null,t=!0):t=!1),t||Za(i)),null;case 13:return $g(t,i,s);case 4:return Oe(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=js(i,null,l,s):Kn(t,i,l,s),i.child;case 11:return Hg(t,i,i.type,i.pendingProps,s);case 7:return Kn(t,i,i.pendingProps,s),i.child;case 8:return Kn(t,i,i.pendingProps.children,s),i.child;case 12:return Kn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ka(i,i.type,l.value),Kn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Bs(i),f=Zn(f),l=l(f),i.flags|=1,Kn(t,i,l,s),i.child;case 14:return Gg(t,i,i.type,i.pendingProps,s);case 15:return Vg(t,i,i.type,i.pendingProps,s);case 19:return Kg(t,i,s);case 31:return Jy(t,i,s);case 22:return jg(t,i,s,i.pendingProps);case 24:return Bs(i),l=Zn(Rn),t===null?(f=Zf(),f===null&&(f=nn,h=Yf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},Qf(i),Ka(i,Rn,f)):((t.lanes&s)!==0&&(Jf(t,i),Zo(i,null,null,s),$o()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ka(i,Rn,l)):(l=h.cache,Ka(i,Rn,l),l!==f.cache&&qf(i,[Rn],s,!0))),Kn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ya(t){t.flags|=4}function Nd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(T_())t.flags|=8192;else throw Vs=Mc,Kf}else t.flags&=-16777217}function Jg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!px(i))if(T_())t.flags|=8192;else throw Vs=Mc,Kf}function Hc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ht():536870912,t.lanes|=i,Ir|=i)}function nl(t,i){if(!Ut)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ln(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function tS(t,i,s){var l=i.pendingProps;switch(Vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(i),null;case 1:return ln(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),_a(Rn),Ve(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Er(i)?ya(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kf())),ln(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(ya(i),h!==null?(ln(i),Jg(i,h)):(ln(i),Nd(i,f,null,l,s))):h?h!==t.memoizedState?(ya(i),ln(i),Jg(i,h)):(ln(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(i),ln(i),Nd(i,f,t,l,s)),null;case 27:if(pt(i),s=ne.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return ln(i),null}t=Te.current,Er(i)?Um(i):(t=rx(f,l,s),i.stateNode=t,ya(i))}return ln(i),null;case 5:if(pt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return ln(i),null}if(h=Te.current,Er(i))Um(i);else{var v=tu(ne.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?v.createElement("select",{is:l.is}):v.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?v.createElement(f,{is:l.is}):v.createElement(f)}}h[kt]=i,h[Xt]=l;e:for(v=i.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===i)break e;for(;v.sibling===null;){if(v.return===null||v.return===i)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}i.stateNode=h;e:switch(Qn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(i)}}return ln(i),Nd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ne.current,Er(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=$n,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[kt]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||$_(t.nodeValue,s)),t||Za(i,!0)}else t=tu(t).createTextNode(l),t[kt]=i,i.stateNode=t}return ln(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Er(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[kt]=i}else Is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),t=!1}else s=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Mi(i),i):(Mi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return ln(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Er(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[kt]=i}else Is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ln(i),f=!1}else f=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Mi(i),i):(Mi(i),null)}return Mi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Hc(i,i.updateQueue),ln(i),null);case 4:return Ve(),t===null&&nh(i.stateNode.containerInfo),ln(i),null;case 10:return _a(i.type),ln(i),null;case 19:if(ie(bn),l=i.memoizedState,l===null)return ln(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)nl(l,!1);else{if(gn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Rc(t),h!==null){for(i.flags|=128,nl(l,!1),t=h.updateQueue,i.updateQueue=t,Hc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Rm(s,t),s=s.sibling;return be(bn,bn.current&1|2),Ut&&ma(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&E()>Xc&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304)}else{if(!f)if(t=Rc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Hc(i,t),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Ut)return ln(i),null}else 2*E()-l.renderingStartTime>Xc&&s!==536870912&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=E(),t.sibling=null,s=bn.current,be(bn,f?s&1|2:s&1),Ut&&ma(i,l.treeForkCount),t):(ln(i),null);case 22:case 23:return Mi(i),id(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(ln(i),i.subtreeFlags&6&&(i.flags|=8192)):ln(i),s=i.updateQueue,s!==null&&Hc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ie(Hs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),_a(Rn),ln(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function nS(t,i){switch(Vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _a(Rn),Ve(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return pt(i),null;case 31:if(i.memoizedState!==null){if(Mi(i),i.alternate===null)throw Error(a(340));Is()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Mi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Is()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(bn),null;case 4:return Ve(),null;case 10:return _a(i.type),null;case 22:case 23:return Mi(i),id(),t!==null&&ie(Hs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return _a(Rn),null;case 25:return null;default:return null}}function e_(t,i){switch(Vf(i),i.tag){case 3:_a(Rn),Ve();break;case 26:case 27:case 5:pt(i);break;case 4:Ve();break;case 31:i.memoizedState!==null&&Mi(i);break;case 13:Mi(i);break;case 19:ie(bn);break;case 10:_a(i.type);break;case 22:case 23:Mi(i),id(),t!==null&&ie(Hs);break;case 24:_a(Rn)}}function il(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,v=s.inst;l=h(),v.destroy=l}s=s.next}while(s!==f)}}catch(A){qt(i,i.return,A)}}function is(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var v=l.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,f=i;var F=s,J=A;try{J()}catch(de){qt(f,F,de)}}}l=l.next}while(l!==h)}}catch(de){qt(i,i.return,de)}}function t_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Xm(i,s)}catch(l){qt(t,t.return,l)}}}function n_(t,i,s){s.props=Xs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,i,l)}}function al(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,i,f)}}function aa(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,i,f)}else s.current=null}function i_(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function Pd(t,i,s){try{var l=t.stateNode;ES(l,t.type,s,i),l[Xt]=i}catch(f){qt(t,t.return,f)}}function a_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&us(t.type)||t.tag===4}function zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&us(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(l===27&&us(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Id(t,i,s),t=t.sibling;t!==null;)Id(t,i,s),t=t.sibling}function Gc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&us(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Gc(t,i,s),t=t.sibling;t!==null;)Gc(t,i,s),t=t.sibling}function s_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Qn(i,l,s),i[kt]=t,i[Xt]=s}catch(h){qt(t,t.return,h)}}var Sa=!1,Dn=!1,Fd=!1,r_=typeof WeakSet=="function"?WeakSet:Set,Vn=null;function iS(t,i){if(t=t.containerInfo,sh=lu,t=xm(t),Of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var v=0,A=-1,F=-1,J=0,de=0,xe=t,te=null;t:for(;;){for(var re;xe!==s||f!==0&&xe.nodeType!==3||(A=v+f),xe!==h||l!==0&&xe.nodeType!==3||(F=v+l),xe.nodeType===3&&(v+=xe.nodeValue.length),(re=xe.firstChild)!==null;)te=xe,xe=re;for(;;){if(xe===t)break t;if(te===s&&++J===f&&(A=v),te===h&&++de===l&&(F=v),(re=xe.nextSibling)!==null)break;xe=te,te=xe.parentNode}xe=re}s=A===-1||F===-1?null:{start:A,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(rh={focusedElem:t,selectionRange:s},lu=!1,Vn=i;Vn!==null;)if(i=Vn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Vn=t;else for(;Vn!==null;){switch(i=Vn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var Xe=Xs(s.type,f);t=l.getSnapshotBeforeUpdate(Xe,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(st){qt(s,s.return,st)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)ch(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ch(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Vn=t;break}Vn=i.return}}function o_(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ea(t,s),l&4&&il(5,s);break;case 1:if(Ea(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(v){qt(s,s.return,v)}else{var f=Xs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(v){qt(s,s.return,v)}}l&64&&t_(s),l&512&&al(s,s.return);break;case 3:if(Ea(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Xm(t,i)}catch(v){qt(s,s.return,v)}}break;case 27:i===null&&l&4&&s_(s);case 26:case 5:Ea(t,s),i===null&&l&4&&i_(s),l&512&&al(s,s.return);break;case 12:Ea(t,s);break;case 31:Ea(t,s),l&4&&u_(t,s);break;case 13:Ea(t,s),l&4&&f_(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=dS.bind(null,s),US(t,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){i=i!==null&&i.memoizedState!==null||Dn,f=Sa;var h=Dn;Sa=l,(Dn=i)&&!h?Ta(t,s,(s.subtreeFlags&8772)!==0):Ea(t,s),Sa=f,Dn=h}break;case 30:break;default:Ea(t,s)}}function l_(t){var i=t.alternate;i!==null&&(t.alternate=null,l_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Uo(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var fn=null,ci=!1;function Ma(t,i,s){for(s=s.child;s!==null;)c_(t,i,s),s=s.sibling}function c_(t,i,s){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(Se,s)}catch{}switch(s.tag){case 26:Dn||aa(s,i),Ma(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Dn||aa(s,i);var l=fn,f=ci;us(s.type)&&(fn=s.stateNode,ci=!1),Ma(t,i,s),hl(s.stateNode),fn=l,ci=f;break;case 5:Dn||aa(s,i);case 6:if(l=fn,f=ci,fn=null,Ma(t,i,s),fn=l,ci=f,fn!==null)if(ci)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(s.stateNode)}catch(h){qt(s,i,h)}else try{fn.removeChild(s.stateNode)}catch(h){qt(s,i,h)}break;case 18:fn!==null&&(ci?(t=fn,tx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xr(t)):tx(fn,s.stateNode));break;case 4:l=fn,f=ci,fn=s.stateNode.containerInfo,ci=!0,Ma(t,i,s),fn=l,ci=f;break;case 0:case 11:case 14:case 15:is(2,s,i),Dn||is(4,s,i),Ma(t,i,s);break;case 1:Dn||(aa(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&n_(s,i,l)),Ma(t,i,s);break;case 21:Ma(t,i,s);break;case 22:Dn=(l=Dn)||s.memoizedState!==null,Ma(t,i,s),Dn=l;break;default:Ma(t,i,s)}}function u_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xr(t)}catch(s){qt(i,i.return,s)}}}function f_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xr(t)}catch(s){qt(i,i.return,s)}}function aS(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new r_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new r_),i;default:throw Error(a(435,t.tag))}}function Vc(t,i){var s=aS(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=hS.bind(null,t,l);l.then(f,f)}})}function ui(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,v=i,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(us(A.type)){fn=A.stateNode,ci=!1;break e}break;case 5:fn=A.stateNode,ci=!1;break e;case 3:case 4:fn=A.stateNode.containerInfo,ci=!0;break e}A=A.return}if(fn===null)throw Error(a(160));c_(h,v,f),fn=null,ci=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)d_(i,t),i=i.sibling}var Xi=null;function d_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ui(i,t),fi(t),l&4&&(is(3,t,t.return),il(3,t),is(5,t,t.return));break;case 1:ui(i,t),fi(t),l&512&&(Dn||s===null||aa(s,s.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Xi;if(ui(i,t),fi(t),l&512&&(Dn||s===null||aa(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[ca]||h[kt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Qn(h,l,s),h[kt]=t,ee(h),l=h;break e;case"link":var v=dx("link","href",f).get(l+(s.href||""));if(v){for(var A=0;A<v.length;A++)if(h=v[A],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){v.splice(A,1);break t}}h=f.createElement(l),Qn(h,l,s),f.head.appendChild(h);break;case"meta":if(v=dx("meta","content",f).get(l+(s.content||""))){for(A=0;A<v.length;A++)if(h=v[A],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){v.splice(A,1);break t}}h=f.createElement(l),Qn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[kt]=t,ee(h),l=h}t.stateNode=l}else hx(f,t.type,t.stateNode);else t.stateNode=fx(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?hx(f,t.type,t.stateNode):fx(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Pd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ui(i,t),fi(t),l&512&&(Dn||s===null||aa(s,s.return)),s!==null&&l&4&&Pd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ui(i,t),fi(t),l&512&&(Dn||s===null||aa(s,s.return)),t.flags&32){f=t.stateNode;try{ta(f,"")}catch(Xe){qt(t,t.return,Xe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Pd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Fd=!0);break;case 6:if(ui(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Xe){qt(t,t.return,Xe)}}break;case 3:if(au=null,f=Xi,Xi=nu(i.containerInfo),ui(i,t),Xi=f,fi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xr(i.containerInfo)}catch(Xe){qt(t,t.return,Xe)}Fd&&(Fd=!1,h_(t));break;case 4:l=Xi,Xi=nu(t.stateNode.containerInfo),ui(i,t),fi(t),Xi=l;break;case 12:ui(i,t),fi(t);break;case 31:ui(i,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 13:ui(i,t),fi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kc=E()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 22:f=t.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,J=Sa,de=Dn;if(Sa=J||f,Dn=de||F,ui(i,t),Dn=de,Sa=J,fi(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||F||Sa||Dn||Ws(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(h=F.stateNode,f)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=F.stateNode;var xe=F.memoizedProps.style,te=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(Xe){qt(F,F.return,Xe)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(Xe){qt(F,F.return,Xe)}}}else if(i.tag===18){if(s===null){F=i;try{var re=F.stateNode;f?nx(re,!0):nx(F.stateNode,!1)}catch(Xe){qt(F,F.return,Xe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Vc(t,s))));break;case 19:ui(i,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 30:break;case 21:break;default:ui(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(a_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=zd(t);Gc(t,h,f);break;case 5:var v=s.stateNode;s.flags&32&&(ta(v,""),s.flags&=-33);var A=zd(t);Gc(t,A,v);break;case 3:case 4:var F=s.stateNode.containerInfo,J=zd(t);Id(t,J,F);break;default:throw Error(a(161))}}catch(de){qt(t,t.return,de)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function h_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;h_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ea(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)o_(t,i.alternate,i),i=i.sibling}function Ws(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:is(4,i,i.return),Ws(i);break;case 1:aa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&n_(i,i.return,s),Ws(i);break;case 27:hl(i.stateNode);case 26:case 5:aa(i,i.return),Ws(i);break;case 22:i.memoizedState===null&&Ws(i);break;case 30:Ws(i);break;default:Ws(i)}t=t.sibling}}function Ta(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,v=h.flags;switch(h.tag){case 0:case 11:case 15:Ta(f,h,s),il(4,h);break;case 1:if(Ta(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(J){qt(l,l.return,J)}if(l=h,f=l.updateQueue,f!==null){var A=l.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)km(F[f],A)}catch(J){qt(l,l.return,J)}}s&&v&64&&t_(h),al(h,h.return);break;case 27:s_(h);case 26:case 5:Ta(f,h,s),s&&l===null&&v&4&&i_(h),al(h,h.return);break;case 12:Ta(f,h,s);break;case 31:Ta(f,h,s),s&&v&4&&u_(f,h);break;case 13:Ta(f,h,s),s&&v&4&&f_(f,h);break;case 22:h.memoizedState===null&&Ta(f,h,s),al(h,h.return);break;case 30:break;default:Ta(f,h,s)}i=i.sibling}}function Bd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&ko(s))}function Hd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t))}function Wi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)p_(t,i,s,l),i=i.sibling}function p_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Wi(t,i,s,l),f&2048&&il(9,i);break;case 1:Wi(t,i,s,l);break;case 3:Wi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t)));break;case 12:if(f&2048){Wi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,v=h.id,A=h.onPostCommit;typeof A=="function"&&A(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){qt(i,i.return,F)}}else Wi(t,i,s,l);break;case 31:Wi(t,i,s,l);break;case 13:Wi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,v=i.alternate,i.memoizedState!==null?h._visibility&2?Wi(t,i,s,l):sl(t,i):h._visibility&2?Wi(t,i,s,l):(h._visibility|=2,Nr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Bd(v,i);break;case 24:Wi(t,i,s,l),f&2048&&Hd(i.alternate,i);break;default:Wi(t,i,s,l)}}function Nr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,v=i,A=s,F=l,J=v.flags;switch(v.tag){case 0:case 11:case 15:Nr(h,v,A,F,f),il(8,v);break;case 23:break;case 22:var de=v.stateNode;v.memoizedState!==null?de._visibility&2?Nr(h,v,A,F,f):sl(h,v):(de._visibility|=2,Nr(h,v,A,F,f)),f&&J&2048&&Bd(v.alternate,v);break;case 24:Nr(h,v,A,F,f),f&&J&2048&&Hd(v.alternate,v);break;default:Nr(h,v,A,F,f)}i=i.sibling}}function sl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&Bd(l.alternate,l);break;case 24:sl(s,l),f&2048&&Hd(l.alternate,l);break;default:sl(s,l)}i=i.sibling}}var rl=8192;function Pr(t,i,s){if(t.subtreeFlags&rl)for(t=t.child;t!==null;)m_(t,i,s),t=t.sibling}function m_(t,i,s){switch(t.tag){case 26:Pr(t,i,s),t.flags&rl&&t.memoizedState!==null&&kS(s,Xi,t.memoizedState,t.memoizedProps);break;case 5:Pr(t,i,s);break;case 3:case 4:var l=Xi;Xi=nu(t.stateNode.containerInfo),Pr(t,i,s),Xi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,Pr(t,i,s),rl=l):Pr(t,i,s));break;default:Pr(t,i,s)}}function g_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ol(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Vn=l,x_(l,t)}g_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)__(t),t=t.sibling}function __(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&is(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,jc(t)):ol(t);break;default:ol(t)}}function jc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Vn=l,x_(l,t)}g_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:is(8,i,i.return),jc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,jc(i));break;default:jc(i)}t=t.sibling}}function x_(t,i){for(;Vn!==null;){var s=Vn;switch(s.tag){case 0:case 11:case 15:is(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ko(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Vn=l;else e:for(s=t;Vn!==null;){l=Vn;var f=l.sibling,h=l.return;if(l_(l),l===s){Vn=null;break e}if(f!==null){f.return=h,Vn=f;break e}Vn=h}}}var sS={getCacheForType:function(t){var i=Zn(Rn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Zn(Rn).controller.signal}},rS=typeof WeakMap=="function"?WeakMap:Map,Gt=0,nn=null,Et=null,At=0,Wt=0,Ei=null,as=!1,zr=!1,Gd=!1,Aa=0,gn=0,ss=0,qs=0,Vd=0,Ti=0,Ir=0,ll=null,di=null,jd=!1,kc=0,v_=0,Xc=1/0,Wc=null,rs=null,Ln=0,os=null,Fr=null,Ra=0,kd=0,Xd=null,b_=null,cl=0,Wd=null;function Ai(){return(Gt&2)!==0&&At!==0?At&-At:I.T!==null?Qd():ct()}function y_(){if(Ti===0)if((At&536870912)===0||Ut){var t=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),Ti=t}else Ti=536870912;return t=Si.current,t!==null&&(t.flags|=32),Ti}function hi(t,i,s){(t===nn&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Br(t,0),ls(t,At,Ti,!1)),gt(t,s),((Gt&2)===0||t!==nn)&&(t===nn&&((Gt&2)===0&&(qs|=s),gn===4&&ls(t,At,Ti,!1)),sa(t))}function S_(t,i,s){if((Gt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Be(t,i),f=l?cS(t,i):Yd(t,i,!0),h=l;do{if(f===0){zr&&!l&&ls(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!oS(s)){f=Yd(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var A=t;f=ll;var F=A.current.memoizedState.isDehydrated;if(F&&(Br(A,v).flags|=256),v=Yd(A,v,!1),v!==2){if(Gd&&!F){A.errorRecoveryDisabledLanes|=h,qs|=h,f=4;break e}h=di,di=f,h!==null&&(di===null?di=h:di.push.apply(di,h))}f=v}if(h=!1,f!==2)continue}}if(f===1){Br(t,0),ls(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ls(l,i,Ti,!as);break e;case 2:di=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=kc+300-E(),10<f)){if(ls(l,i,Ti,!as),ge(l,0,!0)!==0)break e;Ra=i,l.timeoutHandle=J_(M_.bind(null,l,s,di,Wc,jd,i,Ti,qs,Ir,as,h,"Throttled",-0,0),f);break e}M_(l,s,di,Wc,jd,i,Ti,qs,Ir,as,h,null,-0,0)}}break}while(!0);sa(t)}function M_(t,i,s,l,f,h,v,A,F,J,de,xe,te,re){if(t.timeoutHandle=-1,xe=i.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},m_(i,h,xe);var Xe=(h&62914560)===h?kc-E():(h&4194048)===h?v_-E():0;if(Xe=XS(xe,Xe),Xe!==null){Ra=h,t.cancelPendingCommit=Xe(O_.bind(null,t,i,h,s,l,f,v,A,F,de,xe,null,te,re)),ls(t,h,v,!J);return}}O_(t,i,h,s,l,f,v,A,F)}function oS(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!bi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ls(t,i,s,l){i&=~Vd,i&=~qs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-je(f),v=1<<h;l[h]=-1,f&=~v}s!==0&&An(t,s,i)}function qc(){return(Gt&6)===0?(ul(0),!1):!0}function qd(){if(Et!==null){if(Wt===0)var t=Et.return;else t=Et,ga=Fs=null,cd(t),Cr=null,Wo=0,t=Et;for(;t!==null;)e_(t.alternate,t),t=t.return;Et=null}}function Br(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,RS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ra=0,qd(),nn=t,Et=s=pa(t.current,null),At=i,Wt=0,Ei=null,as=!1,zr=Be(t,i),Gd=!1,Ir=Ti=Vd=qs=ss=gn=0,di=ll=null,jd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-je(l),h=1<<f;i|=t[f],l&=~h}return Aa=i,pc(),s}function E_(t,i){_t=null,I.H=el,i===wr||i===Sc?(i=Hm(),Wt=3):i===Kf?(i=Hm(),Wt=4):Wt=i===Td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ei=i,Et===null&&(gn=1,zc(t,Li(i,t.current)))}function T_(){var t=Si.current;return t===null?!0:(At&4194048)===At?Ii===null:(At&62914560)===At||(At&536870912)!==0?t===Ii:!1}function A_(){var t=I.H;return I.H=el,t===null?el:t}function R_(){var t=I.A;return I.A=sS,t}function Yc(){gn=4,as||(At&4194048)!==At&&Si.current!==null||(zr=!0),(ss&134217727)===0&&(qs&134217727)===0||nn===null||ls(nn,At,Ti,!1)}function Yd(t,i,s){var l=Gt;Gt|=2;var f=A_(),h=R_();(nn!==t||At!==i)&&(Wc=null,Br(t,i)),i=!1;var v=gn;e:do try{if(Wt!==0&&Et!==null){var A=Et,F=Ei;switch(Wt){case 8:qd(),v=6;break e;case 3:case 2:case 9:case 6:Si.current===null&&(i=!0);var J=Wt;if(Wt=0,Ei=null,Hr(t,A,F,J),s&&zr){v=0;break e}break;default:J=Wt,Wt=0,Ei=null,Hr(t,A,F,J)}}lS(),v=gn;break}catch(de){E_(t,de)}while(!0);return i&&t.shellSuspendCounter++,ga=Fs=null,Gt=l,I.H=f,I.A=h,Et===null&&(nn=null,At=0,pc()),v}function lS(){for(;Et!==null;)w_(Et)}function cS(t,i){var s=Gt;Gt|=2;var l=A_(),f=R_();nn!==t||At!==i?(Wc=null,Xc=E()+500,Br(t,i)):zr=Be(t,i);e:do try{if(Wt!==0&&Et!==null){i=Et;var h=Ei;t:switch(Wt){case 1:Wt=0,Ei=null,Hr(t,i,h,1);break;case 2:case 9:if(Fm(h)){Wt=0,Ei=null,C_(i);break}i=function(){Wt!==2&&Wt!==9||nn!==t||(Wt=7),sa(t)},h.then(i,i);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:Fm(h)?(Wt=0,Ei=null,C_(i)):(Wt=0,Ei=null,Hr(t,i,h,7));break;case 5:var v=null;switch(Et.tag){case 26:v=Et.memoizedState;case 5:case 27:var A=Et;if(v?px(v):A.stateNode.complete){Wt=0,Ei=null;var F=A.sibling;if(F!==null)Et=F;else{var J=A.return;J!==null?(Et=J,$c(J)):Et=null}break t}}Wt=0,Ei=null,Hr(t,i,h,5);break;case 6:Wt=0,Ei=null,Hr(t,i,h,6);break;case 8:qd(),gn=6;break e;default:throw Error(a(462))}}uS();break}catch(de){E_(t,de)}while(!0);return ga=Fs=null,I.H=l,I.A=f,Gt=s,Et!==null?0:(nn=null,At=0,pc(),gn)}function uS(){for(;Et!==null&&!nt();)w_(Et)}function w_(t){var i=Qg(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,i===null?$c(t):Et=i}function C_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Wg(s,i,i.pendingProps,i.type,void 0,At);break;case 11:i=Wg(s,i,i.pendingProps,i.type.render,i.ref,At);break;case 5:cd(i);default:e_(s,i),i=Et=Rm(i,Aa),i=Qg(s,i,Aa)}t.memoizedProps=t.pendingProps,i===null?$c(t):Et=i}function Hr(t,i,s,l){ga=Fs=null,cd(i),Cr=null,Wo=0;var f=i.return;try{if(Qy(t,f,i,s,At)){gn=1,zc(t,Li(s,t.current)),Et=null;return}}catch(h){if(f!==null)throw Et=f,h;gn=1,zc(t,Li(s,t.current)),Et=null;return}i.flags&32768?(Ut||l===1?t=!0:zr||(At&536870912)!==0?t=!1:(as=t=!0,(l===2||l===9||l===3||l===6)&&(l=Si.current,l!==null&&l.tag===13&&(l.flags|=16384))),D_(i,t)):$c(i)}function $c(t){var i=t;do{if((i.flags&32768)!==0){D_(i,as);return}t=i.return;var s=tS(i.alternate,i,Aa);if(s!==null){Et=s;return}if(i=i.sibling,i!==null){Et=i;return}Et=i=t}while(i!==null);gn===0&&(gn=5)}function D_(t,i){do{var s=nS(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);gn=6,Et=null}function O_(t,i,s,l,f,h,v,A,F){t.cancelPendingCommit=null;do Zc();while(Ln!==0);if((Gt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=zf,Pt(t,s,h,v,A,F),t===nn&&(Et=nn=null,At=0),Fr=i,os=t,Ra=s,kd=h,Xd=f,b_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pS(oe,function(){return z_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,f=q.p,q.p=2,v=Gt,Gt|=4;try{iS(t,i,s)}finally{Gt=v,q.p=f,I.T=l}}Ln=1,U_(),L_(),N_()}}function U_(){if(Ln===1){Ln=0;var t=os,i=Fr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var l=q.p;q.p=2;var f=Gt;Gt|=4;try{d_(i,t);var h=rh,v=xm(t.containerInfo),A=h.focusedElem,F=h.selectionRange;if(v!==A&&A&&A.ownerDocument&&_m(A.ownerDocument.documentElement,A)){if(F!==null&&Of(A)){var J=F.start,de=F.end;if(de===void 0&&(de=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(de,A.value.length);else{var xe=A.ownerDocument||document,te=xe&&xe.defaultView||window;if(te.getSelection){var re=te.getSelection(),Xe=A.textContent.length,st=Math.min(F.start,Xe),Jt=F.end===void 0?st:Math.min(F.end,Xe);!re.extend&&st>Jt&&(v=Jt,Jt=st,st=v);var X=gm(A,st),G=gm(A,Jt);if(X&&G&&(re.rangeCount!==1||re.anchorNode!==X.node||re.anchorOffset!==X.offset||re.focusNode!==G.node||re.focusOffset!==G.offset)){var Q=xe.createRange();Q.setStart(X.node,X.offset),re.removeAllRanges(),st>Jt?(re.addRange(Q),re.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),re.addRange(Q))}}}}for(xe=[],re=A;re=re.parentNode;)re.nodeType===1&&xe.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var pe=xe[A];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}lu=!!sh,rh=sh=null}finally{Gt=f,q.p=l,I.T=s}}t.current=i,Ln=2}}function L_(){if(Ln===2){Ln=0;var t=os,i=Fr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var l=q.p;q.p=2;var f=Gt;Gt|=4;try{o_(t,i.alternate,i)}finally{Gt=f,q.p=l,I.T=s}}Ln=3}}function N_(){if(Ln===4||Ln===3){Ln=0,D();var t=os,i=Fr,s=Ra,l=b_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,Fr=os=null,P_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(rs=null),vn(s),i=i.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(Se,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,f=q.p,q.p=2,I.T=null;try{for(var h=t.onRecoverableError,v=0;v<l.length;v++){var A=l[v];h(A.value,{componentStack:A.stack})}}finally{I.T=i,q.p=f}}(Ra&3)!==0&&Zc(),sa(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Wd?cl++:(cl=0,Wd=t):cl=0,ul(0)}}function P_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ko(i)))}function Zc(){return U_(),L_(),N_(),z_()}function z_(){if(Ln!==5)return!1;var t=os,i=kd;kd=0;var s=vn(Ra),l=I.T,f=q.p;try{q.p=32>s?32:s,I.T=null,s=Xd,Xd=null;var h=os,v=Ra;if(Ln=0,Fr=os=null,Ra=0,(Gt&6)!==0)throw Error(a(331));var A=Gt;if(Gt|=4,__(h.current),p_(h,h.current,v,s),Gt=A,ul(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(Se,h)}catch{}return!0}finally{q.p=f,I.T=l,P_(t,i)}}function I_(t,i,s){i=Li(s,i),i=Ed(t.stateNode,i,2),t=es(t,i,2),t!==null&&(gt(t,2),sa(t))}function qt(t,i,s){if(t.tag===3)I_(t,t,s);else for(;i!==null;){if(i.tag===3){I_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rs===null||!rs.has(l))){t=Li(s,t),s=Fg(2),l=es(i,s,2),l!==null&&(Bg(s,l,i,t),gt(l,2),sa(l));break}}i=i.return}}function $d(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new rS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Gd=!0,f.add(s),t=fS.bind(null,t,i,s),i.then(t,t))}function fS(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,nn===t&&(At&s)===s&&(gn===4||gn===3&&(At&62914560)===At&&300>E()-kc?(Gt&2)===0&&Br(t,0):Vd|=s,Ir===At&&(Ir=0)),sa(t)}function F_(t,i){i===0&&(i=Ht()),t=Ps(t,i),t!==null&&(gt(t,i),sa(t))}function dS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),F_(t,s)}function hS(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),F_(t,s)}function pS(t,i){return Ct(t,i)}var Kc=null,Gr=null,Zd=!1,Qc=!1,Kd=!1,cs=0;function sa(t){t!==Gr&&t.next===null&&(Gr===null?Kc=Gr=t:Gr=Gr.next=t),Qc=!0,Zd||(Zd=!0,gS())}function ul(t,i){if(!Kd&&Qc){Kd=!0;do for(var s=!1,l=Kc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var v=l.suspendedLanes,A=l.pingedLanes;h=(1<<31-je(42|t)+1)-1,h&=f&~(v&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,V_(l,h))}else h=At,h=ge(l,l===nn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Be(l,h)||(s=!0,V_(l,h));l=l.next}while(s);Kd=!1}}function mS(){B_()}function B_(){Qc=Zd=!1;var t=0;cs!==0&&AS()&&(t=cs);for(var i=E(),s=null,l=Kc;l!==null;){var f=l.next,h=H_(l,i);h===0?(l.next=null,s===null?Kc=f:s.next=f,f===null&&(Gr=s)):(s=l,(t!==0||(h&3)!==0)&&(Qc=!0)),l=f}Ln!==0&&Ln!==5||ul(t),cs!==0&&(cs=0)}function H_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var v=31-je(h),A=1<<v,F=f[v];F===-1?((A&s)===0||(A&l)!==0)&&(f[v]=lt(A,i)):F<=i&&(t.expiredLanes|=A),h&=~A}if(i=nn,s=At,s=ge(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&We(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Be(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&We(l),vn(s)){case 2:case 8:s=ye;break;case 32:s=oe;break;case 268435456:s=Ue;break;default:s=oe}return l=G_.bind(null,t),s=Ct(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&We(l),t.callbackPriority=2,t.callbackNode=null,2}function G_(t,i){if(Ln!==0&&Ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Zc()&&t.callbackNode!==s)return null;var l=At;return l=ge(t,t===nn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(S_(t,l,i),H_(t,E()),t.callbackNode!=null&&t.callbackNode===s?G_.bind(null,t):null)}function V_(t,i){if(Zc())return null;S_(t,i,!0)}function gS(){wS(function(){(Gt&6)!==0?Ct(he,mS):B_()})}function Qd(){if(cs===0){var t=Ar;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),cs=t}return cs}function j_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rc(""+t)}function k_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function _S(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=j_((f[Xt]||null).action),v=l.submitter;v&&(i=(i=v[Xt]||null)?j_(i.formAction):v.getAttribute("formAction"),i!==null&&(h=i,v=null));var A=new uc("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(cs!==0){var F=v?k_(f,v):new FormData(f);xd(s,{pending:!0,data:F,method:f.method,action:h},null,F)}}else typeof h=="function"&&(A.preventDefault(),F=v?k_(f,v):new FormData(f),xd(s,{pending:!0,data:F,method:f.method,action:h},h,F))},currentTarget:f}]})}}for(var Jd=0;Jd<Pf.length;Jd++){var eh=Pf[Jd],xS=eh.toLowerCase(),vS=eh[0].toUpperCase()+eh.slice(1);ki(xS,"on"+vS)}ki(ym,"onAnimationEnd"),ki(Sm,"onAnimationIteration"),ki(Mm,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(Py,"onTransitionRun"),ki(zy,"onTransitionStart"),ki(Iy,"onTransitionCancel"),ki(Em,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),Le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Le("onBeforeInput",["compositionend","keypress","textInput","paste"]),Le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function X_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var v=l.length-1;0<=v;v--){var A=l[v],F=A.instance,J=A.currentTarget;if(A=A.listener,F!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=J;try{h(f)}catch(de){hc(de)}f.currentTarget=null,h=F}else for(v=0;v<l.length;v++){if(A=l[v],F=A.instance,J=A.currentTarget,A=A.listener,F!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=J;try{h(f)}catch(de){hc(de)}f.currentTarget=null,h=F}}}}function Tt(t,i){var s=i[vi];s===void 0&&(s=i[vi]=new Set);var l=t+"__bubble";s.has(l)||(W_(i,t,2,!1),s.add(l))}function th(t,i,s){var l=0;i&&(l|=4),W_(s,t,l,i)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function nh(t){if(!t[Jc]){t[Jc]=!0,Y.forEach(function(s){s!=="selectionchange"&&(bS.has(s)||th(s,!1,t),th(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Jc]||(i[Jc]=!0,th("selectionchange",!1,i))}}function W_(t,i,s,l){switch(yx(i)){case 2:var f=YS;break;case 8:f=$S;break;default:f=_h}s=f.bind(null,i,s,t),f=void 0,!Sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function ih(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var A=l.stateNode.containerInfo;if(A===f)break;if(v===4)for(v=l.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;A!==null;){if(v=Xa(A),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){l=h=v;continue e}A=A.parentNode}}l=l.return}K0(function(){var J=h,de=bf(s),xe=[];e:{var te=Tm.get(t);if(te!==void 0){var re=uc,Xe=t;switch(t){case"keypress":if(lc(s)===0)break e;case"keydown":case"keyup":re=hy;break;case"focusin":Xe="focus",re=Af;break;case"focusout":Xe="blur",re=Af;break;case"beforeblur":case"afterblur":re=Af;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=gy;break;case ym:case Sm:case Mm:re=ay;break;case Em:re=xy;break;case"scroll":case"scrollend":re=Jb;break;case"wheel":re=by;break;case"copy":case"cut":case"paste":re=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=nm;break;case"toggle":case"beforetoggle":re=Sy}var st=(i&4)!==0,Jt=!st&&(t==="scroll"||t==="scrollend"),X=st?te!==null?te+"Capture":null:te;st=[];for(var G=J,Q;G!==null;){var pe=G;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||X===null||(pe=Lo(G,X),pe!=null&&st.push(dl(G,pe,Q))),Jt)break;G=G.return}0<st.length&&(te=new re(te,Xe,null,s,de),xe.push({event:te,listeners:st}))}}if((i&7)===0){e:{if(te=t==="mouseover"||t==="pointerover",re=t==="mouseout"||t==="pointerout",te&&s!==vf&&(Xe=s.relatedTarget||s.fromElement)&&(Xa(Xe)||Xe[ii]))break e;if((re||te)&&(te=de.window===de?de:(te=de.ownerDocument)?te.defaultView||te.parentWindow:window,re?(Xe=s.relatedTarget||s.toElement,re=J,Xe=Xe?Xa(Xe):null,Xe!==null&&(Jt=c(Xe),st=Xe.tag,Xe!==Jt||st!==5&&st!==27&&st!==6)&&(Xe=null)):(re=null,Xe=J),re!==Xe)){if(st=em,pe="onMouseLeave",X="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(st=nm,pe="onPointerLeave",X="onPointerEnter",G="pointer"),Jt=re==null?te:k(re),Q=Xe==null?te:k(Xe),te=new st(pe,G+"leave",re,s,de),te.target=Jt,te.relatedTarget=Q,pe=null,Xa(de)===J&&(st=new st(X,G+"enter",Xe,s,de),st.target=Q,st.relatedTarget=Jt,pe=st),Jt=pe,re&&Xe)t:{for(st=yS,X=re,G=Xe,Q=0,pe=X;pe;pe=st(pe))Q++;pe=0;for(var tt=G;tt;tt=st(tt))pe++;for(;0<Q-pe;)X=st(X),Q--;for(;0<pe-Q;)G=st(G),pe--;for(;Q--;){if(X===G||G!==null&&X===G.alternate){st=X;break t}X=st(X),G=st(G)}st=null}else st=null;re!==null&&q_(xe,te,re,st,!1),Xe!==null&&Jt!==null&&q_(xe,Jt,Xe,st,!0)}}e:{if(te=J?k(J):window,re=te.nodeName&&te.nodeName.toLowerCase(),re==="select"||re==="input"&&te.type==="file")var It=um;else if(lm(te))if(fm)It=Uy;else{It=Dy;var $e=Cy}else re=te.nodeName,!re||re.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?J&&xf(J.elementType)&&(It=um):It=Oy;if(It&&(It=It(t,J))){cm(xe,It,s,de);break e}$e&&$e(t,te,J),t==="focusout"&&J&&te.type==="number"&&J.memoizedProps.value!=null&&Hn(te,"number",te.value)}switch($e=J?k(J):window,t){case"focusin":(lm($e)||$e.contentEditable==="true")&&(xr=$e,Uf=J,Go=null);break;case"focusout":Go=Uf=xr=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,vm(xe,s,de);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":vm(xe,s,de)}var bt;if(wf)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else _r?rm(t,s)&&(Rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Rt="onCompositionStart");Rt&&(im&&s.locale!=="ko"&&(_r||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&_r&&(bt=Q0()):(qa=de,Mf="value"in qa?qa.value:qa.textContent,_r=!0)),$e=eu(J,Rt),0<$e.length&&(Rt=new tm(Rt,t,null,s,de),xe.push({event:Rt,listeners:$e}),bt?Rt.data=bt:(bt=om(s),bt!==null&&(Rt.data=bt)))),(bt=Ey?Ty(t,s):Ay(t,s))&&(Rt=eu(J,"onBeforeInput"),0<Rt.length&&($e=new tm("onBeforeInput","beforeinput",null,s,de),xe.push({event:$e,listeners:Rt}),$e.data=bt)),_S(xe,t,J,s,de)}X_(xe,i)})}function dl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function eu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Lo(t,s),f!=null&&l.unshift(dl(t,f,h)),f=Lo(t,i),f!=null&&l.push(dl(t,f,h))),t.tag===3)return l;t=t.return}return[]}function yS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function q_(t,i,s,l,f){for(var h=i._reactName,v=[];s!==null&&s!==l;){var A=s,F=A.alternate,J=A.stateNode;if(A=A.tag,F!==null&&F===l)break;A!==5&&A!==26&&A!==27||J===null||(F=J,f?(J=Lo(s,h),J!=null&&v.unshift(dl(s,J,F))):f||(J=Lo(s,h),J!=null&&v.push(dl(s,J,F)))),s=s.return}v.length!==0&&t.push({event:i,listeners:v})}var SS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function Y_(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(MS,"")}function $_(t,i){return i=Y_(i),Y_(t)===i}function Qt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ta(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ta(t,""+l);break;case"className":Nt(t,"class",l);break;case"tabIndex":Nt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(t,s,l);break;case"style":$0(t,l,h);break;case"data":if(i!=="object"){Nt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=rc(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Qt(t,i,"name",f.name,f,null),Qt(t,i,"formEncType",f.formEncType,f,null),Qt(t,i,"formMethod",f.formMethod,f,null),Qt(t,i,"formTarget",f.formTarget,f,null)):(Qt(t,i,"encType",f.encType,f,null),Qt(t,i,"method",f.method,f,null),Qt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=rc(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=da);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=rc(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),vt(t,"popover",l);break;case"xlinkActuate":zt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":zt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":zt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":zt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":zt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":zt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":zt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":zt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":zt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":vt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Kb.get(s)||s,vt(t,s,l))}}function ah(t,i,s,l,f,h){switch(s){case"style":$0(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ta(t,l):(typeof l=="number"||typeof l=="bigint")&&ta(t,""+l);break;case"onScroll":l!=null&&Tt("scroll",t);break;case"onScrollEnd":l!=null&&Tt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!we.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[Xt]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):vt(t,s,l)}}}function Qn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var v=s[h];if(v!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(t,i,h,v,s,null)}}f&&Qt(t,i,"srcSet",s.srcSet,s,null),l&&Qt(t,i,"src",s.src,s,null);return;case"input":Tt("invalid",t);var A=h=v=f=null,F=null,J=null;for(l in s)if(s.hasOwnProperty(l)){var de=s[l];if(de!=null)switch(l){case"name":f=de;break;case"type":v=de;break;case"checked":F=de;break;case"defaultChecked":J=de;break;case"value":h=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:Qt(t,i,l,de,s,null)}}rn(t,h,A,F,J,v,f,!1);return;case"select":Tt("invalid",t),l=v=h=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":h=A;break;case"defaultValue":v=A;break;case"multiple":l=A;default:Qt(t,i,f,A,s,null)}i=h,s=v,t.multiple=!!l,i!=null?Un(t,!!l,i,!1):s!=null&&Un(t,!!l,s,!0);return;case"textarea":Tt("invalid",t),h=f=l=null;for(v in s)if(s.hasOwnProperty(v)&&(A=s[v],A!=null))switch(v){case"value":l=A;break;case"defaultValue":f=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Qt(t,i,v,A,s,null)}Yn(t,l,f,h);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(l=s[F],l!=null))switch(F){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qt(t,i,F,l,s,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(l=0;l<fl.length;l++)Tt(fl[l],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in s)if(s.hasOwnProperty(J)&&(l=s[J],l!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Qt(t,i,J,l,s,null)}return;default:if(xf(i)){for(de in s)s.hasOwnProperty(de)&&(l=s[de],l!==void 0&&ah(t,i,de,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Qt(t,i,A,l,s,null))}function ES(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,v=null,A=null,F=null,J=null,de=null;for(re in s){var xe=s[re];if(s.hasOwnProperty(re)&&xe!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":F=xe;default:l.hasOwnProperty(re)||Qt(t,i,re,null,l,xe)}}for(var te in l){var re=l[te];if(xe=s[te],l.hasOwnProperty(te)&&(re!=null||xe!=null))switch(te){case"type":h=re;break;case"name":f=re;break;case"checked":J=re;break;case"defaultChecked":de=re;break;case"value":v=re;break;case"defaultValue":A=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:re!==xe&&Qt(t,i,te,re,l,xe)}}ua(t,v,A,F,J,de,h,f);return;case"select":re=v=A=te=null;for(h in s)if(F=s[h],s.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":re=F;default:l.hasOwnProperty(h)||Qt(t,i,h,null,l,F)}for(f in l)if(h=l[f],F=s[f],l.hasOwnProperty(f)&&(h!=null||F!=null))switch(f){case"value":te=h;break;case"defaultValue":A=h;break;case"multiple":v=h;default:h!==F&&Qt(t,i,f,h,l,F)}i=A,s=v,l=re,te!=null?Un(t,!!s,te,!1):!!l!=!!s&&(i!=null?Un(t,!!s,i,!0):Un(t,!!s,s?[]:"",!1));return;case"textarea":re=te=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Qt(t,i,A,null,l,f)}for(v in l)if(f=l[v],h=s[v],l.hasOwnProperty(v)&&(f!=null||h!=null))switch(v){case"value":te=f;break;case"defaultValue":re=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&Qt(t,i,v,f,l,h)}Gn(t,te,re);return;case"option":for(var Xe in s)if(te=s[Xe],s.hasOwnProperty(Xe)&&te!=null&&!l.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:Qt(t,i,Xe,null,l,te)}for(F in l)if(te=l[F],re=s[F],l.hasOwnProperty(F)&&te!==re&&(te!=null||re!=null))switch(F){case"selected":t.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:Qt(t,i,F,te,l,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in s)te=s[st],s.hasOwnProperty(st)&&te!=null&&!l.hasOwnProperty(st)&&Qt(t,i,st,null,l,te);for(J in l)if(te=l[J],re=s[J],l.hasOwnProperty(J)&&te!==re&&(te!=null||re!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(a(137,i));break;default:Qt(t,i,J,te,l,re)}return;default:if(xf(i)){for(var Jt in s)te=s[Jt],s.hasOwnProperty(Jt)&&te!==void 0&&!l.hasOwnProperty(Jt)&&ah(t,i,Jt,void 0,l,te);for(de in l)te=l[de],re=s[de],!l.hasOwnProperty(de)||te===re||te===void 0&&re===void 0||ah(t,i,de,te,l,re);return}}for(var X in s)te=s[X],s.hasOwnProperty(X)&&te!=null&&!l.hasOwnProperty(X)&&Qt(t,i,X,null,l,te);for(xe in l)te=l[xe],re=s[xe],!l.hasOwnProperty(xe)||te===re||te==null&&re==null||Qt(t,i,xe,te,l,re)}function Z_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,v=f.initiatorType,A=f.duration;if(h&&A&&Z_(v)){for(v=0,A=f.responseEnd,l+=1;l<s.length;l++){var F=s[l],J=F.startTime;if(J>A)break;var de=F.transferSize,xe=F.initiatorType;de&&Z_(xe)&&(F=F.responseEnd,v+=de*(F<A?1:(A-J)/(F-J)))}if(--l,i+=8*(h+v)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sh=null,rh=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function K_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function oh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function AS(){var t=window.event;return t&&t.type==="popstate"?t===lh?!1:(lh=t,!0):(lh=null,!1)}var J_=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,ex=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof ex<"u"?function(t){return ex.resolve(null).then(t).catch(CS)}:J_;function CS(t){setTimeout(function(){throw t})}function us(t){return t==="head"}function tx(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Xr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")hl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,hl(s);for(var h=s.firstChild;h;){var v=h.nextSibling,A=h.nodeName;h[ca]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=v}}else s==="body"&&hl(t.ownerDocument.body);s=f}while(s);Xr(i)}function nx(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function ch(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ch(s),Uo(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function DS(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ca])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Fi(t.nextSibling),t===null)break}return null}function OS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Fi(t.nextSibling),t===null))return null;return t}function ix(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Fi(t.nextSibling),t===null))return null;return t}function uh(t){return t.data==="$?"||t.data==="$~"}function fh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function US(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var dh=null;function ax(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Fi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function sx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function rx(t,i,s){switch(i=tu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function hl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Uo(t)}var Bi=new Map,ox=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=q.d;q.d={f:LS,r:NS,D:PS,C:zS,L:IS,m:FS,X:HS,S:BS,M:GS};function LS(){var t=wa.f(),i=qc();return t||i}function NS(t){var i=R(t);i!==null&&i.tag===5&&i.type==="form"?Eg(i):wa.r(t)}var Vr=typeof document>"u"?null:document;function lx(t,i,s){var l=Vr;if(l&&typeof i=="string"&&i){var f=sn(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),ox.has(f)||(ox.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Qn(i,"link",t),ee(i),l.head.appendChild(i)))}}function PS(t){wa.D(t),lx("dns-prefetch",t,null)}function zS(t,i){wa.C(t,i),lx("preconnect",t,i)}function IS(t,i,s){wa.L(t,i,s);var l=Vr;if(l&&t&&i){var f='link[rel="preload"][as="'+sn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+sn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+sn(s.imageSizes)+'"]')):f+='[href="'+sn(t)+'"]';var h=f;switch(i){case"style":h=jr(t);break;case"script":h=kr(t)}Bi.has(h)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Bi.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(pl(h))||i==="script"&&l.querySelector(ml(h))||(i=l.createElement("link"),Qn(i,"link",t),ee(i),l.head.appendChild(i)))}}function FS(t,i){wa.m(t,i);var s=Vr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+sn(l)+'"][href="'+sn(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=kr(t)}if(!Bi.has(h)&&(t=_({rel:"modulepreload",href:t},i),Bi.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ml(h)))return}l=s.createElement("link"),Qn(l,"link",t),ee(l),s.head.appendChild(l)}}}function BS(t,i,s){wa.S(t,i,s);var l=Vr;if(l&&t){var f=ae(l).hoistableStyles,h=jr(t);i=i||"default";var v=f.get(h);if(!v){var A={loading:0,preload:null};if(v=l.querySelector(pl(h)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Bi.get(h))&&hh(t,s);var F=v=l.createElement("link");ee(F),Qn(F,"link",t),F._p=new Promise(function(J,de){F.onload=J,F.onerror=de}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,iu(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:A},f.set(h,v)}}}function HS(t,i){wa.X(t,i);var s=Vr;if(s&&t){var l=ae(s).hoistableScripts,f=kr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0},i),(i=Bi.get(f))&&ph(t,i),h=s.createElement("script"),ee(h),Qn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function GS(t,i){wa.M(t,i);var s=Vr;if(s&&t){var l=ae(s).hoistableScripts,f=kr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0,type:"module"},i),(i=Bi.get(f))&&ph(t,i),h=s.createElement("script"),ee(h),Qn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function cx(t,i,s,l){var f=(f=ne.current)?nu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=jr(s.href),s=ae(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=jr(s.href);var h=ae(f).hoistableStyles,v=h.get(t);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,v),(h=f.querySelector(pl(t)))&&!h._p&&(v.instance=h,v.state.loading=5),Bi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bi.set(t,s),h||VS(f,t,s,v.state))),i&&l===null)throw Error(a(528,""));return v}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=kr(s),s=ae(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function jr(t){return'href="'+sn(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function ux(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function VS(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Qn(i,"link",s),ee(i),t.head.appendChild(i))}function kr(t){return'[src="'+sn(t)+'"]'}function ml(t){return"script[async]"+t}function fx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+sn(s.href)+'"]');if(l)return i.instance=l,ee(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ee(l),Qn(l,"style",f),iu(l,s.precedence,t),i.instance=l;case"stylesheet":f=jr(s.href);var h=t.querySelector(pl(f));if(h)return i.state.loading|=4,i.instance=h,ee(h),h;l=ux(s),(f=Bi.get(f))&&hh(l,f),h=(t.ownerDocument||t).createElement("link"),ee(h);var v=h;return v._p=new Promise(function(A,F){v.onload=A,v.onerror=F}),Qn(h,"link",l),i.state.loading|=4,iu(h,s.precedence,t),i.instance=h;case"script":return h=kr(s.src),(f=t.querySelector(ml(h)))?(i.instance=f,ee(f),f):(l=s,(f=Bi.get(h))&&(l=_({},s),ph(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),ee(f),Qn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,iu(l,s.precedence,t));return i.instance}function iu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,v=0;v<l.length;v++){var A=l[v];if(A.dataset.precedence===i)h=A;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function hh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ph(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var au=null;function dx(t,i,s){if(au===null){var l=new Map,f=au=new Map;f.set(s,l)}else f=au,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[ca]||h[kt]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(i)||"";v=t+v;var A=l.get(v);A?A.push(h):l.set(v,[h])}}return l}function hx(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function jS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function px(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function kS(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=jr(l.href),h=i.querySelector(pl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=su.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,ee(h);return}h=i.ownerDocument||i,l=ux(l),(f=Bi.get(f))&&hh(l,f),h=h.createElement("link"),ee(h);var v=h;v._p=new Promise(function(A,F){v.onload=A,v.onerror=F}),Qn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=su.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var mh=0;function XS(t,i){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&mh===0&&(mh=62500*TS());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>mh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function ou(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,i.forEach(WS,t),ru=null,su.call(t))}function WS(t,i){if(!(i.state.loading&4)){var s=ru.get(t);if(s)var l=s.get(null);else{s=new Map,ru.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var v=f[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(s.set(v.dataset.precedence,v),l=v)}l&&s.set(null,l)}f=i.instance,v=f.getAttribute("data-precedence"),h=s.get(v)||l,h===l&&s.set(null,f),s.set(v,f),this.count++,l=su.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var gl={$$typeof:O,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function qS(t,i,s,l,f,h,v,A,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.hiddenUpdates=ke(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function mx(t,i,s,l,f,h,v,A,F,J,de,xe){return t=new qS(t,i,s,v,F,J,de,xe,A),i=1,h===!0&&(i|=24),h=yi(3,null,null,i),t.current=h,h.stateNode=t,i=Yf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},Qf(h),t}function gx(t){return t?(t=yr,t):yr}function _x(t,i,s,l,f,h){f=gx(f),l.context===null?l.context=f:l.pendingContext=f,l=Ja(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=es(t,l,i),s!==null&&(hi(s,t,i),Yo(s,t,i))}function xx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function gh(t,i){xx(t,i),(t=t.alternate)&&xx(t,i)}function vx(t){if(t.tag===13||t.tag===31){var i=Ps(t,67108864);i!==null&&hi(i,t,67108864),gh(t,67108864)}}function bx(t){if(t.tag===13||t.tag===31){var i=Ai();i=Mt(i);var s=Ps(t,i);s!==null&&hi(s,t,i),gh(t,i)}}var lu=!0;function YS(t,i,s,l){var f=I.T;I.T=null;var h=q.p;try{q.p=2,_h(t,i,s,l)}finally{q.p=h,I.T=f}}function $S(t,i,s,l){var f=I.T;I.T=null;var h=q.p;try{q.p=8,_h(t,i,s,l)}finally{q.p=h,I.T=f}}function _h(t,i,s,l){if(lu){var f=xh(l);if(f===null)ih(t,i,l,cu,s),Sx(t,l);else if(KS(f,t,i,s,l))l.stopPropagation();else if(Sx(t,l),i&4&&-1<ZS.indexOf(t)){for(;f!==null;){var h=R(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=Me(h.pendingLanes);if(v!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var F=1<<31-je(v);A.entanglements[1]|=F,v&=~F}sa(h),(Gt&6)===0&&(Xc=E()+500,ul(0))}}break;case 31:case 13:A=Ps(h,2),A!==null&&hi(A,h,2),qc(),gh(h,2)}if(h=xh(l),h===null&&ih(t,i,l,cu,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else ih(t,i,l,null,s)}}function xh(t){return t=bf(t),vh(t)}var cu=null;function vh(t){if(cu=null,t=Xa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return cu=t,null}function yx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case he:return 2;case ye:return 8;case oe:case Ke:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var bh=!1,fs=null,ds=null,hs=null,_l=new Map,xl=new Map,ps=[],ZS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sx(t,i){switch(t){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(i.pointerId)}}function vl(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=R(i),i!==null&&vx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function KS(t,i,s,l,f){switch(i){case"focusin":return fs=vl(fs,t,i,s,l,f),!0;case"dragenter":return ds=vl(ds,t,i,s,l,f),!0;case"mouseover":return hs=vl(hs,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return _l.set(h,vl(_l.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,xl.set(h,vl(xl.get(h)||null,t,i,s,l,f)),!0}return!1}function Mx(t){var i=Xa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,xt(t.priority,function(){bx(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,xt(t.priority,function(){bx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=xh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);vf=l,s.target.dispatchEvent(l),vf=null}else return i=R(s),i!==null&&vx(i),t.blockedOn=s,!1;i.shift()}return!0}function Ex(t,i,s){uu(t)&&s.delete(i)}function QS(){bh=!1,fs!==null&&uu(fs)&&(fs=null),ds!==null&&uu(ds)&&(ds=null),hs!==null&&uu(hs)&&(hs=null),_l.forEach(Ex),xl.forEach(Ex)}function fu(t,i){t.blockedOn===i&&(t.blockedOn=null,bh||(bh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,QS)))}var du=null;function Tx(t){du!==t&&(du=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){du===t&&(du=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(vh(l||s)===null)continue;break}var h=R(s);h!==null&&(t.splice(i,3),i-=3,xd(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Xr(t){function i(F){return fu(F,t)}fs!==null&&fu(fs,t),ds!==null&&fu(ds,t),hs!==null&&fu(hs,t),_l.forEach(i),xl.forEach(i);for(var s=0;s<ps.length;s++){var l=ps[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ps.length&&(s=ps[0],s.blockedOn===null);)Mx(s),s.blockedOn===null&&ps.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],v=f[Xt]||null;if(typeof h=="function")v||Tx(s);else if(v){var A=null;if(h&&h.hasAttribute("formAction")){if(f=h,v=h[Xt]||null)A=v.formAction;else if(vh(f)!==null)continue}else A=v.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Tx(s)}}}function Ax(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return f=v})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function yh(t){this._internalRoot=t}hu.prototype.render=yh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Ai();_x(s,l,t,i,null,null)},hu.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;_x(t.current,2,null,t,null,null),qc(),i[ii]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var i=ct();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ps.length&&i!==0&&i<ps[s].priority;s++);ps.splice(s,0,t),s===0&&Mx(t)}};var Rx=e.version;if(Rx!=="19.2.1")throw Error(a(527,Rx,"19.2.1"));q.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var JS={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Se=pu.inject(JS),Ee=pu}catch{}}return Sl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=Ng,h=Pg,v=zg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),i=mx(t,1,!1,null,null,s,l,null,f,h,v,Ax),t[ii]=i.current,nh(t),new yh(i)},Sl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",h=Ng,v=Pg,A=zg,F=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(v=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(F=s.formState)),i=mx(t,1,!0,i,s??null,l,f,F,h,v,A,Ax),i.context=gx(null),s=i.current,l=Ai(),l=Mt(l),f=Ja(l),f.callback=null,es(s,f,l),s=l,i.current.lanes=s,gt(i,s),sa(i),t[ii]=i.current,nh(t),new hu(i)},Sl.version="19.2.1",Sl}var Kx;function $1(){if(Kx)return Oh.exports;Kx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Oh.exports=Y1(),Oh.exports}var Z1=$1();const K1=yb(Z1);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const N0="181",Q1=0,Qx=1,J1=2,Sb=1,e2=2,Pa=3,Cs=0,mi=1,za=2,Ba=0,lo=1,Jx=2,ev=3,tv=4,t2=5,nr=100,n2=101,i2=102,a2=103,s2=104,r2=200,o2=201,l2=202,c2=203,Mp=204,Ep=205,u2=206,f2=207,d2=208,h2=209,p2=210,m2=211,g2=212,_2=213,x2=214,Tp=0,Ap=1,Rp=2,_o=3,wp=4,Cp=5,Dp=6,Op=7,Mb=0,v2=1,b2=2,As=0,y2=1,S2=2,M2=3,E2=4,T2=5,A2=6,R2=7,Eb=300,xo=301,vo=302,Up=303,Lp=304,pf=306,Np=1e3,oi=1001,Pp=1002,Di=1003,w2=1004,mu=1005,Jn=1006,Ph=1007,sr=1008,Va=1009,Tb=1010,Ab=1011,Gl=1012,P0=1013,dr=1014,Ia=1015,wo=1016,z0=1017,I0=1018,Vl=1020,Rb=35902,wb=35899,Cb=1021,Db=1022,Ki=1023,jl=1026,kl=1027,Ob=1028,F0=1029,B0=1030,H0=1031,G0=1033,Fu=33776,Bu=33777,Hu=33778,Gu=33779,zp=35840,Ip=35841,Fp=35842,Bp=35843,Hp=36196,Gp=37492,Vp=37496,jp=37808,kp=37809,Xp=37810,Wp=37811,qp=37812,Yp=37813,$p=37814,Zp=37815,Kp=37816,Qp=37817,Jp=37818,e0=37819,t0=37820,n0=37821,i0=36492,a0=36494,s0=36495,r0=36283,o0=36284,l0=36285,c0=36286,C2=3200,D2=3201,O2=0,U2=1,Ms="",ri="srgb",bo="srgb-linear",Qu="linear",en="srgb",Wr=7680,nv=519,L2=512,N2=513,P2=514,Ub=515,z2=516,I2=517,F2=518,B2=519,iv=35044,av="300 es",oa=2e3,Ju=2001;function Lb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function H2(){const r=Xl("canvas");return r.style.display="block",r}const sv={};function rv(...r){const e="THREE."+r.shift();console.log(e,...r)}function ht(...r){const e="THREE."+r.shift();console.warn(e,...r)}function _n(...r){const e="THREE."+r.shift();console.error(e,...r)}function Wl(...r){const e=r.join(" ");e in sv||(sv[e]=!0,ht(...r))}function G2(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=Math.PI/180,u0=180/Math.PI;function tc(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[n&63|128]+ti[n>>8&255]+"-"+ti[n>>16&255]+ti[n>>24&255]+ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]).toLowerCase()}function Lt(r,e,n){return Math.max(e,Math.min(n,r))}function V2(r,e){return(r%e+e)%e}function Ih(r,e,n){return(1-n)*r+n*e}function Ml(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class $t{constructor(e=0,n=0){$t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Lt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nc{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],x=c[u+0],y=c[u+1],M=c[u+2],T=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=y,e[n+2]=M,e[n+3]=T;return}if(_!==T||m!==x||p!==y||g!==M){let S=m*x+p*y+g*M+_*T;S<0&&(x=-x,y=-y,M=-M,T=-T,S=-S);let b=1-d;if(S<.9995){const U=Math.acos(S),O=Math.sin(U);b=Math.sin(b*U)/O,d=Math.sin(d*U)/O,m=m*b+x*d,p=p*b+y*d,g=g*b+M*d,_=_*b+T*d}else{m=m*b+x*d,p=p*b+y*d,g=g*b+M*d,_=_*b+T*d;const U=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=U,p*=U,g*=U,_*=U}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],x=c[u+1],y=c[u+2],M=c[u+3];return e[n]=d*M+g*_+m*y-p*x,e[n+1]=m*M+g*x+p*_-d*y,e[n+2]=p*M+g*y+d*x-m*_,e[n+3]=g*M-d*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),_=d(c/2),x=m(a/2),y=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=x*g*_+p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_-x*y*M;break;case"YXZ":this._x=x*g*_+p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_+x*y*M;break;case"ZXY":this._x=x*g*_-p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_-x*y*M;break;case"ZYX":this._x=x*g*_-p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_+x*y*M;break;case"YZX":this._x=x*g*_+p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_-x*y*M;break;case"XZY":this._x=x*g*_-p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_+x*y*M;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],x=a+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(a>d&&a>_){const y=2*Math.sqrt(1+a-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-a-_);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-d);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,a=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ov.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ov.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-d*g,this.y=a+m*g+d*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this.z=Lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this.z=Lt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Lt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new se,ov=new nc;class yt{constructor(e,n,a,o,c,u,d,m,p){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],x=a[2],y=a[5],M=a[8],T=o[0],S=o[3],b=o[6],U=o[1],O=o[4],z=o[7],j=o[2],L=o[5],P=o[8];return c[0]=u*T+d*U+m*j,c[3]=u*S+d*O+m*L,c[6]=u*b+d*z+m*P,c[1]=p*T+g*U+_*j,c[4]=p*S+g*O+_*L,c[7]=p*b+g*z+_*P,c[2]=x*T+y*U+M*j,c[5]=x*S+y*O+M*L,c[8]=x*b+y*z+M*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*u-d*p,x=d*m-g*c,y=p*c-u*m,M=n*_+a*x+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(o*p-g*a)*T,e[2]=(d*a-o*u)*T,e[3]=x*T,e[4]=(g*n-o*m)*T,e[5]=(o*c-d*n)*T,e[6]=y*T,e[7]=(a*m-p*n)*T,e[8]=(u*n-a*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Bh.makeScale(e,n)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new yt,lv=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j2(){const r={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===en&&(o.r=Ha(o.r),o.g=Ha(o.g),o.b=Ha(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===en&&(o.r=co(o.r),o.g=co(o.g),o.b=co(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ms?Qu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Wl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Wl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[bo]:{primaries:e,whitePoint:a,transfer:Qu,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:a,transfer:en,toXYZ:lv,fromXYZ:cv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Bt=j2();function Ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function co(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qr;class k2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{qr===void 0&&(qr=Xl("canvas")),qr.width=e.width,qr.height=e.height;const o=qr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=qr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ha(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ha(n[a]/255)*255):n[a]=Ha(n[a]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X2=0;class V0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=tc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Hh(o[u].image)):c.push(Hh(o[u]))}else c=Hh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?k2.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let W2=0;const Gh=new se;class Xn extends Co{constructor(e=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,a=oi,o=oi,c=Jn,u=sr,d=Ki,m=Va,p=Xn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W2++}),this.uuid=tc(),this.name="",this.source=new V0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Np:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Np:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Eb;Xn.DEFAULT_ANISOTROPY=1;class Sn{constructor(e=0,n=0,a=0,o=1){Sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],M=m[9],T=m[2],S=m[6],b=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+b-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const O=(p+1)/2,z=(y+1)/2,j=(b+1)/2,L=(g+x)/4,P=(_+T)/4,$=(M+S)/4;return O>z&&O>j?O<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(O),o=L/a,c=P/a):z>j?z<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(z),a=L/o,c=$/o):j<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(j),a=P/c,o=$/c),this.set(a,o,c,n),this}let U=Math.sqrt((S-M)*(S-M)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(S-M)/U,this.y=(_-T)/U,this.z=(x-g)/U,this.w=Math.acos((p+y+b-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Lt(this.x,e.x,n.x),this.y=Lt(this.y,e.y,n.y),this.z=Lt(this.z,e.z,n.z),this.w=Lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Lt(this.x,e,n),this.y=Lt(this.y,e,n),this.z=Lt(this.z,e,n),this.w=Lt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q2 extends Co{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Sn(0,0,e,n),this.scissorTest=!1,this.viewport=new Sn(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new Xn(o);this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new V0(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends q2{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Nb extends Xn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Di,this.minFilter=Di,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y2 extends Xn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Di,this.minFilter=Di,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(qi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(qi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=qi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,qi):qi.fromBufferAttribute(c,u),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),gu.copy(a.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),_u.subVectors(this.max,El),Yr.subVectors(e.a,El),$r.subVectors(e.b,El),Zr.subVectors(e.c,El),gs.subVectors($r,Yr),_s.subVectors(Zr,$r),$s.subVectors(Yr,Zr);let n=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-$s.z,$s.y,gs.z,0,-gs.x,_s.z,0,-_s.x,$s.z,0,-$s.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-$s.y,$s.x,0];return!Vh(n,Yr,$r,Zr,_u)||(n=[1,0,0,0,1,0,0,0,1],!Vh(n,Yr,$r,Zr,_u))?!1:(xu.crossVectors(gs,_s),n=[xu.x,xu.y,xu.z],Vh(n,Yr,$r,Zr,_u))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new se,new se,new se,new se,new se,new se,new se,new se],qi=new se,gu=new ic,Yr=new se,$r=new se,Zr=new se,gs=new se,_s=new se,$s=new se,El=new se,_u=new se,xu=new se,Zs=new se;function Vh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Zs.fromArray(r,c);const d=o.x*Math.abs(Zs.x)+o.y*Math.abs(Zs.y)+o.z*Math.abs(Zs.z),m=e.dot(Zs),p=n.dot(Zs),g=a.dot(Zs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const $2=new ic,Tl=new se,jh=new se;class mf{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):$2.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const n=Tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Tl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(jh)),this.expandByPoint(Tl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Da=new se,kh=new se,vu=new se,xs=new se,Xh=new se,bu=new se,Wh=new se;class j0{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){kh.copy(e).add(n).multiplyScalar(.5),vu.copy(n).sub(e).normalize(),xs.copy(this.origin).sub(kh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(vu),d=xs.dot(this.direction),m=-xs.dot(vu),p=xs.lengthSq(),g=Math.abs(1-u*u);let _,x,y,M;if(g>0)if(_=u*m-d,x=u*d-m,M=c*g,_>=0)if(x>=-M)if(x<=M){const T=1/g;_*=T,x*=T,y=_*(_+u*x+2*d)+x*(u*_+x+2*m)+p}else x=c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-M?(_=Math.max(0,-(-u*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=M?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(u*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=u>0?-c:c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(kh).addScaledVector(vu,x),y}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const a=Da.dot(this.direction),o=Da.dot(Da)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(a=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(a=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,a,o,c){Xh.subVectors(n,e),bu.subVectors(a,e),Wh.crossVectors(Xh,bu);let u=this.direction.dot(Wh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xs.subVectors(this.origin,e);const m=d*this.direction.dot(bu.crossVectors(xs,bu));if(m<0)return null;const p=d*this.direction.dot(Xh.cross(xs));if(p<0||m+p>u)return null;const g=-d*xs.dot(Wh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(e,n,a,o,c,u,d,m,p,g,_,x,y,M,T,S){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,_,x,y,M,T,S)}set(e,n,a,o,c,u,d,m,p,g,_,x,y,M,T,S){const b=this.elements;return b[0]=e,b[4]=n,b[8]=a,b[12]=o,b[1]=c,b[5]=u,b[9]=d,b[13]=m,b[2]=p,b[6]=g,b[10]=_,b[14]=x,b[3]=y,b[7]=M,b[11]=T,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/Kr.setFromMatrixColumn(e,0).length(),c=1/Kr.setFromMatrixColumn(e,1).length(),u=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*g,y=u*_,M=d*g,T=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+M*p,n[5]=x-T*p,n[9]=-d*m,n[2]=T-x*p,n[6]=M+y*p,n[10]=u*m}else if(e.order==="YXZ"){const x=m*g,y=m*_,M=p*g,T=p*_;n[0]=x+T*d,n[4]=M*d-y,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=y*d-M,n[6]=T+x*d,n[10]=u*m}else if(e.order==="ZXY"){const x=m*g,y=m*_,M=p*g,T=p*_;n[0]=x-T*d,n[4]=-u*_,n[8]=M+y*d,n[1]=y+M*d,n[5]=u*g,n[9]=T-x*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const x=u*g,y=u*_,M=d*g,T=d*_;n[0]=m*g,n[4]=M*p-y,n[8]=x*p+T,n[1]=m*_,n[5]=T*p+x,n[9]=y*p-M,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const x=u*m,y=u*p,M=d*m,T=d*p;n[0]=m*g,n[4]=T-x*_,n[8]=M*_+y,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*_+M,n[10]=x-T*_}else if(e.order==="XZY"){const x=u*m,y=u*p,M=d*m,T=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=x*_+T,n[5]=u*g,n[9]=y*_-M,n[2]=M*_-y,n[6]=d*g,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z2,e,K2)}lookAt(e,n,a){const o=this.elements;return Ri.subVectors(e,n),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),vs.crossVectors(a,Ri),vs.lengthSq()===0&&(Math.abs(a.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),vs.crossVectors(a,Ri)),vs.normalize(),yu.crossVectors(Ri,vs),o[0]=vs.x,o[4]=yu.x,o[8]=Ri.x,o[1]=vs.y,o[5]=yu.y,o[9]=Ri.y,o[2]=vs.z,o[6]=yu.z,o[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],x=a[9],y=a[13],M=a[2],T=a[6],S=a[10],b=a[14],U=a[3],O=a[7],z=a[11],j=a[15],L=o[0],P=o[4],$=o[8],C=o[12],w=o[1],V=o[5],K=o[9],le=o[13],_e=o[2],fe=o[6],I=o[10],q=o[14],W=o[3],me=o[7],ve=o[11],N=o[15];return c[0]=u*L+d*w+m*_e+p*W,c[4]=u*P+d*V+m*fe+p*me,c[8]=u*$+d*K+m*I+p*ve,c[12]=u*C+d*le+m*q+p*N,c[1]=g*L+_*w+x*_e+y*W,c[5]=g*P+_*V+x*fe+y*me,c[9]=g*$+_*K+x*I+y*ve,c[13]=g*C+_*le+x*q+y*N,c[2]=M*L+T*w+S*_e+b*W,c[6]=M*P+T*V+S*fe+b*me,c[10]=M*$+T*K+S*I+b*ve,c[14]=M*C+T*le+S*q+b*N,c[3]=U*L+O*w+z*_e+j*W,c[7]=U*P+O*V+z*fe+j*me,c[11]=U*$+O*K+z*I+j*ve,c[15]=U*C+O*le+z*q+j*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],y=e[14],M=e[3],T=e[7],S=e[11],b=e[15];return M*(+c*m*_-o*p*_-c*d*x+a*p*x+o*d*y-a*m*y)+T*(+n*m*y-n*p*x+c*u*x-o*u*y+o*p*g-c*m*g)+S*(+n*p*_-n*d*y-c*u*_+a*u*y+c*d*g-a*p*g)+b*(-o*d*g-n*m*_+n*d*x+o*u*_-a*u*x+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],y=e[11],M=e[12],T=e[13],S=e[14],b=e[15],U=_*S*p-T*x*p+T*m*y-d*S*y-_*m*b+d*x*b,O=M*x*p-g*S*p-M*m*y+u*S*y+g*m*b-u*x*b,z=g*T*p-M*_*p+M*d*y-u*T*y-g*d*b+u*_*b,j=M*_*m-g*T*m-M*d*x+u*T*x+g*d*S-u*_*S,L=n*U+a*O+o*z+c*j;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=U*P,e[1]=(T*x*c-_*S*c-T*o*y+a*S*y+_*o*b-a*x*b)*P,e[2]=(d*S*c-T*m*c+T*o*p-a*S*p-d*o*b+a*m*b)*P,e[3]=(_*m*c-d*x*c-_*o*p+a*x*p+d*o*y-a*m*y)*P,e[4]=O*P,e[5]=(g*S*c-M*x*c+M*o*y-n*S*y-g*o*b+n*x*b)*P,e[6]=(M*m*c-u*S*c-M*o*p+n*S*p+u*o*b-n*m*b)*P,e[7]=(u*x*c-g*m*c+g*o*p-n*x*p-u*o*y+n*m*y)*P,e[8]=z*P,e[9]=(M*_*c-g*T*c-M*a*y+n*T*y+g*a*b-n*_*b)*P,e[10]=(u*T*c-M*d*c+M*a*p-n*T*p-u*a*b+n*d*b)*P,e[11]=(g*d*c-u*_*c-g*a*p+n*_*p+u*a*y-n*d*y)*P,e[12]=j*P,e[13]=(g*T*o-M*_*o+M*a*x-n*T*x-g*a*S+n*_*S)*P,e[14]=(M*d*o-u*T*o-M*a*m+n*T*m+u*a*S-n*d*S)*P,e[15]=(u*_*o-g*d*o+g*a*m-n*_*m-u*a*x+n*d*x)*P,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,_=d+d,x=c*p,y=c*g,M=c*_,T=u*g,S=u*_,b=d*_,U=m*p,O=m*g,z=m*_,j=a.x,L=a.y,P=a.z;return o[0]=(1-(T+b))*j,o[1]=(y+z)*j,o[2]=(M-O)*j,o[3]=0,o[4]=(y-z)*L,o[5]=(1-(x+b))*L,o[6]=(S+U)*L,o[7]=0,o[8]=(M+O)*P,o[9]=(S-U)*P,o[10]=(1-(x+T))*P,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=Kr.set(o[0],o[1],o[2]).length();const u=Kr.set(o[4],o[5],o[6]).length(),d=Kr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Yi.copy(this);const p=1/c,g=1/u,_=1/d;return Yi.elements[0]*=p,Yi.elements[1]*=p,Yi.elements[2]*=p,Yi.elements[4]*=g,Yi.elements[5]*=g,Yi.elements[6]*=g,Yi.elements[8]*=_,Yi.elements[9]*=_,Yi.elements[10]*=_,n.setFromRotationMatrix(Yi),a.x=c,a.y=u,a.z=d,this}makePerspective(e,n,a,o,c,u,d=oa,m=!1){const p=this.elements,g=2*c/(n-e),_=2*c/(a-o),x=(n+e)/(n-e),y=(a+o)/(a-o);let M,T;if(m)M=c/(u-c),T=u*c/(u-c);else if(d===oa)M=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(d===Ju)M=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=oa,m=!1){const p=this.elements,g=2/(n-e),_=2/(a-o),x=-(n+e)/(n-e),y=-(a+o)/(a-o);let M,T;if(m)M=1/(u-c),T=u/(u-c);else if(d===oa)M=-2/(u-c),T=-(u+c)/(u-c);else if(d===Ju)M=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Kr=new se,Yi=new xn,Z2=new se(0,0,0),K2=new se(1,1,1),vs=new se,yu=new se,Ri=new se,uv=new xn,fv=new nc;class ja{constructor(e=0,n=0,a=0,o=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Lt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return uv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fv.setFromEuler(this),this.setFromQuaternion(fv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class k0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q2=0;const dv=new se,Qr=new nc,Oa=new xn,Su=new se,Al=new se,J2=new se,eM=new nc,hv=new se(1,0,0),pv=new se(0,1,0),mv=new se(0,0,1),gv={type:"added"},tM={type:"removed"},Jr={type:"childadded",child:null},qh={type:"childremoved",child:null};class gi extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q2++}),this.uuid=tc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new se,n=new ja,a=new nc,o=new se(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xn},normalMatrix:{value:new yt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(hv,e)}rotateY(e){return this.rotateOnAxis(pv,e)}rotateZ(e){return this.rotateOnAxis(mv,e)}translateOnAxis(e,n){return dv.copy(e).applyQuaternion(this.quaternion),this.position.add(dv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hv,e)}translateY(e){return this.translateOnAxis(pv,e)}translateZ(e){return this.translateOnAxis(mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Su.copy(e):Su.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(Al,Su,this.up):Oa.lookAt(Su,Al,this.up),this.quaternion.setFromRotationMatrix(Oa),o&&(Oa.extractRotation(o.matrixWorld),Qr.setFromRotationMatrix(Oa),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(_n("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gv),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):_n("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tM),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gv),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,J2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),x=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}gi.DEFAULT_UP=new se(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new se,Ua=new se,Yh=new se,La=new se,eo=new se,to=new se,_v=new se,$h=new se,Zh=new se,Kh=new se,Qh=new Sn,Jh=new Sn,ep=new Sn;class Zi{constructor(e=new se,n=new se,a=new se){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),$i.subVectors(e,n),o.cross($i);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){$i.subVectors(o,n),Ua.subVectors(a,n),Yh.subVectors(e,n);const u=$i.dot($i),d=$i.dot(Ua),m=$i.dot(Yh),p=Ua.dot(Ua),g=Ua.dot(Yh),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,M=(u*g-d*m)*x;return c.set(1-y-M,M,y)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,La)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,La.x),m.addScaledVector(u,La.y),m.addScaledVector(d,La.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Qh.setScalar(0),Jh.setScalar(0),ep.setScalar(0),Qh.fromBufferAttribute(e,n),Jh.fromBufferAttribute(e,a),ep.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qh,c.x),u.addScaledVector(Jh,c.y),u.addScaledVector(ep,c.z),u}static isFrontFacing(e,n,a,o){return $i.subVectors(a,n),Ua.subVectors(e,n),$i.cross(Ua).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),$i.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Zi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;eo.subVectors(o,a),to.subVectors(c,a),$h.subVectors(e,a);const m=eo.dot($h),p=to.dot($h);if(m<=0&&p<=0)return n.copy(a);Zh.subVectors(e,o);const g=eo.dot(Zh),_=to.dot(Zh);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(eo,u);Kh.subVectors(e,c);const y=eo.dot(Kh),M=to.dot(Kh);if(M>=0&&y<=M)return n.copy(c);const T=y*p-m*M;if(T<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(a).addScaledVector(to,d);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return _v.subVectors(c,o),d=(_-g)/(_-g+(y-M)),n.copy(o).addScaledVector(_v,d);const b=1/(S+T+x);return u=T*b,d=x*b,n.copy(a).addScaledVector(eo,u).addScaledVector(to,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function tp(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Vt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Bt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Bt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Bt.workingColorSpace){if(e=V2(e,1),n=Lt(n,0,1),a=Lt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=tp(u,c,e+1/3),this.g=tp(u,c,e),this.b=tp(u,c,e-1/3)}return Bt.colorSpaceToWorking(this,o),this}setStyle(e,n=ri){function a(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const a=Pb[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Bt.workingToColorSpace(ni.copy(this),e),Math.round(Lt(ni.r*255,0,255))*65536+Math.round(Lt(ni.g*255,0,255))*256+Math.round(Lt(ni.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Bt.workingColorSpace){Bt.workingToColorSpace(ni.copy(this),n);const a=ni.r,o=ni.g,c=ni.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Bt.workingColorSpace){return Bt.workingToColorSpace(ni.copy(this),n),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=ri){Bt.workingToColorSpace(ni.copy(this),e);const n=ni.r,a=ni.g,o=ni.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+n,bs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(bs),e.getHSL(Mu);const a=Ih(bs.h,Mu.h,n),o=Ih(bs.s,Mu.s,n),c=Ih(bs.l,Mu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Vt;Vt.NAMES=Pb;let nM=0;class ac extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=tc(),this.name="",this.type="Material",this.blending=lo,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mp,this.blendDst=Ep,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(a.blending=this.blending),this.side!==Cs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Mp&&(a.blendSrc=this.blendSrc),this.blendDst!==Ep&&(a.blendDst=this.blendDst),this.blendEquation!==nr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ol extends ac{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ja,this.combine=Mb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const On=new se,Eu=new $t;let iM=0;class la{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=iv,this.updateRanges=[],this.gpuType=Ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(e),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyMatrix3(e),this.setXYZ(n,On.x,On.y,On.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyMatrix4(e),this.setXYZ(n,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyNormalMatrix(e),this.setXYZ(n,On.x,On.y,On.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.transformDirection(e),this.setXYZ(n,On.x,On.y,On.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=pi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(e,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(e,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(e,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=pi(n,this.array),a=pi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=pi(n,this.array),a=pi(a,this.array),o=pi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=pi(n,this.array),a=pi(a,this.array),o=pi(o,this.array),c=pi(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iv&&(e.usage=this.usage),e}}class zb extends la{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Ib extends la{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Ga extends la{constructor(e,n,a){super(new Float32Array(e),n,a)}}let aM=0;const Hi=new xn,np=new gi,no=new se,wi=new ic,Rl=new ic,jn=new se;class ea extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=tc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lb(e)?Ib:zb)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new yt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,n,a){return Hi.makeTranslation(e,n,a),this.applyMatrix4(Hi),this}scale(e,n,a){return Hi.makeScale(e,n,a),this.applyMatrix4(Hi),this}lookAt(e){return np.lookAt(e),np.updateMatrix(),this.applyMatrix4(np.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ga(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_n("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];wi.setFromBufferAttribute(c),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_n('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_n("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const a=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Rl.setFromBufferAttribute(d),this.morphTargetsRelative?(jn.addVectors(wi.min,Rl.min),wi.expandByPoint(jn),jn.addVectors(wi.max,Rl.max),wi.expandByPoint(jn)):(wi.expandByPoint(Rl.min),wi.expandByPoint(Rl.max))}wi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)jn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(jn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)jn.fromBufferAttribute(d,p),m&&(no.fromBufferAttribute(e,p),jn.add(no)),o=Math.max(o,a.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&_n('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){_n("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new la(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let $=0;$<a.count;$++)d[$]=new se,m[$]=new se;const p=new se,g=new se,_=new se,x=new $t,y=new $t,M=new $t,T=new se,S=new se;function b($,C,w){p.fromBufferAttribute(a,$),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),x.fromBufferAttribute(c,$),y.fromBufferAttribute(c,C),M.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(x),M.sub(x);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(V),d[$].add(T),d[C].add(T),d[w].add(T),m[$].add(S),m[C].add(S),m[w].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let $=0,C=U.length;$<C;++$){const w=U[$],V=w.start,K=w.count;for(let le=V,_e=V+K;le<_e;le+=3)b(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const O=new se,z=new se,j=new se,L=new se;function P($){j.fromBufferAttribute(o,$),L.copy(j);const C=d[$];O.copy(C),O.sub(j.multiplyScalar(j.dot(C))).normalize(),z.crossVectors(L,C);const V=z.dot(m[$])<0?-1:1;u.setXYZW($,O.x,O.y,O.z,V)}for(let $=0,C=U.length;$<C;++$){const w=U[$],V=w.start,K=w.count;for(let le=V,_e=V+K;le<_e;le+=3)P(e.getX(le+0)),P(e.getX(le+1)),P(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new la(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,y=a.count;x<y;x++)a.setXYZ(x,0,0,0);const o=new se,c=new se,u=new se,d=new se,m=new se,p=new se,g=new se,_=new se;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(a,M),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,S),d.add(g),m.add(g),p.add(g),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)jn.fromBufferAttribute(e,n),jn.normalize(),e.setXYZ(n,jn.x,jn.y,jn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,M=0;for(let T=0,S=m.length;T<S;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*g;for(let b=0;b<g;b++)x[M++]=p[y++]}return new la(x,g,_)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ea,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=e(x,a);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xv=new xn,Ks=new j0,Tu=new mf,vv=new se,Au=new se,Ru=new se,wu=new se,ip=new se,Cu=new se,bv=new se,Du=new se;class Ci extends gi{constructor(e=new ea,n=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Cu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(ip.fromBufferAttribute(_,e),u?Cu.addScaledVector(ip,g):Cu.addScaledVector(ip.sub(n),g))}n.add(Cu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Tu.copy(a.boundingSphere),Tu.applyMatrix4(c),Ks.copy(e.ray).recast(e.near),!(Tu.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Tu,vv)===null||Ks.origin.distanceToSquared(vv)>(e.far-e.near)**2))&&(xv.copy(c).invert(),Ks.copy(e.ray).applyMatrix4(xv),!(a.boundingBox!==null&&Ks.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Ks)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,T=x.length;M<T;M++){const S=x[M],b=u[S.materialIndex],U=Math.max(S.start,y.start),O=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let z=U,j=O;z<j;z+=3){const L=d.getX(z),P=d.getX(z+1),$=d.getX(z+2);o=Ou(this,b,e,a,p,g,_,L,P,$),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=M,b=T;S<b;S+=3){const U=d.getX(S),O=d.getX(S+1),z=d.getX(S+2);o=Ou(this,u,e,a,p,g,_,U,O,z),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,T=x.length;M<T;M++){const S=x[M],b=u[S.materialIndex],U=Math.max(S.start,y.start),O=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let z=U,j=O;z<j;z+=3){const L=z,P=z+1,$=z+2;o=Ou(this,b,e,a,p,g,_,L,P,$),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let S=M,b=T;S<b;S+=3){const U=S,O=S+1,z=S+2;o=Ou(this,u,e,a,p,g,_,U,O,z),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function sM(r,e,n,a,o,c,u,d){let m;if(e.side===mi?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Cs,d),m===null)return null;Du.copy(d),Du.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Du);return p<n.near||p>n.far?null:{distance:p,point:Du.clone(),object:r}}function Ou(r,e,n,a,o,c,u,d,m,p){r.getVertexPosition(d,Au),r.getVertexPosition(m,Ru),r.getVertexPosition(p,wu);const g=sM(r,e,n,a,Au,Ru,wu,bv);if(g){const _=new se;Zi.getBarycoord(bv,Au,Ru,wu,_),o&&(g.uv=Zi.getInterpolatedAttribute(o,d,m,p,_,new $t)),c&&(g.uv1=Zi.getInterpolatedAttribute(c,d,m,p,_,new $t)),u&&(g.normal=Zi.getInterpolatedAttribute(u,d,m,p,_,new se),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new se,materialIndex:0};Zi.getNormal(Au,Ru,wu,x.normal),g.face=x,g.barycoord=_}return g}class sc extends ea{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let x=0,y=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,o,u,2),M("x","z","y",1,-1,e,a,-n,o,u,3),M("x","y","z",1,-1,e,n,a,o,c,4),M("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Ga(p,3)),this.setAttribute("normal",new Ga(g,3)),this.setAttribute("uv",new Ga(_,2));function M(T,S,b,U,O,z,j,L,P,$,C){const w=z/P,V=j/$,K=z/2,le=j/2,_e=L/2,fe=P+1,I=$+1;let q=0,W=0;const me=new se;for(let ve=0;ve<I;ve++){const N=ve*V-le;for(let ie=0;ie<fe;ie++){const be=ie*w-K;me[T]=be*U,me[S]=N*O,me[b]=_e,p.push(me.x,me.y,me.z),me[T]=0,me[S]=0,me[b]=L>0?1:-1,g.push(me.x,me.y,me.z),_.push(ie/P),_.push(1-ve/$),q+=1}}for(let ve=0;ve<$;ve++)for(let N=0;N<P;N++){const ie=x+N+fe*ve,be=x+N+fe*(ve+1),Te=x+(N+1)+fe*(ve+1),ze=x+(N+1)+fe*ve;m.push(ie,be,ze),m.push(be,Te,ze),W+=6}d.addGroup(y,W,C),y+=W,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function si(r){const e={};for(let n=0;n<r.length;n++){const a=yo(r[n]);for(const o in a)e[o]=a[o]}return e}function rM(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function Fb(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const oM={clone:yo,merge:si};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends ac{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Bb extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new se,yv=new $t,Sv=new $t;class Gi extends Bb{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=u0*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return u0*2*Math.atan(Math.tan(zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,n){return this.getViewBounds(e,yv,Sv),n.subVectors(Sv,yv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ao=1;class uM extends gi{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gi(io,ao,e,n);o.layers=this.layers,this.add(o);const c=new Gi(io,ao,e,n);c.layers=this.layers,this.add(c);const u=new Gi(io,ao,e,n);u.layers=this.layers,this.add(u);const d=new Gi(io,ao,e,n);d.layers=this.layers,this.add(d);const m=new Gi(io,ao,e,n);m.layers=this.layers,this.add(m);const p=new Gi(io,ao,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===oa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ju)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(_,x,y),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Hb extends Xn{constructor(e=[],n=xo,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new Hb(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new sc(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:yo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:mi,blending:Ba});c.uniforms.tEquirect.value=n;const u=new Ci(o,c),d=n.minFilter;return n.minFilter===sr&&(n.minFilter=Jn),new uM(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class rr extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class ap{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,a),b=this._getHandJoint(p,T);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new rr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class X0{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Vt(e),this.near=n,this.far=a}clone(){return new X0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hM extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ja,this.environmentIntensity=1,this.environmentRotation=new ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pM extends Xn{constructor(e=null,n=1,a=1,o,c,u,d,m,p=Di,g=Di,_,x){super(null,u,d,m,p,g,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sp=new se,mM=new se,gM=new yt;class tr{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=sp.subVectors(a,n).cross(mM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(sp),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||gM.getNormalMatrix(e),o=this.coplanarPoint(sp).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new mf,_M=new $t(.5,.5),Uu=new se;class W0{constructor(e=new tr,n=new tr,a=new tr,o=new tr,c=new tr,u=new tr){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=oa,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],M=c[8],T=c[9],S=c[10],b=c[11],U=c[12],O=c[13],z=c[14],j=c[15];if(o[0].setComponents(p-u,y-g,b-M,j-U).normalize(),o[1].setComponents(p+u,y+g,b+M,j+U).normalize(),o[2].setComponents(p+d,y+_,b+T,j+O).normalize(),o[3].setComponents(p-d,y-_,b-T,j-O).normalize(),a)o[4].setComponents(m,x,S,z).normalize(),o[5].setComponents(p-m,y-x,b-S,j-z).normalize();else if(o[4].setComponents(p-m,y-x,b-S,j-z).normalize(),n===oa)o[5].setComponents(p+m,y+x,b+S,j+z).normalize();else if(n===Ju)o[5].setComponents(m,x,S,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const n=_M.distanceTo(e.center);return Qs.radius=.7071067811865476+n,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Uu.x=o.normal.x>0?e.max.x:e.min.x,Uu.y=o.normal.y>0?e.max.y:e.min.y,Uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class f0 extends ac{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ef=new se,tf=new se,Mv=new xn,wl=new j0,Lu=new mf,rp=new se,Ev=new se;class xM extends gi{constructor(e=new ea,n=new f0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ef.fromBufferAttribute(n,o-1),tf.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ef.distanceTo(tf);e.setAttribute("lineDistance",new Ga(a,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Lu.copy(a.boundingSphere),Lu.applyMatrix4(o),Lu.radius+=c,e.ray.intersectsSphere(Lu)===!1)return;Mv.copy(o).invert(),wl.copy(e.ray).applyMatrix4(Mv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let T=y,S=M-1;T<S;T+=p){const b=g.getX(T),U=g.getX(T+1),O=Nu(this,e,wl,m,b,U,T);O&&n.push(O)}if(this.isLineLoop){const T=g.getX(M-1),S=g.getX(y),b=Nu(this,e,wl,m,T,S,M-1);b&&n.push(b)}}else{const y=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let T=y,S=M-1;T<S;T+=p){const b=Nu(this,e,wl,m,T,T+1,T);b&&n.push(b)}if(this.isLineLoop){const T=Nu(this,e,wl,m,M-1,y,M-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Nu(r,e,n,a,o,c,u){const d=r.geometry.attributes.position;if(ef.fromBufferAttribute(d,o),tf.fromBufferAttribute(d,c),n.distanceSqToSegment(ef,tf,rp,Ev)>a)return;rp.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(rp);if(!(p<e.near||p>e.far))return{distance:p,point:Ev.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Tv=new se,Av=new se;class Rv extends xM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Tv.fromBufferAttribute(n,o),Av.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Tv.distanceTo(Av);e.setAttribute("lineDistance",new Ga(a,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vM extends Xn{constructor(e,n,a,o,c=Jn,u=Jn,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class bM extends Xn{constructor(e,n,a,o,c,u,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gb extends Xn{constructor(e,n,a=dr,o,c,u,d=Di,m=Di,p,g=jl,_=1){if(g!==jl&&g!==kl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new V0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Vb extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Es extends ea{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,_=e/d,x=n/m,y=[],M=[],T=[],S=[];for(let b=0;b<g;b++){const U=b*x-u;for(let O=0;O<p;O++){const z=O*_-c;M.push(z,-U,0),T.push(0,0,1),S.push(O/d),S.push(1-b/m)}}for(let b=0;b<m;b++)for(let U=0;U<d;U++){const O=U+p*b,z=U+p*(b+1),j=U+1+p*(b+1),L=U+1+p*b;y.push(O,z,L),y.push(z,j,L)}this.setIndex(y),this.setAttribute("position",new Ga(M,3)),this.setAttribute("normal",new Ga(T,3)),this.setAttribute("uv",new Ga(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}class yM extends ac{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SM extends ac{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const op={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class MM{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],M=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const EM=new MM;class q0{constructor(e){this.manager=e!==void 0?e:EM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}q0.DEFAULT_MATERIAL_NAME="__DEFAULT";const so=new WeakMap;class TM extends q0{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=op.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=so.get(u);_===void 0&&(_=[],so.set(u,_)),_.push({onLoad:n,onError:o})}return u}const d=Xl("img");function m(){g(),n&&n(this);const _=so.get(this)||[];for(let x=0;x<_.length;x++){const y=_[x];y.onLoad&&y.onLoad(this)}so.delete(this),c.manager.itemEnd(e)}function p(_){g(),o&&o(_),op.remove(`image:${e}`);const x=so.get(this)||[];for(let y=0;y<x.length;y++){const M=x[y];M.onError&&M.onError(_)}so.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),op.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class AM extends q0{constructor(e){super(e)}load(e,n,a,o){const c=new Xn,u=new TM(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class RM extends Bb{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class wM extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const wv=new xn;class CM{constructor(e,n,a=0,o=1/0){this.ray=new j0(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new k0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):_n("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return wv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wv),this}intersectObject(e,n=!0,a=[]){return d0(e,this,a,n),a.sort(Cv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)d0(e[o],this,a,n);return a.sort(Cv),a}}function Cv(r,e){return r.distance-e.distance}function d0(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,d=c.length;u<d;u++)d0(c[u],e,n,!0)}}function Dv(r,e,n,a){const o=DM(a);switch(n){case Cb:return r*e;case Ob:return r*e/o.components*o.byteLength;case F0:return r*e/o.components*o.byteLength;case B0:return r*e*2/o.components*o.byteLength;case H0:return r*e*2/o.components*o.byteLength;case Db:return r*e*3/o.components*o.byteLength;case Ki:return r*e*4/o.components*o.byteLength;case G0:return r*e*4/o.components*o.byteLength;case Fu:case Bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hu:case Gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ip:case Bp:return Math.max(r,16)*Math.max(e,8)/4;case zp:case Fp:return Math.max(r,8)*Math.max(e,8)/2;case Hp:case Gp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $p:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Kp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case e0:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case t0:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case n0:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case i0:case a0:case s0:return Math.ceil(r/4)*Math.ceil(e/4)*16;case r0:case o0:return Math.ceil(r/4)*Math.ceil(e/4)*8;case l0:case c0:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DM(r){switch(r){case Va:case Tb:return{byteLength:1,components:1};case Gl:case Ab:case wo:return{byteLength:2,components:1};case z0:case I0:return{byteLength:2,components:4};case dr:case P0:case Ia:return{byteLength:4,components:1};case Rb:case wb:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:N0}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=N0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jb(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function OM(r){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<_.length;y++){const M=_[x],T=_[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,M=_.length;y<M;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var UM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LM=`#ifdef USE_ALPHAHASH
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
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM=`#ifdef USE_BATCHING
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
#endif`,GM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XM=`#ifdef USE_IRIDESCENCE
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
#endif`,WM=`#ifdef USE_BUMPMAP
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
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t3=`#define PI 3.141592653589793
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
} // validated`,n3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i3=`vec3 transformedNormal = objectNormal;
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
#endif`,a3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l3="gl_FragColor = linearToOutputTexel( gl_FragColor );",c3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u3=`#ifdef USE_ENVMAP
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
#endif`,f3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d3=`#ifdef USE_ENVMAP
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
#endif`,h3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p3=`#ifdef USE_ENVMAP
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
#endif`,m3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v3=`#ifdef USE_GRADIENTMAP
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
}`,b3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M3=`uniform bool receiveShadow;
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
#endif`,E3=`#ifdef USE_ENVMAP
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
#endif`,T3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C3=`PhysicalMaterial material;
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
#endif`,D3=`uniform sampler2D dfgLUT;
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
}`,O3=`
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
#endif`,U3=`#if defined( RE_IndirectDiffuse )
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
#endif`,L3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G3=`#if defined( USE_POINTS_UV )
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
#endif`,V3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q3=`#ifdef USE_MORPHTARGETS
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
#endif`,Y3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gE=`float getShadowMask() {
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
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
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
}`,FE=`#if DEPTH_PACKING == 3200
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
}`,BE=`#define DISTANCE
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
}`,HE=`#define DISTANCE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`uniform float scale;
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
}`,kE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,WE=`uniform vec3 diffuse;
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
}`,qE=`#define LAMBERT
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
}`,YE=`#define LAMBERT
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
}`,$E=`#define MATCAP
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
}`,ZE=`#define MATCAP
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
}`,KE=`#define NORMAL
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
}`,QE=`#define NORMAL
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
}`,JE=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,tT=`#define STANDARD
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
}`,nT=`#define STANDARD
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
}`,iT=`#define TOON
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
}`,aT=`#define TOON
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
}`,sT=`uniform float size;
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
}`,rT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,lT=`uniform vec3 color;
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
}`,cT=`uniform float rotation;
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
}`,uT=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:UM,alphahash_pars_fragment:LM,alphamap_fragment:NM,alphamap_pars_fragment:PM,alphatest_fragment:zM,alphatest_pars_fragment:IM,aomap_fragment:FM,aomap_pars_fragment:BM,batching_pars_vertex:HM,batching_vertex:GM,begin_vertex:VM,beginnormal_vertex:jM,bsdfs:kM,iridescence_fragment:XM,bumpmap_pars_fragment:WM,clipping_planes_fragment:qM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:ZM,color_fragment:KM,color_pars_fragment:QM,color_pars_vertex:JM,color_vertex:e3,common:t3,cube_uv_reflection_fragment:n3,defaultnormal_vertex:i3,displacementmap_pars_vertex:a3,displacementmap_vertex:s3,emissivemap_fragment:r3,emissivemap_pars_fragment:o3,colorspace_fragment:l3,colorspace_pars_fragment:c3,envmap_fragment:u3,envmap_common_pars_fragment:f3,envmap_pars_fragment:d3,envmap_pars_vertex:h3,envmap_physical_pars_fragment:E3,envmap_vertex:p3,fog_vertex:m3,fog_pars_vertex:g3,fog_fragment:_3,fog_pars_fragment:x3,gradientmap_pars_fragment:v3,lightmap_pars_fragment:b3,lights_lambert_fragment:y3,lights_lambert_pars_fragment:S3,lights_pars_begin:M3,lights_toon_fragment:T3,lights_toon_pars_fragment:A3,lights_phong_fragment:R3,lights_phong_pars_fragment:w3,lights_physical_fragment:C3,lights_physical_pars_fragment:D3,lights_fragment_begin:O3,lights_fragment_maps:U3,lights_fragment_end:L3,logdepthbuf_fragment:N3,logdepthbuf_pars_fragment:P3,logdepthbuf_pars_vertex:z3,logdepthbuf_vertex:I3,map_fragment:F3,map_pars_fragment:B3,map_particle_fragment:H3,map_particle_pars_fragment:G3,metalnessmap_fragment:V3,metalnessmap_pars_fragment:j3,morphinstance_vertex:k3,morphcolor_vertex:X3,morphnormal_vertex:W3,morphtarget_pars_vertex:q3,morphtarget_vertex:Y3,normal_fragment_begin:$3,normal_fragment_maps:Z3,normal_pars_fragment:K3,normal_pars_vertex:Q3,normal_vertex:J3,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:aE,opaque_fragment:sE,packing:rE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:_E,skinning_pars_vertex:xE,skinning_vertex:vE,skinnormal_vertex:bE,specularmap_fragment:yE,specularmap_pars_fragment:SE,tonemapping_fragment:ME,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:AE,uv_pars_fragment:RE,uv_pars_vertex:wE,uv_vertex:CE,worldpos_vertex:DE,background_vert:OE,background_frag:UE,backgroundCube_vert:LE,backgroundCube_frag:NE,cube_vert:PE,cube_frag:zE,depth_vert:IE,depth_frag:FE,distanceRGBA_vert:BE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:VE,linedashed_vert:jE,linedashed_frag:kE,meshbasic_vert:XE,meshbasic_frag:WE,meshlambert_vert:qE,meshlambert_frag:YE,meshmatcap_vert:$E,meshmatcap_frag:ZE,meshnormal_vert:KE,meshnormal_frag:QE,meshphong_vert:JE,meshphong_frag:eT,meshphysical_vert:tT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:aT,points_vert:sT,points_frag:rT,shadow_vert:oT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},Pe={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},ra={basic:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:si([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:si([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:si([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:si([Pe.points,Pe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:si([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:si([Pe.common,Pe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:si([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:si([Pe.sprite,Pe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:si([Pe.common,Pe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:si([Pe.lights,Pe.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ra.physical={uniforms:si([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Pu={r:0,b:0,g:0},Js=new ja,fT=new xn;function dT(r,e,n,a,o,c,u){const d=new Vt(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function M(O){let z=O.isScene===!0?O.background:null;return z&&z.isTexture&&(z=(O.backgroundBlurriness>0?n:e).get(z)),z}function T(O){let z=!1;const j=M(O);j===null?b(d,m):j&&j.isColor&&(b(j,1),z=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?a.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||z)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(O,z){const j=M(z);j&&(j.isCubeTexture||j.mapping===pf)?(g===void 0&&(g=new Ci(new sc(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:yo(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(L,P,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Js.copy(z.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(fT.makeRotationFromEuler(Js)),g.material.toneMapped=Bt.getTransfer(j.colorSpace)!==en,(_!==j||x!==j.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=j,x=j.version,y=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new Ci(new Es(2,2),new ka({name:"BackgroundMaterial",uniforms:yo(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Bt.getTransfer(j.colorSpace)!==en,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(_!==j||x!==j.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=j,x=j.version,y=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function b(O,z){O.getRGB(Pu,Fb(r)),a.buffers.color.setClear(Pu.r,Pu.g,Pu.b,z,u)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,z=1){d.set(O),m=z,b(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,b(d,m)},render:T,addToRenderList:S,dispose:U}}function hT(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,u=!1;function d(w,V,K,le,_e){let fe=!1;const I=_(le,K,V);c!==I&&(c=I,p(c.object)),fe=y(w,le,K,_e),fe&&M(w,le,K,_e),_e!==null&&e.update(_e,r.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,z(w,V,K,le),_e!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,V,K){const le=K.wireframe===!0;let _e=a[w.id];_e===void 0&&(_e={},a[w.id]=_e);let fe=_e[V.id];fe===void 0&&(fe={},_e[V.id]=fe);let I=fe[le];return I===void 0&&(I=x(m()),fe[le]=I),I}function x(w){const V=[],K=[],le=[];for(let _e=0;_e<n;_e++)V[_e]=0,K[_e]=0,le[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:le,object:w,attributes:{},index:null}}function y(w,V,K,le){const _e=c.attributes,fe=V.attributes;let I=0;const q=K.getAttributes();for(const W in q)if(q[W].location>=0){const ve=_e[W];let N=fe[W];if(N===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),ve===void 0||ve.attribute!==N||N&&ve.data!==N.data)return!0;I++}return c.attributesNum!==I||c.index!==le}function M(w,V,K,le){const _e={},fe=V.attributes;let I=0;const q=K.getAttributes();for(const W in q)if(q[W].location>=0){let ve=fe[W];ve===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor));const N={};N.attribute=ve,ve&&ve.data&&(N.data=ve.data),_e[W]=N,I++}c.attributes=_e,c.attributesNum=I,c.index=le}function T(){const w=c.newAttributes;for(let V=0,K=w.length;V<K;V++)w[V]=0}function S(w){b(w,0)}function b(w,V){const K=c.newAttributes,le=c.enabledAttributes,_e=c.attributeDivisors;K[w]=1,le[w]===0&&(r.enableVertexAttribArray(w),le[w]=1),_e[w]!==V&&(r.vertexAttribDivisor(w,V),_e[w]=V)}function U(){const w=c.newAttributes,V=c.enabledAttributes;for(let K=0,le=V.length;K<le;K++)V[K]!==w[K]&&(r.disableVertexAttribArray(K),V[K]=0)}function O(w,V,K,le,_e,fe,I){I===!0?r.vertexAttribIPointer(w,V,K,_e,fe):r.vertexAttribPointer(w,V,K,le,_e,fe)}function z(w,V,K,le){T();const _e=le.attributes,fe=K.getAttributes(),I=V.defaultAttributeValues;for(const q in fe){const W=fe[q];if(W.location>=0){let me=_e[q];if(me===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(me=w.instanceColor)),me!==void 0){const ve=me.normalized,N=me.itemSize,ie=e.get(me);if(ie===void 0)continue;const be=ie.buffer,Te=ie.type,ze=ie.bytesPerElement,ne=Te===r.INT||Te===r.UNSIGNED_INT||me.gpuType===P0;if(me.isInterleavedBufferAttribute){const ce=me.data,Oe=ce.stride,Ve=me.offset;if(ce.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)b(W.location+qe,ce.meshPerAttribute);w.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let qe=0;qe<W.locationSize;qe++)S(W.location+qe);r.bindBuffer(r.ARRAY_BUFFER,be);for(let qe=0;qe<W.locationSize;qe++)O(W.location+qe,N/W.locationSize,Te,ve,Oe*ze,(Ve+N/W.locationSize*qe)*ze,ne)}else{if(me.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)b(W.location+ce,me.meshPerAttribute);w.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ce=0;ce<W.locationSize;ce++)S(W.location+ce);r.bindBuffer(r.ARRAY_BUFFER,be);for(let ce=0;ce<W.locationSize;ce++)O(W.location+ce,N/W.locationSize,Te,ve,N*ze,N/W.locationSize*ce*ze,ne)}}else if(I!==void 0){const ve=I[q];if(ve!==void 0)switch(ve.length){case 2:r.vertexAttrib2fv(W.location,ve);break;case 3:r.vertexAttrib3fv(W.location,ve);break;case 4:r.vertexAttrib4fv(W.location,ve);break;default:r.vertexAttrib1fv(W.location,ve)}}}}U()}function j(){$();for(const w in a){const V=a[w];for(const K in V){const le=V[K];for(const _e in le)g(le[_e].object),delete le[_e];delete V[K]}delete a[w]}}function L(w){if(a[w.id]===void 0)return;const V=a[w.id];for(const K in V){const le=V[K];for(const _e in le)g(le[_e].object),delete le[_e];delete V[K]}delete a[w.id]}function P(w){for(const V in a){const K=a[V];if(K[w.id]===void 0)continue;const le=K[w.id];for(const _e in le)g(le[_e].object),delete le[_e];delete K[w.id]}}function $(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:$,resetDefaultState:C,dispose:j,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:S,disableUnusedAttributes:U}}function pT(r,e,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];n.update(y,a,1)}function m(p,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],g[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T]*x[T];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function mT(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(P){return!(P!==Ki&&a.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const $=P===wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Va&&a.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ia&&!$)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(ht("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),z=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),j=M>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:U,maxVaryings:O,maxFragmentUniforms:z,vertexTextures:j,maxSamples:L}}function gT(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new tr,d=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||a!==0||o;return o=x,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const M=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,b=r.get(_);if(!o||M===null||M.length===0||c&&!S)c?g(null):p();else{const U=c?0:a,O=U*4;let z=b.clippingState||null;m.value=z,z=g(M,x,O,y);for(let j=0;j!==O;++j)z[j]=n[j];b.clippingState=z,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,x,y,M){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=m.value,M!==!0||S===null){const b=y+T*4,U=x.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<b)&&(S=new Float32Array(b));for(let O=0,z=y;O!==T;++O,z+=4)u.copy(_[O]).applyMatrix4(U,d),u.normal.toArray(S,z),S[z+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function _T(r){let e=new WeakMap;function n(u,d){return d===Up?u.mapping=xo:d===Lp&&(u.mapping=vo),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===Up||d===Lp)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new fM(m.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Ts=4,Ov=[.125,.215,.35,.446,.526,.582],ir=20,xT=256,Cl=new RM,Uv=new Vt;let lp=null,cp=0,up=0,fp=!1;const vT=new se;class Lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=vT}=c;lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lp,cp,up),this._renderer.xr.enabled=fp,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xo||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lp=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),up=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:wo,format:Ki,colorSpace:bo,depthBuffer:!1},o=Nv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bT(c)),this._blurMaterial=ST(c,e,n),this._ggxMaterial=yT(c,e,n)}return o}_compileMaterial(e){const n=new Ci(new ea,e);this._renderer.compile(n,Cl)}_sceneToCubeUV(e,n,a,o,c){const m=new Gi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Uv),_.toneMapping=As,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new sc,new Ol({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let b=!1;const U=e.background;U?U.isColor&&(S.color.copy(U),e.background=null,b=!0):(S.color.copy(Uv),b=!0);for(let O=0;O<6;O++){const z=O%3;z===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):z===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const j=this._cubeSize;ro(o,z*j,O>2?j:0,j,j),_.setRenderTarget(o),b&&_.render(T,m),_.render(e,m)}_.toneMapping=y,_.autoClear=x,e.background=U}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===xo||e.mapping===vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;ro(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Cl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=.05+p*.95,y=_*x,{_lodMax:M}=this,T=this._sizeLods[a],S=3*T*(a>M-Ts?a-M+Ts:0),b=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-n,ro(c,S,b,3*T,2*T),o.setRenderTarget(c),o.render(d,Cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,ro(e,S,b,3*T,2*T),o.setRenderTarget(e),o.render(d,Cl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&_n("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const x=p.uniforms,y=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ir-1),T=c/M,S=isFinite(c)?1+Math.floor(g*T):ir;S>ir&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ir}`);const b=[];let U=0;for(let P=0;P<ir;++P){const $=P/T,C=Math.exp(-$*$/2);b.push(C),P===0?U+=C:P<S&&(U+=2*C)}for(let P=0;P<b.length;P++)b[P]=b[P]/U;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=b,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=M,x.mipInt.value=O-a;const z=this._sizeLods[o],j=3*z*(o>O-Ts?o-O+Ts:0),L=4*(this._cubeSize-z);ro(n,j,L,3*z,2*z),m.setRenderTarget(n),m.render(_,Cl)}}function bT(r){const e=[],n=[],a=[];let o=r;const c=r-Ts+1+Ov.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>r-Ts?m=Ov[u-r+Ts-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,T=3,S=2,b=1,U=new Float32Array(T*M*y),O=new Float32Array(S*M*y),z=new Float32Array(b*M*y);for(let L=0;L<y;L++){const P=L%3*2/3-1,$=L>2?0:-1,C=[P,$,0,P+2/3,$,0,P+2/3,$+1,0,P,$,0,P+2/3,$+1,0,P,$+1,0];U.set(C,T*M*L),O.set(x,S*M*L);const w=[L,L,L,L,L,L];z.set(w,b*M*L)}const j=new ea;j.setAttribute("position",new la(U,T)),j.setAttribute("uv",new la(O,S)),j.setAttribute("faceIndex",new la(z,b)),a.push(new Ci(j,null)),o>Ts&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Nv(r,e,n){const a=new hr(r,e,n);return a.texture.mapping=pf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function ro(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function yT(r,e,n){return new ka({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function ST(r,e,n){const a=new Float32Array(ir),o=new se(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Pv(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function zv(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

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
	`}function MT(r){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===Up||m===Lp,g=m===xo||m===vo;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Lv(r)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Lv(r)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function ET(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Wl("WebGLRenderer: "+a+" extension not supported."),o}}}function TT(r,e,n,a){const o={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",u),delete o[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,M=_.attributes.position;let T=0;if(y!==null){const U=y.array;T=y.version;for(let O=0,z=U.length;O<z;O+=3){const j=U[O+0],L=U[O+1],P=U[O+2];x.push(j,L,L,P,P,j)}}else if(M!==void 0){const U=M.array;T=M.version;for(let O=0,z=U.length/3-1;O<z;O+=3){const j=O+0,L=O+1,P=O+2;x.push(j,L,L,P,P,j)}}else return;const S=new(Lb(x)?Ib:zb)(x,1);S.version=T;const b=c.get(_);b&&e.remove(b),c.set(_,S)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function AT(r,e,n){let a;function o(x){a=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function m(x,y){r.drawElements(a,y,c,x*u),n.update(y,a,1)}function p(x,y,M){M!==0&&(r.drawElementsInstanced(a,y,c,x*u,M),n.update(y,a,M))}function g(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,x,0,M);let S=0;for(let b=0;b<M;b++)S+=y[b];n.update(S,a,1)}function _(x,y,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<x.length;b++)p(x[b]/u,y[b],T[b]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,x,0,T,0,M);let b=0;for(let U=0;U<M;U++)b+=y[U]*T[U];n.update(b,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function RT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:_n("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function wT(r,e,n){const a=new WeakMap,o=new Sn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let w=function(){$.dispose(),a.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let z=0;M===!0&&(z=1),T===!0&&(z=2),S===!0&&(z=3);let j=d.attributes.position.count*z,L=1;j>e.maxTextureSize&&(L=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const P=new Float32Array(j*L*4*_),$=new Nb(P,j,L,_);$.type=Ia,$.needsUpdate=!0;const C=z*4;for(let V=0;V<_;V++){const K=b[V],le=U[V],_e=O[V],fe=j*L*4*V;for(let I=0;I<K.count;I++){const q=I*C;M===!0&&(o.fromBufferAttribute(K,I),P[fe+q+0]=o.x,P[fe+q+1]=o.y,P[fe+q+2]=o.z,P[fe+q+3]=0),T===!0&&(o.fromBufferAttribute(le,I),P[fe+q+4]=o.x,P[fe+q+5]=o.y,P[fe+q+6]=o.z,P[fe+q+7]=0),S===!0&&(o.fromBufferAttribute(_e,I),P[fe+q+8]=o.x,P[fe+q+9]=o.y,P[fe+q+10]=o.z,P[fe+q+11]=_e.itemSize===4?o.w:1)}}x={count:_,texture:$,size:new $t(j,L)},a.set(d,x),d.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const T=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function CT(r,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const kb=new Xn,Iv=new Gb(1,1),Xb=new Nb,Wb=new Y2,qb=new Hb,Fv=[],Bv=[],Hv=new Float32Array(16),Gv=new Float32Array(9),Vv=new Float32Array(4);function Do(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=Fv[o];if(c===void 0&&(c=new Float32Array(o),Fv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function zn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function In(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function _f(r,e){let n=Bv[e];n===void 0&&(n=new Int32Array(e),Bv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function DT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function OT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zn(n,e))return;r.uniform2fv(this.addr,e),In(n,e)}}function UT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zn(n,e))return;r.uniform3fv(this.addr,e),In(n,e)}}function LT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zn(n,e))return;r.uniform4fv(this.addr,e),In(n,e)}}function NT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(zn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),In(n,e)}else{if(zn(n,a))return;Vv.set(a),r.uniformMatrix2fv(this.addr,!1,Vv),In(n,a)}}function PT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(zn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),In(n,e)}else{if(zn(n,a))return;Gv.set(a),r.uniformMatrix3fv(this.addr,!1,Gv),In(n,a)}}function zT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(zn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),In(n,e)}else{if(zn(n,a))return;Hv.set(a),r.uniformMatrix4fv(this.addr,!1,Hv),In(n,a)}}function IT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function FT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zn(n,e))return;r.uniform2iv(this.addr,e),In(n,e)}}function BT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zn(n,e))return;r.uniform3iv(this.addr,e),In(n,e)}}function HT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zn(n,e))return;r.uniform4iv(this.addr,e),In(n,e)}}function GT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function VT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zn(n,e))return;r.uniform2uiv(this.addr,e),In(n,e)}}function jT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zn(n,e))return;r.uniform3uiv(this.addr,e),In(n,e)}}function kT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zn(n,e))return;r.uniform4uiv(this.addr,e),In(n,e)}}function XT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Iv.compareFunction=Ub,c=Iv):c=kb,n.setTexture2D(e||c,o)}function WT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||Wb,o)}function qT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||qb,o)}function YT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||Xb,o)}function $T(r){switch(r){case 5126:return DT;case 35664:return OT;case 35665:return UT;case 35666:return LT;case 35674:return NT;case 35675:return PT;case 35676:return zT;case 5124:case 35670:return IT;case 35667:case 35671:return FT;case 35668:case 35672:return BT;case 35669:case 35673:return HT;case 5125:return GT;case 36294:return VT;case 36295:return jT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}function ZT(r,e){r.uniform1fv(this.addr,e)}function KT(r,e){const n=Do(e,this.size,2);r.uniform2fv(this.addr,n)}function QT(r,e){const n=Do(e,this.size,3);r.uniform3fv(this.addr,n)}function JT(r,e){const n=Do(e,this.size,4);r.uniform4fv(this.addr,n)}function eA(r,e){const n=Do(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function tA(r,e){const n=Do(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function nA(r,e){const n=Do(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function iA(r,e){r.uniform1iv(this.addr,e)}function aA(r,e){r.uniform2iv(this.addr,e)}function sA(r,e){r.uniform3iv(this.addr,e)}function rA(r,e){r.uniform4iv(this.addr,e)}function oA(r,e){r.uniform1uiv(this.addr,e)}function lA(r,e){r.uniform2uiv(this.addr,e)}function cA(r,e){r.uniform3uiv(this.addr,e)}function uA(r,e){r.uniform4uiv(this.addr,e)}function fA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);zn(a,c)||(r.uniform1iv(this.addr,c),In(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||kb,c[u])}function dA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);zn(a,c)||(r.uniform1iv(this.addr,c),In(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Wb,c[u])}function hA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);zn(a,c)||(r.uniform1iv(this.addr,c),In(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||qb,c[u])}function pA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);zn(a,c)||(r.uniform1iv(this.addr,c),In(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Xb,c[u])}function mA(r){switch(r){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return pA}}class gA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=$T(n.type)}}class _A{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mA(n.type)}}class xA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const dp=/(\w+)(\])?(\[|\.)?/g;function jv(r,e){r.seq.push(e),r.map[e.id]=e}function vA(r,e,n){const a=r.name,o=a.length;for(dp.lastIndex=0;;){const c=dp.exec(a),u=dp.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){jv(n,p===void 0?new gA(d,r,e):new _A(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new xA(d),jv(n,_)),n=_}}}class Vu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);vA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function kv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const bA=37297;let yA=0;function SA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const Xv=new yt;function MA(r){Bt._getMatrix(Xv,Bt.workingColorSpace,r);const e=`mat3( ${Xv.elements.map(n=>n.toFixed(4))} )`;switch(Bt.getTransfer(r)){case Qu:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wv(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+SA(r.getShaderSource(e),d)}else return c}function EA(r,e){const n=MA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TA(r,e){let n;switch(e){case y2:n="Linear";break;case S2:n="Reinhard";break;case M2:n="Cineon";break;case E2:n="ACESFilmic";break;case A2:n="AgX";break;case R2:n="Neutral";break;case T2:n="Custom";break;default:ht("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zu=new se;function AA(){Bt.getLuminanceCoefficients(zu);const r=zu.x.toFixed(4),e=zu.y.toFixed(4),n=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function wA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function CA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Dl(r){return r!==""}function qv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function h0(r){return r.replace(DA,UA)}const OA=new Map;function UA(r,e){let n=St[e];if(n===void 0){const a=OA.get(e);if(a!==void 0)n=St[a],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return h0(n)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(r){return r.replace(LA,NA)}function NA(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Zv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function PA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sb?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===e2?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pa&&(e="SHADOWMAP_TYPE_VSM"),e}function zA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xo:case vo:e="ENVMAP_TYPE_CUBE";break;case pf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case vo:e="ENVMAP_MODE_REFRACTION";break}return e}function FA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mb:e="ENVMAP_BLENDING_MULTIPLY";break;case v2:e="ENVMAP_BLENDING_MIX";break;case b2:e="ENVMAP_BLENDING_ADD";break}return e}function BA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function HA(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=PA(n),p=zA(n),g=IA(n),_=FA(n),x=BA(n),y=RA(n),M=wA(c),T=o.createProgram();let S,b,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Dl).join(`
`),S.length>0&&(S+=`
`),b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Dl).join(`
`),b.length>0&&(b+=`
`)):(S=[Zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),b=[Zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==As?"#define TONE_MAPPING":"",n.toneMapping!==As?St.tonemapping_pars_fragment:"",n.toneMapping!==As?TA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,EA("linearToOutputTexel",n.outputColorSpace),AA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dl).join(`
`)),u=h0(u),u=qv(u,n),u=Yv(u,n),d=h0(d),d=qv(d,n),d=Yv(d,n),u=$v(u),d=$v(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",n.glslVersion===av?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const O=U+S+u,z=U+b+d,j=kv(o,o.VERTEX_SHADER,O),L=kv(o,o.FRAGMENT_SHADER,z);o.attachShader(T,j),o.attachShader(T,L),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function P(V){if(r.debug.checkShaderErrors){const K=o.getProgramInfoLog(T)||"",le=o.getShaderInfoLog(j)||"",_e=o.getShaderInfoLog(L)||"",fe=K.trim(),I=le.trim(),q=_e.trim();let W=!0,me=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,j,L);else{const ve=Wv(o,j,"vertex"),N=Wv(o,L,"fragment");_n("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+ve+`
`+N)}else fe!==""?ht("WebGLProgram: Program Info Log:",fe):(I===""||q==="")&&(me=!1);me&&(V.diagnostics={runnable:W,programLog:fe,vertexShader:{log:I,prefix:S},fragmentShader:{log:q,prefix:b}})}o.deleteShader(j),o.deleteShader(L),$=new Vu(o,T),C=CA(o,T)}let $;this.getUniforms=function(){return $===void 0&&P(this),$};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(T,bA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=j,this.fragmentShader=L,this}let GA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new jA(e),n.set(e,a)),a}}class jA{constructor(e){this.id=GA++,this.code=e,this.usedTimes=0}}function kA(r,e,n,a,o,c,u){const d=new k0,m=new VA,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,V,K,le){const _e=K.fog,fe=le.geometry,I=C.isMeshStandardMaterial?K.environment:null,q=(C.isMeshStandardMaterial?n:e).get(C.envMap||I),W=q&&q.mapping===pf?q.image.height:null,me=M[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&ht("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const ve=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,N=ve!==void 0?ve.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let be,Te,ze,ne;if(me){const ke=ra[me];be=ke.vertexShader,Te=ke.fragmentShader}else be=C.vertexShader,Te=C.fragmentShader,m.update(C),ze=m.getVertexShaderID(C),ne=m.getFragmentShaderID(C);const ce=r.getRenderTarget(),Oe=r.state.buffers.depth.getReversed(),Ve=le.isInstancedMesh===!0,qe=le.isBatchedMesh===!0,pt=!!C.map,hn=!!C.matcap,mt=!!q,wt=!!C.aoMap,B=!!C.lightMap,ft=!!C.bumpMap,Fe=!!C.normalMap,Qe=!!C.displacementMap,Ne=!!C.emissiveMap,Ct=!!C.metalnessMap,We=!!C.roughnessMap,nt=C.anisotropy>0,D=C.clearcoat>0,E=C.dispersion>0,Z=C.iridescence>0,he=C.sheen>0,ye=C.transmission>0,oe=nt&&!!C.anisotropyMap,Ke=D&&!!C.clearcoatMap,Ue=D&&!!C.clearcoatNormalMap,Je=D&&!!C.clearcoatRoughnessMap,Ye=Z&&!!C.iridescenceMap,Se=Z&&!!C.iridescenceThicknessMap,Ee=he&&!!C.sheenColorMap,Ze=he&&!!C.sheenRoughnessMap,je=!!C.specularMap,Ie=!!C.specularColorMap,rt=!!C.specularIntensityMap,H=ye&&!!C.transmissionMap,De=ye&&!!C.thicknessMap,Ae=!!C.gradientMap,Re=!!C.alphaMap,Me=C.alphaTest>0,ge=!!C.alphaHash,Be=!!C.extensions;let lt=As;C.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(lt=r.toneMapping);const Ht={shaderID:me,shaderType:C.type,shaderName:C.name,vertexShader:be,fragmentShader:Te,defines:C.defines,customVertexShaderID:ze,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:qe,batchingColor:qe&&le._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&le.instanceColor!==null,instancingMorph:Ve&&le.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:bo,alphaToCoverage:!!C.alphaToCoverage,map:pt,matcap:hn,envMap:mt,envMapMode:mt&&q.mapping,envMapCubeUVHeight:W,aoMap:wt,lightMap:B,bumpMap:ft,normalMap:Fe,displacementMap:x&&Qe,emissiveMap:Ne,normalMapObjectSpace:Fe&&C.normalMapType===U2,normalMapTangentSpace:Fe&&C.normalMapType===O2,metalnessMap:Ct,roughnessMap:We,anisotropy:nt,anisotropyMap:oe,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Je,dispersion:E,iridescence:Z,iridescenceMap:Ye,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Ze,specularMap:je,specularColorMap:Ie,specularIntensityMap:rt,transmission:ye,transmissionMap:H,thicknessMap:De,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===lo&&C.alphaToCoverage===!1,alphaMap:Re,alphaTest:Me,alphaHash:ge,combine:C.combine,mapUv:pt&&T(C.map.channel),aoMapUv:wt&&T(C.aoMap.channel),lightMapUv:B&&T(C.lightMap.channel),bumpMapUv:ft&&T(C.bumpMap.channel),normalMapUv:Fe&&T(C.normalMap.channel),displacementMapUv:Qe&&T(C.displacementMap.channel),emissiveMapUv:Ne&&T(C.emissiveMap.channel),metalnessMapUv:Ct&&T(C.metalnessMap.channel),roughnessMapUv:We&&T(C.roughnessMap.channel),anisotropyMapUv:oe&&T(C.anisotropyMap.channel),clearcoatMapUv:Ke&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&T(C.sheenRoughnessMap.channel),specularMapUv:je&&T(C.specularMap.channel),specularColorMapUv:Ie&&T(C.specularColorMap.channel),specularIntensityMapUv:rt&&T(C.specularIntensityMap.channel),transmissionMapUv:H&&T(C.transmissionMap.channel),thicknessMapUv:De&&T(C.thicknessMap.channel),alphaMapUv:Re&&T(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Fe||nt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!fe.attributes.uv&&(pt||Re),fog:!!_e,useFog:C.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Oe,skinning:le.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:pt&&C.map.isVideoTexture===!0&&Bt.getTransfer(C.map.colorSpace)===en,decodeVideoTextureEmissive:Ne&&C.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(C.emissiveMap.colorSpace)===en,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===za,flipSided:C.side===mi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Be&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&C.extensions.multiDraw===!0||qe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function b(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)w.push(V),w.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(U(w,C),O(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function U(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function z(C){const w=M[C.type];let V;if(w){const K=ra[w];V=oM.clone(K.uniforms)}else V=C.uniforms;return V}function j(C,w){let V;for(let K=0,le=g.length;K<le;K++){const _e=g[K];if(_e.cacheKey===w){V=_e,++V.usedTimes;break}}return V===void 0&&(V=new HA(r,w,C,c),g.push(V)),V}function L(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function P(C){m.remove(C)}function $(){m.dispose()}return{getParameters:S,getProgramCacheKey:b,getUniforms:z,acquireProgram:j,releaseProgram:L,releaseShaderCache:P,programs:g,dispose:$}}function XA(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function WA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Kv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Qv(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(_,x,y,M,T,S){let b=r[e];return b===void 0?(b={id:_.id,object:_,geometry:x,material:y,groupOrder:M,renderOrder:_.renderOrder,z:T,group:S},r[e]=b):(b.id=_.id,b.object=_,b.geometry=x,b.material=y,b.groupOrder=M,b.renderOrder=_.renderOrder,b.z=T,b.group=S),e++,b}function d(_,x,y,M,T,S){const b=u(_,x,y,M,T,S);y.transmission>0?a.push(b):y.transparent===!0?o.push(b):n.push(b)}function m(_,x,y,M,T,S){const b=u(_,x,y,M,T,S);y.transmission>0?a.unshift(b):y.transparent===!0?o.unshift(b):n.unshift(b)}function p(_,x){n.length>1&&n.sort(_||WA),a.length>1&&a.sort(x||Kv),o.length>1&&o.sort(x||Kv)}function g(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:m,finish:g,sort:p}}function qA(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new Qv,r.set(a,[u])):o>=c.length?(u=new Qv,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function YA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Vt};break;case"SpotLight":n={position:new se,direction:new se,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new se,halfWidth:new se,halfHeight:new se};break}return r[e.id]=n,n}}}function $A(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let ZA=0;function KA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function QA(r){const e=new YA,n=$A(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new se);const o=new se,c=new xn,u=new xn;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,M=0,T=0,S=0,b=0,U=0,O=0,z=0,j=0,L=0,P=0;p.sort(KA);for(let C=0,w=p.length;C<w;C++){const V=p[C],K=V.color,le=V.intensity,_e=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=K.r*le,_+=K.g*le,x+=K.b*le;else if(V.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(V.sh.coefficients[I],le);P++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,W=n.get(V);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,a.directionalShadow[y]=W,a.directionalShadowMap[y]=fe,a.directionalShadowMatrix[y]=V.shadow.matrix,U++}a.directional[y]=I,y++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(K).multiplyScalar(le),I.distance=_e,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,a.spot[T]=I;const q=V.shadow;if(V.map&&(a.spotLightMap[j]=V.map,j++,q.updateMatrices(V),V.castShadow&&L++),a.spotLightMatrix[T]=q.matrix,V.castShadow){const W=n.get(V);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,a.spotShadow[T]=W,a.spotShadowMap[T]=fe,z++}T++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(K).multiplyScalar(le),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=I,S++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const q=V.shadow,W=n.get(V);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,a.pointShadow[M]=W,a.pointShadowMap[M]=fe,a.pointShadowMatrix[M]=V.shadow.matrix,O++}a.point[M]=I,M++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(le),I.groundColor.copy(V.groundColor).multiplyScalar(le),a.hemi[b]=I,b++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pe.LTC_FLOAT_1,a.rectAreaLTC2=Pe.LTC_FLOAT_2):(a.rectAreaLTC1=Pe.LTC_HALF_1,a.rectAreaLTC2=Pe.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const $=a.hash;($.directionalLength!==y||$.pointLength!==M||$.spotLength!==T||$.rectAreaLength!==S||$.hemiLength!==b||$.numDirectionalShadows!==U||$.numPointShadows!==O||$.numSpotShadows!==z||$.numSpotMaps!==j||$.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=S,a.point.length=M,a.hemi.length=b,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=O,a.pointShadowMap.length=O,a.spotShadow.length=z,a.spotShadowMap.length=z,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=O,a.spotLightMatrix.length=z+j-L,a.spotLightMap.length=j,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=P,$.directionalLength=y,$.pointLength=M,$.spotLength=T,$.rectAreaLength=S,$.hemiLength=b,$.numDirectionalShadows=U,$.numPointShadows=O,$.numSpotShadows=z,$.numSpotMaps=j,$.numLightProbes=P,a.version=ZA++)}function m(p,g){let _=0,x=0,y=0,M=0,T=0;const S=g.matrixWorldInverse;for(let b=0,U=p.length;b<U;b++){const O=p[b];if(O.isDirectionalLight){const z=a.directional[_];z.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),_++}else if(O.isSpotLight){const z=a.spot[y];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(O.matrixWorld),o.setFromMatrixPosition(O.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),y++}else if(O.isRectAreaLight){const z=a.rectArea[M];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(S),u.identity(),c.copy(O.matrixWorld),c.premultiply(S),u.extractRotation(c),z.halfWidth.set(O.width*.5,0,0),z.halfHeight.set(0,O.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),M++}else if(O.isPointLight){const z=a.point[x];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(S),x++}else if(O.isHemisphereLight){const z=a.hemi[T];z.direction.setFromMatrixPosition(O.matrixWorld),z.direction.transformDirection(S),T++}}}return{setup:d,setupView:m,state:a}}function Jv(r){const e=new QA(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function JA(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Jv(r),e.set(o,[d])):c>=u.length?(d=new Jv(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const eR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tR=`uniform sampler2D shadow_pass;
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
}`;function nR(r,e,n){let a=new W0;const o=new $t,c=new $t,u=new Sn,d=new yM({depthPacking:D2}),m=new SM,p={},g=n.maxTextureSize,_={[Cs]:mi,[mi]:Cs,[za]:za},x=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:eR,fragmentShader:tR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new ea;M.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ci(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sb;let b=this.type;this.render=function(L,P,$){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ba),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const le=b!==Pa&&this.type===Pa,_e=b===Pa&&this.type!==Pa;for(let fe=0,I=L.length;fe<I;fe++){const q=L[fe],W=q.shadow;if(W===void 0){ht("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const me=W.getFrameExtents();if(o.multiply(me),c.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/me.x),o.x=c.x*me.x,W.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/me.y),o.y=c.y*me.y,W.mapSize.y=c.y)),W.map===null||le===!0||_e===!0){const N=this.type!==Pa?{minFilter:Di,magFilter:Di}:{};W.map!==null&&W.map.dispose(),W.map=new hr(o.x,o.y,N),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ve=W.getViewportCount();for(let N=0;N<ve;N++){const ie=W.getViewport(N);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),K.viewport(u),W.updateMatrices(q,N),a=W.getFrustum(),z(P,$,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Pa&&U(W,$),W.needsUpdate=!1}b=this.type,S.needsUpdate=!1,r.setRenderTarget(C,w,V)};function U(L,P){const $=e.update(T);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new hr(o.x,o.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(P,null,$,x,T,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(P,null,$,y,T,null)}function O(L,P,$,C){let w=null;const V=$.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)w=V;else if(w=$.isPointLight===!0?m:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const K=w.uuid,le=P.uuid;let _e=p[K];_e===void 0&&(_e={},p[K]=_e);let fe=_e[le];fe===void 0&&(fe=w.clone(),_e[le]=fe,P.addEventListener("dispose",j)),w=fe}if(w.visible=P.visible,w.wireframe=P.wireframe,C===Pa?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:_[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,$.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const K=r.properties.get(w);K.light=$}return w}function z(L,P,$,C,w){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===Pa)&&(!L.frustumCulled||a.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,L.matrixWorld);const le=e.update(L),_e=L.material;if(Array.isArray(_e)){const fe=le.groups;for(let I=0,q=fe.length;I<q;I++){const W=fe[I],me=_e[W.materialIndex];if(me&&me.visible){const ve=O(L,me,C,w);L.onBeforeShadow(r,L,P,$,le,ve,W),r.renderBufferDirect($,null,le,ve,L,W),L.onAfterShadow(r,L,P,$,le,ve,W)}}}else if(_e.visible){const fe=O(L,_e,C,w);L.onBeforeShadow(r,L,P,$,le,fe,null),r.renderBufferDirect($,null,le,fe,L,null),L.onAfterShadow(r,L,P,$,le,fe,null)}}const K=L.children;for(let le=0,_e=K.length;le<_e;le++)z(K[le],P,$,C,w)}function j(L){L.target.removeEventListener("dispose",j);for(const $ in p){const C=p[$],w=L.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const iR={[Tp]:Ap,[Rp]:Dp,[wp]:Op,[_o]:Cp,[Ap]:Tp,[Dp]:Rp,[Op]:wp,[Cp]:_o};function aR(r,e){function n(){let H=!1;const De=new Sn;let Ae=null;const Re=new Sn(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!H&&(r.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){H=Me},setClear:function(Me,ge,Be,lt,Ht){Ht===!0&&(Me*=lt,ge*=lt,Be*=lt),De.set(Me,ge,Be,lt),Re.equals(De)===!1&&(r.clearColor(Me,ge,Be,lt),Re.copy(De))},reset:function(){H=!1,Ae=null,Re.set(-1,0,0,0)}}}function a(){let H=!1,De=!1,Ae=null,Re=null,Me=null;return{setReversed:function(ge){if(De!==ge){const Be=e.get("EXT_clip_control");ge?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),De=ge;const lt=Me;Me=null,this.setClear(lt)}},getReversed:function(){return De},setTest:function(ge){ge?ce(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(ge){Ae!==ge&&!H&&(r.depthMask(ge),Ae=ge)},setFunc:function(ge){if(De&&(ge=iR[ge]),Re!==ge){switch(ge){case Tp:r.depthFunc(r.NEVER);break;case Ap:r.depthFunc(r.ALWAYS);break;case Rp:r.depthFunc(r.LESS);break;case _o:r.depthFunc(r.LEQUAL);break;case wp:r.depthFunc(r.EQUAL);break;case Cp:r.depthFunc(r.GEQUAL);break;case Dp:r.depthFunc(r.GREATER);break;case Op:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Re=ge}},setLocked:function(ge){H=ge},setClear:function(ge){Me!==ge&&(De&&(ge=1-ge),r.clearDepth(ge),Me=ge)},reset:function(){H=!1,Ae=null,Re=null,Me=null,De=!1}}}function o(){let H=!1,De=null,Ae=null,Re=null,Me=null,ge=null,Be=null,lt=null,Ht=null;return{setTest:function(ke){H||(ke?ce(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(ke){De!==ke&&!H&&(r.stencilMask(ke),De=ke)},setFunc:function(ke,gt,Pt){(Ae!==ke||Re!==gt||Me!==Pt)&&(r.stencilFunc(ke,gt,Pt),Ae=ke,Re=gt,Me=Pt)},setOp:function(ke,gt,Pt){(ge!==ke||Be!==gt||lt!==Pt)&&(r.stencilOp(ke,gt,Pt),ge=ke,Be=gt,lt=Pt)},setLocked:function(ke){H=ke},setClear:function(ke){Ht!==ke&&(r.clearStencil(ke),Ht=ke)},reset:function(){H=!1,De=null,Ae=null,Re=null,Me=null,ge=null,Be=null,lt=null,Ht=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],M=null,T=!1,S=null,b=null,U=null,O=null,z=null,j=null,L=null,P=new Vt(0,0,0),$=0,C=!1,w=null,V=null,K=null,le=null,_e=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,q=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=q>=2);let me=null,ve={};const N=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),be=new Sn().fromArray(N),Te=new Sn().fromArray(ie);function ze(H,De,Ae,Re){const Me=new Uint8Array(4),ge=r.createTexture();r.bindTexture(H,ge),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<Ae;Be++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(De+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return ge}const ne={};ne[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ce(r.DEPTH_TEST),u.setFunc(_o),ft(!1),Fe(Qx),ce(r.CULL_FACE),wt(Ba);function ce(H){g[H]!==!0&&(r.enable(H),g[H]=!0)}function Oe(H){g[H]!==!1&&(r.disable(H),g[H]=!1)}function Ve(H,De){return _[H]!==De?(r.bindFramebuffer(H,De),_[H]=De,H===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=De),H===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=De),!0):!1}function qe(H,De){let Ae=y,Re=!1;if(H){Ae=x.get(De),Ae===void 0&&(Ae=[],x.set(De,Ae));const Me=H.textures;if(Ae.length!==Me.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,Be=Me.length;ge<Be;ge++)Ae[ge]=r.COLOR_ATTACHMENT0+ge;Ae.length=Me.length,Re=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Re=!0);Re&&r.drawBuffers(Ae)}function pt(H){return M!==H?(r.useProgram(H),M=H,!0):!1}const hn={[nr]:r.FUNC_ADD,[n2]:r.FUNC_SUBTRACT,[i2]:r.FUNC_REVERSE_SUBTRACT};hn[a2]=r.MIN,hn[s2]=r.MAX;const mt={[r2]:r.ZERO,[o2]:r.ONE,[l2]:r.SRC_COLOR,[Mp]:r.SRC_ALPHA,[p2]:r.SRC_ALPHA_SATURATE,[d2]:r.DST_COLOR,[u2]:r.DST_ALPHA,[c2]:r.ONE_MINUS_SRC_COLOR,[Ep]:r.ONE_MINUS_SRC_ALPHA,[h2]:r.ONE_MINUS_DST_COLOR,[f2]:r.ONE_MINUS_DST_ALPHA,[m2]:r.CONSTANT_COLOR,[g2]:r.ONE_MINUS_CONSTANT_COLOR,[_2]:r.CONSTANT_ALPHA,[x2]:r.ONE_MINUS_CONSTANT_ALPHA};function wt(H,De,Ae,Re,Me,ge,Be,lt,Ht,ke){if(H===Ba){T===!0&&(Oe(r.BLEND),T=!1);return}if(T===!1&&(ce(r.BLEND),T=!0),H!==t2){if(H!==S||ke!==C){if((b!==nr||z!==nr)&&(r.blendEquation(r.FUNC_ADD),b=nr,z=nr),ke)switch(H){case lo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jx:r.blendFunc(r.ONE,r.ONE);break;case ev:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:_n("WebGLState: Invalid blending: ",H);break}else switch(H){case lo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ev:_n("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tv:_n("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_n("WebGLState: Invalid blending: ",H);break}U=null,O=null,j=null,L=null,P.set(0,0,0),$=0,S=H,C=ke}return}Me=Me||De,ge=ge||Ae,Be=Be||Re,(De!==b||Me!==z)&&(r.blendEquationSeparate(hn[De],hn[Me]),b=De,z=Me),(Ae!==U||Re!==O||ge!==j||Be!==L)&&(r.blendFuncSeparate(mt[Ae],mt[Re],mt[ge],mt[Be]),U=Ae,O=Re,j=ge,L=Be),(lt.equals(P)===!1||Ht!==$)&&(r.blendColor(lt.r,lt.g,lt.b,Ht),P.copy(lt),$=Ht),S=H,C=!1}function B(H,De){H.side===za?Oe(r.CULL_FACE):ce(r.CULL_FACE);let Ae=H.side===mi;De&&(Ae=!Ae),ft(Ae),H.blending===lo&&H.transparent===!1?wt(Ba):wt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const Re=H.stencilWrite;d.setTest(Re),Re&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ne(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){w!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),w=H)}function Fe(H){H!==Q1?(ce(r.CULL_FACE),H!==V&&(H===Qx?r.cullFace(r.BACK):H===J1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),V=H}function Qe(H){H!==K&&(I&&r.lineWidth(H),K=H)}function Ne(H,De,Ae){H?(ce(r.POLYGON_OFFSET_FILL),(le!==De||_e!==Ae)&&(r.polygonOffset(De,Ae),le=De,_e=Ae)):Oe(r.POLYGON_OFFSET_FILL)}function Ct(H){H?ce(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function We(H){H===void 0&&(H=r.TEXTURE0+fe-1),me!==H&&(r.activeTexture(H),me=H)}function nt(H,De,Ae){Ae===void 0&&(me===null?Ae=r.TEXTURE0+fe-1:Ae=me);let Re=ve[Ae];Re===void 0&&(Re={type:void 0,texture:void 0},ve[Ae]=Re),(Re.type!==H||Re.texture!==De)&&(me!==Ae&&(r.activeTexture(Ae),me=Ae),r.bindTexture(H,De||ne[H]),Re.type=H,Re.texture=De)}function D(){const H=ve[me];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function he(){try{r.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ye(){try{r.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ue(){try{r.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Je(){try{r.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ye(){try{r.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Se(){try{r.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(H){be.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),be.copy(H))}function Ze(H){Te.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function je(H,De){let Ae=p.get(De);Ae===void 0&&(Ae=new WeakMap,p.set(De,Ae));let Re=Ae.get(H);Re===void 0&&(Re=r.getUniformBlockIndex(De,H.name),Ae.set(H,Re))}function Ie(H,De){const Re=p.get(De).get(H);m.get(De)!==Re&&(r.uniformBlockBinding(De,Re,H.__bindingPointIndex),m.set(De,Re))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},me=null,ve={},_={},x=new WeakMap,y=[],M=null,T=!1,S=null,b=null,U=null,O=null,z=null,j=null,L=null,P=new Vt(0,0,0),$=0,C=!1,w=null,V=null,K=null,le=null,_e=null,be.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ce,disable:Oe,bindFramebuffer:Ve,drawBuffers:qe,useProgram:pt,setBlending:wt,setMaterial:B,setFlipSided:ft,setCullFace:Fe,setLineWidth:Qe,setPolygonOffset:Ne,setScissorTest:Ct,activeTexture:We,bindTexture:nt,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:Ye,texImage3D:Se,updateUBOMapping:je,uniformBlockBinding:Ie,texStorage2D:Ue,texStorage3D:Je,texSubImage2D:he,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ke,scissor:Ee,viewport:Ze,reset:rt}}function sR(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new $t,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,E){return y?new OffscreenCanvas(D,E):Xl("canvas")}function T(D,E,Z){let he=1;const ye=nt(D);if((ye.width>Z||ye.height>Z)&&(he=Z/Math.max(ye.width,ye.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(he*ye.width),Ke=Math.floor(he*ye.height);_===void 0&&(_=M(oe,Ke));const Ue=E?M(oe,Ke):_;return Ue.width=oe,Ue.height=Ke,Ue.getContext("2d").drawImage(D,0,0,oe,Ke),ht("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+oe+"x"+Ke+")."),Ue}else return"data"in D&&ht("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),D;return D}function S(D){return D.generateMipmaps}function b(D){r.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(D,E,Z,he,ye=!1){if(D!==null){if(r[D]!==void 0)return r[D];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=E;if(E===r.RED&&(Z===r.FLOAT&&(oe=r.R32F),Z===r.HALF_FLOAT&&(oe=r.R16F),Z===r.UNSIGNED_BYTE&&(oe=r.R8)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(oe=r.R8UI),Z===r.UNSIGNED_SHORT&&(oe=r.R16UI),Z===r.UNSIGNED_INT&&(oe=r.R32UI),Z===r.BYTE&&(oe=r.R8I),Z===r.SHORT&&(oe=r.R16I),Z===r.INT&&(oe=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(oe=r.RG32F),Z===r.HALF_FLOAT&&(oe=r.RG16F),Z===r.UNSIGNED_BYTE&&(oe=r.RG8)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(oe=r.RG8UI),Z===r.UNSIGNED_SHORT&&(oe=r.RG16UI),Z===r.UNSIGNED_INT&&(oe=r.RG32UI),Z===r.BYTE&&(oe=r.RG8I),Z===r.SHORT&&(oe=r.RG16I),Z===r.INT&&(oe=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),Z===r.UNSIGNED_INT&&(oe=r.RGB32UI),Z===r.BYTE&&(oe=r.RGB8I),Z===r.SHORT&&(oe=r.RGB16I),Z===r.INT&&(oe=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),Z===r.UNSIGNED_INT&&(oe=r.RGBA32UI),Z===r.BYTE&&(oe=r.RGBA8I),Z===r.SHORT&&(oe=r.RGBA16I),Z===r.INT&&(oe=r.RGBA32I)),E===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),E===r.RGBA){const Ke=ye?Qu:Bt.getTransfer(he);Z===r.FLOAT&&(oe=r.RGBA32F),Z===r.HALF_FLOAT&&(oe=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(oe=Ke===en?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function z(D,E){let Z;return D?E===null||E===dr||E===Vl?Z=r.DEPTH24_STENCIL8:E===Ia?Z=r.DEPTH32F_STENCIL8:E===Gl&&(Z=r.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===dr||E===Vl?Z=r.DEPTH_COMPONENT24:E===Ia?Z=r.DEPTH_COMPONENT32F:E===Gl&&(Z=r.DEPTH_COMPONENT16),Z}function j(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Di&&D.minFilter!==Jn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function L(D){const E=D.target;E.removeEventListener("dispose",L),$(E),E.isVideoTexture&&g.delete(E)}function P(D){const E=D.target;E.removeEventListener("dispose",P),w(E)}function $(D){const E=a.get(D);if(E.__webglInit===void 0)return;const Z=D.source,he=x.get(Z);if(he){const ye=he[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&C(D),Object.keys(he).length===0&&x.delete(Z)}a.remove(D)}function C(D){const E=a.get(D);r.deleteTexture(E.__webglTexture);const Z=D.source,he=x.get(Z);delete he[E.__cacheKey],u.memory.textures--}function w(D){const E=a.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),a.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ye=0;ye<E.__webglFramebuffer[he].length;ye++)r.deleteFramebuffer(E.__webglFramebuffer[he][ye]);else r.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)r.deleteFramebuffer(E.__webglFramebuffer[he]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=D.textures;for(let he=0,ye=Z.length;he<ye;he++){const oe=a.get(Z[he]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),u.memory.textures--),a.remove(Z[he])}a.remove(D)}let V=0;function K(){V=0}function le(){const D=V;return D>=o.maxTextures&&ht("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),V+=1,D}function _e(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function fe(D,E){const Z=a.get(D);if(D.isVideoTexture&&Ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const he=D.image;if(he===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(Z,D,E);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function I(D,E){const Z=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){ne(Z,D,E);return}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function q(D,E){const Z=a.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){ne(Z,D,E);return}n.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function W(D,E){const Z=a.get(D);if(D.version>0&&Z.__version!==D.version){ce(Z,D,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const me={[Np]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Pp]:r.MIRRORED_REPEAT},ve={[Di]:r.NEAREST,[w2]:r.NEAREST_MIPMAP_NEAREST,[mu]:r.NEAREST_MIPMAP_LINEAR,[Jn]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},N={[L2]:r.NEVER,[B2]:r.ALWAYS,[N2]:r.LESS,[Ub]:r.LEQUAL,[P2]:r.EQUAL,[F2]:r.GEQUAL,[z2]:r.GREATER,[I2]:r.NOTEQUAL};function ie(D,E){if(E.type===Ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jn||E.magFilter===Ph||E.magFilter===mu||E.magFilter===sr||E.minFilter===Jn||E.minFilter===Ph||E.minFilter===mu||E.minFilter===sr)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,me[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,me[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,me[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ve[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Di||E.minFilter!==mu&&E.minFilter!==sr||E.type===Ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function be(D,E){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",L));const he=E.source;let ye=x.get(he);ye===void 0&&(ye={},x.set(he,ye));const oe=_e(E);if(oe!==D.__cacheKey){ye[oe]===void 0&&(ye[oe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ye[oe].usedTimes++;const Ke=ye[D.__cacheKey];Ke!==void 0&&(ye[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(E)),D.__cacheKey=oe,D.__webglTexture=ye[oe].texture}return Z}function Te(D,E,Z){return Math.floor(Math.floor(D/Z)/E)}function ze(D,E,Z,he){const oe=D.updateRanges;if(oe.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,he,E.data);else{oe.sort((Se,Ee)=>Se.start-Ee.start);let Ke=0;for(let Se=1;Se<oe.length;Se++){const Ee=oe[Ke],Ze=oe[Se],je=Ee.start+Ee.count,Ie=Te(Ze.start,E.width,4),rt=Te(Ee.start,E.width,4);Ze.start<=je+1&&Ie===rt&&Te(Ze.start+Ze.count-1,E.width,4)===Ie?Ee.count=Math.max(Ee.count,Ze.start+Ze.count-Ee.start):(++Ke,oe[Ke]=Ze)}oe.length=Ke+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),Je=r.getParameter(r.UNPACK_SKIP_PIXELS),Ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Se=0,Ee=oe.length;Se<Ee;Se++){const Ze=oe[Se],je=Math.floor(Ze.start/4),Ie=Math.ceil(Ze.count/4),rt=je%E.width,H=Math.floor(je/E.width),De=Ie,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,rt),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),n.texSubImage2D(r.TEXTURE_2D,0,rt,H,De,Ae,Z,he,E.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ye)}}function ne(D,E,Z){let he=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=r.TEXTURE_3D);const ye=be(D,E),oe=E.source;n.bindTexture(he,D.__webglTexture,r.TEXTURE0+Z);const Ke=a.get(oe);if(oe.version!==Ke.__version||ye===!0){n.activeTexture(r.TEXTURE0+Z);const Ue=Bt.getPrimaries(Bt.workingColorSpace),Je=E.colorSpace===Ms?null:Bt.getPrimaries(E.colorSpace),Ye=E.colorSpace===Ms||Ue===Je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Se=T(E.image,!1,o.maxTextureSize);Se=We(E,Se);const Ee=c.convert(E.format,E.colorSpace),Ze=c.convert(E.type);let je=O(E.internalFormat,Ee,Ze,E.colorSpace,E.isVideoTexture);ie(he,E);let Ie;const rt=E.mipmaps,H=E.isVideoTexture!==!0,De=Ke.__version===void 0||ye===!0,Ae=oe.dataReady,Re=j(E,Se);if(E.isDepthTexture)je=z(E.format===kl,E.type),De&&(H?n.texStorage2D(r.TEXTURE_2D,1,je,Se.width,Se.height):n.texImage2D(r.TEXTURE_2D,0,je,Se.width,Se.height,0,Ee,Ze,null));else if(E.isDataTexture)if(rt.length>0){H&&De&&n.texStorage2D(r.TEXTURE_2D,Re,je,rt[0].width,rt[0].height);for(let Me=0,ge=rt.length;Me<ge;Me++)Ie=rt[Me],H?Ae&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ee,Ze,Ie.data):n.texImage2D(r.TEXTURE_2D,Me,je,Ie.width,Ie.height,0,Ee,Ze,Ie.data);E.generateMipmaps=!1}else H?(De&&n.texStorage2D(r.TEXTURE_2D,Re,je,Se.width,Se.height),Ae&&ze(E,Se,Ee,Ze)):n.texImage2D(r.TEXTURE_2D,0,je,Se.width,Se.height,0,Ee,Ze,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&De&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Re,je,rt[0].width,rt[0].height,Se.depth);for(let Me=0,ge=rt.length;Me<ge;Me++)if(Ie=rt[Me],E.format!==Ki)if(Ee!==null)if(H){if(Ae)if(E.layerUpdates.size>0){const Be=Dv(Ie.width,Ie.height,E.format,E.type);for(const lt of E.layerUpdates){const Ht=Ie.data.subarray(lt*Be/Ie.data.BYTES_PER_ELEMENT,(lt+1)*Be/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,lt,Ie.width,Ie.height,1,Ee,Ht)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Se.depth,Ee,Ie.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,je,Ie.width,Ie.height,Se.depth,0,Ie.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ae&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Se.depth,Ee,Ze,Ie.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Me,je,Ie.width,Ie.height,Se.depth,0,Ee,Ze,Ie.data)}else{H&&De&&n.texStorage2D(r.TEXTURE_2D,Re,je,rt[0].width,rt[0].height);for(let Me=0,ge=rt.length;Me<ge;Me++)Ie=rt[Me],E.format!==Ki?Ee!==null?H?Ae&&n.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ee,Ie.data):n.compressedTexImage2D(r.TEXTURE_2D,Me,je,Ie.width,Ie.height,0,Ie.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ae&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ee,Ze,Ie.data):n.texImage2D(r.TEXTURE_2D,Me,je,Ie.width,Ie.height,0,Ee,Ze,Ie.data)}else if(E.isDataArrayTexture)if(H){if(De&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Re,je,Se.width,Se.height,Se.depth),Ae)if(E.layerUpdates.size>0){const Me=Dv(Se.width,Se.height,E.format,E.type);for(const ge of E.layerUpdates){const Be=Se.data.subarray(ge*Me/Se.data.BYTES_PER_ELEMENT,(ge+1)*Me/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Se.width,Se.height,1,Ee,Ze,Be)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ee,Ze,Se.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,je,Se.width,Se.height,Se.depth,0,Ee,Ze,Se.data);else if(E.isData3DTexture)H?(De&&n.texStorage3D(r.TEXTURE_3D,Re,je,Se.width,Se.height,Se.depth),Ae&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ee,Ze,Se.data)):n.texImage3D(r.TEXTURE_3D,0,je,Se.width,Se.height,Se.depth,0,Ee,Ze,Se.data);else if(E.isFramebufferTexture){if(De)if(H)n.texStorage2D(r.TEXTURE_2D,Re,je,Se.width,Se.height);else{let Me=Se.width,ge=Se.height;for(let Be=0;Be<Re;Be++)n.texImage2D(r.TEXTURE_2D,Be,je,Me,ge,0,Ee,Ze,null),Me>>=1,ge>>=1}}else if(rt.length>0){if(H&&De){const Me=nt(rt[0]);n.texStorage2D(r.TEXTURE_2D,Re,je,Me.width,Me.height)}for(let Me=0,ge=rt.length;Me<ge;Me++)Ie=rt[Me],H?Ae&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ee,Ze,Ie):n.texImage2D(r.TEXTURE_2D,Me,je,Ee,Ze,Ie);E.generateMipmaps=!1}else if(H){if(De){const Me=nt(Se);n.texStorage2D(r.TEXTURE_2D,Re,je,Me.width,Me.height)}Ae&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,Ze,Se)}else n.texImage2D(r.TEXTURE_2D,0,je,Ee,Ze,Se);S(E)&&b(he),Ke.__version=oe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ce(D,E,Z){if(E.image.length!==6)return;const he=be(D,E),ye=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Z);const oe=a.get(ye);if(ye.version!==oe.__version||he===!0){n.activeTexture(r.TEXTURE0+Z);const Ke=Bt.getPrimaries(Bt.workingColorSpace),Ue=E.colorSpace===Ms?null:Bt.getPrimaries(E.colorSpace),Je=E.colorSpace===Ms||Ke===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let ge=0;ge<6;ge++)!Ye&&!Se?Ee[ge]=T(E.image[ge],!0,o.maxCubemapSize):Ee[ge]=Se?E.image[ge].image:E.image[ge],Ee[ge]=We(E,Ee[ge]);const Ze=Ee[0],je=c.convert(E.format,E.colorSpace),Ie=c.convert(E.type),rt=O(E.internalFormat,je,Ie,E.colorSpace),H=E.isVideoTexture!==!0,De=oe.__version===void 0||he===!0,Ae=ye.dataReady;let Re=j(E,Ze);ie(r.TEXTURE_CUBE_MAP,E);let Me;if(Ye){H&&De&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Re,rt,Ze.width,Ze.height);for(let ge=0;ge<6;ge++){Me=Ee[ge].mipmaps;for(let Be=0;Be<Me.length;Be++){const lt=Me[Be];E.format!==Ki?je!==null?H?Ae&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,0,0,lt.width,lt.height,je,lt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,rt,lt.width,lt.height,0,lt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,0,0,lt.width,lt.height,je,Ie,lt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be,rt,lt.width,lt.height,0,je,Ie,lt.data)}}}else{if(Me=E.mipmaps,H&&De){Me.length>0&&Re++;const ge=nt(Ee[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Re,rt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Se){H?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ee[ge].width,Ee[ge].height,je,Ie,Ee[ge].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,rt,Ee[ge].width,Ee[ge].height,0,je,Ie,Ee[ge].data);for(let Be=0;Be<Me.length;Be++){const Ht=Me[Be].image[ge].image;H?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,0,0,Ht.width,Ht.height,je,Ie,Ht.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,rt,Ht.width,Ht.height,0,je,Ie,Ht.data)}}else{H?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,je,Ie,Ee[ge]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,rt,je,Ie,Ee[ge]);for(let Be=0;Be<Me.length;Be++){const lt=Me[Be];H?Ae&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,0,0,je,Ie,lt.image[ge]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Be+1,rt,je,Ie,lt.image[ge])}}}S(E)&&b(r.TEXTURE_CUBE_MAP),oe.__version=ye.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Oe(D,E,Z,he,ye,oe){const Ke=c.convert(Z.format,Z.colorSpace),Ue=c.convert(Z.type),Je=O(Z.internalFormat,Ke,Ue,Z.colorSpace),Ye=a.get(E),Se=a.get(Z);if(Se.__renderTarget=E,!Ye.__hasExternalTextures){const Ee=Math.max(1,E.width>>oe),Ze=Math.max(1,E.height>>oe);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?n.texImage3D(ye,oe,Je,Ee,Ze,E.depth,0,Ke,Ue,null):n.texImage2D(ye,oe,Je,Ee,Ze,0,Ke,Ue,null)}n.bindFramebuffer(r.FRAMEBUFFER,D),Ne(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ye,Se.__webglTexture,0,Qe(E)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ye,Se.__webglTexture,oe),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(D,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const he=E.depthTexture,ye=he&&he.isDepthTexture?he.type:null,oe=z(E.stencilBuffer,ye),Ke=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=Qe(E);Ne(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ue,oe,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,oe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,oe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,D)}else{const he=E.textures;for(let ye=0;ye<he.length;ye++){const oe=he[ye],Ke=c.convert(oe.format,oe.colorSpace),Ue=c.convert(oe.type),Je=O(oe.internalFormat,Ke,Ue,oe.colorSpace),Ye=Qe(E);Z&&Ne(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,Je,E.width,E.height):Ne(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,Je,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Je,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=a.get(E.depthTexture);he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe(E.depthTexture,0);const ye=he.__webglTexture,oe=Qe(E);if(E.depthTexture.format===jl)Ne(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(E.depthTexture.format===kl)Ne(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function pt(D){const E=a.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ye)};he.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=he}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const he=D.texture.mipmaps;he&&he.length>0?qe(E.__webglFramebuffer[0],D):qe(E.__webglFramebuffer,D)}else if(Z){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=r.createRenderbuffer(),Ve(E.__webglDepthbuffer[he],D,!1);else{const ye=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,oe)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ve(E.__webglDepthbuffer,D,!1);else{const ye=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,oe)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function hn(D,E,Z){const he=a.get(D);E!==void 0&&Oe(he.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&pt(D)}function mt(D){const E=D.texture,Z=a.get(D),he=a.get(E);D.addEventListener("dispose",P);const ye=D.textures,oe=D.isWebGLCubeRenderTarget===!0,Ke=ye.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=E.version,u.memory.textures++),oe){Z.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ue]=[];for(let Je=0;Je<E.mipmaps.length;Je++)Z.__webglFramebuffer[Ue][Je]=r.createFramebuffer()}else Z.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)Z.__webglFramebuffer[Ue]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let Ue=0,Je=ye.length;Ue<Je;Ue++){const Ye=a.get(ye[Ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),u.memory.textures++)}if(D.samples>0&&Ne(D)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ye.length;Ue++){const Je=ye[Ue];Z.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue]);const Ye=c.convert(Je.format,Je.colorSpace),Se=c.convert(Je.type),Ee=O(Je.internalFormat,Ye,Se,Je.colorSpace,D.isXRRenderTarget===!0),Ze=Qe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Ee,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){n.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ie(r.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)Oe(Z.__webglFramebuffer[Ue][Je],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Je);else Oe(Z.__webglFramebuffer[Ue],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(E)&&b(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ke){for(let Ue=0,Je=ye.length;Ue<Je;Ue++){const Ye=ye[Ue],Se=a.get(Ye);let Ee=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ee,Se.__webglTexture),ie(Ee,Ye),Oe(Z.__webglFramebuffer,D,Ye,r.COLOR_ATTACHMENT0+Ue,Ee,0),S(Ye)&&b(Ee)}n.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ue,he.__webglTexture),ie(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)Oe(Z.__webglFramebuffer[Je],D,E,r.COLOR_ATTACHMENT0,Ue,Je);else Oe(Z.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,Ue,0);S(E)&&b(Ue),n.unbindTexture()}D.depthBuffer&&pt(D)}function wt(D){const E=D.textures;for(let Z=0,he=E.length;Z<he;Z++){const ye=E[Z];if(S(ye)){const oe=U(D),Ke=a.get(ye).__webglTexture;n.bindTexture(oe,Ke),b(oe),n.unbindTexture()}}}const B=[],ft=[];function Fe(D){if(D.samples>0){if(Ne(D)===!1){const E=D.textures,Z=D.width,he=D.height;let ye=r.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=a.get(D),Ue=E.length>1;if(Ue)for(let Ye=0;Ye<E.length;Ye++)n.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Je=D.texture.mipmaps;Je&&Je.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Ye=0;Ye<E.length;Ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const Se=a.get(E[Ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,Z,he,0,0,Z,he,ye,r.NEAREST),m===!0&&(B.length=0,ft.length=0,B.push(r.COLOR_ATTACHMENT0+Ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(B.push(oe),ft.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ft)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,B))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let Ye=0;Ye<E.length;Ye++){n.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Ye]);const Se=a.get(E[Ye]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,Se,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Qe(D){return Math.min(o.maxSamples,D.samples)}function Ne(D){const E=a.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(D){const E=u.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function We(D,E){const Z=D.colorSpace,he=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==bo&&Z!==Ms&&(Bt.getTransfer(Z)===en?(he!==Ki||ye!==Va)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_n("WebGLTextures: Unsupported texture color space:",Z)),E}function nt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=K,this.setTexture2D=fe,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=hn,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ne}function rR(r,e){function n(a,o=Ms){let c;const u=Bt.getTransfer(o);if(a===Va)return r.UNSIGNED_BYTE;if(a===z0)return r.UNSIGNED_SHORT_4_4_4_4;if(a===I0)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Rb)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===wb)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Tb)return r.BYTE;if(a===Ab)return r.SHORT;if(a===Gl)return r.UNSIGNED_SHORT;if(a===P0)return r.INT;if(a===dr)return r.UNSIGNED_INT;if(a===Ia)return r.FLOAT;if(a===wo)return r.HALF_FLOAT;if(a===Cb)return r.ALPHA;if(a===Db)return r.RGB;if(a===Ki)return r.RGBA;if(a===jl)return r.DEPTH_COMPONENT;if(a===kl)return r.DEPTH_STENCIL;if(a===Ob)return r.RED;if(a===F0)return r.RED_INTEGER;if(a===B0)return r.RG;if(a===H0)return r.RG_INTEGER;if(a===G0)return r.RGBA_INTEGER;if(a===Fu||a===Bu||a===Hu||a===Gu)if(u===en)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zp||a===Ip||a===Fp||a===Bp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===zp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ip)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Fp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Bp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Hp||a===Gp||a===Vp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Hp||a===Gp)return u===en?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Vp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===jp||a===kp||a===Xp||a===Wp||a===qp||a===Yp||a===$p||a===Zp||a===Kp||a===Qp||a===Jp||a===e0||a===t0||a===n0)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===jp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===kp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Xp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Wp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===qp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Yp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===$p)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Zp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Kp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Jp)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===e0)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===t0)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===n0)return u===en?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===i0||a===a0||a===s0)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===i0)return u===en?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===a0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===s0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===r0||a===o0||a===l0||a===c0)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===r0)return c.COMPRESSED_RED_RGTC1_EXT;if(a===o0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===l0)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===c0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const oR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lR=`
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

}`;class cR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new Vb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ka({vertexShader:oR,fragmentShader:lR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ci(new Es(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uR extends Co{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,M=null;const T=typeof XRWebGLBinding<"u",S=new cR,b={},U=n.getContextAttributes();let O=null,z=null;const j=[],L=[],P=new $t;let $=null;const C=new Gi;C.viewport=new Sn;const w=new Gi;w.viewport=new Sn;const V=[C,w],K=new wM;let le=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ce=j[ne];return ce===void 0&&(ce=new ap,j[ne]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ne){let ce=j[ne];return ce===void 0&&(ce=new ap,j[ne]=ce),ce.getGripSpace()},this.getHand=function(ne){let ce=j[ne];return ce===void 0&&(ce=new ap,j[ne]=ce),ce.getHandSpace()};function fe(ne){const ce=L.indexOf(ne.inputSource);if(ce===-1)return;const Oe=j[ce];Oe!==void 0&&(Oe.update(ne.inputSource,ne.frame,p||u),Oe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function I(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",q);for(let ne=0;ne<j.length;ne++){const ce=L[ne];ce!==null&&(L[ne]=null,j[ne].disconnect(ce))}le=null,_e=null,S.reset();for(const ne in b)delete b[ne];e.setRenderTarget(O),y=null,x=null,_=null,o=null,z=null,ze.stop(),a.isPresenting=!1,e.setPixelRatio($),e.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,a.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,a.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",I),o.addEventListener("inputsourceschange",q),U.xrCompatible!==!0&&await n.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,Ve=null,qe=null;U.depth&&(qe=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Oe=U.stencil?kl:jl,Ve=U.stencil?Vl:dr);const pt={colorFormat:n.RGBA8,depthFormat:qe,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(pt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),z=new hr(x.textureWidth,x.textureHeight,{format:Ki,type:Va,depthTexture:new Gb(x.textureWidth,x.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Oe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Oe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new hr(y.framebufferWidth,y.framebufferHeight,{format:Ki,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),ze.setContext(o),ze.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(ne){for(let ce=0;ce<ne.removed.length;ce++){const Oe=ne.removed[ce],Ve=L.indexOf(Oe);Ve>=0&&(L[Ve]=null,j[Ve].disconnect(Oe))}for(let ce=0;ce<ne.added.length;ce++){const Oe=ne.added[ce];let Ve=L.indexOf(Oe);if(Ve===-1){for(let pt=0;pt<j.length;pt++)if(pt>=L.length){L.push(Oe),Ve=pt;break}else if(L[pt]===null){L[pt]=Oe,Ve=pt;break}if(Ve===-1)break}const qe=j[Ve];qe&&qe.connect(Oe)}}const W=new se,me=new se;function ve(ne,ce,Oe){W.setFromMatrixPosition(ce.matrixWorld),me.setFromMatrixPosition(Oe.matrixWorld);const Ve=W.distanceTo(me),qe=ce.projectionMatrix.elements,pt=Oe.projectionMatrix.elements,hn=qe[14]/(qe[10]-1),mt=qe[14]/(qe[10]+1),wt=(qe[9]+1)/qe[5],B=(qe[9]-1)/qe[5],ft=(qe[8]-1)/qe[0],Fe=(pt[8]+1)/pt[0],Qe=hn*ft,Ne=hn*Fe,Ct=Ve/(-ft+Fe),We=Ct*-ft;if(ce.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(We),ne.translateZ(Ct),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),qe[10]===-1)ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const nt=hn+Ct,D=mt+Ct,E=Qe-We,Z=Ne+(Ve-We),he=wt*mt/D*nt,ye=B*mt/D*nt;ne.projectionMatrix.makePerspective(E,Z,he,ye,nt,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function N(ne,ce){ce===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ce.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let ce=ne.near,Oe=ne.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(Oe=S.depthFar)),K.near=w.near=C.near=ce,K.far=w.far=C.far=Oe,(le!==K.near||_e!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),le=K.near,_e=K.far),K.layers.mask=ne.layers.mask|6,C.layers.mask=K.layers.mask&3,w.layers.mask=K.layers.mask&5;const Ve=ne.parent,qe=K.cameras;N(K,Ve);for(let pt=0;pt<qe.length;pt++)N(qe[pt],Ve);qe.length===2?ve(K,C,w):K.projectionMatrix.copy(C.projectionMatrix),ie(ne,K,Ve)};function ie(ne,ce,Oe){Oe===null?ne.matrix.copy(ce.matrixWorld):(ne.matrix.copy(Oe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ce.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=u0*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(ne){m=ne,x!==null&&(x.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(ne){return b[ne]};let be=null;function Te(ne,ce){if(g=ce.getViewerPose(p||u),M=ce,g!==null){const Oe=g.views;y!==null&&(e.setRenderTargetFramebuffer(z,y.framebuffer),e.setRenderTarget(z));let Ve=!1;Oe.length!==K.cameras.length&&(K.cameras.length=0,Ve=!0);for(let mt=0;mt<Oe.length;mt++){const wt=Oe[mt];let B=null;if(y!==null)B=y.getViewport(wt);else{const Fe=_.getViewSubImage(x,wt);B=Fe.viewport,mt===0&&(e.setRenderTargetTextures(z,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(z))}let ft=V[mt];ft===void 0&&(ft=new Gi,ft.layers.enable(mt),ft.viewport=new Sn,V[mt]=ft),ft.matrix.fromArray(wt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(wt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(B.x,B.y,B.width,B.height),mt===0&&(K.matrix.copy(ft.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ve===!0&&K.cameras.push(ft)}const qe=o.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const mt=_.getDepthInformation(Oe[0]);mt&&mt.isValid&&mt.texture&&S.init(mt,o.renderState)}if(qe&&qe.includes("camera-access")&&T){e.state.unbindTexture(),_=a.getBinding();for(let mt=0;mt<Oe.length;mt++){const wt=Oe[mt].camera;if(wt){let B=b[wt];B||(B=new Vb,b[wt]=B);const ft=_.getCameraImage(wt);B.sourceTexture=ft}}}}for(let Oe=0;Oe<j.length;Oe++){const Ve=L[Oe],qe=j[Oe];Ve!==null&&qe!==void 0&&qe.update(Ve,ce,p||u)}be&&be(ne,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),M=null}const ze=new jb;ze.setAnimationLoop(Te),this.setAnimationLoop=function(ne){be=ne},this.dispose=function(){}}}const er=new ja,fR=new xn;function dR(r,e){function n(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function a(S,b){b.color.getRGB(S.fogColor.value,Fb(r)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function o(S,b,U,O,z){b.isMeshBasicMaterial||b.isMeshLambertMaterial?c(S,b):b.isMeshToonMaterial?(c(S,b),_(S,b)):b.isMeshPhongMaterial?(c(S,b),g(S,b)):b.isMeshStandardMaterial?(c(S,b),x(S,b),b.isMeshPhysicalMaterial&&y(S,b,z)):b.isMeshMatcapMaterial?(c(S,b),M(S,b)):b.isMeshDepthMaterial?c(S,b):b.isMeshDistanceMaterial?(c(S,b),T(S,b)):b.isMeshNormalMaterial?c(S,b):b.isLineBasicMaterial?(u(S,b),b.isLineDashedMaterial&&d(S,b)):b.isPointsMaterial?m(S,b,U,O):b.isSpriteMaterial?p(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,n(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,n(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,n(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===mi&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,n(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===mi&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,n(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,n(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,n(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const U=e.get(b),O=U.envMap,z=U.envMapRotation;O&&(S.envMap.value=O,er.copy(z),er.x*=-1,er.y*=-1,er.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),S.envMapRotation.value.setFromMatrix4(fR.makeRotationFromEuler(er)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,n(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,n(b.aoMap,S.aoMapTransform))}function u(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,n(b.map,S.mapTransform))}function d(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function m(S,b,U,O){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*U,S.scale.value=O*.5,b.map&&(S.map.value=b.map,n(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,n(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function p(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,n(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,n(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function g(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function _(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function x(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,n(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,n(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function y(S,b,U){S.ior.value=b.ior,b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,n(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,n(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,n(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,n(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,n(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===mi&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,n(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,n(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,n(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,n(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,n(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,n(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,n(b.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,b){b.matcap&&(S.matcap.value=b.matcap)}function T(S,b){const U=e.get(b).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function hR(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,O){const z=O.program;a.uniformBlockBinding(U,z)}function p(U,O){let z=o[U.id];z===void 0&&(M(U),z=g(U),o[U.id]=z,U.addEventListener("dispose",S));const j=O.program;a.updateUBOMapping(U,j);const L=e.render.frame;c[U.id]!==L&&(x(U),c[U.id]=L)}function g(U){const O=_();U.__bindingPointIndex=O;const z=r.createBuffer(),j=U.__size,L=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,z),r.bufferData(r.UNIFORM_BUFFER,j,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,z),z}function _(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return _n("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const O=o[U.id],z=U.uniforms,j=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let L=0,P=z.length;L<P;L++){const $=Array.isArray(z[L])?z[L]:[z[L]];for(let C=0,w=$.length;C<w;C++){const V=$[C];if(y(V,L,C,j)===!0){const K=V.__offset,le=Array.isArray(V.value)?V.value:[V.value];let _e=0;for(let fe=0;fe<le.length;fe++){const I=le[fe],q=T(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,K+_e,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,_e),_e+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(U,O,z,j){const L=U.value,P=O+"_"+z;if(j[P]===void 0)return typeof L=="number"||typeof L=="boolean"?j[P]=L:j[P]=L.clone(),!0;{const $=j[P];if(typeof L=="number"||typeof L=="boolean"){if($!==L)return j[P]=L,!0}else if($.equals(L)===!1)return $.copy(L),!0}return!1}function M(U){const O=U.uniforms;let z=0;const j=16;for(let P=0,$=O.length;P<$;P++){const C=Array.isArray(O[P])?O[P]:[O[P]];for(let w=0,V=C.length;w<V;w++){const K=C[w],le=Array.isArray(K.value)?K.value:[K.value];for(let _e=0,fe=le.length;_e<fe;_e++){const I=le[_e],q=T(I),W=z%j,me=W%q.boundary,ve=W+me;z+=me,ve!==0&&j-ve<q.storage&&(z+=j-ve),K.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=z,z+=q.storage}}}const L=z%j;return L>0&&(z+=j-L),U.__size=z,U.__cache={},this}function T(U){const O={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(O.boundary=4,O.storage=4):U.isVector2?(O.boundary=8,O.storage=8):U.isVector3||U.isColor?(O.boundary=16,O.storage=12):U.isVector4?(O.boundary=16,O.storage=16):U.isMatrix3?(O.boundary=48,O.storage=48):U.isMatrix4?(O.boundary=64,O.storage=64):U.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",U),O}function S(U){const O=U.target;O.removeEventListener("dispose",S);const z=u.indexOf(O.__bindingPointIndex);u.splice(z,1),r.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function b(){for(const U in o)r.deleteBuffer(o[U]);u=[],o={},c={}}return{bind:m,update:p,dispose:b}}const pR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Na=null;function mR(){return Na===null&&(Na=new pM(pR,32,32,B0,wo),Na.minFilter=Jn,Na.magFilter=Jn,Na.wrapS=oi,Na.wrapT=oi,Na.generateMipmaps=!1,Na.needsUpdate=!0),Na}class gR{constructor(e={}){const{canvas:n=H2(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const M=new Set([G0,H0,F0]),T=new Set([Va,dr,Gl,Vl,z0,I0]),S=new Uint32Array(4),b=new Int32Array(4);let U=null,O=null;const z=[],j=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=As,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1;this._outputColorSpace=ri;let $=0,C=0,w=null,V=-1,K=null;const le=new Sn,_e=new Sn;let fe=null;const I=new Vt(0);let q=0,W=n.width,me=n.height,ve=1,N=null,ie=null;const be=new Sn(0,0,W,me),Te=new Sn(0,0,W,me);let ze=!1;const ne=new W0;let ce=!1,Oe=!1;const Ve=new xn,qe=new se,pt=new Sn,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function wt(){return w===null?ve:1}let B=a;function ft(R,k){return n.getContext(R,k)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${N0}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",Be,!1),B===null){const k="webgl2";if(B=ft(k,R),B===null)throw ft(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let Fe,Qe,Ne,Ct,We,nt,D,E,Z,he,ye,oe,Ke,Ue,Je,Ye,Se,Ee,Ze,je,Ie,rt,H,De;function Ae(){Fe=new ET(B),Fe.init(),rt=new rR(B,Fe),Qe=new mT(B,Fe,e,rt),Ne=new aR(B,Fe),Qe.reversedDepthBuffer&&x&&Ne.buffers.depth.setReversed(!0),Ct=new RT(B),We=new XA,nt=new sR(B,Fe,Ne,We,Qe,rt,Ct),D=new _T(L),E=new MT(L),Z=new OM(B),H=new hT(B,Z),he=new TT(B,Z,Ct,H),ye=new CT(B,he,Z,Ct),Ze=new wT(B,Qe,nt),Ye=new gT(We),oe=new kA(L,D,E,Fe,Qe,H,Ye),Ke=new dR(L,We),Ue=new qA,Je=new JA(Fe),Ee=new dT(L,D,E,Ne,ye,y,m),Se=new nR(L,ye,Qe),De=new hR(B,Ct,Qe,Ne),je=new pT(B,Fe,Ct),Ie=new AT(B,Fe,Ct),Ct.programs=oe.programs,L.capabilities=Qe,L.extensions=Fe,L.properties=We,L.renderLists=Ue,L.shadowMap=Se,L.state=Ne,L.info=Ct}Ae();const Re=new uR(L,B);this.xr=Re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(W,me,!1))},this.getSize=function(R){return R.set(W,me)},this.setSize=function(R,k,ae=!0){if(Re.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,me=k,n.width=Math.floor(R*ve),n.height=Math.floor(k*ve),ae===!0&&(n.style.width=R+"px",n.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(W*ve,me*ve).floor()},this.setDrawingBufferSize=function(R,k,ae){W=R,me=k,ve=ae,n.width=Math.floor(R*ae),n.height=Math.floor(k*ae),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(le)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,k,ae,ee){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,k,ae,ee),Ne.viewport(le.copy(be).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,k,ae,ee){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,k,ae,ee),Ne.scissor(_e.copy(Te).multiplyScalar(ve).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){Ne.setScissorTest(ze=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,ae=!0){let ee=0;if(R){let Y=!1;if(w!==null){const we=w.texture.format;Y=M.has(we)}if(Y){const we=w.texture.type,Le=T.has(we),He=Ee.getClearColor(),Ge=Ee.getClearAlpha(),at=He.r,ot=He.g,et=He.b;Le?(S[0]=at,S[1]=ot,S[2]=et,S[3]=Ge,B.clearBufferuiv(B.COLOR,0,S)):(b[0]=at,b[1]=ot,b[2]=et,b[3]=Ge,B.clearBufferiv(B.COLOR,0,b))}else ee|=B.COLOR_BUFFER_BIT}k&&(ee|=B.DEPTH_BUFFER_BIT),ae&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),Ee.dispose(),Ue.dispose(),Je.dispose(),We.dispose(),D.dispose(),E.dispose(),ye.dispose(),H.dispose(),De.dispose(),oe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",pn),Re.removeEventListener("sessionend",an),Mt.stop()};function Me(R){R.preventDefault(),rv("WebGLRenderer: Context Lost."),P=!0}function ge(){rv("WebGLRenderer: Context Restored."),P=!1;const R=Ct.autoReset,k=Se.enabled,ae=Se.autoUpdate,ee=Se.needsUpdate,Y=Se.type;Ae(),Ct.autoReset=R,Se.enabled=k,Se.autoUpdate=ae,Se.needsUpdate=ee,Se.type=Y}function Be(R){_n("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){const k=R.target;k.removeEventListener("dispose",lt),Ht(k)}function Ht(R){ke(R),We.remove(R)}function ke(R){const k=We.get(R).programs;k!==void 0&&(k.forEach(function(ae){oe.releaseProgram(ae)}),R.isShaderMaterial&&oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,ae,ee,Y,we){k===null&&(k=hn);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,He=Ds(R,k,ae,ee,Y);Ne.setMaterial(ee,Le);let Ge=ae.index,at=1;if(ee.wireframe===!0){if(Ge=he.getWireframeAttribute(ae),Ge===void 0)return;at=2}const ot=ae.drawRange,et=ae.attributes.position;let vt=ot.start*at,Nt=(ot.start+ot.count)*at;we!==null&&(vt=Math.max(vt,we.start*at),Nt=Math.min(Nt,(we.start+we.count)*at)),Ge!==null?(vt=Math.max(vt,0),Nt=Math.min(Nt,Ge.count)):et!=null&&(vt=Math.max(vt,0),Nt=Math.min(Nt,et.count));const zt=Nt-vt;if(zt<0||zt===1/0)return;H.setup(Y,ee,He,ae,Ge);let Dt,jt=je;if(Ge!==null&&(Dt=Z.get(Ge),jt=Ie,jt.setIndex(Dt)),Y.isMesh)ee.wireframe===!0?(Ne.setLineWidth(ee.wireframeLinewidth*wt()),jt.setMode(B.LINES)):jt.setMode(B.TRIANGLES);else if(Y.isLine){let it=ee.linewidth;it===void 0&&(it=1),Ne.setLineWidth(it*wt()),Y.isLineSegments?jt.setMode(B.LINES):Y.isLineLoop?jt.setMode(B.LINE_LOOP):jt.setMode(B.LINE_STRIP)}else Y.isPoints?jt.setMode(B.POINTS):Y.isSprite&&jt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Wl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))jt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const it=Y._multiDrawStarts,tn=Y._multiDrawCounts,Ot=Y._multiDrawCount,Bn=Ge?Z.get(Ge).bytesPerElement:1,Wa=We.get(ee).currentProgram.getUniforms();for(let sn=0;sn<Ot;sn++)Wa.setValue(B,"_gl_DrawID",sn),jt.render(it[sn]/Bn,tn[sn])}else if(Y.isInstancedMesh)jt.renderInstances(vt,zt,Y.count);else if(ae.isInstancedBufferGeometry){const it=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,tn=Math.min(ae.instanceCount,it);jt.renderInstances(vt,zt,tn)}else jt.render(vt,zt)};function gt(R,k,ae){R.transparent===!0&&R.side===za&&R.forceSinglePass===!1?(R.side=mi,R.needsUpdate=!0,Xt(R,k,ae),R.side=Cs,R.needsUpdate=!0,Xt(R,k,ae),R.side=za):Xt(R,k,ae)}this.compile=function(R,k,ae=null){ae===null&&(ae=R),O=Je.get(ae),O.init(k),j.push(O),ae.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(O.pushLight(Y),Y.castShadow&&O.pushShadow(Y))}),R!==ae&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(O.pushLight(Y),Y.castShadow&&O.pushShadow(Y))}),O.setupLights();const ee=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const He=we[Le];gt(He,ae,Y),ee.add(He)}else gt(we,ae,Y),ee.add(we)}),O=j.pop(),ee},this.compileAsync=function(R,k,ae=null){const ee=this.compile(R,k,ae);return new Promise(Y=>{function we(){if(ee.forEach(function(Le){We.get(Le).currentProgram.isReady()&&ee.delete(Le)}),ee.size===0){Y(R);return}setTimeout(we,10)}Fe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Pt=null;function An(R){Pt&&Pt(R)}function pn(){Mt.stop()}function an(){Mt.start()}const Mt=new jb;Mt.setAnimationLoop(An),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(R){Pt=R,Re.setAnimationLoop(R),R===null?Mt.stop():Mt.start()},Re.addEventListener("sessionstart",pn),Re.addEventListener("sessionend",an),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){_n("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(k),k=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(L,R,k,w),O=Je.get(R,j.length),O.init(k),j.push(O),Ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(Ve,oa,k.reversedDepth),Oe=this.localClippingEnabled,ce=Ye.init(this.clippingPlanes,Oe),U=Ue.get(R,z.length),U.init(),z.push(U),Re.enabled===!0&&Re.isPresenting===!0){const we=L.xr.getDepthSensingMesh();we!==null&&vn(we,k,-1/0,L.sortObjects)}vn(R,k,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(N,ie),mt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,mt&&Ee.addToRenderList(U,R),this.info.render.frame++,ce===!0&&Ye.beginShadows();const ae=O.state.shadowsArray;Se.render(ae,R,k),ce===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=U.opaque,Y=U.transmissive;if(O.setupLights(),k.isArrayCamera){const we=k.cameras;if(Y.length>0)for(let Le=0,He=we.length;Le<He;Le++){const Ge=we[Le];xt(ee,Y,R,Ge)}mt&&Ee.render(R);for(let Le=0,He=we.length;Le<He;Le++){const Ge=we[Le];ct(U,R,Ge,Ge.viewport)}}else Y.length>0&&xt(ee,Y,R,k),mt&&Ee.render(R),ct(U,R,k);w!==null&&C===0&&(nt.updateMultisampleRenderTarget(w),nt.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(L,R,k),H.resetDefaultState(),V=-1,K=null,j.pop(),j.length>0?(O=j[j.length-1],ce===!0&&Ye.setGlobalState(L.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function vn(R,k,ae,ee){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ne.intersectsSprite(R)){ee&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const Le=ye.update(R),He=R.material;He.visible&&U.push(R,Le,He,ae,pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ne.intersectsObject(R))){const Le=ye.update(R),He=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),pt.copy(Le.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(He)){const Ge=Le.groups;for(let at=0,ot=Ge.length;at<ot;at++){const et=Ge[at],vt=He[et.materialIndex];vt&&vt.visible&&U.push(R,Le,vt,ae,pt.z,et)}}else He.visible&&U.push(R,Le,He,ae,pt.z,null)}}const we=R.children;for(let Le=0,He=we.length;Le<He;Le++)vn(we[Le],k,ae,ee)}function ct(R,k,ae,ee){const{opaque:Y,transmissive:we,transparent:Le}=R;O.setupLightsView(ae),ce===!0&&Ye.setGlobalState(L.clippingPlanes,ae),ee&&Ne.viewport(le.copy(ee)),Y.length>0&&Zt(Y,k,ae),we.length>0&&Zt(we,k,ae),Le.length>0&&Zt(Le,k,ae),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function xt(R,k,ae,ee){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;O.state.transmissionRenderTarget[ee.id]===void 0&&(O.state.transmissionRenderTarget[ee.id]=new hr(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?wo:Va,minFilter:sr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const we=O.state.transmissionRenderTarget[ee.id],Le=ee.viewport||le;we.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);const He=L.getRenderTarget(),Ge=L.getActiveCubeFace(),at=L.getActiveMipmapLevel();L.setRenderTarget(we),L.getClearColor(I),q=L.getClearAlpha(),q<1&&L.setClearColor(16777215,.5),L.clear(),mt&&Ee.render(ae);const ot=L.toneMapping;L.toneMapping=As;const et=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),O.setupLightsView(ee),ce===!0&&Ye.setGlobalState(L.clippingPlanes,ee),Zt(R,ae,ee),nt.updateMultisampleRenderTarget(we),nt.updateRenderTargetMipmap(we),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Nt=0,zt=k.length;Nt<zt;Nt++){const Dt=k[Nt],{object:jt,geometry:it,material:tn,group:Ot}=Dt;if(tn.side===za&&jt.layers.test(ee.layers)){const Bn=tn.side;tn.side=mi,tn.needsUpdate=!0,kt(jt,ae,ee,it,tn,Ot),tn.side=Bn,tn.needsUpdate=!0,vt=!0}}vt===!0&&(nt.updateMultisampleRenderTarget(we),nt.updateRenderTargetMipmap(we))}L.setRenderTarget(He,Ge,at),L.setClearColor(I,q),et!==void 0&&(ee.viewport=et),L.toneMapping=ot}function Zt(R,k,ae){const ee=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,we=R.length;Y<we;Y++){const Le=R[Y],{object:He,geometry:Ge,group:at}=Le;let ot=Le.material;ot.allowOverride===!0&&ee!==null&&(ot=ee),He.layers.test(ae.layers)&&kt(He,k,ae,Ge,ot,at)}}function kt(R,k,ae,ee,Y,we){R.onBeforeRender(L,k,ae,ee,Y,we),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(L,k,ae,ee,R,we),Y.transparent===!0&&Y.side===za&&Y.forceSinglePass===!1?(Y.side=mi,Y.needsUpdate=!0,L.renderBufferDirect(ae,k,ee,Y,R,we),Y.side=Cs,Y.needsUpdate=!0,L.renderBufferDirect(ae,k,ee,Y,R,we),Y.side=za):L.renderBufferDirect(ae,k,ee,Y,R,we),R.onAfterRender(L,k,ae,ee,Y,we)}function Xt(R,k,ae){k.isScene!==!0&&(k=hn);const ee=We.get(R),Y=O.state.lights,we=O.state.shadowsArray,Le=Y.state.version,He=oe.getParameters(R,Y.state,we,k,ae),Ge=oe.getProgramCacheKey(He);let at=ee.programs;ee.environment=R.isMeshStandardMaterial?k.environment:null,ee.fog=k.fog,ee.envMap=(R.isMeshStandardMaterial?E:D).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,at===void 0&&(R.addEventListener("dispose",lt),at=new Map,ee.programs=at);let ot=at.get(Ge);if(ot!==void 0){if(ee.currentProgram===ot&&ee.lightsStateVersion===Le)return vi(R,He),ot}else He.uniforms=oe.getUniforms(R),R.onBeforeCompile(He,L),ot=oe.acquireProgram(He,Ge),at.set(Ge,ot),ee.uniforms=He.uniforms;const et=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=Ye.uniform),vi(R,He),ee.needsLights=Os(R),ee.lightsStateVersion=Le,ee.needsLights&&(et.ambientLightColor.value=Y.state.ambient,et.lightProbe.value=Y.state.probe,et.directionalLights.value=Y.state.directional,et.directionalLightShadows.value=Y.state.directionalShadow,et.spotLights.value=Y.state.spot,et.spotLightShadows.value=Y.state.spotShadow,et.rectAreaLights.value=Y.state.rectArea,et.ltc_1.value=Y.state.rectAreaLTC1,et.ltc_2.value=Y.state.rectAreaLTC2,et.pointLights.value=Y.state.point,et.pointLightShadows.value=Y.state.pointShadow,et.hemisphereLights.value=Y.state.hemi,et.directionalShadowMap.value=Y.state.directionalShadowMap,et.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,et.spotShadowMap.value=Y.state.spotShadowMap,et.spotLightMatrix.value=Y.state.spotLightMatrix,et.spotLightMap.value=Y.state.spotLightMap,et.pointShadowMap.value=Y.state.pointShadowMap,et.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=ot,ee.uniformsList=null,ot}function ii(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Vu.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function vi(R,k){const ae=We.get(R);ae.outputColorSpace=k.outputColorSpace,ae.batching=k.batching,ae.batchingColor=k.batchingColor,ae.instancing=k.instancing,ae.instancingColor=k.instancingColor,ae.instancingMorph=k.instancingMorph,ae.skinning=k.skinning,ae.morphTargets=k.morphTargets,ae.morphNormals=k.morphNormals,ae.morphColors=k.morphColors,ae.morphTargetsCount=k.morphTargetsCount,ae.numClippingPlanes=k.numClippingPlanes,ae.numIntersection=k.numClipIntersection,ae.vertexAlphas=k.vertexAlphas,ae.vertexTangents=k.vertexTangents,ae.toneMapping=k.toneMapping}function Ds(R,k,ae,ee,Y){k.isScene!==!0&&(k=hn),nt.resetTextureUnits();const we=k.fog,Le=ee.isMeshStandardMaterial?k.environment:null,He=w===null?L.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:bo,Ge=(ee.isMeshStandardMaterial?E:D).get(ee.envMap||Le),at=ee.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ot=!!ae.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),et=!!ae.morphAttributes.position,vt=!!ae.morphAttributes.normal,Nt=!!ae.morphAttributes.color;let zt=As;ee.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(zt=L.toneMapping);const Dt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,jt=Dt!==void 0?Dt.length:0,it=We.get(ee),tn=O.state.lights;if(ce===!0&&(Oe===!0||R!==K)){const Gn=R===K&&ee.id===V;Ye.setState(ee,R,Gn)}let Ot=!1;ee.version===it.__version?(it.needsLights&&it.lightsStateVersion!==tn.state.version||it.outputColorSpace!==He||Y.isBatchedMesh&&it.batching===!1||!Y.isBatchedMesh&&it.batching===!0||Y.isBatchedMesh&&it.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&it.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&it.instancing===!1||!Y.isInstancedMesh&&it.instancing===!0||Y.isSkinnedMesh&&it.skinning===!1||!Y.isSkinnedMesh&&it.skinning===!0||Y.isInstancedMesh&&it.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&it.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&it.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&it.instancingMorph===!1&&Y.morphTexture!==null||it.envMap!==Ge||ee.fog===!0&&it.fog!==we||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ye.numPlanes||it.numIntersection!==Ye.numIntersection)||it.vertexAlphas!==at||it.vertexTangents!==ot||it.morphTargets!==et||it.morphNormals!==vt||it.morphColors!==Nt||it.toneMapping!==zt||it.morphTargetsCount!==jt)&&(Ot=!0):(Ot=!0,it.__version=ee.version);let Bn=it.currentProgram;Ot===!0&&(Bn=Xt(ee,k,Y));let Wa=!1,sn=!1,ua=!1;const rn=Bn.getUniforms(),Hn=it.uniforms;if(Ne.useProgram(Bn.program)&&(Wa=!0,sn=!0,ua=!0),ee.id!==V&&(V=ee.id,sn=!0),Wa||K!==R){Ne.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),rn.setValue(B,"projectionMatrix",R.projectionMatrix),rn.setValue(B,"viewMatrix",R.matrixWorldInverse);const Yn=rn.map.cameraPosition;Yn!==void 0&&Yn.setValue(B,qe.setFromMatrixPosition(R.matrixWorld)),Qe.logarithmicDepthBuffer&&rn.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&rn.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,sn=!0,ua=!0)}if(Y.isSkinnedMesh){rn.setOptional(B,Y,"bindMatrix"),rn.setOptional(B,Y,"bindMatrixInverse");const Gn=Y.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),rn.setValue(B,"boneTexture",Gn.boneTexture,nt))}Y.isBatchedMesh&&(rn.setOptional(B,Y,"batchingTexture"),rn.setValue(B,"batchingTexture",Y._matricesTexture,nt),rn.setOptional(B,Y,"batchingIdTexture"),rn.setValue(B,"batchingIdTexture",Y._indirectTexture,nt),rn.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&rn.setValue(B,"batchingColorTexture",Y._colorsTexture,nt));const Un=ae.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ze.update(Y,ae,Bn),(sn||it.receiveShadow!==Y.receiveShadow)&&(it.receiveShadow=Y.receiveShadow,rn.setValue(B,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Hn.envMap.value=Ge,Hn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&k.environment!==null&&(Hn.envMapIntensity.value=k.environmentIntensity),Hn.dfgLUT!==void 0&&(Hn.dfgLUT.value=mR()),sn&&(rn.setValue(B,"toneMappingExposure",L.toneMappingExposure),it.needsLights&&Oo(Hn,ua),we&&ee.fog===!0&&Ke.refreshFogUniforms(Hn,we),Ke.refreshMaterialUniforms(Hn,ee,ve,me,O.state.transmissionRenderTarget[R.id]),Vu.upload(B,ii(it),Hn,nt)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Vu.upload(B,ii(it),Hn,nt),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&rn.setValue(B,"center",Y.center),rn.setValue(B,"modelViewMatrix",Y.modelViewMatrix),rn.setValue(B,"normalMatrix",Y.normalMatrix),rn.setValue(B,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Gn=ee.uniformsGroups;for(let Yn=0,ta=Gn.length;Yn<ta;Yn++){const fa=Gn[Yn];De.update(fa,Bn),De.bind(fa,Bn)}}return Bn}function Oo(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Os(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,k,ae){const ee=We.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),We.get(R.texture).__webglTexture=k,We.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ae,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const ae=We.get(R);ae.__webglFramebuffer=k,ae.__useDefaultFramebuffer=k===void 0};const ca=B.createFramebuffer();this.setRenderTarget=function(R,k=0,ae=0){w=R,$=k,C=ae;let ee=!0,Y=null,we=!1,Le=!1;if(R){const Ge=We.get(R);if(Ge.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(B.FRAMEBUFFER,null),ee=!1;else if(Ge.__webglFramebuffer===void 0)nt.setupRenderTarget(R);else if(Ge.__hasExternalTextures)nt.rebindTextures(R,We.get(R.texture).__webglTexture,We.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const et=R.depthTexture;if(Ge.__boundDepthTexture!==et){if(et!==null&&We.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(R)}}const at=R.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Le=!0);const ot=We.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ot[k])?Y=ot[k][ae]:Y=ot[k],we=!0):R.samples>0&&nt.useMultisampledRTT(R)===!1?Y=We.get(R).__webglMultisampledFramebuffer:Array.isArray(ot)?Y=ot[ae]:Y=ot,le.copy(R.viewport),_e.copy(R.scissor),fe=R.scissorTest}else le.copy(be).multiplyScalar(ve).floor(),_e.copy(Te).multiplyScalar(ve).floor(),fe=ze;if(ae!==0&&(Y=ca),Ne.bindFramebuffer(B.FRAMEBUFFER,Y)&&ee&&Ne.drawBuffers(R,Y),Ne.viewport(le),Ne.scissor(_e),Ne.setScissorTest(fe),we){const Ge=We.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ge.__webglTexture,ae)}else if(Le){const Ge=k;for(let at=0;at<R.textures.length;at++){const ot=We.get(R.textures[at]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+at,ot.__webglTexture,ae,Ge)}}else if(R!==null&&ae!==0){const Ge=We.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ge.__webglTexture,ae)}V=-1},this.readRenderTargetPixels=function(R,k,ae,ee,Y,we,Le,He=0){if(!(R&&R.isWebGLRenderTarget)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=We.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ge=Ge[Le]),Ge){Ne.bindFramebuffer(B.FRAMEBUFFER,Ge);try{const at=R.textures[He],ot=at.format,et=at.type;if(!Qe.textureFormatReadable(ot)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(et)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-ee&&ae>=0&&ae<=R.height-Y&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+He),B.readPixels(k,ae,ee,Y,rt.convert(ot),rt.convert(et),we))}finally{const at=w!==null?We.get(w).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(R,k,ae,ee,Y,we,Le,He=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=We.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ge=Ge[Le]),Ge)if(k>=0&&k<=R.width-ee&&ae>=0&&ae<=R.height-Y){Ne.bindFramebuffer(B.FRAMEBUFFER,Ge);const at=R.textures[He],ot=at.format,et=at.type;if(!Qe.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+He),B.readPixels(k,ae,ee,Y,rt.convert(ot),rt.convert(et),0);const Nt=w!==null?We.get(w).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,Nt);const zt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await G2(B,zt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(vt),B.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,ae=0){const ee=Math.pow(2,-ae),Y=Math.floor(R.image.width*ee),we=Math.floor(R.image.height*ee),Le=k!==null?k.x:0,He=k!==null?k.y:0;nt.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,Le,He,Y,we),Ne.unbindTexture()};const Uo=B.createFramebuffer(),Xa=B.createFramebuffer();this.copyTextureToTexture=function(R,k,ae=null,ee=null,Y=0,we=null){we===null&&(Y!==0?(Wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Y,Y=0):we=0);let Le,He,Ge,at,ot,et,vt,Nt,zt;const Dt=R.isCompressedTexture?R.mipmaps[we]:R.image;if(ae!==null)Le=ae.max.x-ae.min.x,He=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,at=ae.min.x,ot=ae.min.y,et=ae.isBox3?ae.min.z:0;else{const Un=Math.pow(2,-Y);Le=Math.floor(Dt.width*Un),He=Math.floor(Dt.height*Un),R.isDataArrayTexture?Ge=Dt.depth:R.isData3DTexture?Ge=Math.floor(Dt.depth*Un):Ge=1,at=0,ot=0,et=0}ee!==null?(vt=ee.x,Nt=ee.y,zt=ee.z):(vt=0,Nt=0,zt=0);const jt=rt.convert(k.format),it=rt.convert(k.type);let tn;k.isData3DTexture?(nt.setTexture3D(k,0),tn=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(nt.setTexture2DArray(k,0),tn=B.TEXTURE_2D_ARRAY):(nt.setTexture2D(k,0),tn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Ot=B.getParameter(B.UNPACK_ROW_LENGTH),Bn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Wa=B.getParameter(B.UNPACK_SKIP_PIXELS),sn=B.getParameter(B.UNPACK_SKIP_ROWS),ua=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Dt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,at),B.pixelStorei(B.UNPACK_SKIP_ROWS,ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,et);const rn=R.isDataArrayTexture||R.isData3DTexture,Hn=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const Un=We.get(R),Gn=We.get(k),Yn=We.get(Un.__renderTarget),ta=We.get(Gn.__renderTarget);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,Yn.__webglFramebuffer),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let fa=0;fa<Ge;fa++)rn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(R).__webglTexture,Y,et+fa),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(k).__webglTexture,we,zt+fa)),B.blitFramebuffer(at,ot,Le,He,vt,Nt,Le,He,B.DEPTH_BUFFER_BIT,B.NEAREST);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||We.has(R)){const Un=We.get(R),Gn=We.get(k);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,Uo),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,Xa);for(let Yn=0;Yn<Ge;Yn++)rn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Un.__webglTexture,Y,et+Yn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Un.__webglTexture,Y),Hn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gn.__webglTexture,we,zt+Yn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gn.__webglTexture,we),Y!==0?B.blitFramebuffer(at,ot,Le,He,vt,Nt,Le,He,B.COLOR_BUFFER_BIT,B.NEAREST):Hn?B.copyTexSubImage3D(tn,we,vt,Nt,zt+Yn,at,ot,Le,He):B.copyTexSubImage2D(tn,we,vt,Nt,at,ot,Le,He);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Hn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(tn,we,vt,Nt,zt,Le,He,Ge,jt,it,Dt.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(tn,we,vt,Nt,zt,Le,He,Ge,jt,Dt.data):B.texSubImage3D(tn,we,vt,Nt,zt,Le,He,Ge,jt,it,Dt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,vt,Nt,Le,He,jt,it,Dt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,vt,Nt,Dt.width,Dt.height,jt,Dt.data):B.texSubImage2D(B.TEXTURE_2D,we,vt,Nt,Le,He,jt,it,Dt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Wa),B.pixelStorei(B.UNPACK_SKIP_ROWS,sn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ua),we===0&&k.generateMipmaps&&B.generateMipmap(tn),Ne.unbindTexture()},this.initRenderTarget=function(R){We.get(R).__webglFramebuffer===void 0&&nt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?nt.setTextureCube(R,0):R.isData3DTexture?nt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?nt.setTexture2DArray(R,0):nt.setTexture2D(R,0),Ne.unbindTexture()},this.resetState=function(){$=0,C=0,w=null,Ne.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Bt._getUnpackColorSpace()}}const _R="/MarcoinSF/assets/2021-10-31-CDuc_qmG.JPG",xR=Object.freeze(Object.defineProperty({__proto__:null,default:_R},Symbol.toStringTag,{value:"Module"})),vR="/MarcoinSF/assets/2021-10-31-DcWNroCu.jpeg",bR=Object.freeze(Object.defineProperty({__proto__:null,default:vR},Symbol.toStringTag,{value:"Module"})),yR="/MarcoinSF/assets/2021-12-10-Cfb1W4aW.jpg",SR=Object.freeze(Object.defineProperty({__proto__:null,default:yR},Symbol.toStringTag,{value:"Module"})),MR="/MarcoinSF/assets/2022-05-13-ZW7768q6.JPG",ER=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),TR="/MarcoinSF/assets/2022-06-13-CxNIdfIC.jpeg",AR=Object.freeze(Object.defineProperty({__proto__:null,default:TR},Symbol.toStringTag,{value:"Module"})),RR="/MarcoinSF/assets/2022-07-06-2-todjBix1.jpeg",wR=Object.freeze(Object.defineProperty({__proto__:null,default:RR},Symbol.toStringTag,{value:"Module"})),CR="/MarcoinSF/assets/2022-08-14-DUbsbZ4q.JPG",DR=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),OR="/MarcoinSF/assets/2022-10-29%20Large-BwUDGQao.jpeg",UR=Object.freeze(Object.defineProperty({__proto__:null,default:OR},Symbol.toStringTag,{value:"Module"})),LR="/MarcoinSF/assets/2023-01-01-ZvfabK-5.jpeg",NR=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),PR="/MarcoinSF/assets/2023-03-01-aqF_3lvk.jpeg",zR=Object.freeze(Object.defineProperty({__proto__:null,default:PR},Symbol.toStringTag,{value:"Module"})),IR="/MarcoinSF/assets/2024-03-09-1-5r1AjpoY.jpeg",FR=Object.freeze(Object.defineProperty({__proto__:null,default:IR},Symbol.toStringTag,{value:"Module"})),BR="/MarcoinSF/assets/2024-03-09-D0kOqaW7.jpeg",HR=Object.freeze(Object.defineProperty({__proto__:null,default:BR},Symbol.toStringTag,{value:"Module"})),GR="/MarcoinSF/assets/2024-05-05-BOtxUIu1.jpeg",VR=Object.freeze(Object.defineProperty({__proto__:null,default:GR},Symbol.toStringTag,{value:"Module"})),jR="/MarcoinSF/assets/2024-05-14-KI90_q1g.jpeg",kR=Object.freeze(Object.defineProperty({__proto__:null,default:jR},Symbol.toStringTag,{value:"Module"})),XR="/MarcoinSF/assets/2024-07-21-DLIIzHuZ.mp4",WR=Object.freeze(Object.defineProperty({__proto__:null,default:XR},Symbol.toStringTag,{value:"Module"})),qR="/MarcoinSF/assets/2024-07-28-BON0UAU4.mp4",YR=Object.freeze(Object.defineProperty({__proto__:null,default:qR},Symbol.toStringTag,{value:"Module"})),$R="/MarcoinSF/assets/2024-07-31-mlItGP0c.jpeg",ZR=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"})),KR="/MarcoinSF/assets/2024-08-10-1-CLHfImQR.mp4",QR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),JR="/MarcoinSF/assets/2024-08-10-usYrqNu_.jpeg",ew=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),tw="/MarcoinSF/assets/2024-08-23-1-BMj95jfC.jpg",nw=Object.freeze(Object.defineProperty({__proto__:null,default:tw},Symbol.toStringTag,{value:"Module"})),iw="/MarcoinSF/assets/2024-08-23-3-DkddrKGM.jpg",aw=Object.freeze(Object.defineProperty({__proto__:null,default:iw},Symbol.toStringTag,{value:"Module"})),sw="/MarcoinSF/assets/2024-08-23-4-CNdgbWFz.jpg",rw=Object.freeze(Object.defineProperty({__proto__:null,default:sw},Symbol.toStringTag,{value:"Module"})),ow="/MarcoinSF/assets/2024-08-23-CzaGYrwc.jpg",lw=Object.freeze(Object.defineProperty({__proto__:null,default:ow},Symbol.toStringTag,{value:"Module"})),cw="/MarcoinSF/assets/2024-08-23-CplMc93Q.mp4",uw=Object.freeze(Object.defineProperty({__proto__:null,default:cw},Symbol.toStringTag,{value:"Module"})),fw="/MarcoinSF/assets/2024-08-25-cOKYphAI.mp4",dw=Object.freeze(Object.defineProperty({__proto__:null,default:fw},Symbol.toStringTag,{value:"Module"})),hw="/MarcoinSF/assets/2024-09-01-CP4RYK6Z.jpeg",pw=Object.freeze(Object.defineProperty({__proto__:null,default:hw},Symbol.toStringTag,{value:"Module"})),mw="/MarcoinSF/assets/2024-09-02-BIdH0tQs.jpeg",gw=Object.freeze(Object.defineProperty({__proto__:null,default:mw},Symbol.toStringTag,{value:"Module"})),_w="/MarcoinSF/assets/2024-09-08-DRZDdej9.jpeg",xw=Object.freeze(Object.defineProperty({__proto__:null,default:_w},Symbol.toStringTag,{value:"Module"})),vw="/MarcoinSF/assets/2024-09-19-02-CRrM6iw-.JPG",bw=Object.freeze(Object.defineProperty({__proto__:null,default:vw},Symbol.toStringTag,{value:"Module"})),yw="/MarcoinSF/assets/2024-09-19-03-98asKbHO.mp4",Sw=Object.freeze(Object.defineProperty({__proto__:null,default:yw},Symbol.toStringTag,{value:"Module"})),Mw="/MarcoinSF/assets/2024-09-19-Yttg9DWC.jpg",Ew=Object.freeze(Object.defineProperty({__proto__:null,default:Mw},Symbol.toStringTag,{value:"Module"})),Tw="/MarcoinSF/assets/2024-09-25-BXZ-JE61.jpeg",Aw=Object.freeze(Object.defineProperty({__proto__:null,default:Tw},Symbol.toStringTag,{value:"Module"})),Rw="/MarcoinSF/assets/2024-10-15-BF3fCPW2.jpeg",ww=Object.freeze(Object.defineProperty({__proto__:null,default:Rw},Symbol.toStringTag,{value:"Module"})),Cw="/MarcoinSF/assets/2024-10-20-1-UaeBmH8_.jpeg",Dw=Object.freeze(Object.defineProperty({__proto__:null,default:Cw},Symbol.toStringTag,{value:"Module"})),Ow="/MarcoinSF/assets/2024-10-20-2-CXE_ZJ88.jpeg",Uw=Object.freeze(Object.defineProperty({__proto__:null,default:Ow},Symbol.toStringTag,{value:"Module"})),Lw="/MarcoinSF/assets/2024-10-20-3-DFppJf_d.jpeg",Nw=Object.freeze(Object.defineProperty({__proto__:null,default:Lw},Symbol.toStringTag,{value:"Module"})),Pw="/MarcoinSF/assets/2024-10-20-4-DYSIXoD2.mp4",zw=Object.freeze(Object.defineProperty({__proto__:null,default:Pw},Symbol.toStringTag,{value:"Module"})),Iw="/MarcoinSF/assets/2024-10-20-7%20Large-p3W3qreI.jpeg",Fw=Object.freeze(Object.defineProperty({__proto__:null,default:Iw},Symbol.toStringTag,{value:"Module"})),Bw="/MarcoinSF/assets/2024-10-20-Bd_4AOPQ.MOV",Hw=Object.freeze(Object.defineProperty({__proto__:null,default:Bw},Symbol.toStringTag,{value:"Module"})),Gw="/MarcoinSF/assets/2024-10-20-DIUHYx3b.jpeg",Vw=Object.freeze(Object.defineProperty({__proto__:null,default:Gw},Symbol.toStringTag,{value:"Module"})),jw="/MarcoinSF/assets/2024-10-22-CiL1HWjJ.JPG",kw=Object.freeze(Object.defineProperty({__proto__:null,default:jw},Symbol.toStringTag,{value:"Module"})),Xw="/MarcoinSF/assets/2024-10-26-6I-A6_EY.jpeg",Ww=Object.freeze(Object.defineProperty({__proto__:null,default:Xw},Symbol.toStringTag,{value:"Module"})),qw="/MarcoinSF/assets/2024-11-01-D3nPOt8k.MOV",Yw=Object.freeze(Object.defineProperty({__proto__:null,default:qw},Symbol.toStringTag,{value:"Module"})),$w="/MarcoinSF/assets/2024-11-03-BYcppjdM.MOV",Zw=Object.freeze(Object.defineProperty({__proto__:null,default:$w},Symbol.toStringTag,{value:"Module"})),Kw="/MarcoinSF/assets/2024-11-08-kM8awXmA.jpeg",Qw=Object.freeze(Object.defineProperty({__proto__:null,default:Kw},Symbol.toStringTag,{value:"Module"})),Jw="/MarcoinSF/assets/2024-11-17-1-XWAmTuvK.jpeg",eC=Object.freeze(Object.defineProperty({__proto__:null,default:Jw},Symbol.toStringTag,{value:"Module"})),tC="/MarcoinSF/assets/2024-11-17-2-CMXhdSPr.jpeg",nC=Object.freeze(Object.defineProperty({__proto__:null,default:tC},Symbol.toStringTag,{value:"Module"})),iC="/MarcoinSF/assets/2024-11-17-2-ClCIFVUl.mp4",aC=Object.freeze(Object.defineProperty({__proto__:null,default:iC},Symbol.toStringTag,{value:"Module"})),sC="/MarcoinSF/assets/2024-11-17-3-CL__783K.jpg",rC=Object.freeze(Object.defineProperty({__proto__:null,default:sC},Symbol.toStringTag,{value:"Module"})),oC="/MarcoinSF/assets/2024-11-17-Dlj7Ggg_.jpeg",lC=Object.freeze(Object.defineProperty({__proto__:null,default:oC},Symbol.toStringTag,{value:"Module"})),cC="/MarcoinSF/assets/2024-12-07-D5ESRNF6.jpeg",uC=Object.freeze(Object.defineProperty({__proto__:null,default:cC},Symbol.toStringTag,{value:"Module"})),fC="/MarcoinSF/assets/2024-12-11-LCPTHdsD.JPG",dC=Object.freeze(Object.defineProperty({__proto__:null,default:fC},Symbol.toStringTag,{value:"Module"})),hC="/MarcoinSF/assets/2025-02-12-1-BX8k8eV8.mp4",pC=Object.freeze(Object.defineProperty({__proto__:null,default:hC},Symbol.toStringTag,{value:"Module"})),mC="/MarcoinSF/assets/2025-02-12-CmQmbk28.jpeg",gC=Object.freeze(Object.defineProperty({__proto__:null,default:mC},Symbol.toStringTag,{value:"Module"})),_C="/MarcoinSF/assets/2025-02-26-weniPF9W.JPG",xC=Object.freeze(Object.defineProperty({__proto__:null,default:_C},Symbol.toStringTag,{value:"Module"})),vC="/MarcoinSF/assets/2025-03-07-rHk_O326.jpeg",bC=Object.freeze(Object.defineProperty({__proto__:null,default:vC},Symbol.toStringTag,{value:"Module"})),yC="/MarcoinSF/assets/2025-03-08-1-4LawzdwT.jpeg",SC=Object.freeze(Object.defineProperty({__proto__:null,default:yC},Symbol.toStringTag,{value:"Module"})),MC="/MarcoinSF/assets/2025-03-08-CsRDiP1v.jpeg",EC=Object.freeze(Object.defineProperty({__proto__:null,default:MC},Symbol.toStringTag,{value:"Module"})),TC="/MarcoinSF/assets/2025-03-08-JZOWf09E.mp4",AC=Object.freeze(Object.defineProperty({__proto__:null,default:TC},Symbol.toStringTag,{value:"Module"})),RC="/MarcoinSF/assets/2025-03-12-Ie8pwHnw.jpeg",wC=Object.freeze(Object.defineProperty({__proto__:null,default:RC},Symbol.toStringTag,{value:"Module"})),CC="/MarcoinSF/assets/2025-04-20-02-CTl6eCl4.jpeg",DC=Object.freeze(Object.defineProperty({__proto__:null,default:CC},Symbol.toStringTag,{value:"Module"})),OC="/MarcoinSF/assets/2025-04-20-m521MAgC.jpeg",UC=Object.freeze(Object.defineProperty({__proto__:null,default:OC},Symbol.toStringTag,{value:"Module"})),LC="/MarcoinSF/assets/2025-04-24-BJB22Ibv.jpeg",NC=Object.freeze(Object.defineProperty({__proto__:null,default:LC},Symbol.toStringTag,{value:"Module"})),PC="/MarcoinSF/assets/2025-05-09-BgJ2uyI6.jpeg",zC=Object.freeze(Object.defineProperty({__proto__:null,default:PC},Symbol.toStringTag,{value:"Module"})),IC="/MarcoinSF/assets/2025-05-10-01-CmiKVq7X.jpeg",FC=Object.freeze(Object.defineProperty({__proto__:null,default:IC},Symbol.toStringTag,{value:"Module"})),BC="/MarcoinSF/assets/2025-05-10-03-C7cYxHVB.jpeg",HC=Object.freeze(Object.defineProperty({__proto__:null,default:BC},Symbol.toStringTag,{value:"Module"})),GC="/MarcoinSF/assets/2025-05-10-04-D51B-kbo.jpeg",VC=Object.freeze(Object.defineProperty({__proto__:null,default:GC},Symbol.toStringTag,{value:"Module"})),jC="/MarcoinSF/assets/2025-05-10-05-ZspL2DFk.jpg",kC=Object.freeze(Object.defineProperty({__proto__:null,default:jC},Symbol.toStringTag,{value:"Module"})),XC="/MarcoinSF/assets/2025-05-23-DrMQ0MaP.mp4",WC=Object.freeze(Object.defineProperty({__proto__:null,default:XC},Symbol.toStringTag,{value:"Module"})),qC="/MarcoinSF/assets/2025-05-30-B31ntIOA.jpeg",YC=Object.freeze(Object.defineProperty({__proto__:null,default:qC},Symbol.toStringTag,{value:"Module"})),$C="/MarcoinSF/assets/2025-06-09-StP8uvDz.mp4",ZC=Object.freeze(Object.defineProperty({__proto__:null,default:$C},Symbol.toStringTag,{value:"Module"})),KC="/MarcoinSF/assets/2025-06-16-NxVx32rp.jpg",QC=Object.freeze(Object.defineProperty({__proto__:null,default:KC},Symbol.toStringTag,{value:"Module"})),JC="/MarcoinSF/assets/2025-06-17-C8HU58WO.jpeg",eD=Object.freeze(Object.defineProperty({__proto__:null,default:JC},Symbol.toStringTag,{value:"Module"})),tD="/MarcoinSF/assets/2025-06-19-DxprC_A4.jpeg",nD=Object.freeze(Object.defineProperty({__proto__:null,default:tD},Symbol.toStringTag,{value:"Module"})),iD="/MarcoinSF/assets/2025-06-20-DQi2tzWE.jpeg",aD=Object.freeze(Object.defineProperty({__proto__:null,default:iD},Symbol.toStringTag,{value:"Module"})),sD="/MarcoinSF/assets/2025-06-29-BcidFJty.JPG",rD=Object.freeze(Object.defineProperty({__proto__:null,default:sD},Symbol.toStringTag,{value:"Module"})),oD="/MarcoinSF/assets/2025-07-02-Or5BW8GN.jpeg",lD=Object.freeze(Object.defineProperty({__proto__:null,default:oD},Symbol.toStringTag,{value:"Module"})),cD="/MarcoinSF/assets/2025-07-04-C1wj0M1h.jpeg",uD=Object.freeze(Object.defineProperty({__proto__:null,default:cD},Symbol.toStringTag,{value:"Module"})),fD="/MarcoinSF/assets/2025-07-19-B14G1TL2.jpg",dD=Object.freeze(Object.defineProperty({__proto__:null,default:fD},Symbol.toStringTag,{value:"Module"})),hD="/MarcoinSF/assets/2025-07-23-CTlJaCIv.jpeg",pD=Object.freeze(Object.defineProperty({__proto__:null,default:hD},Symbol.toStringTag,{value:"Module"})),mD="/MarcoinSF/assets/2025-08-02-BYfa6nBi.jpeg",gD=Object.freeze(Object.defineProperty({__proto__:null,default:mD},Symbol.toStringTag,{value:"Module"})),_D="/MarcoinSF/assets/2025-08-15-BwvLJtju.jpeg",xD=Object.freeze(Object.defineProperty({__proto__:null,default:_D},Symbol.toStringTag,{value:"Module"})),vD="/MarcoinSF/assets/2025-08-16-CQmSO3ij.mp4",bD=Object.freeze(Object.defineProperty({__proto__:null,default:vD},Symbol.toStringTag,{value:"Module"})),yD="/MarcoinSF/assets/2025-10-04-BEvm4bRr.mp4",SD=Object.freeze(Object.defineProperty({__proto__:null,default:yD},Symbol.toStringTag,{value:"Module"})),MD="/MarcoinSF/assets/2025-10-08-2-BJssy64D.jpeg",ED=Object.freeze(Object.defineProperty({__proto__:null,default:MD},Symbol.toStringTag,{value:"Module"})),TD="/MarcoinSF/assets/2025-10-08-BbBU71mk.jpeg",AD=Object.freeze(Object.defineProperty({__proto__:null,default:TD},Symbol.toStringTag,{value:"Module"})),RD="/MarcoinSF/assets/2025-10-09-Be-NfefO.JPG",wD=Object.freeze(Object.defineProperty({__proto__:null,default:RD},Symbol.toStringTag,{value:"Module"})),CD="/MarcoinSF/assets/2025-10-10-DSgqI2iz.jpeg",DD=Object.freeze(Object.defineProperty({__proto__:null,default:CD},Symbol.toStringTag,{value:"Module"})),OD="/MarcoinSF/assets/2025-10-11-BE2_tkS1.jpeg",UD=Object.freeze(Object.defineProperty({__proto__:null,default:OD},Symbol.toStringTag,{value:"Module"})),LD="/MarcoinSF/assets/2025-10-31-2-4DBQdFfB.jpeg",ND=Object.freeze(Object.defineProperty({__proto__:null,default:LD},Symbol.toStringTag,{value:"Module"})),PD="/MarcoinSF/assets/2025-10-31-3-CMAQg5eZ.mp4",zD=Object.freeze(Object.defineProperty({__proto__:null,default:PD},Symbol.toStringTag,{value:"Module"})),ID="/MarcoinSF/assets/2025-10-31-C_2gu8e1.jpeg",FD=Object.freeze(Object.defineProperty({__proto__:null,default:ID},Symbol.toStringTag,{value:"Module"})),BD="/MarcoinSF/assets/2025-11-09-xa64oJGS.jpeg",HD=Object.freeze(Object.defineProperty({__proto__:null,default:BD},Symbol.toStringTag,{value:"Module"})),GD="/MarcoinSF/assets/2025-11-09-BxC_sGgm.mp4",VD=Object.freeze(Object.defineProperty({__proto__:null,default:GD},Symbol.toStringTag,{value:"Module"})),jD="/MarcoinSF/assets/2025-11-29-Dq6Asxu3.jpeg",kD=Object.freeze(Object.defineProperty({__proto__:null,default:jD},Symbol.toStringTag,{value:"Module"})),XD="/MarcoinSF/assets/2025-12-03-DSQwbWlu.JPG",WD=Object.freeze(Object.defineProperty({__proto__:null,default:XD},Symbol.toStringTag,{value:"Module"})),qD="/MarcoinSF/assets/2025-12-03-BkHMkApE.jpeg",YD=Object.freeze(Object.defineProperty({__proto__:null,default:qD},Symbol.toStringTag,{value:"Module"})),$D="/MarcoinSF/assets/2025-12-04-02-CEkCKTxA.jpeg",ZD=Object.freeze(Object.defineProperty({__proto__:null,default:$D},Symbol.toStringTag,{value:"Module"})),KD="/MarcoinSF/assets/2025-12-04-10-C3KxTeOd.mp4",QD=Object.freeze(Object.defineProperty({__proto__:null,default:KD},Symbol.toStringTag,{value:"Module"})),JD="/MarcoinSF/assets/2025-12-04-5-CxajqofK.jpeg",eO=Object.freeze(Object.defineProperty({__proto__:null,default:JD},Symbol.toStringTag,{value:"Module"})),tO="/MarcoinSF/assets/2025-12-04-supQhv4p.jpeg",nO=Object.freeze(Object.defineProperty({__proto__:null,default:tO},Symbol.toStringTag,{value:"Module"})),iO="/MarcoinSF/assets/2025-12-05-01-BFaM4Oml.mp4",aO=Object.freeze(Object.defineProperty({__proto__:null,default:iO},Symbol.toStringTag,{value:"Module"})),sO="/MarcoinSF/assets/2025-12-05-02-BrtAXchK.mp4",rO=Object.freeze(Object.defineProperty({__proto__:null,default:sO},Symbol.toStringTag,{value:"Module"})),Yb="/MarcoinSF/assets/Ignore_2025-05-10-06-YgLAOf2q.png",oO=Object.freeze(Object.defineProperty({__proto__:null,default:Yb},Symbol.toStringTag,{value:"Module"})),lO="/MarcoinSF/assets/BeggingBuddha-DxMsry8J.mp3",cO="/MarcoinSF/assets/FujiMt-BYVdz5Xz.mp3",uO="/MarcoinSF/assets/Handbeaten-fishball-BjZAOLT5.mp3",fO="/MarcoinSF/assets/LouMei-BIkjNDVS.mp3",hp=[{title:"Handbeaten Fishball",src:uO},{title:"Begging Buddha",src:lO},{title:"Fuji Mt",src:cO},{title:"Lou Mei",src:fO}],dO=Object.assign({"./assets/media/2021-10-31.JPG":xR,"./assets/media/2021-10-31.jpeg":bR,"./assets/media/2021-12-10.jpg":SR,"./assets/media/2022-05-13.JPG":ER,"./assets/media/2022-06-13.jpeg":AR,"./assets/media/2022-07-06-2.jpeg":wR,"./assets/media/2022-08-14.JPG":DR,"./assets/media/2022-10-29 Large.jpeg":UR,"./assets/media/2023-01-01.jpeg":NR,"./assets/media/2023-03-01.jpeg":zR,"./assets/media/2024-03-09-1.jpeg":FR,"./assets/media/2024-03-09.jpeg":HR,"./assets/media/2024-05-05.jpeg":VR,"./assets/media/2024-05-14.jpeg":kR,"./assets/media/2024-07-21.mp4":WR,"./assets/media/2024-07-28.mp4":YR,"./assets/media/2024-07-31.jpeg":ZR,"./assets/media/2024-08-10-1.mp4":QR,"./assets/media/2024-08-10.jpeg":ew,"./assets/media/2024-08-23-1.jpg":nw,"./assets/media/2024-08-23-3.jpg":aw,"./assets/media/2024-08-23-4.jpg":rw,"./assets/media/2024-08-23.jpg":lw,"./assets/media/2024-08-23.mp4":uw,"./assets/media/2024-08-25.mp4":dw,"./assets/media/2024-09-01.jpeg":pw,"./assets/media/2024-09-02.jpeg":gw,"./assets/media/2024-09-08.jpeg":xw,"./assets/media/2024-09-19-02.JPG":bw,"./assets/media/2024-09-19-03.mp4":Sw,"./assets/media/2024-09-19.jpg":Ew,"./assets/media/2024-09-25.jpeg":Aw,"./assets/media/2024-10-15.jpeg":ww,"./assets/media/2024-10-20-1.jpeg":Dw,"./assets/media/2024-10-20-2.jpeg":Uw,"./assets/media/2024-10-20-3.jpeg":Nw,"./assets/media/2024-10-20-4.mp4":zw,"./assets/media/2024-10-20-7 Large.jpeg":Fw,"./assets/media/2024-10-20.MOV":Hw,"./assets/media/2024-10-20.jpeg":Vw,"./assets/media/2024-10-22.JPG":kw,"./assets/media/2024-10-26.jpeg":Ww,"./assets/media/2024-11-01.MOV":Yw,"./assets/media/2024-11-03.MOV":Zw,"./assets/media/2024-11-08.jpeg":Qw,"./assets/media/2024-11-17-1.jpeg":eC,"./assets/media/2024-11-17-2.jpeg":nC,"./assets/media/2024-11-17-2.mp4":aC,"./assets/media/2024-11-17-3.jpg":rC,"./assets/media/2024-11-17.jpeg":lC,"./assets/media/2024-12-07.jpeg":uC,"./assets/media/2024-12-11.JPG":dC,"./assets/media/2025-02-12-1.mp4":pC,"./assets/media/2025-02-12.jpeg":gC,"./assets/media/2025-02-26.JPG":xC,"./assets/media/2025-03-07.jpeg":bC,"./assets/media/2025-03-08-1.jpeg":SC,"./assets/media/2025-03-08.jpeg":EC,"./assets/media/2025-03-08.mp4":AC,"./assets/media/2025-03-12.jpeg":wC,"./assets/media/2025-04-20-02.jpeg":DC,"./assets/media/2025-04-20.jpeg":UC,"./assets/media/2025-04-24.jpeg":NC,"./assets/media/2025-05-09.jpeg":zC,"./assets/media/2025-05-10-01.jpeg":FC,"./assets/media/2025-05-10-03.jpeg":HC,"./assets/media/2025-05-10-04.jpeg":VC,"./assets/media/2025-05-10-05.jpg":kC,"./assets/media/2025-05-23.mp4":WC,"./assets/media/2025-05-30.jpeg":YC,"./assets/media/2025-06-09.mp4":ZC,"./assets/media/2025-06-16.jpg":QC,"./assets/media/2025-06-17.jpeg":eD,"./assets/media/2025-06-19.jpeg":nD,"./assets/media/2025-06-20.jpeg":aD,"./assets/media/2025-06-29.JPG":rD,"./assets/media/2025-07-02.jpeg":lD,"./assets/media/2025-07-04.jpeg":uD,"./assets/media/2025-07-19.jpg":dD,"./assets/media/2025-07-23.jpeg":pD,"./assets/media/2025-08-02.jpeg":gD,"./assets/media/2025-08-15.jpeg":xD,"./assets/media/2025-08-16.mp4":bD,"./assets/media/2025-10-04.mp4":SD,"./assets/media/2025-10-08-2.jpeg":ED,"./assets/media/2025-10-08.jpeg":AD,"./assets/media/2025-10-09.JPG":wD,"./assets/media/2025-10-10.jpeg":DD,"./assets/media/2025-10-11.jpeg":UD,"./assets/media/2025-10-31-2.jpeg":ND,"./assets/media/2025-10-31-3.mp4":zD,"./assets/media/2025-10-31.jpeg":FD,"./assets/media/2025-11-09.jpeg":HD,"./assets/media/2025-11-09.mp4":VD,"./assets/media/2025-11-29.jpeg":kD,"./assets/media/2025-12-03.JPG":WD,"./assets/media/2025-12-03.jpeg":YD,"./assets/media/2025-12-04-02.jpeg":ZD,"./assets/media/2025-12-04-10.mp4":QD,"./assets/media/2025-12-04-5.jpeg":eO,"./assets/media/2025-12-04.jpeg":nO,"./assets/media/2025-12-05-01.mp4":aO,"./assets/media/2025-12-05-02.mp4":rO,"./assets/media/Ignore_2025-05-10-06.png":oO}),p0=r=>{const e=r.match(/(\d{4}-\d{2}-\d{2})/);return e?e[1]:r},hO="ignore_",pO={"2025-05-23.mp4":"The best egg-fried rice in SF"},$b=Object.entries(dO).map(([r,e])=>{const n=r.split("/").pop()||r;if(n.toLowerCase().startsWith(hO))return null;const a=e.default,c=n.toLowerCase().split(".").pop()||"",u=c==="mp4"||c==="mov";if(!u&&!(c==="jpg"||c==="jpeg"||c==="png"))return null;const m=u?"video":"image",p=p0(n);return{filename:n,src:a,previewSrc:a,type:m,sortKey:p}}).filter(r=>!!r);$b.push({filename:"2025-05-10-vimeo",src:"https://vimeo.com/1083175160/86c067f4f9",previewSrc:Yb,embedUrl:"https://player.vimeo.com/video/1083175160?h=86c067f4f9",type:"embed",sortKey:"2025-05-10",dateOverride:"2025-05-10",titleOverride:"2025-05-10",description:"Mini-film Festival Winner"});const So=$b.sort((r,e)=>r.sortKey.localeCompare(e.sortKey)||r.filename.localeCompare(e.filename)).map((r,e)=>({id:String(e+1),type:r.type,src:r.src,previewSrc:r.previewSrc,embedUrl:r.embedUrl,title:r.dateOverride||p0(r.filename),description:r.description??pO[r.filename]??"",date:r.dateOverride||p0(r.filename)})),mO="/MarcoinSF/assets/cover-D6yBNHiu.mp4",gO=({onStartTransition:r})=>{const[e,n]=ut.useState(0),[a,o]=ut.useState(!1),[c,u]=ut.useState(!1);ut.useEffect(()=>{let m=0;const p=So.length,g=x=>new Promise(y=>{const M=new Image;M.src=x,M.onload=()=>y(),M.onerror=()=>y()});(async()=>{const x=So.map(y=>g(y.previewSrc||y.src).then(()=>{m++,n(Math.floor(m/p*100))}));await Promise.all(x),setTimeout(()=>o(!0),500)})()},[]);const d=()=>{u(!0),setTimeout(()=>{r()},100)};return e<100&&!a?ue.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000",children:[ue.jsx("div",{className:"w-64 h-2 bg-gray-200 rounded overflow-hidden",children:ue.jsx("div",{className:"h-full bg-black transition-all duration-200",style:{width:`${e}%`}})}),ue.jsx("p",{className:"mt-4 font-bold text-gray-400 animate-pulse",children:"Loading Gallery..."})]}):ue.jsx("div",{className:`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${c?"pointer-events-none":""}`,children:ue.jsx("div",{className:`relative z-20 bg-white p-4 shadow-2xl border-2 border-gray-100 transform scale-100 transition-all duration-500 ease-out ${c?"opacity-0 scale-95":"hover:scale-105"}`,children:ue.jsxs("div",{className:"w-80 aspect-[4/5] flex flex-col items-center",children:[ue.jsxs("div",{className:"w-full h-64 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in",children:[ue.jsx("video",{src:mO,className:"w-full h-full object-cover grayscale contrast-125 opacity-80",muted:!0,loop:!0,autoPlay:!0,playsInline:!0}),ue.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),ue.jsx("h1",{className:"text-3xl text-center font-bold mb-1",children:"The Secret Life of Warco Mu"}),ue.jsx("p",{className:"text-gray-500 text-sm text-center mb-6",children:"2021.8-2025.12"}),ue.jsx("p",{className:"text-gray-800 text-m text-center mb-6",children:"Chef of SF's Finest Egg Fried Rice, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys, Award-winning Transgender Actor, Watermelon Annihilator, Chinatown Mafia, Master of Cantonese, Slayer of 100+ Arkvelds,连续戒烟成功者..."}),ue.jsx("wired-button",{elevation:2,onClick:d,className:"bg-black text-white font-bold tracking-widest cursor-pointer",children:"PAY RESPECT"})]})})})},_O=({onCovered:r,onComplete:e})=>{const[n,a]=ut.useState([]),o=ut.useRef("raining"),c=ut.useRef(0),u=ut.useRef(null),d=40,m=1,p=1.5,g=80;ut.useEffect(()=>{const x=window.innerWidth,y=Math.ceil(x/d),M=()=>{if(o.current==="clearing")return;const b=[];for(let U=0;U<y;U++)b.push({id:c.current++,colIndex:U,left:U/y*100+Math.random()*2,duration:m+Math.random()*(p-m),rotation:Math.random()*360});a(U=>[...U,...b])};u.current=window.setInterval(M,g);const T=m*1e3+200,S=setTimeout(()=>{r(),setTimeout(()=>{o.current="clearing",u.current&&clearInterval(u.current)},1500)},T);return()=>{u.current&&clearInterval(u.current),clearTimeout(S)}},[r]);const _=x=>{a(y=>{const M=y.filter(T=>T.id!==x);return o.current==="clearing"&&M.length===0&&setTimeout(e,0),M})};return ue.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,pointerEvents:"none",overflow:"hidden"},children:[ue.jsx("style",{children:`
          @keyframes tennisFall {
            0% {
              transform: translateY(-60px) rotate(0deg);
            }
            100% { transform: translateY(110vh) rotate(var(--rot)); }
          }
        `}),n.map(x=>ue.jsx("div",{onAnimationEnd:()=>_(x.id),style:{position:"absolute",left:`${x.left}%`,top:"-60px",width:`${d}px`,height:`${d}px`,fontSize:`${d}px`,lineHeight:"1",textAlign:"center","--rot":`${x.rotation}deg`,animationName:"tennisFall",animationDuration:`${x.duration}s`,animationTimingFunction:"cubic-bezier(0.3, 0.1, 0.7, 1)",animationFillMode:"forwards"},children:"🎾"},x.id))]})},Yt={Z_SPACING:8,X_OFFSET:2.2,CAMERA_START_Z:8,FOG_COLOR:16579577,FADE_START:12,FADE_END:32,HIGHLIGHT_RANGE:4,AUDIO_MAX_DISTANCE:12,AUDIO_QUICK_FADE_BEHIND:1.2,BGM_FADE_ZONE:25,BGM_SILENCE_RADIUS:6,MAX_SCROLL_SPEED:.15,HOVER_MIN_SPEED_FACTOR:.05},xO=()=>So.map((r,e)=>{const n=e===So.length-1,a=Math.random();let o=1;return a<.3?o=0:a>.7&&(o=2),n?{...r,z:-e*Yt.Z_SPACING-8,x:0,y:0,rotationY:0,rotationZ:0,borderIntensity:2}:{...r,z:-e*Yt.Z_SPACING,x:(e%2===0?-1:1)*Yt.X_OFFSET,y:(Math.random()-.5)*.5,rotationY:(e%2===0?.12:-.12)+(Math.random()-.5)*.05,rotationZ:(Math.random()-.5)*.05,borderIntensity:o}}),eb=(r,e,n=1)=>{const a=[],o=r/2,c=e/2,u=n===0?1:n===1?2:3,d=n===0?.01:n===1?.02:.04,m=n===2?.1:.02,p=(_,x,y,M)=>{const T=y-_,S=M-x,b=Math.sqrt(T*T+S*S),U=T/b,O=S/b,z=_-U*(Math.random()*m),j=x-O*(Math.random()*m),L=y+U*(Math.random()*m),P=M+O*(Math.random()*m);a.push(new se(z,j,0));const $=(z+L)/2+(Math.random()-.5)*d,C=(j+P)/2+(Math.random()-.5)*d;a.push(new se($,C,0)),a.push(new se(L,P,0))};for(let _=0;_<u;_++){const x=d*(_+1);p(-o-Math.random()*x,c+Math.random()*x,o+Math.random()*x,c-Math.random()*x),p(o+Math.random()*x,c-Math.random()*x,o-Math.random()*x,-c+Math.random()*x),p(o-Math.random()*x,-c+Math.random()*x,-o+Math.random()*x,-c-Math.random()*x),p(-o+Math.random()*x,-c-Math.random()*x,-o-Math.random()*x,c+Math.random()*x)}return new ea().setFromPoints(a)},vO=()=>{const r=[],n=(M,T,S,b,U=.2)=>{let z=M,j=T;const L=(S-M)/6,P=(b-T)/6;for(let $=0;$<6;$++){const C=M+L*($+1),w=T+P*($+1);r.push(new se(z,j,0));const V=$===5?0:(Math.random()-.5)*U,K=$===5?0:(Math.random()-.5)*U;r.push(new se(C+V,w+K,0)),z=C+V,j=w+K}};let a=0;for(let M=-120/2;M<=120/2;M+=2){const T=Math.sin(M*.05)*5+Math.sin(M*.15)*2-5;M>-120/2&&(n(M-2,a,M,T,.4),n(M-2,a-.2,M,T-.2,.6)),a=T}const o=15,c=Math.sin(o*.05)*5+Math.sin(o*.15)*2-5;n(o-4,c,o,c+18,.3),n(o+4,c,o,c+18,.3),n(o-3.8,c+2,o+3.8,c+2,.2),n(o-2.5,c+12,o+2.5,c+12,.2);const u=-25,d=Math.sin(u*.05)*5-5;n(u,d,u,d+12,.3),n(u+1,d,u+1,d+12,.3),n(u-.5,d+10,u+1.5,d+10,.1),n(u-15,d-2,u-15,d+10,.3);let m=u-15,p=d+10;for(let M=u-15;M<=u;M+=2){const T=d+10-Math.sin((M-(u-15))/15*Math.PI)*4;n(m,p,M,T,.1),m=M,p=T}const g=(M,T,S)=>{let U=M+Math.cos(0)*S,O=T+Math.sin(0)*S*.6;for(let z=1;z<=13;z++){const j=z/12*Math.PI*2,L=S+(Math.random()-.5)*(S*.4),P=M+Math.cos(j)*L,$=T+Math.sin(j)*(L*.6);n(U,O,P,$,.5),U=P,O=$}};g(-30,15,6),g(-10,20,4),g(25,18,7);const _=35,x=22;g(_,x,3);for(let M=0;M<8;M++){const T=M/8*Math.PI*2,S=_+Math.cos(T)*4,b=x+Math.sin(T)*4,U=_+Math.cos(T)*6,O=x+Math.sin(T)*6;n(S,b,U,O,.2)}return new ea().setFromPoints(r)},bO=r=>{const e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return null;e.width=512,e.height=128,n.clearRect(0,0,e.width,e.height),n.font='40px "Gloria Hallelujah", cursive',n.fillStyle="#666666",n.textAlign="center",n.textBaseline="middle",n.fillText(r,e.width/2,e.height/2);const a=new bM(e);return a.minFilter=Jn,a},yO=()=>ue.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ue.jsx("path",{d:"M9 18V5l12-2v13"}),ue.jsx("circle",{cx:"6",cy:"18",r:"3"}),ue.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),SO=()=>ue.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ue.jsx("circle",{cx:"12",cy:"12",r:"3"}),ue.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),MO=()=>ue.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[ue.jsx("circle",{cx:"12",cy:"12",r:"10"}),ue.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),ue.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),tb=()=>ue.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[ue.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),ue.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),nb=()=>ue.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[ue.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),ue.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"})]}),EO=()=>ue.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:ue.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),TO=()=>ue.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:[ue.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),ue.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),pp=()=>ue.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[ue.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ue.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),AO=()=>{const r=ut.useRef(null),e=ut.useRef(null),[n]=ut.useState(xO),[a,o]=ut.useState(null),[c,u]=ut.useState(!1),[d,m]=ut.useState(!1),[p,g]=ut.useState(!1),[_,x]=ut.useState(null),y=ut.useRef(null),[M,T]=ut.useState(!1),[S,b]=ut.useState(!0),[U,O]=ut.useState(0),[z,j]=ut.useState(!1),[L,P]=ut.useState(5),$=ut.useRef(0),C=ut.useRef(1),[w,V]=ut.useState(null),K=ut.useRef(null),[le,_e]=ut.useState(0),fe=ut.useRef([]),I=ut.useRef({}),q=ut.useRef({}),W=ut.useRef(!1),me=ut.useRef(!1),ve=ut.useRef(0),N=ut.useRef(0),ie=ut.useRef(null),be=ut.useRef(null),Te=ut.useRef(!1),ze=ut.useRef(1);ut.useEffect(()=>{W.current=c,c?(document.body.style.overflow="hidden",Object.values(q.current).forEach(Fe=>Fe.pause())):d&&(document.body.style.overflow="auto")},[c,d]),ut.useEffect(()=>{me.current=d,d?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[d]),ut.useEffect(()=>{$.current=L},[L]),ut.useEffect(()=>{Te.current=z},[z]),ut.useEffect(()=>{y.current&&(M&&S?y.current.play().catch(Fe=>console.error("Audio playback failed:",Fe)):y.current.pause())},[M,S,U]);const ne=Fe=>{y.current&&(y.current.volume=Math.max(0,Math.min(1,Fe)))},ce=()=>T(!M),Oe=Fe=>{O(Fe),T(!0),b(!0)},Ve=()=>{window.scrollTo({top:0,behavior:"auto"}),ve.current=0,N.current=0,g(!0)},qe=()=>{m(!0),T(!0),P(5),Object.values(q.current).forEach(Fe=>{Fe.muted=!1,Fe.volume=0})},pt=()=>{g(!1)},hn=Fe=>{const Qe=Fe.currentTarget.getBoundingClientRect(),Ne=Math.min(Math.max((Fe.clientX-Qe.left)/Qe.width,0),1);_e(Fe.clientX);const Ct=So.length,We=Math.floor(Ne*(Ct-1)),nt=So[We];nt&&V(nt.date)},mt=()=>{V(null)};ut.useEffect(()=>{if(!r.current)return;const Fe=new hM;Fe.background=new Vt(Yt.FOG_COLOR),Fe.fog=new X0(Yt.FOG_COLOR,10,60);const Qe=new Gi(50,window.innerWidth/window.innerHeight,.1,2e3);Qe.position.set(0,0,Yt.CAMERA_START_Z),ie.current=Qe;const Ne=new gR({canvas:r.current,antialias:!0,alpha:!1});Ne.setSize(window.innerWidth,window.innerHeight),Ne.setPixelRatio(Math.min(window.devicePixelRatio,2));const Ct=new AM;Ct.crossOrigin="Anonymous";const We=3.2,nt=3.2,D=new Es(3.2,2.4),E=new Ol({color:16777215}),Z=2,he=.5,ye=new Es(Z,he),oe=new f0({color:2236962,linewidth:2,opacity:.8,transparent:!0}),Ke=vO(),Ue=new Rv(Ke,new f0({color:8947848,opacity:.6,transparent:!0,fog:!1})),Je=n[n.length-1].z,Ye=Math.abs(Je-Yt.CAMERA_START_Z)+20;Ue.position.set(0,0,Je-10);const Se=Math.max(1.5,Ye/50);Ue.scale.set(Se,Se,1),Fe.add(Ue),fe.current=[],I.current={},n.forEach(ke=>{const gt=new rr;gt.position.set(ke.x,ke.y,ke.z),gt.rotation.y=ke.rotationY,gt.rotation.z=ke.rotationZ;const Pt=new Ci(D.clone(),new Ol({transparent:!0,opacity:0}));Pt.position.z=.1,Pt.position.y=.15;const An=new Ci(D.clone(),E.clone());An.position.z=0;const pn=eb(3.5,2.7,ke.borderIntensity),an=new Rv(pn,oe.clone());an.position.z=.15,I.current[ke.id]=an;const Mt=(ct,xt)=>{const Zt=ct/xt;let kt=We,Xt=We/Zt;Xt>nt&&(Xt=nt,kt=nt*Zt),Pt.geometry.dispose(),Pt.geometry=new Es(kt,Xt);const ii=kt+.3,vi=Xt+.8;An.geometry.dispose(),An.geometry=new Es(ii,vi);const Ds=eb(ii+.05,vi+.05,ke.borderIntensity);an.geometry.dispose(),an.geometry=Ds;const Oo=-(vi/2)+.4,Os=gt.children.find(ca=>ca.userData.isDate);Os&&(Os.position.y=Oo)};if(ke.type==="video"){const ct=document.createElement("video");ct.src=ke.src,ct.crossOrigin="Anonymous",ct.muted=!0,ct.loop=!0,ct.playsInline=!0,ct.preload="auto",q.current[ke.id]=ct,ct.onloadedmetadata=()=>{Mt(ct.videoWidth,ct.videoHeight)};const xt=new vM(ct);xt.minFilter=Jn,xt.magFilter=Jn,xt.wrapS=oi,xt.wrapT=oi,xt.colorSpace=ri,Pt.material.map=xt,Pt.material.needsUpdate=!0}else if(ke.type==="embed"){const ct=ke.previewSrc||ke.src;Ct.load(ct,xt=>{xt.colorSpace=ri,xt.wrapS=oi,xt.wrapT=oi,Pt.material.map=xt,Pt.material.needsUpdate=!0,xt.image&&Mt(xt.image.width,xt.image.height)})}else Ct.load(ke.src,ct=>{ct.colorSpace=ri,ct.wrapS=oi,ct.wrapT=oi,Pt.material.map=ct,Pt.material.needsUpdate=!0,ct.image&&Mt(ct.image.width,ct.image.height)});const vn=bO(ke.date);if(vn){const ct=new Ol({map:vn,transparent:!0,opacity:.8}),xt=new Ci(ye,ct);xt.userData={isDate:!0},xt.position.y=-1.3,xt.position.z=.11,gt.add(xt)}gt.add(An),gt.add(Pt),gt.add(an),gt.userData={id:ke.id},Fe.add(gt),fe.current.push(Pt)});const Ee=Yt.CAMERA_START_Z,Ze=n[n.length-1].z,je=Ze+5,Ie=Ee-je,rt=Ie*250+window.innerHeight;document.body.style.height=`${rt}px`;const H=()=>{if(W.current||!me.current)return;const ke=document.body.scrollHeight-window.innerHeight;ke>0&&(N.current=Math.max(0,Math.min(1,window.scrollY/ke)))};window.addEventListener("scroll",H);const De=new CM,Ae=new $t,Re=ke=>{const gt=Math.abs(Qe.position.z-ke.position.z);return gt<=Yt.FADE_START?1:gt>=Yt.FADE_END?0:1-(gt-Yt.FADE_START)/(Yt.FADE_END-Yt.FADE_START)},Me=ke=>{var Mt,vn;if(W.current||!me.current)return;if(be.current){const ct=n.find(xt=>xt.id===be.current);if(ct){o(ct),u(!0);return}}Ae.x=ke.clientX/window.innerWidth*2-1,Ae.y=-(ke.clientY/window.innerHeight)*2+1,Fe.updateMatrixWorld(!0),De.setFromCamera(Ae,Qe);const gt=Fe.children.filter(ct=>ct instanceof rr&&ct.userData.id),Pt=De.intersectObjects(gt,!0).filter(ct=>ct.object instanceof Ci),An=new W0,pn=new xn;pn.multiplyMatrices(Qe.projectionMatrix,Qe.matrixWorldInverse),An.setFromProjectionMatrix(pn);const an=Qe.getWorldDirection(new se);for(const ct of Pt){let xt=ct.object;for(;xt.parent&&!((Mt=xt.userData)!=null&&Mt.id);)xt=xt.parent;const Zt=(vn=xt.userData)==null?void 0:vn.id;if(!Zt)continue;const kt=xt.getWorldPosition(new se);if(!An.containsPoint(kt)||kt.clone().sub(Qe.position).dot(an)<=0||Re(xt)<.1)continue;const vi=n.find(Ds=>Ds.id===Zt);if(vi){o(vi),u(!0);break}}};r.current.addEventListener("click",Me);const ge=ke=>{var pn,an;if(W.current||!me.current)return;Ae.x=ke.clientX/window.innerWidth*2-1,Ae.y=-(ke.clientY/window.innerHeight)*2+1,De.setFromCamera(Ae,Qe);const gt=Fe.children.filter(Mt=>Mt instanceof rr&&Mt.userData.id),An=De.intersectObjects(gt,!0).find(Mt=>Mt.object instanceof Ci);if(An){let Mt=An.object;for(;Mt.parent&&!((pn=Mt.userData)!=null&&pn.id);)Mt=Mt.parent;be.current=(an=Mt.userData)==null?void 0:an.id,document.body.style.cursor="pointer"}else be.current=null,document.body.style.cursor="default"};window.addEventListener("mousemove",ge);let Be;const lt=()=>{if(Be=requestAnimationFrame(lt),!W.current&&me.current){const An=be.current?Yt.HOVER_MIN_SPEED_FACTOR:1;if(C.current+=(An-C.current)*.1,$.current>0){const Mt=$.current*C.current;Mt>.01&&window.scrollBy(0,Mt)}const pn=N.current-ve.current,an=Math.max(-.15*.1,Math.min(Yt.MAX_SCROLL_SPEED*.1,pn));ve.current+=an*.05+pn*.01,Qe.position.z=Ee-ve.current*Ie,e.current&&(e.current.style.width=`${ve.current*100}%`)}const ke=Math.abs(Qe.position.z-Ze),gt=Math.max(0,ke-Yt.BGM_SILENCE_RADIUS);let Pt=1;gt<Yt.BGM_FADE_ZONE&&(Pt=Math.max(0,Math.min(1,gt/Yt.BGM_FADE_ZONE))),ze.current+=(Pt-ze.current)*.05,ne(ze.current),fe.current.forEach(An=>{const pn=An.parent,an=Math.abs(Qe.position.z-pn.position.z),Mt=pn.userData.id,vn=I.current[Mt];vn&&(be.current===Mt?(vn.material.color.setHex(0),vn.material.opacity=1,vn.scale.setScalar(1.02)):(vn.material.color.setHex(2236962),vn.material.opacity=.8,vn.scale.setScalar(1)));let ct=0;an<=Yt.FADE_START?ct=1:an>=Yt.FADE_END?ct=0:ct=1-(an-Yt.FADE_START)/(Yt.FADE_END-Yt.FADE_START),An.material.opacity=ct;let xt=1;if(an<Yt.HIGHLIGHT_RANGE&&(xt=1+(1-an/Yt.HIGHLIGHT_RANGE)*.15),pn.scale.set(xt,xt,1),q.current[Mt]){const Zt=q.current[Mt];if(!W.current&&me.current)if(Te.current)Zt.volume=0;else if(an<Yt.AUDIO_MAX_DISTANCE){const kt=Qe.position.z<pn.position.z-2;let Xt=0;if(kt){const ii=Math.abs(Qe.position.z-pn.position.z);Xt=Math.max(0,1-ii/Yt.AUDIO_QUICK_FADE_BEHIND)}else Xt=Math.max(0,1-an/Yt.AUDIO_MAX_DISTANCE);Zt.volume=Xt,Zt.paused&&Zt.play().catch(()=>{})}else Zt.volume>0&&(Zt.volume=0),Zt.paused||Zt.pause()}}),Ne.render(Fe,Qe)};lt();const Ht=()=>{Qe.aspect=window.innerWidth/window.innerHeight,Qe.updateProjectionMatrix(),Ne.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ht),()=>{var ke;window.removeEventListener("scroll",H),window.removeEventListener("resize",Ht),window.removeEventListener("mousemove",ge),(ke=r.current)==null||ke.removeEventListener("click",Me),cancelAnimationFrame(Be),K.current&&cancelAnimationFrame(K.current),Ne.dispose(),document.body.style.height="auto",Object.values(q.current).forEach(gt=>{gt.pause(),gt.src="",gt.load()})}},[n]);const wt=()=>{u(!1),o(null)},B=Fe=>{if(c||!d)return;const Qe=Fe.currentTarget.getBoundingClientRect(),Ne=Math.min(Math.max((Fe.clientX-Qe.left)/Qe.width,0),1),Ct=document.body.scrollHeight-window.innerHeight,We=Ne*Ct;N.current=Ne,K.current&&cancelAnimationFrame(K.current);const nt=Yt.MAX_SCROLL_SPEED*window.innerHeight,D=()=>{const E=window.scrollY,Z=We-E;if(Math.abs(Z)<1){window.scrollTo({top:We,behavior:"auto"}),K.current=null;return}const he=Math.sign(Z)*Math.min(Math.abs(Z),nt);window.scrollTo({top:E+he,behavior:"auto"}),K.current=requestAnimationFrame(D)};K.current=requestAnimationFrame(D)},ft=Fe=>{x(_===Fe?null:Fe)};return ue.jsxs(ue.Fragment,{children:[ue.jsx("canvas",{ref:r,className:"fixed top-0 left-0 w-full h-full block z-0"}),ue.jsx("audio",{ref:y,src:hp[U].src,onEnded:()=>Oe((U+1)%hp.length)}),!d&&ue.jsx(gO,{onStartTransition:Ve}),p&&ue.jsx(_O,{onCovered:qe,onComplete:pt}),ue.jsx("div",{className:`fixed top-6 left-16 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-500 ${d?"opacity-100":"opacity-0"}`,children:ue.jsxs("h1",{className:"text-4xl font-bold text-gray-800 drop-shadow-sm rotate-[-2deg]",children:["The secret life of ",ue.jsx("span",{className:"text-blue-600",children:"Warco Mu"})]})}),ue.jsxs("div",{className:`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${d?"opacity-100":"opacity-0 pointer-events-none"}`,children:[ue.jsxs("div",{className:"relative flex flex-col items-end",children:[ue.jsx("wired-icon-button",{class:"bg-white text-gray-800",onClick:()=>ft("audio"),children:ue.jsx(yO,{})}),_==="audio"&&ue.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:ue.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-72 block",children:[ue.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[ue.jsx("span",{className:"font-bold text-sm",children:"Audio Settings"}),ue.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:ue.jsx(pp,{})})]}),ue.jsx("div",{className:"mb-4",children:ue.jsxs("div",{className:"flex justify-between items-center mb-1",children:[ue.jsx("label",{className:"text-xs text-gray-500",children:"3D Video Sound"}),ue.jsx("button",{onClick:()=>j(!z),className:"p-1 rounded hover:bg-gray-100",title:z?"Unmute Videos":"Mute Videos",children:z?ue.jsx(nb,{}):ue.jsx(tb,{})})]})}),ue.jsxs("div",{children:[ue.jsxs("div",{className:"flex justify-between items-center mb-2",children:[ue.jsx("label",{className:"text-xs text-gray-500",children:"Background Music"}),ue.jsx("div",{className:"flex items-center gap-2",children:ue.jsx("button",{onClick:()=>b(!S),className:"p-1 rounded hover:bg-gray-100",title:S?"Disable BGM":"Enable BGM",children:S?ue.jsx(tb,{}):ue.jsx(nb,{})})})]}),ue.jsx("div",{className:`flex items-center gap-2 justify-center py-2 transition-opacity ${S?"opacity-100":"opacity-50 pointer-events-none"}`,children:ue.jsx("button",{onClick:ce,className:"w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors",children:M?ue.jsx(TO,{}):ue.jsx(EO,{})})}),ue.jsx("div",{className:`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${S?"opacity-100":"opacity-50 pointer-events-none"}`,children:hp.map((Fe,Qe)=>ue.jsxs("div",{onClick:()=>Oe(Qe),className:`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${U===Qe?"bg-blue-50 font-bold text-blue-700":"text-gray-600"}`,children:[Qe+1,". ",Fe.title]},Qe))})]})]})})]}),ue.jsxs("div",{className:"relative flex flex-col items-end",children:[ue.jsx("wired-icon-button",{class:"bg-white text-gray-800",onClick:()=>ft("general"),children:ue.jsx(SO,{})}),_==="general"&&ue.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:ue.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[ue.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[ue.jsx("span",{className:"font-bold text-sm",children:"General Settings"}),ue.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:ue.jsx(pp,{})})]}),ue.jsxs("div",{children:[ue.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Auto-Forward Speed"}),ue.jsxs("div",{className:"flex items-center gap-2",children:[ue.jsx("span",{className:"text-xs text-gray-400",children:"Off"}),ue.jsx("input",{type:"range",min:"0",max:"10",step:"1",value:L,onChange:Fe=>P(Number(Fe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),ue.jsx("span",{className:"text-xs font-bold w-4 text-center",children:L})]})]})]})})]}),ue.jsxs("div",{className:"relative flex flex-col items-end",children:[ue.jsx("wired-icon-button",{class:"bg-white text-gray-800",onClick:()=>ft("credit"),children:ue.jsx(MO,{})}),_==="credit"&&ue.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:ue.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[ue.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[ue.jsx("span",{className:"font-bold text-sm",children:"Credits"}),ue.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:ue.jsx(pp,{})})]}),ue.jsxs("div",{className:"text-xs text-gray-600 leading-relaxed",children:[ue.jsx("p",{className:"mb-2",children:ue.jsx("strong",{children:"Coming Soon"})}),ue.jsx("p",{className:"mb-2",children:"A minimalist, immersive experience combining spatial audio and hand-drawn aesthetics."}),ue.jsx("p",{children:"Built with Gemini 3 Pro, GPT and their humble human operators with React, Three.js & Wired Elements."})]})]})})]})]}),d&&ue.jsxs("div",{className:"fixed bottom-0 left-0 w-full h-4 bg-gray-200 cursor-pointer z-20 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in",onClick:B,onMouseMove:hn,onMouseLeave:mt,children:[ue.jsx("div",{ref:e,className:"h-full bg-blue-500 relative transition-all duration-75",style:{width:"0%",backgroundImage:'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDI5OUUxIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==")'}}),w&&ue.jsxs("div",{className:"absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap",style:{left:le},children:[w,ue.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"})]})]}),c&&a&&ue.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[ue.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:wt}),ue.jsx("div",{className:"relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center",children:ue.jsx("wired-card",{elevation:4,className:"w-full bg-white p-2",children:ue.jsxs("div",{className:"p-4 flex flex-col items-center",children:[ue.jsx("div",{className:"w-full flex justify-end mb-2",children:ue.jsx("wired-button",{onClick:wt,elevation:2,children:"Close [X]"})}),ue.jsxs("div",{className:"w-full aspect-video bg-black flex items-center justify-center overflow-hidden border-2 border-black rounded-sm shadow-inner",children:[a.type==="video"&&ue.jsx("video",{src:a.src,className:"w-full h-full object-contain",controls:!0,autoPlay:!0}),a.type==="embed"&&ue.jsx("iframe",{src:a.embedUrl||a.src,className:"w-full h-full",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:a.title}),a.type==="image"&&ue.jsx("img",{src:a.src,alt:a.title,className:"w-full h-full object-contain"})]}),ue.jsxs("div",{className:"mt-6 text-center",children:[ue.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2",children:a.title}),a.description&&ue.jsx("p",{className:"text-gray-600 text-lg font-light",children:a.description})]})]})})})]})]})},Zb=document.getElementById("root");if(!Zb)throw new Error("Could not find root element to mount to");const RO=K1.createRoot(Zb);RO.render(ue.jsx(j1.StrictMode,{children:ue.jsx(AO,{})}));
