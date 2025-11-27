import profile from "../assets/ajay-jaykar.png";

export const personalInfo = {
  name: "Ajay Jaykar",
  title: "Frontend UI Developer",
  brand: "JayKron",
  bio: "A passionate Frontend UI Developer 🚀 with 2+ years of experience crafting responsive websites and web apps using React.js, TypeScript, and modern frameworks. Skilled in performance-focused design, smooth animations, and delivering top-tier UX.",
  email: "jaykron.dev@gmail.com",
  profileImage: profile,
  location: "India",
  resumeUrl: "#",
};
//
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/ajay-jaykar61",
  github: "https://github.com/ajayjkr67",
  facebook: "https://www.facebook.com/JayKron.Dev",
  email: "mailto:jaykron.dev@gmail.com",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85 },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", level: 80 },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85 },
    ]
  },
  {
    category: "Styling",
    items: [
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", level: 90 },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 85 },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 80 },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 90 },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Arden Website",
    description: "Responsive website with Bootstrap, animations, interactive forms & carousels. Features modern UI design with smooth transitions and user-friendly interface.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    githubUrl: "https://github.com/ajayjkr67/arden-demo",
    liveUrl: "https://arden-demo.netlify.app",
    featured: true,
  },
  {
    id: 2,
    title: "Biztrox Website",
    description: "Clean UI using HTML/CSS with animated elements and stylish design. Focused on modern aesthetics and smooth user experience with creative animations.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "SCSS", "Animation"],
    githubUrl: "https://github.com/ajayjkr67/biztrox-demo",
    liveUrl: "https://biztrox-demo.netlify.app",
    featured: true,
  },
];

export const experience = [
  {
    id: 1,
    company: "Alot Digital Solutions",
    position: "Fullstack Developer",
    duration: "1.5 years",
    period: "2024 - 2025",
    description: "Developed responsive and modern frontend web applications using React, JavaScript, and CSS frameworks, ensuring cross-device compatibility. Delivered clean UI designs with smooth animations and performance optimization, improving overall user experience.",
    technologies: ["React", "Node.js", "Postgres", "Express", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    type: "Full-time"
  },
  {
    id: 2,
    company: "Vishleshan Soft Sol.",
    position: "Software Developer",
    duration: "6 months",
    period: "2023 - 2024",
    description: "Focused on frontend development and UI/UX implementation, creating responsive and modern web applications. Used React, JavaScript, and CSS frameworks to deliver smooth, user-friendly experiences.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    type: "Full-time"
  }
];

export const education = [
  {
    id: 1,
    institution: "VIVA Institute of Technology",
    degree: "Computer Science",
    period: "2015 - 2018",
    description: "Focused on software development, algorithms, and modern web technologies.",
  },
  {
    id: 2,
    institution: "L&T Institute",
    degree: "Computer Science",
    period: "2011 - 2015",
    description: "Foundation in computer science principles and programming fundamentals.",
  }
];

export const certifications = [
  {
    id: 1,
    title: "Fullstack Web Development",
    provider: "Udemy",
    year: "2023",
    image: "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "React & JavaScript",
    provider: "Udemy",
    year: "2023",
    image: "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Fullstack Developer 2023",
    provider: "Coursera",
    year: "2023",
    image: "https://logos-world.net/wp-content/uploads/2021/11/Coursera-Logo.png",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Technical Support Fundamentals",
    provider: "Coursera",
    year: "2022",
    image: "https://logos-world.net/wp-content/uploads/2021/11/Coursera-Logo.png",
    credentialUrl: "#",
  }
];
