/^u/.test(typeof define)&&function(a){this.define=function(b,c){a[b]=a[b]||c()},this.require=function(b){return a[b]}}({}),define("minified",function(){function a(a){return a!=C?""+a:""}function b(a){return"string"==typeof a}function c(a){return a&&a.nodeType}function d(a){return a}function e(a){a()}function f(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function g(a,b){var c=[];return j(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function h(a,b,c){var d=[];return a(b,function(a,e){j(c.call(b,a,e),function(a){d.push(a)})}),d}function i(b,c,d){return a(b).replace(c,d||"")}function j(a,b){if(l(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=C&&b(a,0);return a}function k(a){return"function"==typeof a&&!a.item}function l(a){return a&&a.length!=C&&!b(a)&&!c(a)&&!k(a)&&a!==F}function m(a,b){var c=RegExp("(^|\\s)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):D}}function n(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function o(a,b){setTimeout(a,b||0)}function p(a){return parseFloat(i(a,/^[^\d-]+/))}function q(a){return a.Mid=a.Mid||++H}function r(a,b){var d,e=[],f={};return j(a,function(a){j(b(a),function(a){c(a)&&!f[d=q(a)]&&(e.push(a),f[d]=D)})}),e}function s(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:C},c=a.get(b),b=a.set(b).get("$height",D);return a.set(c),b}function t(a){I?I.push(a):o(a)}function u(a){return h(j,a,function(a){return b(a)?a:l(a)?u(a):c(a)?(a=a.cloneNode(D),a.removeAttribute("id"),a):C})}function v(a,b,c){return k(a)?t(a):new A(w(a,b,c))}function w(a,c,d){function e(a){return l(a)?h(j,a,e):a}function f(a){return g(h(j,a,e),function(a){for(;a=a.parentNode;)if(a==c[0]||d)return a==c[0]})}return c?1!=(c=w(c)).length?r(c,function(b){return w(a,b,d)}):b(a)?d?f(c[0].querySelectorAll(a)):c[0].querySelectorAll(a):f(a):b(a)?G.querySelectorAll(a):h(j,a,e)}function x(a,d){var e,f,g={},h=g;return k(a)?a:"number"==typeof a?function(b,c){return c==a}:!a||"*"==a||b(a)&&(h=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(e=m(h[1],"nodeName"),f=m(h[2],"className"),function(a){return 1==c(a)&&e(a)&&f(a)}):d?function(b){return v(a,d).find(b)!=C}:(v(a).each(function(a){g[q(a)]=D}),function(a){return g[q(a)]})}function y(a){var b=x(a);return function(a){return b(a)?C:D}}function z(){function a(a,f){b==C&&(b=a,c=f,o(function(){j(d,e)}))}var b,c=[],d=[],f=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,k(d)?(f=d.apply(B,c),f&&k(f.then)?f.then(function(a){g(D,[a])},function(a){g(E,[a])}):g(D,[f])):g(b,c)}catch(h){g(E,[h])}}var g=z();return b!=C?o(f):d.push(f),g};return a.error=function(a){return f(0,a)},a}function A(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var B,C=null,D=!0,E=!1,F=this,G=document,H=1,I=/^[ic]/.test(G.readyState)?C:[],J=[],K=F.requestAnimationFrame||function(a){o(a,33)};return f({each:function(a){return j(this,a)},filter:function(a){return new A(g(this,a))},collect:function(a){return new A(h(j,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return this.filter(function(a,b){return b>=c&&d>b})},find:function(a,b){for(var c,d=k(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=C)return c},remove:function(){j(this,function(a){a.parentNode.removeChild(a)})},text:function(){return h(j,this,function(a){return a.textContent}).join("")},trav:function(a,b,c){var d="number"==typeof b,e=x(d?C:b),f=d?b:c;return new A(r(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},up:function(a){return this.trav("parentNode",a,1)},next:function(a,b){return this.trav("nextSibling",a,b||1)},select:function(a,b){return v(a,this,b)},is:function(a){return!this.find(y(a))},only:function(a){return this.filter(x(a))},not:function(a){return this.filter(y(a))},get:function(a,c){var d,e,g,h=this,k=h[0];return k?b(a)?(e=i(i(a,/^%/,"data-"),/^[$@]+/),d="$"==a?k.className:"$$"==a?k.getAttribute("style"):"$$fade"==a||"$$slide"==a?"hidden"==k.style.visibility||"none"==k.style.display?0:"$$fade"==a?isNaN(d=p(k.style.opacity))?1:d:h.get("$height"):/^\$[^$]/.test(a)?F.getComputedStyle(k,C).getPropertyValue(i(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^[@%]/.test(a)?k.getAttribute(e):k[e],c?p(d):d):(g={},(l(a)?j:f)(a,function(a){g[a]=h.get(a,c)}),g):void 0},set:function(a,c){function d(a,b,c){c!=C?a.setAttribute(b,c):a.removeAttribute(b)}var e,g=this;return c!==B?"$$fade"==a||"$$slide"==a?g.set({$visibility:0<(e=p(c))?"visible":"hidden",$display:"block"}).set("$$fade"==a?{$opacity:e}:{$height:/px/.test(c)?c:function(a,b,c){return e*(e&&s(v(c)))+"px"},$overflow:"hidden"}):j(g,function(b,e){var f=i(i(i(a,/^\$float$/,"cssFloat"),/^%/,"data-"),/^[@$]+/),g=b.className||"",h=/^\$/.test(a)?b.style:b,l=k(c)?c(v(b).get(a),e,b):c;"$"==a?l!=C&&(j(l.split(/\s+/),function(a){var b=i(a,/^[+-]/),c=g;g=i(g,RegExp("(^|\\s)"+b+"(?=$|\\s)","i")),(/^\+/.test(a)||b==a&&c==g)&&(g+=" "+b)}),b.className=i(g,/^\s+|\s+(?=\s|$)/g)):"$$"==a?d(b,"style",l):"$$scrollX"==a?b.scroll(l,b.scrollY):"$$scrollY"==a?b.scroll(b.scrollX,l):/^[@%]/.test(a)?d(h,f,l):h[f]=l}):b(a)||k(a)?g.set("$",a):f(a,function(a,b){g.set(a,b)}),g},add:function(a,b){return this.each(function(d,e){var f;!function g(a){l(a)?j(a,g):k(a)?g(a(d,e)):a!=C&&(a=c(a)?a:G.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,d,d.parentNode):d.appendChild(a),f=a)}(e&&!k(a)?u(a):a)})},fill:function(a){return this.each(function(a){v(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new A(u(this))},animate:function(a,b,c){var d,e=z(),g=this,h=[],i=0;return e.stop0=function(){e(E),d()},b=b||500,j(g,function(b,d){var e,g=v(b),i={};f(e=g.get(a),function(c,e){var f=a[c];i[c]=k(f)?f(e,d,b):"$$slide"==c?a[c]*s(g)+"px":f}),h.push(g.dial(e,i,c))}),d=v.loop(function(a){a>=b||0>a?(i=b,d(),e(D,[g])):i=a,j(h,function(a){a(i/b)})}),e},dial:function(b,c,d){function e(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(i(a,/[^\d,]+/g).split(",")[b])}var g=this,h=k(d)?d:function(a,b,c){return a+c*(b-a)*(d+(1-d)*c*(3-2*c))};return d=d||0,function(d){f(b,function(b,f){var j=c[b],k=0;g.set(b,0>=d?f:d>=1?j:/^#|rgb\(/.test(j)?"rgb("+Math.round(h(e(f,k),e(j,k++),d))+","+Math.round(h(e(f,k),e(j,k++),d))+","+Math.round(h(e(f,k),e(j,k++),d))+")":i(j,/-?[\d.]+/,a(h(p(f),p(j),d))))})}},toggle:function(a,b,c,d){var e,f,g=this,h=E,j=/\b(?=\w)/g;return b?g.set(a)&&function(i){i!==h&&(f=(h=i===D||i===E?i:!h)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).then(function(){e=C}):g.set(f)&&B)}:g.toggle(i(a,j,"-"),i(a,j,"+"))},values:function(b){var c=b||{};return this.each(function(b){var e=b.name,f=a(b.value);if(/form/i.test(b.tagName))for(e=0;e<b.elements.length;e++)v(b.elements[e]).values(c);else!e||/kbox|dio/i.test(b.type)&&!b.checked||(c[e]=c[e]==C?f:h(j,[c[e],f],d))}),c},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(c,d,e,f,g){return k(d)?this.on(C,c,d,e,f):b(f)?this.on(c,d,e,C,f):this.each(function(b,h){j(c?w(c,b):b,function(b){j(a(d).split(/\s/),function(a){function c(a,b,c){return j==a&&!d(b,c)}function d(a,c){var d,i,j=!g,l=g?c||a.target:b;if(g)for(i=x(g,b);l&&l!=b&&!(j=i(l));)l=l.parentNode;return j&&(d=(!e.apply(v(l),f||[a,h])||""==k)&&"|"!=k)&&!c&&(a.preventDefault(),a.stopPropagation()),!d}var j=i(a,/[?|]/),k=i(a,/[^?|]/g);(b.M=b.M||[]).push(c),(e.M=e.M||[]).push(function(){b.removeEventListener(j,d,E),n(b.M,c)}),b.addEventListener(j,d,E)})})})},onOver:function(a,b){var c=this,d=[];return b?this.on(a,"|mouseover |mouseout",function(a,e){var f="mouseout"!=a.type,g=a.relatedTarget||a.toElement;d[e]===f||!f&&g&&(g==c[e]||v(g).up(c[e]).length)||(d[e]=f,b.call(this,f,a))}):this.onOver(C,a)},onFocus:function(a,b){return b?this.on(a,"|focus",b,[D]).on(a,"|blur",b,[E]):this.onFocus(C,a)},onChange:function(a,b){return b?this.each(function(c,d){function e(e,f){v(c).on(a,e,function(){b.call(this,c[f],d)})}/kbox|dio/i.test(c.type)?e("|click","checked"):e("|input","value")}):this.onChange(C,a)},onClick:function(a,b,c){return k(a)?this.on("click",a,b):this.on(a,"click",b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)j(e.M,function(e){d=d||e(a,b,c)}),e=e.parentNode})}},function(a,b){A.prototype[a]=b}),f({request:function(d,e,g,i){i=i||{};var k,l=0,m=z(),n=g!=C&&!c(g)&&!b(g);try{k=new XMLHttpRequest,n&&(g=h(f,g,function(a,b){return h(j,b,function(b){return encodeURIComponent(a)+(b!=C?"="+encodeURIComponent(b):"")})}).join("&")),g==C||/post/i.test(d)||(e+="?"+g,g=C),k.open(d,e,D,i.user,i.pass),n&&/post/i.test(d)&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f(i.headers,function(a,b){k.setRequestHeader(a,b)}),f(i.xhr,function(a,b){k[a]=b}),k.onreadystatechange=function(){4!=k.readyState||l++||(200==k.status?m(D,[k.responseText,k.responseXML]):m(E,[k.status,k.statusText,k.responseText]))},k.send(g)}catch(o){l||m(E,[0,C,a(o)])}return m},toJSON:JSON.stringify,parseJSON:JSON.parse,ready:t,loop:function(a){var b={b:a,c:+new Date,a:function(){n(J,b)}};return 2>J.push(b)&&function c(){j(J,function(a){a.b(Math.max(0,+new Date-a.c),a.a)}).length&&K(c)}(),b.a},off:function(a){j(a.M,e),a.M=C}},function(a,b){v[a]=b}),G.addEventListener("DOMContentLoaded",function(){j(I,e),I=C},E),{$:v,$$:function(a){return w(a)[0]},EE:function(a,b,c){return a=v(G.createElement(a)),l(b)||"object"!=typeof b?a.add(b):a.set(b).add(c)},M:A}});