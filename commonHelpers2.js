import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as s}from"./assets/vendor-651d7991.js";const n=i=>{i.preventDefault();const t=parseInt(document.querySelector('input[name="delay"]').value),r=document.querySelector('input[name="state"]:checked').value;new Promise((e,o)=>{setTimeout(()=>{r==="fulfilled"?e(t):o(t)},t),i.currentTarget.reset()}).then(e=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{s.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})};document.querySelector(".form").addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
