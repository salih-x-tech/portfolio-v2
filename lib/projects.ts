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

  problem: string;
    solution: string;
    challenges: string[];
    learning: string;
  screenshots: {
    src: string;
    alt: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "SocialSphere",
    slug: "socialsphere",
    description:
      "A full-stack social media platform with authentication, profiles, posts, comments, likes, follows, and media uploads.",
    longDescription:
      "A portfolio-quality social media platform built to explore real-world full-stack application architecture, authentication, database relationships, and user-generated content.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Cloudinary",
    ],
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

    problem:
    "Build a social media platform that brings authentication, user profiles, posts, comments, likes, follows, and image uploads together in one full-stack application.",

    solution:
    "Built SocialSphere with Node.js and Express on the backend, MongoDB and Mongoose for data management, EJS for the interface, Express Session and bcrypt for authentication, and Cloudinary for image uploads.",

    challenges: [
    "Designing relationships between users, posts, comments, likes, and followers",
    "Implementing authentication and session-based user access",
    "Handling image uploads and storing media with Cloudinary",
    "Connecting the frontend views with backend routes and database operations",
    ],

    learning:
    "This project strengthened my understanding of full-stack architecture, authentication, MongoDB relationships, backend routing, user-generated content, and integrating external services.",
    screenshots: [
    {
        src: "/projects/socialsphere/home-feed.png",
        alt: "SocialSphere home feed",
    },
    {
        src: "/projects/socialsphere/profile.png",
        alt: "SocialSphere profile",
    },
    ],
  },

  {
    title: "E-Commerce Store",
    slug: "ecommerce-store",
    description:
      "A full-stack e-commerce platform with authentication, products, cart, reviews, wishlist functionality, and image uploads.",
    longDescription:
      "A complete e-commerce application focused on backend development, database management, authentication, product workflows, and responsive user experiences.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Cloudinary",
    ],
    type: "Full-Stack",
    github: "https://github.com/salih-x-tech/CodeAlpha_Ecommerce_Store",
    demo: "",
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

    problem:
    "Build a complete e-commerce application where users can browse products, manage their shopping cart, interact with products, and where administrators can manage store content.",

    solution:
    "Built the application using Node.js and Express for the backend, MongoDB and Mongoose for data management, EJS for server-rendered pages, session-based authentication for user access, and image uploads for product management.",

    challenges: [
    "Designing product, user, cart, and order-related data flows",
    "Implementing authentication and session-based access",
    "Handling product image uploads and storage",
    "Managing MongoDB documents and ObjectId relationships",
    "Debugging routing and validation issues across the application",
    ],

    learning:
    "This project improved my understanding of full-stack architecture, Express routing, MongoDB and Mongoose, authentication, file uploads, server-rendered applications, and debugging real-world backend issues.",
    screenshots: [
    {
        src: "/projects/ecommerce-store/admin-dashboard.png",
        alt: "E-Commerce admin dashboard",
    },
    {
        src: "/projects/ecommerce-store/cart.png",
        alt: "E-Commerce shopping cart",
    },
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
    demo: "",
    featured: true,
    status: "Completed",
    features: [
      "Responsive design",
      "Interactive animations",
      "Personalized content",
      "Interactive user experience",
      "Mobile-friendly interface",
    ],

    problem:
    "Create a memorable and personalized birthday experience that feels more engaging than a traditional static webpage and works smoothly across devices.",

    solution:
    "Built an interactive birthday website using HTML, CSS, and JavaScript with animated sections, personalized content, interactive elements, sound controls, keyboard support, and mobile-friendly interactions.",

    challenges: [
    "Creating smooth animations without making the experience feel overwhelming",
    "Designing the experience to work well on mobile devices",
    "Coordinating multiple interactive elements and sound effects",
    "Improving touch and keyboard interactions for better accessibility",
    ],

    learning:
    "This project strengthened my frontend skills, especially responsive design, JavaScript interactions, animation sequencing, user experience, and building a polished experience around a specific creative idea.",


    screenshots: [
    {
        src: "/projects/birthday-surprise/message.png",
        alt: "Birthday Surprise message",
    },
    {
        src: "/projects/birthday-surprise/cake.png",
        alt: "Birthday Surprise cake interaction",
    },
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
    demo: "",
    featured: true,
    status: "Completed",
    features: [
      "Cinematic UI",
      "Responsive layout",
      "Modern visual design",
      "Interactive animations",
    ],

    problem:
    "Create a premium AI-focused landing page that communicates a modern technology product through a strong visual identity, cinematic presentation, and responsive interface.",

    solution:
    "Built a cinematic landing page focused on modern frontend design, responsive layouts, visual hierarchy, animations, and an immersive presentation for an AI-themed product.",

    challenges: [
    "Creating a strong visual hierarchy while keeping the interface readable",
    "Balancing animations with usability and performance",
    "Designing a responsive experience across different screen sizes",
    "Maintaining consistency across the landing page sections",
    ],

    learning:
    "This project improved my understanding of modern frontend UI design, responsive layouts, animation, visual hierarchy, and creating polished interfaces around a product concept.",


    screenshots: [
    {
        src: "/projects/neuralops/home.png",
        alt: "NeuralOps home page",
    },
    {
        src: "/projects/neuralops/dashboard.png",
        alt: "NeuralOps dashboard",
    },
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
    demo: "",
    featured: true,
    status: "Completed",
    features: [
      "Weather API integration",
      "Real-time data",
      "Responsive interface",
      "Dynamic UI updates",
    ],

    problem:
      "Create a practical weather application that can retrieve real-world weather information and present it clearly through a responsive interface.",

    solution:
      "Built a responsive weather dashboard using JavaScript and a weather API to retrieve and display dynamic weather information, with search functionality and search history for a more useful user experience.",

    challenges: [
      "Working with asynchronous API requests and responses",
      "Handling dynamic weather data and updating the interface",
      "Managing search functionality and search history",
      "Designing a responsive interface for different screen sizes",
    ],

    learning:
      "This project strengthened my understanding of JavaScript asynchronous programming, API integration, dynamic DOM updates, error handling, and responsive frontend development.",

    screenshots: [
    {
        src: "/projects/weather-dashboard/home-light.png",
        alt: "Weather Dashboard home interface",
    },
    {
        src: "/projects/weather-dashboard/search-history.png",
        alt: "Weather Dashboard search history",
    },
    ],
  },
];