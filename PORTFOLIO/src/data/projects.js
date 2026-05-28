export const projects = [
  {
    name: "OrbitLearn",
    desc: "AI-powered LMS SaaS platform with subscriptions & interactive classrooms.",
    fullDesc:
      "Built a scalable AI-powered Learning Management System featuring secure authentication via Clerk, Stripe-based subscriptions, AI classrooms with vocal agents, auto-generated quizzes, automated summaries, and personalized learning reports.",
    highlight:
      "Improved learner engagement and instructor efficiency through AI-driven automation.",
    impact: [
      "Implemented Stripe subscription & billing workflows",
      "Developed AI-powered quizzes, summaries, and learning reports",
      "Role-based authentication and secure data management via Supabase",
    ],
    tech: "Next.js · TypeScript · Supabase · Stripe · OpenAI",
    link: "https://github.com/yo-soy-dev/OrbitLearn",
    live: "https://saas-app-sand-seven.vercel.app/",
    image: "/projects/orbitlearn.png",
  },
  {
    name: "CreonixAI",
    desc: "AI content & image generation SaaS platform with automation workflows.",
    fullDesc:
      "Developed a full-stack AI SaaS platform providing content generation, image editing, background removal, and resume analysis tools with automated email workflows, tier-based subscriptions, and a polished dashboard experience.",
    highlight:
      "Enhanced user productivity by unifying multiple AI tools into a single platform.",
    impact: [
      "Built secure REST APIs with Node.js and PostgreSQL",
      "Integrated OpenAI for content and image generation",
      "Automated email notifications using Brevo and Nodemailer",
      "Designed SaaS-style dashboard UI",
    ],
    tech: "React · Node.js · PostgreSQL · OpenAI · Brevo",
    link: "https://github.com/yo-soy-dev/CreonixAI",
    live: "https://ai-saas-appfrontend.vercel.app/",
    image: "/projects/creonix.png",
  },
  {
    name: "SyncForge",
    desc: "Production-grade real-time collaborative code editor with microservices architecture.",
    fullDesc:
      "Architected a real-time collaborative code editor using microservices architecture with 6 independently deployed Node.js services — API Gateway, Auth, Room, Collaboration, AI Assistant, and Code Execution. Implemented conflict-free multi-user synchronization using Yjs CRDT and Socket.IO with Redis Pub/Sub, and built an in-browser sandboxed code execution engine supporting JavaScript, Python, and TypeScript.",
    highlight:
      "Deployed 6 microservices on Render with MongoDB Atlas and Upstash Redis; containerized entire stack using Docker Compose enabling one-command local development.",
    impact: [
      "Architected 6 independently deployed microservices with API Gateway pattern",
      "Implemented real-time multi-user sync using Yjs CRDT & Redis Pub/Sub",
      "Built AI code assistant (review, fix, explain, chat) powered by Mistral AI",
      "Containerized entire stack with Docker Compose for one-command local dev",
    ],
    tech: "React · Node.js · Socket.IO · Yjs · Redis · MongoDB · Docker",
    link: "https://github.com/yo-soy-dev/SyncForge",
    live: "https://sync-forge-psi.vercel.app",
    image: "/projects/syncforge.png",
  },
  {
    name: "Novalume",
    desc: "AI-powered resume builder platform with ATS optimization.",
    fullDesc:
      "Created a MERN-based resume builder with secure JWT authentication, multi-template support, live editing and preview, AI-driven content suggestions, ATS optimization, and ImageKit integration for profile image enhancement.",
    highlight:
      "Streamlined resume creation workflows, enabling fast and professional resume generation.",
    impact: [
      "Integrated Google Gemini API for AI resume intelligence",
      "Implemented dynamic resume templates with real-time preview",
      "Optimized resumes for ATS compatibility",
      "Enhanced profile images with ImageKit background removal",
    ],
    tech: "React · Node.js · MongoDB · Express.js · Gemini API · ImageKit",
    link: "https://github.com/yo-soy-dev/Novalume",
    live: "https://resumeclient.vercel.app/",
    image: "/projects/novalume.png",
  },
  {
    name: "BookWorm",
    desc: "Cross-platform social reading app with real-time feeds & media sharing.",
    fullDesc:
      "Built a full-stack cross-platform mobile application using React Native (Expo) with a Node.js and MongoDB backend featuring JWT authentication, infinite scrolling feeds, Cloudinary media uploads, and complete CRUD workflows.",
    highlight:
      "Demonstrated end-to-end mobile app development with real-world auth, pagination, and cloud deployment.",
    impact: [
      "Implemented JWT-based secure authentication",
      "Built infinite scrolling social feed",
      "Integrated Cloudinary for image uploads",
      "Developed RESTful APIs with Node.js & MongoDB",
    ],
    tech: "React Native · Expo · Node.js · MongoDB · Express",
    link: "https://github.com/yo-soy-dev/BookWorm",
    live: "https://bookworm-eo73.onrender.com/",
    image: "/projects/bookworm.png",
  },
];
