import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">My School</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
