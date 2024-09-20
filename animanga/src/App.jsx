import React from 'react'
import NavSection from './assets/components/NavSection'
import DiscoverSection from './assets/components/DiscoverSection'
import Features from './assets/components/Features'
import RomanceSection from './assets/components/RomanceSection'

const App = () => {
  return (
    <>
    <NavSection />
    <DiscoverSection />
    <div className="pt-40">
    <Features />
    <RomanceSection />
    </div>

    </>
  )
}

export default App