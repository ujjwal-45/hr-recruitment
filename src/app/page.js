import About from '@/app/components/About'
import Image from 'next/image'
import Footer from './components/Footer'
import Information from './components/Information';
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />

      <div className="relative">
        <About />
        <Information />
      </div>
      <div></div>
      <div></div>
      <Footer />
    </div>
  );
}
