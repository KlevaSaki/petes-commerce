import { Outlet } from "react-router-dom";

import Footer from "../src/components/layout/Footer";
import Navbar from "../src/components/layout/Navbar.tsx";

/**
 * Shared Site Layout
 */

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
