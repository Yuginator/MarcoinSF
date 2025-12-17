(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nf=window,Op=nf.ShadowRoot&&(nf.ShadyCSS===void 0||nf.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Np=Symbol(),G_=new WeakMap;let y2=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==Np)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Op&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=G_.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&G_.set(n,e))}return e}toString(){return this.cssText}};const by=s=>new y2(typeof s=="string"?s:s+"",void 0,Np),gn=(s,...e)=>{const n=s.length===1?s[0]:e.reduce(((a,o,c)=>a+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[c+1]),s[0]);return new y2(n,s,Np)},yy=(s,e)=>{Op?s.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const a=document.createElement("style"),o=nf.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=n.cssText,s.appendChild(a)}))},V_=Op?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return by(n)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ih;const cf=window,j_=cf.trustedTypes,Sy=j_?j_.emptyScript:"",k_=cf.reactiveElementPolyfillSupport,O0={toAttribute(s,e){switch(e){case Boolean:s=s?Sy:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let n=s;switch(e){case Boolean:n=s!==null;break;case Number:n=s===null?null:Number(s);break;case Object:case Array:try{n=JSON.parse(s)}catch{n=null}}return n}},S2=(s,e)=>e!==s&&(e==e||s==s),Bh={attribute:!0,type:String,converter:O0,reflect:!1,hasChanged:S2},N0="finalized";let Do=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,a)=>{const o=this._$Ep(a,n);o!==void 0&&(this._$Ev.set(o,a),e.push(o))})),e}static createProperty(e,n=Bh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const a=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,a,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,a){return{get(){return this[n]},set(o){const c=this[e];this[n]=o,this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Bh}static finalize(){if(this.hasOwnProperty(N0))return!1;this[N0]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of a)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const o of a)n.unshift(V_(o))}else e!==void 0&&n.push(V_(e));return n}static _$Ep(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,a;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)===null||a===void 0||a.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return yy(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)}))}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$EO(e,n,a=Bh){var o;const c=this.constructor._$Ep(e,a);if(c!==void 0&&a.reflect===!0){const u=(((o=a.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?a.converter:O0).toAttribute(n,a.type);this._$El=e,u==null?this.removeAttribute(c):this.setAttribute(c,u),this._$El=null}}_$AK(e,n){var a;const o=this.constructor,c=o._$Ev.get(e);if(c!==void 0&&this._$El!==c){const u=o.getPropertyOptions(c),d=typeof u.converter=="function"?{fromAttribute:u.converter}:((a=u.converter)===null||a===void 0?void 0:a.fromAttribute)!==void 0?u.converter:O0;this._$El=c,this[c]=d.fromAttribute(n,u.type),this._$El=null}}requestUpdate(e,n,a){let o=!0;e!==void 0&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||S2)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),a.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,a))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,c)=>this[c]=o)),this._$Ei=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var c;return(c=o.hostUpdate)===null||c===void 0?void 0:c.call(o)})),this.update(a)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(a)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((a=>{var o;return(o=a.hostUpdated)===null||o===void 0?void 0:o.call(a)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,a)=>this._$EO(a,this[a],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Do[N0]=!0,Do.elementProperties=new Map,Do.elementStyles=[],Do.shadowRootOptions={mode:"open"},k_==null||k_({ReactiveElement:Do}),((Ih=cf.reactiveElementVersions)!==null&&Ih!==void 0?Ih:cf.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fh;const uf=window,Oo=uf.trustedTypes,X_=Oo?Oo.createPolicy("lit-html",{createHTML:s=>s}):void 0,P0="$lit$",Gr=`lit$${(Math.random()+"").slice(9)}$`,M2="?"+Gr,My=`<${M2}>`,ws=document,$l=()=>ws.createComment(""),Kl=s=>s===null||typeof s!="object"&&typeof s!="function",E2=Array.isArray,Ey=s=>E2(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Hh=`[ 	
\f\r]`,Fl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W_=/-->/g,q_=/>/g,ps=RegExp(`>|${Hh}(?:([^\\s"'>=/]+)(${Hh}*=${Hh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y_=/'/g,Z_=/"/g,T2=/^(?:script|style|textarea|title)$/i,Ty=s=>(e,...n)=>({_$litType$:s,strings:e,values:n}),mn=Ty(1),No=Symbol.for("lit-noChange"),Zn=Symbol.for("lit-nothing"),$_=new WeakMap,Es=ws.createTreeWalker(ws,129,null,!1);function A2(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return X_!==void 0?X_.createHTML(e):e}const Ay=(s,e)=>{const n=s.length-1,a=[];let o,c=e===2?"<svg>":"",u=Fl;for(let d=0;d<n;d++){const m=s[d];let p,g,x=-1,_=0;for(;_<m.length&&(u.lastIndex=_,g=u.exec(m),g!==null);)_=u.lastIndex,u===Fl?g[1]==="!--"?u=W_:g[1]!==void 0?u=q_:g[2]!==void 0?(T2.test(g[2])&&(o=RegExp("</"+g[2],"g")),u=ps):g[3]!==void 0&&(u=ps):u===ps?g[0]===">"?(u=o??Fl,x=-1):g[1]===void 0?x=-2:(x=u.lastIndex-g[2].length,p=g[1],u=g[3]===void 0?ps:g[3]==='"'?Z_:Y_):u===Z_||u===Y_?u=ps:u===W_||u===q_?u=Fl:(u=ps,o=void 0);const y=u===ps&&s[d+1].startsWith("/>")?" ":"";c+=u===Fl?m+My:x>=0?(a.push(p),m.slice(0,x)+P0+m.slice(x)+Gr+y):m+Gr+(x===-2?(a.push(void 0),d):y)}return[A2(s,c+(s[n]||"<?>")+(e===2?"</svg>":"")),a]};class Ql{constructor({strings:e,_$litType$:n},a){let o;this.parts=[];let c=0,u=0;const d=e.length-1,m=this.parts,[p,g]=Ay(e,n);if(this.el=Ql.createElement(p,a),Es.currentNode=this.el.content,n===2){const x=this.el.content,_=x.firstChild;_.remove(),x.append(..._.childNodes)}for(;(o=Es.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const x=[];for(const _ of o.getAttributeNames())if(_.endsWith(P0)||_.startsWith(Gr)){const y=g[u++];if(x.push(_),y!==void 0){const E=o.getAttribute(y.toLowerCase()+P0).split(Gr),A=/([.?@])?(.*)/.exec(y);m.push({type:1,index:c,name:A[2],strings:E,ctor:A[1]==="."?Ry:A[1]==="?"?Dy:A[1]==="@"?Uy:Mf})}else m.push({type:6,index:c})}for(const _ of x)o.removeAttribute(_)}if(T2.test(o.tagName)){const x=o.textContent.split(Gr),_=x.length-1;if(_>0){o.textContent=Oo?Oo.emptyScript:"";for(let y=0;y<_;y++)o.append(x[y],$l()),Es.nextNode(),m.push({type:2,index:++c});o.append(x[_],$l())}}}else if(o.nodeType===8)if(o.data===M2)m.push({type:2,index:c});else{let x=-1;for(;(x=o.data.indexOf(Gr,x+1))!==-1;)m.push({type:7,index:c}),x+=Gr.length-1}c++}}static createElement(e,n){const a=ws.createElement("template");return a.innerHTML=e,a}}function Po(s,e,n=s,a){var o,c,u,d;if(e===No)return e;let m=a!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[a]:n._$Cl;const p=Kl(e)?void 0:e._$litDirective$;return(m==null?void 0:m.constructor)!==p&&((c=m==null?void 0:m._$AO)===null||c===void 0||c.call(m,!1),p===void 0?m=void 0:(m=new p(s),m._$AT(s,n,a)),a!==void 0?((u=(d=n)._$Co)!==null&&u!==void 0?u:d._$Co=[])[a]=m:n._$Cl=m),m!==void 0&&(e=Po(s,m._$AS(s,e.values),m,a)),e}class wy{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:a},parts:o}=this._$AD,c=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:ws).importNode(a,!0);Es.currentNode=c;let u=Es.nextNode(),d=0,m=0,p=o[0];for(;p!==void 0;){if(d===p.index){let g;p.type===2?g=new dc(u,u.nextSibling,this,e):p.type===1?g=new p.ctor(u,p.name,p.strings,this,e):p.type===6&&(g=new Ly(u,this,e)),this._$AV.push(g),p=o[++m]}d!==(p==null?void 0:p.index)&&(u=Es.nextNode(),d++)}return Es.currentNode=ws,c}v(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}}class dc{constructor(e,n,a,o){var c;this.type=2,this._$AH=Zn,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=o,this._$Cp=(c=o==null?void 0:o.isConnected)===null||c===void 0||c}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Po(this,e,n),Kl(e)?e===Zn||e==null||e===""?(this._$AH!==Zn&&this._$AR(),this._$AH=Zn):e!==this._$AH&&e!==No&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ey(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Zn&&Kl(this._$AH)?this._$AA.nextSibling.data=e:this.$(ws.createTextNode(e)),this._$AH=e}g(e){var n;const{values:a,_$litType$:o}=e,c=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ql.createElement(A2(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===c)this._$AH.v(a);else{const u=new wy(c,this),d=u.u(this.options);u.v(a),this.$(d),this._$AH=u}}_$AC(e){let n=$_.get(e.strings);return n===void 0&&$_.set(e.strings,n=new Ql(e)),n}T(e){E2(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,o=0;for(const c of e)o===n.length?n.push(a=new dc(this.k($l()),this.k($l()),this,this.options)):a=n[o],a._$AI(c),o++;o<n.length&&(this._$AR(a&&a._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Mf{constructor(e,n,a,o,c){this.type=1,this._$AH=Zn,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Zn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,a,o){const c=this.strings;let u=!1;if(c===void 0)e=Po(this,e,n,0),u=!Kl(e)||e!==this._$AH&&e!==No,u&&(this._$AH=e);else{const d=e;let m,p;for(e=c[0],m=0;m<c.length-1;m++)p=Po(this,d[a+m],n,m),p===No&&(p=this._$AH[m]),u||(u=!Kl(p)||p!==this._$AH[m]),p===Zn?e=Zn:e!==Zn&&(e+=(p??"")+c[m+1]),this._$AH[m]=p}u&&!o&&this.j(e)}j(e){e===Zn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ry extends Mf{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Zn?void 0:e}}const Cy=Oo?Oo.emptyScript:"";class Dy extends Mf{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Zn?this.element.setAttribute(this.name,Cy):this.element.removeAttribute(this.name)}}class Uy extends Mf{constructor(e,n,a,o,c){super(e,n,a,o,c),this.type=5}_$AI(e,n=this){var a;if((e=(a=Po(this,e,n,0))!==null&&a!==void 0?a:Zn)===No)return;const o=this._$AH,c=e===Zn&&o!==Zn||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Zn&&(o===Zn||c);c&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,e):this._$AH.handleEvent(e)}}class Ly{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Po(this,e)}}const K_=uf.litHtmlPolyfillSupport;K_==null||K_(Ql,dc),((Fh=uf.litHtmlVersions)!==null&&Fh!==void 0?Fh:uf.litHtmlVersions=[]).push("2.8.0");const Oy=(s,e,n)=>{var a,o;const c=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:e;let u=c._$litPart$;if(u===void 0){const d=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;c._$litPart$=u=new dc(e.insertBefore($l(),d),d,void 0,n??{})}return u._$AI(s),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gh,Vh;class or extends Do{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const a=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=a.firstChild),a}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oy(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return No}}or.finalized=!0,or._$litElement$=!0,(Gh=globalThis.litElementHydrateSupport)===null||Gh===void 0||Gh.call(globalThis,{LitElement:or});const Q_=globalThis.litElementPolyfillSupport;Q_==null||Q_({LitElement:or});((Vh=globalThis.litElementVersions)!==null&&Vh!==void 0?Vh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=s=>e=>typeof e=="function"?((n,a)=>(customElements.define(n,a),a))(s,e):((n,a)=>{const{kind:o,elements:c}=a;return{kind:o,elements:c,finisher(u){customElements.define(n,u)}}})(s,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ny=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,s)}},Py=(s,e,n)=>{e.constructor.createProperty(n,s)};function Pe(s){return(e,n)=>n!==void 0?Py(s,e,n):Ny(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zy(s){return Pe({...s,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Iy=({finisher:s,descriptor:e})=>(n,a)=>{var o;if(a===void 0){const c=(o=n.originalKey)!==null&&o!==void 0?o:n.key,u=e!=null?{kind:"method",placement:"prototype",key:c,descriptor:e(n.key)}:{...n,key:c};return s!=null&&(u.finisher=function(d){s(d,c)}),u}{const c=n.constructor;e!==void 0&&Object.defineProperty(n,a,e(a)),s==null||s(c,a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wn(s,e){return Iy({descriptor:n=>({get(){var o,c;return(c=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(s))!==null&&c!==void 0?c:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jh;((jh=window.HTMLSlotElement)===null||jh===void 0?void 0:jh.prototype.assignedElements)!=null;var By=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Fy=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};const Un=gn`
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
`;class Ln extends or{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const n=this.canvasSize();if(!e&&n[0]===this.lastSize[0]&&n[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${n[0]}`),this.svg.setAttribute("height",`${n[1]}`),this.draw(this.svg,n),this.lastSize=n,this.classList.add("wired-rendered")}}fire(e,n){Pp(this,e,n)}}By([Wn("svg"),Fy("design:type",SVGSVGElement)],Ln.prototype,"svg",void 0);function Hy(){return Math.floor(Math.random()*2**31)}function Pp(s,e,n){s.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:n}))}function z0(s,e,n){if(s&&s.length){const[a,o]=e,c=Math.PI/180*n,u=Math.cos(c),d=Math.sin(c);for(const m of s){const[p,g]=m;m[0]=(p-a)*u-(g-o)*d+a,m[1]=(p-a)*d+(g-o)*u+o}}}function Gy(s,e,n){const a=[];s.forEach(o=>a.push(...o)),z0(a,e,n)}function Vy(s,e){return s[0]===e[0]&&s[1]===e[1]}function jy(s,e,n,a=1){const o=n,c=Math.max(e,.1),u=s[0]&&s[0][0]&&typeof s[0][0]=="number"?[s]:s,d=[0,0];if(o)for(const p of u)z0(p,d,o);const m=ky(u,c,a);if(o){for(const p of u)z0(p,d,-o);Gy(m,d,-o)}return m}function ky(s,e,n){const a=[];for(const p of s){const g=[...p];Vy(g[0],g[g.length-1])||g.push([g[0][0],g[0][1]]),g.length>2&&a.push(g)}const o=[];e=Math.max(e,.1);const c=[];for(const p of a)for(let g=0;g<p.length-1;g++){const x=p[g],_=p[g+1];if(x[1]!==_[1]){const y=Math.min(x[1],_[1]);c.push({ymin:y,ymax:Math.max(x[1],_[1]),x:y===x[1]?x[0]:_[0],islope:(_[0]-x[0])/(_[1]-x[1])})}}if(c.sort((p,g)=>p.ymin<g.ymin?-1:p.ymin>g.ymin?1:p.x<g.x?-1:p.x>g.x?1:p.ymax===g.ymax?0:(p.ymax-g.ymax)/Math.abs(p.ymax-g.ymax)),!c.length)return o;let u=[],d=c[0].ymin,m=0;for(;u.length||c.length;){if(c.length){let p=-1;for(let x=0;x<c.length&&!(c[x].ymin>d);x++)p=x;c.splice(0,p+1).forEach(x=>{u.push({s:d,edge:x})})}if(u=u.filter(p=>!(p.edge.ymax<=d)),u.sort((p,g)=>p.edge.x===g.edge.x?0:(p.edge.x-g.edge.x)/Math.abs(p.edge.x-g.edge.x)),(n!==1||m%e===0)&&u.length>1)for(let p=0;p<u.length;p=p+2){const g=p+1;if(g>=u.length)break;const x=u[p].edge,_=u[g].edge;o.push([[Math.round(x.x),d],[Math.round(_.x),d]])}d+=n,u.forEach(p=>{p.edge.x=p.edge.x+n*p.edge.islope}),m++}return o}function w2(s,e){var n;const a=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=e.strokeWidth*4),o=Math.round(Math.max(o,.1));let c=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(c=o),jy(s,o,a,c||1)}class Xy{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const a=w2(e,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(e,n){const a=[];for(const o of e)a.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return a}}function Wy(s){const e=s[0],n=s[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class qy extends Xy{fillPolygons(e,n){let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);const o=Object.assign({},n,{hachureGap:a}),c=w2(e,o),u=Math.PI/180*n.hachureAngle,d=[],m=a*.5*Math.cos(u),p=a*.5*Math.sin(u);for(const[x,_]of c)Wy([x,_])&&d.push([[x[0]-m,x[1]+p],[..._]],[[x[0]+m,x[1]-p],[..._]]);return{type:"fillSketch",ops:this.renderLines(d,n)}}}class Yy{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function R2(s,e,n,a,o){return{type:"path",ops:ff(s,e,n,a,o)}}function Zy(s,e,n){const a=(s||[]).length;if(a>2){const o=[];for(let c=0;c<a-1;c++)o.push(...ff(s[c][0],s[c][1],s[c+1][0],s[c+1][1],n));return o.push(...ff(s[a-1][0],s[a-1][1],s[0][0],s[0][1],n)),{type:"path",ops:o}}else if(a===2)return R2(s[0][0],s[0][1],s[1][0],s[1][1],n);return{type:"path",ops:[]}}function C2(s,e){return Zy(s,!0,e)}function $y(s,e,n,a,o){const c=[[s,e],[s+n,e],[s+n,e+a],[s,e+a]];return C2(c,o)}function D2(s,e,n,a,o){const c=U2(n,a,o);return Ky(s,e,o,c).opset}function U2(s,e,n){const a=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(s/2,2)+Math.pow(e/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),c=Math.PI*2/o;let u=Math.abs(s/2),d=Math.abs(e/2);const m=1-n.curveFitting;return u+=Gn(u*m,n),d+=Gn(d*m,n),{increment:c,rx:u,ry:d}}function Ky(s,e,n,a){const[o,c]=ev(a.increment,s,e,a.rx,a.ry,1,a.increment*I0(.1,I0(.4,1,n),n),n);let u=J_(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[d]=ev(a.increment,s,e,a.rx,a.ry,1.5,0,n),m=J_(d,null,n);u=u.concat(m)}return{estimatedPoints:c,opset:{type:"path",ops:u}}}function Qy(s,e,n,a,o){return ff(s,e,n,a,o,!0)}function L2(s){return s.randomizer||(s.randomizer=new Yy(s.seed||0)),s.randomizer.next()}function I0(s,e,n,a=1){return n.roughness*a*(L2(n)*(e-s)+s)}function Gn(s,e,n=1){return I0(-s,s,e,n)}function ff(s,e,n,a,o,c=!1){const u=c?o.disableMultiStrokeFill:o.disableMultiStroke,d=B0(s,e,n,a,o,!0,!1);if(u)return d;const m=B0(s,e,n,a,o,!0,!0);return d.concat(m)}function B0(s,e,n,a,o,c,u){const d=Math.pow(s-n,2)+Math.pow(e-a,2),m=Math.sqrt(d);let p=1;m<200?p=1:m>500?p=.4:p=-.0016668*m+1.233334;let g=o.maxRandomnessOffset||0;g*g*100>d&&(g=m/10);const x=g/2,_=.2+L2(o)*.2;let y=o.bowing*o.maxRandomnessOffset*(a-e)/200,E=o.bowing*o.maxRandomnessOffset*(s-n)/200;y=Gn(y,o,p),E=Gn(E,o,p);const A=[],S=()=>Gn(x,o,p),v=()=>Gn(g,o,p),P=o.preserveVertices;return u?A.push({op:"move",data:[s+(P?0:S()),e+(P?0:S())]}):A.push({op:"move",data:[s+(P?0:Gn(g,o,p)),e+(P?0:Gn(g,o,p))]}),u?A.push({op:"bcurveTo",data:[y+s+(n-s)*_+S(),E+e+(a-e)*_+S(),y+s+2*(n-s)*_+S(),E+e+2*(a-e)*_+S(),n+(P?0:S()),a+(P?0:S())]}):A.push({op:"bcurveTo",data:[y+s+(n-s)*_+v(),E+e+(a-e)*_+v(),y+s+2*(n-s)*_+v(),E+e+2*(a-e)*_+v(),n+(P?0:v()),a+(P?0:v())]}),A}function J_(s,e,n){const a=s.length,o=[];if(a>3){const c=[],u=1-n.curveTightness;o.push({op:"move",data:[s[1][0],s[1][1]]});for(let d=1;d+2<a;d++){const m=s[d];c[0]=[m[0],m[1]],c[1]=[m[0]+(u*s[d+1][0]-u*s[d-1][0])/6,m[1]+(u*s[d+1][1]-u*s[d-1][1])/6],c[2]=[s[d+1][0]+(u*s[d][0]-u*s[d+2][0])/6,s[d+1][1]+(u*s[d][1]-u*s[d+2][1])/6],c[3]=[s[d+1][0],s[d+1][1]],o.push({op:"bcurveTo",data:[c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]]})}}else a===3?(o.push({op:"move",data:[s[1][0],s[1][1]]}),o.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[2][0],s[2][1]]})):a===2&&o.push(...B0(s[0][0],s[0][1],s[1][0],s[1][1],n,!0,!0));return o}function ev(s,e,n,a,o,c,u,d){const m=d.roughness===0,p=[],g=[];if(m){s=s/4,g.push([e+a*Math.cos(-s),n+o*Math.sin(-s)]);for(let x=0;x<=Math.PI*2;x=x+s){const _=[e+a*Math.cos(x),n+o*Math.sin(x)];p.push(_),g.push(_)}g.push([e+a*Math.cos(0),n+o*Math.sin(0)]),g.push([e+a*Math.cos(s),n+o*Math.sin(s)])}else{const x=Gn(.5,d)-Math.PI/2;g.push([Gn(c,d)+e+.9*a*Math.cos(x-s),Gn(c,d)+n+.9*o*Math.sin(x-s)]);const _=Math.PI*2+x-.01;for(let y=x;y<_;y=y+s){const E=[Gn(c,d)+e+a*Math.cos(y),Gn(c,d)+n+o*Math.sin(y)];p.push(E),g.push(E)}g.push([Gn(c,d)+e+a*Math.cos(x+Math.PI*2+u*.5),Gn(c,d)+n+o*Math.sin(x+Math.PI*2+u*.5)]),g.push([Gn(c,d)+e+.98*a*Math.cos(x+u),Gn(c,d)+n+.98*o*Math.sin(x+u)]),g.push([Gn(c,d)+e+.9*a*Math.cos(x+u*.5),Gn(c,d)+n+.9*o*Math.sin(x+u*.5)])}return[g,p]}const Jy={randOffset(s,e){return s},randOffsetWithRange(s,e,n){return(s+e)/2},ellipse(s,e,n,a,o){return D2(s,e,n,a,o)},doubleLineOps(s,e,n,a,o){return Qy(s,e,n,a,o)}};function ko(s){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:s}}function e3(s,e){let n="";for(const a of s.ops){const o=a.data;switch(a.op){case"move":if(e&&n)break;n+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":n+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":n+=`L${o[0]} ${o[1]} `;break}}return n.trim()}function zo(s,e){const n=document.createElementNS("http://www.w3.org/2000/svg",s);if(e)for(const a in e)n.setAttributeNS(null,a,e[a]);return n}function hc(s,e,n=!1){const a=zo("path",{d:e3(s,n)});return e&&e.appendChild(a),a}function Ui(s,e,n,a,o,c){return hc($y(e+2,n+2,a-4,o-4,ko(c)),s)}function Dn(s,e,n,a,o,c){return hc(R2(e,n,a,o,ko(c)),s)}function t3(s,e,n){return hc(C2(e,ko(n)),s,!0)}function Rs(s,e,n,a,o,c){return a=Math.max(a>10?a-4:a-1,1),o=Math.max(o>10?o-4:o-1,1),hc(D2(e,n,a,o,ko(c)),s)}function Ef(s,e){const a=new qy(Jy).fillPolygon(s,ko(e));return hc(a,null)}function zp(s,e,n,a,o){const c=ko(o),u=U2(n,a,c),d=[];let m=0;for(;m<=Math.PI*2;)d.push([s+u.rx*Math.cos(m),e+u.ry*Math.sin(m)]),m+=u.increment;return Ef(d,o)}var Tf=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Af=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Jl=class extends Ln{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};Ui(e,0,0,o.width,o.height,this.seed);for(let c=1;c<a;c++)Dn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Dn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Dn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Dn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Tf([Pe({type:Number}),Af("design:type",Object)],Jl.prototype,"elevation",void 0);Tf([Pe({type:Boolean,reflect:!0}),Af("design:type",Object)],Jl.prototype,"disabled",void 0);Tf([Wn("button"),Af("design:type",HTMLButtonElement)],Jl.prototype,"button",void 0);Jl=Tf([vn("wired-button"),Af("design:paramtypes",[])],Jl);var Ip=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Bp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let ec=class extends Ln{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const n=e.has("fill");this.wiredRender(n),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};if(this.fill&&this.fill.trim()){const c=Ef([[2,2],[o.width-4,2],[o.width-2,o.height-4],[2,o.height-4]],this.seed);c.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(c)}Ui(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Dn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Dn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Dn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Dn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Ip([Pe({type:Number}),Bp("design:type",Object)],ec.prototype,"elevation",void 0);Ip([Pe({type:String}),Bp("design:type",String)],ec.prototype,"fill",void 0);ec=Ip([vn("wired-card"),Bp("design:paramtypes",[])],ec);var pc=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},wf=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Io=class extends Ln{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[Un,gn`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return mn`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){Ui(e,0,0,n[0],n[1],this.seed),this.svgCheck=zo("g"),e.appendChild(this.svgCheck),Dn(this.svgCheck,n[0]*.3,n[1]*.4,n[0]*.5,n[1]*.7,this.seed),Dn(this.svgCheck,n[0]*.5,n[1]*.7,n[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};pc([Pe({type:Boolean}),wf("design:type",Object)],Io.prototype,"checked",void 0);pc([Pe({type:Boolean,reflect:!0}),wf("design:type",Object)],Io.prototype,"disabled",void 0);pc([zy(),wf("design:type",Object)],Io.prototype,"focused",void 0);pc([Wn("input"),wf("design:type",HTMLInputElement)],Io.prototype,"input",void 0);Io=pc([vn("wired-checkbox")],Io);var Rf=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Fp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let tc=class extends Ln{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){const a=Ef([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],this.seed);e.appendChild(a)}};Rf([Pe(),Fp("design:type",Object)],tc.prototype,"value",void 0);Rf([Pe(),Fp("design:type",Object)],tc.prototype,"name",void 0);Rf([Pe({type:Boolean}),Fp("design:type",Object)],tc.prototype,"selected",void 0);tc=Rf([vn("wired-item")],tc);var Xo=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},mc=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Cs=class extends or{constructor(){super(...arguments),this.disabled=!1,this.seed=Hy(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return gn`
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
    `}render(){return mn`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const n=this.svg;for(;n.hasChildNodes();)n.removeChild(n.lastChild);const a=this.shadowRoot.getElementById("container").getBoundingClientRect();n.setAttribute("width",`${a.width}`),n.setAttribute("height",`${a.height}`);const o=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=o.height+"px",Ui(n,0,0,o.width,o.height,this.seed);const c=o.width-4;Ui(n,c,0,34,o.height,this.seed);const u=Math.max(0,Math.abs((o.height-24)/2)),d=t3(n,[[c+8,5+u],[c+26,5+u],[c+17,u+Math.min(o.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const m=this.shadowRoot.getElementById("slot").assignedNodes();if(m&&m.length)for(let p=0;p<m.length;p++){const g=m[p];g.tagName==="WIRED-ITEM"&&(g.setAttribute("role","option"),this.itemNodes.push(g))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||c.getAttribute("value")||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(a=>a.nodeType===Node.ELEMENT_NODE).forEach(a=>{const o=a;o.requestUpdate&&o.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Pp(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Xo([Pe({type:Object}),mc("design:type",Object)],Cs.prototype,"value",void 0);Xo([Pe({type:String,reflect:!0}),mc("design:type",String)],Cs.prototype,"selected",void 0);Xo([Pe({type:Boolean,reflect:!0}),mc("design:type",Object)],Cs.prototype,"disabled",void 0);Xo([Wn("svg"),mc("design:type",SVGSVGElement)],Cs.prototype,"svg",void 0);Xo([Wn("#card"),mc("design:type",HTMLDivElement)],Cs.prototype,"card",void 0);Cs=Xo([vn("wired-combo")],Cs);var Cf=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Hp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let nc=class extends or{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return gn`
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
    `}render(){return mn`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};Cf([Pe({type:Number}),Hp("design:type",Object)],nc.prototype,"elevation",void 0);Cf([Pe({type:Boolean,reflect:!0}),Hp("design:type",Object)],nc.prototype,"open",void 0);Cf([Wn("wired-card"),Hp("design:type",ec)],nc.prototype,"card",void 0);nc=Cf([vn("wired-dialog")],nc);var O2=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},n3=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let F0=class extends Ln{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[Un,gn`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return mn`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5);return[e.width,n*6]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5);for(let o=0;o<a;o++)Dn(e,0,o*6+3,n[0],o*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};O2([Pe({type:Number}),n3("design:type",Object)],F0.prototype,"elevation",void 0);F0=O2([vn("wired-divider")],F0);var Gp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},N2=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let df=class extends Ln{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]),o=zp(a/2,a/2,a,a,this.seed);e.appendChild(o)}};Gp([Pe({type:Boolean,reflect:!0}),N2("design:type",Object)],df.prototype,"disabled",void 0);Gp([Wn("button"),N2("design:type",HTMLButtonElement)],df.prototype,"button",void 0);df=Gp([vn("wired-fab")],df);var Vp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P2=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let hf=class extends Ln{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]);e.setAttribute("width",`${a}`),e.setAttribute("height",`${a}`),Rs(e,a/2,a/2,a,a,this.seed)}};Vp([Pe({type:Boolean,reflect:!0}),P2("design:type",Object)],hf.prototype,"disabled",void 0);Vp([Wn("button"),P2("design:type",HTMLButtonElement)],hf.prototype,"button",void 0);hf=Vp([vn("wired-icon-button")],hf);var jp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},kp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};const i3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let pf=class extends Ln{constructor(){super(),this.elevation=1,this.src=i3,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};Ui(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Dn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Dn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Dn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Dn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};jp([Pe({type:Number}),kp("design:type",Object)],pf.prototype,"elevation",void 0);jp([Pe({type:String}),kp("design:type",String)],pf.prototype,"src",void 0);pf=jp([vn("wired-image"),kp("design:paramtypes",[])],pf);var Kn=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Qn=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let jn=class extends Ln{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Ui(e,2,2,n[0]-2,n[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};Kn([Pe({type:Boolean,reflect:!0}),Qn("design:type",Object)],jn.prototype,"disabled",void 0);Kn([Pe({type:String}),Qn("design:type",Object)],jn.prototype,"placeholder",void 0);Kn([Pe({type:String}),Qn("design:type",String)],jn.prototype,"name",void 0);Kn([Pe({type:String}),Qn("design:type",String)],jn.prototype,"min",void 0);Kn([Pe({type:String}),Qn("design:type",String)],jn.prototype,"max",void 0);Kn([Pe({type:String}),Qn("design:type",String)],jn.prototype,"step",void 0);Kn([Pe({type:String}),Qn("design:type",Object)],jn.prototype,"type",void 0);Kn([Pe({type:String}),Qn("design:type",Object)],jn.prototype,"autocomplete",void 0);Kn([Pe({type:String}),Qn("design:type",Object)],jn.prototype,"autocapitalize",void 0);Kn([Pe({type:String}),Qn("design:type",Object)],jn.prototype,"autocorrect",void 0);Kn([Pe({type:Boolean}),Qn("design:type",Object)],jn.prototype,"required",void 0);Kn([Pe({type:Boolean}),Qn("design:type",Object)],jn.prototype,"autofocus",void 0);Kn([Pe({type:Boolean}),Qn("design:type",Object)],jn.prototype,"readonly",void 0);Kn([Pe({type:Number}),Qn("design:type",Number)],jn.prototype,"minlength",void 0);Kn([Pe({type:Number}),Qn("design:type",Number)],jn.prototype,"maxlength",void 0);Kn([Pe({type:Number}),Qn("design:type",Number)],jn.prototype,"size",void 0);Kn([Wn("input"),Qn("design:type",HTMLInputElement)],jn.prototype,"textInput",void 0);jn=Kn([vn("wired-input"),Qn("design:paramtypes",[])],jn);var gc=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Df=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Bo=class extends Ln{constructor(){super(...arguments),this.elevation=1}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0],height:n[1]-(a-1)*2};for(let c=0;c<a;c++)Dn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed),Dn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed)}};gc([Pe({type:Number}),Df("design:type",Object)],Bo.prototype,"elevation",void 0);gc([Pe({type:String}),Df("design:type",String)],Bo.prototype,"href",void 0);gc([Pe({type:String}),Df("design:type",String)],Bo.prototype,"target",void 0);gc([Wn("a"),Df("design:type",HTMLAnchorElement)],Bo.prototype,"anchor",void 0);Bo=gc([vn("wired-link")],Bo);var Uf=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Xp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let ic=class extends Ln{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let n=0;n<e.length;n++){const a=e[n];a.tagName==="WIRED-ITEM"&&(a.setAttribute("role","option"),this.itemNodes.push(a))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Ui(e,0,0,n[0],n[1],this.seed)}};Uf([Pe({type:Object}),Xp("design:type",Object)],ic.prototype,"value",void 0);Uf([Pe({type:String}),Xp("design:type",String)],ic.prototype,"selected",void 0);Uf([Pe({type:Boolean}),Xp("design:type",Object)],ic.prototype,"horizontal",void 0);ic=Uf([vn("wired-listbox")],ic);var xc=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Lf=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Ds=class extends Ln{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Ui(e,2,2,n[0]-2,n[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const n=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const a=n.width*Math.max(0,Math.min(e,100));this.progBox=Ef([[0,0],[a,0],[a,n.height],[0,n.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};xc([Pe({type:Number}),Lf("design:type",Object)],Ds.prototype,"value",void 0);xc([Pe({type:Number}),Lf("design:type",Object)],Ds.prototype,"min",void 0);xc([Pe({type:Number}),Lf("design:type",Object)],Ds.prototype,"max",void 0);xc([Pe({type:Boolean}),Lf("design:type",Object)],Ds.prototype,"percentage",void 0);Ds=xc([vn("wired-progress")],Ds);var Wo=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_c=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Us=class extends Ln{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[Un,gn`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return mn`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){Rs(e,n[0]/2,n[1]/2,n[0],n[1],this.seed),this.svgCheck=zo("g"),e.appendChild(this.svgCheck);const a=Math.max(n[0]*.6,5),o=Math.max(n[1]*.6,5);Rs(this.svgCheck,n[0]/2,n[1]/2,a,o,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Wo([Pe({type:Boolean}),_c("design:type",Object)],Us.prototype,"checked",void 0);Wo([Pe({type:Boolean,reflect:!0}),_c("design:type",Object)],Us.prototype,"disabled",void 0);Wo([Pe({type:String}),_c("design:type",String)],Us.prototype,"name",void 0);Wo([Pe(),_c("design:type",Object)],Us.prototype,"focused",void 0);Wo([Wn("input"),_c("design:type",HTMLInputElement)],Us.prototype,"input",void 0);Us=Wo([vn("wired-radio")],Us);var z2=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},a3=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let H0=class extends or{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return gn`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return mn`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const n=e.detail.checked,a=e.target,o=a.name||"";n?(this.selected=n&&o||"",this.fireSelected()):a.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const n=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],n&&n.length)for(let a=0;a<n.length;a++){const o=n[a];if(o.tagName==="WIRED-RADIO"){this.radioNodes.push(o);const c=o.name||"";this.selected&&c===this.selected?o.checked=!0:o.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a--,a<0&&(a=e.length-1),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a++,a>=e.length&&(a=0),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}fireSelected(){Pp(this,"selected",{selected:this.selected})}};z2([Pe({type:String}),a3("design:type",String)],H0.prototype,"selected",void 0);H0=z2([vn("wired-radio-group")],H0);var Ns=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},qo=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Wr=class extends Ln{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;n&&(n.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Ui(e,2,2,n[0]-2,n[1]-2,this.seed),this.searchIcon=zo("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),Rs(this.searchIcon,n[0]-30,(n[1]-30)/2+10,20,20,this.seed),Dn(this.searchIcon,n[0]-10,(n[1]-30)/2+30,n[0]-25,(n[1]-30)/2+15,this.seed),this.closeIcon=zo("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),Dn(this.closeIcon,n[0]-33,(n[1]-30)/2+2,n[0]-7,(n[1]-30)/2+28,this.seed),Dn(this.closeIcon,n[0]-7,(n[1]-30)/2+2,n[0]-33,(n[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Ns([Pe({type:Boolean,reflect:!0}),qo("design:type",Object)],Wr.prototype,"disabled",void 0);Ns([Pe({type:String}),qo("design:type",Object)],Wr.prototype,"placeholder",void 0);Ns([Pe({type:String}),qo("design:type",Object)],Wr.prototype,"autocomplete",void 0);Ns([Pe({type:String}),qo("design:type",Object)],Wr.prototype,"autocorrect",void 0);Ns([Pe({type:Boolean}),qo("design:type",Object)],Wr.prototype,"autofocus",void 0);Ns([Wn("input"),qo("design:type",HTMLInputElement)],Wr.prototype,"textInput",void 0);Wr=Ns([vn("wired-search-input")],Wr);var Yo=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},vc=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let qr=class extends Ln{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[Un,gn`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return mn`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){this.canvasWidth=n[0];const a=Math.round(n[1]/2);Dn(e,0,a,n[0],a,this.seed).classList.add("bar"),this.knob=Rs(e,10,a,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,n=Math.max(this.step,this.max-this.min),a=(e-this.min)/n;this.knob&&(this.knob.style.transform=`translateX(${a*(this.canvasWidth-20)}px)`)}}};Yo([Pe({type:Number}),vc("design:type",Object)],qr.prototype,"min",void 0);Yo([Pe({type:Number}),vc("design:type",Object)],qr.prototype,"max",void 0);Yo([Pe({type:Number}),vc("design:type",Object)],qr.prototype,"step",void 0);Yo([Pe({type:Boolean,reflect:!0}),vc("design:type",Object)],qr.prototype,"disabled",void 0);Yo([Wn("input"),vc("design:type",HTMLInputElement)],qr.prototype,"input",void 0);qr=Yo([vn("wired-slider")],qr);var Wp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},I2=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let mf=class extends Ln{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[Un,gn`
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
      `]}render(){return mn`<svg></svg>`}canvasSize(){return[76,76]}draw(e,n){Rs(e,n[0]/2,n[1]/2,Math.floor(n[0]*.8),Math.floor(.8*n[1]),this.seed),this.knob=zp(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Wp([Pe({type:Boolean}),I2("design:type",Object)],mf.prototype,"spinning",void 0);Wp([Pe({type:Number}),I2("design:type",Object)],mf.prototype,"duration",void 0);mf=Wp([vn("wired-spinner")],mf);var qp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Yp=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let gf=class extends Ln{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Un,gn`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return mn`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Ui(e,2,2,n[0]-4,n[1]-4,this.seed)}};qp([Pe({type:String}),Yp("design:type",Object)],gf.prototype,"name",void 0);qp([Pe({type:String}),Yp("design:type",Object)],gf.prototype,"label",void 0);gf=qp([vn("wired-tab"),Yp("design:paramtypes",[])],gf);var Zp=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},B2=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let xf=class extends or{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <div id="bar">
      ${this.pages.map(e=>mn`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let n=0;n<e.length;n++){const a=e[n];if(a.nodeType===Node.ELEMENT_NODE&&a.tagName.toLowerCase()==="wired-tab"){const o=a;this.pages.push(o);const c=o.getAttribute("name")||"";c&&c.trim().split(" ").forEach(u=>{u&&this.pageMap.set(u,o)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let n=0;n<this.pages.length;n++){const a=this.pages[n];a===e?a.classList.remove("hidden"):a.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].name||""}}selectNext(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].name||""}}};Zp([Pe({type:String}),B2("design:type",String)],xf.prototype,"selected",void 0);Zp([Wn("slot"),B2("design:type",HTMLSlotElement)],xf.prototype,"slotElement",void 0);xf=Zp([vn("wired-tabs")],xf);var Wi=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},sa=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let Li=class extends Ln{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.textarea;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Ui(e,4,4,n[0]-4,n[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Wi([Pe({type:Boolean,reflect:!0}),sa("design:type",Object)],Li.prototype,"disabled",void 0);Wi([Pe({type:Number}),sa("design:type",Object)],Li.prototype,"rows",void 0);Wi([Pe({type:Number}),sa("design:type",Object)],Li.prototype,"maxrows",void 0);Wi([Pe({type:String}),sa("design:type",Object)],Li.prototype,"autocomplete",void 0);Wi([Pe({type:Boolean}),sa("design:type",Object)],Li.prototype,"autofocus",void 0);Wi([Pe({type:String}),sa("design:type",Object)],Li.prototype,"inputmode",void 0);Wi([Pe({type:String}),sa("design:type",Object)],Li.prototype,"placeholder",void 0);Wi([Pe({type:Boolean}),sa("design:type",Object)],Li.prototype,"required",void 0);Wi([Pe({type:Boolean}),sa("design:type",Object)],Li.prototype,"readonly",void 0);Wi([Pe({type:Number}),sa("design:type",Number)],Li.prototype,"minlength",void 0);Wi([Pe({type:Number}),sa("design:type",Number)],Li.prototype,"maxlength",void 0);Wi([Wn("textarea"),sa("design:type",HTMLTextAreaElement)],Li.prototype,"textareaInput",void 0);Li=Wi([vn("wired-textarea")],Li);var Of=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},$p=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let ac=class extends Ln{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,n){Ui(e,16,8,n[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=zo("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const o=zp(16,16,32,32,this.seed);o.classList.add("knobfill"),this.knob.appendChild(o),Rs(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Of([Pe({type:Boolean}),$p("design:type",Object)],ac.prototype,"checked",void 0);Of([Pe({type:Boolean,reflect:!0}),$p("design:type",Object)],ac.prototype,"disabled",void 0);Of([Wn("input"),$p("design:type",HTMLInputElement)],ac.prototype,"input",void 0);ac=Of([vn("wired-toggle")],ac);var va=function(s,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(s,e,n,a);else for(var d=s.length-1;d>=0;d--)(u=s[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ba=function(s,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,e)};let ra=class extends Ln{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Un,gn`
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
      `]}render(){return mn`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){Ui(e,2,2,n[0]-4,n[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const n=Math.floor(e/60),a=Math.round(e-n*60);return`${n}:${a}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};va([Pe({type:String}),ba("design:type",Object)],ra.prototype,"src",void 0);va([Pe({type:Boolean}),ba("design:type",Object)],ra.prototype,"autoplay",void 0);va([Pe({type:Boolean}),ba("design:type",Object)],ra.prototype,"loop",void 0);va([Pe({type:Boolean}),ba("design:type",Object)],ra.prototype,"muted",void 0);va([Pe({type:Boolean}),ba("design:type",Object)],ra.prototype,"playsinline",void 0);va([Pe(),ba("design:type",Object)],ra.prototype,"playing",void 0);va([Pe(),ba("design:type",Object)],ra.prototype,"timeDisplay",void 0);va([Wn("wired-progress"),ba("design:type",Ds)],ra.prototype,"progressBar",void 0);va([Wn("wired-slider"),ba("design:type",qr)],ra.prototype,"slider",void 0);va([Wn("video"),ba("design:type",HTMLVideoElement)],ra.prototype,"video",void 0);ra=va([vn("wired-video"),ba("design:paramtypes",[])],ra);function F2(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var kh={exports:{}},Hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function r3(){if(tv)return Hl;tv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Hl.Fragment=e,Hl.jsx=n,Hl.jsxs=n,Hl}var nv;function s3(){return nv||(nv=1,kh.exports=r3()),kh.exports}var le=s3(),Xh={exports:{}},yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function o3(){if(iv)return yt;iv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function v(D,Q,xe){this.props=D,this.context=Q,this.refs=S,this.updater=xe||E}v.prototype.isReactComponent={},v.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=v.prototype;function U(D,Q,xe){this.props=D,this.context=Q,this.refs=S,this.updater=xe||E}var z=U.prototype=new P;z.constructor=U,A(z,v.prototype),z.isPureReactComponent=!0;var V=Array.isArray;function O(){}var B={H:null,A:null,T:null,S:null},re=Object.prototype.hasOwnProperty;function C(D,Q,xe){var Se=xe.ref;return{$$typeof:s,type:D,key:Q,ref:Se!==void 0?Se:null,props:xe}}function R(D,Q){return C(D.type,Q,D.props)}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function ae(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(xe){return Q[xe]})}var ce=/\/+/g;function pe(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?ae(""+D.key):Q.toString(36)}function K(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function N(D,Q,xe,Se,De){var J=typeof D;(J==="undefined"||J==="boolean")&&(D=null);var W=!1;if(D===null)W=!0;else switch(J){case"bigint":case"string":case"number":W=!0;break;case"object":switch(D.$$typeof){case s:case e:W=!0;break;case g:return W=D._init,N(W(D._payload),Q,xe,Se,De)}}if(W)return De=De(D),W=Se===""?"."+pe(D,0):Se,V(De)?(xe="",W!=null&&(xe=W.replace(ce,"$&/")+"/"),N(De,Q,xe,"",function(Xe){return Xe})):De!=null&&(k(De)&&(De=R(De,xe+(De.key==null||D&&D.key===De.key?"":(""+De.key).replace(ce,"$&/")+"/")+W)),Q.push(De)),1;W=0;var Re=Se===""?".":Se+":";if(V(D))for(var Fe=0;Fe<D.length;Fe++)Se=D[Fe],J=Re+pe(Se,Fe),W+=N(Se,Q,xe,J,De);else if(Fe=y(D),typeof Fe=="function")for(D=Fe.call(D),Fe=0;!(Se=D.next()).done;)Se=Se.value,J=Re+pe(Se,Fe++),W+=N(Se,Q,xe,J,De);else if(J==="object"){if(typeof D.then=="function")return N(K(D),Q,xe,Se,De);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return W}function Y(D,Q,xe){if(D==null)return D;var Se=[],De=0;return N(D,Se,"","",function(J){return Q.call(xe,J,De++)}),Se}function X(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(xe){(D._status===0||D._status===-1)&&(D._status=1,D._result=xe)},function(xe){(D._status===0||D._status===-1)&&(D._status=2,D._result=xe)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var ue=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},me={map:Y,forEach:function(D,Q,xe){Y(D,function(){Q.apply(this,arguments)},xe)},count:function(D){var Q=0;return Y(D,function(){Q++}),Q},toArray:function(D){return Y(D,function(Q){return Q})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return yt.Activity=x,yt.Children=me,yt.Component=v,yt.Fragment=n,yt.Profiler=o,yt.PureComponent=U,yt.StrictMode=a,yt.Suspense=m,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,yt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return B.H.useMemoCache(D)}},yt.cache=function(D){return function(){return D.apply(null,arguments)}},yt.cacheSignal=function(){return null},yt.cloneElement=function(D,Q,xe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Se=A({},D.props),De=D.key;if(Q!=null)for(J in Q.key!==void 0&&(De=""+Q.key),Q)!re.call(Q,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&Q.ref===void 0||(Se[J]=Q[J]);var J=arguments.length-2;if(J===1)Se.children=xe;else if(1<J){for(var W=Array(J),Re=0;Re<J;Re++)W[Re]=arguments[Re+2];Se.children=W}return C(D.type,De,Se)},yt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},yt.createElement=function(D,Q,xe){var Se,De={},J=null;if(Q!=null)for(Se in Q.key!==void 0&&(J=""+Q.key),Q)re.call(Q,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(De[Se]=Q[Se]);var W=arguments.length-2;if(W===1)De.children=xe;else if(1<W){for(var Re=Array(W),Fe=0;Fe<W;Fe++)Re[Fe]=arguments[Fe+2];De.children=Re}if(D&&D.defaultProps)for(Se in W=D.defaultProps,W)De[Se]===void 0&&(De[Se]=W[Se]);return C(D,J,De)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(D){return{$$typeof:d,render:D}},yt.isValidElement=k,yt.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:X}},yt.memo=function(D,Q){return{$$typeof:p,type:D,compare:Q===void 0?null:Q}},yt.startTransition=function(D){var Q=B.T,xe={};B.T=xe;try{var Se=D(),De=B.S;De!==null&&De(xe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(O,ue)}catch(J){ue(J)}finally{Q!==null&&xe.types!==null&&(Q.types=xe.types),B.T=Q}},yt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},yt.use=function(D){return B.H.use(D)},yt.useActionState=function(D,Q,xe){return B.H.useActionState(D,Q,xe)},yt.useCallback=function(D,Q){return B.H.useCallback(D,Q)},yt.useContext=function(D){return B.H.useContext(D)},yt.useDebugValue=function(){},yt.useDeferredValue=function(D,Q){return B.H.useDeferredValue(D,Q)},yt.useEffect=function(D,Q){return B.H.useEffect(D,Q)},yt.useEffectEvent=function(D){return B.H.useEffectEvent(D)},yt.useId=function(){return B.H.useId()},yt.useImperativeHandle=function(D,Q,xe){return B.H.useImperativeHandle(D,Q,xe)},yt.useInsertionEffect=function(D,Q){return B.H.useInsertionEffect(D,Q)},yt.useLayoutEffect=function(D,Q){return B.H.useLayoutEffect(D,Q)},yt.useMemo=function(D,Q){return B.H.useMemo(D,Q)},yt.useOptimistic=function(D,Q){return B.H.useOptimistic(D,Q)},yt.useReducer=function(D,Q,xe){return B.H.useReducer(D,Q,xe)},yt.useRef=function(D){return B.H.useRef(D)},yt.useState=function(D){return B.H.useState(D)},yt.useSyncExternalStore=function(D,Q,xe){return B.H.useSyncExternalStore(D,Q,xe)},yt.useTransition=function(){return B.H.useTransition()},yt.version="19.2.1",yt}var av;function Kp(){return av||(av=1,Xh.exports=o3()),Xh.exports}var Ge=Kp();const l3=F2(Ge);var Wh={exports:{}},Gl={},qh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function c3(){return rv||(rv=1,(function(s){function e(N,Y){var X=N.length;N.push(Y);e:for(;0<X;){var ue=X-1>>>1,me=N[ue];if(0<o(me,Y))N[ue]=Y,N[X]=me,X=ue;else break e}}function n(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var Y=N[0],X=N.pop();if(X!==Y){N[0]=X;e:for(var ue=0,me=N.length,D=me>>>1;ue<D;){var Q=2*(ue+1)-1,xe=N[Q],Se=Q+1,De=N[Se];if(0>o(xe,X))Se<me&&0>o(De,xe)?(N[ue]=De,N[Se]=X,ue=Se):(N[ue]=xe,N[Q]=X,ue=Q);else if(Se<me&&0>o(De,X))N[ue]=De,N[Se]=X,ue=Se;else break e}}return Y}function o(N,Y){var X=N.sortIndex-Y.sortIndex;return X!==0?X:N.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,x=null,_=3,y=!1,E=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function z(N){for(var Y=n(p);Y!==null;){if(Y.callback===null)a(p);else if(Y.startTime<=N)a(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=n(p)}}function V(N){if(A=!1,z(N),!E)if(n(m)!==null)E=!0,O||(O=!0,ae());else{var Y=n(p);Y!==null&&K(V,Y.startTime-N)}}var O=!1,B=-1,re=5,C=-1;function R(){return S?!0:!(s.unstable_now()-C<re)}function k(){if(S=!1,O){var N=s.unstable_now();C=N;var Y=!0;try{e:{E=!1,A&&(A=!1,P(B),B=-1),y=!0;var X=_;try{t:{for(z(N),x=n(m);x!==null&&!(x.expirationTime>N&&R());){var ue=x.callback;if(typeof ue=="function"){x.callback=null,_=x.priorityLevel;var me=ue(x.expirationTime<=N);if(N=s.unstable_now(),typeof me=="function"){x.callback=me,z(N),Y=!0;break t}x===n(m)&&a(m),z(N)}else a(m);x=n(m)}if(x!==null)Y=!0;else{var D=n(p);D!==null&&K(V,D.startTime-N),Y=!1}}break e}finally{x=null,_=X,y=!1}Y=void 0}}finally{Y?ae():O=!1}}}var ae;if(typeof U=="function")ae=function(){U(k)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=k,ae=function(){pe.postMessage(null)}}else ae=function(){v(k,0)};function K(N,Y){B=v(function(){N(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(N){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var X=_;_=Y;try{return N()}finally{_=X}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=_;_=N;try{return Y()}finally{_=X}},s.unstable_scheduleCallback=function(N,Y,X){var ue=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ue+X:ue):X=ue,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=X+me,N={id:g++,callback:Y,priorityLevel:N,startTime:X,expirationTime:me,sortIndex:-1},X>ue?(N.sortIndex=X,e(p,N),n(m)===null&&N===n(p)&&(A?(P(B),B=-1):A=!0,K(V,X-ue))):(N.sortIndex=me,e(m,N),E||y||(E=!0,O||(O=!0,ae()))),N},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(N){var Y=_;return function(){var X=_;_=Y;try{return N.apply(this,arguments)}finally{_=X}}}})(Yh)),Yh}var sv;function u3(){return sv||(sv=1,qh.exports=c3()),qh.exports}var Zh={exports:{}},di={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function f3(){if(ov)return di;ov=1;var s=Kp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return di.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,di.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},di.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},di.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},di.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},di.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},di.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},di.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},di.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},di.requestFormReset=function(m){a.d.r(m)},di.unstable_batchedUpdates=function(m,p){return m(p)},di.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},di.useFormStatus=function(){return u.H.useHostTransitionStatus()},di.version="19.2.1",di}var lv;function d3(){if(lv)return Zh.exports;lv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zh.exports=f3(),Zh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function h3(){if(cv)return Gl;cv=1;var s=u3(),e=Kp(),n=d3();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var f=r.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===r)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=h;else{for(var b=!1,T=f.child;T;){if(T===r){b=!0,r=f,l=h;break}if(T===l){b=!0,l=f,r=h;break}T=T.sibling}if(!b){for(T=h.child;T;){if(T===r){b=!0,r=h,l=f;break}if(T===l){b=!0,l=h,r=f;break}T=T.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var K=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ue=[],me=-1;function D(t){return{current:t}}function Q(t){0>me||(t.current=ue[me],ue[me]=null,me--)}function xe(t,i){me++,ue[me]=t.current,t.current=i}var Se=D(null),De=D(null),J=D(null),W=D(null);function Re(t,i){switch(xe(J,i),xe(De,t),xe(Se,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?u_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=u_(i),t=f_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Se),xe(Se,t)}function Fe(){Q(Se),Q(De),Q(J)}function Xe(t){t.memoizedState!==null&&xe(W,t);var i=Se.current,r=f_(i,t.type);i!==r&&(xe(De,t),xe(Se,r))}function Je(t){De.current===t&&(Q(Se),Q(De)),W.current===t&&(Q(W),Pl._currentValue=X)}var Ft,Ze;function At(t){if(Ft===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ft=i&&i[1]||"",Ze=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ft+t+Ze}var F=!1;function xt(t,i){if(!t||F)return"";F=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(de){var oe=de}Reflect.construct(t,[],be)}else{try{be.call()}catch(de){oe=de}t.call(be.prototype)}}else{try{throw Error()}catch(de){oe=de}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(de){if(de&&oe&&typeof de.stack=="string")return[de.stack,oe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],T=h[1];if(b&&T){var I=b.split(`
`),ie=T.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ie.length&&!ie[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===ie.length)for(l=I.length-1,f=ie.length-1;1<=l&&0<=f&&I[l]!==ie[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==ie[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==ie[f]){var ge=`
`+I[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{F=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?At(r):""}function Mt(t,i){switch(t.tag){case 26:case 27:case 5:return At(t.type);case 16:return At("Lazy");case 13:return t.child!==i&&i!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return xt(t.type,!1);case 11:return xt(t.type.render,!1);case 1:return xt(t.type,!0);case 31:return At("Activity");default:return""}}function qt(t){try{var i="",r=null;do i+=Mt(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var We=Object.prototype.hasOwnProperty,Kt=s.unstable_scheduleCallback,it=s.unstable_cancelCallback,_t=s.unstable_shouldYield,L=s.unstable_requestPaint,M=s.unstable_now,ee=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,et=s.unstable_LowPriority,Ie=s.unstable_IdlePriority,ot=s.log,$e=s.unstable_setDisableYieldValue,Me=null,Te=null;function at(t){if(typeof ot=="function"&&$e(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Me,t)}catch{}}var qe=Math.clz32?Math.clz32:H,Ve=Math.log,dt=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Ve(t)/dt|0)|0}var Be=256,Le=262144,Ue=4194304;function Ee(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function G(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~h,l!==0?f=Ee(l):(b&=T,b!==0?f=Ee(b):r||(r=T&~t,r!==0&&(f=Ee(r))))):(T=l&~h,T!==0?f=Ee(T):b!==0?f=Ee(b):r||(r=l&~t,r!==0&&(f=Ee(r)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,r=i&-i,h>=r||h===32&&(r&4194048)!==0)?i:f}function Ae(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Ke(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(){var t=Ue;return Ue<<=1,(Ue&62914560)===0&&(Ue=4194304),t}function lt(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function fn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ct(t,i,r,l,f,h){var b=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,ie=t.hiddenUpdates;for(r=b&~r;0<r;){var ge=31-qe(r),be=1<<ge;T[ge]=0,I[ge]=-1;var oe=ie[ge];if(oe!==null)for(ie[ge]=null,ge=0;ge<oe.length;ge++){var de=oe[ge];de!==null&&(de.lane&=-536870913)}r&=~be}l!==0&&Oi(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function Oi(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-qe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function oa(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-qe(r),f=1<<l;f&i|t[l]&i&&(t[l]|=i),r&=~f}}function ya(t,i){var r=i&-i;return r=(r&42)!==0?1:Jn(r),(r&(t.suspendedLanes|i))!==0?0:r}function Jn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Na(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zr(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:N_(t.type))}function _i(t,i){var r=Y.p;try{return Y.p=t,i()}finally{Y.p=r}}var ci=Math.random().toString(36).slice(2),bn="__reactFiber$"+ci,Sn="__reactProps$"+ci,la="__reactContainer$"+ci,Sa="__reactEvents$"+ci,Jo="__reactListeners$"+ci,Ps="__reactHandles$"+ci,zs="__reactResources$"+ci,Pa="__reactMarker$"+ci;function $r(t){delete t[bn],delete t[Sn],delete t[Sa],delete t[Jo],delete t[Ps]}function Ma(t){var i=t[bn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[la]||r[bn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=__(t);t!==null;){if(r=t[bn])return r;t=__(t)}return i}t=r,r=t.parentNode}return null}function w(t){if(t=t[bn]||t[la]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function q(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function se(t){var i=t[zs];return i||(i=t[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function te(t){t[Pa]=!0}var $=new Set,Ce={};function Oe(t,i){je(t,i),je(t+"Capture",i)}function je(t,i){for(Ce[t]=i,t=0;t<i.length;t++)$.add(i[t])}var ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},ft={};function rt(t){return We.call(ft,t)?!0:We.call(ct,t)?!1:ke.test(t)?ft[t]=!0:(ct[t]=!0,!1)}function bt(t,i,r){if(rt(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Pt(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function we(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}function ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ne(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){r=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){if(!t._valueTracker){var i=nt(t)?"checked":"value";t._valueTracker=Ne(t,i,""+t[i])}}function st(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=nt(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function gt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ln=/[\n"\\]/g;function vt(t){return t.replace(ln,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function cn(t,i,r,l,f,h,b,T){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ze(i)):t.value!==""+ze(i)&&(t.value=""+ze(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Vt(t,b,ze(i)):r!=null?Vt(t,b,ze(r)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ze(T):t.removeAttribute("name")}function Lt(t,i,r,l,f,h,b,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){pt(t);return}r=r!=null?""+ze(r):"",i=i!=null?""+ze(i):r,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),pt(t)}function Vt(t,i,r){i==="number"&&gt(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Yt(t,i,r,l){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&l&&(t[r].defaultSelected=!0)}else{for(r=""+ze(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function mt(t,i,r){if(i!=null&&(i=""+ze(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+ze(r):""}function tt(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(K(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=ze(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),pt(t)}function zt(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function un(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||rn.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Fn(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&un(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&un(t,h,i[h])}function vi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yi(t){return qi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ei(){}var Ni=null;function ti(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ui=null,bi=null;function dr(t){var i=w(t);if(i&&(t=i.stateNode)){var r=t[Sn]||null;e:switch(t=i.stateNode,i.type){case"input":if(cn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+vt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var f=l[Sn]||null;if(!f)throw Error(a(90));cn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&st(l)}break e;case"textarea":mt(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&Yt(t,!!r.multiple,i,!1)}}}var Ea=!1;function yn(t,i,r){if(Ea)return t(i,r);Ea=!0;try{var l=t(i);return l}finally{if(Ea=!1,(ui!==null||bi!==null)&&(uu(),ui&&(i=ui,t=bi,bi=ui=null,dr(i),t)))for(i=0;i<t.length;i++)dr(t[i])}}function ca(t,i){var r=t.stateNode;if(r===null)return null;var l=r[Sn]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=!1;if(mi)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{Ia=!1}var wn=null,Is=null,Kr=null;function Tc(){if(Kr)return Kr;var t,i=Is,r=i.length,l,f="value"in wn?wn.value:wn.textContent,h=f.length;for(t=0;t<r&&i[t]===f[t];t++);var b=r-t;for(l=1;l<=b&&i[r-l]===f[h-l];l++);return Kr=f.slice(t,1<l?1-l:void 0)}function Bs(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ac(){return!0}function dm(){return!1}function yi(t){function i(r,l,f,h,b){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(r=t[T],this[T]=r?r(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ac:dm,this.isPropagationStopped=dm,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ac)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ac)},persist:function(){},isPersistent:Ac}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=yi(Qr),el=x({},Qr,{view:0,detail:0}),_b=yi(el),Ff,Hf,tl,Rc=x({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==tl&&(tl&&t.type==="mousemove"?(Ff=t.screenX-tl.screenX,Hf=t.screenY-tl.screenY):Hf=Ff=0,tl=t),Ff)},movementY:function(t){return"movementY"in t?t.movementY:Hf}}),hm=yi(Rc),vb=x({},Rc,{dataTransfer:0}),bb=yi(vb),yb=x({},el,{relatedTarget:0}),Gf=yi(yb),Sb=x({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Mb=yi(Sb),Eb=x({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tb=yi(Eb),Ab=x({},Qr,{data:0}),pm=yi(Ab),wb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Db(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Cb[t])?!!i[t]:!1}function Vf(){return Db}var Ub=x({},el,{key:function(t){if(t.key){var i=wb[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Bs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(t){return t.type==="keypress"?Bs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Lb=yi(Ub),Ob=x({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=yi(Ob),Nb=x({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),Pb=yi(Nb),zb=x({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ib=yi(zb),Bb=x({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fb=yi(Bb),Hb=x({},Qr,{newState:0,oldState:0}),Gb=yi(Hb),Vb=[9,13,27,32],jf=mi&&"CompositionEvent"in window,nl=null;mi&&"documentMode"in document&&(nl=document.documentMode);var jb=mi&&"TextEvent"in window&&!nl,gm=mi&&(!jf||nl&&8<nl&&11>=nl),xm=" ",_m=!1;function vm(t,i){switch(t){case"keyup":return Vb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function kb(t,i){switch(t){case"compositionend":return bm(i);case"keypress":return i.which!==32?null:(_m=!0,xm);case"textInput":return t=i.data,t===xm&&_m?null:t;default:return null}}function Xb(t,i){if(Fs)return t==="compositionend"||!jf&&vm(t,i)?(t=Tc(),Kr=Is=wn=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gm&&i.locale!=="ko"?null:i.data;default:return null}}var Wb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Wb[t.type]:i==="textarea"}function Sm(t,i,r,l){ui?bi?bi.push(l):bi=[l]:ui=l,i=xu(i,"onChange"),0<i.length&&(r=new wc("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var il=null,al=null;function qb(t){a_(t,0)}function Cc(t){var i=q(t);if(st(i))return t}function Mm(t,i){if(t==="change")return i}var Em=!1;if(mi){var kf;if(mi){var Xf="oninput"in document;if(!Xf){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),Xf=typeof Tm.oninput=="function"}kf=Xf}else kf=!1;Em=kf&&(!document.documentMode||9<document.documentMode)}function Am(){il&&(il.detachEvent("onpropertychange",wm),al=il=null)}function wm(t){if(t.propertyName==="value"&&Cc(al)){var i=[];Sm(i,al,t,ti(t)),yn(qb,i)}}function Yb(t,i,r){t==="focusin"?(Am(),il=i,al=r,il.attachEvent("onpropertychange",wm)):t==="focusout"&&Am()}function Zb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(al)}function $b(t,i){if(t==="click")return Cc(i)}function Kb(t,i){if(t==="input"||t==="change")return Cc(i)}function Qb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Pi=typeof Object.is=="function"?Object.is:Qb;function rl(t,i){if(Pi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!We.call(i,f)||!Pi(t[f],i[f]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,i){var r=Rm(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Rm(r)}}function Dm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Dm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Um(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=gt(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=gt(t.document)}return i}function Wf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Jb=mi&&"documentMode"in document&&11>=document.documentMode,Hs=null,qf=null,sl=null,Yf=!1;function Lm(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yf||Hs==null||Hs!==gt(l)||(l=Hs,"selectionStart"in l&&Wf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),sl&&rl(sl,l)||(sl=l,l=xu(qf,"onSelect"),0<l.length&&(i=new wc("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=Hs)))}function Jr(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var Gs={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionrun:Jr("Transition","TransitionRun"),transitionstart:Jr("Transition","TransitionStart"),transitioncancel:Jr("Transition","TransitionCancel"),transitionend:Jr("Transition","TransitionEnd")},Zf={},Om={};mi&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function es(t){if(Zf[t])return Zf[t];if(!Gs[t])return t;var i=Gs[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in Om)return Zf[t]=i[r];return t}var Nm=es("animationend"),Pm=es("animationiteration"),zm=es("animationstart"),e1=es("transitionrun"),t1=es("transitionstart"),n1=es("transitioncancel"),Im=es("transitionend"),Bm=new Map,$f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$f.push("scrollEnd");function ua(t,i){Bm.set(t,i),Oe(i,[t])}var Dc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Zi=[],Vs=0,Kf=0;function Uc(){for(var t=Vs,i=Kf=Vs=0;i<t;){var r=Zi[i];Zi[i++]=null;var l=Zi[i];Zi[i++]=null;var f=Zi[i];Zi[i++]=null;var h=Zi[i];if(Zi[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&Fm(r,f,h)}}function Lc(t,i,r,l){Zi[Vs++]=t,Zi[Vs++]=i,Zi[Vs++]=r,Zi[Vs++]=l,Kf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Qf(t,i,r,l){return Lc(t,i,r,l),Oc(t)}function ts(t,i){return Lc(t,null,null,i),Oc(t)}function Fm(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var f=!1,h=t.return;h!==null;)h.childLanes|=r,l=h.alternate,l!==null&&(l.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-qe(r),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=r|536870912),h):null}function Oc(t){if(50<Rl)throw Rl=0,oh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var js={};function i1(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(t,i,r,l){return new i1(t,i,r,l)}function Jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ba(t,i){var r=t.alternate;return r===null?(r=zi(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Hm(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Nc(t,i,r,l,f,h){var b=0;if(l=t,typeof t=="function")Jf(t)&&(b=1);else if(typeof t=="string")b=ly(t,r,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=zi(31,r,i,f),t.elementType=C,t.lanes=h,t;case A:return ns(r.children,f,h,i);case S:b=8,f|=24;break;case v:return t=zi(12,r,i,f|2),t.elementType=v,t.lanes=h,t;case V:return t=zi(13,r,i,f),t.elementType=V,t.lanes=h,t;case O:return t=zi(19,r,i,f),t.elementType=O,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:b=10;break e;case P:b=9;break e;case z:b=11;break e;case B:b=14;break e;case re:b=16,l=null;break e}b=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=zi(b,r,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function ns(t,i,r,l){return t=zi(7,t,l,i),t.lanes=r,t}function ed(t,i,r){return t=zi(6,t,null,i),t.lanes=r,t}function Gm(t){var i=zi(18,null,null,0);return i.stateNode=t,i}function td(t,i,r){return i=zi(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Vm=new WeakMap;function $i(t,i){if(typeof t=="object"&&t!==null){var r=Vm.get(t);return r!==void 0?r:(i={value:t,source:i,stack:qt(i)},Vm.set(t,i),i)}return{value:t,source:i,stack:qt(i)}}var ks=[],Xs=0,Pc=null,ol=0,Ki=[],Qi=0,hr=null,Ta=1,Aa="";function Fa(t,i){ks[Xs++]=ol,ks[Xs++]=Pc,Pc=t,ol=i}function jm(t,i,r){Ki[Qi++]=Ta,Ki[Qi++]=Aa,Ki[Qi++]=hr,hr=t;var l=Ta;t=Aa;var f=32-qe(l)-1;l&=~(1<<f),r+=1;var h=32-qe(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Ta=1<<32-qe(i)+f|r<<f|l,Aa=h+t}else Ta=1<<h|r<<f|l,Aa=t}function nd(t){t.return!==null&&(Fa(t,1),jm(t,1,0))}function id(t){for(;t===Pc;)Pc=ks[--Xs],ks[Xs]=null,ol=ks[--Xs],ks[Xs]=null;for(;t===hr;)hr=Ki[--Qi],Ki[Qi]=null,Aa=Ki[--Qi],Ki[Qi]=null,Ta=Ki[--Qi],Ki[Qi]=null}function km(t,i){Ki[Qi++]=Ta,Ki[Qi++]=Aa,Ki[Qi++]=hr,Ta=i.id,Aa=i.overflow,hr=t}var ni=null,dn=null,Ht=!1,pr=null,Ji=!1,ad=Error(a(519));function mr(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ll($i(i,t)),ad}function Xm(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[bn]=t,i[Sn]=l,r){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(r=0;r<Dl.length;r++)Nt(Dl[r],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),Lt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),tt(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||l_(i.textContent,r)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=ei),i=!0):i=!1,i||mr(t,!0)}function Wm(t){for(ni=t.return;ni;)switch(ni.tag){case 5:case 31:case 13:Ji=!1;return;case 27:case 3:Ji=!0;return;default:ni=ni.return}}function Ws(t){if(t!==ni)return!1;if(!Ht)return Wm(t),Ht=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Sh(t.type,t.memoizedProps)),r=!r),r&&dn&&mr(t),Wm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));dn=x_(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));dn=x_(t)}else i===27?(i=dn,Cr(t.type)?(t=wh,wh=null,dn=t):dn=i):dn=ni?ta(t.stateNode.nextSibling):null;return!0}function is(){dn=ni=null,Ht=!1}function rd(){var t=pr;return t!==null&&(Ti===null?Ti=t:Ti.push.apply(Ti,t),pr=null),t}function ll(t){pr===null?pr=[t]:pr.push(t)}var sd=D(null),as=null,Ha=null;function gr(t,i,r){xe(sd,i._currentValue),i._currentValue=r}function Ga(t){t._currentValue=sd.current,Q(sd)}function od(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function ld(t,i,r,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=f;for(var I=0;I<i.length;I++)if(T.context===i[I]){h.lanes|=r,T=h.alternate,T!==null&&(T.lanes|=r),od(h.return,r,t),l||(b=null);break e}h=T.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=r,h=b.alternate,h!==null&&(h.lanes|=r),od(b,r,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function qs(t,i,r,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var T=f.type;Pi(f.pendingProps.value,b.value)||(t!==null?t.push(T):t=[T])}}else if(f===W.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Pl):t=[Pl])}f=f.return}t!==null&&ld(i,t,r,l),i.flags|=262144}function zc(t){for(t=t.firstContext;t!==null;){if(!Pi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rs(t){as=t,Ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ii(t){return qm(as,t)}function Ic(t,i){return as===null&&rs(t),qm(t,i)}function qm(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ha===null){if(t===null)throw Error(a(308));Ha=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ha=Ha.next=i;return r}var a1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},r1=s.unstable_scheduleCallback,s1=s.unstable_NormalPriority,On={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cd(){return{controller:new a1,data:new Map,refCount:0}}function cl(t){t.refCount--,t.refCount===0&&r1(s1,function(){t.controller.abort()})}var ul=null,ud=0,Ys=0,Zs=null;function o1(t,i){if(ul===null){var r=ul=[];ud=0,Ys=hh(),Zs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ud++,i.then(Ym,Ym),i}function Ym(){if(--ud===0&&ul!==null){Zs!==null&&(Zs.status="fulfilled");var t=ul;ul=null,Ys=0,Zs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function l1(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var Zm=N.S;N.S=function(t,i){Lx=M(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&o1(t,i),Zm!==null&&Zm(t,i)};var ss=D(null);function fd(){var t=ss.current;return t!==null?t:sn.pooledCache}function Bc(t,i){i===null?xe(ss,ss.current):xe(ss,i.pool)}function $m(){var t=fd();return t===null?null:{parent:On._currentValue,pool:t}}var $s=Error(a(460)),dd=Error(a(474)),Fc=Error(a(542)),Hc={then:function(){}};function Km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(ei,ei),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,eg(t),t;default:if(typeof i.status=="string")i.then(ei,ei);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,eg(t),t}throw ls=i,$s}}function os(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ls=r,$s):r}}var ls=null;function Jm(){if(ls===null)throw Error(a(459));var t=ls;return ls=null,t}function eg(t){if(t===$s||t===Fc)throw Error(a(483))}var Ks=null,fl=0;function Gc(t){var i=fl;return fl+=1,Ks===null&&(Ks=[]),Qm(Ks,t,i)}function dl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Vc(t,i){throw i.$$typeof===_?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function tg(t){function i(Z,j){if(t){var ne=Z.deletions;ne===null?(Z.deletions=[j],Z.flags|=16):ne.push(j)}}function r(Z,j){if(!t)return null;for(;j!==null;)i(Z,j),j=j.sibling;return null}function l(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function f(Z,j){return Z=Ba(Z,j),Z.index=0,Z.sibling=null,Z}function h(Z,j,ne){return Z.index=ne,t?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<j?(Z.flags|=67108866,j):ne):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function b(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,j,ne,_e){return j===null||j.tag!==6?(j=ed(ne,Z.mode,_e),j.return=Z,j):(j=f(j,ne),j.return=Z,j)}function I(Z,j,ne,_e){var ut=ne.type;return ut===A?ge(Z,j,ne.props.children,_e,ne.key):j!==null&&(j.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===re&&os(ut)===j.type)?(j=f(j,ne.props),dl(j,ne),j.return=Z,j):(j=Nc(ne.type,ne.key,ne.props,null,Z.mode,_e),dl(j,ne),j.return=Z,j)}function ie(Z,j,ne,_e){return j===null||j.tag!==4||j.stateNode.containerInfo!==ne.containerInfo||j.stateNode.implementation!==ne.implementation?(j=td(ne,Z.mode,_e),j.return=Z,j):(j=f(j,ne.children||[]),j.return=Z,j)}function ge(Z,j,ne,_e,ut){return j===null||j.tag!==7?(j=ns(ne,Z.mode,_e,ut),j.return=Z,j):(j=f(j,ne),j.return=Z,j)}function be(Z,j,ne){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ed(""+j,Z.mode,ne),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return ne=Nc(j.type,j.key,j.props,null,Z.mode,ne),dl(ne,j),ne.return=Z,ne;case E:return j=td(j,Z.mode,ne),j.return=Z,j;case re:return j=os(j),be(Z,j,ne)}if(K(j)||ae(j))return j=ns(j,Z.mode,ne,null),j.return=Z,j;if(typeof j.then=="function")return be(Z,Gc(j),ne);if(j.$$typeof===U)return be(Z,Ic(Z,j),ne);Vc(Z,j)}return null}function oe(Z,j,ne,_e){var ut=j!==null?j.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ut!==null?null:T(Z,j,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return ne.key===ut?I(Z,j,ne,_e):null;case E:return ne.key===ut?ie(Z,j,ne,_e):null;case re:return ne=os(ne),oe(Z,j,ne,_e)}if(K(ne)||ae(ne))return ut!==null?null:ge(Z,j,ne,_e,null);if(typeof ne.then=="function")return oe(Z,j,Gc(ne),_e);if(ne.$$typeof===U)return oe(Z,j,Ic(Z,ne),_e);Vc(Z,ne)}return null}function de(Z,j,ne,_e,ut){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get(ne)||null,T(j,Z,""+_e,ut);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case y:return Z=Z.get(_e.key===null?ne:_e.key)||null,I(j,Z,_e,ut);case E:return Z=Z.get(_e.key===null?ne:_e.key)||null,ie(j,Z,_e,ut);case re:return _e=os(_e),de(Z,j,ne,_e,ut)}if(K(_e)||ae(_e))return Z=Z.get(ne)||null,ge(j,Z,_e,ut,null);if(typeof _e.then=="function")return de(Z,j,ne,Gc(_e),ut);if(_e.$$typeof===U)return de(Z,j,ne,Ic(j,_e),ut);Vc(j,_e)}return null}function Ye(Z,j,ne,_e){for(var ut=null,kt=null,Qe=j,wt=j=0,Bt=null;Qe!==null&&wt<ne.length;wt++){Qe.index>wt?(Bt=Qe,Qe=null):Bt=Qe.sibling;var Xt=oe(Z,Qe,ne[wt],_e);if(Xt===null){Qe===null&&(Qe=Bt);break}t&&Qe&&Xt.alternate===null&&i(Z,Qe),j=h(Xt,j,wt),kt===null?ut=Xt:kt.sibling=Xt,kt=Xt,Qe=Bt}if(wt===ne.length)return r(Z,Qe),Ht&&Fa(Z,wt),ut;if(Qe===null){for(;wt<ne.length;wt++)Qe=be(Z,ne[wt],_e),Qe!==null&&(j=h(Qe,j,wt),kt===null?ut=Qe:kt.sibling=Qe,kt=Qe);return Ht&&Fa(Z,wt),ut}for(Qe=l(Qe);wt<ne.length;wt++)Bt=de(Qe,Z,wt,ne[wt],_e),Bt!==null&&(t&&Bt.alternate!==null&&Qe.delete(Bt.key===null?wt:Bt.key),j=h(Bt,j,wt),kt===null?ut=Bt:kt.sibling=Bt,kt=Bt);return t&&Qe.forEach(function(Nr){return i(Z,Nr)}),Ht&&Fa(Z,wt),ut}function ht(Z,j,ne,_e){if(ne==null)throw Error(a(151));for(var ut=null,kt=null,Qe=j,wt=j=0,Bt=null,Xt=ne.next();Qe!==null&&!Xt.done;wt++,Xt=ne.next()){Qe.index>wt?(Bt=Qe,Qe=null):Bt=Qe.sibling;var Nr=oe(Z,Qe,Xt.value,_e);if(Nr===null){Qe===null&&(Qe=Bt);break}t&&Qe&&Nr.alternate===null&&i(Z,Qe),j=h(Nr,j,wt),kt===null?ut=Nr:kt.sibling=Nr,kt=Nr,Qe=Bt}if(Xt.done)return r(Z,Qe),Ht&&Fa(Z,wt),ut;if(Qe===null){for(;!Xt.done;wt++,Xt=ne.next())Xt=be(Z,Xt.value,_e),Xt!==null&&(j=h(Xt,j,wt),kt===null?ut=Xt:kt.sibling=Xt,kt=Xt);return Ht&&Fa(Z,wt),ut}for(Qe=l(Qe);!Xt.done;wt++,Xt=ne.next())Xt=de(Qe,Z,wt,Xt.value,_e),Xt!==null&&(t&&Xt.alternate!==null&&Qe.delete(Xt.key===null?wt:Xt.key),j=h(Xt,j,wt),kt===null?ut=Xt:kt.sibling=Xt,kt=Xt);return t&&Qe.forEach(function(vy){return i(Z,vy)}),Ht&&Fa(Z,wt),ut}function nn(Z,j,ne,_e){if(typeof ne=="object"&&ne!==null&&ne.type===A&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:e:{for(var ut=ne.key;j!==null;){if(j.key===ut){if(ut=ne.type,ut===A){if(j.tag===7){r(Z,j.sibling),_e=f(j,ne.props.children),_e.return=Z,Z=_e;break e}}else if(j.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===re&&os(ut)===j.type){r(Z,j.sibling),_e=f(j,ne.props),dl(_e,ne),_e.return=Z,Z=_e;break e}r(Z,j);break}else i(Z,j);j=j.sibling}ne.type===A?(_e=ns(ne.props.children,Z.mode,_e,ne.key),_e.return=Z,Z=_e):(_e=Nc(ne.type,ne.key,ne.props,null,Z.mode,_e),dl(_e,ne),_e.return=Z,Z=_e)}return b(Z);case E:e:{for(ut=ne.key;j!==null;){if(j.key===ut)if(j.tag===4&&j.stateNode.containerInfo===ne.containerInfo&&j.stateNode.implementation===ne.implementation){r(Z,j.sibling),_e=f(j,ne.children||[]),_e.return=Z,Z=_e;break e}else{r(Z,j);break}else i(Z,j);j=j.sibling}_e=td(ne,Z.mode,_e),_e.return=Z,Z=_e}return b(Z);case re:return ne=os(ne),nn(Z,j,ne,_e)}if(K(ne))return Ye(Z,j,ne,_e);if(ae(ne)){if(ut=ae(ne),typeof ut!="function")throw Error(a(150));return ne=ut.call(ne),ht(Z,j,ne,_e)}if(typeof ne.then=="function")return nn(Z,j,Gc(ne),_e);if(ne.$$typeof===U)return nn(Z,j,Ic(Z,ne),_e);Vc(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,j!==null&&j.tag===6?(r(Z,j.sibling),_e=f(j,ne),_e.return=Z,Z=_e):(r(Z,j),_e=ed(ne,Z.mode,_e),_e.return=Z,Z=_e),b(Z)):r(Z,j)}return function(Z,j,ne,_e){try{fl=0;var ut=nn(Z,j,ne,_e);return Ks=null,ut}catch(Qe){if(Qe===$s||Qe===Fc)throw Qe;var kt=zi(29,Qe,null,Z.mode);return kt.lanes=_e,kt.return=Z,kt}finally{}}}var cs=tg(!0),ng=tg(!1),xr=!1;function hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _r(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function vr(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Zt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Oc(t),Fm(t,null,r),i}return Lc(t,l,i,r),Oc(t)}function hl(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,oa(t,r)}}function md(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,r=r.next}while(r!==null);h===null?f=h=i:h=h.next=i}else f=h=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var gd=!1;function pl(){if(gd){var t=Zs;if(t!==null)throw t}}function ml(t,i,r,l){gd=!1;var f=t.updateQueue;xr=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,ie=I.next;I.next=null,b===null?h=ie:b.next=ie,b=I;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,T=ge.lastBaseUpdate,T!==b&&(T===null?ge.firstBaseUpdate=ie:T.next=ie,ge.lastBaseUpdate=I))}if(h!==null){var be=f.baseState;b=0,ge=ie=I=null,T=h;do{var oe=T.lane&-536870913,de=oe!==T.lane;if(de?(It&oe)===oe:(l&oe)===oe){oe!==0&&oe===Ys&&(gd=!0),ge!==null&&(ge=ge.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ye=t,ht=T;oe=i;var nn=r;switch(ht.tag){case 1:if(Ye=ht.payload,typeof Ye=="function"){be=Ye.call(nn,be,oe);break e}be=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=ht.payload,oe=typeof Ye=="function"?Ye.call(nn,be,oe):Ye,oe==null)break e;be=x({},be,oe);break e;case 2:xr=!0}}oe=T.callback,oe!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[oe]:de.push(oe))}else de={lane:oe,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ge===null?(ie=ge=de,I=be):ge=ge.next=de,b|=oe;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;de=T,T=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);ge===null&&(I=be),f.baseState=I,f.firstBaseUpdate=ie,f.lastBaseUpdate=ge,h===null&&(f.shared.lanes=0),Er|=b,t.lanes=b,t.memoizedState=be}}function ig(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function ag(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)ig(r[t],i)}var Qs=D(null),jc=D(0);function rg(t,i){t=$a,xe(jc,t),xe(Qs,i),$a=t|i.baseLanes}function xd(){xe(jc,$a),xe(Qs,Qs.current)}function _d(){$a=jc.current,Q(Qs),Q(jc)}var Ii=D(null),ea=null;function br(t){var i=t.alternate;xe(Rn,Rn.current&1),xe(Ii,t),ea===null&&(i===null||Qs.current!==null||i.memoizedState!==null)&&(ea=t)}function vd(t){xe(Rn,Rn.current),xe(Ii,t),ea===null&&(ea=t)}function sg(t){t.tag===22?(xe(Rn,Rn.current),xe(Ii,t),ea===null&&(ea=t)):yr()}function yr(){xe(Rn,Rn.current),xe(Ii,Ii.current)}function Bi(t){Q(Ii),ea===t&&(ea=null),Q(Rn)}var Rn=D(0);function kc(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Th(r)||Ah(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Va=0,Et=null,en=null,Nn=null,Xc=!1,Js=!1,us=!1,Wc=0,gl=0,eo=null,c1=0;function Mn(){throw Error(a(321))}function bd(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!Pi(t[r],i[r]))return!1;return!0}function yd(t,i,r,l,f,h){return Va=h,Et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=t===null||t.memoizedState===null?jg:zd,us=!1,h=r(l,f),us=!1,Js&&(h=lg(i,r,l,f)),og(t),h}function og(t){N.H=vl;var i=en!==null&&en.next!==null;if(Va=0,Nn=en=Et=null,Xc=!1,gl=0,eo=null,i)throw Error(a(300));t===null||Pn||(t=t.dependencies,t!==null&&zc(t)&&(Pn=!0))}function lg(t,i,r,l){Et=t;var f=0;do{if(Js&&(eo=null),gl=0,Js=!1,25<=f)throw Error(a(301));if(f+=1,Nn=en=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=kg,h=i(r,l)}while(Js);return h}function u1(){var t=N.H,i=t.useState()[0];return i=typeof i.then=="function"?xl(i):i,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(Et.flags|=1024),i}function Sd(){var t=Wc!==0;return Wc=0,t}function Md(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function Ed(t){if(Xc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Xc=!1}Va=0,Nn=en=Et=null,Js=!1,gl=Wc=0,eo=null}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?Et.memoizedState=Nn=t:Nn=Nn.next=t,Nn}function Cn(){if(en===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=Nn===null?Et.memoizedState:Nn.next;if(i!==null)Nn=i,en=t;else{if(t===null)throw Et.alternate===null?Error(a(467)):Error(a(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},Nn===null?Et.memoizedState=Nn=t:Nn=Nn.next=t}return Nn}function qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xl(t){var i=gl;return gl+=1,eo===null&&(eo=[]),t=Qm(eo,t,i),i=Et,(Nn===null?i.memoizedState:Nn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?jg:zd),t}function Yc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xl(t);if(t.$$typeof===U)return ii(t)}throw Error(a(438,String(t)))}function Td(t){var i=null,r=Et.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=Et.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=qc(),Et.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=R;return i.index++,r}function ja(t,i){return typeof i=="function"?i(t):i}function Zc(t){var i=Cn();return Ad(i,en,t)}function Ad(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var T=b=null,I=null,ie=i,ge=!1;do{var be=ie.lane&-536870913;if(be!==ie.lane?(It&be)===be:(Va&be)===be){var oe=ie.revertLane;if(oe===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),be===Ys&&(ge=!0);else if((Va&oe)===oe){ie=ie.next,oe===Ys&&(ge=!0);continue}else be={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},I===null?(T=I=be,b=h):I=I.next=be,Et.lanes|=oe,Er|=oe;be=ie.action,us&&r(h,be),h=ie.hasEagerState?ie.eagerState:r(h,be)}else oe={lane:be,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},I===null?(T=I=oe,b=h):I=I.next=oe,Et.lanes|=be,Er|=be;ie=ie.next}while(ie!==null&&ie!==i);if(I===null?b=h:I.next=T,!Pi(h,t.memoizedState)&&(Pn=!0,ge&&(r=Zs,r!==null)))throw r;t.memoizedState=h,t.baseState=b,t.baseQueue=I,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function wd(t){var i=Cn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,f=r.pending,h=i.memoizedState;if(f!==null){r.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);Pi(h,i.memoizedState)||(Pn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),r.lastRenderedState=h}return[h,l]}function cg(t,i,r){var l=Et,f=Cn(),h=Ht;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!Pi((en||f).memoizedState,r);if(b&&(f.memoizedState=r,Pn=!0),f=f.queue,Dd(dg.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||Nn!==null&&Nn.memoizedState.tag&1){if(l.flags|=2048,to(9,{destroy:void 0},fg.bind(null,l,f,r,i),null),sn===null)throw Error(a(349));h||(Va&127)!==0||ug(l,i,r)}return r}function ug(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=Et.updateQueue,i===null?(i=qc(),Et.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function fg(t,i,r,l){i.value=r,i.getSnapshot=l,hg(i)&&pg(t)}function dg(t,i,r){return r(function(){hg(i)&&pg(t)})}function hg(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!Pi(t,r)}catch{return!0}}function pg(t){var i=ts(t,2);i!==null&&Ai(i,t,2)}function Rd(t){var i=gi();if(typeof t=="function"){var r=t;if(t=r(),us){at(!0);try{r()}finally{at(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},i}function mg(t,i,r,l){return t.baseState=r,Ad(t,en,typeof l=="function"?l:ja)}function f1(t,i,r,l,f){if(Qc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};N.T!==null?r(!0):h.isTransition=!1,l(h),r=i.pending,r===null?(h.next=i.pending=h,gg(i,h)):(h.next=r.next,i.pending=r.next=h)}}function gg(t,i){var r=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=N.T,b={};N.T=b;try{var T=r(f,l),I=N.S;I!==null&&I(b,T),xg(t,i,T)}catch(ie){Cd(t,i,ie)}finally{h!==null&&b.types!==null&&(h.types=b.types),N.T=h}}else try{h=r(f,l),xg(t,i,h)}catch(ie){Cd(t,i,ie)}}function xg(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){_g(t,i,l)},function(l){return Cd(t,i,l)}):_g(t,i,r)}function _g(t,i,r){i.status="fulfilled",i.value=r,vg(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,gg(t,r)))}function Cd(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,vg(i),i=i.next;while(i!==l)}t.action=null}function vg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function bg(t,i){return i}function yg(t,i){if(Ht){var r=sn.formState;if(r!==null){e:{var l=Et;if(Ht){if(dn){t:{for(var f=dn,h=Ji;f.nodeType!==8;){if(!h){f=null;break t}if(f=ta(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){dn=ta(f.nextSibling),l=f.data==="F!";break e}}mr(l)}l=!1}l&&(i=r[0])}}return r=gi(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bg,lastRenderedState:i},r.queue=l,r=Hg.bind(null,Et,l),l.dispatch=r,l=Rd(!1),h=Pd.bind(null,Et,!1,l.queue),l=gi(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,r=f1.bind(null,Et,f,h,r),f.dispatch=r,l.memoizedState=t,[i,r,!1]}function Sg(t){var i=Cn();return Mg(i,en,t)}function Mg(t,i,r){if(i=Ad(t,i,bg)[0],t=Zc(ja)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=xl(i)}catch(b){throw b===$s?Fc:b}else l=i;i=Cn();var f=i.queue,h=f.dispatch;return r!==i.memoizedState&&(Et.flags|=2048,to(9,{destroy:void 0},d1.bind(null,f,r),null)),[l,h,t]}function d1(t,i){t.action=i}function Eg(t){var i=Cn(),r=en;if(r!==null)return Mg(i,r,t);Cn(),i=i.memoizedState,r=Cn();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function to(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=Et.updateQueue,i===null&&(i=qc(),Et.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function Tg(){return Cn().memoizedState}function $c(t,i,r,l){var f=gi();Et.flags|=t,f.memoizedState=to(1|i,{destroy:void 0},r,l===void 0?null:l)}function Kc(t,i,r,l){var f=Cn();l=l===void 0?null:l;var h=f.memoizedState.inst;en!==null&&l!==null&&bd(l,en.memoizedState.deps)?f.memoizedState=to(i,h,r,l):(Et.flags|=t,f.memoizedState=to(1|i,h,r,l))}function Ag(t,i){$c(8390656,8,t,i)}function Dd(t,i){Kc(2048,8,t,i)}function h1(t){Et.flags|=4;var i=Et.updateQueue;if(i===null)i=qc(),Et.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function wg(t){var i=Cn().memoizedState;return h1({ref:i,nextImpl:t}),function(){if((Zt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Rg(t,i){return Kc(4,2,t,i)}function Cg(t,i){return Kc(4,4,t,i)}function Dg(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ug(t,i,r){r=r!=null?r.concat([t]):null,Kc(4,4,Dg.bind(null,i,t),r)}function Ud(){}function Lg(t,i){var r=Cn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&bd(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function Og(t,i){var r=Cn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&bd(i,l[1]))return l[0];if(l=t(),us){at(!0);try{t()}finally{at(!1)}}return r.memoizedState=[l,i],l}function Ld(t,i,r){return r===void 0||(Va&1073741824)!==0&&(It&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=Nx(),Et.lanes|=t,Er|=t,r)}function Ng(t,i,r,l){return Pi(r,i)?r:Qs.current!==null?(t=Ld(t,r,l),Pi(t,i)||(Pn=!0),t):(Va&42)===0||(Va&1073741824)!==0&&(It&261930)===0?(Pn=!0,t.memoizedState=r):(t=Nx(),Et.lanes|=t,Er|=t,i)}function Pg(t,i,r,l,f){var h=Y.p;Y.p=h!==0&&8>h?h:8;var b=N.T,T={};N.T=T,Pd(t,!1,i,r);try{var I=f(),ie=N.S;if(ie!==null&&ie(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ge=l1(I,l);_l(t,i,ge,Gi(t))}else _l(t,i,l,Gi(t))}catch(be){_l(t,i,{then:function(){},status:"rejected",reason:be},Gi())}finally{Y.p=h,b!==null&&T.types!==null&&(b.types=T.types),N.T=b}}function p1(){}function Od(t,i,r,l){if(t.tag!==5)throw Error(a(476));var f=zg(t).queue;Pg(t,f,i,X,r===null?p1:function(){return Ig(t),r(l)})}function zg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:X},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Ig(t){var i=zg(t);i.next===null&&(i=t.alternate.memoizedState),_l(t,i.next.queue,{},Gi())}function Nd(){return ii(Pl)}function Bg(){return Cn().memoizedState}function Fg(){return Cn().memoizedState}function m1(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=Gi();t=_r(r);var l=vr(i,t,r);l!==null&&(Ai(l,i,r),hl(l,i,r)),i={cache:cd()},t.payload=i;return}i=i.return}}function g1(t,i,r){var l=Gi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Qc(t)?Gg(i,r):(r=Qf(t,i,r,l),r!==null&&(Ai(r,t,l),Vg(r,i,l)))}function Hg(t,i,r){var l=Gi();_l(t,i,r,l)}function _l(t,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qc(t))Gg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,T=h(b,r);if(f.hasEagerState=!0,f.eagerState=T,Pi(T,b))return Lc(t,i,f,0),sn===null&&Uc(),!1}catch{}finally{}if(r=Qf(t,i,f,l),r!==null)return Ai(r,t,l),Vg(r,i,l),!0}return!1}function Pd(t,i,r,l){if(l={lane:2,revertLane:hh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qc(t)){if(i)throw Error(a(479))}else i=Qf(t,r,l,2),i!==null&&Ai(i,t,2)}function Qc(t){var i=t.alternate;return t===Et||i!==null&&i===Et}function Gg(t,i){Js=Xc=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function Vg(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,oa(t,r)}}var vl={readContext:ii,use:Yc,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useLayoutEffect:Mn,useInsertionEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useSyncExternalStore:Mn,useId:Mn,useHostTransitionStatus:Mn,useFormState:Mn,useActionState:Mn,useOptimistic:Mn,useMemoCache:Mn,useCacheRefresh:Mn};vl.useEffectEvent=Mn;var jg={readContext:ii,use:Yc,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:ii,useEffect:Ag,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,$c(4194308,4,Dg.bind(null,i,t),r)},useLayoutEffect:function(t,i){return $c(4194308,4,t,i)},useInsertionEffect:function(t,i){$c(4,2,t,i)},useMemo:function(t,i){var r=gi();i=i===void 0?null:i;var l=t();if(us){at(!0);try{t()}finally{at(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=gi();if(r!==void 0){var f=r(i);if(us){at(!0);try{r(i)}finally{at(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=g1.bind(null,Et,t),[l.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:function(t){t=Rd(t);var i=t.queue,r=Hg.bind(null,Et,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Ud,useDeferredValue:function(t,i){var r=gi();return Ld(r,t,i)},useTransition:function(){var t=Rd(!1);return t=Pg.bind(null,Et,t.queue,!0,!1),gi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=Et,f=gi();if(Ht){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),sn===null)throw Error(a(349));(It&127)!==0||ug(l,i,r)}f.memoizedState=r;var h={value:r,getSnapshot:i};return f.queue=h,Ag(dg.bind(null,l,h,t),[t]),l.flags|=2048,to(9,{destroy:void 0},fg.bind(null,l,h,r,i),null),r},useId:function(){var t=gi(),i=sn.identifierPrefix;if(Ht){var r=Aa,l=Ta;r=(l&~(1<<32-qe(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Wc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=c1++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Nd,useFormState:yg,useActionState:yg,useOptimistic:function(t){var i=gi();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Pd.bind(null,Et,!0,r),r.dispatch=i,[t,i]},useMemoCache:Td,useCacheRefresh:function(){return gi().memoizedState=m1.bind(null,Et)},useEffectEvent:function(t){var i=gi(),r={impl:t};return i.memoizedState=r,function(){if((Zt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},zd={readContext:ii,use:Yc,useCallback:Lg,useContext:ii,useEffect:Dd,useImperativeHandle:Ug,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Og,useReducer:Zc,useRef:Tg,useState:function(){return Zc(ja)},useDebugValue:Ud,useDeferredValue:function(t,i){var r=Cn();return Ng(r,en.memoizedState,t,i)},useTransition:function(){var t=Zc(ja)[0],i=Cn().memoizedState;return[typeof t=="boolean"?t:xl(t),i]},useSyncExternalStore:cg,useId:Bg,useHostTransitionStatus:Nd,useFormState:Sg,useActionState:Sg,useOptimistic:function(t,i){var r=Cn();return mg(r,en,t,i)},useMemoCache:Td,useCacheRefresh:Fg};zd.useEffectEvent=wg;var kg={readContext:ii,use:Yc,useCallback:Lg,useContext:ii,useEffect:Dd,useImperativeHandle:Ug,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Og,useReducer:wd,useRef:Tg,useState:function(){return wd(ja)},useDebugValue:Ud,useDeferredValue:function(t,i){var r=Cn();return en===null?Ld(r,t,i):Ng(r,en.memoizedState,t,i)},useTransition:function(){var t=wd(ja)[0],i=Cn().memoizedState;return[typeof t=="boolean"?t:xl(t),i]},useSyncExternalStore:cg,useId:Bg,useHostTransitionStatus:Nd,useFormState:Eg,useActionState:Eg,useOptimistic:function(t,i){var r=Cn();return en!==null?mg(r,en,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Td,useCacheRefresh:Fg};kg.useEffectEvent=wg;function Id(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:x({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Bd={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=Gi(),f=_r(l);f.payload=i,r!=null&&(f.callback=r),i=vr(t,f,l),i!==null&&(Ai(i,t,l),hl(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=Gi(),f=_r(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=vr(t,f,l),i!==null&&(Ai(i,t,l),hl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=Gi(),l=_r(r);l.tag=2,i!=null&&(l.callback=i),i=vr(t,l,r),i!==null&&(Ai(i,t,r),hl(i,t,r))}};function Xg(t,i,r,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!rl(r,l)||!rl(f,h):!0}function Wg(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&Bd.enqueueReplaceState(i,i.state,null)}function fs(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=x({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function qg(t){Dc(t)}function Yg(t){console.error(t)}function Zg(t){Dc(t)}function Jc(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function $g(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Fd(t,i,r){return r=_r(r),r.tag=3,r.payload={element:null},r.callback=function(){Jc(t,i)},r}function Kg(t){return t=_r(t),t.tag=3,t}function Qg(t,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){$g(i,r,l)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){$g(i,r,l),typeof f!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function x1(t,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&qs(i,r,f,!0),r=Ii.current,r!==null){switch(r.tag){case 31:case 13:return ea===null?fu():r.alternate===null&&En===0&&(En=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Hc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),uh(t,l,f)),!1;case 22:return r.flags|=65536,l===Hc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),uh(t,l,f)),!1}throw Error(a(435,r.tag))}return uh(t,l,f),fu(),!1}if(Ht)return i=Ii.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==ad&&(t=Error(a(422),{cause:l}),ll($i(t,r)))):(l!==ad&&(i=Error(a(423),{cause:l}),ll($i(i,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=$i(l,r),f=Fd(t.stateNode,l,f),md(t,f),En!==4&&(En=2)),!1;var h=Error(a(520),{cause:l});if(h=$i(h,r),wl===null?wl=[h]:wl.push(h),En!==4&&(En=2),i===null)return!0;l=$i(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=Fd(r.stateNode,l,t),md(r,t),!1;case 1:if(i=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Tr===null||!Tr.has(h))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Kg(f),Qg(f,t,r,l),md(r,f),!1}r=r.return}while(r!==null);return!1}var Hd=Error(a(461)),Pn=!1;function ai(t,i,r,l){i.child=t===null?ng(i,null,r,l):cs(i,t.child,r,l)}function Jg(t,i,r,l,f){r=r.render;var h=i.ref;if("ref"in l){var b={};for(var T in l)T!=="ref"&&(b[T]=l[T])}else b=l;return rs(i),l=yd(t,i,r,b,h,f),T=Sd(),t!==null&&!Pn?(Md(t,i,f),ka(t,i,f)):(Ht&&T&&nd(i),i.flags|=1,ai(t,i,l,f),i.child)}function ex(t,i,r,l,f){if(t===null){var h=r.type;return typeof h=="function"&&!Jf(h)&&h.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=h,tx(t,i,h,l,f)):(t=Nc(r.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Yd(t,f)){var b=h.memoizedProps;if(r=r.compare,r=r!==null?r:rl,r(b,l)&&t.ref===i.ref)return ka(t,i,f)}return i.flags|=1,t=Ba(h,l),t.ref=i.ref,t.return=i,i.child=t}function tx(t,i,r,l,f){if(t!==null){var h=t.memoizedProps;if(rl(h,l)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=l=h,Yd(t,f))(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,ka(t,i,f)}return Gd(t,i,r,l,f)}function nx(t,i,r,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return ix(t,i,h,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bc(i,h!==null?h.cachePool:null),h!==null?rg(i,h):xd(),sg(i);else return l=i.lanes=536870912,ix(t,i,h!==null?h.baseLanes|r:r,r,l)}else h!==null?(Bc(i,h.cachePool),rg(i,h),yr(),i.memoizedState=null):(t!==null&&Bc(i,null),xd(),yr());return ai(t,i,f,r),i.child}function bl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function ix(t,i,r,l,f){var h=fd();return h=h===null?null:{parent:On._currentValue,pool:h},i.memoizedState={baseLanes:r,cachePool:h},t!==null&&Bc(i,null),xd(),sg(i),t!==null&&qs(t,i,l,!0),i.childLanes=f,null}function eu(t,i){return i=nu({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function ax(t,i,r){return cs(i,t.child,null,r),t=eu(i,i.pendingProps),t.flags|=2,Bi(i),i.memoizedState=null,t}function _1(t,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ht){if(l.mode==="hidden")return t=eu(i,l),i.lanes=536870912,bl(null,t);if(vd(i),(t=dn)?(t=g_(t,Ji),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:hr!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},r=Gm(t),r.return=i,i.child=r,ni=i,dn=null)):t=null,t===null)throw mr(i);return i.lanes=536870912,null}return eu(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(vd(i),f)if(i.flags&256)i.flags&=-257,i=ax(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Pn||qs(t,i,r,!1),f=(r&t.childLanes)!==0,Pn||f){if(l=sn,l!==null&&(b=ya(l,r),b!==0&&b!==h.retryLane))throw h.retryLane=b,ts(t,b),Ai(l,t,b),Hd;fu(),i=ax(t,i,r)}else t=h.treeContext,dn=ta(b.nextSibling),ni=i,Ht=!0,pr=null,Ji=!1,t!==null&&km(i,t),i=eu(i,l),i.flags|=4096;return i}return t=Ba(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function tu(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Gd(t,i,r,l,f){return rs(i),r=yd(t,i,r,l,void 0,f),l=Sd(),t!==null&&!Pn?(Md(t,i,f),ka(t,i,f)):(Ht&&l&&nd(i),i.flags|=1,ai(t,i,r,f),i.child)}function rx(t,i,r,l,f,h){return rs(i),i.updateQueue=null,r=lg(i,l,r,f),og(t),l=Sd(),t!==null&&!Pn?(Md(t,i,h),ka(t,i,h)):(Ht&&l&&nd(i),i.flags|=1,ai(t,i,r,h),i.child)}function sx(t,i,r,l,f){if(rs(i),i.stateNode===null){var h=js,b=r.contextType;typeof b=="object"&&b!==null&&(h=ii(b)),h=new r(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Bd,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},hd(i),b=r.contextType,h.context=typeof b=="object"&&b!==null?ii(b):js,h.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Id(i,r,b,l),h.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&Bd.enqueueReplaceState(h,h.state,null),ml(i,l,h,f),pl(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var T=i.memoizedProps,I=fs(r,T);h.props=I;var ie=h.context,ge=r.contextType;b=js,typeof ge=="object"&&ge!==null&&(b=ii(ge));var be=r.getDerivedStateFromProps;ge=typeof be=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||ie!==b)&&Wg(i,h,l,b),xr=!1;var oe=i.memoizedState;h.state=oe,ml(i,l,h,f),pl(),ie=i.memoizedState,T||oe!==ie||xr?(typeof be=="function"&&(Id(i,r,be,l),ie=i.memoizedState),(I=xr||Xg(i,r,I,l,oe,ie,b))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ie),h.props=l,h.state=ie,h.context=b,l=I):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,pd(t,i),b=i.memoizedProps,ge=fs(r,b),h.props=ge,be=i.pendingProps,oe=h.context,ie=r.contextType,I=js,typeof ie=="object"&&ie!==null&&(I=ii(ie)),T=r.getDerivedStateFromProps,(ie=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==be||oe!==I)&&Wg(i,h,l,I),xr=!1,oe=i.memoizedState,h.state=oe,ml(i,l,h,f),pl();var de=i.memoizedState;b!==be||oe!==de||xr||t!==null&&t.dependencies!==null&&zc(t.dependencies)?(typeof T=="function"&&(Id(i,r,T,l),de=i.memoizedState),(ge=xr||Xg(i,r,ge,l,oe,de,I)||t!==null&&t.dependencies!==null&&zc(t.dependencies))?(ie||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,de,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,de,I)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=de),h.props=l,h.state=de,h.context=I,l=ge):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,tu(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=cs(i,t.child,null,f),i.child=cs(i,null,r,f)):ai(t,i,r,f),i.memoizedState=h.state,t=i.child):t=ka(t,i,f),t}function ox(t,i,r,l){return is(),i.flags|=256,ai(t,i,r,l),i.child}var Vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jd(t){return{baseLanes:t,cachePool:$m()}}function kd(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=Hi),t}function lx(t,i,r){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ht){if(f?br(i):yr(),(t=dn)?(t=g_(t,Ji),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:hr!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},r=Gm(t),r.return=i,i.child=r,ni=i,dn=null)):t=null,t===null)throw mr(i);return Ah(t)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,f?(yr(),f=i.mode,T=nu({mode:"hidden",children:T},f),l=ns(l,f,r,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=jd(r),l.childLanes=kd(t,b,r),i.memoizedState=Vd,bl(null,l)):(br(i),Xd(i,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(h)i.flags&256?(br(i),i.flags&=-257,i=Wd(t,i,r)):i.memoizedState!==null?(yr(),i.child=t.child,i.flags|=128,i=null):(yr(),T=l.fallback,f=i.mode,l=nu({mode:"visible",children:l.children},f),T=ns(T,f,r,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,cs(i,t.child,null,r),l=i.child,l.memoizedState=jd(r),l.childLanes=kd(t,b,r),i.memoizedState=Vd,i=bl(null,l));else if(br(i),Ah(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var ie=b.dgst;b=ie,l=Error(a(419)),l.stack="",l.digest=b,ll({value:l,source:null,stack:null}),i=Wd(t,i,r)}else if(Pn||qs(t,i,r,!1),b=(r&t.childLanes)!==0,Pn||b){if(b=sn,b!==null&&(l=ya(b,r),l!==0&&l!==I.retryLane))throw I.retryLane=l,ts(t,l),Ai(b,t,l),Hd;Th(T)||fu(),i=Wd(t,i,r)}else Th(T)?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,dn=ta(T.nextSibling),ni=i,Ht=!0,pr=null,Ji=!1,t!==null&&km(i,t),i=Xd(i,l.children),i.flags|=4096);return i}return f?(yr(),T=l.fallback,f=i.mode,I=t.child,ie=I.sibling,l=Ba(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,ie!==null?T=Ba(ie,T):(T=ns(T,f,r,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,bl(null,l),l=i.child,T=t.child.memoizedState,T===null?T=jd(r):(f=T.cachePool,f!==null?(I=On._currentValue,f=f.parent!==I?{parent:I,pool:I}:f):f=$m(),T={baseLanes:T.baseLanes|r,cachePool:f}),l.memoizedState=T,l.childLanes=kd(t,b,r),i.memoizedState=Vd,bl(t.child,l)):(br(i),r=t.child,t=r.sibling,r=Ba(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=r,i.memoizedState=null,r)}function Xd(t,i){return i=nu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function nu(t,i){return t=zi(22,t,null,i),t.lanes=0,t}function Wd(t,i,r){return cs(i,t.child,null,r),t=Xd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function cx(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),od(t.return,i,r)}function qd(t,i,r,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=r,b.tailMode=f,b.treeForkCount=h)}function ux(t,i,r){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=Rn.current,T=(b&2)!==0;if(T?(b=b&1|2,i.flags|=128):b&=1,xe(Rn,b),ai(t,i,l,r),l=Ht?ol:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cx(t,r,i);else if(t.tag===19)cx(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&kc(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),qd(i,!1,f,r,h,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&kc(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}qd(i,!0,r,null,h,l);break;case"together":qd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ka(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Er|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(qs(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=Ba(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=Ba(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Yd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&zc(t)))}function v1(t,i,r){switch(i.tag){case 3:Re(i,i.stateNode.containerInfo),gr(i,On,t.memoizedState.cache),is();break;case 27:case 5:Xe(i);break;case 4:Re(i,i.stateNode.containerInfo);break;case 10:gr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,vd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(br(i),i.flags|=128,null):(r&i.child.childLanes)!==0?lx(t,i,r):(br(i),t=ka(t,i,r),t!==null?t.sibling:null);br(i);break;case 19:var f=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(qs(t,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return ux(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),xe(Rn,Rn.current),l)break;return null;case 22:return i.lanes=0,nx(t,i,r,i.pendingProps);case 24:gr(i,On,t.memoizedState.cache)}return ka(t,i,r)}function fx(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)Pn=!0;else{if(!Yd(t,r)&&(i.flags&128)===0)return Pn=!1,v1(t,i,r);Pn=(t.flags&131072)!==0}else Pn=!1,Ht&&(i.flags&1048576)!==0&&jm(i,ol,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=os(i.elementType),i.type=t,typeof t=="function")Jf(t)?(l=fs(t,l),i.tag=1,i=sx(null,i,t,l,r)):(i.tag=0,i=Gd(null,i,t,l,r));else{if(t!=null){var f=t.$$typeof;if(f===z){i.tag=11,i=Jg(null,i,t,l,r);break e}else if(f===B){i.tag=14,i=ex(null,i,t,l,r);break e}}throw i=pe(t)||t,Error(a(306,i,""))}}return i;case 0:return Gd(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=fs(l,i.pendingProps),sx(t,i,l,f,r);case 3:e:{if(Re(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,pd(t,i),ml(i,l,null,r);var b=i.memoizedState;if(l=b.cache,gr(i,On,l),l!==h.cache&&ld(i,[On],r,!0),pl(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=ox(t,i,l,r);break e}else if(l!==f){f=$i(Error(a(424)),i),ll(f),i=ox(t,i,l,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(dn=ta(t.firstChild),ni=i,Ht=!0,pr=null,Ji=!0,r=ng(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(is(),l===f){i=ka(t,i,r);break e}ai(t,i,l,r)}i=i.child}return i;case 26:return tu(t,i),t===null?(r=S_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ht||(r=i.type,t=i.pendingProps,l=_u(J.current).createElement(r),l[bn]=i,l[Sn]=t,ri(l,r,t),te(l),i.stateNode=l):i.memoizedState=S_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Xe(i),t===null&&Ht&&(l=i.stateNode=v_(i.type,i.pendingProps,J.current),ni=i,Ji=!0,f=dn,Cr(i.type)?(wh=f,dn=ta(l.firstChild)):dn=f),ai(t,i,i.pendingProps.children,r),tu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ht&&((f=l=dn)&&(l=Z1(l,i.type,i.pendingProps,Ji),l!==null?(i.stateNode=l,ni=i,dn=ta(l.firstChild),Ji=!1,f=!0):f=!1),f||mr(i)),Xe(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,Sh(f,h)?l=null:b!==null&&Sh(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=yd(t,i,u1,null,null,r),Pl._currentValue=f),tu(t,i),ai(t,i,l,r),i.child;case 6:return t===null&&Ht&&((t=r=dn)&&(r=$1(r,i.pendingProps,Ji),r!==null?(i.stateNode=r,ni=i,dn=null,t=!0):t=!1),t||mr(i)),null;case 13:return lx(t,i,r);case 4:return Re(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,r):ai(t,i,l,r),i.child;case 11:return Jg(t,i,i.type,i.pendingProps,r);case 7:return ai(t,i,i.pendingProps,r),i.child;case 8:return ai(t,i,i.pendingProps.children,r),i.child;case 12:return ai(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,gr(i,i.type,l.value),ai(t,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,rs(i),f=ii(f),l=l(f),i.flags|=1,ai(t,i,l,r),i.child;case 14:return ex(t,i,i.type,i.pendingProps,r);case 15:return tx(t,i,i.type,i.pendingProps,r);case 19:return ux(t,i,r);case 31:return _1(t,i,r);case 22:return nx(t,i,r,i.pendingProps);case 24:return rs(i),l=ii(On),t===null?(f=fd(),f===null&&(f=sn,h=cd(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=r),f=h),i.memoizedState={parent:l,cache:f},hd(i),gr(i,On,f)):((t.lanes&r)!==0&&(pd(t,i),ml(i,null,null,r),pl()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),gr(i,On,l)):(l=h.cache,gr(i,On,l),l!==f.cache&&ld(i,[On],r,!0))),ai(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Xa(t){t.flags|=4}function Zd(t,i,r,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Bx())t.flags|=8192;else throw ls=Hc,dd}else t.flags&=-16777217}function dx(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!w_(i))if(Bx())t.flags|=8192;else throw ls=Hc,dd}function iu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ut():536870912,t.lanes|=i,ro|=i)}function yl(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function b1(t,i,r){var l=i.pendingProps;switch(id(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return hn(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ga(On),Fe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ws(i)?Xa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rd())),hn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(Xa(i),h!==null?(hn(i),dx(i,h)):(hn(i),Zd(i,f,null,l,r))):h?h!==t.memoizedState?(Xa(i),hn(i),dx(i,h)):(hn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Xa(i),hn(i),Zd(i,f,t,l,r)),null;case 27:if(Je(i),r=J.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Xa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return hn(i),null}t=Se.current,Ws(i)?Xm(i):(t=v_(f,l,r),i.stateNode=t,Xa(i))}return hn(i),null;case 5:if(Je(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Xa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return hn(i),null}if(h=Se.current,Ws(i))Xm(i);else{var b=_u(J.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[bn]=i,h[Sn]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(ri(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Xa(i)}}return hn(i),Zd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Xa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=J.current,Ws(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,f=ni,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[bn]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||l_(t.nodeValue,r)),t||mr(i,!0)}else t=_u(t).createTextNode(l),t[bn]=i,i.stateNode=t}return hn(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ws(i),r!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[bn]=i}else is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),t=!1}else r=rd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(Bi(i),i):(Bi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return hn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ws(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[bn]=i}else is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),f=!1}else f=rd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Bi(i),i):(Bi(i),null)}return Bi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),iu(i,i.updateQueue),hn(i),null);case 4:return Fe(),t===null&&xh(i.stateNode.containerInfo),hn(i),null;case 10:return Ga(i.type),hn(i),null;case 19:if(Q(Rn),l=i.memoizedState,l===null)return hn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)yl(l,!1);else{if(En!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=kc(t),h!==null){for(i.flags|=128,yl(l,!1),t=h.updateQueue,i.updateQueue=t,iu(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Hm(r,t),r=r.sibling;return xe(Rn,Rn.current&1|2),Ht&&Fa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&M()>lu&&(i.flags|=128,f=!0,yl(l,!1),i.lanes=4194304)}else{if(!f)if(t=kc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,iu(i,t),yl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Ht)return hn(i),null}else 2*M()-l.renderingStartTime>lu&&r!==536870912&&(i.flags|=128,f=!0,yl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=M(),t.sibling=null,r=Rn.current,xe(Rn,f?r&1|2:r&1),Ht&&Fa(i,l.treeForkCount),t):(hn(i),null);case 22:case 23:return Bi(i),_d(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),r=i.updateQueue,r!==null&&iu(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&Q(ss),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ga(On),hn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function y1(t,i){switch(id(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ga(On),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Je(i),null;case 31:if(i.memoizedState!==null){if(Bi(i),i.alternate===null)throw Error(a(340));is()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Bi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));is()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Q(Rn),null;case 4:return Fe(),null;case 10:return Ga(i.type),null;case 22:case 23:return Bi(i),_d(),t!==null&&Q(ss),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ga(On),null;case 25:return null;default:return null}}function hx(t,i){switch(id(i),i.tag){case 3:Ga(On),Fe();break;case 26:case 27:case 5:Je(i);break;case 4:Fe();break;case 31:i.memoizedState!==null&&Bi(i);break;case 13:Bi(i);break;case 19:Q(Rn);break;case 10:Ga(i.type);break;case 22:case 23:Bi(i),_d(),t!==null&&Q(ss);break;case 24:Ga(On)}}function Sl(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&t)===t){l=void 0;var h=r.create,b=r.inst;l=h(),b.destroy=l}r=r.next}while(r!==f)}}catch(T){Jt(i,i.return,T)}}function Sr(t,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,f=i;var I=r,ie=T;try{ie()}catch(ge){Jt(f,I,ge)}}}l=l.next}while(l!==h)}}catch(ge){Jt(i,i.return,ge)}}function px(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{ag(i,r)}catch(l){Jt(t,t.return,l)}}}function mx(t,i,r){r.props=fs(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){Jt(t,i,l)}}function Ml(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(f){Jt(t,i,f)}}function wa(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Jt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Jt(t,i,f)}else r.current=null}function gx(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Jt(t,t.return,f)}}function $d(t,i,r){try{var l=t.stateNode;j1(l,t.type,r,i),l[Sn]=i}catch(f){Jt(t,t.return,f)}}function xx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Cr(t.type)||t.tag===4}function Kd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Cr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ei));else if(l!==4&&(l===27&&Cr(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for(Qd(t,i,r),t=t.sibling;t!==null;)Qd(t,i,r),t=t.sibling}function au(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&Cr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(au(t,i,r),t=t.sibling;t!==null;)au(t,i,r),t=t.sibling}function _x(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);ri(i,l,r),i[bn]=t,i[Sn]=r}catch(h){Jt(t,t.return,h)}}var Wa=!1,zn=!1,Jd=!1,vx=typeof WeakSet=="function"?WeakSet:Set,qn=null;function S1(t,i){if(t=t.containerInfo,bh=Tu,t=Um(t),Wf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var b=0,T=-1,I=-1,ie=0,ge=0,be=t,oe=null;t:for(;;){for(var de;be!==r||f!==0&&be.nodeType!==3||(T=b+f),be!==h||l!==0&&be.nodeType!==3||(I=b+l),be.nodeType===3&&(b+=be.nodeValue.length),(de=be.firstChild)!==null;)oe=be,be=de;for(;;){if(be===t)break t;if(oe===r&&++ie===f&&(T=b),oe===h&&++ge===l&&(I=b),(de=be.nextSibling)!==null)break;be=oe,oe=be.parentNode}be=de}r=T===-1||I===-1?null:{start:T,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(yh={focusedElem:t,selectionRange:r},Tu=!1,qn=i;qn!==null;)if(i=qn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,qn=t;else for(;qn!==null;){switch(i=qn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=i,f=h.memoizedProps,h=h.memoizedState,l=r.stateNode;try{var Ye=fs(r.type,f);t=l.getSnapshotBeforeUpdate(Ye,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(ht){Jt(r,r.return,ht)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Eh(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,qn=t;break}qn=i.return}}function bx(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ya(t,r),l&4&&Sl(5,r);break;case 1:if(Ya(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(b){Jt(r,r.return,b)}else{var f=fs(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Jt(r,r.return,b)}}l&64&&px(r),l&512&&Ml(r,r.return);break;case 3:if(Ya(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{ag(t,i)}catch(b){Jt(r,r.return,b)}}break;case 27:i===null&&l&4&&_x(r);case 26:case 5:Ya(t,r),i===null&&l&4&&gx(r),l&512&&Ml(r,r.return);break;case 12:Ya(t,r);break;case 31:Ya(t,r),l&4&&Mx(t,r);break;case 13:Ya(t,r),l&4&&Ex(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=U1.bind(null,r),K1(t,r))));break;case 22:if(l=r.memoizedState!==null||Wa,!l){i=i!==null&&i.memoizedState!==null||zn,f=Wa;var h=zn;Wa=l,(zn=i)&&!h?Za(t,r,(r.subtreeFlags&8772)!==0):Ya(t,r),Wa=f,zn=h}break;case 30:break;default:Ya(t,r)}}function yx(t){var i=t.alternate;i!==null&&(t.alternate=null,yx(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&$r(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var xn=null,Si=!1;function qa(t,i,r){for(r=r.child;r!==null;)Sx(t,i,r),r=r.sibling}function Sx(t,i,r){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Me,r)}catch{}switch(r.tag){case 26:zn||wa(r,i),qa(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:zn||wa(r,i);var l=xn,f=Si;Cr(r.type)&&(xn=r.stateNode,Si=!1),qa(t,i,r),Ll(r.stateNode),xn=l,Si=f;break;case 5:zn||wa(r,i);case 6:if(l=xn,f=Si,xn=null,qa(t,i,r),xn=l,Si=f,xn!==null)if(Si)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(r.stateNode)}catch(h){Jt(r,i,h)}else try{xn.removeChild(r.stateNode)}catch(h){Jt(r,i,h)}break;case 18:xn!==null&&(Si?(t=xn,p_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),po(t)):p_(xn,r.stateNode));break;case 4:l=xn,f=Si,xn=r.stateNode.containerInfo,Si=!0,qa(t,i,r),xn=l,Si=f;break;case 0:case 11:case 14:case 15:Sr(2,r,i),zn||Sr(4,r,i),qa(t,i,r);break;case 1:zn||(wa(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&mx(r,i,l)),qa(t,i,r);break;case 21:qa(t,i,r);break;case 22:zn=(l=zn)||r.memoizedState!==null,qa(t,i,r),zn=l;break;default:qa(t,i,r)}}function Mx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{po(t)}catch(r){Jt(i,i.return,r)}}}function Ex(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{po(t)}catch(r){Jt(i,i.return,r)}}function M1(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new vx),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new vx),i;default:throw Error(a(435,t.tag))}}function ru(t,i){var r=M1(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=L1.bind(null,t,l);l.then(f,f)}})}function Mi(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],h=t,b=i,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(Cr(T.type)){xn=T.stateNode,Si=!1;break e}break;case 5:xn=T.stateNode,Si=!1;break e;case 3:case 4:xn=T.stateNode.containerInfo,Si=!0;break e}T=T.return}if(xn===null)throw Error(a(160));Sx(h,b,f),xn=null,Si=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Tx(i,t),i=i.sibling}var fa=null;function Tx(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mi(i,t),Ei(t),l&4&&(Sr(3,t,t.return),Sl(3,t),Sr(5,t,t.return));break;case 1:Mi(i,t),Ei(t),l&512&&(zn||r===null||wa(r,r.return)),l&64&&Wa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=fa;if(Mi(i,t),Ei(t),l&512&&(zn||r===null||wa(r,r.return)),l&4){var h=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Pa]||h[bn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),ri(h,l,r),h[bn]=t,te(h),l=h;break e;case"link":var b=T_("link","href",f).get(l+(r.href||""));if(b){for(var T=0;T<b.length;T++)if(h=b[T],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(T,1);break t}}h=f.createElement(l),ri(h,l,r),f.head.appendChild(h);break;case"meta":if(b=T_("meta","content",f).get(l+(r.content||""))){for(T=0;T<b.length;T++)if(h=b[T],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(T,1);break t}}h=f.createElement(l),ri(h,l,r),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[bn]=t,te(h),l=h}t.stateNode=l}else A_(f,t.type,t.stateNode);else t.stateNode=E_(f,l,t.memoizedProps);else h!==l?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,l===null?A_(f,t.type,t.stateNode):E_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&$d(t,t.memoizedProps,r.memoizedProps)}break;case 27:Mi(i,t),Ei(t),l&512&&(zn||r===null||wa(r,r.return)),r!==null&&l&4&&$d(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Mi(i,t),Ei(t),l&512&&(zn||r===null||wa(r,r.return)),t.flags&32){f=t.stateNode;try{zt(f,"")}catch(Ye){Jt(t,t.return,Ye)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,$d(t,f,r!==null?r.memoizedProps:f)),l&1024&&(Jd=!0);break;case 6:if(Mi(i,t),Ei(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(Ye){Jt(t,t.return,Ye)}}break;case 3:if(yu=null,f=fa,fa=vu(i.containerInfo),Mi(i,t),fa=f,Ei(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{po(i.containerInfo)}catch(Ye){Jt(t,t.return,Ye)}Jd&&(Jd=!1,Ax(t));break;case 4:l=fa,fa=vu(t.stateNode.containerInfo),Mi(i,t),Ei(t),fa=l;break;case 12:Mi(i,t),Ei(t);break;case 31:Mi(i,t),Ei(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 13:Mi(i,t),Ei(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ou=M()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 22:f=t.memoizedState!==null;var I=r!==null&&r.memoizedState!==null,ie=Wa,ge=zn;if(Wa=ie||f,zn=ge||I,Mi(i,t),zn=ge,Wa=ie,Ei(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||I||Wa||zn||ds(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){I=r=i;try{if(h=I.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=I.stateNode;var be=I.memoizedProps.style,oe=be!=null&&be.hasOwnProperty("display")?be.display:null;T.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Ye){Jt(I,I.return,Ye)}}}else if(i.tag===6){if(r===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(Ye){Jt(I,I.return,Ye)}}}else if(i.tag===18){if(r===null){I=i;try{var de=I.stateNode;f?m_(de,!0):m_(I.stateNode,!1)}catch(Ye){Jt(I,I.return,Ye)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,ru(t,r))));break;case 19:Mi(i,t),Ei(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ru(t,l)));break;case 30:break;case 21:break;default:Mi(i,t),Ei(t)}}function Ei(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(xx(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,h=Kd(t);au(t,h,f);break;case 5:var b=r.stateNode;r.flags&32&&(zt(b,""),r.flags&=-33);var T=Kd(t);au(t,T,b);break;case 3:case 4:var I=r.stateNode.containerInfo,ie=Kd(t);Qd(t,ie,I);break;default:throw Error(a(161))}}catch(ge){Jt(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ax(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Ax(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ya(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)bx(t,i.alternate,i),i=i.sibling}function ds(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Sr(4,i,i.return),ds(i);break;case 1:wa(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&mx(i,i.return,r),ds(i);break;case 27:Ll(i.stateNode);case 26:case 5:wa(i,i.return),ds(i);break;case 22:i.memoizedState===null&&ds(i);break;case 30:ds(i);break;default:ds(i)}t=t.sibling}}function Za(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:Za(f,h,r),Sl(4,h);break;case 1:if(Za(f,h,r),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ie){Jt(l,l.return,ie)}if(l=h,f=l.updateQueue,f!==null){var T=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)ig(I[f],T)}catch(ie){Jt(l,l.return,ie)}}r&&b&64&&px(h),Ml(h,h.return);break;case 27:_x(h);case 26:case 5:Za(f,h,r),r&&l===null&&b&4&&gx(h),Ml(h,h.return);break;case 12:Za(f,h,r);break;case 31:Za(f,h,r),r&&b&4&&Mx(f,h);break;case 13:Za(f,h,r),r&&b&4&&Ex(f,h);break;case 22:h.memoizedState===null&&Za(f,h,r),Ml(h,h.return);break;case 30:break;default:Za(f,h,r)}i=i.sibling}}function eh(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&cl(r))}function th(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&cl(t))}function da(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)wx(t,i,r,l),i=i.sibling}function wx(t,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:da(t,i,r,l),f&2048&&Sl(9,i);break;case 1:da(t,i,r,l);break;case 3:da(t,i,r,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&cl(t)));break;case 12:if(f&2048){da(t,i,r,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,T=h.onPostCommit;typeof T=="function"&&T(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Jt(i,i.return,I)}}else da(t,i,r,l);break;case 31:da(t,i,r,l);break;case 13:da(t,i,r,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?da(t,i,r,l):El(t,i):h._visibility&2?da(t,i,r,l):(h._visibility|=2,no(t,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&eh(b,i);break;case 24:da(t,i,r,l),f&2048&&th(i.alternate,i);break;default:da(t,i,r,l)}}function no(t,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,T=r,I=l,ie=b.flags;switch(b.tag){case 0:case 11:case 15:no(h,b,T,I,f),Sl(8,b);break;case 23:break;case 22:var ge=b.stateNode;b.memoizedState!==null?ge._visibility&2?no(h,b,T,I,f):El(h,b):(ge._visibility|=2,no(h,b,T,I,f)),f&&ie&2048&&eh(b.alternate,b);break;case 24:no(h,b,T,I,f),f&&ie&2048&&th(b.alternate,b);break;default:no(h,b,T,I,f)}i=i.sibling}}function El(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,f=l.flags;switch(l.tag){case 22:El(r,l),f&2048&&eh(l.alternate,l);break;case 24:El(r,l),f&2048&&th(l.alternate,l);break;default:El(r,l)}i=i.sibling}}var Tl=8192;function io(t,i,r){if(t.subtreeFlags&Tl)for(t=t.child;t!==null;)Rx(t,i,r),t=t.sibling}function Rx(t,i,r){switch(t.tag){case 26:io(t,i,r),t.flags&Tl&&t.memoizedState!==null&&cy(r,fa,t.memoizedState,t.memoizedProps);break;case 5:io(t,i,r);break;case 3:case 4:var l=fa;fa=vu(t.stateNode.containerInfo),io(t,i,r),fa=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Tl,Tl=16777216,io(t,i,r),Tl=l):io(t,i,r));break;default:io(t,i,r)}}function Cx(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Al(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];qn=l,Ux(l,t)}Cx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dx(t),t=t.sibling}function Dx(t){switch(t.tag){case 0:case 11:case 15:Al(t),t.flags&2048&&Sr(9,t,t.return);break;case 3:Al(t);break;case 12:Al(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,su(t)):Al(t);break;default:Al(t)}}function su(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];qn=l,Ux(l,t)}Cx(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Sr(8,i,i.return),su(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,su(i));break;default:su(i)}t=t.sibling}}function Ux(t,i){for(;qn!==null;){var r=qn;switch(r.tag){case 0:case 11:case 15:Sr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:cl(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,qn=l;else e:for(r=t;qn!==null;){l=qn;var f=l.sibling,h=l.return;if(yx(l),l===r){qn=null;break e}if(f!==null){f.return=h,qn=f;break e}qn=h}}}var E1={getCacheForType:function(t){var i=ii(On),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return ii(On).controller.signal}},T1=typeof WeakMap=="function"?WeakMap:Map,Zt=0,sn=null,Ot=null,It=0,Qt=0,Fi=null,Mr=!1,ao=!1,nh=!1,$a=0,En=0,Er=0,hs=0,ih=0,Hi=0,ro=0,wl=null,Ti=null,ah=!1,ou=0,Lx=0,lu=1/0,cu=null,Tr=null,Hn=0,Ar=null,so=null,Ka=0,rh=0,sh=null,Ox=null,Rl=0,oh=null;function Gi(){return(Zt&2)!==0&&It!==0?It&-It:N.T!==null?hh():Zr()}function Nx(){if(Hi===0)if((It&536870912)===0||Ht){var t=Le;Le<<=1,(Le&3932160)===0&&(Le=262144),Hi=t}else Hi=536870912;return t=Ii.current,t!==null&&(t.flags|=32),Hi}function Ai(t,i,r){(t===sn&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)&&(oo(t,0),wr(t,It,Hi,!1)),fn(t,r),((Zt&2)===0||t!==sn)&&(t===sn&&((Zt&2)===0&&(hs|=r),En===4&&wr(t,It,Hi,!1)),Ra(t))}function Px(t,i,r){if((Zt&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Ae(t,i),f=l?R1(t,i):ch(t,i,!0),h=l;do{if(f===0){ao&&!l&&wr(t,i,0,!1);break}else{if(r=t.current.alternate,h&&!A1(r)){f=ch(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var T=t;f=wl;var I=T.current.memoizedState.isDehydrated;if(I&&(oo(T,b).flags|=256),b=ch(T,b,!1),b!==2){if(nh&&!I){T.errorRecoveryDisabledLanes|=h,hs|=h,f=4;break e}h=Ti,Ti=f,h!==null&&(Ti===null?Ti=h:Ti.push.apply(Ti,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){oo(t,0),wr(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:wr(l,i,Hi,!Mr);break e;case 2:Ti=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=ou+300-M(),10<f)){if(wr(l,i,Hi,!Mr),G(l,0,!0)!==0)break e;Ka=i,l.timeoutHandle=d_(zx.bind(null,l,r,Ti,cu,ah,i,Hi,hs,ro,Mr,h,"Throttled",-0,0),f);break e}zx(l,r,Ti,cu,ah,i,Hi,hs,ro,Mr,h,null,-0,0)}}break}while(!0);Ra(t)}function zx(t,i,r,l,f,h,b,T,I,ie,ge,be,oe,de){if(t.timeoutHandle=-1,be=i.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ei},Rx(i,h,be);var Ye=(h&62914560)===h?ou-M():(h&4194048)===h?Lx-M():0;if(Ye=uy(be,Ye),Ye!==null){Ka=h,t.cancelPendingCommit=Ye(kx.bind(null,t,i,h,r,l,f,b,T,I,ge,be,null,oe,de)),wr(t,h,b,!ie);return}}kx(t,i,h,r,l,f,b,T,I)}function A1(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],h=f.getSnapshot;f=f.value;try{if(!Pi(h(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(t,i,r,l){i&=~ih,i&=~hs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-qe(f),b=1<<h;l[h]=-1,f&=~b}r!==0&&Oi(t,r,i)}function uu(){return(Zt&6)===0?(Cl(0),!1):!0}function lh(){if(Ot!==null){if(Qt===0)var t=Ot.return;else t=Ot,Ha=as=null,Ed(t),Ks=null,fl=0,t=Ot;for(;t!==null;)hx(t.alternate,t),t=t.return;Ot=null}}function oo(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,W1(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ka=0,lh(),sn=t,Ot=r=Ba(t.current,null),It=i,Qt=0,Fi=null,Mr=!1,ao=Ae(t,i),nh=!1,ro=Hi=ih=hs=Er=En=0,Ti=wl=null,ah=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-qe(l),h=1<<f;i|=t[f],l&=~h}return $a=i,Uc(),r}function Ix(t,i){Et=null,N.H=vl,i===$s||i===Fc?(i=Jm(),Qt=3):i===dd?(i=Jm(),Qt=4):Qt=i===Hd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Fi=i,Ot===null&&(En=1,Jc(t,$i(i,t.current)))}function Bx(){var t=Ii.current;return t===null?!0:(It&4194048)===It?ea===null:(It&62914560)===It||(It&536870912)!==0?t===ea:!1}function Fx(){var t=N.H;return N.H=vl,t===null?vl:t}function Hx(){var t=N.A;return N.A=E1,t}function fu(){En=4,Mr||(It&4194048)!==It&&Ii.current!==null||(ao=!0),(Er&134217727)===0&&(hs&134217727)===0||sn===null||wr(sn,It,Hi,!1)}function ch(t,i,r){var l=Zt;Zt|=2;var f=Fx(),h=Hx();(sn!==t||It!==i)&&(cu=null,oo(t,i)),i=!1;var b=En;e:do try{if(Qt!==0&&Ot!==null){var T=Ot,I=Fi;switch(Qt){case 8:lh(),b=6;break e;case 3:case 2:case 9:case 6:Ii.current===null&&(i=!0);var ie=Qt;if(Qt=0,Fi=null,lo(t,T,I,ie),r&&ao){b=0;break e}break;default:ie=Qt,Qt=0,Fi=null,lo(t,T,I,ie)}}w1(),b=En;break}catch(ge){Ix(t,ge)}while(!0);return i&&t.shellSuspendCounter++,Ha=as=null,Zt=l,N.H=f,N.A=h,Ot===null&&(sn=null,It=0,Uc()),b}function w1(){for(;Ot!==null;)Gx(Ot)}function R1(t,i){var r=Zt;Zt|=2;var l=Fx(),f=Hx();sn!==t||It!==i?(cu=null,lu=M()+500,oo(t,i)):ao=Ae(t,i);e:do try{if(Qt!==0&&Ot!==null){i=Ot;var h=Fi;t:switch(Qt){case 1:Qt=0,Fi=null,lo(t,i,h,1);break;case 2:case 9:if(Km(h)){Qt=0,Fi=null,Vx(i);break}i=function(){Qt!==2&&Qt!==9||sn!==t||(Qt=7),Ra(t)},h.then(i,i);break e;case 3:Qt=7;break e;case 4:Qt=5;break e;case 7:Km(h)?(Qt=0,Fi=null,Vx(i)):(Qt=0,Fi=null,lo(t,i,h,7));break;case 5:var b=null;switch(Ot.tag){case 26:b=Ot.memoizedState;case 5:case 27:var T=Ot;if(b?w_(b):T.stateNode.complete){Qt=0,Fi=null;var I=T.sibling;if(I!==null)Ot=I;else{var ie=T.return;ie!==null?(Ot=ie,du(ie)):Ot=null}break t}}Qt=0,Fi=null,lo(t,i,h,5);break;case 6:Qt=0,Fi=null,lo(t,i,h,6);break;case 8:lh(),En=6;break e;default:throw Error(a(462))}}C1();break}catch(ge){Ix(t,ge)}while(!0);return Ha=as=null,N.H=l,N.A=f,Zt=r,Ot!==null?0:(sn=null,It=0,Uc(),En)}function C1(){for(;Ot!==null&&!_t();)Gx(Ot)}function Gx(t){var i=fx(t.alternate,t,$a);t.memoizedProps=t.pendingProps,i===null?du(t):Ot=i}function Vx(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=rx(r,i,i.pendingProps,i.type,void 0,It);break;case 11:i=rx(r,i,i.pendingProps,i.type.render,i.ref,It);break;case 5:Ed(i);default:hx(r,i),i=Ot=Hm(i,$a),i=fx(r,i,$a)}t.memoizedProps=t.pendingProps,i===null?du(t):Ot=i}function lo(t,i,r,l){Ha=as=null,Ed(i),Ks=null,fl=0;var f=i.return;try{if(x1(t,f,i,r,It)){En=1,Jc(t,$i(r,t.current)),Ot=null;return}}catch(h){if(f!==null)throw Ot=f,h;En=1,Jc(t,$i(r,t.current)),Ot=null;return}i.flags&32768?(Ht||l===1?t=!0:ao||(It&536870912)!==0?t=!1:(Mr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ii.current,l!==null&&l.tag===13&&(l.flags|=16384))),jx(i,t)):du(i)}function du(t){var i=t;do{if((i.flags&32768)!==0){jx(i,Mr);return}t=i.return;var r=b1(i.alternate,i,$a);if(r!==null){Ot=r;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=t}while(i!==null);En===0&&(En=5)}function jx(t,i){do{var r=y1(t.alternate,t);if(r!==null){r.flags&=32767,Ot=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){Ot=t;return}Ot=t=r}while(t!==null);En=6,Ot=null}function kx(t,i,r,l,f,h,b,T,I){t.cancelPendingCommit=null;do hu();while(Hn!==0);if((Zt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=Kf,Ct(t,r,h,b,T,I),t===sn&&(Ot=sn=null,It=0),so=i,Ar=t,Ka=r,rh=h,sh=f,Ox=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,O1(he,function(){return Zx(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,f=Y.p,Y.p=2,b=Zt,Zt|=4;try{S1(t,i,r)}finally{Zt=b,Y.p=f,N.T=l}}Hn=1,Xx(),Wx(),qx()}}function Xx(){if(Hn===1){Hn=0;var t=Ar,i=so,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=N.T,N.T=null;var l=Y.p;Y.p=2;var f=Zt;Zt|=4;try{Tx(i,t);var h=yh,b=Um(t.containerInfo),T=h.focusedElem,I=h.selectionRange;if(b!==T&&T&&T.ownerDocument&&Dm(T.ownerDocument.documentElement,T)){if(I!==null&&Wf(T)){var ie=I.start,ge=I.end;if(ge===void 0&&(ge=ie),"selectionStart"in T)T.selectionStart=ie,T.selectionEnd=Math.min(ge,T.value.length);else{var be=T.ownerDocument||document,oe=be&&be.defaultView||window;if(oe.getSelection){var de=oe.getSelection(),Ye=T.textContent.length,ht=Math.min(I.start,Ye),nn=I.end===void 0?ht:Math.min(I.end,Ye);!de.extend&&ht>nn&&(b=nn,nn=ht,ht=b);var Z=Cm(T,ht),j=Cm(T,nn);if(Z&&j&&(de.rangeCount!==1||de.anchorNode!==Z.node||de.anchorOffset!==Z.offset||de.focusNode!==j.node||de.focusOffset!==j.offset)){var ne=be.createRange();ne.setStart(Z.node,Z.offset),de.removeAllRanges(),ht>nn?(de.addRange(ne),de.extend(j.node,j.offset)):(ne.setEnd(j.node,j.offset),de.addRange(ne))}}}}for(be=[],de=T;de=de.parentNode;)de.nodeType===1&&be.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<be.length;T++){var _e=be[T];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}Tu=!!bh,yh=bh=null}finally{Zt=f,Y.p=l,N.T=r}}t.current=i,Hn=2}}function Wx(){if(Hn===2){Hn=0;var t=Ar,i=so,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=N.T,N.T=null;var l=Y.p;Y.p=2;var f=Zt;Zt|=4;try{bx(t,i.alternate,i)}finally{Zt=f,Y.p=l,N.T=r}}Hn=3}}function qx(){if(Hn===4||Hn===3){Hn=0,L();var t=Ar,i=so,r=Ka,l=Ox;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Hn=5:(Hn=0,so=Ar=null,Yx(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Tr=null),Na(r),i=i.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Me,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=N.T,f=Y.p,Y.p=2,N.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var T=l[b];h(T.value,{componentStack:T.stack})}}finally{N.T=i,Y.p=f}}(Ka&3)!==0&&hu(),Ra(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===oh?Rl++:(Rl=0,oh=t):Rl=0,Cl(0)}}function Yx(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,cl(i)))}function hu(){return Xx(),Wx(),qx(),Zx()}function Zx(){if(Hn!==5)return!1;var t=Ar,i=rh;rh=0;var r=Na(Ka),l=N.T,f=Y.p;try{Y.p=32>r?32:r,N.T=null,r=sh,sh=null;var h=Ar,b=Ka;if(Hn=0,so=Ar=null,Ka=0,(Zt&6)!==0)throw Error(a(331));var T=Zt;if(Zt|=4,Dx(h.current),wx(h,h.current,b,r),Zt=T,Cl(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Me,h)}catch{}return!0}finally{Y.p=f,N.T=l,Yx(t,i)}}function $x(t,i,r){i=$i(r,i),i=Fd(t.stateNode,i,2),t=vr(t,i,2),t!==null&&(fn(t,2),Ra(t))}function Jt(t,i,r){if(t.tag===3)$x(t,t,r);else for(;i!==null;){if(i.tag===3){$x(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tr===null||!Tr.has(l))){t=$i(r,t),r=Kg(2),l=vr(i,r,2),l!==null&&(Qg(r,l,i,t),fn(l,2),Ra(l));break}}i=i.return}}function uh(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new T1;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(nh=!0,f.add(r),t=D1.bind(null,t,i,r),i.then(t,t))}function D1(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,sn===t&&(It&r)===r&&(En===4||En===3&&(It&62914560)===It&&300>M()-ou?(Zt&2)===0&&oo(t,0):ih|=r,ro===It&&(ro=0)),Ra(t)}function Kx(t,i){i===0&&(i=Ut()),t=ts(t,i),t!==null&&(fn(t,i),Ra(t))}function U1(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Kx(t,r)}function L1(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Kx(t,r)}function O1(t,i){return Kt(t,i)}var pu=null,co=null,fh=!1,mu=!1,dh=!1,Rr=0;function Ra(t){t!==co&&t.next===null&&(co===null?pu=co=t:co=co.next=t),mu=!0,fh||(fh=!0,P1())}function Cl(t,i){if(!dh&&mu){dh=!0;do for(var r=!1,l=pu;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,T=l.pingedLanes;h=(1<<31-qe(42|t)+1)-1,h&=f&~(b&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,t_(l,h))}else h=It,h=G(l,l===sn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ae(l,h)||(r=!0,t_(l,h));l=l.next}while(r);dh=!1}}function N1(){Qx()}function Qx(){mu=fh=!1;var t=0;Rr!==0&&X1()&&(t=Rr);for(var i=M(),r=null,l=pu;l!==null;){var f=l.next,h=Jx(l,i);h===0?(l.next=null,r===null?pu=f:r.next=f,f===null&&(co=r)):(r=l,(t!==0||(h&3)!==0)&&(mu=!0)),l=f}Hn!==0&&Hn!==5||Cl(t),Rr!==0&&(Rr=0)}function Jx(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-qe(h),T=1<<b,I=f[b];I===-1?((T&r)===0||(T&l)!==0)&&(f[b]=Ke(T,i)):I<=i&&(t.expiredLanes|=T),h&=~T}if(i=sn,r=It,r=G(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&it(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ae(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&it(l),Na(r)){case 2:case 8:r=ye;break;case 32:r=he;break;case 268435456:r=Ie;break;default:r=he}return l=e_.bind(null,t),r=Kt(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&it(l),t.callbackPriority=2,t.callbackNode=null,2}function e_(t,i){if(Hn!==0&&Hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(hu()&&t.callbackNode!==r)return null;var l=It;return l=G(t,t===sn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Px(t,l,i),Jx(t,M()),t.callbackNode!=null&&t.callbackNode===r?e_.bind(null,t):null)}function t_(t,i){if(hu())return null;Px(t,i,!0)}function P1(){q1(function(){(Zt&6)!==0?Kt(ve,N1):Qx()})}function hh(){if(Rr===0){var t=Ys;t===0&&(t=Be,Be<<=1,(Be&261888)===0&&(Be=256)),Rr=t}return Rr}function n_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yi(""+t)}function i_(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function z1(t,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var h=n_((f[Sn]||null).action),b=l.submitter;b&&(i=(i=b[Sn]||null)?n_(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var T=new wc("action","action",null,l,f);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Rr!==0){var I=b?i_(f,b):new FormData(f);Od(r,{pending:!0,data:I,method:f.method,action:h},null,I)}}else typeof h=="function"&&(T.preventDefault(),I=b?i_(f,b):new FormData(f),Od(r,{pending:!0,data:I,method:f.method,action:h},h,I))},currentTarget:f}]})}}for(var ph=0;ph<$f.length;ph++){var mh=$f[ph],I1=mh.toLowerCase(),B1=mh[0].toUpperCase()+mh.slice(1);ua(I1,"on"+B1)}ua(Nm,"onAnimationEnd"),ua(Pm,"onAnimationIteration"),ua(zm,"onAnimationStart"),ua("dblclick","onDoubleClick"),ua("focusin","onFocus"),ua("focusout","onBlur"),ua(e1,"onTransitionRun"),ua(t1,"onTransitionStart"),ua(n1,"onTransitionCancel"),ua(Im,"onTransitionEnd"),je("onMouseEnter",["mouseout","mouseover"]),je("onMouseLeave",["mouseout","mouseover"]),je("onPointerEnter",["pointerout","pointerover"]),je("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));function a_(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var T=l[b],I=T.instance,ie=T.currentTarget;if(T=T.listener,I!==h&&f.isPropagationStopped())break e;h=T,f.currentTarget=ie;try{h(f)}catch(ge){Dc(ge)}f.currentTarget=null,h=I}else for(b=0;b<l.length;b++){if(T=l[b],I=T.instance,ie=T.currentTarget,T=T.listener,I!==h&&f.isPropagationStopped())break e;h=T,f.currentTarget=ie;try{h(f)}catch(ge){Dc(ge)}f.currentTarget=null,h=I}}}}function Nt(t,i){var r=i[Sa];r===void 0&&(r=i[Sa]=new Set);var l=t+"__bubble";r.has(l)||(r_(i,t,2,!1),r.add(l))}function gh(t,i,r){var l=0;i&&(l|=4),r_(r,t,l,i)}var gu="_reactListening"+Math.random().toString(36).slice(2);function xh(t){if(!t[gu]){t[gu]=!0,$.forEach(function(r){r!=="selectionchange"&&(F1.has(r)||gh(r,!1,t),gh(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[gu]||(i[gu]=!0,gh("selectionchange",!1,i))}}function r_(t,i,r,l){switch(N_(i)){case 2:var f=hy;break;case 8:f=py;break;default:f=Lh}r=f.bind(null,i,r,t),f=void 0,!Ia||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function _h(t,i,r,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var T=l.stateNode.containerInfo;if(T===f)break;if(b===4)for(b=l.return;b!==null;){var I=b.tag;if((I===3||I===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;T!==null;){if(b=Ma(T),b===null)return;if(I=b.tag,I===5||I===6||I===26||I===27){l=h=b;continue e}T=T.parentNode}}l=l.return}yn(function(){var ie=h,ge=ti(r),be=[];e:{var oe=Bm.get(t);if(oe!==void 0){var de=wc,Ye=t;switch(t){case"keypress":if(Bs(r)===0)break e;case"keydown":case"keyup":de=Lb;break;case"focusin":Ye="focus",de=Gf;break;case"focusout":Ye="blur",de=Gf;break;case"beforeblur":case"afterblur":de=Gf;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Pb;break;case Nm:case Pm:case zm:de=Mb;break;case Im:de=Ib;break;case"scroll":case"scrollend":de=_b;break;case"wheel":de=Fb;break;case"copy":case"cut":case"paste":de=Tb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=mm;break;case"toggle":case"beforetoggle":de=Gb}var ht=(i&4)!==0,nn=!ht&&(t==="scroll"||t==="scrollend"),Z=ht?oe!==null?oe+"Capture":null:oe;ht=[];for(var j=ie,ne;j!==null;){var _e=j;if(ne=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ne===null||Z===null||(_e=ca(j,Z),_e!=null&&ht.push(Ul(j,_e,ne))),nn)break;j=j.return}0<ht.length&&(oe=new de(oe,Ye,null,r,ge),be.push({event:oe,listeners:ht}))}}if((i&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",oe&&r!==Ni&&(Ye=r.relatedTarget||r.fromElement)&&(Ma(Ye)||Ye[la]))break e;if((de||oe)&&(oe=ge.window===ge?ge:(oe=ge.ownerDocument)?oe.defaultView||oe.parentWindow:window,de?(Ye=r.relatedTarget||r.toElement,de=ie,Ye=Ye?Ma(Ye):null,Ye!==null&&(nn=c(Ye),ht=Ye.tag,Ye!==nn||ht!==5&&ht!==27&&ht!==6)&&(Ye=null)):(de=null,Ye=ie),de!==Ye)){if(ht=hm,_e="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ht=mm,_e="onPointerLeave",Z="onPointerEnter",j="pointer"),nn=de==null?oe:q(de),ne=Ye==null?oe:q(Ye),oe=new ht(_e,j+"leave",de,r,ge),oe.target=nn,oe.relatedTarget=ne,_e=null,Ma(ge)===ie&&(ht=new ht(Z,j+"enter",Ye,r,ge),ht.target=ne,ht.relatedTarget=nn,_e=ht),nn=_e,de&&Ye)t:{for(ht=H1,Z=de,j=Ye,ne=0,_e=Z;_e;_e=ht(_e))ne++;_e=0;for(var ut=j;ut;ut=ht(ut))_e++;for(;0<ne-_e;)Z=ht(Z),ne--;for(;0<_e-ne;)j=ht(j),_e--;for(;ne--;){if(Z===j||j!==null&&Z===j.alternate){ht=Z;break t}Z=ht(Z),j=ht(j)}ht=null}else ht=null;de!==null&&s_(be,oe,de,ht,!1),Ye!==null&&nn!==null&&s_(be,nn,Ye,ht,!0)}}e:{if(oe=ie?q(ie):window,de=oe.nodeName&&oe.nodeName.toLowerCase(),de==="select"||de==="input"&&oe.type==="file")var kt=Mm;else if(ym(oe))if(Em)kt=Kb;else{kt=Zb;var Qe=Yb}else de=oe.nodeName,!de||de.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ie&&vi(ie.elementType)&&(kt=Mm):kt=$b;if(kt&&(kt=kt(t,ie))){Sm(be,kt,r,ge);break e}Qe&&Qe(t,oe,ie),t==="focusout"&&ie&&oe.type==="number"&&ie.memoizedProps.value!=null&&Vt(oe,"number",oe.value)}switch(Qe=ie?q(ie):window,t){case"focusin":(ym(Qe)||Qe.contentEditable==="true")&&(Hs=Qe,qf=ie,sl=null);break;case"focusout":sl=qf=Hs=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,Lm(be,r,ge);break;case"selectionchange":if(Jb)break;case"keydown":case"keyup":Lm(be,r,ge)}var wt;if(jf)e:{switch(t){case"compositionstart":var Bt="onCompositionStart";break e;case"compositionend":Bt="onCompositionEnd";break e;case"compositionupdate":Bt="onCompositionUpdate";break e}Bt=void 0}else Fs?vm(t,r)&&(Bt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Bt="onCompositionStart");Bt&&(gm&&r.locale!=="ko"&&(Fs||Bt!=="onCompositionStart"?Bt==="onCompositionEnd"&&Fs&&(wt=Tc()):(wn=ge,Is="value"in wn?wn.value:wn.textContent,Fs=!0)),Qe=xu(ie,Bt),0<Qe.length&&(Bt=new pm(Bt,t,null,r,ge),be.push({event:Bt,listeners:Qe}),wt?Bt.data=wt:(wt=bm(r),wt!==null&&(Bt.data=wt)))),(wt=jb?kb(t,r):Xb(t,r))&&(Bt=xu(ie,"onBeforeInput"),0<Bt.length&&(Qe=new pm("onBeforeInput","beforeinput",null,r,ge),be.push({event:Qe,listeners:Bt}),Qe.data=wt)),z1(be,t,ie,r,ge)}a_(be,i)})}function Ul(t,i,r){return{instance:t,listener:i,currentTarget:r}}function xu(t,i){for(var r=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=ca(t,r),f!=null&&l.unshift(Ul(t,f,h)),f=ca(t,i),f!=null&&l.push(Ul(t,f,h))),t.tag===3)return l;t=t.return}return[]}function H1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s_(t,i,r,l,f){for(var h=i._reactName,b=[];r!==null&&r!==l;){var T=r,I=T.alternate,ie=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||ie===null||(I=ie,f?(ie=ca(r,h),ie!=null&&b.unshift(Ul(r,ie,I))):f||(ie=ca(r,h),ie!=null&&b.push(Ul(r,ie,I)))),r=r.return}b.length!==0&&t.push({event:i,listeners:b})}var G1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function o_(t){return(typeof t=="string"?t:""+t).replace(G1,`
`).replace(V1,"")}function l_(t,i){return i=o_(i),o_(t)===i}function tn(t,i,r,l,f,h){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||zt(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&zt(t,""+l);break;case"className":Pt(t,"class",l);break;case"tabIndex":Pt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(t,r,l);break;case"style":Fn(t,l,h);break;case"data":if(i!=="object"){Pt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Yi(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(i!=="input"&&tn(t,i,"name",f.name,f,null),tn(t,i,"formEncType",f.formEncType,f,null),tn(t,i,"formMethod",f.formMethod,f,null),tn(t,i,"formTarget",f.formTarget,f,null)):(tn(t,i,"encType",f.encType,f,null),tn(t,i,"method",f.method,f,null),tn(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Yi(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=ei);break;case"onScroll":l!=null&&Nt("scroll",t);break;case"onScrollEnd":l!=null&&Nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Yi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":Nt("beforetoggle",t),Nt("toggle",t),bt(t,"popover",l);break;case"xlinkActuate":we(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":we(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":we(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":we(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":we(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":we(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":we(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":we(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":we(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":bt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=za.get(r)||r,bt(t,r,l))}}function vh(t,i,r,l,f,h){switch(r){case"style":Fn(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?zt(t,l):(typeof l=="number"||typeof l=="bigint")&&zt(t,""+l);break;case"onScroll":l!=null&&Nt("scroll",t);break;case"onScrollEnd":l!=null&&Nt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ei);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ce.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),h=t[Sn]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,f);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):bt(t,r,l)}}}function ri(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",t),Nt("load",t);var l=!1,f=!1,h;for(h in r)if(r.hasOwnProperty(h)){var b=r[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tn(t,i,h,b,r,null)}}f&&tn(t,i,"srcSet",r.srcSet,r,null),l&&tn(t,i,"src",r.src,r,null);return;case"input":Nt("invalid",t);var T=h=b=f=null,I=null,ie=null;for(l in r)if(r.hasOwnProperty(l)){var ge=r[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":b=ge;break;case"checked":I=ge;break;case"defaultChecked":ie=ge;break;case"value":h=ge;break;case"defaultValue":T=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:tn(t,i,l,ge,r,null)}}Lt(t,h,T,I,ie,b,f,!1);return;case"select":Nt("invalid",t),l=b=h=null;for(f in r)if(r.hasOwnProperty(f)&&(T=r[f],T!=null))switch(f){case"value":h=T;break;case"defaultValue":b=T;break;case"multiple":l=T;default:tn(t,i,f,T,r,null)}i=h,r=b,t.multiple=!!l,i!=null?Yt(t,!!l,i,!1):r!=null&&Yt(t,!!l,r,!0);return;case"textarea":Nt("invalid",t),h=f=l=null;for(b in r)if(r.hasOwnProperty(b)&&(T=r[b],T!=null))switch(b){case"value":l=T;break;case"defaultValue":f=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:tn(t,i,b,T,r,null)}tt(t,l,f,h);return;case"option":for(I in r)if(r.hasOwnProperty(I)&&(l=r[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tn(t,i,I,l,r,null)}return;case"dialog":Nt("beforetoggle",t),Nt("toggle",t),Nt("cancel",t),Nt("close",t);break;case"iframe":case"object":Nt("load",t);break;case"video":case"audio":for(l=0;l<Dl.length;l++)Nt(Dl[l],t);break;case"image":Nt("error",t),Nt("load",t);break;case"details":Nt("toggle",t);break;case"embed":case"source":case"link":Nt("error",t),Nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in r)if(r.hasOwnProperty(ie)&&(l=r[ie],l!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tn(t,i,ie,l,r,null)}return;default:if(vi(i)){for(ge in r)r.hasOwnProperty(ge)&&(l=r[ge],l!==void 0&&vh(t,i,ge,l,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(l=r[T],l!=null&&tn(t,i,T,l,r,null))}function j1(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,T=null,I=null,ie=null,ge=null;for(de in r){var be=r[de];if(r.hasOwnProperty(de)&&be!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":I=be;default:l.hasOwnProperty(de)||tn(t,i,de,null,l,be)}}for(var oe in l){var de=l[oe];if(be=r[oe],l.hasOwnProperty(oe)&&(de!=null||be!=null))switch(oe){case"type":h=de;break;case"name":f=de;break;case"checked":ie=de;break;case"defaultChecked":ge=de;break;case"value":b=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,i));break;default:de!==be&&tn(t,i,oe,de,l,be)}}cn(t,b,T,I,ie,ge,h,f);return;case"select":de=b=T=oe=null;for(h in r)if(I=r[h],r.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":de=I;default:l.hasOwnProperty(h)||tn(t,i,h,null,l,I)}for(f in l)if(h=l[f],I=r[f],l.hasOwnProperty(f)&&(h!=null||I!=null))switch(f){case"value":oe=h;break;case"defaultValue":T=h;break;case"multiple":b=h;default:h!==I&&tn(t,i,f,h,l,I)}i=T,r=b,l=de,oe!=null?Yt(t,!!r,oe,!1):!!l!=!!r&&(i!=null?Yt(t,!!r,i,!0):Yt(t,!!r,r?[]:"",!1));return;case"textarea":de=oe=null;for(T in r)if(f=r[T],r.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:tn(t,i,T,null,l,f)}for(b in l)if(f=l[b],h=r[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":oe=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&tn(t,i,b,f,l,h)}mt(t,oe,de);return;case"option":for(var Ye in r)if(oe=r[Ye],r.hasOwnProperty(Ye)&&oe!=null&&!l.hasOwnProperty(Ye))switch(Ye){case"selected":t.selected=!1;break;default:tn(t,i,Ye,null,l,oe)}for(I in l)if(oe=l[I],de=r[I],l.hasOwnProperty(I)&&oe!==de&&(oe!=null||de!=null))switch(I){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:tn(t,i,I,oe,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in r)oe=r[ht],r.hasOwnProperty(ht)&&oe!=null&&!l.hasOwnProperty(ht)&&tn(t,i,ht,null,l,oe);for(ie in l)if(oe=l[ie],de=r[ie],l.hasOwnProperty(ie)&&oe!==de&&(oe!=null||de!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,i));break;default:tn(t,i,ie,oe,l,de)}return;default:if(vi(i)){for(var nn in r)oe=r[nn],r.hasOwnProperty(nn)&&oe!==void 0&&!l.hasOwnProperty(nn)&&vh(t,i,nn,void 0,l,oe);for(ge in l)oe=l[ge],de=r[ge],!l.hasOwnProperty(ge)||oe===de||oe===void 0&&de===void 0||vh(t,i,ge,oe,l,de);return}}for(var Z in r)oe=r[Z],r.hasOwnProperty(Z)&&oe!=null&&!l.hasOwnProperty(Z)&&tn(t,i,Z,null,l,oe);for(be in l)oe=l[be],de=r[be],!l.hasOwnProperty(be)||oe===de||oe==null&&de==null||tn(t,i,be,oe,l,de)}function c_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function k1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],h=f.transferSize,b=f.initiatorType,T=f.duration;if(h&&T&&c_(b)){for(b=0,T=f.responseEnd,l+=1;l<r.length;l++){var I=r[l],ie=I.startTime;if(ie>T)break;var ge=I.transferSize,be=I.initiatorType;ge&&c_(be)&&(I=I.responseEnd,b+=ge*(I<T?1:(T-ie)/(I-ie)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bh=null,yh=null;function _u(t){return t.nodeType===9?t:t.ownerDocument}function u_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Sh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mh=null;function X1(){var t=window.event;return t&&t.type==="popstate"?t===Mh?!1:(Mh=t,!0):(Mh=null,!1)}var d_=typeof setTimeout=="function"?setTimeout:void 0,W1=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,q1=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(t){return h_.resolve(null).then(t).catch(Y1)}:d_;function Y1(t){setTimeout(function(){throw t})}function Cr(t){return t==="head"}function p_(t,i){var r=i,l=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(f),po(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ll(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ll(r);for(var h=r.firstChild;h;){var b=h.nextSibling,T=h.nodeName;h[Pa]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=b}}else r==="body"&&Ll(t.ownerDocument.body);r=f}while(r);po(i)}function m_(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function Eh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Eh(r),$r(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Z1(t,i,r,l){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Pa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=ta(t.nextSibling),t===null)break}return null}function $1(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=ta(t.nextSibling),t===null))return null;return t}function g_(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=ta(t.nextSibling),t===null))return null;return t}function Th(t){return t.data==="$?"||t.data==="$~"}function Ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function K1(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ta(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var wh=null;function x_(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return ta(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function __(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function v_(t,i,r){switch(i=_u(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ll(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);$r(t)}var na=new Map,b_=new Set;function vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qa=Y.d;Y.d={f:Q1,r:J1,D:ey,C:ty,L:ny,m:iy,X:ry,S:ay,M:sy};function Q1(){var t=Qa.f(),i=uu();return t||i}function J1(t){var i=w(t);i!==null&&i.tag===5&&i.type==="form"?Ig(i):Qa.r(t)}var uo=typeof document>"u"?null:document;function y_(t,i,r){var l=uo;if(l&&typeof i=="string"&&i){var f=vt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),b_.has(f)||(b_.add(f),t={rel:t,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),ri(i,"link",t),te(i),l.head.appendChild(i)))}}function ey(t){Qa.D(t),y_("dns-prefetch",t,null)}function ty(t,i){Qa.C(t,i),y_("preconnect",t,i)}function ny(t,i,r){Qa.L(t,i,r);var l=uo;if(l&&t&&i){var f='link[rel="preload"][as="'+vt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+vt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+vt(r.imageSizes)+'"]')):f+='[href="'+vt(t)+'"]';var h=f;switch(i){case"style":h=fo(t);break;case"script":h=ho(t)}na.has(h)||(t=x({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),na.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Ol(h))||i==="script"&&l.querySelector(Nl(h))||(i=l.createElement("link"),ri(i,"link",t),te(i),l.head.appendChild(i)))}}function iy(t,i){Qa.m(t,i);var r=uo;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+vt(l)+'"][href="'+vt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ho(t)}if(!na.has(h)&&(t=x({rel:"modulepreload",href:t},i),na.set(h,t),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Nl(h)))return}l=r.createElement("link"),ri(l,"link",t),te(l),r.head.appendChild(l)}}}function ay(t,i,r){Qa.S(t,i,r);var l=uo;if(l&&t){var f=se(l).hoistableStyles,h=fo(t);i=i||"default";var b=f.get(h);if(!b){var T={loading:0,preload:null};if(b=l.querySelector(Ol(h)))T.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},r),(r=na.get(h))&&Rh(t,r);var I=b=l.createElement("link");te(I),ri(I,"link",t),I._p=new Promise(function(ie,ge){I.onload=ie,I.onerror=ge}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,bu(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:T},f.set(h,b)}}}function ry(t,i){Qa.X(t,i);var r=uo;if(r&&t){var l=se(r).hoistableScripts,f=ho(t),h=l.get(f);h||(h=r.querySelector(Nl(f)),h||(t=x({src:t,async:!0},i),(i=na.get(f))&&Ch(t,i),h=r.createElement("script"),te(h),ri(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function sy(t,i){Qa.M(t,i);var r=uo;if(r&&t){var l=se(r).hoistableScripts,f=ho(t),h=l.get(f);h||(h=r.querySelector(Nl(f)),h||(t=x({src:t,async:!0,type:"module"},i),(i=na.get(f))&&Ch(t,i),h=r.createElement("script"),te(h),ri(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function S_(t,i,r,l){var f=(f=J.current)?vu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=fo(r.href),r=se(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=fo(r.href);var h=se(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(Ol(t)))&&!h._p&&(b.instance=h,b.state.loading=5),na.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},na.set(t,r),h||oy(f,t,r,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ho(r),r=se(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function fo(t){return'href="'+vt(t)+'"'}function Ol(t){return'link[rel="stylesheet"]['+t+"]"}function M_(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function oy(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ri(i,"link",r),te(i),t.head.appendChild(i))}function ho(t){return'[src="'+vt(t)+'"]'}function Nl(t){return"script[async]"+t}function E_(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+vt(r.href)+'"]');if(l)return i.instance=l,te(l),l;var f=x({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),te(l),ri(l,"style",f),bu(l,r.precedence,t),i.instance=l;case"stylesheet":f=fo(r.href);var h=t.querySelector(Ol(f));if(h)return i.state.loading|=4,i.instance=h,te(h),h;l=M_(r),(f=na.get(f))&&Rh(l,f),h=(t.ownerDocument||t).createElement("link"),te(h);var b=h;return b._p=new Promise(function(T,I){b.onload=T,b.onerror=I}),ri(h,"link",l),i.state.loading|=4,bu(h,r.precedence,t),i.instance=h;case"script":return h=ho(r.src),(f=t.querySelector(Nl(h)))?(i.instance=f,te(f),f):(l=r,(f=na.get(h))&&(l=x({},r),Ch(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),te(f),ri(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,bu(l,r.precedence,t));return i.instance}function bu(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var T=l[b];if(T.dataset.precedence===i)h=T;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Rh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Ch(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var yu=null;function T_(t,i,r){if(yu===null){var l=new Map,f=yu=new Map;f.set(r,l)}else f=yu,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var h=r[f];if(!(h[Pa]||h[bn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var T=l.get(b);T?T.push(h):l.set(b,[h])}}return l}function A_(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function ly(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function w_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cy(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=fo(l.href),h=i.querySelector(Ol(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Su.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=h,te(h);return}h=i.ownerDocument||i,l=M_(l),(f=na.get(f))&&Rh(l,f),h=h.createElement("link"),te(h);var b=h;b._p=new Promise(function(T,I){b.onload=T,b.onerror=I}),ri(h,"link",l),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Su.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Dh=0;function uy(t,i){return t.stylesheets&&t.count===0&&Eu(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&Eu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Dh===0&&(Dh=62500*k1());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Eu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Dh?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Eu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mu=null;function Eu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mu=new Map,i.forEach(fy,t),Mu=null,Su.call(t))}function fy(t,i){if(!(i.state.loading&4)){var r=Mu.get(t);if(r)var l=r.get(null);else{r=new Map,Mu.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),l=b)}l&&r.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=r.get(b)||l,h===l&&r.set(null,f),r.set(b,f),this.count++,l=Su.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Pl={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function dy(t,i,r,l,f,h,b,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lt(0),this.hiddenUpdates=lt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function R_(t,i,r,l,f,h,b,T,I,ie,ge,be){return t=new dy(t,i,r,b,I,ie,ge,be,T),i=1,h===!0&&(i|=24),h=zi(3,null,null,i),t.current=h,h.stateNode=t,i=cd(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:r,cache:i},hd(h),t}function C_(t){return t?(t=js,t):js}function D_(t,i,r,l,f,h){f=C_(f),l.context===null?l.context=f:l.pendingContext=f,l=_r(i),l.payload={element:r},h=h===void 0?null:h,h!==null&&(l.callback=h),r=vr(t,l,i),r!==null&&(Ai(r,t,i),hl(r,t,i))}function U_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Uh(t,i){U_(t,i),(t=t.alternate)&&U_(t,i)}function L_(t){if(t.tag===13||t.tag===31){var i=ts(t,67108864);i!==null&&Ai(i,t,67108864),Uh(t,67108864)}}function O_(t){if(t.tag===13||t.tag===31){var i=Gi();i=Jn(i);var r=ts(t,i);r!==null&&Ai(r,t,i),Uh(t,i)}}var Tu=!0;function hy(t,i,r,l){var f=N.T;N.T=null;var h=Y.p;try{Y.p=2,Lh(t,i,r,l)}finally{Y.p=h,N.T=f}}function py(t,i,r,l){var f=N.T;N.T=null;var h=Y.p;try{Y.p=8,Lh(t,i,r,l)}finally{Y.p=h,N.T=f}}function Lh(t,i,r,l){if(Tu){var f=Oh(l);if(f===null)_h(t,i,l,Au,r),P_(t,l);else if(gy(f,t,i,r,l))l.stopPropagation();else if(P_(t,l),i&4&&-1<my.indexOf(t)){for(;f!==null;){var h=w(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Ee(h.pendingLanes);if(b!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var I=1<<31-qe(b);T.entanglements[1]|=I,b&=~I}Ra(h),(Zt&6)===0&&(lu=M()+500,Cl(0))}}break;case 31:case 13:T=ts(h,2),T!==null&&Ai(T,h,2),uu(),Uh(h,2)}if(h=Oh(l),h===null&&_h(t,i,l,Au,r),h===f)break;f=h}f!==null&&l.stopPropagation()}else _h(t,i,l,null,r)}}function Oh(t){return t=ti(t),Nh(t)}var Au=null;function Nh(t){if(Au=null,t=Ma(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=d(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Au=t,null}function N_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case ve:return 2;case ye:return 8;case he:case et:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var Ph=!1,Dr=null,Ur=null,Lr=null,zl=new Map,Il=new Map,Or=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(t,i){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":zl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(i.pointerId)}}function Bl(t,i,r,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=w(i),i!==null&&L_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function gy(t,i,r,l,f){switch(i){case"focusin":return Dr=Bl(Dr,t,i,r,l,f),!0;case"dragenter":return Ur=Bl(Ur,t,i,r,l,f),!0;case"mouseover":return Lr=Bl(Lr,t,i,r,l,f),!0;case"pointerover":var h=f.pointerId;return zl.set(h,Bl(zl.get(h)||null,t,i,r,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Il.set(h,Bl(Il.get(h)||null,t,i,r,l,f)),!0}return!1}function z_(t){var i=Ma(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,_i(t.priority,function(){O_(r)});return}}else if(i===31){if(i=d(r),i!==null){t.blockedOn=i,_i(t.priority,function(){O_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Oh(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Ni=l,r.target.dispatchEvent(l),Ni=null}else return i=w(r),i!==null&&L_(i),t.blockedOn=r,!1;i.shift()}return!0}function I_(t,i,r){wu(t)&&r.delete(i)}function xy(){Ph=!1,Dr!==null&&wu(Dr)&&(Dr=null),Ur!==null&&wu(Ur)&&(Ur=null),Lr!==null&&wu(Lr)&&(Lr=null),zl.forEach(I_),Il.forEach(I_)}function Ru(t,i){t.blockedOn===i&&(t.blockedOn=null,Ph||(Ph=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,xy)))}var Cu=null;function B_(t){Cu!==t&&(Cu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Cu===t&&(Cu=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Nh(l||r)===null)continue;break}var h=w(r);h!==null&&(t.splice(i,3),i-=3,Od(h,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function po(t){function i(I){return Ru(I,t)}Dr!==null&&Ru(Dr,t),Ur!==null&&Ru(Ur,t),Lr!==null&&Ru(Lr,t),zl.forEach(i),Il.forEach(i);for(var r=0;r<Or.length;r++){var l=Or[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Or.length&&(r=Or[0],r.blockedOn===null);)z_(r),r.blockedOn===null&&Or.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],h=r[l+1],b=f[Sn]||null;if(typeof h=="function")b||B_(r);else if(b){var T=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[Sn]||null)T=b.formAction;else if(Nh(f)!==null)continue}else T=b.action;typeof T=="function"?r[l+1]=T:(r.splice(l,3),l-=3),B_(r)}}}function F_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function zh(t){this._internalRoot=t}Du.prototype.render=zh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=Gi();D_(r,l,t,i,null,null)},Du.prototype.unmount=zh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;D_(t.current,2,null,t,null,null),uu(),i[la]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zr();t={blockedOn:null,target:t,priority:i};for(var r=0;r<Or.length&&i!==0&&i<Or[r].priority;r++);Or.splice(r,0,t),r===0&&z_(t)}};var H_=e.version;if(H_!=="19.2.1")throw Error(a(527,H_,"19.2.1"));Y.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var _y={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{Me=Uu.inject(_y),Te=Uu}catch{}}return Gl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,l="",f=qg,h=Yg,b=Zg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=R_(t,1,!1,null,null,r,l,null,f,h,b,F_),t[la]=i.current,xh(t),new zh(i)},Gl.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var l=!1,f="",h=qg,b=Yg,T=Zg,I=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.formState!==void 0&&(I=r.formState)),i=R_(t,1,!0,i,r??null,l,f,I,h,b,T,F_),i.context=C_(null),r=i.current,l=Gi(),l=Jn(l),f=_r(l),f.callback=null,vr(r,f,l),r=l,i.current.lanes=r,fn(i,r),Ra(i),t[la]=i.current,xh(t),new Du(i)},Gl.version="19.2.1",Gl}var uv;function p3(){if(uv)return Wh.exports;uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wh.exports=h3(),Wh.exports}var m3=p3();const g3=F2(m3);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="181",x3=0,fv=1,_3=2,H2=1,v3=2,rr=3,Yr=0,Di=1,ga=2,lr=0,Uo=1,Ts=2,dv=3,hv=4,b3=5,Ss=100,y3=101,S3=102,M3=103,E3=104,T3=200,A3=201,w3=202,R3=203,G0=204,V0=205,C3=206,D3=207,U3=208,L3=209,O3=210,N3=211,P3=212,z3=213,I3=214,j0=0,k0=1,X0=2,Fo=3,W0=4,q0=5,Y0=6,Z0=7,G2=0,B3=1,F3=2,Xr=0,H3=1,G3=2,V3=3,j3=4,k3=5,X3=6,W3=7,V2=300,Ho=301,Go=302,$0=303,K0=304,Nf=306,rc=1e3,Ci=1001,Q0=1002,li=1003,q3=1004,Lu=1005,si=1006,$h=1007,As=1008,Oa=1009,j2=1010,k2=1011,sc=1012,Jp=1013,Ls=1014,sr=1015,Zo=1016,em=1017,tm=1018,oc=1020,X2=35902,W2=35899,q2=1021,Y2=1022,_a=1023,lc=1026,cc=1027,Z2=1028,nm=1029,im=1030,am=1031,rm=1033,af=33776,rf=33777,sf=33778,of=33779,J0=35840,ep=35841,tp=35842,np=35843,ip=36196,ap=37492,rp=37496,sp=37808,op=37809,lp=37810,cp=37811,up=37812,fp=37813,dp=37814,hp=37815,pp=37816,mp=37817,gp=37818,xp=37819,_p=37820,vp=37821,bp=36492,yp=36494,Sp=36495,Mp=36283,Ep=36284,Tp=36285,Ap=36286,Y3=3200,Z3=3201,$3=0,K3=1,Vr="",Ri="srgb",Vo="srgb-linear",_f="linear",an="srgb",mo=7680,pv=519,Q3=512,J3=513,eS=514,$2=515,tS=516,nS=517,iS=518,aS=519,mv=35044,gv="300 es",La=2e3,vf=2001;function K2(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function uc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rS(){const s=uc("canvas");return s.style.display="block",s}const xv={};function _v(...s){const e="THREE."+s.shift();console.log(e,...s)}function St(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Tn(...s){const e="THREE."+s.shift();console.error(e,...s)}function fc(...s){const e=s.join(" ");e in xv||(xv[e]=!0,St(...s))}function sS(s,e,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class $o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=Math.PI/180,wp=180/Math.PI;function bc(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(hi[s&255]+hi[s>>8&255]+hi[s>>16&255]+hi[s>>24&255]+"-"+hi[e&255]+hi[e>>8&255]+"-"+hi[e>>16&15|64]+hi[e>>24&255]+"-"+hi[n&63|128]+hi[n>>8&255]+"-"+hi[n>>16&255]+hi[n>>24&255]+hi[a&255]+hi[a>>8&255]+hi[a>>16&255]+hi[a>>24&255]).toLowerCase()}function Gt(s,e,n){return Math.max(e,Math.min(n,s))}function oS(s,e){return(s%e+e)%e}function Qh(s,e,n){return(1-n)*s+n*e}function Vl(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class jt{constructor(e=0,n=0){jt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Gt(this.x,e.x,n.x),this.y=Gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Gt(this.x,e,n),this.y=Gt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yc{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],x=a[o+3],_=c[u+0],y=c[u+1],E=c[u+2],A=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d>=1){e[n+0]=_,e[n+1]=y,e[n+2]=E,e[n+3]=A;return}if(x!==A||m!==_||p!==y||g!==E){let S=m*_+p*y+g*E+x*A;S<0&&(_=-_,y=-y,E=-E,A=-A,S=-S);let v=1-d;if(S<.9995){const P=Math.acos(S),U=Math.sin(P);v=Math.sin(v*P)/U,d=Math.sin(d*P)/U,m=m*v+_*d,p=p*v+y*d,g=g*v+E*d,x=x*v+A*d}else{m=m*v+_*d,p=p*v+y*d,g=g*v+E*d,x=x*v+A*d;const P=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=P,p*=P,g*=P,x*=P}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],x=c[u],_=c[u+1],y=c[u+2],E=c[u+3];return e[n]=d*E+g*x+m*y-p*_,e[n+1]=m*E+g*_+p*x-d*y,e[n+2]=p*E+g*y+d*_-m*x,e[n+3]=g*E-d*x-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),x=d(c/2),_=m(a/2),y=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=_*g*x+p*y*E,this._y=p*y*x-_*g*E,this._z=p*g*E+_*y*x,this._w=p*g*x-_*y*E;break;case"YXZ":this._x=_*g*x+p*y*E,this._y=p*y*x-_*g*E,this._z=p*g*E-_*y*x,this._w=p*g*x+_*y*E;break;case"ZXY":this._x=_*g*x-p*y*E,this._y=p*y*x+_*g*E,this._z=p*g*E+_*y*x,this._w=p*g*x-_*y*E;break;case"ZYX":this._x=_*g*x-p*y*E,this._y=p*y*x+_*g*E,this._z=p*g*E-_*y*x,this._w=p*g*x+_*y*E;break;case"YZX":this._x=_*g*x+p*y*E,this._y=p*y*x+_*g*E,this._z=p*g*E-_*y*x,this._w=p*g*x-_*y*E;break;case"XZY":this._x=_*g*x-p*y*E,this._y=p*y*x-_*g*E,this._z=p*g*E+_*y*x,this._w=p*g*x+_*y*E;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],x=n[10],_=a+d+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(a>d&&a>x){const y=2*Math.sqrt(1+a-d-x);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-a-x);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-a-d);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,n=0,a=0){fe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),x=2*(c*a-u*n);return this.x=n+m*p+u*x-d*g,this.y=a+m*g+d*p-c*x,this.z=o+m*x+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Gt(this.x,e.x,n.x),this.y=Gt(this.y,e.y,n.y),this.z=Gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Gt(this.x,e,n),this.y=Gt(this.y,e,n),this.z=Gt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Gt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jh=new fe,vv=new yc;class Rt{constructor(e,n,a,o,c,u,d,m,p){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],x=a[7],_=a[2],y=a[5],E=a[8],A=o[0],S=o[3],v=o[6],P=o[1],U=o[4],z=o[7],V=o[2],O=o[5],B=o[8];return c[0]=u*A+d*P+m*V,c[3]=u*S+d*U+m*O,c[6]=u*v+d*z+m*B,c[1]=p*A+g*P+x*V,c[4]=p*S+g*U+x*O,c[7]=p*v+g*z+x*B,c[2]=_*A+y*P+E*V,c[5]=_*S+y*U+E*O,c[8]=_*v+y*z+E*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*u-d*p,_=d*m-g*c,y=p*c-u*m,E=n*x+a*_+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(o*p-g*a)*A,e[2]=(d*a-o*u)*A,e[3]=_*A,e[4]=(g*n-o*m)*A,e[5]=(o*c-d*n)*A,e[6]=y*A,e[7]=(a*m-p*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(e0.makeScale(e,n)),this}rotate(e){return this.premultiply(e0.makeRotation(-e)),this}translate(e,n){return this.premultiply(e0.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const e0=new Rt,bv=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yv=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lS(){const s={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===an&&(o.r=cr(o.r),o.g=cr(o.g),o.b=cr(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===an&&(o.r=Lo(o.r),o.g=Lo(o.g),o.b=Lo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vr?_f:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return fc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return fc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Vo]:{primaries:e,whitePoint:a,transfer:_f,toXYZ:bv,fromXYZ:yv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:a,transfer:an,toXYZ:bv,fromXYZ:yv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),s}const Wt=lS();function cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let go;class cS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{go===void 0&&(go=uc("canvas")),go.width=e.width,go.height=e.height;const o=go.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=go}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uc("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=cr(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(cr(n[a]/255)*255):n[a]=cr(n[a]);return{data:n,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uS=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=bc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(t0(o[u].image)):c.push(t0(o[u]))}else c=t0(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function t0(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}let fS=0;const n0=new fe;class $n extends $o{constructor(e=$n.DEFAULT_IMAGE,n=$n.DEFAULT_MAPPING,a=Ci,o=Ci,c=si,u=As,d=_a,m=Oa,p=$n.DEFAULT_ANISOTROPY,g=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=bc(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(n0).x}get height(){return this.source.getSize(n0).y}get depth(){return this.source.getSize(n0).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){St(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){St(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rc:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Q0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rc:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Q0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=V2;$n.DEFAULT_ANISOTROPY=1;class An{constructor(e=0,n=0,a=0,o=1){An.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],x=m[8],_=m[1],y=m[5],E=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,z=(y+1)/2,V=(v+1)/2,O=(g+_)/4,B=(x+A)/4,re=(E+S)/4;return U>z&&U>V?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=O/a,c=B/a):z>V?z<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(z),a=O/o,c=re/o):V<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(V),a=B/c,o=re/c),this.set(a,o,c,n),this}let P=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(x-A)/P,this.z=(_-g)/P,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Gt(this.x,e.x,n.x),this.y=Gt(this.y,e.y,n.y),this.z=Gt(this.z,e.z,n.z),this.w=Gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Gt(this.x,e,n),this.y=Gt(this.y,e,n),this.z=Gt(this.z,e,n),this.w=Gt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Gt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dS extends $o{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new An(0,0,e,n),this.scissorTest=!1,this.viewport=new An(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new $n(o);this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new sm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends dS{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Q2 extends $n{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hS extends $n{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=li,this.minFilter=li,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sc{constructor(e=new fe(1/0,1/0,1/0),n=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ha.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ha.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ha.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ha):ha.fromBufferAttribute(c,u),ha.applyMatrix4(e.matrixWorld),this.expandByPoint(ha);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ou.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ou.copy(a.boundingBox)),Ou.applyMatrix4(e.matrixWorld),this.union(Ou)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ha),ha.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jl),Nu.subVectors(this.max,jl),xo.subVectors(e.a,jl),_o.subVectors(e.b,jl),vo.subVectors(e.c,jl),Pr.subVectors(_o,xo),zr.subVectors(vo,_o),ms.subVectors(xo,vo);let n=[0,-Pr.z,Pr.y,0,-zr.z,zr.y,0,-ms.z,ms.y,Pr.z,0,-Pr.x,zr.z,0,-zr.x,ms.z,0,-ms.x,-Pr.y,Pr.x,0,-zr.y,zr.x,0,-ms.y,ms.x,0];return!i0(n,xo,_o,vo,Nu)||(n=[1,0,0,0,1,0,0,0,1],!i0(n,xo,_o,vo,Nu))?!1:(Pu.crossVectors(Pr,zr),n=[Pu.x,Pu.y,Pu.z],i0(n,xo,_o,vo,Nu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ha).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ha).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ja[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ja[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ja[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ja[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ja[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ja[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ja[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ja[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ja),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ja=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],ha=new fe,Ou=new Sc,xo=new fe,_o=new fe,vo=new fe,Pr=new fe,zr=new fe,ms=new fe,jl=new fe,Nu=new fe,Pu=new fe,gs=new fe;function i0(s,e,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){gs.fromArray(s,c);const d=o.x*Math.abs(gs.x)+o.y*Math.abs(gs.y)+o.z*Math.abs(gs.z),m=e.dot(gs),p=n.dot(gs),g=a.dot(gs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const pS=new Sc,kl=new fe,a0=new fe;class Mc{constructor(e=new fe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):pS.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kl.subVectors(e,this.center);const n=kl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(kl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(a0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kl.copy(e.center).add(a0)),this.expandByPoint(kl.copy(e.center).sub(a0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const er=new fe,r0=new fe,zu=new fe,Ir=new fe,s0=new fe,Iu=new fe,o0=new fe;class Pf{constructor(e=new fe,n=new fe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=er.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,n),er.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){r0.copy(e).add(n).multiplyScalar(.5),zu.copy(n).sub(e).normalize(),Ir.copy(this.origin).sub(r0);const c=e.distanceTo(n)*.5,u=-this.direction.dot(zu),d=Ir.dot(this.direction),m=-Ir.dot(zu),p=Ir.lengthSq(),g=Math.abs(1-u*u);let x,_,y,E;if(g>0)if(x=u*m-d,_=u*d-m,E=c*g,x>=0)if(_>=-E)if(_<=E){const A=1/g;x*=A,_*=A,y=x*(x+u*_+2*d)+_*(u*x+_+2*m)+p}else _=c,x=Math.max(0,-(u*_+d)),y=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(u*_+d)),y=-x*x+_*(_+2*m)+p;else _<=-E?(x=Math.max(0,-(-u*c+d)),_=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+p):_<=E?(x=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(x=Math.max(0,-(u*c+d)),_=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+_*(_+2*m)+p);else _=u>0?-c:c,x=Math.max(0,-(u*_+d)),y=-x*x+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(r0).addScaledVector(zu,_),y}intersectSphere(e,n){er.subVectors(e.center,this.origin);const a=er.dot(this.direction),o=er.dot(er)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),x>=0?(d=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,n,a,o,c){s0.subVectors(n,e),Iu.subVectors(a,e),o0.crossVectors(s0,Iu);let u=this.direction.dot(o0),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ir.subVectors(this.origin,e);const m=d*this.direction.dot(Iu.crossVectors(Ir,Iu));if(m<0)return null;const p=d*this.direction.dot(s0.cross(Ir));if(p<0||m+p>u)return null;const g=-d*Ir.dot(o0);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,n,a,o,c,u,d,m,p,g,x,_,y,E,A,S){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,x,_,y,E,A,S)}set(e,n,a,o,c,u,d,m,p,g,x,_,y,E,A,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=u,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=y,v[7]=E,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/bo.setFromMatrixColumn(e,0).length(),c=1/bo.setFromMatrixColumn(e,1).length(),u=1/bo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const _=u*g,y=u*x,E=d*g,A=d*x;n[0]=m*g,n[4]=-m*x,n[8]=p,n[1]=y+E*p,n[5]=_-A*p,n[9]=-d*m,n[2]=A-_*p,n[6]=E+y*p,n[10]=u*m}else if(e.order==="YXZ"){const _=m*g,y=m*x,E=p*g,A=p*x;n[0]=_+A*d,n[4]=E*d-y,n[8]=u*p,n[1]=u*x,n[5]=u*g,n[9]=-d,n[2]=y*d-E,n[6]=A+_*d,n[10]=u*m}else if(e.order==="ZXY"){const _=m*g,y=m*x,E=p*g,A=p*x;n[0]=_-A*d,n[4]=-u*x,n[8]=E+y*d,n[1]=y+E*d,n[5]=u*g,n[9]=A-_*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const _=u*g,y=u*x,E=d*g,A=d*x;n[0]=m*g,n[4]=E*p-y,n[8]=_*p+A,n[1]=m*x,n[5]=A*p+_,n[9]=y*p-E,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const _=u*m,y=u*p,E=d*m,A=d*p;n[0]=m*g,n[4]=A-_*x,n[8]=E*x+y,n[1]=x,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*x+E,n[10]=_-A*x}else if(e.order==="XZY"){const _=u*m,y=u*p,E=d*m,A=d*p;n[0]=m*g,n[4]=-x,n[8]=p*g,n[1]=_*x+A,n[5]=u*g,n[9]=y*x-E,n[2]=E*x-y,n[6]=d*g,n[10]=A*x+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mS,e,gS)}lookAt(e,n,a){const o=this.elements;return Vi.subVectors(e,n),Vi.lengthSq()===0&&(Vi.z=1),Vi.normalize(),Br.crossVectors(a,Vi),Br.lengthSq()===0&&(Math.abs(a.z)===1?Vi.x+=1e-4:Vi.z+=1e-4,Vi.normalize(),Br.crossVectors(a,Vi)),Br.normalize(),Bu.crossVectors(Vi,Br),o[0]=Br.x,o[4]=Bu.x,o[8]=Vi.x,o[1]=Br.y,o[5]=Bu.y,o[9]=Vi.y,o[2]=Br.z,o[6]=Bu.z,o[10]=Vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],x=a[5],_=a[9],y=a[13],E=a[2],A=a[6],S=a[10],v=a[14],P=a[3],U=a[7],z=a[11],V=a[15],O=o[0],B=o[4],re=o[8],C=o[12],R=o[1],k=o[5],ae=o[9],ce=o[13],pe=o[2],K=o[6],N=o[10],Y=o[14],X=o[3],ue=o[7],me=o[11],D=o[15];return c[0]=u*O+d*R+m*pe+p*X,c[4]=u*B+d*k+m*K+p*ue,c[8]=u*re+d*ae+m*N+p*me,c[12]=u*C+d*ce+m*Y+p*D,c[1]=g*O+x*R+_*pe+y*X,c[5]=g*B+x*k+_*K+y*ue,c[9]=g*re+x*ae+_*N+y*me,c[13]=g*C+x*ce+_*Y+y*D,c[2]=E*O+A*R+S*pe+v*X,c[6]=E*B+A*k+S*K+v*ue,c[10]=E*re+A*ae+S*N+v*me,c[14]=E*C+A*ce+S*Y+v*D,c[3]=P*O+U*R+z*pe+V*X,c[7]=P*B+U*k+z*K+V*ue,c[11]=P*re+U*ae+z*N+V*me,c[15]=P*C+U*ce+z*Y+V*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],_=e[10],y=e[14],E=e[3],A=e[7],S=e[11],v=e[15];return E*(+c*m*x-o*p*x-c*d*_+a*p*_+o*d*y-a*m*y)+A*(+n*m*y-n*p*_+c*u*_-o*u*y+o*p*g-c*m*g)+S*(+n*p*x-n*d*y-c*u*x+a*u*y+c*d*g-a*p*g)+v*(-o*d*g-n*m*x+n*d*_+o*u*x-a*u*_+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],_=e[10],y=e[11],E=e[12],A=e[13],S=e[14],v=e[15],P=x*S*p-A*_*p+A*m*y-d*S*y-x*m*v+d*_*v,U=E*_*p-g*S*p-E*m*y+u*S*y+g*m*v-u*_*v,z=g*A*p-E*x*p+E*d*y-u*A*y-g*d*v+u*x*v,V=E*x*m-g*A*m-E*d*_+u*A*_+g*d*S-u*x*S,O=n*P+a*U+o*z+c*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=P*B,e[1]=(A*_*c-x*S*c-A*o*y+a*S*y+x*o*v-a*_*v)*B,e[2]=(d*S*c-A*m*c+A*o*p-a*S*p-d*o*v+a*m*v)*B,e[3]=(x*m*c-d*_*c-x*o*p+a*_*p+d*o*y-a*m*y)*B,e[4]=U*B,e[5]=(g*S*c-E*_*c+E*o*y-n*S*y-g*o*v+n*_*v)*B,e[6]=(E*m*c-u*S*c-E*o*p+n*S*p+u*o*v-n*m*v)*B,e[7]=(u*_*c-g*m*c+g*o*p-n*_*p-u*o*y+n*m*y)*B,e[8]=z*B,e[9]=(E*x*c-g*A*c-E*a*y+n*A*y+g*a*v-n*x*v)*B,e[10]=(u*A*c-E*d*c+E*a*p-n*A*p-u*a*v+n*d*v)*B,e[11]=(g*d*c-u*x*c-g*a*p+n*x*p+u*a*y-n*d*y)*B,e[12]=V*B,e[13]=(g*A*o-E*x*o+E*a*_-n*A*_-g*a*S+n*x*S)*B,e[14]=(E*d*o-u*A*o-E*a*m+n*A*m+u*a*S-n*d*S)*B,e[15]=(u*x*o-g*d*o+g*a*m-n*x*m-u*a*_+n*d*_)*B,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,x=d+d,_=c*p,y=c*g,E=c*x,A=u*g,S=u*x,v=d*x,P=m*p,U=m*g,z=m*x,V=a.x,O=a.y,B=a.z;return o[0]=(1-(A+v))*V,o[1]=(y+z)*V,o[2]=(E-U)*V,o[3]=0,o[4]=(y-z)*O,o[5]=(1-(_+v))*O,o[6]=(S+P)*O,o[7]=0,o[8]=(E+U)*B,o[9]=(S-P)*B,o[10]=(1-(_+A))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=bo.set(o[0],o[1],o[2]).length();const u=bo.set(o[4],o[5],o[6]).length(),d=bo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],pa.copy(this);const p=1/c,g=1/u,x=1/d;return pa.elements[0]*=p,pa.elements[1]*=p,pa.elements[2]*=p,pa.elements[4]*=g,pa.elements[5]*=g,pa.elements[6]*=g,pa.elements[8]*=x,pa.elements[9]*=x,pa.elements[10]*=x,n.setFromRotationMatrix(pa),a.x=c,a.y=u,a.z=d,this}makePerspective(e,n,a,o,c,u,d=La,m=!1){const p=this.elements,g=2*c/(n-e),x=2*c/(a-o),_=(n+e)/(n-e),y=(a+o)/(a-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(d===La)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===vf)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=La,m=!1){const p=this.elements,g=2/(n-e),x=2/(a-o),_=-(n+e)/(n-e),y=-(a+o)/(a-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(d===La)E=-2/(u-c),A=-(u+c)/(u-c);else if(d===vf)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const bo=new fe,pa=new pn,mS=new fe(0,0,0),gS=new fe(1,1,1),Br=new fe,Bu=new fe,Vi=new fe,Sv=new pn,Mv=new yc;class fr{constructor(e=0,n=0,a=0,o=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],x=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Gt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return Sv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mv.setFromEuler(this),this.setFromQuaternion(Mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xS=0;const Ev=new fe,yo=new yc,tr=new pn,Fu=new fe,Xl=new fe,_S=new fe,vS=new yc,Tv=new fe(1,0,0),Av=new fe(0,1,0),wv=new fe(0,0,1),Rv={type:"added"},bS={type:"removed"},So={type:"childadded",child:null},l0={type:"childremoved",child:null};class Vn extends $o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=bc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new fe,n=new fr,a=new yc,o=new fe(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new Rt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yo.setFromAxisAngle(e,n),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,n){return yo.setFromAxisAngle(e,n),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(Tv,e)}rotateY(e){return this.rotateOnAxis(Av,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,n){return Ev.copy(e).applyQuaternion(this.quaternion),this.position.add(Ev.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tv,e)}translateY(e){return this.translateOnAxis(Av,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Fu.copy(e):Fu.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Xl,Fu,this.up):tr.lookAt(Fu,Xl,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),yo.setFromRotationMatrix(tr),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Tn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rv),So.child=e,this.dispatchEvent(So),So.child=null):Tn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bS),l0.child=e,this.dispatchEvent(l0),l0.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rv),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,e,_S),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,vS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),x=u(e.shapes),_=u(e.skeletons),y=u(e.animations),E=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Vn.DEFAULT_UP=new fe(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ma=new fe,nr=new fe,c0=new fe,ir=new fe,Mo=new fe,Eo=new fe,Cv=new fe,u0=new fe,f0=new fe,d0=new fe,h0=new An,p0=new An,m0=new An;class xa{constructor(e=new fe,n=new fe,a=new fe){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),ma.subVectors(e,n),o.cross(ma);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){ma.subVectors(o,n),nr.subVectors(a,n),c0.subVectors(e,n);const u=ma.dot(ma),d=ma.dot(nr),m=ma.dot(c0),p=nr.dot(nr),g=nr.dot(c0),x=u*p-d*d;if(x===0)return c.set(0,0,0),null;const _=1/x,y=(p*m-d*g)*_,E=(u*g-d*m)*_;return c.set(1-y-E,E,y)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,ir)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ir.x),m.addScaledVector(u,ir.y),m.addScaledVector(d,ir.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return h0.setScalar(0),p0.setScalar(0),m0.setScalar(0),h0.fromBufferAttribute(e,n),p0.fromBufferAttribute(e,a),m0.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(h0,c.x),u.addScaledVector(p0,c.y),u.addScaledVector(m0,c.z),u}static isFrontFacing(e,n,a,o){return ma.subVectors(a,n),nr.subVectors(e,n),ma.cross(nr).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ma.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),ma.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xa.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return xa.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return xa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;Mo.subVectors(o,a),Eo.subVectors(c,a),u0.subVectors(e,a);const m=Mo.dot(u0),p=Eo.dot(u0);if(m<=0&&p<=0)return n.copy(a);f0.subVectors(e,o);const g=Mo.dot(f0),x=Eo.dot(f0);if(g>=0&&x<=g)return n.copy(o);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(Mo,u);d0.subVectors(e,c);const y=Mo.dot(d0),E=Eo.dot(d0);if(E>=0&&y<=E)return n.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(a).addScaledVector(Eo,d);const S=g*E-y*x;if(S<=0&&x-g>=0&&y-E>=0)return Cv.subVectors(c,o),d=(x-g)/(x-g+(y-E)),n.copy(o).addScaledVector(Cv,d);const v=1/(S+A+_);return u=A*v,d=_*v,n.copy(a).addScaledVector(Mo,u).addScaledVector(Eo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Hu={h:0,s:0,l:0};function g0(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Tt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Wt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Wt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Wt.workingColorSpace){if(e=oS(e,1),n=Gt(n,0,1),a=Gt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=g0(u,c,e+1/3),this.g=g0(u,c,e),this.b=g0(u,c,e-1/3)}return Wt.colorSpaceToWorking(this,o),this}setStyle(e,n=Ri){function a(c){c!==void 0&&parseFloat(c)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:St("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ri){const a=J2[e.toLowerCase()];return a!==void 0?this.setHex(a,n):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Wt.workingToColorSpace(pi.copy(this),e),Math.round(Gt(pi.r*255,0,255))*65536+Math.round(Gt(pi.g*255,0,255))*256+Math.round(Gt(pi.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Wt.workingColorSpace){Wt.workingToColorSpace(pi.copy(this),n);const a=pi.r,o=pi.g,c=pi.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const x=u-d;switch(p=g<=.5?x/(u+d):x/(2-u-d),u){case a:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-a)/x+2;break;case c:m=(a-o)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Wt.workingColorSpace){return Wt.workingToColorSpace(pi.copy(this),n),e.r=pi.r,e.g=pi.g,e.b=pi.b,e}getStyle(e=Ri){Wt.workingToColorSpace(pi.copy(this),e);const n=pi.r,a=pi.g,o=pi.b;return e!==Ri?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+n,Fr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Fr),e.getHSL(Hu);const a=Qh(Fr.h,Hu.h,n),o=Qh(Fr.s,Hu.s,n),c=Qh(Fr.l,Hu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pi=new Tt;Tt.NAMES=J2;let yS=0;class Ko extends $o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=bc(),this.name="",this.type="Material",this.blending=Uo,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=G0,this.blendDst=V0,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){St(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){St(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(a.blending=this.blending),this.side!==Yr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==G0&&(a.blendSrc=this.blendSrc),this.blendDst!==V0&&(a.blendDst=this.blendDst),this.blendEquation!==Ss&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ki extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=G2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const In=new fe,Gu=new jt;let SS=0;class Bn{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=mv,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Gu.fromBufferAttribute(this,n),Gu.applyMatrix3(e),this.setXY(n,Gu.x,Gu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyMatrix3(e),this.setXYZ(n,In.x,In.y,In.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyMatrix4(e),this.setXYZ(n,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.applyNormalMatrix(e),this.setXYZ(n,In.x,In.y,In.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)In.fromBufferAttribute(this,n),In.transformDirection(e),this.setXYZ(n,In.x,In.y,In.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Vl(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=wi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vl(n,this.array)),n}setX(e,n){return this.normalized&&(n=wi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vl(n,this.array)),n}setY(e,n){return this.normalized&&(n=wi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vl(n,this.array)),n}setW(e,n){return this.normalized&&(n=wi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=wi(n,this.array),a=wi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=wi(n,this.array),a=wi(a,this.array),o=wi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=wi(n,this.array),a=wi(a,this.array),o=wi(o,this.array),c=wi(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mv&&(e.usage=this.usage),e}}class eb extends Bn{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class tb extends Bn{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class ur extends Bn{constructor(e,n,a){super(new Float32Array(e),n,a)}}let MS=0;const ia=new pn,x0=new Vn,To=new fe,ji=new Sc,Wl=new Sc,Yn=new fe;class Xi extends $o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=bc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K2(e)?tb:eb)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Rt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ia.makeRotationFromQuaternion(e),this.applyMatrix4(ia),this}rotateX(e){return ia.makeRotationX(e),this.applyMatrix4(ia),this}rotateY(e){return ia.makeRotationY(e),this.applyMatrix4(ia),this}rotateZ(e){return ia.makeRotationZ(e),this.applyMatrix4(ia),this}translate(e,n,a){return ia.makeTranslation(e,n,a),this.applyMatrix4(ia),this}scale(e,n,a){return ia.makeScale(e,n,a),this.applyMatrix4(ia),this}lookAt(e){return x0.lookAt(e),x0.updateMatrix(),this.applyMatrix4(x0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ur(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ji.setFromBufferAttribute(c),this.morphTargetsRelative?(Yn.addVectors(this.boundingBox.min,ji.min),this.boundingBox.expandByPoint(Yn),Yn.addVectors(this.boundingBox.max,ji.max),this.boundingBox.expandByPoint(Yn)):(this.boundingBox.expandByPoint(ji.min),this.boundingBox.expandByPoint(ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const a=this.boundingSphere.center;if(ji.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Wl.setFromBufferAttribute(d),this.morphTargetsRelative?(Yn.addVectors(ji.min,Wl.min),ji.expandByPoint(Yn),Yn.addVectors(ji.max,Wl.max),ji.expandByPoint(Yn)):(ji.expandByPoint(Wl.min),ji.expandByPoint(Wl.max))}ji.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Yn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Yn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Yn.fromBufferAttribute(d,p),m&&(To.fromBufferAttribute(e,p),Yn.add(To)),o=Math.max(o,a.distanceToSquared(Yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Tn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let re=0;re<a.count;re++)d[re]=new fe,m[re]=new fe;const p=new fe,g=new fe,x=new fe,_=new jt,y=new jt,E=new jt,A=new fe,S=new fe;function v(re,C,R){p.fromBufferAttribute(a,re),g.fromBufferAttribute(a,C),x.fromBufferAttribute(a,R),_.fromBufferAttribute(c,re),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,R),g.sub(p),x.sub(p),y.sub(_),E.sub(_);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(k),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),d[re].add(A),d[C].add(A),d[R].add(A),m[re].add(S),m[C].add(S),m[R].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let re=0,C=P.length;re<C;++re){const R=P[re],k=R.start,ae=R.count;for(let ce=k,pe=k+ae;ce<pe;ce+=3)v(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const U=new fe,z=new fe,V=new fe,O=new fe;function B(re){V.fromBufferAttribute(o,re),O.copy(V);const C=d[re];U.copy(C),U.sub(V.multiplyScalar(V.dot(C))).normalize(),z.crossVectors(O,C);const k=z.dot(m[re])<0?-1:1;u.setXYZW(re,U.x,U.y,U.z,k)}for(let re=0,C=P.length;re<C;++re){const R=P[re],k=R.start,ae=R.count;for(let ce=k,pe=k+ae;ce<pe;ce+=3)B(e.getX(ce+0)),B(e.getX(ce+1)),B(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,y=a.count;_<y;_++)a.setXYZ(_,0,0,0);const o=new fe,c=new fe,u=new fe,d=new fe,m=new fe,p=new fe,g=new fe,x=new fe;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),A=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),d.fromBufferAttribute(a,E),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,S),d.add(g),m.add(g),p.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Yn.fromBufferAttribute(e,n),Yn.normalize(),e.setXYZ(n,Yn.x,Yn.y,Yn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,_=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let v=0;v<g;v++)_[E++]=p[y++]}return new Bn(_,g,x)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xi,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const _=p[g],y=e(_,a);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const y=p[x];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,y=x.length;_<y;_++)g.push(x[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dv=new pn,xs=new Pf,Vu=new Mc,Uv=new fe,ju=new fe,ku=new fe,Xu=new fe,_0=new fe,Wu=new fe,Lv=new fe,qu=new fe;class _n extends Vn{constructor(e=new Xi,n=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Wu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&(_0.fromBufferAttribute(x,e),u?Wu.addScaledVector(_0,g):Wu.addScaledVector(_0.sub(n),g))}n.add(Wu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Vu.copy(a.boundingSphere),Vu.applyMatrix4(c),xs.copy(e.ray).recast(e.near),!(Vu.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Vu,Uv)===null||xs.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Dv.copy(c).invert(),xs.copy(e.ray).applyMatrix4(Dv),!(a.boundingBox!==null&&xs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,xs)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const S=_[E],v=u[S.materialIndex],P=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let z=P,V=U;z<V;z+=3){const O=d.getX(z),B=d.getX(z+1),re=d.getX(z+2);o=Yu(this,v,e,a,p,g,x,O,B,re),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,v=A;S<v;S+=3){const P=d.getX(S),U=d.getX(S+1),z=d.getX(S+2);o=Yu(this,u,e,a,p,g,x,P,U,z),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const S=_[E],v=u[S.materialIndex],P=Math.max(S.start,y.start),U=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let z=P,V=U;z<V;z+=3){const O=z,B=z+1,re=z+2;o=Yu(this,v,e,a,p,g,x,O,B,re),o&&(o.faceIndex=Math.floor(z/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,v=A;S<v;S+=3){const P=S,U=S+1,z=S+2;o=Yu(this,u,e,a,p,g,x,P,U,z),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function ES(s,e,n,a,o,c,u,d){let m;if(e.side===Di?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Yr,d),m===null)return null;qu.copy(d),qu.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(qu);return p<n.near||p>n.far?null:{distance:p,point:qu.clone(),object:s}}function Yu(s,e,n,a,o,c,u,d,m,p){s.getVertexPosition(d,ju),s.getVertexPosition(m,ku),s.getVertexPosition(p,Xu);const g=ES(s,e,n,a,ju,ku,Xu,Lv);if(g){const x=new fe;xa.getBarycoord(Lv,ju,ku,Xu,x),o&&(g.uv=xa.getInterpolatedAttribute(o,d,m,p,x,new jt)),c&&(g.uv1=xa.getInterpolatedAttribute(c,d,m,p,x,new jt)),u&&(g.normal=xa.getInterpolatedAttribute(u,d,m,p,x,new fe),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new fe,materialIndex:0};xa.getNormal(ju,ku,Xu,_.normal),g.face=_,g.barycoord=x}return g}class Ec extends Xi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],x=[];let _=0,y=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,o,u,2),E("x","z","y",1,-1,e,a,-n,o,u,3),E("x","y","z",1,-1,e,n,a,o,c,4),E("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new ur(p,3)),this.setAttribute("normal",new ur(g,3)),this.setAttribute("uv",new ur(x,2));function E(A,S,v,P,U,z,V,O,B,re,C){const R=z/B,k=V/re,ae=z/2,ce=V/2,pe=O/2,K=B+1,N=re+1;let Y=0,X=0;const ue=new fe;for(let me=0;me<N;me++){const D=me*k-ce;for(let Q=0;Q<K;Q++){const xe=Q*R-ae;ue[A]=xe*P,ue[S]=D*U,ue[v]=pe,p.push(ue.x,ue.y,ue.z),ue[A]=0,ue[S]=0,ue[v]=O>0?1:-1,g.push(ue.x,ue.y,ue.z),x.push(Q/B),x.push(1-me/re),Y+=1}}for(let me=0;me<re;me++)for(let D=0;D<B;D++){const Q=_+D+K*me,xe=_+D+K*(me+1),Se=_+(D+1)+K*(me+1),De=_+(D+1)+K*me;m.push(Q,xe,De),m.push(xe,Se,De),X+=6}d.addGroup(y,X,C),y+=X,_+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jo(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function xi(s){const e={};for(let n=0;n<s.length;n++){const a=jo(s[n]);for(const o in a)e[o]=a[o]}return e}function TS(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function nb(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const AS={clone:jo,merge:xi};var wS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=TS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class ib extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=La,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new fe,Ov=new jt,Nv=new jt;class aa extends ib{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(Kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,n){return this.getViewBounds(e,Ov,Nv),n.subVectors(Nv,Ov)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Kh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ao=-90,wo=1;class CS extends Vn{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new aa(Ao,wo,e,n);o.layers=this.layers,this.add(o);const c=new aa(Ao,wo,e,n);c.layers=this.layers,this.add(c);const u=new aa(Ao,wo,e,n);u.layers=this.layers,this.add(u);const d=new aa(Ao,wo,e,n);d.layers=this.layers,this.add(d);const m=new aa(Ao,wo,e,n);m.layers=this.layers,this.add(m);const p=new aa(Ao,wo,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===La)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===vf)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(x,_,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class ab extends $n{constructor(e=[],n=Ho,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DS extends Os{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new ab(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ec(5,5,5),c=new oi({name:"CubemapFromEquirect",uniforms:jo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Di,blending:lr});c.uniforms.tEquirect.value=n;const u=new _n(o,c),d=n.minFilter;return n.minFilter===As&&(n.minFilter=si),new CS(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class jr extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const US={type:"move"};class v0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,a),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&_>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(US)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new jr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class bf{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Tt(e),this.near=n,this.far=a}clone(){return new bf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class LS extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class OS extends $n{constructor(e=null,n=1,a=1,o,c,u,d,m,p=li,g=li,x,_){super(null,u,d,m,p,g,o,c,x,_),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca extends Bn{constructor(e,n,a,o=1){super(e,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const b0=new fe,NS=new fe,PS=new Rt;class ys{constructor(e=new fe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=b0.subVectors(a,n).cross(NS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(b0),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||PS.getNormalMatrix(e),o=this.coplanarPoint(b0).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Mc,zS=new jt(.5,.5),Zu=new fe;class zf{constructor(e=new ys,n=new ys,a=new ys,o=new ys,c=new ys,u=new ys){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=La,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],y=c[7],E=c[8],A=c[9],S=c[10],v=c[11],P=c[12],U=c[13],z=c[14],V=c[15];if(o[0].setComponents(p-u,y-g,v-E,V-P).normalize(),o[1].setComponents(p+u,y+g,v+E,V+P).normalize(),o[2].setComponents(p+d,y+x,v+A,V+U).normalize(),o[3].setComponents(p-d,y-x,v-A,V-U).normalize(),a)o[4].setComponents(m,_,S,z).normalize(),o[5].setComponents(p-m,y-_,v-S,V-z).normalize();else if(o[4].setComponents(p-m,y-_,v-S,V-z).normalize(),n===La)o[5].setComponents(p+m,y+_,v+S,V+z).normalize();else if(n===vf)o[5].setComponents(m,_,S,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const n=zS.distanceTo(e.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Zu.x=o.normal.x>0?e.max.x:e.min.x,Zu.y=o.normal.y>0?e.max.y:e.min.y,Zu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IS extends Ko{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yf=new fe,Sf=new fe,Pv=new pn,ql=new Pf,$u=new Mc,y0=new fe,zv=new fe;class BS extends Vn{constructor(e=new Xi,n=new IS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)yf.fromBufferAttribute(n,o-1),Sf.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=yf.distanceTo(Sf);e.setAttribute("lineDistance",new ur(a,1))}else St("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),$u.copy(a.boundingSphere),$u.applyMatrix4(o),$u.radius+=c,e.ray.intersectsSphere($u)===!1)return;Pv.copy(o).invert(),ql.copy(e.ray).applyMatrix4(Pv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let A=y,S=E-1;A<S;A+=p){const v=g.getX(A),P=g.getX(A+1),U=Ku(this,e,ql,m,v,P,A);U&&n.push(U)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(y),v=Ku(this,e,ql,m,A,S,E-1);v&&n.push(v)}}else{const y=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let A=y,S=E-1;A<S;A+=p){const v=Ku(this,e,ql,m,A,A+1,A);v&&n.push(v)}if(this.isLineLoop){const A=Ku(this,e,ql,m,E-1,y,E-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ku(s,e,n,a,o,c,u){const d=s.geometry.attributes.position;if(yf.fromBufferAttribute(d,o),Sf.fromBufferAttribute(d,c),n.distanceSqToSegment(yf,Sf,y0,zv)>a)return;y0.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(y0);if(!(p<e.near||p>e.far))return{distance:p,point:zv.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Iv=new fe,Bv=new fe;class FS extends BS{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Iv.fromBufferAttribute(n,o),Bv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Iv.distanceTo(Bv);e.setAttribute("lineDistance",new ur(a,1))}else St("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class HS extends Ko{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fv=new pn,Rp=new Pf,Qu=new Mc,Ju=new fe;class GS extends Vn{constructor(e=new Xi,n=new HS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Qu.copy(a.boundingSphere),Qu.applyMatrix4(o),Qu.radius+=c,e.ray.intersectsSphere(Qu)===!1)return;Fv.copy(o).invert(),Rp.copy(e.ray).applyMatrix4(Fv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,x=a.attributes.position;if(p!==null){const _=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let E=_,A=y;E<A;E++){const S=p.getX(E);Ju.fromBufferAttribute(x,S),Hv(Ju,S,m,o,e,n,this)}}else{const _=Math.max(0,u.start),y=Math.min(x.count,u.start+u.count);for(let E=_,A=y;E<A;E++)Ju.fromBufferAttribute(x,E),Hv(Ju,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hv(s,e,n,a,o,c,u){const d=Rp.distanceSqToPoint(s);if(d<n){const m=new fe;Rp.closestPointToPoint(s,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class VS extends $n{constructor(e,n,a,o,c=si,u=si,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function x(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(x)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(x))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class lm extends $n{constructor(e,n,a,o,c,u,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rb extends $n{constructor(e,n,a=Ls,o,c,u,d=li,m=li,p,g=lc,x=1){if(g!==lc&&g!==cc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:x};super(_,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sb extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class on extends Xi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,x=e/d,_=n/m,y=[],E=[],A=[],S=[];for(let v=0;v<g;v++){const P=v*_-u;for(let U=0;U<p;U++){const z=U*x-c;E.push(z,-P,0),A.push(0,0,1),S.push(U/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<d;P++){const U=P+p*v,z=P+p*(v+1),V=P+1+p*(v+1),O=P+1+p*v;y.push(U,z,O),y.push(z,V,O)}this.setIndex(y),this.setAttribute("position",new ur(E,3)),this.setAttribute("normal",new ur(A,3)),this.setAttribute("uv",new ur(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.widthSegments,e.heightSegments)}}class jS extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kS extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S0={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class XS{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=p.length;x<_;x+=2){const y=p[x],E=p[x+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const WS=new XS;class cm{constructor(e){this.manager=e!==void 0?e:WS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}cm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ro=new WeakMap;class qS extends cm{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=S0.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let x=Ro.get(u);x===void 0&&(x=[],Ro.set(u,x)),x.push({onLoad:n,onError:o})}return u}const d=uc("img");function m(){g(),n&&n(this);const x=Ro.get(this)||[];for(let _=0;_<x.length;_++){const y=x[_];y.onLoad&&y.onLoad(this)}Ro.delete(this),c.manager.itemEnd(e)}function p(x){g(),o&&o(x),S0.remove(`image:${e}`);const _=Ro.get(this)||[];for(let y=0;y<_.length;y++){const E=_[y];E.onError&&E.onError(x)}Ro.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),S0.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class YS extends cm{constructor(e){super(e)}load(e,n,a,o){const c=new $n,u=new qS(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class um extends Vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class ZS extends um{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const M0=new pn,Gv=new fe,Vv=new fe;class $S{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Oa,this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zf,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new An(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vv),n.updateMatrixWorld(),M0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(M0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(M0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ob extends ib{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class KS extends $S{constructor(){super(new ob(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class QS extends um{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new KS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class JS extends um{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class jv extends Xi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class eM extends aa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kv=new pn;class tM{constructor(e,n,a=0,o=1/0){this.ray=new Pf(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new om,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Tn("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return kv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kv),this}intersectObject(e,n=!0,a=[]){return Cp(e,this,a,n),a.sort(Xv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)Cp(e[o],this,a,n);return a.sort(Xv),a}}function Xv(s,e){return s.distance-e.distance}function Cp(s,e,n,a){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=s.children;for(let u=0,d=c.length;u<d;u++)Cp(c[u],e,n,!0)}}function Wv(s,e,n,a){const o=nM(a);switch(n){case q2:return s*e;case Z2:return s*e/o.components*o.byteLength;case nm:return s*e/o.components*o.byteLength;case im:return s*e*2/o.components*o.byteLength;case am:return s*e*2/o.components*o.byteLength;case Y2:return s*e*3/o.components*o.byteLength;case _a:return s*e*4/o.components*o.byteLength;case rm:return s*e*4/o.components*o.byteLength;case af:case rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sf:case of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(s,16)*Math.max(e,8)/4;case J0:case tp:return Math.max(s,8)*Math.max(e,8)/2;case ip:case ap:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case bp:case yp:case Sp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Mp:case Ep:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Tp:case Ap:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nM(s){switch(s){case Oa:case j2:return{byteLength:1,components:1};case sc:case k2:case Zo:return{byteLength:2,components:1};case em:case tm:return{byteLength:2,components:4};case Ls:case Jp:case sr:return{byteLength:4,components:1};case X2:case W2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lb(){let s=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function iM(s){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<x.length;y++){const E=x[_],A=x[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,x[_]=A)}x.length=_+1;for(let y=0,E=x.length;y<E;y++){const A=x[y];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var aM=`#ifdef USE_ALPHAHASH
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
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
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
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
}`,Dt={alphahash_fragment:aM,alphahash_pars_fragment:rM,alphamap_fragment:sM,alphamap_pars_fragment:oM,alphatest_fragment:lM,alphatest_pars_fragment:cM,aomap_fragment:uM,aomap_pars_fragment:fM,batching_pars_vertex:dM,batching_vertex:hM,begin_vertex:pM,beginnormal_vertex:mM,bsdfs:gM,iridescence_fragment:xM,bumpmap_pars_fragment:_M,clipping_planes_fragment:vM,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:yM,clipping_planes_vertex:SM,color_fragment:MM,color_pars_fragment:EM,color_pars_vertex:TM,color_vertex:AM,common:wM,cube_uv_reflection_fragment:RM,defaultnormal_vertex:CM,displacementmap_pars_vertex:DM,displacementmap_vertex:UM,emissivemap_fragment:LM,emissivemap_pars_fragment:OM,colorspace_fragment:NM,colorspace_pars_fragment:PM,envmap_fragment:zM,envmap_common_pars_fragment:IM,envmap_pars_fragment:BM,envmap_pars_vertex:FM,envmap_physical_pars_fragment:$M,envmap_vertex:HM,fog_vertex:GM,fog_pars_vertex:VM,fog_fragment:jM,fog_pars_fragment:kM,gradientmap_pars_fragment:XM,lightmap_pars_fragment:WM,lights_lambert_fragment:qM,lights_lambert_pars_fragment:YM,lights_pars_begin:ZM,lights_toon_fragment:KM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:eE,lights_physical_fragment:tE,lights_physical_pars_fragment:nE,lights_fragment_begin:iE,lights_fragment_maps:aE,lights_fragment_end:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:lE,logdepthbuf_vertex:cE,map_fragment:uE,map_pars_fragment:fE,map_particle_fragment:dE,map_particle_pars_fragment:hE,metalnessmap_fragment:pE,metalnessmap_pars_fragment:mE,morphinstance_vertex:gE,morphcolor_vertex:xE,morphnormal_vertex:_E,morphtarget_pars_vertex:vE,morphtarget_vertex:bE,normal_fragment_begin:yE,normal_fragment_maps:SE,normal_pars_fragment:ME,normal_pars_vertex:EE,normal_vertex:TE,normalmap_pars_fragment:AE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:DE,opaque_fragment:UE,packing:LE,premultiplied_alpha_fragment:OE,project_vertex:NE,dithering_fragment:PE,dithering_pars_fragment:zE,roughnessmap_fragment:IE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:HE,shadowmap_vertex:GE,shadowmask_pars_fragment:VE,skinbase_vertex:jE,skinning_pars_vertex:kE,skinning_vertex:XE,skinnormal_vertex:WE,specularmap_fragment:qE,specularmap_pars_fragment:YE,tonemapping_fragment:ZE,tonemapping_pars_fragment:$E,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:aT,backgroundCube_vert:rT,backgroundCube_frag:sT,cube_vert:oT,cube_frag:lT,depth_vert:cT,depth_frag:uT,distanceRGBA_vert:fT,distanceRGBA_frag:dT,equirect_vert:hT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:xT,meshbasic_frag:_T,meshlambert_vert:vT,meshlambert_frag:bT,meshmatcap_vert:yT,meshmatcap_frag:ST,meshnormal_vert:MT,meshnormal_frag:ET,meshphong_vert:TT,meshphong_frag:AT,meshphysical_vert:wT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:DT,points_vert:UT,points_frag:LT,shadow_vert:OT,shadow_frag:NT,sprite_vert:PT,sprite_frag:zT},He={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Da={basic:{uniforms:xi([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:xi([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:xi([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:xi([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:xi([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:xi([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:xi([He.points,He.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:xi([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:xi([He.common,He.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:xi([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:xi([He.sprite,He.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:xi([He.common,He.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:xi([He.lights,He.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Da.physical={uniforms:xi([Da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const ef={r:0,b:0,g:0},vs=new fr,IT=new pn;function BT(s,e,n,a,o,c,u){const d=new Tt(0);let m=c===!0?0:1,p,g,x=null,_=0,y=null;function E(U){let z=U.isScene===!0?U.background:null;return z&&z.isTexture&&(z=(U.backgroundBlurriness>0?n:e).get(z)),z}function A(U){let z=!1;const V=E(U);V===null?v(d,m):V&&V.isColor&&(v(V,1),z=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||z)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,z){const V=E(z);V&&(V.isCubeTexture||V.mapping===Nf)?(g===void 0&&(g=new _n(new Ec(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:jo(Da.backgroundCube.uniforms),vertexShader:Da.backgroundCube.vertexShader,fragmentShader:Da.backgroundCube.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,B,re){this.matrixWorld.copyPosition(re.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),vs.copy(z.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(IT.makeRotationFromEuler(vs)),g.material.toneMapped=Wt.getTransfer(V.colorSpace)!==an,(x!==V||_!==V.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=V,_=V.version,y=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new _n(new on(2,2),new oi({name:"BackgroundMaterial",uniforms:jo(Da.background.uniforms),vertexShader:Da.background.vertexShader,fragmentShader:Da.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Wt.getTransfer(V.colorSpace)!==an,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||_!==V.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,x=V,_=V.version,y=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,z){U.getRGB(ef,nb(s)),a.buffers.color.setClear(ef.r,ef.g,ef.b,z,u)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,z=1){d.set(U),m=z,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:A,addToRenderList:S,dispose:P}}function FT(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function d(R,k,ae,ce,pe){let K=!1;const N=x(ce,ae,k);c!==N&&(c=N,p(c.object)),K=y(R,ce,ae,pe),K&&E(R,ce,ae,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,z(R,k,ae,ce),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function x(R,k,ae){const ce=ae.wireframe===!0;let pe=a[R.id];pe===void 0&&(pe={},a[R.id]=pe);let K=pe[k.id];K===void 0&&(K={},pe[k.id]=K);let N=K[ce];return N===void 0&&(N=_(m()),K[ce]=N),N}function _(R){const k=[],ae=[],ce=[];for(let pe=0;pe<n;pe++)k[pe]=0,ae[pe]=0,ce[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ae,attributeDivisors:ce,object:R,attributes:{},index:null}}function y(R,k,ae,ce){const pe=c.attributes,K=k.attributes;let N=0;const Y=ae.getAttributes();for(const X in Y)if(Y[X].location>=0){const me=pe[X];let D=K[X];if(D===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),me===void 0||me.attribute!==D||D&&me.data!==D.data)return!0;N++}return c.attributesNum!==N||c.index!==ce}function E(R,k,ae,ce){const pe={},K=k.attributes;let N=0;const Y=ae.getAttributes();for(const X in Y)if(Y[X].location>=0){let me=K[X];me===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(me=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(me=R.instanceColor));const D={};D.attribute=me,me&&me.data&&(D.data=me.data),pe[X]=D,N++}c.attributes=pe,c.attributesNum=N,c.index=ce}function A(){const R=c.newAttributes;for(let k=0,ae=R.length;k<ae;k++)R[k]=0}function S(R){v(R,0)}function v(R,k){const ae=c.newAttributes,ce=c.enabledAttributes,pe=c.attributeDivisors;ae[R]=1,ce[R]===0&&(s.enableVertexAttribArray(R),ce[R]=1),pe[R]!==k&&(s.vertexAttribDivisor(R,k),pe[R]=k)}function P(){const R=c.newAttributes,k=c.enabledAttributes;for(let ae=0,ce=k.length;ae<ce;ae++)k[ae]!==R[ae]&&(s.disableVertexAttribArray(ae),k[ae]=0)}function U(R,k,ae,ce,pe,K,N){N===!0?s.vertexAttribIPointer(R,k,ae,pe,K):s.vertexAttribPointer(R,k,ae,ce,pe,K)}function z(R,k,ae,ce){A();const pe=ce.attributes,K=ae.getAttributes(),N=k.defaultAttributeValues;for(const Y in K){const X=K[Y];if(X.location>=0){let ue=pe[Y];if(ue===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const me=ue.normalized,D=ue.itemSize,Q=e.get(ue);if(Q===void 0)continue;const xe=Q.buffer,Se=Q.type,De=Q.bytesPerElement,J=Se===s.INT||Se===s.UNSIGNED_INT||ue.gpuType===Jp;if(ue.isInterleavedBufferAttribute){const W=ue.data,Re=W.stride,Fe=ue.offset;if(W.isInstancedInterleavedBuffer){for(let Xe=0;Xe<X.locationSize;Xe++)v(X.location+Xe,W.meshPerAttribute);R.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Xe=0;Xe<X.locationSize;Xe++)S(X.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Xe=0;Xe<X.locationSize;Xe++)U(X.location+Xe,D/X.locationSize,Se,me,Re*De,(Fe+D/X.locationSize*Xe)*De,J)}else{if(ue.isInstancedBufferAttribute){for(let W=0;W<X.locationSize;W++)v(X.location+W,ue.meshPerAttribute);R.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let W=0;W<X.locationSize;W++)S(X.location+W);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let W=0;W<X.locationSize;W++)U(X.location+W,D/X.locationSize,Se,me,D*De,D/X.locationSize*W*De,J)}}else if(N!==void 0){const me=N[Y];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(X.location,me);break;case 3:s.vertexAttrib3fv(X.location,me);break;case 4:s.vertexAttrib4fv(X.location,me);break;default:s.vertexAttrib1fv(X.location,me)}}}}P()}function V(){re();for(const R in a){const k=a[R];for(const ae in k){const ce=k[ae];for(const pe in ce)g(ce[pe].object),delete ce[pe];delete k[ae]}delete a[R]}}function O(R){if(a[R.id]===void 0)return;const k=a[R.id];for(const ae in k){const ce=k[ae];for(const pe in ce)g(ce[pe].object),delete ce[pe];delete k[ae]}delete a[R.id]}function B(R){for(const k in a){const ae=a[k];if(ae[R.id]===void 0)continue;const ce=ae[R.id];for(const pe in ce)g(ce[pe].object),delete ce[pe];delete ae[R.id]}}function re(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:re,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:S,disableUnusedAttributes:P}}function HT(s,e,n){let a;function o(p){a=p}function c(p,g){s.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,x){x!==0&&(s.drawArraysInstanced(a,p,g,x),n.update(g,a,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];n.update(y,a,1)}function m(p,g,x,_){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)u(p[E],g[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,_,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*_[A];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function GT(s,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==_a&&a.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const re=B===Zo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Oa&&a.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sr&&!re)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(St("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),z=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:z,vertexTextures:V,maxSamples:O}}function VT(s){const e=this;let n=null,a=0,o=!1,c=!1;const u=new ys,d=new Rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||a!==0||o;return o=_,a=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){n=g(x,_,0)},this.setState=function(x,_,y){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,v=s.get(x);if(!o||E===null||E.length===0||c&&!S)c?g(null):p();else{const P=c?0:a,U=P*4;let z=v.clippingState||null;m.value=z,z=g(E,_,U,y);for(let V=0;V!==U;++V)z[V]=n[V];v.clippingState=z,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(x,_,y,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const v=y+A*4,P=_.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<v)&&(S=new Float32Array(v));for(let U=0,z=y;U!==A;++U,z+=4)u.copy(x[U]).applyMatrix4(P,d),u.normal.toArray(S,z),S[z+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function jT(s){let e=new WeakMap;function n(u,d){return d===$0?u.mapping=Ho:d===K0&&(u.mapping=Go),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===$0||d===K0)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new DS(m.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const kr=4,qv=[.125,.215,.35,.446,.526,.582],Ms=20,kT=256,Yl=new ob,Yv=new Tt;let E0=null,T0=0,A0=0,w0=!1;const XT=new fe;class Zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=XT}=c;E0=this._renderer.getRenderTarget(),T0=this._renderer.getActiveCubeFace(),A0=this._renderer.getActiveMipmapLevel(),w0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(E0,T0,A0),this._renderer.xr.enabled=w0,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ho||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),E0=this._renderer.getRenderTarget(),T0=this._renderer.getActiveCubeFace(),A0=this._renderer.getActiveMipmapLevel(),w0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:si,minFilter:si,generateMipmaps:!1,type:Zo,format:_a,colorSpace:Vo,depthBuffer:!1},o=$v(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WT(c)),this._blurMaterial=YT(c,e,n),this._ggxMaterial=qT(c,e,n)}return o}_compileMaterial(e){const n=new _n(new Xi,e);this._renderer.compile(n,Yl)}_sceneToCubeUV(e,n,a,o,c){const m=new aa(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(Yv),x.toneMapping=Xr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Ec,new ki({name:"PMREM.Background",side:Di,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let v=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,v=!0):(S.color.copy(Yv),v=!0);for(let U=0;U<6;U++){const z=U%3;z===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):z===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const V=this._cubeSize;Co(o,z*V,U>2?V:0,V,V),x.setRenderTarget(o),v&&x.render(A,m),x.render(e,m)}x.toneMapping=y,x.autoClear=_,e.background=P}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Ho||e.mapping===Go;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Co(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Yl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,y=x*_,{_lodMax:E}=this,A=this._sizeLods[a],S=3*A*(a>E-kr?a-E+kr:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-n,Co(c,S,v,3*A,2*A),o.setRenderTarget(c),o.render(d,Yl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,Co(e,S,v,3*A,2*A),o.setRenderTarget(e),o.render(d,Yl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Tn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=p;const _=p.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ms-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):Ms;S>Ms&&St(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ms}`);const v=[];let P=0;for(let B=0;B<Ms;++B){const re=B/A,C=Math.exp(-re*re/2);v.push(C),B===0?P+=C:B<S&&(P+=2*C)}for(let B=0;B<v.length;B++)v[B]=v[B]/P;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=v,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-a;const z=this._sizeLods[o],V=3*z*(o>U-kr?o-U+kr:0),O=4*(this._cubeSize-z);Co(n,V,O,3*z,2*z),m.setRenderTarget(n),m.render(x,Yl)}}function WT(s){const e=[],n=[],a=[];let o=s;const c=s-kr+1+qv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>s-kr?m=qv[u-s+kr-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,A=3,S=2,v=1,P=new Float32Array(A*E*y),U=new Float32Array(S*E*y),z=new Float32Array(v*E*y);for(let O=0;O<y;O++){const B=O%3*2/3-1,re=O>2?0:-1,C=[B,re,0,B+2/3,re,0,B+2/3,re+1,0,B,re,0,B+2/3,re+1,0,B,re+1,0];P.set(C,A*E*O),U.set(_,S*E*O);const R=[O,O,O,O,O,O];z.set(R,v*E*O)}const V=new Xi;V.setAttribute("position",new Bn(P,A)),V.setAttribute("uv",new Bn(U,S)),V.setAttribute("faceIndex",new Bn(z,v)),a.push(new _n(V,null)),o>kr&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function $v(s,e,n){const a=new Os(s,e,n);return a.texture.mapping=Nf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Co(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function qT(s,e,n){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:If(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function YT(s,e,n){const a=new Float32Array(Ms),o=new fe(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:If(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Kv(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Qv(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function If(){return`

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
	`}function ZT(s){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===$0||m===K0,g=m===Ho||m===Go;if(p||g){let x=e.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new Zv(s)),x=p?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Zv(s)),x=p?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function $T(s){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=s.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&fc("WebGLRenderer: "+a+" extension not supported."),o}}}function KT(s,e,n,a){const o={},c=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(e.remove(y),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function d(x,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function m(x){const _=x.attributes;for(const y in _)e.update(_[y],s.ARRAY_BUFFER)}function p(x){const _=[],y=x.index,E=x.attributes.position;let A=0;if(y!==null){const P=y.array;A=y.version;for(let U=0,z=P.length;U<z;U+=3){const V=P[U+0],O=P[U+1],B=P[U+2];_.push(V,O,O,B,B,V)}}else if(E!==void 0){const P=E.array;A=E.version;for(let U=0,z=P.length/3-1;U<z;U+=3){const V=U+0,O=U+1,B=U+2;_.push(V,O,O,B,B,V)}}else return;const S=new(K2(_)?tb:eb)(_,1);S.version=A;const v=c.get(x);v&&e.remove(v),c.set(x,S)}function g(x){const _=c.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function QT(s,e,n){let a;function o(_){a=_}let c,u;function d(_){c=_.type,u=_.bytesPerElement}function m(_,y){s.drawElements(a,y,c,_*u),n.update(y,a,1)}function p(_,y,E){E!==0&&(s.drawElementsInstanced(a,y,c,_*u,E),n.update(y,a,E))}function g(_,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,_,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];n.update(S,a,1)}function x(_,y,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<_.length;v++)p(_[v]/u,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,_,0,A,0,E);let v=0;for(let P=0;P<E;P++)v+=y[P]*A[P];n.update(v,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function JT(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:Tn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function eA(s,e,n){const a=new WeakMap,o=new An;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let C=function(){B.dispose(),a.delete(d),d.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();const y=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;y===!0&&(U=1),E===!0&&(U=2),A===!0&&(U=3);let z=d.attributes.position.count*U,V=1;z>e.maxTextureSize&&(V=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*V*4*x),B=new Q2(O,z,V,x);B.type=sr,B.needsUpdate=!0;const re=U*4;for(let R=0;R<x;R++){const k=S[R],ae=v[R],ce=P[R],pe=z*V*4*R;for(let K=0;K<k.count;K++){const N=K*re;y===!0&&(o.fromBufferAttribute(k,K),O[pe+N+0]=o.x,O[pe+N+1]=o.y,O[pe+N+2]=o.z,O[pe+N+3]=0),E===!0&&(o.fromBufferAttribute(ae,K),O[pe+N+4]=o.x,O[pe+N+5]=o.y,O[pe+N+6]=o.z,O[pe+N+7]=0),A===!0&&(o.fromBufferAttribute(ce,K),O[pe+N+8]=o.x,O[pe+N+9]=o.y,O[pe+N+10]=o.z,O[pe+N+11]=ce.itemSize===4?o.w:1)}}_={count:x,texture:B,size:new jt(z,V)},a.set(d,_),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let y=0;for(let A=0;A<p.length;A++)y+=p[A];const E=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function tA(s,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,x=e.get(m,g);if(o.get(x)!==p&&(e.update(x),o.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return x}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const cb=new $n,Jv=new rb(1,1),ub=new Q2,fb=new hS,db=new ab,e2=[],t2=[],n2=new Float32Array(16),i2=new Float32Array(9),a2=new Float32Array(4);function Qo(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let c=e2[o];if(c===void 0&&(c=new Float32Array(o),e2[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(c,d)}return c}function kn(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function Xn(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function Bf(s,e){let n=t2[e];n===void 0&&(n=new Int32Array(e),t2[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function nA(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function iA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kn(n,e))return;s.uniform2fv(this.addr,e),Xn(n,e)}}function aA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kn(n,e))return;s.uniform3fv(this.addr,e),Xn(n,e)}}function rA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kn(n,e))return;s.uniform4fv(this.addr,e),Xn(n,e)}}function sA(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(kn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xn(n,e)}else{if(kn(n,a))return;a2.set(a),s.uniformMatrix2fv(this.addr,!1,a2),Xn(n,a)}}function oA(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(kn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xn(n,e)}else{if(kn(n,a))return;i2.set(a),s.uniformMatrix3fv(this.addr,!1,i2),Xn(n,a)}}function lA(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(kn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xn(n,e)}else{if(kn(n,a))return;n2.set(a),s.uniformMatrix4fv(this.addr,!1,n2),Xn(n,a)}}function cA(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function uA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kn(n,e))return;s.uniform2iv(this.addr,e),Xn(n,e)}}function fA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kn(n,e))return;s.uniform3iv(this.addr,e),Xn(n,e)}}function dA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kn(n,e))return;s.uniform4iv(this.addr,e),Xn(n,e)}}function hA(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function pA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kn(n,e))return;s.uniform2uiv(this.addr,e),Xn(n,e)}}function mA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kn(n,e))return;s.uniform3uiv(this.addr,e),Xn(n,e)}}function gA(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kn(n,e))return;s.uniform4uiv(this.addr,e),Xn(n,e)}}function xA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Jv.compareFunction=$2,c=Jv):c=cb,n.setTexture2D(e||c,o)}function _A(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||fb,o)}function vA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||db,o)}function bA(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||ub,o)}function yA(s){switch(s){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return bA}}function SA(s,e){s.uniform1fv(this.addr,e)}function MA(s,e){const n=Qo(e,this.size,2);s.uniform2fv(this.addr,n)}function EA(s,e){const n=Qo(e,this.size,3);s.uniform3fv(this.addr,n)}function TA(s,e){const n=Qo(e,this.size,4);s.uniform4fv(this.addr,n)}function AA(s,e){const n=Qo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function wA(s,e){const n=Qo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function RA(s,e){const n=Qo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function CA(s,e){s.uniform1iv(this.addr,e)}function DA(s,e){s.uniform2iv(this.addr,e)}function UA(s,e){s.uniform3iv(this.addr,e)}function LA(s,e){s.uniform4iv(this.addr,e)}function OA(s,e){s.uniform1uiv(this.addr,e)}function NA(s,e){s.uniform2uiv(this.addr,e)}function PA(s,e){s.uniform3uiv(this.addr,e)}function zA(s,e){s.uniform4uiv(this.addr,e)}function IA(s,e,n){const a=this.cache,o=e.length,c=Bf(n,o);kn(a,c)||(s.uniform1iv(this.addr,c),Xn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||cb,c[u])}function BA(s,e,n){const a=this.cache,o=e.length,c=Bf(n,o);kn(a,c)||(s.uniform1iv(this.addr,c),Xn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||fb,c[u])}function FA(s,e,n){const a=this.cache,o=e.length,c=Bf(n,o);kn(a,c)||(s.uniform1iv(this.addr,c),Xn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||db,c[u])}function HA(s,e,n){const a=this.cache,o=e.length,c=Bf(n,o);kn(a,c)||(s.uniform1iv(this.addr,c),Xn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||ub,c[u])}function GA(s){switch(s){case 5126:return SA;case 35664:return MA;case 35665:return EA;case 35666:return TA;case 35674:return AA;case 35675:return wA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return DA;case 35668:case 35672:return UA;case 35669:case 35673:return LA;case 5125:return OA;case 36294:return NA;case 36295:return PA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return HA}}class VA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=yA(n.type)}}class jA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GA(n.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const R0=/(\w+)(\])?(\[|\.)?/g;function r2(s,e){s.seq.push(e),s.map[e.id]=e}function XA(s,e,n){const a=s.name,o=a.length;for(R0.lastIndex=0;;){const c=R0.exec(a),u=R0.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){r2(n,p===void 0?new VA(d,s,e):new jA(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new kA(d),r2(n,x)),n=x}}}class lf{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);XA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function s2(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const WA=37297;let qA=0;function YA(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const o2=new Rt;function ZA(s){Wt._getMatrix(o2,Wt.workingColorSpace,s);const e=`mat3( ${o2.elements.map(n=>n.toFixed(4))} )`;switch(Wt.getTransfer(s)){case _f:return[e,"LinearTransferOETF"];case an:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function l2(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+YA(s.getShaderSource(e),d)}else return c}function $A(s,e){const n=ZA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function KA(s,e){let n;switch(e){case H3:n="Linear";break;case G3:n="Reinhard";break;case V3:n="Cineon";break;case j3:n="ACESFilmic";break;case X3:n="AgX";break;case W3:n="Neutral";break;case k3:n="Custom";break;default:St("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tf=new fe;function QA(){Wt.getLuminanceCoefficients(tf);const s=tf.x.toFixed(4),e=tf.y.toFixed(4),n=tf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zl).join(`
`)}function ew(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function tw(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(e,o),u=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Zl(s){return s!==""}function c2(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u2(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(s){return s.replace(nw,aw)}const iw=new Map;function aw(s,e){let n=Dt[e];if(n===void 0){const a=iw.get(e);if(a!==void 0)n=Dt[a],St('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Dp(n)}const rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f2(s){return s.replace(rw,sw)}function sw(s,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function d2(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function ow(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===H2?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===v3?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rr&&(e="SHADOWMAP_TYPE_VSM"),e}function lw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ho:case Go:e="ENVMAP_TYPE_CUBE";break;case Nf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Go:e="ENVMAP_MODE_REFRACTION";break}return e}function uw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case G2:e="ENVMAP_BLENDING_MULTIPLY";break;case B3:e="ENVMAP_BLENDING_MIX";break;case F3:e="ENVMAP_BLENDING_ADD";break}return e}function fw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function dw(s,e,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=ow(n),p=lw(n),g=cw(n),x=uw(n),_=fw(n),y=JA(n),E=ew(c),A=o.createProgram();let S,v,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Zl).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Zl).join(`
`),v.length>0&&(v+=`
`)):(S=[d2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zl).join(`
`),v=[d2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xr?"#define TONE_MAPPING":"",n.toneMapping!==Xr?Dt.tonemapping_pars_fragment:"",n.toneMapping!==Xr?KA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,$A("linearToOutputTexel",n.outputColorSpace),QA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zl).join(`
`)),u=Dp(u),u=c2(u,n),u=u2(u,n),d=Dp(d),d=c2(d,n),d=u2(d,n),u=f2(u),d=f2(d),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=P+S+u,z=P+v+d,V=s2(o,o.VERTEX_SHADER,U),O=s2(o,o.FRAGMENT_SHADER,z);o.attachShader(A,V),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function B(k){if(s.debug.checkShaderErrors){const ae=o.getProgramInfoLog(A)||"",ce=o.getShaderInfoLog(V)||"",pe=o.getShaderInfoLog(O)||"",K=ae.trim(),N=ce.trim(),Y=pe.trim();let X=!0,ue=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,V,O);else{const me=l2(o,V,"vertex"),D=l2(o,O,"fragment");Tn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+me+`
`+D)}else K!==""?St("WebGLProgram: Program Info Log:",K):(N===""||Y==="")&&(ue=!1);ue&&(k.diagnostics={runnable:X,programLog:K,vertexShader:{log:N,prefix:S},fragmentShader:{log:Y,prefix:v}})}o.deleteShader(V),o.deleteShader(O),re=new lf(o,A),C=tw(o,A)}let re;this.getUniforms=function(){return re===void 0&&B(this),re};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,WA)),R},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=O,this}let hw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new mw(e),n.set(e,a)),a}}class mw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function gw(s,e,n,a,o,c,u){const d=new om,m=new pw,p=new Set,g=[],x=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,R,k,ae,ce){const pe=ae.fog,K=ce.geometry,N=C.isMeshStandardMaterial?ae.environment:null,Y=(C.isMeshStandardMaterial?n:e).get(C.envMap||N),X=Y&&Y.mapping===Nf?Y.image.height:null,ue=E[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&St("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,D=me!==void 0?me.length:0;let Q=0;K.morphAttributes.position!==void 0&&(Q=1),K.morphAttributes.normal!==void 0&&(Q=2),K.morphAttributes.color!==void 0&&(Q=3);let xe,Se,De,J;if(ue){const lt=Da[ue];xe=lt.vertexShader,Se=lt.fragmentShader}else xe=C.vertexShader,Se=C.fragmentShader,m.update(C),De=m.getVertexShaderID(C),J=m.getFragmentShaderID(C);const W=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Fe=ce.isInstancedMesh===!0,Xe=ce.isBatchedMesh===!0,Je=!!C.map,Ft=!!C.matcap,Ze=!!Y,At=!!C.aoMap,F=!!C.lightMap,xt=!!C.bumpMap,Mt=!!C.normalMap,qt=!!C.displacementMap,We=!!C.emissiveMap,Kt=!!C.metalnessMap,it=!!C.roughnessMap,_t=C.anisotropy>0,L=C.clearcoat>0,M=C.dispersion>0,ee=C.iridescence>0,ve=C.sheen>0,ye=C.transmission>0,he=_t&&!!C.anisotropyMap,et=L&&!!C.clearcoatMap,Ie=L&&!!C.clearcoatNormalMap,ot=L&&!!C.clearcoatRoughnessMap,$e=ee&&!!C.iridescenceMap,Me=ee&&!!C.iridescenceThicknessMap,Te=ve&&!!C.sheenColorMap,at=ve&&!!C.sheenRoughnessMap,qe=!!C.specularMap,Ve=!!C.specularColorMap,dt=!!C.specularIntensityMap,H=ye&&!!C.transmissionMap,Be=ye&&!!C.thicknessMap,Le=!!C.gradientMap,Ue=!!C.alphaMap,Ee=C.alphaTest>0,G=!!C.alphaHash,Ae=!!C.extensions;let Ke=Xr;C.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const Ut={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:xe,fragmentShader:Se,defines:C.defines,customVertexShaderID:De,customFragmentShaderID:J,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&ce._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ce.instanceColor!==null,instancingMorph:Fe&&ce.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Vo,alphaToCoverage:!!C.alphaToCoverage,map:Je,matcap:Ft,envMap:Ze,envMapMode:Ze&&Y.mapping,envMapCubeUVHeight:X,aoMap:At,lightMap:F,bumpMap:xt,normalMap:Mt,displacementMap:_&&qt,emissiveMap:We,normalMapObjectSpace:Mt&&C.normalMapType===K3,normalMapTangentSpace:Mt&&C.normalMapType===$3,metalnessMap:Kt,roughnessMap:it,anisotropy:_t,anisotropyMap:he,clearcoat:L,clearcoatMap:et,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ot,dispersion:M,iridescence:ee,iridescenceMap:$e,iridescenceThicknessMap:Me,sheen:ve,sheenColorMap:Te,sheenRoughnessMap:at,specularMap:qe,specularColorMap:Ve,specularIntensityMap:dt,transmission:ye,transmissionMap:H,thicknessMap:Be,gradientMap:Le,opaque:C.transparent===!1&&C.blending===Uo&&C.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Ee,alphaHash:G,combine:C.combine,mapUv:Je&&A(C.map.channel),aoMapUv:At&&A(C.aoMap.channel),lightMapUv:F&&A(C.lightMap.channel),bumpMapUv:xt&&A(C.bumpMap.channel),normalMapUv:Mt&&A(C.normalMap.channel),displacementMapUv:qt&&A(C.displacementMap.channel),emissiveMapUv:We&&A(C.emissiveMap.channel),metalnessMapUv:Kt&&A(C.metalnessMap.channel),roughnessMapUv:it&&A(C.roughnessMap.channel),anisotropyMapUv:he&&A(C.anisotropyMap.channel),clearcoatMapUv:et&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:at&&A(C.sheenRoughnessMap.channel),specularMapUv:qe&&A(C.specularMap.channel),specularColorMapUv:Ve&&A(C.specularColorMap.channel),specularIntensityMapUv:dt&&A(C.specularIntensityMap.channel),transmissionMapUv:H&&A(C.transmissionMap.channel),thicknessMapUv:Be&&A(C.thicknessMap.channel),alphaMapUv:Ue&&A(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Mt||_t),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!K.attributes.uv&&(Je||Ue),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Re,skinning:ce.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Je&&C.map.isVideoTexture===!0&&Wt.getTransfer(C.map.colorSpace)===an,decodeVideoTextureEmissive:We&&C.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(C.emissiveMap.colorSpace)===an,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ga,flipSided:C.side===Di,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ae&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&C.extensions.multiDraw===!0||Xe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)R.push(k),R.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(P(R,C),U(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function P(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function U(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function z(C){const R=E[C.type];let k;if(R){const ae=Da[R];k=AS.clone(ae.uniforms)}else k=C.uniforms;return k}function V(C,R){let k;for(let ae=0,ce=g.length;ae<ce;ae++){const pe=g[ae];if(pe.cacheKey===R){k=pe,++k.usedTimes;break}}return k===void 0&&(k=new dw(s,R,C,c),g.push(k)),k}function O(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function B(C){m.remove(C)}function re(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:z,acquireProgram:V,releaseProgram:O,releaseShaderCache:B,programs:g,dispose:re}}function xw(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function a(u){s.delete(u)}function o(u,d,m){s.get(u)[d]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function _w(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function h2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function p2(){const s=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(x,_,y,E,A,S){let v=s[e];return v===void 0?(v={id:x.id,object:x,geometry:_,material:y,groupOrder:E,renderOrder:x.renderOrder,z:A,group:S},s[e]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=y,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=A,v.group=S),e++,v}function d(x,_,y,E,A,S){const v=u(x,_,y,E,A,S);y.transmission>0?a.push(v):y.transparent===!0?o.push(v):n.push(v)}function m(x,_,y,E,A,S){const v=u(x,_,y,E,A,S);y.transmission>0?a.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function p(x,_){n.length>1&&n.sort(x||_w),a.length>1&&a.sort(_||h2),o.length>1&&o.sort(_||h2)}function g(){for(let x=e,_=s.length;x<_;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:m,finish:g,sort:p}}function vw(){let s=new WeakMap;function e(a,o){const c=s.get(a);let u;return c===void 0?(u=new p2,s.set(a,[u])):o>=c.length?(u=new p2,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new fe,color:new Tt};break;case"SpotLight":n={position:new fe,direction:new fe,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new fe,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new fe,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=n,n}}}function yw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let Sw=0;function Mw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ew(s){const e=new bw,n=yw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new fe);const o=new fe,c=new pn,u=new pn;function d(p){let g=0,x=0,_=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,E=0,A=0,S=0,v=0,P=0,U=0,z=0,V=0,O=0,B=0;p.sort(Mw);for(let C=0,R=p.length;C<R;C++){const k=p[C],ae=k.color,ce=k.intensity,pe=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ae.r*ce,x+=ae.g*ce,_+=ae.b*ce;else if(k.isLightProbe){for(let N=0;N<9;N++)a.probe[N].addScaledVector(k.sh.coefficients[N],ce);B++}else if(k.isDirectionalLight){const N=e.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,X=n.get(k);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,a.directionalShadow[y]=X,a.directionalShadowMap[y]=K,a.directionalShadowMatrix[y]=k.shadow.matrix,P++}a.directional[y]=N,y++}else if(k.isSpotLight){const N=e.get(k);N.position.setFromMatrixPosition(k.matrixWorld),N.color.copy(ae).multiplyScalar(ce),N.distance=pe,N.coneCos=Math.cos(k.angle),N.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),N.decay=k.decay,a.spot[A]=N;const Y=k.shadow;if(k.map&&(a.spotLightMap[V]=k.map,V++,Y.updateMatrices(k),k.castShadow&&O++),a.spotLightMatrix[A]=Y.matrix,k.castShadow){const X=n.get(k);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,a.spotShadow[A]=X,a.spotShadowMap[A]=K,z++}A++}else if(k.isRectAreaLight){const N=e.get(k);N.color.copy(ae).multiplyScalar(ce),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),a.rectArea[S]=N,S++}else if(k.isPointLight){const N=e.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),N.distance=k.distance,N.decay=k.decay,k.castShadow){const Y=k.shadow,X=n.get(k);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,a.pointShadow[E]=X,a.pointShadowMap[E]=K,a.pointShadowMatrix[E]=k.shadow.matrix,U++}a.point[E]=N,E++}else if(k.isHemisphereLight){const N=e.get(k);N.skyColor.copy(k.color).multiplyScalar(ce),N.groundColor.copy(k.groundColor).multiplyScalar(ce),a.hemi[v]=N,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=x,a.ambient[2]=_;const re=a.hash;(re.directionalLength!==y||re.pointLength!==E||re.spotLength!==A||re.rectAreaLength!==S||re.hemiLength!==v||re.numDirectionalShadows!==P||re.numPointShadows!==U||re.numSpotShadows!==z||re.numSpotMaps!==V||re.numLightProbes!==B)&&(a.directional.length=y,a.spot.length=A,a.rectArea.length=S,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=z,a.spotShadowMap.length=z,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=z+V-O,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=B,re.directionalLength=y,re.pointLength=E,re.spotLength=A,re.rectAreaLength=S,re.hemiLength=v,re.numDirectionalShadows=P,re.numPointShadows=U,re.numSpotShadows=z,re.numSpotMaps=V,re.numLightProbes=B,a.version=Sw++)}function m(p,g){let x=0,_=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const U=p[v];if(U.isDirectionalLight){const z=a.directional[x];z.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),x++}else if(U.isSpotLight){const z=a.spot[y];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const z=a.rectArea[E];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),u.identity(),c.copy(U.matrixWorld),c.premultiply(S),u.extractRotation(c),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),E++}else if(U.isPointLight){const z=a.point[_];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),_++}else if(U.isHemisphereLight){const z=a.hemi[A];z.direction.setFromMatrixPosition(U.matrixWorld),z.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:a}}function m2(s){const e=new Ew(s),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function Tw(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new m2(s),e.set(o,[d])):c>=u.length?(d=new m2(s),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const Aw=`void main() {
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
}`;function Rw(s,e,n){let a=new zf;const o=new jt,c=new jt,u=new An,d=new jS({depthPacking:Z3}),m=new kS,p={},g=n.maxTextureSize,x={[Yr]:Di,[Di]:Yr,[ga]:ga},_=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Aw,fragmentShader:ww}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new Xi;E.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _n(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H2;let v=this.type;this.render=function(O,B,re){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(lr),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ce=v!==rr&&this.type===rr,pe=v===rr&&this.type!==rr;for(let K=0,N=O.length;K<N;K++){const Y=O[K],X=Y.shadow;if(X===void 0){St("WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const ue=X.getFrameExtents();if(o.multiply(ue),c.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ue.x),o.x=c.x*ue.x,X.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ue.y),o.y=c.y*ue.y,X.mapSize.y=c.y)),X.map===null||ce===!0||pe===!0){const D=this.type!==rr?{minFilter:li,magFilter:li}:{};X.map!==null&&X.map.dispose(),X.map=new Os(o.x,o.y,D),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const me=X.getViewportCount();for(let D=0;D<me;D++){const Q=X.getViewport(D);u.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),ae.viewport(u),X.updateMatrices(Y,D),a=X.getFrustum(),z(B,re,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===rr&&P(X,re),X.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(C,R,k)};function P(O,B){const re=e.update(A);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Os(o.x,o.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(B,null,re,_,A,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(B,null,re,y,A,null)}function U(O,B,re,C){let R=null;const k=re.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)R=k;else if(R=re.isPointLight===!0?m:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ae=R.uuid,ce=B.uuid;let pe=p[ae];pe===void 0&&(pe={},p[ae]=pe);let K=pe[ce];K===void 0&&(K=R.clone(),pe[ce]=K,B.addEventListener("dispose",V)),R=K}if(R.visible=B.visible,R.wireframe=B.wireframe,C===rr?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:x[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,re.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ae=s.properties.get(R);ae.light=re}return R}function z(O,B,re,C,R){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===rr)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,O.matrixWorld);const ce=e.update(O),pe=O.material;if(Array.isArray(pe)){const K=ce.groups;for(let N=0,Y=K.length;N<Y;N++){const X=K[N],ue=pe[X.materialIndex];if(ue&&ue.visible){const me=U(O,ue,C,R);O.onBeforeShadow(s,O,B,re,ce,me,X),s.renderBufferDirect(re,null,ce,me,O,X),O.onAfterShadow(s,O,B,re,ce,me,X)}}}else if(pe.visible){const K=U(O,pe,C,R);O.onBeforeShadow(s,O,B,re,ce,K,null),s.renderBufferDirect(re,null,ce,K,O,null),O.onAfterShadow(s,O,B,re,ce,K,null)}}const ae=O.children;for(let ce=0,pe=ae.length;ce<pe;ce++)z(ae[ce],B,re,C,R)}function V(O){O.target.removeEventListener("dispose",V);for(const re in p){const C=p[re],R=O.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const Cw={[j0]:k0,[X0]:Y0,[W0]:Z0,[Fo]:q0,[k0]:j0,[Y0]:X0,[Z0]:W0,[q0]:Fo};function Dw(s,e){function n(){let H=!1;const Be=new An;let Le=null;const Ue=new An(0,0,0,0);return{setMask:function(Ee){Le!==Ee&&!H&&(s.colorMask(Ee,Ee,Ee,Ee),Le=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,G,Ae,Ke,Ut){Ut===!0&&(Ee*=Ke,G*=Ke,Ae*=Ke),Be.set(Ee,G,Ae,Ke),Ue.equals(Be)===!1&&(s.clearColor(Ee,G,Ae,Ke),Ue.copy(Be))},reset:function(){H=!1,Le=null,Ue.set(-1,0,0,0)}}}function a(){let H=!1,Be=!1,Le=null,Ue=null,Ee=null;return{setReversed:function(G){if(Be!==G){const Ae=e.get("EXT_clip_control");G?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Be=G;const Ke=Ee;Ee=null,this.setClear(Ke)}},getReversed:function(){return Be},setTest:function(G){G?W(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(G){Le!==G&&!H&&(s.depthMask(G),Le=G)},setFunc:function(G){if(Be&&(G=Cw[G]),Ue!==G){switch(G){case j0:s.depthFunc(s.NEVER);break;case k0:s.depthFunc(s.ALWAYS);break;case X0:s.depthFunc(s.LESS);break;case Fo:s.depthFunc(s.LEQUAL);break;case W0:s.depthFunc(s.EQUAL);break;case q0:s.depthFunc(s.GEQUAL);break;case Y0:s.depthFunc(s.GREATER);break;case Z0:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=G}},setLocked:function(G){H=G},setClear:function(G){Ee!==G&&(Be&&(G=1-G),s.clearDepth(G),Ee=G)},reset:function(){H=!1,Le=null,Ue=null,Ee=null,Be=!1}}}function o(){let H=!1,Be=null,Le=null,Ue=null,Ee=null,G=null,Ae=null,Ke=null,Ut=null;return{setTest:function(lt){H||(lt?W(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(lt){Be!==lt&&!H&&(s.stencilMask(lt),Be=lt)},setFunc:function(lt,fn,Ct){(Le!==lt||Ue!==fn||Ee!==Ct)&&(s.stencilFunc(lt,fn,Ct),Le=lt,Ue=fn,Ee=Ct)},setOp:function(lt,fn,Ct){(G!==lt||Ae!==fn||Ke!==Ct)&&(s.stencilOp(lt,fn,Ct),G=lt,Ae=fn,Ke=Ct)},setLocked:function(lt){H=lt},setClear:function(lt){Ut!==lt&&(s.clearStencil(lt),Ut=lt)},reset:function(){H=!1,Be=null,Le=null,Ue=null,Ee=null,G=null,Ae=null,Ke=null,Ut=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,y=[],E=null,A=!1,S=null,v=null,P=null,U=null,z=null,V=null,O=null,B=new Tt(0,0,0),re=0,C=!1,R=null,k=null,ae=null,ce=null,pe=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=Y>=2);let ue=null,me={};const D=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),xe=new An().fromArray(D),Se=new An().fromArray(Q);function De(H,Be,Le,Ue){const Ee=new Uint8Array(4),G=s.createTexture();s.bindTexture(H,G),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<Le;Ae++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Be,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Be+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return G}const J={};J[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),W(s.DEPTH_TEST),u.setFunc(Fo),xt(!1),Mt(fv),W(s.CULL_FACE),At(lr);function W(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function Re(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function Fe(H,Be){return x[H]!==Be?(s.bindFramebuffer(H,Be),x[H]=Be,H===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Be),H===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Be),!0):!1}function Xe(H,Be){let Le=y,Ue=!1;if(H){Le=_.get(Be),Le===void 0&&(Le=[],_.set(Be,Le));const Ee=H.textures;if(Le.length!==Ee.length||Le[0]!==s.COLOR_ATTACHMENT0){for(let G=0,Ae=Ee.length;G<Ae;G++)Le[G]=s.COLOR_ATTACHMENT0+G;Le.length=Ee.length,Ue=!0}}else Le[0]!==s.BACK&&(Le[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Le)}function Je(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const Ft={[Ss]:s.FUNC_ADD,[y3]:s.FUNC_SUBTRACT,[S3]:s.FUNC_REVERSE_SUBTRACT};Ft[M3]=s.MIN,Ft[E3]=s.MAX;const Ze={[T3]:s.ZERO,[A3]:s.ONE,[w3]:s.SRC_COLOR,[G0]:s.SRC_ALPHA,[O3]:s.SRC_ALPHA_SATURATE,[U3]:s.DST_COLOR,[C3]:s.DST_ALPHA,[R3]:s.ONE_MINUS_SRC_COLOR,[V0]:s.ONE_MINUS_SRC_ALPHA,[L3]:s.ONE_MINUS_DST_COLOR,[D3]:s.ONE_MINUS_DST_ALPHA,[N3]:s.CONSTANT_COLOR,[P3]:s.ONE_MINUS_CONSTANT_COLOR,[z3]:s.CONSTANT_ALPHA,[I3]:s.ONE_MINUS_CONSTANT_ALPHA};function At(H,Be,Le,Ue,Ee,G,Ae,Ke,Ut,lt){if(H===lr){A===!0&&(Re(s.BLEND),A=!1);return}if(A===!1&&(W(s.BLEND),A=!0),H!==b3){if(H!==S||lt!==C){if((v!==Ss||z!==Ss)&&(s.blendEquation(s.FUNC_ADD),v=Ss,z=Ss),lt)switch(H){case Uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ts:s.blendFunc(s.ONE,s.ONE);break;case dv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Tn("WebGLState: Invalid blending: ",H);break}else switch(H){case Uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dv:Tn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hv:Tn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tn("WebGLState: Invalid blending: ",H);break}P=null,U=null,V=null,O=null,B.set(0,0,0),re=0,S=H,C=lt}return}Ee=Ee||Be,G=G||Le,Ae=Ae||Ue,(Be!==v||Ee!==z)&&(s.blendEquationSeparate(Ft[Be],Ft[Ee]),v=Be,z=Ee),(Le!==P||Ue!==U||G!==V||Ae!==O)&&(s.blendFuncSeparate(Ze[Le],Ze[Ue],Ze[G],Ze[Ae]),P=Le,U=Ue,V=G,O=Ae),(Ke.equals(B)===!1||Ut!==re)&&(s.blendColor(Ke.r,Ke.g,Ke.b,Ut),B.copy(Ke),re=Ut),S=H,C=!1}function F(H,Be){H.side===ga?Re(s.CULL_FACE):W(s.CULL_FACE);let Le=H.side===Di;Be&&(Le=!Le),xt(Le),H.blending===Uo&&H.transparent===!1?At(lr):At(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ue=H.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),We(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?W(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(H){R!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),R=H)}function Mt(H){H!==x3?(W(s.CULL_FACE),H!==k&&(H===fv?s.cullFace(s.BACK):H===_3?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),k=H}function qt(H){H!==ae&&(N&&s.lineWidth(H),ae=H)}function We(H,Be,Le){H?(W(s.POLYGON_OFFSET_FILL),(ce!==Be||pe!==Le)&&(s.polygonOffset(Be,Le),ce=Be,pe=Le)):Re(s.POLYGON_OFFSET_FILL)}function Kt(H){H?W(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function it(H){H===void 0&&(H=s.TEXTURE0+K-1),ue!==H&&(s.activeTexture(H),ue=H)}function _t(H,Be,Le){Le===void 0&&(ue===null?Le=s.TEXTURE0+K-1:Le=ue);let Ue=me[Le];Ue===void 0&&(Ue={type:void 0,texture:void 0},me[Le]=Ue),(Ue.type!==H||Ue.texture!==Be)&&(ue!==Le&&(s.activeTexture(Le),ue=Le),s.bindTexture(H,Be||J[H]),Ue.type=H,Ue.texture=Be)}function L(){const H=me[ue];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ve(){try{s.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ye(){try{s.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function et(){try{s.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ie(){try{s.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ot(){try{s.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function $e(){try{s.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Me(){try{s.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Te(H){xe.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),xe.copy(H))}function at(H){Se.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Se.copy(H))}function qe(H,Be){let Le=p.get(Be);Le===void 0&&(Le=new WeakMap,p.set(Be,Le));let Ue=Le.get(H);Ue===void 0&&(Ue=s.getUniformBlockIndex(Be,H.name),Le.set(H,Ue))}function Ve(H,Be){const Ue=p.get(Be).get(H);m.get(Be)!==Ue&&(s.uniformBlockBinding(Be,Ue,H.__bindingPointIndex),m.set(Be,Ue))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ue=null,me={},x={},_=new WeakMap,y=[],E=null,A=!1,S=null,v=null,P=null,U=null,z=null,V=null,O=null,B=new Tt(0,0,0),re=0,C=!1,R=null,k=null,ae=null,ce=null,pe=null,xe.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:W,disable:Re,bindFramebuffer:Fe,drawBuffers:Xe,useProgram:Je,setBlending:At,setMaterial:F,setFlipSided:xt,setCullFace:Mt,setLineWidth:qt,setPolygonOffset:We,setScissorTest:Kt,activeTexture:it,bindTexture:_t,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:ee,texImage2D:$e,texImage3D:Me,updateUBOMapping:qe,uniformBlockBinding:Ve,texStorage2D:Ie,texStorage3D:ot,texSubImage2D:ve,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:et,scissor:Te,viewport:at,reset:dt}}function Uw(s,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new jt,g=new WeakMap;let x;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,M){return y?new OffscreenCanvas(L,M):uc("canvas")}function A(L,M,ee){let ve=1;const ye=_t(L);if((ye.width>ee||ye.height>ee)&&(ve=ee/Math.max(ye.width,ye.height)),ve<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(ve*ye.width),et=Math.floor(ve*ye.height);x===void 0&&(x=E(he,et));const Ie=M?E(he,et):x;return Ie.width=he,Ie.height=et,Ie.getContext("2d").drawImage(L,0,0,he,et),St("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+et+")."),Ie}else return"data"in L&&St("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,M,ee,ve,ye=!1){if(L!==null){if(s[L]!==void 0)return s[L];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=M;if(M===s.RED&&(ee===s.FLOAT&&(he=s.R32F),ee===s.HALF_FLOAT&&(he=s.R16F),ee===s.UNSIGNED_BYTE&&(he=s.R8)),M===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.R8UI),ee===s.UNSIGNED_SHORT&&(he=s.R16UI),ee===s.UNSIGNED_INT&&(he=s.R32UI),ee===s.BYTE&&(he=s.R8I),ee===s.SHORT&&(he=s.R16I),ee===s.INT&&(he=s.R32I)),M===s.RG&&(ee===s.FLOAT&&(he=s.RG32F),ee===s.HALF_FLOAT&&(he=s.RG16F),ee===s.UNSIGNED_BYTE&&(he=s.RG8)),M===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RG8UI),ee===s.UNSIGNED_SHORT&&(he=s.RG16UI),ee===s.UNSIGNED_INT&&(he=s.RG32UI),ee===s.BYTE&&(he=s.RG8I),ee===s.SHORT&&(he=s.RG16I),ee===s.INT&&(he=s.RG32I)),M===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ee===s.UNSIGNED_INT&&(he=s.RGB32UI),ee===s.BYTE&&(he=s.RGB8I),ee===s.SHORT&&(he=s.RGB16I),ee===s.INT&&(he=s.RGB32I)),M===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ee===s.UNSIGNED_INT&&(he=s.RGBA32UI),ee===s.BYTE&&(he=s.RGBA8I),ee===s.SHORT&&(he=s.RGBA16I),ee===s.INT&&(he=s.RGBA32I)),M===s.RGB&&(ee===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),M===s.RGBA){const et=ye?_f:Wt.getTransfer(ve);ee===s.FLOAT&&(he=s.RGBA32F),ee===s.HALF_FLOAT&&(he=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(he=et===an?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function z(L,M){let ee;return L?M===null||M===Ls||M===oc?ee=s.DEPTH24_STENCIL8:M===sr?ee=s.DEPTH32F_STENCIL8:M===sc&&(ee=s.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ls||M===oc?ee=s.DEPTH_COMPONENT24:M===sr?ee=s.DEPTH_COMPONENT32F:M===sc&&(ee=s.DEPTH_COMPONENT16),ee}function V(L,M){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==li&&L.minFilter!==si?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function O(L){const M=L.target;M.removeEventListener("dispose",O),re(M),M.isVideoTexture&&g.delete(M)}function B(L){const M=L.target;M.removeEventListener("dispose",B),R(M)}function re(L){const M=a.get(L);if(M.__webglInit===void 0)return;const ee=L.source,ve=_.get(ee);if(ve){const ye=ve[M.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&C(L),Object.keys(ve).length===0&&_.delete(ee)}a.remove(L)}function C(L){const M=a.get(L);s.deleteTexture(M.__webglTexture);const ee=L.source,ve=_.get(ee);delete ve[M.__cacheKey],u.memory.textures--}function R(L){const M=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(M.__webglFramebuffer[ve]))for(let ye=0;ye<M.__webglFramebuffer[ve].length;ye++)s.deleteFramebuffer(M.__webglFramebuffer[ve][ye]);else s.deleteFramebuffer(M.__webglFramebuffer[ve]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ve])}else{if(Array.isArray(M.__webglFramebuffer))for(let ve=0;ve<M.__webglFramebuffer.length;ve++)s.deleteFramebuffer(M.__webglFramebuffer[ve]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ve=0;ve<M.__webglColorRenderbuffer.length;ve++)M.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ve]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=L.textures;for(let ve=0,ye=ee.length;ve<ye;ve++){const he=a.get(ee[ve]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),u.memory.textures--),a.remove(ee[ve])}a.remove(L)}let k=0;function ae(){k=0}function ce(){const L=k;return L>=o.maxTextures&&St("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function pe(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function K(L,M){const ee=a.get(L);if(L.isVideoTexture&&Kt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ee.__version!==L.version){const ve=L.image;if(ve===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{J(ee,L,M);return}}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+M)}function N(L,M){const ee=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){J(ee,L,M);return}else L.isExternalTexture&&(ee.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+M)}function Y(L,M){const ee=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){J(ee,L,M);return}n.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+M)}function X(L,M){const ee=a.get(L);if(L.version>0&&ee.__version!==L.version){W(ee,L,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+M)}const ue={[rc]:s.REPEAT,[Ci]:s.CLAMP_TO_EDGE,[Q0]:s.MIRRORED_REPEAT},me={[li]:s.NEAREST,[q3]:s.NEAREST_MIPMAP_NEAREST,[Lu]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[$h]:s.LINEAR_MIPMAP_NEAREST,[As]:s.LINEAR_MIPMAP_LINEAR},D={[Q3]:s.NEVER,[aS]:s.ALWAYS,[J3]:s.LESS,[$2]:s.LEQUAL,[eS]:s.EQUAL,[iS]:s.GEQUAL,[tS]:s.GREATER,[nS]:s.NOTEQUAL};function Q(L,M){if(M.type===sr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===si||M.magFilter===$h||M.magFilter===Lu||M.magFilter===As||M.minFilter===si||M.minFilter===$h||M.minFilter===Lu||M.minFilter===As)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ue[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ue[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ue[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,me[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,D[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===li||M.minFilter!==Lu&&M.minFilter!==As||M.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function xe(L,M){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",O));const ve=M.source;let ye=_.get(ve);ye===void 0&&(ye={},_.set(ve,ye));const he=pe(M);if(he!==L.__cacheKey){ye[he]===void 0&&(ye[he]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ye[he].usedTimes++;const et=ye[L.__cacheKey];et!==void 0&&(ye[L.__cacheKey].usedTimes--,et.usedTimes===0&&C(M)),L.__cacheKey=he,L.__webglTexture=ye[he].texture}return ee}function Se(L,M,ee){return Math.floor(Math.floor(L/ee)/M)}function De(L,M,ee,ve){const he=L.updateRanges;if(he.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,ee,ve,M.data);else{he.sort((Me,Te)=>Me.start-Te.start);let et=0;for(let Me=1;Me<he.length;Me++){const Te=he[et],at=he[Me],qe=Te.start+Te.count,Ve=Se(at.start,M.width,4),dt=Se(Te.start,M.width,4);at.start<=qe+1&&Ve===dt&&Se(at.start+at.count-1,M.width,4)===Ve?Te.count=Math.max(Te.count,at.start+at.count-Te.start):(++et,he[et]=at)}he.length=et+1;const Ie=s.getParameter(s.UNPACK_ROW_LENGTH),ot=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Me=0,Te=he.length;Me<Te;Me++){const at=he[Me],qe=Math.floor(at.start/4),Ve=Math.ceil(at.count/4),dt=qe%M.width,H=Math.floor(qe/M.width),Be=Ve,Le=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,dt,H,Be,Le,ee,ve,M.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function J(L,M,ee){let ve=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ve=s.TEXTURE_3D);const ye=xe(L,M),he=M.source;n.bindTexture(ve,L.__webglTexture,s.TEXTURE0+ee);const et=a.get(he);if(he.version!==et.__version||ye===!0){n.activeTexture(s.TEXTURE0+ee);const Ie=Wt.getPrimaries(Wt.workingColorSpace),ot=M.colorSpace===Vr?null:Wt.getPrimaries(M.colorSpace),$e=M.colorSpace===Vr||Ie===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Me=A(M.image,!1,o.maxTextureSize);Me=it(M,Me);const Te=c.convert(M.format,M.colorSpace),at=c.convert(M.type);let qe=U(M.internalFormat,Te,at,M.colorSpace,M.isVideoTexture);Q(ve,M);let Ve;const dt=M.mipmaps,H=M.isVideoTexture!==!0,Be=et.__version===void 0||ye===!0,Le=he.dataReady,Ue=V(M,Me);if(M.isDepthTexture)qe=z(M.format===cc,M.type),Be&&(H?n.texStorage2D(s.TEXTURE_2D,1,qe,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,qe,Me.width,Me.height,0,Te,at,null));else if(M.isDataTexture)if(dt.length>0){H&&Be&&n.texStorage2D(s.TEXTURE_2D,Ue,qe,dt[0].width,dt[0].height);for(let Ee=0,G=dt.length;Ee<G;Ee++)Ve=dt[Ee],H?Le&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ve.width,Ve.height,Te,at,Ve.data):n.texImage2D(s.TEXTURE_2D,Ee,qe,Ve.width,Ve.height,0,Te,at,Ve.data);M.generateMipmaps=!1}else H?(Be&&n.texStorage2D(s.TEXTURE_2D,Ue,qe,Me.width,Me.height),Le&&De(M,Me,Te,at)):n.texImage2D(s.TEXTURE_2D,0,qe,Me.width,Me.height,0,Te,at,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,qe,dt[0].width,dt[0].height,Me.depth);for(let Ee=0,G=dt.length;Ee<G;Ee++)if(Ve=dt[Ee],M.format!==_a)if(Te!==null)if(H){if(Le)if(M.layerUpdates.size>0){const Ae=Wv(Ve.width,Ve.height,M.format,M.type);for(const Ke of M.layerUpdates){const Ut=Ve.data.subarray(Ke*Ae/Ve.data.BYTES_PER_ELEMENT,(Ke+1)*Ae/Ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,Ke,Ve.width,Ve.height,1,Te,Ut)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Ve.width,Ve.height,Me.depth,Te,Ve.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,qe,Ve.width,Ve.height,Me.depth,0,Ve.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Le&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Ve.width,Ve.height,Me.depth,Te,at,Ve.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Ee,qe,Ve.width,Ve.height,Me.depth,0,Te,at,Ve.data)}else{H&&Be&&n.texStorage2D(s.TEXTURE_2D,Ue,qe,dt[0].width,dt[0].height);for(let Ee=0,G=dt.length;Ee<G;Ee++)Ve=dt[Ee],M.format!==_a?Te!==null?H?Le&&n.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Ve.width,Ve.height,Te,Ve.data):n.compressedTexImage2D(s.TEXTURE_2D,Ee,qe,Ve.width,Ve.height,0,Ve.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Le&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ve.width,Ve.height,Te,at,Ve.data):n.texImage2D(s.TEXTURE_2D,Ee,qe,Ve.width,Ve.height,0,Te,at,Ve.data)}else if(M.isDataArrayTexture)if(H){if(Be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,qe,Me.width,Me.height,Me.depth),Le)if(M.layerUpdates.size>0){const Ee=Wv(Me.width,Me.height,M.format,M.type);for(const G of M.layerUpdates){const Ae=Me.data.subarray(G*Ee/Me.data.BYTES_PER_ELEMENT,(G+1)*Ee/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,G,Me.width,Me.height,1,Te,at,Ae)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,at,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Me.width,Me.height,Me.depth,0,Te,at,Me.data);else if(M.isData3DTexture)H?(Be&&n.texStorage3D(s.TEXTURE_3D,Ue,qe,Me.width,Me.height,Me.depth),Le&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,at,Me.data)):n.texImage3D(s.TEXTURE_3D,0,qe,Me.width,Me.height,Me.depth,0,Te,at,Me.data);else if(M.isFramebufferTexture){if(Be)if(H)n.texStorage2D(s.TEXTURE_2D,Ue,qe,Me.width,Me.height);else{let Ee=Me.width,G=Me.height;for(let Ae=0;Ae<Ue;Ae++)n.texImage2D(s.TEXTURE_2D,Ae,qe,Ee,G,0,Te,at,null),Ee>>=1,G>>=1}}else if(dt.length>0){if(H&&Be){const Ee=_t(dt[0]);n.texStorage2D(s.TEXTURE_2D,Ue,qe,Ee.width,Ee.height)}for(let Ee=0,G=dt.length;Ee<G;Ee++)Ve=dt[Ee],H?Le&&n.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Te,at,Ve):n.texImage2D(s.TEXTURE_2D,Ee,qe,Te,at,Ve);M.generateMipmaps=!1}else if(H){if(Be){const Ee=_t(Me);n.texStorage2D(s.TEXTURE_2D,Ue,qe,Ee.width,Ee.height)}Le&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,at,Me)}else n.texImage2D(s.TEXTURE_2D,0,qe,Te,at,Me);S(M)&&v(ve),et.__version=he.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function W(L,M,ee){if(M.image.length!==6)return;const ve=xe(L,M),ye=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ee);const he=a.get(ye);if(ye.version!==he.__version||ve===!0){n.activeTexture(s.TEXTURE0+ee);const et=Wt.getPrimaries(Wt.workingColorSpace),Ie=M.colorSpace===Vr?null:Wt.getPrimaries(M.colorSpace),ot=M.colorSpace===Vr||et===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let G=0;G<6;G++)!$e&&!Me?Te[G]=A(M.image[G],!0,o.maxCubemapSize):Te[G]=Me?M.image[G].image:M.image[G],Te[G]=it(M,Te[G]);const at=Te[0],qe=c.convert(M.format,M.colorSpace),Ve=c.convert(M.type),dt=U(M.internalFormat,qe,Ve,M.colorSpace),H=M.isVideoTexture!==!0,Be=he.__version===void 0||ve===!0,Le=ye.dataReady;let Ue=V(M,at);Q(s.TEXTURE_CUBE_MAP,M);let Ee;if($e){H&&Be&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,dt,at.width,at.height);for(let G=0;G<6;G++){Ee=Te[G].mipmaps;for(let Ae=0;Ae<Ee.length;Ae++){const Ke=Ee[Ae];M.format!==_a?qe!==null?H?Le&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae,0,0,Ke.width,Ke.height,qe,Ke.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae,dt,Ke.width,Ke.height,0,Ke.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Le&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae,0,0,Ke.width,Ke.height,qe,Ve,Ke.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae,dt,Ke.width,Ke.height,0,qe,Ve,Ke.data)}}}else{if(Ee=M.mipmaps,H&&Be){Ee.length>0&&Ue++;const G=_t(Te[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,dt,G.width,G.height)}for(let G=0;G<6;G++)if(Me){H?Le&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Te[G].width,Te[G].height,qe,Ve,Te[G].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,dt,Te[G].width,Te[G].height,0,qe,Ve,Te[G].data);for(let Ae=0;Ae<Ee.length;Ae++){const Ut=Ee[Ae].image[G].image;H?Le&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae+1,0,0,Ut.width,Ut.height,qe,Ve,Ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae+1,dt,Ut.width,Ut.height,0,qe,Ve,Ut.data)}}else{H?Le&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,qe,Ve,Te[G]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,dt,qe,Ve,Te[G]);for(let Ae=0;Ae<Ee.length;Ae++){const Ke=Ee[Ae];H?Le&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae+1,0,0,qe,Ve,Ke.image[G]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae+1,dt,qe,Ve,Ke.image[G])}}}S(M)&&v(s.TEXTURE_CUBE_MAP),he.__version=ye.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function Re(L,M,ee,ve,ye,he){const et=c.convert(ee.format,ee.colorSpace),Ie=c.convert(ee.type),ot=U(ee.internalFormat,et,Ie,ee.colorSpace),$e=a.get(M),Me=a.get(ee);if(Me.__renderTarget=M,!$e.__hasExternalTextures){const Te=Math.max(1,M.width>>he),at=Math.max(1,M.height>>he);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,he,ot,Te,at,M.depth,0,et,Ie,null):n.texImage2D(ye,he,ot,Te,at,0,et,Ie,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),We(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ye,Me.__webglTexture,0,qt(M)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,ye,Me.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(L,M,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const ve=M.depthTexture,ye=ve&&ve.isDepthTexture?ve.type:null,he=z(M.stencilBuffer,ye),et=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=qt(M);We(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,he,M.width,M.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,he,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,he,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,L)}else{const ve=M.textures;for(let ye=0;ye<ve.length;ye++){const he=ve[ye],et=c.convert(he.format,he.colorSpace),Ie=c.convert(he.type),ot=U(he.internalFormat,et,Ie,he.colorSpace),$e=qt(M);ee&&We(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ot,M.width,M.height):We(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,ot,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ot,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=a.get(M.depthTexture);ve.__renderTarget=M,(!ve.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const ye=ve.__webglTexture,he=qt(M);if(M.depthTexture.format===lc)We(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(M.depthTexture.format===cc)We(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Je(L){const M=a.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const ve=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ve){const ye=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ve.removeEventListener("dispose",ye)};ve.addEventListener("dispose",ye),M.__depthDisposeCallback=ye}M.__boundDepthTexture=ve}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ve=L.texture.mipmaps;ve&&ve.length>0?Xe(M.__webglFramebuffer[0],L):Xe(M.__webglFramebuffer,L)}else if(ee){M.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ve]),M.__webglDepthbuffer[ve]===void 0)M.__webglDepthbuffer[ve]=s.createRenderbuffer(),Fe(M.__webglDepthbuffer[ve],L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}else{const ve=L.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Fe(M.__webglDepthbuffer,L,!1);else{const ye=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(L,M,ee){const ve=a.get(L);M!==void 0&&Re(ve.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Je(L)}function Ze(L){const M=L.texture,ee=a.get(L),ve=a.get(M);L.addEventListener("dispose",B);const ye=L.textures,he=L.isWebGLCubeRenderTarget===!0,et=ye.length>1;if(et||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=M.version,u.memory.textures++),he){ee.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[Ie]=[];for(let ot=0;ot<M.mipmaps.length;ot++)ee.__webglFramebuffer[Ie][ot]=s.createFramebuffer()}else ee.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ie=0;Ie<M.mipmaps.length;Ie++)ee.__webglFramebuffer[Ie]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(et)for(let Ie=0,ot=ye.length;Ie<ot;Ie++){const $e=a.get(ye[Ie]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&We(L)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ye.length;Ie++){const ot=ye[Ie];ee.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const $e=c.convert(ot.format,ot.colorSpace),Me=c.convert(ot.type),Te=U(ot.internalFormat,$e,Me,ot.colorSpace,L.isXRRenderTarget===!0),at=qt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Te,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(ee.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Q(s.TEXTURE_CUBE_MAP,M);for(let Ie=0;Ie<6;Ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let ot=0;ot<M.mipmaps.length;ot++)Re(ee.__webglFramebuffer[Ie][ot],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ot);else Re(ee.__webglFramebuffer[Ie],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(M)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(et){for(let Ie=0,ot=ye.length;Ie<ot;Ie++){const $e=ye[Ie],Me=a.get($e);let Te=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,Me.__webglTexture),Q(Te,$e),Re(ee.__webglFramebuffer,L,$e,s.COLOR_ATTACHMENT0+Ie,Te,0),S($e)&&v(Te)}n.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ie,ve.__webglTexture),Q(Ie,M),M.mipmaps&&M.mipmaps.length>0)for(let ot=0;ot<M.mipmaps.length;ot++)Re(ee.__webglFramebuffer[ot],L,M,s.COLOR_ATTACHMENT0,Ie,ot);else Re(ee.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,Ie,0);S(M)&&v(Ie),n.unbindTexture()}L.depthBuffer&&Je(L)}function At(L){const M=L.textures;for(let ee=0,ve=M.length;ee<ve;ee++){const ye=M[ee];if(S(ye)){const he=P(L),et=a.get(ye).__webglTexture;n.bindTexture(he,et),v(he),n.unbindTexture()}}}const F=[],xt=[];function Mt(L){if(L.samples>0){if(We(L)===!1){const M=L.textures,ee=L.width,ve=L.height;let ye=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=a.get(L),Ie=M.length>1;if(Ie)for(let $e=0;$e<M.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer);const ot=L.texture.mipmaps;ot&&ot.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let $e=0;$e<M.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,et.__webglColorRenderbuffer[$e]);const Me=a.get(M[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,ye,s.NEAREST),m===!0&&(F.length=0,xt.length=0,F.push(s.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(F.push(he),xt.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let $e=0;$e<M.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,et.__webglColorRenderbuffer[$e]);const Me=a.get(M[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Me,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function qt(L){return Math.min(o.maxSamples,L.samples)}function We(L){const M=a.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Kt(L){const M=u.render.frame;g.get(L)!==M&&(g.set(L,M),L.update())}function it(L,M){const ee=L.colorSpace,ve=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==Vo&&ee!==Vr&&(Wt.getTransfer(ee)===an?(ve!==_a||ye!==Oa)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tn("WebGLTextures: Unsupported texture color space:",ee)),M}function _t(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=Ft,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=We}function Lw(s,e){function n(a,o=Vr){let c;const u=Wt.getTransfer(o);if(a===Oa)return s.UNSIGNED_BYTE;if(a===em)return s.UNSIGNED_SHORT_4_4_4_4;if(a===tm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===X2)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===W2)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===j2)return s.BYTE;if(a===k2)return s.SHORT;if(a===sc)return s.UNSIGNED_SHORT;if(a===Jp)return s.INT;if(a===Ls)return s.UNSIGNED_INT;if(a===sr)return s.FLOAT;if(a===Zo)return s.HALF_FLOAT;if(a===q2)return s.ALPHA;if(a===Y2)return s.RGB;if(a===_a)return s.RGBA;if(a===lc)return s.DEPTH_COMPONENT;if(a===cc)return s.DEPTH_STENCIL;if(a===Z2)return s.RED;if(a===nm)return s.RED_INTEGER;if(a===im)return s.RG;if(a===am)return s.RG_INTEGER;if(a===rm)return s.RGBA_INTEGER;if(a===af||a===rf||a===sf||a===of)if(u===an)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===af)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===rf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===sf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===of)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===af)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===rf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===sf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===of)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===J0||a===ep||a===tp||a===np)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===J0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ep)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===tp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===np)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ip||a===ap||a===rp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ip||a===ap)return u===an?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===rp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===sp||a===op||a===lp||a===cp||a===up||a===fp||a===dp||a===hp||a===pp||a===mp||a===gp||a===xp||a===_p||a===vp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===sp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===op)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===lp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===up)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===dp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===hp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===pp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===mp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===gp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===xp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===_p)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===vp)return u===an?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===bp||a===yp||a===Sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===bp)return u===an?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===yp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Mp||a===Ep||a===Tp||a===Ap)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Mp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Tp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ap)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===oc?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const Ow=`
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

}`;class Pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new sb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new oi({vertexShader:Ow,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new on(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zw extends $o{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,x=null,_=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",S=new Pw,v={},P=n.getContextAttributes();let U=null,z=null;const V=[],O=[],B=new jt;let re=null;const C=new aa;C.viewport=new An;const R=new aa;R.viewport=new An;const k=[C,R],ae=new eM;let ce=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let W=V[J];return W===void 0&&(W=new v0,V[J]=W),W.getTargetRaySpace()},this.getControllerGrip=function(J){let W=V[J];return W===void 0&&(W=new v0,V[J]=W),W.getGripSpace()},this.getHand=function(J){let W=V[J];return W===void 0&&(W=new v0,V[J]=W),W.getHandSpace()};function K(J){const W=O.indexOf(J.inputSource);if(W===-1)return;const Re=V[W];Re!==void 0&&(Re.update(J.inputSource,J.frame,p||u),Re.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",N),o.removeEventListener("inputsourceschange",Y);for(let J=0;J<V.length;J++){const W=O[J];W!==null&&(O[J]=null,V[J].disconnect(W))}ce=null,pe=null,S.reset();for(const J in v)delete v[J];e.setRenderTarget(U),y=null,_=null,x=null,o=null,z=null,De.stop(),a.isPresenting=!1,e.setPixelRatio(re),e.setSize(B.width,B.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,a.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,a.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",N),o.addEventListener("inputsourceschange",Y),P.xrCompatible!==!0&&await n.makeXRCompatible(),re=e.getPixelRatio(),e.getSize(B),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Fe=null,Xe=null;P.depth&&(Xe=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=P.stencil?cc:lc,Fe=P.stencil?oc:Ls);const Je={colorFormat:n.RGBA8,depthFormat:Xe,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(Je),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),z=new Os(_.textureWidth,_.textureHeight,{format:_a,type:Oa,depthTexture:new rb(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Re={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Re),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),z=new Os(y.framebufferWidth,y.framebufferHeight,{format:_a,type:Oa,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(J){for(let W=0;W<J.removed.length;W++){const Re=J.removed[W],Fe=O.indexOf(Re);Fe>=0&&(O[Fe]=null,V[Fe].disconnect(Re))}for(let W=0;W<J.added.length;W++){const Re=J.added[W];let Fe=O.indexOf(Re);if(Fe===-1){for(let Je=0;Je<V.length;Je++)if(Je>=O.length){O.push(Re),Fe=Je;break}else if(O[Je]===null){O[Je]=Re,Fe=Je;break}if(Fe===-1)break}const Xe=V[Fe];Xe&&Xe.connect(Re)}}const X=new fe,ue=new fe;function me(J,W,Re){X.setFromMatrixPosition(W.matrixWorld),ue.setFromMatrixPosition(Re.matrixWorld);const Fe=X.distanceTo(ue),Xe=W.projectionMatrix.elements,Je=Re.projectionMatrix.elements,Ft=Xe[14]/(Xe[10]-1),Ze=Xe[14]/(Xe[10]+1),At=(Xe[9]+1)/Xe[5],F=(Xe[9]-1)/Xe[5],xt=(Xe[8]-1)/Xe[0],Mt=(Je[8]+1)/Je[0],qt=Ft*xt,We=Ft*Mt,Kt=Fe/(-xt+Mt),it=Kt*-xt;if(W.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(it),J.translateZ(Kt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Xe[10]===-1)J.projectionMatrix.copy(W.projectionMatrix),J.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const _t=Ft+Kt,L=Ze+Kt,M=qt-it,ee=We+(Fe-it),ve=At*Ze/L*_t,ye=F*Ze/L*_t;J.projectionMatrix.makePerspective(M,ee,ve,ye,_t,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function D(J,W){W===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(W.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let W=J.near,Re=J.far;S.texture!==null&&(S.depthNear>0&&(W=S.depthNear),S.depthFar>0&&(Re=S.depthFar)),ae.near=R.near=C.near=W,ae.far=R.far=C.far=Re,(ce!==ae.near||pe!==ae.far)&&(o.updateRenderState({depthNear:ae.near,depthFar:ae.far}),ce=ae.near,pe=ae.far),ae.layers.mask=J.layers.mask|6,C.layers.mask=ae.layers.mask&3,R.layers.mask=ae.layers.mask&5;const Fe=J.parent,Xe=ae.cameras;D(ae,Fe);for(let Je=0;Je<Xe.length;Je++)D(Xe[Je],Fe);Xe.length===2?me(ae,C,R):ae.projectionMatrix.copy(C.projectionMatrix),Q(J,ae,Fe)};function Q(J,W,Re){Re===null?J.matrix.copy(W.matrixWorld):(J.matrix.copy(Re.matrixWorld),J.matrix.invert(),J.matrix.multiply(W.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(W.projectionMatrix),J.projectionMatrixInverse.copy(W.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wp*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(J){m=J,_!==null&&(_.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ae)},this.getCameraTexture=function(J){return v[J]};let xe=null;function Se(J,W){if(g=W.getViewerPose(p||u),E=W,g!==null){const Re=g.views;y!==null&&(e.setRenderTargetFramebuffer(z,y.framebuffer),e.setRenderTarget(z));let Fe=!1;Re.length!==ae.cameras.length&&(ae.cameras.length=0,Fe=!0);for(let Ze=0;Ze<Re.length;Ze++){const At=Re[Ze];let F=null;if(y!==null)F=y.getViewport(At);else{const Mt=x.getViewSubImage(_,At);F=Mt.viewport,Ze===0&&(e.setRenderTargetTextures(z,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(z))}let xt=k[Ze];xt===void 0&&(xt=new aa,xt.layers.enable(Ze),xt.viewport=new An,k[Ze]=xt),xt.matrix.fromArray(At.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(At.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(F.x,F.y,F.width,F.height),Ze===0&&(ae.matrix.copy(xt.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),Fe===!0&&ae.cameras.push(xt)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=a.getBinding();const Ze=x.getDepthInformation(Re[0]);Ze&&Ze.isValid&&Ze.texture&&S.init(Ze,o.renderState)}if(Xe&&Xe.includes("camera-access")&&A){e.state.unbindTexture(),x=a.getBinding();for(let Ze=0;Ze<Re.length;Ze++){const At=Re[Ze].camera;if(At){let F=v[At];F||(F=new sb,v[At]=F);const xt=x.getCameraImage(At);F.sourceTexture=xt}}}}for(let Re=0;Re<V.length;Re++){const Fe=O[Re],Xe=V[Re];Fe!==null&&Xe!==void 0&&Xe.update(Fe,W,p||u)}xe&&xe(J,W),W.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:W}),E=null}const De=new lb;De.setAnimationLoop(Se),this.setAnimationLoop=function(J){xe=J},this.dispose=function(){}}}const bs=new fr,Iw=new pn;function Bw(s,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function a(S,v){v.color.getRGB(S.fogColor.value,nb(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,P,U,z){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),x(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),_(S,v),v.isMeshPhysicalMaterial&&y(S,v,z)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,P,U):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Di&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Di&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const P=e.get(v),U=P.envMap,z=P.envMapRotation;U&&(S.envMap.value=U,bs.copy(z),bs.x*=-1,bs.y*=-1,bs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),S.envMapRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(bs)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,P,U){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*P,S.scale.value=U*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function _(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,P){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Di&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const P=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Fw(s,e,n,a){let o={},c={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const z=U.program;a.uniformBlockBinding(P,z)}function p(P,U){let z=o[P.id];z===void 0&&(E(P),z=g(P),o[P.id]=z,P.addEventListener("dispose",S));const V=U.program;a.updateUBOMapping(P,V);const O=e.render.frame;c[P.id]!==O&&(_(P),c[P.id]=O)}function g(P){const U=x();P.__bindingPointIndex=U;const z=s.createBuffer(),V=P.__size,O=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,z),s.bufferData(s.UNIFORM_BUFFER,V,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,z),z}function x(){for(let P=0;P<d;P++)if(u.indexOf(P)===-1)return u.push(P),P;return Tn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const U=o[P.id],z=P.uniforms,V=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let O=0,B=z.length;O<B;O++){const re=Array.isArray(z[O])?z[O]:[z[O]];for(let C=0,R=re.length;C<R;C++){const k=re[C];if(y(k,O,C,V)===!0){const ae=k.__offset,ce=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let K=0;K<ce.length;K++){const N=ce[K],Y=A(N);typeof N=="number"||typeof N=="boolean"?(k.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,ae+pe,k.__data)):N.isMatrix3?(k.__data[0]=N.elements[0],k.__data[1]=N.elements[1],k.__data[2]=N.elements[2],k.__data[3]=0,k.__data[4]=N.elements[3],k.__data[5]=N.elements[4],k.__data[6]=N.elements[5],k.__data[7]=0,k.__data[8]=N.elements[6],k.__data[9]=N.elements[7],k.__data[10]=N.elements[8],k.__data[11]=0):(N.toArray(k.__data,pe),pe+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(P,U,z,V){const O=P.value,B=U+"_"+z;if(V[B]===void 0)return typeof O=="number"||typeof O=="boolean"?V[B]=O:V[B]=O.clone(),!0;{const re=V[B];if(typeof O=="number"||typeof O=="boolean"){if(re!==O)return V[B]=O,!0}else if(re.equals(O)===!1)return re.copy(O),!0}return!1}function E(P){const U=P.uniforms;let z=0;const V=16;for(let B=0,re=U.length;B<re;B++){const C=Array.isArray(U[B])?U[B]:[U[B]];for(let R=0,k=C.length;R<k;R++){const ae=C[R],ce=Array.isArray(ae.value)?ae.value:[ae.value];for(let pe=0,K=ce.length;pe<K;pe++){const N=ce[pe],Y=A(N),X=z%V,ue=X%Y.boundary,me=X+ue;z+=ue,me!==0&&V-me<Y.storage&&(z+=V-me),ae.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=z,z+=Y.storage}}}const O=z%V;return O>0&&(z+=V-O),P.__size=z,P.__cache={},this}function A(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):St("WebGLRenderer: Unsupported uniform value type.",P),U}function S(P){const U=P.target;U.removeEventListener("dispose",S);const z=u.indexOf(U.__bindingPointIndex);u.splice(z,1),s.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function v(){for(const P in o)s.deleteBuffer(o[P]);u=[],o={},c={}}return{bind:m,update:p,dispose:v}}const Hw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ar=null;function Gw(){return ar===null&&(ar=new OS(Hw,32,32,im,Zo),ar.minFilter=si,ar.magFilter=si,ar.wrapS=Ci,ar.wrapT=Ci,ar.generateMipmaps=!1,ar.needsUpdate=!0),ar}class Vw{constructor(e={}){const{canvas:n=rS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=new Set([rm,am,nm]),A=new Set([Oa,Ls,sc,oc,em,tm]),S=new Uint32Array(4),v=new Int32Array(4);let P=null,U=null;const z=[],V=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let B=!1;this._outputColorSpace=Ri;let re=0,C=0,R=null,k=-1,ae=null;const ce=new An,pe=new An;let K=null;const N=new Tt(0);let Y=0,X=n.width,ue=n.height,me=1,D=null,Q=null;const xe=new An(0,0,X,ue),Se=new An(0,0,X,ue);let De=!1;const J=new zf;let W=!1,Re=!1;const Fe=new pn,Xe=new fe,Je=new An,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function At(){return R===null?me:1}let F=a;function xt(w,q){return n.getContext(w,q)}try{const w={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qp}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",G,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),F===null){const q="webgl2";if(F=xt(q,w),F===null)throw xt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let Mt,qt,We,Kt,it,_t,L,M,ee,ve,ye,he,et,Ie,ot,$e,Me,Te,at,qe,Ve,dt,H,Be;function Le(){Mt=new $T(F),Mt.init(),dt=new Lw(F,Mt),qt=new GT(F,Mt,e,dt),We=new Dw(F,Mt),qt.reversedDepthBuffer&&_&&We.buffers.depth.setReversed(!0),Kt=new JT(F),it=new xw,_t=new Uw(F,Mt,We,it,qt,dt,Kt),L=new jT(O),M=new ZT(O),ee=new iM(F),H=new FT(F,ee),ve=new KT(F,ee,Kt,H),ye=new tA(F,ve,ee,Kt),at=new eA(F,qt,_t),$e=new VT(it),he=new gw(O,L,M,Mt,qt,H,$e),et=new Bw(O,it),Ie=new vw,ot=new Tw(Mt),Te=new BT(O,L,M,We,ye,y,m),Me=new Rw(O,ye,qt),Be=new Fw(F,Kt,qt,We),qe=new HT(F,Mt,Kt),Ve=new QT(F,Mt,Kt),Kt.programs=he.programs,O.capabilities=qt,O.extensions=Mt,O.properties=it,O.renderLists=Ie,O.shadowMap=Me,O.state=We,O.info=Kt}Le();const Ue=new zw(O,F);this.xr=Ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(w){w!==void 0&&(me=w,this.setSize(X,ue,!1))},this.getSize=function(w){return w.set(X,ue)},this.setSize=function(w,q,se=!0){if(Ue.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,ue=q,n.width=Math.floor(w*me),n.height=Math.floor(q*me),se===!0&&(n.style.width=w+"px",n.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(X*me,ue*me).floor()},this.setDrawingBufferSize=function(w,q,se){X=w,ue=q,me=se,n.width=Math.floor(w*se),n.height=Math.floor(q*se),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(ce)},this.getViewport=function(w){return w.copy(xe)},this.setViewport=function(w,q,se,te){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,q,se,te),We.viewport(ce.copy(xe).multiplyScalar(me).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,q,se,te){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,q,se,te),We.scissor(pe.copy(Se).multiplyScalar(me).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){We.setScissorTest(De=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,se=!0){let te=0;if(w){let $=!1;if(R!==null){const Ce=R.texture.format;$=E.has(Ce)}if($){const Ce=R.texture.type,Oe=A.has(Ce),je=Te.getClearColor(),ke=Te.getClearAlpha(),ct=je.r,ft=je.g,rt=je.b;Oe?(S[0]=ct,S[1]=ft,S[2]=rt,S[3]=ke,F.clearBufferuiv(F.COLOR,0,S)):(v[0]=ct,v[1]=ft,v[2]=rt,v[3]=ke,F.clearBufferiv(F.COLOR,0,v))}else te|=F.COLOR_BUFFER_BIT}q&&(te|=F.DEPTH_BUFFER_BIT),se&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",G,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Te.dispose(),Ie.dispose(),ot.dispose(),it.dispose(),L.dispose(),M.dispose(),ye.dispose(),H.dispose(),Be.dispose(),he.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",oa),Ue.removeEventListener("sessionend",ya),Jn.stop()};function Ee(w){w.preventDefault(),_v("WebGLRenderer: Context Lost."),B=!0}function G(){_v("WebGLRenderer: Context Restored."),B=!1;const w=Kt.autoReset,q=Me.enabled,se=Me.autoUpdate,te=Me.needsUpdate,$=Me.type;Le(),Kt.autoReset=w,Me.enabled=q,Me.autoUpdate=se,Me.needsUpdate=te,Me.type=$}function Ae(w){Tn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){const q=w.target;q.removeEventListener("dispose",Ke),Ut(q)}function Ut(w){lt(w),it.remove(w)}function lt(w){const q=it.get(w).programs;q!==void 0&&(q.forEach(function(se){he.releaseProgram(se)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,se,te,$,Ce){q===null&&(q=Ft);const Oe=$.isMesh&&$.matrixWorld.determinant()<0,je=Jo(w,q,se,te,$);We.setMaterial(te,Oe);let ke=se.index,ct=1;if(te.wireframe===!0){if(ke=ve.getWireframeAttribute(se),ke===void 0)return;ct=2}const ft=se.drawRange,rt=se.attributes.position;let bt=ft.start*ct,Pt=(ft.start+ft.count)*ct;Ce!==null&&(bt=Math.max(bt,Ce.start*ct),Pt=Math.min(Pt,(Ce.start+Ce.count)*ct)),ke!==null?(bt=Math.max(bt,0),Pt=Math.min(Pt,ke.count)):rt!=null&&(bt=Math.max(bt,0),Pt=Math.min(Pt,rt.count));const we=Pt-bt;if(we<0||we===1/0)return;H.setup($,te,je,se,ke);let ze,nt=qe;if(ke!==null&&(ze=ee.get(ke),nt=Ve,nt.setIndex(ze)),$.isMesh)te.wireframe===!0?(We.setLineWidth(te.wireframeLinewidth*At()),nt.setMode(F.LINES)):nt.setMode(F.TRIANGLES);else if($.isLine){let Ne=te.linewidth;Ne===void 0&&(Ne=1),We.setLineWidth(Ne*At()),$.isLineSegments?nt.setMode(F.LINES):$.isLineLoop?nt.setMode(F.LINE_LOOP):nt.setMode(F.LINE_STRIP)}else $.isPoints?nt.setMode(F.POINTS):$.isSprite&&nt.setMode(F.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)fc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ne=$._multiDrawStarts,pt=$._multiDrawCounts,st=$._multiDrawCount,gt=ke?ee.get(ke).bytesPerElement:1,ln=it.get(te).currentProgram.getUniforms();for(let vt=0;vt<st;vt++)ln.setValue(F,"_gl_DrawID",vt),nt.render(Ne[vt]/gt,pt[vt])}else if($.isInstancedMesh)nt.renderInstances(bt,we,$.count);else if(se.isInstancedBufferGeometry){const Ne=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,pt=Math.min(se.instanceCount,Ne);nt.renderInstances(bt,we,pt)}else nt.render(bt,we)};function fn(w,q,se){w.transparent===!0&&w.side===ga&&w.forceSinglePass===!1?(w.side=Di,w.needsUpdate=!0,Sn(w,q,se),w.side=Yr,w.needsUpdate=!0,Sn(w,q,se),w.side=ga):Sn(w,q,se)}this.compile=function(w,q,se=null){se===null&&(se=w),U=ot.get(se),U.init(q),V.push(U),se.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),w!==se&&w.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),U.setupLights();const te=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ce=$.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){const je=Ce[Oe];fn(je,se,$),te.add(je)}else fn(Ce,se,$),te.add(Ce)}),U=V.pop(),te},this.compileAsync=function(w,q,se=null){const te=this.compile(w,q,se);return new Promise($=>{function Ce(){if(te.forEach(function(Oe){it.get(Oe).currentProgram.isReady()&&te.delete(Oe)}),te.size===0){$(w);return}setTimeout(Ce,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ct=null;function Oi(w){Ct&&Ct(w)}function oa(){Jn.stop()}function ya(){Jn.start()}const Jn=new lb;Jn.setAnimationLoop(Oi),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){Ct=w,Ue.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},Ue.addEventListener("sessionstart",oa),Ue.addEventListener("sessionend",ya),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){Tn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(q),q=Ue.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,q,R),U=ot.get(w,V.length),U.init(q),V.push(U),Fe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Fe,La,q.reversedDepth),Re=this.localClippingEnabled,W=$e.init(this.clippingPlanes,Re),P=Ie.get(w,z.length),P.init(),z.push(P),Ue.enabled===!0&&Ue.isPresenting===!0){const Ce=O.xr.getDepthSensingMesh();Ce!==null&&Na(Ce,q,-1/0,O.sortObjects)}Na(w,q,0,O.sortObjects),P.finish(),O.sortObjects===!0&&P.sort(D,Q),Ze=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Ze&&Te.addToRenderList(P,w),this.info.render.frame++,W===!0&&$e.beginShadows();const se=U.state.shadowsArray;Me.render(se,w,q),W===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=P.opaque,$=P.transmissive;if(U.setupLights(),q.isArrayCamera){const Ce=q.cameras;if($.length>0)for(let Oe=0,je=Ce.length;Oe<je;Oe++){const ke=Ce[Oe];_i(te,$,w,ke)}Ze&&Te.render(w);for(let Oe=0,je=Ce.length;Oe<je;Oe++){const ke=Ce[Oe];Zr(P,w,ke,ke.viewport)}}else $.length>0&&_i(te,$,w,q),Ze&&Te.render(w),Zr(P,w,q);R!==null&&C===0&&(_t.updateMultisampleRenderTarget(R),_t.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(O,w,q),H.resetDefaultState(),k=-1,ae=null,V.pop(),V.length>0?(U=V[V.length-1],W===!0&&$e.setGlobalState(O.clippingPlanes,U.state.camera)):U=null,z.pop(),z.length>0?P=z[z.length-1]:P=null};function Na(w,q,se,te){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){te&&Je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Fe);const Oe=ye.update(w),je=w.material;je.visible&&P.push(w,Oe,je,se,Je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const Oe=ye.update(w),je=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Je.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Je.copy(Oe.boundingSphere.center)),Je.applyMatrix4(w.matrixWorld).applyMatrix4(Fe)),Array.isArray(je)){const ke=Oe.groups;for(let ct=0,ft=ke.length;ct<ft;ct++){const rt=ke[ct],bt=je[rt.materialIndex];bt&&bt.visible&&P.push(w,Oe,bt,se,Je.z,rt)}}else je.visible&&P.push(w,Oe,je,se,Je.z,null)}}const Ce=w.children;for(let Oe=0,je=Ce.length;Oe<je;Oe++)Na(Ce[Oe],q,se,te)}function Zr(w,q,se,te){const{opaque:$,transmissive:Ce,transparent:Oe}=w;U.setupLightsView(se),W===!0&&$e.setGlobalState(O.clippingPlanes,se),te&&We.viewport(ce.copy(te)),$.length>0&&ci($,q,se),Ce.length>0&&ci(Ce,q,se),Oe.length>0&&ci(Oe,q,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function _i(w,q,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[te.id]===void 0&&(U.state.transmissionRenderTarget[te.id]=new Os(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float")?Zo:Oa,minFilter:As,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const Ce=U.state.transmissionRenderTarget[te.id],Oe=te.viewport||ce;Ce.setSize(Oe.z*O.transmissionResolutionScale,Oe.w*O.transmissionResolutionScale);const je=O.getRenderTarget(),ke=O.getActiveCubeFace(),ct=O.getActiveMipmapLevel();O.setRenderTarget(Ce),O.getClearColor(N),Y=O.getClearAlpha(),Y<1&&O.setClearColor(16777215,.5),O.clear(),Ze&&Te.render(se);const ft=O.toneMapping;O.toneMapping=Xr;const rt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),U.setupLightsView(te),W===!0&&$e.setGlobalState(O.clippingPlanes,te),ci(w,se,te),_t.updateMultisampleRenderTarget(Ce),_t.updateRenderTargetMipmap(Ce),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Pt=0,we=q.length;Pt<we;Pt++){const ze=q[Pt],{object:nt,geometry:Ne,material:pt,group:st}=ze;if(pt.side===ga&&nt.layers.test(te.layers)){const gt=pt.side;pt.side=Di,pt.needsUpdate=!0,bn(nt,se,te,Ne,pt,st),pt.side=gt,pt.needsUpdate=!0,bt=!0}}bt===!0&&(_t.updateMultisampleRenderTarget(Ce),_t.updateRenderTargetMipmap(Ce))}O.setRenderTarget(je,ke,ct),O.setClearColor(N,Y),rt!==void 0&&(te.viewport=rt),O.toneMapping=ft}function ci(w,q,se){const te=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Ce=w.length;$<Ce;$++){const Oe=w[$],{object:je,geometry:ke,group:ct}=Oe;let ft=Oe.material;ft.allowOverride===!0&&te!==null&&(ft=te),je.layers.test(se.layers)&&bn(je,q,se,ke,ft,ct)}}function bn(w,q,se,te,$,Ce){w.onBeforeRender(O,q,se,te,$,Ce),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(O,q,se,te,w,Ce),$.transparent===!0&&$.side===ga&&$.forceSinglePass===!1?($.side=Di,$.needsUpdate=!0,O.renderBufferDirect(se,q,te,$,w,Ce),$.side=Yr,$.needsUpdate=!0,O.renderBufferDirect(se,q,te,$,w,Ce),$.side=ga):O.renderBufferDirect(se,q,te,$,w,Ce),w.onAfterRender(O,q,se,te,$,Ce)}function Sn(w,q,se){q.isScene!==!0&&(q=Ft);const te=it.get(w),$=U.state.lights,Ce=U.state.shadowsArray,Oe=$.state.version,je=he.getParameters(w,$.state,Ce,q,se),ke=he.getProgramCacheKey(je);let ct=te.programs;te.environment=w.isMeshStandardMaterial?q.environment:null,te.fog=q.fog,te.envMap=(w.isMeshStandardMaterial?M:L).get(w.envMap||te.environment),te.envMapRotation=te.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,ct===void 0&&(w.addEventListener("dispose",Ke),ct=new Map,te.programs=ct);let ft=ct.get(ke);if(ft!==void 0){if(te.currentProgram===ft&&te.lightsStateVersion===Oe)return Sa(w,je),ft}else je.uniforms=he.getUniforms(w),w.onBeforeCompile(je,O),ft=he.acquireProgram(je,ke),ct.set(ke,ft),te.uniforms=je.uniforms;const rt=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(rt.clippingPlanes=$e.uniform),Sa(w,je),te.needsLights=zs(w),te.lightsStateVersion=Oe,te.needsLights&&(rt.ambientLightColor.value=$.state.ambient,rt.lightProbe.value=$.state.probe,rt.directionalLights.value=$.state.directional,rt.directionalLightShadows.value=$.state.directionalShadow,rt.spotLights.value=$.state.spot,rt.spotLightShadows.value=$.state.spotShadow,rt.rectAreaLights.value=$.state.rectArea,rt.ltc_1.value=$.state.rectAreaLTC1,rt.ltc_2.value=$.state.rectAreaLTC2,rt.pointLights.value=$.state.point,rt.pointLightShadows.value=$.state.pointShadow,rt.hemisphereLights.value=$.state.hemi,rt.directionalShadowMap.value=$.state.directionalShadowMap,rt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,rt.spotShadowMap.value=$.state.spotShadowMap,rt.spotLightMatrix.value=$.state.spotLightMatrix,rt.spotLightMap.value=$.state.spotLightMap,rt.pointShadowMap.value=$.state.pointShadowMap,rt.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=ft,te.uniformsList=null,ft}function la(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=lf.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Sa(w,q){const se=it.get(w);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Jo(w,q,se,te,$){q.isScene!==!0&&(q=Ft),_t.resetTextureUnits();const Ce=q.fog,Oe=te.isMeshStandardMaterial?q.environment:null,je=R===null?O.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vo,ke=(te.isMeshStandardMaterial?M:L).get(te.envMap||Oe),ct=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ft=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),rt=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,Pt=!!se.morphAttributes.color;let we=Xr;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=O.toneMapping);const ze=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,nt=ze!==void 0?ze.length:0,Ne=it.get(te),pt=U.state.lights;if(W===!0&&(Re===!0||w!==ae)){const mt=w===ae&&te.id===k;$e.setState(te,w,mt)}let st=!1;te.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==pt.state.version||Ne.outputColorSpace!==je||$.isBatchedMesh&&Ne.batching===!1||!$.isBatchedMesh&&Ne.batching===!0||$.isBatchedMesh&&Ne.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ne.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ne.instancing===!1||!$.isInstancedMesh&&Ne.instancing===!0||$.isSkinnedMesh&&Ne.skinning===!1||!$.isSkinnedMesh&&Ne.skinning===!0||$.isInstancedMesh&&Ne.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ne.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ne.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ne.instancingMorph===!1&&$.morphTexture!==null||Ne.envMap!==ke||te.fog===!0&&Ne.fog!==Ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==$e.numPlanes||Ne.numIntersection!==$e.numIntersection)||Ne.vertexAlphas!==ct||Ne.vertexTangents!==ft||Ne.morphTargets!==rt||Ne.morphNormals!==bt||Ne.morphColors!==Pt||Ne.toneMapping!==we||Ne.morphTargetsCount!==nt)&&(st=!0):(st=!0,Ne.__version=te.version);let gt=Ne.currentProgram;st===!0&&(gt=Sn(te,q,$));let ln=!1,vt=!1,cn=!1;const Lt=gt.getUniforms(),Vt=Ne.uniforms;if(We.useProgram(gt.program)&&(ln=!0,vt=!0,cn=!0),te.id!==k&&(k=te.id,vt=!0),ln||ae!==w){We.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Lt.setValue(F,"projectionMatrix",w.projectionMatrix),Lt.setValue(F,"viewMatrix",w.matrixWorldInverse);const tt=Lt.map.cameraPosition;tt!==void 0&&tt.setValue(F,Xe.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&Lt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Lt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),ae!==w&&(ae=w,vt=!0,cn=!0)}if($.isSkinnedMesh){Lt.setOptional(F,$,"bindMatrix"),Lt.setOptional(F,$,"bindMatrixInverse");const mt=$.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),Lt.setValue(F,"boneTexture",mt.boneTexture,_t))}$.isBatchedMesh&&(Lt.setOptional(F,$,"batchingTexture"),Lt.setValue(F,"batchingTexture",$._matricesTexture,_t),Lt.setOptional(F,$,"batchingIdTexture"),Lt.setValue(F,"batchingIdTexture",$._indirectTexture,_t),Lt.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&Lt.setValue(F,"batchingColorTexture",$._colorsTexture,_t));const Yt=se.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&at.update($,se,gt),(vt||Ne.receiveShadow!==$.receiveShadow)&&(Ne.receiveShadow=$.receiveShadow,Lt.setValue(F,"receiveShadow",$.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Vt.envMap.value=ke,Vt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&q.environment!==null&&(Vt.envMapIntensity.value=q.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=Gw()),vt&&(Lt.setValue(F,"toneMappingExposure",O.toneMappingExposure),Ne.needsLights&&Ps(Vt,cn),Ce&&te.fog===!0&&et.refreshFogUniforms(Vt,Ce),et.refreshMaterialUniforms(Vt,te,me,ue,U.state.transmissionRenderTarget[w.id]),lf.upload(F,la(Ne),Vt,_t)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(lf.upload(F,la(Ne),Vt,_t),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Lt.setValue(F,"center",$.center),Lt.setValue(F,"modelViewMatrix",$.modelViewMatrix),Lt.setValue(F,"normalMatrix",$.normalMatrix),Lt.setValue(F,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const mt=te.uniformsGroups;for(let tt=0,zt=mt.length;tt<zt;tt++){const rn=mt[tt];Be.update(rn,gt),Be.bind(rn,gt)}}return gt}function Ps(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function zs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,q,se){const te=it.get(w);te.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),it.get(w.texture).__webglTexture=q,it.get(w.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const se=it.get(w);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const Pa=F.createFramebuffer();this.setRenderTarget=function(w,q=0,se=0){R=w,re=q,C=se;let te=!0,$=null,Ce=!1,Oe=!1;if(w){const ke=it.get(w);if(ke.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(F.FRAMEBUFFER,null),te=!1;else if(ke.__webglFramebuffer===void 0)_t.setupRenderTarget(w);else if(ke.__hasExternalTextures)_t.rebindTextures(w,it.get(w.texture).__webglTexture,it.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const rt=w.depthTexture;if(ke.__boundDepthTexture!==rt){if(rt!==null&&it.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(w)}}const ct=w.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Oe=!0);const ft=it.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ft[q])?$=ft[q][se]:$=ft[q],Ce=!0):w.samples>0&&_t.useMultisampledRTT(w)===!1?$=it.get(w).__webglMultisampledFramebuffer:Array.isArray(ft)?$=ft[se]:$=ft,ce.copy(w.viewport),pe.copy(w.scissor),K=w.scissorTest}else ce.copy(xe).multiplyScalar(me).floor(),pe.copy(Se).multiplyScalar(me).floor(),K=De;if(se!==0&&($=Pa),We.bindFramebuffer(F.FRAMEBUFFER,$)&&te&&We.drawBuffers(w,$),We.viewport(ce),We.scissor(pe),We.setScissorTest(K),Ce){const ke=it.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,se)}else if(Oe){const ke=q;for(let ct=0;ct<w.textures.length;ct++){const ft=it.get(w.textures[ct]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ct,ft.__webglTexture,se,ke)}}else if(w!==null&&se!==0){const ke=it.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,se)}k=-1},this.readRenderTargetPixels=function(w,q,se,te,$,Ce,Oe,je=0){if(!(w&&w.isWebGLRenderTarget)){Tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=it.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke){We.bindFramebuffer(F.FRAMEBUFFER,ke);try{const ct=w.textures[je],ft=ct.format,rt=ct.type;if(!qt.textureFormatReadable(ft)){Tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(rt)){Tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-te&&se>=0&&se<=w.height-$&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+je),F.readPixels(q,se,te,$,dt.convert(ft),dt.convert(rt),Ce))}finally{const ct=R!==null?it.get(R).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(w,q,se,te,$,Ce,Oe,je=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=it.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke)if(q>=0&&q<=w.width-te&&se>=0&&se<=w.height-$){We.bindFramebuffer(F.FRAMEBUFFER,ke);const ct=w.textures[je],ft=ct.format,rt=ct.type;if(!qt.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.bufferData(F.PIXEL_PACK_BUFFER,Ce.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+je),F.readPixels(q,se,te,$,dt.convert(ft),dt.convert(rt),0);const Pt=R!==null?it.get(R).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,Pt);const we=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await sS(F,we,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,bt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ce),F.deleteBuffer(bt),F.deleteSync(we),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,se=0){const te=Math.pow(2,-se),$=Math.floor(w.image.width*te),Ce=Math.floor(w.image.height*te),Oe=q!==null?q.x:0,je=q!==null?q.y:0;_t.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,se,0,0,Oe,je,$,Ce),We.unbindTexture()};const $r=F.createFramebuffer(),Ma=F.createFramebuffer();this.copyTextureToTexture=function(w,q,se=null,te=null,$=0,Ce=null){Ce===null&&($!==0?(fc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=$,$=0):Ce=0);let Oe,je,ke,ct,ft,rt,bt,Pt,we;const ze=w.isCompressedTexture?w.mipmaps[Ce]:w.image;if(se!==null)Oe=se.max.x-se.min.x,je=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,ct=se.min.x,ft=se.min.y,rt=se.isBox3?se.min.z:0;else{const Yt=Math.pow(2,-$);Oe=Math.floor(ze.width*Yt),je=Math.floor(ze.height*Yt),w.isDataArrayTexture?ke=ze.depth:w.isData3DTexture?ke=Math.floor(ze.depth*Yt):ke=1,ct=0,ft=0,rt=0}te!==null?(bt=te.x,Pt=te.y,we=te.z):(bt=0,Pt=0,we=0);const nt=dt.convert(q.format),Ne=dt.convert(q.type);let pt;q.isData3DTexture?(_t.setTexture3D(q,0),pt=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(_t.setTexture2DArray(q,0),pt=F.TEXTURE_2D_ARRAY):(_t.setTexture2D(q,0),pt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const st=F.getParameter(F.UNPACK_ROW_LENGTH),gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ln=F.getParameter(F.UNPACK_SKIP_PIXELS),vt=F.getParameter(F.UNPACK_SKIP_ROWS),cn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ze.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ze.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ct),F.pixelStorei(F.UNPACK_SKIP_ROWS,ft),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rt);const Lt=w.isDataArrayTexture||w.isData3DTexture,Vt=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Yt=it.get(w),mt=it.get(q),tt=it.get(Yt.__renderTarget),zt=it.get(mt.__renderTarget);We.bindFramebuffer(F.READ_FRAMEBUFFER,tt.__webglFramebuffer),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let rn=0;rn<ke;rn++)Lt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,it.get(w).__webglTexture,$,rt+rn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,it.get(q).__webglTexture,Ce,we+rn)),F.blitFramebuffer(ct,ft,Oe,je,bt,Pt,Oe,je,F.DEPTH_BUFFER_BIT,F.NEAREST);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||it.has(w)){const Yt=it.get(w),mt=it.get(q);We.bindFramebuffer(F.READ_FRAMEBUFFER,$r),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ma);for(let tt=0;tt<ke;tt++)Lt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.__webglTexture,$,rt+tt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yt.__webglTexture,$),Vt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mt.__webglTexture,Ce,we+tt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mt.__webglTexture,Ce),$!==0?F.blitFramebuffer(ct,ft,Oe,je,bt,Pt,Oe,je,F.COLOR_BUFFER_BIT,F.NEAREST):Vt?F.copyTexSubImage3D(pt,Ce,bt,Pt,we+tt,ct,ft,Oe,je):F.copyTexSubImage2D(pt,Ce,bt,Pt,ct,ft,Oe,je);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Vt?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(pt,Ce,bt,Pt,we,Oe,je,ke,nt,Ne,ze.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(pt,Ce,bt,Pt,we,Oe,je,ke,nt,ze.data):F.texSubImage3D(pt,Ce,bt,Pt,we,Oe,je,ke,nt,Ne,ze):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ce,bt,Pt,Oe,je,nt,Ne,ze.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ce,bt,Pt,ze.width,ze.height,nt,ze.data):F.texSubImage2D(F.TEXTURE_2D,Ce,bt,Pt,Oe,je,nt,Ne,ze);F.pixelStorei(F.UNPACK_ROW_LENGTH,st),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ln),F.pixelStorei(F.UNPACK_SKIP_ROWS,vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,cn),Ce===0&&q.generateMipmaps&&F.generateMipmap(pt),We.unbindTexture()},this.initRenderTarget=function(w){it.get(w).__webglFramebuffer===void 0&&_t.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?_t.setTextureCube(w,0):w.isData3DTexture?_t.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_t.setTexture2DArray(w,0):_t.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){re=0,C=0,R=null,We.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return La}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Wt._getUnpackColorSpace()}}const jw=""+new URL("2021-10-31-P_JYddXs.JPG",import.meta.url).href,kw=Object.freeze(Object.defineProperty({__proto__:null,default:jw},Symbol.toStringTag,{value:"Module"})),Xw=""+new URL("2021-10-31-DcWNroCu.jpeg",import.meta.url).href,Ww=Object.freeze(Object.defineProperty({__proto__:null,default:Xw},Symbol.toStringTag,{value:"Module"})),qw=""+new URL("2021-12-10-Cfb1W4aW.jpg",import.meta.url).href,Yw=Object.freeze(Object.defineProperty({__proto__:null,default:qw},Symbol.toStringTag,{value:"Module"})),Zw=""+new URL("2022-05-13-ZW7768q6.JPG",import.meta.url).href,$w=Object.freeze(Object.defineProperty({__proto__:null,default:Zw},Symbol.toStringTag,{value:"Module"})),Kw=""+new URL("2022-06-13-CxNIdfIC.jpeg",import.meta.url).href,Qw=Object.freeze(Object.defineProperty({__proto__:null,default:Kw},Symbol.toStringTag,{value:"Module"})),Jw=""+new URL("2022-07-06-2-todjBix1.jpeg",import.meta.url).href,eR=Object.freeze(Object.defineProperty({__proto__:null,default:Jw},Symbol.toStringTag,{value:"Module"})),tR=""+new URL("2022-08-14-DUbsbZ4q.JPG",import.meta.url).href,nR=Object.freeze(Object.defineProperty({__proto__:null,default:tR},Symbol.toStringTag,{value:"Module"})),iR=""+new URL("2022-10-29 Large-BwUDGQao.jpeg",import.meta.url).href,aR=Object.freeze(Object.defineProperty({__proto__:null,default:iR},Symbol.toStringTag,{value:"Module"})),rR=""+new URL("2023-01-01-ZvfabK-5.jpeg",import.meta.url).href,sR=Object.freeze(Object.defineProperty({__proto__:null,default:rR},Symbol.toStringTag,{value:"Module"})),oR=""+new URL("2023-03-01-aqF_3lvk.jpeg",import.meta.url).href,lR=Object.freeze(Object.defineProperty({__proto__:null,default:oR},Symbol.toStringTag,{value:"Module"})),cR=""+new URL("2024-03-09-1-5r1AjpoY.jpeg",import.meta.url).href,uR=Object.freeze(Object.defineProperty({__proto__:null,default:cR},Symbol.toStringTag,{value:"Module"})),fR=""+new URL("2024-03-09-D0kOqaW7.jpeg",import.meta.url).href,dR=Object.freeze(Object.defineProperty({__proto__:null,default:fR},Symbol.toStringTag,{value:"Module"})),hR=""+new URL("2024-05-05-BOtxUIu1.jpeg",import.meta.url).href,pR=Object.freeze(Object.defineProperty({__proto__:null,default:hR},Symbol.toStringTag,{value:"Module"})),mR=""+new URL("2024-05-14-Dirs4CkQ.jpeg",import.meta.url).href,gR=Object.freeze(Object.defineProperty({__proto__:null,default:mR},Symbol.toStringTag,{value:"Module"})),xR=""+new URL("2024-07-21-DLIIzHuZ.mp4",import.meta.url).href,_R=Object.freeze(Object.defineProperty({__proto__:null,default:xR},Symbol.toStringTag,{value:"Module"})),vR=""+new URL("2024-07-28-DoG5eYmo.mp4",import.meta.url).href,bR=Object.freeze(Object.defineProperty({__proto__:null,default:vR},Symbol.toStringTag,{value:"Module"})),yR=""+new URL("2024-07-31-mlItGP0c.jpeg",import.meta.url).href,SR=Object.freeze(Object.defineProperty({__proto__:null,default:yR},Symbol.toStringTag,{value:"Module"})),MR=""+new URL("2024-08-10-1-CLHfImQR.mp4",import.meta.url).href,ER=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),TR=""+new URL("2024-08-10-usYrqNu_.jpeg",import.meta.url).href,AR=Object.freeze(Object.defineProperty({__proto__:null,default:TR},Symbol.toStringTag,{value:"Module"})),wR=""+new URL("2024-08-23-1-zHKGYiam.jpeg",import.meta.url).href,RR=Object.freeze(Object.defineProperty({__proto__:null,default:wR},Symbol.toStringTag,{value:"Module"})),CR=""+new URL("2024-08-23-3-DZL7AOVs.jpeg",import.meta.url).href,DR=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),UR=""+new URL("2024-08-23-4-CNdgbWFz.jpg",import.meta.url).href,LR=Object.freeze(Object.defineProperty({__proto__:null,default:UR},Symbol.toStringTag,{value:"Module"})),OR=""+new URL("2024-08-23-CzaGYrwc.jpg",import.meta.url).href,NR=Object.freeze(Object.defineProperty({__proto__:null,default:OR},Symbol.toStringTag,{value:"Module"})),PR=""+new URL("2024-08-23-CplMc93Q.mp4",import.meta.url).href,zR=Object.freeze(Object.defineProperty({__proto__:null,default:PR},Symbol.toStringTag,{value:"Module"})),IR=""+new URL("2024-08-25-cOKYphAI.mp4",import.meta.url).href,BR=Object.freeze(Object.defineProperty({__proto__:null,default:IR},Symbol.toStringTag,{value:"Module"})),FR=""+new URL("2024-09-01-CP4RYK6Z.jpeg",import.meta.url).href,HR=Object.freeze(Object.defineProperty({__proto__:null,default:FR},Symbol.toStringTag,{value:"Module"})),GR=""+new URL("2024-09-02-BIdH0tQs.jpeg",import.meta.url).href,VR=Object.freeze(Object.defineProperty({__proto__:null,default:GR},Symbol.toStringTag,{value:"Module"})),jR=""+new URL("2024-09-08-DRZDdej9.jpeg",import.meta.url).href,kR=Object.freeze(Object.defineProperty({__proto__:null,default:jR},Symbol.toStringTag,{value:"Module"})),XR=""+new URL("2024-09-19-02-CRrM6iw-.JPG",import.meta.url).href,WR=Object.freeze(Object.defineProperty({__proto__:null,default:XR},Symbol.toStringTag,{value:"Module"})),qR=""+new URL("2024-09-19-03-98asKbHO.mp4",import.meta.url).href,YR=Object.freeze(Object.defineProperty({__proto__:null,default:qR},Symbol.toStringTag,{value:"Module"})),ZR=""+new URL("2024-09-19-Yttg9DWC.jpg",import.meta.url).href,$R=Object.freeze(Object.defineProperty({__proto__:null,default:ZR},Symbol.toStringTag,{value:"Module"})),KR=""+new URL("2024-09-25-BtbmW8ns.jpeg",import.meta.url).href,QR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),JR=""+new URL("2024-10-15-BF3fCPW2.jpeg",import.meta.url).href,eC=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),tC=""+new URL("2024-10-20-1-UaeBmH8_.jpeg",import.meta.url).href,nC=Object.freeze(Object.defineProperty({__proto__:null,default:tC},Symbol.toStringTag,{value:"Module"})),iC=""+new URL("2024-10-20-2-CXE_ZJ88.jpeg",import.meta.url).href,aC=Object.freeze(Object.defineProperty({__proto__:null,default:iC},Symbol.toStringTag,{value:"Module"})),rC=""+new URL("2024-10-20-3-DFppJf_d.jpeg",import.meta.url).href,sC=Object.freeze(Object.defineProperty({__proto__:null,default:rC},Symbol.toStringTag,{value:"Module"})),oC=""+new URL("2024-10-20-4-DYSIXoD2.mp4",import.meta.url).href,lC=Object.freeze(Object.defineProperty({__proto__:null,default:oC},Symbol.toStringTag,{value:"Module"})),cC=""+new URL("2024-10-20-7 Large-p3W3qreI.jpeg",import.meta.url).href,uC=Object.freeze(Object.defineProperty({__proto__:null,default:cC},Symbol.toStringTag,{value:"Module"})),fC=""+new URL("2024-10-20-DIUHYx3b.jpeg",import.meta.url).href,dC=Object.freeze(Object.defineProperty({__proto__:null,default:fC},Symbol.toStringTag,{value:"Module"})),hC=""+new URL("2024-10-20-3nGD_4Ej.mp4",import.meta.url).href,pC=Object.freeze(Object.defineProperty({__proto__:null,default:hC},Symbol.toStringTag,{value:"Module"})),mC=""+new URL("2024-10-22-Bfi-n3YD.JPG",import.meta.url).href,gC=Object.freeze(Object.defineProperty({__proto__:null,default:mC},Symbol.toStringTag,{value:"Module"})),xC=""+new URL("2024-10-26-6I-A6_EY.jpeg",import.meta.url).href,_C=Object.freeze(Object.defineProperty({__proto__:null,default:xC},Symbol.toStringTag,{value:"Module"})),vC=""+new URL("2024-11-01-B0vPq0V1.mp4",import.meta.url).href,bC=Object.freeze(Object.defineProperty({__proto__:null,default:vC},Symbol.toStringTag,{value:"Module"})),yC=""+new URL("2024-11-03-C4k0HJqk.mp4",import.meta.url).href,SC=Object.freeze(Object.defineProperty({__proto__:null,default:yC},Symbol.toStringTag,{value:"Module"})),MC=""+new URL("2024-11-08-kM8awXmA.jpeg",import.meta.url).href,EC=Object.freeze(Object.defineProperty({__proto__:null,default:MC},Symbol.toStringTag,{value:"Module"})),TC=""+new URL("2024-11-17-1-XWAmTuvK.jpeg",import.meta.url).href,AC=Object.freeze(Object.defineProperty({__proto__:null,default:TC},Symbol.toStringTag,{value:"Module"})),wC=""+new URL("2024-11-17-2-CMXhdSPr.jpeg",import.meta.url).href,RC=Object.freeze(Object.defineProperty({__proto__:null,default:wC},Symbol.toStringTag,{value:"Module"})),CC=""+new URL("2024-11-17-2-ClCIFVUl.mp4",import.meta.url).href,DC=Object.freeze(Object.defineProperty({__proto__:null,default:CC},Symbol.toStringTag,{value:"Module"})),UC=""+new URL("2024-11-17-3-CL__783K.jpg",import.meta.url).href,LC=Object.freeze(Object.defineProperty({__proto__:null,default:UC},Symbol.toStringTag,{value:"Module"})),OC=""+new URL("2024-11-17-Dlj7Ggg_.jpeg",import.meta.url).href,NC=Object.freeze(Object.defineProperty({__proto__:null,default:OC},Symbol.toStringTag,{value:"Module"})),PC=""+new URL("2024-12-07-D5ESRNF6.jpeg",import.meta.url).href,zC=Object.freeze(Object.defineProperty({__proto__:null,default:PC},Symbol.toStringTag,{value:"Module"})),IC=""+new URL("2024-12-11-LCPTHdsD.JPG",import.meta.url).href,BC=Object.freeze(Object.defineProperty({__proto__:null,default:IC},Symbol.toStringTag,{value:"Module"})),FC=""+new URL("2025-02-12-1-BX8k8eV8.mp4",import.meta.url).href,HC=Object.freeze(Object.defineProperty({__proto__:null,default:FC},Symbol.toStringTag,{value:"Module"})),GC=""+new URL("2025-02-12-CmQmbk28.jpeg",import.meta.url).href,VC=Object.freeze(Object.defineProperty({__proto__:null,default:GC},Symbol.toStringTag,{value:"Module"})),jC=""+new URL("2025-02-26-CsXnUoPc.jpeg",import.meta.url).href,kC=Object.freeze(Object.defineProperty({__proto__:null,default:jC},Symbol.toStringTag,{value:"Module"})),XC=""+new URL("2025-03-07-rHk_O326.jpeg",import.meta.url).href,WC=Object.freeze(Object.defineProperty({__proto__:null,default:XC},Symbol.toStringTag,{value:"Module"})),qC=""+new URL("2025-03-08-1-4LawzdwT.jpeg",import.meta.url).href,YC=Object.freeze(Object.defineProperty({__proto__:null,default:qC},Symbol.toStringTag,{value:"Module"})),ZC=""+new URL("2025-03-08-CsRDiP1v.jpeg",import.meta.url).href,$C=Object.freeze(Object.defineProperty({__proto__:null,default:ZC},Symbol.toStringTag,{value:"Module"})),KC=""+new URL("2025-03-08-JZOWf09E.mp4",import.meta.url).href,QC=Object.freeze(Object.defineProperty({__proto__:null,default:KC},Symbol.toStringTag,{value:"Module"})),JC=""+new URL("2025-03-12-Ie8pwHnw.jpeg",import.meta.url).href,e4=Object.freeze(Object.defineProperty({__proto__:null,default:JC},Symbol.toStringTag,{value:"Module"})),t4=""+new URL("2025-04-20-02-CTl6eCl4.jpeg",import.meta.url).href,n4=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),i4=""+new URL("2025-04-20-m521MAgC.jpeg",import.meta.url).href,a4=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),r4=""+new URL("2025-04-24-BJB22Ibv.jpeg",import.meta.url).href,s4=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),o4=""+new URL("2025-05-09-BgJ2uyI6.jpeg",import.meta.url).href,l4=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),c4=""+new URL("2025-05-10-01-CmiKVq7X.jpeg",import.meta.url).href,u4=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),f4=""+new URL("2025-05-10-03-C7cYxHVB.jpeg",import.meta.url).href,d4=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),h4=""+new URL("2025-05-10-04-D51B-kbo.jpeg",import.meta.url).href,p4=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),m4=""+new URL("2025-05-10-05-ZspL2DFk.jpg",import.meta.url).href,g4=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),x4=""+new URL("2025-05-23-DrMQ0MaP.mp4",import.meta.url).href,_4=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),v4=""+new URL("2025-05-30-B31ntIOA.jpeg",import.meta.url).href,b4=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),y4=""+new URL("2025-06-09-xDmcrKNe.mp4",import.meta.url).href,S4=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),M4=""+new URL("2025-06-16-NxVx32rp.jpg",import.meta.url).href,E4=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),T4=""+new URL("2025-06-17-C8HU58WO.jpeg",import.meta.url).href,A4=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),w4=""+new URL("2025-06-19-DxprC_A4.jpeg",import.meta.url).href,R4=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),C4=""+new URL("2025-06-20-DQi2tzWE.jpeg",import.meta.url).href,D4=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),U4=""+new URL("2025-06-29-BcidFJty.JPG",import.meta.url).href,L4=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),O4=""+new URL("2025-07-02-Or5BW8GN.jpeg",import.meta.url).href,N4=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),P4=""+new URL("2025-07-04-C1wj0M1h.jpeg",import.meta.url).href,z4=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),I4=""+new URL("2025-07-19-B14G1TL2.jpg",import.meta.url).href,B4=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),F4=""+new URL("2025-07-23-CTlJaCIv.jpeg",import.meta.url).href,H4=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),G4=""+new URL("2025-08-02-BYfa6nBi.jpeg",import.meta.url).href,V4=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),j4=""+new URL("2025-08-15-BwvLJtju.jpeg",import.meta.url).href,k4=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),X4=""+new URL("2025-08-16-BOeyTKzo.mp4",import.meta.url).href,W4=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),q4=""+new URL("2025-10-04-BEvm4bRr.mp4",import.meta.url).href,Y4=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),Z4=""+new URL("2025-10-08-2-BJssy64D.jpeg",import.meta.url).href,$4=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),K4=""+new URL("2025-10-08-BbBU71mk.jpeg",import.meta.url).href,Q4=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),J4=""+new URL("2025-10-09-Be-NfefO.JPG",import.meta.url).href,eD=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),tD=""+new URL("2025-10-10-DSgqI2iz.jpeg",import.meta.url).href,nD=Object.freeze(Object.defineProperty({__proto__:null,default:tD},Symbol.toStringTag,{value:"Module"})),iD=""+new URL("2025-10-11-BE2_tkS1.jpeg",import.meta.url).href,aD=Object.freeze(Object.defineProperty({__proto__:null,default:iD},Symbol.toStringTag,{value:"Module"})),rD=""+new URL("2025-10-31-2-4DBQdFfB.jpeg",import.meta.url).href,sD=Object.freeze(Object.defineProperty({__proto__:null,default:rD},Symbol.toStringTag,{value:"Module"})),oD=""+new URL("2025-10-31-3-CMAQg5eZ.mp4",import.meta.url).href,lD=Object.freeze(Object.defineProperty({__proto__:null,default:oD},Symbol.toStringTag,{value:"Module"})),cD=""+new URL("2025-10-31-C_2gu8e1.jpeg",import.meta.url).href,uD=Object.freeze(Object.defineProperty({__proto__:null,default:cD},Symbol.toStringTag,{value:"Module"})),fD=""+new URL("2025-11-04-CxajqofK.jpeg",import.meta.url).href,dD=Object.freeze(Object.defineProperty({__proto__:null,default:fD},Symbol.toStringTag,{value:"Module"})),hD=""+new URL("2025-11-09-xa64oJGS.jpeg",import.meta.url).href,pD=Object.freeze(Object.defineProperty({__proto__:null,default:hD},Symbol.toStringTag,{value:"Module"})),mD=""+new URL("2025-11-09-B-v5Ulwz.mp4",import.meta.url).href,gD=Object.freeze(Object.defineProperty({__proto__:null,default:mD},Symbol.toStringTag,{value:"Module"})),xD=""+new URL("2025-11-29-Dq6Asxu3.jpeg",import.meta.url).href,_D=Object.freeze(Object.defineProperty({__proto__:null,default:xD},Symbol.toStringTag,{value:"Module"})),vD=""+new URL("2025-12-03-DSQwbWlu.JPG",import.meta.url).href,bD=Object.freeze(Object.defineProperty({__proto__:null,default:vD},Symbol.toStringTag,{value:"Module"})),yD=""+new URL("2025-12-03-BkHMkApE.jpeg",import.meta.url).href,SD=Object.freeze(Object.defineProperty({__proto__:null,default:yD},Symbol.toStringTag,{value:"Module"})),MD=""+new URL("2025-12-04-02-CEkCKTxA.jpeg",import.meta.url).href,ED=Object.freeze(Object.defineProperty({__proto__:null,default:MD},Symbol.toStringTag,{value:"Module"})),TD=""+new URL("2025-12-04-10-C3KxTeOd.mp4",import.meta.url).href,AD=Object.freeze(Object.defineProperty({__proto__:null,default:TD},Symbol.toStringTag,{value:"Module"})),wD=""+new URL("2025-12-04-supQhv4p.jpeg",import.meta.url).href,RD=Object.freeze(Object.defineProperty({__proto__:null,default:wD},Symbol.toStringTag,{value:"Module"})),CD=""+new URL("2025-12-05-01-BFaM4Oml.mp4",import.meta.url).href,DD=Object.freeze(Object.defineProperty({__proto__:null,default:CD},Symbol.toStringTag,{value:"Module"})),UD=""+new URL("2025-12-05-02-BrtAXchK.mp4",import.meta.url).href,LD=Object.freeze(Object.defineProperty({__proto__:null,default:UD},Symbol.toStringTag,{value:"Module"})),hb=""+new URL("Ignore_2024-08-23-5-CqrWweLB.png",import.meta.url).href,OD=Object.freeze(Object.defineProperty({__proto__:null,default:hb},Symbol.toStringTag,{value:"Module"})),pb=""+new URL("Ignore_2025-05-10-06-CBdoQwmN.png",import.meta.url).href,ND=Object.freeze(Object.defineProperty({__proto__:null,default:pb},Symbol.toStringTag,{value:"Module"})),PD=""+new URL("BeggingBuddha-CATTcvPs.mp3",import.meta.url).href,zD=""+new URL("FujiMt-CkmfackC.mp3",import.meta.url).href,ID=""+new URL("Handbeaten-fishball-55E7UMtG.mp3",import.meta.url).href,BD=""+new URL("LouMei-B79Jap0g.mp3",import.meta.url).href,C0=[{title:"卤味",src:BD},{title:"手打鱼丸",src:ID},{title:"Begging Buddha",src:PD},{title:"Fuji Mt",src:zD}],FD=Object.assign({"./assets/media/2021-10-31.JPG":kw,"./assets/media/2021-10-31.jpeg":Ww,"./assets/media/2021-12-10.jpg":Yw,"./assets/media/2022-05-13.JPG":$w,"./assets/media/2022-06-13.jpeg":Qw,"./assets/media/2022-07-06-2.jpeg":eR,"./assets/media/2022-08-14.JPG":nR,"./assets/media/2022-10-29 Large.jpeg":aR,"./assets/media/2023-01-01.jpeg":sR,"./assets/media/2023-03-01.jpeg":lR,"./assets/media/2024-03-09-1.jpeg":uR,"./assets/media/2024-03-09.jpeg":dR,"./assets/media/2024-05-05.jpeg":pR,"./assets/media/2024-05-14.jpeg":gR,"./assets/media/2024-07-21.mp4":_R,"./assets/media/2024-07-28.mp4":bR,"./assets/media/2024-07-31.jpeg":SR,"./assets/media/2024-08-10-1.mp4":ER,"./assets/media/2024-08-10.jpeg":AR,"./assets/media/2024-08-23-1.jpeg":RR,"./assets/media/2024-08-23-3.jpeg":DR,"./assets/media/2024-08-23-4.jpg":LR,"./assets/media/2024-08-23.jpg":NR,"./assets/media/2024-08-23.mp4":zR,"./assets/media/2024-08-25.mp4":BR,"./assets/media/2024-09-01.jpeg":HR,"./assets/media/2024-09-02.jpeg":VR,"./assets/media/2024-09-08.jpeg":kR,"./assets/media/2024-09-19-02.JPG":WR,"./assets/media/2024-09-19-03.mp4":YR,"./assets/media/2024-09-19.jpg":$R,"./assets/media/2024-09-25.jpeg":QR,"./assets/media/2024-10-15.jpeg":eC,"./assets/media/2024-10-20-1.jpeg":nC,"./assets/media/2024-10-20-2.jpeg":aC,"./assets/media/2024-10-20-3.jpeg":sC,"./assets/media/2024-10-20-4.mp4":lC,"./assets/media/2024-10-20-7 Large.jpeg":uC,"./assets/media/2024-10-20.jpeg":dC,"./assets/media/2024-10-20.mp4":pC,"./assets/media/2024-10-22.JPG":gC,"./assets/media/2024-10-26.jpeg":_C,"./assets/media/2024-11-01.mp4":bC,"./assets/media/2024-11-03.mp4":SC,"./assets/media/2024-11-08.jpeg":EC,"./assets/media/2024-11-17-1.jpeg":AC,"./assets/media/2024-11-17-2.jpeg":RC,"./assets/media/2024-11-17-2.mp4":DC,"./assets/media/2024-11-17-3.jpg":LC,"./assets/media/2024-11-17.jpeg":NC,"./assets/media/2024-12-07.jpeg":zC,"./assets/media/2024-12-11.JPG":BC,"./assets/media/2025-02-12-1.mp4":HC,"./assets/media/2025-02-12.jpeg":VC,"./assets/media/2025-02-26.jpeg":kC,"./assets/media/2025-03-07.jpeg":WC,"./assets/media/2025-03-08-1.jpeg":YC,"./assets/media/2025-03-08.jpeg":$C,"./assets/media/2025-03-08.mp4":QC,"./assets/media/2025-03-12.jpeg":e4,"./assets/media/2025-04-20-02.jpeg":n4,"./assets/media/2025-04-20.jpeg":a4,"./assets/media/2025-04-24.jpeg":s4,"./assets/media/2025-05-09.jpeg":l4,"./assets/media/2025-05-10-01.jpeg":u4,"./assets/media/2025-05-10-03.jpeg":d4,"./assets/media/2025-05-10-04.jpeg":p4,"./assets/media/2025-05-10-05.jpg":g4,"./assets/media/2025-05-23.mp4":_4,"./assets/media/2025-05-30.jpeg":b4,"./assets/media/2025-06-09.mp4":S4,"./assets/media/2025-06-16.jpg":E4,"./assets/media/2025-06-17.jpeg":A4,"./assets/media/2025-06-19.jpeg":R4,"./assets/media/2025-06-20.jpeg":D4,"./assets/media/2025-06-29.JPG":L4,"./assets/media/2025-07-02.jpeg":N4,"./assets/media/2025-07-04.jpeg":z4,"./assets/media/2025-07-19.jpg":B4,"./assets/media/2025-07-23.jpeg":H4,"./assets/media/2025-08-02.jpeg":V4,"./assets/media/2025-08-15.jpeg":k4,"./assets/media/2025-08-16.mp4":W4,"./assets/media/2025-10-04.mp4":Y4,"./assets/media/2025-10-08-2.jpeg":$4,"./assets/media/2025-10-08.jpeg":Q4,"./assets/media/2025-10-09.JPG":eD,"./assets/media/2025-10-10.jpeg":nD,"./assets/media/2025-10-11.jpeg":aD,"./assets/media/2025-10-31-2.jpeg":sD,"./assets/media/2025-10-31-3.mp4":lD,"./assets/media/2025-10-31.jpeg":uD,"./assets/media/2025-11-04.jpeg":dD,"./assets/media/2025-11-09.jpeg":pD,"./assets/media/2025-11-09.mp4":gD,"./assets/media/2025-11-29.jpeg":_D,"./assets/media/2025-12-03.JPG":bD,"./assets/media/2025-12-03.jpeg":SD,"./assets/media/2025-12-04-02.jpeg":ED,"./assets/media/2025-12-04-10.mp4":AD,"./assets/media/2025-12-04.jpeg":RD,"./assets/media/2025-12-05-01.mp4":DD,"./assets/media/2025-12-05-02.mp4":LD,"./assets/media/Ignore_2024-08-23-5.png":OD,"./assets/media/Ignore_2025-05-10-06.png":ND}),Up=s=>{const e=s.match(/(\d{4}-\d{2}-\d{2})/);return e?e[1]:s},HD="ignore_",GD={"2025-05-23.mp4":"The best egg-fried rice in SF","2024-07-28.mp4":"Baby Seagull Rescue Mission"},VD={"2023-03-01.jpeg":"399开张","2024-10-20-1.jpeg":"Bye Caroline","2024-11-17-1.jpeg":"吴情吴义","2025-03-07.jpeg":"学滑雪","2025-10-31.jpeg":"Halloween","2025-12-04.jpeg":"Last Day"},fm=Object.entries(FD).map(([s,e])=>{const n=s.split("/").pop()||s;if(n.toLowerCase().startsWith(HD))return null;const a=e.default,c=n.toLowerCase().split(".").pop()||"",u=c==="mp4"||c==="mov";if(!u&&!(c==="jpg"||c==="jpeg"||c==="png"))return null;const m=u?"video":"image",p=Up(n);return{filename:n,src:a,previewSrc:a,type:m,sortKey:p}}).filter(s=>s!==null);fm.push({filename:"Ignore_2025-05-10-06.png",src:"https://vimeo.com/1083175160/86c067f4f9",previewSrc:pb,embedUrl:"https://player.vimeo.com/video/1083175160?h=86c067f4f9",type:"embed",sortKey:"2025-05-10",dateOverride:"2025-05-10",titleOverride:"2025-05-10",description:"Mini-film Festival Winner",timelineLabel:"春天里"});fm.push({filename:"2024-08-23.mp4",type:"embed",sortKey:"2024-08-23",dateOverride:"2024-08-23",src:"https://player.vimeo.com/video/1144210034",previewSrc:hb,embedUrl:"https://player.vimeo.com/video/1144210034",titleOverride:"2024-08-23",description:"Who makes the most authentic old Beijing Zhajiang Noodles?",timelineLabel:"炸酱面大赛"});const Ua=fm.sort((s,e)=>s.sortKey.localeCompare(e.sortKey)||s.filename.localeCompare(e.filename)).map((s,e)=>({id:String(e+1),type:s.type,src:s.src,previewSrc:s.previewSrc,embedUrl:s.embedUrl,timelineLabel:s.timelineLabel||VD[s.filename],title:s.dateOverride||Up(s.filename),description:s.description??GD[s.filename]??"",date:s.dateOverride||Up(s.filename),filename:s.filename})),Lp={"2021-10-31.JPG":{width:768,height:1024,aspectRatio:.75},"2021-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2021-12-10.jpg":{width:869,height:982,aspectRatio:.884928716904277},"2022-05-13.JPG":{width:1512,height:2016,aspectRatio:.75},"2022-06-13.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2022-07-06-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2022-08-14.JPG":{width:2231,height:4032,aspectRatio:.5533234126984127},"2022-10-29 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-01-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-03-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-05-05.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-05-14.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-07-21.mp4":{width:810,height:1080,aspectRatio:.75},"2024-07-28.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-07-31.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-08-10-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-08-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-08-23-1.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-3.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-4.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.mp4":{width:720,height:960,aspectRatio:.75},"2024-08-25.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-19-02.JPG":{width:2048,height:3089,aspectRatio:.6629977338944643},"2024-09-19-03.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-19.jpg":{width:2075,height:3130,aspectRatio:.6629392971246006},"2024-09-25.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-10-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20-1.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-3.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-4.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-20-7 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20.MOV":{width:3840,height:2160,aspectRatio:1.7777777777777777},"2024-10-20.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-22.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2024-10-26.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-11-01.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-03.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-11-17-3.jpg":{width:1290,height:2228,aspectRatio:.5789946140035906},"2024-11-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-11.JPG":{width:1170,height:2080,aspectRatio:.5625},"2025-02-12-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-02-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-02-26.JPG":{width:3089,height:2048,aspectRatio:1.50830078125},"2025-03-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-03-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-24.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-05-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-03.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-05.jpg":{width:1290,height:1710,aspectRatio:.7543859649122807},"2025-05-23.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-05-30.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-09.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-06-16.jpg":{width:1280,height:1707,aspectRatio:.7498535442296427},"2025-06-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-19.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-06-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-29.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2025-07-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-19.jpg":{width:3024,height:4032,aspectRatio:.75},"2025-07-23.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-16.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-10-04.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-08-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-09.JPG":{width:1080,height:1920,aspectRatio:.5625},"2025-10-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-11.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-31-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-10-31-3.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-11-29.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-03.JPG":{width:1263,height:1535,aspectRatio:.8228013029315961},"2025-12-03.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-12-04-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-04-10.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-12-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-05-01.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-12-05-02.mp4":{width:1630,height:1080,aspectRatio:1.5092592592592593},"Ignore_2024-08-23-5.png":{width:1090,height:1966,aspectRatio:.5544252288911495},"Ignore_2025-05-10-06.png":{width:3448,height:1724,aspectRatio:2}},D0=""+new URL("cover-BrcYv754.mp4",import.meta.url).href,g2=""+new URL("Balloon-C59jG2U_.wav",import.meta.url).href,jD=""+new URL("Typing-K6XFAZpo.mp3",import.meta.url).href,kD=""+new URL("curtain-D_OCfkhx.wav",import.meta.url).href,mb=s=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext y='32' font-size='32'%3E${encodeURIComponent(s)}%3C/text%3E%3C/svg%3E") 16 16, auto`,XD=mb("❤️"),WD=mb("🌸"),qD=({onStartTransition:s})=>{const[e,n]=Ge.useState(0),[a,o]=Ge.useState(!1),[c,u]=Ge.useState(!1),[d,m]=Ge.useState(null),[p,g]=Ge.useState([]),x="Chef of SF's Finest Egg Fried Rice 👨🏽‍🍳, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys 🐵, Award-winning Transgender Actor, Watermelon Annihilator, 华埠老广地陪, Slayer of 100+ Arkvelds,连续戒烟成功者...",[_,y]=Ge.useState(""),E=Ge.useRef(0),A=Ge.useRef(!1),S=Ge.useRef(null),v=Ge.useRef(null),P=Ge.useRef(null),U=Ge.useRef(!1),z=(K,N,Y)=>{E.current+=1;const X=E.current;g(ue=>[...ue,{id:X,x:K,y:N,scale:Y}])};Ge.useEffect(()=>{let K=0;const N=Ua.slice(0,4),Y=[{src:D0,previewSrc:D0,type:"video"},...Ua.filter(Se=>Se.type==="image"),...N],X=new Set,ue=Y.filter(Se=>{const De=Se.previewSrc||Se.src;return X.has(De)?!1:(X.add(De),!0)}),me=ue.length||1,D=Se=>new Promise(De=>{const J=new Image;J.src=Se,J.onload=()=>De(),J.onerror=()=>De()}),Q=async()=>{const Se=ue.map(De=>D(De.previewSrc||De.src).then(()=>{K++,n(Math.floor(K/me*100))}));await Promise.all(Se),setTimeout(()=>o(!0),300)},xe=setTimeout(()=>{n(100),o(!0)},6e3);Q().finally(()=>clearTimeout(xe))},[]),Ge.useEffect(()=>{var X;if(!v.current){const ue=new Audio(jD);ue.loop=!0,ue.volume=.4,v.current=ue}(X=v.current)==null||X.play().catch(()=>{});let K=0;const Y=setInterval(()=>{var ue;K+=1,y(x.slice(0,K)),K>=x.length&&((ue=v.current)==null||ue.pause(),v.current&&(v.current.currentTime=0),clearInterval(Y))},30);return()=>{var ue;clearInterval(Y),(ue=v.current)==null||ue.pause(),v.current&&(v.current.currentTime=0)}},[x]);const V=()=>{var K;u(!0),U.current=!0,A.current=!1,m(null),g(N=>N.map(Y=>({...Y,fading:!0}))),setTimeout(()=>g([]),250),S.current&&(S.current.pause(),S.current.currentTime=0),P.current||(P.current=new Audio(kD)),(K=P.current)==null||K.play().catch(()=>{}),setTimeout(()=>{s()},100)},O=.6,B=3,re=2,C=4;Ge.useEffect(()=>{let K=0,N=performance.now();const Y=X=>{const ue=(X-N)/1e3;N=X,m(me=>{if(!me)return null;let D=me.scale;return me.growing?(D=Math.min(B,D+re*ue),D>=B&&S.current?(S.current.pause(),z(me.x,me.y,D),A.current=!1,{...me,growing:!1,scale:D}):{...me,scale:D}):(D=Math.max(O,D-C*ue),D<=O+.01?null:{...me,scale:D})}),K=requestAnimationFrame(Y)};return K=requestAnimationFrame(Y),()=>cancelAnimationFrame(K)},[]);const R=(K,N)=>{E.current+=1;const Y=E.current;m({id:Y,x:K,y:N,scale:O,growing:!0})},k=()=>{A.current=!1,m(K=>K&&K.growing?(z(K.x,K.y,K.scale),{...K,growing:!1}):K),S.current&&(S.current.pause(),S.current.currentTime=0)},ae=K=>{var ue;if(c||U.current)return;const N=K.currentTarget.getBoundingClientRect(),Y=K.clientX-N.left,X=K.clientY-N.top;if(A.current=!0,!S.current){const me=new Audio(g2);me.loop=!0,me.playbackRate=1.2,S.current=me}(ue=S.current)==null||ue.play().catch(()=>{}),R(Y,X)},ce=()=>{k()},pe=()=>{k()};return e<100&&!a?le.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000",children:[le.jsx("div",{className:"relative w-64 h-2 bg-gray-200 rounded overflow-hidden",children:le.jsx("div",{className:"h-full bg-black transition-all duration-200",style:{width:`${e}%`}})}),le.jsxs("div",{className:"mt-2 text-xs font-bold text-gray-400 font-mono",children:[e,"%"]}),le.jsx("p",{className:"mt-1 font-bold text-gray-400 animate-pulse text-sm",children:"Loading Gallery..."})]}):le.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${c?"pointer-events-none":""}`,onMouseDown:ae,onMouseUp:ce,onMouseLeave:pe,onTouchStart:K=>{var me;if(K.target.closest("wired-button")||c||U.current)return;const N=K.touches[0],Y=K.currentTarget.getBoundingClientRect(),X=N.clientX-Y.left,ue=N.clientY-Y.top;if(A.current=!0,!S.current){const D=new Audio(g2);D.loop=!0,D.playbackRate=1.2,S.current=D}(me=S.current)==null||me.play().catch(()=>{}),R(X,ue)},onTouchEnd:()=>{k()},onTouchMove:K=>A.current&&K.preventDefault(),style:{cursor:XD},children:[le.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1e4},children:[p.map(K=>le.jsx("div",{style:{position:"absolute",left:K.x,top:K.y,transform:`translate(-50%, -50%) scale(${K.scale})`,opacity:K.fading?0:1,transition:K.fading?"opacity 200ms ease-out":void 0,fontSize:"32px",pointerEvents:"none",zIndex:10001},children:"❤️"},K.id)),d&&le.jsx("div",{style:{position:"absolute",left:d.x,top:d.y,transform:`translate(-50%, -50%) scale(${d.scale})`,opacity:1,fontSize:"32px",pointerEvents:"none"},children:"❤️"})]}),le.jsx("div",{className:`relative z-20 bg-neutral-900 p-4 shadow-2xl border-2 border-gray-800 transform scale-100 transition-all duration-500 ease-out 
            ${c?"opacity-0 scale-95":"md:hover:scale-105 active:scale-100"}
        `,children:le.jsxs("div",{className:"w-[32rem] aspect-[4/5] flex flex-col items-center",children:[le.jsxs("div",{className:"w-full h-80 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in",children:[le.jsx("video",{src:D0,className:"w-full h-full object-cover grayscale contrast-125 opacity-80",muted:!0,loop:!0,autoPlay:!0,playsInline:!0}),le.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),le.jsx("h1",{className:"text-xl text-center font-bold mb-2 select-none pointer-events-none text-white whitespace-nowrap",children:"The Secret Life of Warco Mu"}),le.jsx("p",{className:"text-gray-400 text-sm text-center mb-6 select-none pointer-events-none",children:"2021.8-2025.12"}),le.jsxs("p",{className:"text-gray-300 text-m text-center mb-6 select-none pointer-events-none",children:[_,_.length<x.length&&le.jsx("span",{className:"animate-pulse",children:"|"})]}),le.jsx("wired-button",{elevation:2,onClick:V,className:"bg-white text-black font-bold tracking-widest cursor-pointer select-none",style:{cursor:WD},children:"PAY RESPECT"})]})})]})},YD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.5%201.99997C10.1347%201.99987%2010.7457%202.2412%2011.209%202.67501C11.6724%203.10882%2011.9534%203.70262%2011.995%204.33597L12%204.49997V9.10497L17.442%209.70997C18.3855%209.81483%2019.261%2010.2518%2019.9119%2010.9429C20.5628%2011.6339%2020.9467%2012.5339%2020.995%2013.482L21%2013.685V14C21%2016.0784%2020.1911%2018.0752%2018.7445%2019.5677C17.298%2021.0601%2015.3274%2021.931%2013.25%2021.996L13%2022H12.326C10.8885%2021.9999%209.47751%2021.6126%208.24148%2020.8786C7.00546%2020.1446%205.99004%2019.0911%205.302%2017.829L5.171%2017.578L2.329%2011.894C1.969%2011.174%202.236%2010.211%203.076%209.86597C4.119%209.43897%205.11%209.35897%206.131%209.87797C6.353%209.9913%206.571%2010.1293%206.785%2010.292L7%2010.462V4.49997C7%203.83693%207.26339%203.20104%207.73223%202.7322C8.20107%202.26336%208.83696%201.99997%209.5%201.99997ZM9.5%203.99997C9.38297%203.99993%209.26964%204.04094%209.17974%204.11586C9.08984%204.19078%209.02906%204.29486%209.008%204.40997L9%204.49997V13C8.99984%2013.207%208.93542%2013.4089%208.81565%2013.5777C8.69587%2013.7466%208.52663%2013.8741%208.3313%2013.9427C8.13596%2014.0113%207.92414%2014.0176%207.72509%2013.9607C7.52604%2013.9037%207.34956%2013.7865%207.22%2013.625L6.888%2013.218L6.585%2012.864C6.005%2012.207%205.584%2011.844%205.225%2011.661C5.01269%2011.5466%204.77084%2011.4989%204.531%2011.524L4.39%2011.544L6.96%2016.684C7.43992%2017.6435%208.16833%2018.4567%209.06935%2019.0391C9.97038%2019.6214%2011.0111%2019.9515%2012.083%2019.995L12.326%2020H13C14.5524%2020%2016.0444%2019.3984%2017.1625%2018.3215C18.2806%2017.2446%2018.9378%2015.7763%2018.996%2014.225L19%2014V13.685C19.0001%2013.2203%2018.8383%2012.77%2018.5425%2012.4116C18.2467%2012.0532%2017.8353%2011.809%2017.379%2011.721L17.221%2011.697L11.779%2011.093C11.317%2011.0417%2010.8872%2010.831%2010.5637%2010.4972C10.2401%2010.1635%2010.0429%209.72738%2010.006%209.26397L10%209.10497V4.49997C10%204.36736%209.94732%204.24018%209.85355%204.14642C9.75979%204.05265%209.63261%203.99997%209.5%203.99997ZM4%205.99997C4.26522%205.99997%204.51957%206.10533%204.70711%206.29286C4.89464%206.4804%205%206.73475%205%206.99997C5%207.26519%204.89464%207.51954%204.70711%207.70708C4.51957%207.89461%204.26522%207.99997%204%207.99997H3C2.73478%207.99997%202.48043%207.89461%202.29289%207.70708C2.10536%207.51954%202%207.26519%202%206.99997C2%206.73475%202.10536%206.4804%202.29289%206.29286C2.48043%206.10533%202.73478%205.99997%203%205.99997H4ZM16%204.99997C16.2549%205.00025%2016.5%205.09785%2016.6854%205.27282C16.8707%205.44779%2016.9822%205.68692%2016.9972%205.94136C17.0121%206.19581%2016.9293%206.44635%2016.7657%206.6418C16.6021%206.83725%2016.3701%206.96287%2016.117%206.99297L16%206.99997H15C14.7451%206.99969%2014.5%206.90209%2014.3146%206.72712C14.1293%206.55215%2014.0178%206.31302%2014.0028%206.05857C13.9879%205.80413%2014.0707%205.55359%2014.2343%205.35814C14.3979%205.16268%2014.6299%205.03707%2014.883%205.00697L15%204.99997H16ZM4.707%201.29297L5.707%202.29297C5.88916%202.48157%205.98995%202.73417%205.98767%202.99637C5.9854%203.25857%205.88023%203.50938%205.69482%203.69479C5.50941%203.8802%205.2586%203.98537%204.9964%203.98764C4.7342%203.98992%204.4816%203.88913%204.293%203.70697L3.293%202.70697C3.11084%202.51837%203.01005%202.26577%203.01233%202.00357C3.0146%201.74137%203.11977%201.49056%203.30518%201.30515C3.49059%201.11974%203.7414%201.01457%204.0036%201.0123C4.2658%201.01002%204.5184%201.11081%204.707%201.29297ZM15.707%201.29297C15.8945%201.4805%2015.9998%201.73481%2015.9998%201.99997C15.9998%202.26513%2015.8945%202.51944%2015.707%202.70697L14.707%203.70697C14.6148%203.80248%2014.5044%203.87866%2014.3824%203.93107C14.2604%203.98348%2014.1292%204.01107%2013.9964%204.01222C13.8636%204.01337%2013.7319%203.98807%2013.609%203.93779C13.4861%203.88751%2013.3745%203.81326%2013.2806%203.71936C13.1867%203.62547%2013.1125%203.51382%2013.0622%203.39092C13.0119%203.26803%2012.9866%203.13635%2012.9877%203.00357C12.9889%202.87079%2013.0165%202.73957%2013.0689%202.61757C13.1213%202.49556%2013.1975%202.38522%2013.293%202.29297L14.293%201.29297C14.4805%201.1055%2014.7348%201.00018%2015%201.00018C15.2652%201.00018%2015.5195%201.1055%2015.707%201.29297Z'%20fill='black'/%3e%3c/svg%3e",gb={startZ:40},ZD=(s,e=-200)=>{const n=new jr,a=[16767285,16551203,16743388,9764833,8208124],o=gb.startZ+20,c=e-50,u=o+50,d=c-200,m=Math.abs(u-d),g=Math.min(1e5,Math.max(5e4,Math.floor(m*50))),x=new Xi,_=new Float32Array(g*3),y=new Float32Array(g),E=new Float32Array(g);for(let W=0;W<g;W++)_[W*3]=(Math.random()-.5)*600,_[W*3+1]=(Math.random()-.5)*400,_[W*3+2]=u-Math.random()*m,y[W]=Math.random(),E[W]=Math.random()*100;x.setAttribute("position",new Bn(_,3)),x.setAttribute("aSize",new Bn(y,1)),x.setAttribute("aSeed",new Bn(E,1));const A=new oi({uniforms:{uTime:{value:0},uColor:{value:new Tt(16777215)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ts}),S=new GS(x,A);n.add(S);const v={uTime:{value:0},uSpeed:{value:50},uZStart:{value:u},uZRange:{value:m+100}},P=750,U=new Xi,z=new Float32Array(P*2*3),V=new Float32Array(P*2*3),O=new Float32Array(P*6),B=new Float32Array(P*2),re=new Float32Array(P*2),C=[],R=()=>{const W=20+Math.random()*80,Re=Math.random()*Math.PI*2;return{x:Math.cos(Re)*W,y:Math.sin(Re)*W,angle:Re}};for(let W=0;W<P;W++){const{x:Re,y:Fe}=R(),Xe=u-Math.random()*m,Je=20+Math.random()*100,Ft=a[Math.floor(Math.random()*a.length)],Ze=new Tt(Ft),At=Math.random()<.3?1:0;z[W*6+0]=Re,z[W*6+1]=Fe,z[W*6+2]=Xe,V[W*6+0]=0,V[W*6+1]=0,V[W*6+2]=0,O[W*6+0]=Ze.r,O[W*6+1]=Ze.g,O[W*6+2]=Ze.b,B[W*2+0]=1,re[W*2+0]=At,z[W*6+3]=Re,z[W*6+4]=Fe,z[W*6+5]=Xe,V[W*6+3]=0,V[W*6+4]=0,V[W*6+5]=-Je,O[W*6+3]=Ze.r,O[W*6+4]=Ze.g,O[W*6+5]=Ze.b,B[W*2+1]=0,re[W*2+1]=At,C.push(W*2,W*2+1)}U.setAttribute("position",new Bn(z,3)),U.setAttribute("aCenter",new Bn(z,3)),U.setAttribute("aOffset",new Bn(V,3)),U.setAttribute("color",new Bn(O,3)),U.setAttribute("aAlpha",new Bn(B,1)),U.setAttribute("aGlow",new Bn(re,1)),U.setIndex(C);const k=new oi({uniforms:v,vertexShader:`
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
        `,transparent:!0,blending:Ts,depthWrite:!1,vertexColors:!0}),ae=new FS(U,k);ae.frustumCulled=!1,n.add(ae);const ce=80,pe=new on(1,1),K=new jv;K.index=pe.index,K.attributes.position=pe.attributes.position,K.attributes.uv=pe.attributes.uv;const N=new Float32Array(ce*3),Y=new Float32Array(ce*2),X=new Float32Array(ce*3),ue=new Float32Array(ce*3),me=new Float32Array(ce);for(let W=0;W<ce;W++){const{x:Re,y:Fe}=R(),Xe=u-Math.random()*m,Je=40+Math.random()*120,Ft=.5+Math.random()*2.5;N[W*3+0]=Re,N[W*3+1]=Fe,N[W*3+2]=Xe,Y[W*2+0]=Ft,Y[W*2+1]=Je;const Ze=a[Math.floor(Math.random()*a.length)],At=a[Math.floor(Math.random()*a.length)],F=new Tt(Ze),xt=new Tt(At);X[W*3+0]=F.r,X[W*3+1]=F.g,X[W*3+2]=F.b,ue[W*3+0]=xt.r,ue[W*3+1]=xt.g,ue[W*3+2]=xt.b,me[W]=1}K.setAttribute("aCenter",new Ca(N,3)),K.setAttribute("aDimension",new Ca(Y,2)),K.setAttribute("aColor",new Ca(X,3)),K.setAttribute("aColor2",new Ca(ue,3)),K.setAttribute("aGlow",new Ca(me,1));const D=new oi({uniforms:v,vertexShader:`
            uniform float uTime;
            uniform float uSpeed;
            uniform float uZStart;
            uniform float uZRange;
            
            attribute vec3 aCenter;
            attribute vec2 aDimension;
            attribute vec3 aColor;
            attribute vec3 aColor2;
            attribute float aGlow;
            
            varying vec3 vColor;
            varying vec3 vColor2;
            varying vec2 vUv;
            varying float vGlow; // pass to frag
            
            void main() {
                vColor = aColor;
                vColor2 = aColor2;
                vGlow = aGlow;
                vUv = uv; // Pass basic plane UVs (0..1)
                
                // Glowing stripes move 2x faster
                float speedMultiplier = 1.0 + aGlow; // 1.0 for normal, 2.0 for glowing
                float currentZ = aCenter.z + (uTime * uSpeed * speedMultiplier);
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
            varying vec3 vColor2;
            varying vec2 vUv;
            varying float vGlow;
            void main() {
                // Smooth gradient between two random palette colors
                // vColor = head (front), vColor2 = tail (back)
                vec3 gradientColor = mix(vColor2, vColor, vUv.y);
                
                // Opacity Gradient based on UV.y (front opaque, back transparent)
                float alpha = smoothstep(0.0, 0.2, vUv.y); 
                
                // Brighter base (2.0x)
                vec3 finalColor = gradientColor * 2.0;
                
                gl_FragColor = vec4(finalColor, alpha * 0.8);
            }
        `,transparent:!0,blending:Ts,depthWrite:!1,side:ga}),Q=new _n(K,D);Q.frustumCulled=!1,n.add(Q);const xe=new jv;xe.index=pe.index,xe.attributes.position=pe.attributes.position,xe.attributes.uv=pe.attributes.uv,xe.setAttribute("aCenter",new Ca(N,3)),xe.setAttribute("aDimension",new Ca(Y,2)),xe.setAttribute("aColor",new Ca(X,3)),xe.setAttribute("aColor2",new Ca(ue,3)),xe.setAttribute("aGlow",new Ca(me,1));const Se=new oi({uniforms:v,vertexShader:`
            uniform float uTime;
            uniform float uSpeed;
            uniform float uZStart;
            uniform float uZRange;
            
            attribute vec3 aCenter;
            attribute vec2 aDimension;
            attribute vec3 aColor;
            attribute vec3 aColor2;
            attribute float aGlow;
            
            varying vec3 vColor;
            varying vec3 vColor2;
            varying vec2 vUv;
            varying float vGlow;
            
            void main() {
                vColor = aColor;
                vColor2 = aColor2;
                vGlow = aGlow;
                vUv = uv;
                
                // Glowing stripes move 3x faster (same as main stripes)
                float speedMultiplier = 1.0 + 2 * aGlow; // 1.0 for normal, 3.0 for glowing
                float currentZ = aCenter.z + (uTime * uSpeed * speedMultiplier);
                float relativeZ = uZStart - currentZ; 
                float wrappedRelZ = mod(relativeZ, uZRange);
                float finalZ = uZStart - wrappedRelZ;
                
                vec3 transformed = position;
                
                // Scale up for bloom effect (3x wider, 1.5x longer for z-axis glow)
                float w = aDimension.x * 3.0;
                float l = aDimension.y * 1.5;
                
                vec3 localPos = vec3(transformed.x * w, 0.0, transformed.y * l);
                vec3 worldPos = localPos + vec3(aCenter.x, aCenter.y, finalZ);
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
            }
        `,fragmentShader:`
            varying vec3 vColor;
            varying vec3 vColor2;
            varying vec2 vUv;
            varying float vGlow;
            void main() {
                // Smooth gradient between two colors
                vec3 gradientColor = mix(vColor2, vColor, vUv.y);
                
                // Soft radial falloff from center (creates blur effect)
                float distFromCenter = abs(vUv.x - 0.5) * 2.0; // 0 at center, 1 at edges
                float radialFalloff = 1.0 - smoothstep(0.0, 1.0, distFromCenter);
                
                // Opacity gradient along length
                float alpha = smoothstep(0.0, 0.2, vUv.y) * radialFalloff;
                
                vec3 finalColor = gradientColor * 10; // Much darker to preserve color with additive blending
                
                gl_FragColor = vec4(finalColor, alpha * 0.9); // Moderate opacity for visible colored bloom
            }
        `,transparent:!0,blending:Ts,depthWrite:!1,side:ga}),De=new _n(xe,Se);return De.frustumCulled=!1,De.renderOrder=-1,n.add(De),s.add(n),{group:n,update:W=>{A.uniforms.uTime.value=W*.001;const Re=W*.001;v.uTime.value=Re}}},$t={Z_SPACING:8,X_OFFSET:2.2,CAMERA_START_Z:gb.startZ,FADE_START:100,FADE_END:1e3,HIGHLIGHT_RANGE:4,BGM_FADE_ZONE:20,BGM_SILENCE_RADIUS:5,MAX_SCROLL_SPEED:20,HOVER_MIN_SPEED_FACTOR:.05,TIMELINE_FOCUS_OFFSET:4,SKY_STOPS:[{pos:0,color:new Tt(1777195)},{pos:.95,color:new Tt(328976)}]},x2=s=>{const e=s?1.9:$t.X_OFFSET;return Ua.map((n,a)=>{let o=3.2,c=2.4;const u=Lp[n.filename];if(u){const g=u.aspectRatio;g>1?(o=Math.min(u.width,3.2),c=o/g,c>3.2&&(c=3.2,o=c*g)):(c=Math.min(u.height,3.2),o=c*g,o>3.2&&(o=3.2,c=o/g))}return a===Ua.length-1?{...n,z:-a*$t.Z_SPACING-8,x:0,y:0,rotationY:0,rotationZ:0,borderIntensity:2,initialWidth:o,initialHeight:c}:{...n,z:-a*$t.Z_SPACING,x:(Math.random()-.5)*2+(a%2===0?-e:e),y:(Math.random()-.5)*.5,rotationY:(a%2===0?.12:-.12)+(Math.random()-.5)*.05,rotationZ:(Math.random()-.5)*.1,borderIntensity:Math.random()<.3?2:Math.random()<.6?1:0,initialWidth:o,initialHeight:c}})},$D=()=>{const s=document.createElement("canvas");s.width=32,s.height=8;const e=s.getContext("2d");if(!e)return null;e.fillStyle="#dbd9d9ff",e.fillRect(0,0,32,12);const n=new lm(s);return n.wrapS=rc,n.wrapT=rc,n.minFilter=li,n.magFilter=li,n},KD=()=>new oi({uniforms:{uTime:{value:0},uColor:{value:new Tt(16777215)},uSize:{value:new jt(1,1)},uGlowSize:{value:.8}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,blending:Ts}),U0=s=>{const e=document.createElement("canvas");e.width=32,e.height=32;const n=e.getContext("2d");if(!n)return null;n.fillStyle="#8e8e8eff",n.fillRect(0,0,32,32),n.strokeStyle="#333333",n.lineWidth=4,n.strokeRect(0,0,32,32),n.beginPath(),s==="close"?(n.moveTo(8,8),n.lineTo(24,24),n.moveTo(24,8),n.lineTo(8,24)):s==="zoom"?n.strokeRect(8,8,16,16):s==="collapse"&&(n.moveTo(8,16),n.lineTo(24,16)),n.stroke();const a=new lm(e);return a.minFilter=li,a.magFilter=li,a},QD=s=>{const e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return null;e.width=512,e.height=128,n.clearRect(0,0,e.width,e.height),n.font='60px "ChicagoFLF"',n.fillStyle="#000000",n.textAlign="center",n.textBaseline="middle",n.fillText(s,e.width/2,e.height/2);const a=new lm(e);return a.minFilter=si,a},JD=()=>le.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[le.jsx("path",{d:"M9 18V5l12-2v13"}),le.jsx("circle",{cx:"6",cy:"18",r:"3"}),le.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),eU=()=>le.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[le.jsx("circle",{cx:"12",cy:"12",r:"3"}),le.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),tU=()=>le.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[le.jsx("circle",{cx:"12",cy:"12",r:"10"}),le.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),le.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),_2=()=>le.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[le.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),le.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),v2=()=>le.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[le.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),le.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"})]}),nU=()=>le.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:le.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),iU=()=>le.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:[le.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),le.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),L0=()=>le.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[le.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),le.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),b2=()=>new oi({uniforms:{uMap:{value:null},uTime:{value:0},uResolution:{value:new jt(512,512)},uGlitchStrength:{value:.005},opacity:{value:1}},vertexShader:`
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
        `,transparent:!0}),aU=()=>{var Ue,Ee;const s=Ge.useRef(null),e=Ge.useRef(null),[n,a]=Ge.useState(()=>x2(window.innerWidth<768));Ge.useEffect(()=>{const G=()=>{const Ae=window.innerWidth<768;a(x2(Ae))};return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]);const[o,c]=Ge.useState(!1);Ge.useEffect(()=>{const G=()=>c(window.innerWidth<768);return G(),window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]);const[u,d]=Ge.useState(null),[m,p]=Ge.useState(!1),[g,x]=Ge.useState(!1),[_,y]=Ge.useState(null),E=Ge.useRef(null),[A,S]=Ge.useState(!1),[v,P]=Ge.useState(!0),[U,z]=Ge.useState(0),[V,O]=Ge.useState(!1),[B,re]=Ge.useState(5),C=Ge.useRef(0),R=Ge.useRef(1),[k,ae]=Ge.useState(1),ce=Ge.useRef(1),[pe,K]=Ge.useState(null),N=Ge.useRef(null),[Y,X]=Ge.useState(0),ue=Ge.useRef([]),me=Ge.useRef([]),D=Ge.useRef({}),Q=Ge.useRef([]),xe=Ge.useRef([]),Se=Ge.useRef(!1),De=Ge.useRef(!1),J=Ge.useRef(0),W=Ge.useRef(0),Re=Ge.useRef(null),Fe=Ge.useRef(null),Xe=Ge.useRef(!1);Ge.useRef(1);const Je=Ge.useRef(0),Ft=Ge.useRef(0),Ze=Ge.useRef(0),At=Ge.useRef(!1),F=Ge.useRef(0),xt=Ge.useRef(0);Ge.useRef(0);const Mt=Ge.useRef(null);Ge.useRef(!1),Ge.useEffect(()=>{Se.current=m,m?(document.body.style.overflow="hidden",Object.values(D.current).forEach(G=>G.pause())):g&&(document.body.style.overflow="auto")},[m,g]),Ge.useEffect(()=>{De.current=g,g?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[g]),Ge.useEffect(()=>{C.current=B},[B]),Ge.useEffect(()=>{Xe.current=V},[V]),Ge.useEffect(()=>{ce.current=k},[k]),Ge.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&ae(1.8)},[]),Ge.useEffect(()=>{E.current&&(A&&v?E.current.play().catch(G=>console.error("Audio playback failed:",G)):E.current.pause())},[A,v,U]);const qt=()=>S(!A),We=G=>{z(G),S(!0),P(!0)},Kt=()=>{window.scrollTo({top:0,behavior:"auto"}),J.current=0,W.current=0,Je.current=0,Ze.current=0,x(!0),S(!0),re(5),Object.values(D.current).forEach(G=>{G.muted=!1,G.volume=0})},it=G=>{const Ae=G.currentTarget.getBoundingClientRect(),Ke=Math.min(Math.max((G.clientX-Ae.left)/Ae.width,0),1);X(G.clientX);const Ut=Ua.length,lt=Math.floor(Ke*(Ut-1)),fn=Ua[lt];fn&&K(fn.date)},_t=()=>{K(null)},[L,M]=Ge.useState(()=>window.innerWidth<768?14:$t.CAMERA_START_Z);Ge.useEffect(()=>{const G=()=>{const Ae=window.innerWidth<768?14:$t.CAMERA_START_Z;M(Ke=>Ke!==Ae?Ae:Ke)};return window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]);const ee=L,ve=n[n.length-1].z,ye=ee-(ve+5),he=250/k;Ge.useEffect(()=>{Ft.current=ye*he},[ye,he]),Ge.useEffect(()=>{const G=lt=>{Se.current||!De.current||(Je.current+=lt.deltaY,Je.current=Math.max(0,Math.min(Je.current,Ft.current)),Ze.current=0)},Ae=lt=>{lt.target.closest("button, wired-slider, input, .wired-rendered")||(At.current=!0,Ze.current=0,F.current=lt.touches[0].clientY,xt.current=performance.now())},Ke=lt=>{if(lt.target.closest("button, wired-slider, input, .wired-rendered")||Se.current||!De.current)return;lt.preventDefault();const Ct=lt.touches[0].clientY,Oi=F.current-Ct;F.current=Ct,Je.current+=Oi,Je.current=Math.max(0,Math.min(Je.current,Ft.current));const oa=performance.now(),ya=oa-xt.current;if(xt.current=oa,ya>0){const Jn=Oi;Ze.current=Ze.current*.5+Jn*.5}},Ut=()=>{At.current=!1};return window.addEventListener("wheel",G,{passive:!1}),window.addEventListener("touchstart",Ae,{passive:!1}),window.addEventListener("touchmove",Ke,{passive:!1}),window.addEventListener("touchend",Ut),()=>{window.removeEventListener("wheel",G),window.removeEventListener("touchstart",Ae),window.removeEventListener("touchmove",Ke),window.removeEventListener("touchend",Ut)}},[]),Ge.useEffect(()=>{const G=()=>{window.audioContext||(window.audioContext=new(window.AudioContext||window.webkitAudioContext)),window.audioContext.state==="suspended"&&window.audioContext.resume()};return window.addEventListener("touchstart",G,{once:!0}),window.addEventListener("click",G,{once:!0}),window.addEventListener("keydown",G,{once:!0}),()=>{window.removeEventListener("touchstart",G),window.removeEventListener("click",G),window.removeEventListener("keydown",G)}},[]),Ge.useEffect(()=>{var Pt;if(!s.current)return;const G=new LS;G.background=new Tt(15857116),G.fog=new bf(15857116,20,80);const Ae=((Pt=n[n.length-1])==null?void 0:Pt.z)||-100,{update:Ke}=ZD(G,Ae);Mt.current=Ke;const Ut=new ZS(16777215,16777215,.35);G.add(Ut);const lt=new QS(16772306,1.5);lt.position.set(80,60,50),lt.castShadow=!0,lt.shadow.mapSize.width=2048,lt.shadow.mapSize.height=2048,lt.shadow.camera.left=-50,lt.shadow.camera.right=50,lt.shadow.camera.top=50,lt.shadow.camera.bottom=-50,G.add(lt);const fn=new JS(4210752,.5);G.add(fn);const Ct=new aa(50,window.innerWidth/window.innerHeight,.1,2e3);Ct.position.set(0,0,L),Re.current=Ct;const Oi=new Vw({canvas:s.current,antialias:!0,alpha:!1});Oi.setSize(window.innerWidth,window.innerHeight),Oi.setPixelRatio(Math.min(window.devicePixelRatio,2));const oa=new YS;oa.crossOrigin="Anonymous";const ya=3.2,Jn=3.2;new on(3.2,2.4),new ki({color:2236962,transparent:!0});const Na=2,Zr=.5;new on(Na,Zr),ue.current=[],Q.current=[];const _i=.2,ci=.02,bn=.04,Sn=.2,la=new ki({color:13750737}),Sa=new ki({color:3355443}),Jo=new ki({color:14540253}),Ps=$D(),zs=U0("close"),Pa=U0("zoom"),$r=U0("collapse"),Ma=new ki({map:zs,transparent:!0}),w=new ki({map:Pa,transparent:!0}),q=new ki({map:$r,transparent:!0});n.forEach(we=>{const ze=new jr;ze.position.set(we.x,we.y,we.z),ze.rotation.y=we.rotationY,ze.rotation.z=we.rotationZ;const nt=we.initialWidth,Ne=we.initialHeight,pt=new on(nt,Ne),st=new _n(pt,new ki({transparent:!0,opacity:0}));st.position.z=.1,st.position.y=0;let gt,ln,vt,cn,Lt,Vt,Yt,mt,tt,zt,rn,un,Fn;const vi=(za,qi)=>{const Yi=za/qi;let ei=ya,Ni=ya/Yi;Ni>Jn&&(Ni=Jn,ei=Jn*Yi);const ti=ei+Sn*2,ui=Ni+Sn*2;if(!gt){gt=new _n(new on(1,1),la),gt.position.z=.05,ze.add(gt),Ps&&(Fn=Ps.clone(),Fn.needsUpdate=!0);const fi=new ki({map:Fn,color:16777215});ln=new _n(new on(1,1),fi),ln.position.z=.05,ze.add(ln);const wn=_i*.7;vt=new _n(new on(wn,wn),Ma),ze.add(vt),cn=new _n(new on(wn,wn),w),ze.add(cn),Lt=new _n(new on(wn,wn),q),ze.add(Lt),Yt=new _n(new on(1,1),Jo),Yt.position.z=.02,ze.add(Yt),Vt=new _n(new on(1,1),Sa),Vt.position.z=0,ze.add(Vt),mt=new _n(new on(1,1),Sa),mt.position.z=.04,ze.add(mt),tt=new _n(new on(1,.02),Sa),tt.position.z=.06,ze.add(tt),un=KD(),me.current.push(un),zt=new _n(new on(1,1),un),zt.position.z=-.05,zt.position.x=0,ze.add(zt);const Is=QD(we.date);if(Is){const Kr=_i,Tc=Kr*4,Bs=new ki({map:Is,transparent:!0});rn=new _n(new on(Tc,Kr),Bs),rn.position.z=.07,ze.add(rn)}ze.add(st)}st.geometry.dispose(),st.geometry=new on(ei,Ni),gt&&(gt.geometry.dispose(),gt.geometry=new on(ti,ui),gt.position.y=0),mt&&(mt.geometry.dispose(),mt.geometry=new on(ti+.02,ui+.02),mt.position.y=0),tt&&(tt.geometry.dispose(),tt.geometry=new on(ti,.02),tt.position.y=ui/2),ln&&(ln.geometry.dispose(),ln.geometry=new on(ti,_i),ln.position.y=ui/2+_i/2,Fn&&Fn.repeat.set(ti/2,1),rn&&(rn.position.y=ln.position.y,rn.position.x=0));const bi=_i*.7,dr=.06;if(ln&&vt&&cn&&Lt){const fi=ln.position.y;vt.position.set(-(ti/2)+bi/2+.1,fi,dr),cn.position.set(ti/2-bi/2-.1,fi,dr),Lt.position.set(ti/2-bi*1.5-.2,fi,dr)}const Ea=ti+bn*2,yn=ui+_i+bn*2;Yt&&(Yt.geometry.dispose(),Yt.geometry=new on(Ea,yn),Yt.position.y=_i/2);const ca=Ea+ci*2,mi=yn+ci*2;Vt&&(Vt.geometry.dispose(),Vt.geometry=new on(ca,mi),Vt.position.y=_i/2);const Ia=.4;if(zt&&un&&Vt){const fi=ca+Ia*2,wn=mi+Ia*2;zt.geometry.dispose(),zt.geometry=new on(fi,wn),zt.position.y=Vt.position.y,un.uniforms.uSize.value.set(ca,mi)}};Q.current.push({item:we,contentMesh:st,updateGeometry:vi,loadedOpacity:0,targetLoadedOpacity:0,expandProgress:0,targetExpandProgress:0}),ze.add(st),ze.userData={id:we.id},G.add(ze),ue.current.push(st)});const se={},te=we=>{const ze=we.item;if(!se[ze.id]){if(ze.type==="video"){const nt=document.createElement("video");nt.src=ze.src,nt.crossOrigin="Anonymous",nt.muted=!0,nt.loop=!0,nt.playsInline=!0,nt.preload="auto",D.current[ze.id]=nt,we.video=nt,nt.onloadedmetadata=()=>{we.updateGeometry(nt.videoWidth,nt.videoHeight),we.targetLoadedOpacity=1,we.targetExpandProgress=1,nt.play().catch(()=>{})};let Ne=null;if(window.audioContext)try{const gt=window.audioContext.createMediaElementSource(nt);Ne=window.audioContext.createGain(),gt.connect(Ne),Ne.connect(window.audioContext.destination),Ne.gain.value=0}catch(gt){console.error(gt)}Ne&&(we.gainNode=Ne),Ne&&(we.gainNode=Ne);const pt=new VS(nt);pt.minFilter=si,pt.magFilter=si,pt.wrapS=Ci,pt.wrapT=Ci,pt.colorSpace=Ri,we.texture=pt;const st=b2();st.uniforms.uMap.value=pt,st.uniforms.uResolution.value.set(nt.videoWidth,nt.videoHeight),we.contentMesh.material.dispose(),we.contentMesh.material=st,we.contentMesh.material.needsUpdate=!0,xe.current.push(st)}else{const nt=ze.type==="embed"&&ze.previewSrc||ze.src;oa.load(nt,Ne=>{Ne.colorSpace=Ri,Ne.wrapS=Ci,Ne.wrapT=Ci,Ne.wrapT=Ci,we.texture=Ne;const pt=b2();pt.uniforms.uMap.value=Ne,Ne.image&&pt.uniforms.uResolution.value.set(Ne.image.width,Ne.image.height),we.contentMesh.material.dispose(),we.contentMesh.material=pt,we.contentMesh.material.needsUpdate=!0,xe.current.push(pt),Ne.image&&we.updateGeometry(Ne.image.width,Ne.image.height),we.targetLoadedOpacity=1,we.targetExpandProgress=1})}se[ze.id]=!0}},$=we=>{const ze=we.item.id;if(se[ze]){if(we.loadedOpacity=0,we.targetLoadedOpacity=0,we.expandProgress=0,we.targetExpandProgress=0,we.texture){if(we.texture.dispose(),we.contentMesh.material instanceof oi){const nt=xe.current.indexOf(we.contentMesh.material);nt>-1&&xe.current.splice(nt,1),we.contentMesh.material.dispose()}we.contentMesh.material=new ki({transparent:!0,opacity:0}),we.contentMesh.material.needsUpdate=!0,we.texture=void 0}we.video&&(we.video.pause(),we.video.src="",we.video.load(),delete D.current[ze],we.video=void 0),delete se[ze]}};n[n.length-1].z;const Ce=new tM,Oe=new jt,je=we=>{const ze=Math.abs(Ct.position.z-we.position.z);return ze<=$t.FADE_START?1:ze>=$t.FADE_END?0:1-(ze-$t.FADE_START)/($t.FADE_END-$t.FADE_START)},ke=we=>{var gt,ln;if(Se.current||!De.current)return;if(Fe.current){const vt=n.find(cn=>cn.id===Fe.current);if(vt){d(vt),p(!0);return}}Oe.x=we.clientX/window.innerWidth*2-1,Oe.y=-(we.clientY/window.innerHeight)*2+1,G.updateMatrixWorld(!0),Ce.setFromCamera(Oe,Ct);const ze=G.children.filter(vt=>vt instanceof jr&&vt.userData.id),nt=Ce.intersectObjects(ze,!0).filter(vt=>vt.object instanceof _n),Ne=new zf,pt=new pn;pt.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),Ne.setFromProjectionMatrix(pt);const st=Ct.getWorldDirection(new fe);for(const vt of nt){let cn=vt.object;for(;cn.parent&&!((gt=cn.userData)!=null&&gt.id);)cn=cn.parent;const Lt=(ln=cn.userData)==null?void 0:ln.id;if(!Lt)continue;const Vt=cn.getWorldPosition(new fe);if(!Ne.containsPoint(Vt)||Vt.clone().sub(Ct.position).dot(st)<=0||je(cn)<.1)continue;const tt=n.find(zt=>zt.id===Lt);if(tt){d(tt),p(!0);break}}};s.current.addEventListener("click",ke);const ct=we=>{var pt,st;if(Se.current||!De.current)return;Oe.x=we.clientX/window.innerWidth*2-1,Oe.y=-(we.clientY/window.innerHeight)*2+1,Ce.setFromCamera(Oe,Ct);const ze=G.children.filter(gt=>gt instanceof jr&&gt.userData.id),Ne=Ce.intersectObjects(ze,!0).find(gt=>gt.object instanceof _n);if(Ne){let gt=Ne.object;for(;gt.parent&&!((pt=gt.userData)!=null&&pt.id);)gt=gt.parent;Fe.current=(st=gt.userData)==null?void 0:st.id,document.body.style.cursor="pointer"}else Fe.current=null,document.body.style.cursor="default"};window.addEventListener("mousemove",ct);let ft;window.matchMedia("(pointer: coarse)").matches;const rt=()=>{var Yt;if(ft=requestAnimationFrame(rt),!Se.current&&De.current){const mt=Fe.current?$t.HOVER_MIN_SPEED_FACTOR:1;if(R.current+=(mt-R.current)*.1,!At.current){let Fn=0;if(C.current>0){const vi=250/ce.current;Fn=C.current*.8*(vi/200)*R.current}Ze.current+=(Fn-Ze.current)*.05,Math.abs(Fn)<.01&&Math.abs(Ze.current)<.01&&(Ze.current=0),Je.current+=Ze.current,Je.current<0?(Je.current=0,Ze.current=0):Je.current>Ft.current&&(Je.current=Ft.current,Ze.current=0)}Ft.current>0&&(W.current=Je.current/Ft.current);const tt=W.current-J.current,zt=Math.max(-20*.2,Math.min($t.MAX_SCROLL_SPEED*.2,tt));J.current+=zt*.1+tt*.05,Ct.position.z=L-J.current*ye,e.current&&(e.current.style.width=`${J.current*100}% `);const rn=Math.min(1,Math.max(0,J.current)),un=$t.SKY_STOPS;for(let Fn=0;Fn<un.length-1;Fn++){const vi=un[Fn],za=un[Fn+1];if(rn>=vi.pos&&rn<=za.pos){const qi=za.pos-vi.pos,Yi=(rn-vi.pos)/qi;G.background instanceof Tt&&G.background.copy(vi.color).lerp(za.color,Yi),G.fog instanceof bf&&G.fog.color.copy(G.background);break}}}if(me.current.length>0){const mt=performance.now()/1e3;me.current.forEach(tt=>{tt.uniforms.uTime.value=mt})}Object.keys(se).forEach(mt=>{const tt=Q.current.find(zt=>zt.item.id===mt);if(tt){const zt=tt.contentMesh.parent;Math.abs(Ct.position.z-zt.position.z)>32&&$(tt)}});const we=Math.max(0,Math.floor(-Ct.position.z/$t.Z_SPACING)),ze=8,nt=Math.max(0,we-ze),Ne=Math.min(Q.current.length-1,we+ze),pt=L-Ct.position.z,st=Math.min(Ua.length-1,Math.max(0,Math.round(pt/$t.Z_SPACING))),gt=Ua[st];let ln=null,vt=0;gt&&gt.type==="video"&&(ln=gt.id,vt=-(st*$t.Z_SPACING)+L+0);const cn=$t.Z_SPACING/2;let Lt=0;for(let mt=nt;mt<=Ne;mt++){const tt=Q.current[mt],zt=tt.contentMesh.parent,rn=tt.contentMesh,un=Math.abs(Ct.position.z-zt.position.z),Fn=22,vi=32,za=mt===Q.current.length-1;un<Fn?te(tt):un>vi&&!za&&$(tt);let qi=0;const Yi=6,ei=3;un<ei?(qi=0,zt.visible=!1):(zt.visible=!0,un<Yi?qi=(un-ei)/(Yi-ei):un<=$t.FADE_START?qi=1:un>=$t.FADE_END?qi=.3:qi=1-.7*((un-$t.FADE_START)/($t.FADE_END-$t.FADE_START))),tt.loadedOpacity+=(tt.targetLoadedOpacity-tt.loadedOpacity)*.05,tt.expandProgress+=(tt.targetExpandProgress-tt.expandProgress)*.04;const Ni=qi*tt.loadedOpacity;rn.material instanceof oi?rn.material.uniforms.opacity.value=Ni:rn.material.opacity=Ni;const ti=zt.children.find(yn=>yn.isMesh&&yn!==rn&&!yn.userData.isDate);ti&&ti.material&&(ti.material.opacity=Ni);const ui=zt.children.find(yn=>yn.userData.isDate);ui&&ui.material&&(ui.material.opacity=.8*Ni);let bi=1;un<$t.HIGHLIGHT_RANGE&&(bi=1+(1-un/$t.HIGHLIGHT_RANGE)*.15);const dr=.01+tt.expandProgress*.99;zt.scale.set(bi,bi*dr,1);const Ea=tt.item.id;if(D.current[Ea]){const yn=D.current[Ea];if(!Se.current&&De.current){const ca=window.innerWidth<768,mi=Ea===ln,Ia=mt===Q.current.length-1;if(Xe.current||ca&&!Ia)yn.muted||(yn.muted=!0),tt.gainNode&&tt.gainNode.gain.value>0&&(tt.gainNode.gain.cancelScheduledValues(0),tt.gainNode.gain.value=0);else if(mi){yn.muted=!1;let fi=Math.abs(Ct.position.z-vt);Ia&&Ct.position.z<vt&&(fi=0);let wn=Math.max(0,1-fi/cn);tt.gainNode?tt.gainNode.gain.setTargetAtTime(wn,window.audioContext.currentTime,.1):yn.volume=wn,Lt=Math.max(Lt,wn),yn.paused&&yn.play().catch(()=>{})}else yn.muted||(yn.muted=!0),yn.paused&&yn.play().catch(()=>{})}}}if(E.current&&v){let mt=1;const tt=Math.abs(Ct.position.z-n[n.length-1].z),zt=(Yt=Q.current[Q.current.length-1])==null?void 0:Yt.item.id;ln===zt?mt=0:Lt>.1?mt=.1:tt<$t.BGM_FADE_ZONE&&(mt=Math.max(0,(tt-$t.BGM_SILENCE_RADIUS)/($t.BGM_FADE_ZONE-$t.BGM_SILENCE_RADIUS))),A&&E.current.paused&&mt>.01&&E.current.play().catch(()=>{});const un=E.current.volume;Math.abs(un-mt)>.005?E.current.volume+=(mt-un)*.05:E.current.volume=mt}Mt.current&&Mt.current(performance.now());const Vt=performance.now()/1e3;xe.current.forEach(mt=>{mt.uniforms.uTime.value=Vt}),Oi.render(G,Ct)};rt();const bt=()=>{Ct.aspect=window.innerWidth/window.innerHeight,Ct.updateProjectionMatrix(),Oi.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",bt),()=>{var we;window.removeEventListener("resize",bt),window.removeEventListener("mousemove",ct),(we=s.current)==null||we.removeEventListener("click",ke),cancelAnimationFrame(ft),N.current&&cancelAnimationFrame(N.current),Oi.dispose(),document.body.style.height="auto",Object.values(D.current).forEach(ze=>{ze.pause(),ze.src="",ze.load()})}},[n,L,ye]);const et=()=>{p(!1),d(null)},Ie=G=>{Ze.current=0,W.current=Math.max(0,Math.min(1,G)),Ft.current>0&&(Je.current=W.current*Ft.current)},ot=G=>{const Ae=G.currentTarget.getBoundingClientRect(),Ke=G.touches[0],Ut=Math.min(Math.max((Ke.clientX-Ae.left)/Ae.width,0),1);X(Ke.clientX);const lt=Ua.length,fn=Math.floor(Ut*(lt-1)),Ct=Ua[fn];Ct&&K(Ct.date),Ie(Ut)},$e=G=>{if(m||!g)return;const Ae=G.currentTarget.getBoundingClientRect(),Ke=Math.min(Math.max((G.clientX-Ae.left)/Ae.width,0),1);Ie(Be(Ke))},Me=G=>{y(_===G?null:G)},Te=$t.CAMERA_START_Z,qe=n[n.length-1].z+5,Ve=Te-qe||1,dt=G=>Math.min(Math.max((Te-G)/Ve,0),1),H=G=>Te-G*Ve,Be=G=>dt(H(G)+$t.TIMELINE_FOCUS_OFFSET),Le=n.filter(G=>G.timelineLabel).map(G=>({id:G.id,label:G.timelineLabel,pct:dt(G.z),focusPct:dt(G.z+$t.TIMELINE_FOCUS_OFFSET),z:G.z}));return le.jsxs(le.Fragment,{children:[le.jsx("canvas",{ref:s,className:"fixed top-0 left-0 w-full h-full block z-0"}),le.jsx("audio",{ref:E,src:C0[U].src,onEnded:()=>We((U+1)%C0.length)}),!g&&le.jsx(qD,{onStartTransition:Kt}),le.jsx("div",{className:`fixed top-6 left-0 right-0 z-10 pointer-events-none transition-opacity duration-500 flex justify-center ${g?"opacity-100":"opacity-0"} `,children:le.jsx("h1",{className:"text-1xl md:text-3xl font-bold text-[#FFFFFF] drop-shadow-sm text-center px-4 whitespace-nowrap animate-text-glow",style:{fontFamily:"ChicagoFLF"},children:"The secret life of Warco Mu 🐵"})}),le.jsxs("div",{className:`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${g?"opacity-100":"opacity-0 pointer-events-none"} `,children:[le.jsxs("div",{className:"relative flex flex-col items-end",children:[le.jsx("button",{className:"w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all",onClick:()=>Me("audio"),children:le.jsx(JD,{})}),_==="audio"&&le.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:le.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-72 block border-2 border-black",children:[le.jsxs("div",{className:"flex justify-between items-center border-b-2 border-black pb-2 mb-3",children:[le.jsx("span",{className:"text-lg",style:{fontFamily:"ChicagoFLF"},children:"Audio Settings"}),le.jsx("button",{onClick:()=>y(null),className:"text-gray-500 hover:text-black",children:le.jsx(L0,{})})]}),le.jsxs("div",{className:"mb-4",children:[le.jsxs("div",{className:"flex justify-between items-center mb-1",children:[le.jsx("label",{className:"text-xs text-gray-500",children:"Video Sound"}),le.jsx("button",{onClick:()=>O(!V),className:"p-1 rounded hover:bg-gray-100",title:V?"Unmute Videos":"Mute Videos",children:V?le.jsx(v2,{}):le.jsx(_2,{})})]}),o&&le.jsxs("div",{className:"text-[10px] text-amber-700 bg-amber-50 p-2 rounded mb-2 border border-amber-200 leading-tight",children:["Video sound is disabled on mobile devices. ",le.jsx("br",{}),"(Except for the finale!)"]})]}),le.jsxs("div",{children:[le.jsxs("div",{className:"flex justify-between items-center mb-2",children:[le.jsx("label",{className:"text-xs text-gray-500",children:"Background Music"}),le.jsx("div",{className:"flex items-center gap-2",children:le.jsx("button",{onClick:()=>P(!v),className:"p-1 rounded hover:bg-gray-100",title:v?"Disable BGM":"Enable BGM",children:v?le.jsx(_2,{}):le.jsx(v2,{})})})]}),le.jsx("div",{className:`flex items-center gap-2 justify-center py-2 transition-opacity ${v?"opacity-100":"opacity-50 pointer-events-none"} `,children:le.jsx("button",{onClick:qt,className:"w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors",children:A?le.jsx(iU,{}):le.jsx(nU,{})})}),le.jsx("div",{className:`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${v?"opacity-100":"opacity-50 pointer-events-none"} `,children:C0.map((G,Ae)=>le.jsxs("div",{onClick:()=>We(Ae),className:`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${U===Ae?"bg-gray-50 font-bold text-gray-700":"text-gray-600"} `,children:[Ae+1,". ",G.title]},Ae))})]})]})})]}),le.jsxs("div",{className:"relative flex flex-col items-end",children:[le.jsx("button",{className:"w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all",onClick:()=>Me("general"),children:le.jsx(eU,{})}),_==="general"&&le.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:le.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block border-2 border-black",children:[le.jsxs("div",{className:"flex justify-between items-center border-b-2 border-black pb-2 mb-3",children:[le.jsx("span",{className:"text-lg",style:{fontFamily:"ChicagoFLF"},children:"General Settings"}),le.jsx("button",{onClick:()=>y(null),className:"text-gray-500 hover:text-black",children:le.jsx(L0,{})})]}),le.jsxs("div",{children:[le.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Auto-Forward Speed"}),le.jsxs("div",{className:"flex items-center gap-2",children:[le.jsx("span",{className:"text-xs text-gray-400",children:"Off"}),le.jsx("input",{type:"range",min:"0",max:"20",step:"1",value:B,onChange:G=>re(Number(G.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),le.jsx("span",{className:"text-xs font-bold w-4 text-center",children:B})]})]}),le.jsxs("div",{className:"mt-4",children:[le.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Scroll Sensitivity"}),le.jsxs("div",{className:"flex items-center gap-2",children:[le.jsx("span",{className:"text-xs text-gray-400",children:"Low"}),le.jsx("input",{type:"range",min:"0.1",max:"5.0",step:"0.1",value:k,onChange:G=>ae(Number(G.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),le.jsx("span",{className:"text-xs text-gray-400",children:"High"})]})]})]})})]}),le.jsxs("div",{className:"relative flex flex-col items-end",children:[le.jsx("button",{className:"w-12 h-12 bg-[#d1d1d1] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all",onClick:()=>Me("credit"),children:le.jsx(tU,{})}),_==="credit"&&le.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:le.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block border-2 border-black",children:[le.jsxs("div",{className:"flex justify-between items-center border-b-2 border-black pb-2 mb-3",children:[le.jsx("span",{className:"text-lg",style:{fontFamily:"ChicagoFLF"},children:"Credits"}),le.jsx("button",{onClick:()=>y(null),className:"text-gray-500 hover:text-black",children:le.jsx(L0,{})})]}),le.jsxs("div",{className:"text-xs text-gray-600 leading-relaxed",children:[le.jsx("p",{className:"mb-2",children:le.jsx("strong",{children:"Coming Soon"})}),le.jsxs("p",{className:"mb-2",children:["This gallery would like to thank the generous photo donors, who bravely surrendered their most questionable selfies. ",le.jsx("br",{}),"Special thanks to the friends who helped build this website—your debugging tears now live forever in this exhibit."]}),le.jsx("br",{}),le.jsx("p",{children:"Built with Gemini 3 Pro, GPT, Suno and their humble human operators with React, Three.js & Wired Elements."}),le.jsx("br",{}),le.jsx("p",{children:"BGM from YouTube: https://www.youtube.com/watch?v=bYkyj1GbdGU&list=RDssxbJpuzruQ&index=4, https://www.youtube.com/results?search_query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B+low+fi"})]})]})})]})]}),g&&le.jsxs("div",{className:"fixed left-0 right-0 bottom-0 h-4 bg-gray-200 cursor-pointer z-30 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in relative",style:{position:"fixed",bottom:0,left:0,right:0,top:"auto",touchAction:"none"},onClick:$e,onMouseMove:it,onMouseLeave:_t,onTouchStart:ot,onTouchMove:ot,onTouchEnd:_t,children:[Le.map(G=>le.jsxs("button",{onClick:Ae=>{Ae.stopPropagation(),Ie(G.focusPct)},className:"absolute flex flex-col items-center group/pin transition-transform duration-150",style:{left:`calc(${G.pct*100}% - 6px)`,bottom:"8px",zIndex:10},title:G.label,children:[le.jsx("span",{className:"text-[10px] font-semibold text-gray-700 mb-1 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap",children:G.label}),le.jsx("img",{src:YD,alt:G.label,className:"w-4 h-4 drop-shadow group-hover/pin:scale-110 transition-transform duration-150"})]},G.id)),le.jsx("div",{ref:e,className:"h-full bg-gray-500 relative transition-all duration-75 z-0",style:{width:"0%",backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNkI3MjgwIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')"}}),pe&&le.jsxs("div",{className:"absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50",style:{left:Y},children:[pe,le.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"})]})]}),m&&u&&le.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[le.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:et}),le.jsx("div",{className:"relative z-10 w-auto max-w-[95vw] flex flex-col items-center pointer-events-auto",children:le.jsxs("div",{className:"relative bg-white",style:{border:"2px solid #000000",boxShadow:"0 0 0 2px #a0a0a0, 0 0 0 4px #333333",maxWidth:"90vw"},children:[le.jsxs("div",{className:"relative h-8 flex items-center px-2",style:{background:"#d0d0d0",backgroundImage:`url("data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='stripeGrad' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:0.5'/%3E%3Cstop offset='50%25' style='stop-color:%23ffffff;stop-opacity:0.2'/%3E%3Cstop offset='100%25' style='stop-color:%23cccccc;stop-opacity:0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='4' height='4' fill='%23d0d0d0'/%3E%3Crect x='0' y='0' width='1' height='4' fill='url(%23stripeGrad)'/%3E%3Crect x='2' y='0' width='1' height='4' fill='url(%23stripeGrad)'/%3E%3C/svg%3E")`,borderBottom:"1px solid #333333"},children:[le.jsx("button",{onClick:et,className:"w-6 h-6 flex items-center justify-center transition-opacity hover:opacity-80",style:{background:"#8e8e8e",border:"2px solid #333333"},"aria-label":"Close",children:le.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"3",children:[le.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),le.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]})}),le.jsx("div",{className:"flex-1 text-center text-sm font-bold text-black select-none",style:{fontFamily:"ChicagoFLF, sans-serif"},children:u.title}),le.jsx("div",{className:"w-6"})]}),le.jsxs("div",{className:"p-4 bg-white overflow-y-auto max-h-[85vh] no-scrollbar",children:[le.jsxs("div",{className:"relative flex items-center justify-center bg-black border-2 border-black rounded-sm shadow-inner overflow-hidden",style:{maxHeight:"75vh",maxWidth:"85vw",aspectRatio:u.type==="embed"?((Ue=Lp[u.filename])==null?void 0:Ue.aspectRatio)||16/9:void 0,width:u.type==="embed"?`min(100%, calc(75vh * ${((Ee=Lp[u.filename])==null?void 0:Ee.aspectRatio)||1.777}))`:"auto",minWidth:u.type==="embed"?"60vw":"auto"},children:[u.type==="video"&&le.jsx("video",{src:u.src,className:"block max-w-full max-h-[75vh] w-auto h-auto object-contain",controls:!0,autoPlay:!0}),u.type==="embed"&&le.jsx("iframe",{src:(()=>{const G=u.embedUrl||u.src,Ae=G.includes("?")?"&":"?";return`${G}${Ae}autoplay=1&muted=1&playsinline=1&loop=1&controls=1`})(),className:"w-full h-full",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:u.title}),u.type==="image"&&le.jsx("img",{src:u.src,alt:u.title,className:"block max-w-full max-h-[75vh] w-auto h-auto object-contain"})]}),u.description&&le.jsx("div",{className:"mt-4 text-center",children:le.jsx("p",{className:"text-gray-800 text-sm md:text-base",children:u.description})})]})]})})]})]})},xb=document.getElementById("root");if(!xb)throw new Error("Could not find root element to mount to");const rU=g3.createRoot(xb);rU.render(le.jsx(l3.StrictMode,{children:le.jsx(aU,{})}));
