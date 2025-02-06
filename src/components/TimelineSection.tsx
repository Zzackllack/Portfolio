import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineSection() {
    const timelineData = [
        {
            title: "2023",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Joined GitHub on 27th October 2023 and started looking into source control tools like git and Apache.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://github.githubassets.com/assets/profile-joined-github-dark-6369d0efb8b9.svg"
                                alt="Joined GitHub"
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
                    <div className="glass p-6 rounded-lg mb-8">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Bought my first VR Headset and started exploring Virtual Desktop. Aswell I bought professional audio equipment like a audio interface and a Beyerdynamic DT990 PRO. 
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://m.media-amazon.com/images/I/51X81XdgPrL.jpg"
                                alt="Pico 4 VR Headset"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://m-cdn.phonearena.com/images/article/152387-wide-two_1200/Virtual-Desktop-unveils-OpenXR-runtime-for-enhanced-VR-on-Quest-3.jpg"
                                alt="Virtual Desktop"
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
            title: "2021",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Bought my first Synology NAS and started exploring NAS Management and Docker. Also I bought a new Car Multimedia System and learned about Can-Bus and OBD2 protocols. I also started exploring IoT and built a few projects around it.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://www.synology.com/img/products/detail/DS220plus/heading.png"
                                alt="Synology DS 220+"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://blog.iron.io/wp-content/uploads/2016/01/platform-docker-logo.png"
                                alt="Docker Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://fleetgo.de/wp-content/uploads/CAN-Bus-1024x683.webp"
                                alt="Can-Bus Protocol (Bosch)"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg">
                            <img
                                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/325870478/original/074af8b9f3fd7a9043fe8d747192b0f35d03ea5b/do-iot-design-and-programming.jpg"
                                alt="Internet of things"
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