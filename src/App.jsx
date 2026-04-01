import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import PricingSection from "./components/PricingSection/PricingSection"
import StateSection from "./components/StateSection/StateSection"
import StepSection from "./components/StepSection/StepSection"
import WorkflowSection from "./components/WorkflowSection/WorkflowSection"


function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      <StateSection/>
      <StepSection/>
      <PricingSection/>
      <WorkflowSection/>
      <Footer/>
    </>
  )
}

export default App
