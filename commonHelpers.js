import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f,i as r}from"./assets/vendor-651d7991.js";const i=document.querySelector('input[id="datetime-picker"]'),n=document.querySelector("button[data-start]"),h=document.querySelector("span[data-days]"),p=document.querySelector("span[data-hours]"),y=document.querySelector("span[data-minutes]"),S=document.querySelector("span[data-seconds]");let a=null;n.disabled=!0;let u=null;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=new Date?r.error({position:"topRight",message:"Please choose a date in the future"}):(n.disabled=!1,u=t[0])}};f(i,g);function C(t){const d=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:l,seconds:m}}n.addEventListener("click",b);function o(t){return String(t).padStart(2,"0")}function b(){n.disabled=!0,i.disabled=!0,a=setInterval(()=>{const t=Date.now();let s=u-t;if(s>=0){let e=C(s);h.textContent=o(e.days),p.textContent=o(e.hours),y.textContent=o(e.minutes),S.textContent=o(e.seconds)}else r.show({message:"CountDown finished",messageColor:"#f44566",messageSize:"18px",backgroundColor:"#ffffff",position:"topRight",timeout:1e3}),clearInterval(a)},1e3)}
//# sourceMappingURL=commonHelpers.js.map