jQuery(function(c){var j=c("#banner #browser a");if(j.length==0){return}var e=c.pixelentity&&c.pixelentity.kenburns&&c("#banner").attr("data-animate");var a=["data-zoom","data-align","data-pan","data-duration","data-delay"];var s=c("#banner #slides");var f=s.width();var t=s.height();s.width(f).height(t).css("overflow","hidden").empty();var k=false;var m=false;var g=-1;var d;var v=c('<div class="galleryHilight"></div>').hide();c("#banner").append(v);function q(h){s.find("span:not(:last)").remove()}function b(h,w){var n=c(w).find("img").data("kenburns");if(n){n.stop()}}function u(w){var h=w.currentTarget;k=false;v.show().fadeTo(0,0.75).offset(d.offset());var y=c("<span>");y.width(f).height(t).css("position","absolute").fadeOut(0).append(h).fadeIn(1000,q);if(e){s.find("span").each(b);h=c(h);h.kenburns({zoom:h.attr("data-zoom"),align:h.attr("data-align"),pan:h.attr("data-pan"),duration:h.attr("data-duration")})}s.append(y[0]);var n=h.attr("data-delay");if(n){g=parseFloat(n)*4}}function o(n){if(k){return}k=true;var w=c(n.currentTarget);j.removeClass("active");w.addClass("active");d=w.find("img:eq(0)");var h=c("<img/>");h.load(u);c.each(a,function(y,z){h.attr(z,w.attr(z))});h.attr("src",w.attr("href"));return false}function p(){var h=parseInt(j.filter(".active").eq(0).attr("id"));h=(h+1)%l;j.eq(h).trigger("click")}function x(){if(m||g<0){return}if(g==0){p()}g--}function r(h){m=(h.type=="mouseenter")}var i=0;j.click(o).each(function(){this.id=i++});var l=i;j.filter(".active").eq(0).trigger("click");c("#banner").bind("mouseenter",r).bind("mouseleave",r);setInterval(x,250);p()});