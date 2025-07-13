import { forwardRef } from "react";

export const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-neutral-900 text-gray-200 py-6 text-center  border-t border-neutral-700">
  <p className="text-sm italic tracking-wide text-gray-400">
    ~ Precision in every facet ~
  </p>
  <p className="text-sm  tracking-wide leading-5">
    © 2025 <span className="font-semibold">Gemstone Boutique</span>. All rights reserved.
  </p>
  <p className="text-base ">
    Owned by Parashnath Gems
  </p>
  
</footer>
  );
});