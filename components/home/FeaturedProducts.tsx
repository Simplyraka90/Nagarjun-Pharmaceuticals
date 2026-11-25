import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import Reveal from '../ui/Reveal';
import type {Product} from '../../lib/data';
export default function FeaturedProducts({products}:{products:Product[]}){return <section className="section"><div className="sectionhead"><div><small>THE COLLECTION</small><h2>Featured formulations</h2></div><Link href="/products">Full catalogue <ArrowUpRight size={18}/></Link></div><div className="products">{products.map(p=><Reveal key={p.id}><Link className="product" href={'/products/'+p.id}><div className="photo"><img loading="lazy" src={p.image} alt={p.name}/></div><div className="productbody"><small>{p.category}</small><h3>{p.name}</h3><span>View pack options <ArrowUpRight size={18}/></span></div></Link></Reveal>)}</div></section>}
