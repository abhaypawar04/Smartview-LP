// File: src/data/navigation.js
export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  {
    name: "Services",
    href: "#services",
    children: [
      { name: "CCTV Surveillance", href: "#services" },
      { name: "Networking Solutions", href: "#services" },
      { name: "Access Control", href: "#services" },
      { name: "Security Systems", href: "#services" },
    ],
  },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

