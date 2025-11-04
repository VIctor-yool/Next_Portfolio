// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-50 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Your Name
      </div>
    </footer>
  );
}
