!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(t){return e(t,window,document)}):"object"==typeof exports?module.exports=function(t,n){return t=t||window,n&&n.fn.dataTable||(n=require("datatables.net")(t,n).$),e(n,t,t.document)}:e(jQuery,window,document)}(function(T,B,H,b){"use strict";var e=T.fn.dataTable,o=0,c=0,l=e.ext.buttons;function N(t,n,e){T.fn.animate?t.stop().fadeIn(n,e):(t.css("display","block"),e&&e.call(t))}function L(t,n,e){T.fn.animate?t.stop().fadeOut(n,e):(t.css("display","none"),e&&e.call(t))}var i,F=function(n,t){if(!(this instanceof F))return function(t){return new F(t,n).container()};void 0===t&&(t={}),!0===t&&(t={}),Array.isArray(t)&&(t={buttons:t}),this.c=T.extend(!0,{},F.defaults,t),t.buttons&&(this.c.buttons=t.buttons),this.s={dt:new e.Api(n),buttons:[],listenKeys:"",namespace:"dtb"+o++},this.dom={container:T("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()};T.extend(F.prototype,{action:function(t,n){t=this._nodeToButton(t);return n===b?t.conf.action:(t.conf.action=n,this)},active:function(t,n){var e=this._nodeToButton(t),t=this.c.dom.button.active,e=T(e.node);return n===b?e.hasClass(t):(e.toggleClass(t,n===b||n),this)},add:function(t,n){var e=this.s.buttons;if("string"==typeof n){for(var o=n.split("-"),i=this.s,s=0,r=o.length-1;s<r;s++)i=i.buttons[+o[s]];e=i.buttons,n=+o[o.length-1]}return this._expandButton(e,t,i!==b,n),this._draw(),this},container:function(){return this.dom.container},disable:function(t){t=this._nodeToButton(t);return T(t.node).addClass(this.c.dom.button.disabled).attr("disabled",!0),this},destroy:function(){T("body").off("keyup."+this.s.namespace);for(var t=this.s.buttons.slice(),n=0,e=t.length;n<e;n++)this.remove(t[n].node);this.dom.container.remove();var o=this.s.dt.settings()[0];for(n=0,e=o.length;n<e;n++)if(o.inst===this){o.splice(n,1);break}return this},enable:function(t,n){if(!1===n)return this.disable(t);t=this._nodeToButton(t);return T(t.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled"),this},name:function(){return this.c.name},node:function(t){if(!t)return this.dom.container;t=this._nodeToButton(t);return T(t.node)},processing:function(t,n){var e=this.s.dt,o=this._nodeToButton(t);return n===b?T(o.node).hasClass("processing"):(T(o.node).toggleClass("processing",n),T(e.table().node()).triggerHandler("buttons-processing.dt",[n,e.button(t),e,T(t),o.conf]),this)},remove:function(t){var n=this._nodeToButton(t),e=this._nodeToHost(t),o=this.s.dt;if(n.buttons.length)for(var i=n.buttons.length-1;0<=i;i--)this.remove(n.buttons[i].node);n.conf.destroy&&n.conf.destroy.call(o.button(t),o,T(t),n.conf),this._removeKey(n.conf),T(n.node).remove();t=T.inArray(n,e);return e.splice(t,1),this},text:function(t,n){var e=this._nodeToButton(t),o=this.c.dom.collection.buttonLiner,t=(e.inCollection&&o&&o.tag?o:this.c.dom.buttonLiner).tag,i=this.s.dt,s=T(e.node),o=function(t){return"function"==typeof t?t(i,s,e.conf):t};return n===b?o(e.conf.text):(e.conf.text=n,(t?s.children(t):s).html(o(n)),this)},_constructor:function(){var e=this,t=this.s.dt,o=t.settings()[0],n=this.c.buttons;o._buttons||(o._buttons=[]),o._buttons.push({inst:this,name:this.c.name});for(var i=0,s=n.length;i<s;i++)this.add(n[i]);t.on("destroy",function(t,n){n===o&&e.destroy()}),T("body").on("keyup."+this.s.namespace,function(t){var n;H.activeElement&&H.activeElement!==H.body||(n=String.fromCharCode(t.keyCode).toLowerCase(),-1!==e.s.listenKeys.toLowerCase().indexOf(n)&&e._keypress(n,t))})},_addKey:function(t){t.key&&(this.s.listenKeys+=(T.isPlainObject(t.key)?t.key:t).key)},_draw:function(t,n){t||(t=this.dom.container,n=this.s.buttons),t.children().detach();for(var e=0,o=n.length;e<o;e++)t.append(n[e].inserter),t.append(" "),n[e].buttons&&n[e].buttons.length&&this._draw(n[e].collection,n[e].buttons)},_expandButton:function(t,n,e,o){for(var i=this.s.dt,s=Array.isArray(n)?n:[n],r=0,a=s.length;r<a;r++){var u,l=this._resolveExtends(s[r]);l&&(Array.isArray(l)?this._expandButton(t,l,e,o):(u=this._buildButton(l,e))&&(o!==b&&null!==o?(t.splice(o,0,u),o++):t.push(u),u.conf.buttons&&(u.collection=T("<"+this.c.dom.collection.tag+"/>"),u.conf._collection=u.collection,this._expandButton(u.buttons,u.conf.buttons,!0,o)),l.init&&l.init.call(i.button(u.node),i,T(u.node),l),0))}},_buildButton:function(n,t){var e=this.c.dom.button,o=this.c.dom.buttonLiner,i=this.c.dom.collection,s=this.s.dt,r=function(t){return"function"==typeof t?t(s,l,n):t};if(t&&i.button&&(e=i.button),t&&i.buttonLiner&&(o=i.buttonLiner),n.available&&!n.available(s,n))return!1;function a(t,n,e,o){o.action.call(n.button(e),t,n,e,o),T(n.table().node()).triggerHandler("buttons-action.dt",[n.button(e),n,e,o])}var i=n.tag||e.tag,u=n.clickBlurs===b||n.clickBlurs,l=T("<"+i+"/>").addClass(e.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(t){t.preventDefault(),!l.hasClass(e.disabled)&&n.action&&a(t,s,l,n),u&&l.trigger("blur")}).on("keyup.dtb",function(t){13===t.keyCode&&!l.hasClass(e.disabled)&&n.action&&a(t,s,l,n)});"a"===i.toLowerCase()&&l.attr("href","#"),"button"===i.toLowerCase()&&l.attr("type","button"),o.tag?(i=T("<"+o.tag+"/>").html(r(n.text)).addClass(o.className),"a"===o.tag.toLowerCase()&&i.attr("href","#"),l.append(i)):l.html(r(n.text)),!1===n.enabled&&l.addClass(e.disabled),n.className&&l.addClass(n.className),n.titleAttr&&l.attr("title",r(n.titleAttr)),n.attr&&l.attr(n.attr),n.namespace||(n.namespace=".dt-button-"+c++);r=this.c.dom.buttonContainer,r=r&&r.tag?T("<"+r.tag+"/>").addClass(r.className).append(l):l;return this._addKey(n),this.c.buttonCreated&&(r=this.c.buttonCreated(n,r)),{conf:n,node:l.get(0),inserter:r,buttons:[],inCollection:t,collection:null}},_nodeToButton:function(t,n){for(var e=0,o=(n=n||this.s.buttons).length;e<o;e++){if(n[e].node===t)return n[e];if(n[e].buttons.length){var i=this._nodeToButton(t,n[e].buttons);if(i)return i}}},_nodeToHost:function(t,n){for(var e=0,o=(n=n||this.s.buttons).length;e<o;e++){if(n[e].node===t)return n;if(n[e].buttons.length){var i=this._nodeToHost(t,n[e].buttons);if(i)return i}}},_keypress:function(s,r){var a;r._buttonsHandled||(a=function(t){for(var n,e,o=0,i=t.length;o<i;o++)n=t[o].conf,e=t[o].node,n.key&&(n.key===s?(r._buttonsHandled=!0,T(e).click()):T.isPlainObject(n.key)&&n.key.key===s&&(n.key.shiftKey&&!r.shiftKey||n.key.altKey&&!r.altKey||n.key.ctrlKey&&!r.ctrlKey||n.key.metaKey&&!r.metaKey||(r._buttonsHandled=!0,T(e).click()))),t[o].buttons.length&&a(t[o].buttons)})(this.s.buttons)},_removeKey:function(t){var n;t.key&&(n=(T.isPlainObject(t.key)?t.key:t).key,t=this.s.listenKeys.split(""),n=T.inArray(n,t),t.splice(n,1),this.s.listenKeys=t.join(""))},_resolveExtends:function(e){function t(t){for(var n=0;!T.isPlainObject(t)&&!Array.isArray(t);){if(t===b)return;if("function"==typeof t){if(!(t=t(i,e)))return!1}else if("string"==typeof t){if(!l[t])throw"Unknown button type: "+t;t=l[t]}if(30<++n)throw"Buttons: Too many iterations"}return Array.isArray(t)?t:T.extend({},t)}var n,o,i=this.s.dt;for(e=t(e);e&&e.extend;){if(!l[e.extend])throw"Cannot extend unknown button type: "+e.extend;var s=t(l[e.extend]);if(Array.isArray(s))return s;if(!s)return!1;var r=s.className;e=T.extend({},s,e),r&&e.className!==r&&(e.className=r+" "+e.className);var a=e.postfixButtons;if(a){for(e.buttons||(e.buttons=[]),n=0,o=a.length;n<o;n++)e.buttons.push(a[n]);e.postfixButtons=null}var u=e.prefixButtons;if(u){for(e.buttons||(e.buttons=[]),n=0,o=u.length;n<o;n++)e.buttons.splice(n,0,u[n]);e.prefixButtons=null}e.extend=s.extend}return e},_popover:function(o,t,n){function i(){L(T(".dt-button-collection"),r.fade,function(){T(this).detach()}),T(e.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded","false"),T("div.dt-button-background").off("click.dtb-collection"),F.background(!1,r.backgroundClassName,r.fade,a),T("body").off(".dtb-collection"),e.off("buttons-action.b-internal")}var e=t,s=this.c,r=T.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",contentClassName:s.dom.collection.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,rightAlignClassName:"dt-button-right",tag:s.dom.collection.tag},n),a=t.node();!1===o&&i();var u=T(e.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes());u.length&&(a=u.eq(0),i());var l=T("<div/>").addClass("dt-button-collection").addClass(r.collectionLayout).css("display","none");o=T(o).addClass(r.contentClassName).attr("role","menu").appendTo(l),a.attr("aria-expanded","true"),a.parents("body")[0]!==H.body&&(a=H.body.lastChild),r.collectionTitle&&l.prepend('<div class="dt-button-collection-title">'+r.collectionTitle+"</div>"),N(l.insertAfter(a),r.fade);var c,d,f,h,p,b,g,m,y,v,x,A,_,k,C,w,s=T(t.table().container()),n=l.css("position");"dt-container"===r.align&&(a=a.parent(),l.css("width",s.width())),"absolute"===n&&(l.hasClass(r.rightAlignClassName)||l.hasClass(r.leftAlignClassName)||"dt-container"===r.align)?(f=a.position(),l.css({top:f.top+a.outerHeight(),left:f.left}),h=l.outerHeight(),x=s.offset().top+s.height(),A=f.top+a.outerHeight()+h-x,_=f.top-h,C=(k=s.offset().top)-_,v=f.top-h-5,(C<A||r.dropup)&&-v<k&&l.css("top",v),t=(u=s.offset().left)+s.width(),y=(m=l.offset().left)+l.width(),g=(b=a.offset().left)+a.outerWidth(),p=0,l.hasClass(r.rightAlignClassName)?m+(p=g-y)<u&&(p+=(d=t-(y+p))<(c=u-(m+p))?d:c):t<y+(p=u-m)&&(p+=(d=t-(y+p))<(c=u-(m+p))?d:c),l.css("left",l.position().left+p)):"absolute"===n?(f=a.position(),l.css({top:f.top+a.outerHeight(),left:f.left}),h=l.outerHeight(),w=a.offset().top,p=0,g=(b=a.offset().left)+a.outerWidth(),y=(m=l.offset().left)+o.width(),v=f.top-h-5,x=s.offset().top+s.height(),A=f.top+a.outerHeight()+h-x,_=f.top-h,((C=(k=s.offset().top)-_)<A||r.dropup)&&-v<k&&l.css("top",v),p="button-right"===r.align?g-y:b-m,l.css("left",l.position().left+p)):((w=l.height()/2)>T(B).height()/2&&(w=T(B).height()/2),l.css("marginTop",-1*w)),r.background&&F.background(!0,r.backgroundClassName,r.fade,a),T("div.dt-button-background").on("click.dtb-collection",function(){}),T("body").on("click.dtb-collection",function(t){var n=T.fn.addBack?"addBack":"andSelf",e=T(t.target).parent()[0];(T(t.target).parents()[n]().filter(o).length||T(e).hasClass("dt-buttons"))&&!T(t.target).hasClass("dt-button-background")||i()}).on("keyup.dtb-collection",function(t){27===t.keyCode&&i()}),r.autoClose&&setTimeout(function(){e.on("buttons-action.b-internal",function(t,n,e,o){o[0]!==a[0]&&i()})},0),T(l).trigger("buttons-popover.dt")}}),F.background=function(t,n,e,o){e===b&&(e=400),o=o||H.body,t?N(T("<div/>").addClass(n).css("display","none").insertAfter(o),e):L(T("div."+n),e,function(){T(this).removeClass(n).remove()})},F.instanceSelector=function(t,i){if(t===b||null===t)return T.map(i,function(t){return t.inst});var s=[],r=T.map(i,function(t){return t.name}),a=function(t){var n;if(Array.isArray(t))for(var e=0,o=t.length;e<o;e++)a(t[e]);else"string"==typeof t?-1!==t.indexOf(",")?a(t.split(",")):-1!==(n=T.inArray(t.trim(),r))&&s.push(i[n].inst):"number"==typeof t&&s.push(i[t].inst)};return a(t),s},F.buttonSelector=function(t,n){for(var l=[],c=function(t,n,e){for(var o,i,s=0,r=n.length;s<r;s++)(o=n[s])&&(i=e!==b?e+s:s+"",t.push({node:o.node,name:o.conf.name,idx:i}),o.buttons&&c(t,o.buttons,i+"-"))},d=function(t,n){var e=[];c(e,n.s.buttons);var o=T.map(e,function(t){return t.node});if(Array.isArray(t)||t instanceof T)for(s=0,r=t.length;s<r;s++)d(t[s],n);else if(null===t||t===b||"*"===t)for(s=0,r=e.length;s<r;s++)l.push({inst:n,node:e[s].node});else if("number"==typeof t)l.push({inst:n,node:n.s.buttons[t].node});else if("string"==typeof t)if(-1!==t.indexOf(","))for(var i=t.split(","),s=0,r=i.length;s<r;s++)d(i[s].trim(),n);else if(t.match(/^\d+(\-\d+)*$/)){var a=T.map(e,function(t){return t.idx});l.push({inst:n,node:e[T.inArray(t,a)].node})}else if(-1!==t.indexOf(":name")){var u=t.replace(":name","");for(s=0,r=e.length;s<r;s++)e[s].name===u&&l.push({inst:n,node:e[s].node})}else T(o).filter(t).each(function(){l.push({inst:n,node:this})});else"object"!=typeof t||!t.nodeName||-1!==(a=T.inArray(t,o))&&l.push({inst:n,node:o[a]})},e=0,o=t.length;e<o;e++){var i=t[e];d(n,i)}return l},F.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:""},button:{tag:"ActiveXObject"in B?"a":"button",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}},F.version="1.6.5",T.extend(l,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",init:function(t,n,e){n.attr("aria-expanded",!1)},action:function(t,n,e,o){t.stopPropagation(),o._collection.parents("body").length?this.popover(!1,o):this.popover(o._collection,o)},attr:{"aria-haspopup":!0}},copy:function(t,n){return l.copyHtml5?"copyHtml5":l.copyFlash&&l.copyFlash.available(t,n)?"copyFlash":void 0},csv:function(t,n){return l.csvHtml5&&l.csvHtml5.available(t,n)?"csvHtml5":l.csvFlash&&l.csvFlash.available(t,n)?"csvFlash":void 0},excel:function(t,n){return l.excelHtml5&&l.excelHtml5.available(t,n)?"excelHtml5":l.excelFlash&&l.excelFlash.available(t,n)?"excelFlash":void 0},pdf:function(t,n){return l.pdfHtml5&&l.pdfHtml5.available(t,n)?"pdfHtml5":l.pdfFlash&&l.pdfFlash.available(t,n)?"pdfFlash":void 0},pageLength:function(t){var n=t.settings()[0].aLengthMenu,t=Array.isArray(n[0])?n[0]:n,e=Array.isArray(n[0])?n[1]:n;return{extend:"collection",text:function(t){return t.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},t.page.len())},className:"buttons-page-length",autoClose:!0,buttons:T.map(t,function(s,t){return{text:e[t],className:"button-page-length",action:function(t,n){n.page.len(s).draw()},init:function(t,n,e){function o(){i.active(t.page.len()===s)}var i=this;t.on("length.dt"+e.namespace,o),o()},destroy:function(t,n,e){t.off("length.dt"+e.namespace)}}}),init:function(t,n,e){var o=this;t.on("length.dt"+e.namespace,function(){o.text(e.text)})},destroy:function(t,n,e){t.off("length.dt"+e.namespace)}}}}),e.Api.register("buttons()",function(n,e){e===b&&(e=n,n=b),this.selector.buttonGroup=n;var t=this.iterator(!0,"table",function(t){if(t._buttons)return F.buttonSelector(F.instanceSelector(n,t._buttons),e)},!0);return t._groupSelector=n,t}),e.Api.register("button()",function(t,n){n=this.buttons(t,n);return 1<n.length&&n.splice(1,n.length),n}),e.Api.registerPlural("buttons().active()","button().active()",function(n){return n===b?this.map(function(t){return t.inst.active(t.node)}):this.each(function(t){t.inst.active(t.node,n)})}),e.Api.registerPlural("buttons().action()","button().action()",function(n){return n===b?this.map(function(t){return t.inst.action(t.node)}):this.each(function(t){t.inst.action(t.node,n)})}),e.Api.register(["buttons().enable()","button().enable()"],function(n){return this.each(function(t){t.inst.enable(t.node,n)})}),e.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.node)})}),e.Api.registerPlural("buttons().nodes()","button().node()",function(){var n=T();return T(this.each(function(t){n=n.add(t.inst.node(t.node))})),n}),e.Api.registerPlural("buttons().processing()","button().processing()",function(n){return n===b?this.map(function(t){return t.inst.processing(t.node)}):this.each(function(t){t.inst.processing(t.node,n)})}),e.Api.registerPlural("buttons().text()","button().text()",function(n){return n===b?this.map(function(t){return t.inst.text(t.node)}):this.each(function(t){t.inst.text(t.node,n)})}),e.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.node).trigger("click")})}),e.Api.register("button().popover()",function(n,e){return this.map(function(t){return t.inst._popover(n,this.button(this[0].node),e)})}),e.Api.register("buttons().containers()",function(){var i=T(),s=this._groupSelector;return this.iterator(!0,"table",function(t){if(t._buttons)for(var n=F.instanceSelector(s,t._buttons),e=0,o=n.length;e<o;e++)i=i.add(n[e].container())}),i}),e.Api.register("buttons().container()",function(){return this.containers().eq(0)}),e.Api.register("button().add()",function(t,n){var e=this.context;return!e.length||(e=F.instanceSelector(this._groupSelector,e[0]._buttons)).length&&e[0].add(n,t),this.button(this._groupSelector,t)}),e.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy()}),this}),e.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.remove(t.node)}),this}),e.Api.register("buttons.info()",function(t,n,e){var o=this;return!1===t?(this.off("destroy.btn-info"),L(T("#datatables_buttons_info"),400,function(){T(this).remove()}),clearTimeout(i),i=null):(i&&clearTimeout(i),T("#datatables_buttons_info").length&&T("#datatables_buttons_info").remove(),t=t?"<h2>"+t+"</h2>":"",N(T('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t).append(T("<div/>")["string"==typeof n?"html":"append"](n)).css("display","none").appendTo("body")),e!==b&&0!==e&&(i=setTimeout(function(){o.buttons.info(!1)},e)),this.on("destroy.btn-info",function(){o.buttons.info(!1)})),this}),e.Api.register("buttons.exportData()",function(t){if(this.context.length)return u(new e.Api(this.context[0]),t)}),e.Api.register("buttons.exportInfo()",function(t){return{filename:n(t=t||{}),title:r(t),messageTop:a(this,t.message||t.messageTop,"top"),messageBottom:a(this,t.messageBottom,"bottom")}});var n=function(t){var n="*"===t.filename&&"*"!==t.title&&t.title!==b&&null!==t.title&&""!==t.title?t.title:t.filename;return"function"==typeof n&&(n=n()),n===b||null===n?null:(-1!==n.indexOf("*")&&(n=n.replace("*",T("head > title").text()).trim()),(n=n.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""))+(s(t.extension)||""))},s=function(t){return null===t||t===b?null:"function"==typeof t?t():t},r=function(t){t=s(t.title);return null===t?null:-1!==t.indexOf("*")?t.replace("*",T("head > title").text()||"Exported data"):t},a=function(t,n,e){n=s(n);if(null===n)return null;t=T("caption",t.table().container()).eq(0);return"*"!==n?n:t.css("caption-side")!==e?null:t.length?t.text():""},g=T("<textarea/>")[0],u=function(e,t){var o=T.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(t){return n(t)},footer:function(t){return n(t)},body:function(t){return n(t)}},customizeData:null},t),n=function(t){return"string"!=typeof t||(t=(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")).replace(/<!\-\-.*?\-\->/g,""),o.stripHtml&&(t=t.replace(/<([^>'"]*('[^']*'|"[^"]*")?)*>/g,"")),o.trim&&(t=t.replace(/^\s+|\s+$/g,"")),o.stripNewlines&&(t=t.replace(/\n/g," ")),o.decodeEntities&&(g.innerHTML=t,t=g.value)),t},i=e.columns(o.columns).indexes().map(function(t){var n=e.column(t).header();return o.format.header(n.innerHTML,t,n)}).toArray(),s=e.table().footer()?e.columns(o.columns).indexes().map(function(t){var n=e.column(t).footer();return o.format.footer(n?n.innerHTML:"",t,n)}).toArray():null,t=T.extend({},o.modifier);e.select&&"function"==typeof e.select.info&&t.selected===b&&e.rows(o.rows,T.extend({selected:!0},t)).any()&&T.extend(t,{selected:!0});for(var t=e.rows(o.rows,t).indexes().toArray(),t=e.cells(t,o.columns),r=t.render(o.orthogonal).toArray(),a=t.nodes().toArray(),u=i.length,l=[],c=0,d=0,f=0<u?r.length/u:0;d<f;d++){for(var h=[u],p=0;p<u;p++)h[p]=o.format.body(r[c],d,p,a[c]),c++;l[d]=h}s={header:i,footer:s,body:l};return o.customizeData&&o.customizeData(s),s};function t(t,n){t=new e.Api(t),n=n||t.init().buttons||e.defaults.buttons;return new F(t,n).container()}return T.fn.dataTable.Buttons=F,T.fn.DataTable.Buttons=F,T(H).on("init.dt plugin-init.dt",function(t,n){"dt"!==t.namespace||(t=n.oInit.buttons||e.defaults.buttons)&&!n._buttons&&new F(n,t).container()}),e.ext.feature.push({fnInit:t,cFeature:"B"}),e.ext.features&&e.ext.features.register("buttons",t),F});