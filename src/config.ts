import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Target, Lightbulb, Users, Award } from "lucide-react";

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
    image: "./slider/slider-1.png",
  },
  {
    title: "Development Team",
    subtitle: "Your Vision, Our Expertise",
    image: "./slider/slider-2.png",
  },
  {
    title: "Quality Assurance",
    subtitle: "Excellence in Every Detail",
    image: "./slider/slider-3.png",
  },
];

export const achievements = [
  {
    start: 0,
    end: 100,
    suffix: "%",
    delay: 0.2,
    duration: 3,
    title: "CUSTOMER SATISFACTION",
  },
  {
    start: 0,
    end: 32,
    suffix: "+",
    delay: 0.2,
    duration: 2,
    title: "EXPERTS & SPECIALISTS",
  },
  {
    start: 0,
    end: 63,
    suffix: "+",
    delay: 0.2,
    duration: 2.5,
    title: "SUCCESSFUL DEPLOYMENTS",
  },
];

export const features = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "We build with intention focusing on delivering results that truly matter and drive long-term client success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Core",
    description:
      "By leveraging modern technologies and bold ideas, we tackle complex challenges with smart, scalable solutions.",
  },
  {
    icon: Users,
    title: "Team-Centric Approach",
    description:
      "We collaborate closely with our clients, working as one team to ensure transparency, trust, and shared outcomes.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description:
      "From user experience to performance, we maintain rigorous standards to ensure every detail is done right.",
  },
];
