(function(b){var a=function(){var d=soundManager;var j;var h;var i=jchat_livesite+"components/com_jchat/sounds/swf/";var c=jchat_livesite+"components/com_jchat/sounds/mp3/";var l=true;var f=true;var m=true;var k=false;var g=null;this.supportVibration=false;this.supportNotification=false;this.setAudioStatus=function(n){l=!!n};this.setWallAudioStatus=function(n){f=!!n};this.setVibrateStatus=function(n){m=!!n;if(this.supportVibration&&m){navigator.vibrate([80,120,80])}};this.setNotificationStatus=function(n){k=!!n;return this};this.requestNotificationPermission=function(){if(this.supportNotification&&Notification.permission!="granted"){Notification.requestPermission()}};this.initPlayEmptySound=function(){var n=d.createSound({id:"msgInit",url:c+"empty.mp3"});d.play("msgInit")};this.playMessageAlert=function(n){var o=d.createSound({id:"msgAlert",url:c+"alert.mp3"});if(!o.playState){d.play("msgAlert")}if(this.supportVibration&&m){navigator.vibrate([80,120,80])}if(this.supportNotification&&k){this.injectNotification(n.id,n.fromuser+jchat_privatemsg_notification,n.message,n.avatar,jchat_notifications_time)}};this.playWallMessageAlert=function(n){var o=d.createSound({id:"msgWallAlert",url:c+"bonk.mp3"});if(!o.playState){d.play("msgWallAlert")}if(this.supportVibration&&m){navigator.vibrate(80)}if(this.supportNotification&&k){this.injectNotification(n.id,n.fromuser+jchat_wall_notification,n.message,n.avatar,jchat_notifications_public_time)}};this.playSentFile=function(n){var o=d.createSound({id:"msgSentFile",url:c+"sent_file.mp3"});if(!o.playState){d.play("msgSentFile")}if(this.supportVibration&&m){navigator.vibrate([80,120,80])}if(n&&n.self==0&&this.supportNotification&&k){this.injectNotification(n.id,n.fromuser+jchat_sentfile_notification,n.message,n.avatar,jchat_notifications_time)}};this.playCompleteFile=function(){var n=d.createSound({id:"msgCompleteFile",url:c+"downloaded_file.mp3"});if(!n.playState){d.play("msgCompleteFile")}};this.playStartWebrtcCall=function(o){var n=this;var p=d.createSound({id:"webrtcStartCall",url:c+"start_webrtc_call.mp3"});if(!o){if(!p.playState&&l){d.play("webrtcStartCall",{onfinish:function(){n.playWaitingWebrtcAnswer()}})}}else{d.stop("webrtcStartCall")}};this.playAcceptWebrtcCall=function(){var n=d.createSound({id:"webrtcAcceptCall",url:c+"accept_webrtc_call.mp3"});if(!n.playState&&l){d.play("webrtcAcceptCall")}};this.playEndWebrtcCall=function(){var n=d.createSound({id:"webrtcEndCall",url:c+"end_webrtc_call.mp3"});if(!n.playState&&l){d.play("webrtcEndCall")}};this.playWaitingWebrtcAnswer=function(n){var o=d.createSound({id:"webrtcWaitingAnswer",url:c+"waiting_webrtc_answer.mp3",loops:999});if(!n){if(!o.playState&&l){d.play("webrtcWaitingAnswer")}}else{if(o.playState){d.stop("webrtcWaitingAnswer")}}};this.playRingingWebrtcCall=function(n,p){var o=d.createSound({id:"webrtcRingingCall",url:c+"ringtones/"+p,loops:999});if(!n){if(!o.playState&&l){d.play("webrtcRingingCall")}if(this.supportVibration&&m){j=setInterval(function(){navigator.vibrate(200)},500)}if(this.supportNotification&&k){this.injectNotification("webrtcRingingCall",jchat_webrtc_notification_ringing,"",jchat_livesite+"components/com_jchat/images/default/skype_call.png",jchat_notifications_time)}}else{if(o.playState){d.stop("webrtcRingingCall")}if(j){clearInterval(j)}}};this.playConferencePeerCall=function(){var n=d.createSound({id:"conferencePeerCall",url:c+"conference_peer_call.mp3"});if(!n.playState&&l){d.play("conferencePeerCall")}};this.injectNotification=function(p,r,q,o,s){q=jchatStripTags(q,false,false,true);var n=function(){try{g=new Notification(r,{body:q,tag:(p),icon:o});if(h){clearTimeout(h)}if(!!parseInt(s)){h=setTimeout(function(){if(g){g.close();g=null}},s*1000)}}catch(t){}};if(g){g.close();g.onclose=function(t){n()}}else{n()}};(function e(){d.debugMode=false;d.url=i;navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate||null;this.supportVibration=!!navigator.vibrate;if("Notification" in window&&window.Notification){this.supportNotification=true}}).call(this)};b(function(){window.JChatNotifications=new a()})})(jQuery);