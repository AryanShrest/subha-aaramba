import { createClient } from "@supabase/supabase-js";

export type Service = {
  id: string;
  title: string;
  vendor: string;
  price: string;
  description: string;
  rating: number;
  reviews: number;
  image_url: string;
  video_url: string | null;
  created_at: string;
};

const supabaseUrl = "https://gfjvjatvibiwkbgeymlt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmanZqYXR2aWJpd2tiZ2V5bWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMzM1NTIsImV4cCI6MjA5OTcwOTU1Mn0.yRcJtzLBi6cZ_DQf7b2BWipwQXyXWVJLK4vZNoBayVw";

export const supabase = createClient(supabaseUrl, supabaseKey);

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Overhead Water Tank Cleaning",
    vendor: "शुभ आरम्भ Cleaning",
    price: "Rs 1,500",
    description: "Service Overview\nProfessional overhead water tank cleaning using high-pressure jets and eco-friendly disinfectants.\n\nWhat's Included\n• Full tank draining\n• High-pressure scrubbing\n• Disinfection & sanitization\n• Water quality check",
    rating: 4.8,
    reviews: 124,
    image_url: "/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp",
    video_url: null,
    created_at: "2024-01-01",
  },
  {
    id: "2",
    title: "Underground Reserve Tank Cleaning",
    vendor: "शुभ आरम्भ Cleaning",
    price: "Rs 2,500",
    description: "Service Overview\nDeep cleaning of underground reserve tanks with specialized equipment.\n\nWhat's Included\n• Sludge removal\n• Pressure washing\n• Anti-bacterial treatment\n• Post-clean inspection",
    rating: 4.7,
    reviews: 98,
    image_url: "/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp",
    video_url: null,
    created_at: "2024-01-02",
  },
  {
    id: "3",
    title: "Septic Tank Cleaning",
    vendor: "शुभ आरम्भ Cleaning",
    price: "Rs 3,500",
    description: "Service Overview\nComplete septic tank pumping and cleaning across Kathmandu valley.\n\nWhat's Included\n• Full tank pumping\n• Sludge disposal\n• Tank inspection\n• Deodorization",
    rating: 4.9,
    reviews: 210,
    image_url: "/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp",
    video_url: null,
    created_at: "2024-01-03",
  },
  {
    id: "4",
    title: "Sewage & Drainage Clearing",
    vendor: "शुभ आरम्भ Cleaning",
    price: "Rs 2,000",
    description: "Service Overview\nBlocked drain and sewage line clearing using professional jetting equipment.\n\nWhat's Included\n• Blockage diagnosis\n• High-pressure jetting\n• Pipe inspection\n• Same-day service",
    rating: 4.6,
    reviews: 87,
    image_url: "/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp",
    video_url: null,
    created_at: "2024-01-04",
  },
];
