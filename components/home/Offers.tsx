import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
export default function Offers(){return <section className="offerband"><div><small>FOR DISTRIBUTORS & BUSINESS PARTNERS</small><h2>Let's grow together.</h2><p>Request a catalogue, bulk order quotation or current trade terms.</p></div><Link className="btn light" href="/offers">Explore trade enquiries <ArrowRight size={18}/></Link></section>}
