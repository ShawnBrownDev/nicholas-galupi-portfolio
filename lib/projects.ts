export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Quantum Dashboard",
    description: "A real-time analytics dashboard with quantum-inspired UI animations and data visualization.",
    tech: ["React", "TypeScript", "D3.js", "WebGL"],
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    demoUrl: "https://portfolio-xi-lyart-1xxet5hw0h.vercel.app/",
    githubUrl: "github.com",
    category: "web"
  },
  {
    id: 2,
    title: "Neural Network Visualizer",
    description: "Interactive 3D visualization of neural network architectures with real-time training data.",
    tech: ["Python", "Three.js", "TensorFlow", "WebRTC"],
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    demoUrl: "https://portfolio-xi-lyart-1xxet5hw0h.vercel.app/",
    githubUrl: "#",
    category: "ai"
  },
  {
    id: 3,
    title: "Cosmic E-Commerce",
    description: "Space-themed e-commerce platform with AR product previews and blockchain payments.",
    tech: ["Next.js", "Solidity", "AR.js", "Stripe"],
    image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    demoUrl: "https://portfolio-xi-lyart-1xxet5hw0h.vercel.app/",
    githubUrl: "#",
    category: "web"
  },
  {
    id: 4,
    title: "Stellar API Gateway",
    description: "Microservices architecture with GraphQL federation and real-time subscriptions.",
    tech: ["Node.js", "GraphQL", "Docker", "Kubernetes"],
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
    demoUrl: "https://portfolio-xi-lyart-1xxet5hw0h.vercel.app/",
    githubUrl: "#",
    category: "backend"
  },
  {
    id: 5,
    title: "Holographic Chat",
    description: "Real-time messaging app with 3D holographic avatars and spatial audio.",
    tech: ["WebRTC", "Three.js", "Socket.io", "WebAudio"],
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
    demoUrl: "https://portfolio-xi-lyart-1xxet5hw0h.vercel.app/",
    githubUrl: "https://portfolio-xi-lyart-1xxet5hw0h.vercel.app/",
    category: "web"
  },
  {
    id: 6,
    title: "Quantum Blockchain",
    description: "Experimental blockchain implementation with quantum-resistant cryptography.",
    tech: ["Rust", "WebAssembly", "Cryptography", "P2P"],
    image: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
    demoUrl: "https://portfolio-xi-lyart-1xxet5hw0h.vercel.app/",
    githubUrl: "",
    category: "blockchain"
  }
];
