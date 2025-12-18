import { useState } from "react";
import { useBooking } from "../context/BookingContext";

export default function BookingModal() {
    const { isModalOpen, bookingTitle, closeBooking } = useBooking();
    const [success, setSuccess] = useState(false);

    if (!isModalOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            closeBooking();
        }, 3000);
    };

    return (
        <div className="modal-bg modal-open z-[60]" onClick={closeBooking}>
            <div
                className="modal-panel relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-white/50 hover:text-white"
                    onClick={closeBooking}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <h3 className="text-xl font-glam uppercase tracking-[0.15em] text-rg-champ mb-2">
                    {bookingTitle}
                </h3>
                <p className="text-sm text-white/70 mb-6">
                    Please fill out the form below to request your reservation.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-rg-rose transition-colors"
                            placeholder="Your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-rg-rose transition-colors"
                            placeholder="Your phone number"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-rg-rose transition-colors"
                            placeholder="Your message"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full mt-4">
                        Confirm Request
                    </button>

                    {success && (
                        <div className="mt-3 text-[11px] tracking-[0.16em] uppercase text-rg-champ text-center flash-success">
                            Message sent — we’ll contact you soon.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
