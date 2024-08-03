import{S as m,i as g}from"./assets/vendor-8501dee5.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(r){const a="45225521-b1788b8383ce5fec9dc61aa0c",o=`https://pixabay.com/api/?${new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const i=document.querySelector(".gallery"),d=new m(".gallery a",{captionsData:"alt",captionDelay:250});function p(r){if(r.length===0){g.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"16",position:"topRight",timeout:4e3,iconUrl:"/goit-advancedjs-hw-03/src/img/bi_x-octagon.svg"}),i.innerHTML="";return}i.innerHTML=r.map(a=>`<li class="gallery-item">
        <a class="gallery-link" href="${a.largeImageURL}">
          <img
            class="gallery-image"
            src="${a.webformatURL}"
            alt="${a.tags}"
            />
        </a>
        <p class="gallery-description">
          <span class="gallery-metadata">Likes <span class="gallery-value">${a.likes}</span></span>
          <span class="gallery-metadata">Views <span class="gallery-value">${a.views}</span></span>
          <span class="gallery-metadata">Comments <span class="gallery-value">${a.comments}</span></span>
          <span class="gallery-metadata">Downloads <span class="gallery-value">${a.downloads}</span></span>
        </p>
      </li>
      
    `).join(""),d.refresh()}function c(){document.querySelector(".loader").classList.toggle("hidden")}const l=document.querySelector(".js-search-form"),f=r=>{r.preventDefault();const a=r.target.elements.input_search.value.trim();if(a===""){g.error({message:"Sorry, the form can't be empty!",messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"16",position:"topRight",timeout:4e3,iconUrl:"/goit-advancedjs-hw-03/src/img/bi_x-octagon.svg"}),l.reset();return}c(),u(a).then(({hits:s})=>{p(s),l.reset()}).catch(s=>console.log(s)).finally(()=>{c()})};l.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
