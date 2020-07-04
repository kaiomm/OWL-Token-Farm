// ==UserScript==
// @name         OWL Token Farmer
// @namespace    https://raw.githubusercontent.com/kaiomm/OWL-Token-Farm/master/OWL-Token-Farm.js
// @version      0.2
// @description  refreshes page and autoplay OWL stream
// @author       kaiomm
// @match        https://overwatchleague.com/en-us/
// @grant        none
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
