'use client';
import {useState} from 'react';
import type {Product} from '../../lib/data';
import Link from 'next/link';
export default function Variants({product}:{product:Product}){const options=product.id==='amla'?['200 g (shown on label)','Travel pack — confirm size']:product.id==='jeerakadi'?['500 g (shown on label)','Bulk enquiry']:['Standard pack — confirm size','Bulk enquiry'];const [selected,setSelected]=useState(0);return <div className="variantbox"><h3>Pack options</h3><div className="actions">{options.map((v,i)=><button key={v} aria-pressed={selected===i} className={selected===i?'btn':'outline'} onClick={()=>setSelected(i)}>{v}</button>)}</div><p>Selected: {options[selected]}. Availability and pricing subject to confirmation.</p><Link className="outline" href={'/contact?product='+encodeURIComponent(product.name)+'&pack='+encodeURIComponent(options[selected])}>Enquire about this pack</Link></div>}
