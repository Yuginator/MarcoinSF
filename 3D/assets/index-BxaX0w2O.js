(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const af=window,Np=af.ShadowRoot&&(af.ShadyCSS===void 0||af.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pp=Symbol(),G_=new WeakMap;let b2=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==Pp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Np&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=G_.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&G_.set(n,e))}return e}toString(){return this.cssText}};const vy=s=>new b2(typeof s=="string"?s:s+"",void 0,Pp),vn=(s,...e)=>{const n=s.length===1?s[0]:e.reduce(((a,o,c)=>a+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[c+1]),s[0]);return new b2(n,s,Pp)},by=(s,e)=>{Np?s.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const a=document.createElement("style"),o=af.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=n.cssText,s.appendChild(a)}))},V_=Np?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return vy(n)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bh;const uf=window,j_=uf.trustedTypes,yy=j_?j_.emptyScript:"",k_=uf.reactiveElementPolyfillSupport,N0={toAttribute(s,e){switch(e){case Boolean:s=s?yy:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let n=s;switch(e){case Boolean:n=s!==null;break;case Number:n=s===null?null:Number(s);break;case Object:case Array:try{n=JSON.parse(s)}catch{n=null}}return n}},y2=(s,e)=>e!==s&&(e==e||s==s),Fh={attribute:!0,type:String,converter:N0,reflect:!1,hasChanged:y2},P0="finalized";let Uo=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,a)=>{const o=this._$Ep(a,n);o!==void 0&&(this._$Ev.set(o,a),e.push(o))})),e}static createProperty(e,n=Fh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const a=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,a,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,a){return{get(){return this[n]},set(o){const c=this[e];this[n]=o,this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Fh}static finalize(){if(this.hasOwnProperty(P0))return!1;this[P0]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of a)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const o of a)n.unshift(V_(o))}else e!==void 0&&n.push(V_(e));return n}static _$Ep(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,a;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)===null||a===void 0||a.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return by(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)}))}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$EO(e,n,a=Fh){var o;const c=this.constructor._$Ep(e,a);if(c!==void 0&&a.reflect===!0){const u=(((o=a.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?a.converter:N0).toAttribute(n,a.type);this._$El=e,u==null?this.removeAttribute(c):this.setAttribute(c,u),this._$El=null}}_$AK(e,n){var a;const o=this.constructor,c=o._$Ev.get(e);if(c!==void 0&&this._$El!==c){const u=o.getPropertyOptions(c),d=typeof u.converter=="function"?{fromAttribute:u.converter}:((a=u.converter)===null||a===void 0?void 0:a.fromAttribute)!==void 0?u.converter:N0;this._$El=c,this[c]=d.fromAttribute(n,u.type),this._$El=null}}requestUpdate(e,n,a){let o=!0;e!==void 0&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||y2)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),a.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,a))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,c)=>this[c]=o)),this._$Ei=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var c;return(c=o.hostUpdate)===null||c===void 0?void 0:c.call(o)})),this.update(a)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(a)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((a=>{var o;return(o=a.hostUpdated)===null||o===void 0?void 0:o.call(a)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,a)=>this._$EO(a,this[a],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Uo[P0]=!0,Uo.elementProperties=new Map,Uo.elementStyles=[],Uo.shadowRootOptions={mode:"open"},k_==null||k_({ReactiveElement:Uo}),((Bh=uf.reactiveElementVersions)!==null&&Bh!==void 0?Bh:uf.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hh;const ff=window,Po=ff.trustedTypes,X_=Po?Po.createPolicy("lit-html",{createHTML:s=>s}):void 0,z0="$lit$",Wr=`lit$${(Math.random()+"").slice(9)}$`,S2="?"+Wr,Sy=`<${S2}>`,Cs=document,Ql=()=>Cs.createComment(""),Jl=s=>s===null||typeof s!="object"&&typeof s!="function",M2=Array.isArray,My=s=>M2(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Gh=`[ 	
\f\r]`,Gl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W_=/-->/g,q_=/>/g,xs=RegExp(`>|${Gh}(?:([^\\s"'>=/]+)(${Gh}*=${Gh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y_=/'/g,$_=/"/g,E2=/^(?:script|style|textarea|title)$/i,Ey=s=>(e,...n)=>({_$litType$:s,strings:e,values:n}),_n=Ey(1),zo=Symbol.for("lit-noChange"),ii=Symbol.for("lit-nothing"),Z_=new WeakMap,ws=Cs.createTreeWalker(Cs,129,null,!1);function T2(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return X_!==void 0?X_.createHTML(e):e}const Ty=(s,e)=>{const n=s.length-1,a=[];let o,c=e===2?"<svg>":"",u=Gl;for(let d=0;d<n;d++){const m=s[d];let p,g,x=-1,_=0;for(;_<m.length&&(u.lastIndex=_,g=u.exec(m),g!==null);)_=u.lastIndex,u===Gl?g[1]==="!--"?u=W_:g[1]!==void 0?u=q_:g[2]!==void 0?(E2.test(g[2])&&(o=RegExp("</"+g[2],"g")),u=xs):g[3]!==void 0&&(u=xs):u===xs?g[0]===">"?(u=o??Gl,x=-1):g[1]===void 0?x=-2:(x=u.lastIndex-g[2].length,p=g[1],u=g[3]===void 0?xs:g[3]==='"'?$_:Y_):u===$_||u===Y_?u=xs:u===W_||u===q_?u=Gl:(u=xs,o=void 0);const y=u===xs&&s[d+1].startsWith("/>")?" ":"";c+=u===Gl?m+Sy:x>=0?(a.push(p),m.slice(0,x)+z0+m.slice(x)+Wr+y):m+Wr+(x===-2?(a.push(void 0),d):y)}return[T2(s,c+(s[n]||"<?>")+(e===2?"</svg>":"")),a]};class ec{constructor({strings:e,_$litType$:n},a){let o;this.parts=[];let c=0,u=0;const d=e.length-1,m=this.parts,[p,g]=Ty(e,n);if(this.el=ec.createElement(p,a),ws.currentNode=this.el.content,n===2){const x=this.el.content,_=x.firstChild;_.remove(),x.append(..._.childNodes)}for(;(o=ws.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const x=[];for(const _ of o.getAttributeNames())if(_.endsWith(z0)||_.startsWith(Wr)){const y=g[u++];if(x.push(_),y!==void 0){const E=o.getAttribute(y.toLowerCase()+z0).split(Wr),A=/([.?@])?(.*)/.exec(y);m.push({type:1,index:c,name:A[2],strings:E,ctor:A[1]==="."?wy:A[1]==="?"?Cy:A[1]==="@"?Dy:Ef})}else m.push({type:6,index:c})}for(const _ of x)o.removeAttribute(_)}if(E2.test(o.tagName)){const x=o.textContent.split(Wr),_=x.length-1;if(_>0){o.textContent=Po?Po.emptyScript:"";for(let y=0;y<_;y++)o.append(x[y],Ql()),ws.nextNode(),m.push({type:2,index:++c});o.append(x[_],Ql())}}}else if(o.nodeType===8)if(o.data===S2)m.push({type:2,index:c});else{let x=-1;for(;(x=o.data.indexOf(Wr,x+1))!==-1;)m.push({type:7,index:c}),x+=Wr.length-1}c++}}static createElement(e,n){const a=Cs.createElement("template");return a.innerHTML=e,a}}function Io(s,e,n=s,a){var o,c,u,d;if(e===zo)return e;let m=a!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[a]:n._$Cl;const p=Jl(e)?void 0:e._$litDirective$;return(m==null?void 0:m.constructor)!==p&&((c=m==null?void 0:m._$AO)===null||c===void 0||c.call(m,!1),p===void 0?m=void 0:(m=new p(s),m._$AT(s,n,a)),a!==void 0?((u=(d=n)._$Co)!==null&&u!==void 0?u:d._$Co=[])[a]=m:n._$Cl=m),m!==void 0&&(e=Io(s,m._$AS(s,e.values),m,a)),e}class Ay{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:a},parts:o}=this._$AD,c=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Cs).importNode(a,!0);ws.currentNode=c;let u=ws.nextNode(),d=0,m=0,p=o[0];for(;p!==void 0;){if(d===p.index){let g;p.type===2?g=new pc(u,u.nextSibling,this,e):p.type===1?g=new p.ctor(u,p.name,p.strings,this,e):p.type===6&&(g=new Uy(u,this,e)),this._$AV.push(g),p=o[++m]}d!==(p==null?void 0:p.index)&&(u=ws.nextNode(),d++)}return ws.currentNode=Cs,c}v(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}}class pc{constructor(e,n,a,o){var c;this.type=2,this._$AH=ii,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=o,this._$Cp=(c=o==null?void 0:o.isConnected)===null||c===void 0||c}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Io(this,e,n),Jl(e)?e===ii||e==null||e===""?(this._$AH!==ii&&this._$AR(),this._$AH=ii):e!==this._$AH&&e!==zo&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):My(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ii&&Jl(this._$AH)?this._$AA.nextSibling.data=e:this.$(Cs.createTextNode(e)),this._$AH=e}g(e){var n;const{values:a,_$litType$:o}=e,c=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ec.createElement(T2(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===c)this._$AH.v(a);else{const u=new Ay(c,this),d=u.u(this.options);u.v(a),this.$(d),this._$AH=u}}_$AC(e){let n=Z_.get(e.strings);return n===void 0&&Z_.set(e.strings,n=new ec(e)),n}T(e){M2(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,o=0;for(const c of e)o===n.length?n.push(a=new pc(this.k(Ql()),this.k(Ql()),this,this.options)):a=n[o],a._$AI(c),o++;o<n.length&&(this._$AR(a&&a._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Ef{constructor(e,n,a,o,c){this.type=1,this._$AH=ii,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=ii}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,a,o){const c=this.strings;let u=!1;if(c===void 0)e=Io(this,e,n,0),u=!Jl(e)||e!==this._$AH&&e!==zo,u&&(this._$AH=e);else{const d=e;let m,p;for(e=c[0],m=0;m<c.length-1;m++)p=Io(this,d[a+m],n,m),p===zo&&(p=this._$AH[m]),u||(u=!Jl(p)||p!==this._$AH[m]),p===ii?e=ii:e!==ii&&(e+=(p??"")+c[m+1]),this._$AH[m]=p}u&&!o&&this.j(e)}j(e){e===ii?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wy extends Ef{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ii?void 0:e}}const Ry=Po?Po.emptyScript:"";class Cy extends Ef{constructor(){super(...arguments),this.type=4}j(e){e&&e!==ii?this.element.setAttribute(this.name,Ry):this.element.removeAttribute(this.name)}}class Dy extends Ef{constructor(e,n,a,o,c){super(e,n,a,o,c),this.type=5}_$AI(e,n=this){var a;if((e=(a=Io(this,e,n,0))!==null&&a!==void 0?a:ii)===zo)return;const o=this._$AH,c=e===ii&&o!==ii||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==ii&&(o===ii||c);c&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,e):this._$AH.handleEvent(e)}}class Uy{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Io(this,e)}}const K_=ff.litHtmlPolyfillSupport;K_==null||K_(ec,pc),((Hh=ff.litHtmlVersions)!==null&&Hh!==void 0?Hh:ff.litHtmlVersions=[]).push("2.8.0");const Ly=(s,e,n)=>{var a,o;const c=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:e;let u=c._$litPart$;if(u===void 0){const d=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;c._$litPart$=u=new pc(e.insertBefore(Ql(),d),d,void 0,n??{})}return u._$AI(s),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vh,jh;class hr extends Uo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const a=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=a.firstChild),a}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ly(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return zo}}hr.finalized=!0,hr._$litElement$=!0,(Vh=globalThis.litElementHydrateSupport)===null||Vh===void 0||Vh.call(globalThis,{LitElement:hr});const Q_=globalThis.litElementPolyfillSupport;Q_==null||Q_({LitElement:hr});((jh=globalThis.litElementVersions)!==null&&jh!==void 0?jh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mn=s=>e=>typeof e=="function"?((n,a)=>(customElements.define(n,a),a))(s,e):((n,a)=>{const{kind:o,elements:c}=a;return{kind:o,elements:c,finisher(u){customElements.define(n,u)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oy=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,s)}},Ny=(s,e,n)=>{e.constructor.createProperty(n,s)};function Oe(s){return(e,n)=>n!==void 0?Ny(s,e,n):Oy(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Py(s){return Oe({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zy=({finisher:s,descriptor:e})=>(n,a)=>{var o;if(a===void 0){const c=(o=n.originalKey)!==null&&o!==void 0?o:n.key,u=e!=null?{kind:"method",placement:"prototype",key:c,descriptor:e(n.key)}:{...n,key:c};return s!=null&&(u.finisher=function(d){s(d,c)}),u}{const c=n.constructor;e!==void 0&&Object.defineProperty(n,a,e(a)),s==null||s(c,a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jn(s,e){return zy({descriptor:n=>({get(){var o,c;return(c=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&c!==void 0?c:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kh;((kh=window.HTMLSlotElement)===null||kh===void 0?void 0:kh.prototype.assignedElements)!=null;var Iy=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},By=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};const zn=vn`
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
`;class In extends hr{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const n=this.canvasSize();if(!e&&n[0]===this.lastSize[0]&&n[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${n[0]}`),this.svg.setAttribute("height",`${n[1]}`),this.draw(this.svg,n),this.lastSize=n,this.classList.add("wired-rendered")}}fire(e,n){zp(this,e,n)}}Iy([Jn("svg"),By("design:type",SVGSVGElement)],In.prototype,"svg",void 0);function Fy(){return Math.floor(Math.random()*2**31)}function zp(s,e,n){s.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:n}))}function I0(s,e,n){if(s&&s.length){const[a,o]=e,c=Math.PI/180*n,u=Math.cos(c),d=Math.sin(c);for(const m of s){const[p,g]=m;m[0]=(p-a)*u-(g-o)*d+a,m[1]=(p-a)*d+(g-o)*u+o}}}function Hy(s,e,n){const a=[];s.forEach(o=>a.push(...o)),I0(a,e,n)}function Gy(s,e){return s[0]===e[0]&&s[1]===e[1]}function Vy(s,e,n,a=1){const o=n,c=Math.max(e,.1),u=s[0]&&s[0][0]&&typeof s[0][0]=="number"?[s]:s,d=[0,0];if(o)for(const p of u)I0(p,d,o);const m=jy(u,c,a);if(o){for(const p of u)I0(p,d,-o);Hy(m,d,-o)}return m}function jy(s,e,n){const a=[];for(const p of s){const g=[...p];Gy(g[0],g[g.length-1])||g.push([g[0][0],g[0][1]]),g.length>2&&a.push(g)}const o=[];e=Math.max(e,.1);const c=[];for(const p of a)for(let g=0;g<p.length-1;g++){const x=p[g],_=p[g+1];if(x[1]!==_[1]){const y=Math.min(x[1],_[1]);c.push({ymin:y,ymax:Math.max(x[1],_[1]),x:y===x[1]?x[0]:_[0],islope:(_[0]-x[0])/(_[1]-x[1])})}}if(c.sort((p,g)=>p.ymin<g.ymin?-1:p.ymin>g.ymin?1:p.x<g.x?-1:p.x>g.x?1:p.ymax===g.ymax?0:(p.ymax-g.ymax)/Math.abs(p.ymax-g.ymax)),!c.length)return o;let u=[],d=c[0].ymin,m=0;for(;u.length||c.length;){if(c.length){let p=-1;for(let x=0;x<c.length&&!(c[x].ymin>d);x++)p=x;c.splice(0,p+1).forEach(x=>{u.push({s:d,edge:x})})}if(u=u.filter(p=>!(p.edge.ymax<=d)),u.sort((p,g)=>p.edge.x===g.edge.x?0:(p.edge.x-g.edge.x)/Math.abs(p.edge.x-g.edge.x)),(n!==1||m%e===0)&&u.length>1)for(let p=0;p<u.length;p=p+2){const g=p+1;if(g>=u.length)break;const x=u[p].edge,_=u[g].edge;o.push([[Math.round(x.x),d],[Math.round(_.x),d]])}d+=n,u.forEach(p=>{p.edge.x=p.edge.x+n*p.edge.islope}),m++}return o}function A2(s,e){var n;const a=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=e.strokeWidth*4),o=Math.round(Math.max(o,.1));let c=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(c=o),Vy(s,o,a,c||1)}class ky{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const a=A2(e,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(e,n){const a=[];for(const o of e)a.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return a}}function Xy(s){const e=s[0],n=s[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class Wy extends ky{fillPolygons(e,n){let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);const o=Object.assign({},n,{hachureGap:a}),c=A2(e,o),u=Math.PI/180*n.hachureAngle,d=[],m=a*.5*Math.cos(u),p=a*.5*Math.sin(u);for(const[x,_]of c)Xy([x,_])&&d.push([[x[0]-m,x[1]+p],[..._]],[[x[0]+m,x[1]-p],[..._]]);return{type:"fillSketch",ops:this.renderLines(d,n)}}}class qy{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function w2(s,e,n,a,o){return{type:"path",ops:df(s,e,n,a,o)}}function Yy(s,e,n){const a=(s||[]).length;if(a>2){const o=[];for(let c=0;c<a-1;c++)o.push(...df(s[c][0],s[c][1],s[c+1][0],s[c+1][1],n));return o.push(...df(s[a-1][0],s[a-1][1],s[0][0],s[0][1],n)),{type:"path",ops:o}}else if(a===2)return w2(s[0][0],s[0][1],s[1][0],s[1][1],n);return{type:"path",ops:[]}}function R2(s,e){return Yy(s,!0,e)}function $y(s,e,n,a,o){const c=[[s,e],[s+n,e],[s+n,e+a],[s,e+a]];return R2(c,o)}function C2(s,e,n,a,o){const c=D2(n,a,o);return Zy(s,e,o,c).opset}function D2(s,e,n){const a=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(s/2,2)+Math.pow(e/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),c=Math.PI*2/o;let u=Math.abs(s/2),d=Math.abs(e/2);const m=1-n.curveFitting;return u+=Yn(u*m,n),d+=Yn(d*m,n),{increment:c,rx:u,ry:d}}function Zy(s,e,n,a){const[o,c]=ev(a.increment,s,e,a.rx,a.ry,1,a.increment*B0(.1,B0(.4,1,n),n),n);let u=J_(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[d]=ev(a.increment,s,e,a.rx,a.ry,1.5,0,n),m=J_(d,null,n);u=u.concat(m)}return{estimatedPoints:c,opset:{type:"path",ops:u}}}function Ky(s,e,n,a,o){return df(s,e,n,a,o,!0)}function U2(s){return s.randomizer||(s.randomizer=new qy(s.seed||0)),s.randomizer.next()}function B0(s,e,n,a=1){return n.roughness*a*(U2(n)*(e-s)+s)}function Yn(s,e,n=1){return B0(-s,s,e,n)}function df(s,e,n,a,o,c=!1){const u=c?o.disableMultiStrokeFill:o.disableMultiStroke,d=F0(s,e,n,a,o,!0,!1);if(u)return d;const m=F0(s,e,n,a,o,!0,!0);return d.concat(m)}function F0(s,e,n,a,o,c,u){const d=Math.pow(s-n,2)+Math.pow(e-a,2),m=Math.sqrt(d);let p=1;m<200?p=1:m>500?p=.4:p=-.0016668*m+1.233334;let g=o.maxRandomnessOffset||0;g*g*100>d&&(g=m/10);const x=g/2,_=.2+U2(o)*.2;let y=o.bowing*o.maxRandomnessOffset*(a-e)/200,E=o.bowing*o.maxRandomnessOffset*(s-n)/200;y=Yn(y,o,p),E=Yn(E,o,p);const A=[],S=()=>Yn(x,o,p),v=()=>Yn(g,o,p),P=o.preserveVertices;return u?A.push({op:"move",data:[s+(P?0:S()),e+(P?0:S())]}):A.push({op:"move",data:[s+(P?0:Yn(g,o,p)),e+(P?0:Yn(g,o,p))]}),u?A.push({op:"bcurveTo",data:[y+s+(n-s)*_+S(),E+e+(a-e)*_+S(),y+s+2*(n-s)*_+S(),E+e+2*(a-e)*_+S(),n+(P?0:S()),a+(P?0:S())]}):A.push({op:"bcurveTo",data:[y+s+(n-s)*_+v(),E+e+(a-e)*_+v(),y+s+2*(n-s)*_+v(),E+e+2*(a-e)*_+v(),n+(P?0:v()),a+(P?0:v())]}),A}function J_(s,e,n){const a=s.length,o=[];if(a>3){const c=[],u=1-n.curveTightness;o.push({op:"move",data:[s[1][0],s[1][1]]});for(let d=1;d+2<a;d++){const m=s[d];c[0]=[m[0],m[1]],c[1]=[m[0]+(u*s[d+1][0]-u*s[d-1][0])/6,m[1]+(u*s[d+1][1]-u*s[d-1][1])/6],c[2]=[s[d+1][0]+(u*s[d][0]-u*s[d+2][0])/6,s[d+1][1]+(u*s[d][1]-u*s[d+2][1])/6],c[3]=[s[d+1][0],s[d+1][1]],o.push({op:"bcurveTo",data:[c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]]})}}else a===3?(o.push({op:"move",data:[s[1][0],s[1][1]]}),o.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[2][0],s[2][1]]})):a===2&&o.push(...F0(s[0][0],s[0][1],s[1][0],s[1][1],n,!0,!0));return o}function ev(s,e,n,a,o,c,u,d){const m=d.roughness===0,p=[],g=[];if(m){s=s/4,g.push([e+a*Math.cos(-s),n+o*Math.sin(-s)]);for(let x=0;x<=Math.PI*2;x=x+s){const _=[e+a*Math.cos(x),n+o*Math.sin(x)];p.push(_),g.push(_)}g.push([e+a*Math.cos(0),n+o*Math.sin(0)]),g.push([e+a*Math.cos(s),n+o*Math.sin(s)])}else{const x=Yn(.5,d)-Math.PI/2;g.push([Yn(c,d)+e+.9*a*Math.cos(x-s),Yn(c,d)+n+.9*o*Math.sin(x-s)]);const _=Math.PI*2+x-.01;for(let y=x;y<_;y=y+s){const E=[Yn(c,d)+e+a*Math.cos(y),Yn(c,d)+n+o*Math.sin(y)];p.push(E),g.push(E)}g.push([Yn(c,d)+e+a*Math.cos(x+Math.PI*2+u*.5),Yn(c,d)+n+o*Math.sin(x+Math.PI*2+u*.5)]),g.push([Yn(c,d)+e+.98*a*Math.cos(x+u),Yn(c,d)+n+.98*o*Math.sin(x+u)]),g.push([Yn(c,d)+e+.9*a*Math.cos(x+u*.5),Yn(c,d)+n+.9*o*Math.sin(x+u*.5)])}return[g,p]}const Qy={randOffset(s,e){return s},randOffsetWithRange(s,e,n){return(s+e)/2},ellipse(s,e,n,a,o){return C2(s,e,n,a,o)},doubleLineOps(s,e,n,a,o){return Ky(s,e,n,a,o)}};function Wo(s){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:s}}function Jy(s,e){let n="";for(const a of s.ops){const o=a.data;switch(a.op){case"move":if(e&&n)break;n+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":n+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":n+=`L${o[0]} ${o[1]} `;break}}return n.trim()}function Bo(s,e){const n=document.createElementNS("http://www.w3.org/2000/svg",s);if(e)for(const a in e)n.setAttributeNS(null,a,e[a]);return n}function mc(s,e,n=!1){const a=Bo("path",{d:Jy(s,n)});return e&&e.appendChild(a),a}function Fi(s,e,n,a,o,c){return mc($y(e+2,n+2,a-4,o-4,Wo(c)),s)}function Pn(s,e,n,a,o,c){return mc(w2(e,n,a,o,Wo(c)),s)}function eS(s,e,n){return mc(R2(e,Wo(n)),s,!0)}function Ds(s,e,n,a,o,c){return a=Math.max(a>10?a-4:a-1,1),o=Math.max(o>10?o-4:o-1,1),mc(C2(e,n,a,o,Wo(c)),s)}function Tf(s,e){const a=new Wy(Qy).fillPolygon(s,Wo(e));return mc(a,null)}function Ip(s,e,n,a,o){const c=Wo(o),u=D2(n,a,c),d=[];let m=0;for(;m<=Math.PI*2;)d.push([s+u.rx*Math.cos(m),e+u.ry*Math.sin(m)]),m+=u.increment;return Tf(d,o)}var Af=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},wf=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let tc=class extends In{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};Fi(e,0,0,o.width,o.height,this.seed);for(let c=1;c<a;c++)Pn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Pn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Pn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Pn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Af([Oe({type:Number}),wf("design:type",Object)],tc.prototype,"elevation",void 0);Af([Oe({type:Boolean,reflect:!0}),wf("design:type",Object)],tc.prototype,"disabled",void 0);Af([Jn("button"),wf("design:type",HTMLButtonElement)],tc.prototype,"button",void 0);tc=Af([Mn("wired-button"),wf("design:paramtypes",[])],tc);var Bp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Fp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let nc=class extends In{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const n=e.has("fill");this.wiredRender(n),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};if(this.fill&&this.fill.trim()){const c=Tf([[2,2],[o.width-4,2],[o.width-2,o.height-4],[2,o.height-4]],this.seed);c.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(c)}Fi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Pn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Pn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Pn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Pn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Bp([Oe({type:Number}),Fp("design:type",Object)],nc.prototype,"elevation",void 0);Bp([Oe({type:String}),Fp("design:type",String)],nc.prototype,"fill",void 0);nc=Bp([Mn("wired-card"),Fp("design:paramtypes",[])],nc);var gc=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Rf=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Fo=class extends In{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[zn,vn`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return _n`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){Fi(e,0,0,n[0],n[1],this.seed),this.svgCheck=Bo("g"),e.appendChild(this.svgCheck),Pn(this.svgCheck,n[0]*.3,n[1]*.4,n[0]*.5,n[1]*.7,this.seed),Pn(this.svgCheck,n[0]*.5,n[1]*.7,n[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};gc([Oe({type:Boolean}),Rf("design:type",Object)],Fo.prototype,"checked",void 0);gc([Oe({type:Boolean,reflect:!0}),Rf("design:type",Object)],Fo.prototype,"disabled",void 0);gc([Py(),Rf("design:type",Object)],Fo.prototype,"focused",void 0);gc([Jn("input"),Rf("design:type",HTMLInputElement)],Fo.prototype,"input",void 0);Fo=gc([Mn("wired-checkbox")],Fo);var Cf=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Hp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let ic=class extends In{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){const a=Tf([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],this.seed);e.appendChild(a)}};Cf([Oe(),Hp("design:type",Object)],ic.prototype,"value",void 0);Cf([Oe(),Hp("design:type",Object)],ic.prototype,"name",void 0);Cf([Oe({type:Boolean}),Hp("design:type",Object)],ic.prototype,"selected",void 0);ic=Cf([Mn("wired-item")],ic);var qo=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},xc=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Us=class extends hr{constructor(){super(...arguments),this.disabled=!1,this.seed=Fy(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return vn`
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
    `}render(){return _n`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const n=this.svg;for(;n.hasChildNodes();)n.removeChild(n.lastChild);const a=this.shadowRoot.getElementById("container").getBoundingClientRect();n.setAttribute("width",`${a.width}`),n.setAttribute("height",`${a.height}`);const o=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=o.height+"px",Fi(n,0,0,o.width,o.height,this.seed);const c=o.width-4;Fi(n,c,0,34,o.height,this.seed);const u=Math.max(0,Math.abs((o.height-24)/2)),d=eS(n,[[c+8,5+u],[c+26,5+u],[c+17,u+Math.min(o.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const m=this.shadowRoot.getElementById("slot").assignedNodes();if(m&&m.length)for(let p=0;p<m.length;p++){const g=m[p];g.tagName==="WIRED-ITEM"&&(g.setAttribute("role","option"),this.itemNodes.push(g))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||c.getAttribute("value")||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(a=>a.nodeType===Node.ELEMENT_NODE).forEach(a=>{const o=a;o.requestUpdate&&o.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){zp(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};qo([Oe({type:Object}),xc("design:type",Object)],Us.prototype,"value",void 0);qo([Oe({type:String,reflect:!0}),xc("design:type",String)],Us.prototype,"selected",void 0);qo([Oe({type:Boolean,reflect:!0}),xc("design:type",Object)],Us.prototype,"disabled",void 0);qo([Jn("svg"),xc("design:type",SVGSVGElement)],Us.prototype,"svg",void 0);qo([Jn("#card"),xc("design:type",HTMLDivElement)],Us.prototype,"card",void 0);Us=qo([Mn("wired-combo")],Us);var Df=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Gp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let ac=class extends hr{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return vn`
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
    `}render(){return _n`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};Df([Oe({type:Number}),Gp("design:type",Object)],ac.prototype,"elevation",void 0);Df([Oe({type:Boolean,reflect:!0}),Gp("design:type",Object)],ac.prototype,"open",void 0);Df([Jn("wired-card"),Gp("design:type",nc)],ac.prototype,"card",void 0);ac=Df([Mn("wired-dialog")],ac);var L2=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},tS=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let H0=class extends In{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[zn,vn`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return _n`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5);return[e.width,n*6]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5);for(let o=0;o<a;o++)Pn(e,0,o*6+3,n[0],o*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};L2([Oe({type:Number}),tS("design:type",Object)],H0.prototype,"elevation",void 0);H0=L2([Mn("wired-divider")],H0);var Vp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O2=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let hf=class extends In{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]),o=Ip(a/2,a/2,a,a,this.seed);e.appendChild(o)}};Vp([Oe({type:Boolean,reflect:!0}),O2("design:type",Object)],hf.prototype,"disabled",void 0);Vp([Jn("button"),O2("design:type",HTMLButtonElement)],hf.prototype,"button",void 0);hf=Vp([Mn("wired-fab")],hf);var jp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},N2=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let pf=class extends In{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]);e.setAttribute("width",`${a}`),e.setAttribute("height",`${a}`),Ds(e,a/2,a/2,a,a,this.seed)}};jp([Oe({type:Boolean,reflect:!0}),N2("design:type",Object)],pf.prototype,"disabled",void 0);jp([Jn("button"),N2("design:type",HTMLButtonElement)],pf.prototype,"button",void 0);pf=jp([Mn("wired-icon-button")],pf);var kp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Xp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};const nS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let mf=class extends In{constructor(){super(),this.elevation=1,this.src=nS,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};Fi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Pn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Pn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Pn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Pn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};kp([Oe({type:Number}),Xp("design:type",Object)],mf.prototype,"elevation",void 0);kp([Oe({type:String}),Xp("design:type",String)],mf.prototype,"src",void 0);mf=kp([Mn("wired-image"),Xp("design:paramtypes",[])],mf);var ri=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},si=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Zn=class extends In{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Fi(e,2,2,n[0]-2,n[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};ri([Oe({type:Boolean,reflect:!0}),si("design:type",Object)],Zn.prototype,"disabled",void 0);ri([Oe({type:String}),si("design:type",Object)],Zn.prototype,"placeholder",void 0);ri([Oe({type:String}),si("design:type",String)],Zn.prototype,"name",void 0);ri([Oe({type:String}),si("design:type",String)],Zn.prototype,"min",void 0);ri([Oe({type:String}),si("design:type",String)],Zn.prototype,"max",void 0);ri([Oe({type:String}),si("design:type",String)],Zn.prototype,"step",void 0);ri([Oe({type:String}),si("design:type",Object)],Zn.prototype,"type",void 0);ri([Oe({type:String}),si("design:type",Object)],Zn.prototype,"autocomplete",void 0);ri([Oe({type:String}),si("design:type",Object)],Zn.prototype,"autocapitalize",void 0);ri([Oe({type:String}),si("design:type",Object)],Zn.prototype,"autocorrect",void 0);ri([Oe({type:Boolean}),si("design:type",Object)],Zn.prototype,"required",void 0);ri([Oe({type:Boolean}),si("design:type",Object)],Zn.prototype,"autofocus",void 0);ri([Oe({type:Boolean}),si("design:type",Object)],Zn.prototype,"readonly",void 0);ri([Oe({type:Number}),si("design:type",Number)],Zn.prototype,"minlength",void 0);ri([Oe({type:Number}),si("design:type",Number)],Zn.prototype,"maxlength",void 0);ri([Oe({type:Number}),si("design:type",Number)],Zn.prototype,"size",void 0);ri([Jn("input"),si("design:type",HTMLInputElement)],Zn.prototype,"textInput",void 0);Zn=ri([Mn("wired-input"),si("design:paramtypes",[])],Zn);var _c=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Uf=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Ho=class extends In{constructor(){super(...arguments),this.elevation=1}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0],height:n[1]-(a-1)*2};for(let c=0;c<a;c++)Pn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed),Pn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed)}};_c([Oe({type:Number}),Uf("design:type",Object)],Ho.prototype,"elevation",void 0);_c([Oe({type:String}),Uf("design:type",String)],Ho.prototype,"href",void 0);_c([Oe({type:String}),Uf("design:type",String)],Ho.prototype,"target",void 0);_c([Jn("a"),Uf("design:type",HTMLAnchorElement)],Ho.prototype,"anchor",void 0);Ho=_c([Mn("wired-link")],Ho);var Lf=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Wp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let rc=class extends In{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let n=0;n<e.length;n++){const a=e[n];a.tagName==="WIRED-ITEM"&&(a.setAttribute("role","option"),this.itemNodes.push(a))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Fi(e,0,0,n[0],n[1],this.seed)}};Lf([Oe({type:Object}),Wp("design:type",Object)],rc.prototype,"value",void 0);Lf([Oe({type:String}),Wp("design:type",String)],rc.prototype,"selected",void 0);Lf([Oe({type:Boolean}),Wp("design:type",Object)],rc.prototype,"horizontal",void 0);rc=Lf([Mn("wired-listbox")],rc);var vc=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Of=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Ls=class extends In{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Fi(e,2,2,n[0]-2,n[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const n=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const a=n.width*Math.max(0,Math.min(e,100));this.progBox=Tf([[0,0],[a,0],[a,n.height],[0,n.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};vc([Oe({type:Number}),Of("design:type",Object)],Ls.prototype,"value",void 0);vc([Oe({type:Number}),Of("design:type",Object)],Ls.prototype,"min",void 0);vc([Oe({type:Number}),Of("design:type",Object)],Ls.prototype,"max",void 0);vc([Oe({type:Boolean}),Of("design:type",Object)],Ls.prototype,"percentage",void 0);Ls=vc([Mn("wired-progress")],Ls);var Yo=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},bc=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Os=class extends In{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[zn,vn`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return _n`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){Ds(e,n[0]/2,n[1]/2,n[0],n[1],this.seed),this.svgCheck=Bo("g"),e.appendChild(this.svgCheck);const a=Math.max(n[0]*.6,5),o=Math.max(n[1]*.6,5);Ds(this.svgCheck,n[0]/2,n[1]/2,a,o,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Yo([Oe({type:Boolean}),bc("design:type",Object)],Os.prototype,"checked",void 0);Yo([Oe({type:Boolean,reflect:!0}),bc("design:type",Object)],Os.prototype,"disabled",void 0);Yo([Oe({type:String}),bc("design:type",String)],Os.prototype,"name",void 0);Yo([Oe(),bc("design:type",Object)],Os.prototype,"focused",void 0);Yo([Jn("input"),bc("design:type",HTMLInputElement)],Os.prototype,"input",void 0);Os=Yo([Mn("wired-radio")],Os);var P2=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},iS=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let G0=class extends hr{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return vn`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return _n`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const n=e.detail.checked,a=e.target,o=a.name||"";n?(this.selected=n&&o||"",this.fireSelected()):a.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const n=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],n&&n.length)for(let a=0;a<n.length;a++){const o=n[a];if(o.tagName==="WIRED-RADIO"){this.radioNodes.push(o);const c=o.name||"";this.selected&&c===this.selected?o.checked=!0:o.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a--,a<0&&(a=e.length-1),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a++,a>=e.length&&(a=0),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}fireSelected(){zp(this,"selected",{selected:this.selected})}};P2([Oe({type:String}),iS("design:type",String)],G0.prototype,"selected",void 0);G0=P2([Mn("wired-radio-group")],G0);var zs=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},$o=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Kr=class extends In{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;n&&(n.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Fi(e,2,2,n[0]-2,n[1]-2,this.seed),this.searchIcon=Bo("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),Ds(this.searchIcon,n[0]-30,(n[1]-30)/2+10,20,20,this.seed),Pn(this.searchIcon,n[0]-10,(n[1]-30)/2+30,n[0]-25,(n[1]-30)/2+15,this.seed),this.closeIcon=Bo("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),Pn(this.closeIcon,n[0]-33,(n[1]-30)/2+2,n[0]-7,(n[1]-30)/2+28,this.seed),Pn(this.closeIcon,n[0]-7,(n[1]-30)/2+2,n[0]-33,(n[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};zs([Oe({type:Boolean,reflect:!0}),$o("design:type",Object)],Kr.prototype,"disabled",void 0);zs([Oe({type:String}),$o("design:type",Object)],Kr.prototype,"placeholder",void 0);zs([Oe({type:String}),$o("design:type",Object)],Kr.prototype,"autocomplete",void 0);zs([Oe({type:String}),$o("design:type",Object)],Kr.prototype,"autocorrect",void 0);zs([Oe({type:Boolean}),$o("design:type",Object)],Kr.prototype,"autofocus",void 0);zs([Jn("input"),$o("design:type",HTMLInputElement)],Kr.prototype,"textInput",void 0);Kr=zs([Mn("wired-search-input")],Kr);var Zo=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},yc=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Qr=class extends In{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[zn,vn`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return _n`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){this.canvasWidth=n[0];const a=Math.round(n[1]/2);Pn(e,0,a,n[0],a,this.seed).classList.add("bar"),this.knob=Ds(e,10,a,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,n=Math.max(this.step,this.max-this.min),a=(e-this.min)/n;this.knob&&(this.knob.style.transform=`translateX(${a*(this.canvasWidth-20)}px)`)}}};Zo([Oe({type:Number}),yc("design:type",Object)],Qr.prototype,"min",void 0);Zo([Oe({type:Number}),yc("design:type",Object)],Qr.prototype,"max",void 0);Zo([Oe({type:Number}),yc("design:type",Object)],Qr.prototype,"step",void 0);Zo([Oe({type:Boolean,reflect:!0}),yc("design:type",Object)],Qr.prototype,"disabled",void 0);Zo([Jn("input"),yc("design:type",HTMLInputElement)],Qr.prototype,"input",void 0);Qr=Zo([Mn("wired-slider")],Qr);var qp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},z2=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let gf=class extends In{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[zn,vn`
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
      `]}render(){return _n`<svg></svg>`}canvasSize(){return[76,76]}draw(e,n){Ds(e,n[0]/2,n[1]/2,Math.floor(n[0]*.8),Math.floor(.8*n[1]),this.seed),this.knob=Ip(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};qp([Oe({type:Boolean}),z2("design:type",Object)],gf.prototype,"spinning",void 0);qp([Oe({type:Number}),z2("design:type",Object)],gf.prototype,"duration",void 0);gf=qp([Mn("wired-spinner")],gf);var Yp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},$p=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let xf=class extends In{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[zn,vn`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return _n`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Fi(e,2,2,n[0]-4,n[1]-4,this.seed)}};Yp([Oe({type:String}),$p("design:type",Object)],xf.prototype,"name",void 0);Yp([Oe({type:String}),$p("design:type",Object)],xf.prototype,"label",void 0);xf=Yp([Mn("wired-tab"),$p("design:paramtypes",[])],xf);var Zp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},I2=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let _f=class extends hr{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <div id="bar">
      ${this.pages.map(e=>_n`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let n=0;n<e.length;n++){const a=e[n];if(a.nodeType===Node.ELEMENT_NODE&&a.tagName.toLowerCase()==="wired-tab"){const o=a;this.pages.push(o);const c=o.getAttribute("name")||"";c&&c.trim().split(" ").forEach(u=>{u&&this.pageMap.set(u,o)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let n=0;n<this.pages.length;n++){const a=this.pages[n];a===e?a.classList.remove("hidden"):a.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].name||""}}selectNext(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].name||""}}};Zp([Oe({type:String}),I2("design:type",String)],_f.prototype,"selected",void 0);Zp([Jn("slot"),I2("design:type",HTMLSlotElement)],_f.prototype,"slotElement",void 0);_f=Zp([Mn("wired-tabs")],_f);var ea=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},pa=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Hi=class extends In{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.textarea;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Fi(e,4,4,n[0]-4,n[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};ea([Oe({type:Boolean,reflect:!0}),pa("design:type",Object)],Hi.prototype,"disabled",void 0);ea([Oe({type:Number}),pa("design:type",Object)],Hi.prototype,"rows",void 0);ea([Oe({type:Number}),pa("design:type",Object)],Hi.prototype,"maxrows",void 0);ea([Oe({type:String}),pa("design:type",Object)],Hi.prototype,"autocomplete",void 0);ea([Oe({type:Boolean}),pa("design:type",Object)],Hi.prototype,"autofocus",void 0);ea([Oe({type:String}),pa("design:type",Object)],Hi.prototype,"inputmode",void 0);ea([Oe({type:String}),pa("design:type",Object)],Hi.prototype,"placeholder",void 0);ea([Oe({type:Boolean}),pa("design:type",Object)],Hi.prototype,"required",void 0);ea([Oe({type:Boolean}),pa("design:type",Object)],Hi.prototype,"readonly",void 0);ea([Oe({type:Number}),pa("design:type",Number)],Hi.prototype,"minlength",void 0);ea([Oe({type:Number}),pa("design:type",Number)],Hi.prototype,"maxlength",void 0);ea([Jn("textarea"),pa("design:type",HTMLTextAreaElement)],Hi.prototype,"textareaInput",void 0);Hi=ea([Mn("wired-textarea")],Hi);var Nf=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Kp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let sc=class extends In{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,n){Fi(e,16,8,n[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Bo("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const o=Ip(16,16,32,32,this.seed);o.classList.add("knobfill"),this.knob.appendChild(o),Ds(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Nf([Oe({type:Boolean}),Kp("design:type",Object)],sc.prototype,"checked",void 0);Nf([Oe({type:Boolean,reflect:!0}),Kp("design:type",Object)],sc.prototype,"disabled",void 0);Nf([Jn("input"),Kp("design:type",HTMLInputElement)],sc.prototype,"input",void 0);sc=Nf([Mn("wired-toggle")],sc);var wa=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ra=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let ha=class extends In{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[zn,vn`
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
      `]}render(){return _n`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Fi(e,2,2,n[0]-4,n[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const n=Math.floor(e/60),a=Math.round(e-n*60);return`${n}:${a}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};wa([Oe({type:String}),Ra("design:type",Object)],ha.prototype,"src",void 0);wa([Oe({type:Boolean}),Ra("design:type",Object)],ha.prototype,"autoplay",void 0);wa([Oe({type:Boolean}),Ra("design:type",Object)],ha.prototype,"loop",void 0);wa([Oe({type:Boolean}),Ra("design:type",Object)],ha.prototype,"muted",void 0);wa([Oe({type:Boolean}),Ra("design:type",Object)],ha.prototype,"playsinline",void 0);wa([Oe(),Ra("design:type",Object)],ha.prototype,"playing",void 0);wa([Oe(),Ra("design:type",Object)],ha.prototype,"timeDisplay",void 0);wa([Jn("wired-progress"),Ra("design:type",Ls)],ha.prototype,"progressBar",void 0);wa([Jn("wired-slider"),Ra("design:type",Qr)],ha.prototype,"slider",void 0);wa([Jn("video"),Ra("design:type",HTMLVideoElement)],ha.prototype,"video",void 0);ha=wa([Mn("wired-video"),Ra("design:paramtypes",[])],ha);function B2(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Xh={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function aS(){if(tv)return Vl;tv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Vl.Fragment=e,Vl.jsx=n,Vl.jsxs=n,Vl}var nv;function rS(){return nv||(nv=1,Xh.exports=aS()),Xh.exports}var oe=rS(),Wh={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function sS(){if(iv)return _t;iv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function v(U,ae,K){this.props=U,this.context=ae,this.refs=S,this.updater=K||E}v.prototype.isReactComponent={},v.prototype.setState=function(U,ae){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ae,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=v.prototype;function D(U,ae,K){this.props=U,this.context=ae,this.refs=S,this.updater=K||E}var z=D.prototype=new P;z.constructor=D,A(z,v.prototype),z.isPureReactComponent=!0;var V=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function C(U,ae,K){var _e=K.ref;return{$$typeof:s,type:U,key:ae,ref:_e!==void 0?_e:null,props:K}}function R(U,ae){return C(U.type,ae,U.props)}function j(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function te(U){var ae={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(K){return ae[K]})}var le=/\/+/g;function pe(U,ae){return typeof U=="object"&&U!==null&&U.key!=null?te(""+U.key):ae.toString(36)}function $(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(O,O):(U.status="pending",U.then(function(ae){U.status==="pending"&&(U.status="fulfilled",U.value=ae)},function(ae){U.status==="pending"&&(U.status="rejected",U.reason=ae)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,ae,K,_e,Re){var Z=typeof U;(Z==="undefined"||Z==="boolean")&&(U=null);var ce=!1;if(U===null)ce=!0;else switch(Z){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(U.$$typeof){case s:case e:ce=!0;break;case g:return ce=U._init,N(ce(U._payload),ae,K,_e,Re)}}if(ce)return Re=Re(U),ce=_e===""?"."+pe(U,0):_e,V(Re)?(K="",ce!=null&&(K=ce.replace(le,"$&/")+"/"),N(Re,ae,K,"",function(Xe){return Xe})):Re!=null&&(j(Re)&&(Re=R(Re,K+(Re.key==null||U&&U.key===Re.key?"":(""+Re.key).replace(le,"$&/")+"/")+ce)),ae.push(Re)),1;ce=0;var we=_e===""?".":_e+":";if(V(U))for(var Be=0;Be<U.length;Be++)_e=U[Be],Z=we+pe(_e,Be),ce+=N(_e,ae,K,Z,Re);else if(Be=y(U),typeof Be=="function")for(U=Be.call(U),Be=0;!(_e=U.next()).done;)_e=_e.value,Z=we+pe(_e,Be++),ce+=N(_e,ae,K,Z,Re);else if(Z==="object"){if(typeof U.then=="function")return N($(U),ae,K,_e,Re);throw ae=String(U),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return ce}function X(U,ae,K){if(U==null)return U;var _e=[],Re=0;return N(U,_e,"","",function(Z){return ae.call(K,Z,Re++)}),_e}function k(U){if(U._status===-1){var ae=U._result;ae=ae(),ae.then(function(K){(U._status===0||U._status===-1)&&(U._status=1,U._result=K)},function(K){(U._status===0||U._status===-1)&&(U._status=2,U._result=K)}),U._status===-1&&(U._status=0,U._result=ae)}if(U._status===1)return U._result.default;throw U._result}var de=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},me={map:X,forEach:function(U,ae,K){X(U,function(){ae.apply(this,arguments)},K)},count:function(U){var ae=0;return X(U,function(){ae++}),ae},toArray:function(U){return X(U,function(ae){return ae})||[]},only:function(U){if(!j(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return _t.Activity=x,_t.Children=me,_t.Component=v,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=D,_t.StrictMode=a,_t.Suspense=m,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,_t.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},_t.cache=function(U){return function(){return U.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(U,ae,K){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var _e=A({},U.props),Re=U.key;if(ae!=null)for(Z in ae.key!==void 0&&(Re=""+ae.key),ae)!ie.call(ae,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&ae.ref===void 0||(_e[Z]=ae[Z]);var Z=arguments.length-2;if(Z===1)_e.children=K;else if(1<Z){for(var ce=Array(Z),we=0;we<Z;we++)ce[we]=arguments[we+2];_e.children=ce}return C(U.type,Re,_e)},_t.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},_t.createElement=function(U,ae,K){var _e,Re={},Z=null;if(ae!=null)for(_e in ae.key!==void 0&&(Z=""+ae.key),ae)ie.call(ae,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Re[_e]=ae[_e]);var ce=arguments.length-2;if(ce===1)Re.children=K;else if(1<ce){for(var we=Array(ce),Be=0;Be<ce;Be++)we[Be]=arguments[Be+2];Re.children=we}if(U&&U.defaultProps)for(_e in ce=U.defaultProps,ce)Re[_e]===void 0&&(Re[_e]=ce[_e]);return C(U,Z,Re)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:d,render:U}},_t.isValidElement=j,_t.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:k}},_t.memo=function(U,ae){return{$$typeof:p,type:U,compare:ae===void 0?null:ae}},_t.startTransition=function(U){var ae=F.T,K={};F.T=K;try{var _e=U(),Re=F.S;Re!==null&&Re(K,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(O,de)}catch(Z){de(Z)}finally{ae!==null&&K.types!==null&&(ae.types=K.types),F.T=ae}},_t.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},_t.use=function(U){return F.H.use(U)},_t.useActionState=function(U,ae,K){return F.H.useActionState(U,ae,K)},_t.useCallback=function(U,ae){return F.H.useCallback(U,ae)},_t.useContext=function(U){return F.H.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U,ae){return F.H.useDeferredValue(U,ae)},_t.useEffect=function(U,ae){return F.H.useEffect(U,ae)},_t.useEffectEvent=function(U){return F.H.useEffectEvent(U)},_t.useId=function(){return F.H.useId()},_t.useImperativeHandle=function(U,ae,K){return F.H.useImperativeHandle(U,ae,K)},_t.useInsertionEffect=function(U,ae){return F.H.useInsertionEffect(U,ae)},_t.useLayoutEffect=function(U,ae){return F.H.useLayoutEffect(U,ae)},_t.useMemo=function(U,ae){return F.H.useMemo(U,ae)},_t.useOptimistic=function(U,ae){return F.H.useOptimistic(U,ae)},_t.useReducer=function(U,ae,K){return F.H.useReducer(U,ae,K)},_t.useRef=function(U){return F.H.useRef(U)},_t.useState=function(U){return F.H.useState(U)},_t.useSyncExternalStore=function(U,ae,K){return F.H.useSyncExternalStore(U,ae,K)},_t.useTransition=function(){return F.H.useTransition()},_t.version="19.2.1",_t}var av;function Qp(){return av||(av=1,Wh.exports=sS()),Wh.exports}var Ie=Qp();const oS=B2(Ie);var qh={exports:{}},jl={},Yh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function lS(){return rv||(rv=1,(function(s){function e(N,X){var k=N.length;N.push(X);e:for(;0<k;){var de=k-1>>>1,me=N[de];if(0<o(me,X))N[de]=X,N[k]=me,k=de;else break e}}function n(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var X=N[0],k=N.pop();if(k!==X){N[0]=k;e:for(var de=0,me=N.length,U=me>>>1;de<U;){var ae=2*(de+1)-1,K=N[ae],_e=ae+1,Re=N[_e];if(0>o(K,k))_e<me&&0>o(Re,K)?(N[de]=Re,N[_e]=k,de=_e):(N[de]=K,N[ae]=k,de=ae);else if(_e<me&&0>o(Re,k))N[de]=Re,N[_e]=k,de=_e;else break e}}return X}function o(N,X){var k=N.sortIndex-X.sortIndex;return k!==0?k:N.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,x=null,_=3,y=!1,E=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function z(N){for(var X=n(p);X!==null;){if(X.callback===null)a(p);else if(X.startTime<=N)a(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=n(p)}}function V(N){if(A=!1,z(N),!E)if(n(m)!==null)E=!0,O||(O=!0,te());else{var X=n(p);X!==null&&$(V,X.startTime-N)}}var O=!1,F=-1,ie=5,C=-1;function R(){return S?!0:!(s.unstable_now()-C<ie)}function j(){if(S=!1,O){var N=s.unstable_now();C=N;var X=!0;try{e:{E=!1,A&&(A=!1,P(F),F=-1),y=!0;var k=_;try{t:{for(z(N),x=n(m);x!==null&&!(x.expirationTime>N&&R());){var de=x.callback;if(typeof de=="function"){x.callback=null,_=x.priorityLevel;var me=de(x.expirationTime<=N);if(N=s.unstable_now(),typeof me=="function"){x.callback=me,z(N),X=!0;break t}x===n(m)&&a(m),z(N)}else a(m);x=n(m)}if(x!==null)X=!0;else{var U=n(p);U!==null&&$(V,U.startTime-N),X=!1}}break e}finally{x=null,_=k,y=!1}X=void 0}}finally{X?te():O=!1}}}var te;if(typeof D=="function")te=function(){D(j)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,pe=le.port2;le.port1.onmessage=j,te=function(){pe.postMessage(null)}}else te=function(){v(j,0)};function $(N,X){F=v(function(){N(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(N){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var k=_;_=X;try{return N()}finally{_=k}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=_;_=N;try{return X()}finally{_=k}},s.unstable_scheduleCallback=function(N,X,k){var de=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?de+k:de):k=de,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=k+me,N={id:g++,callback:X,priorityLevel:N,startTime:k,expirationTime:me,sortIndex:-1},k>de?(N.sortIndex=k,e(p,N),n(m)===null&&N===n(p)&&(A?(P(F),F=-1):A=!0,$(V,k-de))):(N.sortIndex=me,e(m,N),E||y||(E=!0,O||(O=!0,te()))),N},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(N){var X=_;return function(){var k=_;_=X;try{return N.apply(this,arguments)}finally{_=k}}}})($h)),$h}var sv;function cS(){return sv||(sv=1,Yh.exports=lS()),Yh.exports}var Zh={exports:{}},xi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function uS(){if(ov)return xi;ov=1;var s=Qp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,xi.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},xi.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},xi.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},xi.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},xi.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xi.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},xi.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xi.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},xi.requestFormReset=function(m){a.d.r(m)},xi.unstable_batchedUpdates=function(m,p){return m(p)},xi.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},xi.useFormStatus=function(){return u.H.useHostTransitionStatus()},xi.version="19.2.1",xi}var lv;function fS(){if(lv)return Zh.exports;lv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zh.exports=uS(),Zh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function dS(){if(cv)return jl;cv=1;var s=cS(),e=Qp(),n=fS();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var f=r.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===r)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=h;else{for(var b=!1,T=f.child;T;){if(T===r){b=!0,r=f,l=h;break}if(T===l){b=!0,l=f,r=h;break}T=T.sibling}if(!b){for(T=h.child;T;){if(T===r){b=!0,r=h,l=f;break}if(T===l){b=!0,l=h,r=f;break}T=T.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),D=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case D:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case ie:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var $=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},de=[],me=-1;function U(t){return{current:t}}function ae(t){0>me||(t.current=de[me],de[me]=null,me--)}function K(t,i){me++,de[me]=t.current,t.current=i}var _e=U(null),Re=U(null),Z=U(null),ce=U(null);function we(t,i){switch(K(Z,i),K(Re,t),K(_e,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?u_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=u_(i),t=f_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(_e),K(_e,t)}function Be(){ae(_e),ae(Re),ae(Z)}function Xe(t){t.memoizedState!==null&&K(ce,t);var i=_e.current,r=f_(i,t.type);i!==r&&(K(Re,t),K(_e,r))}function dt(t){Re.current===t&&(ae(_e),ae(Re)),ce.current===t&&(ae(ce),Il._currentValue=k)}var bn,st;function bt(t){if(bn===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);bn=i&&i[1]||"",st=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bn+t+st}var I=!1;function mt(t,i){if(!t||I)return"";I=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(fe){var re=fe}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(fe){re=fe}t.call(Se.prototype)}}else{try{throw Error()}catch(fe){re=fe}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(fe){if(fe&&re&&typeof fe.stack=="string")return[fe.stack,re.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],T=h[1];if(b&&T){var B=b.split(`
`),ne=T.split(`
`);for(f=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ne.length&&!ne[f].includes("DetermineComponentFrameRoot");)f++;if(l===B.length||f===ne.length)for(l=B.length-1,f=ne.length-1;1<=l&&0<=f&&B[l]!==ne[f];)f--;for(;1<=l&&0<=f;l--,f--)if(B[l]!==ne[f]){if(l!==1||f!==1)do if(l--,f--,0>f||B[l]!==ne[f]){var ge=`
`+B[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{I=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?bt(r):""}function yt(t,i){switch(t.tag){case 26:case 27:case 5:return bt(t.type);case 16:return bt("Lazy");case 13:return t.child!==i&&i!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return mt(t.type,!1);case 11:return mt(t.type.render,!1);case 1:return mt(t.type,!0);case 31:return bt("Activity");default:return""}}function jt(t){try{var i="",r=null;do i+=yt(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var We=Object.prototype.hasOwnProperty,Jt=s.unstable_scheduleCallback,Qe=s.unstable_cancelCallback,ht=s.unstable_shouldYield,L=s.unstable_requestPaint,M=s.unstable_now,Q=s.unstable_getCurrentPriorityLevel,be=s.unstable_ImmediatePriority,Me=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,Je=s.unstable_LowPriority,Fe=s.unstable_IdlePriority,et=s.log,$e=s.unstable_setDisableYieldValue,Ee=null,Ae=null;function Ke(t){if(typeof et=="function"&&$e(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Ee,t)}catch{}}var qe=Math.clz32?Math.clz32:H,Ge=Math.log,lt=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Ge(t)/lt|0)|0}var ze=256,Ue=262144,Ce=4194304;function Te(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~h,l!==0?f=Te(l):(b&=T,b!==0?f=Te(b):r||(r=T&~t,r!==0&&(f=Te(r))))):(T=l&~h,T!==0?f=Te(T):b!==0?f=Te(b):r||(r=l&~t,r!==0&&(f=Te(r)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,r=i&-i,h>=r||h===32&&(r&4194048)!==0)?i:f}function ke(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ut(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $t(){var t=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),t}function xe(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function gt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rn(t,i,r,l,f,h){var b=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,ne=t.hiddenUpdates;for(r=b&~r;0<r;){var ge=31-qe(r),Se=1<<ge;T[ge]=0,B[ge]=-1;var re=ne[ge];if(re!==null)for(ne[ge]=null,ge=0;ge<re.length;ge++){var fe=re[ge];fe!==null&&(fe.lane&=-536870913)}r&=~Se}l!==0&&Mi(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function Mi(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-qe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function sn(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-qe(r),f=1<<l;f&i|t[l]&i&&(t[l]|=i),r&=~f}}function Ei(t,i){var r=i&-i;return r=(r&42)!==0?1:Ct(r),(r&(t.suspendedLanes|i))!==0?0:r}function Ct(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ma(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:N_(t.type))}function Ca(t,i){var r=X.p;try{return X.p=t,i()}finally{X.p=r}}var Xn=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Xn,Dn="__reactProps$"+Xn,ei="__reactContainer$"+Xn,Va="__reactEvents$"+Xn,Is="__reactListeners$"+Xn,Bs="__reactHandles$"+Xn,Fs="__reactResources$"+Xn,ga="__reactMarker$"+Xn;function es(t){delete t[Tn],delete t[Dn],delete t[Va],delete t[Is],delete t[Bs]}function xa(t){var i=t[Tn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[ei]||r[Tn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=__(t);t!==null;){if(r=t[Tn])return r;t=__(t)}return i}t=r,r=t.parentNode}return null}function w(t){if(t=t[Tn]||t[ei]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function W(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function se(t){var i=t[Fs];return i||(i=t[Fs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function J(t){t[ga]=!0}var Y=new Set,De={};function Ne(t,i){Ve(t,i),Ve(t+"Capture",i)}function Ve(t,i){for(De[t]=i,t=0;t<i.length;t++)Y.add(i[t])}var je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},nt={};function it(t){return We.call(nt,t)?!0:We.call(tt,t)?!1:je.test(t)?nt[t]=!0:(tt[t]=!0,!1)}function xt(t,i,r){if(it(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Nt(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Bt(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}function Dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rt(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){r=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Le(t){if(!t._valueTracker){var i=kt(t)?"checked":"value";t._valueTracker=rt(t,i,""+t[i])}}function Pe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=kt(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wt=/[\n"\\]/g;function ft(t){return t.replace(wt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zt(t,i,r,l,f,h,b,T){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Dt(i)):t.value!==""+Dt(i)&&(t.value=""+Dt(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Pt(t,b,Dt(i)):r!=null?Pt(t,b,Dt(r)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Dt(T):t.removeAttribute("name")}function at(t,i,r,l,f,h,b,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Le(t);return}r=r!=null?""+Dt(r):"",i=i!=null?""+Dt(i):r,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Le(t)}function Pt(t,i,r){i==="number"&&pt(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ut(t,i,r,l){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&l&&(t[r].defaultSelected=!0)}else{for(r=""+Dt(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Ft(t,i,r){if(i!=null&&(i=""+Dt(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+Dt(r):""}function en(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if($(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=Dt(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),Le(t)}function hn(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var Un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vt(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||Un.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Mt(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&Vt(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&Vt(t,h,i[h])}function tn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ln(t){return pn.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bn(){}var _a=null;function Ti(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ai=null,wi=null;function ta(t){var i=w(t);if(i&&(t=i.stateNode)){var r=t[Dn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Zt(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ft(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var f=l[Dn]||null;if(!f)throw Error(a(90));Zt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&Pe(l)}break e;case"textarea":Ft(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Ut(t,!!r.multiple,i,!1)}}}var oi=!1;function na(t,i,r){if(oi)return t(i,r);oi=!0;try{var l=t(i);return l}finally{if(oi=!1,(Ai!==null||wi!==null)&&(uu(),Ai&&(i=Ai,t=wi,wi=Ai=null,ta(i),t)))for(i=0;i<t.length;i++)ta(t[i])}}function Gi(t,i){var r=t.stateNode;if(r===null)return null;var l=r[Dn]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yn=!1;if(li)try{var Da={};Object.defineProperty(Da,"passive",{get:function(){yn=!0}}),window.addEventListener("test",Da,Da),window.removeEventListener("test",Da,Da)}catch{yn=!1}var Ri=null,Ua=null,La=null;function Ci(){if(La)return La;var t,i=Ua,r=i.length,l,f="value"in Ri?Ri.value:Ri.textContent,h=f.length;for(t=0;t<r&&i[t]===f[t];t++);var b=r-t;for(l=1;l<=b&&i[r-l]===f[h-l];l++);return La=f.slice(t,1<l?1-l:void 0)}function Vi(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ts(){return!0}function tl(){return!1}function gi(t){function i(r,l,f,h,b){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(r=t[T],this[T]=r?r(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ts:tl,this.isPropagationStopped=tl,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ts)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ts)},persist:function(){},isPersistent:ts}),i}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=gi(ja),nl=x({},ja,{view:0,detail:0}),x1=gi(nl),Hf,Gf,il,Rc=x({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==il&&(il&&t.type==="mousemove"?(Hf=t.screenX-il.screenX,Gf=t.screenY-il.screenY):Gf=Hf=0,il=t),Hf)},movementY:function(t){return"movementY"in t?t.movementY:Gf}}),hm=gi(Rc),_1=x({},Rc,{dataTransfer:0}),v1=gi(_1),b1=x({},nl,{relatedTarget:0}),Vf=gi(b1),y1=x({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),S1=gi(y1),M1=x({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),E1=gi(M1),T1=x({},ja,{data:0}),pm=gi(T1),A1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=R1[t])?!!i[t]:!1}function jf(){return C1}var D1=x({},nl,{key:function(t){if(t.key){var i=A1[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Vi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?Vi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U1=gi(D1),L1=x({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=gi(L1),O1=x({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),N1=gi(O1),P1=x({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=gi(P1),I1=x({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B1=gi(I1),F1=x({},ja,{newState:0,oldState:0}),H1=gi(F1),G1=[9,13,27,32],kf=li&&"CompositionEvent"in window,al=null;li&&"documentMode"in document&&(al=document.documentMode);var V1=li&&"TextEvent"in window&&!al,gm=li&&(!kf||al&&8<al&&11>=al),xm=" ",_m=!1;function vm(t,i){switch(t){case"keyup":return G1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function j1(t,i){switch(t){case"compositionend":return bm(i);case"keypress":return i.which!==32?null:(_m=!0,xm);case"textInput":return t=i.data,t===xm&&_m?null:t;default:return null}}function k1(t,i){if(Hs)return t==="compositionend"||!kf&&vm(t,i)?(t=Ci(),La=Ua=Ri=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gm&&i.locale!=="ko"?null:i.data;default:return null}}var X1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!X1[t.type]:i==="textarea"}function Sm(t,i,r,l){Ai?wi?wi.push(l):wi=[l]:Ai=l,i=xu(i,"onChange"),0<i.length&&(r=new wc("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var rl=null,sl=null;function W1(t){a_(t,0)}function Cc(t){var i=W(t);if(Pe(i))return t}function Mm(t,i){if(t==="change")return i}var Em=!1;if(li){var Xf;if(li){var Wf="oninput"in document;if(!Wf){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),Wf=typeof Tm.oninput=="function"}Xf=Wf}else Xf=!1;Em=Xf&&(!document.documentMode||9<document.documentMode)}function Am(){rl&&(rl.detachEvent("onpropertychange",wm),sl=rl=null)}function wm(t){if(t.propertyName==="value"&&Cc(sl)){var i=[];Sm(i,sl,t,Ti(t)),na(W1,i)}}function q1(t,i,r){t==="focusin"?(Am(),rl=i,sl=r,rl.attachEvent("onpropertychange",wm)):t==="focusout"&&Am()}function Y1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(sl)}function $1(t,i){if(t==="click")return Cc(i)}function Z1(t,i){if(t==="input"||t==="change")return Cc(i)}function K1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ji=typeof Object.is=="function"?Object.is:K1;function ol(t,i){if(ji(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!We.call(i,f)||!ji(t[f],i[f]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,i){var r=Rm(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rm(r)}}function Dm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Um(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=pt(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=pt(t.document)}return i}function qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Q1=li&&"documentMode"in document&&11>=document.documentMode,Gs=null,Yf=null,ll=null,$f=!1;function Lm(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$f||Gs==null||Gs!==pt(l)||(l=Gs,"selectionStart"in l&&qf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ll&&ol(ll,l)||(ll=l,l=xu(Yf,"onSelect"),0<l.length&&(i=new wc("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=Gs)))}function ns(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Vs={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},Zf={},Om={};li&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function is(t){if(Zf[t])return Zf[t];if(!Vs[t])return t;var i=Vs[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Om)return Zf[t]=i[r];return t}var Nm=is("animationend"),Pm=is("animationiteration"),zm=is("animationstart"),J1=is("transitionrun"),eb=is("transitionstart"),tb=is("transitioncancel"),Im=is("transitionend"),Bm=new Map,Kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kf.push("scrollEnd");function va(t,i){Bm.set(t,i),Ne(i,[t])}var Dc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ia=[],js=0,Qf=0;function Uc(){for(var t=js,i=Qf=js=0;i<t;){var r=ia[i];ia[i++]=null;var l=ia[i];ia[i++]=null;var f=ia[i];ia[i++]=null;var h=ia[i];if(ia[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&Fm(r,f,h)}}function Lc(t,i,r,l){ia[js++]=t,ia[js++]=i,ia[js++]=r,ia[js++]=l,Qf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Jf(t,i,r,l){return Lc(t,i,r,l),Oc(t)}function as(t,i){return Lc(t,null,null,i),Oc(t)}function Fm(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var f=!1,h=t.return;h!==null;)h.childLanes|=r,l=h.alternate,l!==null&&(l.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-qe(r),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=r|536870912),h):null}function Oc(t){if(50<Dl)throw Dl=0,lh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var ks={};function nb(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(t,i,r,l){return new nb(t,i,r,l)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ka(t,i){var r=t.alternate;return r===null?(r=ki(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Hm(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Nc(t,i,r,l,f,h){var b=0;if(l=t,typeof t=="function")ed(t)&&(b=1);else if(typeof t=="string")b=oy(t,r,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=ki(31,r,i,f),t.elementType=C,t.lanes=h,t;case A:return rs(r.children,f,h,i);case S:b=8,f|=24;break;case v:return t=ki(12,r,i,f|2),t.elementType=v,t.lanes=h,t;case V:return t=ki(13,r,i,f),t.elementType=V,t.lanes=h,t;case O:return t=ki(19,r,i,f),t.elementType=O,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:b=10;break e;case P:b=9;break e;case z:b=11;break e;case F:b=14;break e;case ie:b=16,l=null;break e}b=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ki(b,r,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function rs(t,i,r,l){return t=ki(7,t,l,i),t.lanes=r,t}function td(t,i,r){return t=ki(6,t,null,i),t.lanes=r,t}function Gm(t){var i=ki(18,null,null,0);return i.stateNode=t,i}function nd(t,i,r){return i=ki(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Vm=new WeakMap;function aa(t,i){if(typeof t=="object"&&t!==null){var r=Vm.get(t);return r!==void 0?r:(i={value:t,source:i,stack:jt(i)},Vm.set(t,i),i)}return{value:t,source:i,stack:jt(i)}}var Xs=[],Ws=0,Pc=null,cl=0,ra=[],sa=0,_r=null,Oa=1,Na="";function Xa(t,i){Xs[Ws++]=cl,Xs[Ws++]=Pc,Pc=t,cl=i}function jm(t,i,r){ra[sa++]=Oa,ra[sa++]=Na,ra[sa++]=_r,_r=t;var l=Oa;t=Na;var f=32-qe(l)-1;l&=~(1<<f),r+=1;var h=32-qe(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Oa=1<<32-qe(i)+f|r<<f|l,Na=h+t}else Oa=1<<h|r<<f|l,Na=t}function id(t){t.return!==null&&(Xa(t,1),jm(t,1,0))}function ad(t){for(;t===Pc;)Pc=Xs[--Ws],Xs[Ws]=null,cl=Xs[--Ws],Xs[Ws]=null;for(;t===_r;)_r=ra[--sa],ra[sa]=null,Na=ra[--sa],ra[sa]=null,Oa=ra[--sa],ra[sa]=null}function km(t,i){ra[sa++]=Oa,ra[sa++]=Na,ra[sa++]=_r,Oa=i.id,Na=i.overflow,_r=t}var ci=null,mn=null,Ht=!1,vr=null,oa=!1,rd=Error(a(519));function br(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ul(aa(i,t)),rd}function Xm(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[Tn]=t,i[Dn]=l,r){case"dialog":Ot("cancel",i),Ot("close",i);break;case"iframe":case"object":case"embed":Ot("load",i);break;case"video":case"audio":for(r=0;r<Ll.length;r++)Ot(Ll[r],i);break;case"source":Ot("error",i);break;case"img":case"image":case"link":Ot("error",i),Ot("load",i);break;case"details":Ot("toggle",i);break;case"input":Ot("invalid",i),at(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ot("invalid",i);break;case"textarea":Ot("invalid",i),en(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||l_(i.textContent,r)?(l.popover!=null&&(Ot("beforetoggle",i),Ot("toggle",i)),l.onScroll!=null&&Ot("scroll",i),l.onScrollEnd!=null&&Ot("scrollend",i),l.onClick!=null&&(i.onclick=Bn),i=!0):i=!1,i||br(t,!0)}function Wm(t){for(ci=t.return;ci;)switch(ci.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:ci=ci.return}}function qs(t){if(t!==ci)return!1;if(!Ht)return Wm(t),Ht=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Mh(t.type,t.memoizedProps)),r=!r),r&&mn&&br(t),Wm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));mn=x_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));mn=x_(t)}else i===27?(i=mn,Nr(t.type)?(t=Rh,Rh=null,mn=t):mn=i):mn=ci?ca(t.stateNode.nextSibling):null;return!0}function ss(){mn=ci=null,Ht=!1}function sd(){var t=vr;return t!==null&&(Oi===null?Oi=t:Oi.push.apply(Oi,t),vr=null),t}function ul(t){vr===null?vr=[t]:vr.push(t)}var od=U(null),os=null,Wa=null;function yr(t,i,r){K(od,i._currentValue),i._currentValue=r}function qa(t){t._currentValue=od.current,ae(od)}function ld(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function cd(t,i,r,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=f;for(var B=0;B<i.length;B++)if(T.context===i[B]){h.lanes|=r,T=h.alternate,T!==null&&(T.lanes|=r),ld(h.return,r,t),l||(b=null);break e}h=T.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=r,h=b.alternate,h!==null&&(h.lanes|=r),ld(b,r,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Ys(t,i,r,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var T=f.type;ji(f.pendingProps.value,b.value)||(t!==null?t.push(T):t=[T])}}else if(f===ce.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Il):t=[Il])}f=f.return}t!==null&&cd(i,t,r,l),i.flags|=262144}function zc(t){for(t=t.firstContext;t!==null;){if(!ji(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ls(t){os=t,Wa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ui(t){return qm(os,t)}function Ic(t,i){return os===null&&ls(t),qm(t,i)}function qm(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Wa===null){if(t===null)throw Error(a(308));Wa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Wa=Wa.next=i;return r}var ib=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},ab=s.unstable_scheduleCallback,rb=s.unstable_NormalPriority,Fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ud(){return{controller:new ib,data:new Map,refCount:0}}function fl(t){t.refCount--,t.refCount===0&&ab(rb,function(){t.controller.abort()})}var dl=null,fd=0,$s=0,Zs=null;function sb(t,i){if(dl===null){var r=dl=[];fd=0,$s=ph(),Zs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return fd++,i.then(Ym,Ym),i}function Ym(){if(--fd===0&&dl!==null){Zs!==null&&(Zs.status="fulfilled");var t=dl;dl=null,$s=0,Zs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function ob(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var $m=N.S;N.S=function(t,i){Lx=M(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&sb(t,i),$m!==null&&$m(t,i)};var cs=U(null);function dd(){var t=cs.current;return t!==null?t:fn.pooledCache}function Bc(t,i){i===null?K(cs,cs.current):K(cs,i.pool)}function Zm(){var t=dd();return t===null?null:{parent:Fn._currentValue,pool:t}}var Ks=Error(a(460)),hd=Error(a(474)),Fc=Error(a(542)),Hc={then:function(){}};function Km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(Bn,Bn),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,eg(t),t;default:if(typeof i.status=="string")i.then(Bn,Bn);else{if(t=fn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,eg(t),t}throw fs=i,Ks}}function us(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(fs=r,Ks):r}}var fs=null;function Jm(){if(fs===null)throw Error(a(459));var t=fs;return fs=null,t}function eg(t){if(t===Ks||t===Fc)throw Error(a(483))}var Qs=null,hl=0;function Gc(t){var i=hl;return hl+=1,Qs===null&&(Qs=[]),Qm(Qs,t,i)}function pl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Vc(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function tg(t){function i(q,G){if(t){var ee=q.deletions;ee===null?(q.deletions=[G],q.flags|=16):ee.push(G)}}function r(q,G){if(!t)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function l(q){for(var G=new Map;q!==null;)q.key!==null?G.set(q.key,q):G.set(q.index,q),q=q.sibling;return G}function f(q,G){return q=ka(q,G),q.index=0,q.sibling=null,q}function h(q,G,ee){return q.index=ee,t?(ee=q.alternate,ee!==null?(ee=ee.index,ee<G?(q.flags|=67108866,G):ee):(q.flags|=67108866,G)):(q.flags|=1048576,G)}function b(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,G,ee,ve){return G===null||G.tag!==6?(G=td(ee,q.mode,ve),G.return=q,G):(G=f(G,ee),G.return=q,G)}function B(q,G,ee,ve){var ot=ee.type;return ot===A?ge(q,G,ee.props.children,ve,ee.key):G!==null&&(G.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ie&&us(ot)===G.type)?(G=f(G,ee.props),pl(G,ee),G.return=q,G):(G=Nc(ee.type,ee.key,ee.props,null,q.mode,ve),pl(G,ee),G.return=q,G)}function ne(q,G,ee,ve){return G===null||G.tag!==4||G.stateNode.containerInfo!==ee.containerInfo||G.stateNode.implementation!==ee.implementation?(G=nd(ee,q.mode,ve),G.return=q,G):(G=f(G,ee.children||[]),G.return=q,G)}function ge(q,G,ee,ve,ot){return G===null||G.tag!==7?(G=rs(ee,q.mode,ve,ot),G.return=q,G):(G=f(G,ee),G.return=q,G)}function Se(q,G,ee){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=td(""+G,q.mode,ee),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return ee=Nc(G.type,G.key,G.props,null,q.mode,ee),pl(ee,G),ee.return=q,ee;case E:return G=nd(G,q.mode,ee),G.return=q,G;case ie:return G=us(G),Se(q,G,ee)}if($(G)||te(G))return G=rs(G,q.mode,ee,null),G.return=q,G;if(typeof G.then=="function")return Se(q,Gc(G),ee);if(G.$$typeof===D)return Se(q,Ic(q,G),ee);Vc(q,G)}return null}function re(q,G,ee,ve){var ot=G!==null?G.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return ot!==null?null:T(q,G,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===ot?B(q,G,ee,ve):null;case E:return ee.key===ot?ne(q,G,ee,ve):null;case ie:return ee=us(ee),re(q,G,ee,ve)}if($(ee)||te(ee))return ot!==null?null:ge(q,G,ee,ve,null);if(typeof ee.then=="function")return re(q,G,Gc(ee),ve);if(ee.$$typeof===D)return re(q,G,Ic(q,ee),ve);Vc(q,ee)}return null}function fe(q,G,ee,ve,ot){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return q=q.get(ee)||null,T(G,q,""+ve,ot);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case y:return q=q.get(ve.key===null?ee:ve.key)||null,B(G,q,ve,ot);case E:return q=q.get(ve.key===null?ee:ve.key)||null,ne(G,q,ve,ot);case ie:return ve=us(ve),fe(q,G,ee,ve,ot)}if($(ve)||te(ve))return q=q.get(ee)||null,ge(G,q,ve,ot,null);if(typeof ve.then=="function")return fe(q,G,ee,Gc(ve),ot);if(ve.$$typeof===D)return fe(q,G,ee,Ic(G,ve),ot);Vc(G,ve)}return null}function Ye(q,G,ee,ve){for(var ot=null,Wt=null,Ze=G,Et=G=0,It=null;Ze!==null&&Et<ee.length;Et++){Ze.index>Et?(It=Ze,Ze=null):It=Ze.sibling;var qt=re(q,Ze,ee[Et],ve);if(qt===null){Ze===null&&(Ze=It);break}t&&Ze&&qt.alternate===null&&i(q,Ze),G=h(qt,G,Et),Wt===null?ot=qt:Wt.sibling=qt,Wt=qt,Ze=It}if(Et===ee.length)return r(q,Ze),Ht&&Xa(q,Et),ot;if(Ze===null){for(;Et<ee.length;Et++)Ze=Se(q,ee[Et],ve),Ze!==null&&(G=h(Ze,G,Et),Wt===null?ot=Ze:Wt.sibling=Ze,Wt=Ze);return Ht&&Xa(q,Et),ot}for(Ze=l(Ze);Et<ee.length;Et++)It=fe(Ze,q,Et,ee[Et],ve),It!==null&&(t&&It.alternate!==null&&Ze.delete(It.key===null?Et:It.key),G=h(It,G,Et),Wt===null?ot=It:Wt.sibling=It,Wt=It);return t&&Ze.forEach(function(Fr){return i(q,Fr)}),Ht&&Xa(q,Et),ot}function ct(q,G,ee,ve){if(ee==null)throw Error(a(151));for(var ot=null,Wt=null,Ze=G,Et=G=0,It=null,qt=ee.next();Ze!==null&&!qt.done;Et++,qt=ee.next()){Ze.index>Et?(It=Ze,Ze=null):It=Ze.sibling;var Fr=re(q,Ze,qt.value,ve);if(Fr===null){Ze===null&&(Ze=It);break}t&&Ze&&Fr.alternate===null&&i(q,Ze),G=h(Fr,G,Et),Wt===null?ot=Fr:Wt.sibling=Fr,Wt=Fr,Ze=It}if(qt.done)return r(q,Ze),Ht&&Xa(q,Et),ot;if(Ze===null){for(;!qt.done;Et++,qt=ee.next())qt=Se(q,qt.value,ve),qt!==null&&(G=h(qt,G,Et),Wt===null?ot=qt:Wt.sibling=qt,Wt=qt);return Ht&&Xa(q,Et),ot}for(Ze=l(Ze);!qt.done;Et++,qt=ee.next())qt=fe(Ze,q,Et,qt.value,ve),qt!==null&&(t&&qt.alternate!==null&&Ze.delete(qt.key===null?Et:qt.key),G=h(qt,G,Et),Wt===null?ot=qt:Wt.sibling=qt,Wt=qt);return t&&Ze.forEach(function(_y){return i(q,_y)}),Ht&&Xa(q,Et),ot}function cn(q,G,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===A&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var ot=ee.key;G!==null;){if(G.key===ot){if(ot=ee.type,ot===A){if(G.tag===7){r(q,G.sibling),ve=f(G,ee.props.children),ve.return=q,q=ve;break e}}else if(G.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ie&&us(ot)===G.type){r(q,G.sibling),ve=f(G,ee.props),pl(ve,ee),ve.return=q,q=ve;break e}r(q,G);break}else i(q,G);G=G.sibling}ee.type===A?(ve=rs(ee.props.children,q.mode,ve,ee.key),ve.return=q,q=ve):(ve=Nc(ee.type,ee.key,ee.props,null,q.mode,ve),pl(ve,ee),ve.return=q,q=ve)}return b(q);case E:e:{for(ot=ee.key;G!==null;){if(G.key===ot)if(G.tag===4&&G.stateNode.containerInfo===ee.containerInfo&&G.stateNode.implementation===ee.implementation){r(q,G.sibling),ve=f(G,ee.children||[]),ve.return=q,q=ve;break e}else{r(q,G);break}else i(q,G);G=G.sibling}ve=nd(ee,q.mode,ve),ve.return=q,q=ve}return b(q);case ie:return ee=us(ee),cn(q,G,ee,ve)}if($(ee))return Ye(q,G,ee,ve);if(te(ee)){if(ot=te(ee),typeof ot!="function")throw Error(a(150));return ee=ot.call(ee),ct(q,G,ee,ve)}if(typeof ee.then=="function")return cn(q,G,Gc(ee),ve);if(ee.$$typeof===D)return cn(q,G,Ic(q,ee),ve);Vc(q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,G!==null&&G.tag===6?(r(q,G.sibling),ve=f(G,ee),ve.return=q,q=ve):(r(q,G),ve=td(ee,q.mode,ve),ve.return=q,q=ve),b(q)):r(q,G)}return function(q,G,ee,ve){try{hl=0;var ot=cn(q,G,ee,ve);return Qs=null,ot}catch(Ze){if(Ze===Ks||Ze===Fc)throw Ze;var Wt=ki(29,Ze,null,q.mode);return Wt.lanes=ve,Wt.return=q,Wt}finally{}}}var ds=tg(!0),ng=tg(!1),Sr=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function md(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Mr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Er(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Kt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Oc(t),Fm(t,null,r),i}return Lc(t,l,i,r),Oc(t)}function ml(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,sn(t,r)}}function gd(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,r=r.next}while(r!==null);h===null?f=h=i:h=h.next=i}else f=h=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var xd=!1;function gl(){if(xd){var t=Zs;if(t!==null)throw t}}function xl(t,i,r,l){xd=!1;var f=t.updateQueue;Sr=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var B=T,ne=B.next;B.next=null,b===null?h=ne:b.next=ne,b=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,T=ge.lastBaseUpdate,T!==b&&(T===null?ge.firstBaseUpdate=ne:T.next=ne,ge.lastBaseUpdate=B))}if(h!==null){var Se=f.baseState;b=0,ge=ne=B=null,T=h;do{var re=T.lane&-536870913,fe=re!==T.lane;if(fe?(zt&re)===re:(l&re)===re){re!==0&&re===$s&&(xd=!0),ge!==null&&(ge=ge.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ye=t,ct=T;re=i;var cn=r;switch(ct.tag){case 1:if(Ye=ct.payload,typeof Ye=="function"){Se=Ye.call(cn,Se,re);break e}Se=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=ct.payload,re=typeof Ye=="function"?Ye.call(cn,Se,re):Ye,re==null)break e;Se=x({},Se,re);break e;case 2:Sr=!0}}re=T.callback,re!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=f.callbacks,fe===null?f.callbacks=[re]:fe.push(re))}else fe={lane:re,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ge===null?(ne=ge=fe,B=Se):ge=ge.next=fe,b|=re;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;fe=T,T=fe.next,fe.next=null,f.lastBaseUpdate=fe,f.shared.pending=null}}while(!0);ge===null&&(B=Se),f.baseState=B,f.firstBaseUpdate=ne,f.lastBaseUpdate=ge,h===null&&(f.shared.lanes=0),Cr|=b,t.lanes=b,t.memoizedState=Se}}function ig(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function ag(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)ig(r[t],i)}var Js=U(null),jc=U(0);function rg(t,i){t=nr,K(jc,t),K(Js,i),nr=t|i.baseLanes}function _d(){K(jc,nr),K(Js,Js.current)}function vd(){nr=jc.current,ae(Js),ae(jc)}var Xi=U(null),la=null;function Tr(t){var i=t.alternate;K(On,On.current&1),K(Xi,t),la===null&&(i===null||Js.current!==null||i.memoizedState!==null)&&(la=t)}function bd(t){K(On,On.current),K(Xi,t),la===null&&(la=t)}function sg(t){t.tag===22?(K(On,On.current),K(Xi,t),la===null&&(la=t)):Ar()}function Ar(){K(On,On.current),K(Xi,Xi.current)}function Wi(t){ae(Xi),la===t&&(la=null),ae(On)}var On=U(0);function kc(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Ah(r)||wh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ya=0,St=null,on=null,Hn=null,Xc=!1,eo=!1,hs=!1,Wc=0,_l=0,to=null,lb=0;function An(){throw Error(a(321))}function yd(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!ji(t[r],i[r]))return!1;return!0}function Sd(t,i,r,l,f,h){return Ya=h,St=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=t===null||t.memoizedState===null?jg:Id,hs=!1,h=r(l,f),hs=!1,eo&&(h=lg(i,r,l,f)),og(t),h}function og(t){N.H=yl;var i=on!==null&&on.next!==null;if(Ya=0,Hn=on=St=null,Xc=!1,_l=0,to=null,i)throw Error(a(300));t===null||Gn||(t=t.dependencies,t!==null&&zc(t)&&(Gn=!0))}function lg(t,i,r,l){St=t;var f=0;do{if(eo&&(to=null),_l=0,eo=!1,25<=f)throw Error(a(301));if(f+=1,Hn=on=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=kg,h=i(r,l)}while(eo);return h}function cb(){var t=N.H,i=t.useState()[0];return i=typeof i.then=="function"?vl(i):i,t=t.useState()[0],(on!==null?on.memoizedState:null)!==t&&(St.flags|=1024),i}function Md(){var t=Wc!==0;return Wc=0,t}function Ed(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function Td(t){if(Xc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Xc=!1}Ya=0,Hn=on=St=null,eo=!1,_l=Wc=0,to=null}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Hn===null?St.memoizedState=Hn=t:Hn=Hn.next=t,Hn}function Nn(){if(on===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var i=Hn===null?St.memoizedState:Hn.next;if(i!==null)Hn=i,on=t;else{if(t===null)throw St.alternate===null?Error(a(467)):Error(a(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},Hn===null?St.memoizedState=Hn=t:Hn=Hn.next=t}return Hn}function qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vl(t){var i=_l;return _l+=1,to===null&&(to=[]),t=Qm(to,t,i),i=St,(Hn===null?i.memoizedState:Hn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?jg:Id),t}function Yc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vl(t);if(t.$$typeof===D)return ui(t)}throw Error(a(438,String(t)))}function Ad(t){var i=null,r=St.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=St.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=qc(),St.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=R;return i.index++,r}function $a(t,i){return typeof i=="function"?i(t):i}function $c(t){var i=Nn();return wd(i,on,t)}function wd(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var T=b=null,B=null,ne=i,ge=!1;do{var Se=ne.lane&-536870913;if(Se!==ne.lane?(zt&Se)===Se:(Ya&Se)===Se){var re=ne.revertLane;if(re===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Se===$s&&(ge=!0);else if((Ya&re)===re){ne=ne.next,re===$s&&(ge=!0);continue}else Se={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(T=B=Se,b=h):B=B.next=Se,St.lanes|=re,Cr|=re;Se=ne.action,hs&&r(h,Se),h=ne.hasEagerState?ne.eagerState:r(h,Se)}else re={lane:Se,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(T=B=re,b=h):B=B.next=re,St.lanes|=Se,Cr|=Se;ne=ne.next}while(ne!==null&&ne!==i);if(B===null?b=h:B.next=T,!ji(h,t.memoizedState)&&(Gn=!0,ge&&(r=Zs,r!==null)))throw r;t.memoizedState=h,t.baseState=b,t.baseQueue=B,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Rd(t){var i=Nn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,f=r.pending,h=i.memoizedState;if(f!==null){r.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);ji(h,i.memoizedState)||(Gn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,l]}function cg(t,i,r){var l=St,f=Nn(),h=Ht;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!ji((on||f).memoizedState,r);if(b&&(f.memoizedState=r,Gn=!0),f=f.queue,Ud(dg.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||Hn!==null&&Hn.memoizedState.tag&1){if(l.flags|=2048,no(9,{destroy:void 0},fg.bind(null,l,f,r,i),null),fn===null)throw Error(a(349));h||(Ya&127)!==0||ug(l,i,r)}return r}function ug(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=St.updateQueue,i===null?(i=qc(),St.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function fg(t,i,r,l){i.value=r,i.getSnapshot=l,hg(i)&&pg(t)}function dg(t,i,r){return r(function(){hg(i)&&pg(t)})}function hg(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!ji(t,r)}catch{return!0}}function pg(t){var i=as(t,2);i!==null&&Ni(i,t,2)}function Cd(t){var i=yi();if(typeof t=="function"){var r=t;if(t=r(),hs){Ke(!0);try{r()}finally{Ke(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},i}function mg(t,i,r,l){return t.baseState=r,wd(t,on,typeof l=="function"?l:$a)}function ub(t,i,r,l,f){if(Qc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};N.T!==null?r(!0):h.isTransition=!1,l(h),r=i.pending,r===null?(h.next=i.pending=h,gg(i,h)):(h.next=r.next,i.pending=r.next=h)}}function gg(t,i){var r=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=N.T,b={};N.T=b;try{var T=r(f,l),B=N.S;B!==null&&B(b,T),xg(t,i,T)}catch(ne){Dd(t,i,ne)}finally{h!==null&&b.types!==null&&(h.types=b.types),N.T=h}}else try{h=r(f,l),xg(t,i,h)}catch(ne){Dd(t,i,ne)}}function xg(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){_g(t,i,l)},function(l){return Dd(t,i,l)}):_g(t,i,r)}function _g(t,i,r){i.status="fulfilled",i.value=r,vg(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,gg(t,r)))}function Dd(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,vg(i),i=i.next;while(i!==l)}t.action=null}function vg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function bg(t,i){return i}function yg(t,i){if(Ht){var r=fn.formState;if(r!==null){e:{var l=St;if(Ht){if(mn){t:{for(var f=mn,h=oa;f.nodeType!==8;){if(!h){f=null;break t}if(f=ca(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){mn=ca(f.nextSibling),l=f.data==="F!";break e}}br(l)}l=!1}l&&(i=r[0])}}return r=yi(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bg,lastRenderedState:i},r.queue=l,r=Hg.bind(null,St,l),l.dispatch=r,l=Cd(!1),h=zd.bind(null,St,!1,l.queue),l=yi(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,r=ub.bind(null,St,f,h,r),f.dispatch=r,l.memoizedState=t,[i,r,!1]}function Sg(t){var i=Nn();return Mg(i,on,t)}function Mg(t,i,r){if(i=wd(t,i,bg)[0],t=$c($a)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=vl(i)}catch(b){throw b===Ks?Fc:b}else l=i;i=Nn();var f=i.queue,h=f.dispatch;return r!==i.memoizedState&&(St.flags|=2048,no(9,{destroy:void 0},fb.bind(null,f,r),null)),[l,h,t]}function fb(t,i){t.action=i}function Eg(t){var i=Nn(),r=on;if(r!==null)return Mg(i,r,t);Nn(),i=i.memoizedState,r=Nn();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function no(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=St.updateQueue,i===null&&(i=qc(),St.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function Tg(){return Nn().memoizedState}function Zc(t,i,r,l){var f=yi();St.flags|=t,f.memoizedState=no(1|i,{destroy:void 0},r,l===void 0?null:l)}function Kc(t,i,r,l){var f=Nn();l=l===void 0?null:l;var h=f.memoizedState.inst;on!==null&&l!==null&&yd(l,on.memoizedState.deps)?f.memoizedState=no(i,h,r,l):(St.flags|=t,f.memoizedState=no(1|i,h,r,l))}function Ag(t,i){Zc(8390656,8,t,i)}function Ud(t,i){Kc(2048,8,t,i)}function db(t){St.flags|=4;var i=St.updateQueue;if(i===null)i=qc(),St.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function wg(t){var i=Nn().memoizedState;return db({ref:i,nextImpl:t}),function(){if((Kt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Rg(t,i){return Kc(4,2,t,i)}function Cg(t,i){return Kc(4,4,t,i)}function Dg(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ug(t,i,r){r=r!=null?r.concat([t]):null,Kc(4,4,Dg.bind(null,i,t),r)}function Ld(){}function Lg(t,i){var r=Nn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&yd(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function Og(t,i){var r=Nn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&yd(i,l[1]))return l[0];if(l=t(),hs){Ke(!0);try{t()}finally{Ke(!1)}}return r.memoizedState=[l,i],l}function Od(t,i,r){return r===void 0||(Ya&1073741824)!==0&&(zt&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=Nx(),St.lanes|=t,Cr|=t,r)}function Ng(t,i,r,l){return ji(r,i)?r:Js.current!==null?(t=Od(t,r,l),ji(t,i)||(Gn=!0),t):(Ya&42)===0||(Ya&1073741824)!==0&&(zt&261930)===0?(Gn=!0,t.memoizedState=r):(t=Nx(),St.lanes|=t,Cr|=t,i)}function Pg(t,i,r,l,f){var h=X.p;X.p=h!==0&&8>h?h:8;var b=N.T,T={};N.T=T,zd(t,!1,i,r);try{var B=f(),ne=N.S;if(ne!==null&&ne(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ge=ob(B,l);bl(t,i,ge,$i(t))}else bl(t,i,l,$i(t))}catch(Se){bl(t,i,{then:function(){},status:"rejected",reason:Se},$i())}finally{X.p=h,b!==null&&T.types!==null&&(b.types=T.types),N.T=b}}function hb(){}function Nd(t,i,r,l){if(t.tag!==5)throw Error(a(476));var f=zg(t).queue;Pg(t,f,i,k,r===null?hb:function(){return Ig(t),r(l)})}function zg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:k},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Ig(t){var i=zg(t);i.next===null&&(i=t.alternate.memoizedState),bl(t,i.next.queue,{},$i())}function Pd(){return ui(Il)}function Bg(){return Nn().memoizedState}function Fg(){return Nn().memoizedState}function pb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=$i();t=Mr(r);var l=Er(i,t,r);l!==null&&(Ni(l,i,r),ml(l,i,r)),i={cache:ud()},t.payload=i;return}i=i.return}}function mb(t,i,r){var l=$i();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Qc(t)?Gg(i,r):(r=Jf(t,i,r,l),r!==null&&(Ni(r,t,l),Vg(r,i,l)))}function Hg(t,i,r){var l=$i();bl(t,i,r,l)}function bl(t,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qc(t))Gg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,T=h(b,r);if(f.hasEagerState=!0,f.eagerState=T,ji(T,b))return Lc(t,i,f,0),fn===null&&Uc(),!1}catch{}finally{}if(r=Jf(t,i,f,l),r!==null)return Ni(r,t,l),Vg(r,i,l),!0}return!1}function zd(t,i,r,l){if(l={lane:2,revertLane:ph(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qc(t)){if(i)throw Error(a(479))}else i=Jf(t,r,l,2),i!==null&&Ni(i,t,2)}function Qc(t){var i=t.alternate;return t===St||i!==null&&i===St}function Gg(t,i){eo=Xc=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function Vg(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,sn(t,r)}}var yl={readContext:ui,use:Yc,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useLayoutEffect:An,useInsertionEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useSyncExternalStore:An,useId:An,useHostTransitionStatus:An,useFormState:An,useActionState:An,useOptimistic:An,useMemoCache:An,useCacheRefresh:An};yl.useEffectEvent=An;var jg={readContext:ui,use:Yc,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:ui,useEffect:Ag,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,Zc(4194308,4,Dg.bind(null,i,t),r)},useLayoutEffect:function(t,i){return Zc(4194308,4,t,i)},useInsertionEffect:function(t,i){Zc(4,2,t,i)},useMemo:function(t,i){var r=yi();i=i===void 0?null:i;var l=t();if(hs){Ke(!0);try{t()}finally{Ke(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=yi();if(r!==void 0){var f=r(i);if(hs){Ke(!0);try{r(i)}finally{Ke(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=mb.bind(null,St,t),[l.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:function(t){t=Cd(t);var i=t.queue,r=Hg.bind(null,St,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Ld,useDeferredValue:function(t,i){var r=yi();return Od(r,t,i)},useTransition:function(){var t=Cd(!1);return t=Pg.bind(null,St,t.queue,!0,!1),yi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=St,f=yi();if(Ht){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),fn===null)throw Error(a(349));(zt&127)!==0||ug(l,i,r)}f.memoizedState=r;var h={value:r,getSnapshot:i};return f.queue=h,Ag(dg.bind(null,l,h,t),[t]),l.flags|=2048,no(9,{destroy:void 0},fg.bind(null,l,h,r,i),null),r},useId:function(){var t=yi(),i=fn.identifierPrefix;if(Ht){var r=Na,l=Oa;r=(l&~(1<<32-qe(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Wc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=lb++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Pd,useFormState:yg,useActionState:yg,useOptimistic:function(t){var i=yi();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=zd.bind(null,St,!0,r),r.dispatch=i,[t,i]},useMemoCache:Ad,useCacheRefresh:function(){return yi().memoizedState=pb.bind(null,St)},useEffectEvent:function(t){var i=yi(),r={impl:t};return i.memoizedState=r,function(){if((Kt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Id={readContext:ui,use:Yc,useCallback:Lg,useContext:ui,useEffect:Ud,useImperativeHandle:Ug,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Og,useReducer:$c,useRef:Tg,useState:function(){return $c($a)},useDebugValue:Ld,useDeferredValue:function(t,i){var r=Nn();return Ng(r,on.memoizedState,t,i)},useTransition:function(){var t=$c($a)[0],i=Nn().memoizedState;return[typeof t=="boolean"?t:vl(t),i]},useSyncExternalStore:cg,useId:Bg,useHostTransitionStatus:Pd,useFormState:Sg,useActionState:Sg,useOptimistic:function(t,i){var r=Nn();return mg(r,on,t,i)},useMemoCache:Ad,useCacheRefresh:Fg};Id.useEffectEvent=wg;var kg={readContext:ui,use:Yc,useCallback:Lg,useContext:ui,useEffect:Ud,useImperativeHandle:Ug,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Og,useReducer:Rd,useRef:Tg,useState:function(){return Rd($a)},useDebugValue:Ld,useDeferredValue:function(t,i){var r=Nn();return on===null?Od(r,t,i):Ng(r,on.memoizedState,t,i)},useTransition:function(){var t=Rd($a)[0],i=Nn().memoizedState;return[typeof t=="boolean"?t:vl(t),i]},useSyncExternalStore:cg,useId:Bg,useHostTransitionStatus:Pd,useFormState:Eg,useActionState:Eg,useOptimistic:function(t,i){var r=Nn();return on!==null?mg(r,on,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Ad,useCacheRefresh:Fg};kg.useEffectEvent=wg;function Bd(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:x({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Fd={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=$i(),f=Mr(l);f.payload=i,r!=null&&(f.callback=r),i=Er(t,f,l),i!==null&&(Ni(i,t,l),ml(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=$i(),f=Mr(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Er(t,f,l),i!==null&&(Ni(i,t,l),ml(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=$i(),l=Mr(r);l.tag=2,i!=null&&(l.callback=i),i=Er(t,l,r),i!==null&&(Ni(i,t,r),ml(i,t,r))}};function Xg(t,i,r,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!ol(r,l)||!ol(f,h):!0}function Wg(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&Fd.enqueueReplaceState(i,i.state,null)}function ps(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=x({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function qg(t){Dc(t)}function Yg(t){console.error(t)}function $g(t){Dc(t)}function Jc(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Zg(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Hd(t,i,r){return r=Mr(r),r.tag=3,r.payload={element:null},r.callback=function(){Jc(t,i)},r}function Kg(t){return t=Mr(t),t.tag=3,t}function Qg(t,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){Zg(i,r,l)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Zg(i,r,l),typeof f!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function gb(t,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Ys(i,r,f,!0),r=Xi.current,r!==null){switch(r.tag){case 31:case 13:return la===null?fu():r.alternate===null&&wn===0&&(wn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Hc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),fh(t,l,f)),!1;case 22:return r.flags|=65536,l===Hc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),fh(t,l,f)),!1}throw Error(a(435,r.tag))}return fh(t,l,f),fu(),!1}if(Ht)return i=Xi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==rd&&(t=Error(a(422),{cause:l}),ul(aa(t,r)))):(l!==rd&&(i=Error(a(423),{cause:l}),ul(aa(i,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=aa(l,r),f=Hd(t.stateNode,l,f),gd(t,f),wn!==4&&(wn=2)),!1;var h=Error(a(520),{cause:l});if(h=aa(h,r),Cl===null?Cl=[h]:Cl.push(h),wn!==4&&(wn=2),i===null)return!0;l=aa(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=Hd(r.stateNode,l,t),gd(r,t),!1;case 1:if(i=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dr===null||!Dr.has(h))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Kg(f),Qg(f,t,r,l),gd(r,f),!1}r=r.return}while(r!==null);return!1}var Gd=Error(a(461)),Gn=!1;function fi(t,i,r,l){i.child=t===null?ng(i,null,r,l):ds(i,t.child,r,l)}function Jg(t,i,r,l,f){r=r.render;var h=i.ref;if("ref"in l){var b={};for(var T in l)T!=="ref"&&(b[T]=l[T])}else b=l;return ls(i),l=Sd(t,i,r,b,h,f),T=Md(),t!==null&&!Gn?(Ed(t,i,f),Za(t,i,f)):(Ht&&T&&id(i),i.flags|=1,fi(t,i,l,f),i.child)}function ex(t,i,r,l,f){if(t===null){var h=r.type;return typeof h=="function"&&!ed(h)&&h.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=h,tx(t,i,h,l,f)):(t=Nc(r.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!$d(t,f)){var b=h.memoizedProps;if(r=r.compare,r=r!==null?r:ol,r(b,l)&&t.ref===i.ref)return Za(t,i,f)}return i.flags|=1,t=ka(h,l),t.ref=i.ref,t.return=i,i.child=t}function tx(t,i,r,l,f){if(t!==null){var h=t.memoizedProps;if(ol(h,l)&&t.ref===i.ref)if(Gn=!1,i.pendingProps=l=h,$d(t,f))(t.flags&131072)!==0&&(Gn=!0);else return i.lanes=t.lanes,Za(t,i,f)}return Vd(t,i,r,l,f)}function nx(t,i,r,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return ix(t,i,h,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bc(i,h!==null?h.cachePool:null),h!==null?rg(i,h):_d(),sg(i);else return l=i.lanes=536870912,ix(t,i,h!==null?h.baseLanes|r:r,r,l)}else h!==null?(Bc(i,h.cachePool),rg(i,h),Ar(),i.memoizedState=null):(t!==null&&Bc(i,null),_d(),Ar());return fi(t,i,f,r),i.child}function Sl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function ix(t,i,r,l,f){var h=dd();return h=h===null?null:{parent:Fn._currentValue,pool:h},i.memoizedState={baseLanes:r,cachePool:h},t!==null&&Bc(i,null),_d(),sg(i),t!==null&&Ys(t,i,l,!0),i.childLanes=f,null}function eu(t,i){return i=nu({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function ax(t,i,r){return ds(i,t.child,null,r),t=eu(i,i.pendingProps),t.flags|=2,Wi(i),i.memoizedState=null,t}function xb(t,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ht){if(l.mode==="hidden")return t=eu(i,l),i.lanes=536870912,Sl(null,t);if(bd(i),(t=mn)?(t=g_(t,oa),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:_r!==null?{id:Oa,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},r=Gm(t),r.return=i,i.child=r,ci=i,mn=null)):t=null,t===null)throw br(i);return i.lanes=536870912,null}return eu(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(bd(i),f)if(i.flags&256)i.flags&=-257,i=ax(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Gn||Ys(t,i,r,!1),f=(r&t.childLanes)!==0,Gn||f){if(l=fn,l!==null&&(b=Ei(l,r),b!==0&&b!==h.retryLane))throw h.retryLane=b,as(t,b),Ni(l,t,b),Gd;fu(),i=ax(t,i,r)}else t=h.treeContext,mn=ca(b.nextSibling),ci=i,Ht=!0,vr=null,oa=!1,t!==null&&km(i,t),i=eu(i,l),i.flags|=4096;return i}return t=ka(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function tu(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Vd(t,i,r,l,f){return ls(i),r=Sd(t,i,r,l,void 0,f),l=Md(),t!==null&&!Gn?(Ed(t,i,f),Za(t,i,f)):(Ht&&l&&id(i),i.flags|=1,fi(t,i,r,f),i.child)}function rx(t,i,r,l,f,h){return ls(i),i.updateQueue=null,r=lg(i,l,r,f),og(t),l=Md(),t!==null&&!Gn?(Ed(t,i,h),Za(t,i,h)):(Ht&&l&&id(i),i.flags|=1,fi(t,i,r,h),i.child)}function sx(t,i,r,l,f){if(ls(i),i.stateNode===null){var h=ks,b=r.contextType;typeof b=="object"&&b!==null&&(h=ui(b)),h=new r(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Fd,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},pd(i),b=r.contextType,h.context=typeof b=="object"&&b!==null?ui(b):ks,h.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Bd(i,r,b,l),h.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&Fd.enqueueReplaceState(h,h.state,null),xl(i,l,h,f),gl(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var T=i.memoizedProps,B=ps(r,T);h.props=B;var ne=h.context,ge=r.contextType;b=ks,typeof ge=="object"&&ge!==null&&(b=ui(ge));var Se=r.getDerivedStateFromProps;ge=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||ne!==b)&&Wg(i,h,l,b),Sr=!1;var re=i.memoizedState;h.state=re,xl(i,l,h,f),gl(),ne=i.memoizedState,T||re!==ne||Sr?(typeof Se=="function"&&(Bd(i,r,Se,l),ne=i.memoizedState),(B=Sr||Xg(i,r,B,l,re,ne,b))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),h.props=l,h.state=ne,h.context=b,l=B):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,md(t,i),b=i.memoizedProps,ge=ps(r,b),h.props=ge,Se=i.pendingProps,re=h.context,ne=r.contextType,B=ks,typeof ne=="object"&&ne!==null&&(B=ui(ne)),T=r.getDerivedStateFromProps,(ne=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==Se||re!==B)&&Wg(i,h,l,B),Sr=!1,re=i.memoizedState,h.state=re,xl(i,l,h,f),gl();var fe=i.memoizedState;b!==Se||re!==fe||Sr||t!==null&&t.dependencies!==null&&zc(t.dependencies)?(typeof T=="function"&&(Bd(i,r,T,l),fe=i.memoizedState),(ge=Sr||Xg(i,r,ge,l,re,fe,B)||t!==null&&t.dependencies!==null&&zc(t.dependencies))?(ne||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,fe,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,fe,B)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=fe),h.props=l,h.state=fe,h.context=B,l=ge):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&re===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,tu(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=ds(i,t.child,null,f),i.child=ds(i,null,r,f)):fi(t,i,r,f),i.memoizedState=h.state,t=i.child):t=Za(t,i,f),t}function ox(t,i,r,l){return ss(),i.flags|=256,fi(t,i,r,l),i.child}var jd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kd(t){return{baseLanes:t,cachePool:Zm()}}function Xd(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=Yi),t}function lx(t,i,r){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(On.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ht){if(f?Tr(i):Ar(),(t=mn)?(t=g_(t,oa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:_r!==null?{id:Oa,overflow:Na}:null,retryLane:536870912,hydrationErrors:null},r=Gm(t),r.return=i,i.child=r,ci=i,mn=null)):t=null,t===null)throw br(i);return wh(t)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,f?(Ar(),f=i.mode,T=nu({mode:"hidden",children:T},f),l=rs(l,f,r,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=kd(r),l.childLanes=Xd(t,b,r),i.memoizedState=jd,Sl(null,l)):(Tr(i),Wd(i,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(h)i.flags&256?(Tr(i),i.flags&=-257,i=qd(t,i,r)):i.memoizedState!==null?(Ar(),i.child=t.child,i.flags|=128,i=null):(Ar(),T=l.fallback,f=i.mode,l=nu({mode:"visible",children:l.children},f),T=rs(T,f,r,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,ds(i,t.child,null,r),l=i.child,l.memoizedState=kd(r),l.childLanes=Xd(t,b,r),i.memoizedState=jd,i=Sl(null,l));else if(Tr(i),wh(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var ne=b.dgst;b=ne,l=Error(a(419)),l.stack="",l.digest=b,ul({value:l,source:null,stack:null}),i=qd(t,i,r)}else if(Gn||Ys(t,i,r,!1),b=(r&t.childLanes)!==0,Gn||b){if(b=fn,b!==null&&(l=Ei(b,r),l!==0&&l!==B.retryLane))throw B.retryLane=l,as(t,l),Ni(b,t,l),Gd;Ah(T)||fu(),i=qd(t,i,r)}else Ah(T)?(i.flags|=192,i.child=t.child,i=null):(t=B.treeContext,mn=ca(T.nextSibling),ci=i,Ht=!0,vr=null,oa=!1,t!==null&&km(i,t),i=Wd(i,l.children),i.flags|=4096);return i}return f?(Ar(),T=l.fallback,f=i.mode,B=t.child,ne=B.sibling,l=ka(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,ne!==null?T=ka(ne,T):(T=rs(T,f,r,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,Sl(null,l),l=i.child,T=t.child.memoizedState,T===null?T=kd(r):(f=T.cachePool,f!==null?(B=Fn._currentValue,f=f.parent!==B?{parent:B,pool:B}:f):f=Zm(),T={baseLanes:T.baseLanes|r,cachePool:f}),l.memoizedState=T,l.childLanes=Xd(t,b,r),i.memoizedState=jd,Sl(t.child,l)):(Tr(i),r=t.child,t=r.sibling,r=ka(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=r,i.memoizedState=null,r)}function Wd(t,i){return i=nu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function nu(t,i){return t=ki(22,t,null,i),t.lanes=0,t}function qd(t,i,r){return ds(i,t.child,null,r),t=Wd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function cx(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),ld(t.return,i,r)}function Yd(t,i,r,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=r,b.tailMode=f,b.treeForkCount=h)}function ux(t,i,r){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=On.current,T=(b&2)!==0;if(T?(b=b&1|2,i.flags|=128):b&=1,K(On,b),fi(t,i,l,r),l=Ht?cl:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cx(t,r,i);else if(t.tag===19)cx(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&kc(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),Yd(i,!1,f,r,h,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&kc(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}Yd(i,!0,r,null,h,l);break;case"together":Yd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Za(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Cr|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(Ys(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=ka(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=ka(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function $d(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&zc(t)))}function _b(t,i,r){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),yr(i,Fn,t.memoizedState.cache),ss();break;case 27:case 5:Xe(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:yr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,bd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Tr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?lx(t,i,r):(Tr(i),t=Za(t,i,r),t!==null?t.sibling:null);Tr(i);break;case 19:var f=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Ys(t,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return ux(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),K(On,On.current),l)break;return null;case 22:return i.lanes=0,nx(t,i,r,i.pendingProps);case 24:yr(i,Fn,t.memoizedState.cache)}return Za(t,i,r)}function fx(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)Gn=!0;else{if(!$d(t,r)&&(i.flags&128)===0)return Gn=!1,_b(t,i,r);Gn=(t.flags&131072)!==0}else Gn=!1,Ht&&(i.flags&1048576)!==0&&jm(i,cl,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=us(i.elementType),i.type=t,typeof t=="function")ed(t)?(l=ps(t,l),i.tag=1,i=sx(null,i,t,l,r)):(i.tag=0,i=Vd(null,i,t,l,r));else{if(t!=null){var f=t.$$typeof;if(f===z){i.tag=11,i=Jg(null,i,t,l,r);break e}else if(f===F){i.tag=14,i=ex(null,i,t,l,r);break e}}throw i=pe(t)||t,Error(a(306,i,""))}}return i;case 0:return Vd(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=ps(l,i.pendingProps),sx(t,i,l,f,r);case 3:e:{if(we(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,md(t,i),xl(i,l,null,r);var b=i.memoizedState;if(l=b.cache,yr(i,Fn,l),l!==h.cache&&cd(i,[Fn],r,!0),gl(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=ox(t,i,l,r);break e}else if(l!==f){f=aa(Error(a(424)),i),ul(f),i=ox(t,i,l,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(mn=ca(t.firstChild),ci=i,Ht=!0,vr=null,oa=!0,r=ng(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ss(),l===f){i=Za(t,i,r);break e}fi(t,i,l,r)}i=i.child}return i;case 26:return tu(t,i),t===null?(r=S_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ht||(r=i.type,t=i.pendingProps,l=_u(Z.current).createElement(r),l[Tn]=i,l[Dn]=t,di(l,r,t),J(l),i.stateNode=l):i.memoizedState=S_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Xe(i),t===null&&Ht&&(l=i.stateNode=v_(i.type,i.pendingProps,Z.current),ci=i,oa=!0,f=mn,Nr(i.type)?(Rh=f,mn=ca(l.firstChild)):mn=f),fi(t,i,i.pendingProps.children,r),tu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ht&&((f=l=mn)&&(l=Yb(l,i.type,i.pendingProps,oa),l!==null?(i.stateNode=l,ci=i,mn=ca(l.firstChild),oa=!1,f=!0):f=!1),f||br(i)),Xe(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,Mh(f,h)?l=null:b!==null&&Mh(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=Sd(t,i,cb,null,null,r),Il._currentValue=f),tu(t,i),fi(t,i,l,r),i.child;case 6:return t===null&&Ht&&((t=r=mn)&&(r=$b(r,i.pendingProps,oa),r!==null?(i.stateNode=r,ci=i,mn=null,t=!0):t=!1),t||br(i)),null;case 13:return lx(t,i,r);case 4:return we(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ds(i,null,l,r):fi(t,i,l,r),i.child;case 11:return Jg(t,i,i.type,i.pendingProps,r);case 7:return fi(t,i,i.pendingProps,r),i.child;case 8:return fi(t,i,i.pendingProps.children,r),i.child;case 12:return fi(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,yr(i,i.type,l.value),fi(t,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,ls(i),f=ui(f),l=l(f),i.flags|=1,fi(t,i,l,r),i.child;case 14:return ex(t,i,i.type,i.pendingProps,r);case 15:return tx(t,i,i.type,i.pendingProps,r);case 19:return ux(t,i,r);case 31:return xb(t,i,r);case 22:return nx(t,i,r,i.pendingProps);case 24:return ls(i),l=ui(Fn),t===null?(f=dd(),f===null&&(f=fn,h=ud(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=r),f=h),i.memoizedState={parent:l,cache:f},pd(i),yr(i,Fn,f)):((t.lanes&r)!==0&&(md(t,i),xl(i,null,null,r),gl()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),yr(i,Fn,l)):(l=h.cache,yr(i,Fn,l),l!==f.cache&&cd(i,[Fn],r,!0))),fi(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ka(t){t.flags|=4}function Zd(t,i,r,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Bx())t.flags|=8192;else throw fs=Hc,hd}else t.flags&=-16777217}function dx(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!w_(i))if(Bx())t.flags|=8192;else throw fs=Hc,hd}function iu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?$t():536870912,t.lanes|=i,so|=i)}function Ml(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function vb(t,i,r){var l=i.pendingProps;switch(ad(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return gn(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),qa(Fn),Be(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qs(i)?Ka(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sd())),gn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(Ka(i),h!==null?(gn(i),dx(i,h)):(gn(i),Zd(i,f,null,l,r))):h?h!==t.memoizedState?(Ka(i),gn(i),dx(i,h)):(gn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ka(i),gn(i),Zd(i,f,t,l,r)),null;case 27:if(dt(i),r=Z.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ka(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return gn(i),null}t=_e.current,qs(i)?Xm(i):(t=v_(f,l,r),i.stateNode=t,Ka(i))}return gn(i),null;case 5:if(dt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ka(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return gn(i),null}if(h=_e.current,qs(i))Xm(i);else{var b=_u(Z.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[Tn]=i,h[Dn]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(di(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ka(i)}}return gn(i),Zd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ka(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=Z.current,qs(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,f=ci,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Tn]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||l_(t.nodeValue,r)),t||br(i,!0)}else t=_u(t).createTextNode(l),t[Tn]=i,i.stateNode=t}return gn(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=qs(i),r!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[Tn]=i}else ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),t=!1}else r=sd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(Wi(i),i):(Wi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return gn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=qs(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Tn]=i}else ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),f=!1}else f=sd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Wi(i),i):(Wi(i),null)}return Wi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),iu(i,i.updateQueue),gn(i),null);case 4:return Be(),t===null&&_h(i.stateNode.containerInfo),gn(i),null;case 10:return qa(i.type),gn(i),null;case 19:if(ae(On),l=i.memoizedState,l===null)return gn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)Ml(l,!1);else{if(wn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=kc(t),h!==null){for(i.flags|=128,Ml(l,!1),t=h.updateQueue,i.updateQueue=t,iu(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Hm(r,t),r=r.sibling;return K(On,On.current&1|2),Ht&&Xa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&M()>lu&&(i.flags|=128,f=!0,Ml(l,!1),i.lanes=4194304)}else{if(!f)if(t=kc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,iu(i,t),Ml(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Ht)return gn(i),null}else 2*M()-l.renderingStartTime>lu&&r!==536870912&&(i.flags|=128,f=!0,Ml(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=M(),t.sibling=null,r=On.current,K(On,f?r&1|2:r&1),Ht&&Xa(i,l.treeForkCount),t):(gn(i),null);case 22:case 23:return Wi(i),vd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),r=i.updateQueue,r!==null&&iu(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&ae(cs),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),qa(Fn),gn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function bb(t,i){switch(ad(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return qa(Fn),Be(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return dt(i),null;case 31:if(i.memoizedState!==null){if(Wi(i),i.alternate===null)throw Error(a(340));ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Wi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ae(On),null;case 4:return Be(),null;case 10:return qa(i.type),null;case 22:case 23:return Wi(i),vd(),t!==null&&ae(cs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return qa(Fn),null;case 25:return null;default:return null}}function hx(t,i){switch(ad(i),i.tag){case 3:qa(Fn),Be();break;case 26:case 27:case 5:dt(i);break;case 4:Be();break;case 31:i.memoizedState!==null&&Wi(i);break;case 13:Wi(i);break;case 19:ae(On);break;case 10:qa(i.type);break;case 22:case 23:Wi(i),vd(),t!==null&&ae(cs);break;case 24:qa(Fn)}}function El(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&t)===t){l=void 0;var h=r.create,b=r.inst;l=h(),b.destroy=l}r=r.next}while(r!==f)}}catch(T){an(i,i.return,T)}}function wr(t,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,f=i;var B=r,ne=T;try{ne()}catch(ge){an(f,B,ge)}}}l=l.next}while(l!==h)}}catch(ge){an(i,i.return,ge)}}function px(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{ag(i,r)}catch(l){an(t,t.return,l)}}}function mx(t,i,r){r.props=ps(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){an(t,i,l)}}function Tl(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(f){an(t,i,f)}}function Pa(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){an(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){an(t,i,f)}else r.current=null}function gx(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){an(t,t.return,f)}}function Kd(t,i,r){try{var l=t.stateNode;Vb(l,t.type,r,i),l[Dn]=i}catch(f){an(t,t.return,f)}}function xx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Nr(t.type)||t.tag===4}function Qd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jd(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Bn));else if(l!==4&&(l===27&&Nr(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(Jd(t,i,r),t=t.sibling;t!==null;)Jd(t,i,r),t=t.sibling}function au(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&Nr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(au(t,i,r),t=t.sibling;t!==null;)au(t,i,r),t=t.sibling}function _x(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);di(i,l,r),i[Tn]=t,i[Dn]=r}catch(h){an(t,t.return,h)}}var Qa=!1,Vn=!1,eh=!1,vx=typeof WeakSet=="function"?WeakSet:Set,ti=null;function yb(t,i){if(t=t.containerInfo,yh=Tu,t=Um(t),qf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var b=0,T=-1,B=-1,ne=0,ge=0,Se=t,re=null;t:for(;;){for(var fe;Se!==r||f!==0&&Se.nodeType!==3||(T=b+f),Se!==h||l!==0&&Se.nodeType!==3||(B=b+l),Se.nodeType===3&&(b+=Se.nodeValue.length),(fe=Se.firstChild)!==null;)re=Se,Se=fe;for(;;){if(Se===t)break t;if(re===r&&++ne===f&&(T=b),re===h&&++ge===l&&(B=b),(fe=Se.nextSibling)!==null)break;Se=re,re=Se.parentNode}Se=fe}r=T===-1||B===-1?null:{start:T,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Sh={focusedElem:t,selectionRange:r},Tu=!1,ti=i;ti!==null;)if(i=ti,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ti=t;else for(;ti!==null;){switch(i=ti,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=i,f=h.memoizedProps,h=h.memoizedState,l=r.stateNode;try{var Ye=ps(r.type,f);t=l.getSnapshotBeforeUpdate(Ye,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(ct){an(r,r.return,ct)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Th(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Th(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,ti=t;break}ti=i.return}}function bx(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:er(t,r),l&4&&El(5,r);break;case 1:if(er(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(b){an(r,r.return,b)}else{var f=ps(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){an(r,r.return,b)}}l&64&&px(r),l&512&&Tl(r,r.return);break;case 3:if(er(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{ag(t,i)}catch(b){an(r,r.return,b)}}break;case 27:i===null&&l&4&&_x(r);case 26:case 5:er(t,r),i===null&&l&4&&gx(r),l&512&&Tl(r,r.return);break;case 12:er(t,r);break;case 31:er(t,r),l&4&&Mx(t,r);break;case 13:er(t,r),l&4&&Ex(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Db.bind(null,r),Zb(t,r))));break;case 22:if(l=r.memoizedState!==null||Qa,!l){i=i!==null&&i.memoizedState!==null||Vn,f=Qa;var h=Vn;Qa=l,(Vn=i)&&!h?tr(t,r,(r.subtreeFlags&8772)!==0):er(t,r),Qa=f,Vn=h}break;case 30:break;default:er(t,r)}}function yx(t){var i=t.alternate;i!==null&&(t.alternate=null,yx(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&es(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Sn=null,Di=!1;function Ja(t,i,r){for(r=r.child;r!==null;)Sx(t,i,r),r=r.sibling}function Sx(t,i,r){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Ee,r)}catch{}switch(r.tag){case 26:Vn||Pa(r,i),Ja(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Vn||Pa(r,i);var l=Sn,f=Di;Nr(r.type)&&(Sn=r.stateNode,Di=!1),Ja(t,i,r),Nl(r.stateNode),Sn=l,Di=f;break;case 5:Vn||Pa(r,i);case 6:if(l=Sn,f=Di,Sn=null,Ja(t,i,r),Sn=l,Di=f,Sn!==null)if(Di)try{(Sn.nodeType===9?Sn.body:Sn.nodeName==="HTML"?Sn.ownerDocument.body:Sn).removeChild(r.stateNode)}catch(h){an(r,i,h)}else try{Sn.removeChild(r.stateNode)}catch(h){an(r,i,h)}break;case 18:Sn!==null&&(Di?(t=Sn,p_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),mo(t)):p_(Sn,r.stateNode));break;case 4:l=Sn,f=Di,Sn=r.stateNode.containerInfo,Di=!0,Ja(t,i,r),Sn=l,Di=f;break;case 0:case 11:case 14:case 15:wr(2,r,i),Vn||wr(4,r,i),Ja(t,i,r);break;case 1:Vn||(Pa(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&mx(r,i,l)),Ja(t,i,r);break;case 21:Ja(t,i,r);break;case 22:Vn=(l=Vn)||r.memoizedState!==null,Ja(t,i,r),Vn=l;break;default:Ja(t,i,r)}}function Mx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{mo(t)}catch(r){an(i,i.return,r)}}}function Ex(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{mo(t)}catch(r){an(i,i.return,r)}}function Sb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new vx),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new vx),i;default:throw Error(a(435,t.tag))}}function ru(t,i){var r=Sb(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=Ub.bind(null,t,l);l.then(f,f)}})}function Ui(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],h=t,b=i,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(Nr(T.type)){Sn=T.stateNode,Di=!1;break e}break;case 5:Sn=T.stateNode,Di=!1;break e;case 3:case 4:Sn=T.stateNode.containerInfo,Di=!0;break e}T=T.return}if(Sn===null)throw Error(a(160));Sx(h,b,f),Sn=null,Di=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Tx(i,t),i=i.sibling}var ba=null;function Tx(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ui(i,t),Li(t),l&4&&(wr(3,t,t.return),El(3,t),wr(5,t,t.return));break;case 1:Ui(i,t),Li(t),l&512&&(Vn||r===null||Pa(r,r.return)),l&64&&Qa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=ba;if(Ui(i,t),Li(t),l&512&&(Vn||r===null||Pa(r,r.return)),l&4){var h=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[ga]||h[Tn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),di(h,l,r),h[Tn]=t,J(h),l=h;break e;case"link":var b=T_("link","href",f).get(l+(r.href||""));if(b){for(var T=0;T<b.length;T++)if(h=b[T],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(T,1);break t}}h=f.createElement(l),di(h,l,r),f.head.appendChild(h);break;case"meta":if(b=T_("meta","content",f).get(l+(r.content||""))){for(T=0;T<b.length;T++)if(h=b[T],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(T,1);break t}}h=f.createElement(l),di(h,l,r),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[Tn]=t,J(h),l=h}t.stateNode=l}else A_(f,t.type,t.stateNode);else t.stateNode=E_(f,l,t.memoizedProps);else h!==l?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,l===null?A_(f,t.type,t.stateNode):E_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Kd(t,t.memoizedProps,r.memoizedProps)}break;case 27:Ui(i,t),Li(t),l&512&&(Vn||r===null||Pa(r,r.return)),r!==null&&l&4&&Kd(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Ui(i,t),Li(t),l&512&&(Vn||r===null||Pa(r,r.return)),t.flags&32){f=t.stateNode;try{hn(f,"")}catch(Ye){an(t,t.return,Ye)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Kd(t,f,r!==null?r.memoizedProps:f)),l&1024&&(eh=!0);break;case 6:if(Ui(i,t),Li(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(Ye){an(t,t.return,Ye)}}break;case 3:if(yu=null,f=ba,ba=vu(i.containerInfo),Ui(i,t),ba=f,Li(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{mo(i.containerInfo)}catch(Ye){an(t,t.return,Ye)}eh&&(eh=!1,Ax(t));break;case 4:l=ba,ba=vu(t.stateNode.containerInfo),Ui(i,t),Li(t),ba=l;break;case 12:Ui(i,t),Li(t);break;case 31:Ui(i,t),Li(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 13:Ui(i,t),Li(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ou=M()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 22:f=t.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,ne=Qa,ge=Vn;if(Qa=ne||f,Vn=ge||B,Ui(i,t),Vn=ge,Qa=ne,Li(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||B||Qa||Vn||ms(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){B=r=i;try{if(h=B.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=B.stateNode;var Se=B.memoizedProps.style,re=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;T.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ye){an(B,B.return,Ye)}}}else if(i.tag===6){if(r===null){B=i;try{B.stateNode.nodeValue=f?"":B.memoizedProps}catch(Ye){an(B,B.return,Ye)}}}else if(i.tag===18){if(r===null){B=i;try{var fe=B.stateNode;f?m_(fe,!0):m_(B.stateNode,!1)}catch(Ye){an(B,B.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,ru(t,r))));break;case 19:Ui(i,t),Li(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 30:break;case 21:break;default:Ui(i,t),Li(t)}}function Li(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(xx(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,h=Qd(t);au(t,h,f);break;case 5:var b=r.stateNode;r.flags&32&&(hn(b,""),r.flags&=-33);var T=Qd(t);au(t,T,b);break;case 3:case 4:var B=r.stateNode.containerInfo,ne=Qd(t);Jd(t,ne,B);break;default:throw Error(a(161))}}catch(ge){an(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ax(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Ax(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function er(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)bx(t,i.alternate,i),i=i.sibling}function ms(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:wr(4,i,i.return),ms(i);break;case 1:Pa(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&mx(i,i.return,r),ms(i);break;case 27:Nl(i.stateNode);case 26:case 5:Pa(i,i.return),ms(i);break;case 22:i.memoizedState===null&&ms(i);break;case 30:ms(i);break;default:ms(i)}t=t.sibling}}function tr(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:tr(f,h,r),El(4,h);break;case 1:if(tr(f,h,r),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ne){an(l,l.return,ne)}if(l=h,f=l.updateQueue,f!==null){var T=l.stateNode;try{var B=f.shared.hiddenCallbacks;if(B!==null)for(f.shared.hiddenCallbacks=null,f=0;f<B.length;f++)ig(B[f],T)}catch(ne){an(l,l.return,ne)}}r&&b&64&&px(h),Tl(h,h.return);break;case 27:_x(h);case 26:case 5:tr(f,h,r),r&&l===null&&b&4&&gx(h),Tl(h,h.return);break;case 12:tr(f,h,r);break;case 31:tr(f,h,r),r&&b&4&&Mx(f,h);break;case 13:tr(f,h,r),r&&b&4&&Ex(f,h);break;case 22:h.memoizedState===null&&tr(f,h,r),Tl(h,h.return);break;case 30:break;default:tr(f,h,r)}i=i.sibling}}function th(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&fl(r))}function nh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fl(t))}function ya(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)wx(t,i,r,l),i=i.sibling}function wx(t,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:ya(t,i,r,l),f&2048&&El(9,i);break;case 1:ya(t,i,r,l);break;case 3:ya(t,i,r,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&fl(t)));break;case 12:if(f&2048){ya(t,i,r,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,T=h.onPostCommit;typeof T=="function"&&T(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){an(i,i.return,B)}}else ya(t,i,r,l);break;case 31:ya(t,i,r,l);break;case 13:ya(t,i,r,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?ya(t,i,r,l):Al(t,i):h._visibility&2?ya(t,i,r,l):(h._visibility|=2,io(t,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&th(b,i);break;case 24:ya(t,i,r,l),f&2048&&nh(i.alternate,i);break;default:ya(t,i,r,l)}}function io(t,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,T=r,B=l,ne=b.flags;switch(b.tag){case 0:case 11:case 15:io(h,b,T,B,f),El(8,b);break;case 23:break;case 22:var ge=b.stateNode;b.memoizedState!==null?ge._visibility&2?io(h,b,T,B,f):Al(h,b):(ge._visibility|=2,io(h,b,T,B,f)),f&&ne&2048&&th(b.alternate,b);break;case 24:io(h,b,T,B,f),f&&ne&2048&&nh(b.alternate,b);break;default:io(h,b,T,B,f)}i=i.sibling}}function Al(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,f=l.flags;switch(l.tag){case 22:Al(r,l),f&2048&&th(l.alternate,l);break;case 24:Al(r,l),f&2048&&nh(l.alternate,l);break;default:Al(r,l)}i=i.sibling}}var wl=8192;function ao(t,i,r){if(t.subtreeFlags&wl)for(t=t.child;t!==null;)Rx(t,i,r),t=t.sibling}function Rx(t,i,r){switch(t.tag){case 26:ao(t,i,r),t.flags&wl&&t.memoizedState!==null&&ly(r,ba,t.memoizedState,t.memoizedProps);break;case 5:ao(t,i,r);break;case 3:case 4:var l=ba;ba=vu(t.stateNode.containerInfo),ao(t,i,r),ba=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=wl,wl=16777216,ao(t,i,r),wl=l):ao(t,i,r));break;default:ao(t,i,r)}}function Cx(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Rl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];ti=l,Ux(l,t)}Cx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dx(t),t=t.sibling}function Dx(t){switch(t.tag){case 0:case 11:case 15:Rl(t),t.flags&2048&&wr(9,t,t.return);break;case 3:Rl(t);break;case 12:Rl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,su(t)):Rl(t);break;default:Rl(t)}}function su(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];ti=l,Ux(l,t)}Cx(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:wr(8,i,i.return),su(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,su(i));break;default:su(i)}t=t.sibling}}function Ux(t,i){for(;ti!==null;){var r=ti;switch(r.tag){case 0:case 11:case 15:wr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fl(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,ti=l;else e:for(r=t;ti!==null;){l=ti;var f=l.sibling,h=l.return;if(yx(l),l===r){ti=null;break e}if(f!==null){f.return=h,ti=f;break e}ti=h}}}var Mb={getCacheForType:function(t){var i=ui(Fn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return ui(Fn).controller.signal}},Eb=typeof WeakMap=="function"?WeakMap:Map,Kt=0,fn=null,Lt=null,zt=0,nn=0,qi=null,Rr=!1,ro=!1,ih=!1,nr=0,wn=0,Cr=0,gs=0,ah=0,Yi=0,so=0,Cl=null,Oi=null,rh=!1,ou=0,Lx=0,lu=1/0,cu=null,Dr=null,qn=0,Ur=null,oo=null,ir=0,sh=0,oh=null,Ox=null,Dl=0,lh=null;function $i(){return(Kt&2)!==0&&zt!==0?zt&-zt:N.T!==null?ph():ma()}function Nx(){if(Yi===0)if((zt&536870912)===0||Ht){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Yi=t}else Yi=536870912;return t=Xi.current,t!==null&&(t.flags|=32),Yi}function Ni(t,i,r){(t===fn&&(nn===2||nn===9)||t.cancelPendingCommit!==null)&&(lo(t,0),Lr(t,zt,Yi,!1)),gt(t,r),((Kt&2)===0||t!==fn)&&(t===fn&&((Kt&2)===0&&(gs|=r),wn===4&&Lr(t,zt,Yi,!1)),za(t))}function Px(t,i,r){if((Kt&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||ke(t,i),f=l?wb(t,i):uh(t,i,!0),h=l;do{if(f===0){ro&&!l&&Lr(t,i,0,!1);break}else{if(r=t.current.alternate,h&&!Tb(r)){f=uh(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var T=t;f=Cl;var B=T.current.memoizedState.isDehydrated;if(B&&(lo(T,b).flags|=256),b=uh(T,b,!1),b!==2){if(ih&&!B){T.errorRecoveryDisabledLanes|=h,gs|=h,f=4;break e}h=Oi,Oi=f,h!==null&&(Oi===null?Oi=h:Oi.push.apply(Oi,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){lo(t,0),Lr(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Lr(l,i,Yi,!Rr);break e;case 2:Oi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=ou+300-M(),10<f)){if(Lr(l,i,Yi,!Rr),ye(l,0,!0)!==0)break e;ir=i,l.timeoutHandle=d_(zx.bind(null,l,r,Oi,cu,rh,i,Yi,gs,so,Rr,h,"Throttled",-0,0),f);break e}zx(l,r,Oi,cu,rh,i,Yi,gs,so,Rr,h,null,-0,0)}}break}while(!0);za(t)}function zx(t,i,r,l,f,h,b,T,B,ne,ge,Se,re,fe){if(t.timeoutHandle=-1,Se=i.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bn},Rx(i,h,Se);var Ye=(h&62914560)===h?ou-M():(h&4194048)===h?Lx-M():0;if(Ye=cy(Se,Ye),Ye!==null){ir=h,t.cancelPendingCommit=Ye(kx.bind(null,t,i,h,r,l,f,b,T,B,ge,Se,null,re,fe)),Lr(t,h,b,!ne);return}}kx(t,i,h,r,l,f,b,T,B)}function Tb(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],h=f.getSnapshot;f=f.value;try{if(!ji(h(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(t,i,r,l){i&=~ah,i&=~gs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-qe(f),b=1<<h;l[h]=-1,f&=~b}r!==0&&Mi(t,r,i)}function uu(){return(Kt&6)===0?(Ul(0),!1):!0}function ch(){if(Lt!==null){if(nn===0)var t=Lt.return;else t=Lt,Wa=os=null,Td(t),Qs=null,hl=0,t=Lt;for(;t!==null;)hx(t.alternate,t),t=t.return;Lt=null}}function lo(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Xb(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ir=0,ch(),fn=t,Lt=r=ka(t.current,null),zt=i,nn=0,qi=null,Rr=!1,ro=ke(t,i),ih=!1,so=Yi=ah=gs=Cr=wn=0,Oi=Cl=null,rh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-qe(l),h=1<<f;i|=t[f],l&=~h}return nr=i,Uc(),r}function Ix(t,i){St=null,N.H=yl,i===Ks||i===Fc?(i=Jm(),nn=3):i===hd?(i=Jm(),nn=4):nn=i===Gd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,qi=i,Lt===null&&(wn=1,Jc(t,aa(i,t.current)))}function Bx(){var t=Xi.current;return t===null?!0:(zt&4194048)===zt?la===null:(zt&62914560)===zt||(zt&536870912)!==0?t===la:!1}function Fx(){var t=N.H;return N.H=yl,t===null?yl:t}function Hx(){var t=N.A;return N.A=Mb,t}function fu(){wn=4,Rr||(zt&4194048)!==zt&&Xi.current!==null||(ro=!0),(Cr&134217727)===0&&(gs&134217727)===0||fn===null||Lr(fn,zt,Yi,!1)}function uh(t,i,r){var l=Kt;Kt|=2;var f=Fx(),h=Hx();(fn!==t||zt!==i)&&(cu=null,lo(t,i)),i=!1;var b=wn;e:do try{if(nn!==0&&Lt!==null){var T=Lt,B=qi;switch(nn){case 8:ch(),b=6;break e;case 3:case 2:case 9:case 6:Xi.current===null&&(i=!0);var ne=nn;if(nn=0,qi=null,co(t,T,B,ne),r&&ro){b=0;break e}break;default:ne=nn,nn=0,qi=null,co(t,T,B,ne)}}Ab(),b=wn;break}catch(ge){Ix(t,ge)}while(!0);return i&&t.shellSuspendCounter++,Wa=os=null,Kt=l,N.H=f,N.A=h,Lt===null&&(fn=null,zt=0,Uc()),b}function Ab(){for(;Lt!==null;)Gx(Lt)}function wb(t,i){var r=Kt;Kt|=2;var l=Fx(),f=Hx();fn!==t||zt!==i?(cu=null,lu=M()+500,lo(t,i)):ro=ke(t,i);e:do try{if(nn!==0&&Lt!==null){i=Lt;var h=qi;t:switch(nn){case 1:nn=0,qi=null,co(t,i,h,1);break;case 2:case 9:if(Km(h)){nn=0,qi=null,Vx(i);break}i=function(){nn!==2&&nn!==9||fn!==t||(nn=7),za(t)},h.then(i,i);break e;case 3:nn=7;break e;case 4:nn=5;break e;case 7:Km(h)?(nn=0,qi=null,Vx(i)):(nn=0,qi=null,co(t,i,h,7));break;case 5:var b=null;switch(Lt.tag){case 26:b=Lt.memoizedState;case 5:case 27:var T=Lt;if(b?w_(b):T.stateNode.complete){nn=0,qi=null;var B=T.sibling;if(B!==null)Lt=B;else{var ne=T.return;ne!==null?(Lt=ne,du(ne)):Lt=null}break t}}nn=0,qi=null,co(t,i,h,5);break;case 6:nn=0,qi=null,co(t,i,h,6);break;case 8:ch(),wn=6;break e;default:throw Error(a(462))}}Rb();break}catch(ge){Ix(t,ge)}while(!0);return Wa=os=null,N.H=l,N.A=f,Kt=r,Lt!==null?0:(fn=null,zt=0,Uc(),wn)}function Rb(){for(;Lt!==null&&!ht();)Gx(Lt)}function Gx(t){var i=fx(t.alternate,t,nr);t.memoizedProps=t.pendingProps,i===null?du(t):Lt=i}function Vx(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=rx(r,i,i.pendingProps,i.type,void 0,zt);break;case 11:i=rx(r,i,i.pendingProps,i.type.render,i.ref,zt);break;case 5:Td(i);default:hx(r,i),i=Lt=Hm(i,nr),i=fx(r,i,nr)}t.memoizedProps=t.pendingProps,i===null?du(t):Lt=i}function co(t,i,r,l){Wa=os=null,Td(i),Qs=null,hl=0;var f=i.return;try{if(gb(t,f,i,r,zt)){wn=1,Jc(t,aa(r,t.current)),Lt=null;return}}catch(h){if(f!==null)throw Lt=f,h;wn=1,Jc(t,aa(r,t.current)),Lt=null;return}i.flags&32768?(Ht||l===1?t=!0:ro||(zt&536870912)!==0?t=!1:(Rr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Xi.current,l!==null&&l.tag===13&&(l.flags|=16384))),jx(i,t)):du(i)}function du(t){var i=t;do{if((i.flags&32768)!==0){jx(i,Rr);return}t=i.return;var r=vb(i.alternate,i,nr);if(r!==null){Lt=r;return}if(i=i.sibling,i!==null){Lt=i;return}Lt=i=t}while(i!==null);wn===0&&(wn=5)}function jx(t,i){do{var r=bb(t.alternate,t);if(r!==null){r.flags&=32767,Lt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){Lt=t;return}Lt=t=r}while(t!==null);wn=6,Lt=null}function kx(t,i,r,l,f,h,b,T,B){t.cancelPendingCommit=null;do hu();while(qn!==0);if((Kt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=Qf,rn(t,r,h,b,T,B),t===fn&&(Lt=fn=null,zt=0),oo=i,Ur=t,ir=r,sh=h,oh=f,Ox=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Lb(he,function(){return $x(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,f=X.p,X.p=2,b=Kt,Kt|=4;try{yb(t,i,r)}finally{Kt=b,X.p=f,N.T=l}}qn=1,Xx(),Wx(),qx()}}function Xx(){if(qn===1){qn=0;var t=Ur,i=oo,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=N.T,N.T=null;var l=X.p;X.p=2;var f=Kt;Kt|=4;try{Tx(i,t);var h=Sh,b=Um(t.containerInfo),T=h.focusedElem,B=h.selectionRange;if(b!==T&&T&&T.ownerDocument&&Dm(T.ownerDocument.documentElement,T)){if(B!==null&&qf(T)){var ne=B.start,ge=B.end;if(ge===void 0&&(ge=ne),"selectionStart"in T)T.selectionStart=ne,T.selectionEnd=Math.min(ge,T.value.length);else{var Se=T.ownerDocument||document,re=Se&&Se.defaultView||window;if(re.getSelection){var fe=re.getSelection(),Ye=T.textContent.length,ct=Math.min(B.start,Ye),cn=B.end===void 0?ct:Math.min(B.end,Ye);!fe.extend&&ct>cn&&(b=cn,cn=ct,ct=b);var q=Cm(T,ct),G=Cm(T,cn);if(q&&G&&(fe.rangeCount!==1||fe.anchorNode!==q.node||fe.anchorOffset!==q.offset||fe.focusNode!==G.node||fe.focusOffset!==G.offset)){var ee=Se.createRange();ee.setStart(q.node,q.offset),fe.removeAllRanges(),ct>cn?(fe.addRange(ee),fe.extend(G.node,G.offset)):(ee.setEnd(G.node,G.offset),fe.addRange(ee))}}}}for(Se=[],fe=T;fe=fe.parentNode;)fe.nodeType===1&&Se.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Se.length;T++){var ve=Se[T];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Tu=!!yh,Sh=yh=null}finally{Kt=f,X.p=l,N.T=r}}t.current=i,qn=2}}function Wx(){if(qn===2){qn=0;var t=Ur,i=oo,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=N.T,N.T=null;var l=X.p;X.p=2;var f=Kt;Kt|=4;try{bx(t,i.alternate,i)}finally{Kt=f,X.p=l,N.T=r}}qn=3}}function qx(){if(qn===4||qn===3){qn=0,L();var t=Ur,i=oo,r=ir,l=Ox;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qn=5:(qn=0,oo=Ur=null,Yx(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Dr=null),mi(r),i=i.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=N.T,f=X.p,X.p=2,N.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var T=l[b];h(T.value,{componentStack:T.stack})}}finally{N.T=i,X.p=f}}(ir&3)!==0&&hu(),za(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===lh?Dl++:(Dl=0,lh=t):Dl=0,Ul(0)}}function Yx(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,fl(i)))}function hu(){return Xx(),Wx(),qx(),$x()}function $x(){if(qn!==5)return!1;var t=Ur,i=sh;sh=0;var r=mi(ir),l=N.T,f=X.p;try{X.p=32>r?32:r,N.T=null,r=oh,oh=null;var h=Ur,b=ir;if(qn=0,oo=Ur=null,ir=0,(Kt&6)!==0)throw Error(a(331));var T=Kt;if(Kt|=4,Dx(h.current),wx(h,h.current,b,r),Kt=T,Ul(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Ee,h)}catch{}return!0}finally{X.p=f,N.T=l,Yx(t,i)}}function Zx(t,i,r){i=aa(r,i),i=Hd(t.stateNode,i,2),t=Er(t,i,2),t!==null&&(gt(t,2),za(t))}function an(t,i,r){if(t.tag===3)Zx(t,t,r);else for(;i!==null;){if(i.tag===3){Zx(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dr===null||!Dr.has(l))){t=aa(r,t),r=Kg(2),l=Er(i,r,2),l!==null&&(Qg(r,l,i,t),gt(l,2),za(l));break}}i=i.return}}function fh(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new Eb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(ih=!0,f.add(r),t=Cb.bind(null,t,i,r),i.then(t,t))}function Cb(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,fn===t&&(zt&r)===r&&(wn===4||wn===3&&(zt&62914560)===zt&&300>M()-ou?(Kt&2)===0&&lo(t,0):ah|=r,so===zt&&(so=0)),za(t)}function Kx(t,i){i===0&&(i=$t()),t=as(t,i),t!==null&&(gt(t,i),za(t))}function Db(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Kx(t,r)}function Ub(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Kx(t,r)}function Lb(t,i){return Jt(t,i)}var pu=null,uo=null,dh=!1,mu=!1,hh=!1,Or=0;function za(t){t!==uo&&t.next===null&&(uo===null?pu=uo=t:uo=uo.next=t),mu=!0,dh||(dh=!0,Nb())}function Ul(t,i){if(!hh&&mu){hh=!0;do for(var r=!1,l=pu;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,T=l.pingedLanes;h=(1<<31-qe(42|t)+1)-1,h&=f&~(b&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,t_(l,h))}else h=zt,h=ye(l,l===fn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||ke(l,h)||(r=!0,t_(l,h));l=l.next}while(r);hh=!1}}function Ob(){Qx()}function Qx(){mu=dh=!1;var t=0;Or!==0&&kb()&&(t=Or);for(var i=M(),r=null,l=pu;l!==null;){var f=l.next,h=Jx(l,i);h===0?(l.next=null,r===null?pu=f:r.next=f,f===null&&(uo=r)):(r=l,(t!==0||(h&3)!==0)&&(mu=!0)),l=f}qn!==0&&qn!==5||Ul(t),Or!==0&&(Or=0)}function Jx(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-qe(h),T=1<<b,B=f[b];B===-1?((T&r)===0||(T&l)!==0)&&(f[b]=ut(T,i)):B<=i&&(t.expiredLanes|=T),h&=~T}if(i=fn,r=zt,r=ye(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(nn===2||nn===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Qe(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||ke(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&Qe(l),mi(r)){case 2:case 8:r=Me;break;case 32:r=he;break;case 268435456:r=Fe;break;default:r=he}return l=e_.bind(null,t),r=Jt(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&Qe(l),t.callbackPriority=2,t.callbackNode=null,2}function e_(t,i){if(qn!==0&&qn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(hu()&&t.callbackNode!==r)return null;var l=zt;return l=ye(t,t===fn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Px(t,l,i),Jx(t,M()),t.callbackNode!=null&&t.callbackNode===r?e_.bind(null,t):null)}function t_(t,i){if(hu())return null;Px(t,i,!0)}function Nb(){Wb(function(){(Kt&6)!==0?Jt(be,Ob):Qx()})}function ph(){if(Or===0){var t=$s;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),Or=t}return Or}function n_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ln(""+t)}function i_(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function Pb(t,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var h=n_((f[Dn]||null).action),b=l.submitter;b&&(i=(i=b[Dn]||null)?n_(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var T=new wc("action","action",null,l,f);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Or!==0){var B=b?i_(f,b):new FormData(f);Nd(r,{pending:!0,data:B,method:f.method,action:h},null,B)}}else typeof h=="function"&&(T.preventDefault(),B=b?i_(f,b):new FormData(f),Nd(r,{pending:!0,data:B,method:f.method,action:h},h,B))},currentTarget:f}]})}}for(var mh=0;mh<Kf.length;mh++){var gh=Kf[mh],zb=gh.toLowerCase(),Ib=gh[0].toUpperCase()+gh.slice(1);va(zb,"on"+Ib)}va(Nm,"onAnimationEnd"),va(Pm,"onAnimationIteration"),va(zm,"onAnimationStart"),va("dblclick","onDoubleClick"),va("focusin","onFocus"),va("focusout","onBlur"),va(J1,"onTransitionRun"),va(eb,"onTransitionStart"),va(tb,"onTransitionCancel"),va(Im,"onTransitionEnd"),Ve("onMouseEnter",["mouseout","mouseover"]),Ve("onMouseLeave",["mouseout","mouseover"]),Ve("onPointerEnter",["pointerout","pointerover"]),Ve("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ll));function a_(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var T=l[b],B=T.instance,ne=T.currentTarget;if(T=T.listener,B!==h&&f.isPropagationStopped())break e;h=T,f.currentTarget=ne;try{h(f)}catch(ge){Dc(ge)}f.currentTarget=null,h=B}else for(b=0;b<l.length;b++){if(T=l[b],B=T.instance,ne=T.currentTarget,T=T.listener,B!==h&&f.isPropagationStopped())break e;h=T,f.currentTarget=ne;try{h(f)}catch(ge){Dc(ge)}f.currentTarget=null,h=B}}}}function Ot(t,i){var r=i[Va];r===void 0&&(r=i[Va]=new Set);var l=t+"__bubble";r.has(l)||(r_(i,t,2,!1),r.add(l))}function xh(t,i,r){var l=0;i&&(l|=4),r_(r,t,l,i)}var gu="_reactListening"+Math.random().toString(36).slice(2);function _h(t){if(!t[gu]){t[gu]=!0,Y.forEach(function(r){r!=="selectionchange"&&(Bb.has(r)||xh(r,!1,t),xh(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[gu]||(i[gu]=!0,xh("selectionchange",!1,i))}}function r_(t,i,r,l){switch(N_(i)){case 2:var f=dy;break;case 8:f=hy;break;default:f=Oh}r=f.bind(null,i,r,t),f=void 0,!yn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function vh(t,i,r,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var T=l.stateNode.containerInfo;if(T===f)break;if(b===4)for(b=l.return;b!==null;){var B=b.tag;if((B===3||B===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;T!==null;){if(b=xa(T),b===null)return;if(B=b.tag,B===5||B===6||B===26||B===27){l=h=b;continue e}T=T.parentNode}}l=l.return}na(function(){var ne=h,ge=Ti(r),Se=[];e:{var re=Bm.get(t);if(re!==void 0){var fe=wc,Ye=t;switch(t){case"keypress":if(Vi(r)===0)break e;case"keydown":case"keyup":fe=U1;break;case"focusin":Ye="focus",fe=Vf;break;case"focusout":Ye="blur",fe=Vf;break;case"beforeblur":case"afterblur":fe=Vf;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=v1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=N1;break;case Nm:case Pm:case zm:fe=S1;break;case Im:fe=z1;break;case"scroll":case"scrollend":fe=x1;break;case"wheel":fe=B1;break;case"copy":case"cut":case"paste":fe=E1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=mm;break;case"toggle":case"beforetoggle":fe=H1}var ct=(i&4)!==0,cn=!ct&&(t==="scroll"||t==="scrollend"),q=ct?re!==null?re+"Capture":null:re;ct=[];for(var G=ne,ee;G!==null;){var ve=G;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||q===null||(ve=Gi(G,q),ve!=null&&ct.push(Ol(G,ve,ee))),cn)break;G=G.return}0<ct.length&&(re=new fe(re,Ye,null,r,ge),Se.push({event:re,listeners:ct}))}}if((i&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",re&&r!==_a&&(Ye=r.relatedTarget||r.fromElement)&&(xa(Ye)||Ye[ei]))break e;if((fe||re)&&(re=ge.window===ge?ge:(re=ge.ownerDocument)?re.defaultView||re.parentWindow:window,fe?(Ye=r.relatedTarget||r.toElement,fe=ne,Ye=Ye?xa(Ye):null,Ye!==null&&(cn=c(Ye),ct=Ye.tag,Ye!==cn||ct!==5&&ct!==27&&ct!==6)&&(Ye=null)):(fe=null,Ye=ne),fe!==Ye)){if(ct=hm,ve="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(ct=mm,ve="onPointerLeave",q="onPointerEnter",G="pointer"),cn=fe==null?re:W(fe),ee=Ye==null?re:W(Ye),re=new ct(ve,G+"leave",fe,r,ge),re.target=cn,re.relatedTarget=ee,ve=null,xa(ge)===ne&&(ct=new ct(q,G+"enter",Ye,r,ge),ct.target=ee,ct.relatedTarget=cn,ve=ct),cn=ve,fe&&Ye)t:{for(ct=Fb,q=fe,G=Ye,ee=0,ve=q;ve;ve=ct(ve))ee++;ve=0;for(var ot=G;ot;ot=ct(ot))ve++;for(;0<ee-ve;)q=ct(q),ee--;for(;0<ve-ee;)G=ct(G),ve--;for(;ee--;){if(q===G||G!==null&&q===G.alternate){ct=q;break t}q=ct(q),G=ct(G)}ct=null}else ct=null;fe!==null&&s_(Se,re,fe,ct,!1),Ye!==null&&cn!==null&&s_(Se,cn,Ye,ct,!0)}}e:{if(re=ne?W(ne):window,fe=re.nodeName&&re.nodeName.toLowerCase(),fe==="select"||fe==="input"&&re.type==="file")var Wt=Mm;else if(ym(re))if(Em)Wt=Z1;else{Wt=Y1;var Ze=q1}else fe=re.nodeName,!fe||fe.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ne&&tn(ne.elementType)&&(Wt=Mm):Wt=$1;if(Wt&&(Wt=Wt(t,ne))){Sm(Se,Wt,r,ge);break e}Ze&&Ze(t,re,ne),t==="focusout"&&ne&&re.type==="number"&&ne.memoizedProps.value!=null&&Pt(re,"number",re.value)}switch(Ze=ne?W(ne):window,t){case"focusin":(ym(Ze)||Ze.contentEditable==="true")&&(Gs=Ze,Yf=ne,ll=null);break;case"focusout":ll=Yf=Gs=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,Lm(Se,r,ge);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":Lm(Se,r,ge)}var Et;if(kf)e:{switch(t){case"compositionstart":var It="onCompositionStart";break e;case"compositionend":It="onCompositionEnd";break e;case"compositionupdate":It="onCompositionUpdate";break e}It=void 0}else Hs?vm(t,r)&&(It="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(It="onCompositionStart");It&&(gm&&r.locale!=="ko"&&(Hs||It!=="onCompositionStart"?It==="onCompositionEnd"&&Hs&&(Et=Ci()):(Ri=ge,Ua="value"in Ri?Ri.value:Ri.textContent,Hs=!0)),Ze=xu(ne,It),0<Ze.length&&(It=new pm(It,t,null,r,ge),Se.push({event:It,listeners:Ze}),Et?It.data=Et:(Et=bm(r),Et!==null&&(It.data=Et)))),(Et=V1?j1(t,r):k1(t,r))&&(It=xu(ne,"onBeforeInput"),0<It.length&&(Ze=new pm("onBeforeInput","beforeinput",null,r,ge),Se.push({event:Ze,listeners:It}),Ze.data=Et)),Pb(Se,t,ne,r,ge)}a_(Se,i)})}function Ol(t,i,r){return{instance:t,listener:i,currentTarget:r}}function xu(t,i){for(var r=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Gi(t,r),f!=null&&l.unshift(Ol(t,f,h)),f=Gi(t,i),f!=null&&l.push(Ol(t,f,h))),t.tag===3)return l;t=t.return}return[]}function Fb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s_(t,i,r,l,f){for(var h=i._reactName,b=[];r!==null&&r!==l;){var T=r,B=T.alternate,ne=T.stateNode;if(T=T.tag,B!==null&&B===l)break;T!==5&&T!==26&&T!==27||ne===null||(B=ne,f?(ne=Gi(r,h),ne!=null&&b.unshift(Ol(r,ne,B))):f||(ne=Gi(r,h),ne!=null&&b.push(Ol(r,ne,B)))),r=r.return}b.length!==0&&t.push({event:i,listeners:b})}var Hb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function o_(t){return(typeof t=="string"?t:""+t).replace(Hb,`
`).replace(Gb,"")}function l_(t,i){return i=o_(i),o_(t)===i}function ln(t,i,r,l,f,h){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||hn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&hn(t,""+l);break;case"className":Nt(t,"class",l);break;case"tabIndex":Nt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(t,r,l);break;case"style":Mt(t,l,h);break;case"data":if(i!=="object"){Nt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Ln(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(i!=="input"&&ln(t,i,"name",f.name,f,null),ln(t,i,"formEncType",f.formEncType,f,null),ln(t,i,"formMethod",f.formMethod,f,null),ln(t,i,"formTarget",f.formTarget,f,null)):(ln(t,i,"encType",f.encType,f,null),ln(t,i,"method",f.method,f,null),ln(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Ln(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=Bn);break;case"onScroll":l!=null&&Ot("scroll",t);break;case"onScrollEnd":l!=null&&Ot("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Ln(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":Ot("beforetoggle",t),Ot("toggle",t),xt(t,"popover",l);break;case"xlinkActuate":Bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":xt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Wn.get(r)||r,xt(t,r,l))}}function bh(t,i,r,l,f,h){switch(r){case"style":Mt(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?hn(t,l):(typeof l=="number"||typeof l=="bigint")&&hn(t,""+l);break;case"onScroll":l!=null&&Ot("scroll",t);break;case"onScrollEnd":l!=null&&Ot("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Bn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!De.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),h=t[Dn]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,f);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):xt(t,r,l)}}}function di(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ot("error",t),Ot("load",t);var l=!1,f=!1,h;for(h in r)if(r.hasOwnProperty(h)){var b=r[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ln(t,i,h,b,r,null)}}f&&ln(t,i,"srcSet",r.srcSet,r,null),l&&ln(t,i,"src",r.src,r,null);return;case"input":Ot("invalid",t);var T=h=b=f=null,B=null,ne=null;for(l in r)if(r.hasOwnProperty(l)){var ge=r[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":b=ge;break;case"checked":B=ge;break;case"defaultChecked":ne=ge;break;case"value":h=ge;break;case"defaultValue":T=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:ln(t,i,l,ge,r,null)}}at(t,h,T,B,ne,b,f,!1);return;case"select":Ot("invalid",t),l=b=h=null;for(f in r)if(r.hasOwnProperty(f)&&(T=r[f],T!=null))switch(f){case"value":h=T;break;case"defaultValue":b=T;break;case"multiple":l=T;default:ln(t,i,f,T,r,null)}i=h,r=b,t.multiple=!!l,i!=null?Ut(t,!!l,i,!1):r!=null&&Ut(t,!!l,r,!0);return;case"textarea":Ot("invalid",t),h=f=l=null;for(b in r)if(r.hasOwnProperty(b)&&(T=r[b],T!=null))switch(b){case"value":l=T;break;case"defaultValue":f=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:ln(t,i,b,T,r,null)}en(t,l,f,h);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(l=r[B],l!=null))switch(B){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ln(t,i,B,l,r,null)}return;case"dialog":Ot("beforetoggle",t),Ot("toggle",t),Ot("cancel",t),Ot("close",t);break;case"iframe":case"object":Ot("load",t);break;case"video":case"audio":for(l=0;l<Ll.length;l++)Ot(Ll[l],t);break;case"image":Ot("error",t),Ot("load",t);break;case"details":Ot("toggle",t);break;case"embed":case"source":case"link":Ot("error",t),Ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in r)if(r.hasOwnProperty(ne)&&(l=r[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ln(t,i,ne,l,r,null)}return;default:if(tn(i)){for(ge in r)r.hasOwnProperty(ge)&&(l=r[ge],l!==void 0&&bh(t,i,ge,l,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(l=r[T],l!=null&&ln(t,i,T,l,r,null))}function Vb(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,T=null,B=null,ne=null,ge=null;for(fe in r){var Se=r[fe];if(r.hasOwnProperty(fe)&&Se!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":B=Se;default:l.hasOwnProperty(fe)||ln(t,i,fe,null,l,Se)}}for(var re in l){var fe=l[re];if(Se=r[re],l.hasOwnProperty(re)&&(fe!=null||Se!=null))switch(re){case"type":h=fe;break;case"name":f=fe;break;case"checked":ne=fe;break;case"defaultChecked":ge=fe;break;case"value":b=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,i));break;default:fe!==Se&&ln(t,i,re,fe,l,Se)}}Zt(t,b,T,B,ne,ge,h,f);return;case"select":fe=b=T=re=null;for(h in r)if(B=r[h],r.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":fe=B;default:l.hasOwnProperty(h)||ln(t,i,h,null,l,B)}for(f in l)if(h=l[f],B=r[f],l.hasOwnProperty(f)&&(h!=null||B!=null))switch(f){case"value":re=h;break;case"defaultValue":T=h;break;case"multiple":b=h;default:h!==B&&ln(t,i,f,h,l,B)}i=T,r=b,l=fe,re!=null?Ut(t,!!r,re,!1):!!l!=!!r&&(i!=null?Ut(t,!!r,i,!0):Ut(t,!!r,r?[]:"",!1));return;case"textarea":fe=re=null;for(T in r)if(f=r[T],r.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ln(t,i,T,null,l,f)}for(b in l)if(f=l[b],h=r[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":re=f;break;case"defaultValue":fe=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&ln(t,i,b,f,l,h)}Ft(t,re,fe);return;case"option":for(var Ye in r)if(re=r[Ye],r.hasOwnProperty(Ye)&&re!=null&&!l.hasOwnProperty(Ye))switch(Ye){case"selected":t.selected=!1;break;default:ln(t,i,Ye,null,l,re)}for(B in l)if(re=l[B],fe=r[B],l.hasOwnProperty(B)&&re!==fe&&(re!=null||fe!=null))switch(B){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:ln(t,i,B,re,l,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in r)re=r[ct],r.hasOwnProperty(ct)&&re!=null&&!l.hasOwnProperty(ct)&&ln(t,i,ct,null,l,re);for(ne in l)if(re=l[ne],fe=r[ne],l.hasOwnProperty(ne)&&re!==fe&&(re!=null||fe!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:ln(t,i,ne,re,l,fe)}return;default:if(tn(i)){for(var cn in r)re=r[cn],r.hasOwnProperty(cn)&&re!==void 0&&!l.hasOwnProperty(cn)&&bh(t,i,cn,void 0,l,re);for(ge in l)re=l[ge],fe=r[ge],!l.hasOwnProperty(ge)||re===fe||re===void 0&&fe===void 0||bh(t,i,ge,re,l,fe);return}}for(var q in r)re=r[q],r.hasOwnProperty(q)&&re!=null&&!l.hasOwnProperty(q)&&ln(t,i,q,null,l,re);for(Se in l)re=l[Se],fe=r[Se],!l.hasOwnProperty(Se)||re===fe||re==null&&fe==null||ln(t,i,Se,re,l,fe)}function c_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],h=f.transferSize,b=f.initiatorType,T=f.duration;if(h&&T&&c_(b)){for(b=0,T=f.responseEnd,l+=1;l<r.length;l++){var B=r[l],ne=B.startTime;if(ne>T)break;var ge=B.transferSize,Se=B.initiatorType;ge&&c_(Se)&&(B=B.responseEnd,b+=ge*(B<T?1:(T-ne)/(B-ne)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yh=null,Sh=null;function _u(t){return t.nodeType===9?t:t.ownerDocument}function u_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Mh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eh=null;function kb(){var t=window.event;return t&&t.type==="popstate"?t===Eh?!1:(Eh=t,!0):(Eh=null,!1)}var d_=typeof setTimeout=="function"?setTimeout:void 0,Xb=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,Wb=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(t){return h_.resolve(null).then(t).catch(qb)}:d_;function qb(t){setTimeout(function(){throw t})}function Nr(t){return t==="head"}function p_(t,i){var r=i,l=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(f),mo(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Nl(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Nl(r);for(var h=r.firstChild;h;){var b=h.nextSibling,T=h.nodeName;h[ga]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=b}}else r==="body"&&Nl(t.ownerDocument.body);r=f}while(r);mo(i)}function m_(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function Th(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Th(r),es(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Yb(t,i,r,l){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ga])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=ca(t.nextSibling),t===null)break}return null}function $b(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=ca(t.nextSibling),t===null))return null;return t}function g_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=ca(t.nextSibling),t===null))return null;return t}function Ah(t){return t.data==="$?"||t.data==="$~"}function wh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Zb(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ca(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Rh=null;function x_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return ca(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function __(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function v_(t,i,r){switch(i=_u(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Nl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);es(t)}var ua=new Map,b_=new Set;function vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ar=X.d;X.d={f:Kb,r:Qb,D:Jb,C:ey,L:ty,m:ny,X:ay,S:iy,M:ry};function Kb(){var t=ar.f(),i=uu();return t||i}function Qb(t){var i=w(t);i!==null&&i.tag===5&&i.type==="form"?Ig(i):ar.r(t)}var fo=typeof document>"u"?null:document;function y_(t,i,r){var l=fo;if(l&&typeof i=="string"&&i){var f=ft(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),b_.has(f)||(b_.add(f),t={rel:t,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),di(i,"link",t),J(i),l.head.appendChild(i)))}}function Jb(t){ar.D(t),y_("dns-prefetch",t,null)}function ey(t,i){ar.C(t,i),y_("preconnect",t,i)}function ty(t,i,r){ar.L(t,i,r);var l=fo;if(l&&t&&i){var f='link[rel="preload"][as="'+ft(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+ft(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+ft(r.imageSizes)+'"]')):f+='[href="'+ft(t)+'"]';var h=f;switch(i){case"style":h=ho(t);break;case"script":h=po(t)}ua.has(h)||(t=x({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),ua.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Pl(h))||i==="script"&&l.querySelector(zl(h))||(i=l.createElement("link"),di(i,"link",t),J(i),l.head.appendChild(i)))}}function ny(t,i){ar.m(t,i);var r=fo;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ft(l)+'"][href="'+ft(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=po(t)}if(!ua.has(h)&&(t=x({rel:"modulepreload",href:t},i),ua.set(h,t),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(zl(h)))return}l=r.createElement("link"),di(l,"link",t),J(l),r.head.appendChild(l)}}}function iy(t,i,r){ar.S(t,i,r);var l=fo;if(l&&t){var f=se(l).hoistableStyles,h=ho(t);i=i||"default";var b=f.get(h);if(!b){var T={loading:0,preload:null};if(b=l.querySelector(Pl(h)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},r),(r=ua.get(h))&&Ch(t,r);var B=b=l.createElement("link");J(B),di(B,"link",t),B._p=new Promise(function(ne,ge){B.onload=ne,B.onerror=ge}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,bu(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:T},f.set(h,b)}}}function ay(t,i){ar.X(t,i);var r=fo;if(r&&t){var l=se(r).hoistableScripts,f=po(t),h=l.get(f);h||(h=r.querySelector(zl(f)),h||(t=x({src:t,async:!0},i),(i=ua.get(f))&&Dh(t,i),h=r.createElement("script"),J(h),di(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function ry(t,i){ar.M(t,i);var r=fo;if(r&&t){var l=se(r).hoistableScripts,f=po(t),h=l.get(f);h||(h=r.querySelector(zl(f)),h||(t=x({src:t,async:!0,type:"module"},i),(i=ua.get(f))&&Dh(t,i),h=r.createElement("script"),J(h),di(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function S_(t,i,r,l){var f=(f=Z.current)?vu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=ho(r.href),r=se(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ho(r.href);var h=se(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(Pl(t)))&&!h._p&&(b.instance=h,b.state.loading=5),ua.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ua.set(t,r),h||sy(f,t,r,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=po(r),r=se(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function ho(t){return'href="'+ft(t)+'"'}function Pl(t){return'link[rel="stylesheet"]['+t+"]"}function M_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function sy(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),di(i,"link",r),J(i),t.head.appendChild(i))}function po(t){return'[src="'+ft(t)+'"]'}function zl(t){return"script[async]"+t}function E_(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ft(r.href)+'"]');if(l)return i.instance=l,J(l),l;var f=x({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),J(l),di(l,"style",f),bu(l,r.precedence,t),i.instance=l;case"stylesheet":f=ho(r.href);var h=t.querySelector(Pl(f));if(h)return i.state.loading|=4,i.instance=h,J(h),h;l=M_(r),(f=ua.get(f))&&Ch(l,f),h=(t.ownerDocument||t).createElement("link"),J(h);var b=h;return b._p=new Promise(function(T,B){b.onload=T,b.onerror=B}),di(h,"link",l),i.state.loading|=4,bu(h,r.precedence,t),i.instance=h;case"script":return h=po(r.src),(f=t.querySelector(zl(h)))?(i.instance=f,J(f),f):(l=r,(f=ua.get(h))&&(l=x({},r),Dh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),J(f),di(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,bu(l,r.precedence,t));return i.instance}function bu(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var T=l[b];if(T.dataset.precedence===i)h=T;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Ch(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Dh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var yu=null;function T_(t,i,r){if(yu===null){var l=new Map,f=yu=new Map;f.set(r,l)}else f=yu,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var h=r[f];if(!(h[ga]||h[Tn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var T=l.get(b);T?T.push(h):l.set(b,[h])}}return l}function A_(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function oy(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function w_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ly(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=ho(l.href),h=i.querySelector(Pl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Su.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=h,J(h);return}h=i.ownerDocument||i,l=M_(l),(f=ua.get(f))&&Ch(l,f),h=h.createElement("link"),J(h);var b=h;b._p=new Promise(function(T,B){b.onload=T,b.onerror=B}),di(h,"link",l),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Su.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Uh=0;function cy(t,i){return t.stylesheets&&t.count===0&&Eu(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&Eu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Uh===0&&(Uh=62500*jb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Eu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Uh?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Eu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mu=null;function Eu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mu=new Map,i.forEach(uy,t),Mu=null,Su.call(t))}function uy(t,i){if(!(i.state.loading&4)){var r=Mu.get(t);if(r)var l=r.get(null);else{r=new Map,Mu.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),l=b)}l&&r.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=r.get(b)||l,h===l&&r.set(null,f),r.set(b,f),this.count++,l=Su.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Il={$$typeof:D,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function fy(t,i,r,l,f,h,b,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xe(0),this.hiddenUpdates=xe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function R_(t,i,r,l,f,h,b,T,B,ne,ge,Se){return t=new fy(t,i,r,b,B,ne,ge,Se,T),i=1,h===!0&&(i|=24),h=ki(3,null,null,i),t.current=h,h.stateNode=t,i=ud(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:r,cache:i},pd(h),t}function C_(t){return t?(t=ks,t):ks}function D_(t,i,r,l,f,h){f=C_(f),l.context===null?l.context=f:l.pendingContext=f,l=Mr(i),l.payload={element:r},h=h===void 0?null:h,h!==null&&(l.callback=h),r=Er(t,l,i),r!==null&&(Ni(r,t,i),ml(r,t,i))}function U_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Lh(t,i){U_(t,i),(t=t.alternate)&&U_(t,i)}function L_(t){if(t.tag===13||t.tag===31){var i=as(t,67108864);i!==null&&Ni(i,t,67108864),Lh(t,67108864)}}function O_(t){if(t.tag===13||t.tag===31){var i=$i();i=Ct(i);var r=as(t,i);r!==null&&Ni(r,t,i),Lh(t,i)}}var Tu=!0;function dy(t,i,r,l){var f=N.T;N.T=null;var h=X.p;try{X.p=2,Oh(t,i,r,l)}finally{X.p=h,N.T=f}}function hy(t,i,r,l){var f=N.T;N.T=null;var h=X.p;try{X.p=8,Oh(t,i,r,l)}finally{X.p=h,N.T=f}}function Oh(t,i,r,l){if(Tu){var f=Nh(l);if(f===null)vh(t,i,l,Au,r),P_(t,l);else if(my(f,t,i,r,l))l.stopPropagation();else if(P_(t,l),i&4&&-1<py.indexOf(t)){for(;f!==null;){var h=w(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Te(h.pendingLanes);if(b!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var B=1<<31-qe(b);T.entanglements[1]|=B,b&=~B}za(h),(Kt&6)===0&&(lu=M()+500,Ul(0))}}break;case 31:case 13:T=as(h,2),T!==null&&Ni(T,h,2),uu(),Lh(h,2)}if(h=Nh(l),h===null&&vh(t,i,l,Au,r),h===f)break;f=h}f!==null&&l.stopPropagation()}else vh(t,i,l,null,r)}}function Nh(t){return t=Ti(t),Ph(t)}var Au=null;function Ph(t){if(Au=null,t=xa(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=d(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Au=t,null}function N_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case be:return 2;case Me:return 8;case he:case Je:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var zh=!1,Pr=null,zr=null,Ir=null,Bl=new Map,Fl=new Map,Br=[],py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(t,i){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Bl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(i.pointerId)}}function Hl(t,i,r,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=w(i),i!==null&&L_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function my(t,i,r,l,f){switch(i){case"focusin":return Pr=Hl(Pr,t,i,r,l,f),!0;case"dragenter":return zr=Hl(zr,t,i,r,l,f),!0;case"mouseover":return Ir=Hl(Ir,t,i,r,l,f),!0;case"pointerover":var h=f.pointerId;return Bl.set(h,Hl(Bl.get(h)||null,t,i,r,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Fl.set(h,Hl(Fl.get(h)||null,t,i,r,l,f)),!0}return!1}function z_(t){var i=xa(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,Ca(t.priority,function(){O_(r)});return}}else if(i===31){if(i=d(r),i!==null){t.blockedOn=i,Ca(t.priority,function(){O_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Nh(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);_a=l,r.target.dispatchEvent(l),_a=null}else return i=w(r),i!==null&&L_(i),t.blockedOn=r,!1;i.shift()}return!0}function I_(t,i,r){wu(t)&&r.delete(i)}function gy(){zh=!1,Pr!==null&&wu(Pr)&&(Pr=null),zr!==null&&wu(zr)&&(zr=null),Ir!==null&&wu(Ir)&&(Ir=null),Bl.forEach(I_),Fl.forEach(I_)}function Ru(t,i){t.blockedOn===i&&(t.blockedOn=null,zh||(zh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,gy)))}var Cu=null;function B_(t){Cu!==t&&(Cu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Cu===t&&(Cu=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Ph(l||r)===null)continue;break}var h=w(r);h!==null&&(t.splice(i,3),i-=3,Nd(h,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function mo(t){function i(B){return Ru(B,t)}Pr!==null&&Ru(Pr,t),zr!==null&&Ru(zr,t),Ir!==null&&Ru(Ir,t),Bl.forEach(i),Fl.forEach(i);for(var r=0;r<Br.length;r++){var l=Br[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Br.length&&(r=Br[0],r.blockedOn===null);)z_(r),r.blockedOn===null&&Br.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],h=r[l+1],b=f[Dn]||null;if(typeof h=="function")b||B_(r);else if(b){var T=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[Dn]||null)T=b.formAction;else if(Ph(f)!==null)continue}else T=b.action;typeof T=="function"?r[l+1]=T:(r.splice(l,3),l-=3),B_(r)}}}function F_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Ih(t){this._internalRoot=t}Du.prototype.render=Ih.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=$i();D_(r,l,t,i,null,null)},Du.prototype.unmount=Ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;D_(t.current,2,null,t,null,null),uu(),i[ei]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var i=ma();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Br.length&&i!==0&&i<Br[r].priority;r++);Br.splice(r,0,t),r===0&&z_(t)}};var H_=e.version;if(H_!=="19.2.1")throw Error(a(527,H_,"19.2.1"));X.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var xy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Ee=Uu.inject(xy),Ae=Uu}catch{}}return jl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,l="",f=qg,h=Yg,b=$g;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=R_(t,1,!1,null,null,r,l,null,f,h,b,F_),t[ei]=i.current,_h(t),new Ih(i)},jl.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var l=!1,f="",h=qg,b=Yg,T=$g,B=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.formState!==void 0&&(B=r.formState)),i=R_(t,1,!0,i,r??null,l,f,B,h,b,T,F_),i.context=C_(null),r=i.current,l=$i(),l=Ct(l),f=Mr(l),f.callback=null,Er(r,f,l),r=l,i.current.lanes=r,gt(i,r),za(i),t[ei]=i.current,_h(t),new Du(i)},jl.version="19.2.1",jl}var uv;function hS(){if(uv)return qh.exports;uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),qh.exports=dS(),qh.exports}var pS=hS();const mS=B2(pS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="181",gS=0,fv=1,xS=2,F2=1,_S=2,fr=3,Jr=0,Bi=1,Fa=2,pr=0,Lo=1,Oo=2,dv=3,hv=4,vS=5,Ts=100,bS=101,yS=102,SS=103,MS=104,ES=200,TS=201,AS=202,wS=203,V0=204,j0=205,RS=206,CS=207,DS=208,US=209,LS=210,OS=211,NS=212,PS=213,zS=214,k0=0,X0=1,W0=2,Go=3,q0=4,Y0=5,$0=6,Z0=7,H2=0,IS=1,BS=2,Zr=0,FS=1,HS=2,GS=3,VS=4,jS=5,kS=6,XS=7,G2=300,Vo=301,jo=302,K0=303,Q0=304,Pf=306,oc=1e3,Ii=1001,J0=1002,pi=1003,WS=1004,Lu=1005,hi=1006,Kh=1007,Rs=1008,Ga=1009,V2=1010,j2=1011,lc=1012,em=1013,Ns=1014,dr=1015,Ko=1016,tm=1017,nm=1018,cc=1020,k2=35902,X2=35899,W2=1021,q2=1022,Aa=1023,uc=1026,fc=1027,Y2=1028,im=1029,am=1030,rm=1031,sm=1033,rf=33776,sf=33777,of=33778,lf=33779,ep=35840,tp=35841,np=35842,ip=35843,ap=36196,rp=37492,sp=37496,op=37808,lp=37809,cp=37810,up=37811,fp=37812,dp=37813,hp=37814,pp=37815,mp=37816,gp=37817,xp=37818,_p=37819,vp=37820,bp=37821,yp=36492,Sp=36494,Mp=36495,Ep=36283,Tp=36284,Ap=36285,wp=36286,qS=3200,YS=3201,$S=0,ZS=1,qr="",zi="srgb",ko="srgb-linear",vf="linear",un="srgb",go=7680,pv=519,KS=512,QS=513,JS=514,$2=515,e3=516,t3=517,n3=518,i3=519,mv=35044,gv="300 es",Ha=2e3,bf=2001;function Z2(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function dc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function a3(){const s=dc("canvas");return s.style.display="block",s}const xv={};function _v(...s){const e="THREE."+s.shift();console.log(e,...s)}function vt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Rn(...s){const e="THREE."+s.shift();console.error(e,...s)}function hc(...s){const e=s.join(" ");e in xv||(xv[e]=!0,vt(...s))}function r3(s,e,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Qo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qh=Math.PI/180,Rp=180/Math.PI;function Sc(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(_i[s&255]+_i[s>>8&255]+_i[s>>16&255]+_i[s>>24&255]+"-"+_i[e&255]+_i[e>>8&255]+"-"+_i[e>>16&15|64]+_i[e>>24&255]+"-"+_i[n&63|128]+_i[n>>8&255]+"-"+_i[n>>16&255]+_i[n>>24&255]+_i[a&255]+_i[a>>8&255]+_i[a>>16&255]+_i[a>>24&255]).toLowerCase()}function Gt(s,e,n){return Math.max(e,Math.min(n,s))}function s3(s,e){return(s%e+e)%e}function Jh(s,e,n){return(1-n)*s+n*e}function kl(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(e=0,n=0){Xt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Gt(this.x,e.x,n.x),this.y=Gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Gt(this.x,e,n),this.y=Gt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mc{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],x=a[o+3],_=c[u+0],y=c[u+1],E=c[u+2],A=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d>=1){e[n+0]=_,e[n+1]=y,e[n+2]=E,e[n+3]=A;return}if(x!==A||m!==_||p!==y||g!==E){let S=m*_+p*y+g*E+x*A;S<0&&(_=-_,y=-y,E=-E,A=-A,S=-S);let v=1-d;if(S<.9995){const P=Math.acos(S),D=Math.sin(P);v=Math.sin(v*P)/D,d=Math.sin(d*P)/D,m=m*v+_*d,p=p*v+y*d,g=g*v+E*d,x=x*v+A*d}else{m=m*v+_*d,p=p*v+y*d,g=g*v+E*d,x=x*v+A*d;const P=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=P,p*=P,g*=P,x*=P}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],x=c[u],_=c[u+1],y=c[u+2],E=c[u+3];return e[n]=d*E+g*x+m*y-p*_,e[n+1]=m*E+g*_+p*x-d*y,e[n+2]=p*E+g*y+d*_-m*x,e[n+3]=g*E-d*x-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),x=d(c/2),_=m(a/2),y=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=_*g*x+p*y*E,this._y=p*y*x-_*g*E,this._z=p*g*E+_*y*x,this._w=p*g*x-_*y*E;break;case"YXZ":this._x=_*g*x+p*y*E,this._y=p*y*x-_*g*E,this._z=p*g*E-_*y*x,this._w=p*g*x+_*y*E;break;case"ZXY":this._x=_*g*x-p*y*E,this._y=p*y*x+_*g*E,this._z=p*g*E+_*y*x,this._w=p*g*x-_*y*E;break;case"ZYX":this._x=_*g*x-p*y*E,this._y=p*y*x+_*g*E,this._z=p*g*E-_*y*x,this._w=p*g*x+_*y*E;break;case"YZX":this._x=_*g*x+p*y*E,this._y=p*y*x+_*g*E,this._z=p*g*E-_*y*x,this._w=p*g*x-_*y*E;break;case"XZY":this._x=_*g*x-p*y*E,this._y=p*y*x-_*g*E,this._z=p*g*E+_*y*x,this._w=p*g*x+_*y*E;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],x=n[10],_=a+d+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(a>d&&a>x){const y=2*Math.sqrt(1+a-d-x);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-a-x);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-a-d);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,n=0,a=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),x=2*(c*a-u*n);return this.x=n+m*p+u*x-d*g,this.y=a+m*g+d*p-c*x,this.z=o+m*x+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Gt(this.x,e.x,n.x),this.y=Gt(this.y,e.y,n.y),this.z=Gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Gt(this.x,e,n),this.y=Gt(this.y,e,n),this.z=Gt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return e0.copy(this).projectOnVector(e),this.sub(e0)}reflect(e){return this.sub(e0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const e0=new ue,vv=new Mc;class Tt{constructor(e,n,a,o,c,u,d,m,p){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],x=a[7],_=a[2],y=a[5],E=a[8],A=o[0],S=o[3],v=o[6],P=o[1],D=o[4],z=o[7],V=o[2],O=o[5],F=o[8];return c[0]=u*A+d*P+m*V,c[3]=u*S+d*D+m*O,c[6]=u*v+d*z+m*F,c[1]=p*A+g*P+x*V,c[4]=p*S+g*D+x*O,c[7]=p*v+g*z+x*F,c[2]=_*A+y*P+E*V,c[5]=_*S+y*D+E*O,c[8]=_*v+y*z+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*u-d*p,_=d*m-g*c,y=p*c-u*m,E=n*x+a*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(o*p-g*a)*A,e[2]=(d*a-o*u)*A,e[3]=_*A,e[4]=(g*n-o*m)*A,e[5]=(o*c-d*n)*A,e[6]=y*A,e[7]=(a*m-p*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(t0.makeScale(e,n)),this}rotate(e){return this.premultiply(t0.makeRotation(-e)),this}translate(e,n){return this.premultiply(t0.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const t0=new Tt,bv=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yv=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o3(){const s={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===un&&(o.r=mr(o.r),o.g=mr(o.g),o.b=mr(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===un&&(o.r=No(o.r),o.g=No(o.g),o.b=No(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qr?vf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return hc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return hc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[ko]:{primaries:e,whitePoint:a,transfer:vf,toXYZ:bv,fromXYZ:yv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zi},outputColorSpaceConfig:{drawingBufferColorSpace:zi}},[zi]:{primaries:e,whitePoint:a,transfer:un,toXYZ:bv,fromXYZ:yv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zi}}}),s}const Yt=o3();function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function No(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xo;class l3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{xo===void 0&&(xo=dc("canvas")),xo.width=e.width,xo.height=e.height;const o=xo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=xo}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dc("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=mr(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(mr(n[a]/255)*255):n[a]=mr(n[a]);return{data:n,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c3=0;class om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c3++}),this.uuid=Sc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(n0(o[u].image)):c.push(n0(o[u]))}else c=n0(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function n0(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l3.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let u3=0;const i0=new ue;class ai extends Qo{constructor(e=ai.DEFAULT_IMAGE,n=ai.DEFAULT_MAPPING,a=Ii,o=Ii,c=hi,u=Rs,d=Aa,m=Ga,p=ai.DEFAULT_ANISOTROPY,g=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u3++}),this.uuid=Sc(),this.name="",this.source=new om(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(i0).x}get height(){return this.source.getSize(i0).y}get depth(){return this.source.getSize(i0).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){vt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){vt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case J0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case J0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=G2;ai.DEFAULT_ANISOTROPY=1;class Cn{constructor(e=0,n=0,a=0,o=1){Cn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],x=m[8],_=m[1],y=m[5],E=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,z=(y+1)/2,V=(v+1)/2,O=(g+_)/4,F=(x+A)/4,ie=(E+S)/4;return D>z&&D>V?D<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(D),o=O/a,c=F/a):z>V?z<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(z),a=O/o,c=ie/o):V<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(V),a=F/c,o=ie/c),this.set(a,o,c,n),this}let P=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(x-A)/P,this.z=(_-g)/P,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Gt(this.x,e.x,n.x),this.y=Gt(this.y,e.y,n.y),this.z=Gt(this.z,e.z,n.z),this.w=Gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Gt(this.x,e,n),this.y=Gt(this.y,e,n),this.z=Gt(this.z,e,n),this.w=Gt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f3 extends Qo{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new Cn(0,0,e,n),this.scissorTest=!1,this.viewport=new Cn(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new ai(o);this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new om(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends f3{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class K2 extends ai{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d3 extends ai{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ec{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Sa.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Sa.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Sa.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Sa):Sa.fromBufferAttribute(c,u),Sa.applyMatrix4(e.matrixWorld),this.expandByPoint(Sa);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ou.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ou.copy(a.boundingBox)),Ou.applyMatrix4(e.matrixWorld),this.union(Ou)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sa),Sa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xl),Nu.subVectors(this.max,Xl),_o.subVectors(e.a,Xl),vo.subVectors(e.b,Xl),bo.subVectors(e.c,Xl),Hr.subVectors(vo,_o),Gr.subVectors(bo,vo),_s.subVectors(_o,bo);let n=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-_s.z,_s.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,_s.z,0,-_s.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-_s.y,_s.x,0];return!a0(n,_o,vo,bo,Nu)||(n=[1,0,0,0,1,0,0,0,1],!a0(n,_o,vo,bo,Nu))?!1:(Pu.crossVectors(Hr,Gr),n=[Pu.x,Pu.y,Pu.z],a0(n,_o,vo,bo,Nu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Sa=new ue,Ou=new Ec,_o=new ue,vo=new ue,bo=new ue,Hr=new ue,Gr=new ue,_s=new ue,Xl=new ue,Nu=new ue,Pu=new ue,vs=new ue;function a0(s,e,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){vs.fromArray(s,c);const d=o.x*Math.abs(vs.x)+o.y*Math.abs(vs.y)+o.z*Math.abs(vs.z),m=e.dot(vs),p=n.dot(vs),g=a.dot(vs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const h3=new Ec,Wl=new ue,r0=new ue;class Tc{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):h3.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wl.subVectors(e,this.center);const n=Wl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Wl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(r0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wl.copy(e.center).add(r0)),this.expandByPoint(Wl.copy(e.center).sub(r0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sr=new ue,s0=new ue,zu=new ue,Vr=new ue,o0=new ue,Iu=new ue,l0=new ue;class zf{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){s0.copy(e).add(n).multiplyScalar(.5),zu.copy(n).sub(e).normalize(),Vr.copy(this.origin).sub(s0);const c=e.distanceTo(n)*.5,u=-this.direction.dot(zu),d=Vr.dot(this.direction),m=-Vr.dot(zu),p=Vr.lengthSq(),g=Math.abs(1-u*u);let x,_,y,E;if(g>0)if(x=u*m-d,_=u*d-m,E=c*g,x>=0)if(_>=-E)if(_<=E){const A=1/g;x*=A,_*=A,y=x*(x+u*_+2*d)+_*(u*x+_+2*m)+p}else _=c,x=Math.max(0,-(u*_+d)),y=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(u*_+d)),y=-x*x+_*(_+2*m)+p;else _<=-E?(x=Math.max(0,-(-u*c+d)),_=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+p):_<=E?(x=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(x=Math.max(0,-(u*c+d)),_=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+p);else _=u>0?-c:c,x=Math.max(0,-(u*_+d)),y=-x*x+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(s0).addScaledVector(zu,_),y}intersectSphere(e,n){sr.subVectors(e.center,this.origin);const a=sr.dot(this.direction),o=sr.dot(sr)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),x>=0?(d=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,a,o,c){o0.subVectors(n,e),Iu.subVectors(a,e),l0.crossVectors(o0,Iu);let u=this.direction.dot(l0),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Vr.subVectors(this.origin,e);const m=d*this.direction.dot(Iu.crossVectors(Vr,Iu));if(m<0)return null;const p=d*this.direction.dot(o0.cross(Vr));if(p<0||m+p>u)return null;const g=-d*Vr.dot(l0);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(e,n,a,o,c,u,d,m,p,g,x,_,y,E,A,S){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,x,_,y,E,A,S)}set(e,n,a,o,c,u,d,m,p,g,x,_,y,E,A,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=u,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=y,v[7]=E,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/yo.setFromMatrixColumn(e,0).length(),c=1/yo.setFromMatrixColumn(e,1).length(),u=1/yo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=u*g,y=u*x,E=d*g,A=d*x;n[0]=m*g,n[4]=-m*x,n[8]=p,n[1]=y+E*p,n[5]=_-A*p,n[9]=-d*m,n[2]=A-_*p,n[6]=E+y*p,n[10]=u*m}else if(e.order==="YXZ"){const _=m*g,y=m*x,E=p*g,A=p*x;n[0]=_+A*d,n[4]=E*d-y,n[8]=u*p,n[1]=u*x,n[5]=u*g,n[9]=-d,n[2]=y*d-E,n[6]=A+_*d,n[10]=u*m}else if(e.order==="ZXY"){const _=m*g,y=m*x,E=p*g,A=p*x;n[0]=_-A*d,n[4]=-u*x,n[8]=E+y*d,n[1]=y+E*d,n[5]=u*g,n[9]=A-_*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const _=u*g,y=u*x,E=d*g,A=d*x;n[0]=m*g,n[4]=E*p-y,n[8]=_*p+A,n[1]=m*x,n[5]=A*p+_,n[9]=y*p-E,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const _=u*m,y=u*p,E=d*m,A=d*p;n[0]=m*g,n[4]=A-_*x,n[8]=E*x+y,n[1]=x,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*x+E,n[10]=_-A*x}else if(e.order==="XZY"){const _=u*m,y=u*p,E=d*m,A=d*p;n[0]=m*g,n[4]=-x,n[8]=p*g,n[1]=_*x+A,n[5]=u*g,n[9]=y*x-E,n[2]=E*x-y,n[6]=d*g,n[10]=A*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p3,e,m3)}lookAt(e,n,a){const o=this.elements;return Zi.subVectors(e,n),Zi.lengthSq()===0&&(Zi.z=1),Zi.normalize(),jr.crossVectors(a,Zi),jr.lengthSq()===0&&(Math.abs(a.z)===1?Zi.x+=1e-4:Zi.z+=1e-4,Zi.normalize(),jr.crossVectors(a,Zi)),jr.normalize(),Bu.crossVectors(Zi,jr),o[0]=jr.x,o[4]=Bu.x,o[8]=Zi.x,o[1]=jr.y,o[5]=Bu.y,o[9]=Zi.y,o[2]=jr.z,o[6]=Bu.z,o[10]=Zi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],x=a[5],_=a[9],y=a[13],E=a[2],A=a[6],S=a[10],v=a[14],P=a[3],D=a[7],z=a[11],V=a[15],O=o[0],F=o[4],ie=o[8],C=o[12],R=o[1],j=o[5],te=o[9],le=o[13],pe=o[2],$=o[6],N=o[10],X=o[14],k=o[3],de=o[7],me=o[11],U=o[15];return c[0]=u*O+d*R+m*pe+p*k,c[4]=u*F+d*j+m*$+p*de,c[8]=u*ie+d*te+m*N+p*me,c[12]=u*C+d*le+m*X+p*U,c[1]=g*O+x*R+_*pe+y*k,c[5]=g*F+x*j+_*$+y*de,c[9]=g*ie+x*te+_*N+y*me,c[13]=g*C+x*le+_*X+y*U,c[2]=E*O+A*R+S*pe+v*k,c[6]=E*F+A*j+S*$+v*de,c[10]=E*ie+A*te+S*N+v*me,c[14]=E*C+A*le+S*X+v*U,c[3]=P*O+D*R+z*pe+V*k,c[7]=P*F+D*j+z*$+V*de,c[11]=P*ie+D*te+z*N+V*me,c[15]=P*C+D*le+z*X+V*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],_=e[10],y=e[14],E=e[3],A=e[7],S=e[11],v=e[15];return E*(+c*m*x-o*p*x-c*d*_+a*p*_+o*d*y-a*m*y)+A*(+n*m*y-n*p*_+c*u*_-o*u*y+o*p*g-c*m*g)+S*(+n*p*x-n*d*y-c*u*x+a*u*y+c*d*g-a*p*g)+v*(-o*d*g-n*m*x+n*d*_+o*u*x-a*u*_+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],_=e[10],y=e[11],E=e[12],A=e[13],S=e[14],v=e[15],P=x*S*p-A*_*p+A*m*y-d*S*y-x*m*v+d*_*v,D=E*_*p-g*S*p-E*m*y+u*S*y+g*m*v-u*_*v,z=g*A*p-E*x*p+E*d*y-u*A*y-g*d*v+u*x*v,V=E*x*m-g*A*m-E*d*_+u*A*_+g*d*S-u*x*S,O=n*P+a*D+o*z+c*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=P*F,e[1]=(A*_*c-x*S*c-A*o*y+a*S*y+x*o*v-a*_*v)*F,e[2]=(d*S*c-A*m*c+A*o*p-a*S*p-d*o*v+a*m*v)*F,e[3]=(x*m*c-d*_*c-x*o*p+a*_*p+d*o*y-a*m*y)*F,e[4]=D*F,e[5]=(g*S*c-E*_*c+E*o*y-n*S*y-g*o*v+n*_*v)*F,e[6]=(E*m*c-u*S*c-E*o*p+n*S*p+u*o*v-n*m*v)*F,e[7]=(u*_*c-g*m*c+g*o*p-n*_*p-u*o*y+n*m*y)*F,e[8]=z*F,e[9]=(E*x*c-g*A*c-E*a*y+n*A*y+g*a*v-n*x*v)*F,e[10]=(u*A*c-E*d*c+E*a*p-n*A*p-u*a*v+n*d*v)*F,e[11]=(g*d*c-u*x*c-g*a*p+n*x*p+u*a*y-n*d*y)*F,e[12]=V*F,e[13]=(g*A*o-E*x*o+E*a*_-n*A*_-g*a*S+n*x*S)*F,e[14]=(E*d*o-u*A*o-E*a*m+n*A*m+u*a*S-n*d*S)*F,e[15]=(u*x*o-g*d*o+g*a*m-n*x*m-u*a*_+n*d*_)*F,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,x=d+d,_=c*p,y=c*g,E=c*x,A=u*g,S=u*x,v=d*x,P=m*p,D=m*g,z=m*x,V=a.x,O=a.y,F=a.z;return o[0]=(1-(A+v))*V,o[1]=(y+z)*V,o[2]=(E-D)*V,o[3]=0,o[4]=(y-z)*O,o[5]=(1-(_+v))*O,o[6]=(S+P)*O,o[7]=0,o[8]=(E+D)*F,o[9]=(S-P)*F,o[10]=(1-(_+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=yo.set(o[0],o[1],o[2]).length();const u=yo.set(o[4],o[5],o[6]).length(),d=yo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Ma.copy(this);const p=1/c,g=1/u,x=1/d;return Ma.elements[0]*=p,Ma.elements[1]*=p,Ma.elements[2]*=p,Ma.elements[4]*=g,Ma.elements[5]*=g,Ma.elements[6]*=g,Ma.elements[8]*=x,Ma.elements[9]*=x,Ma.elements[10]*=x,n.setFromRotationMatrix(Ma),a.x=c,a.y=u,a.z=d,this}makePerspective(e,n,a,o,c,u,d=Ha,m=!1){const p=this.elements,g=2*c/(n-e),x=2*c/(a-o),_=(n+e)/(n-e),y=(a+o)/(a-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(d===Ha)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===bf)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=Ha,m=!1){const p=this.elements,g=2/(n-e),x=2/(a-o),_=-(n+e)/(n-e),y=-(a+o)/(a-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(d===Ha)E=-2/(u-c),A=-(u+c)/(u-c);else if(d===bf)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const yo=new ue,Ma=new xn,p3=new ue(0,0,0),m3=new ue(1,1,1),jr=new ue,Bu=new ue,Zi=new ue,Sv=new xn,Mv=new Mc;class xr{constructor(e=0,n=0,a=0,o=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],x=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Gt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mv.setFromEuler(this),this.setFromQuaternion(Mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g3=0;const Ev=new ue,So=new Mc,or=new xn,Fu=new ue,ql=new ue,x3=new ue,_3=new Mc,Tv=new ue(1,0,0),Av=new ue(0,1,0),wv=new ue(0,0,1),Rv={type:"added"},v3={type:"removed"},Mo={type:"childadded",child:null},c0={type:"childremoved",child:null};class $n extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g3++}),this.uuid=Sc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new ue,n=new xr,a=new Mc,o=new ue(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xn},normalMatrix:{value:new Tt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.multiply(So),this}rotateOnWorldAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.premultiply(So),this}rotateX(e){return this.rotateOnAxis(Tv,e)}rotateY(e){return this.rotateOnAxis(Av,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,n){return Ev.copy(e).applyQuaternion(this.quaternion),this.position.add(Ev.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tv,e)}translateY(e){return this.translateOnAxis(Av,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Fu.copy(e):Fu.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ql,Fu,this.up):or.lookAt(Fu,ql,this.up),this.quaternion.setFromRotationMatrix(or),o&&(or.extractRotation(o.matrixWorld),So.setFromRotationMatrix(or),this.quaternion.premultiply(So.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Rn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rv),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null):Rn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(v3),c0.child=e,this.dispatchEvent(c0),c0.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rv),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,e,x3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,_3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),x=u(e.shapes),_=u(e.skeletons),y=u(e.animations),E=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}$n.DEFAULT_UP=new ue(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ea=new ue,lr=new ue,u0=new ue,cr=new ue,Eo=new ue,To=new ue,Cv=new ue,f0=new ue,d0=new ue,h0=new ue,p0=new Cn,m0=new Cn,g0=new Cn;class Ta{constructor(e=new ue,n=new ue,a=new ue){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Ea.subVectors(e,n),o.cross(Ea);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Ea.subVectors(o,n),lr.subVectors(a,n),u0.subVectors(e,n);const u=Ea.dot(Ea),d=Ea.dot(lr),m=Ea.dot(u0),p=lr.dot(lr),g=lr.dot(u0),x=u*p-d*d;if(x===0)return c.set(0,0,0),null;const _=1/x,y=(p*m-d*g)*_,E=(u*g-d*m)*_;return c.set(1-y-E,E,y)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,cr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,cr.x),m.addScaledVector(u,cr.y),m.addScaledVector(d,cr.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return p0.setScalar(0),m0.setScalar(0),g0.setScalar(0),p0.fromBufferAttribute(e,n),m0.fromBufferAttribute(e,a),g0.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(p0,c.x),u.addScaledVector(m0,c.y),u.addScaledVector(g0,c.z),u}static isFrontFacing(e,n,a,o){return Ea.subVectors(a,n),lr.subVectors(e,n),Ea.cross(lr).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ea.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Ea.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ta.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ta.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Ta.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Ta.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ta.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;Eo.subVectors(o,a),To.subVectors(c,a),f0.subVectors(e,a);const m=Eo.dot(f0),p=To.dot(f0);if(m<=0&&p<=0)return n.copy(a);d0.subVectors(e,o);const g=Eo.dot(d0),x=To.dot(d0);if(g>=0&&x<=g)return n.copy(o);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(Eo,u);h0.subVectors(e,c);const y=Eo.dot(h0),E=To.dot(h0);if(E>=0&&y<=E)return n.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(a).addScaledVector(To,d);const S=g*E-y*x;if(S<=0&&x-g>=0&&y-E>=0)return Cv.subVectors(c,o),d=(x-g)/(x-g+(y-E)),n.copy(o).addScaledVector(Cv,d);const v=1/(S+A+_);return u=A*v,d=_*v,n.copy(a).addScaledVector(Eo,u).addScaledVector(To,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},Hu={h:0,s:0,l:0};function x0(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class At{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Yt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Yt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Yt.workingColorSpace){if(e=s3(e,1),n=Gt(n,0,1),a=Gt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=x0(u,c,e+1/3),this.g=x0(u,c,e),this.b=x0(u,c,e-1/3)}return Yt.colorSpaceToWorking(this,o),this}setStyle(e,n=zi){function a(c){c!==void 0&&parseFloat(c)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zi){const a=Q2[e.toLowerCase()];return a!==void 0?this.setHex(a,n):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zi){return Yt.workingToColorSpace(vi.copy(this),e),Math.round(Gt(vi.r*255,0,255))*65536+Math.round(Gt(vi.g*255,0,255))*256+Math.round(Gt(vi.b*255,0,255))}getHexString(e=zi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Yt.workingColorSpace){Yt.workingToColorSpace(vi.copy(this),n);const a=vi.r,o=vi.g,c=vi.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const x=u-d;switch(p=g<=.5?x/(u+d):x/(2-u-d),u){case a:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-a)/x+2;break;case c:m=(a-o)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Yt.workingColorSpace){return Yt.workingToColorSpace(vi.copy(this),n),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=zi){Yt.workingToColorSpace(vi.copy(this),e);const n=vi.r,a=vi.g,o=vi.b;return e!==zi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+n,kr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(kr),e.getHSL(Hu);const a=Jh(kr.h,Hu.h,n),o=Jh(kr.s,Hu.s,n),c=Jh(kr.l,Hu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new At;At.NAMES=Q2;let b3=0;class Jo extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b3++}),this.uuid=Sc(),this.name="",this.type="Material",this.blending=Lo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=V0,this.blendDst=j0,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){vt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){vt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(a.blending=this.blending),this.side!==Jr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==V0&&(a.blendSrc=this.blendSrc),this.blendDst!==j0&&(a.blendDst=this.blendDst),this.blendEquation!==Ts&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(a.stencilFail=this.stencilFail),this.stencilZFail!==go&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qi extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=H2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jn=new ue,Gu=new Xt;let y3=0;class kn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=mv,this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Gu.fromBufferAttribute(this,n),Gu.applyMatrix3(e),this.setXY(n,Gu.x,Gu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.applyMatrix3(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.applyMatrix4(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.applyNormalMatrix(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.transformDirection(e),this.setXYZ(n,jn.x,jn.y,jn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=kl(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Pi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=kl(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=kl(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=kl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=kl(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Pi(n,this.array),a=Pi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Pi(n,this.array),a=Pi(a,this.array),o=Pi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Pi(n,this.array),a=Pi(a,this.array),o=Pi(o,this.array),c=Pi(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mv&&(e.usage=this.usage),e}}class J2 extends kn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class e1 extends kn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class gr extends kn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let S3=0;const fa=new xn,_0=new $n,Ao=new ue,Ki=new Ec,Yl=new Ec,ni=new ue;class Ji extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S3++}),this.uuid=Sc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z2(e)?e1:J2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Tt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fa.makeRotationFromQuaternion(e),this.applyMatrix4(fa),this}rotateX(e){return fa.makeRotationX(e),this.applyMatrix4(fa),this}rotateY(e){return fa.makeRotationY(e),this.applyMatrix4(fa),this}rotateZ(e){return fa.makeRotationZ(e),this.applyMatrix4(fa),this}translate(e,n,a){return fa.makeTranslation(e,n,a),this.applyMatrix4(fa),this}scale(e,n,a){return fa.makeScale(e,n,a),this.applyMatrix4(fa),this}lookAt(e){return _0.lookAt(e),_0.updateMatrix(),this.applyMatrix4(_0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gr(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ec);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Ki.setFromBufferAttribute(c),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const a=this.boundingSphere.center;if(Ki.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Yl.setFromBufferAttribute(d),this.morphTargetsRelative?(ni.addVectors(Ki.min,Yl.min),Ki.expandByPoint(ni),ni.addVectors(Ki.max,Yl.max),Ki.expandByPoint(ni)):(Ki.expandByPoint(Yl.min),Ki.expandByPoint(Yl.max))}Ki.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)ni.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(ni));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)ni.fromBufferAttribute(d,p),m&&(Ao.fromBufferAttribute(e,p),ni.add(Ao)),o=Math.max(o,a.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let ie=0;ie<a.count;ie++)d[ie]=new ue,m[ie]=new ue;const p=new ue,g=new ue,x=new ue,_=new Xt,y=new Xt,E=new Xt,A=new ue,S=new ue;function v(ie,C,R){p.fromBufferAttribute(a,ie),g.fromBufferAttribute(a,C),x.fromBufferAttribute(a,R),_.fromBufferAttribute(c,ie),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,R),g.sub(p),x.sub(p),y.sub(_),E.sub(_);const j=1/(y.x*E.y-E.x*y.y);isFinite(j)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(j),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(j),d[ie].add(A),d[C].add(A),d[R].add(A),m[ie].add(S),m[C].add(S),m[R].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let ie=0,C=P.length;ie<C;++ie){const R=P[ie],j=R.start,te=R.count;for(let le=j,pe=j+te;le<pe;le+=3)v(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const D=new ue,z=new ue,V=new ue,O=new ue;function F(ie){V.fromBufferAttribute(o,ie),O.copy(V);const C=d[ie];D.copy(C),D.sub(V.multiplyScalar(V.dot(C))).normalize(),z.crossVectors(O,C);const j=z.dot(m[ie])<0?-1:1;u.setXYZW(ie,D.x,D.y,D.z,j)}for(let ie=0,C=P.length;ie<C;++ie){const R=P[ie],j=R.start,te=R.count;for(let le=j,pe=j+te;le<pe;le+=3)F(e.getX(le+0)),F(e.getX(le+1)),F(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,y=a.count;_<y;_++)a.setXYZ(_,0,0,0);const o=new ue,c=new ue,u=new ue,d=new ue,m=new ue,p=new ue,g=new ue,x=new ue;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),A=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),d.fromBufferAttribute(a,E),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,S),d.add(g),m.add(g),p.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)ni.fromBufferAttribute(e,n),ni.normalize(),e.setXYZ(n,ni.x,ni.y,ni.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,_=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let v=0;v<g;v++)_[E++]=p[y++]}return new kn(_,g,x)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ji,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const _=p[g],y=e(_,a);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const y=p[x];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,y=x.length;_<y;_++)g.push(x[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dv=new xn,bs=new zf,Vu=new Tc,Uv=new ue,ju=new ue,ku=new ue,Xu=new ue,v0=new ue,Wu=new ue,Lv=new ue,qu=new ue;class En extends $n{constructor(e=new Ji,n=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Wu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&(v0.fromBufferAttribute(x,e),u?Wu.addScaledVector(v0,g):Wu.addScaledVector(v0.sub(n),g))}n.add(Wu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Vu.copy(a.boundingSphere),Vu.applyMatrix4(c),bs.copy(e.ray).recast(e.near),!(Vu.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Vu,Uv)===null||bs.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Dv.copy(c).invert(),bs.copy(e.ray).applyMatrix4(Dv),!(a.boundingBox!==null&&bs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,bs)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const S=_[E],v=u[S.materialIndex],P=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let z=P,V=D;z<V;z+=3){const O=d.getX(z),F=d.getX(z+1),ie=d.getX(z+2);o=Yu(this,v,e,a,p,g,x,O,F,ie),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,v=A;S<v;S+=3){const P=d.getX(S),D=d.getX(S+1),z=d.getX(S+2);o=Yu(this,u,e,a,p,g,x,P,D,z),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const S=_[E],v=u[S.materialIndex],P=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let z=P,V=D;z<V;z+=3){const O=z,F=z+1,ie=z+2;o=Yu(this,v,e,a,p,g,x,O,F,ie),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,v=A;S<v;S+=3){const P=S,D=S+1,z=S+2;o=Yu(this,u,e,a,p,g,x,P,D,z),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function M3(s,e,n,a,o,c,u,d){let m;if(e.side===Bi?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Jr,d),m===null)return null;qu.copy(d),qu.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(qu);return p<n.near||p>n.far?null:{distance:p,point:qu.clone(),object:s}}function Yu(s,e,n,a,o,c,u,d,m,p){s.getVertexPosition(d,ju),s.getVertexPosition(m,ku),s.getVertexPosition(p,Xu);const g=M3(s,e,n,a,ju,ku,Xu,Lv);if(g){const x=new ue;Ta.getBarycoord(Lv,ju,ku,Xu,x),o&&(g.uv=Ta.getInterpolatedAttribute(o,d,m,p,x,new Xt)),c&&(g.uv1=Ta.getInterpolatedAttribute(c,d,m,p,x,new Xt)),u&&(g.normal=Ta.getInterpolatedAttribute(u,d,m,p,x,new ue),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new ue,materialIndex:0};Ta.getNormal(ju,ku,Xu,_.normal),g.face=_,g.barycoord=x}return g}class Ac extends Ji{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],x=[];let _=0,y=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,o,u,2),E("x","z","y",1,-1,e,a,-n,o,u,3),E("x","y","z",1,-1,e,n,a,o,c,4),E("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new gr(p,3)),this.setAttribute("normal",new gr(g,3)),this.setAttribute("uv",new gr(x,2));function E(A,S,v,P,D,z,V,O,F,ie,C){const R=z/F,j=V/ie,te=z/2,le=V/2,pe=O/2,$=F+1,N=ie+1;let X=0,k=0;const de=new ue;for(let me=0;me<N;me++){const U=me*j-le;for(let ae=0;ae<$;ae++){const K=ae*R-te;de[A]=K*P,de[S]=U*D,de[v]=pe,p.push(de.x,de.y,de.z),de[A]=0,de[S]=0,de[v]=O>0?1:-1,g.push(de.x,de.y,de.z),x.push(ae/F),x.push(1-me/ie),X+=1}}for(let me=0;me<ie;me++)for(let U=0;U<F;U++){const ae=_+U+$*me,K=_+U+$*(me+1),_e=_+(U+1)+$*(me+1),Re=_+(U+1)+$*me;m.push(ae,K,Re),m.push(K,_e,Re),k+=6}d.addGroup(y,k,C),y+=k,_+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function Si(s){const e={};for(let n=0;n<s.length;n++){const a=Xo(s[n]);for(const o in a)e[o]=a[o]}return e}function E3(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function t1(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const T3={clone:Xo,merge:Si};var A3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A3,this.fragmentShader=w3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=E3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class n1 extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Ha,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new ue,Ov=new Xt,Nv=new Xt;class da extends n1{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rp*2*Math.atan(Math.tan(Qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,n){return this.getViewBounds(e,Ov,Nv),n.subVectors(Nv,Ov)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,Ro=1;class R3 extends $n{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new da(wo,Ro,e,n);o.layers=this.layers,this.add(o);const c=new da(wo,Ro,e,n);c.layers=this.layers,this.add(c);const u=new da(wo,Ro,e,n);u.layers=this.layers,this.add(u);const d=new da(wo,Ro,e,n);d.layers=this.layers,this.add(d);const m=new da(wo,Ro,e,n);m.layers=this.layers,this.add(m);const p=new da(wo,Ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===Ha)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bf)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(x,_,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class i1 extends ai{constructor(e=[],n=Vo,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C3 extends Ps{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new i1(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ac(5,5,5),c=new bi({name:"CubemapFromEquirect",uniforms:Xo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Bi,blending:pr});c.uniforms.tEquirect.value=n;const u=new En(o,c),d=n.minFilter;return n.minFilter===Rs&&(n.minFilter=hi),new R3(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class Yr extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D3={type:"move"};class b0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,a),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&_>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(D3)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Yr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class yf{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new At(e),this.near=n,this.far=a}clone(){return new yf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class U3 extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class L3 extends ai{constructor(e=null,n=1,a=1,o,c,u,d,m,p=pi,g=pi,x,_){super(null,u,d,m,p,g,o,c,x,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $u extends kn{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const y0=new ue,O3=new ue,N3=new Tt;class Es{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=y0.subVectors(a,n).cross(O3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(y0),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||N3.getNormalMatrix(e),o=this.coplanarPoint(y0).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Tc,P3=new Xt(.5,.5),Zu=new ue;class If{constructor(e=new Es,n=new Es,a=new Es,o=new Es,c=new Es,u=new Es){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Ha,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],y=c[7],E=c[8],A=c[9],S=c[10],v=c[11],P=c[12],D=c[13],z=c[14],V=c[15];if(o[0].setComponents(p-u,y-g,v-E,V-P).normalize(),o[1].setComponents(p+u,y+g,v+E,V+P).normalize(),o[2].setComponents(p+d,y+x,v+A,V+D).normalize(),o[3].setComponents(p-d,y-x,v-A,V-D).normalize(),a)o[4].setComponents(m,_,S,z).normalize(),o[5].setComponents(p-m,y-_,v-S,V-z).normalize();else if(o[4].setComponents(p-m,y-_,v-S,V-z).normalize(),n===Ha)o[5].setComponents(p+m,y+_,v+S,V+z).normalize();else if(n===bf)o[5].setComponents(m,_,S,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const n=P3.distanceTo(e.center);return ys.radius=.7071067811865476+n,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Zu.x=o.normal.x>0?e.max.x:e.min.x,Zu.y=o.normal.y>0?e.max.y:e.min.y,Zu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z3 extends Jo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sf=new ue,Mf=new ue,Pv=new xn,$l=new zf,Ku=new Tc,S0=new ue,zv=new ue;class I3 extends $n{constructor(e=new Ji,n=new z3){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)Sf.fromBufferAttribute(n,o-1),Mf.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=Sf.distanceTo(Mf);e.setAttribute("lineDistance",new gr(a,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ku.copy(a.boundingSphere),Ku.applyMatrix4(o),Ku.radius+=c,e.ray.intersectsSphere(Ku)===!1)return;Pv.copy(o).invert(),$l.copy(e.ray).applyMatrix4(Pv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let A=y,S=E-1;A<S;A+=p){const v=g.getX(A),P=g.getX(A+1),D=Qu(this,e,$l,m,v,P,A);D&&n.push(D)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(y),v=Qu(this,e,$l,m,A,S,E-1);v&&n.push(v)}}else{const y=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let A=y,S=E-1;A<S;A+=p){const v=Qu(this,e,$l,m,A,A+1,A);v&&n.push(v)}if(this.isLineLoop){const A=Qu(this,e,$l,m,E-1,y,E-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Qu(s,e,n,a,o,c,u){const d=s.geometry.attributes.position;if(Sf.fromBufferAttribute(d,o),Mf.fromBufferAttribute(d,c),n.distanceSqToSegment(Sf,Mf,S0,zv)>a)return;S0.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(S0);if(!(p<e.near||p>e.far))return{distance:p,point:zv.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Iv=new ue,Bv=new ue;class B3 extends I3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Iv.fromBufferAttribute(n,o),Bv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Iv.distanceTo(Bv);e.setAttribute("lineDistance",new gr(a,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F3 extends Jo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fv=new xn,Cp=new zf,Ju=new Tc,ef=new ue;class H3 extends $n{constructor(e=new Ji,n=new F3){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ju.copy(a.boundingSphere),Ju.applyMatrix4(o),Ju.radius+=c,e.ray.intersectsSphere(Ju)===!1)return;Fv.copy(o).invert(),Cp.copy(e.ray).applyMatrix4(Fv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,x=a.attributes.position;if(p!==null){const _=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let E=_,A=y;E<A;E++){const S=p.getX(E);ef.fromBufferAttribute(x,S),Hv(ef,S,m,o,e,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(x.count,u.start+u.count);for(let E=_,A=y;E<A;E++)ef.fromBufferAttribute(x,E),Hv(ef,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hv(s,e,n,a,o,c,u){const d=Cp.distanceSqToPoint(s);if(d<n){const m=new ue;Cp.closestPointToPoint(s,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class G3 extends ai{constructor(e,n,a,o,c=hi,u=hi,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function x(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(x)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(x))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class cm extends ai{constructor(e,n,a,o,c,u,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class a1 extends ai{constructor(e,n,a=Ns,o,c,u,d=pi,m=pi,p,g=uc,x=1){if(g!==uc&&g!==fc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:x};super(_,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new om(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class r1 extends ai{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dn extends Ji{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,x=e/d,_=n/m,y=[],E=[],A=[],S=[];for(let v=0;v<g;v++){const P=v*_-u;for(let D=0;D<p;D++){const z=D*x-c;E.push(z,-P,0),A.push(0,0,1),S.push(D/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<d;P++){const D=P+p*v,z=P+p*(v+1),V=P+1+p*(v+1),O=P+1+p*v;y.push(D,z,O),y.push(z,V,O)}this.setIndex(y),this.setAttribute("position",new gr(E,3)),this.setAttribute("normal",new gr(A,3)),this.setAttribute("uv",new gr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.widthSegments,e.heightSegments)}}class V3 extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j3 extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const M0={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class k3{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=p.length;x<_;x+=2){const y=p[x],E=p[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const X3=new k3;class um{constructor(e){this.manager=e!==void 0?e:X3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}um.DEFAULT_MATERIAL_NAME="__DEFAULT";const Co=new WeakMap;class W3 extends um{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=M0.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let x=Co.get(u);x===void 0&&(x=[],Co.set(u,x)),x.push({onLoad:n,onError:o})}return u}const d=dc("img");function m(){g(),n&&n(this);const x=Co.get(this)||[];for(let _=0;_<x.length;_++){const y=x[_];y.onLoad&&y.onLoad(this)}Co.delete(this),c.manager.itemEnd(e)}function p(x){g(),o&&o(x),M0.remove(`image:${e}`);const _=Co.get(this)||[];for(let y=0;y<_.length;y++){const E=_[y];E.onError&&E.onError(x)}Co.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),M0.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class q3 extends um{constructor(e){super(e)}load(e,n,a,o){const c=new ai,u=new W3(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class fm extends $n{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Y3 extends fm{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const E0=new xn,Gv=new ue,Vv=new ue;class $3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Ga,this.map=null,this.mapPass=null,this.matrix=new xn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new If,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vv),n.updateMatrixWorld(),E0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(E0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(E0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s1 extends n1{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Z3 extends $3{constructor(){super(new s1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K3 extends fm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($n.DEFAULT_UP),this.updateMatrix(),this.target=new $n,this.shadow=new Z3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Q3 extends fm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class J3 extends Ji{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class eM extends da{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jv=new xn;class tM{constructor(e,n,a=0,o=1/0){this.ray=new zf(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new lm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Rn("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return jv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jv),this}intersectObject(e,n=!0,a=[]){return Dp(e,this,a,n),a.sort(kv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)Dp(e[o],this,a,n);return a.sort(kv),a}}function kv(s,e){return s.distance-e.distance}function Dp(s,e,n,a){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,d=c.length;u<d;u++)Dp(c[u],e,n,!0)}}function Xv(s,e,n,a){const o=nM(a);switch(n){case W2:return s*e;case Y2:return s*e/o.components*o.byteLength;case im:return s*e/o.components*o.byteLength;case am:return s*e*2/o.components*o.byteLength;case rm:return s*e*2/o.components*o.byteLength;case q2:return s*e*3/o.components*o.byteLength;case Aa:return s*e*4/o.components*o.byteLength;case sm:return s*e*4/o.components*o.byteLength;case rf:case sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case of:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tp:case ip:return Math.max(s,16)*Math.max(e,8)/4;case ep:case np:return Math.max(s,8)*Math.max(e,8)/2;case ap:case rp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fp:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case dp:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yp:case Sp:case Mp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ep:case Tp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ap:case wp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nM(s){switch(s){case Ga:case V2:return{byteLength:1,components:1};case lc:case j2:case Ko:return{byteLength:2,components:1};case tm:case nm:return{byteLength:2,components:4};case Ns:case em:case dr:return{byteLength:4,components:1};case k2:case X2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o1(){let s=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function iM(s){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<x.length;y++){const E=x[_],A=x[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,x[_]=A)}x.length=_+1;for(let y=0,E=x.length;y<E;y++){const A=x[y];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rM=`#ifdef USE_ALPHAHASH
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
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uM=`#ifdef USE_AOMAP
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
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dM=`#ifdef USE_BATCHING
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
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wM=`#define PI 3.141592653589793
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
} // validated`,RM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
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
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
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
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,KM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tE=`PhysicalMaterial material;
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
#endif`,nE=`uniform sampler2D dfgLUT;
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
}`,iE=`
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
#endif`,aE=`#if defined( RE_IndirectDiffuse )
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
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hE=`#if defined( USE_POINTS_UV )
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
#endif`,pE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vE=`#ifdef USE_MORPHTARGETS
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
#endif`,bE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AE=`#ifdef USE_NORMALMAP
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
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VE=`float getShadowMask() {
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
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aT=`uniform sampler2D t2D;
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`#include <common>
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
}`,uT=`#if DEPTH_PACKING == 3200
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
}`,fT=`#define DISTANCE
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
}`,dT=`#define DISTANCE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
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
}`,gT=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#define LAMBERT
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
}`,bT=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,ST=`#define MATCAP
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
}`,MT=`#define NORMAL
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
}`,ET=`#define NORMAL
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
}`,TT=`#define PHONG
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
}`,AT=`#define PHONG
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
}`,wT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,CT=`#define TOON
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
}`,DT=`#define TOON
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
}`,UT=`uniform float size;
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
}`,LT=`uniform vec3 diffuse;
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
}`,OT=`#include <common>
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
}`,NT=`uniform vec3 color;
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
}`,PT=`uniform float rotation;
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
}`,zT=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:aM,alphahash_pars_fragment:rM,alphamap_fragment:sM,alphamap_pars_fragment:oM,alphatest_fragment:lM,alphatest_pars_fragment:cM,aomap_fragment:uM,aomap_pars_fragment:fM,batching_pars_vertex:dM,batching_vertex:hM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:xM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:SM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:AM,common:wM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:DM,displacementmap_vertex:UM,emissivemap_fragment:LM,emissivemap_pars_fragment:OM,colorspace_fragment:NM,colorspace_pars_fragment:PM,envmap_fragment:zM,envmap_common_pars_fragment:IM,envmap_pars_fragment:BM,envmap_pars_vertex:FM,envmap_physical_pars_fragment:ZM,envmap_vertex:HM,fog_vertex:GM,fog_pars_vertex:VM,fog_fragment:jM,fog_pars_fragment:kM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:WM,lights_lambert_fragment:qM,lights_lambert_pars_fragment:YM,lights_pars_begin:$M,lights_toon_fragment:KM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:eE,lights_physical_fragment:tE,lights_physical_pars_fragment:nE,lights_fragment_begin:iE,lights_fragment_maps:aE,lights_fragment_end:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:cE,map_fragment:uE,map_pars_fragment:fE,map_particle_fragment:dE,map_particle_pars_fragment:hE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:xE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:bE,normal_fragment_begin:yE,normal_fragment_maps:SE,normal_pars_fragment:ME,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:DE,opaque_fragment:UE,packing:LE,premultiplied_alpha_fragment:OE,project_vertex:NE,dithering_fragment:PE,dithering_pars_fragment:zE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:VE,skinbase_vertex:jE,skinning_pars_vertex:kE,skinning_vertex:XE,skinnormal_vertex:WE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:$E,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:aT,backgroundCube_vert:rT,backgroundCube_frag:sT,cube_vert:oT,cube_frag:lT,depth_vert:cT,depth_frag:uT,distanceRGBA_vert:fT,distanceRGBA_frag:dT,equirect_vert:hT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:xT,meshbasic_frag:_T,meshlambert_vert:vT,meshlambert_frag:bT,meshmatcap_vert:yT,meshmatcap_frag:ST,meshnormal_vert:MT,meshnormal_frag:ET,meshphong_vert:TT,meshphong_frag:AT,meshphysical_vert:wT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:DT,points_vert:UT,points_frag:LT,shadow_vert:OT,shadow_frag:NT,sprite_vert:PT,sprite_frag:zT},He={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ia={basic:{uniforms:Si([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Si([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new At(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Si([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Si([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Si([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new At(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Si([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Si([He.points,He.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Si([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Si([He.common,He.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Si([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Si([He.sprite,He.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Si([He.common,He.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Si([He.lights,He.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Ia.physical={uniforms:Si([Ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const tf={r:0,b:0,g:0},Ss=new xr,IT=new xn;function BT(s,e,n,a,o,c,u){const d=new At(0);let m=c===!0?0:1,p,g,x=null,_=0,y=null;function E(D){let z=D.isScene===!0?D.background:null;return z&&z.isTexture&&(z=(D.backgroundBlurriness>0?n:e).get(z)),z}function A(D){let z=!1;const V=E(D);V===null?v(d,m):V&&V.isColor&&(v(V,1),z=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||z)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,z){const V=E(z);V&&(V.isCubeTexture||V.mapping===Pf)?(g===void 0&&(g=new En(new Ac(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Xo(Ia.backgroundCube.uniforms),vertexShader:Ia.backgroundCube.vertexShader,fragmentShader:Ia.backgroundCube.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,ie){this.matrixWorld.copyPosition(ie.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ss.copy(z.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(IT.makeRotationFromEuler(Ss)),g.material.toneMapped=Yt.getTransfer(V.colorSpace)!==un,(x!==V||_!==V.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=V,_=V.version,y=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new En(new dn(2,2),new bi({name:"BackgroundMaterial",uniforms:Xo(Ia.background.uniforms),vertexShader:Ia.background.vertexShader,fragmentShader:Ia.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Yt.getTransfer(V.colorSpace)!==un,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||_!==V.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,x=V,_=V.version,y=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,z){D.getRGB(tf,t1(s)),a.buffers.color.setClear(tf.r,tf.g,tf.b,z,u)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,z=1){d.set(D),m=z,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(d,m)},render:A,addToRenderList:S,dispose:P}}function FT(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function d(R,j,te,le,pe){let $=!1;const N=x(le,te,j);c!==N&&(c=N,p(c.object)),$=y(R,le,te,pe),$&&E(R,le,te,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,z(R,j,te,le),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function x(R,j,te){const le=te.wireframe===!0;let pe=a[R.id];pe===void 0&&(pe={},a[R.id]=pe);let $=pe[j.id];$===void 0&&($={},pe[j.id]=$);let N=$[le];return N===void 0&&(N=_(m()),$[le]=N),N}function _(R){const j=[],te=[],le=[];for(let pe=0;pe<n;pe++)j[pe]=0,te[pe]=0,le[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:le,object:R,attributes:{},index:null}}function y(R,j,te,le){const pe=c.attributes,$=j.attributes;let N=0;const X=te.getAttributes();for(const k in X)if(X[k].location>=0){const me=pe[k];let U=$[k];if(U===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),me===void 0||me.attribute!==U||U&&me.data!==U.data)return!0;N++}return c.attributesNum!==N||c.index!==le}function E(R,j,te,le){const pe={},$=j.attributes;let N=0;const X=te.getAttributes();for(const k in X)if(X[k].location>=0){let me=$[k];me===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(me=R.instanceColor));const U={};U.attribute=me,me&&me.data&&(U.data=me.data),pe[k]=U,N++}c.attributes=pe,c.attributesNum=N,c.index=le}function A(){const R=c.newAttributes;for(let j=0,te=R.length;j<te;j++)R[j]=0}function S(R){v(R,0)}function v(R,j){const te=c.newAttributes,le=c.enabledAttributes,pe=c.attributeDivisors;te[R]=1,le[R]===0&&(s.enableVertexAttribArray(R),le[R]=1),pe[R]!==j&&(s.vertexAttribDivisor(R,j),pe[R]=j)}function P(){const R=c.newAttributes,j=c.enabledAttributes;for(let te=0,le=j.length;te<le;te++)j[te]!==R[te]&&(s.disableVertexAttribArray(te),j[te]=0)}function D(R,j,te,le,pe,$,N){N===!0?s.vertexAttribIPointer(R,j,te,pe,$):s.vertexAttribPointer(R,j,te,le,pe,$)}function z(R,j,te,le){A();const pe=le.attributes,$=te.getAttributes(),N=j.defaultAttributeValues;for(const X in $){const k=$[X];if(k.location>=0){let de=pe[X];if(de===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const me=de.normalized,U=de.itemSize,ae=e.get(de);if(ae===void 0)continue;const K=ae.buffer,_e=ae.type,Re=ae.bytesPerElement,Z=_e===s.INT||_e===s.UNSIGNED_INT||de.gpuType===em;if(de.isInterleavedBufferAttribute){const ce=de.data,we=ce.stride,Be=de.offset;if(ce.isInstancedInterleavedBuffer){for(let Xe=0;Xe<k.locationSize;Xe++)v(k.location+Xe,ce.meshPerAttribute);R.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Xe=0;Xe<k.locationSize;Xe++)S(k.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Xe=0;Xe<k.locationSize;Xe++)D(k.location+Xe,U/k.locationSize,_e,me,we*Re,(Be+U/k.locationSize*Xe)*Re,Z)}else{if(de.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)v(k.location+ce,de.meshPerAttribute);R.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ce=0;ce<k.locationSize;ce++)S(k.location+ce);s.bindBuffer(s.ARRAY_BUFFER,K);for(let ce=0;ce<k.locationSize;ce++)D(k.location+ce,U/k.locationSize,_e,me,U*Re,U/k.locationSize*ce*Re,Z)}}else if(N!==void 0){const me=N[X];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(k.location,me);break;case 3:s.vertexAttrib3fv(k.location,me);break;case 4:s.vertexAttrib4fv(k.location,me);break;default:s.vertexAttrib1fv(k.location,me)}}}}P()}function V(){ie();for(const R in a){const j=a[R];for(const te in j){const le=j[te];for(const pe in le)g(le[pe].object),delete le[pe];delete j[te]}delete a[R]}}function O(R){if(a[R.id]===void 0)return;const j=a[R.id];for(const te in j){const le=j[te];for(const pe in le)g(le[pe].object),delete le[pe];delete j[te]}delete a[R.id]}function F(R){for(const j in a){const te=a[j];if(te[R.id]===void 0)continue;const le=te[R.id];for(const pe in le)g(le[pe].object),delete le[pe];delete te[R.id]}}function ie(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:ie,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:P}}function HT(s,e,n){let a;function o(p){a=p}function c(p,g){s.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,x){x!==0&&(s.drawArraysInstanced(a,p,g,x),n.update(g,a,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];n.update(y,a,1)}function m(p,g,x,_){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)u(p[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,_,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*_[A];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function GT(s,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Aa&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const ie=F===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ga&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==dr&&!ie)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(vt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),z=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:z,vertexTextures:V,maxSamples:O}}function VT(s){const e=this;let n=null,a=0,o=!1,c=!1;const u=new Es,d=new Tt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||a!==0||o;return o=_,a=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){n=g(x,_,0)},this.setState=function(x,_,y){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,v=s.get(x);if(!o||E===null||E.length===0||c&&!S)c?g(null):p();else{const P=c?0:a,D=P*4;let z=v.clippingState||null;m.value=z,z=g(E,_,D,y);for(let V=0;V!==D;++V)z[V]=n[V];v.clippingState=z,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(x,_,y,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const v=y+A*4,P=_.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,z=y;D!==A;++D,z+=4)u.copy(x[D]).applyMatrix4(P,d),u.normal.toArray(S,z),S[z+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function jT(s){let e=new WeakMap;function n(u,d){return d===K0?u.mapping=Vo:d===Q0&&(u.mapping=jo),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===K0||d===Q0)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new C3(m.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const $r=4,Wv=[.125,.215,.35,.446,.526,.582],As=20,kT=256,Zl=new s1,qv=new At;let T0=null,A0=0,w0=0,R0=!1;const XT=new ue;class Yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=XT}=c;T0=this._renderer.getRenderTarget(),A0=this._renderer.getActiveCubeFace(),w0=this._renderer.getActiveMipmapLevel(),R0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(T0,A0,w0),this._renderer.xr.enabled=R0,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),T0=this._renderer.getRenderTarget(),A0=this._renderer.getActiveCubeFace(),w0=this._renderer.getActiveMipmapLevel(),R0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Ko,format:Aa,colorSpace:ko,depthBuffer:!1},o=$v(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WT(c)),this._blurMaterial=YT(c,e,n),this._ggxMaterial=qT(c,e,n)}return o}_compileMaterial(e){const n=new En(new Ji,e);this._renderer.compile(n,Zl)}_sceneToCubeUV(e,n,a,o,c){const m=new da(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(qv),x.toneMapping=Zr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new Ac,new Qi({name:"PMREM.Background",side:Bi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let v=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,v=!0):(S.color.copy(qv),v=!0);for(let D=0;D<6;D++){const z=D%3;z===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):z===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const V=this._cubeSize;Do(o,z*V,D>2?V:0,V,V),x.setRenderTarget(o),v&&x.render(A,m),x.render(e,m)}x.toneMapping=y,x.autoClear=_,e.background=P}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Vo||e.mapping===jo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Do(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Zl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,y=x*_,{_lodMax:E}=this,A=this._sizeLods[a],S=3*A*(a>E-$r?a-E+$r:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-n,Do(c,S,v,3*A,2*A),o.setRenderTarget(c),o.render(d,Zl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,Do(e,S,v,3*A,2*A),o.setRenderTarget(e),o.render(d,Zl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Rn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=p;const _=p.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*As-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):As;S>As&&vt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${As}`);const v=[];let P=0;for(let F=0;F<As;++F){const ie=F/A,C=Math.exp(-ie*ie/2);v.push(C),F===0?P+=C:F<S&&(P+=2*C)}for(let F=0;F<v.length;F++)v[F]=v[F]/P;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-a;const z=this._sizeLods[o],V=3*z*(o>D-$r?o-D+$r:0),O=4*(this._cubeSize-z);Do(n,V,O,3*z,2*z),m.setRenderTarget(n),m.render(x,Zl)}}function WT(s){const e=[],n=[],a=[];let o=s;const c=s-$r+1+Wv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>s-$r?m=Wv[u-s+$r-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,A=3,S=2,v=1,P=new Float32Array(A*E*y),D=new Float32Array(S*E*y),z=new Float32Array(v*E*y);for(let O=0;O<y;O++){const F=O%3*2/3-1,ie=O>2?0:-1,C=[F,ie,0,F+2/3,ie,0,F+2/3,ie+1,0,F,ie,0,F+2/3,ie+1,0,F,ie+1,0];P.set(C,A*E*O),D.set(_,S*E*O);const R=[O,O,O,O,O,O];z.set(R,v*E*O)}const V=new Ji;V.setAttribute("position",new kn(P,A)),V.setAttribute("uv",new kn(D,S)),V.setAttribute("faceIndex",new kn(z,v)),a.push(new En(V,null)),o>$r&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function $v(s,e,n){const a=new Ps(s,e,n);return a.texture.mapping=Pf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Do(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function qT(s,e,n){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function YT(s,e,n){const a=new Float32Array(As),o=new ue(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Zv(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Kv(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function $T(s){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===K0||m===Q0,g=m===Vo||m===jo;if(p||g){let x=e.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new Yv(s)),x=p?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Yv(s)),x=p?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function ZT(s){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=s.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&hc("WebGLRenderer: "+a+" extension not supported."),o}}}function KT(s,e,n,a){const o={},c=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(x,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function m(x){const _=x.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function p(x){const _=[],y=x.index,E=x.attributes.position;let A=0;if(y!==null){const P=y.array;A=y.version;for(let D=0,z=P.length;D<z;D+=3){const V=P[D+0],O=P[D+1],F=P[D+2];_.push(V,O,O,F,F,V)}}else if(E!==void 0){const P=E.array;A=E.version;for(let D=0,z=P.length/3-1;D<z;D+=3){const V=D+0,O=D+1,F=D+2;_.push(V,O,O,F,F,V)}}else return;const S=new(Z2(_)?e1:J2)(_,1);S.version=A;const v=c.get(x);v&&e.remove(v),c.set(x,S)}function g(x){const _=c.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function QT(s,e,n){let a;function o(_){a=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function m(_,y){s.drawElements(a,y,c,_*u),n.update(y,a,1)}function p(_,y,E){E!==0&&(s.drawElementsInstanced(a,y,c,_*u,E),n.update(y,a,E))}function g(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,_,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];n.update(S,a,1)}function x(_,y,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<_.length;v++)p(_[v]/u,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,_,0,A,0,E);let v=0;for(let P=0;P<E;P++)v+=y[P]*A[P];n.update(v,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function JT(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:Rn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function eA(s,e,n){const a=new WeakMap,o=new Cn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let C=function(){F.dispose(),a.delete(d),d.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const y=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;y===!0&&(D=1),E===!0&&(D=2),A===!0&&(D=3);let z=d.attributes.position.count*D,V=1;z>e.maxTextureSize&&(V=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*V*4*x),F=new K2(O,z,V,x);F.type=dr,F.needsUpdate=!0;const ie=D*4;for(let R=0;R<x;R++){const j=S[R],te=v[R],le=P[R],pe=z*V*4*R;for(let $=0;$<j.count;$++){const N=$*ie;y===!0&&(o.fromBufferAttribute(j,$),O[pe+N+0]=o.x,O[pe+N+1]=o.y,O[pe+N+2]=o.z,O[pe+N+3]=0),E===!0&&(o.fromBufferAttribute(te,$),O[pe+N+4]=o.x,O[pe+N+5]=o.y,O[pe+N+6]=o.z,O[pe+N+7]=0),A===!0&&(o.fromBufferAttribute(le,$),O[pe+N+8]=o.x,O[pe+N+9]=o.y,O[pe+N+10]=o.z,O[pe+N+11]=le.itemSize===4?o.w:1)}}_={count:x,texture:F,size:new Xt(z,V)},a.set(d,_),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let y=0;for(let A=0;A<p.length;A++)y+=p[A];const E=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function tA(s,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,x=e.get(m,g);if(o.get(x)!==p&&(e.update(x),o.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return x}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const l1=new ai,Qv=new a1(1,1),c1=new K2,u1=new d3,f1=new i1,Jv=[],e2=[],t2=new Float32Array(16),n2=new Float32Array(9),i2=new Float32Array(4);function el(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let c=Jv[o];if(c===void 0&&(c=new Float32Array(o),Jv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function Kn(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function Qn(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function Ff(s,e){let n=e2[e];n===void 0&&(n=new Int32Array(e),e2[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function nA(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function iA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;s.uniform2fv(this.addr,e),Qn(n,e)}}function aA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kn(n,e))return;s.uniform3fv(this.addr,e),Qn(n,e)}}function rA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;s.uniform4fv(this.addr,e),Qn(n,e)}}function sA(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Kn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qn(n,e)}else{if(Kn(n,a))return;i2.set(a),s.uniformMatrix2fv(this.addr,!1,i2),Qn(n,a)}}function oA(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Kn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qn(n,e)}else{if(Kn(n,a))return;n2.set(a),s.uniformMatrix3fv(this.addr,!1,n2),Qn(n,a)}}function lA(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Kn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qn(n,e)}else{if(Kn(n,a))return;t2.set(a),s.uniformMatrix4fv(this.addr,!1,t2),Qn(n,a)}}function cA(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function uA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;s.uniform2iv(this.addr,e),Qn(n,e)}}function fA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kn(n,e))return;s.uniform3iv(this.addr,e),Qn(n,e)}}function dA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;s.uniform4iv(this.addr,e),Qn(n,e)}}function hA(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function pA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;s.uniform2uiv(this.addr,e),Qn(n,e)}}function mA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kn(n,e))return;s.uniform3uiv(this.addr,e),Qn(n,e)}}function gA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;s.uniform4uiv(this.addr,e),Qn(n,e)}}function xA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Qv.compareFunction=$2,c=Qv):c=l1,n.setTexture2D(e||c,o)}function _A(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||u1,o)}function vA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||f1,o)}function bA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||c1,o)}function yA(s){switch(s){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return bA}}function SA(s,e){s.uniform1fv(this.addr,e)}function MA(s,e){const n=el(e,this.size,2);s.uniform2fv(this.addr,n)}function EA(s,e){const n=el(e,this.size,3);s.uniform3fv(this.addr,n)}function TA(s,e){const n=el(e,this.size,4);s.uniform4fv(this.addr,n)}function AA(s,e){const n=el(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function wA(s,e){const n=el(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function RA(s,e){const n=el(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function CA(s,e){s.uniform1iv(this.addr,e)}function DA(s,e){s.uniform2iv(this.addr,e)}function UA(s,e){s.uniform3iv(this.addr,e)}function LA(s,e){s.uniform4iv(this.addr,e)}function OA(s,e){s.uniform1uiv(this.addr,e)}function NA(s,e){s.uniform2uiv(this.addr,e)}function PA(s,e){s.uniform3uiv(this.addr,e)}function zA(s,e){s.uniform4uiv(this.addr,e)}function IA(s,e,n){const a=this.cache,o=e.length,c=Ff(n,o);Kn(a,c)||(s.uniform1iv(this.addr,c),Qn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||l1,c[u])}function BA(s,e,n){const a=this.cache,o=e.length,c=Ff(n,o);Kn(a,c)||(s.uniform1iv(this.addr,c),Qn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||u1,c[u])}function FA(s,e,n){const a=this.cache,o=e.length,c=Ff(n,o);Kn(a,c)||(s.uniform1iv(this.addr,c),Qn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||f1,c[u])}function HA(s,e,n){const a=this.cache,o=e.length,c=Ff(n,o);Kn(a,c)||(s.uniform1iv(this.addr,c),Qn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||c1,c[u])}function GA(s){switch(s){case 5126:return SA;case 35664:return MA;case 35665:return EA;case 35666:return TA;case 35674:return AA;case 35675:return wA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return DA;case 35668:case 35672:return UA;case 35669:case 35673:return LA;case 5125:return OA;case 36294:return NA;case 36295:return PA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return HA}}class VA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=yA(n.type)}}class jA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GA(n.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const C0=/(\w+)(\])?(\[|\.)?/g;function a2(s,e){s.seq.push(e),s.map[e.id]=e}function XA(s,e,n){const a=s.name,o=a.length;for(C0.lastIndex=0;;){const c=C0.exec(a),u=C0.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){a2(n,p===void 0?new VA(d,s,e):new jA(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new kA(d),a2(n,x)),n=x}}}class cf{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);XA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function r2(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const WA=37297;let qA=0;function YA(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const s2=new Tt;function $A(s){Yt._getMatrix(s2,Yt.workingColorSpace,s);const e=`mat3( ${s2.elements.map(n=>n.toFixed(4))} )`;switch(Yt.getTransfer(s)){case vf:return[e,"LinearTransferOETF"];case un:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function o2(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+YA(s.getShaderSource(e),d)}else return c}function ZA(s,e){const n=$A(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function KA(s,e){let n;switch(e){case FS:n="Linear";break;case HS:n="Reinhard";break;case GS:n="Cineon";break;case VS:n="ACESFilmic";break;case kS:n="AgX";break;case XS:n="Neutral";break;case jS:n="Custom";break;default:vt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nf=new ue;function QA(){Yt.getLuminanceCoefficients(nf);const s=nf.x.toFixed(4),e=nf.y.toFixed(4),n=nf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kl).join(`
`)}function ew(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function tw(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(e,o),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Kl(s){return s!==""}function l2(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c2(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(s){return s.replace(nw,aw)}const iw=new Map;function aw(s,e){let n=Rt[e];if(n===void 0){const a=iw.get(e);if(a!==void 0)n=Rt[a],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Up(n)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u2(s){return s.replace(rw,sw)}function sw(s,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function f2(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ow(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===F2?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fr&&(e="SHADOWMAP_TYPE_VSM"),e}function lw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vo:case jo:e="ENVMAP_TYPE_CUBE";break;case Pf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function uw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case H2:e="ENVMAP_BLENDING_MULTIPLY";break;case IS:e="ENVMAP_BLENDING_MIX";break;case BS:e="ENVMAP_BLENDING_ADD";break}return e}function fw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function dw(s,e,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=ow(n),p=lw(n),g=cw(n),x=uw(n),_=fw(n),y=JA(n),E=ew(c),A=o.createProgram();let S,v,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Kl).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Kl).join(`
`),v.length>0&&(v+=`
`)):(S=[f2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kl).join(`
`),v=[f2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zr?"#define TONE_MAPPING":"",n.toneMapping!==Zr?Rt.tonemapping_pars_fragment:"",n.toneMapping!==Zr?KA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,ZA("linearToOutputTexel",n.outputColorSpace),QA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Kl).join(`
`)),u=Up(u),u=l2(u,n),u=c2(u,n),d=Up(d),d=l2(d,n),d=c2(d,n),u=u2(u),d=u2(d),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=P+S+u,z=P+v+d,V=r2(o,o.VERTEX_SHADER,D),O=r2(o,o.FRAGMENT_SHADER,z);o.attachShader(A,V),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(j){if(s.debug.checkShaderErrors){const te=o.getProgramInfoLog(A)||"",le=o.getShaderInfoLog(V)||"",pe=o.getShaderInfoLog(O)||"",$=te.trim(),N=le.trim(),X=pe.trim();let k=!0,de=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,V,O);else{const me=o2(o,V,"vertex"),U=o2(o,O,"fragment");Rn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+$+`
`+me+`
`+U)}else $!==""?vt("WebGLProgram: Program Info Log:",$):(N===""||X==="")&&(de=!1);de&&(j.diagnostics={runnable:k,programLog:$,vertexShader:{log:N,prefix:S},fragmentShader:{log:X,prefix:v}})}o.deleteShader(V),o.deleteShader(O),ie=new cf(o,A),C=tw(o,A)}let ie;this.getUniforms=function(){return ie===void 0&&F(this),ie};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,WA)),R},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=O,this}let hw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new mw(e),n.set(e,a)),a}}class mw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function gw(s,e,n,a,o,c,u){const d=new lm,m=new pw,p=new Set,g=[],x=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,R,j,te,le){const pe=te.fog,$=le.geometry,N=C.isMeshStandardMaterial?te.environment:null,X=(C.isMeshStandardMaterial?n:e).get(C.envMap||N),k=X&&X.mapping===Pf?X.image.height:null,de=E[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&vt("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,U=me!==void 0?me.length:0;let ae=0;$.morphAttributes.position!==void 0&&(ae=1),$.morphAttributes.normal!==void 0&&(ae=2),$.morphAttributes.color!==void 0&&(ae=3);let K,_e,Re,Z;if(de){const xe=Ia[de];K=xe.vertexShader,_e=xe.fragmentShader}else K=C.vertexShader,_e=C.fragmentShader,m.update(C),Re=m.getVertexShaderID(C),Z=m.getFragmentShaderID(C);const ce=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Be=le.isInstancedMesh===!0,Xe=le.isBatchedMesh===!0,dt=!!C.map,bn=!!C.matcap,st=!!X,bt=!!C.aoMap,I=!!C.lightMap,mt=!!C.bumpMap,yt=!!C.normalMap,jt=!!C.displacementMap,We=!!C.emissiveMap,Jt=!!C.metalnessMap,Qe=!!C.roughnessMap,ht=C.anisotropy>0,L=C.clearcoat>0,M=C.dispersion>0,Q=C.iridescence>0,be=C.sheen>0,Me=C.transmission>0,he=ht&&!!C.anisotropyMap,Je=L&&!!C.clearcoatMap,Fe=L&&!!C.clearcoatNormalMap,et=L&&!!C.clearcoatRoughnessMap,$e=Q&&!!C.iridescenceMap,Ee=Q&&!!C.iridescenceThicknessMap,Ae=be&&!!C.sheenColorMap,Ke=be&&!!C.sheenRoughnessMap,qe=!!C.specularMap,Ge=!!C.specularColorMap,lt=!!C.specularIntensityMap,H=Me&&!!C.transmissionMap,ze=Me&&!!C.thicknessMap,Ue=!!C.gradientMap,Ce=!!C.alphaMap,Te=C.alphaTest>0,ye=!!C.alphaHash,ke=!!C.extensions;let ut=Zr;C.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ut=s.toneMapping);const $t={shaderID:de,shaderType:C.type,shaderName:C.name,vertexShader:K,fragmentShader:_e,defines:C.defines,customVertexShaderID:Re,customFragmentShaderID:Z,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&le._colorsTexture!==null,instancing:Be,instancingColor:Be&&le.instanceColor!==null,instancingMorph:Be&&le.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ko,alphaToCoverage:!!C.alphaToCoverage,map:dt,matcap:bn,envMap:st,envMapMode:st&&X.mapping,envMapCubeUVHeight:k,aoMap:bt,lightMap:I,bumpMap:mt,normalMap:yt,displacementMap:_&&jt,emissiveMap:We,normalMapObjectSpace:yt&&C.normalMapType===ZS,normalMapTangentSpace:yt&&C.normalMapType===$S,metalnessMap:Jt,roughnessMap:Qe,anisotropy:ht,anisotropyMap:he,clearcoat:L,clearcoatMap:Je,clearcoatNormalMap:Fe,clearcoatRoughnessMap:et,dispersion:M,iridescence:Q,iridescenceMap:$e,iridescenceThicknessMap:Ee,sheen:be,sheenColorMap:Ae,sheenRoughnessMap:Ke,specularMap:qe,specularColorMap:Ge,specularIntensityMap:lt,transmission:Me,transmissionMap:H,thicknessMap:ze,gradientMap:Ue,opaque:C.transparent===!1&&C.blending===Lo&&C.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Te,alphaHash:ye,combine:C.combine,mapUv:dt&&A(C.map.channel),aoMapUv:bt&&A(C.aoMap.channel),lightMapUv:I&&A(C.lightMap.channel),bumpMapUv:mt&&A(C.bumpMap.channel),normalMapUv:yt&&A(C.normalMap.channel),displacementMapUv:jt&&A(C.displacementMap.channel),emissiveMapUv:We&&A(C.emissiveMap.channel),metalnessMapUv:Jt&&A(C.metalnessMap.channel),roughnessMapUv:Qe&&A(C.roughnessMap.channel),anisotropyMapUv:he&&A(C.anisotropyMap.channel),clearcoatMapUv:Je&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&A(C.sheenRoughnessMap.channel),specularMapUv:qe&&A(C.specularMap.channel),specularColorMapUv:Ge&&A(C.specularColorMap.channel),specularIntensityMapUv:lt&&A(C.specularIntensityMap.channel),transmissionMapUv:H&&A(C.transmissionMap.channel),thicknessMapUv:ze&&A(C.thicknessMap.channel),alphaMapUv:Ce&&A(C.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(yt||ht),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!$.attributes.uv&&(dt||Ce),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:le.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:dt&&C.map.isVideoTexture===!0&&Yt.getTransfer(C.map.colorSpace)===un,decodeVideoTextureEmissive:We&&C.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(C.emissiveMap.colorSpace)===un,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Fa,flipSided:C.side===Bi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ke&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&C.extensions.multiDraw===!0||Xe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return $t.vertexUv1s=p.has(1),$t.vertexUv2s=p.has(2),$t.vertexUv3s=p.has(3),p.clear(),$t}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const j in C.defines)R.push(j),R.push(C.defines[j]);return C.isRawShaderMaterial===!1&&(P(R,C),D(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function P(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function D(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function z(C){const R=E[C.type];let j;if(R){const te=Ia[R];j=T3.clone(te.uniforms)}else j=C.uniforms;return j}function V(C,R){let j;for(let te=0,le=g.length;te<le;te++){const pe=g[te];if(pe.cacheKey===R){j=pe,++j.usedTimes;break}}return j===void 0&&(j=new dw(s,R,C,c),g.push(j)),j}function O(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function F(C){m.remove(C)}function ie(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:z,acquireProgram:V,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:ie}}function xw(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function a(u){s.delete(u)}function o(u,d,m){s.get(u)[d]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function _w(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function d2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function h2(){const s=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(x,_,y,E,A,S){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:y,groupOrder:E,renderOrder:x.renderOrder,z:A,group:S},s[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=y,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=A,v.group=S),e++,v}function d(x,_,y,E,A,S){const v=u(x,_,y,E,A,S);y.transmission>0?a.push(v):y.transparent===!0?o.push(v):n.push(v)}function m(x,_,y,E,A,S){const v=u(x,_,y,E,A,S);y.transmission>0?a.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function p(x,_){n.length>1&&n.sort(x||_w),a.length>1&&a.sort(_||d2),o.length>1&&o.sort(_||d2)}function g(){for(let x=e,_=s.length;x<_;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:m,finish:g,sort:p}}function vw(){let s=new WeakMap;function e(a,o){const c=s.get(a);let u;return c===void 0?(u=new h2,s.set(a,[u])):o>=c.length?(u=new h2,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new At};break;case"SpotLight":n={position:new ue,direction:new ue,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return s[e.id]=n,n}}}function yw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let Sw=0;function Mw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ew(s){const e=new bw,n=yw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ue);const o=new ue,c=new xn,u=new xn;function d(p){let g=0,x=0,_=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,E=0,A=0,S=0,v=0,P=0,D=0,z=0,V=0,O=0,F=0;p.sort(Mw);for(let C=0,R=p.length;C<R;C++){const j=p[C],te=j.color,le=j.intensity,pe=j.distance,$=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)g+=te.r*le,x+=te.g*le,_+=te.b*le;else if(j.isLightProbe){for(let N=0;N<9;N++)a.probe[N].addScaledVector(j.sh.coefficients[N],le);F++}else if(j.isDirectionalLight){const N=e.get(j);if(N.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const X=j.shadow,k=n.get(j);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,a.directionalShadow[y]=k,a.directionalShadowMap[y]=$,a.directionalShadowMatrix[y]=j.shadow.matrix,P++}a.directional[y]=N,y++}else if(j.isSpotLight){const N=e.get(j);N.position.setFromMatrixPosition(j.matrixWorld),N.color.copy(te).multiplyScalar(le),N.distance=pe,N.coneCos=Math.cos(j.angle),N.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),N.decay=j.decay,a.spot[A]=N;const X=j.shadow;if(j.map&&(a.spotLightMap[V]=j.map,V++,X.updateMatrices(j),j.castShadow&&O++),a.spotLightMatrix[A]=X.matrix,j.castShadow){const k=n.get(j);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,a.spotShadow[A]=k,a.spotShadowMap[A]=$,z++}A++}else if(j.isRectAreaLight){const N=e.get(j);N.color.copy(te).multiplyScalar(le),N.halfWidth.set(j.width*.5,0,0),N.halfHeight.set(0,j.height*.5,0),a.rectArea[S]=N,S++}else if(j.isPointLight){const N=e.get(j);if(N.color.copy(j.color).multiplyScalar(j.intensity),N.distance=j.distance,N.decay=j.decay,j.castShadow){const X=j.shadow,k=n.get(j);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,a.pointShadow[E]=k,a.pointShadowMap[E]=$,a.pointShadowMatrix[E]=j.shadow.matrix,D++}a.point[E]=N,E++}else if(j.isHemisphereLight){const N=e.get(j);N.skyColor.copy(j.color).multiplyScalar(le),N.groundColor.copy(j.groundColor).multiplyScalar(le),a.hemi[v]=N,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=x,a.ambient[2]=_;const ie=a.hash;(ie.directionalLength!==y||ie.pointLength!==E||ie.spotLength!==A||ie.rectAreaLength!==S||ie.hemiLength!==v||ie.numDirectionalShadows!==P||ie.numPointShadows!==D||ie.numSpotShadows!==z||ie.numSpotMaps!==V||ie.numLightProbes!==F)&&(a.directional.length=y,a.spot.length=A,a.rectArea.length=S,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=z,a.spotShadowMap.length=z,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=z+V-O,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=F,ie.directionalLength=y,ie.pointLength=E,ie.spotLength=A,ie.rectAreaLength=S,ie.hemiLength=v,ie.numDirectionalShadows=P,ie.numPointShadows=D,ie.numSpotShadows=z,ie.numSpotMaps=V,ie.numLightProbes=F,a.version=Sw++)}function m(p,g){let x=0,_=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const D=p[v];if(D.isDirectionalLight){const z=a.directional[x];z.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),x++}else if(D.isSpotLight){const z=a.spot[y];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const z=a.rectArea[E];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(S),u.identity(),c.copy(D.matrixWorld),c.premultiply(S),u.extractRotation(c),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const z=a.point[_];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(S),_++}else if(D.isHemisphereLight){const z=a.hemi[A];z.direction.setFromMatrixPosition(D.matrixWorld),z.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:a}}function p2(s){const e=new Ew(s),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function Tw(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new p2(s),e.set(o,[d])):c>=u.length?(d=new p2(s),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const Aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ww=`uniform sampler2D shadow_pass;
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
}`;function Rw(s,e,n){let a=new If;const o=new Xt,c=new Xt,u=new Cn,d=new V3({depthPacking:YS}),m=new j3,p={},g=n.maxTextureSize,x={[Jr]:Bi,[Bi]:Jr,[Fa]:Fa},_=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Aw,fragmentShader:ww}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ji;E.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new En(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F2;let v=this.type;this.render=function(O,F,ie){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),te=s.state;te.setBlending(pr),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const le=v!==fr&&this.type===fr,pe=v===fr&&this.type!==fr;for(let $=0,N=O.length;$<N;$++){const X=O[$],k=X.shadow;if(k===void 0){vt("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const de=k.getFrameExtents();if(o.multiply(de),c.copy(k.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/de.x),o.x=c.x*de.x,k.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/de.y),o.y=c.y*de.y,k.mapSize.y=c.y)),k.map===null||le===!0||pe===!0){const U=this.type!==fr?{minFilter:pi,magFilter:pi}:{};k.map!==null&&k.map.dispose(),k.map=new Ps(o.x,o.y,U),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const me=k.getViewportCount();for(let U=0;U<me;U++){const ae=k.getViewport(U);u.set(c.x*ae.x,c.y*ae.y,c.x*ae.z,c.y*ae.w),te.viewport(u),k.updateMatrices(X,U),a=k.getFrustum(),z(F,ie,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===fr&&P(k,ie),k.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(C,R,j)};function P(O,F){const ie=e.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ps(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,ie,_,A,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,ie,y,A,null)}function D(O,F,ie,C){let R=null;const j=ie.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(j!==void 0)R=j;else if(R=ie.isPointLight===!0?m:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const te=R.uuid,le=F.uuid;let pe=p[te];pe===void 0&&(pe={},p[te]=pe);let $=pe[le];$===void 0&&($=R.clone(),pe[le]=$,F.addEventListener("dispose",V)),R=$}if(R.visible=F.visible,R.wireframe=F.wireframe,C===fr?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:x[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,ie.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const te=s.properties.get(R);te.light=ie}return R}function z(O,F,ie,C,R){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===fr)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,O.matrixWorld);const le=e.update(O),pe=O.material;if(Array.isArray(pe)){const $=le.groups;for(let N=0,X=$.length;N<X;N++){const k=$[N],de=pe[k.materialIndex];if(de&&de.visible){const me=D(O,de,C,R);O.onBeforeShadow(s,O,F,ie,le,me,k),s.renderBufferDirect(ie,null,le,me,O,k),O.onAfterShadow(s,O,F,ie,le,me,k)}}}else if(pe.visible){const $=D(O,pe,C,R);O.onBeforeShadow(s,O,F,ie,le,$,null),s.renderBufferDirect(ie,null,le,$,O,null),O.onAfterShadow(s,O,F,ie,le,$,null)}}const te=O.children;for(let le=0,pe=te.length;le<pe;le++)z(te[le],F,ie,C,R)}function V(O){O.target.removeEventListener("dispose",V);for(const ie in p){const C=p[ie],R=O.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const Cw={[k0]:X0,[W0]:$0,[q0]:Z0,[Go]:Y0,[X0]:k0,[$0]:W0,[Z0]:q0,[Y0]:Go};function Dw(s,e){function n(){let H=!1;const ze=new Cn;let Ue=null;const Ce=new Cn(0,0,0,0);return{setMask:function(Te){Ue!==Te&&!H&&(s.colorMask(Te,Te,Te,Te),Ue=Te)},setLocked:function(Te){H=Te},setClear:function(Te,ye,ke,ut,$t){$t===!0&&(Te*=ut,ye*=ut,ke*=ut),ze.set(Te,ye,ke,ut),Ce.equals(ze)===!1&&(s.clearColor(Te,ye,ke,ut),Ce.copy(ze))},reset:function(){H=!1,Ue=null,Ce.set(-1,0,0,0)}}}function a(){let H=!1,ze=!1,Ue=null,Ce=null,Te=null;return{setReversed:function(ye){if(ze!==ye){const ke=e.get("EXT_clip_control");ye?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ze=ye;const ut=Te;Te=null,this.setClear(ut)}},getReversed:function(){return ze},setTest:function(ye){ye?ce(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ye){Ue!==ye&&!H&&(s.depthMask(ye),Ue=ye)},setFunc:function(ye){if(ze&&(ye=Cw[ye]),Ce!==ye){switch(ye){case k0:s.depthFunc(s.NEVER);break;case X0:s.depthFunc(s.ALWAYS);break;case W0:s.depthFunc(s.LESS);break;case Go:s.depthFunc(s.LEQUAL);break;case q0:s.depthFunc(s.EQUAL);break;case Y0:s.depthFunc(s.GEQUAL);break;case $0:s.depthFunc(s.GREATER);break;case Z0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=ye}},setLocked:function(ye){H=ye},setClear:function(ye){Te!==ye&&(ze&&(ye=1-ye),s.clearDepth(ye),Te=ye)},reset:function(){H=!1,Ue=null,Ce=null,Te=null,ze=!1}}}function o(){let H=!1,ze=null,Ue=null,Ce=null,Te=null,ye=null,ke=null,ut=null,$t=null;return{setTest:function(xe){H||(xe?ce(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(xe){ze!==xe&&!H&&(s.stencilMask(xe),ze=xe)},setFunc:function(xe,gt,rn){(Ue!==xe||Ce!==gt||Te!==rn)&&(s.stencilFunc(xe,gt,rn),Ue=xe,Ce=gt,Te=rn)},setOp:function(xe,gt,rn){(ye!==xe||ke!==gt||ut!==rn)&&(s.stencilOp(xe,gt,rn),ye=xe,ke=gt,ut=rn)},setLocked:function(xe){H=xe},setClear:function(xe){$t!==xe&&(s.clearStencil(xe),$t=xe)},reset:function(){H=!1,ze=null,Ue=null,Ce=null,Te=null,ye=null,ke=null,ut=null,$t=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,y=[],E=null,A=!1,S=null,v=null,P=null,D=null,z=null,V=null,O=null,F=new At(0,0,0),ie=0,C=!1,R=null,j=null,te=null,le=null,pe=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=X>=2);let de=null,me={};const U=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),K=new Cn().fromArray(U),_e=new Cn().fromArray(ae);function Re(H,ze,Ue,Ce){const Te=new Uint8Array(4),ye=s.createTexture();s.bindTexture(H,ye),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<Ue;ke++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(ze,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(ze+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return ye}const Z={};Z[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ce(s.DEPTH_TEST),u.setFunc(Go),mt(!1),yt(fv),ce(s.CULL_FACE),bt(pr);function ce(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function we(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function Be(H,ze){return x[H]!==ze?(s.bindFramebuffer(H,ze),x[H]=ze,H===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=ze),H===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=ze),!0):!1}function Xe(H,ze){let Ue=y,Ce=!1;if(H){Ue=_.get(ze),Ue===void 0&&(Ue=[],_.set(ze,Ue));const Te=H.textures;if(Ue.length!==Te.length||Ue[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,ke=Te.length;ye<ke;ye++)Ue[ye]=s.COLOR_ATTACHMENT0+ye;Ue.length=Te.length,Ce=!0}}else Ue[0]!==s.BACK&&(Ue[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(Ue)}function dt(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const bn={[Ts]:s.FUNC_ADD,[bS]:s.FUNC_SUBTRACT,[yS]:s.FUNC_REVERSE_SUBTRACT};bn[SS]=s.MIN,bn[MS]=s.MAX;const st={[ES]:s.ZERO,[TS]:s.ONE,[AS]:s.SRC_COLOR,[V0]:s.SRC_ALPHA,[LS]:s.SRC_ALPHA_SATURATE,[DS]:s.DST_COLOR,[RS]:s.DST_ALPHA,[wS]:s.ONE_MINUS_SRC_COLOR,[j0]:s.ONE_MINUS_SRC_ALPHA,[US]:s.ONE_MINUS_DST_COLOR,[CS]:s.ONE_MINUS_DST_ALPHA,[OS]:s.CONSTANT_COLOR,[NS]:s.ONE_MINUS_CONSTANT_COLOR,[PS]:s.CONSTANT_ALPHA,[zS]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(H,ze,Ue,Ce,Te,ye,ke,ut,$t,xe){if(H===pr){A===!0&&(we(s.BLEND),A=!1);return}if(A===!1&&(ce(s.BLEND),A=!0),H!==vS){if(H!==S||xe!==C){if((v!==Ts||z!==Ts)&&(s.blendEquation(s.FUNC_ADD),v=Ts,z=Ts),xe)switch(H){case Lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oo:s.blendFunc(s.ONE,s.ONE);break;case dv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Rn("WebGLState: Invalid blending: ",H);break}else switch(H){case Lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dv:Rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hv:Rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rn("WebGLState: Invalid blending: ",H);break}P=null,D=null,V=null,O=null,F.set(0,0,0),ie=0,S=H,C=xe}return}Te=Te||ze,ye=ye||Ue,ke=ke||Ce,(ze!==v||Te!==z)&&(s.blendEquationSeparate(bn[ze],bn[Te]),v=ze,z=Te),(Ue!==P||Ce!==D||ye!==V||ke!==O)&&(s.blendFuncSeparate(st[Ue],st[Ce],st[ye],st[ke]),P=Ue,D=Ce,V=ye,O=ke),(ut.equals(F)===!1||$t!==ie)&&(s.blendColor(ut.r,ut.g,ut.b,$t),F.copy(ut),ie=$t),S=H,C=!1}function I(H,ze){H.side===Fa?we(s.CULL_FACE):ce(s.CULL_FACE);let Ue=H.side===Bi;ze&&(Ue=!Ue),mt(Ue),H.blending===Lo&&H.transparent===!1?bt(pr):bt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ce=H.stencilWrite;d.setTest(Ce),Ce&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),We(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function yt(H){H!==gS?(ce(s.CULL_FACE),H!==j&&(H===fv?s.cullFace(s.BACK):H===xS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),j=H}function jt(H){H!==te&&(N&&s.lineWidth(H),te=H)}function We(H,ze,Ue){H?(ce(s.POLYGON_OFFSET_FILL),(le!==ze||pe!==Ue)&&(s.polygonOffset(ze,Ue),le=ze,pe=Ue)):we(s.POLYGON_OFFSET_FILL)}function Jt(H){H?ce(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Qe(H){H===void 0&&(H=s.TEXTURE0+$-1),de!==H&&(s.activeTexture(H),de=H)}function ht(H,ze,Ue){Ue===void 0&&(de===null?Ue=s.TEXTURE0+$-1:Ue=de);let Ce=me[Ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},me[Ue]=Ce),(Ce.type!==H||Ce.texture!==ze)&&(de!==Ue&&(s.activeTexture(Ue),de=Ue),s.bindTexture(H,ze||Z[H]),Ce.type=H,Ce.texture=ze)}function L(){const H=me[de];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Q(){try{s.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function be(){try{s.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Me(){try{s.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Fe(){try{s.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function et(){try{s.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function $e(){try{s.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(){try{s.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ae(H){K.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),K.copy(H))}function Ke(H){_e.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),_e.copy(H))}function qe(H,ze){let Ue=p.get(ze);Ue===void 0&&(Ue=new WeakMap,p.set(ze,Ue));let Ce=Ue.get(H);Ce===void 0&&(Ce=s.getUniformBlockIndex(ze,H.name),Ue.set(H,Ce))}function Ge(H,ze){const Ce=p.get(ze).get(H);m.get(ze)!==Ce&&(s.uniformBlockBinding(ze,Ce,H.__bindingPointIndex),m.set(ze,Ce))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},de=null,me={},x={},_=new WeakMap,y=[],E=null,A=!1,S=null,v=null,P=null,D=null,z=null,V=null,O=null,F=new At(0,0,0),ie=0,C=!1,R=null,j=null,te=null,le=null,pe=null,K.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ce,disable:we,bindFramebuffer:Be,drawBuffers:Xe,useProgram:dt,setBlending:bt,setMaterial:I,setFlipSided:mt,setCullFace:yt,setLineWidth:jt,setPolygonOffset:We,setScissorTest:Jt,activeTexture:Qe,bindTexture:ht,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:Q,texImage2D:$e,texImage3D:Ee,updateUBOMapping:qe,uniformBlockBinding:Ge,texStorage2D:Fe,texStorage3D:et,texSubImage2D:be,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:Je,scissor:Ae,viewport:Ke,reset:lt}}function Uw(s,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Xt,g=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,M){return y?new OffscreenCanvas(L,M):dc("canvas")}function A(L,M,Q){let be=1;const Me=ht(L);if((Me.width>Q||Me.height>Q)&&(be=Q/Math.max(Me.width,Me.height)),be<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(be*Me.width),Je=Math.floor(be*Me.height);x===void 0&&(x=E(he,Je));const Fe=M?E(he,Je):x;return Fe.width=he,Fe.height=Je,Fe.getContext("2d").drawImage(L,0,0,he,Je),vt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+he+"x"+Je+")."),Fe}else return"data"in L&&vt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,M,Q,be,Me=!1){if(L!==null){if(s[L]!==void 0)return s[L];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=M;if(M===s.RED&&(Q===s.FLOAT&&(he=s.R32F),Q===s.HALF_FLOAT&&(he=s.R16F),Q===s.UNSIGNED_BYTE&&(he=s.R8)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.R8UI),Q===s.UNSIGNED_SHORT&&(he=s.R16UI),Q===s.UNSIGNED_INT&&(he=s.R32UI),Q===s.BYTE&&(he=s.R8I),Q===s.SHORT&&(he=s.R16I),Q===s.INT&&(he=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(he=s.RG32F),Q===s.HALF_FLOAT&&(he=s.RG16F),Q===s.UNSIGNED_BYTE&&(he=s.RG8)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RG8UI),Q===s.UNSIGNED_SHORT&&(he=s.RG16UI),Q===s.UNSIGNED_INT&&(he=s.RG32UI),Q===s.BYTE&&(he=s.RG8I),Q===s.SHORT&&(he=s.RG16I),Q===s.INT&&(he=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Q===s.UNSIGNED_INT&&(he=s.RGB32UI),Q===s.BYTE&&(he=s.RGB8I),Q===s.SHORT&&(he=s.RGB16I),Q===s.INT&&(he=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Q===s.UNSIGNED_INT&&(he=s.RGBA32UI),Q===s.BYTE&&(he=s.RGBA8I),Q===s.SHORT&&(he=s.RGBA16I),Q===s.INT&&(he=s.RGBA32I)),M===s.RGB&&(Q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),M===s.RGBA){const Je=Me?vf:Yt.getTransfer(be);Q===s.FLOAT&&(he=s.RGBA32F),Q===s.HALF_FLOAT&&(he=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(he=Je===un?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function z(L,M){let Q;return L?M===null||M===Ns||M===cc?Q=s.DEPTH24_STENCIL8:M===dr?Q=s.DEPTH32F_STENCIL8:M===lc&&(Q=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ns||M===cc?Q=s.DEPTH_COMPONENT24:M===dr?Q=s.DEPTH_COMPONENT32F:M===lc&&(Q=s.DEPTH_COMPONENT16),Q}function V(L,M){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==hi?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function O(L){const M=L.target;M.removeEventListener("dispose",O),ie(M),M.isVideoTexture&&g.delete(M)}function F(L){const M=L.target;M.removeEventListener("dispose",F),R(M)}function ie(L){const M=a.get(L);if(M.__webglInit===void 0)return;const Q=L.source,be=_.get(Q);if(be){const Me=be[M.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&C(L),Object.keys(be).length===0&&_.delete(Q)}a.remove(L)}function C(L){const M=a.get(L);s.deleteTexture(M.__webglTexture);const Q=L.source,be=_.get(Q);delete be[M.__cacheKey],u.memory.textures--}function R(L){const M=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(M.__webglFramebuffer[be]))for(let Me=0;Me<M.__webglFramebuffer[be].length;Me++)s.deleteFramebuffer(M.__webglFramebuffer[be][Me]);else s.deleteFramebuffer(M.__webglFramebuffer[be]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[be])}else{if(Array.isArray(M.__webglFramebuffer))for(let be=0;be<M.__webglFramebuffer.length;be++)s.deleteFramebuffer(M.__webglFramebuffer[be]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let be=0;be<M.__webglColorRenderbuffer.length;be++)M.__webglColorRenderbuffer[be]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[be]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=L.textures;for(let be=0,Me=Q.length;be<Me;be++){const he=a.get(Q[be]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),u.memory.textures--),a.remove(Q[be])}a.remove(L)}let j=0;function te(){j=0}function le(){const L=j;return L>=o.maxTextures&&vt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),j+=1,L}function pe(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function $(L,M){const Q=a.get(L);if(L.isVideoTexture&&Jt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const be=L.image;if(be===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,L,M);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function N(L,M){const Q=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){Z(Q,L,M);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function X(L,M){const Q=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){Z(Q,L,M);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function k(L,M){const Q=a.get(L);if(L.version>0&&Q.__version!==L.version){ce(Q,L,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}const de={[oc]:s.REPEAT,[Ii]:s.CLAMP_TO_EDGE,[J0]:s.MIRRORED_REPEAT},me={[pi]:s.NEAREST,[WS]:s.NEAREST_MIPMAP_NEAREST,[Lu]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Kh]:s.LINEAR_MIPMAP_NEAREST,[Rs]:s.LINEAR_MIPMAP_LINEAR},U={[KS]:s.NEVER,[i3]:s.ALWAYS,[QS]:s.LESS,[$2]:s.LEQUAL,[JS]:s.EQUAL,[n3]:s.GEQUAL,[e3]:s.GREATER,[t3]:s.NOTEQUAL};function ae(L,M){if(M.type===dr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===hi||M.magFilter===Kh||M.magFilter===Lu||M.magFilter===Rs||M.minFilter===hi||M.minFilter===Kh||M.minFilter===Lu||M.minFilter===Rs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,de[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,de[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,de[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,me[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pi||M.minFilter!==Lu&&M.minFilter!==Rs||M.type===dr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function K(L,M){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",O));const be=M.source;let Me=_.get(be);Me===void 0&&(Me={},_.set(be,Me));const he=pe(M);if(he!==L.__cacheKey){Me[he]===void 0&&(Me[he]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),Me[he].usedTimes++;const Je=Me[L.__cacheKey];Je!==void 0&&(Me[L.__cacheKey].usedTimes--,Je.usedTimes===0&&C(M)),L.__cacheKey=he,L.__webglTexture=Me[he].texture}return Q}function _e(L,M,Q){return Math.floor(Math.floor(L/Q)/M)}function Re(L,M,Q,be){const he=L.updateRanges;if(he.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,Q,be,M.data);else{he.sort((Ee,Ae)=>Ee.start-Ae.start);let Je=0;for(let Ee=1;Ee<he.length;Ee++){const Ae=he[Je],Ke=he[Ee],qe=Ae.start+Ae.count,Ge=_e(Ke.start,M.width,4),lt=_e(Ae.start,M.width,4);Ke.start<=qe+1&&Ge===lt&&_e(Ke.start+Ke.count-1,M.width,4)===Ge?Ae.count=Math.max(Ae.count,Ke.start+Ke.count-Ae.start):(++Je,he[Je]=Ke)}he.length=Je+1;const Fe=s.getParameter(s.UNPACK_ROW_LENGTH),et=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ee=0,Ae=he.length;Ee<Ae;Ee++){const Ke=he[Ee],qe=Math.floor(Ke.start/4),Ge=Math.ceil(Ke.count/4),lt=qe%M.width,H=Math.floor(qe/M.width),ze=Ge,Ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,lt,H,ze,Ue,Q,be,M.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Fe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,et),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function Z(L,M,Q){let be=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(be=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(be=s.TEXTURE_3D);const Me=K(L,M),he=M.source;n.bindTexture(be,L.__webglTexture,s.TEXTURE0+Q);const Je=a.get(he);if(he.version!==Je.__version||Me===!0){n.activeTexture(s.TEXTURE0+Q);const Fe=Yt.getPrimaries(Yt.workingColorSpace),et=M.colorSpace===qr?null:Yt.getPrimaries(M.colorSpace),$e=M.colorSpace===qr||Fe===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ee=A(M.image,!1,o.maxTextureSize);Ee=Qe(M,Ee);const Ae=c.convert(M.format,M.colorSpace),Ke=c.convert(M.type);let qe=D(M.internalFormat,Ae,Ke,M.colorSpace,M.isVideoTexture);ae(be,M);let Ge;const lt=M.mipmaps,H=M.isVideoTexture!==!0,ze=Je.__version===void 0||Me===!0,Ue=he.dataReady,Ce=V(M,Ee);if(M.isDepthTexture)qe=z(M.format===fc,M.type),ze&&(H?n.texStorage2D(s.TEXTURE_2D,1,qe,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,Ae,Ke,null));else if(M.isDataTexture)if(lt.length>0){H&&ze&&n.texStorage2D(s.TEXTURE_2D,Ce,qe,lt[0].width,lt[0].height);for(let Te=0,ye=lt.length;Te<ye;Te++)Ge=lt[Te],H?Ue&&n.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ge.width,Ge.height,Ae,Ke,Ge.data):n.texImage2D(s.TEXTURE_2D,Te,qe,Ge.width,Ge.height,0,Ae,Ke,Ge.data);M.generateMipmaps=!1}else H?(ze&&n.texStorage2D(s.TEXTURE_2D,Ce,qe,Ee.width,Ee.height),Ue&&Re(M,Ee,Ae,Ke)):n.texImage2D(s.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,Ae,Ke,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&ze&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,qe,lt[0].width,lt[0].height,Ee.depth);for(let Te=0,ye=lt.length;Te<ye;Te++)if(Ge=lt[Te],M.format!==Aa)if(Ae!==null)if(H){if(Ue)if(M.layerUpdates.size>0){const ke=Xv(Ge.width,Ge.height,M.format,M.type);for(const ut of M.layerUpdates){const $t=Ge.data.subarray(ut*ke/Ge.data.BYTES_PER_ELEMENT,(ut+1)*ke/Ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,ut,Ge.width,Ge.height,1,Ae,$t)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Ge.width,Ge.height,Ee.depth,Ae,Ge.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,qe,Ge.width,Ge.height,Ee.depth,0,Ge.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ue&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Ge.width,Ge.height,Ee.depth,Ae,Ke,Ge.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Te,qe,Ge.width,Ge.height,Ee.depth,0,Ae,Ke,Ge.data)}else{H&&ze&&n.texStorage2D(s.TEXTURE_2D,Ce,qe,lt[0].width,lt[0].height);for(let Te=0,ye=lt.length;Te<ye;Te++)Ge=lt[Te],M.format!==Aa?Ae!==null?H?Ue&&n.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Ge.width,Ge.height,Ae,Ge.data):n.compressedTexImage2D(s.TEXTURE_2D,Te,qe,Ge.width,Ge.height,0,Ge.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ue&&n.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ge.width,Ge.height,Ae,Ke,Ge.data):n.texImage2D(s.TEXTURE_2D,Te,qe,Ge.width,Ge.height,0,Ae,Ke,Ge.data)}else if(M.isDataArrayTexture)if(H){if(ze&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,qe,Ee.width,Ee.height,Ee.depth),Ue)if(M.layerUpdates.size>0){const Te=Xv(Ee.width,Ee.height,M.format,M.type);for(const ye of M.layerUpdates){const ke=Ee.data.subarray(ye*Te/Ee.data.BYTES_PER_ELEMENT,(ye+1)*Te/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Ae,Ke,ke)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ke,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Ee.width,Ee.height,Ee.depth,0,Ae,Ke,Ee.data);else if(M.isData3DTexture)H?(ze&&n.texStorage3D(s.TEXTURE_3D,Ce,qe,Ee.width,Ee.height,Ee.depth),Ue&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ae,Ke,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,qe,Ee.width,Ee.height,Ee.depth,0,Ae,Ke,Ee.data);else if(M.isFramebufferTexture){if(ze)if(H)n.texStorage2D(s.TEXTURE_2D,Ce,qe,Ee.width,Ee.height);else{let Te=Ee.width,ye=Ee.height;for(let ke=0;ke<Ce;ke++)n.texImage2D(s.TEXTURE_2D,ke,qe,Te,ye,0,Ae,Ke,null),Te>>=1,ye>>=1}}else if(lt.length>0){if(H&&ze){const Te=ht(lt[0]);n.texStorage2D(s.TEXTURE_2D,Ce,qe,Te.width,Te.height)}for(let Te=0,ye=lt.length;Te<ye;Te++)Ge=lt[Te],H?Ue&&n.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ae,Ke,Ge):n.texImage2D(s.TEXTURE_2D,Te,qe,Ae,Ke,Ge);M.generateMipmaps=!1}else if(H){if(ze){const Te=ht(Ee);n.texStorage2D(s.TEXTURE_2D,Ce,qe,Te.width,Te.height)}Ue&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ke,Ee)}else n.texImage2D(s.TEXTURE_2D,0,qe,Ae,Ke,Ee);S(M)&&v(be),Je.__version=he.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ce(L,M,Q){if(M.image.length!==6)return;const be=K(L,M),Me=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Q);const he=a.get(Me);if(Me.version!==he.__version||be===!0){n.activeTexture(s.TEXTURE0+Q);const Je=Yt.getPrimaries(Yt.workingColorSpace),Fe=M.colorSpace===qr?null:Yt.getPrimaries(M.colorSpace),et=M.colorSpace===qr||Je===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,Ee=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let ye=0;ye<6;ye++)!$e&&!Ee?Ae[ye]=A(M.image[ye],!0,o.maxCubemapSize):Ae[ye]=Ee?M.image[ye].image:M.image[ye],Ae[ye]=Qe(M,Ae[ye]);const Ke=Ae[0],qe=c.convert(M.format,M.colorSpace),Ge=c.convert(M.type),lt=D(M.internalFormat,qe,Ge,M.colorSpace),H=M.isVideoTexture!==!0,ze=he.__version===void 0||be===!0,Ue=Me.dataReady;let Ce=V(M,Ke);ae(s.TEXTURE_CUBE_MAP,M);let Te;if($e){H&&ze&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,lt,Ke.width,Ke.height);for(let ye=0;ye<6;ye++){Te=Ae[ye].mipmaps;for(let ke=0;ke<Te.length;ke++){const ut=Te[ke];M.format!==Aa?qe!==null?H?Ue&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,0,0,ut.width,ut.height,qe,ut.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,lt,ut.width,ut.height,0,ut.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,0,0,ut.width,ut.height,qe,Ge,ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke,lt,ut.width,ut.height,0,qe,Ge,ut.data)}}}else{if(Te=M.mipmaps,H&&ze){Te.length>0&&Ce++;const ye=ht(Ae[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,lt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){H?Ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ae[ye].width,Ae[ye].height,qe,Ge,Ae[ye].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,lt,Ae[ye].width,Ae[ye].height,0,qe,Ge,Ae[ye].data);for(let ke=0;ke<Te.length;ke++){const $t=Te[ke].image[ye].image;H?Ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,0,0,$t.width,$t.height,qe,Ge,$t.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,lt,$t.width,$t.height,0,qe,Ge,$t.data)}}else{H?Ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,qe,Ge,Ae[ye]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,lt,qe,Ge,Ae[ye]);for(let ke=0;ke<Te.length;ke++){const ut=Te[ke];H?Ue&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,0,0,qe,Ge,ut.image[ye]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ke+1,lt,qe,Ge,ut.image[ye])}}}S(M)&&v(s.TEXTURE_CUBE_MAP),he.__version=Me.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function we(L,M,Q,be,Me,he){const Je=c.convert(Q.format,Q.colorSpace),Fe=c.convert(Q.type),et=D(Q.internalFormat,Je,Fe,Q.colorSpace),$e=a.get(M),Ee=a.get(Q);if(Ee.__renderTarget=M,!$e.__hasExternalTextures){const Ae=Math.max(1,M.width>>he),Ke=Math.max(1,M.height>>he);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?n.texImage3D(Me,he,et,Ae,Ke,M.depth,0,Je,Fe,null):n.texImage2D(Me,he,et,Ae,Ke,0,Je,Fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),We(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,Me,Ee.__webglTexture,0,jt(M)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,be,Me,Ee.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(L,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const be=M.depthTexture,Me=be&&be.isDepthTexture?be.type:null,he=z(M.stencilBuffer,Me),Je=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=jt(M);We(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,he,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,he,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,he,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Je,s.RENDERBUFFER,L)}else{const be=M.textures;for(let Me=0;Me<be.length;Me++){const he=be[Me],Je=c.convert(he.format,he.colorSpace),Fe=c.convert(he.type),et=D(he.internalFormat,Je,Fe,he.colorSpace),$e=jt(M);Q&&We(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,et,M.width,M.height):We(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,et,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,et,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=a.get(M.depthTexture);be.__renderTarget=M,(!be.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const Me=be.__webglTexture,he=jt(M);if(M.depthTexture.format===uc)We(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(M.depthTexture.format===fc)We(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function dt(L){const M=a.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const be=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),be){const Me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,be.removeEventListener("dispose",Me)};be.addEventListener("dispose",Me),M.__depthDisposeCallback=Me}M.__boundDepthTexture=be}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const be=L.texture.mipmaps;be&&be.length>0?Xe(M.__webglFramebuffer[0],L):Xe(M.__webglFramebuffer,L)}else if(Q){M.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[be]),M.__webglDepthbuffer[be]===void 0)M.__webglDepthbuffer[be]=s.createRenderbuffer(),Be(M.__webglDepthbuffer[be],L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[be];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,he)}}else{const be=L.texture.mipmaps;if(be&&be.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Be(M.__webglDepthbuffer,L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,he)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function bn(L,M,Q){const be=a.get(L);M!==void 0&&we(be.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&dt(L)}function st(L){const M=L.texture,Q=a.get(L),be=a.get(M);L.addEventListener("dispose",F);const Me=L.textures,he=L.isWebGLCubeRenderTarget===!0,Je=Me.length>1;if(Je||(be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture()),be.__version=M.version,u.memory.textures++),he){Q.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[Fe]=[];for(let et=0;et<M.mipmaps.length;et++)Q.__webglFramebuffer[Fe][et]=s.createFramebuffer()}else Q.__webglFramebuffer[Fe]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Fe=0;Fe<M.mipmaps.length;Fe++)Q.__webglFramebuffer[Fe]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Je)for(let Fe=0,et=Me.length;Fe<et;Fe++){const $e=a.get(Me[Fe]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&We(L)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Fe=0;Fe<Me.length;Fe++){const et=Me[Fe];Q.__webglColorRenderbuffer[Fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Fe]);const $e=c.convert(et.format,et.colorSpace),Ee=c.convert(et.type),Ae=D(et.internalFormat,$e,Ee,et.colorSpace,L.isXRRenderTarget===!0),Ke=jt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Ae,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(Q.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),ae(s.TEXTURE_CUBE_MAP,M);for(let Fe=0;Fe<6;Fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)we(Q.__webglFramebuffer[Fe][et],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,et);else we(Q.__webglFramebuffer[Fe],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);S(M)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Je){for(let Fe=0,et=Me.length;Fe<et;Fe++){const $e=Me[Fe],Ee=a.get($e);let Ae=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,Ee.__webglTexture),ae(Ae,$e),we(Q.__webglFramebuffer,L,$e,s.COLOR_ATTACHMENT0+Fe,Ae,0),S($e)&&v(Ae)}n.unbindTexture()}else{let Fe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Fe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Fe,be.__webglTexture),ae(Fe,M),M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)we(Q.__webglFramebuffer[et],L,M,s.COLOR_ATTACHMENT0,Fe,et);else we(Q.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,Fe,0);S(M)&&v(Fe),n.unbindTexture()}L.depthBuffer&&dt(L)}function bt(L){const M=L.textures;for(let Q=0,be=M.length;Q<be;Q++){const Me=M[Q];if(S(Me)){const he=P(L),Je=a.get(Me).__webglTexture;n.bindTexture(he,Je),v(he),n.unbindTexture()}}}const I=[],mt=[];function yt(L){if(L.samples>0){if(We(L)===!1){const M=L.textures,Q=L.width,be=L.height;let Me=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Je=a.get(L),Fe=M.length>1;if(Fe)for(let $e=0;$e<M.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const et=L.texture.mipmaps;et&&et.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let $e=0;$e<M.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Je.__webglColorRenderbuffer[$e]);const Ee=a.get(M[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,Q,be,0,0,Q,be,Me,s.NEAREST),m===!0&&(I.length=0,mt.length=0,I.push(s.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(I.push(he),mt.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Fe)for(let $e=0;$e<M.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Je.__webglColorRenderbuffer[$e]);const Ee=a.get(M[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Ee,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function jt(L){return Math.min(o.maxSamples,L.samples)}function We(L){const M=a.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Jt(L){const M=u.render.frame;g.get(L)!==M&&(g.set(L,M),L.update())}function Qe(L,M){const Q=L.colorSpace,be=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==ko&&Q!==qr&&(Yt.getTransfer(Q)===un?(be!==Aa||Me!==Ga)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rn("WebGLTextures: Unsupported texture color space:",Q)),M}function ht(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=te,this.setTexture2D=$,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=bn,this.setupRenderTarget=st,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=We}function Lw(s,e){function n(a,o=qr){let c;const u=Yt.getTransfer(o);if(a===Ga)return s.UNSIGNED_BYTE;if(a===tm)return s.UNSIGNED_SHORT_4_4_4_4;if(a===nm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===k2)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===X2)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===V2)return s.BYTE;if(a===j2)return s.SHORT;if(a===lc)return s.UNSIGNED_SHORT;if(a===em)return s.INT;if(a===Ns)return s.UNSIGNED_INT;if(a===dr)return s.FLOAT;if(a===Ko)return s.HALF_FLOAT;if(a===W2)return s.ALPHA;if(a===q2)return s.RGB;if(a===Aa)return s.RGBA;if(a===uc)return s.DEPTH_COMPONENT;if(a===fc)return s.DEPTH_STENCIL;if(a===Y2)return s.RED;if(a===im)return s.RED_INTEGER;if(a===am)return s.RG;if(a===rm)return s.RG_INTEGER;if(a===sm)return s.RGBA_INTEGER;if(a===rf||a===sf||a===of||a===lf)if(u===un)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===rf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===sf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===of)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===lf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===rf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===sf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===of)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===lf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ep||a===tp||a===np||a===ip)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===ep)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===tp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===np)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ip)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ap||a===rp||a===sp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ap||a===rp)return u===un?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===sp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===op||a===lp||a===cp||a===up||a===fp||a===dp||a===hp||a===pp||a===mp||a===gp||a===xp||a===_p||a===vp||a===bp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===op)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===lp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===cp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===up)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===fp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===dp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===pp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===mp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===_p)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===bp)return u===un?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yp||a===Sp||a===Mp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===yp)return u===un?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Mp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ep||a===Tp||a===Ap||a===wp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Ep)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===cc?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
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

}`;class Pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new r1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new bi({vertexShader:Ow,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new En(new dn(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends Qo{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,x=null,_=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",S=new Pw,v={},P=n.getContextAttributes();let D=null,z=null;const V=[],O=[],F=new Xt;let ie=null;const C=new da;C.viewport=new Cn;const R=new da;R.viewport=new Cn;const j=[C,R],te=new eM;let le=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=V[Z];return ce===void 0&&(ce=new b0,V[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=V[Z];return ce===void 0&&(ce=new b0,V[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=V[Z];return ce===void 0&&(ce=new b0,V[Z]=ce),ce.getHandSpace()};function $(Z){const ce=O.indexOf(Z.inputSource);if(ce===-1)return;const we=V[ce];we!==void 0&&(we.update(Z.inputSource,Z.frame,p||u),we.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",N),o.removeEventListener("inputsourceschange",X);for(let Z=0;Z<V.length;Z++){const ce=O[Z];ce!==null&&(O[Z]=null,V[Z].disconnect(ce))}le=null,pe=null,S.reset();for(const Z in v)delete v[Z];e.setRenderTarget(D),y=null,_=null,x=null,o=null,z=null,Re.stop(),a.isPresenting=!1,e.setPixelRatio(ie),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,a.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,a.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",N),o.addEventListener("inputsourceschange",X),P.xrCompatible!==!0&&await n.makeXRCompatible(),ie=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Be=null,Xe=null;P.depth&&(Xe=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=P.stencil?fc:uc,Be=P.stencil?cc:Ns);const dt={colorFormat:n.RGBA8,depthFormat:Xe,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(dt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),z=new Ps(_.textureWidth,_.textureHeight,{format:Aa,type:Ga,depthTexture:new a1(_.textureWidth,_.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const we={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,we),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new Ps(y.framebufferWidth,y.framebufferHeight,{format:Aa,type:Ga,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Re.setContext(o),Re.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(Z){for(let ce=0;ce<Z.removed.length;ce++){const we=Z.removed[ce],Be=O.indexOf(we);Be>=0&&(O[Be]=null,V[Be].disconnect(we))}for(let ce=0;ce<Z.added.length;ce++){const we=Z.added[ce];let Be=O.indexOf(we);if(Be===-1){for(let dt=0;dt<V.length;dt++)if(dt>=O.length){O.push(we),Be=dt;break}else if(O[dt]===null){O[dt]=we,Be=dt;break}if(Be===-1)break}const Xe=V[Be];Xe&&Xe.connect(we)}}const k=new ue,de=new ue;function me(Z,ce,we){k.setFromMatrixPosition(ce.matrixWorld),de.setFromMatrixPosition(we.matrixWorld);const Be=k.distanceTo(de),Xe=ce.projectionMatrix.elements,dt=we.projectionMatrix.elements,bn=Xe[14]/(Xe[10]-1),st=Xe[14]/(Xe[10]+1),bt=(Xe[9]+1)/Xe[5],I=(Xe[9]-1)/Xe[5],mt=(Xe[8]-1)/Xe[0],yt=(dt[8]+1)/dt[0],jt=bn*mt,We=bn*yt,Jt=Be/(-mt+yt),Qe=Jt*-mt;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qe),Z.translateZ(Jt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Xe[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ht=bn+Jt,L=st+Jt,M=jt-Qe,Q=We+(Be-Qe),be=bt*st/L*ht,Me=I*st/L*ht;Z.projectionMatrix.makePerspective(M,Q,be,Me,ht,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function U(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ce=Z.near,we=Z.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(we=S.depthFar)),te.near=R.near=C.near=ce,te.far=R.far=C.far=we,(le!==te.near||pe!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),le=te.near,pe=te.far),te.layers.mask=Z.layers.mask|6,C.layers.mask=te.layers.mask&3,R.layers.mask=te.layers.mask&5;const Be=Z.parent,Xe=te.cameras;U(te,Be);for(let dt=0;dt<Xe.length;dt++)U(Xe[dt],Be);Xe.length===2?me(te,C,R):te.projectionMatrix.copy(C.projectionMatrix),ae(Z,te,Be)};function ae(Z,ce,we){we===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Rp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(Z){m=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(te)},this.getCameraTexture=function(Z){return v[Z]};let K=null;function _e(Z,ce){if(g=ce.getViewerPose(p||u),E=ce,g!==null){const we=g.views;y!==null&&(e.setRenderTargetFramebuffer(z,y.framebuffer),e.setRenderTarget(z));let Be=!1;we.length!==te.cameras.length&&(te.cameras.length=0,Be=!0);for(let st=0;st<we.length;st++){const bt=we[st];let I=null;if(y!==null)I=y.getViewport(bt);else{const yt=x.getViewSubImage(_,bt);I=yt.viewport,st===0&&(e.setRenderTargetTextures(z,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(z))}let mt=j[st];mt===void 0&&(mt=new da,mt.layers.enable(st),mt.viewport=new Cn,j[st]=mt),mt.matrix.fromArray(bt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(bt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(I.x,I.y,I.width,I.height),st===0&&(te.matrix.copy(mt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Be===!0&&te.cameras.push(mt)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=a.getBinding();const st=x.getDepthInformation(we[0]);st&&st.isValid&&st.texture&&S.init(st,o.renderState)}if(Xe&&Xe.includes("camera-access")&&A){e.state.unbindTexture(),x=a.getBinding();for(let st=0;st<we.length;st++){const bt=we[st].camera;if(bt){let I=v[bt];I||(I=new r1,v[bt]=I);const mt=x.getCameraImage(bt);I.sourceTexture=mt}}}}for(let we=0;we<V.length;we++){const Be=O[we],Xe=V[we];Be!==null&&Xe!==void 0&&Xe.update(Be,ce,p||u)}K&&K(Z,ce),ce.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Re=new o1;Re.setAnimationLoop(_e),this.setAnimationLoop=function(Z){K=Z},this.dispose=function(){}}}const Ms=new xr,Iw=new xn;function Bw(s,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function a(S,v){v.color.getRGB(S.fogColor.value,t1(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,P,D,z){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),x(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),_(S,v),v.isMeshPhysicalMaterial&&y(S,v,z)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,P,D):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Bi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Bi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const P=e.get(v),D=P.envMap,z=P.envMapRotation;D&&(S.envMap.value=D,Ms.copy(z),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),S.envMapRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(Ms)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,P,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*P,S.scale.value=D*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,P){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Bi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const P=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Fw(s,e,n,a){let o={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,D){const z=D.program;a.uniformBlockBinding(P,z)}function p(P,D){let z=o[P.id];z===void 0&&(E(P),z=g(P),o[P.id]=z,P.addEventListener("dispose",S));const V=D.program;a.updateUBOMapping(P,V);const O=e.render.frame;c[P.id]!==O&&(_(P),c[P.id]=O)}function g(P){const D=x();P.__bindingPointIndex=D;const z=s.createBuffer(),V=P.__size,O=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,z),s.bufferData(s.UNIFORM_BUFFER,V,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,z),z}function x(){for(let P=0;P<d;P++)if(u.indexOf(P)===-1)return u.push(P),P;return Rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const D=o[P.id],z=P.uniforms,V=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,F=z.length;O<F;O++){const ie=Array.isArray(z[O])?z[O]:[z[O]];for(let C=0,R=ie.length;C<R;C++){const j=ie[C];if(y(j,O,C,V)===!0){const te=j.__offset,le=Array.isArray(j.value)?j.value:[j.value];let pe=0;for(let $=0;$<le.length;$++){const N=le[$],X=A(N);typeof N=="number"||typeof N=="boolean"?(j.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,te+pe,j.__data)):N.isMatrix3?(j.__data[0]=N.elements[0],j.__data[1]=N.elements[1],j.__data[2]=N.elements[2],j.__data[3]=0,j.__data[4]=N.elements[3],j.__data[5]=N.elements[4],j.__data[6]=N.elements[5],j.__data[7]=0,j.__data[8]=N.elements[6],j.__data[9]=N.elements[7],j.__data[10]=N.elements[8],j.__data[11]=0):(N.toArray(j.__data,pe),pe+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(P,D,z,V){const O=P.value,F=D+"_"+z;if(V[F]===void 0)return typeof O=="number"||typeof O=="boolean"?V[F]=O:V[F]=O.clone(),!0;{const ie=V[F];if(typeof O=="number"||typeof O=="boolean"){if(ie!==O)return V[F]=O,!0}else if(ie.equals(O)===!1)return ie.copy(O),!0}return!1}function E(P){const D=P.uniforms;let z=0;const V=16;for(let F=0,ie=D.length;F<ie;F++){const C=Array.isArray(D[F])?D[F]:[D[F]];for(let R=0,j=C.length;R<j;R++){const te=C[R],le=Array.isArray(te.value)?te.value:[te.value];for(let pe=0,$=le.length;pe<$;pe++){const N=le[pe],X=A(N),k=z%V,de=k%X.boundary,me=k+de;z+=de,me!==0&&V-me<X.storage&&(z+=V-me),te.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=z,z+=X.storage}}}const O=z%V;return O>0&&(z+=V-O),P.__size=z,P.__cache={},this}function A(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",P),D}function S(P){const D=P.target;D.removeEventListener("dispose",S);const z=u.indexOf(D.__bindingPointIndex);u.splice(z,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function v(){for(const P in o)s.deleteBuffer(o[P]);u=[],o={},c={}}return{bind:m,update:p,dispose:v}}const Hw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ur=null;function Gw(){return ur===null&&(ur=new L3(Hw,32,32,am,Ko),ur.minFilter=hi,ur.magFilter=hi,ur.wrapS=Ii,ur.wrapT=Ii,ur.generateMipmaps=!1,ur.needsUpdate=!0),ur}class Vw{constructor(e={}){const{canvas:n=a3(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=new Set([sm,rm,im]),A=new Set([Ga,Ns,lc,cc,tm,nm]),S=new Uint32Array(4),v=new Int32Array(4);let P=null,D=null;const z=[],V=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let F=!1;this._outputColorSpace=zi;let ie=0,C=0,R=null,j=-1,te=null;const le=new Cn,pe=new Cn;let $=null;const N=new At(0);let X=0,k=n.width,de=n.height,me=1,U=null,ae=null;const K=new Cn(0,0,k,de),_e=new Cn(0,0,k,de);let Re=!1;const Z=new If;let ce=!1,we=!1;const Be=new xn,Xe=new ue,dt=new Cn,bn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function bt(){return R===null?me:1}let I=a;function mt(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jp}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",ke,!1),I===null){const W="webgl2";if(I=mt(W,w),I===null)throw mt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let yt,jt,We,Jt,Qe,ht,L,M,Q,be,Me,he,Je,Fe,et,$e,Ee,Ae,Ke,qe,Ge,lt,H,ze;function Ue(){yt=new ZT(I),yt.init(),lt=new Lw(I,yt),jt=new GT(I,yt,e,lt),We=new Dw(I,yt),jt.reversedDepthBuffer&&_&&We.buffers.depth.setReversed(!0),Jt=new JT(I),Qe=new xw,ht=new Uw(I,yt,We,Qe,jt,lt,Jt),L=new jT(O),M=new $T(O),Q=new iM(I),H=new FT(I,Q),be=new KT(I,Q,Jt,H),Me=new tA(I,be,Q,Jt),Ke=new eA(I,jt,ht),$e=new VT(Qe),he=new gw(O,L,M,yt,jt,H,$e),Je=new Bw(O,Qe),Fe=new vw,et=new Tw(yt),Ae=new BT(O,L,M,We,Me,y,m),Ee=new Rw(O,Me,jt),ze=new Fw(I,Jt,jt,We),qe=new HT(I,yt,Jt),Ge=new QT(I,yt,Jt),Jt.programs=he.programs,O.capabilities=jt,O.extensions=yt,O.properties=Qe,O.renderLists=Fe,O.shadowMap=Ee,O.state=We,O.info=Jt}Ue();const Ce=new zw(O,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=yt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=yt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(w){w!==void 0&&(me=w,this.setSize(k,de,!1))},this.getSize=function(w){return w.set(k,de)},this.setSize=function(w,W,se=!0){if(Ce.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,de=W,n.width=Math.floor(w*me),n.height=Math.floor(W*me),se===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(k*me,de*me).floor()},this.setDrawingBufferSize=function(w,W,se){k=w,de=W,me=se,n.width=Math.floor(w*se),n.height=Math.floor(W*se),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(le)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,W,se,J){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,W,se,J),We.viewport(le.copy(K).multiplyScalar(me).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,W,se,J){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,W,se,J),We.scissor(pe.copy(_e).multiplyScalar(me).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){We.setScissorTest(Re=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,se=!0){let J=0;if(w){let Y=!1;if(R!==null){const De=R.texture.format;Y=E.has(De)}if(Y){const De=R.texture.type,Ne=A.has(De),Ve=Ae.getClearColor(),je=Ae.getClearAlpha(),tt=Ve.r,nt=Ve.g,it=Ve.b;Ne?(S[0]=tt,S[1]=nt,S[2]=it,S[3]=je,I.clearBufferuiv(I.COLOR,0,S)):(v[0]=tt,v[1]=nt,v[2]=it,v[3]=je,I.clearBufferiv(I.COLOR,0,v))}else J|=I.COLOR_BUFFER_BIT}W&&(J|=I.DEPTH_BUFFER_BIT),se&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",ke,!1),Ae.dispose(),Fe.dispose(),et.dispose(),Qe.dispose(),L.dispose(),M.dispose(),Me.dispose(),H.dispose(),ze.dispose(),he.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",sn),Ce.removeEventListener("sessionend",Ei),Ct.stop()};function Te(w){w.preventDefault(),_v("WebGLRenderer: Context Lost."),F=!0}function ye(){_v("WebGLRenderer: Context Restored."),F=!1;const w=Jt.autoReset,W=Ee.enabled,se=Ee.autoUpdate,J=Ee.needsUpdate,Y=Ee.type;Ue(),Jt.autoReset=w,Ee.enabled=W,Ee.autoUpdate=se,Ee.needsUpdate=J,Ee.type=Y}function ke(w){Rn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){const W=w.target;W.removeEventListener("dispose",ut),$t(W)}function $t(w){xe(w),Qe.remove(w)}function xe(w){const W=Qe.get(w).programs;W!==void 0&&(W.forEach(function(se){he.releaseProgram(se)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,se,J,Y,De){W===null&&(W=bn);const Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Ve=Is(w,W,se,J,Y);We.setMaterial(J,Ne);let je=se.index,tt=1;if(J.wireframe===!0){if(je=be.getWireframeAttribute(se),je===void 0)return;tt=2}const nt=se.drawRange,it=se.attributes.position;let xt=nt.start*tt,Nt=(nt.start+nt.count)*tt;De!==null&&(xt=Math.max(xt,De.start*tt),Nt=Math.min(Nt,(De.start+De.count)*tt)),je!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,je.count)):it!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,it.count));const Bt=Nt-xt;if(Bt<0||Bt===1/0)return;H.setup(Y,J,Ve,se,je);let Dt,kt=qe;if(je!==null&&(Dt=Q.get(je),kt=Ge,kt.setIndex(Dt)),Y.isMesh)J.wireframe===!0?(We.setLineWidth(J.wireframeLinewidth*bt()),kt.setMode(I.LINES)):kt.setMode(I.TRIANGLES);else if(Y.isLine){let rt=J.linewidth;rt===void 0&&(rt=1),We.setLineWidth(rt*bt()),Y.isLineSegments?kt.setMode(I.LINES):Y.isLineLoop?kt.setMode(I.LINE_LOOP):kt.setMode(I.LINE_STRIP)}else Y.isPoints?kt.setMode(I.POINTS):Y.isSprite&&kt.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)hc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))kt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const rt=Y._multiDrawStarts,Le=Y._multiDrawCounts,Pe=Y._multiDrawCount,pt=je?Q.get(je).bytesPerElement:1,wt=Qe.get(J).currentProgram.getUniforms();for(let ft=0;ft<Pe;ft++)wt.setValue(I,"_gl_DrawID",ft),kt.render(rt[ft]/pt,Le[ft])}else if(Y.isInstancedMesh)kt.renderInstances(xt,Bt,Y.count);else if(se.isInstancedBufferGeometry){const rt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Le=Math.min(se.instanceCount,rt);kt.renderInstances(xt,Bt,Le)}else kt.render(xt,Bt)};function gt(w,W,se){w.transparent===!0&&w.side===Fa&&w.forceSinglePass===!1?(w.side=Bi,w.needsUpdate=!0,Dn(w,W,se),w.side=Jr,w.needsUpdate=!0,Dn(w,W,se),w.side=Fa):Dn(w,W,se)}this.compile=function(w,W,se=null){se===null&&(se=w),D=et.get(se),D.init(W),V.push(D),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),w!==se&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),D.setupLights();const J=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const De=Y.material;if(De)if(Array.isArray(De))for(let Ne=0;Ne<De.length;Ne++){const Ve=De[Ne];gt(Ve,se,Y),J.add(Ve)}else gt(De,se,Y),J.add(De)}),D=V.pop(),J},this.compileAsync=function(w,W,se=null){const J=this.compile(w,W,se);return new Promise(Y=>{function De(){if(J.forEach(function(Ne){Qe.get(Ne).currentProgram.isReady()&&J.delete(Ne)}),J.size===0){Y(w);return}setTimeout(De,10)}yt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let rn=null;function Mi(w){rn&&rn(w)}function sn(){Ct.stop()}function Ei(){Ct.start()}const Ct=new o1;Ct.setAnimationLoop(Mi),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(w){rn=w,Ce.setAnimationLoop(w),w===null?Ct.stop():Ct.start()},Ce.addEventListener("sessionstart",sn),Ce.addEventListener("sessionend",Ei),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(W),W=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,W,R),D=et.get(w,V.length),D.init(W),V.push(D),Be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Be,Ha,W.reversedDepth),we=this.localClippingEnabled,ce=$e.init(this.clippingPlanes,we),P=Fe.get(w,z.length),P.init(),z.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const De=O.xr.getDepthSensingMesh();De!==null&&mi(De,W,-1/0,O.sortObjects)}mi(w,W,0,O.sortObjects),P.finish(),O.sortObjects===!0&&P.sort(U,ae),st=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,st&&Ae.addToRenderList(P,w),this.info.render.frame++,ce===!0&&$e.beginShadows();const se=D.state.shadowsArray;Ee.render(se,w,W),ce===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=P.opaque,Y=P.transmissive;if(D.setupLights(),W.isArrayCamera){const De=W.cameras;if(Y.length>0)for(let Ne=0,Ve=De.length;Ne<Ve;Ne++){const je=De[Ne];Ca(J,Y,w,je)}st&&Ae.render(w);for(let Ne=0,Ve=De.length;Ne<Ve;Ne++){const je=De[Ne];ma(P,w,je,je.viewport)}}else Y.length>0&&Ca(J,Y,w,W),st&&Ae.render(w),ma(P,w,W);R!==null&&C===0&&(ht.updateMultisampleRenderTarget(R),ht.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(O,w,W),H.resetDefaultState(),j=-1,te=null,V.pop(),V.length>0?(D=V[V.length-1],ce===!0&&$e.setGlobalState(O.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?P=z[z.length-1]:P=null};function mi(w,W,se,J){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){J&&dt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);const Ne=Me.update(w),Ve=w.material;Ve.visible&&P.push(w,Ne,Ve,se,dt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const Ne=Me.update(w),Ve=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),dt.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),dt.copy(Ne.boundingSphere.center)),dt.applyMatrix4(w.matrixWorld).applyMatrix4(Be)),Array.isArray(Ve)){const je=Ne.groups;for(let tt=0,nt=je.length;tt<nt;tt++){const it=je[tt],xt=Ve[it.materialIndex];xt&&xt.visible&&P.push(w,Ne,xt,se,dt.z,it)}}else Ve.visible&&P.push(w,Ne,Ve,se,dt.z,null)}}const De=w.children;for(let Ne=0,Ve=De.length;Ne<Ve;Ne++)mi(De[Ne],W,se,J)}function ma(w,W,se,J){const{opaque:Y,transmissive:De,transparent:Ne}=w;D.setupLightsView(se),ce===!0&&$e.setGlobalState(O.clippingPlanes,se),J&&We.viewport(le.copy(J)),Y.length>0&&Xn(Y,W,se),De.length>0&&Xn(De,W,se),Ne.length>0&&Xn(Ne,W,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Ca(w,W,se,J){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[J.id]===void 0&&(D.state.transmissionRenderTarget[J.id]=new Ps(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Ko:Ga,minFilter:Rs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const De=D.state.transmissionRenderTarget[J.id],Ne=J.viewport||le;De.setSize(Ne.z*O.transmissionResolutionScale,Ne.w*O.transmissionResolutionScale);const Ve=O.getRenderTarget(),je=O.getActiveCubeFace(),tt=O.getActiveMipmapLevel();O.setRenderTarget(De),O.getClearColor(N),X=O.getClearAlpha(),X<1&&O.setClearColor(16777215,.5),O.clear(),st&&Ae.render(se);const nt=O.toneMapping;O.toneMapping=Zr;const it=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),D.setupLightsView(J),ce===!0&&$e.setGlobalState(O.clippingPlanes,J),Xn(w,se,J),ht.updateMultisampleRenderTarget(De),ht.updateRenderTargetMipmap(De),yt.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Nt=0,Bt=W.length;Nt<Bt;Nt++){const Dt=W[Nt],{object:kt,geometry:rt,material:Le,group:Pe}=Dt;if(Le.side===Fa&&kt.layers.test(J.layers)){const pt=Le.side;Le.side=Bi,Le.needsUpdate=!0,Tn(kt,se,J,rt,Le,Pe),Le.side=pt,Le.needsUpdate=!0,xt=!0}}xt===!0&&(ht.updateMultisampleRenderTarget(De),ht.updateRenderTargetMipmap(De))}O.setRenderTarget(Ve,je,tt),O.setClearColor(N,X),it!==void 0&&(J.viewport=it),O.toneMapping=nt}function Xn(w,W,se){const J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,De=w.length;Y<De;Y++){const Ne=w[Y],{object:Ve,geometry:je,group:tt}=Ne;let nt=Ne.material;nt.allowOverride===!0&&J!==null&&(nt=J),Ve.layers.test(se.layers)&&Tn(Ve,W,se,je,nt,tt)}}function Tn(w,W,se,J,Y,De){w.onBeforeRender(O,W,se,J,Y,De),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(O,W,se,J,w,De),Y.transparent===!0&&Y.side===Fa&&Y.forceSinglePass===!1?(Y.side=Bi,Y.needsUpdate=!0,O.renderBufferDirect(se,W,J,Y,w,De),Y.side=Jr,Y.needsUpdate=!0,O.renderBufferDirect(se,W,J,Y,w,De),Y.side=Fa):O.renderBufferDirect(se,W,J,Y,w,De),w.onAfterRender(O,W,se,J,Y,De)}function Dn(w,W,se){W.isScene!==!0&&(W=bn);const J=Qe.get(w),Y=D.state.lights,De=D.state.shadowsArray,Ne=Y.state.version,Ve=he.getParameters(w,Y.state,De,W,se),je=he.getProgramCacheKey(Ve);let tt=J.programs;J.environment=w.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(w.isMeshStandardMaterial?M:L).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,tt===void 0&&(w.addEventListener("dispose",ut),tt=new Map,J.programs=tt);let nt=tt.get(je);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Ne)return Va(w,Ve),nt}else Ve.uniforms=he.getUniforms(w),w.onBeforeCompile(Ve,O),nt=he.acquireProgram(Ve,je),tt.set(je,nt),J.uniforms=Ve.uniforms;const it=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(it.clippingPlanes=$e.uniform),Va(w,Ve),J.needsLights=Fs(w),J.lightsStateVersion=Ne,J.needsLights&&(it.ambientLightColor.value=Y.state.ambient,it.lightProbe.value=Y.state.probe,it.directionalLights.value=Y.state.directional,it.directionalLightShadows.value=Y.state.directionalShadow,it.spotLights.value=Y.state.spot,it.spotLightShadows.value=Y.state.spotShadow,it.rectAreaLights.value=Y.state.rectArea,it.ltc_1.value=Y.state.rectAreaLTC1,it.ltc_2.value=Y.state.rectAreaLTC2,it.pointLights.value=Y.state.point,it.pointLightShadows.value=Y.state.pointShadow,it.hemisphereLights.value=Y.state.hemi,it.directionalShadowMap.value=Y.state.directionalShadowMap,it.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,it.spotShadowMap.value=Y.state.spotShadowMap,it.spotLightMatrix.value=Y.state.spotLightMatrix,it.spotLightMap.value=Y.state.spotLightMap,it.pointShadowMap.value=Y.state.pointShadowMap,it.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function ei(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=cf.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Va(w,W){const se=Qe.get(w);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function Is(w,W,se,J,Y){W.isScene!==!0&&(W=bn),ht.resetTextureUnits();const De=W.fog,Ne=J.isMeshStandardMaterial?W.environment:null,Ve=R===null?O.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ko,je=(J.isMeshStandardMaterial?M:L).get(J.envMap||Ne),tt=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),it=!!se.morphAttributes.position,xt=!!se.morphAttributes.normal,Nt=!!se.morphAttributes.color;let Bt=Zr;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Bt=O.toneMapping);const Dt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,kt=Dt!==void 0?Dt.length:0,rt=Qe.get(J),Le=D.state.lights;if(ce===!0&&(we===!0||w!==te)){const Ft=w===te&&J.id===j;$e.setState(J,w,Ft)}let Pe=!1;J.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Le.state.version||rt.outputColorSpace!==Ve||Y.isBatchedMesh&&rt.batching===!1||!Y.isBatchedMesh&&rt.batching===!0||Y.isBatchedMesh&&rt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&rt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&rt.instancing===!1||!Y.isInstancedMesh&&rt.instancing===!0||Y.isSkinnedMesh&&rt.skinning===!1||!Y.isSkinnedMesh&&rt.skinning===!0||Y.isInstancedMesh&&rt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&rt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&rt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&rt.instancingMorph===!1&&Y.morphTexture!==null||rt.envMap!==je||J.fog===!0&&rt.fog!==De||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==$e.numPlanes||rt.numIntersection!==$e.numIntersection)||rt.vertexAlphas!==tt||rt.vertexTangents!==nt||rt.morphTargets!==it||rt.morphNormals!==xt||rt.morphColors!==Nt||rt.toneMapping!==Bt||rt.morphTargetsCount!==kt)&&(Pe=!0):(Pe=!0,rt.__version=J.version);let pt=rt.currentProgram;Pe===!0&&(pt=Dn(J,W,Y));let wt=!1,ft=!1,Zt=!1;const at=pt.getUniforms(),Pt=rt.uniforms;if(We.useProgram(pt.program)&&(wt=!0,ft=!0,Zt=!0),J.id!==j&&(j=J.id,ft=!0),wt||te!==w){We.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),at.setValue(I,"projectionMatrix",w.projectionMatrix),at.setValue(I,"viewMatrix",w.matrixWorldInverse);const en=at.map.cameraPosition;en!==void 0&&en.setValue(I,Xe.setFromMatrixPosition(w.matrixWorld)),jt.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&at.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),te!==w&&(te=w,ft=!0,Zt=!0)}if(Y.isSkinnedMesh){at.setOptional(I,Y,"bindMatrix"),at.setOptional(I,Y,"bindMatrixInverse");const Ft=Y.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),at.setValue(I,"boneTexture",Ft.boneTexture,ht))}Y.isBatchedMesh&&(at.setOptional(I,Y,"batchingTexture"),at.setValue(I,"batchingTexture",Y._matricesTexture,ht),at.setOptional(I,Y,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",Y._indirectTexture,ht),at.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",Y._colorsTexture,ht));const Ut=se.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&Ke.update(Y,se,pt),(ft||rt.receiveShadow!==Y.receiveShadow)&&(rt.receiveShadow=Y.receiveShadow,at.setValue(I,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Pt.envMap.value=je,Pt.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(Pt.envMapIntensity.value=W.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Gw()),ft&&(at.setValue(I,"toneMappingExposure",O.toneMappingExposure),rt.needsLights&&Bs(Pt,Zt),De&&J.fog===!0&&Je.refreshFogUniforms(Pt,De),Je.refreshMaterialUniforms(Pt,J,me,de,D.state.transmissionRenderTarget[w.id]),cf.upload(I,ei(rt),Pt,ht)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(cf.upload(I,ei(rt),Pt,ht),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&at.setValue(I,"center",Y.center),at.setValue(I,"modelViewMatrix",Y.modelViewMatrix),at.setValue(I,"normalMatrix",Y.normalMatrix),at.setValue(I,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ft=J.uniformsGroups;for(let en=0,hn=Ft.length;en<hn;en++){const Un=Ft[en];ze.update(Un,pt),ze.bind(Un,pt)}}return pt}function Bs(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Fs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,W,se){const J=Qe.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Qe.get(w.texture).__webglTexture=W,Qe.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:se,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const se=Qe.get(w);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const ga=I.createFramebuffer();this.setRenderTarget=function(w,W=0,se=0){R=w,ie=W,C=se;let J=!0,Y=null,De=!1,Ne=!1;if(w){const je=Qe.get(w);if(je.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(je.__webglFramebuffer===void 0)ht.setupRenderTarget(w);else if(je.__hasExternalTextures)ht.rebindTextures(w,Qe.get(w.texture).__webglTexture,Qe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const it=w.depthTexture;if(je.__boundDepthTexture!==it){if(it!==null&&Qe.has(it)&&(w.width!==it.image.width||w.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(w)}}const tt=w.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ne=!0);const nt=Qe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[W])?Y=nt[W][se]:Y=nt[W],De=!0):w.samples>0&&ht.useMultisampledRTT(w)===!1?Y=Qe.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?Y=nt[se]:Y=nt,le.copy(w.viewport),pe.copy(w.scissor),$=w.scissorTest}else le.copy(K).multiplyScalar(me).floor(),pe.copy(_e).multiplyScalar(me).floor(),$=Re;if(se!==0&&(Y=ga),We.bindFramebuffer(I.FRAMEBUFFER,Y)&&J&&We.drawBuffers(w,Y),We.viewport(le),We.scissor(pe),We.setScissorTest($),De){const je=Qe.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,je.__webglTexture,se)}else if(Ne){const je=W;for(let tt=0;tt<w.textures.length;tt++){const nt=Qe.get(w.textures[tt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+tt,nt.__webglTexture,se,je)}}else if(w!==null&&se!==0){const je=Qe.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,se)}j=-1},this.readRenderTargetPixels=function(w,W,se,J,Y,De,Ne,Ve=0){if(!(w&&w.isWebGLRenderTarget)){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Qe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(je=je[Ne]),je){We.bindFramebuffer(I.FRAMEBUFFER,je);try{const tt=w.textures[Ve],nt=tt.format,it=tt.type;if(!jt.textureFormatReadable(nt)){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(it)){Rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-J&&se>=0&&se<=w.height-Y&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ve),I.readPixels(W,se,J,Y,lt.convert(nt),lt.convert(it),De))}finally{const tt=R!==null?Qe.get(R).__webglFramebuffer:null;We.bindFramebuffer(I.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(w,W,se,J,Y,De,Ne,Ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Qe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(je=je[Ne]),je)if(W>=0&&W<=w.width-J&&se>=0&&se<=w.height-Y){We.bindFramebuffer(I.FRAMEBUFFER,je);const tt=w.textures[Ve],nt=tt.format,it=tt.type;if(!jt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,xt),I.bufferData(I.PIXEL_PACK_BUFFER,De.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ve),I.readPixels(W,se,J,Y,lt.convert(nt),lt.convert(it),0);const Nt=R!==null?Qe.get(R).__webglFramebuffer:null;We.bindFramebuffer(I.FRAMEBUFFER,Nt);const Bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await r3(I,Bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,De),I.deleteBuffer(xt),I.deleteSync(Bt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,se=0){const J=Math.pow(2,-se),Y=Math.floor(w.image.width*J),De=Math.floor(w.image.height*J),Ne=W!==null?W.x:0,Ve=W!==null?W.y:0;ht.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,se,0,0,Ne,Ve,Y,De),We.unbindTexture()};const es=I.createFramebuffer(),xa=I.createFramebuffer();this.copyTextureToTexture=function(w,W,se=null,J=null,Y=0,De=null){De===null&&(Y!==0?(hc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Y,Y=0):De=0);let Ne,Ve,je,tt,nt,it,xt,Nt,Bt;const Dt=w.isCompressedTexture?w.mipmaps[De]:w.image;if(se!==null)Ne=se.max.x-se.min.x,Ve=se.max.y-se.min.y,je=se.isBox3?se.max.z-se.min.z:1,tt=se.min.x,nt=se.min.y,it=se.isBox3?se.min.z:0;else{const Ut=Math.pow(2,-Y);Ne=Math.floor(Dt.width*Ut),Ve=Math.floor(Dt.height*Ut),w.isDataArrayTexture?je=Dt.depth:w.isData3DTexture?je=Math.floor(Dt.depth*Ut):je=1,tt=0,nt=0,it=0}J!==null?(xt=J.x,Nt=J.y,Bt=J.z):(xt=0,Nt=0,Bt=0);const kt=lt.convert(W.format),rt=lt.convert(W.type);let Le;W.isData3DTexture?(ht.setTexture3D(W,0),Le=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ht.setTexture2DArray(W,0),Le=I.TEXTURE_2D_ARRAY):(ht.setTexture2D(W,0),Le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Pe=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wt=I.getParameter(I.UNPACK_SKIP_PIXELS),ft=I.getParameter(I.UNPACK_SKIP_ROWS),Zt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,it);const at=w.isDataArrayTexture||w.isData3DTexture,Pt=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Ut=Qe.get(w),Ft=Qe.get(W),en=Qe.get(Ut.__renderTarget),hn=Qe.get(Ft.__renderTarget);We.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let Un=0;Un<je;Un++)at&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.get(w).__webglTexture,Y,it+Un),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.get(W).__webglTexture,De,Bt+Un)),I.blitFramebuffer(tt,nt,Ne,Ve,xt,Nt,Ne,Ve,I.DEPTH_BUFFER_BIT,I.NEAREST);We.bindFramebuffer(I.READ_FRAMEBUFFER,null),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Qe.has(w)){const Ut=Qe.get(w),Ft=Qe.get(W);We.bindFramebuffer(I.READ_FRAMEBUFFER,es),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,xa);for(let en=0;en<je;en++)at?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ut.__webglTexture,Y,it+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ut.__webglTexture,Y),Pt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,De,Bt+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,De),Y!==0?I.blitFramebuffer(tt,nt,Ne,Ve,xt,Nt,Ne,Ve,I.COLOR_BUFFER_BIT,I.NEAREST):Pt?I.copyTexSubImage3D(Le,De,xt,Nt,Bt+en,tt,nt,Ne,Ve):I.copyTexSubImage2D(Le,De,xt,Nt,tt,nt,Ne,Ve);We.bindFramebuffer(I.READ_FRAMEBUFFER,null),We.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Pt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Le,De,xt,Nt,Bt,Ne,Ve,je,kt,rt,Dt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Le,De,xt,Nt,Bt,Ne,Ve,je,kt,Dt.data):I.texSubImage3D(Le,De,xt,Nt,Bt,Ne,Ve,je,kt,rt,Dt):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,De,xt,Nt,Ne,Ve,kt,rt,Dt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,De,xt,Nt,Dt.width,Dt.height,kt,Dt.data):I.texSubImage2D(I.TEXTURE_2D,De,xt,Nt,Ne,Ve,kt,rt,Dt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt),De===0&&W.generateMipmaps&&I.generateMipmap(Le),We.unbindTexture()},this.initRenderTarget=function(w){Qe.get(w).__webglFramebuffer===void 0&&ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ht.setTextureCube(w,0):w.isData3DTexture?ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ht.setTexture2DArray(w,0):ht.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){ie=0,C=0,R=null,We.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Yt._getUnpackColorSpace()}}const jw=""+new URL("2021-10-31-P_JYddXs.JPG",import.meta.url).href,kw=Object.freeze(Object.defineProperty({__proto__:null,default:jw},Symbol.toStringTag,{value:"Module"})),Xw=""+new URL("2021-10-31-DcWNroCu.jpeg",import.meta.url).href,Ww=Object.freeze(Object.defineProperty({__proto__:null,default:Xw},Symbol.toStringTag,{value:"Module"})),qw=""+new URL("2021-12-10-Cfb1W4aW.jpg",import.meta.url).href,Yw=Object.freeze(Object.defineProperty({__proto__:null,default:qw},Symbol.toStringTag,{value:"Module"})),$w=""+new URL("2022-05-13-ZW7768q6.JPG",import.meta.url).href,Zw=Object.freeze(Object.defineProperty({__proto__:null,default:$w},Symbol.toStringTag,{value:"Module"})),Kw=""+new URL("2022-06-13-CxNIdfIC.jpeg",import.meta.url).href,Qw=Object.freeze(Object.defineProperty({__proto__:null,default:Kw},Symbol.toStringTag,{value:"Module"})),Jw=""+new URL("2022-07-06-2-todjBix1.jpeg",import.meta.url).href,eR=Object.freeze(Object.defineProperty({__proto__:null,default:Jw},Symbol.toStringTag,{value:"Module"})),tR=""+new URL("2022-08-14-DUbsbZ4q.JPG",import.meta.url).href,nR=Object.freeze(Object.defineProperty({__proto__:null,default:tR},Symbol.toStringTag,{value:"Module"})),iR=""+new URL("2022-10-29 Large-BwUDGQao.jpeg",import.meta.url).href,aR=Object.freeze(Object.defineProperty({__proto__:null,default:iR},Symbol.toStringTag,{value:"Module"})),rR=""+new URL("2023-01-01-ZvfabK-5.jpeg",import.meta.url).href,sR=Object.freeze(Object.defineProperty({__proto__:null,default:rR},Symbol.toStringTag,{value:"Module"})),oR=""+new URL("2023-03-01-aqF_3lvk.jpeg",import.meta.url).href,lR=Object.freeze(Object.defineProperty({__proto__:null,default:oR},Symbol.toStringTag,{value:"Module"})),cR=""+new URL("2024-03-09-1-5r1AjpoY.jpeg",import.meta.url).href,uR=Object.freeze(Object.defineProperty({__proto__:null,default:cR},Symbol.toStringTag,{value:"Module"})),fR=""+new URL("2024-03-09-D0kOqaW7.jpeg",import.meta.url).href,dR=Object.freeze(Object.defineProperty({__proto__:null,default:fR},Symbol.toStringTag,{value:"Module"})),hR=""+new URL("2024-05-05-BOtxUIu1.jpeg",import.meta.url).href,pR=Object.freeze(Object.defineProperty({__proto__:null,default:hR},Symbol.toStringTag,{value:"Module"})),mR=""+new URL("2024-05-14-Dirs4CkQ.jpeg",import.meta.url).href,gR=Object.freeze(Object.defineProperty({__proto__:null,default:mR},Symbol.toStringTag,{value:"Module"})),xR=""+new URL("2024-07-21-DLIIzHuZ.mp4",import.meta.url).href,_R=Object.freeze(Object.defineProperty({__proto__:null,default:xR},Symbol.toStringTag,{value:"Module"})),vR=""+new URL("2024-07-28-DoG5eYmo.mp4",import.meta.url).href,bR=Object.freeze(Object.defineProperty({__proto__:null,default:vR},Symbol.toStringTag,{value:"Module"})),yR=""+new URL("2024-07-31-mlItGP0c.jpeg",import.meta.url).href,SR=Object.freeze(Object.defineProperty({__proto__:null,default:yR},Symbol.toStringTag,{value:"Module"})),MR=""+new URL("2024-08-10-1-CLHfImQR.mp4",import.meta.url).href,ER=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),TR=""+new URL("2024-08-10-usYrqNu_.jpeg",import.meta.url).href,AR=Object.freeze(Object.defineProperty({__proto__:null,default:TR},Symbol.toStringTag,{value:"Module"})),wR=""+new URL("2024-08-23-1-zHKGYiam.jpeg",import.meta.url).href,RR=Object.freeze(Object.defineProperty({__proto__:null,default:wR},Symbol.toStringTag,{value:"Module"})),CR=""+new URL("2024-08-23-3-DZL7AOVs.jpeg",import.meta.url).href,DR=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),UR=""+new URL("2024-08-23-4-CNdgbWFz.jpg",import.meta.url).href,LR=Object.freeze(Object.defineProperty({__proto__:null,default:UR},Symbol.toStringTag,{value:"Module"})),OR=""+new URL("2024-08-23-CzaGYrwc.jpg",import.meta.url).href,NR=Object.freeze(Object.defineProperty({__proto__:null,default:OR},Symbol.toStringTag,{value:"Module"})),PR=""+new URL("2024-08-23-CplMc93Q.mp4",import.meta.url).href,zR=Object.freeze(Object.defineProperty({__proto__:null,default:PR},Symbol.toStringTag,{value:"Module"})),IR=""+new URL("2024-08-25-cOKYphAI.mp4",import.meta.url).href,BR=Object.freeze(Object.defineProperty({__proto__:null,default:IR},Symbol.toStringTag,{value:"Module"})),FR=""+new URL("2024-09-01-CP4RYK6Z.jpeg",import.meta.url).href,HR=Object.freeze(Object.defineProperty({__proto__:null,default:FR},Symbol.toStringTag,{value:"Module"})),GR=""+new URL("2024-09-02-BIdH0tQs.jpeg",import.meta.url).href,VR=Object.freeze(Object.defineProperty({__proto__:null,default:GR},Symbol.toStringTag,{value:"Module"})),jR=""+new URL("2024-09-08-DRZDdej9.jpeg",import.meta.url).href,kR=Object.freeze(Object.defineProperty({__proto__:null,default:jR},Symbol.toStringTag,{value:"Module"})),XR=""+new URL("2024-09-19-02-CRrM6iw-.JPG",import.meta.url).href,WR=Object.freeze(Object.defineProperty({__proto__:null,default:XR},Symbol.toStringTag,{value:"Module"})),qR=""+new URL("2024-09-19-03-98asKbHO.mp4",import.meta.url).href,YR=Object.freeze(Object.defineProperty({__proto__:null,default:qR},Symbol.toStringTag,{value:"Module"})),$R=""+new URL("2024-09-19-Yttg9DWC.jpg",import.meta.url).href,ZR=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"})),KR=""+new URL("2024-09-25-BtbmW8ns.jpeg",import.meta.url).href,QR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),JR=""+new URL("2024-10-15-BF3fCPW2.jpeg",import.meta.url).href,eC=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),tC=""+new URL("2024-10-20-1-UaeBmH8_.jpeg",import.meta.url).href,nC=Object.freeze(Object.defineProperty({__proto__:null,default:tC},Symbol.toStringTag,{value:"Module"})),iC=""+new URL("2024-10-20-2-CXE_ZJ88.jpeg",import.meta.url).href,aC=Object.freeze(Object.defineProperty({__proto__:null,default:iC},Symbol.toStringTag,{value:"Module"})),rC=""+new URL("2024-10-20-3-DFppJf_d.jpeg",import.meta.url).href,sC=Object.freeze(Object.defineProperty({__proto__:null,default:rC},Symbol.toStringTag,{value:"Module"})),oC=""+new URL("2024-10-20-4-DYSIXoD2.mp4",import.meta.url).href,lC=Object.freeze(Object.defineProperty({__proto__:null,default:oC},Symbol.toStringTag,{value:"Module"})),cC=""+new URL("2024-10-20-7 Large-p3W3qreI.jpeg",import.meta.url).href,uC=Object.freeze(Object.defineProperty({__proto__:null,default:cC},Symbol.toStringTag,{value:"Module"})),fC=""+new URL("2024-10-20-DIUHYx3b.jpeg",import.meta.url).href,dC=Object.freeze(Object.defineProperty({__proto__:null,default:fC},Symbol.toStringTag,{value:"Module"})),hC=""+new URL("2024-10-20-3nGD_4Ej.mp4",import.meta.url).href,pC=Object.freeze(Object.defineProperty({__proto__:null,default:hC},Symbol.toStringTag,{value:"Module"})),mC=""+new URL("2024-10-22-Bfi-n3YD.JPG",import.meta.url).href,gC=Object.freeze(Object.defineProperty({__proto__:null,default:mC},Symbol.toStringTag,{value:"Module"})),xC=""+new URL("2024-10-26-6I-A6_EY.jpeg",import.meta.url).href,_C=Object.freeze(Object.defineProperty({__proto__:null,default:xC},Symbol.toStringTag,{value:"Module"})),vC=""+new URL("2024-11-01-B0vPq0V1.mp4",import.meta.url).href,bC=Object.freeze(Object.defineProperty({__proto__:null,default:vC},Symbol.toStringTag,{value:"Module"})),yC=""+new URL("2024-11-03-C4k0HJqk.mp4",import.meta.url).href,SC=Object.freeze(Object.defineProperty({__proto__:null,default:yC},Symbol.toStringTag,{value:"Module"})),MC=""+new URL("2024-11-08-kM8awXmA.jpeg",import.meta.url).href,EC=Object.freeze(Object.defineProperty({__proto__:null,default:MC},Symbol.toStringTag,{value:"Module"})),TC=""+new URL("2024-11-17-1-XWAmTuvK.jpeg",import.meta.url).href,AC=Object.freeze(Object.defineProperty({__proto__:null,default:TC},Symbol.toStringTag,{value:"Module"})),wC=""+new URL("2024-11-17-2-CMXhdSPr.jpeg",import.meta.url).href,RC=Object.freeze(Object.defineProperty({__proto__:null,default:wC},Symbol.toStringTag,{value:"Module"})),CC=""+new URL("2024-11-17-2-ClCIFVUl.mp4",import.meta.url).href,DC=Object.freeze(Object.defineProperty({__proto__:null,default:CC},Symbol.toStringTag,{value:"Module"})),UC=""+new URL("2024-11-17-3-CL__783K.jpg",import.meta.url).href,LC=Object.freeze(Object.defineProperty({__proto__:null,default:UC},Symbol.toStringTag,{value:"Module"})),OC=""+new URL("2024-11-17-Dlj7Ggg_.jpeg",import.meta.url).href,NC=Object.freeze(Object.defineProperty({__proto__:null,default:OC},Symbol.toStringTag,{value:"Module"})),PC=""+new URL("2024-12-07-D5ESRNF6.jpeg",import.meta.url).href,zC=Object.freeze(Object.defineProperty({__proto__:null,default:PC},Symbol.toStringTag,{value:"Module"})),IC=""+new URL("2024-12-11-LCPTHdsD.JPG",import.meta.url).href,BC=Object.freeze(Object.defineProperty({__proto__:null,default:IC},Symbol.toStringTag,{value:"Module"})),FC=""+new URL("2025-02-12-1-BX8k8eV8.mp4",import.meta.url).href,HC=Object.freeze(Object.defineProperty({__proto__:null,default:FC},Symbol.toStringTag,{value:"Module"})),GC=""+new URL("2025-02-12-CmQmbk28.jpeg",import.meta.url).href,VC=Object.freeze(Object.defineProperty({__proto__:null,default:GC},Symbol.toStringTag,{value:"Module"})),jC=""+new URL("2025-02-26-CsXnUoPc.jpeg",import.meta.url).href,kC=Object.freeze(Object.defineProperty({__proto__:null,default:jC},Symbol.toStringTag,{value:"Module"})),XC=""+new URL("2025-03-07-rHk_O326.jpeg",import.meta.url).href,WC=Object.freeze(Object.defineProperty({__proto__:null,default:XC},Symbol.toStringTag,{value:"Module"})),qC=""+new URL("2025-03-08-1-4LawzdwT.jpeg",import.meta.url).href,YC=Object.freeze(Object.defineProperty({__proto__:null,default:qC},Symbol.toStringTag,{value:"Module"})),$C=""+new URL("2025-03-08-CsRDiP1v.jpeg",import.meta.url).href,ZC=Object.freeze(Object.defineProperty({__proto__:null,default:$C},Symbol.toStringTag,{value:"Module"})),KC=""+new URL("2025-03-08-JZOWf09E.mp4",import.meta.url).href,QC=Object.freeze(Object.defineProperty({__proto__:null,default:KC},Symbol.toStringTag,{value:"Module"})),JC=""+new URL("2025-03-12-Ie8pwHnw.jpeg",import.meta.url).href,e4=Object.freeze(Object.defineProperty({__proto__:null,default:JC},Symbol.toStringTag,{value:"Module"})),t4=""+new URL("2025-04-20-02-CTl6eCl4.jpeg",import.meta.url).href,n4=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),i4=""+new URL("2025-04-20-m521MAgC.jpeg",import.meta.url).href,a4=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),r4=""+new URL("2025-04-24-BJB22Ibv.jpeg",import.meta.url).href,s4=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),o4=""+new URL("2025-05-09-BgJ2uyI6.jpeg",import.meta.url).href,l4=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),c4=""+new URL("2025-05-10-01-CmiKVq7X.jpeg",import.meta.url).href,u4=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),f4=""+new URL("2025-05-10-03-C7cYxHVB.jpeg",import.meta.url).href,d4=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),h4=""+new URL("2025-05-10-04-D51B-kbo.jpeg",import.meta.url).href,p4=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),m4=""+new URL("2025-05-10-05-ZspL2DFk.jpg",import.meta.url).href,g4=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),x4=""+new URL("2025-05-23-DrMQ0MaP.mp4",import.meta.url).href,_4=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),v4=""+new URL("2025-05-30-B31ntIOA.jpeg",import.meta.url).href,b4=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),y4=""+new URL("2025-06-09-xDmcrKNe.mp4",import.meta.url).href,S4=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),M4=""+new URL("2025-06-16-NxVx32rp.jpg",import.meta.url).href,E4=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),T4=""+new URL("2025-06-17-C8HU58WO.jpeg",import.meta.url).href,A4=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),w4=""+new URL("2025-06-19-DxprC_A4.jpeg",import.meta.url).href,R4=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),C4=""+new URL("2025-06-20-DQi2tzWE.jpeg",import.meta.url).href,D4=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),U4=""+new URL("2025-06-29-BcidFJty.JPG",import.meta.url).href,L4=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),O4=""+new URL("2025-07-02-Or5BW8GN.jpeg",import.meta.url).href,N4=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),P4=""+new URL("2025-07-04-C1wj0M1h.jpeg",import.meta.url).href,z4=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),I4=""+new URL("2025-07-19-B14G1TL2.jpg",import.meta.url).href,B4=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),F4=""+new URL("2025-07-23-CTlJaCIv.jpeg",import.meta.url).href,H4=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),G4=""+new URL("2025-08-02-BYfa6nBi.jpeg",import.meta.url).href,V4=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),j4=""+new URL("2025-08-15-BwvLJtju.jpeg",import.meta.url).href,k4=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),X4=""+new URL("2025-08-16-BOeyTKzo.mp4",import.meta.url).href,W4=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),q4=""+new URL("2025-10-04-BEvm4bRr.mp4",import.meta.url).href,Y4=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),$4=""+new URL("2025-10-08-2-BJssy64D.jpeg",import.meta.url).href,Z4=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),K4=""+new URL("2025-10-08-BbBU71mk.jpeg",import.meta.url).href,Q4=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),J4=""+new URL("2025-10-09-Be-NfefO.JPG",import.meta.url).href,eD=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),tD=""+new URL("2025-10-10-DSgqI2iz.jpeg",import.meta.url).href,nD=Object.freeze(Object.defineProperty({__proto__:null,default:tD},Symbol.toStringTag,{value:"Module"})),iD=""+new URL("2025-10-11-BE2_tkS1.jpeg",import.meta.url).href,aD=Object.freeze(Object.defineProperty({__proto__:null,default:iD},Symbol.toStringTag,{value:"Module"})),rD=""+new URL("2025-10-31-2-4DBQdFfB.jpeg",import.meta.url).href,sD=Object.freeze(Object.defineProperty({__proto__:null,default:rD},Symbol.toStringTag,{value:"Module"})),oD=""+new URL("2025-10-31-3-CMAQg5eZ.mp4",import.meta.url).href,lD=Object.freeze(Object.defineProperty({__proto__:null,default:oD},Symbol.toStringTag,{value:"Module"})),cD=""+new URL("2025-10-31-C_2gu8e1.jpeg",import.meta.url).href,uD=Object.freeze(Object.defineProperty({__proto__:null,default:cD},Symbol.toStringTag,{value:"Module"})),fD=""+new URL("2025-11-04-CxajqofK.jpeg",import.meta.url).href,dD=Object.freeze(Object.defineProperty({__proto__:null,default:fD},Symbol.toStringTag,{value:"Module"})),hD=""+new URL("2025-11-09-xa64oJGS.jpeg",import.meta.url).href,pD=Object.freeze(Object.defineProperty({__proto__:null,default:hD},Symbol.toStringTag,{value:"Module"})),mD=""+new URL("2025-11-09-B-v5Ulwz.mp4",import.meta.url).href,gD=Object.freeze(Object.defineProperty({__proto__:null,default:mD},Symbol.toStringTag,{value:"Module"})),xD=""+new URL("2025-11-29-Dq6Asxu3.jpeg",import.meta.url).href,_D=Object.freeze(Object.defineProperty({__proto__:null,default:xD},Symbol.toStringTag,{value:"Module"})),vD=""+new URL("2025-12-03-DSQwbWlu.JPG",import.meta.url).href,bD=Object.freeze(Object.defineProperty({__proto__:null,default:vD},Symbol.toStringTag,{value:"Module"})),yD=""+new URL("2025-12-03-BkHMkApE.jpeg",import.meta.url).href,SD=Object.freeze(Object.defineProperty({__proto__:null,default:yD},Symbol.toStringTag,{value:"Module"})),MD=""+new URL("2025-12-04-02-CEkCKTxA.jpeg",import.meta.url).href,ED=Object.freeze(Object.defineProperty({__proto__:null,default:MD},Symbol.toStringTag,{value:"Module"})),TD=""+new URL("2025-12-04-10-C3KxTeOd.mp4",import.meta.url).href,AD=Object.freeze(Object.defineProperty({__proto__:null,default:TD},Symbol.toStringTag,{value:"Module"})),wD=""+new URL("2025-12-04-supQhv4p.jpeg",import.meta.url).href,RD=Object.freeze(Object.defineProperty({__proto__:null,default:wD},Symbol.toStringTag,{value:"Module"})),CD=""+new URL("2025-12-05-01-BFaM4Oml.mp4",import.meta.url).href,DD=Object.freeze(Object.defineProperty({__proto__:null,default:CD},Symbol.toStringTag,{value:"Module"})),UD=""+new URL("2025-12-05-02-BrtAXchK.mp4",import.meta.url).href,LD=Object.freeze(Object.defineProperty({__proto__:null,default:UD},Symbol.toStringTag,{value:"Module"})),d1=""+new URL("Ignore_2024-08-23-5-CqrWweLB.png",import.meta.url).href,OD=Object.freeze(Object.defineProperty({__proto__:null,default:d1},Symbol.toStringTag,{value:"Module"})),h1=""+new URL("Ignore_2025-05-10-06-CBdoQwmN.png",import.meta.url).href,ND=Object.freeze(Object.defineProperty({__proto__:null,default:h1},Symbol.toStringTag,{value:"Module"})),PD=""+new URL("BeggingBuddha-CATTcvPs.mp3",import.meta.url).href,zD=""+new URL("FujiMt-CkmfackC.mp3",import.meta.url).href,ID=""+new URL("Handbeaten-fishball-55E7UMtG.mp3",import.meta.url).href,BD=""+new URL("LouMei-B79Jap0g.mp3",import.meta.url).href,D0=[{title:"卤味",src:BD},{title:"手打鱼丸",src:ID},{title:"Begging Buddha",src:PD},{title:"Fuji Mt",src:zD}],FD=Object.assign({"./assets/media/2021-10-31.JPG":kw,"./assets/media/2021-10-31.jpeg":Ww,"./assets/media/2021-12-10.jpg":Yw,"./assets/media/2022-05-13.JPG":Zw,"./assets/media/2022-06-13.jpeg":Qw,"./assets/media/2022-07-06-2.jpeg":eR,"./assets/media/2022-08-14.JPG":nR,"./assets/media/2022-10-29 Large.jpeg":aR,"./assets/media/2023-01-01.jpeg":sR,"./assets/media/2023-03-01.jpeg":lR,"./assets/media/2024-03-09-1.jpeg":uR,"./assets/media/2024-03-09.jpeg":dR,"./assets/media/2024-05-05.jpeg":pR,"./assets/media/2024-05-14.jpeg":gR,"./assets/media/2024-07-21.mp4":_R,"./assets/media/2024-07-28.mp4":bR,"./assets/media/2024-07-31.jpeg":SR,"./assets/media/2024-08-10-1.mp4":ER,"./assets/media/2024-08-10.jpeg":AR,"./assets/media/2024-08-23-1.jpeg":RR,"./assets/media/2024-08-23-3.jpeg":DR,"./assets/media/2024-08-23-4.jpg":LR,"./assets/media/2024-08-23.jpg":NR,"./assets/media/2024-08-23.mp4":zR,"./assets/media/2024-08-25.mp4":BR,"./assets/media/2024-09-01.jpeg":HR,"./assets/media/2024-09-02.jpeg":VR,"./assets/media/2024-09-08.jpeg":kR,"./assets/media/2024-09-19-02.JPG":WR,"./assets/media/2024-09-19-03.mp4":YR,"./assets/media/2024-09-19.jpg":ZR,"./assets/media/2024-09-25.jpeg":QR,"./assets/media/2024-10-15.jpeg":eC,"./assets/media/2024-10-20-1.jpeg":nC,"./assets/media/2024-10-20-2.jpeg":aC,"./assets/media/2024-10-20-3.jpeg":sC,"./assets/media/2024-10-20-4.mp4":lC,"./assets/media/2024-10-20-7 Large.jpeg":uC,"./assets/media/2024-10-20.jpeg":dC,"./assets/media/2024-10-20.mp4":pC,"./assets/media/2024-10-22.JPG":gC,"./assets/media/2024-10-26.jpeg":_C,"./assets/media/2024-11-01.mp4":bC,"./assets/media/2024-11-03.mp4":SC,"./assets/media/2024-11-08.jpeg":EC,"./assets/media/2024-11-17-1.jpeg":AC,"./assets/media/2024-11-17-2.jpeg":RC,"./assets/media/2024-11-17-2.mp4":DC,"./assets/media/2024-11-17-3.jpg":LC,"./assets/media/2024-11-17.jpeg":NC,"./assets/media/2024-12-07.jpeg":zC,"./assets/media/2024-12-11.JPG":BC,"./assets/media/2025-02-12-1.mp4":HC,"./assets/media/2025-02-12.jpeg":VC,"./assets/media/2025-02-26.jpeg":kC,"./assets/media/2025-03-07.jpeg":WC,"./assets/media/2025-03-08-1.jpeg":YC,"./assets/media/2025-03-08.jpeg":ZC,"./assets/media/2025-03-08.mp4":QC,"./assets/media/2025-03-12.jpeg":e4,"./assets/media/2025-04-20-02.jpeg":n4,"./assets/media/2025-04-20.jpeg":a4,"./assets/media/2025-04-24.jpeg":s4,"./assets/media/2025-05-09.jpeg":l4,"./assets/media/2025-05-10-01.jpeg":u4,"./assets/media/2025-05-10-03.jpeg":d4,"./assets/media/2025-05-10-04.jpeg":p4,"./assets/media/2025-05-10-05.jpg":g4,"./assets/media/2025-05-23.mp4":_4,"./assets/media/2025-05-30.jpeg":b4,"./assets/media/2025-06-09.mp4":S4,"./assets/media/2025-06-16.jpg":E4,"./assets/media/2025-06-17.jpeg":A4,"./assets/media/2025-06-19.jpeg":R4,"./assets/media/2025-06-20.jpeg":D4,"./assets/media/2025-06-29.JPG":L4,"./assets/media/2025-07-02.jpeg":N4,"./assets/media/2025-07-04.jpeg":z4,"./assets/media/2025-07-19.jpg":B4,"./assets/media/2025-07-23.jpeg":H4,"./assets/media/2025-08-02.jpeg":V4,"./assets/media/2025-08-15.jpeg":k4,"./assets/media/2025-08-16.mp4":W4,"./assets/media/2025-10-04.mp4":Y4,"./assets/media/2025-10-08-2.jpeg":Z4,"./assets/media/2025-10-08.jpeg":Q4,"./assets/media/2025-10-09.JPG":eD,"./assets/media/2025-10-10.jpeg":nD,"./assets/media/2025-10-11.jpeg":aD,"./assets/media/2025-10-31-2.jpeg":sD,"./assets/media/2025-10-31-3.mp4":lD,"./assets/media/2025-10-31.jpeg":uD,"./assets/media/2025-11-04.jpeg":dD,"./assets/media/2025-11-09.jpeg":pD,"./assets/media/2025-11-09.mp4":gD,"./assets/media/2025-11-29.jpeg":_D,"./assets/media/2025-12-03.JPG":bD,"./assets/media/2025-12-03.jpeg":SD,"./assets/media/2025-12-04-02.jpeg":ED,"./assets/media/2025-12-04-10.mp4":AD,"./assets/media/2025-12-04.jpeg":RD,"./assets/media/2025-12-05-01.mp4":DD,"./assets/media/2025-12-05-02.mp4":LD,"./assets/media/Ignore_2024-08-23-5.png":OD,"./assets/media/Ignore_2025-05-10-06.png":ND}),Lp=s=>{const e=s.match(/(\d{4}-\d{2}-\d{2})/);return e?e[1]:s},HD="ignore_",GD={"2025-05-23.mp4":"The best egg-fried rice in SF","2024-07-28.mp4":"Baby Seagull Rescue Mission"},VD={"2023-03-01.jpeg":"399开张","2024-10-20-1.jpeg":"Bye Caroline","2024-11-17-1.jpeg":"吴情吴义","2025-03-07.jpeg":"学滑雪","2025-10-31.jpeg":"Halloween","2025-12-04.jpeg":"Last Day"},dm=Object.entries(FD).map(([s,e])=>{const n=s.split("/").pop()||s;if(n.toLowerCase().startsWith(HD))return null;const a=e.default,c=n.toLowerCase().split(".").pop()||"",u=c==="mp4"||c==="mov";if(!u&&!(c==="jpg"||c==="jpeg"||c==="png"))return null;const m=u?"video":"image",p=Lp(n);return{filename:n,src:a,previewSrc:a,type:m,sortKey:p}}).filter(s=>s!==null);dm.push({filename:"Ignore_2025-05-10-06.png",src:"https://vimeo.com/1083175160/86c067f4f9",previewSrc:h1,embedUrl:"https://player.vimeo.com/video/1083175160?h=86c067f4f9",type:"embed",sortKey:"2025-05-10",dateOverride:"2025-05-10",titleOverride:"2025-05-10",description:"Mini-film Festival Winner",timelineLabel:"春天里"});dm.push({filename:"2024-08-23.mp4",type:"embed",sortKey:"2024-08-23",dateOverride:"2024-08-23",src:"https://player.vimeo.com/video/1144210034",previewSrc:d1,embedUrl:"https://player.vimeo.com/video/1144210034",titleOverride:"2024-08-23",description:"Who makes the most authentic old Beijing Zhajiang Noodles?",timelineLabel:"炸酱面大赛"});const Ba=dm.sort((s,e)=>s.sortKey.localeCompare(e.sortKey)||s.filename.localeCompare(e.filename)).map((s,e)=>({id:String(e+1),type:s.type,src:s.src,previewSrc:s.previewSrc,embedUrl:s.embedUrl,timelineLabel:s.timelineLabel||VD[s.filename],title:s.dateOverride||Lp(s.filename),description:s.description??GD[s.filename]??"",date:s.dateOverride||Lp(s.filename),filename:s.filename})),Op={"2021-10-31.JPG":{width:768,height:1024,aspectRatio:.75},"2021-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2021-12-10.jpg":{width:869,height:982,aspectRatio:.884928716904277},"2022-05-13.JPG":{width:1512,height:2016,aspectRatio:.75},"2022-06-13.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2022-07-06-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2022-08-14.JPG":{width:2231,height:4032,aspectRatio:.5533234126984127},"2022-10-29 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-01-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-03-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-05-05.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-05-14.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-07-21.mp4":{width:810,height:1080,aspectRatio:.75},"2024-07-28.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-07-31.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-08-10-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-08-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-08-23-1.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-3.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-4.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.mp4":{width:720,height:960,aspectRatio:.75},"2024-08-25.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-19-02.JPG":{width:2048,height:3089,aspectRatio:.6629977338944643},"2024-09-19-03.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-19.jpg":{width:2075,height:3130,aspectRatio:.6629392971246006},"2024-09-25.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-10-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20-1.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-3.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-4.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-20-7 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20.MOV":{width:3840,height:2160,aspectRatio:1.7777777777777777},"2024-10-20.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-22.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2024-10-26.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-11-01.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-03.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-11-17-3.jpg":{width:1290,height:2228,aspectRatio:.5789946140035906},"2024-11-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-11.JPG":{width:1170,height:2080,aspectRatio:.5625},"2025-02-12-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-02-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-02-26.JPG":{width:3089,height:2048,aspectRatio:1.50830078125},"2025-03-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-03-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-24.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-05-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-03.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-05.jpg":{width:1290,height:1710,aspectRatio:.7543859649122807},"2025-05-23.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-05-30.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-09.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-06-16.jpg":{width:1280,height:1707,aspectRatio:.7498535442296427},"2025-06-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-19.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-06-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-29.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2025-07-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-19.jpg":{width:3024,height:4032,aspectRatio:.75},"2025-07-23.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-16.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-10-04.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-08-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-09.JPG":{width:1080,height:1920,aspectRatio:.5625},"2025-10-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-11.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-31-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-10-31-3.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-11-29.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-03.JPG":{width:1263,height:1535,aspectRatio:.8228013029315961},"2025-12-03.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-12-04-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-04-10.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-12-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-05-01.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-12-05-02.mp4":{width:1630,height:1080,aspectRatio:1.5092592592592593},"Ignore_2024-08-23-5.png":{width:1090,height:1966,aspectRatio:.5544252288911495},"Ignore_2025-05-10-06.png":{width:3448,height:1724,aspectRatio:2}},U0=""+new URL("cover-BrcYv754.mp4",import.meta.url).href,m2=""+new URL("Balloon-C59jG2U_.wav",import.meta.url).href,jD=""+new URL("Typing-K6XFAZpo.mp3",import.meta.url).href,kD=""+new URL("curtain-D_OCfkhx.wav",import.meta.url).href,p1=s=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext y='32' font-size='32'%3E${encodeURIComponent(s)}%3C/text%3E%3C/svg%3E") 16 16, auto`,XD=p1("❤️"),WD=p1("🌸"),qD=({onStartTransition:s})=>{const[e,n]=Ie.useState(0),[a,o]=Ie.useState(!1),[c,u]=Ie.useState(!1),[d,m]=Ie.useState(null),[p,g]=Ie.useState([]),x="Chef of SF's Finest Egg Fried Rice 👨🏽‍🍳, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys 🐵, Award-winning Transgender Actor, Watermelon Annihilator, 华埠老广地陪, Slayer of 100+ Arkvelds,连续戒烟成功者...",[_,y]=Ie.useState(""),E=Ie.useRef(0),A=Ie.useRef(!1),S=Ie.useRef(null),v=Ie.useRef(null),P=Ie.useRef(null),D=Ie.useRef(!1),z=($,N,X)=>{E.current+=1;const k=E.current;g(de=>[...de,{id:k,x:$,y:N,scale:X}])};Ie.useEffect(()=>{let $=0;const N=Ba.slice(0,4),X=[{src:U0,previewSrc:U0,type:"video"},...Ba.filter(_e=>_e.type==="image"),...N],k=new Set,de=X.filter(_e=>{const Re=_e.previewSrc||_e.src;return k.has(Re)?!1:(k.add(Re),!0)}),me=de.length||1,U=_e=>new Promise(Re=>{const Z=new Image;Z.src=_e,Z.onload=()=>Re(),Z.onerror=()=>Re()}),ae=async()=>{const _e=de.map(Re=>U(Re.previewSrc||Re.src).then(()=>{$++,n(Math.floor($/me*100))}));await Promise.all(_e),setTimeout(()=>o(!0),300)},K=setTimeout(()=>{n(100),o(!0)},6e3);ae().finally(()=>clearTimeout(K))},[]),Ie.useEffect(()=>{var k;if(!v.current){const de=new Audio(jD);de.loop=!0,de.volume=.4,v.current=de}(k=v.current)==null||k.play().catch(()=>{});let $=0;const X=setInterval(()=>{var de;$+=1,y(x.slice(0,$)),$>=x.length&&((de=v.current)==null||de.pause(),v.current&&(v.current.currentTime=0),clearInterval(X))},30);return()=>{var de;clearInterval(X),(de=v.current)==null||de.pause(),v.current&&(v.current.currentTime=0)}},[x]);const V=()=>{var $;u(!0),D.current=!0,A.current=!1,m(null),g(N=>N.map(X=>({...X,fading:!0}))),setTimeout(()=>g([]),250),S.current&&(S.current.pause(),S.current.currentTime=0),P.current||(P.current=new Audio(kD)),($=P.current)==null||$.play().catch(()=>{}),setTimeout(()=>{s()},100)},O=.6,F=3,ie=2,C=4;Ie.useEffect(()=>{let $=0,N=performance.now();const X=k=>{const de=(k-N)/1e3;N=k,m(me=>{if(!me)return null;let U=me.scale;return me.growing?(U=Math.min(F,U+ie*de),U>=F&&S.current?(S.current.pause(),z(me.x,me.y,U),A.current=!1,{...me,growing:!1,scale:U}):{...me,scale:U}):(U=Math.max(O,U-C*de),U<=O+.01?null:{...me,scale:U})}),$=requestAnimationFrame(X)};return $=requestAnimationFrame(X),()=>cancelAnimationFrame($)},[]);const R=($,N)=>{E.current+=1;const X=E.current;m({id:X,x:$,y:N,scale:O,growing:!0})},j=()=>{A.current=!1,m($=>$&&$.growing?(z($.x,$.y,$.scale),{...$,growing:!1}):$),S.current&&(S.current.pause(),S.current.currentTime=0)},te=$=>{var de;if(c||D.current)return;const N=$.currentTarget.getBoundingClientRect(),X=$.clientX-N.left,k=$.clientY-N.top;if(A.current=!0,!S.current){const me=new Audio(m2);me.loop=!0,me.playbackRate=1.2,S.current=me}(de=S.current)==null||de.play().catch(()=>{}),R(X,k)},le=()=>{j()},pe=()=>{j()};return e<100&&!a?oe.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000",children:[oe.jsx("div",{className:"relative w-64 h-2 bg-gray-200 rounded overflow-hidden",children:oe.jsx("div",{className:"h-full bg-black transition-all duration-200",style:{width:`${e}%`}})}),oe.jsxs("div",{className:"mt-2 text-xs font-bold text-gray-400 font-mono",children:[e,"%"]}),oe.jsx("p",{className:"mt-1 font-bold text-gray-400 animate-pulse text-sm",children:"Loading Gallery..."})]}):oe.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${c?"pointer-events-none":""}`,onMouseDown:te,onMouseUp:le,onMouseLeave:pe,onTouchStart:$=>{var me;if($.target.closest("wired-button")||c||D.current)return;const N=$.touches[0],X=$.currentTarget.getBoundingClientRect(),k=N.clientX-X.left,de=N.clientY-X.top;if(A.current=!0,!S.current){const U=new Audio(m2);U.loop=!0,U.playbackRate=1.2,S.current=U}(me=S.current)==null||me.play().catch(()=>{}),R(k,de)},onTouchEnd:()=>{j()},onTouchMove:$=>A.current&&$.preventDefault(),style:{cursor:XD},children:[oe.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1e4},children:[p.map($=>oe.jsx("div",{style:{position:"absolute",left:$.x,top:$.y,transform:`translate(-50%, -50%) scale(${$.scale})`,opacity:$.fading?0:1,transition:$.fading?"opacity 200ms ease-out":void 0,fontSize:"32px",pointerEvents:"none",zIndex:10001},children:"❤️"},$.id)),d&&oe.jsx("div",{style:{position:"absolute",left:d.x,top:d.y,transform:`translate(-50%, -50%) scale(${d.scale})`,opacity:1,fontSize:"32px",pointerEvents:"none"},children:"❤️"})]}),oe.jsx("div",{className:`relative z-20 bg-neutral-900 p-4 shadow-2xl border-2 border-gray-800 transform scale-100 transition-all duration-500 ease-out 
            ${c?"opacity-0 scale-95":"md:hover:scale-105 active:scale-100"}
        `,children:oe.jsxs("div",{className:"w-[32rem] aspect-[4/5] flex flex-col items-center",children:[oe.jsxs("div",{className:"w-full h-80 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in",children:[oe.jsx("video",{src:U0,className:"w-full h-full object-cover grayscale contrast-125 opacity-80",muted:!0,loop:!0,autoPlay:!0,playsInline:!0}),oe.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),oe.jsx("h1",{className:"text-3xl text-center font-bold mb-2 select-none pointer-events-none text-white whitespace-nowrap",children:"The Secret Life of Warco Mu"}),oe.jsx("p",{className:"text-gray-400 text-sm text-center mb-6 select-none pointer-events-none",children:"2021.8-2025.12"}),oe.jsxs("p",{className:"text-gray-300 text-m text-center mb-6 select-none pointer-events-none",children:[_,_.length<x.length&&oe.jsx("span",{className:"animate-pulse",children:"|"})]}),oe.jsx("wired-button",{elevation:2,onClick:V,className:"bg-white text-black font-bold tracking-widest cursor-pointer select-none",style:{cursor:WD},children:"PAY RESPECT"})]})})]})},YD=({onCovered:s,onComplete:e})=>{const[n,a]=Ie.useState([]),o=Ie.useRef("raining"),c=Ie.useRef(0),u=Ie.useRef(null),d=40,m=1,p=1.5,g=80;Ie.useEffect(()=>{const _=window.innerWidth,y=Math.ceil(_/d),E=()=>{if(o.current==="clearing")return;const v=[];for(let P=0;P<y;P++)v.push({id:c.current++,colIndex:P,left:P/y*100+Math.random()*2,duration:m+Math.random()*(p-m),rotation:Math.random()*360});a(P=>[...P,...v])};u.current=window.setInterval(E,g);const A=m*1e3+200,S=setTimeout(()=>{s(),setTimeout(()=>{o.current="clearing",u.current&&clearInterval(u.current)},1500)},A);return()=>{u.current&&clearInterval(u.current),clearTimeout(S)}},[s]);const x=_=>{a(y=>{const E=y.filter(A=>A.id!==_);return o.current==="clearing"&&E.length===0&&setTimeout(e,0),E})};return oe.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,pointerEvents:"none",overflow:"hidden"},children:[oe.jsx("style",{children:`
          @keyframes tennisFall {
            0% {
              transform: translateY(-60px) rotate(0deg);
            }
            100% { transform: translateY(110vh) rotate(var(--rot)); }
          }
        `}),n.map(_=>oe.jsx("div",{onAnimationEnd:()=>x(_.id),style:{position:"absolute",left:`${_.left}%`,top:"-60px",width:`${d}px`,height:`${d}px`,fontSize:`${d}px`,lineHeight:"1",textAlign:"center","--rot":`${_.rotation}deg`,animationName:"tennisFall",animationDuration:`${_.duration}s`,animationTimingFunction:"cubic-bezier(0.3, 0.1, 0.7, 1)",animationFillMode:"forwards"},children:"🎾"},_.id))]})},$D="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.5%201.99997C10.1347%201.99987%2010.7457%202.2412%2011.209%202.67501C11.6724%203.10882%2011.9534%203.70262%2011.995%204.33597L12%204.49997V9.10497L17.442%209.70997C18.3855%209.81483%2019.261%2010.2518%2019.9119%2010.9429C20.5628%2011.6339%2020.9467%2012.5339%2020.995%2013.482L21%2013.685V14C21%2016.0784%2020.1911%2018.0752%2018.7445%2019.5677C17.298%2021.0601%2015.3274%2021.931%2013.25%2021.996L13%2022H12.326C10.8885%2021.9999%209.47751%2021.6126%208.24148%2020.8786C7.00546%2020.1446%205.99004%2019.0911%205.302%2017.829L5.171%2017.578L2.329%2011.894C1.969%2011.174%202.236%2010.211%203.076%209.86597C4.119%209.43897%205.11%209.35897%206.131%209.87797C6.353%209.9913%206.571%2010.1293%206.785%2010.292L7%2010.462V4.49997C7%203.83693%207.26339%203.20104%207.73223%202.7322C8.20107%202.26336%208.83696%201.99997%209.5%201.99997ZM9.5%203.99997C9.38297%203.99993%209.26964%204.04094%209.17974%204.11586C9.08984%204.19078%209.02906%204.29486%209.008%204.40997L9%204.49997V13C8.99984%2013.207%208.93542%2013.4089%208.81565%2013.5777C8.69587%2013.7466%208.52663%2013.8741%208.3313%2013.9427C8.13596%2014.0113%207.92414%2014.0176%207.72509%2013.9607C7.52604%2013.9037%207.34956%2013.7865%207.22%2013.625L6.888%2013.218L6.585%2012.864C6.005%2012.207%205.584%2011.844%205.225%2011.661C5.01269%2011.5466%204.77084%2011.4989%204.531%2011.524L4.39%2011.544L6.96%2016.684C7.43992%2017.6435%208.16833%2018.4567%209.06935%2019.0391C9.97038%2019.6214%2011.0111%2019.9515%2012.083%2019.995L12.326%2020H13C14.5524%2020%2016.0444%2019.3984%2017.1625%2018.3215C18.2806%2017.2446%2018.9378%2015.7763%2018.996%2014.225L19%2014V13.685C19.0001%2013.2203%2018.8383%2012.77%2018.5425%2012.4116C18.2467%2012.0532%2017.8353%2011.809%2017.379%2011.721L17.221%2011.697L11.779%2011.093C11.317%2011.0417%2010.8872%2010.831%2010.5637%2010.4972C10.2401%2010.1635%2010.0429%209.72738%2010.006%209.26397L10%209.10497V4.49997C10%204.36736%209.94732%204.24018%209.85355%204.14642C9.75979%204.05265%209.63261%203.99997%209.5%203.99997ZM4%205.99997C4.26522%205.99997%204.51957%206.10533%204.70711%206.29286C4.89464%206.4804%205%206.73475%205%206.99997C5%207.26519%204.89464%207.51954%204.70711%207.70708C4.51957%207.89461%204.26522%207.99997%204%207.99997H3C2.73478%207.99997%202.48043%207.89461%202.29289%207.70708C2.10536%207.51954%202%207.26519%202%206.99997C2%206.73475%202.10536%206.4804%202.29289%206.29286C2.48043%206.10533%202.73478%205.99997%203%205.99997H4ZM16%204.99997C16.2549%205.00025%2016.5%205.09785%2016.6854%205.27282C16.8707%205.44779%2016.9822%205.68692%2016.9972%205.94136C17.0121%206.19581%2016.9293%206.44635%2016.7657%206.6418C16.6021%206.83725%2016.3701%206.96287%2016.117%206.99297L16%206.99997H15C14.7451%206.99969%2014.5%206.90209%2014.3146%206.72712C14.1293%206.55215%2014.0178%206.31302%2014.0028%206.05857C13.9879%205.80413%2014.0707%205.55359%2014.2343%205.35814C14.3979%205.16268%2014.6299%205.03707%2014.883%205.00697L15%204.99997H16ZM4.707%201.29297L5.707%202.29297C5.88916%202.48157%205.98995%202.73417%205.98767%202.99637C5.9854%203.25857%205.88023%203.50938%205.69482%203.69479C5.50941%203.8802%205.2586%203.98537%204.9964%203.98764C4.7342%203.98992%204.4816%203.88913%204.293%203.70697L3.293%202.70697C3.11084%202.51837%203.01005%202.26577%203.01233%202.00357C3.0146%201.74137%203.11977%201.49056%203.30518%201.30515C3.49059%201.11974%203.7414%201.01457%204.0036%201.0123C4.2658%201.01002%204.5184%201.11081%204.707%201.29297ZM15.707%201.29297C15.8945%201.4805%2015.9998%201.73481%2015.9998%201.99997C15.9998%202.26513%2015.8945%202.51944%2015.707%202.70697L14.707%203.70697C14.6148%203.80248%2014.5044%203.87866%2014.3824%203.93107C14.2604%203.98348%2014.1292%204.01107%2013.9964%204.01222C13.8636%204.01337%2013.7319%203.98807%2013.609%203.93779C13.4861%203.88751%2013.3745%203.81326%2013.2806%203.71936C13.1867%203.62547%2013.1125%203.51382%2013.0622%203.39092C13.0119%203.26803%2012.9866%203.13635%2012.9877%203.00357C12.9889%202.87079%2013.0165%202.73957%2013.0689%202.61757C13.1213%202.49556%2013.1975%202.38522%2013.293%202.29297L14.293%201.29297C14.4805%201.1055%2014.7348%201.00018%2015%201.00018C15.2652%201.00018%2015.5195%201.1055%2015.707%201.29297Z'%20fill='black'/%3e%3c/svg%3e",m1={startZ:40},ZD=(s,e=-200)=>{const n=new Yr,a=[16767285,16551203,16743388,9764833,8208124],o=m1.startZ+20,c=e-50,u=o+50,d=c-200,m=Math.abs(u-d),g=Math.min(1e5,Math.max(5e4,Math.floor(m*50))),x=new Ji,_=new Float32Array(g*3),y=new Float32Array(g),E=new Float32Array(g);for(let K=0;K<g;K++)_[K*3]=(Math.random()-.5)*600,_[K*3+1]=(Math.random()-.5)*400,_[K*3+2]=u-Math.random()*m,y[K]=Math.random(),E[K]=Math.random()*100;x.setAttribute("position",new kn(_,3)),x.setAttribute("aSize",new kn(y,1)),x.setAttribute("aSeed",new kn(E,1));const A=new bi({uniforms:{uTime:{value:0},uColor:{value:new At(16777215)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Oo}),S=new H3(x,A);n.add(S);const v={uTime:{value:0},uSpeed:{value:50},uZStart:{value:u},uZRange:{value:m+100}},P=750,D=new Ji,z=new Float32Array(P*2*3),V=new Float32Array(P*2*3),O=new Float32Array(P*6),F=new Float32Array(P*2),ie=new Float32Array(P*2),C=[],R=()=>{const K=20+Math.random()*80,_e=Math.random()*Math.PI*2;return{x:Math.cos(_e)*K,y:Math.sin(_e)*K,angle:_e}};for(let K=0;K<P;K++){const{x:_e,y:Re}=R(),Z=u-Math.random()*m,ce=20+Math.random()*100,we=a[Math.floor(Math.random()*a.length)],Be=new At(we),Xe=Math.random()<.3?1:0;z[K*6+0]=_e,z[K*6+1]=Re,z[K*6+2]=Z,V[K*6+0]=0,V[K*6+1]=0,V[K*6+2]=0,O[K*6+0]=Be.r,O[K*6+1]=Be.g,O[K*6+2]=Be.b,F[K*2+0]=1,ie[K*2+0]=Xe,z[K*6+3]=_e,z[K*6+4]=Re,z[K*6+5]=Z,V[K*6+3]=0,V[K*6+4]=0,V[K*6+5]=-ce,O[K*6+3]=Be.r,O[K*6+4]=Be.g,O[K*6+5]=Be.b,F[K*2+1]=0,ie[K*2+1]=Xe,C.push(K*2,K*2+1)}D.setAttribute("position",new kn(z,3)),D.setAttribute("aCenter",new kn(z,3)),D.setAttribute("aOffset",new kn(V,3)),D.setAttribute("color",new kn(O,3)),D.setAttribute("aAlpha",new kn(F,1)),D.setAttribute("aGlow",new kn(ie,1)),D.setIndex(C);const j=new bi({uniforms:v,vertexShader:`
            uniform float uTime;
            uniform float uSpeed;
            uniform float uZStart;
            uniform float uZRange;
            
            attribute vec3 aCenter;
            attribute vec3 aOffset;
            attribute float aAlpha;
            attribute float aGlow;
            
            varying vec3 vColor;
            varying float vAlpha;
            varying float vGlow;
            
            void main() {
                vColor = color;
                vAlpha = aAlpha;
                vGlow = aGlow;
                
                float currentZ = aCenter.z + (uTime * uSpeed);
                float relativeZ = uZStart - currentZ; 
                float wrappedRelZ = mod(relativeZ, uZRange);
                float finalZ = uZStart - wrappedRelZ;
                
                vec3 finalPos = vec3(aCenter.x, aCenter.y, finalZ) + aOffset;
                
                vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,fragmentShader:`
            varying vec3 vColor;
            varying float vAlpha;
            varying float vGlow;
            void main() {
                // Brighter base (1.5x) + Glow Boost (30x for bloom effect)
                vec3 finalColor = vColor * (1.5 + vGlow * 30.0);
                gl_FragColor = vec4(finalColor, vAlpha * 0.8);
            }
        `,transparent:!0,blending:Oo,depthWrite:!1,vertexColors:!0}),te=new B3(D,j);te.frustumCulled=!1,n.add(te);const le=80,pe=new dn(1,1),$=new J3;$.index=pe.index,$.attributes.position=pe.attributes.position,$.attributes.uv=pe.attributes.uv;const N=new Float32Array(le*3),X=new Float32Array(le*2),k=new Float32Array(le*3),de=new Float32Array(le);for(let K=0;K<le;K++){const{x:_e,y:Re}=R(),Z=u-Math.random()*m,ce=40+Math.random()*120,we=.5+Math.random()*2.5;N[K*3+0]=_e,N[K*3+1]=Re,N[K*3+2]=Z,X[K*2+0]=we,X[K*2+1]=ce;const Be=a[Math.floor(Math.random()*a.length)],Xe=new At(Be);k[K*3+0]=Xe.r,k[K*3+1]=Xe.g,k[K*3+2]=Xe.b,de[K]=Math.random()<.1?1:0}$.setAttribute("aCenter",new $u(N,3)),$.setAttribute("aDimension",new $u(X,2)),$.setAttribute("aColor",new $u(k,3)),$.setAttribute("aGlow",new $u(de,1));const me=new bi({uniforms:v,vertexShader:`
            uniform float uTime;
            uniform float uSpeed;
            uniform float uZStart;
            uniform float uZRange;
            
            attribute vec3 aCenter;
            attribute vec2 aDimension;
            attribute vec3 aColor;
            attribute float aGlow;
            
            varying vec3 vColor;
            varying vec2 vUv;
            varying float vGlow; // pass to frag
            
            void main() {
                vColor = aColor;
                vGlow = aGlow;
                vUv = uv; // Pass basic plane UVs (0..1)
                
                float currentZ = aCenter.z + (uTime * uSpeed);
                float relativeZ = uZStart - currentZ; 
                float wrappedRelZ = mod(relativeZ, uZRange);
                float finalZ = uZStart - wrappedRelZ;
                
                vec3 transformed = position;
                float w = aDimension.x;
                float l = aDimension.y;
                
                // Map UV y to Z length. 
                // We want the HEAD (y=1) to be at 0 z-offset, and TAIL (y=0) at -l.
                // Wait, plane geom usually is centered.
                // Let's assume standard plane UVs: (0,0) bottom-left to (1,1) top-right.
                // If we want motion blur, we want the "front" to be opaque and "back" transparent.
                // Let's map Position Y to Z length.
                
                vec3 localPos = vec3(transformed.x * w, 0.0, transformed.y * l);
                vec3 worldPos = localPos + vec3(aCenter.x, aCenter.y, finalZ);
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
            }
        `,fragmentShader:`
            varying vec3 vColor;
            varying vec2 vUv;
            varying float vGlow;
            void main() {
                // Gradient Opacity based on UV.y
                // Assuming y=1 is front (top) and y=0 is back (bottom)
                // Or vice versa depending on PlaneGeometry rotation.
                // Standard Plane facing Z has Y up.
                
                float alpha = smoothstep(0.0, 0.8, vUv.y); 
                
                // Brighter base (2.0x) + Massive Glow Boost (50x)
                vec3 finalColor = vColor * (2.0 + vGlow * 50.0);
                
                gl_FragColor = vec4(finalColor, alpha * 0.8);
            }
        `,transparent:!0,blending:Oo,depthWrite:!1,side:Fa}),U=new En($,me);return U.frustumCulled=!1,n.add(U),s.add(n),{group:n,update:K=>{A.uniforms.uTime.value=K*.001;const _e=K*.001;v.uTime.value=_e}}},Qt={Z_SPACING:8,X_OFFSET:2.2,CAMERA_START_Z:m1.startZ,FADE_START:100,FADE_END:1e3,HIGHLIGHT_RANGE:4,BGM_FADE_ZONE:20,BGM_SILENCE_RADIUS:5,MAX_SCROLL_SPEED:20,HOVER_MIN_SPEED_FACTOR:.05,TIMELINE_FOCUS_OFFSET:4,SKY_STOPS:[{pos:0,color:new At(1777195)},{pos:.95,color:new At(328976)}]},g2=s=>{const e=s?1.9:Qt.X_OFFSET;return Ba.map((n,a)=>{let o=3.2,c=2.4;const u=Op[n.filename];if(u){const g=u.aspectRatio;g>1?(o=Math.min(u.width,3.2),c=o/g,c>3.2&&(c=3.2,o=c*g)):(c=Math.min(u.height,3.2),o=c*g,o>3.2&&(o=3.2,c=o/g))}return a===Ba.length-1?{...n,z:-a*Qt.Z_SPACING-8,x:0,y:0,rotationY:0,rotationZ:0,borderIntensity:2,initialWidth:o,initialHeight:c}:{...n,z:-a*Qt.Z_SPACING,x:(Math.random()-.5)*2+(a%2===0?-e:e),y:(Math.random()-.5)*.5,rotationY:(a%2===0?.12:-.12)+(Math.random()-.5)*.05,rotationZ:(Math.random()-.5)*.1,borderIntensity:Math.random()<.3?2:Math.random()<.6?1:0,initialWidth:o,initialHeight:c}})},KD=()=>{const s=document.createElement("canvas");s.width=32,s.height=8;const e=s.getContext("2d");if(!e)return null;e.fillStyle="#dbd9d9ff",e.fillRect(0,0,32,12);const n=new cm(s);return n.wrapS=oc,n.wrapT=oc,n.minFilter=pi,n.magFilter=pi,n},QD=()=>new bi({uniforms:{uTime:{value:0},uColor:{value:new At(16777215)},uSize:{value:new Xt(1,1)},uGlowSize:{value:.8}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uTime;
      uniform vec2 uSize;      // Window Width, Height (in world units)
      uniform float uGlowSize; // Margin added for glow mesh
      
      varying vec2 vUv;
      
      // Signed Distance Field for Box
      float sdBox( in vec2 p, in vec2 b ) {
        vec2 d = abs(p) - b;
        return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
      }

      void main() {
        // vUv is 0..1. Map to world coordinates centered at 0.
        // Mesh Size = uSize + 2 * uGlowSize
        vec2 meshSize = uSize + vec2(uGlowSize * 2.0);
        
        vec2 p = vUv * meshSize - (meshSize * 0.5);
        
        // Define box half-size
        vec2 boxHalf = uSize * 0.5;
        
        // Calculate Distance
        float dist = sdBox(p, boxHalf);
        
        // dist <= 0 is INSIDE the window (opaque or ignore? Glow is BEHIND, so inside doesn't matter much if z-ordered)
        // dist > 0 is OUTSIDE.
        
        // Soft Falloff
        // Gaussianish: exp(-k * d*d)
        float glow = 0.0;
        if (dist > 0.0) {
            // Reduced spread: Multiplier from 0.4 to 0.2 makes sigma smaller -> faster falloff
            float sigma = uGlowSize * 0.25; 
            glow = exp(-(dist * dist) / (2.0 * sigma * sigma));
        } else {
            // Inside the box
            glow = 1.0; 
        }
        
        // Animation: Pulse intensity
        float pulse = 0.8 + 0.2 * sin(uTime * 2.5); // Faster pulse
        
        float alpha = glow * pulse;
        
        // Hard cut at texture edge to avoid repeat artifacts if any (though plain plane shouldn't behave weird)
        // Fade out at very edge
        // distance from center to edge of mesh?
        // Let's just trust Gaussian to be near 0 at edge.
        
        gl_FragColor = vec4(uColor, alpha);
        
        // Optional: extra sparkle?
      }
    `,transparent:!0,depthWrite:!1,blending:Oo}),L0=s=>{const e=document.createElement("canvas");e.width=32,e.height=32;const n=e.getContext("2d");if(!n)return null;n.fillStyle="#8e8e8eff",n.fillRect(0,0,32,32),n.strokeStyle="#333333",n.lineWidth=4,n.strokeRect(0,0,32,32),n.beginPath(),s==="close"?(n.moveTo(8,8),n.lineTo(24,24),n.moveTo(24,8),n.lineTo(8,24)):s==="zoom"?n.strokeRect(8,8,16,16):s==="collapse"&&(n.moveTo(8,16),n.lineTo(24,16)),n.stroke();const a=new cm(e);return a.minFilter=pi,a.magFilter=pi,a},JD=s=>{const e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return null;e.width=512,e.height=128,n.clearRect(0,0,e.width,e.height),n.font='60px "ChicagoFLF"',n.fillStyle="#000000",n.textAlign="center",n.textBaseline="middle",n.fillText(s,e.width/2,e.height/2);const a=new cm(e);return a.minFilter=hi,a},eU=()=>oe.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[oe.jsx("path",{d:"M9 18V5l12-2v13"}),oe.jsx("circle",{cx:"6",cy:"18",r:"3"}),oe.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),tU=()=>oe.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[oe.jsx("circle",{cx:"12",cy:"12",r:"3"}),oe.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),nU=()=>oe.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[oe.jsx("circle",{cx:"12",cy:"12",r:"10"}),oe.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),oe.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),x2=()=>oe.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[oe.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),oe.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),_2=()=>oe.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[oe.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),oe.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"})]}),iU=()=>oe.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:oe.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),aU=()=>oe.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:[oe.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),oe.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),O0=()=>oe.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[oe.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),oe.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),v2=()=>new bi({uniforms:{uMap:{value:null},uTime:{value:0},uResolution:{value:new Xt(512,512)},uGlitchStrength:{value:.005},opacity:{value:1}},vertexShader:`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
            uniform sampler2D uMap;
            uniform float uTime;
            uniform vec2 uResolution;
            uniform float uGlitchStrength;
            uniform float opacity;
            varying vec2 vUv;

            // Random function
            float random(vec2 st) {
                return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }

            void main() {
                vec2 uv = vUv;

                // 1. Pixelation (Low-res)
                // Effective resolution control (lower = more blocked)
                float pixelSize = 256.0; 
                vec2 pixelatedUv = floor(uv * pixelSize) / pixelSize;

                // 2. Glitch / Scanline Displacement
                // Random horizontal jiggle on scanlines
                float scanlineJiggle = (random(vec2(0.0, floor(uv.y * 50.0) + floor(uTime * 20.0))) - 0.5) * uGlitchStrength;
                // Occasional large glitch block
                float blockGlitch = 0.0;
                if (random(vec2(floor(uTime * 5.0), floor(uv.y * 10.0))) > 0.95) {
                    blockGlitch = (random(vec2(uTime, uv.y)) - 0.5) * 0.05;
                }
                
                vec2 finalUv = pixelatedUv + vec2(scanlineJiggle + blockGlitch, 0.0);
                
                vec4 color = texture2D(uMap, finalUv);

                // 3. CRT Color & Scanlines
                // Basic contrast boost - REDUCED for washed out look
                // Was: (color.rgb - 0.5) * 1.3 + 0.5;
                color.rgb = (color.rgb - 0.5) * 0.9 + 0.5;

                // Desaturation (Washed out)
                float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                // Mix 60% color, 40% gray
                color.rgb = mix(vec3(gray), color.rgb, 0.6);

                // Lift blacks slightly using screen with dark grey
                color.rgb = clamp(color.rgb, 0.0, 1.0);
                color.rgb = mix(color.rgb, vec3(0.1, 0.1, 0.12), 0.1);

                // Color shift (Aberration)
                float r = texture2D(uMap, finalUv + vec2(0.002, 0.0)).r;
                float b = texture2D(uMap, finalUv - vec2(0.002, 0.0)).b;
                color.r = mix(color.r, r, 0.5);
                color.b = mix(color.b, b, 0.5);
                
                // Scanlines (Darkening lines)
                float scanline = sin(uv.y * 800.0 + uTime * 5.0) * 0.05; // Reduced intensity
                color.rgb -= scanline;

                // Green tint for "Matrix/CRT" vibe
                color.rgb += vec3(0.0, 0.02, 0.05);

                gl_FragColor = color;
                gl_FragColor.a *= opacity;
            }
        `,transparent:!0}),rU=()=>{var ut,$t;const s=Ie.useRef(null),e=Ie.useRef(null),[n,a]=Ie.useState(()=>g2(window.innerWidth<768));Ie.useEffect(()=>{const xe=()=>{const gt=window.innerWidth<768;a(g2(gt))};return window.addEventListener("resize",xe),()=>window.removeEventListener("resize",xe)},[]);const[o,c]=Ie.useState(!1);Ie.useEffect(()=>{const xe=()=>c(window.innerWidth<768);return xe(),window.addEventListener("resize",xe),()=>window.removeEventListener("resize",xe)},[]);const[u,d]=Ie.useState(null),[m,p]=Ie.useState(!1),[g,x]=Ie.useState(!1),[_,y]=Ie.useState(!1),[E,A]=Ie.useState(null),S=Ie.useRef(null),[v,P]=Ie.useState(!1),[D,z]=Ie.useState(!0),[V,O]=Ie.useState(0),[F,ie]=Ie.useState(!1),[C,R]=Ie.useState(5),j=Ie.useRef(0),te=Ie.useRef(1),[le,pe]=Ie.useState(1),$=Ie.useRef(1),[N,X]=Ie.useState(null),k=Ie.useRef(null),[de,me]=Ie.useState(0),U=Ie.useRef([]),ae=Ie.useRef([]),K=Ie.useRef({}),_e=Ie.useRef([]),Re=Ie.useRef([]),Z=Ie.useRef(!1),ce=Ie.useRef(!1),we=Ie.useRef(0),Be=Ie.useRef(0),Xe=Ie.useRef(null),dt=Ie.useRef(null),bn=Ie.useRef(!1);Ie.useRef(1);const st=Ie.useRef(0),bt=Ie.useRef(0),I=Ie.useRef(0),mt=Ie.useRef(!1),yt=Ie.useRef(0),jt=Ie.useRef(0);Ie.useRef(0);const We=Ie.useRef(null);Ie.useRef(!1),Ie.useEffect(()=>{Z.current=m,m?(document.body.style.overflow="hidden",Object.values(K.current).forEach(xe=>xe.pause())):g&&(document.body.style.overflow="auto")},[m,g]),Ie.useEffect(()=>{ce.current=g,g?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[g]),Ie.useEffect(()=>{j.current=C},[C]),Ie.useEffect(()=>{bn.current=F},[F]),Ie.useEffect(()=>{$.current=le},[le]),Ie.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&pe(1.8)},[]),Ie.useEffect(()=>{S.current&&(v&&D?S.current.play().catch(xe=>console.error("Audio playback failed:",xe)):S.current.pause())},[v,D,V]);const Jt=()=>P(!v),Qe=xe=>{O(xe),P(!0),z(!0)},ht=()=>{window.scrollTo({top:0,behavior:"auto"}),we.current=0,Be.current=0,st.current=0,I.current=0,y(!0)},L=()=>{x(!0),P(!0),R(5),Object.values(K.current).forEach(xe=>{xe.muted=!1,xe.volume=0})},M=()=>{y(!1)},Q=xe=>{const gt=xe.currentTarget.getBoundingClientRect(),rn=Math.min(Math.max((xe.clientX-gt.left)/gt.width,0),1);me(xe.clientX);const Mi=Ba.length,sn=Math.floor(rn*(Mi-1)),Ei=Ba[sn];Ei&&X(Ei.date)},be=()=>{X(null)},[Me,he]=Ie.useState(()=>window.innerWidth<768?14:Qt.CAMERA_START_Z);Ie.useEffect(()=>{const xe=()=>{const gt=window.innerWidth<768?14:Qt.CAMERA_START_Z;he(rn=>rn!==gt?gt:rn)};return window.addEventListener("resize",xe),()=>window.removeEventListener("resize",xe)},[]);const Je=Me,Fe=n[n.length-1].z,et=Je-(Fe+5),$e=250/le;Ie.useEffect(()=>{bt.current=et*$e},[et,$e]),Ie.useEffect(()=>{const xe=sn=>{Z.current||!ce.current||(st.current+=sn.deltaY,st.current=Math.max(0,Math.min(st.current,bt.current)),I.current=0)},gt=sn=>{sn.target.closest("button, wired-slider, input, .wired-rendered")||(mt.current=!0,I.current=0,yt.current=sn.touches[0].clientY,jt.current=performance.now())},rn=sn=>{if(sn.target.closest("button, wired-slider, input, .wired-rendered")||Z.current||!ce.current)return;sn.preventDefault();const Ct=sn.touches[0].clientY,mi=yt.current-Ct;yt.current=Ct,st.current+=mi,st.current=Math.max(0,Math.min(st.current,bt.current));const ma=performance.now(),Ca=ma-jt.current;if(jt.current=ma,Ca>0){const Xn=mi;I.current=I.current*.5+Xn*.5}},Mi=()=>{mt.current=!1};return window.addEventListener("wheel",xe,{passive:!1}),window.addEventListener("touchstart",gt,{passive:!1}),window.addEventListener("touchmove",rn,{passive:!1}),window.addEventListener("touchend",Mi),()=>{window.removeEventListener("wheel",xe),window.removeEventListener("touchstart",gt),window.removeEventListener("touchmove",rn),window.removeEventListener("touchend",Mi)}},[]),Ie.useEffect(()=>{const xe=()=>{window.audioContext||(window.audioContext=new(window.AudioContext||window.webkitAudioContext)),window.audioContext.state==="suspended"&&window.audioContext.resume()};return window.addEventListener("touchstart",xe,{once:!0}),window.addEventListener("click",xe,{once:!0}),window.addEventListener("keydown",xe,{once:!0}),()=>{window.removeEventListener("touchstart",xe),window.removeEventListener("click",xe),window.removeEventListener("keydown",xe)}},[]),Ie.useEffect(()=>{var rt;if(!s.current)return;const xe=new U3;xe.background=new At(15857116),xe.fog=new yf(15857116,20,80);const gt=((rt=n[n.length-1])==null?void 0:rt.z)||-100,{update:rn}=ZD(xe,gt);We.current=rn;const Mi=new Y3(16777215,16777215,.35);xe.add(Mi);const sn=new K3(16772306,1.5);sn.position.set(80,60,50),sn.castShadow=!0,sn.shadow.mapSize.width=2048,sn.shadow.mapSize.height=2048,sn.shadow.camera.left=-50,sn.shadow.camera.right=50,sn.shadow.camera.top=50,sn.shadow.camera.bottom=-50,xe.add(sn);const Ei=new Q3(4210752,.5);xe.add(Ei);const Ct=new da(50,window.innerWidth/window.innerHeight,.1,2e3);Ct.position.set(0,0,Me),Xe.current=Ct;const mi=new Vw({canvas:s.current,antialias:!0,alpha:!1});mi.setSize(window.innerWidth,window.innerHeight),mi.setPixelRatio(Math.min(window.devicePixelRatio,2));const ma=new q3;ma.crossOrigin="Anonymous";const Ca=3.2,Xn=3.2;new dn(3.2,2.4),new Qi({color:2236962,transparent:!0});const Tn=2,Dn=.5;new dn(Tn,Dn),U.current=[],_e.current=[];const ei=.2,Va=.02,Is=.04,Bs=.2,Fs=new Qi({color:13750737}),ga=new Qi({color:3355443}),es=new Qi({color:14540253}),xa=KD(),w=L0("close"),W=L0("zoom"),se=L0("collapse"),J=new Qi({map:w,transparent:!0}),Y=new Qi({map:W,transparent:!0}),De=new Qi({map:se,transparent:!0});n.forEach(Le=>{const Pe=new Yr;Pe.position.set(Le.x,Le.y,Le.z),Pe.rotation.y=Le.rotationY,Pe.rotation.z=Le.rotationZ;const pt=Le.initialWidth,wt=Le.initialHeight,ft=new dn(pt,wt),Zt=new En(ft,new Qi({transparent:!0,opacity:0}));Zt.position.z=.1,Zt.position.y=0;let at,Pt,Ut,Ft,en,hn,Un,Vt,Mt,tn,Wn,pn,Ln;const Bn=(_a,Ti)=>{const Ai=_a/Ti;let wi=Ca,ta=Ca/Ai;ta>Xn&&(ta=Xn,wi=Xn*Ai);const oi=wi+Bs*2,na=ta+Bs*2;if(!at){at=new En(new dn(1,1),Fs),at.position.z=.05,Pe.add(at),xa&&(Ln=xa.clone(),Ln.needsUpdate=!0);const Ci=new Qi({map:Ln,color:16777215});Pt=new En(new dn(1,1),Ci),Pt.position.z=.05,Pe.add(Pt);const Vi=ei*.7;Ut=new En(new dn(Vi,Vi),J),Pe.add(Ut),Ft=new En(new dn(Vi,Vi),Y),Pe.add(Ft),en=new En(new dn(Vi,Vi),De),Pe.add(en),Un=new En(new dn(1,1),es),Un.position.z=.02,Pe.add(Un),hn=new En(new dn(1,1),ga),hn.position.z=0,Pe.add(hn),Vt=new En(new dn(1,1),ga),Vt.position.z=.04,Pe.add(Vt),Mt=new En(new dn(1,.02),ga),Mt.position.z=.06,Pe.add(Mt),pn=QD(),ae.current.push(pn),tn=new En(new dn(1,1),pn),tn.position.z=-.05,tn.position.x=0,Pe.add(tn);const ts=JD(Le.date);if(ts){const tl=ei,gi=tl*4,ja=new Qi({map:ts,transparent:!0});Wn=new En(new dn(gi,tl),ja),Wn.position.z=.07,Pe.add(Wn)}Pe.add(Zt)}Zt.geometry.dispose(),Zt.geometry=new dn(wi,ta),at&&(at.geometry.dispose(),at.geometry=new dn(oi,na),at.position.y=0),Vt&&(Vt.geometry.dispose(),Vt.geometry=new dn(oi+.02,na+.02),Vt.position.y=0),Mt&&(Mt.geometry.dispose(),Mt.geometry=new dn(oi,.02),Mt.position.y=na/2),Pt&&(Pt.geometry.dispose(),Pt.geometry=new dn(oi,ei),Pt.position.y=na/2+ei/2,Ln&&Ln.repeat.set(oi/2,1),Wn&&(Wn.position.y=Pt.position.y,Wn.position.x=0));const Gi=ei*.7,li=.06;if(Pt&&Ut&&Ft&&en){const Ci=Pt.position.y;Ut.position.set(-(oi/2)+Gi/2+.1,Ci,li),Ft.position.set(oi/2-Gi/2-.1,Ci,li),en.position.set(oi/2-Gi*1.5-.2,Ci,li)}const yn=oi+Is*2,Da=na+ei+Is*2;Un&&(Un.geometry.dispose(),Un.geometry=new dn(yn,Da),Un.position.y=ei/2);const Ri=yn+Va*2,Ua=Da+Va*2;hn&&(hn.geometry.dispose(),hn.geometry=new dn(Ri,Ua),hn.position.y=ei/2);const La=.4;if(tn&&pn&&hn){const Ci=Ri+La*2,Vi=Ua+La*2;tn.geometry.dispose(),tn.geometry=new dn(Ci,Vi),tn.position.y=hn.position.y,pn.uniforms.uSize.value.set(Ri,Ua)}};_e.current.push({item:Le,contentMesh:Zt,updateGeometry:Bn,loadedOpacity:0,targetLoadedOpacity:0}),Pe.add(Zt),Pe.userData={id:Le.id},xe.add(Pe),U.current.push(Zt)});const Ne={},Ve=Le=>{const Pe=Le.item;if(!Ne[Pe.id]){if(Pe.type==="video"){const pt=document.createElement("video");pt.src=Pe.src,pt.crossOrigin="Anonymous",pt.muted=!0,pt.loop=!0,pt.playsInline=!0,pt.preload="auto",K.current[Pe.id]=pt,Le.video=pt,pt.onloadedmetadata=()=>{Le.updateGeometry(pt.videoWidth,pt.videoHeight),Le.targetLoadedOpacity=1,pt.play().catch(()=>{})};let wt=null;if(window.audioContext)try{const at=window.audioContext.createMediaElementSource(pt);wt=window.audioContext.createGain(),at.connect(wt),wt.connect(window.audioContext.destination),wt.gain.value=0}catch(at){console.error(at)}wt&&(Le.gainNode=wt),wt&&(Le.gainNode=wt);const ft=new G3(pt);ft.minFilter=hi,ft.magFilter=hi,ft.wrapS=Ii,ft.wrapT=Ii,ft.colorSpace=zi,Le.texture=ft;const Zt=v2();Zt.uniforms.uMap.value=ft,Zt.uniforms.uResolution.value.set(pt.videoWidth,pt.videoHeight),Le.contentMesh.material.dispose(),Le.contentMesh.material=Zt,Le.contentMesh.material.needsUpdate=!0,Re.current.push(Zt)}else{const pt=Pe.type==="embed"&&Pe.previewSrc||Pe.src;ma.load(pt,wt=>{wt.colorSpace=zi,wt.wrapS=Ii,wt.wrapT=Ii,wt.wrapT=Ii,Le.texture=wt;const ft=v2();ft.uniforms.uMap.value=wt,wt.image&&ft.uniforms.uResolution.value.set(wt.image.width,wt.image.height),Le.contentMesh.material.dispose(),Le.contentMesh.material=ft,Le.contentMesh.material.needsUpdate=!0,Re.current.push(ft),wt.image&&Le.updateGeometry(wt.image.width,wt.image.height),Le.targetLoadedOpacity=1})}Ne[Pe.id]=!0}},je=Le=>{const Pe=Le.item.id;if(Ne[Pe]){if(Le.loadedOpacity=0,Le.targetLoadedOpacity=0,Le.texture){if(Le.texture.dispose(),Le.contentMesh.material instanceof bi){const pt=Re.current.indexOf(Le.contentMesh.material);pt>-1&&Re.current.splice(pt,1),Le.contentMesh.material.dispose()}Le.contentMesh.material=new Qi({transparent:!0,opacity:0}),Le.contentMesh.material.needsUpdate=!0,Le.texture=void 0}Le.video&&(Le.video.pause(),Le.video.src="",Le.video.load(),delete K.current[Pe],Le.video=void 0),delete Ne[Pe]}};n[n.length-1].z;const tt=new tM,nt=new Xt,it=Le=>{const Pe=Math.abs(Ct.position.z-Le.position.z);return Pe<=Qt.FADE_START?1:Pe>=Qt.FADE_END?0:1-(Pe-Qt.FADE_START)/(Qt.FADE_END-Qt.FADE_START)},xt=Le=>{var at,Pt;if(Z.current||!ce.current)return;if(dt.current){const Ut=n.find(Ft=>Ft.id===dt.current);if(Ut){d(Ut),p(!0);return}}nt.x=Le.clientX/window.innerWidth*2-1,nt.y=-(Le.clientY/window.innerHeight)*2+1,xe.updateMatrixWorld(!0),tt.setFromCamera(nt,Ct);const Pe=xe.children.filter(Ut=>Ut instanceof Yr&&Ut.userData.id),pt=tt.intersectObjects(Pe,!0).filter(Ut=>Ut.object instanceof En),wt=new If,ft=new xn;ft.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),wt.setFromProjectionMatrix(ft);const Zt=Ct.getWorldDirection(new ue);for(const Ut of pt){let Ft=Ut.object;for(;Ft.parent&&!((at=Ft.userData)!=null&&at.id);)Ft=Ft.parent;const en=(Pt=Ft.userData)==null?void 0:Pt.id;if(!en)continue;const hn=Ft.getWorldPosition(new ue);if(!wt.containsPoint(hn)||hn.clone().sub(Ct.position).dot(Zt)<=0||it(Ft)<.1)continue;const Mt=n.find(tn=>tn.id===en);if(Mt){d(Mt),p(!0);break}}};s.current.addEventListener("click",xt);const Nt=Le=>{var ft,Zt;if(Z.current||!ce.current)return;nt.x=Le.clientX/window.innerWidth*2-1,nt.y=-(Le.clientY/window.innerHeight)*2+1,tt.setFromCamera(nt,Ct);const Pe=xe.children.filter(at=>at instanceof Yr&&at.userData.id),wt=tt.intersectObjects(Pe,!0).find(at=>at.object instanceof En);if(wt){let at=wt.object;for(;at.parent&&!((ft=at.userData)!=null&&ft.id);)at=at.parent;dt.current=(Zt=at.userData)==null?void 0:Zt.id,document.body.style.cursor="pointer"}else dt.current=null,document.body.style.cursor="default"};window.addEventListener("mousemove",Nt);let Bt;window.matchMedia("(pointer: coarse)").matches;const Dt=()=>{var Un;if(Bt=requestAnimationFrame(Dt),!Z.current&&ce.current){const Vt=dt.current?Qt.HOVER_MIN_SPEED_FACTOR:1;if(te.current+=(Vt-te.current)*.1,!mt.current){let Ln=0;if(j.current>0){const Bn=250/$.current;Ln=j.current*.8*(Bn/200)*te.current}I.current+=(Ln-I.current)*.05,Math.abs(Ln)<.01&&Math.abs(I.current)<.01&&(I.current=0),st.current+=I.current,st.current<0?(st.current=0,I.current=0):st.current>bt.current&&(st.current=bt.current,I.current=0)}bt.current>0&&(Be.current=st.current/bt.current);const Mt=Be.current-we.current,tn=Math.max(-20*.2,Math.min(Qt.MAX_SCROLL_SPEED*.2,Mt));we.current+=tn*.1+Mt*.05,Ct.position.z=Me-we.current*et,e.current&&(e.current.style.width=`${we.current*100}% `);const Wn=Math.min(1,Math.max(0,we.current)),pn=Qt.SKY_STOPS;for(let Ln=0;Ln<pn.length-1;Ln++){const Bn=pn[Ln],_a=pn[Ln+1];if(Wn>=Bn.pos&&Wn<=_a.pos){const Ti=_a.pos-Bn.pos,Ai=(Wn-Bn.pos)/Ti;xe.background instanceof At&&xe.background.copy(Bn.color).lerp(_a.color,Ai),xe.fog instanceof yf&&xe.fog.color.copy(xe.background);break}}}if(ae.current.length>0){const Vt=performance.now()/1e3;ae.current.forEach(Mt=>{Mt.uniforms.uTime.value=Vt})}Object.keys(Ne).forEach(Vt=>{const Mt=_e.current.find(tn=>tn.item.id===Vt);if(Mt){const tn=Mt.contentMesh.parent;Math.abs(Ct.position.z-tn.position.z)>32&&je(Mt)}});const Le=Math.max(0,Math.floor(-Ct.position.z/Qt.Z_SPACING)),Pe=8,pt=Math.max(0,Le-Pe),wt=Math.min(_e.current.length-1,Le+Pe),ft=Me-Ct.position.z,Zt=Math.min(Ba.length-1,Math.max(0,Math.round(ft/Qt.Z_SPACING))),at=Ba[Zt];let Pt=null,Ut=0;at&&at.type==="video"&&(Pt=at.id,Ut=-(Zt*Qt.Z_SPACING)+Me+0);const Ft=Qt.Z_SPACING/2;let en=0;for(let Vt=pt;Vt<=wt;Vt++){const Mt=_e.current[Vt],tn=Mt.contentMesh.parent,Wn=Mt.contentMesh,pn=Math.abs(Ct.position.z-tn.position.z),Ln=22,Bn=32,_a=Vt===_e.current.length-1;pn<Ln?Ve(Mt):pn>Bn&&!_a&&je(Mt);let Ti=0;const Ai=6,wi=3;pn<wi?(Ti=0,tn.visible=!1):(tn.visible=!0,pn<Ai?Ti=(pn-wi)/(Ai-wi):pn<=Qt.FADE_START?Ti=1:pn>=Qt.FADE_END?Ti=.3:Ti=1-.7*((pn-Qt.FADE_START)/(Qt.FADE_END-Qt.FADE_START))),Mt.loadedOpacity+=(Mt.targetLoadedOpacity-Mt.loadedOpacity)*.05;const ta=Ti*Mt.loadedOpacity;Wn.material instanceof bi?Wn.material.uniforms.opacity.value=ta:Wn.material.opacity=ta;const oi=tn.children.find(yn=>yn.isMesh&&yn!==Wn&&!yn.userData.isDate);oi&&oi.material&&(oi.material.opacity=ta);const na=tn.children.find(yn=>yn.userData.isDate);na&&na.material&&(na.material.opacity=.8*ta);let Gi=1;pn<Qt.HIGHLIGHT_RANGE&&(Gi=1+(1-pn/Qt.HIGHLIGHT_RANGE)*.15),tn.scale.set(Gi,Gi,1);const li=Mt.item.id;if(K.current[li]){const yn=K.current[li];if(!Z.current&&ce.current){const Da=window.innerWidth<768,Ri=li===Pt,Ua=Vt===_e.current.length-1;if(bn.current||Da&&!Ua)yn.muted||(yn.muted=!0),Mt.gainNode&&Mt.gainNode.gain.value>0&&(Mt.gainNode.gain.cancelScheduledValues(0),Mt.gainNode.gain.value=0);else if(Ri){yn.muted=!1;let La=Math.abs(Ct.position.z-Ut);Ua&&Ct.position.z<Ut&&(La=0);let Ci=Math.max(0,1-La/Ft);Mt.gainNode?Mt.gainNode.gain.setTargetAtTime(Ci,window.audioContext.currentTime,.1):yn.volume=Ci,en=Math.max(en,Ci),yn.paused&&yn.play().catch(()=>{})}else yn.muted||(yn.muted=!0),yn.paused&&yn.play().catch(()=>{})}}}if(S.current&&D){let Vt=1;const Mt=Math.abs(Ct.position.z-n[n.length-1].z),tn=(Un=_e.current[_e.current.length-1])==null?void 0:Un.item.id;Pt===tn?Vt=0:en>.1?Vt=.1:Mt<Qt.BGM_FADE_ZONE&&(Vt=Math.max(0,(Mt-Qt.BGM_SILENCE_RADIUS)/(Qt.BGM_FADE_ZONE-Qt.BGM_SILENCE_RADIUS))),v&&S.current.paused&&Vt>.01&&S.current.play().catch(()=>{});const pn=S.current.volume;Math.abs(pn-Vt)>.005?S.current.volume+=(Vt-pn)*.05:S.current.volume=Vt}We.current&&We.current(performance.now());const hn=performance.now()/1e3;Re.current.forEach(Vt=>{Vt.uniforms.uTime.value=hn}),mi.render(xe,Ct)};Dt();const kt=()=>{Ct.aspect=window.innerWidth/window.innerHeight,Ct.updateProjectionMatrix(),mi.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",kt),()=>{var Le;window.removeEventListener("resize",kt),window.removeEventListener("mousemove",Nt),(Le=s.current)==null||Le.removeEventListener("click",xt),cancelAnimationFrame(Bt),k.current&&cancelAnimationFrame(k.current),mi.dispose(),document.body.style.height="auto",Object.values(K.current).forEach(Pe=>{Pe.pause(),Pe.src="",Pe.load()})}},[n,Me,et]);const Ee=()=>{p(!1),d(null)},Ae=xe=>{I.current=0,Be.current=Math.max(0,Math.min(1,xe)),bt.current>0&&(st.current=Be.current*bt.current)},Ke=xe=>{const gt=xe.currentTarget.getBoundingClientRect(),rn=xe.touches[0],Mi=Math.min(Math.max((rn.clientX-gt.left)/gt.width,0),1);me(rn.clientX);const sn=Ba.length,Ei=Math.floor(Mi*(sn-1)),Ct=Ba[Ei];Ct&&X(Ct.date),Ae(Mi)},qe=xe=>{if(m||!g)return;const gt=xe.currentTarget.getBoundingClientRect(),rn=Math.min(Math.max((xe.clientX-gt.left)/gt.width,0),1);Ae(ye(rn))},Ge=xe=>{A(E===xe?null:xe)},lt=Qt.CAMERA_START_Z,ze=n[n.length-1].z+5,Ue=lt-ze||1,Ce=xe=>Math.min(Math.max((lt-xe)/Ue,0),1),Te=xe=>lt-xe*Ue,ye=xe=>Ce(Te(xe)+Qt.TIMELINE_FOCUS_OFFSET),ke=n.filter(xe=>xe.timelineLabel).map(xe=>({id:xe.id,label:xe.timelineLabel,pct:Ce(xe.z),focusPct:Ce(xe.z+Qt.TIMELINE_FOCUS_OFFSET),z:xe.z}));return oe.jsxs(oe.Fragment,{children:[oe.jsx("canvas",{ref:s,className:"fixed top-0 left-0 w-full h-full block z-0"}),oe.jsx("audio",{ref:S,src:D0[V].src,onEnded:()=>Qe((V+1)%D0.length)}),!g&&oe.jsx(qD,{onStartTransition:ht}),_&&oe.jsx(YD,{onCovered:L,onComplete:M}),oe.jsx("div",{className:`fixed top-6 left-0 right-0 z-10 pointer-events-none transition-opacity duration-500 flex justify-center ${g?"opacity-100":"opacity-0"} `,children:oe.jsx("h1",{className:"text-1xl md:text-3xl font-bold text-[#FFFFFF] drop-shadow-sm text-center px-4 whitespace-nowrap animate-text-glow",style:{fontFamily:"ChicagoFLF"},children:"The secret life of Warco Mu 🐵"})}),oe.jsxs("div",{className:`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${g?"opacity-100":"opacity-0 pointer-events-none"} `,children:[oe.jsxs("div",{className:"relative flex flex-col items-end",children:[oe.jsx("button",{className:"w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all",onClick:()=>Ge("audio"),children:oe.jsx(eU,{})}),E==="audio"&&oe.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:oe.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-72 block border-2 border-black",children:[oe.jsxs("div",{className:"flex justify-between items-center border-b-2 border-black pb-2 mb-3",children:[oe.jsx("span",{className:"text-lg",style:{fontFamily:"ChicagoFLF"},children:"Audio Settings"}),oe.jsx("button",{onClick:()=>A(null),className:"text-gray-500 hover:text-black",children:oe.jsx(O0,{})})]}),oe.jsxs("div",{className:"mb-4",children:[oe.jsxs("div",{className:"flex justify-between items-center mb-1",children:[oe.jsx("label",{className:"text-xs text-gray-500",children:"Video Sound"}),oe.jsx("button",{onClick:()=>ie(!F),className:"p-1 rounded hover:bg-gray-100",title:F?"Unmute Videos":"Mute Videos",children:F?oe.jsx(_2,{}):oe.jsx(x2,{})})]}),o&&oe.jsxs("div",{className:"text-[10px] text-amber-700 bg-amber-50 p-2 rounded mb-2 border border-amber-200 leading-tight",children:["Video sound is disabled on mobile devices. ",oe.jsx("br",{}),"(Except for the finale!)"]})]}),oe.jsxs("div",{children:[oe.jsxs("div",{className:"flex justify-between items-center mb-2",children:[oe.jsx("label",{className:"text-xs text-gray-500",children:"Background Music"}),oe.jsx("div",{className:"flex items-center gap-2",children:oe.jsx("button",{onClick:()=>z(!D),className:"p-1 rounded hover:bg-gray-100",title:D?"Disable BGM":"Enable BGM",children:D?oe.jsx(x2,{}):oe.jsx(_2,{})})})]}),oe.jsx("div",{className:`flex items-center gap-2 justify-center py-2 transition-opacity ${D?"opacity-100":"opacity-50 pointer-events-none"} `,children:oe.jsx("button",{onClick:Jt,className:"w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors",children:v?oe.jsx(aU,{}):oe.jsx(iU,{})})}),oe.jsx("div",{className:`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${D?"opacity-100":"opacity-50 pointer-events-none"} `,children:D0.map((xe,gt)=>oe.jsxs("div",{onClick:()=>Qe(gt),className:`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${V===gt?"bg-gray-50 font-bold text-gray-700":"text-gray-600"} `,children:[gt+1,". ",xe.title]},gt))})]})]})})]}),oe.jsxs("div",{className:"relative flex flex-col items-end",children:[oe.jsx("button",{className:"w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all",onClick:()=>Ge("general"),children:oe.jsx(tU,{})}),E==="general"&&oe.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:oe.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block border-2 border-black",children:[oe.jsxs("div",{className:"flex justify-between items-center border-b-2 border-black pb-2 mb-3",children:[oe.jsx("span",{className:"text-lg",style:{fontFamily:"ChicagoFLF"},children:"General Settings"}),oe.jsx("button",{onClick:()=>A(null),className:"text-gray-500 hover:text-black",children:oe.jsx(O0,{})})]}),oe.jsxs("div",{children:[oe.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Auto-Forward Speed"}),oe.jsxs("div",{className:"flex items-center gap-2",children:[oe.jsx("span",{className:"text-xs text-gray-400",children:"Off"}),oe.jsx("input",{type:"range",min:"0",max:"20",step:"1",value:C,onChange:xe=>R(Number(xe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),oe.jsx("span",{className:"text-xs font-bold w-4 text-center",children:C})]})]}),oe.jsxs("div",{className:"mt-4",children:[oe.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Scroll Sensitivity"}),oe.jsxs("div",{className:"flex items-center gap-2",children:[oe.jsx("span",{className:"text-xs text-gray-400",children:"Low"}),oe.jsx("input",{type:"range",min:"0.1",max:"5.0",step:"0.1",value:le,onChange:xe=>pe(Number(xe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),oe.jsx("span",{className:"text-xs text-gray-400",children:"High"})]})]})]})})]}),oe.jsxs("div",{className:"relative flex flex-col items-end",children:[oe.jsx("button",{className:"w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all",onClick:()=>Ge("credit"),children:oe.jsx(nU,{})}),E==="credit"&&oe.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:oe.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block border-2 border-black",children:[oe.jsxs("div",{className:"flex justify-between items-center border-b-2 border-black pb-2 mb-3",children:[oe.jsx("span",{className:"text-lg",style:{fontFamily:"ChicagoFLF"},children:"Credits"}),oe.jsx("button",{onClick:()=>A(null),className:"text-gray-500 hover:text-black",children:oe.jsx(O0,{})})]}),oe.jsxs("div",{className:"text-xs text-gray-600 leading-relaxed",children:[oe.jsx("p",{className:"mb-2",children:oe.jsx("strong",{children:"Coming Soon"})}),oe.jsxs("p",{className:"mb-2",children:["This gallery would like to thank the generous photo donors, who bravely surrendered their most questionable selfies. ",oe.jsx("br",{}),"Special thanks to the friends who helped build this website—your debugging tears now live forever in this exhibit."]}),oe.jsx("br",{}),oe.jsx("p",{children:"Built with Gemini 3 Pro, GPT, Suno and their humble human operators with React, Three.js & Wired Elements."}),oe.jsx("br",{}),oe.jsx("p",{children:"BGM from YouTube: https://www.youtube.com/watch?v=bYkyj1GbdGU&list=RDssxbJpuzruQ&index=4, https://www.youtube.com/results?search_query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B+low+fi"})]})]})})]})]}),g&&oe.jsxs("div",{className:"fixed left-0 right-0 bottom-0 h-4 bg-gray-200 cursor-pointer z-30 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in relative",style:{position:"fixed",bottom:0,left:0,right:0,top:"auto",touchAction:"none"},onClick:qe,onMouseMove:Q,onMouseLeave:be,onTouchStart:Ke,onTouchMove:Ke,onTouchEnd:be,children:[ke.map(xe=>oe.jsxs("button",{onClick:gt=>{gt.stopPropagation(),Ae(xe.focusPct)},className:"absolute flex flex-col items-center group/pin transition-transform duration-150",style:{left:`calc(${xe.pct*100}% - 6px)`,bottom:"8px",zIndex:10},title:xe.label,children:[oe.jsx("span",{className:"text-[10px] font-semibold text-gray-700 mb-1 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap",children:xe.label}),oe.jsx("img",{src:$D,alt:xe.label,className:"w-4 h-4 drop-shadow group-hover/pin:scale-110 transition-transform duration-150"})]},xe.id)),oe.jsx("div",{ref:e,className:"h-full bg-gray-500 relative transition-all duration-75 z-0",style:{width:"0%",backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNkI3MjgwIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')"}}),N&&oe.jsxs("div",{className:"absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50",style:{left:de},children:[N,oe.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"})]})]}),m&&u&&oe.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[oe.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:Ee}),oe.jsx("div",{className:"relative z-10 w-auto max-w-[95vw] flex flex-col items-center pointer-events-auto",children:oe.jsx("wired-card",{elevation:4,className:"bg-white p-2 w-full",children:oe.jsxs("div",{className:"p-4 flex flex-col items-center overflow-y-auto max-h-[85vh] no-scrollbar",children:[oe.jsx("div",{className:"w-full flex justify-end mb-2",children:oe.jsx("wired-button",{onClick:Ee,elevation:2,children:"Close [X]"})}),oe.jsxs("div",{className:"relative flex items-center justify-center bg-black border-2 border-black rounded-sm shadow-inner overflow-hidden",style:{maxHeight:"80vh",maxWidth:"90vw",aspectRatio:u.type==="embed"?((ut=Op[u.filename])==null?void 0:ut.aspectRatio)||16/9:void 0,width:u.type==="embed"?`min(100%, calc(80vh * ${(($t=Op[u.filename])==null?void 0:$t.aspectRatio)||1.777}))`:"auto",minWidth:u.type==="embed"?"60vw":"auto"},children:[u.type==="video"&&oe.jsx("video",{src:u.src,className:"block max-w-full max-h-[80vh] w-auto h-auto object-contain",controls:!0,autoPlay:!0}),u.type==="embed"&&oe.jsx("iframe",{src:(()=>{const xe=u.embedUrl||u.src,gt=xe.includes("?")?"&":"?";return`${xe}${gt} autoplay=1&muted=1&playsinline=1&loop=1&controls=1`})(),className:"w-full h-full",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:u.title}),u.type==="image"&&oe.jsx("img",{src:u.src,alt:u.title,className:"block max-w-full max-h-[80vh] w-auto h-auto object-contain"})]}),oe.jsxs("div",{className:"mt-6 text-center",children:[oe.jsx("h2",{className:"text-xl md:text-3xl font-bold text-gray-800 mb-2",children:u.title}),u.description&&oe.jsx("p",{className:"text-gray-600 text-sm md:text-lg font-light",children:u.description})]})]})})})]})]})},g1=document.getElementById("root");if(!g1)throw new Error("Could not find root element to mount to");const sU=mS.createRoot(g1);sU.render(oe.jsx(oS.StrictMode,{children:oe.jsx(rU,{})}));
