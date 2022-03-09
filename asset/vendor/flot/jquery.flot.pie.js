!function(k){var e={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:1.5,tilt:1,shadow:{left:5,top:15,alpha:.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(e,i){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+i.color+";'>"+e+"<br/>"+Math.round(i.percent)+"%</div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};k.plot.plugins.push({init:function(p){var r,h=null,g=null,c=null,u=null,d=null,a=!1,f=null,o=[];function b(e){var i;0<g.series.pie.innerRadius&&(e.save(),i=1<g.series.pie.innerRadius?g.series.pie.innerRadius:c*g.series.pie.innerRadius,e.globalCompositeOperation="destination-out",e.beginPath(),e.fillStyle=g.series.pie.stroke.color,e.arc(0,0,i,0,2*Math.PI,!1),e.fill(),e.closePath(),e.restore(),e.save(),e.beginPath(),e.strokeStyle=g.series.pie.stroke.color,e.arc(0,0,i,0,2*Math.PI,!1),e.stroke(),e.closePath(),e.restore())}function v(e,i){for(var s,t,r=p.getData(),a=p.getOptions(),l=1<a.series.pie.radius?a.series.pie.radius:c*a.series.pie.radius,n=0;n<r.length;++n){var o=r[n];if(o.pie.show){if(f.save(),f.beginPath(),f.moveTo(0,0),f.arc(0,0,l,o.startAngle,o.startAngle+o.angle/2,!1),f.arc(0,0,l,o.startAngle+o.angle/2,o.startAngle+o.angle,!1),f.closePath(),s=e-u,t=i-d,f.isPointInPath){if(f.isPointInPath(e-u,i-d))return f.restore(),{datapoint:[o.percent,o.data],dataIndex:0,series:o,seriesIndex:n}}else if(function(e,i){for(var s=!1,t=-1,r=e.length,a=r-1;++t<r;a=t)(e[t][1]<=i[1]&&i[1]<e[a][1]||e[a][1]<=i[1]&&i[1]<e[t][1])&&i[0]<(e[a][0]-e[t][0])*(i[1]-e[t][1])/(e[a][1]-e[t][1])+e[t][0]&&(s=!s);return s}([[0,0],[l*Math.cos(o.startAngle),l*Math.sin(o.startAngle)],[l*Math.cos(o.startAngle+o.angle/4),l*Math.sin(o.startAngle+o.angle/4)],[l*Math.cos(o.startAngle+o.angle/2),l*Math.sin(o.startAngle+o.angle/2)],[l*Math.cos(o.startAngle+o.angle/1.5),l*Math.sin(o.startAngle+o.angle/1.5)],[l*Math.cos(o.startAngle+o.angle),l*Math.sin(o.startAngle+o.angle)]],[s,t]))return f.restore(),{datapoint:[o.percent,o.data],dataIndex:0,series:o,seriesIndex:n};f.restore()}}return null}function s(e){i("plothover",e)}function t(e){i("plotclick",e)}function i(e,i){var s,t,r=p.offset(),a=v(parseInt(i.pageX-r.left),parseInt(i.pageY-r.top));if(g.grid.autoHighlight)for(var l=0;l<o.length;++l){var n=o[l];n.auto!=e||a&&n.series==a.series||function(e){null==e&&(o=[],p.triggerRedrawOverlay());e=w(e);-1!=e&&(o.splice(e,1),p.triggerRedrawOverlay())}(n.series)}a&&(s=a.series,t=e,-1==(r=w(s))?(o.push({series:s,auto:t}),p.triggerRedrawOverlay()):t||(o[r].auto=!1));i={pageX:i.pageX,pageY:i.pageY};h.trigger(e,[i,a])}function w(e){for(var i=0;i<o.length;++i)if(o[i].series==e)return i;return-1}p.hooks.processOptions.push(function(e,i){i.series.pie.show&&(i.grid.show=!1,"auto"==i.series.pie.label.show&&(i.legend.show?i.series.pie.label.show=!1:i.series.pie.label.show=!0),"auto"==i.series.pie.radius&&(i.series.pie.label.show?i.series.pie.radius=.75:i.series.pie.radius=1),1<i.series.pie.tilt?i.series.pie.tilt=1:i.series.pie.tilt<0&&(i.series.pie.tilt=0))}),p.hooks.bindEvents.push(function(e,i){e=e.getOptions();e.series.pie.show&&(e.grid.hoverable&&i.unbind("mousemove").mousemove(s),e.grid.clickable&&i.unbind("click").click(t))}),p.hooks.processDatapoints.push(function(e,i,s,t){e.getOptions().series.pie.show&&(e=e,a||(a=!0,r=e.getCanvas(),h=k(r).parent(),g=e.getOptions(),e.setData(function(e){for(var i=0,s=0,t=0,r=g.series.pie.combine.color,a=[],l=0;l<e.length;++l){var n=e[l].data;k.isArray(n)&&1==n.length&&(n=n[0]),k.isArray(n)?!isNaN(parseFloat(n[1]))&&isFinite(n[1])?n[1]=+n[1]:n[1]=0:n=!isNaN(parseFloat(n))&&isFinite(n)?[1,+n]:[1,0],e[l].data=[n]}for(l=0;l<e.length;++l)i+=e[l].data[0][1];for(l=0;l<e.length;++l)(n=e[l].data[0][1])/i<=g.series.pie.combine.threshold&&(s+=n,t++,r=r||e[l].color);for(l=0;l<e.length;++l){n=e[l].data[0][1];(t<2||n/i>g.series.pie.combine.threshold)&&a.push(k.extend(e[l],{data:[[1,n]],color:e[l].color,label:e[l].label,angle:n*Math.PI*2/i,percent:n/(i/100)}))}1<t&&a.push({data:[[1,s]],color:r,label:g.series.pie.combine.label,angle:s*Math.PI*2/i,percent:s/(i/100)});return a}(e.getData()))))}),p.hooks.drawOverlay.push(function(e,i){e.getOptions().series.pie.show&&function(e,i){var s=e.getOptions(),t=1<s.series.pie.radius?s.series.pie.radius:c*s.series.pie.radius;i.save(),i.translate(u,d),i.scale(1,s.series.pie.tilt);for(var r=0;r<o.length;++r)!function(e){if(e.angle<=0||isNaN(e.angle))return;i.fillStyle="rgba(255, 255, 255, "+s.series.pie.highlight.opacity+")",i.beginPath(),1e-9<Math.abs(e.angle-2*Math.PI)&&i.moveTo(0,0);i.arc(0,0,t,e.startAngle,e.startAngle+e.angle/2,!1),i.arc(0,0,t,e.startAngle+e.angle/2,e.startAngle+e.angle,!1),i.closePath(),i.fill()}(o[r].series);b(i),i.restore()}(e,i)}),p.hooks.draw.push(function(e,i){e.getOptions().series.pie.show&&function(e,i){if(!h)return;var l=e.getPlaceholder().width(),n=e.getPlaceholder().height(),s=h.children().filter(".legend").children().width()||0;f=i,a=!1,c=Math.min(l,n/g.series.pie.tilt)/2,d=n/2+g.series.pie.offset.top,u=l/2,"auto"==g.series.pie.offset.left?(g.legend.position.match("w")?u+=s/2:u-=s/2,u<c?u=c:l-c<u&&(u=l-c)):u+=g.series.pie.offset.left;var o=e.getData(),t=0;for(;0<t&&(c*=.95),t+=1,r(),g.series.pie.tilt<=.8&&function(){var e=g.series.pie.shadow.left,i=g.series.pie.shadow.top,s=g.series.pie.shadow.alpha,t=1<g.series.pie.radius?g.series.pie.radius:c*g.series.pie.radius;if(l/2-e<=t||t*g.series.pie.tilt>=n/2-i||t<=10)return;f.save(),f.translate(e,i),f.globalAlpha=s,f.fillStyle="#000",f.translate(u,d),f.scale(1,g.series.pie.tilt);for(var r=1;r<=10;r++)f.beginPath(),f.arc(0,0,t,0,2*Math.PI,!1),f.fill(),t-=r;f.restore()}(),!function(){var s=Math.PI*g.series.pie.startAngle,t=1<g.series.pie.radius?g.series.pie.radius:c*g.series.pie.radius;f.save(),f.translate(u,d),f.scale(1,g.series.pie.tilt),f.save();for(var r=s,e=0;e<o.length;++e)o[e].startAngle=r,i(o[e].angle,o[e].color,!0);if(f.restore(),0<g.series.pie.stroke.width){f.save(),f.lineWidth=g.series.pie.stroke.width,r=s;for(e=0;e<o.length;++e)i(o[e].angle,g.series.pie.stroke.color,!1);f.restore()}return b(f),f.restore(),!g.series.pie.label.show||function(){for(var e=s,a=1<g.series.pie.label.radius?g.series.pie.label.radius:c*g.series.pie.label.radius,i=0;i<o.length;++i){if(o[i].percent>=100*g.series.pie.label.threshold&&!function(e,i,s){if(0==e.data[0][1])return!0;var t=g.legend.labelFormatter,r=g.series.pie.label.formatter;t=t?t(e.label,e):e.label;r&&(t=r(t,e));r=(i+e.angle+i)/2,i=u+Math.round(Math.cos(r)*a),r=d+Math.round(Math.sin(r)*a)*g.series.pie.tilt,t="<span class='pieLabel' id='pieLabel"+s+"' style='position:absolute;top:"+r+"px;left:"+i+"px;'>"+t+"</span>";h.append(t);t=h.children("#pieLabel"+s),s=r-t.height()/2,r=i-t.width()/2;if(t.css("top",s),t.css("left",r),0<0-s||0<0-r||n-(s+t.height())<0||l-(r+t.width())<0)return!1;0!=g.series.pie.label.background.opacity&&(null==(i=g.series.pie.label.background.color)&&(i=e.color),r="top:"+s+"px;left:"+r+"px;",k("<div class='pieLabelBackground' style='position:absolute;width:"+t.width()+"px;height:"+t.height()+"px;"+r+"background-color:"+i+";'></div>").css("opacity",g.series.pie.label.background.opacity).insertBefore(t));return!0}(o[i],e,i))return!1;e+=o[i].angle}return!0}();function i(e,i,s){e<=0||isNaN(e)||(s?f.fillStyle=i:(f.strokeStyle=i,f.lineJoin="round"),f.beginPath(),1e-9<Math.abs(e-2*Math.PI)&&f.moveTo(0,0),f.arc(0,0,t,r,r+e/2,!1),f.arc(0,0,t,r+e/2,r+e,!1),f.closePath(),r+=e,s?f.fill():f.stroke())}}()&&t<10;);10<=t&&(r(),h.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>"));e.setSeries&&e.insertLegend&&(e.setSeries(o),e.insertLegend());function r(){f.clearRect(0,0,l,n),h.children().filter(".pieLabel, .pieLabelBackground").remove()}}(e,i)})},options:e,name:"pie",version:"1.1"})}(jQuery);