import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  Target,
  Lightbulb,
  Users,
  Award,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

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

export const allTeamMembers = [
  {
    id: 1,
    name: "Ankur Agrawal",
    role: "Managing Director",
    image: "/team/team-1.jpg",
    socialLinks: [
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
    ],
  },
  {
    id: 2,
    name: "Rowel Maharjan",
    role: "Full Stack Developer",
    image: "/team/team-2.jpg",
    socialLinks: [
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
    ],
  },
  {
    id: 3,
    name: "Chirag Khatiwada",
    role: "Frontend Developer",
    image: "/team/team-3.jpg",
    socialLinks: [
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
    ],
  },
  {
    id: 4,
    name: "Saman Shakya",
    role: "Ui/UX Designer",
    image: "/team/team-4.jpg",
    socialLinks: [
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
    ],
  },
  {
    id: 5,
    name: "Bijesh Malakar",
    role: "Project Manager",
    image: "/team/team-5.jpg",
    socialLinks: [
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
    ],
  },
  {
    id: 6,
    name: "Prashant Shrestha",
    role: "Support Staff",
    image: "/team/team-6.jpg",
    socialLinks: [
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
    ],
  },
];

export const contactData = [
  {
    id: "location",
    title: "Main Location",
    icon: MapPin,
    content: ["Putalisadak, Kathmandu", "Lalitpur, Nepal"],
  },
  {
    id: "email",
    title: "Email Address",
    icon: Mail,
    content: ["help@support.com", "info@aakashlab.net"],
  },
  {
    id: "phone",
    title: "Phone Number",
    icon: Phone,
    content: ["+977 9876540987", "+977 9874615942"],
  },
];

export const contacts = [
  {
    Icon: MapPin,
    title: "Locations",
    href: "https://www.google.com/maps/place/Aakash+Labs/@27.7032021,85.3200844,681m/data=!3m1!1e3!4m15!1m8!3m7!1s0x39eb19a64b5f13e1:0x28b2d0eacda46b98!2sPutalisadak,+Kathmandu+44600!3b1!8m2!3d27.7029275!4d85.3223452!16s%2Fg%2F1v76y1b5!3m5!1s0x39eb19c42539e481:0xd9d4a660ac7b44f2!8m2!3d27.7016427!4d85.3224273!16s%2Fg%2F11gg9d3lrr!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D",
    text: "Putalisadak, Kathmandu",
  },
  {
    Icon: Mail,
    title: "Email Us",
    href: "mailto:support@gmail.com",
    text: "support@gmail.com",
  },
  {
    Icon: Phone,
    title: "Phone Us",
    href: "tel:+977 9843800581",
    text: "+977 9843800581",
  },
];

export const footerServices = [
  {
    title: "Home",
    link: PATHNAME.home,
  },
  {
    title: "About",
    link: PATHNAME.about,
  },
  {
    title: "Team",
    link: PATHNAME.team,
  },
  {
    title: "Contact",
    link: PATHNAME.contact,
  },
  {
    title: "Movies",
    link: PATHNAME.movie,
  },
];
