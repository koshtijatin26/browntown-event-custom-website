import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingTitle, setBookingTitle] = useState("");

    const openBooking = (title = "General Booking") => {
        setBookingTitle(title);
        setIsModalOpen(true);
    };

    const closeBooking = () => {
        setIsModalOpen(false);
        setBookingTitle("");
    };

    return (
        <BookingContext.Provider
            value={{ isModalOpen, bookingTitle, openBooking, closeBooking }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    return useContext(BookingContext);
}
