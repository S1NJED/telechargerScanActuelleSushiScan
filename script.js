// ==UserScript==
// @name         Telecharger scan sushiscan
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Telecharge la page qui est affiché pour faciliter les choses
// @author       S1NJED
// @match        https://sushiscan.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sushiscan.net
// @grant        none
// ==/UserScript==

function buttonOnClick() {
    const currentScanUrl = document.querySelector("img.ts-main-image").getAttribute('src');

    const link = document.createElement('a');
    link.href = currentScanUrl;
    link.target = "_blank";

    const arr = currentScanUrl.split('/');
    link.download = arr[arr.length - 1];

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

(function() {
    'use strict';
    const mainDiv = document.querySelector("div.entry-content");
    const downloadButton = document.createElement('button');
    downloadButton.textContent = "Telecharge page actuelle";
    downloadButton.style.padding = "10px";
    downloadButton.style.margin = "15px 45% 15px 45%";
    downloadButton.style.cursor = "pointer";

    mainDiv.insertBefore(downloadButton, mainDiv.firstChild);

    downloadButton.addEventListener('click', buttonOnClick);


})();