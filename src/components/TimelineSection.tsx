import React from "react";
import { Timeline } from "@/components/ui/timeline";

const placeholderTimelineData = [
    {
        title: "2021",
        content: <p>Started exploring programming and built my first projects.</p>,
    },
    {
        title: "2022",
        content: <p>Dove into React and TypeScript while working on personal projects.</p>,
    },
    {
        title: "2023",
        content: <p>Launched my portfolio website showcasing a range of projects.</p>,
    },
];

export default function TimelineSection() {
    return (
        <section id="timeline" className="py-20 fade-in">
            <h2 className="text-4xl font-bold text-center mb-12 glow">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Timeline
                </span>
            </h2>
            <Timeline data={placeholderTimelineData} />
        </section>
    );
}