$(function(){var e=function(){var e=$(this).val();""===e?$(this).removeClass("has-value"):$(this).addClass("has-value")};$(".input-group input").each(e).focusout(e)}),$(function(){var e="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",t="animated bounceInDown",a="animated zoomOut fadeOut";$(".ut-modal-trigger").click(function(){var a="#"+$(this).data("ut-modal-target");$(a).addClass("ut-modal-show animated fadeIn"),$("body").addClass("ut-modal-no-scroll"),$(a).children(".ut-modal-outer").addClass(t).one(e,function(){$(a).children(".ut-modal-outer").removeClass(t),$(a).removeClass("animated fadeIn")}),$(".root-body").addClass("ut-modal-blur")}),$(".ut-modal-close").click(function(){var t="#"+$(this).data("ut-modal-target");$(t).addClass("animated fadeOut"),$(t).children(".ut-modal-outer").addClass(a).one(e,function(){$(t).children(".ut-modal-outer").removeClass(a),$(t).removeClass("ut-modal-show animated fadeOut")}),$("body").removeClass("ut-modal-no-scroll"),$(".root-body").removeClass("ut-modal-blur")})}),function(e){"use strict";e.fn.fitVids=function(t){var a={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>",r.appendChild(o.childNodes[1])}return t&&e.extend(a,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];a.customSelector&&t.push(a.customSelector);var r=".fitvidsignore";a.ignore&&(r=r+", "+a.ignore);var i=e(this).find(t.join(","));i=i.not("object object"),i=i.not(r),i.each(function(t){var a=e(this);if(!(a.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&a.parent("object").length||a.parent(".fluid-width-video-wrapper").length)){a.css("height")||a.css("width")||!isNaN(a.attr("height"))&&!isNaN(a.attr("width"))||(a.attr("height",9),a.attr("width",16));var i="object"===this.tagName.toLowerCase()||a.attr("height")&&!isNaN(parseInt(a.attr("height"),10))?parseInt(a.attr("height"),10):a.height(),o=isNaN(parseInt(a.attr("width"),10))?a.width():parseInt(a.attr("width"),10),n=i/o;if(!a.attr("id")){var s="fitvid"+t;a.attr("id",s)}a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*n+"%"),a.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);var LodestoneAPI={logEnabled:!1,paths:{sync:"http://xivsync.com",search:"/search/character",character:"/character/get"},init:function(){LodestoneAPI.log("init()"),"undefined"==typeof window.jQuery&&console.error("Please include https://jquery.com/, this API requires it.")},get:function(e,t,a){LodestoneAPI.log("get",e),LodestoneAPI.log("get",t),$.ajax({url:e,data:t,crossDomain:!0,dataType:"json",success:function(e){return LodestoneAPI.log("get > return",e),e.ok?a(e.data):(console.error("XIVSync API Error: "+e.msg),a(!1))},error:function(t,r,i){return console.error("Error attempting to ajax to: "+e),console.error(r),console.error(i),console.error("Please open an issue on Github: https://github.com/viion/XIVPads-LodestoneAPI"),a(!1)}})},log:function(e,t){if(LodestoneAPI.logEnabled){if(t)return void console.log("[LODESTONE-API]",e,t);console.log("[LODESTONE-API]",e)}},Search:{Character:function(e,t,a,r){if(!a||"function"!=typeof a)return void console.error("Callback function not defined.");if(!e)return console.error("Name or ID is empty"),a(!1);if($.isNumeric(e)){LodestoneAPI.log("search > character > isNumeric = true =",e);var i=LodestoneAPI.paths.sync+LodestoneAPI.paths.character,o={lodestone:e};LodestoneAPI.get(i,o,function(e){return a(0==e.length?!1:e)})}else if(!r){LodestoneAPI.log("search > character > isNumeric = false =",e);var i=LodestoneAPI.paths.sync+LodestoneAPI.paths.search,o={name:e,server:t};LodestoneAPI.get(i,o,function(r){if(0==r.length)return a(!1);for(var i in r){var o=r[i];return o.name==e&&o.world==t&&$.isNumeric(o.i),LodestoneAPI.log("search > character > recurrsion with id:",o.id),void LodestoneAPI.Search.Character(o.id,null,a,!0)}return LodestoneAPI.log("search > character > no results for: ",e),a(!1)})}}}};LodestoneAPI.init(),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(e){function t(){var t=o.settings;if(t.autoDispose&&!e.contains(document.documentElement,this))return e(this).timeago("dispose"),this;var n=a(this);return isNaN(n.datetime)||(0==t.cutoff||Math.abs(i(n.datetime))<t.cutoff)&&e(this).text(r(n.datetime)),this}function a(t){if(t=e(t),!t.data("timeago")){t.data("timeago",{datetime:o.datetime(t)});var a=e.trim(t.text());o.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(a.length>0)||o.isTime(t)&&t.attr("title")||t.attr("title",a)}return t.data("timeago")}function r(e){return o.inWords(i(e))}function i(e){return(new Date).getTime()-e.getTime()}e.timeago=function(t){return r(t instanceof Date?t:"string"==typeof t?e.timeago.parse(t):"number"==typeof t?new Date(t):e.timeago.datetime(t))};var o=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function a(a,i){var o=e.isFunction(a)?a(i,t):a,n=r.numbers&&r.numbers[i]||i;return o.replace(/%d/i,n)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var r=this.settings.strings,i=r.prefixAgo,o=r.suffixAgo;if(this.settings.allowFuture&&0>t&&(i=r.prefixFromNow,o=r.suffixFromNow),!this.settings.allowPast&&t>=0)return this.settings.strings.inPast;var n=Math.abs(t)/1e3,s=n/60,d=s/60,c=d/24,l=c/365,u=45>n&&a(r.seconds,Math.round(n))||90>n&&a(r.minute,1)||45>s&&a(r.minutes,Math.round(s))||90>s&&a(r.hour,1)||24>d&&a(r.hours,Math.round(d))||42>d&&a(r.day,1)||30>c&&a(r.days,Math.round(c))||45>c&&a(r.month,1)||365>c&&a(r.months,Math.round(c/30))||1.5>l&&a(r.year,1)||a(r.years,Math.round(l)),h=r.wordSeparator||"";return void 0===r.wordSeparator&&(h=" "),e.trim([i,u,o].join(h))},parse:function(t){var a=e.trim(t);return a=a.replace(/\.\d+/,""),a=a.replace(/-/,"/").replace(/-/,"/"),a=a.replace(/T/," ").replace(/Z/," UTC"),a=a.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),a=a.replace(/([\+\-]\d\d)$/," $100"),new Date(a)},datetime:function(t){var a=o.isTime(t)?e(t).attr("datetime"):e(t).attr("title");return o.parse(a)},isTime:function(t){return"time"===e(t).get(0).tagName.toLowerCase()}});var n={init:function(){var a=e.proxy(t,this);a();var r=o.settings;r.refreshMillis>0&&(this._timeagoInterval=setInterval(a,r.refreshMillis))},update:function(a){var r=a instanceof Date?a:o.parse(a);e(this).data("timeago",{datetime:r}),o.settings.localeTitle&&e(this).attr("title",r.toLocaleString()),t.apply(this)},updateFromDOM:function(){e(this).data("timeago",{datetime:o.parse(o.isTime(this)?e(this).attr("datetime"):e(this).attr("title"))}),t.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};e.fn.timeago=function(e,t){var a=e?n[e]:n.init;if(!a)throw new Error("Unknown function name '"+e+"' for timeago");return this.each(function(){a.call(this,t)}),this},document.createElement("abbr"),document.createElement("time")}),$(function(){var e=$("#h-character-name").val()?$("#h-character-name").val():"Shinichi Sagara",t=$("#h-character-server").val()?$("#h-character-server").val():"Adamantoise";LodestoneAPI.Search.Character(e,t,function(e){e?(console.log(e),$(".character-name").append(e.name),$(".character-joblv").append("<p>Lv "+e.activeLevel+" "+e.activeJob+"</p>"),$(".character-portrait").append("<img src="+e.portrait+"/>"),$(".character-gcinfo").prepend("<h4>"+e.freeCompany+"</h4>"),$.each(e.grandCompany,function(e,t){$(".character-gcinfo").append("<p><span><img src='"+t.icon+"'/></span><span> "+t.rank+"</span></p>"),console.log(t.company+t.rank)}),$(".character-class-wrap").prepend("<h4>Classes</h4>"),$.each(e.classjobs,function(e,t){$(".character-classes").append("<div class='character-class'><p><span>"+t.level+"</span>"+t.name+"</p>")}),$(".character-minion-wrap").prepend("<h4>Minions</h4>"),$.each(e.minions,function(e,t){$(".character-minions").append("<img src='"+t.icon+"' alt='"+t.name+"'/>")}),$(".character-mount-wrap").prepend("<h4>Mounts</h4>"),$.each(e.mounts,function(e,t){$(".character-mounts").append("<img src='"+t.icon+"' alt='"+t.name+"'/>")}),$(".character-portrait img").one("load",function(){$(".lodestone-wrapper").addClass("animated bounceInRight show")})):console.log("Couldn't find it bro!")})}),$(function(){$.getJSON("https://www.reddit.com/r/ffxiv/new/.json",function(e){$.each(e.data.children.slice(0,10),function(e,t){console.log(t);var a=t.data.title,r=$.timeago(new Date(1e3*t.data.created_utc)),i=$("<div/>").html(t.data.selftext_html).text();if("image"==t.data.post_hint)var o=$('<div class="article-media" />').append('<a href="'+t.data.url+'" target="_blank"><img src="'+t.data.url+'" /></a>');else if("rich:video"==t.data.post_hint)var o=$('<div class="article-media" />').append($("<div/>").html(t.data.media.oembed.html).text());else if("link"==t.data.post_hint)var o=$('<div class="article-media" />').append('<a href="'+t.data.url+'" target="_blank"><img src="'+t.data.preview.images[0].source.url+'" /></a>');else var o="";$('<div class="rss-article" />').append($('<div class="article-title" />').append($('<h4 class="article-heading">').append(a)).append($("<small>").append(r))).append($('<div class="article-body" />').append(i).append(o)).append($('<div class="article-footer" />').append('Submitted by: <a href="https://www.reddit.com/user/'+t.data.author+'" target="_blank">'+t.data.author+"</a> | ").append('<a href="https://www.reddit.com'+t.data.permalink+'" target="_blank">Link to post</a> | ').append('<a href="'+t.data.url+'" target="_blank">External link</a>')).append("<hr>").appendTo(".rss-articles-wrap")}),$(".article-body:empty").remove(),$(".article-title").click(function(){$(this).next(".article-body").slideToggle()})})}),$(function(){$(".rss-container").addClass("animated bounceInUp show"),$(".padding-wrapper iframe").addClass("animated bounceInDown show"),$(".character-class-wrap").click(function(){$(".character-classes").slideToggle("slow")}),$(".character-minion-wrap").click(function(){$(".character-minions").slideToggle("slow")}),$(".character-mount-wrap").click(function(){$(".character-mounts").slideToggle("slow")}),$(".article-video").fitVids()});