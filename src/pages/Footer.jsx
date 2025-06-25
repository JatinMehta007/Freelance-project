import { forwardRef } from "react";

export const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-800 text-center py-4 text-sm text-white">
  <div>© 2025 Gemstone Boutique. All rights reserved.</div>
  <div className="mt-1 text-xs">
    Designed & Developed by <a href="https://portfolio-jatinmehta.vercel.app" className="text-orange-400 hover:underline">Jatin Kumar Mehta</a>
  </div>
</footer>
  );
});