import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;