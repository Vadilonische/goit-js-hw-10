import"./assets/styles-a34d1e37.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";const u=document.querySelector("#datetime-picker"),t=document.querySelector("button"),o=document.querySelectorAll(".value");t.disabled=!0;u.disabled=!1;let c;function S(e){p.error({title:"Error",message:e,position:"topCenter"})}const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){c=e[0],c<f.defaultDate?(S("Please choose a date in the future"),t.disabled=!0):(t.disabled=!1,u.disabled=!0)}};y("#datetime-picker",f);function r(e){const a=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),b=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:h,seconds:b}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));function n(e){return String(e).padStart(2,"0")}t.addEventListener("click",v);function v(){t.disabled=!0,u.disabled=!0;const e=setInterval(()=>{const s=c-new Date;if(s<1){clearInterval(e);return}const{days:d,hours:l,minutes:a,seconds:i}=r(s);o[0].textContent=n(d),o[1].textContent=n(l),o[2].textContent=n(a),o[3].textContent=n(i)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
