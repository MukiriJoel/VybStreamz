import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import CarouselDots from "./CarouselDots";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";

const Billboard = () => {
    const router = useRouter()
    const youtubeVideoId = "RARtsWwvxAk"; // Extract ID from your YouTube URL
    const youtubeEmbedUrl = "https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&fs=0&disablekb=1&enablejsapi=1&origin=${window.location.origin}";
      const router = useRouter();
    const onSubscribeClick = () =>{
     router.push(`/planselection/`);
  }
    return(
        <div className="relative h-[56.25vw] w-full ">
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
            {/* <div className="absolute top-[50%] md:top-[40%] ml-4 md:ml-16">
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
            </div> */}
             <div className="absolute w-full top-[50%] md:top-[40%] pl-15  scrollbar-hide">
              <div className="flex flex-wrap items-end gap-6 mb-4">
                <div className="flex-1 min-w-[150px] ">
                  <h1 className="text-[28px] font-extrabold text-white capitalize">
                    Mofaya
                  </h1>
                  <p className="text-white text-[14px] font-semibold mt-2">
                    Movie | 16YRS+
                  </p>
                  <p className="text-white text-[12px] max-w-md pt-1">
                        A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of
                        secrets, crime, and betrayal. Set in modern Kenya, Mo-Faya is a gritty drama where every choice sparks
                        more fire.
                  </p>
                </div>

                <div className="flex pt-10 items-center pr-20 cursor-pointer">
                  <p className="text-white/70 text-[14px] uppercase tracking-wide">
                    stream on:
                  </p>
                  
                    <img
                      src="/logos/bazeLg.png"
                      className="w-[45px] h-[45px] ml-2"
                    />
                  
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-between  pr-10">
                <div className="flex gap-4 mx-auto !sm:ml-0 md:mx-0">
                  <Button onClick={()=>onSubscribeClick()} className="bg-[#C62676] text-xs hover:bg-[#e91e63]/90 text-white px-8 h-10 rounded-full font-semibold w-40 cursor-pointer">
                    Subscribe
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-xs text-white hover:bg-white dark:bg-[#2C2C2C]/20 hover:text-white px-6 h-10 rounded-full bg-[#2C2C2C] backdrop-blur-sm w-40 cursor-pointer"
                  >
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>

                <div className="flex items-center gap-4 mx-auto md:mx-0 md:pr-10">
                  {/* Custom dots */}
                  {/* <CarouselDots slides={slides} goToSlide={goToSlide} activeIndex={activeIndex}/> */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white border-2 border-white rounded-full cursor-pointer"
                  >
                    <HiOutlineSpeakerXMark />
                  </Button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Billboard