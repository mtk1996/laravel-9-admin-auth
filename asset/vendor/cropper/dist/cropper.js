!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],e):e((t||self).jQuery)}(this,function(c){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(e,t){var i,a=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)),a}function x(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){var e,i;e=a,t=n[i=t],i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}function T(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}c=c&&c.hasOwnProperty("default")?c.default:c;var t="undefined"!=typeof window&&void 0!==window.document,r=t?window:{},a=t&&"ontouchstart"in r.document.documentElement,o=t&&"PointerEvent"in r,d="cropper",M="all",C="crop",D="move",B="zoom",k="e",O="w",E="s",W="n",N="ne",H="nw",L="se",z="sw",h="".concat(d,"-crop"),s="".concat(d,"-disabled"),Y="".concat(d,"-hidden"),l="".concat(d,"-hide"),p="".concat(d,"-invisible"),u="".concat(d,"-modal"),m="".concat(d,"-move"),g="".concat(d,"Action"),f="".concat(d,"Preview"),v="crop",w="move",b="none",y="crop",X="cropend",R="cropmove",j="cropstart",A="dblclick",S=o?"pointerdown":a?"touchstart":"mousedown",P=o?"pointermove":a?"touchmove":"mousemove",I=o?"pointerup pointercancel":a?"touchend touchcancel":"mouseup",U="zoom",q="image/jpeg",$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Q=/^data:/,K=/^data:image\/jpeg;base64,/,Z=/^img|canvas$/i,F={viewMode:0,dragMode:v,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},G=Number.isNaN||r.isNaN;function V(t){return"number"==typeof t&&!G(t)}var J=function(t){return 0<t&&t<1/0};function _(t){return void 0===t}function tt(t){return"object"===e(t)&&null!==t}var et=Object.prototype.hasOwnProperty;function it(t){if(!tt(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&et.call(i,"isPrototypeOf")}catch(t){return!1}}function at(t){return"function"==typeof t}var nt=Array.prototype.slice;function ot(t){return Array.from?Array.from(t):nt.call(t)}function rt(i,a){return i&&at(a)&&(Array.isArray(i)||V(i.length)?ot(i).forEach(function(t,e){a.call(i,t,e,i)}):tt(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var ht=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return tt(i)&&0<e.length&&e.forEach(function(e){tt(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},st=/\.\d*(?:0|9){12}\d*$/;function ct(t,e){e=1<arguments.length&&void 0!==e?e:1e11;return st.test(t)?Math.round(t*e)/e:t}var dt=/^width|height|left|top|marginLeft|marginTop$/;function lt(t,e){var i=t.style;rt(e,function(t,e){dt.test(e)&&V(t)&&(t="".concat(t,"px")),i[e]=t})}function pt(t,e){var i;e&&(V(t.length)?rt(t,function(t){pt(t,e)}):t.classList?t.classList.add(e):(i=t.className.trim())?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e)}function ut(t,e){e&&(V(t.length)?rt(t,function(t){ut(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function mt(t,e,i){e&&(V(t.length)?rt(t,function(t){mt(t,e,i)}):(i?pt:ut)(t,e))}var gt=/([a-z\d])([A-Z])/g;function ft(t){return t.replace(gt,"$1-$2").toLowerCase()}function vt(t,e){return tt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(ft(e)))}function wt(t,e,i){tt(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(ft(e)),i)}var bt,yt,xt=/\s\s*/,Mt=(yt=!1,t&&(bt=!1,St=function(){},Pt=Object.defineProperty({},"once",{get:function(){return yt=!0,bt},set:function(t){bt=t}}),r.addEventListener("test",St,Pt),r.removeEventListener("test",St,Pt)),yt);function Ct(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(xt).forEach(function(t){var e;Mt||(e=i.listeners)&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners),i.removeEventListener(t,o,n)})}function Dt(o,t,r,e){var h=3<arguments.length&&void 0!==e?e:{},s=r;t.trim().split(xt).forEach(function(a){var t,n;h.once&&!Mt&&(t=o.listeners,s=function(){delete n[a][r],o.removeEventListener(a,s,h);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];r.apply(o,e)},(n=void 0===t?{}:t)[a]||(n[a]={}),n[a][r]&&o.removeEventListener(a,n[a][r],h),n[a][r]=s,o.listeners=n),o.addEventListener(a,s,h)})}function Bt(t,e,i){var a;return at(Event)&&at(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function kt(t){t=t.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var Ot=r.location,Tt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Et(t){t=t.match(Tt);return null!==t&&(t[1]!==Ot.protocol||t[2]!==Ot.hostname||t[3]!==Ot.port)}function Wt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Nt(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,t=[];V(n)&&0!==n&&t.push("translateX(".concat(n,"px)")),V(o)&&0!==o&&t.push("translateY(".concat(o,"px)")),V(e)&&0!==e&&t.push("rotate(".concat(e,"deg)")),V(i)&&1!==i&&t.push("scaleX(".concat(i,")")),V(a)&&1!==a&&t.push("scaleY(".concat(a,")"));t=t.length?t.join(" "):"none";return{WebkitTransform:t,msTransform:t,transform:t}}function Ht(t,e){var i=t.pageX,a=t.pageY,t={endX:i,endY:a};return e?t:x({startX:i,startY:a},t)}function Lt(t,e){var i=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==e?e:"contain",r=J(n),t=J(a);return r&&t?(e=a*i,"contain"===o&&n<e||"cover"===o&&e<n?a=n/i:n=a*i):r?a=n/i:t&&(n=a*i),{width:n,height:a}}var zt=String.fromCharCode;var Yt=/^data:.*,/;function Xt(t){var e,i,a,n,o,r,h=new DataView(t);try{if(255===h.getUint8(0)&&216===h.getUint8(1))for(var s=h.byteLength,c=2;c+1<s;){if(255===h.getUint8(c)&&225===h.getUint8(c+1)){i=c;break}c+=1}if(i&&(n=i+10,"Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=zt(t.getUint8(n));return a}(h,i+4,4)&&(!(r=18761===(o=h.getUint16(n)))&&19789!==o||42!==h.getUint16(n+2,r)||8<=(o=h.getUint32(n+4,r))&&(a=n+o))),a)for(var d,l=h.getUint16(a,r),p=0;p<l;p+=1)if(d=a+12*p+2,274===h.getUint16(d,r)){d+=8,e=h.getUint16(d,r),h.setUint16(d,1,r);break}}catch(t){e=1}return e}var Rt,jt,At={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper;pt(a,Y),ut(t,Y);e={width:Math.max(i.offsetWidth,Number(e.minContainerWidth)||200),height:Math.max(i.offsetHeight,Number(e.minContainerHeight)||100)};lt(a,{width:(this.containerData=e).width,height:e.height}),pt(t,Y),ut(a,Y)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,r=n/o,h=t.width,a=t.height;t.height*r>t.width?3===i?h=t.height*r:a=t.width/r:3===i?a=t.width/r:h=t.height*r;o={aspectRatio:r,naturalWidth:n,naturalHeight:o,width:h,height:a};o.left=(t.width-h)/2,o.top=(t.height-a)/2,o.oldLeft=o.left,o.oldTop=o.top,this.canvasData=o,this.limited=1===i||2===i,this.limitCanvas(!0,!0),this.initialImageData=ht({},e),this.initialCanvasData=ht({},o)},limitCanvas:function(t,e){var i,a=this.options,n=this.containerData,o=this.canvasData,r=this.cropBoxData,h=a.viewMode,s=o.aspectRatio,c=this.cropped&&r;t&&(t=Number(a.minCanvasWidth)||0,i=Number(a.minCanvasHeight)||0,1<h?(t=Math.max(t,n.width),i=Math.max(i,n.height),3===h&&(t<i*s?t=i*s:i=t/s)):0<h&&(t?t=Math.max(t,c?r.width:0):i?i=Math.max(i,c?r.height:0):c&&((t=r.width)<(i=r.height)*s?t=i*s:i=t/s)),t=(s=Lt({aspectRatio:s,width:t,height:i})).width,i=s.height,o.minWidth=t,o.minHeight=i,o.maxWidth=1/0,o.maxHeight=1/0),e&&((c?0:1)<h?(i=n.width-o.width,e=n.height-o.height,o.minLeft=Math.min(0,i),o.minTop=Math.min(0,e),o.maxLeft=Math.max(0,i),o.maxTop=Math.max(0,e),c&&this.limited&&(o.minLeft=Math.min(r.left,r.left+(r.width-o.width)),o.minTop=Math.min(r.top,r.top+(r.height-o.height)),o.maxLeft=r.left,o.maxTop=r.top,2===h&&(o.width>=n.width&&(o.minLeft=Math.min(0,i),o.maxLeft=Math.max(0,i)),o.height>=n.height&&(o.minTop=Math.min(0,e),o.maxTop=Math.max(0,e))))):(o.minLeft=-o.width,o.minTop=-o.height,o.maxLeft=n.width,o.maxTop=n.height))},renderCanvas:function(t,e){var i,a,n=this.canvasData,o=this.imageData;e&&(i=(a=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),t=Math.cos(n),n=e*t+i*o,t=e*o+i*t;return 90<a?{width:t,height:n}:{width:n,height:t}}({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0})).width,e=a.height,o=n.width*(i/n.naturalWidth),a=n.height*(e/n.naturalHeight),n.left-=(o-n.width)/2,n.top-=(a-n.height)/2,n.width=o,n.height=a,n.aspectRatio=i/e,n.naturalWidth=i,n.naturalHeight=e,this.limitCanvas(!0,!1)),(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCanvas(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,lt(this.canvas,ht({width:n.width,height:n.height},Nt({translateX:n.left,translateY:n.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);ht(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),lt(this.image,ht({width:i.width,height:i.height},Nt(ht({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,t={width:e.width,height:e.height};i&&(e.height*i>e.width?t.height=t.width/i:t.width=t.height*i),this.cropBoxData=t,this.limitCropBox(!0,!0),t.width=Math.min(Math.max(t.width,t.minWidth),t.maxWidth),t.height=Math.min(Math.max(t.height,t.minHeight),t.maxHeight),t.width=Math.max(t.minWidth,t.width*a),t.height=Math.max(t.minHeight,t.height*a),t.left=e.left+(e.width-t.width)/2,t.top=e.top+(e.height-t.height)/2,t.oldLeft=t.left,t.oldTop=t.top,this.initialCropBoxData=ht({},t)},limitCropBox:function(t,e){var i,a,n=this.options,o=this.containerData,r=this.canvasData,h=this.cropBoxData,s=this.limited,c=n.aspectRatio;t&&(i=Number(n.minCropBoxWidth)||0,a=Number(n.minCropBoxHeight)||0,t=s?Math.min(o.width,r.width,r.width+r.left,o.width-r.left):o.width,n=s?Math.min(o.height,r.height,r.height+r.top,o.height-r.top):o.height,i=Math.min(i,o.width),a=Math.min(a,o.height),c&&(i&&a?i<a*c?a=i/c:i=a*c:i?a=i/c:a&&(i=a*c),t<n*c?n=t/c:t=n*c),h.minWidth=Math.min(i,t),h.minHeight=Math.min(a,n),h.maxWidth=t,h.maxHeight=n),e&&(s?(h.minLeft=Math.max(0,r.left),h.minTop=Math.max(0,r.top),h.maxLeft=Math.min(o.width,r.left+r.width)-h.width,h.maxTop=Math.min(o.height,r.top+r.height)-h.height):(h.minLeft=0,h.minTop=0,h.maxLeft=o.width-h.width,h.maxTop=o.height-h.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&wt(this.face,g,i.width>=e.width&&i.height>=e.height?D:M),lt(this.cropBox,ht({width:i.width,height:i.height},Nt({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Bt(this.element,y,this.getData())}},o={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e&&("string"==typeof(o=e)?o=t.ownerDocument.querySelectorAll(e):e.querySelector&&(o=[e]),rt(this.previews=o,function(t){var e=document.createElement("img");wt(t,f,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)}))},resetPreview:function(){rt(this.previews,function(t){var e=vt(t,f);lt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(e,i){if(tt(e[i]))try{delete e[i]}catch(t){e[i]=void 0}else if(e.dataset)try{delete e.dataset[i]}catch(t){e.dataset[i]=void 0}else e.removeAttribute("data-".concat(ft(i)))}(t,f)})},preview:function(){var r=this.imageData,t=this.canvasData,e=this.cropBoxData,h=e.width,s=e.height,c=r.width,d=r.height,l=e.left-t.left-r.left,p=e.top-t.top-r.top;this.cropped&&!this.disabled&&(lt(this.viewBoxImage,ht({width:c,height:d},Nt(ht({translateX:-l,translateY:-p},r)))),rt(this.previews,function(t){var e=vt(t,f),i=e.width,a=e.height,n=i,o=a,e=1;h&&(o=s*(e=i/h)),s&&a<o&&(n=h*(e=a/s),o=a),lt(t,{width:n,height:o}),lt(t.getElementsByTagName("img")[0],ht({width:c*e,height:d*e},Nt(ht({translateX:-l*e,translateY:-p*e},r))))}))}},a={bind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Dt(t,j,e.cropstart),at(e.cropmove)&&Dt(t,R,e.cropmove),at(e.cropend)&&Dt(t,X,e.cropend),at(e.crop)&&Dt(t,y,e.crop),at(e.zoom)&&Dt(t,U,e.zoom),Dt(i,S,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Dt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Dt(i,A,this.onDblclick=this.dblclick.bind(this)),Dt(t.ownerDocument,P,this.onCropMove=this.cropMove.bind(this)),Dt(t.ownerDocument,I,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Dt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Ct(t,j,e.cropstart),at(e.cropmove)&&Ct(t,R,e.cropmove),at(e.cropend)&&Ct(t,X,e.cropend),at(e.crop)&&Ct(t,y,e.crop),at(e.zoom)&&Ct(t,U,e.zoom),Ct(i,S,this.onCropStart),e.zoomable&&e.zoomOnWheel&&Ct(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Ct(i,A,this.onDblclick),Ct(t.ownerDocument,P,this.onCropMove),Ct(t.ownerDocument,I,this.onCropEnd),e.responsive&&Ct(window,"resize",this.onResize)}},t={resize:function(){var i,a,n,t=this.options,e=this.container,o=this.containerData,r=Number(t.minContainerWidth)||200,h=Number(t.minContainerHeight)||100;this.disabled||o.width<=r||o.height<=h||(1==(i=e.offsetWidth/o.width)&&e.offsetHeight===o.height||(t.restore&&(a=this.getCanvasData(),n=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(rt(a,function(t,e){a[e]=t*i})),this.setCropBoxData(rt(n,function(t,e){n[e]=t*i})))))},dblclick:function(){var t,e;this.disabled||this.options.dragMode===b||this.setDragMode((t=this.dragBox,e=h,(t.classList?t.classList.contains(e):-1<t.className.indexOf(e))?w:v))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e,i=t.buttons,a=t.button;this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(V(i)&&1!==i||V(a)&&0!==a||t.ctrlKey)||(a=this.options,e=this.pointers,t.changedTouches?rt(t.changedTouches,function(t){e[t.identifier]=Ht(t)}):e[t.pointerId||0]=Ht(t),a=1<Object.keys(e).length&&a.zoomable&&a.zoomOnTouch?B:vt(t.target,g),$.test(a)&&!1!==Bt(this.element,j,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===C&&(this.cropping=!0,pt(this.dragBox,u))))},cropMove:function(t){var e,i=this.action;!this.disabled&&i&&(e=this.pointers,t.preventDefault(),!1!==Bt(this.element,R,{originalEvent:t,action:i})&&(t.changedTouches?rt(t.changedTouches,function(t){ht(e[t.identifier]||{},Ht(t,!0))}):ht(e[t.pointerId||0]||{},Ht(t,!0)),this.change(t)))},cropEnd:function(t){var e,i;this.disabled||(e=this.action,i=this.pointers,t.changedTouches?rt(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,mt(this.dragBox,u,this.cropped&&this.options.modal)),Bt(this.element,X,{originalEvent:t,action:e})))}},St={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,o=this.pointers,r=this.action,h=e.aspectRatio,s=n.left,c=n.top,d=n.width,l=n.height,p=s+d,u=c+l,m=0,g=0,f=a.width,v=a.height,e=!0;!h&&t.shiftKey&&(h=d&&l?d/l:1),this.limited&&(m=n.minLeft,g=n.minTop,f=m+Math.min(a.width,i.width,i.left+i.width),v=g+Math.min(a.height,i.height,i.top+i.height));var w,b,a=o[Object.keys(o)[0]],y={x:a.endX-a.startX,y:a.endY-a.startY},i=function(t){switch(t){case k:p+y.x>f&&(y.x=f-p);break;case O:s+y.x<m&&(y.x=m-s);break;case W:c+y.y<g&&(y.y=g-c);break;case E:u+y.y>v&&(y.y=v-u)}};switch(r){case M:s+=y.x,c+=y.y;break;case k:if(0<=y.x&&(f<=p||h&&(c<=g||v<=u))){e=!1;break}i(k),(d+=y.x)<0&&(r=O,s-=d=-d),h&&(l=d/h,c+=(n.height-l)/2);break;case W:if(y.y<=0&&(c<=g||h&&(s<=m||f<=p))){e=!1;break}i(W),l-=y.y,c+=y.y,l<0&&(r=E,c-=l=-l),h&&(d=l*h,s+=(n.width-d)/2);break;case O:if(y.x<=0&&(s<=m||h&&(c<=g||v<=u))){e=!1;break}i(O),d-=y.x,s+=y.x,d<0&&(r=k,s-=d=-d),h&&(l=d/h,c+=(n.height-l)/2);break;case E:if(0<=y.y&&(v<=u||h&&(s<=m||f<=p))){e=!1;break}i(E),(l+=y.y)<0&&(r=W,c-=l=-l),h&&(d=l*h,s+=(n.width-d)/2);break;case N:if(h){if(y.y<=0&&(c<=g||f<=p)){e=!1;break}i(W),l-=y.y,c+=y.y,d=l*h}else i(W),i(k),!(0<=y.x)||p<f?d+=y.x:y.y<=0&&c<=g&&(e=!1),y.y<=0&&!(g<c)||(l-=y.y,c+=y.y);d<0&&l<0?(r=z,c-=l=-l,s-=d=-d):d<0?(r=H,s-=d=-d):l<0&&(r=L,c-=l=-l);break;case H:if(h){if(y.y<=0&&(c<=g||s<=m)){e=!1;break}i(W),l-=y.y,c+=y.y,d=l*h,s+=n.width-d}else i(W),i(O),!(y.x<=0)||m<s?(d-=y.x,s+=y.x):y.y<=0&&c<=g&&(e=!1),y.y<=0&&!(g<c)||(l-=y.y,c+=y.y);d<0&&l<0?(r=L,c-=l=-l,s-=d=-d):d<0?(r=N,s-=d=-d):l<0&&(r=z,c-=l=-l);break;case z:if(h){if(y.x<=0&&(s<=m||v<=u)){e=!1;break}i(O),d-=y.x,s+=y.x,l=d/h}else i(E),i(O),!(y.x<=0)||m<s?(d-=y.x,s+=y.x):0<=y.y&&v<=u&&(e=!1),0<=y.y&&!(u<v)||(l+=y.y);d<0&&l<0?(r=N,c-=l=-l,s-=d=-d):d<0?(r=L,s-=d=-d):l<0&&(r=H,c-=l=-l);break;case L:if(h){if(0<=y.x&&(f<=p||v<=u)){e=!1;break}i(k),l=(d+=y.x)/h}else i(E),i(k),!(0<=y.x)||p<f?d+=y.x:0<=y.y&&v<=u&&(e=!1),0<=y.y&&!(u<v)||(l+=y.y);d<0&&l<0?(r=H,c-=l=-l,s-=d=-d):d<0?(r=z,s-=d=-d):l<0&&(r=N,c-=l=-l);break;case D:this.move(y.x,y.y),e=!1;break;case B:this.zoom((w=x({},i=o),b=[],rt(i,function(n,t){delete w[t],rt(w,function(t){var e=Math.abs(n.startX-t.startX),i=Math.abs(n.startY-t.startY),a=Math.abs(n.endX-t.endX),t=Math.abs(n.endY-t.endY),i=Math.sqrt(e*e+i*i),i=(Math.sqrt(a*a+t*t)-i)/i;b.push(i)})}),b.sort(function(t,e){return Math.abs(t)<Math.abs(e)}),b[0]),t),e=!1;break;case C:if(!y.x||!y.y){e=!1;break}t=kt(this.cropper),s=a.startX-t.left,c=a.startY-t.top,d=n.minWidth,l=n.minHeight,0<y.x?r=0<y.y?L:N:y.x<0&&(s-=d,r=0<y.y?z:H),y.y<0&&(c-=l),this.cropped||(ut(this.cropBox,Y),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}e&&(n.width=d,n.height=l,n.left=s,n.top=c,this.action=r,this.renderCropBox()),rt(o,function(t){t.startX=t.endX,t.startY=t.endY})}},Pt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&pt(this.dragBox,u),ut(this.cropBox,Y),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=ht({},this.initialImageData),this.canvasData=ht({},this.initialCanvasData),this.cropBoxData=ht({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(ht(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),ut(this.dragBox,u),pt(this.cropBox,Y)),this},replace:function(e,t){t=1<arguments.length&&void 0!==t&&t;return!this.disabled&&e&&(this.isImg&&(this.element.src=e),t?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,rt(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,ut(this.cropper,s)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,pt(this.cropper,s)),this},destroy:function(){var t=this.element;return t[d]&&(t[d]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,e=a.left,a=a.top;return this.moveTo(_(t)?t:e+Number(t),_(i)?i:a+Number(i))},moveTo:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.canvasData,e=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(V(t)&&(a.left=t,e=!0),V(i)&&(a.top=i,e=!0),e&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(i.width*t/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a,n,o,r=this.options,h=this.canvasData,s=h.width,c=h.height,d=h.naturalWidth,l=h.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&r.zoomable){r=d*t,l=l*t;if(!1===Bt(this.element,U,{ratio:t,oldRatio:s/d,originalEvent:i}))return this;i?(t=this.pointers,d=kt(this.cropper),i=t&&Object.keys(t).length?(o=n=a=0,rt(t,function(t){var e=t.startX,t=t.startY;a+=e,n+=t,o+=1}),{pageX:a/=o,pageY:n/=o}):{pageX:i.pageX,pageY:i.pageY},h.left-=(r-s)*((i.pageX-d.left-h.left)/s),h.top-=(l-c)*((i.pageY-d.top-h.top)/c)):it(e)&&V(e.x)&&V(e.y)?(h.left-=(r-s)*((e.x-h.left)/s),h.top-=(l-c)*((e.y-h.top)/c)):(h.left-=(r-s)/2,h.top-=(l-c)/2),h.width=r,h.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return V(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,V(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(V(e)?e:1,t)},scale:function(t,e){var i=1<arguments.length&&void 0!==e?e:t,a=this.imageData,e=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(V(t)&&(a.scaleX=t,e=!0),V(i)&&(a.scaleY=i,e=!0),e&&this.renderCanvas(!0,!0)),this},getData:function(t){var i,a,e=0<arguments.length&&void 0!==t&&t,n=this.options,o=this.imageData,r=this.canvasData,t=this.cropBoxData;return this.ready&&this.cropped?(i={x:t.left-r.left,y:t.top-r.top,width:t.width,height:t.height},a=o.width/o.naturalWidth,rt(i,function(t,e){i[e]=t/a}),e&&(t=Math.round(i.y+i.height),e=Math.round(i.x+i.width),i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=e-i.x,i.height=t-i.y)):i={x:0,y:0,width:0,height:0},n.rotatable&&(i.rotate=o.rotate||0),n.scalable&&(i.scaleX=o.scaleX||1,i.scaleY=o.scaleY||1),i},setData:function(t){var e,i=this.options,a=this.imageData,n=this.canvasData,o={};return this.ready&&!this.disabled&&it(t)&&(e=!1,i.rotatable&&V(t.rotate)&&t.rotate!==a.rotate&&(a.rotate=t.rotate,e=!0),i.scalable&&(V(t.scaleX)&&t.scaleX!==a.scaleX&&(a.scaleX=t.scaleX,e=!0),V(t.scaleY)&&t.scaleY!==a.scaleY&&(a.scaleY=t.scaleY,e=!0)),e&&this.renderCanvas(!0,!0),a=a.width/a.naturalWidth,V(t.x)&&(o.left=t.x*a+n.left),V(t.y)&&(o.top=t.y*a+n.top),V(t.width)&&(o.width=t.width*a),V(t.height)&&(o.height=t.height*a),this.setCropBoxData(o)),this},getContainerData:function(){return this.ready?ht({},this.containerData):{}},getImageData:function(){return this.sized?ht({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&rt(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&it(t)&&(V(t.left)&&(e.left=t.left),V(t.top)&&(e.top=t.top),V(t.width)?(e.width=t.width,e.height=t.width/i):V(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return this.ready&&this.cropped&&(t={left:e.left,top:e.top,width:e.width,height:e.height}),t||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&it(t)&&(V(t.left)&&(a.left=t.left),V(t.top)&&(a.top=t.top),V(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),V(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(t){var e=0<arguments.length&&void 0!==t?t:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i,a,n,o,r,h,s,c,d,l,p,u,m,g=this.canvasData,h=(w=this.image,i=this.imageData,a=g,y=e,n=i.aspectRatio,o=i.naturalWidth,b=i.naturalHeight,r=void 0===(m=i.rotate)?0:m,h=void 0===(v=i.scaleX)?1:v,f=void 0===(p=i.scaleY)?1:p,s=a.aspectRatio,c=a.naturalWidth,d=a.naturalHeight,l=void 0===(u=y.fillColor)?"transparent":u,x=y.imageSmoothingEnabled,t=void 0===x||x,v=void 0===(m=y.imageSmoothingQuality)?"low":m,p=void 0===(i=y.maxWidth)?1/0:i,u=void 0===(a=y.maxHeight)?1/0:a,m=void 0===(x=y.minWidth)?0:x,a=void 0===(i=y.minHeight)?0:i,y=(x=document.createElement("canvas")).getContext("2d"),i=Lt({aspectRatio:s,width:p,height:u}),s=Lt({aspectRatio:s,width:m,height:a},"cover"),c=Math.min(i.width,Math.max(s.width,c)),d=Math.min(i.height,Math.max(s.height,d)),u=Lt({aspectRatio:n,width:p,height:u}),a=Lt({aspectRatio:n,width:m,height:a},"cover"),o=Math.min(u.width,Math.max(a.width,o)),b=Math.min(u.height,Math.max(a.height,b)),b=[-o/2,-b/2,o,b],x.width=ct(c),x.height=ct(d),y.fillStyle=l,y.fillRect(0,0,c,d),y.save(),y.translate(c/2,d/2),y.rotate(r*Math.PI/180),y.scale(h,f),y.imageSmoothingEnabled=t,y.imageSmoothingQuality=v,y.drawImage.apply(y,[w].concat(T(b.map(function(t){return Math.floor(ct(t))})))),y.restore(),x);if(!this.cropped)return h;var f=this.getData(),t=f.x,v=f.y,w=f.width,b=f.height,y=h.width/Math.floor(g.naturalWidth);1!=y&&(t*=y,v*=y,w*=y,b*=y);var x=w/b,f=Lt({aspectRatio:x,width:e.maxWidth||1/0,height:e.maxHeight||1/0}),g=Lt({aspectRatio:x,width:e.minWidth||0,height:e.minHeight||0},"cover"),x=Lt({aspectRatio:x,width:e.width||(1!=y?h.width:w),height:e.height||(1!=y?h.height:b)}),y=x.width,x=x.height,y=Math.min(f.width,Math.max(g.width,y)),x=Math.min(f.height,Math.max(g.height,x)),f=document.createElement("canvas"),g=f.getContext("2d");f.width=ct(y),f.height=ct(x),g.fillStyle=e.fillColor||"transparent",g.fillRect(0,0,y,x);x=e.imageSmoothingEnabled,x=void 0===x||x,e=e.imageSmoothingQuality;g.imageSmoothingEnabled=x,e&&(g.imageSmoothingQuality=e);var M,C,D,B,k,x=h.width,e=h.height,t=t,v=v;t<=-w||x<t?B=C=M=t=0:t<=0?(C=-t,t=0,B=M=Math.min(x,w+t)):t<=x&&(C=0,B=M=Math.min(w,x-t)),M<=0||v<=-b||e<v?k=D=O=v=0:v<=0?(D=-v,v=0,k=O=Math.min(e,b+v)):v<=e&&(D=0,k=O=Math.min(b,e-v));var O=[t,v,M,O];return 0<B&&0<k&&(w=y/w,O.push(C*w,D*w,B*w,k*w)),g.drawImage.apply(g,[h].concat(T(O.map(function(t){return Math.floor(ct(t))})))),f},setAspectRatio:function(t){var e=this.options;return this.disabled||_(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e,i,a=this.options,n=this.dragBox,o=this.face;return this.ready&&!this.disabled&&(e=t===v,i=a.movable&&t===w,t=e||i?t:b,a.dragMode=t,wt(n,g,t),mt(n,h,e),mt(n,m,i),a.cropBoxMovable||(wt(o,g,t),mt(o,h,e),mt(o,m,i))),this}},It=r.Cropper,Ut=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),!t||!Z.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=ht({},F,it(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var t,e,a;return t=i,a=[{key:"noConflict",value:function(){return window.Cropper=It,i}},{key:"setDefaults",value:function(t){ht(F,it(t)&&t)}}],(e=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[d]){if(e[d]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e,i,a,n,o,r,h=this;t&&(this.url=t,this.imageData={},e=this.element,(i=this.options).rotatable||i.scalable||(i.checkOrientation=!1),i.checkOrientation&&window.ArrayBuffer?Q.test(t)?K.test(t)?this.read((r=(r=t).replace(Yt,""),a=atob(r),r=new ArrayBuffer(a.length),rt(n=new Uint8Array(r),function(t,e){n[e]=a.charCodeAt(e)}),r)):this.clone():(o=new XMLHttpRequest,r=this.clone.bind(this),this.reloading=!0,(this.xhr=o).onabort=r,o.onerror=r,o.ontimeout=r,o.onprogress=function(){o.getResponseHeader("content-type")!==q&&o.abort()},o.onload=function(){h.read(o.response)},o.onloadend=function(){h.reloading=!1,h.xhr=null},i.checkCrossOrigin&&Et(t)&&e.crossOrigin&&(t=Wt(t)),o.open("GET",t),o.responseType="arraybuffer",o.withCredentials="use-credentials"===e.crossOrigin,o.send()):this.clone())}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=Xt(t),n=0,o=1,r=1;1<a&&(this.url=function(t,e){for(var i=[],a=new Uint8Array(t);0<a.length;)i.push(zt.apply(null,ot(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,q),n=(a=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a)).rotate,o=a.scaleX,r=a.scaleY),e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=r),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&Et(e)&&(i=i||"anonymous",a=Wt(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),pt(n,l),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function e(t,e){ht(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.sizing=!1,i.sized=!0,i.build()}var a,n,o=r.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(r.navigator.userAgent);!t.naturalWidth||o?(a=document.createElement("img"),n=document.body||document.documentElement,(this.sizingImage=a).onload=function(){e(a.width,a.height),o||n.removeChild(a)},a.src=t.src,o||(a.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(a))):e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){var t,e,i,a,n,o,r,h,s;this.sized&&!this.ready&&(t=this.element,e=this.options,i=this.image,a=t.parentNode,(s=document.createElement("div")).innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',o=(n=s.querySelector(".".concat(d,"-container"))).querySelector(".".concat(d,"-canvas")),r=n.querySelector(".".concat(d,"-drag-box")),s=(h=n.querySelector(".".concat(d,"-crop-box"))).querySelector(".".concat(d,"-face")),this.container=a,this.cropper=n,this.canvas=o,this.dragBox=r,this.cropBox=h,this.viewBox=n.querySelector(".".concat(d,"-view-box")),this.face=s,o.appendChild(i),pt(t,Y),a.insertBefore(n,t.nextSibling),this.isImg||ut(i,l),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,pt(h,Y),e.guides||pt(h.getElementsByClassName("".concat(d,"-dashed")),Y),e.center||pt(h.getElementsByClassName("".concat(d,"-center")),Y),e.background&&pt(n,"".concat(d,"-bg")),e.highlight||pt(s,p),e.cropBoxMovable&&(pt(s,m),wt(s,g,M)),e.cropBoxResizable||(pt(h.getElementsByClassName("".concat(d,"-line")),Y),pt(h.getElementsByClassName("".concat(d,"-point")),Y)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),at(e.ready)&&Dt(t,"ready",e.ready,{once:!0}),Bt(t,"ready"))}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),ut(this.element,Y))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(t.prototype,e),a&&n(t,a),i}();ht(Ut.prototype,At,o,a,t,St,Pt),c.fn&&(Rt=c.fn.cropper,jt="cropper",c.fn.cropper=function(r){for(var h,t=arguments.length,s=new Array(1<t?t-1:0),e=1;e<t;e++)s[e-1]=arguments[e];return this.each(function(t,e){var i=c(e),a="destroy"===r;if(!(o=i.data(jt))){if(a)return;var n=c.extend({},i.data(),c.isPlainObject(r)&&r),o=new Ut(e,n);i.data(jt,o)}"string"==typeof r&&(n=o[r],c.isFunction(n)&&((h=n.apply(o,s))===o&&(h=void 0),a&&i.removeData(jt)))}),void 0!==h?h:this},c.fn.cropper.Constructor=Ut,c.fn.cropper.setDefaults=Ut.setDefaults,c.fn.cropper.noConflict=function(){return c.fn.cropper=Rt,this})});