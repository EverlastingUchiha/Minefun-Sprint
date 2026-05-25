// ==UserScript==
// @name         Minefun.io Sprint
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  Hold W to sprint automatically
// @author       Itz_Krishna AKA Everlasting AKA EverlastingUchiha
// @match        *://*.minefun.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=minefun.io
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const SPRINT_KEY = 16;

    function sendShift(type) {
        const ev = new KeyboardEvent(type, {
            key: 'Shift',
            keyCode: SPRINT_KEY,
            code: 'ShiftLeft',
            which: SPRINT_KEY,
            shiftKey: (type === 'keydown'),
            bubbles: true,
            cancelable: true
        });
        window.dispatchEvent(ev);
        const c = document.querySelector('canvas');
        if (c) c.dispatchEvent(ev);
    }

    function onKey(e) {
        let tag = document.activeElement?.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (e.key !== 'w' && e.key !== 'W') return;
        sendShift(e.type);
    }

    window.addEventListener('keydown', onKey, true);
    window.addEventListener('keyup', onKey, true);
})();
