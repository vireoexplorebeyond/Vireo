
const searchInput=document.querySelector('#siteSearch');
const searchButton=document.querySelector('#siteSearchBtn');
function runSearch(){
  const q=(searchInput?.value||'').trim().toLowerCase();
  if(!q){document.querySelector('#searchMessage')?.remove();return;}
  const routes=[...document.querySelectorAll('.route')];
  let shown=0;
  routes.forEach(r=>{const ok=r.innerText.toLowerCase().includes(q);r.style.display=ok?'flex':'none';if(ok)shown++});
  const msg=document.querySelector('#searchMessage')||document.createElement('p');
  msg.id='searchMessage';msg.style.color='#aeb77a';msg.style.fontSize='12px';
  msg.textContent=shown?`Showing ${shown} matching route${shown===1?'':'s'}.`:`No exact route found yet — Vireo is still growing.`;
  document.querySelector('#routeArea')?.prepend(msg);
  document.querySelector('#routeArea')?.scrollIntoView({behavior:'smooth'});
}
searchButton?.addEventListener('click',runSearch);
searchInput?.addEventListener('keydown',e=>{if(e.key==='Enter')runSearch()});
