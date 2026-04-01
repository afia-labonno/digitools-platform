import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import PricingSection from "./components/PricingSection/PricingSection"
import StateSection from "./components/StateSection/StateSection"
import StepSection from "./components/StepSection/StepSection"


function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      <StateSection/>
      <StepSection/>
      <PricingSection/>
    </>
  )
}

export default App
