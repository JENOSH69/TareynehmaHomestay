// src/components/TypedText.jsx
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Peaceful Escape",
        "Authentic Sikkimese Hospitality",
        "Traditional Wooden Cottages",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <span
      ref={el}
      className="text-lg sm:text-xl md:text-2xl font-light text-[#fefefe] drop-shadow-sm mt-2"
    />
  );
}
