import"./assets/modulepreload-polyfill-ec808ebb.js";const l="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",()=>{const t=a.elements.email.value.trim(),e=a.elements.message.value.trim();m(l,{email:t,message:e})});function n(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}function m(t,e){const s=JSON.stringify(e);localStorage.setItem(t,s)}function o(){const{email:t,message:e}=n(l)||{};a.elements.email.value=t||"",a.elements.message.value=e||""}o();a.addEventListener("submit",t=>{if(t.preventDefault(),a.elements.email.value.trim()||a.elements.message.value.trim()!==""){const e=n(l)||{};localStorage.removeItem(l),a.reset();const s={email:e.email,message:e.message};console.log(s)}else alert("Please fill in all form fields before submitting.")});
//# sourceMappingURL=commonHelpers2.js.map
