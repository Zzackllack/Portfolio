import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineSection() {
    const timelineData = [
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Launched my portfolio website showcasing projects like Website Scanner,
                        NAS Management, and Discord Bot.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://placeimg.com/500/500/tech"
                            alt="Portfolio Project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/tech/grayscale"
                            alt="Portfolio Project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/arch"
                            alt="Portfolio Project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/tech/sepia"
                            alt="Portfolio Project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Explored new technologies and built multiple web apps using React,
                        TypeScript, and Tailwind CSS.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://placeimg.com/500/500/nature"
                            alt="Project Snapshot"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/tech"
                            alt="Project Snapshot"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/arch"
                            alt="Project Snapshot"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/people"
                            alt="Project Snapshot"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Recent updates include:
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Added new project: Website Scanner
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Updated NAS Management features
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Improved Discord Bot interactions
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Overhauled UI design for HeroSection
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://placeimg.com/500/500/any"
                            alt="UI Update"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/tech"
                            alt="Feature Update"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/arch"
                            alt="Project Update"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                        <img
                            src="https://placeimg.com/500/500/people"
                            alt="Community Update"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
                        />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="timeline" className="py-20 fade-in">
            <h2 className="text-4xl font-bold text-center mb-12 glow">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Timeline
                </span>
            </h2>
            <Timeline data={timelineData} />
        </section>
    );
}