"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/page-shell";
const galleryImages = [
 ...Array.from({length:15},(_,i)=>({id:i+1,src:"/optimized/Photos/monthly_meetings/"+(i+1)+".webp",alt:"Students and volunteers at a Melbourne Math Circle library session, photo "+(i+1),caption:"Monthly meetings · Photo "+(i+1),category:"monthly-meetings"})),
 ...Array.from({length:3},(_,i)=>({id:16+i,src:"/optimized/Photos/IndiaFest/"+(i+1)+".webp",alt:"Math activities at the Melbourne Math Circle IndiaFest table, photo "+(i+1),caption:"IndiaFest · Photo "+(i+1),category:"indiafest"})),
 ...Array.from({length:7},(_,i)=>({id:19+i,src:"/optimized/Photos/university_park/"+(i+1)+".webp",alt:"Math activities at University Park Elementary, photo "+(i+1),caption:"University Park Elementary · Photo "+(i+1),category:"university-park"})),
];
const sections = [{key:"monthly-meetings",label:"Monthly meetings"},{key:"indiafest",label:"IndiaFest"},{key:"university-park",label:"University Park Elementary"}];
export default function GalleryPage() {
 const [lightboxId,setLightboxId] = useState<number|null>(null);
 const imageIndex=galleryImages.findIndex(img=>img.id===lightboxId);
 const active=galleryImages[imageIndex];
 const dialog=useRef<HTMLDivElement>(null);
 const closeButton=useRef<HTMLButtonElement>(null);
 const opener=useRef<HTMLButtonElement|null>(null);
 const navigate=useCallback((amount:number)=>setLightboxId(id=>{const index=galleryImages.findIndex(img=>img.id===id);return galleryImages[(index+amount+galleryImages.length)%galleryImages.length].id;}),[]);
 useEffect(()=>{
  if(lightboxId===null)return;
  const oldOverflow=document.body.style.overflow;
  document.body.style.overflow="hidden";
  closeButton.current?.focus();
  const onKey=(event:KeyboardEvent)=>{
   if(event.key==="Escape")setLightboxId(null);
   if(event.key==="ArrowLeft")navigate(-1);
   if(event.key==="ArrowRight")navigate(1);
   if(event.key==="Tab") {const buttons=dialog.current?.querySelectorAll<HTMLButtonElement>("button"); if(!buttons?.length)return;const first=buttons[0],last=buttons[buttons.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
  };
  window.addEventListener("keydown",onKey);
  return()=>{document.body.style.overflow=oldOverflow;window.removeEventListener("keydown",onKey);opener.current?.focus();};
 },[lightboxId!==null,navigate]);
 return <PageShell className="gallery-archive">
  <PageHero title="Event gallery"><p>Library sessions, IndiaFest, and a visit to University Park Elementary. A few moments from our time doing math together.</p><nav className="archive-contents" aria-label="Photo collections">{sections.map(group=><a href={"#"+group.key} key={group.key}>{group.label}</a>)}</nav></PageHero>
  <div className="nav-section archive-collections">{sections.map(group=><section key={group.key} id={group.key}><div className="archive-heading"><h2>{group.label}</h2><span className="quiet-meta">{galleryImages.filter(img=>img.category===group.key).length} photos</span></div><div className="archive-grid">{galleryImages.filter(img=>img.category===group.key).map(img=><figure key={img.id}><button type="button" onClick={e=>{opener.current=e.currentTarget;setLightboxId(img.id);}} aria-label={"Open "+img.caption}><Image src={img.src} alt={img.alt} width={600} height={450} sizes="(max-width:650px) 100vw, (max-width:1000px) 45vw, 30vw"/></button><figcaption>{img.caption}</figcaption></figure>)}</div></section>)}</div>
  {active&&<div className="archive-lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox" ref={dialog} onClick={e=>{if(e.target===e.currentTarget)setLightboxId(null);}}><div className="archive-lightbox-inner"><button ref={closeButton} type="button" className="archive-close" onClick={()=>setLightboxId(null)} aria-label="Close lightbox"><X/></button><Image src={active.src} alt={active.alt} width={1200} height={900} sizes="90vw" priority/><div className="archive-lightbox-controls"><button type="button" aria-label="Previous image" onClick={()=>navigate(-1)}><ChevronLeft/>Previous</button><p>{active.caption}<br/>{imageIndex+1} / {galleryImages.length}</p><button type="button" aria-label="Next image" onClick={()=>navigate(1)}>Next<ChevronRight/></button></div></div></div>}
 </PageShell>;
}
