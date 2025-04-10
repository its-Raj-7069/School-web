import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My School</h2>
        <p className="text-lg text-gray-700">
          Excellence in education, growth and values.
        </p>
      </main>
      <Footer />
    </>
  );
}
