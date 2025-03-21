import './App.css'
import Navbar from './Navbar.jsx'
import CarRentalSearch from './CarRentalSearch.jsx'
import HowItWorks from './HowItWorks.jsx'
import Features from './Features.jsx'
import RentalDeals from './RentalDeals.jsx'
import TestimonialsSection from './TestimonialsSection.jsx'
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
