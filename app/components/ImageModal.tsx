"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
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
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [handleClose, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
          onClick={handleClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ 
              type: "spring", 
              duration: 0.5,
              bounce: 0.3 
            }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl relative mx-6 rounded-lg overflow-hidden shadow-2xl"
          >
            <motion.button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 text-lg md:text-2xl text-primary-content btn-circle btn btn-primary"
              whileHover={{ 
                scale: 1.1, 
                rotate: 90,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <CgClose className="text-2xl" />
            </motion.button>
            
            <motion.div 
              className="p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </motion.div>
              
              <motion.p 
                className="mt-4 text-center text-lg text-primary-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {image.alt}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
