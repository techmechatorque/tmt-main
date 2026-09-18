// Single source of truth for contact and company facts.
// Import from here everywhere — never hardcode these strings in a component.

export const company = {
  name: "Tech Mecha Torque",
  legalName: "TechMecha Torque",
  email: "team@techmechatorque.com",
  phone: "+91 7993442607",
  phoneDisplay: "+91 79934 42607",
  whatsappUrl: "https://wa.me/917993442607",
  address: {
    line1: "Sangareddy",
    region: "Telangana",
    postalCode: "502 001",
    country: "India",
    countryCode: "IN-TG",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/techmecha-torque",
    instagram: "https://www.instagram.com/techmechatorque",
  },
  domains: {
    corporate: "https://techmechatorque.com",
    learningSpaces: "https://learningspaces.co.in",
    hotelVedha: "https://hotelvedha.com",
    swagath: "https://swagath.in",
    gandhiCenturyHighSchool: "https://www.gchssrd.com/",
  },
} as const;

export const whatsappLink = (message: string) =>
  `${company.whatsappUrl}?text=${encodeURIComponent(message)}`;
