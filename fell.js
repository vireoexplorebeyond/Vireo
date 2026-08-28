const FELL_INFO={
"Scafell Pike":[978,"Southern Fells","England's highest mountain and the roof of the Lake District."],
"Helvellyn":[950,"Eastern Fells","A classic Lake District summit with the famous Striding Edge ridge nearby."],
"Blencathra":[868,"Northern Fells","A distinctive Northern Fells mountain with several rewarding approaches."],
"Catbells":[451,"North Western Fells","A short, rewarding summit overlooking Derwentwater and Keswick."]
};
const p=new URLSearchParams(location.search),name=p.get("name")||"Scafell Pike",info=FELL_INFO[name]||[null,"Lake District","A Lake District fell in the Vireo directory."];
document.addEventListener("DOMContentLoaded",()=>{
  const t=document.querySelector("#fellTitle"); if(t)t.textContent=name;
  const h=document.querySelector("#fellHeight"); if(h)h.textContent=info[0]?info[0]+"m":"";
  const d=document.querySelector("#fellDesc"); if(d)d.textContent=info[2];
});
