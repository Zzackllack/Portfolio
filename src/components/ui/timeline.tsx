"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 lg:px-10"> {/* Changed from py-20 to py-8 */}
        <h2 className="text-lg md:text-3xl mb-4 text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-sm">
          I&apos;ve been interested in tech since 2017. Here&apos;s a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const dotProgress = useTransform(
            scrollYProgress,
            [index / data.length, (index + 1) / data.length],
            [0, 1]
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const dotOpacity = useTransform(dotProgress, [0, 0.3, 1], [0, 1, 0]); // Changed from [0, 0.5, 1] to [0, 0.3, 1]
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const textColor = useTransform(
            dotProgress,
            [0, 0.3, 1], // Changed from [0, 0.5, 1] to [0, 0.3, 1]
            ["rgb(115 115 115)", "rgb(255 255 255)", "rgb(115 115 115)"]
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const textScale = useTransform(
            dotProgress,
            [0, 0.3, 1], // Changed from [0, 0.5, 1] to [0, 0.3, 1]
            [1, 1.5, 1] // Increased scale value for bigger transition
          );
          
          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-transparent flex items-center justify-center">
                  <motion.div 
                    className="h-4 w-4 rounded-full border p-2"
                    style={{
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      background: useTransform(
                        dotProgress,
                        [0, 1],
                        [
                          "linear-gradient(to bottom, rgb(168 85 247), rgb(59 130 246))",
                          "linear-gradient(to bottom, rgb(168 85 247), rgb(59 130 246))"
                        ]
                      ),
                      opacity: dotOpacity,
                      borderColor: "rgb(64 64 64)"
                    }}
                  />
                  <motion.div 
                    className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2 absolute" 
                    style={{
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      opacity: useTransform(dotOpacity, v => 1 - v)
                    }}
                  />
                </div>
                <motion.h3 
                  className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-all duration-300"
                  style={{
                    color: textColor,
                    scale: textScale,
                    transformOrigin: "left center"
                  }}
                >
                  {item.title}
                </motion.h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <motion.h3 
                  className="md:hidden block text-2xl mb-4 text-left font-bold"
                  style={{
                    color: textColor,
                    scale: textScale,
                    transformOrigin: "left center"
                  }}
                >
                  {item.title}
                </motion.h3>
                {item.content}
              </div>
            </div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};