import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
