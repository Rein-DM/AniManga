import React from 'react'
import NavSection from './assets/components/NavSection'
import DiscoverSection from './assets/components/DiscoverSection'
import Features from './assets/components/Features'
import RomanceSection from './assets/components/RomanceSection'
import Adventure from './assets/components/Adventure'
import Sports from './assets/components/Sports'
import Sliceoflife from './assets/components/Sliceoflife'
import Comedy from './assets/components/Comedy'
import Shounen from './assets/components/Shounen'
import TopAnime from './assets/components/TopAnime'
import Download from './assets/components/Download' 
import Footer from './assets/components/Footer'

const App = () => {
  return (
    <>
    <NavSection />
    <DiscoverSection />
    <div className="pt-40">
    <Features />
    <RomanceSection />
    <Adventure />
    <Sports />
    <Sliceoflife />
    <Comedy />
    <Shounen />
    <TopAnime />
    <Download />
    <Footer />
    </div>

    </>
  )
}

export default App