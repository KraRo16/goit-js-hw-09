const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(()=>{timerId=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.background=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.0caec2b4.js.map
