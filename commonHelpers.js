import{S as m,i as g}from"./assets/vendor-8501dee5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const u="/goit-advancedjs-hw-03/assets/bi_x-octagon (1)-06de2d57.svg";function d(t){const r="45225521-b1788b8383ce5fec9dc61aa0c",o=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAENSURBVHgBrZVhDoIwDIUrgfDXm+hRvBFwEr0BXsXjsJnMFVkYsvUV4SWL6Nr3MWgrUUbW2sYY6zSLY3M+Zc7cOWr9evqvL5J18av1OVRVVUdI4c6HwTxIKY5FJ/nbXA3ZYw4hR5hnIZK5MeaKDFMxC8jX3PapRPTi5lJOQWzPewHQpgz49xxkPrmcKwJyEGQe55UEVNdV64P5cmwm1tSEHe+hfAj4hUwAlTmrIKWKglzqGkl1gmg2hVmjnj0QEJuHxxK/EwiRqkGqFqmE433YaJpSFBttDnrfUxACSsWw1+LmJMhWrcyDjoBkzY+AQPM9EMl81QdhLJxOrvGfZ1L96bvblvExaj4JXtJj+QAn5UUxjHYd+gAAAABJRU5ErkJggg==",c=document.querySelector(".gallery"),p=new m(".gallery a",{captionsData:"alt",captionDelay:250});function f(t){if(t.length===0){g.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"16",position:"topRight",timeout:4e3,iconUrl:A}),c.innerHTML="";return}c.innerHTML=t.map(r=>`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
            />
        </a>
        <p class="gallery-description">
          <span class="gallery-metadata">Likes <span class="gallery-value">${r.likes}</span></span>
          <span class="gallery-metadata">Views <span class="gallery-value">${r.views}</span></span>
          <span class="gallery-metadata">Comments <span class="gallery-value">${r.comments}</span></span>
          <span class="gallery-metadata">Downloads <span class="gallery-value">${r.downloads}</span></span>
        </p>
      </li>
      
    `).join(""),p.refresh()}function i(){document.querySelector(".loader").classList.toggle("hidden")}const l=document.querySelector(".js-search-form"),h=t=>{t.preventDefault();const r=t.target.elements.input_search.value.trim();if(r===""){g.error({message:"Sorry, the form can't be empty!",messageColor:"#FFF",backgroundColor:"#FF6865",messageSize:"16",position:"topRight",timeout:4e3,iconUrl:u}),l.reset();return}i(),d(r).then(({hits:s})=>{f(s),l.reset()}).catch(s=>console.log(s)).finally(()=>{i()})};l.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
