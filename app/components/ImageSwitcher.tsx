"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoPeople } from "react-icons/go";

const ImageSwitcher = ({ images, game }: { images: any[] | undefined; game: Game }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const t = setInterval(() => {
      setActiveIndex((a) => (a + 1) % images.length);
    }, 1000);
    return () => clearInterval(t);
  }, [game, images]);

  if (!Array.isArray(images) || images.length === 0) return null;
  console.log("🖼️ Images received in ImageSwitcher:", images);

  return (
    <div className="bg-[#333839] flex flex-col gap-4 py-3 items-center px-6 rounded-xl bg-main overflow-hidden">
      <div className="flex items-center gap-2 justify-between w-full">
        <h1 className="text-base text-white">{game.name}</h1>
        <p className="text-xs text-muted-foreground mt-1">Released {game.released}</p>
      </div>

      <div className="w-80 h-36 rounded-xl overflow-hidden relative">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ zIndex: activeIndex === index ? 1 : 0 }}
          >
            <Image
              fill
              src={image.image}
              alt={`${game.name} screenshot ${index + 1}`}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      <p className="text-sm flex items-center gap-2 self-start text-muted-foreground mt-1">
        <GoPeople />
        Review count: {game.reviews_count}
      </p>
    </div>
  );
};

export default ImageSwitcher;
