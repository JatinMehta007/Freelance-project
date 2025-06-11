import {
  // IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  // IconExchange,
  IconHome,
  // IconNewSection,
  // IconTerminal2,
  // IconHome,
  IconInfoCircle,
  IconPhoto,
  IconPhone,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating";

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
  <div className="bg-black min-h-screen flex flex-col justify-between">
    {/* Header */}
    <div className="p-4 flex justify-between bg-red-500 text-white">
      <p className="text-xl font-bold tracking-wide">Gemstone Boutique</p>
    <div className="text-white justify-between">
      <a href="asda"> asd</a>
      <a href="asda"> asd</a>
      <a href="asda"> asd</a>
      <a href="asda"> asd</a>
    </div>
    </div>

    <div className="w-full flex justify-center py-6">
      <FloatingDock mobileClassName="translate-y-0" items={links} />
    </div>
  </div>
);
};
