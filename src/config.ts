import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { PATHNAME } from "./pathname";

export const navbarItems = [
  {
    title: "Home",
    href: PATHNAME.home,
  },
  {
    title: "About",
    href: PATHNAME.about,
  },
  {
    title: "Team",
    href: PATHNAME.team,
  },
  {
    title: "Contact",
    href: PATHNAME.contact,
  },
];

export const socialLinks = [
  {
    href: "https://www.facebook.com/AakashGroupNepal/",
    label: "Facebook",
    icon: faFacebookF,
  },
  {
    href: "https://www.instagram.com/aakash.group/",
    label: "Instagram",
    icon: faInstagram,
  },
  {
    href: "https://www.linkedin.com/company/aakashgroupnepal/?originalSubdomain=np",
    label: "LinkedIn",
    icon: faLinkedin,
  },
];

export const slides = [
  {
    title: "Innovation at Its Best",
    subtitle: "Building Tomorrow's Technology Today",
    description:
      "We create cutting-edge solutions that transform businesses and improve lives through innovative technology.",
    bgColor: "from-blue-600 to-purple-700",
  },
  {
    title: "Development Team",
    subtitle: "Your Vision, Our Expertise",
    description:
      "Our experienced developers bring your ideas to life with modern technologies and best practices.",
    bgColor: "from-green-500 to-blue-600",
  },
  {
    title: "Quality Assurance",
    subtitle: "Excellence in Every Detail",
    description:
      "We ensure every project meets the highest standards of quality and performance.",
    bgColor: "from-purple-600 to-pink-600",
  },
];
