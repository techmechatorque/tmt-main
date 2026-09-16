import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiSupabase,
  SiCloudflareworkers,
  SiNeon,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Database } from "lucide-react";

export interface TechStackItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

// The real tools we build with — used to render the "Tools chosen for the
// work" logo row on the Products page.
export const techStack: TechStackItem[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Vite", icon: SiVite },
  { name: "React Native", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Supabase", icon: SiSupabase },
  { name: "Cloudflare Workers", icon: SiCloudflareworkers },
  { name: "D1 / KV / R2", icon: Database },
  { name: "Neon", icon: SiNeon },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "REST / GraphQL", icon: SiGraphql },
  { name: "AWS", icon: FaAws },
];
