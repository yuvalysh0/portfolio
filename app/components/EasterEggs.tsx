"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EasterEggs = () => {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [secretClicks, setSecretClicks] = useState(0);
  const [showUnicorn, setShowUnicorn] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    const handleKonami = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setKonamiActivated(true);
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKonami);
    return () => window.removeEventListener("keydown", handleKonami);
  }, []);

  // Secret click on logo
  useEffect(() => {
    if (secretClicks === 7) {
      setShowUnicorn(true);
      setTimeout(() => {
        setShowUnicorn(false);
        setSecretClicks(0);
      }, 3000);
    }
  }, [secretClicks]);

  // Random fun facts that appear on scroll
  const funFacts = [
    "🎮 I once debugged a critical bug at 3 AM with only coffee and determination",
    "🍕 Pizza is my code review fuel",
    "🎵 I code better with lo-fi beats",
    "🐛 99 little bugs in the code, 99 little bugs. Take one down, patch it around, 127 little bugs in the code...",
    "☕ Coffee: Because debugging at 3 AM is a lifestyle",
    "🦆 My rubber duck is my best debugging partner",
  ];

  return (
    <>
      {/* Konami Code Activation Message */}
      <AnimatePresence>
        {konamiActivated && (
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] bg-base-100 border-4 border-primary rounded-2xl p-8 shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="text-center">
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🎉
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                You Found the Secret!
              </h2>
              <p className="text-lg text-base-content/70 mb-4">
                Konami Code Master Unlocked! 🎮
              </p>
              <p className="text-sm text-base-content/50">
                You&apos;re a true gamer developer! 👾
              </p>
              <motion.button
                className="mt-4 btn btn-primary"
                onClick={() => setKonamiActivated(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Awesome!
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unicorn Rain */}
      <AnimatePresence>
        {showUnicorn && (
          <>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="fixed text-6xl pointer-events-none z-[9999]"
                initial={{
                  top: -100,
                  left: `${Math.random() * 100}%`,
                  rotate: 0,
                }}
                animate={{
                  top: "120vh",
                  rotate: 360,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  ease: "linear",
                }}
              >
                🦄
              </motion.div>
            ))}
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] text-6xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              exit={{ scale: 0 }}
            >
              🌈 UNICORN MODE! 🌈
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <>
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="fixed text-3xl pointer-events-none z-[9999]"
                style={{
                  top: -50,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 1, y: 0 }}
                animate={{
                  y: window.innerHeight + 100,
                  rotate: Math.random() * 360,
                  x: Math.random() * 200 - 100,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 0.5,
                  ease: "linear",
                }}
              >
                {["🎉", "⭐", "✨", "🎊", "💫", "🌟"][Math.floor(Math.random() * 6)]}
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Hidden logo click counter */}
      <button
        onClick={() => setSecretClicks((prev) => prev + 1)}
        className="fixed top-4 left-4 opacity-0 hover:opacity-100 transition-opacity z-50 text-xs text-base-content/30"
        title="Secret clicks: 7 for surprise!"
      >
        {secretClicks > 0 && `${secretClicks}/7`}
      </button>
    </>
  );
};

export default EasterEggs;
