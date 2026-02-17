export interface Testimonial {
  name: string;
  role: string;
  avatar: string; // emoji or image path
  text: string;
  rating: number; // 1-5 stars
}

export const testimonials: Testimonial[] = [
  {
    name: "Mom",
    role: "Chief Life Supporter",
    avatar: "👩",
    text: "She's such a good girl! Always fixes my phone when it 'stops working' (turns out I just need to charge it). Very talented with the computers. 5 stars, would recommend to anyone!",
    rating: 5,
  },
  {
    name: "Football Coach",
    role: "Professional Yeller",
    avatar: "⚽",
    text: "Yuval showed incredible dedication on the field... until she discovered coding and realized sitting is way more comfortable. Now she only runs when the code compiles. But hey, at least her commit game is strong!",
    rating: 5,
  },
  {
    name: "Cat",
    role: "Quality Assurance Manager",
    avatar: "🐱",
    text: "Meow meow meow meow. Purr. Meow meow MEOW! (Translation: She feeds me on time and provides excellent keyboard warming services. Sits at desk all day which is perfect for my supervision needs.)",
    rating: 5,
  },
  {
    name: "Coffee Machine",
    role: "Daily Motivation Provider",
    avatar: "☕",
    text: "We've been working together since 6 AM every day for the past 4 years. She literally cannot function without me. I've powered more features than her IDE. Basically, I deserve part of her salary.",
    rating: 5,
  },
  {
    name: "Stack Overflow",
    role: "The Real Teacher",
    avatar: "📚",
    text: "Let's be honest, I taught her everything. She still visits me daily. Our relationship is built on mutual respect: she respects my answers, and I respect that she actually reads the documentation sometimes.",
    rating: 5,
  },
  {
    name: "Rubber Duck",
    role: "Senior Debugging Consultant",
    avatar: "🦆",
    text: "I just sit here and listen. Yet somehow, she solves every problem by explaining it to me. I've never said a word, but I'm apparently the most helpful team member. Easy gig.",
    rating: 5,
  },
];
