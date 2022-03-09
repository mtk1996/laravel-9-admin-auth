!function(n){function S(e,t){return t*Math.floor(e/t)}function o(e,t,n,r){if("function"==typeof e.strftime)return e.strftime(t);function a(e,t){return t=""+(null==t?"0":t),1==(e=""+e).length?t+e:e}var i,o=[],u=!1,s=e.getHours(),c=s<12;null==n&&(n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),null==r&&(r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),i=12<s?s-12:0==s?12:s;for(var m=0;m<t.length;++m){var l=t.charAt(m);if(u){switch(l){case"a":l=""+r[e.getDay()];break;case"b":l=""+n[e.getMonth()];break;case"d":l=a(e.getDate());break;case"e":l=a(e.getDate()," ");break;case"h":case"H":l=a(s);break;case"I":l=a(i);break;case"l":l=a(i," ");break;case"m":l=a(e.getMonth()+1);break;case"M":l=a(e.getMinutes());break;case"q":l=""+(Math.floor(e.getMonth()/3)+1);break;case"S":l=a(e.getSeconds());break;case"y":l=a(e.getFullYear()%100);break;case"Y":l=""+e.getFullYear();break;case"p":l=c?"am":"pm";break;case"P":l=c?"AM":"PM";break;case"w":l=""+e.getDay()}o.push(l),u=!1}else"%"==l?u=!0:o.push(l)}return o.join("")}function r(e){function t(e,t,n,r){e[t]=function(){return n[r].apply(n,arguments)}}var n={date:e};null!=e.strftime&&t(n,"strftime",e,"strftime"),t(n,"getTime",e,"getTime"),t(n,"setTime",e,"setTime");for(var r=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"],a=0;a<r.length;a++)t(n,"get"+r[a],e,"getUTC"+r[a]),t(n,"set"+r[a],e,"setUTC"+r[a]);return n}function y(e,t){if("browser"==t.timezone)return new Date(e);if(t.timezone&&"utc"!=t.timezone){if("undefined"==typeof timezoneJS||void 0===timezoneJS.Date)return r(new Date(e));var n=new timezoneJS.Date;return n.setTimezone(t.timezone),n.setTime(e),n}return r(new Date(e))}var z={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,quarter:7776e6,year:525949.2*60*1e3},e=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"]],p=e.concat([[3,"month"],[6,"month"],[1,"year"]]),T=e.concat([[1,"quarter"],[2,"quarter"],[1,"year"]]);n.plot.plugins.push({init:function(e){e.hooks.processOptions.push(function(e,t){n.each(e.getAxes(),function(e,t){var d=t.options;"time"==d.mode&&(t.tickGenerator=function(e){var t=[],n=y(e.min,d),r=0,a=d.tickSize&&"quarter"===d.tickSize[1]||d.minTickSize&&"quarter"===d.minTickSize[1]?T:p;null!=d.minTickSize&&(r="number"==typeof d.tickSize?d.tickSize:d.minTickSize[0]*z[d.minTickSize[1]]);for(var i=0;i<a.length-1&&!(e.delta<(a[i][0]*z[a[i][1]]+a[i+1][0]*z[a[i+1][1]])/2&&a[i][0]*z[a[i][1]]>=r);++i);var o,u,s=a[i][0];"year"==(m=a[i][1])&&(null!=d.minTickSize&&"year"==d.minTickSize[1]?s=Math.floor(d.minTickSize[0]):(o=Math.pow(10,Math.floor(Math.log(e.delta/z.year)/Math.LN10)),s=(u=e.delta/z.year/o)<1.5?1:u<3?2:u<7.5?5:10,s*=o),s<1&&(s=1)),e.tickSize=d.tickSize||[s,m];var c=e.tickSize[0],m=e.tickSize[1],l=c*z[m];"second"==m?n.setSeconds(S(n.getSeconds(),c)):"minute"==m?n.setMinutes(S(n.getMinutes(),c)):"hour"==m?n.setHours(S(n.getHours(),c)):"month"==m?n.setMonth(S(n.getMonth(),c)):"quarter"==m?n.setMonth(3*S(n.getMonth()/3,c)):"year"==m&&n.setFullYear(S(n.getFullYear(),c)),n.setMilliseconds(0),z.minute<=l&&n.setSeconds(0),z.hour<=l&&n.setMinutes(0),z.day<=l&&n.setHours(0),4*z.day<=l&&n.setDate(1),2*z.month<=l&&n.setMonth(S(n.getMonth(),3)),2*z.quarter<=l&&n.setMonth(S(n.getMonth(),6)),z.year<=l&&n.setMonth(0);var h=0,k=Number.NaN;do{var f,M,g=k,k=n.getTime()}while(t.push(k),"month"==m||"quarter"==m?c<1?(n.setDate(1),f=n.getTime(),n.setMonth(n.getMonth()+("quarter"==m?3:1)),M=n.getTime(),n.setTime(k+h*z.hour+(M-f)*c),h=n.getHours(),n.setHours(0)):n.setMonth(n.getMonth()+c*("quarter"==m?3:1)):"year"==m?n.setFullYear(n.getFullYear()+c):n.setTime(k+l),k<e.max&&k!=g);return t},t.tickFormatter=function(e,t){var n=y(e,t.options);if(null!=d.timeformat)return o(n,d.timeformat,d.monthNames,d.dayNames);var r=t.options.tickSize&&"quarter"==t.options.tickSize[1]||t.options.minTickSize&&"quarter"==t.options.minTickSize[1],a=t.tickSize[0]*z[t.tickSize[1]],i=t.max-t.min,e=d.twelveHourClock?" %p":"",t=d.twelveHourClock?"%I":"%H",i=a<z.minute?t+":%M:%S"+e:a<z.day?i<2*z.day?t+":%M"+e:"%b %d "+t+":%M"+e:a<z.month?"%b %d":r&&a<z.quarter||!r&&a<z.year?i<z.year?"%b":"%b %Y":r&&a<z.year?i<z.year?"Q%q":"Q%q %Y":"%Y";return o(n,i,d.monthNames,d.dayNames)})})})},options:{xaxis:{timezone:null,timeformat:null,twelveHourClock:!1,monthNames:null}},name:"time",version:"1.0"}),n.plot.formatDate=o,n.plot.dateGenerator=y}(jQuery);