
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import PricingSection from "./components/PricingSection/PricingSection"
import Products from "./components/Products/Products"
import StateSection from "./components/StateSection/StateSection"
import StepSection from "./components/StepSection/StepSection"
import WorkflowSection from "./components/WorkflowSection/WorkflowSection"

import { useState } from "react"

const getProducts = async() =>{
  const response = await fetch("/products.json");
  return response.json();
};
const productPromise = getProducts();


function App() {
  const [carts, setCarts] = useState([])
  
  return (
    <>
      <Navbar />
      <Banner/>
      <StateSection/>
      
      <Products productPromise={productPromise} carts={carts} setCarts={setCarts}/>
      

      <StepSection/>
      <PricingSection/>
      <WorkflowSection/>
      <Footer/>
    </>
  )
}

export default App
