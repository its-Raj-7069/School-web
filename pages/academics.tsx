import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Academics() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold">Academics</h2>
        <ul className="mt-4 list-disc pl-6">
          <li>Mathematics</li>
          <li>Science</li>
          <li>Language Arts</li>
          <li>Computer Science</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
