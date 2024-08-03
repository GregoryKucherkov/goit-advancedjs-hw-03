import{S as g,i as m}from"./assets/vendor-8501dee5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const u="/goit-advancedjs-hw-03/assets/bi_x-octagon-ddf7add7.svg";function d(r){const t="45225521-b1788b8383ce5fec9dc61aa0c",o=`https://pixabay.com/api/?${new URLSearchParams({key:t,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const i=document.querySelector(".gallery"),p=new g(".gallery a",{captionsData:"alt",captionDelay:250});function f(r){if(r.length===0){m.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"16",position:"topRight",timeout:4e3,iconUrl:u}),i.innerHTML="";return}i.innerHTML=r.map(t=>`<li class="gallery-item">
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
      
    `).join(""),p.refresh()}function c(){document.querySelector(".loader").classList.toggle("hidden")}const l=document.querySelector(".js-search-form"),y=r=>{r.preventDefault();const t=r.target.elements.input_search.value.trim();if(t===""){m.error({message:"Sorry, the form can't be empty!",messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"16",position:"topRight",timeout:4e3,iconUrl:u}),l.reset();return}c(),d(t).then(({hits:s})=>{f(s),l.reset()}).catch(s=>console.log(s)).finally(()=>{c()})};l.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
