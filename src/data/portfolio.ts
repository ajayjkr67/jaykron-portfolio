// import profile from "../assets/ajay-jaykar.png";
import profile from "../assets/3.jpeg";

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
    liveUrl: "https://ajayjkr67.github.io/arden/",
    featured: true,
  },
  {
    id: 2,
    title: "Biztrox Website",
    description: "Clean UI using HTML/CSS with animated elements and stylish design. Focused on modern aesthetics and smooth user experience with creative animations.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "SCSS"],
    liveUrl: "https://ajayjkr67.github.io/biztrox/",
    featured: true,
  },
  {
    id: 3,
    title: "True View Eye Clinic",
    description: "Designed a clean, patient-friendly website for a modern eye-care clinic showcasing services from diagnostics to laser treatments, enabling online appointments, and delivering trust through accessible layout and clear messaging.",
    image: "https://mednix.themeht.com/wp-content/uploads/2025/10/eyecare7-600x500.jpg",
    technologies: ["React", "Node.js", "Tailwind CSS", "JavaScript", "material UI"],
    liveUrl: "https://ajayjkr67.github.io/clinic_test/",
    featured: true,
  },
  {
    id: 4,
    title: "MK Speciality Clinic",
    description: "Designed a patient-centric website for a multispeciality clinic, highlighting general care, vaccinations, urgent-care procedures with clear calls to action for appointments and contact, featuring easy navigation and responsive layout.",
    image: "https://ajayjkr67.github.io/mk_speciality_clinic/images/doctor_patient.jpg",
    technologies: ["React", "Node.js", "Tailwind CSS", "JavaScript", "SCSS"],
    liveUrl: "https://ajayjkr67.github.io/mk_speciality_clinic/",
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
