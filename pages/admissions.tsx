import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Admissions() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold">Admissions</h2>
        <p className="mt-4 text-gray-700">
          Admission is open for the 2025-26 session. Apply now!
        </p>
      </main>
      <Footer />
    </>
  );
}
