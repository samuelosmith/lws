(function(a){a.fn.vid=function(){var b={type:"youtube",videoId:"4wGR4-SeuJ0",autoPlay:false,loop:false,hq:true,chromeless:false,resize:true,bgcolor:"#000000"};if(arguments[0]){a.extend(b,arguments[0])}this.each(function(){var f=a(this);var d="";var c={};switch(b.type){case"youtube":d+="youtube.com/"+(b.chromeless?"apiplayer":"v/"+b.videoId)+"?enablejsapi=1&version=3&autoplay="+(b.autoPlay?"1":"0")+"&loop="+(b.loop?"1":"0")+(b.hq?"&hd=1":"");break;case"vimeo":d+="vimeo.com/moogaloop.swf?clip_id="+b.videoId+"&autoplay="+(b.autoPlay?"1":"0")+"&js_api=1"+(b.hq?"":"&hd_off=1")+"&loop="+(b.loop?"1":"0");break;case"dailymotion":d+="dailymotion.com/swf/"+b.videoId+"?enablejsapi=1&autoplay="+(b.autoPlay?"1":"0");break;case"1click2fame":d+="1click2fame.com/flash/Player.swf?videoID="+b.videoId+"&autoPlay="+b.autoPlay;break}f.flash({swf:"http://"+d,height:f.height(),width:f.width(),bgcolor:b.bgcolor,flashvars:c});if(b.resize){a(this).parent().resize(function(){var e=[a("object",f),a("embed",f)];a(e).each(function(){a(this).attr("height",f.height());a(this).attr("width",f.width())})})}});return this}})(jQuery);(function(g,h,m){var f="object",b=true;function l(o,n){var e=(o[0]||0)-(n[0]||0);return e>0||(!e&&o.length>0&&l(o.slice(1),n.slice(1)))}function c(o){if(typeof o!=f){return o}var e=[],p="";for(var n in o){if(typeof o[n]==f){p=c(o[n])}else{p=[n,(b)?encodeURI(o[n]):o[n]].join("=")}e.push(p)}return e.join("&")}function d(o){var e=[];for(var n in o){if(o[n]){e.push([n,'="',o[n],'"'].join(""))}}return e.join(" ")}function k(o){var e=[];for(var n in o){e.push(['<param name="',n,'" value="',c(o[n]),'" />'].join(""))}return e.join("")}try{var j=m.description||(function(){return(new m("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}())}catch(i){j="Unavailable"}var a=j.match(/\d+/g)||[0];g[h]={available:a[0]>0,activeX:m&&!m.name,version:{original:j,array:a,string:a.join("."),major:parseInt(a[0],10)||0,minor:parseInt(a[1],10)||0,release:parseInt(a[2],10)||0},hasVersion:function(n){var e=(/string|number/.test(typeof n))?n.toString().split("."):(/object/.test(typeof n))?[n.major,n.minor]:n||[0,0];return l(a,e)},encodeParams:true,expressInstall:"expressInstall.swf",expressInstallIsActive:false,create:function(o){var e=this;if(!o.swf||e.expressInstallIsActive||(!e.available&&!o.hasVersionFail)){return false}if(!e.hasVersion(o.hasVersion||1)){e.expressInstallIsActive=true;if(typeof o.hasVersionFail=="function"){if(!o.hasVersionFail.apply(o)){return false}}o={swf:o.expressInstall||e.expressInstall,height:137,width:214,flashvars:{MMredirectURL:location.href,MMplayerType:(e.activeX)?"ActiveX":"PlugIn",MMdoctitle:document.title.slice(0,47)+" - Flash Player Installation"}}}attrs={data:o.swf,type:"application/x-shockwave-flash",id:o.id||"flash_"+Math.floor(Math.random()*999999999),width:o.width||320,height:o.height||240,style:o.style||""};b=typeof o.useEncode!=="undefined"?o.useEncode:e.encodeParams;o.movie=o.swf;o.wmode=o.wmode||"opaque";o.bgcolor=o.bgcolor||"#FFFFFF";delete o.fallback;delete o.hasVersion;delete o.hasVersionFail;delete o.height;delete o.id;delete o.swf;delete o.useEncode;delete o.width;var n=document.createElement("div");n.innerHTML=["<object ",d(attrs),">",k(o),"</object>"].join("");return n.firstChild}};g.fn[h]=function(e){var n=this.find(f).andSelf().filter(f);if(/string|object/.test(typeof e)){this.each(function(){var p=g(this),o;e=(typeof e==f)?e:{swf:e};e.fallback=this;o=g[h].create(e);if(o){p.children().remove();p.html(o)}})}if(typeof e=="function"){n.each(function(){var o=this,p="jsInteractionTimeoutMs";o[p]=o[p]||0;if(o[p]<660){if(o.clientWidth||o.clientHeight){e.call(o)}else{setTimeout(function(){g(o)[h](e)},o[p]+66)}}})}return n}}(jQuery,"flash",navigator.plugins["Shockwave Flash"]||window.ActiveXObject));