import { Footer, HeroSection, HowItWorks, KeyFeatures, Navbar, PricingPlan, Testimonials } from "./components"

const App = () => {
  return (
    <main className="text-sm antialiased text-neutral-600 h-full ">
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <KeyFeatures/>
      <PricingPlan/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}

export default App