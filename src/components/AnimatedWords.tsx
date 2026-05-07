"use client";

import { motion } from "framer-motion";

type AnimatedWordsProps = {
  text: string;
};

export default function AnimatedWords({ text }: AnimatedWordsProps) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <motion.span
          className="inline-block transition-[font-variation-settings,opacity,transform] duration-500 hover:-translate-y-1 hover:opacity-80"
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: index * 0.055, duration: 0.58, ease: "easeOut" }}
          key={`${word}-${index}`}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </>
  );
}
