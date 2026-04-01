
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import PricingSection from "./components/PricingSection/PricingSection"
import Products from "./components/Products/Products"
import StateSection from "./components/StateSection/StateSection"
import StepSection from "./components/StepSection/StepSection"
import WorkflowSection from "./components/WorkflowSection/WorkflowSection"

const getProducts = async() =>{
  const response = await fetch("/products.json");
  return response.json();
};
const productPromise = getProducts();


function App() {
  

  return (
    <>
      <Navbar />
      <Banner/>
      <StateSection/>

      <Products productPromise={productPromise}/>

      <StepSection/>
      <PricingSection/>
      <WorkflowSection/>
      <Footer/>
    </>
  )
}

export default App
