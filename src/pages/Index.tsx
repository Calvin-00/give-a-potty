import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import DonationForm from "@/components/DonationForm";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Mission />
        <DonationForm />
        <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
