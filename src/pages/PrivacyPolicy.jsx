import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PrivacyPolicy() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-rg-champ">
            <h1 className="text-3xl md:text-4xl font-glam uppercase tracking-widest text-rg-rose mb-8 text-center">
                Privacy Policy
            </h1>
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-[rgba(255,255,255,0.8)]">
                <p>
                    At BrownTown, we value your privacy and are committed to protecting your
                    personal information. This Privacy Policy explains how we collect, use,
                    and safeguard your data when you visit our website or attend our events.
                </p>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    1. Information We Collect
                </h2>
                <p>
                    We may collect personal information such as your name, email address,
                    phone number, and event preferences when you:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Register for an event or purchase tickets.</li>
                    <li>Subscribe to our newsletter.</li>
                    <li>Contact us via our website form or email.</li>
                </ul>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    2. How We Use Your Information
                </h2>
                <p>
                    We use your information to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Process ticket purchases and registrations.</li>
                    <li>Send event updates, confirmations, and reminders.</li>
                    <li>Respond to your inquiries and support requests.</li>
                    <li>Improve our events and website experience.</li>
                </ul>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    3. Media & Photography
                </h2>
                <p>
                    Please be aware that our events are often photographed and filmed. By
                    attending a BrownTown event, you grant us permission to use
                    your image and likeness in our promotional materials, including social
                    media, website galleries, and marketing campaigns.
                </p>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    4. Data Protection
                </h2>
                <p>
                    We implement appropriate technical and organizational measures to
                    protect your personal information against unauthorized access, alteration,
                    disclosure, or destruction.
                </p>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    5. Contact Us
                </h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    <a href="mailto:info@browntownus.com" className="text-rg-rose hover:underline">
                        info@browntownus.com
                    </a>
                </p>

                <p className="mt-8 text-xs text-[rgba(255,255,255,0.5)]">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
