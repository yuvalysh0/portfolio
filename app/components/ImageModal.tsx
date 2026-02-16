"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImageModalProps = {
  image: { src: string; alt: string };
  isOpen: boolean;
  handleClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  handleClose,
}) => {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
      // Zoom with + and - keys
      if (event.key === "+" || event.key === "=") {
        setZoom((prev) => Math.min(prev + 0.25, 3));
      }
      if (event.key === "-" || event.key === "_") {
        setZoom((prev) => Math.max(prev - 0.25, 0.5));
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      setZoom(1); // Reset zoom when closed
    };
  }, [handleClose, isOpen]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-md z-[9999]"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top Controls Bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent z-10"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              {/* Image Title */}
              <motion.p
                className="text-white text-lg font-medium max-w-2xl truncate"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {image.alt}
              </motion.p>

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="btn btn-circle btn-ghost text-white hover:bg-white/20"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full flex items-center justify-center p-4 md:p-12 overflow-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              duration: 0.5,
              bounce: 0.2,
            }}
          >
            <motion.div
              className="relative max-w-7xl max-h-full"
              animate={{ scale: zoom }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag={zoom > 1}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              style={{
                cursor:
                  zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1920}
                height={1080}
                className="rounded-lg shadow-2xl select-none"
                style={{
                  maxHeight: "85vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                }}
                priority
                draggable={false}
              />
            </motion.div>
          </motion.div>

          {/* Bottom Controls Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent z-10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
              {/* Zoom Controls */}
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2">
                {/* Zoom Out */}
                <motion.button
                  onClick={handleZoomOut}
                  className="btn btn-circle btn-sm btn-ghost text-white hover:bg-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={zoom <= 0.5}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
                    />
                  </svg>
                </motion.button>

                {/* Zoom Percentage */}
                <span className="text-white text-sm font-medium min-w-[60px] text-center">
                  {Math.round(zoom * 100)}%
                </span>

                {/* Zoom In */}
                <motion.button
                  onClick={handleZoomIn}
                  className="btn btn-circle btn-sm btn-ghost text-white hover:bg-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={zoom >= 3}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </motion.button>

                {/* Reset Zoom */}
                {zoom !== 1 && (
                  <motion.button
                    onClick={handleResetZoom}
                    className="btn btn-sm btn-ghost text-white hover:bg-white/20 ml-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    Reset
                  </motion.button>
                )}
              </div>

              {/* Download Button */}
              <motion.a
                href={image.src}
                download
                className="btn btn-circle btn-sm btn-ghost text-white hover:bg-white/20 bg-black/40 backdrop-blur-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Download image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>
            </div>

            {/* Keyboard Shortcuts Hint */}
            <motion.p
              className="text-white/60 text-xs text-center mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Press <kbd className="kbd kbd-xs">ESC</kbd> to close •{" "}
              <kbd className="kbd kbd-xs">+</kbd> /{" "}
              <kbd className="kbd kbd-xs">-</kbd> to zoom
              {zoom > 1 && " • Drag to pan"}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
