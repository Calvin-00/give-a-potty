import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import BePartOfUs from "@/components/BePartOfUs";
import DonationForm from "@/components/DonationForm";
import Impact from "@/components/Impact";
import OurStory from "@/components/OurStory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Mission />
        <BePartOfUs />
        <DonationForm />
        <Impact />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
