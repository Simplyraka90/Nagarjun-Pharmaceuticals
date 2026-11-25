import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import Story from './Story';
import Offers from './Offers';
import Link from 'next/link';
import {Leaf,ShieldCheck,FlaskConical,ArrowUpRight} from 'lucide-react';
import type {Product} from '../../lib/data';
export default function Home({products,form}:{products:Product[];form:React.ReactNode}){return <><Hero/><div className="trust"><span><Leaf/> Ayurvedic heritage</span><span><ShieldCheck/> GMP certified*</span><span><FlaskConical/> Modern science</span></div><section className="section categorysection"><small>SHOP BY FORMULATION</small><h2>Explore our range</h2><div className="categorygrid">{['Classical formulations','Herbal powders','Traditional blends'].map((c,i)=><Link key={c} href={'/products?category='+encodeURIComponent(c)}><span className="categorynum">0{i+1}</span><Leaf/><h3>{c}</h3><ArrowUpRight size={18}/></Link>)}</div></section><FeaturedProducts products={products.slice(0,3)}/><Story/><Offers/><FeaturedProducts products={products.slice(3)}/><section className="section contactgrid"><div><small>CONNECT WITH US</small><h2>How can we help?</h2><p>Request product information, pack availability or distribution details.</p></div>{form}</section></>}
