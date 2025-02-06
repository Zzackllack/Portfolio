import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineSection() {
    const timelineData = [
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-gray-300 text-xs md:text-sm font-normal mb-8">
                        Launched my portfolio website showcasing projects like Website Scanner,
                        NAS Management, and Discord Bot.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/tech"
                                alt="Portfolio Project"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/tech/grayscale"
                                alt="Portfolio Project"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/arch"
                                alt="Portfolio Project"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/tech/sepia"
                                alt="Portfolio Project"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-gray-300 text-xs md:text-sm font-normal mb-8">
                        Explored new technologies and built multiple web apps using React,
                        TypeScript, and Tailwind CSS.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/nature"
                                alt="Project Snapshot"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/tech"
                                alt="Project Snapshot"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/arch"
                                alt="Project Snapshot"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/people"
                                alt="Project Snapshot"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="text-gray-300 text-xs md:text-sm font-normal mb-4">
                        Recent updates include:
                    </p>
                    <div className="glass p-6 rounded-lg mb-8">
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
                            ✅ Added new project: Website Scanner
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
                            ✅ Updated NAS Management features
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
                            ✅ Improved Discord Bot interactions
                        </div>
                        <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm">
                            ✅ Overhauled UI design for HeroSection
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/any"
                                alt="UI Update"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/tech"
                                alt="Feature Update"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/arch"
                                alt="Project Update"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://placeimg.com/500/500/people"
                                alt="Community Update"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="timeline" className="py-12 fade-in"> {/* Changed from py-20 to py-12 */}
            <h2 className="text-5xl font-bold text-center mb-6 glow"> {/* Changed from mb-12 to mb-6 */}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Timeline
                </span>
            </h2>
            <Timeline data={timelineData} />
        </section>
    );
}