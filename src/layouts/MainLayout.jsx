import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";
import { BookingProvider } from "../context/BookingContext";

export default function MainLayout() {
  return (
    <BookingProvider>
      <div className="bg-rg-deep">
        <Header />

        {/* <main className="flex-1"> */}
        <Outlet />
        {/* </main> */}

        <Footer />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}
