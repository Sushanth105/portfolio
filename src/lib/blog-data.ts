// src/lib/blog-data.ts
import type { BlogPost } from "@/types";

// Mock data for blog posts
// Moved from blog-post-list.tsx to be accessible by the dynamic page
export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    title: "Understanding the Harmony in Nature: A UHV Perspective",
    date: "August 15, 2023",
    snippet: "Nature, in its pristine form, is a profound teacher of harmony and interconnectedness, concepts central to Universal Human Values (UHV). Observe the silent symphony of an ecosystem...", // Shorter snippet
    content: "Nature, in its pristine form, is a profound teacher of harmony and interconnectedness, concepts central to Universal Human Values (UHV). Observe the silent symphony of an ecosystem: the trees providing shelter and oxygen, the flowers offering nectar to bees, the rivers nourishing the land, and the soil supporting all life. Each element, from the smallest microbe to the largest mammal, plays a crucial role, existing in a state of mutual fulfillment and co-existence. This intricate web of life demonstrates a natural order where every entity contributes to the larger whole, thriving not in isolation but through symbiotic relationships. \n\nUHV encourages us to recognize this inherent harmony and our place within it. When we see a forest, we don't just see trees; we see a community where competition and cooperation are balanced, where resources are shared, and where life continuously regenerates. This self-regulation and sustainability in nature are direct reflections of values like responsibility, gratitude, and respect for all existence. By understanding how nature maintains its equilibrium – the cycles of seasons, the flow of energy, the delicate balance between predator and prey – we can draw parallels to how human societies can function more harmoniously. Living in accordance with these natural principles, aligning our actions with the values of co-existence and mutual prosperity, leads to a sense of peace, fulfillment, and a deeper connection with the world around us. It's an invitation to move from a human-centric view to a life-centric one, recognizing that our well-being is intrinsically linked to the well-being of the entire natural world.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "serene nature landscape"
  },
];
