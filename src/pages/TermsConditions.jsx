import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TermsConditions() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-rg-champ">
            <h1 className="text-3xl md:text-4xl font-glam uppercase tracking-widest text-rg-rose mb-8 text-center">
                Terms & Conditions
            </h1>
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-[rgba(255,255,255,0.8)]">
                <p>
                    Welcome to BrownTown. By accessing our website or attending our events,
                    you agree to be bound by these Terms & Conditions. Please read them carefully.
                </p>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    1. Event Admission
                </h2>
                <p>
                    BrownTown reserves the right to refuse admission or eject any
                    person whose conduct is deemed disorderly, who uses vulgar or abusive
                    language, or who fails to comply with our venue rules. All attendees must
                    be of legal drinking age for events where alcohol is served, and valid ID
                    is required for entry.
                </p>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    2. Ticket Policy
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>All ticket sales are final. No refunds or exchanges unless an event is cancelled.</li>
                    <li>Tickets are transferable only through our official resale partners or platforms.</li>
                    <li>We are not responsible for lost or stolen tickets.</li>
                </ul>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    3. Media Release
                </h2>
                <p>
                    By entering a BrownTown event, you consent to be photographed, filmed,
                    and/or otherwise recorded. Your entry constitutes your consent to such
                    photography, filming, and/or recording and to any use, in any and all
                    media throughout the universe in perpetuity, of your appearance, voice,
                    and name for any purpose whatsoever in connection with BrownTown.
                </p>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    4. Liability Waiver
                </h2>
                <p>
                    Attendees assume all risks and dangers incidental to attending the event,
                    whether occurring prior to, during, or after the event. BrownTown
                    and its affiliates are not liable for any personal injury, loss, or
                    damage to property.
                </p>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    5. Code of Conduct
                </h2>
                <p>
                    We are committed to providing a safe and inclusive environment.
                    Harassment of any kind towards guests or staff will not be tolerated and
                    will result in immediate removal from the event without refund.
                </p>

                <h2 className="text-xl font-semibold text-rg-champ mt-6 mb-2 uppercase tracking-wide">
                    6. Changes to Terms
                </h2>
                <p>
                    We reserve the right to modify these terms at any time. Changes will be
                    effective immediately upon posting to our website.
                </p>

                <p className="mt-8 text-xs text-[rgba(255,255,255,0.5)]">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
