import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutFlow from "@/components/CheckoutFlow";

export const metadata = {
  title: "Checkout | Ng Conf Perú 2026",
  description: "Compra tus entradas para la Ng Conf Perú 2026.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-gray-100 flex flex-col justify-between selection:bg-[#E5097F] selection:text-white">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <CheckoutFlow />
      </div>
      <Footer />
    </main>
  );
}