import { HeroSection, HowItWorks, KeyFeatures, Navbar, PricingPlan } from "./components"

const App = () => {
  return (
    <main className="text-sm antialiased text-neutral-600 h-full ">
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <KeyFeatures/>
      <PricingPlan/>
    </main>
  )
}

export default App