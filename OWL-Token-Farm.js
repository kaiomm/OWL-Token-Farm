// ==UserScript==
// @name         OWL Token Farmer
// @namespace    https://github.com/kaiomm/OWL-Token-Farm
// @version      0.1.1
// @description  autofarmer for OWL tokens
// @author       kaiomm
// @match        https://overwatchleague.com/*
// @downloadURL    https://github.com/kaiomm/OWL-Token-Farm/raw/master/OWL-Token-Farm.js
// @updateURL    https://github.com/kaiomm/OWL-Token-Farm/raw/master/OWL-Token-Farm.js
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
