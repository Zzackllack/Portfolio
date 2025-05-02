import { Timeline } from "@/components/ui/timeline";

export default function TimelineSection() {
    const timelineData = [
        {
            title: "Q1 2025",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Experimented with Cloudflare Tunnels, Cloudflare Proxy, advanced network structures and security. Joined the startup "Schulwebseiten.de" and began working with much larger codebases incorporating CMS, API, and database systems.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://cf-assets.www.cloudflare.com/zkvhlag99gkb/30XEWiWepbpcI3DdBHLn4o/49943f1bfe8d4436aeff07af248e3812/image1-18.png"
                                alt="PHP Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://schulwebseiten.de/images/favicon.ico"
                                alt="ThreeJS Logo"
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
            title: "Q4 2024",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Implemented more complex React features in my Politics Quote Quiz and developed my first backend using NodeJS. Utilized SQL and PHPMyAdmin as database solutions for the first time in backend development. Deployed using Railway as a hosting platform. Joined my school's GitHub organization and developed the GoetheMC website.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://kappa.lol/mf8qZ"
                                alt="PHP Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://kappa.lol/mV3qE"
                                alt="ThreeJS Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://www.agentur-kreativdenker.de/wp-content/uploads/2021/04/phpmyadmin.jpg"
                                alt="Jellyfin Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://docs.vendure.io/assets/images/deploy-to-railway-0bd04cd6a55fe3372e573a5ecced91ce.webp"
                                alt="Internet Logo"
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
            title: "Q3 2024",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Began utilizing PHP for session management and explored ThreeJS. Acquired my own domain and established a personal email address. Created custom error pages and enrolled in the computer science advanced course at my school. Expanded my Jellyfin media server capabilities.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/phplogo.jpg"
                                alt="PHP Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://miro.medium.com/v2/resize:fit:687/1*m0zrCLd2wY29-jiHaxYsgA.png"
                                alt="ThreeJS Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://external-preview.redd.it/jellyfin-10-9-0-released-with-many-new-features-v0-nP4hquZJgJK4d0HPvShs1jYPdzq8cnjI0Lltn41aew0.jpg?auto=webp&s=a25c92ac63dd5bbd5946d1e7e8b692f4632ee700"
                                alt="Jellyfin Logo"
                                width={500}
                                height={500}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
                            />
                        </div>
                        <div className="glass p-4 rounded-lg hover-glow transition-all duration-300">
                            <img
                                src="https://media.istockphoto.com/id/1028603300/de/vektor/vektor-internet-welt.jpg?s=612x612&w=0&k=20&c=BB6RRp2DtBZz-ZO2YKAlkMt19FyMm4cMTcLo42snU_M="
                                alt="Internet Logo"
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
            title: "Q2 2024",
            content: (
                <div>
                    <div className="glass p-6 rounded-lg mb-8 hover-glow transition-all duration-300">
                        <p className="text-gray-300 text-xs md:text-sm font-normal">
                            Started learning Python and developed my Website-scanner project during summer break. Acquired my first server and began exploring self-hosting solutions. Implemented self-hosted environments for Minecraft servers, Discord bots, and personal websites. Started utilizing Cloudflare services for improved security and performance.
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
                            Began learning programming concepts through LEGO Mindstorms. Acquired HTML and CSS skills and developed my first website in my computer science course. Learned Java fundamentals as part of the curriculum.
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
                            Joined GitHub on October 27, 2023 and began exploring version control tools like Git and Apache. Purchased my first camera gimbal and ventured into videography. Enrolled in the Computer Science course at my school where I learned foundational cryptography concepts including Caesar Cipher, Vigenère Cipher, and RSA encryption.
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
                            Purchased my first VR headset and began exploring Virtual Desktop capabilities. Additionally, invested in professional audio equipment including an audio interface and Beyerdynamic DT990 PRO headphones.
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
                            Acquired my first Synology NAS and explored NAS management and Docker containerization. Also purchased a new car multimedia system and studied CAN-Bus and OBD2 protocols. Began exploring IoT technologies and developed several projects in this domain.
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
                            Started exploring technology by acquiring my first tablet. Developed interest in game modding while continuing to practice piano consistently.
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