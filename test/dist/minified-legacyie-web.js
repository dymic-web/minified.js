/^u/.test(typeof define)&&function(a){var b=this.require=function(b){return a[b]};this.define=function(c,d){a[c]=a[c]||d(b)}}({}),define("minified",function(){function v(a){return a!=g?""+a:""}function x(a){return/^str/.test(typeof a)}function r(a){return a&&a.nodeType}function L(a){return a}function G(a,b){k(a,function(a){a(b)})}function t(a,b){for(var c in a)b(c,a[c])}function E(a,b){var c=[];return k(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function s(a,b,c){var d=[];return a(b,function(a,e){k(c.call(b,a,e),function(a){d.push(a)})}),d}function m(a,b,c){return v(a).replace(b,c||"")}function k(a,b){if(B(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=g&&b(a,0);return a}function T(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function n(a){return"function"==typeof a&&!a.item}function B(a){return a&&a.length!=g&&!x(a)&&!r(a)&&!n(a)&&a!==q}function U(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function H(a){return parseFloat(m(a,/^[^\d-]+/))}function I(a){return a.Nia=a.Nia||++V}function M(a,b){var c,d=[],e={};return k(a,function(a){k(b(a),function(a){e[c=I(a)]||(d.push(a),e[c]=!0)})}),d}function W(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:g},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function aa(a,b,c,d,e,f){return function(g,h){var i,j=g||q.event,k=!f,l=h||j.target||j.srcElement;if(f)for(;l&&l!=b&&!(k=f(l));)l=l.parentNode;return k&&(i=(!a.apply(p(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.preventDefault&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=!0),!i}}function N(a,b){k(b,function(a){a.element.detachEvent("on"+a.a,a.b)})}function X(a){F?F.push(a):setTimeout(a,0)}function O(a){return s(k,a,function(a){return B(a)?O(a):(r(a)&&(a=a.cloneNode(!0),a.removeAttribute&&a.removeAttribute("id")),a)})}function p(a,b,c){return n(a)?X(a):new w(y(a,b,c))}function y(a,b,c){function d(a){return a=s(k,a,function b(a){return B(a)?s(k,a,b):a}),f?E(a,function(a){for(;a=a.parentNode;)if(a==f||c)return a==f}):a}function e(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var f,g,h,i;return b&&1!=(b=y(b)).length?M(b,function(b){return y(a,b,c)}):(f=b&&b[0],x(a)?f&&1!=r(f)?[]:1<(b=a.split(/\s*,\s*/)).length?M(b,function(a){return y(a,f,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?y(b[2],y(b[1],f),c):a!=(b=m(a,/^#/))?d(document.getElementById(b)):(g=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(h=document.getElementsByClassName&&i)?(f||document).getElementsByClassName(i):(f||document).getElementsByTagName(g||"*"),(g=h?g:i)&&(b=E(b,e(g,h?"tagName":"className"))),c?d(b):b):d(a))}function J(a,b){function c(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var d,e,f={},h=f;return n(a)?a:/^num/.test(typeof a)?function(b,c){return c==a}:!a||"*"==a||x(a)&&(h=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(d=c(h[1],"tagName"),e=c(h[2],"className"),function(a){return 1==r(a)&&d(a)&&e(a)}):b?function(c){return p(a,b).find(c)!=g}:(p(a).each(function(a){f[I(a)]=!0}),function(a){return f[I(a)]})}function Y(a){var b=J(a);return function(a){return b(a)?g:!0}}function P(){function a(a,e){function f(){var d=b?a:e;n(d)?(d=d.apply(Z,c))&&d.then?d.then(function(a){h.fire(!0,[a])},function(a){h.fire(!1,[a])}):h.fire(!0,[d]):h.fire(b,c)}var h=P();return b==g?d.push(f):setTimeout(f,0),h}var b,c,d=[];return{fire:function(a,e){b==g&&(b=a,c=e,setTimeout(function(){G(d)},0))},then:a,error:function(b){return a(0,b)}}}function w(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var Z,$,g=null,q=window,Q={},R={},V=1,z={},F=/^[ic]/.test(document.readyState)?g:[],K={},S=0,u=!!document.all&&!document.addEventListener;return t({each:function(a){return k(this,a)},filter:function(a){return new w(E(this,a))},collect:function(a){return new w(s(k,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return new w(E(this,function(a,b){return b>=c&&d>b}))},find:function(a,b){for(var c,d=n(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=g)return c},remove:function(){k(this,function(a){u&&1==r(a)&&(k(y("*",a),function(a){N(0,z[a.Nia]),delete z[a.Nia]}),N(0,z[a.Nia]),delete z[a.Nia]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=r(b);return 1==c?s(k,b.childNodes,a):5>c?b.data:g}return s(k,this,a).join("")},trav:function(a,b,c){var d=/^num/.test(typeof b),e=J(d?g:b),f=d?b:c;return new w(M(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},next:function(a,b){return this.trav("nextSibling",a,b||1)},up:function(a,b){return this.trav("parentNode",a,b||1)},select:function(a,b){return p(a,this,b)},is:function(a){return!this.find(Y(a))},only:function(a){return new w(E(this,J(a)))},not:function(a){return new w(E(this,Y(a)))},get:function(a,b){var c,d,e,f=this,h=f[0];return h?x(a)?(c=/^(\W*)(.*)/.exec(m(a,/^%/,"@data-")),d=c[1],h=R[d]?R[d](this,c[2]):"$"==a?f.get("className"):"$$"==a?u?h.style.cssText:f.get("@style"):"$$slide"==a?f.get("$height"):"$$fade"==a||"$$show"==a?"hidden"==f.get("$visibility")||"none"==f.get("$display")?0:"$$fade"==a?u?isNaN(f.get("$filter",!0))?1:f.get("$filter",!0)/100:isNaN(f.get("$opacity",!0))?1:f.get("$opacity",!0):1:"$$scrollX"==a?q.pageXOffset!=g?q.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft:"$$scrollY"==a?q.pageXOffset!=g?q.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:"$"==d?q.getComputedStyle?q.getComputedStyle(h,g).getPropertyValue(m(c[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(h.currentStyle||h.style)[m(c[2],/^float$/,"cssFloat")]:"@"==d?h.getAttribute(c[2]):h[c[2]],b?H(h):h):(e={},(B(a)?k:t)(a,function(a){e[a]=f.get(a,b)}),e):void 0},set:function(a,b){var c,d,e=this;return b!==Z?(c=/^(\W*)(.*)/.exec(m(m(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),d=c[1],Q[d]?Q[d](this,c[2],b):"$$fade"==a?e.set({$visibility:b?"visible":"hidden"}).set(u?1>b?{$filter:"alpha(opacity = "+100*b+")",$zoom:1}:{$filter:""}:{$opacity:b}):"$$slide"==a?e.set({$visibility:b?"visible":"hidden",$overflow:"hidden",$height:/px/.test(b)?b:function(a,c,d){return W(p(d),b)}}):"$$show"==a?b?e.set({$visibility:b?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):e.set({$display:"none"}):"$$"==a?u?e.set("$cssText",b):e.set("@style",b):k(this,function(e,f){var h=n(b)?b(p(e).get(a),f,e):b;"$"==d?c[2]?e.style[c[2]]=h:k(h&&h.split(/\s+/),function(a){var b=m(a,/^[+-]/),c=e.className||"",d=m(c,RegExp("(^|\\s+)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&c==d)&&(d+=" "+b),e.className=m(d,/^\s+/g)}):"$$scrollX"==a?e.scroll(h,p(e).get("$$scrollY")):"$$scrollY"==a?e.scroll(p(e).get("$$scrollX"),h):"@"==d?h==g?e.removeAttribute(c[2]):e.setAttribute(c[2],h):e[c[2]]=h})):x(a)||n(a)?e.set("$",a):t(a,function(a,b){e.set(a,b)}),e},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(c,d){function e(a){B(a)?k(a,e):n(a)?e(a(c,d)):a!=g&&(a=r(a)?a:document.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),f=a)}var f;e(d&&!n(a)?O(a):a)})},fill:function(a){return this.each(function(a){p(a.childNodes).remove()}).add(a)},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new w(O(this))},animate:function(a,b,c){var d,e=P(),f=this,g=s(k,this,function(b,d){var e,f=p(b),g={};return t(e=f.get(a),function(c,e){var h=a[c];g[c]=n(h)?h(e,d,b):"$$slide"==c?W(f,h):h}),f.dial(e,g,c)}),h=b||500;return e.stop=function(){return e.fire(!1),d()},d=p.loop(function(a){G(g,a/h),a>=h&&(d(),e.fire(!0,[f]))}),e},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(2*b+1,2):(a=a.charAt(b+1))+a,16):H(a.split(",")[b])}var e=this,f=c||0,g=n(f)?f:function(a,b,c){return c*(b-a)*(f+(1-f)*c*(3-2*c))+a};return function(c){t(a,function(a,f){var h=b[a],i=0;e.set(a,0>=c?f:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+")":m(h,/-?[\d.]+/,v(g(H(f),H(h),c))))})}},toggle:function(a,b,c,d){var e,f,h=this,i=!1;return b?(h.set(a),function(j){j!==i&&(f=(i=!0===j||!1===j?j:!i)?b:a,c?(e=h.animate(f,e?e.stop():c,d)).then(function(){e=g}):h.set(f))}):h.toggle(m(a,/\b(?=\w)/g,"-"),m(a,/\b(?=\w)/g,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name||a.id,d=v(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)p(a.elements[c]).values(b);else!c||/ox|io/i.test(a.type)&&!a.checked||(b[c]=b[c]==g?d:s(k,[b[c],d],L))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return n(b)?this.on(g,a,b,c,e):x(d)?this.on(a,b,c,g,d):this.each(function(f,g){k(a?y(a,f):f,function(a){k(v(b).split(/\s/),function(b){var f=m(b,/[?|]/),h=!!e&&("blur"==f||"focus"==f),i=aa(c,a,d,g,m(b,/[^?|]/g),e&&J(e,a));b={element:a,b:i,a:f,capture:h},(c.M=c.M||[]).push(b),u?(a.attachEvent("on"+b.a+(h?"in":""),i),f=I(a),(z[f]=z[f]||[]).push(b)):(a.addEventListener(f,i,h),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return n(b)?this.on(a,"|mouseover |mouseout",function(a,e){var f=a.relatedTarget||a.toElement,g="mouseout"!=a.type;d[e]===g||!g&&f&&(f==c[e]||p(f).up(c[e]).length)||(d[e]=g,b.call(this,g,a))}):this.onOver(g,a)},onFocus:function(a,b,c){return n(b)?this.on(a,"|blur",b,[!1],c).on(a,"|focus",b,[!0],c):this.onFocus(g,a,b)},onChange:function(a,b,c){return n(b)?this.on(a,u?"|propertychange |change |keyup |clicked":"|input |change |clicked",function(a,c){var d,e=this[0];d=u&&/select/i.test(e.tagName)?e.options[e.selectedIndex].text:/ox|io/i.test(e.type)?e.checked:e.value,d!=e.NiaP&&b.call(this,e.NiaP=d,c)},c):this.onChange(g,a,b)},onClick:function(a,b,c,d){return n(b)?this.on(a,"click",b,c,d):this.onClick(g,a,b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)k(u?z[e.Nia]:e.M,function(e){e.a==a&&(d=d||!e.b(b,c))}),e=e.parentNode})}},function(a,b){w.prototype[a]=b}),t({request:function(a,b,c,d){d=d||{};var e,f=0,h=P(),i=c&&c.constructor==d.constructor;try{h.xhr=e=q.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),h.stop=function(){e.abort()},i&&(c=s(t,c,function(a,b){return s(k,b,function(b){return encodeURIComponent(a)+(b!=g?"="+encodeURIComponent(b):"")})}).join("&")),c==g||/post/i.test(a)||(b+="?"+c,c=g),e.open(a,b,!0,d.user,d.pass),i&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t(d.headers,function(a,b){e.setRequestHeader(a,b)}),t(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200<=e.status&&300>e.status?h.fire(!0,[e.responseText,e]):h.fire(!1,[e.status,e.responseText,e]))},e.send(c)}catch(j){f||h.fire(!1,[0,g,v(j)])}return h},toJSON:function a(b){return b==g?""+b:x(b=b.valueOf())?'"'+m(b,/[\\\"\x00-\x1f\u2028\u2029]/g,T)+'"':B(b)?"["+s(k,b,a).join()+"]":/^ob/.test(typeof b)?"{"+s(t,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":v(b)},parseJSON:q.JSON?q.JSON.parse:function(b){return b=m(b,/[\x00\xad\u0600-\uffff]/g,T),/^[[\],:{}\s]*$/.test(m(m(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:X,loop:function(a){function b(a){t(K,function(b,c){c(a)}),S&&g(b)}function c(){return K[f]&&(delete K[f],S--),e}var d,e=0,f=V++,g=q.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return K[f]=function(b){d=d||b,a(e=b-d,c)},S++||g(b),c},off:function(a){k(a.M,function(a){u?(a.element.detachEvent("on"+a.a+(a.capture?"in":""),a.b),U(z[a.element.Nia],a)):(a.element.removeEventListener(a.a,a.b,a.capture),U(a.element.M,a))}),a.M=g}},function(a,b){p[a]=b}),u?($=function(){G(F),F=g},document.attachEvent("onreadystatechange",function(){/^[ic]/.test(document.readyState)&&$()}),q.attachEvent("onload",$)):document.addEventListener("DOMContentLoaded",function(){G(F),F=g},!1),q.c=function(){k(z,N)},{$:p,$$:function(a,b,c){return y(a,b,c)[0]},EE:function(a,b,c){return a=p(document.createElement(a)),B(b)||!/^ob/.test(typeof b)?a.add(b):a.set(b).add(c)},M:w,getter:R,setter:Q}});