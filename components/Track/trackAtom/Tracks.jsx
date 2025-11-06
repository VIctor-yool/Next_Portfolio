import { Home, User, Briefcase, Code2, Mail } from "lucide-react";

const Tracks = [
  {
    id: "home", // app/home/page.jsx 존재해야 함
    title: "Home Track",
    artist: "Welcome",
    icon: Home,
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "about", // app/about/page.jsx 존재
    title: "About Me",
    artist: "My Story",
    icon: User,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "projects", // app/projects/page.jsx 존재
    title: "Projects",
    artist: "Portfolio",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "skills", // app/skills/page.jsx 존재
    title: "Tech Stack",
    artist: "Abilities",
    icon: Code2,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "contact", // app/contact/page.jsx 존재
    title: "Contact",
    artist: "Get in Touch",
    icon: Mail,
    color: "from-violet-500 to-purple-500",
  },
];

export default Tracks;
