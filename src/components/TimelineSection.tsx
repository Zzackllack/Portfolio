import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineSection() {
    const timelineData = [
        {
            title: "Q2 2024",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Started learning python and created my Website-scanner project in my summer holidays. I also got my first server and started exploring the world of self-hosting. I started self hosting minecraft servers my discord bots and my websites, also I started using Cloudflare.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://www.svgrepo.com/show/376344/python.svg"
                                alt="Python Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png"
                                alt="Cloudflare Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://wallpapers.com/images/hd/hd-minecraft-logo-3nehf0ctjgk3d0zp.jpg"
                                alt="Minecraft Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://repository-images.githubusercontent.com/456258633/d8124bc5-9c7a-4ea8-a718-a954c5a56298"
                                alt="Self-hosting Logo"
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
            title: "Q1 2024",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Started learning programming concepts by using LEGO Mindstorms. Learned HTML and CSS and started building my first website in my computer Sciene course. Learned basics of Java in class. 
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://t3n.de/news/wp-content/uploads/2012/01/html5_featuredimage.jpg"
                                alt="HTML Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://www.agentur-kreativdenker.de/wp-content/uploads/2020/10/was-ist-css3.jpg"
                                alt="CSS Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://www.promobricks.de/wp-content/uploads/2020/09/lego-ev3-classroom-mindstorms.jpg"
                                alt="Lego Mindstorms EV3"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://kappa.lol/4oM00"
                                alt="Java Logo"
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
            title: "2023",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Joined GitHub on 27th October 2023 and started looking into source control tools like git and Apache. Bought my first camera gimbal and started exploring videography. Started taking the Computer Sciene course at my school and learned about basic cryptography concepts e.g. Caesar Cipher and Vigenère Cipher, RSA.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://github.githubassets.com/assets/profile-joined-github-dark-6369d0efb8b9.svg"
                                alt="Joined GitHub"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://www.drohnen.de/wp-content/uploads/2023/03/Insta360-Flow-Neuer-Smartphone-Stabilisator-vorgestellt.jpg"
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
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Bought my first VR Headset and started exploring Virtual Desktop. Aswell I bought professional audio equipment like a audio interface and a Beyerdynamic DT990 PRO. 
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://m.media-amazon.com/images/I/51X81XdgPrL.jpg"
                                alt="Pico 4 VR Headset"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://m-cdn.phonearena.com/images/article/152387-wide-two_1200/Virtual-Desktop-unveils-OpenXR-runtime-for-enhanced-VR-on-Quest-3.jpg"
                                alt="Virtual Desktop"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://www.beat.de/media/beat/styles/tec_frontend_opengraph/public/images/2019/09/30/image-75808--28821.jpg?itok=fpBp0riW"
                                alt="Project Snapshot"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://d1pxyp3tcli0z.cloudfront.net/files/651297f03e67ec0008d540ec/DT-990-PRO-Ohrpolster-beyerdynamic-xl.jpg"
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
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Bought my first Synology NAS and started exploring NAS Management and Docker. Also I bought a new Car Multimedia System and learned about Can-Bus and OBD2 protocols. I also started exploring IoT and built a few projects around it.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://www.synology.com/img/products/detail/DS220plus/heading.png"
                                alt="Synology DS 220+"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://blog.iron.io/wp-content/uploads/2016/01/platform-docker-logo.png"
                                alt="Docker Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://fleetgo.de/wp-content/uploads/CAN-Bus-1024x683.webp"
                                alt="Can-Bus Protocol (Bosch)"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
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
            title: "2017-2020",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Started exploring the world of tech by getting my first tablet. Explored modding games. Aswell constantly playing piano.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://www.klavierbauer.de/wp-content/uploads/2022/07/na_yamaha_u3sh2-1024x684.jpg"
                                alt="Yamaha Piano"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://images.samsung.com/is/image/samsung/de-feature-galaxy-tab-a-7-0-2016-t280--57274518?$FB_TYPE_A_MO_JPG$"
                                alt="Samsung Galaxy Tab A6 2016"
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
        <section id="timeline" className="py-12 fade-in">
            <h2 className="text-5xl font-bold text-center mb-6 glow">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Timeline
                </span>
            </h2>
            <Timeline data={timelineData} />
        </section>
    );
}