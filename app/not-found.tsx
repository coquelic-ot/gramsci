import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or removed.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-primary text-secondary font-semibold hover:bg-accent transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
