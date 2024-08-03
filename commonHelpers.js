import{S as g,i as m}from"./assets/vendor-8501dee5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(a){const t="45225521-b1788b8383ce5fec9dc61aa0c",o=`https://pixabay.com/api/?${new URLSearchParams({key:t,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const i=document.querySelector(".gallery"),d=new g(".gallery a",{captionsData:"alt",captionDelay:250});function p(a){if(a.length===0){m.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"16",position:"topRight",timeout:4e3,iconUrl:"../img/bi_x-octagon.svg"}),i.innerHTML="";return}i.innerHTML=a.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
            />
        </a>
        <p class="gallery-description">
          <span class="gallery-metadata">Likes <span class="gallery-value">${t.likes}</span></span>
          <span class="gallery-metadata">Views <span class="gallery-value">${t.views}</span></span>
          <span class="gallery-metadata">Comments <span class="gallery-value">${t.comments}</span></span>
          <span class="gallery-metadata">Downloads <span class="gallery-value">${t.downloads}</span></span>
        </p>
      </li>
      
    `).join(""),d.refresh()}function c(){document.querySelector(".loader").classList.toggle("hidden")}const l=document.querySelector(".js-search-form"),f=a=>{a.preventDefault();const t=a.target.elements.input_search.value.trim();if(t===""){m.error({message:"Sorry, the form can't be empty!",messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"16",position:"topRight",timeout:4e3,iconUrl:"./img/bi_x-octagon.svg"}),l.reset();return}c(),u(t).then(({hits:s})=>{p(s),l.reset()}).catch(s=>console.log(s)).finally(()=>{c()})};l.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
