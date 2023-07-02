import About from '@/app/components/About'
import Image from 'next/image'
import Customers from './components/Customers';
import Footer from './components/Footer'
import Information from './components/Information';
import Navbar from './components/Navbar'
import Overview from './components/Overview';
import Services from './components/Services';

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />

      <div className="relative">
        <About />
        <Information />
      </div>
      <div>
        <Customers />
      </div>
      <div className='relative'>
        <Services />
      </div>
      <div className='relative'>
        <Overview />
      </div>
      <Footer />
    </div>
  );
}
