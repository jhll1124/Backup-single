// ==UserScript==
// @name              [更换api]番茄全文在线免费读
// @version           20240602
// @description       番茄小说免费网页阅读 不用客户端 可下载小说
// @description:zh-cn 番茄小说免费网页阅读 不用客户端 可下载小说
// @description:en    Fanqien Novel Reading, No Need for a Client, Novels Available for Download
// @license           MIT License
// @match             https://fanqienovel.com/*
// @require           https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @icon              data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNS40Mjg2IDQuODg0MzVDMzkuNjQ2MyA0Ljg4NDM1IDQzLjA4MTYgOC4zMTk3MyA0My4wODE2IDEyLjUzNzRWMzUuNDI4NkM0My4wODE2IDM5LjY0NjMgMzkuNjQ2MyA0My4wODE2IDM1LjQyODYgNDMuMDgxNkgxMi41Mzc0QzguMzE5NzMgNDMuMDgxNiA0Ljg4NDM1IDM5LjY0NjMgNC44ODQzNSAzNS40Mjg2VjEyLjUzNzRDNC44ODQzNSA4LjMxOTczIDguMzE5NzMgNC44ODQzNSAxMi41Mzc0IDQuODg0MzVIMzUuNDI4NlpNMzUuNDI4NiA0SDEyLjUzNzRDNy44MDk1MiA0IDQgNy44MDk1MiA0IDEyLjUzNzRWMzUuNDI4NkM0IDQwLjE1NjUgNy44MDk1MiA0My45NjYgMTIuNTM3NCA0My45NjZIMzUuNDI4NkM0MC4xNTY1IDQzLjk2NiA0My45NjYgNDAuMTU2NSA0My45NjYgMzUuNDI4NlYxMi41Mzc0QzQ0IDcuODA5NTIgNDAuMTU2NSA0IDM1LjQyODYgNFoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJNMjkuMTAxNiA0VjEyLjQwMTRMMzIuMzMyOSAxMC41NjQ2TDM1LjU2NDEgMTIuNDAxNFY0SDI5LjEwMTZaIiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTI0LjAzNCAxOC4yODU4QzE1LjgzNjcgMTguMjg1OCA4LjU1NzgyIDIxLjg1NzIgNCAyNy4zNjc0VjM1LjQyODZDNCA0MC4xNTY1IDcuODA5NTIgNDMuOTY2IDEyLjUzNzQgNDMuOTY2SDM1LjQyODZDNDAuMTU2NSA0My45NjYgNDMuOTY2IDQwLjE1NjUgNDMuOTY2IDM1LjQyODZWMjcuMjY1NEMzOS40MDgyIDIxLjc4OTIgMzIuMTk3MyAxOC4yODU4IDI0LjAzNCAxOC4yODU4Wk0xNC42MTIyIDM3LjY3MzVDMTMuMTE1NiAzNy42NzM1IDEyLjQwMTQgMzcuMTI5MyAxMi40MDE0IDM2LjQxNUMxMi40MDE0IDM1LjcwMDcgMTMuMDgxNiAzNS4xMjI1IDE0LjU3ODIgMzUuMTIyNUMxNi4wNzQ4IDM1LjEyMjUgMTcuODc3NiAzNi4zODEgMTcuODc3NiAzNi4zODFDMTcuODc3NiAzNi4zODEgMTYuMTA4OCAzNy42NzM1IDE0LjYxMjIgMzcuNjczNVpNMTUuODM2NyAzMS4yMTA5QzE0Ljc0ODMgMzAuMTU2NSAxNC42NDYzIDI5LjI3MjIgMTUuMTU2NSAyOC43NjJDMTUuNjY2NyAyOC4yNTE4IDE2LjU1MSAyOC4zMTk4IDE3LjYzOTUgMjkuNDA4MkMxOC43Mjc5IDMwLjQ2MjYgMTkuMDY4IDMyLjYwNTUgMTkuMDY4IDMyLjYwNTVDMTkuMDY4IDMyLjYwNTUgMTYuODkxMiAzMi4yNjU0IDE1LjgzNjcgMzEuMjEwOVpNMjQuMDM0IDMwLjQ2MjZDMjQuMDM0IDMwLjQ2MjYgMjIuNzQxNSAyOC43Mjc5IDIyLjcwNzUgMjcuMTk3M0MyMi43MDc1IDI1LjcwMDcgMjMuMjUxNyAyNC45ODY0IDIzLjk2NiAyNC45ODY0QzI0LjY4MDMgMjQuOTg2NCAyNS4yNTg1IDI1LjY2NjcgMjUuMjU4NSAyNy4xNjMzQzI1LjI5MjUgMjguNjkzOSAyNC4wMzQgMzAuNDYyNiAyNC4wMzQgMzAuNDYyNlpNMzAuMzYwNSAyOS4zNzQyQzMxLjQ0OSAyOC4zMTk4IDMyLjMzMzMgMjguMjUxOCAzMi44NDM1IDI4LjcyNzlDMzMuMzUzNyAyOS4yMzgxIDMzLjI1MTcgMzAuMTIyNSAzMi4xNjMzIDMxLjE3NjlDMzEuMDc0OCAzMi4yMzEzIDI4LjkzMiAzMi41Mzc1IDI4LjkzMiAzMi41Mzc1QzI4LjkzMiAzMi41Mzc1IDI5LjI3MjEgMzAuNDI4NiAzMC4zNjA1IDI5LjM3NDJaTTMzLjM1MzcgMzcuNjczNUMzMS44NTcxIDM3LjY3MzUgMzAuMDg4NCAzNi4zNDcgMzAuMDg4NCAzNi4zNDdDMzAuMDg4NCAzNi4zNDcgMzEuODU3MSAzNS4wODg1IDMzLjM4NzggMzUuMDg4NUMzNC44ODQ0IDM1LjA4ODUgMzUuNTk4NiAzNS43MDA3IDM1LjU2NDYgMzYuMzgxQzM1LjU2NDYgMzcuMTI5MyAzNC44NTAzIDM3LjY3MzUgMzMuMzUzNyAzNy42NzM1WiIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==
// @grant             GM_xmlhttpRequest
// @namespace https://shequ.codemao.cn/user/2856172
// @downloadURL https://update.greasyfork.org/scripts/490331/%5B%E6%9B%B4%E6%8D%A2api%5D%E7%95%AA%E8%8C%84%E5%85%A8%E6%96%87%E5%9C%A8%E7%BA%BF%E5%85%8D%E8%B4%B9%E8%AF%BB.user.js
// @updateURL https://update.greasyfork.org/scripts/490331/%5B%E6%9B%B4%E6%8D%A2api%5D%E7%95%AA%E8%8C%84%E5%85%A8%E6%96%87%E5%9C%A8%E7%BA%BF%E5%85%8D%E8%B4%B9%E8%AF%BB.meta.js
// ==/UserScript==
 
