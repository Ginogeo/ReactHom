import './App.css'
import Navbar from './Navbar.tsx'
import CarRentalSearch from './CarRentalSearch.jsx'
import HowItWorks from './HowItWorks.tsx'
import Features from './Features.tsx'
import RentalDeals from './RentalDeals.tsx'
import TestimonialsSection from './TestimonialsSection.tsx'
function App() {
  

  return (
    <>
      <div>
          <Navbar/>
          <CarRentalSearch/>
          <HowItWorks/>
          <Features/>
          <RentalDeals/>
          <TestimonialsSection/>
      </div>
        
    </>
  )
}

export default App
