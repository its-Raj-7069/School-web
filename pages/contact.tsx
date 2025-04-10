import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto p-6">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <form className="flex flex-col gap-4 mt-4" method="POST">
          <input type="text" placeholder="Your Name" className="border p-2" />
          <input type="email" placeholder="Email" className="border p-2" />
          <textarea placeholder="Your Message" className="border p-2"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
