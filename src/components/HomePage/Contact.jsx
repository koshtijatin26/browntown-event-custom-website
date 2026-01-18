import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/constant";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-black via-[#120707] to-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 reveal">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-rg-rose mb-2">
            CONTACT
          </div>
          <h2 className="font-glam font-semibold text-xl md:text-2xl tracking-[0.22em] uppercase text-rg-champ">
            INQUIRIES & COLLABORATIONS
          </h2>
          <p className="mt-3 text-[0.9rem] text-[rgba(255,255,255,0.75)]">
            For inquiries, partnerships, or collaborations - reach out and let’s talk


          </p>
        </div>

        <form
          id="contactForm"
          className="space-y-4 max-w-xl mx-auto reveal"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
              />
            </div>
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="mt-1 w-full rounded-lg bg-black/60 border border-[rgba(255,255,255,0.25)] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-rg-rose"
            ></textarea>
          </div>

          {error && (
            <div className="text-red-500 text-xs tracking-wider uppercase text-center">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] text-[rgba(255,255,255,0.65)]">
            <span>Or email: <a href="mailto:info@browntownus.com" className="text-rg-champ hover:text-rg-champ/80 transition-colors">info@browntownus.com</a></span>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          {success && (
            <div
              id="contactSuccess"
              className="mt-3 text-[11px] tracking-[0.16em] uppercase text-rg-champ text-center flash-success"
            >
              Message sent — we’ll reply soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
