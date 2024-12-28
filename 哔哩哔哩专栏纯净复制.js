// ==UserScript==
// @name         哔哩哔哩专栏纯净复制
// @namespace    https://greasyfork.org/zh-CN/scripts/428024-哔哩哔哩专栏纯净复制
// @version      0.2
// @description  哔哩哔哩专栏纯净复制，去除作者、链接和出处
// @author       beibeibeibei
// @match        *.bilibili.com/read/*
// @grant        GM_setClipboard
// @require      https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js
// ==/UserScript==

(function() {
  'use strict';
  $(document).keyup(function(event){
      if(event.ctrlKey && event.keyCode==67){
          let text = window.getSelection().toString();
          GM_setClipboard(text);
      }
  });
})();
