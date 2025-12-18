import { useBooking } from "../context/BookingContext";

export default function BookingModal() {
    const { isModalOpen, bookingTitle, closeBooking } = useBooking();

    if (!isModalOpen) return null;

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

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-rg-rose transition-colors"
                            placeholder="Your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-rg-rose transition-colors"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                            Guests
                        </label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-rg-rose transition-colors">
                            <option value="1" className="bg-black">1 Guest</option>
                            <option value="2" className="bg-black">2 Guests</option>
                            <option value="3" className="bg-black">3 Guests</option>
                            <option value="4" className="bg-black">4+ Guests</option>
                        </select>
                    </div>

                    <button className="btn btn-primary w-full mt-4">
                        Confirm Request
                    </button>
                </form>
            </div>
        </div>
    );
}
