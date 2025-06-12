import { forwardRef } from "react";

export const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-gray-200 py-8 text-center">
      <p>© 2025 Sparkle Jewels. All rights reserved.</p>
      <p className="text-xs text-gray-500">Website by Jatin Kumar Mehta</p>
    </footer>
  );
});