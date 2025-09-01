// src/hooks/useVantaWaves.js
import { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";


/**
* Reusable hook to attach Vanta Waves to any element.
* Usage: const ref = useVantaWaves(options); <div ref={ref} />
*/
export default function useVantaWaves(options = {}) {
const containerRef = useRef(null);
const [vanta, setVanta] = useState(null);


useEffect(() => {
// Respect reduced motion preferences
const prefersReduced =
typeof window !== "undefined" &&
window.matchMedia &&
window.matchMedia("(prefers-reduced-motion: reduce)").matches;


if (prefersReduced) return; // Skip animation for accessibility


if (!vanta && containerRef.current) {
const effect = WAVES({
el: containerRef.current,
THREE,
mouseControls: true,
touchControls: true,
gyroControls: false,
minHeight: 200.0,
minWidth: 200.0,
scale: 1.0,
scaleMobile: 1.0,
// Nice defaults – customize below or via options
color: 0x22d3ee, // Tailwind cyan-400-ish
shininess: 35.0,
waveHeight: 20.0,
waveSpeed: 1.0,
zoom: 0.85,
...options, // allow overrides
});
setVanta(effect);
}


return () => {
// Clean up on unmount or route changes
if (vanta) {
vanta.destroy();
}
setVanta(null);
};
// Intentionally DO NOT add `options` as a dependency to avoid re-inits
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [vanta]);


return containerRef;
}