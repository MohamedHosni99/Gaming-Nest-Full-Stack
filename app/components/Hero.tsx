import Image from "next/image";
import SwiperCards from "./SwiperCards";
import "swiper/css";
import CardInfo from "./CardInfo";

const Hero = () => {
    return (
        <div className="mt-8 h-full">
            <SwiperCards
                className="h-[30rem]"
                paginationImages
                items={[
                    {
                        card: (
                            <div className="flex items-start justify-start w-full h-full relative">
                                <video
                                    className="absolute w-full h-full object-cover rounded-2xl inset-0"
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source type="video/mp4" src="/spidervideo.mp4" />
                                </video>
                                <div className="relative z-10 p-6 max-w-xl">
                                    <CardInfo
                                        btnClasses="text-white bg-red-500 hover:bg-red-400"
                                        desc="Peter Parker & Miles Morales return for an exciting new adventure in the acclaimed Marvel’s Spider-Man franchise, out October 20 for PS5."
                                        title="BE GREATER TOGETHER"
                                        image="/news1title.webp"
                                    />
                                </div>
                            </div>
                        ),
                        src: "/poster.webp",
                    },
                    {
                        card: (
                            <div className="w-full h-full relative">
                                <video
                                    className="absolute w-full h-full object-cover object-top rounded-2xl inset-0"
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source
                                        type="video/mp4"
                                        src="/call-of-duty-black-ops-6-animated-hero-mobile-01-en-22may24.mp4"
                                    />
                                </video>
                                <div className="relative z-10 p-6 max-w-xl">
                                    <CardInfo
                                        btnClasses="text-white bg-orange-500 hover:bg-orange-400"
                                        desc="Last chance to pre-order and get access to additional premium content. Call of Duty®: Black Ops 6 launches on October 25th"
                                        title="The truth lies"
                                        image="/call-of-duty-black-ops-6-logo-01-en-21may24.webp"
                                    />
                                </div>
                            </div>
                        ),
                        src: "/call-of-duty-black-ops-6-hero-desktop-01-en-21may24.webp",
                    },
                    {
                        card: (
                            <div className="w-full h-full relative">
                                <Image
                                    src="/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp"
                                    alt="Dragon Ball Sparking Zero Hero"
                                    className="w-full h-full object-cover object-top rounded-2xl inset-0"
                                    fill
                                />
                                <div className="relative z-10 p-6 max-w-xl">
                                    <CardInfo
                                        btnClasses="text-white bg-orange-500 hover:bg-orange-400"
                                        desc="A legendary series has returned. Reach new levels of power in Dragon Ball: Sparking! Zero, out now on PS5"
                                        title="Shake the earth. Break the universe !"
                                        image="/Dragon-Ball-Sparking-Zero-logo-01-03oct24.webp"
                                    />
                                </div>
                            </div>
                        ),
                        src: "/Dragon-Ball-Sparking-Zero-Hero-desktop-01-03oct24.webp",
                    },
                    {
                        card: (
                            <div className="flex items-start justify-start w-full h-full relative">
                                <video
                                    className="absolute w-full h-full object-cover rounded-2xl inset-0"
                                    autoPlay
                                    muted
                                    loop
                                >
                                    <source
                                        type="video/mp4"
                                        src="/cyberpunk-2077-phantom-liberty-video-hero-01-en-11sep23.mp4"
                                    />
                                </video>
                                <div className="relative z-10 p-6 max-w-xl">
                                    <CardInfo
                                        btnClasses="text-white z-20 bg-red-500 hover:bg-red-400"
                                        desc="As cyber-enhanced mercenary V, join secret agent Solomon Reed to unravel a web of sinister political machinations."
                                        title="Freedom Always Comes At A Price…"
                                        image="/iconcyber.webp"
                                    />
                                </div>
                            </div>
                        ),
                        src: "/cyb.webp",
                    },
                ]}
            />
        </div>
    );
};

export default Hero;
