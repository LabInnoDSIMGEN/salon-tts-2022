var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F={},oe={get exports(){return F},set exports(n){F=n}};(function(n,e){(function(t,r){r()})(R,function(){function t(l,p){return typeof p>"u"?p={autoBom:!1}:typeof p!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),p={autoBom:!p}),p.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function r(l,p,b){var d=new XMLHttpRequest;d.open("GET",l),d.responseType="blob",d.onload=function(){c(d.response,p,b)},d.onerror=function(){console.error("could not download file")},d.send()}function a(l){var p=new XMLHttpRequest;p.open("HEAD",l,!1);try{p.send()}catch{}return 200<=p.status&&299>=p.status}function o(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var p=document.createEvent("MouseEvents");p.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(p)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof R=="object"&&R.global===R?R:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(l,p,b){var d=s.URL||s.webkitURL,g=document.createElement("a");p=p||l.name||"download",g.download=p,g.rel="noopener",typeof l=="string"?(g.href=l,g.origin===location.origin?o(g):a(g.href)?r(l,p,b):o(g,g.target="_blank")):(g.href=d.createObjectURL(l),setTimeout(function(){d.revokeObjectURL(g.href)},4e4),setTimeout(function(){o(g)},0))}:"msSaveOrOpenBlob"in navigator?function(l,p,b){if(p=p||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(t(l,b),p);else if(a(l))r(l,p,b);else{var d=document.createElement("a");d.href=l,d.target="_blank",setTimeout(function(){o(d)})}}:function(l,p,b,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof l=="string")return r(l,p,b);var g=l.type==="application/octet-stream",M=/constructor/i.test(s.HTMLElement)||s.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent);if((f||g&&M||i)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var w=S.result;w=f?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=w:location=w,d=null},S.readAsDataURL(l)}else{var y=s.URL||s.webkitURL,h=y.createObjectURL(l);d?d.location=h:location.href=h,d=null,setTimeout(function(){y.revokeObjectURL(h)},4e4)}});s.saveAs=c.saveAs=c,n.exports=c})})(oe);class N{constructor(e){this.properties=e??[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const V="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class se{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new N(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function H(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(V+"/configuration.html"+e)}async function ie(n,e){const t=await WA.room.getTiledMap(),r=new Map;return Q(t.layers,r,n,e),r}function Q(n,e,t,r){for(const a of n)if(a.type==="objectgroup"){for(const o of a.objects)if(o.type==="variable"||o.class==="variable"){if(t&&a.name!==t||r&&!r.includes(o.name))continue;e.set(o.name,new se(o))}}else a.type==="group"&&Q(a.layers,e,t,r)}let G;async function I(){return G===void 0&&(G=le()),G}async function le(){return ce(await WA.room.getTiledMap())}function ce(n){const e=new Map;return $(n.layers,"",e),e}function $(n,e,t){for(const r of n)r.type==="group"?$(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}async function ue(){const n=await I(),e=[];for(const t of n.values())if(t.type==="objectgroup")for(const r of t.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function pe(n){let e=1/0,t=1/0,r=0,a=0;const o=n.data;if(typeof o=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<n.height;s++)for(let i=0;i<n.width;i++)o[i+s*n.width]!==0&&(e=Math.min(e,i),a=Math.max(a,i),t=Math.min(t,s),r=Math.max(r,s));return{top:t,left:e,right:a+1,bottom:r+1}}function ee(n){let e=1/0,t=1/0,r=0,a=0;for(const o of n){const s=pe(o);s.left<e&&(e=s.left),s.top<t&&(t=s.top),s.right>a&&(a=s.right),s.bottom>r&&(r=s.bottom)}return{top:t,left:e,right:a,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var de=Object.prototype.toString,L=Array.isArray||function(e){return de.call(e)==="[object Array]"};function j(n){return typeof n=="function"}function fe(n){return L(n)?"array":typeof n}function U(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function q(n,e){return n!=null&&typeof n=="object"&&e in n}function me(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var be=RegExp.prototype.test;function ge(n,e){return be.call(n,e)}var ye=/\S/;function he(n){return!ge(ye,n)}var Se={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function ve(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return Se[t]})}var Te=/\s*/,Ae=/\s+/,_=/\s*=/,we=/\s*\}/,Ee=/#|\^|\/|>|\{|&|=|!/;function Me(n,e){if(!n)return[];var t=!1,r=[],a=[],o=[],s=!1,i=!1,c="",l=0;function p(){if(s&&!i)for(;o.length;)delete a[o.pop()];else o=[];s=!1,i=!1}var b,d,g;function M(E){if(typeof E=="string"&&(E=E.split(Ae,2)),!L(E)||E.length!==2)throw new Error("Invalid tags: "+E);b=new RegExp(U(E[0])+"\\s*"),d=new RegExp("\\s*"+U(E[1])),g=new RegExp("\\s*"+U("}"+E[1]))}M(e||T.tags);for(var f=new C(n),S,y,h,w,k,W;!f.eos();){if(S=f.pos,h=f.scanUntil(b),h)for(var O=0,ae=h.length;O<ae;++O)w=h.charAt(O),he(w)?(o.push(a.length),c+=w):(i=!0,t=!0,c+=" "),a.push(["text",w,S,S+1]),S+=1,w===`
`&&(p(),c="",l=0,t=!1);if(!f.scan(b))break;if(s=!0,y=f.scan(Ee)||"name",f.scan(Te),y==="="?(h=f.scanUntil(_),f.scan(_),f.scanUntil(d)):y==="{"?(h=f.scanUntil(g),f.scan(we),f.scanUntil(d),y="&"):h=f.scanUntil(d),!f.scan(d))throw new Error("Unclosed tag at "+f.pos);if(y==">"?k=[y,h,S,f.pos,c,l,t]:k=[y,h,S,f.pos],l++,a.push(k),y==="#"||y==="^")r.push(k);else if(y==="/"){if(W=r.pop(),!W)throw new Error('Unopened section "'+h+'" at '+S);if(W[1]!==h)throw new Error('Unclosed section "'+W[1]+'" at '+S)}else y==="name"||y==="{"||y==="&"?i=!0:y==="="&&M(h)}if(p(),W=r.pop(),W)throw new Error('Unclosed section "'+W[1]+'" at '+f.pos);return Pe(We(a))}function We(n){for(var e=[],t,r,a=0,o=n.length;a<o;++a)t=n[a],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function Pe(n){for(var e=[],t=e,r=[],a,o,s=0,i=n.length;s<i;++s)switch(a=n[s],a[0]){case"#":case"^":t.push(a),r.push(a),t=a[4]=[];break;case"/":o=r.pop(),o[5]=a[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(a)}return e}function C(n){this.string=n,this.tail=n,this.pos=0}C.prototype.eos=function(){return this.tail===""};C.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};C.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function P(n,e){this.view=n,this.cache={".":this.view},this.parent=e}P.prototype.push=function(e){return new P(e,this)};P.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var a=this,o,s,i,c=!1;a;){if(e.indexOf(".")>0)for(o=a.view,s=e.split("."),i=0;o!=null&&i<s.length;)i===s.length-1&&(c=q(o,s[i])||me(o,s[i])),o=o[s[i++]];else o=a.view[e],c=q(a.view,e);if(c){r=o;break}a=a.parent}t[e]=r}return j(r)&&(r=r.call(this.view)),r};function v(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}v.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};v.prototype.parse=function(e,t){var r=this.templateCache,a=e+":"+(t||T.tags).join(":"),o=typeof r<"u",s=o?r.get(a):void 0;return s==null&&(s=Me(e,t),o&&r.set(a,s)),s};v.prototype.render=function(e,t,r,a){var o=this.getConfigTags(a),s=this.parse(e,o),i=t instanceof P?t:new P(t,void 0);return this.renderTokens(s,i,r,e,a)};v.prototype.renderTokens=function(e,t,r,a,o){for(var s="",i,c,l,p=0,b=e.length;p<b;++p)l=void 0,i=e[p],c=i[0],c==="#"?l=this.renderSection(i,t,r,a,o):c==="^"?l=this.renderInverted(i,t,r,a,o):c===">"?l=this.renderPartial(i,t,r,o):c==="&"?l=this.unescapedValue(i,t):c==="name"?l=this.escapedValue(i,t,o):c==="text"&&(l=this.rawValue(i)),l!==void 0&&(s+=l);return s};v.prototype.renderSection=function(e,t,r,a,o){var s=this,i="",c=t.lookup(e[1]);function l(d){return s.render(d,t,r,o)}if(c){if(L(c))for(var p=0,b=c.length;p<b;++p)i+=this.renderTokens(e[4],t.push(c[p]),r,a,o);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")i+=this.renderTokens(e[4],t.push(c),r,a,o);else if(j(c)){if(typeof a!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(t.view,a.slice(e[3],e[5]),l),c!=null&&(i+=c)}else i+=this.renderTokens(e[4],t,r,a,o);return i}};v.prototype.renderInverted=function(e,t,r,a,o){var s=t.lookup(e[1]);if(!s||L(s)&&s.length===0)return this.renderTokens(e[4],t,r,a,o)};v.prototype.indentPartial=function(e,t,r){for(var a=t.replace(/[^ \t]/g,""),o=e.split(`
`),s=0;s<o.length;s++)o[s].length&&(s>0||!r)&&(o[s]=a+o[s]);return o.join(`
`)};v.prototype.renderPartial=function(e,t,r,a){if(r){var o=this.getConfigTags(a),s=j(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],c=e[5],l=e[4],p=s;c==0&&l&&(p=this.indentPartial(s,l,i));var b=this.parse(p,o);return this.renderTokens(b,t,r,p,a)}}};v.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};v.prototype.escapedValue=function(e,t,r){var a=this.getConfigEscape(r)||T.escape,o=t.lookup(e[1]);if(o!=null)return typeof o=="number"&&a===T.escape?String(o):a(o)};v.prototype.rawValue=function(e){return e[1]};v.prototype.getConfigTags=function(e){return L(e)?e:e&&typeof e=="object"?e.tags:void 0};v.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!L(e))return e.escape};var T={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){D.templateCache=n},get templateCache(){return D.templateCache}},D=new v;T.clearCache=function(){return D.clearCache()};T.parse=function(e,t){return D.parse(e,t)};T.render=function(e,t,r,a){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+fe(e)+'" was given as the first argument for mustache#render(template, view, partials)');return D.render(e,t,r,a)};T.escape=ve;T.Scanner=C;T.Context=P;T.Writer=v;class ne{constructor(e,t){this.template=e,this.state=t,this.ast=T.parse(e)}getValue(){return this.value===void 0&&(this.value=T.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const a=T.render(this.template,this.state);a!==this.value&&(this.value=a,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const a=r[0],o=r[1],s=r[4];["name","&","#","^"].includes(a)&&t.add(o),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,t)}}}async function Le(){var n;const e=await ue();for(const t of e){const r=(n=t.properties)!==null&&n!==void 0?n:[];for(const a of r){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const o=new ne(a.value,WA.state);if(o.isPureString())continue;const s=o.getValue();await J(t.name,a.name,s),o.onChange(async i=>{await J(t.name,a.name,i)})}}}async function Re(){var n;const e=await I();for(const[t,r]of e.entries())if(r.type!=="objectgroup"){const a=(n=r.properties)!==null&&n!==void 0?n:[];for(const o of a){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new ne(o.value,WA.state);if(s.isPureString())continue;const i=s.getValue();K(t,o.name,i),s.onChange(c=>{K(t,o.name,c)})}}}async function J(n,e,t){console.log(n),(await WA.room.area.get(n)).setProperty(e,t)}function K(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let x,Z=0,z=0;function X(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Ne(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const a=re(n.properties.mustGetString("openLayer").split(`
`));if(a>t)return;r=1-a/t}e&&WA.sound.loadSound(e).play({volume:r})}function De(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const a=re(n.properties.mustGetString("closeLayer").split(`
`));if(a>t)return;r=1-a/t}e&&WA.sound.loadSound(e).play({volume:r})}function te(n){return n.map(e=>x.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function re(n){const e=te(n),t=ee(e),r=((t.right-t.left)/2+t.left)*32,a=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(Z-r,2)+Math.pow(z-a,2))}function Ie(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Ne(n):De(n),X(n)}),X(n)}function Ce(n,e,t,r){const a=n.name;let o,s,i=!1;const c=t.getString("tag");let l=!0;c&&!WA.player.tags.includes(c)&&(l=!1);const p=!!c;function b(){var f;o&&o.remove(),o=WA.ui.displayActionMessage({message:(f=t.getString("closeTriggerMessage"))!==null&&f!==void 0?f:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,d()}})}function d(){var f;o&&o.remove(),o=WA.ui.displayActionMessage({message:(f=t.getString("openTriggerMessage"))!==null&&f!==void 0?f:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,b()}})}function g(f){const S=ee(te(e.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+f,url:r+"/keypad.html#"+encodeURIComponent(f),position:{x:S.right*32,y:S.top*32,width:32*3,height:32*4},allowApi:!0})}function M(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(a).subscribe(()=>{if(i=!0,t.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!l||!p)&&(t.getString("code")||t.getString("codeVariable"))){g(a);return}l&&(WA.state[e.name]?b():d())}),WA.room.onLeaveLayer(a).subscribe(()=>{i=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),o&&o.remove(),M()}),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&b(),s&&WA.state[e.name]===!0&&M(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&d())})}function ke(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const a=Math.sqrt(Math.pow(n.x-Z,2)+Math.pow(n.y-z,2));if(a>t)return;r=1-a/t}WA.sound.loadSound(e).play({volume:r})}function Oe(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&ke(n)})}function Ge(n,e,t){let r;const a=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var o;a?r=WA.ui.openPopup(a,"",[{label:(o=e.getString("bellButtonText"))!==null&&o!==void 0?o:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Ue(n){n=n??V;const e=await ie();x=await I();for(const t of e.values())t.properties.get("door")&&Ie(t),t.properties.get("bell")&&Oe(t);for(const t of x.values()){const r=new N(t.properties),a=r.getString("doorVariable");if(a&&t.type==="tilelayer"){const s=e.get(a);if(s===void 0)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of layer "'+t.name+'"');Ce(t,s,r,n)}const o=r.getString("bellVariable");o&&Ge(o,r,t.name)}WA.player.onPlayerMove(t=>{Z=t.x,z=t.y})}function Be(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),a=n.get("leaveValue"),o=n.getString("triggerMessage"),s=n.getString("tag");Fe(t,e,r,a,o,s)}}function Fe(n,e,t,r,a,o){o&&!WA.player.tags.includes(o)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{a||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function xe(){const n=await I();for(const e of n.values()){const t=new N(e.properties);Be(t,e.name)}}let Y;async function Ve(n){const e=await WA.room.getTiledMap();n=n??V,Y=await I();const t=e.layers.find(r=>r.name==="configuration");if(t){const a=new N(t.properties).getString("tag");(!a||WA.player.tags.includes(a))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const o of Y.values()){const s=new N(o.properties),i=s.getString("openConfig");i&&o.type==="tilelayer"&&je(i.split(","),o.name,s)}}}function je(n,e,t){let r;const a=t.getString("openConfigAdminTag");let o=!0;a&&!WA.player.tags.includes(a)&&(o=!1);function s(){var c;r&&r.remove(),r=WA.ui.displayActionMessage({message:(c=t.getString("openConfigTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE or touch here to configure",callback:()=>H(n)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const c=t.getString("openConfigTrigger");o&&(c&&c==="onaction"?s():H(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function Ze(){return WA.onInit().then(()=>{Ue().catch(n=>console.error(n)),xe().catch(n=>console.error(n)),Ve().catch(n=>console.error(n)),Re().catch(n=>console.error(n)),Le().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");let m;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("clock").subscribe(()=>{const n=new Date,e=n.getHours()+":"+n.getMinutes();m=WA.ui.openPopup("clockPopup","Il est : "+e,[])}),WA.room.area.onEnter("tts6.3Zone").subscribe(()=>{m=WA.ui.openPopup("tts6.3Popup",`TTS 6.3 
 Présenté par 
 Stéphane Maréchal 
 CGI`,[{label:"Pas de disponibilités",className:"primary",callback:()=>{u()}},{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts10Zone").subscribe(()=>{m=WA.ui.openPopup("tts10Popup",`TTS 10 
 Présenté par 
 Aklesso TCHAKPELE`,[{label:`Aklesso TCHAKPELE 
 Jeudi 30 Mars 
 14h-16h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 30, 2023 14:00"),new Date("Mar 30, 2023 16:00"),"TTS 10","Feedback API Program 2021 – Horizon Plan 2022 – API Gouvernance","Salon des TTS"," DSI MGEN","Metavers")}},{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts11Zone").subscribe(()=>{m=WA.ui.openPopup("tts11Popup",`TTS 11 
 Présenté par 
 François GERGAUD 
 Andrew MUMFORD 
 Pascal LAMBERT 
 Cédric ROMERO 
 Mathieu GOULIN
Sélectionnez un créneau pour un rendez-vous avec l'intérvenant disponible : `,[{label:`Mathieu GOULIN 
 Lundi 27 Mars 
 14h-15h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 27, 2023 14:00"),new Date("Mar 27, 2023 15:00"),"TTS 11","Services dans le Cloud, introduction et notre utilisation à venir","Salon des TTS"," DSI MGEN","Metavers")}},{label:`Mathieu GOULIN 
 Jeudi 30 Mars 
 10h-11h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 30, 2023 10:00"),new Date("Mar 30, 2023 11:00"),"TTS 11","Services dans le Cloud, introduction et notre utilisation à venir","Salon des TTS"," DSI MGEN","Metavers")}},{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts12Zone").subscribe(()=>{m=WA.ui.openPopup("tts12Popup",`TTS 12 
 Présenté par 
 Roxanne SPIES 
Sélectionnez un créneau pour un rendez-vous avec l'intérvenant disponible : `,[{label:`Roxanne SPIES 
 Mercredi 29 Mars 
 10h-11h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 29, 2023 10:00"),new Date("Mar 29, 2023 11:00"),"TTS 12","Design System et DesignOps, quand le Design s'opérationnalise et s'adpte au mode Agile","Salon des TTS"," DSI MGEN","Metavers")}},{label:`Roxanne SPIES 
 Jeudi 30 Mars 
 16h30-17h30`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 30, 2023 16:30"),new Date("Mar 30, 2023 17:30"),"TTS 12","Design System et DesignOps, quand le Design s'opérationnalise et s'adpte au mode Agile","Salon des TTS"," DSI MGEN","Metavers")}},{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts13Zone").subscribe(()=>{m=WA.ui.openPopup("tts13Popup",`TTS 13 
 Présenté par 
 Cyril Carrillat 
 Marie Cordenod 
Sélectionnez un créneau pour un rendez-vous avec l'intérvenant disponible :`,[{label:`Cyril Carrillat 
Lundi 27 Mars 
15h-16h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 27, 2023 15:00"),new Date("Mar 27, 2023 16:00"),"TTS 13","Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?","Salon des TTS","DSI MGEN","Metavers")}},{label:`Cyril Carrillat 
Mercredi 29 Mars 
14h-15h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 29, 2023 14:00"),new Date("Mar 29, 2023 15:00"),"TTS 13","Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?","Salon des TTS","DSI MGEN","Metavers")}},{label:`Cyril Carrillat 
Jeudi 30 Mars 
10h-11h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 30, 2023 10:00"),new Date("Mar 30, 2023 11:00"),"TTS 13","Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?","Salon des TTS","DSI MGEN","Metavers")}},{label:`Cyril Carrillat 
Vendredi 31 Mars 
11h-12h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 31, 2023 11:00"),new Date("Mar 31, 2023 12:00"),"TTS 13","Réalité virtuelle / réalité Augmentéée dans le monde professionnel, rêve ou... réalité ?","Salon des TTS","DSI MGEN","Metavers")}},{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts14Zone").subscribe(()=>{m=WA.ui.openPopup("tts14Popup",`TTS 14 : 
 Présenté par 
 Quentin Montcharmont 
Sélectionnez un créneau pour un rendez-vous avec l'intervenant disponible :`,[{label:"Pas de disponibilités",className:"primary",callback:()=>{u()}},{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts15Zone").subscribe(()=>{m=WA.ui.openPopup("tts15Popup",`TTS 15 : 

 Présenté par 
 Ahmed FATHALLAH
 Andrada COVACI
 Sébastien SAURON
 Jean-Baptiste RAINSART 
Sélectionnez un créneau pour un rendez-vous avec l'intervenant disponible :`,[{label:"Pas de disponibilités",className:"primary",callback:()=>{u()}},{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("tts16Zone").subscribe(()=>{m=WA.ui.openPopup("tts16Popup",`TTS 16 : 
 
 Présenté par 
 Carlos GONCALVES
 Hakim RANDRIANARIVO
 Céline LECLEIRE
 Romain BOURGON
 Steven YVEN 
Sélectionnez un créneau pour un rendez-vous avec l'intervenant disponible : 
`,[{label:`Lundi 27 Mars 
14h-15h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 31, 2023 14:00"),new Date("Mar 31, 2023 15:00"),"TTS 17.1","La Data Science au service des métiers et au cœur de la transformation MGEN","Salon des TTS","DSI MGEN","Metavers")}},{label:`Mercredi 29 Mars 
14h-15h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 29, 2023 14:00"),new Date("Mar 29, 2023 15:00"),"TTS 17.1","La Data Science au service des métiers et au cœur de la transformation MGEN","Salon des TTS","DSI MGEN","Metavers")}},{label:`Jeudi 30 Mars 
14h-15h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 30, 2023 14:00"),new Date("Mar 30, 2023 15:00"),"TTS 17.1","La Data Science au service des métiers et au cœur de la transformation MGEN","Salon des TTS","DSI MGEN","Metavers")}},{label:`Vendredi 31 Mars 
10h30-12h`,className:"primary",callback:()=>{A("Romance Standard Time",new Date("Mar 31, 2023 10:30"),new Date("Mar 31, 2023 12:00"),"TTS 17.1","La Data Science au service des métiers et au cœur de la transformation MGEN","Salon des TTS","DSI MGEN","Metavers")}}])}),WA.room.area.onEnter("tts17.1Zone").subscribe(()=>{m=WA.ui.openPopup("tts17.1Popup",`TTS 17.1 :
 Présenté par 
 Alizée SEGARD
 Mansour YOUM
 Virginie FEMERY 
Sélectionnez un créneau pour un rendez-vous avec l'intervenant disponible :`,[{label:"Pas de disponibilités",className:"primary",callback:()=>{u()}},{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("officeZone").subscribe(()=>{m=WA.ui.openPopup("officePopup","Venez ici pour échanger avec l'équipe du Lab Inno",[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS1").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS1",`Ressources de TTS N°1 : L'automatisation robotisée des process (RPA) 
 Intervenants : Rami TORKHANI 
 (SAO) 
 Aurélien GRANDJEAN 
 (AOC)`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS2").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS2",`Ressources de TTS N°2 : Conteneurisation, un des enjeux des process devsecops  
 Intervenants : Frédéric ROULET 
  Yannick MULLER 
 (société REDHAT) 
 Cédric ROMéRO 
Philippe GAVOIS`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS3").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS3",`Ressources de TTS N°3 : Accessibilité & Handicap  
 Intervenants : Marielle MORIZOT 
 Mathieu FROIDURE 
 (Président de la société URBILOG)
 `,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS4").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS4",`Ressources de TTS N°4 : Pratique centrées utilisateurs : l'UX research  
Intervenants : Roxanne SPIES 
(Prestataire au sein du LAB et Experte User Research) 
 France WANG 
(CPO de la plateforme Tandemz)
Alice TAPIA 
(UX/UI designer)`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS5").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS5",`Ressources de TTS N°5 : Outillage Ansible, AWX et Maestro
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
(DSA)`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS6.1").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS6.1",`Ressources de TTS N°6.1 : Intelligence artificielle - Vulgarisation et demystification
Intervenants : Isabelle DONATO 
(Directrice Innovation FabLab INETUM)
Jean-Paul MULLER 
(Global Practice Manager INETUM)
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS7").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS7",`Ressources de TTS N°7 : L'automatisation dans les projets applicatifs, accelerateur devsecops d'aujourdh'ui et de demain
Intervenants :Rémi RAPENNE 
Frédéric ROULET
Ludovic PIOT 
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS8").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS8",`Ressources de TTS N°8 : L'écosystéme des applications mobile MGEN
Intervenants : Inès ROUANET
(Digital Factory)
Agnès CHATELLE 
(Direction Digitale)
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS6.2").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS6.2",`Ressources de TTS N°6.2 : L'écosystéme des applications mobile MGEN
Intervenants : Amine BENHENNI
(expert stratégie et exécution DATA & IA)
Christophe GAZEAU 
(expert Digital de AKORDIA)
Christophe GAZEAU 
(expert stratégie et exécution DATA & IA)
Marième LOUGADI 
Franck GRANDMAIRE 
(Equipe industrialisation de QTS (Qualité Transformation Sécurité))`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("librarySignTTS9").subscribe(()=>{m=WA.ui.openPopup("librarySignPopupTTS9",`Ressources de TTS N°9 : Les cas d'usage de la Blockchain
Intervenants : Théotime PINON
(Cabinet de conseil OCTO)
`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("welcomeZone").subscribe(()=>{m=WA.ui.openPopup("welcomePopup",`Bienvenue au Salon des TTS du LAB Inno 


La zone rouge permet d'acceder au Replay d'un TTS 
La zone jaune permet d'acceder a l'article d'un TTS 
La zone verte permet d'acceder au Sharepoint contenant le document du TTS 

Vous pouvez également partager votre humeur en appuyant sur les touches 1 à 6 
de votre clavier`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("welcomeZone2").subscribe(()=>{m=WA.ui.openPopup("welcomePopup2",`Bienvenue au Salon des TTS du LAB Inno 


La zone rouge permet d'acceder au Replay d'un TTS 
La zone jaune permet d'acceder a l'article d'un TTS 
La zone verte permet d'acceder au Sharepoint contenant le document du TTS 

Vous pouvez également partager votre humeur en appuyant sur les touches 1 à 6 
de votre clavier`,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("libraryIndication").subscribe(()=>{m=WA.ui.openPopup("libraryIndicationPopup","Bienvenue dans les archives des TTS 2021",[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onEnter("officeIndicationZone").subscribe(()=>{m=WA.ui.openPopup("officeIndicationPopup",`Suivez ce chemin jusqu'au bout et prenez en haut 
 pour atteindre nos bureaux `,[{label:"Fermer",className:"primary",callback:()=>{u()}}])}),WA.room.area.onLeave("clock").subscribe(u),WA.room.area.onLeave("tts6.3Zone").subscribe(u),WA.room.area.onLeave("tts10Zone").subscribe(u),WA.room.area.onLeave("tts11Zone").subscribe(u),WA.room.area.onLeave("tts12Zone").subscribe(u),WA.room.area.onLeave("tts13Zone").subscribe(u),WA.room.area.onLeave("tts14Zone").subscribe(u),WA.room.area.onLeave("tts15Zone").subscribe(u),WA.room.area.onLeave("tts16Zone").subscribe(u),WA.room.area.onLeave("tts17.1Zone").subscribe(u),WA.room.area.onLeave("officeIndicationZone").subscribe(u),WA.room.area.onLeave("officeZone").subscribe(u),WA.room.area.onLeave("welcomeZone").subscribe(u),WA.room.area.onLeave("welcomeZone2").subscribe(u),WA.room.area.onLeave("libraryIndication").subscribe(u),WA.room.area.onLeave("librarySignTTS1").subscribe(u),WA.room.area.onLeave("librarySignTTS2").subscribe(u),WA.room.area.onLeave("librarySignTTS3").subscribe(u),WA.room.area.onLeave("librarySignTTS4").subscribe(u),WA.room.area.onLeave("librarySignTTS5").subscribe(u),WA.room.area.onLeave("librarySignTTS6.1").subscribe(u),WA.room.area.onLeave("librarySignTTS7").subscribe(u),WA.room.area.onLeave("librarySignTTS6.2").subscribe(u),WA.room.area.onLeave("librarySignTTS8").subscribe(u),WA.room.area.onLeave("librarySignTTS9").subscribe(u),Ze().then(()=>{console.log("Scripting API Extra ready")}).catch(n=>console.error(n))}).catch(n=>console.error(n));function ze(n){WA.nav.openTab("data:text/calendar;charset=utf-8,"+encodeURIComponent(n))}function B(n){const e=n.getFullYear().toString(),t=n.getMonth()+1<10?"0"+(n.getMonth()+1).toString():(n.getMonth()+1).toString(),r=n.getDate()<10?"0"+n.getDate().toString():n.getDate().toString(),a=n.getHours()<10?"0"+n.getHours().toString():n.getHours().toString(),o=n.getMinutes()<10?"0"+n.getMinutes().toString():n.getMinutes().toString();return e+t+r+"T"+a+o+"00"}function A(n,e,t,r,a,o,s,i){const c=`BEGIN:VCALENDAR
X-WR-TIMEZONE:Romance Standard Time
VERSION:2.0
PRODID:Calendar
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:`+n+`
END:VTIMEZONE
BEGIN:VEVENT
SUMMARY:`+r+`
UID:@Default
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:TRANSPARENT
DTSTART;TZID=`+n+":"+B(e)+`
DTEND;TZID=`+n+":"+B(t)+`
DTSTAMP:`+B(new Date)+`
LOCATION:`+o+"\\n "+s+",  "+i+`, 
DESCRIPTION:`+a+`
END:VEVENT
END:VCALENDAR
`;ze(c);const l=new Blob([c],{type:"text/calendar;charset=utf-8"});F.saveAs(l,r+".ics")}function u(){m!==void 0&&(m.close(),m=void 0)}
