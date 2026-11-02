import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPostIds, getPostData, getSortedPostsData } from "@/lib/blog";
import MathContent from "@/components/math-content";
import InteractiveGeometryExplorer from "@/components/interactive-geometry-explorer";
import { PageShell } from "@/components/page-shell";

type Props={params:Promise<{id:string}>};
export async function generateStaticParams(){return (await getAllPostIds("blog")).map(item=>({id:item.params.id}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {id}=await params;try{const post=await getPostData(id,"blog");return{title:post.title+" | Melbourne Math Circle",description:post.excerpt};}catch{return{title:"Math Bite | Melbourne Math Circle"};}}
export default async function MathBitePage({params}:Props){
 const {id}=await params;const post=await getPostData(id,"blog").catch(()=>null);if(!post)notFound();
 const posts=await getSortedPostsData("blog");const related=posts.filter(item=>item.id!==post.id&&item.tags.flat().some(tag=>post.tags.includes(tag))).slice(0,3);
 return <PageShell className="reading-page bite-reading">
  <section className="nav-hero reading-hero"><Link href="/math-bites" className="reading-back"><ArrowLeft size={17}/>Math Bites</Link><h1>{post.title}</h1><p className="reading-meta">By {post.author}</p></section>
  <article className="nav-section reading-article"><figure className="reading-illustration article-illustration"><Image src={post.image} alt="" width={640} height={400} sizes="(max-width:650px) 100vw, 400px"/></figure><div className="reading-copy"><MathContent content={post.content}/></div>
   {post.tags.includes("geometry")&&<details className="reading-tool"><summary>Geometry calculator</summary><InteractiveGeometryExplorer/></details>}
  </article>
  {related.length>0&&<section className="nav-section reading-related"><h2>Related articles</h2><nav aria-label="Related Math Bites">{related.map(item=><Link href={"/math-bites/"+item.id} key={item.id}>{item.title}<ArrowUpRight size={20}/></Link>)}</nav></section>}
 </PageShell>;
}
