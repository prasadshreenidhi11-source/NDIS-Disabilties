import Nav from './components/Nav.jsx'
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Stories from './components/Stories.jsx'
import CallToAction from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Nav />
      <main id="main">
        <HeroSection />
        <WhyChooseUs/>
        <Services />
        <HowItWorks />
        <Stories />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
