// ==UserScript==
// @name         OWL Token Farmer
// @namespace    https://github.com/kaiomm/OWL-Token-Farm
// @version      0.3
// @description  autofarmer for OWL tokens
// @author       kaiomm
// @match        https://overwatchleague.com/*
// @downloadURL    https://github.com/kaiomm/OWL-Token-Farm/raw/master/OWL-Token-Farm.js
// @updateURL    https://github.com/kaiomm/OWL-Token-Farm/raw/master/OWL-Token-Farm.js
// ==/UserScript==

(function() {
    window.addEventListener('load', function () {
        var iframe = document.getElementById("home-player-id");
        if(iframe){
            var str = iframe.src;
            str = str.replace("autoplay=0","autoplay=1");
            iframe.src = str;
            setTimeout(function(){
                window.location.reload(1);
            }, 3600000);
        } else {
            var time = document.getElementById("__next").children[0].children[0].children[2].children[0].children[1].children[0].children[0].innerText
            if(time){
                var millis = Number(time.split(':')[0])*3600000 + Number(time.split(':')[1])*60000 + Number(time.split(':')[2])*1000
                setTimeout(function(){
                    window.location.reload(1)
                }, millis)
            } else{
                setTimeout(function(){
                    window.location.reload(1)
                }, 1800)
            }
        }
    });
})();
