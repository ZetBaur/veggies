$(document).ready((function(){"use strict";function e(e){this.type=e}e.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],n=t.dataset.da.trim().split(","),l={};l.element=t,l.parent=t.parentNode,l.destination=document.querySelector(n[0].trim()),l.breakpoint=n[1]?n[1].trim():"767",l.place=n[2]?n[2].trim():"last",l.index=this.indexInParent(l.parent,l.element),this.оbjects.push(l)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const n=this.mediaQueries[t],l=String.prototype.split.call(n,","),o=window.matchMedia(l[0]),s=l[1],i=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===s}));o.addListener((function(){e.mediaHandler(o,i)})),this.mediaHandler(o,i)}},e.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const n=t[e];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let e=0;e<t.length;e++){const n=t[e];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},e.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){const n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))};new e("max").init(),$.each($(".checkbox"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$(document).on("click",".checkbox",(function(e){return $(this).hasClass("active")?$(this).find("input").prop("checked",!1):$(this).find("input").prop("checked",!0),$(this).toggleClass("active"),!1})),$.each($(".radiobuttons__item"),(function(e,t){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$(document).on("click",".radiobuttons__item",(function(e){return $(this).parents(".radiobuttons").find(".radiobuttons__item").removeClass("active"),$(this).parents(".radiobuttons").find(".radiobuttons__item input").prop("checked",!1),$(this).toggleClass("active"),$(this).find("input").prop("checked",!0),!1})),$(".search-btn").on("mouseover",(function(e){e.preventDefault(),$(".search-input").addClass("active")})),$(document).click((function(e){$(e.target).is(".search-btn, .search-input input")||$(".search-input").removeClass("active")}));let t=document.querySelectorAll("._spoller"),n=!0;if(t.length>0)for(let e=0;e<t.length;e++){const l=t[e];l.addEventListener("click",(function(e){if(n){if(n=!1,l.classList.contains("_spoller-992")&&window.innerWidth>992)return!1;if(l.classList.contains("_spoller-768")&&window.innerWidth>768)return!1;if(l.closest("._spollers").classList.contains("_one")){let e=l.closest("._spollers").querySelectorAll("._spoller");for(let t=0;t<e.length;t++){let n=e[t];n!=l&&(n.classList.remove("_active"),_slideUp(n.nextElementSibling))}}l.classList.toggle("_active"),_slideToggle(l.nextElementSibling),setTimeout((function(){n=!0}),500)}}))}let l=document.querySelectorAll("form");if(l.length>0)for(let e=0;e<l.length;e++){l[e].addEventListener("submit",o)}async function o(e){let t=e.target.closest("form");if(0==function(e){let t=0,n=e.querySelectorAll("._req");if(n.length>0)for(let e=0;e<n.length;e++){const l=n[e];_is_hidden(l)||(t+=s(l))}return t}(t)){let n=t.getAttribute("action")?t.getAttribute("action").trim():"#",l=t.getAttribute("method")?t.getAttribute("method").trim():"GET";const o=t.getAttribute("data-message");if(t.getAttribute("data-ajax")){e.preventDefault();let s=new FormData(t);t.classList.add("_sending");let i=await fetch(n,{method:l,body:s});if(i.ok){await i.json();t.classList.remove("_sending"),o&&popup_open("_"+o+"-message"),function(e){let t=e.querySelectorAll("input,textarea");for(let e=0;e<t.length;e++){const n=t[e];n.parentElement.classList.remove("_focus"),n.classList.remove("_focus"),n.value=n.getAttribute("data-value")}let n=e.querySelectorAll(".checkbox__input");if(n.length>0)for(let e=0;e<n.length;e++){n[e].checked=!1}let l=e.querySelectorAll("select");if(l.length>0)for(let e=0;e<l.length;e++){const t=l[e],n=t.getAttribute("data-default");t.value=n,p(t)}}(t)}else alert("Ошибка"),t.classList.remove("_sending")}}else{let n=t.querySelectorAll("._error");n&&t.classList.contains("_goto-error")&&T(n[0],1e3,50),e.preventDefault()}}function s(e){let t=0,n=e.getAttribute("data-value");if("email"==e.getAttribute("name")||e.classList.contains("_email")){if(e.value!=n){let t=e.value.replace(" ","");e.value=t}email_test(e)||e.value==n?(i(e),t++):r(e)}else"checkbox"==e.getAttribute("type")&&0==e.checked||""==e.value||e.value==n?(i(e),t++):r(e);return t}function i(e){e.classList.add("_error"),e.parentElement.classList.add("_error");let t=e.parentElement.querySelector(".form__error");t&&e.parentElement.removeChild(t);let n=e.getAttribute("data-error");n&&""!=n&&e.parentElement.insertAdjacentHTML("beforeend",'<div class="form__error">'+n+"</div>")}function r(e){e.classList.remove("_error"),e.parentElement.classList.remove("_error");let t=e.parentElement.querySelector(".form__error");t&&e.parentElement.removeChild(t)}let a=document.querySelectorAll(".form__viewpass");for(let e=0;e<a.length;e++){const t=a[e];t.addEventListener("click",(function(e){t.classList.contains("_active")?t.parentElement.querySelector("input").setAttribute("type","password"):t.parentElement.querySelector("input").setAttribute("type","text"),t.classList.toggle("_active")}))}let c=document.getElementsByTagName("select");function u(e){const t=document.querySelectorAll(".select");if(!e.target.closest(".select"))for(let e=0;e<t.length;e++){const n=t[e],l=n.querySelector(".select__options");n.classList.remove("_active"),_slideUp(l,100)}}function d(e){const t=e.parentElement,n=e.getAttribute("class"),l=e.querySelector("option:checked");e.setAttribute("data-default",l.value),e.style.display="none",t.insertAdjacentHTML("beforeend",'<div class="select select_'+n+'"></div>'),e.parentElement.querySelector(".select").appendChild(e),p(e)}function p(e){const t=e.parentElement,n=t.querySelector(".select__item"),l=e.querySelectorAll("option"),o=e.querySelector("option:checked").text,s=e.getAttribute("data-type");n&&n.remove();let i="";i="input"==s?'<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="'+o+'" data-error="Ошибка" data-value="'+o+'" class="select__input"></div>':'<div class="select__value icon-select-arrow"><span>'+o+"</span></div>",t.insertAdjacentHTML("beforeend",'<div class="select__item"><div class="select__title">'+i+'</div><div class="select__options">'+function(e){if(e){let t="";for(let n=0;n<e.length;n++){const l=e[n],o=l.value;if(""!=o){t=t+'<div data-value="'+o+'" class="select__option">'+l.text+"</div>"}}return t}}(l)+"</div></div></div>"),function(e,t){const n=t.querySelector(".select__item"),l=t.querySelector(".select__options"),o=t.querySelectorAll(".select__option"),s=e.getAttribute("data-type"),i=t.querySelector(".select__input");n.addEventListener("click",(function(){let e=document.querySelectorAll(".select");for(let t=0;t<e.length;t++){const l=e[t],o=l.querySelector(".select__options");l!=n.closest(".select")&&(l.classList.remove("_active"),_slideUp(o,100))}_slideToggle(l,100),t.classList.toggle("_active")}));for(let n=0;n<o.length;n++){const l=o[n],r=l.getAttribute("data-value"),a=l.innerHTML;"input"==s?i.addEventListener("keyup",f):l.getAttribute("data-value")==e.value&&(l.style.display="none"),l.addEventListener("click",(function(){for(let e=0;e<o.length;e++){o[e].style.display="block"}"input"==s?(i.value=a,e.value=r):(t.querySelector(".select__value").innerHTML="<span>"+a+"</span>",e.value=r,l.style.display="none")}))}}(e,t)}function f(e){e.target.closest(".select ").querySelector(".select__options");let t=e.target.closest(".select ").querySelectorAll(".select__option"),n=e.target.value.toUpperCase();for(let e=0;e<t.length;e++){let l=t[e];(l.textContent||l.innerText).toUpperCase().indexOf(n)>-1?l.style.display="":l.style.display="none"}}function m(e){const t=e.getAttribute("data-value");""==e.value&&""!=t&&(e.value=t)}function h(e){e.classList.add("_focus"),e.parentElement.classList.add("_focus")}function g(e){e.classList.remove("_focus"),e.parentElement.classList.remove("_focus")}function v(e,t){e.inputmask.remove(),e.value=t,g(e)}c.length>0&&function(){for(let e=0;e<c.length;e++){d(c[e])}document.addEventListener("click",(function(e){u(e)})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&u(e)}))}(),function(e){if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t],l=n.getAttribute("data-value");m(n),""!=n.value&&n.value!=l&&h(n),n.addEventListener("focus",(function(e){n.value==l&&(h(n),n.value=""),"pass"===n.getAttribute("data-type")&&n.setAttribute("type","password"),n.classList.contains("_date"),n.classList.contains("_phone")&&(n.classList.add("_mask"),Inputmask("+375 (99) 9999999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){v(n,l)}}).mask(n)),n.classList.contains("_digital")&&(n.classList.add("_mask"),Inputmask("9{1,}",{placeholder:"",clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){v(n,l)}}).mask(n)),r(n)})),n.addEventListener("blur",(function(e){""==n.value&&(n.value=l,g(n),n.classList.contains("_mask")&&v(n,l),"pass"===n.getAttribute("data-type")&&n.setAttribute("type","text"))})),n.classList.contains("_date")&&datepicker(n,{customDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],customMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],formatter:(e,t,n)=>{const l=t.toLocaleDateString();e.value=l},onSelect:function(e,t,n){h(e.el)}})}}(document.querySelectorAll("input[data-value],textarea[data-value]"));let _=document.querySelectorAll(".quantity__button");if(_.length>0)for(let e=0;e<_.length;e++){const t=_[e];t.addEventListener("click",(function(e){let n=parseInt(t.closest(".quantity").querySelector("input").value);t.classList.contains("quantity__button_plus")?n++:(n-=1,n<1&&(n=1)),t.closest(".quantity").querySelector("input").value=n}))}const y=document.querySelector(".price__range");if(y){noUiSlider.create(y,{start:[0,2e5],connect:!0,tooltips:[wNumb({decimals:0}),wNumb({decimals:0})],range:{min:[0],max:[2e5]}});const e=document.getElementById("price-start"),t=document.getElementById("price-end");function b(){let n,l;""!=e.value&&(n=e.value),""!=t.value&&(l=t.value),y.noUiSlider.set([n,l])}e.addEventListener("change",b),t.addEventListener("change",b)}document.querySelector("body");let w=document.querySelectorAll("._scr-sector"),L=document.querySelectorAll("._scr-item"),A=document.querySelectorAll("._side-wrapper"),S=!0,k=0;function q(){let e=pageYOffset,t=document.querySelector("header.header");if(null!==t&&(e>10?t.classList.add("_scroll"):t.classList.remove("_scroll")),w.length>0)for(let e=0;e<w.length;e++){let t=w[e],n=M(t).top,l=t.offsetHeight;pageYOffset>n-window.innerHeight/1.5&&pageYOffset<n+l-window.innerHeight/5?t.classList.add("_scr-sector_active"):t.classList.contains("_scr-sector_active")&&t.classList.remove("_scr-sector_active"),pageYOffset>n-window.innerHeight/2&&pageYOffset<n+l-window.innerHeight/5?t.classList.contains("_scr-sector_current")||t.classList.add("_scr-sector_current"):t.classList.contains("_scr-sector_current")&&t.classList.remove("_scr-sector_current")}if(L.length>0)for(let t=0;t<L.length;t++){let n=L[t],l=M(n).top,o=n.offsetHeight,s=window.innerHeight-(window.innerHeight-o/3);window.innerHeight>o&&(s=window.innerHeight-o/3),e>l-s&&e<l+o?(n.classList.add("_active"),x(n)):n.classList.remove("_active"),e>l-window.innerHeight&&n.querySelectorAll("._lazy").length>0&&E(n)}A.length>0&&function(e,t){let n=parseInt(window.innerWidth),l=parseInt(window.innerHeight),o=parseInt(document.querySelector("header").offsetHeight)+15;for(let i=0;i<e.length;i++){const r=e[i];let a=r.getAttribute("data-width");const c=r.querySelector("._side-block");a||(a=0),n>a&&(c.offsetHeight<l-(o+30)?(t>M(r).top-(o+15)?c.style.cssText="position:fixed;bottom:auto;top:"+o+"px;width:"+r.offsetWidth+"px;left:"+M(r).left+"px;":s(c),t>r.offsetHeight+M(r).top-(c.offsetHeight+(o+15))&&(r.style.cssText="position:relative;",c.style.cssText="position:absolute;bottom:0;top:auto;left:0px;width:100%")):s(c))}function s(e){e.style.cssText="position:relative;bottom:auto;top:0px;left:0px;"}}(A,e);let n=document.querySelector("._custom-scroll__line");if(n){let e=window.innerHeight,t=document.querySelector(".wrapper").offsetHeight,l=pageYOffset/(t-e)*100,o=n.offsetHeight;n.style.transform="translateY("+(e-o)/100*l+"px)"}k=e<=0?0:e}function E(e){let t=e.querySelectorAll("*[data-src]");if(t.length>0)for(let e=0;e<t.length;e++){const n=t[e];n.classList.contains("_loaded")||(n.setAttribute("src",n.getAttribute("data-src")),n.classList.add("_loaded"))}let n=e.querySelectorAll("*[data-srcset]");if(n.length>0)for(let e=0;e<n.length;e++){const t=n[e];t.classList.contains("_loaded")||(t.setAttribute("srcset",t.getAttribute("data-srcset")),t.classList.add("_loaded"))}}function x(e){if(e.classList.contains("_load-map")&&!e.classList.contains("_loaded-map")){document.getElementById("map")&&(e.classList.add("_loaded-map"),map())}}function H(e){j(),S=!1,T(e,800);let t=500;-1!=navigator.appVersion.indexOf("Mac")&&(t=1e3),setTimeout((function(){S=!0}),t)}window.addEventListener("scroll",q),setTimeout((function(){q()}),100),w.length>0&&!isMobile.any()&&(j(),window.addEventListener("wheel",(function(e){let t=window.innerHeight;if(t>=750)if(S){let n,l=pageYOffset,o=document.querySelector("._scr-sector._scr-sector_current"),s=M(o).top,i=o.offsetHeight,r=o.nextElementSibling,a=o.previousElementSibling;if(40==e.keyCode||34==e.keyCode||e.deltaX>0||e.deltaY<0){if(a){let e=a.offsetHeight;n=M(a).top,i<=t?e>=t&&(n+=e-t,H(n)):(I(),l<=s&&H(n))}}else(38==e.keyCode||33==e.keyCode||e.deltaX<0||e.deltaY>0)&&r&&(n=M(r).top,i<=t?H(n):(I(),l>=n-t&&H(n)))}else j();else I()})));let C=document.querySelectorAll("._goto-block");if(C){let e=[];for(let t=0;t<C.length;t++){let n=C[t],l=n.getAttribute("href").replace("#","");""==l||~e.indexOf(l)||e.push(l),n.addEventListener("click",(function(e){document.querySelector(".menu__body._active")&&(menu_close(),body_lock_remove(500));let t=n.getAttribute("href").replace("#","");T(document.querySelector("."+t),300),e.preventDefault()}))}window.addEventListener("scroll",(function(t){let n=document.querySelectorAll("._goto-block._active");if(n)for(let e=0;e<n.length;e++){n[e].classList.remove("_active")}for(let t=0;t<e.length;t++){let n=e[t],l=document.querySelector("."+n);if(l){let e=M(l).top,t=l.offsetHeight;if(pageYOffset>e-window.innerHeight/3&&pageYOffset<e+t-window.innerHeight/3){let e=document.querySelectorAll('._goto-block[href="#'+n+'"]');for(let t=0;t<e.length;t++){e[t].classList.add("_active")}}}}}))}let O=document.querySelectorAll("._goto");if(O)for(let e=0;e<O.length;e++){let t=O[e];t.addEventListener("click",(function(e){let n=t.getAttribute("href").replace("#","");T(document.querySelector("."+n),300),e.preventDefault()}))}function T(e,t,n=0){let l={speedAsDuration:!0,speed:t,header:"",offset:n,easing:"easeOutQuad"};(new SmoothScroll).animateScroll(e,"",l)}function M(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,l=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+l,left:t.left+n}}function j(){window.addEventListener&&window.addEventListener("DOMMouseScroll",Y,!1),document.addEventListener("wheel",Y,{passive:!1}),window.onwheel=Y,window.onmousewheel=document.onmousewheel=Y,window.ontouchmove=Y,document.onkeydown=D}function I(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",Y,!1),document.removeEventListener("wheel",Y,{passive:!1}),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}function Y(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function D(e){}isMobile.any();pageYOffset}));