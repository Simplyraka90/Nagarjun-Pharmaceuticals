'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState,useEffect} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
export default function Navbar(){const path=usePathname();const [open,setOpen]=useState(false);useEffect(()=>setOpen(false),[path]);return <header><div className="topline">Authentic Ayurveda · Modern Science <span>Established 1996</span></div><div className="nav"><Link href="/" className="brand"><img src="/images/logo.jpg" alt=""/><span>SHREE NAGARJUN<small>PHARMACEUTICALS</small></span></Link><button className="mobile" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?'opened':''}>{[['/','Home'],['/products','Products'],['/story','Our story'],['/quality','Quality'],['/offers','Trade offers'],['/contact','Contact']].map(([url,label])=><Link key={url} className={path===url?'active':''} href={url}>{label}</Link>)}</nav><Link className="btn navcta" href="/business">Enquire <ArrowUpRight size={16}/></Link></div></header>}
