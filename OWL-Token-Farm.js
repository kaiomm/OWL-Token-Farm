// ==UserScript==
// @name         OWL Token Farmer
// @namespace    https://github.com/kaiomm
// @version      0.1.1
// @description  autofarmer for OWL tokens
// @author       kaiomm
// @match        https://overwatchleague.com/*
// @updateURL    https://raw.githubusercontent.com/kaiomm/OWL-Token-Farm/master/OWL-Token-Farm.js
// ==/UserScript==

(function() {
    window.addEventListener('load', function () {
        var iframe = document.getElementById("home-player-id");
        var str = iframe.src;
        str = str.replace("autoplay=0","autoplay=1");
        iframe.src = str;
        setTimeout(function(){
            window.location.reload(1);
        }, 3600000);
    });
})();
