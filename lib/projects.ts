export type Project = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  tech: string[];
  type: "Full-Stack" | "Frontend" | "Creative";
  github: string;
  demo: string;
  featured: boolean;
  status: "Completed" | "In Progress";
  features: string[];
};

export const projects: Project[] = [
  {
    title: "SocialSphere",
    slug: "socialsphere",
    description:
      "A full-stack social media platform with authentication, profiles, posts, comments, likes, follows, and media uploads.",
    longDescription:
      "A portfolio-quality social media platform built to explore real-world full-stack application architecture, authentication, database relationships, and user-generated content.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Cloudinary"],
    type: "Full-Stack",
    github: "https://github.com/salih-x-tech/CodeAlpha_SocialSphere",
    demo: "",
    featured: true,
    status: "Completed",
    features: [
      "User authentication",
      "User profiles",
      "Create and manage posts",
      "Comments and likes",
      "Follow system",
      "Image uploads",
    ],
  },

  {
    title: "E-Commerce Store",
    slug: "ecommerce-store",
    description:
      "A full-stack e-commerce platform with authentication, products, cart, reviews, wishlist functionality, and image uploads.",
    longDescription:
      "A complete e-commerce application focused on backend development, database management, authentication, product workflows, and responsive user experiences.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "EJS", "Cloudinary"],
    type: "Full-Stack",
    github: "https://github.com/salih-x-tech/CodeAlpha_Ecommerce_Store",
    demo: "https://codealphaecommercestore-production-d574.up.railway.app",
    featured: true,
    status: "Completed",
    features: [
      "User authentication",
      "Product management",
      "Shopping cart",
      "Wishlist",
      "Reviews and ratings",
      "Cloud image uploads",
    ],
  },

  {
    title: "Birthday Surprise",
    slug: "birthday-surprise",
    description:
      "An interactive cinematic web experience focused on animations, responsive design, personalized content, and engaging interactions.",
    longDescription:
      "A creative frontend experience designed around animation, storytelling, responsive layouts, and personalized interactions.",
    tech: ["HTML", "CSS", "JavaScript", "Animations"],
    type: "Creative",
    github: "https://github.com/salih-x-tech/Birthday-Surprise",
    demo: "https://birthday-surprise-fklyowqtm-salih-hayat-s-projects.vercel.app",
    featured: true,
    status: "Completed",
    features: [
      "Responsive design",
      "Interactive animations",
      "Personalized content",
      "Interactive user experience",
      "Mobile-friendly interface",
    ],
  },

  {
    title: "NeuralOps",
    slug: "neuralops-cinematic-landing-page",
    description:
      "A premium cinematic AI landing page focused on modern frontend development, visual design, animations, and polished UX.",
    longDescription:
      "A visually focused landing page exploring modern interface design, cinematic presentation, animation, and frontend implementation.",
    tech: ["JavaScript", "Frontend", "UI/UX", "Animation"],
    type: "Frontend",
    github:
      "https://github.com/salih-x-tech/neuralops-cinematic-landing-page",
    demo: "https://salih-x-tech.github.io/neuralops-cinematic-landing-page/",
    featured: true,
    status: "Completed",
    features: [
      "Cinematic UI",
      "Responsive layout",
      "Modern visual design",
      "Interactive animations",
    ],
  },

  {
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description:
      "A responsive weather application that retrieves real-world weather data through an API and presents it through a clean interface.",
    longDescription:
      "A practical JavaScript project focused on working with external APIs, handling asynchronous data, and presenting real-world information through a responsive interface.",
    tech: ["JavaScript", "API", "CSS", "Responsive UI"],
    type: "Frontend",
    github: "https://github.com/salih-x-tech/weather-dashboard",
    demo: "https://salih-x-tech.github.io/weather-dashboard",
    featured: true,
    status: "Completed",
    features: [
      "Weather API integration",
      "Real-time data",
      "Responsive interface",
      "Dynamic UI updates",
    ],
  },
];