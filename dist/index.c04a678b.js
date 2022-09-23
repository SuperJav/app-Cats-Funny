var e,t,n={},r={},o=r={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function l(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{t="function"==typeof clearTimeout?clearTimeout:c}catch(e){t=c}}();var a,u=[],s=!1,d=-1;function f(){s&&a&&(s=!1,a.length?u=a.concat(u):d=-1,u.length&&h())}function h(){if(!s){var e=l(f);s=!0;for(var n=u.length;n;){for(a=u,u=[];++d<n;)a&&a[d].run();d=-1,n=u.length}a=null,s=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===c||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||s||l(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0};var g={},v={};function y(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function b(e,t){for(var n,r="",o=0,i=-1,c=0,l=0;l<=e.length;++l){if(l<e.length)n=e.charCodeAt(l);else{if(47===n)break;n=47}if(47===n){if(i===l-1||1===c);else if(i!==l-1&&2===c){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var a=r.lastIndexOf("/");if(a!==r.length-1){-1===a?(r="",o=0):o=(r=r.slice(0,a)).length-1-r.lastIndexOf("/"),i=l,c=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=l,c=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,l):r=e.slice(i+1,l),o=l-i-1;i=l,c=0}else 46===n&&-1!==c?++c:c=-1}return r}var C={resolve:function(){for(var e,t="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var i;o>=0?i=arguments[o]:(void 0===e&&(e=r.cwd()),i=e),y(i),0!==i.length&&(t=i+"/"+t,n=47===i.charCodeAt(0))}return t=b(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(y(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=b(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return y(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];y(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":C.normalize(e)},relative:function(e,t){if(y(e),y(t),e===t)return"";if((e=C.resolve(e))===(t=C.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,o=r-n,i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var c=t.length-i,l=o<c?o:c,a=-1,u=0;u<=l;++u){if(u===l){if(c>l){if(47===t.charCodeAt(i+u))return t.slice(i+u+1);if(0===u)return t.slice(i+u)}else o>l&&(47===e.charCodeAt(n+u)?a=u:0===u&&(a=0));break}var s=e.charCodeAt(n+u);if(s!==t.charCodeAt(i+u))break;47===s&&(a=u)}var d="";for(u=n+a+1;u<=r;++u)u!==r&&47!==e.charCodeAt(u)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(i+a):(i+=a,47===t.charCodeAt(i)&&++i,t.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(y(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');y(e);var n,r=0,o=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var c=t.length-1,l=-1;for(n=e.length-1;n>=0;--n){var a=e.charCodeAt(n);if(47===a){if(!i){r=n+1;break}}else-1===l&&(i=!1,l=n+1),c>=0&&(a===t.charCodeAt(c)?-1==--c&&(o=n):(c=-1,o=l))}return r===o?o=l:-1===o&&(o=e.length),e.slice(r,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){r=n+1;break}}else-1===o&&(i=!1,o=n+1);return-1===o?"":e.slice(r,o)},extname:function(e){y(e);for(var t=-1,n=0,r=-1,o=!0,i=0,c=e.length-1;c>=0;--c){var l=e.charCodeAt(c);if(47!==l)-1===r&&(o=!1,r=c+1),46===l?-1===t?t=c:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=c+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){y(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),o=47===r;o?(t.root="/",n=1):n=0;for(var i=-1,c=0,l=-1,a=!0,u=e.length-1,s=0;u>=n;--u)if(47!==(r=e.charCodeAt(u)))-1===l&&(a=!1,l=u+1),46===r?-1===i?i=u:1!==s&&(s=1):-1!==i&&(s=-1);else if(!a){c=u+1;break}return-1===i||-1===l||0===s||1===s&&i===l-1&&i===c+1?-1!==l&&(t.base=t.name=0===c&&o?e.slice(1,l):e.slice(c,l)):(0===c&&o?(t.name=e.slice(1,i),t.base=e.slice(1,l)):(t.name=e.slice(c,i),t.base=e.slice(c,l)),t.ext=e.slice(i,l)),c>0?t.dir=e.slice(0,c-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};C.posix=C,v=C;const S=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function q(e){console.log(`[dotenv][DEBUG] ${e}`)}const A={config:function(e){let t=v.resolve(r.cwd(),".env"),n="utf8";const o=Boolean(e&&e.debug),i=Boolean(e&&e.override);var c;e&&(null!=e.path&&(t="~"===(c=e.path)[0]?v.join("/",c.slice(1)):c),null!=e.encoding&&(n=e.encoding));try{const e=A.parse(g.readFileSync(t,{encoding:n}));return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(r.env,t)?(!0===i&&e[t],o&&q(!0===i?`"${t}" is already defined in \`process.env\` and WAS overwritten`:`"${t}" is already defined in \`process.env\` and was NOT overwritten`)):e[t]})),{parsed:e}}catch(e){return o&&q(`Failed to load ${t} ${e.message}`),{error:e}}},parse:function(e){const t={};let n,r=e.toString();for(r=r.replace(/\r\n?/gm,"\n");null!=(n=S.exec(r));){const e=n[1];let r=n[2]||"";r=r.trim();const o=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===o&&(r=r.replace(/\\n/g,"\n"),r=r.replace(/\\r/g,"\r")),t[e]=r}return t}};n.config=A.config,n.parse=A.parse,n=A;let T=document.querySelector("#peso-imperial"),w=document.querySelector("#peso-metrica"),x=document.querySelector("#lista-temperatura"),E=document.querySelector("#origen-origen"),L=document.querySelector("#origen-codigo"),k=document.querySelector("#descricion"),_=document.querySelector("#vida-util"),M=document.querySelector("#fisico-pelo"),$=document.querySelector("#fisico-raro"),O=document.querySelector("#fisico-cola"),j=document.querySelector("#fisico-piernas"),H=document.querySelector("#adaptabilidad"),z=document.querySelector("#Afecto"),N=document.querySelector("#Apto"),I=document.querySelector("#amigable"),J=document.querySelector("#nivel"),P=document.querySelector("#aseo"),B=document.querySelector("#salud"),F=document.querySelector("#inteligencia"),G=document.querySelector("#amigable-extrano"),K=document.querySelector("#button-wikipedia"),R=document.querySelector("#button-vetstreet"),U=document.querySelector("#button-vcahospitals"),D=document.querySelector("#button-cfa"),V=document.querySelector(".container-info-info"),X=document.querySelector("#button-gift"),W=document.querySelector("#cats"),Z=document.querySelector("#input-text");X.addEventListener("click",(()=>function(){let e;W.firstElementChild.remove(),e=""==Z.value?"deviste de ingresar una palabra":Z.value;let t=document.createElement("img");t.className="img-cat",t.src=`https://cataas.com/cat/says/${e}`,W.append(t)}()));const Q=(e,t)=>e.split(t),Y=e=>0==e?"No":"Si";function ee(e){let t=document.createElement("div");t.id="container-rango";let n=["item1","item2","item3","item4","item5"];for(let r=0;r<e;r++){let e=document.createElement("div");e.className=n[r],e.textContent="*",t.appendChild(e)}return t}n.config();const te="live_VbJ7IuTOJKTgVzqmcUCGMZAgD8aS8IIez571FGPX0cUa9SJtX4bK1q4M4lvRzybK";let ne=[],re=document.querySelector("#select"),oe=(document.querySelector("#logo-cat-container"),document.querySelector("#container-fotos"));function ie(){fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":te}}).then((e=>e.json())).then((e=>{e.map((e=>ne.push(e))),ne.map((e=>{let t=document.createElement("option");t.textContent=e.name,t.value=e.id,re.appendChild(t)}))}))}re.addEventListener("change",(()=>{var e;e=re.value,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&limit=20`,{headers:{"x-api-key":te}}).then((e=>e.json())).then((t=>function(e,t){let n;for(fetch(`https://api.thecatapi.com/v1/breeds/${t}`).then((e=>e.json())).then((e=>n=e)).then((t=>{!function(e,t){let n=Q(e.temperament,","),r=document.querySelector("#titulo-nombre-cat"),o=document.querySelector("#img-container"),i=document.querySelector("#button-ver-informacion");r.textContent=e.name,o.setAttribute("src",t[0].url),i.classList.replace("hidden","cssbuttons-io"),i.addEventListener("click",(()=>{V.id="no"})),T.textContent=e.weight.imperial,w.textContent=e.weight.metric,x.innerHTML=" ",n.map((e=>{let t=document.createElement("li");t.textContent=e,x.appendChild(t)})),E.textContent=e.origin,L.textContent=e.country_codes,k.textContent=e.description,_.textContent=e.life_span,M.textContent=Y(e.hairless),$.textContent=Y(e.rare),O.textContent=Y(e.suppressed_tail),j.textContent=Y(e.short_legs),H.innerHTML=" ",H.appendChild(ee(e.adaptability)),z.innerHTML=" ",z.appendChild(ee(e.affection_level)),N.innerHTML=" ",N.append(ee(e.child_friendly)),I.innerHTML=" ",I.append(ee(e.dog_friendly)),J.innerHTML=" ",J.append(ee(e.energy_level)),P.innerHTML=" ",P.append(ee(e.grooming)),B.innerHTML=" ",B.append(ee(e.health_issues)),F.innerHTML=" ",F.append(ee(e.intelligence)),G.innerHTML=" ",G.append(ee(e.stranger_friendly)),K.setAttribute("href",e.wikipedia_url),R.setAttribute("href",e.vetstreet_url),U.setAttribute("href",e.vcahospitals_url),D.setAttribute("href",e.cfa_url)}(t,e)}));oe.firstElementChild;)oe.firstElementChild.remove();e.map((e=>{let t=document.createElement("img");t.src=e.url,t.id=e.id,t.className="fotos",oe.appendChild(t)}))}(t,e)))})),ie(),Personalization();
//# sourceMappingURL=index.c04a678b.js.map
