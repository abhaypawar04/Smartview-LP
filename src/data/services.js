// File: src/data/services.js

import {
  Camera,
  Shield,
  Wifi,
  Phone,
  Lock,
  Fingerprint,
  Smartphone,
  Bell,
  Flame,
} from "lucide-react";

export const services = [
  {
    id: 1,
    icon: Camera,
    title: "CCTV Surveillance",
    description:
      "High-definition camera systems for comprehensive monitoring and security.",
    image: "cctv.jpg",
  },
  {
    id: 2,
    icon: Shield,
    title: "CCTV Vigilance & Monitoring",
    description:
      "24/7 professional monitoring services with rapid response capabilities.",
    image: "vigilance.jpg",
  },
  {
    id: 3,
    icon: Wifi,
    title: "Networking Installation & Solutions",
    description: "Reliable network infrastructure design and implementation.",
    image: "networking.jpg",
  },
  {
    id: 4,
    icon: Phone,
    title: "Intercom Systems",
    description: "Advanced communication systems for buildings and facilities.",
    image: "intercom.jpg",
  },
  {
    id: 5,
    icon: Lock,
    title: "Access Control Devices",
    description: "Secure access management solutions for your premises.",
    image: "access.jpg",
  },
  {
    id: 6,
    icon: Fingerprint,
    title: "Biometric Systems",
    description: "State-of-the-art biometric authentication technology.",
    image: "/biometric.jpg",
  },
  {
    id: 7,
    icon: Smartphone,
    title: "Telephone Systems",
    description: "Modern VoIP and telephone solutions for businesses.",
    image: "telephone.jpg",
  },
  {
    id: 8,
    icon: Bell,
    title: "Video Door Phone Systems",
    description: "Integrated video intercom for enhanced entry security.",
    image: "vdp.jpg",
  },
  {
    id: 9,
    icon: Flame,
    title: "Fire Alarm Systems",
    description: "Early detection and alarm systems for fire safety.",
    image: "fire.jpg",
  },
];
