class L{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(t=>t.name===e).map(t=>t.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const t=this.get(e);if(t!==void 0){if(n!=="json"&&typeof t!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return t}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const t=this.get(e);if(t===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof t!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return t}getType(e){const n=this.properties.filter(t=>t.name===e).map(t=>t.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const G="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class ne{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new L(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function Z(r){const e=r?"#"+r.join():"";WA.nav.openCoWebSite(G+"/configuration.html"+e)}async function re(r,e){const n=await WA.room.getTiledMap(),t=new Map;return K(n.layers,t,r,e),t}function K(r,e,n,t){for(const a of r)if(a.type==="objectgroup"){for(const o of a.objects)if(o.type==="variable"||o.class==="variable"){if(n&&a.name!==n||t&&!t.includes(o.name))continue;e.set(o.name,new ne(o))}}else a.type==="group"&&K(a.layers,e,n,t)}let O;async function C(){return O===void 0&&(O=te()),O}async function te(){return ae(await WA.room.getTiledMap())}function ae(r){const e=new Map;return J(r.layers,"",e),e}function J(r,e,n){for(const t of r)t.type==="group"?J(t.layers,e+t.name+"/",n):(t.name=e+t.name,n.set(t.name,t))}async function oe(){const r=await C(),e=[];for(const n of r.values())if(n.type==="objectgroup")for(const t of n.objects)(t.type==="area"||t.class==="area")&&e.push(t);return e}function se(r){let e=1/0,n=1/0,t=0,a=0;const o=r.data;if(typeof o=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<r.height;s++)for(let i=0;i<r.width;i++)o[i+s*r.width]!==0&&(e=Math.min(e,i),a=Math.max(a,i),n=Math.min(n,s),t=Math.max(t,s));return{top:n,left:e,right:a+1,bottom:t+1}}function Y(r){let e=1/0,n=1/0,t=0,a=0;for(const o of r){const s=se(o);s.left<e&&(e=s.left),s.top<n&&(n=s.top),s.right>a&&(a=s.right),s.bottom>t&&(t=s.bottom)}return{top:n,left:e,right:a,bottom:t}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ie=Object.prototype.toString,P=Array.isArray||function(e){return ie.call(e)==="[object Array]"};function F(r){return typeof r=="function"}function ue(r){return P(r)?"array":typeof r}function U(r){return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function x(r,e){return r!=null&&typeof r=="object"&&e in r}function ce(r,e){return r!=null&&typeof r!="object"&&r.hasOwnProperty&&r.hasOwnProperty(e)}var le=RegExp.prototype.test;function pe(r,e){return le.call(r,e)}var fe=/\S/;function de(r){return!pe(fe,r)}var ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function be(r){return String(r).replace(/[&<>"'`=\/]/g,function(n){return ge[n]})}var ye=/\s*/,me=/\s+/,j=/\s*=/,he=/\s*\}/,Ae=/#|\^|\/|>|\{|&|=|!/;function ve(r,e){if(!r)return[];var n=!1,t=[],a=[],o=[],s=!1,i=!1,c="",f=0;function d(){if(s&&!i)for(;o.length;)delete a[o.pop()];else o=[];s=!1,i=!1}var m,A,I;function w(S){if(typeof S=="string"&&(S=S.split(me,2)),!P(S)||S.length!==2)throw new Error("Invalid tags: "+S);m=new RegExp(U(S[0])+"\\s*"),A=new RegExp("\\s*"+U(S[1])),I=new RegExp("\\s*"+U("}"+S[1]))}w(e||y.tags);for(var l=new M(r),v,b,h,E,N,T;!l.eos();){if(v=l.pos,h=l.scanUntil(m),h)for(var k=0,ee=h.length;k<ee;++k)E=h.charAt(k),de(E)?(o.push(a.length),c+=E):(i=!0,n=!0,c+=" "),a.push(["text",E,v,v+1]),v+=1,E===`
`&&(d(),c="",f=0,n=!1);if(!l.scan(m))break;if(s=!0,b=l.scan(Ae)||"name",l.scan(ye),b==="="?(h=l.scanUntil(j),l.scan(j),l.scanUntil(A)):b==="{"?(h=l.scanUntil(I),l.scan(he),l.scanUntil(A),b="&"):h=l.scanUntil(A),!l.scan(A))throw new Error("Unclosed tag at "+l.pos);if(b==">"?N=[b,h,v,l.pos,c,f,n]:N=[b,h,v,l.pos],f++,a.push(N),b==="#"||b==="^")t.push(N);else if(b==="/"){if(T=t.pop(),!T)throw new Error('Unopened section "'+h+'" at '+v);if(T[1]!==h)throw new Error('Unclosed section "'+T[1]+'" at '+v)}else b==="name"||b==="{"||b==="&"?i=!0:b==="="&&w(h)}if(d(),T=t.pop(),T)throw new Error('Unclosed section "'+T[1]+'" at '+l.pos);return Te(Se(a))}function Se(r){for(var e=[],n,t,a=0,o=r.length;a<o;++a)n=r[a],n&&(n[0]==="text"&&t&&t[0]==="text"?(t[1]+=n[1],t[3]=n[3]):(e.push(n),t=n));return e}function Te(r){for(var e=[],n=e,t=[],a,o,s=0,i=r.length;s<i;++s)switch(a=r[s],a[0]){case"#":case"^":n.push(a),t.push(a),n=a[4]=[];break;case"/":o=t.pop(),o[5]=a[2],n=t.length>0?t[t.length-1][4]:e;break;default:n.push(a)}return e}function M(r){this.string=r,this.tail=r,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var t=n[0];return this.tail=this.tail.substring(t.length),this.pos+=t.length,t};M.prototype.scanUntil=function(e){var n=this.tail.search(e),t;switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t};function W(r,e){this.view=r,this.cache={".":this.view},this.parent=e}W.prototype.push=function(e){return new W(e,this)};W.prototype.lookup=function(e){var n=this.cache,t;if(n.hasOwnProperty(e))t=n[e];else{for(var a=this,o,s,i,c=!1;a;){if(e.indexOf(".")>0)for(o=a.view,s=e.split("."),i=0;o!=null&&i<s.length;)i===s.length-1&&(c=x(o,s[i])||ce(o,s[i])),o=o[s[i++]];else o=a.view[e],c=x(a.view,e);if(c){t=o;break}a=a.parent}n[e]=t}return F(t)&&(t=t.call(this.view)),t};function g(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(e,n){var t=this.templateCache,a=e+":"+(n||y.tags).join(":"),o=typeof t<"u",s=o?t.get(a):void 0;return s==null&&(s=ve(e,n),o&&t.set(a,s)),s};g.prototype.render=function(e,n,t,a){var o=this.getConfigTags(a),s=this.parse(e,o),i=n instanceof W?n:new W(n,void 0);return this.renderTokens(s,i,t,e,a)};g.prototype.renderTokens=function(e,n,t,a,o){for(var s="",i,c,f,d=0,m=e.length;d<m;++d)f=void 0,i=e[d],c=i[0],c==="#"?f=this.renderSection(i,n,t,a,o):c==="^"?f=this.renderInverted(i,n,t,a,o):c===">"?f=this.renderPartial(i,n,t,o):c==="&"?f=this.unescapedValue(i,n):c==="name"?f=this.escapedValue(i,n,o):c==="text"&&(f=this.rawValue(i)),f!==void 0&&(s+=f);return s};g.prototype.renderSection=function(e,n,t,a,o){var s=this,i="",c=n.lookup(e[1]);function f(A){return s.render(A,n,t,o)}if(c){if(P(c))for(var d=0,m=c.length;d<m;++d)i+=this.renderTokens(e[4],n.push(c[d]),t,a,o);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")i+=this.renderTokens(e[4],n.push(c),t,a,o);else if(F(c)){if(typeof a!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,a.slice(e[3],e[5]),f),c!=null&&(i+=c)}else i+=this.renderTokens(e[4],n,t,a,o);return i}};g.prototype.renderInverted=function(e,n,t,a,o){var s=n.lookup(e[1]);if(!s||P(s)&&s.length===0)return this.renderTokens(e[4],n,t,a,o)};g.prototype.indentPartial=function(e,n,t){for(var a=n.replace(/[^ \t]/g,""),o=e.split(`
`),s=0;s<o.length;s++)o[s].length&&(s>0||!t)&&(o[s]=a+o[s]);return o.join(`
`)};g.prototype.renderPartial=function(e,n,t,a){if(t){var o=this.getConfigTags(a),s=F(t)?t(e[1]):t[e[1]];if(s!=null){var i=e[6],c=e[5],f=e[4],d=s;c==0&&f&&(d=this.indentPartial(s,f,i));var m=this.parse(d,o);return this.renderTokens(m,n,t,d,a)}}};g.prototype.unescapedValue=function(e,n){var t=n.lookup(e[1]);if(t!=null)return t};g.prototype.escapedValue=function(e,n,t){var a=this.getConfigEscape(t)||y.escape,o=n.lookup(e[1]);if(o!=null)return typeof o=="number"&&a===y.escape?String(o):a(o)};g.prototype.rawValue=function(e){return e[1]};g.prototype.getConfigTags=function(e){return P(e)?e:e&&typeof e=="object"?e.tags:void 0};g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!P(e))return e.escape};var y={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(r){R.templateCache=r},get templateCache(){return R.templateCache}},R=new g;y.clearCache=function(){return R.clearCache()};y.parse=function(e,n){return R.parse(e,n)};y.render=function(e,n,t,a){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ue(e)+'" was given as the first argument for mustache#render(template, view, partials)');return R.render(e,n,t,a)};y.escape=be;y.Scanner=M;y.Context=W;y.Writer=g;class X{constructor(e,n){this.template=e,this.state=n,this.ast=y.parse(e)}getValue(){return this.value===void 0&&(this.value=y.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const t of this.getUsedVariables().values())n.push(this.state.onVariableChange(t).subscribe(()=>{const a=y.render(this.template,this.state);a!==this.value&&(this.value=a,e(this.value))}));return{unsubscribe:()=>{for(const t of n)t.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const t of e){const a=t[0],o=t[1],s=t[4];["name","&","#","^"].includes(a)&&n.add(o),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,n)}}}async function We(){var r;const e=await oe();for(const n of e){const t=(r=n.properties)!==null&&r!==void 0?r:[];for(const a of t){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const o=new X(a.value,WA.state);if(o.isPureString())continue;const s=o.getValue();await z(n.name,a.name,s),o.onChange(async i=>{await z(n.name,a.name,i)})}}}async function Pe(){var r;const e=await C();for(const[n,t]of e.entries())if(t.type!=="objectgroup"){const a=(r=t.properties)!==null&&r!==void 0?r:[];for(const o of a){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new X(o.value,WA.state);if(s.isPureString())continue;const i=s.getValue();H(n,o.name,i),s.onChange(c=>{H(n,o.name,c)})}}}async function z(r,e,n){console.log(r),(await WA.room.area.get(r)).setProperty(e,n)}function H(r,e,n){WA.room.setProperty(r,e,n),e==="visible"&&(n?WA.room.showLayer(r):WA.room.hideLayer(r))}let B,D=0,V=0;function q(r){if(WA.state[r.name]){let e=r.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=r.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=r.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=r.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function we(r){const e=r.properties.getString("openSound"),n=r.properties.getNumber("soundRadius");let t=1;if(n){const a=$(r.properties.mustGetString("openLayer").split(`
`));if(a>n)return;t=1-a/n}e&&WA.sound.loadSound(e).play({volume:t})}function Ee(r){const e=r.properties.getString("closeSound"),n=r.properties.getNumber("soundRadius");let t=1;if(n){const a=$(r.properties.mustGetString("closeLayer").split(`
`));if(a>n)return;t=1-a/n}e&&WA.sound.loadSound(e).play({volume:t})}function Q(r){return r.map(e=>B.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function $(r){const e=Q(r),n=Y(e),t=((n.right-n.left)/2+n.left)*32,a=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(D-t,2)+Math.pow(V-a,2))}function Le(r){WA.state.onVariableChange(r.name).subscribe(()=>{WA.state[r.name]?we(r):Ee(r),q(r)}),q(r)}function Re(r,e,n,t){const a=r.name;let o,s,i=!1;const c=n.getString("tag");let f=!0;c&&!WA.player.tags.includes(c)&&(f=!1);const d=!!c;function m(){var l;o&&o.remove(),o=WA.ui.displayActionMessage({message:(l=n.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,A()}})}function A(){var l;o&&o.remove(),o=WA.ui.displayActionMessage({message:(l=n.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,m()}})}function I(l){const v=Y(Q(e.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+l,url:t+"/keypad.html#"+encodeURIComponent(l),position:{x:v.right*32,y:v.top*32,width:32*3,height:32*4},allowApi:!0})}function w(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(a).subscribe(()=>{if(i=!0,n.getBoolean("autoOpen")&&f){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(d&&!f||!d)&&(n.getString("code")||n.getString("codeVariable"))){I(a);return}f&&(WA.state[e.name]?m():A())}),WA.room.onLeaveLayer(a).subscribe(()=>{i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),o&&o.remove(),w()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&m(),s&&WA.state[e.name]===!0&&w(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&A())})}function Ce(r){const e=r.properties.mustGetString("bellSound"),n=r.properties.getNumber("soundRadius");let t=1;if(n){const a=Math.sqrt(Math.pow(r.x-D,2)+Math.pow(r.y-V,2));if(a>n)return;t=1-a/n}WA.sound.loadSound(e).play({volume:t})}function Me(r){WA.state[r.name]===void 0&&(WA.state[r.name]=0),WA.state.onVariableChange(r.name).subscribe(()=>{WA.state[r.name]&&Ce(r)})}function Ie(r,e,n){let t;const a=e.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var o;a?t=WA.ui.openPopup(a,"",[{label:(o=e.getString("bellButtonText"))!==null&&o!==void 0?o:"Ring",callback:()=>{WA.state[r]=WA.state[r]+1}}]):WA.state[r]=WA.state[r]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{t&&(t.close(),t=void 0)})}async function Ne(r){r=r??G;const e=await re();B=await C();for(const n of e.values())n.properties.get("door")&&Le(n),n.properties.get("bell")&&Me(n);for(const n of B.values()){const t=new L(n.properties),a=t.getString("doorVariable");if(a&&n.type==="tilelayer"){const s=e.get(a);if(s===void 0)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of layer "'+n.name+'"');Re(n,s,t,r)}const o=t.getString("bellVariable");o&&Ie(o,t,n.name)}WA.player.onPlayerMove(n=>{D=n.x,V=n.y})}function ke(r,e){const n=r.getString("bindVariable");if(n){const t=r.get("enterValue"),a=r.get("leaveValue"),o=r.getString("triggerMessage"),s=r.getString("tag");Oe(n,e,t,a,o,s)}}function Oe(r,e,n,t,a,o){o&&!WA.player.tags.includes(o)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{a||(WA.state[r]=n)}),t!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[r]=t}))}async function Ue(){const r=await C();for(const e of r.values()){const n=new L(e.properties);ke(n,e.name)}}let _;async function Be(r){const e=await WA.room.getTiledMap();r=r??G,_=await C();const n=e.layers.find(t=>t.name==="configuration");if(n){const a=new L(n.properties).getString("tag");(!a||WA.player.tags.includes(a))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(r+"/configuration.html",!0)});for(const o of _.values()){const s=new L(o.properties),i=s.getString("openConfig");i&&o.type==="tilelayer"&&Ge(i.split(","),o.name,s)}}}function Ge(r,e,n){let t;const a=n.getString("openConfigAdminTag");let o=!0;a&&!WA.player.tags.includes(a)&&(o=!1);function s(){var c;t&&t.remove(),t=WA.ui.displayActionMessage({message:(c=n.getString("openConfigTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE or touch here to configure",callback:()=>Z(r)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const c=n.getString("openConfigTrigger");o&&(c&&c==="onaction"?s():Z(r))}),WA.room.onLeaveLayer(e).subscribe(()=>{t&&t.remove(),i()})}function Fe(){return WA.onInit().then(()=>{Ne().catch(r=>console.error(r)),Ue().catch(r=>console.error(r)),Be().catch(r=>console.error(r)),Pe().catch(r=>console.error(r)),We().catch(r=>console.error(r))}).catch(r=>console.error(r))}console.log("Script started successfully");let p;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("clock").subscribe(()=>{const r=new Date,e=r.getHours()+":"+r.getMinutes();p=WA.ui.openPopup("clockPopup","Il est : "+e,[])}),WA.room.area.onEnter("tts6.3Zone").subscribe(()=>{p=WA.ui.openPopup("tts6.3Popup",`TTS 6.3 
 Présenté par 
 Stéphane Maréchal 
 CGI 
 `,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts10Zone").subscribe(()=>{p=WA.ui.openPopup("tts10Popup",`TTS 10 
 Présenté par 
 Aklesso TCHAKPELE 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts11Zone").subscribe(()=>{p=WA.ui.openPopup("tts11Popup",`TTS 11 
 Présenté par 
 François GERGAUD 
 Andrew MUMFORD 
 Pascal LAMBERT 
 Cédric ROMERO 
 Mathieu GOULIN
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts12Zone").subscribe(()=>{p=WA.ui.openPopup("tts12Popup",`TTS 12 
 Présenté par 
 Roxanne SPIES 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts13Zone").subscribe(()=>{p=WA.ui.openPopup("tts13Popup",`TTS 13 
 Présenté par 
 Cyril Carrillat 
 Marie Cordenod 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts14Zone").subscribe(()=>{p=WA.ui.openPopup("tts14Popup",`TTS 14 : 
 Présenté par 
 Quentin Montcharmont 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts15Zone").subscribe(()=>{p=WA.ui.openPopup("tts15Popup",`TTS 15 : 

 Présenté par 
 Ahmed FATHALLAH
 Andrada COVACI
 Sébastien SAURON
 Jean-Baptiste RAINSART 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts16Zone").subscribe(()=>{p=WA.ui.openPopup("tts16Popup",`TTS 16 : 
 
 Présenté par 
 Carlos GONCALVES
 Hakim RANDRIANARIVO
 Céline LECLEIRE
 Romain BOURGON
 Steven YVEN 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts17.1Zone").subscribe(()=>{p=WA.ui.openPopup("tts17.1Popup",`TTS 17.1 :
 Présenté par 
 Alizée SEGARD
 Mansour YOUM
 Virginie FEMERY 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("officeZone").subscribe(()=>{p=WA.ui.openPopup("officePopup",`Venez ici pour échanger avec l'équipe du Lab Inno 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS1").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS1",`Ressources de TTS N°1 : L'automatisation robotisée des process (RPA) 
 Intervenants : Rami TORKHANI 
 (SAO) 
 Aurélien GRANDJEAN 
 (AOC)`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS2").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS2",`Ressources de TTS N°2 : Conteneurisation, un des enjeux des process devsecops  
 Intervenants : Frédéric ROULET 
  Yannick MULLER 
 (société REDHAT) 
 Cédric ROMéRO 
Philippe GAVOIS`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS3").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS3",`Ressources de TTS N°3 : Accessibilité & Handicap  
 Intervenants : Marielle MORIZOT 
 Mathieu FROIDURE 
 (Président de la société URBILOG)
 `,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS4").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS4",`Ressources de TTS N°4 : Pratique centrées utilisateurs : l'UX research  
Intervenants : Roxanne SPIES 
(Prestataire au sein du LAB et Experte User Research) 
 France WANG 
(CPO de la plateforme Tandemz)
Alice TAPIA 
(UX/UI designer)`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS5").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS5",`Ressources de TTS N°5 : Outillage Ansible, AWX et Maestro
Intervenants : Cédric Romero 
(TMO) 
Emmanuel Muller 
(TMO)
Dominique Parisot 
(TMO)
Mathieu Goulin 
(TMO)
Anas Haddad 
(FST) 
Jean-François Javel 
(DSA)`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS6.1").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS6.1",`Ressources de TTS N°6.1 : Intelligence artificielle - Vulgarisation et demystification
Intervenants : Isabelle DONATO 
(Directrice Innovation FabLab INETUM)
Jean-Paul MULLER 
(Global Practice Manager INETUM)
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS7").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS7",`Ressources de TTS N°7 : L'automatisation dans les projets applicatifs, accelerateur devsecops d'aujourdh'ui et de demain
Intervenants :Rémi RAPENNE 
Frédéric ROULET
Ludovic PIOT 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS8").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS8",`Ressources de TTS N°8 : L'écosystéme des applications mobile MGEN
Intervenants : Inès ROUANET
(Digital Factory)
Agnès CHATELLE 
(Direction Digitale)
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS6.2").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS6.2",`Ressources de TTS N°6.2 : Cadrer et Piloter les cas d'usage dans les mutuelles et les assurances 
Intervenants : Amine BENHENNI
(expert stratégie et exécution DATA & IA)
Christophe GAZEAU 
(expert Digital de AKORDIA)
Christophe GAZEAU 
(expert stratégie et exécution DATA & IA)
Marième LOUGADI 
Franck GRANDMAIRE 
(Equipe industrialisation de QTS (Qualité Transformation Sécurité))`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS9").subscribe(()=>{p=WA.ui.openPopup("librarySignPopupTTS9",`Ressources de TTS N°9 : Les cas d'usage de la Blockchain
Intervenants : Théotime PINON
(Cabinet de conseil OCTO)
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("welcomeZone").subscribe(()=>{p=WA.ui.openPopup("welcomePopup",`Bienvenue au Salon des TTS du LAB Inno 


Une zone rouge permet d'acceder au Replay d'un TTS 
Une zone jaune permet d'acceder à l'article d'un TTS 
Une zone verte permet d'acceder au Sharepoint contenant la documentation du TTS 

Vous pouvez également partager votre humeur en appuyant sur les touches 1 à 6 
de votre clavier`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("welcomeZone2").subscribe(()=>{p=WA.ui.openPopup("welcomePopup2",`Bienvenue au Salon des TTS du LAB Inno 


Une zone rouge permet d'acceder au Replay d'un TTS 
Une zone jaune permet d'acceder à l'article d'un TTS 
Une zone verte permet d'acceder au Sharepoint contenant la documentation du TTS 

Vous pouvez également partager votre humeur en appuyant sur les touches 1 à 6 
de votre clavier`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("libraryIndication").subscribe(()=>{p=WA.ui.openPopup("libraryIndicationPopup",`Bienvenue dans les archives des TTS 2021 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("officeIndicationZone").subscribe(()=>{p=WA.ui.openPopup("officeIndicationPopup",`Suivez ce chemin jusqu'au bout et prenez en haut 
 pour atteindre nos bureaux `,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onLeave("clock").subscribe(u),WA.room.area.onLeave("tts6.3Zone").subscribe(u),WA.room.area.onLeave("tts10Zone").subscribe(u),WA.room.area.onLeave("tts11Zone").subscribe(u),WA.room.area.onLeave("tts12Zone").subscribe(u),WA.room.area.onLeave("tts13Zone").subscribe(u),WA.room.area.onLeave("tts14Zone").subscribe(u),WA.room.area.onLeave("tts15Zone").subscribe(u),WA.room.area.onLeave("tts16Zone").subscribe(u),WA.room.area.onLeave("tts17.1Zone").subscribe(u),WA.room.area.onLeave("officeIndicationZone").subscribe(u),WA.room.area.onLeave("officeZone").subscribe(u),WA.room.area.onLeave("welcomeZone").subscribe(u),WA.room.area.onLeave("welcomeZone2").subscribe(u),WA.room.area.onLeave("libraryIndication").subscribe(u),WA.room.area.onLeave("librarySignTTS1").subscribe(u),WA.room.area.onLeave("librarySignTTS2").subscribe(u),WA.room.area.onLeave("librarySignTTS3").subscribe(u),WA.room.area.onLeave("librarySignTTS4").subscribe(u),WA.room.area.onLeave("librarySignTTS5").subscribe(u),WA.room.area.onLeave("librarySignTTS6.1").subscribe(u),WA.room.area.onLeave("librarySignTTS6.2").subscribe(u),WA.room.area.onLeave("librarySignTTS7").subscribe(u),WA.room.area.onLeave("librarySignTTS8").subscribe(u),WA.room.area.onLeave("librarySignTTS9").subscribe(u),Fe().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r))}).catch(r=>console.error(r));function u(){p!==void 0&&(p.close(),p=void 0)}
