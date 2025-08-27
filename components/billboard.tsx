import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Billboard = () => {
    const router = useRouter()
    const youtubeVideoId = "RARtsWwvxAk"; // Extract ID from your YouTube URL
    const youtubeEmbedUrl = "https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&enablejsapi=1&origin=${window.location.origin}";

    const handlePlay = () =>{
        router.push("/videos/5")
    }
    return(
        <div className="relative h-[56.25vw]">
            <iframe
                className="
                    w-full
                    h-[56.25vw]
                    object-cover
                    brightness-[60%]
                "
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&autohide=1&start=0&end=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    pointerEvents: 'none' // Prevents hover interactions and banners
                }}
            />
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                    MOFAYA
                </p>
                <p className="
                    text-white
                    text-[8px]
                    md:text-lg
                    mt-3
                    md:mt-8
                    w-[90%]
                    md:w-[80%]
                    lg:w-[50%]
                    drop-shadow-xl
                ">
                    A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of
              secrets, crime, and betrayal. Set in modern Kenya, Mo-Faya is a gritty drama where every choice sparks
              more fire.
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <button 
                    onClick={handlePlay}
                        className="
                            bg-white
                            text-black
                            rounded-md
                            py-1 md:py-2
                            px-2 md:px-4
                            w-auto
                            text-xs lg:text-lg
                            font-semibold
                            flex
                            flex-row
                            items-center
                            hover:bg-opacity-20
                            transition
                            cursor-pointer
                        "
                    >
                        <FaPlayCircle className="mr-1" />
                        Play
                    </button>
                    <button 
                    onClick={handlePlay}
                        className="
                            bg-white/30
                            text-white
                            rounded-md
                            py-1 md:py-2
                            px-2 md:px-4
                            w-auto
                            text-xs lg:text-lg
                            font-semibold
                            flex
                            flex-row
                            items-center
                            hover:bg-opacity-20
                            transition
                            cursor-pointer
                        "
                    >
                        <IoIosInformationCircleOutline className="mr-1" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Billboard