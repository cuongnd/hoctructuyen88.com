(function(){var e=function(e){var t=this,n=e;e.require().script("effects/core").done(function(){var e=function(){(function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a=="top"?"outerHeight":"outerWidth"]({margin:!0})/2,o&&r.css("opacity",0).css(a,f=="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s=="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(n)};e(),t.resolveWith(e)})};dispatch("effects/drop").containing(e).to("Foundry/2.1 Modules")})();