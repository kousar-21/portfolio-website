// src/components/VantaWavesSection.jsx
import React, { useMemo } from "react";
import useVantaWaves from "../../Hooks/useVantaWaves";


/**
* Full-bleed hero/background section with Vanta Waves.
* Wrap any content; it’ll render above the animated canvas.
*/
export default function VantaWavesSection({ children, className = "", options = {} }) {
    const stableOptions = useMemo(() => options, [options]); // keep options stable
    const vantaRef = useVantaWaves(stableOptions);


    return (
        <section
            ref={vantaRef}
            className={
                "relative w-full h-[70vh] md:h-[85vh] overflow-hidden flex items-center justify-center " +
                className
            }
        >
            {/* Optional dark overlay to improve text contrast */}
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />


            {/* Foreground content */}
            <div className="relative z-10 container mx-auto px-4">{children}</div>
        </section>
    );
}