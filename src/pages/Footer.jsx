import { forwardRef } from "react";

export const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-neutral-900 text-white py-6 text-center  border-t border-neutral-700">
  <p className="text-sm italic tracking-wide text-gray-400">
    ~ Precision in every facet ~
  </p>
  <p className="text-sm  tracking-wide leading-6">
    © 2025 <span className="font-semibold">Gemstone Boutique</span>. All rights reserved.
  </p>
  <p className="text-sm">
    Designed & Developed by{" "}
    <a
      href="https://your-portfolio-link.com"
      className="font-semibold text-orange-400 hover:text-orange-300 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      Jatin Kumar Mehta
    </a>
  </p>
</footer>
  );
});