// The Events page is managed from events.json through Pages CMS.
(()=>{
const list=document.getElementById('events-list');if(!list)return;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=s=>{try{const u=new URL(s,document.baseURI);return ['https:','http:'].includes(u.protocol)?u.href:''}catch{return ''}};
fetch(new URL('events.json',document.baseURI),{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('events.json not available');return r.json()}).then(data=>{
 const races=Array.isArray(data.races)?data.races:[];
 if(!races.length){list.innerHTML='<p>No races are currently listed. Check back soon!</p>';return}
 list.innerHTML=races.map(r=>{
 const image=safeUrl(r.image),link=safeUrl(r.link);
 return `<article class="event-detail">${image?`<img src="${esc(image)}" alt="${esc(r.name)} race logo" loading="lazy">`:''}<div><span class="kicker">${esc(r.eyebrow||r.name)}</span><h2>${esc(r.headline||r.name)}</h2>${r.date||r.location?`<p>${esc([r.date,r.location].filter(Boolean).join(' · '))}</p>`:''}${r.description?`<p>${esc(r.description)}</p>`:''}${r.extra?`<p>${esc(r.extra)}</p>`:''}${link?`<a class="btn orange" href="${esc(link)}" rel="noopener noreferrer" target="_blank">${esc(r.button||'Event Details ↗')}</a>`:''}</div></article>`
 }).join('');
}).catch(e=>{console.warn('Unable to load events:',e);list.innerHTML='<p>Events are temporarily unavailable. Please check back shortly.</p>'});
})();
