!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;e.register("c1NcR",(function(t,n){var s=e("gQOBw"),i=e("iNWLi"),d=document.querySelector(".form"),c=document.querySelector(".js-signIn"),o=document.querySelector(".btn_form"),r=document.querySelector(".js-signUp"),a=document.querySelector(".backdrop_form"),l=document.querySelector(".js-modal-closeBtn"),u=document.querySelector(".Js-profileBtn"),f=document.querySelector(".Js-signUpBtn-heder"),m=document.querySelector(".js-profile-name"),g=document.querySelector(".js-logOutBtn-header");d.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.name.value,n=e.currentTarget.elements.email.value,c=e.currentTarget.elements.password.value,r=(0,s.getAuth)();if(t,""===c.value||""===n.value)alert("Всі поля повинні бути заповненні!");else if(o.classList.contains("Js-signIn-btn"))return(0,s.signInWithEmailAndPassword)(r,n,c).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})).finally((function(){d.reset()})),u.classList.remove("is-hidden"),m.textContent=t,f.classList.add("is-hidden"),g.classList.add("is-hidden"),void a.classList.add("is-hidden");(0,s.createUserWithEmailAndPassword)(r,n,c).then((function(e){var s=e.user.uid;(0,i.writeUserData)(s,t,n),u.classList.remove("is-hidden"),m.textContent=t,f.classList.add("is-hidden"),g.classList.add("is-hidden")})).catch((function(e){console.log(e.code),console.log(e.messag)})).finally((function(){d.reset()})),a.classList.add("is-hidden")})),c.addEventListener("click",(function(e){e.preventDefault(),o.classList.add("Js-signIn-btn"),o.textContent="SIGN IN",r.classList.remove("curent"),c.classList.add("curent")})),r.addEventListener("click",(function(e){e.preventDefault(),o.classList.remove("Js-signIn-btn"),o.textContent="SIGN UP",r.classList.add("curent"),c.classList.remove("curent")})),l.addEventListener("click",(function(){a.classList.add("is-hidden"),g.classList.contains("is-hidden")||g.classList.add("is-hidden")}))}))}();
//# sourceMappingURL=autorithation.98295369.js.map
