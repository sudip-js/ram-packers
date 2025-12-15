/**
 * Business Configuration File
 * ------------------------------------------------------------
 * Centralized place to manage all business-related constants
 * like name, contact info, social links, and metadata.
 * ------------------------------------------------------------
 */

export const businessConfig = {
  // 🏢 Basic Info
  name: "Ram Packers",
  owner: "Kamlesh Kumar",
  tagline: "Reliable Packers and Movers You Can Trust",
  description:
    "Ram Packers offers professional, safe, and affordable packing and moving services across India. We specialize in home relocation, office shifting, and vehicle transport with customer satisfaction as our top priority.",

  // 📍 Address Info
  address: {
    line1: "Sector 2",
    line2: "",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "201301",
  },

  // ☎️ Contact Info
  contact: {
    phone: "+91 8826449653", // Display number
    whatsapp: "918826449653", // For wa.me links (no '+')
    email: "support@rampackers.in",
  },

  // 🌐 Website & Social Links
  website: "https://www.rampackers.in",
  socials: {
    facebook: "https://facebook.com/rampackers",
    instagram: "https://instagram.com/rampackers.in",
    twitter: "https://twitter.com/rampackersin",
    linkedin: "https://linkedin.com/company/rampackers",
  },

  // 💬 Messaging Defaults
  messages: {
    defaultWhatsApp:
      "Hello Ram Packers! I’d like to know more about your packing and moving services.",
    supportWhatsApp: "Hi, I need assistance with my relocation booking.",
  },

  // 🕒 Business Hours
  hours: {
    mondayToSaturday: "9:00 AM – 8:00 PM",
    sunday: "Closed",
  },

  // ⚙️ Meta / Branding
  meta: {
    logo: "/assets/logo.svg",
    favicon: "/assets/favicon.ico",
    themeColor: "#ff8c00", // your Bhagwa primary color
    language: "en-IN",
  },
} as const;

export type BusinessConfig = typeof businessConfig;
