!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarBootstrap={},e.FullCalendar)}(this,function(e,t){"use strict";var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};var r,a,n,p=(r=t.Theme,o(a=l,n=r),a.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i),l);function i(){this.constructor=a}function l(){return null!==r&&r.apply(this,arguments)||this}p.prototype.classes={widget:"fc-bootstrap",tableGrid:"table-bordered",tableList:"table",tableListHeading:"table-active",buttonGroup:"btn-group",button:"btn btn-primary",buttonActive:"active",today:"alert alert-info",popover:"card card-primary",popoverHeader:"card-header",popoverContent:"card-body",headerRow:"table-bordered",dayRow:"table-bordered",listView:"card card-primary"},p.prototype.baseIconClass="fa",p.prototype.iconClasses={close:"fa-times",prev:"fa-chevron-left",next:"fa-chevron-right",prevYear:"fa-angle-double-left",nextYear:"fa-angle-double-right"},p.prototype.iconOverrideOption="bootstrapFontAwesome",p.prototype.iconOverrideCustomButtonOption="bootstrapFontAwesome",p.prototype.iconOverridePrefix="fa-";t=t.createPlugin({themeClasses:{bootstrap:p}});e.BootstrapTheme=p,e.default=t,Object.defineProperty(e,"__esModule",{value:!0})});