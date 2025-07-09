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
    title: "Innovate with Technology",
    subtitle: "Building Tomorrow's Technology Today",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Development Team",
    subtitle: "Your Vision, Our Expertise",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Quality Assurance",
    subtitle: "Excellence in Every Detail",
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
