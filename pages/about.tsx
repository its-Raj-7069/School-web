import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="mt-4 text-gray-700">Our mission is to inspire and educate...</p>
      </main>
      <Footer />
    </>
  );
}
