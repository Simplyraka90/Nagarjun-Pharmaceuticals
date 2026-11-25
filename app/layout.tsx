// @ts-ignore -- Next.js handles CSS imports during the build.
import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Shree Nagarjun Pharmaceuticals | Ayurveda & Modern Science',description:'Explore our Ayurvedic product catalogue and business enquiry services.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
