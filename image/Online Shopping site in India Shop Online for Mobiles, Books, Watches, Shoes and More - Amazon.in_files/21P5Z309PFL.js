'use strict';mix_d("DealsDiscoverySolitaireCards__deals-shoveler-v2:deals-shoveler-v2__e_t3wBsF","exports tslib @c/dom @c/aui-utils @p/a-truncate @p/gw-event-manager @p/A @c/metrics".split(" "),function(p,q,r,t,z,A,B,u){function l(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var m=l(r),C=l(z),D=l(A),g=l(B),E=function(a){return 9<a?String(a):"0"+a},v=function(a){if(0>=a)return"00:00";var b=Math.floor(a/36E5);a=[Math.floor(a/6E4%60),Math.floor(a/1E3%60)];0<b&&a.unshift(b);return a.map(E).join(":")},
G=function(a){Array.prototype.slice.call(a.getElementsByClassName("badge-countdown-timer")).forEach(function(b){(new F(b)).start()})},F=function(){function a(b){this.timerElement=b;this.msToEvent=parseInt(b.dataset.targetTime,10);this.timerElement.innerText=v(this.msToEvent)}a.prototype.start=function(){var b=this;isNaN(this.msToEvent)||(this.counterStartTime=Date.now(),this.counterInterval=t.interval(function(){return b.updateTime()},500))};a.prototype.updateTime=function(){var b=Date.now()-this.counterStartTime;
0>=this.msToEvent-b&&clearInterval(this.counterInterval);this.timerElement.innerText=v(this.msToEvent-b)};return a}(),H=function(a){return 9<a?String(a):"0".concat(a)},w=function(a){if(0>=a)return"00:00";var b=Math.floor(a/36E5);a=[Math.floor(a/6E4%60),Math.floor(a/1E3%60)];0<b&&a.unshift(b);return a.map(H).join(":")},J=function(a){var b=Array.prototype.slice.call(a.querySelectorAll("[data-component='badge-countdown-timer']")).map(I);return function(){return b.forEach(function(e){return e()})}},K=
function(a){Array.prototype.slice.call(a.querySelectorAll("[data-component='dui-badge']")).forEach(function(b){b&&32<b.offsetHeight&&(null===b||void 0===b?void 0:b.setAttribute("data-align","vertical"))})},I=function(a){var b=Number(a.dataset.targetTime);if(Number.isNaN(b))return function(){};a.innerText=w(b);var e=Date.now(),c=t.interval(function(){var d=Date.now()-e;d=b-d;0>=d?clearInterval(c):a.innerText=w(d)},500);return function(){return clearInterval(c)}},L=function(a){Array.prototype.slice.call(a.getElementsByClassName("_deals-shoveler-v2_style_badgeContainer__2V4ps")).forEach(function(b){var e,
c,d,f,h=32<(null!==(c=null===(e=null===b||void 0===b?void 0:b.getBoundingClientRect())||void 0===e?void 0:e.height)&&void 0!==c?c:0)?"_deals-shoveler-v2_style_badgeTwoLineContainer__238Xf":"_deals-shoveler-v2_style_badgeOneLineContainer__SDZkK";null===(d=null===b||void 0===b?void 0:b.classList)||void 0===d?void 0:d.remove("_deals-shoveler-v2_style_badgeLayoutCheck__DLY5W");null===(f=null===b||void 0===b?void 0:b.classList)||void 0===f?void 0:f.add(h)})},M=function(a){Array.prototype.slice.call(a.getElementsByClassName("a-truncate")).forEach(function(b){return C["default"].get(r.unscope(b)).update()})},
x={},n=function(a,b,e){void 0===b&&(b="");void 0===e&&(e=1);b=a+b;x.hasOwnProperty(b)||(x[b]=!0,u.count(a,(u.count(a)||0)+e))},P=function(a){n(g["default"].capabilities.mobile?"Card:EERU:SharedLib:mobile:render":"Card:EERU:SharedLib:desktop:render");var b=function(c,d){c={$event:{preventDefault:g["default"].$.noop,stopPropagation:g["default"].$.noop},$target:c.getContent().find('[data-a-tab-name="'+d+'"]'),data:{name:"energyEfficiencyTabSet"}};g["default"].trigger("a:declarative:a-tabs:click",c)},
e=function(c,d){var f=c&&c.$event,h=c&&c.data||{},N=h.activeTabName,O=h.modalHeight,y=h.name;f&&f.preventDefault&&f.preventDefault();f&&f.stopPropagation&&f.stopPropagation();f=d.get(y);f||(g["default"].on("a:popover:beforeShow:"+y,function(k){k.popover&&k.popover.getContent&&(k=k.popover.getContent(),k.find(".a-manually-loaded").parent().css("min-height",O),g["default"].loadDescendantImagesManually(k))}),f=d.create(c.$target,h));f.show();b(f,N)};a.when("a-secondary-view").execute("RegisterEnergyEfficiencyEventMobile",
function(c){g["default"].declarative("card-energy-efficiency-secondary-view","click",function(d){n("Card:EERU:SharedLib:mobile:click",d&&d.data&&d.data.name||"");e(d,c)})});a.when("a-modal").execute("RegisterEnergyEfficiencyEventDesktop",function(c){g["default"].declarative("card-energy-efficiency-modal","click",function(d){n("Card:EERU:SharedLib:desktop:click",d&&d.data&&d.data.name||"");e(d,c)})})},Q=function(a){a.when("ready").execute("EEBadgeProductFicheResize",function(b){var e=g["default"].$;
e(".energyEfficiencyContainer").each(function(c,d){c=e(d).find(".energyEfficiencyProductFicheLabel").first();d=e(d).find("svg").first();c.parent().outerHeight()>d.outerHeight()&&(c.removeClass("a-size-small"),c.addClass("a-size-micro"),c.parent().outerHeight()>d.outerHeight()&&c.parent().css("line-height","10px"))})})};p._operationNames=[];p.card=function(){return q.__awaiter(void 0,void 0,void 0,function(){var a;return q.__generator(this,function(b){a=m["default"].cardRoot.getAttribute("id");D["default"].whenAll([a+
"-lazy-cards-loaded"],function(e){void 0===e&&(e=m["default"].cardRoot);var c=window.P;P(c);Q(c);M(e);null!==m["default"].cardRoot.querySelector("[data-component='dui-badge']")?(K(e),J(e)):(G(e),L(e))});return[2]})})}});
