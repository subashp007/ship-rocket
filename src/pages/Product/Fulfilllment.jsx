import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DeliveryEfficiency from "../../components/Products/DeliveryEfficiency";
import FastDelivery from "../../components/Products/FastDelivery";
import StepProgress from "../../components/Products/StepProgress";
import Hero from "../../components/Products/Hero";
import OurCustomers from "../../components/Products/OurCustomers";
import OurOffering from "../../components/Products/OurOffering";
import TechDriven from "../../components/Products/TechDriven";

function Fulfilllment() {
  return (
    <div>
      <Header />
      <Hero/>
      <OurOffering/>
      <TechDriven/>
      <DeliveryEfficiency/>
      <FastDelivery/>
      <OurCustomers />
      <StepProgress/>
      <Footer />
    </div>
  );
}

export default Fulfilllment;
