import"./assets/styles-ba4b53f0.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";document.querySelector("#datetime-picker");const e=document.querySelector("button"),o=document.querySelectorAll(".value");e.disabled=!0;let i;function g(t){p.error({title:"Error",message:t,position:"topCenter"})}const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){i=t[0],i.getTime()<d.defaultDate.getTime()?(g("Please choose a date in the future"),e.disabled=!0):e.disabled=!1,console.log(t[0])}};y("#datetime-picker",d);function r(t){const a=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:c,minutes:f,seconds:h}}console.log(r(2e3));console.log(r(14e4));console.log(r(2414e4));function n(t){return String(t).padStart(2,"0")}e.addEventListener("click",b);function b(){e.disabled=!0;const t=setInterval(()=>{const s=i-new Date;if(s<1){clearInterval(t);return}const{days:u,hours:l,minutes:a,seconds:c}=r(s);o[0].textContent=n(u),o[1].textContent=n(l),o[2].textContent=n(a),o[3].textContent=n(c)},1e3)}
//# sourceMappingURL=commonHelpers.js.map
