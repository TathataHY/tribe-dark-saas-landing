import { Banner } from "@/components/banner";
import { CallToAction } from "@/components/call-to-action";
import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LogoTicker } from "@/components/logo-ticker";
import { Navbar } from "@/components/navbar";
import { ProductShowcase } from "@/components/product-showcase";

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </main>
  );
}
