import {
  IconBrandInstagram,
  IconBrandX,
  IconHome,
  IconInfoCircle,
  IconPhoto,
  IconPhone,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating";
import { Landing } from "./LandingPage";
import { About } from "./About";
import { ColourfulText } from "../ui/colorful";
import { Gallery } from "./Gallery";

export const Home = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Gallery",
      icon: (
        <IconPhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact us",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
  <div id="Home" className="bg-stone-200 min-h-screen flex flex-col justify-between">
    {/* Navbar */}
    <div className="p-4 flex justify-between  border-b">
      {/* <p className="text-xl font-bold tracking-wide">Gemstone Boutique</p> */}
        <div className="text-2xl font-bold">
          <ColourfulText text="Gemstone Boutique" />
        </div>
    <div className=" flex  justify-around  gap-8 w-1/2 font-mono tracking-wide font-medium">
      <a href="#Home" className="hover:text-orange-900"> Home</a>
      <a href="#About" className="hover:text-orange-900"> About</a>
      <a href="asda" className="hover:text-orange-900"> Gallery</a>
      <a href="asda" className="hover:text-orange-900"> Contact us</a>
    </div>
    </div>
    {/* Landing page */}
    <Landing></Landing>
    {/* About section */}
    <About ></About>
    {/* //Gallery */}
    <Gallery></Gallery>
<div className="fixed bottom-0 p-4 flex justify-center w-screen  shadow-md z-50">
  <FloatingDock mobileClassName="translate-y-0" items={links} />
</div>
  </div>
);
};
