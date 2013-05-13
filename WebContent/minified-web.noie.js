var j=!0,s=null,u=!1;if(/^u/.test(typeof define)){var H={};this.define=function(t,l){H[t]=l()};this.require=function(t){return H[t]}}define("minified",function(){function t(a){return"string"==typeof a}function l(a){return"function"==typeof a&&!a.item}function z(a){return a&&a.nodeType}function v(a){return a&&a.length!=s&&!t(a)&&!z(a)&&!l(a)}function w(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c]);return a}function f(a,b){for(var c=0;a&&c<a.length;c++)b(a[c],c);return a}function G(a,b){var c=[];f(a,function(a,e){b(a,e)&&c.push(a)});return c}function A(a,b){var c=[];f(a,function(a,e){v(a=b(a,e))?f(a,function(a){c.push(a)}):a!=s&&c.push(a)});return c}function m(a,b,c){return(a!=s?""+a:"").replace(b,c||"")}function y(a){return parseFloat(m(a,/^[^\d-]+/))}function I(a){var b={$position:"absolute",$visibility:"hidden",$display:"block",$height:s},c=a.get(b);a.set(b);b=a[0].offsetHeight;a.set(c);return b}function J(a){a()}function K(a){D?D.push(a):p.setTimeout(a,0)}function E(){function a(a,e){b==s&&(b=a,c=e,p.setTimeout(function(){f(d,J)},0))}var b,c=[],d=[],e=a.then=function(a,e){function h(){try{var d=b?a:e;if(l(d)){var h=d.apply(s,c);h&&l(h.then)?h.then(function(a){k(j,[a])},function(a){k(u,[a])}):k(j,[h])}else k(b,c)}catch(f){k(u,[f])}}var k=E();b!=s?p.setTimeout(h,0):d.push(h);return k};a.always=function(a){return e(a,a)};a.error=function(a){return e(0,a)};return a}function q(a,b,c){return l(a)?K(a):new B(F(a,b,c))}function F(a,b,c){function d(a){a=function h(a){return v(a)?A(a,h):a}(a);return e?G(a,function(a){for(;a=a.parentNode;){if(a===e)return j;if(c)return u}}):a}var e;if(b&&1!=(b=F(b)).length)return A(b,function(b){return F(a,b)});e=b&&b[0];if(!t(a))return d(v(a)?a:[a]);b=(e||x).querySelectorAll(a);return e?d(b):b}function B(a){for(var b=this.length=a.length,c=0;c<b;c++)this[c]=a[c]}var p=this,x=document,D=[],C=[],L=A(["msR","webkitR","mozR","r"],function(a){return p[a+"equestAnimationFrame"]})[0]||function(a){p.setTimeout(a,33)};w({each:function(a){return f(this,a)},filter:function(a){return new B(G(this,a))},collect:function(a){return new B(A(this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=0<=b?b:this.length+(b||0);return new B(G(this,function(a,b){return b>=c&&b<d}))},find:function(a){for(var b=l(a)?a:function(b,c){if(a===b)return c},c,d=0;d<this.length;d++)if((c=b(this[d],d))!=s)return c},hasClass:function(a){var b=RegExp("\\b"+a+"\\b");return this.find(function(a){return b.test(a.className)?a:s})},remove:function(){f(this,function(a){a.parentNode.removeChild(a)})},get:function(a,b){var c=this,d=c[0];if(d){if(t(a)){var e=m(a,/^[$@]/),r;r="$"==a?d.className:"$$"==a?d.getAttribute("style"):/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(r=y(d.style.opacity))?1:r:"$$slide"==a?d.offsetHeight+"px":/^\$/.test(a)?p.getComputedStyle(d,s).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):/^@/.test(a)?d.getAttribute(e):d[e];return b?y(r):r}var g={};(v(a)?f:w)(a,function(a){g[a]=c.get(a,b)});return g}},set:function(a,b){var c=this,d;void 0!==b?"$$fade"==a||"$$slide"==a?c.set({$visibility:0<(d=y(b))?"visible":"hidden",$display:"block"}).set("$$fade"==a?{$opacity:d}:{$height:/px$/.test(b)?b:function(a,b,c){return d*(d&&I(q(c)))+"px"},$overflow:"hidden"}):f(c,function(c,d){var g=m(a,/^[@$]/),h=c.className||"",k=/^\$/.test(a)?c.style:c,n=l(b)?b(q(c).get(a),d,c):b;"$"==a?n!=s&&(f(n.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=h;h=m(h,RegExp("\\b"+b+"\\b"));if(/^\+/.test(a)||b==a&&c==h)h+=" "+b}),c.className=m(h,/^\s+|\s+(?=\s|$)/g)):"$$"==a?n!=s?c.setAttribute("style",n):c.removeAttribute("style"):/^@/.test(a)?n!=s?k.setAttribute(g,n):k.removeAttribute(g):k[g]=n}):t(a)||l(a)?c.set("$",a):w(a,function(a,b){c.set(a,b)});return c},add:function(a,b){return f(this,function(c,d){var e;(function g(a){v(a)?f(a,g):l(a)?g(a(c,d)):a!=s&&(a=z(a)?a:x.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),e=a)})(z(a)&&d?s:a)})},fill:function(a){return f(this,function(a){q(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c)})},addAfter:function(a){return this.add(a,function(a,c,d){d.insertBefore(a,c.nextSibling)})},addFront:function(a){return this.add(a,function(a,c){c.insertBefore(a,c.firstChild)})},replace:function(a){return this.add(a,function(a,c,d){d.replaceChild(a,c)})},clone:function(){return new B(A(this,function(a){var b=z(a);if(1==b){var c={};f(a.attributes,function(a){var b=a.name;"id"!=b&&(c["@"+b]=a.value)});return q.EE(a.tagName,c,q(a.childNodes).clone())}return 5>b?a.data:s}))},animate:function(a,b,c,d){var e=this,r=[],g=/-?[\d.]+/,h,k=E(),n=l(c)?c:function(a,b,d){return a+d*(b-a)*(c+(1-c)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){h();k(u)};b=b||500;c=c||0;f(e,function(b){var c={a:q(b),c:{}};w(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*I(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?m(e.substr(2),g,y(d)+y(m(e,/\+?=/))):e});r.push(c)});h=q.loop(function(a){function c(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*b,2):(a=a.charAt(1+b))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[b])}d.time=a;a>=b||0>a?(f(r,function(a){a.a.set(a.c)}),h(),d.time=s,k(j,[e])):f(r,function(d){w(d.b,function(e,h){var f="rgb(",k=d.c[e],r=a/b;if(/^#|rgb\(/.test(k))for(var l=0;3>l;l++)f+=Math.round(n(c(h,l),c(k,l),r))+(2>l?",":")");else f=m(k,g,n(y(h),y(k),r));d.a.set(e,f)})})});return k},toggle:function(a,b,c,d){var e={},f=u,g=/\b(?=\w)/g,h=this;return!b?h.toggle(m(a,g,"-"),m(a,g,"+")):h.set(a)&&function(g){g!==f&&(f=g===j||g===u?g:!f,c?h.animate(f?b:a,e.stop?e.stop()||e.time:c,d,e):h.set(f?b:a))}},on:function(a,b,c,d){return f(this,function(e,f){function g(a){a=a||p.event;if(!b.apply(d?c:a.target,d||c||[a,f])||d)a.preventDefault(),a.stopPropagation()}(b.M=b.M||[]).push({e:e,h:g,n:a});e.addEventListener(a,g,j)})}},function(a,b){B.prototype[a]=b});w({$$:function(a){return F(a)[0]},EE:function(a,b,c,d){return function(){var e=x.documentElement.namespaceURI,e=q(e?x.createElementNS(e,a):x.createElement(a));v(b)||"object"!=typeof b?e.add(b):e.set(b).add(c);d&&d(e);return e}},request:function(a,b,c,d,e,l){var g,h=c,k=0,n=E();try{g=new XMLHttpRequest;if(c!=s){d=d||{};if(!t(c)&&!z(c)){var m=function M(a,b){return v(b)?A(b,function(b){return M(a,b)}):encodeURIComponent(a)+(b!=s?"="+encodeURIComponent(b):"")},p=[];w(c,function(a,b){v(a=m(a,b))?f(a,function(a){p.push(a)}):a!=s&&p.push(a)});h=p.join("&")}/post/i.test(a)?!z(c)&&!t(c)&&!d["Content-Type"]&&(d["Content-Type"]="application/x-www-form-urlencoded"):(b+="?"+h,h=s)}g.open(a,b,j,e,l);w(d,function(a,b){g.setRequestHeader(a,b)});g.onreadystatechange=function(){4==g.readyState&&!k++&&(200==g.status?n(j,[g.responseText,g.responseXML]):n(u,[g.status,g.statusText,g.responseText]))};g.send(h);return n}catch(q){k||n(u,[0,s,q!=s?""+q:""])}},toJSON:p.JSON&&JSON.stringify,parseJSON:p.JSON&&JSON.parse,ready:K,setCookie:function(a,b,c,d,e,f){x.cookie=a+"="+(f?b:escape(b))+(c?"; expires="+("object"==typeof c?c:new Date((new Date).getTime()+864e5*c)).toUTCString():"")+"; path="+(d?escapeURI(d):"/")+(e?"; domain="+escape(e):"")},getCookie:function(a,b){var c,d=(c=RegExp("(^|;)\\s*"+a+"=([^;]*)").exec(x.cookie))&&c[2];return b?d:d&&unescape(d)},loop:function(a){var b={d:a,f:(new Date).getTime(),b:function(){for(var a=0;a<C.length;a++)C[a]===b&&C.splice(a--,1)}};2>C.push(b)&&function d(){f(C,function(a){a.d(Math.max(0,(new Date).getTime()-a.f),a.b)}).length&&L(d)}();return b.b},off:function(a){f(a.M,function(a){a.e.removeEventListener(a.n,a.h,j)});a.M=s},wait:function(a){var b=E();p.setTimeout(function(){b(j,[a])},a||0);return b}},function(a,b){q[a]=b});x.addEventListener("DOMContentLoaded",function(){f(D,J);D=s},u);return{$:q}});