const styleElement = document.createElement("style");
const cssRule = `
    @keyframes hideAnimation {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.75;
      }
      100% {
        opacity: 0;
        display: none;
      }
    }
 
    option:checked {
        background-color: #ffb144;
        color: white;
    }
    `;
 
styleElement.innerHTML = cssRule;
document.head.appendChild(styleElement);
 
function hideElement(ele) {
  ele.style.animation = "hideAnimation 1.5s ease";
  ele.addEventListener("animationend", function () {
    ele.style.display = "none";
  });
}
 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 
const mark=(ele)=>ele.style.boxShadow = "0px 0px 50px rgba(0, 0, 0, 0.2)";
 
(function() {
    'use strict';
    switch(window.location.href.match(/\/([^/]+)\/\d/)[1]){
        case 'reader':
            const div=document.querySelector("#app > div > div > div > div.reader-toolbar > div > div.reader-toolbar-item.reader-toolbar-item-download")
            const text=div.querySelector('div:nth-child(2)')
            mark(div)
            div.querySelector('div:nth-child(2)').innerHTML='处理中'
 
            document.title=document.title.replace(/在线免费阅读_番茄小说官网$/, '')
 
            var currentURL=window.location.href
            setInterval(() => window.location.href !== currentURL ? location.reload() : null, 1000);
 
            const cdiv=document.getElementsByClassName('muye-reader-content noselect')[0]
            cdiv.classList=cdiv.classList[0]
            const url = window.location.href;
            const regex = /\/(\d+)/;
            const match = url.match(regex);
            const extractedId = match[1];
            const apiUrl = `https://fqnovel.pages.dev/content?item_id=${extractedId}`//`https://fqnovel.api-server.onflashdrive.app/content/${extractedId}`;
 
            GM_xmlhttpRequest({
                method: "GET",
                url: apiUrl,
                timeout:5000,
                onload: function(response) {
                    if (response.status === 200) {
                        const content = response.responseText;
                        console.log(content);
                        document.getElementsByClassName('muye-to-fanqie')[0] ?. remove()
                        cdiv.innerHTML=content
                        div.style.backgroundColor='#B0E57C'
                        text.innerHTML='成功'
                        hideElement(div)
                    }
                },
                onerror: function() {
                    div.style.backgroundColor='pink'
                    text.innerHTML='失败'
                    hideElement(div)
                    //console.error(`Fetch error: ${error}`);
                }
            });
     break;
 
     case 'page':
 
            const title = document.querySelector("#app > div > div.muye.muye-page > div > div.page-wrap > div > div.page-header-info > div.info > div.info-name > h1").innerHTML
            var content='使用油猴插件(番茄小说读或下全文)下载\n'+
                        +document.querySelector("#app > div > div.muye.muye-page > div > div.page-wrap > div > div.page-header-info > div.info > div.info-name > h1").innerHTML+'\n'
                        +document.getElementsByClassName('page-header-info')[0].textContent
                        .replace('继续阅读').replace('下载番茄小说').replace('开始阅读').replace('*下载全本')
                       +'\n'+document.querySelector("#app > div > div.muye.muye-page > div > div.page-body-wrap > div > div.page-abstract-content > p").innerHTML
            content=content.replace(/undefined|null|NaN/g,'')
            console.log(content)
 
            sleep(1500).then(()=>{
            document.querySelector("#app > div > div.muye.muye-page > div > div.page-wrap > div > div.page-header-info > div.info > div.download-icon.muyeicon-tomato").remove()
 
            const parentElement = document.querySelector("#app > div > div.muye.muye-page > div > div.page-wrap > div > div.page-header-info > div.info");
            parentElement.style.overflow = 'visible';
            const downloadElement = document.createElement("button");
            downloadElement.className = 'byte-btn byte-btn-default byte-btn-size-large byte-btn-shape-square muye-button download-btn';
            downloadElement.innerHTML='<span>下载全本</span>'
            downloadElement.style.position = "absolute";
            downloadElement.style.left = "320px";
            downloadElement.style.bottom = "0px";
            downloadElement.style.height = "32px";
            downloadElement.style.width = "80px";
            downloadElement.style.fontSize = "15px";
            parentElement.appendChild(downloadElement);

            const books=Array.from(document.getElementsByClassName('chapter-item'))
 
            function next(){
                const ele=books[0].querySelector('a')
                ele.style.border = "3px solid navajowhite"
                ele.style.borderRadius = "5px"
                ele.style.backgroundColor = "navajowhite"
                const url = ele.href;
                console.log(url)
                const regex = /\/(\d+)/;
                const match = url.match(regex);
                const extractedId = match[1];
                const apiURL = `https://fqnovel.pages.dev/txt?item_id=${extractedId}`//`https://fqnovel.api-server.onflashdrive.app/content/${extractedId}`;
 
                
                GM_xmlhttpRequest({
                    method: "GET",
                    url: apiURL,
                    timeout:5000,
                    onload: function(response) {
                        console.log(`response.status: ${response.status}`);
                        if (response.status === 200) {
 
                        try{
                            content+='\n\n'+ele.innerHTML+'\n'
                            const rcontent = response.responseText;
                            content+=rcontent.replace(/<\/p>/g,'\n').replace(/<\w+>/g,'').replace(/<[^>]*>/g , '')
                            ele.style.backgroundColor='#D2F9D1'
                            ele.style.border = "2px solid #D2F9D1"
                            //index+=1
                            books.shift()
                            console.log(books)
                            console.log(books.length)
                            if(!books.length){
                                console.log('执行完成 开始保存')
                                const blob = new Blob([content], { type: `text/plain;` });
                                saveAs(blob, title+".txt");
                                return
                            }
                            else{
                                next()
                            }
                            }
                        catch(e){
                                ele.style.backgroundColor='pink'
 
                                ele.style.border = "2px solid pink"
 
                                next()
                            }
 
                         }
                        else{
                        //hideElement(div)
                        console.error(`Fetch error: retry`);
                        ele.style.backgroundColor='pink'
                        ele.style.border = "2px solid pink"
                        //index+=1
                        next()
                    }
                    },
                    onerror: function() {
                        console.error(`Fetch error: retry`);
                        ele.style.backgroundColor='pink'
                        ele.style.border = "2px solid pink"
                        //index+=1
                        next()
                    }
                    ,
                    ontimeout : function() {
                        console.error(`Fetch error: retry`);
                        ele.style.backgroundColor='pink'
                        ele.style.border = "2px solid pink"
                        //index+=1
                        next()
                    }
                });
             }
             downloadElement.addEventListener('click',next)
             downloadElement.addEventListener('click',()=>{downloadElement.style.display='none'})
 
            })
      break;
 
 
    }
}
)();