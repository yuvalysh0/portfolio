"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/utils/testimonials";
import { playfair } from "@/utils/fonts";

const TestimonialCard = ({
  name,
  role,
  avatar,
  text,
  rating,
  index,
}: {
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="relative group h-full"
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 50, rotateX: -10 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-300 p-6 h-full flex flex-col"
        whileHover={{
          scale: 1.02,
          borderColor: "oklch(var(--p))",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        {/* Gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating quote decoration */}
        <motion.div
          className="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          &ldquo;
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Avatar and Name */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="text-5xl"
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {avatar}
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm text-base-content/60 italic">{role}</p>
            </div>
          </div>

          {/* Rating Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <motion.span
                key={i}
                className="text-yellow-500 text-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{
                  duration: 0.3,
                  delay: index * 0.15 + i * 0.1,
                  type: "spring",
                }}
              >
                ⭐
              </motion.span>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-base-content/80 flex-1 leading-relaxed italic">
            &ldquo;{text}&rdquo;
          </p>

          {/* Verified Badge (humorous) */}
          <motion.div
            className="mt-4 pt-4 border-t border-base-300 flex items-center gap-2 text-xs text-base-content/50"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.15 + 0.5 }}
          >
            <span className="text-green-500">✓</span>
            <span>100% Real & Verified*</span>
          </motion.div>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 55%, transparent 100%)",
          }}
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            delay: index * 0.3,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Testimonials() {
  return (
    <section
      className="relative py-16 md:py-24 px-6 md:px-10 overflow-hidden"
      id="testimonials"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/5 to-secondary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Section Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px", amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${playfair.className}`}>
          What People Say.
        </h2>
        <p className="text-lg md:text-xl font-light mb-2">
          Totally real testimonials from totally real colleagues
        </p>
        <p className="text-sm text-base-content/50 italic">
          *Disclaimer: Credibility not guaranteed. Humor guaranteed.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
        ))}
      </div>

      {/* Fun Footer Note */}
      <motion.p
        className="text-center text-sm text-base-content/40 mt-12 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        (But seriously, check out my{" "}
        <a
          href="https://www.linkedin.com/in/yuval-shukrun/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          LinkedIn
        </a>{" "}
        for actual recommendations)
      </motion.p>
    </section>
  );
}
