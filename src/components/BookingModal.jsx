import { useState } from "react";
import axios from "axios";
import { useBooking } from "../context/BookingContext";
import { API_URL } from "../utils/constant";

export default function BookingModal() {
    const { isModalOpen, bookingTitle, closeBooking } = useBooking();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    if (!isModalOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post(`${API_URL}contact-create`, formData);
            if (response.data.status) {
                setSuccess(true);
                setFormData({ name: "", phone: "", message: "" });
                setTimeout(() => {
                    setSuccess(false);
                    closeBooking();
                }, 3000);
            } else {
                setError(response.data.message || "Something went wrong.");
            }
        } catch (err) {
            console.error("Error submitting booking request:", err);
            setError("Failed to send request. Please try again later.");
        } finally {
            setLoading(false);
        }
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
                    Have an idea, brand, or collab in mind? We’re listening.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
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
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            maxLength={10}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-rg-rose transition-colors"
                            placeholder="Your phone number"
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-rg-rose transition-colors"
                            placeholder="Your message (optional)"
                        ></textarea>
                    </div>

                    {error && (
                        <div className="text-red-500 text-xs tracking-wider uppercase text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Sending..." : "Confirm Request"}
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
