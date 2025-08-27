"use client"
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import {
  MdArrowForward,
  MdChevronLeft,
  MdChevronRight,
  MdOutlineVideocam,
} from "react-icons/md";
import Slider from "react-slick";
import { SlickSettings } from "@/types/slick";

// ✅ Required slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import CarouselDots from "./CarouselDots";
import { useRouter } from "next/navigation";

export interface ICarousel {
  id: number;
  title: string;
  subtitle: string;
  duration?: string;
  category?: string;
  tracks?: string;
  genre?: string;
  ageRating?: string;
  streamingPlatform?: string;
  platformLogo?: string;
  cover?: string;
  backgroundImage?: string;
}

interface VybzCarouselPodcastProps {
  slides?: ICarousel[];
  delay?: number;
}

const VybzCarouselPodCast = ({
  slides = [],
  delay = 4000,
}: VybzCarouselPodcastProps) => {
  const router = useRouter()
  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  

  // Default slide if no slides provided
  const defaultSlide: ICarousel = {
    id: 1,
    title: "disko",
    subtitle: "Kodong Klan",
    duration: "1hr 45min",
    category: "Album",
    tracks: "10",
    genre: "Hiphop",
    streamingPlatform: "Spotify",
    platformLogo: "/logos/spotify.png",
    backgroundImage: "/images/albumCover.png",
  };

  slides = [
    {
      id: 1,
      title: "sandwich podcast",
      subtitle: "sandwich podcast",
      duration: "1hr 45min",
      category: "Podcast",
      tracks: "10",
      genre: "Hiphop",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/spotify.png",
      cover:"/images/podcastThumb.png",
      backgroundImage: "/images/sandwich2.jpg",
    },
    {
      id: 2,
      title: "true crime kenya",
      subtitle: "various",
      duration: "1hr 45min",
      category: "Album",
      tracks: "10",
      genre: "Hiphop",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/spotify.png",
      cover:"/images/pod4.png",
      backgroundImage: "/images/sandwich2.jpg",
    },
    {
      id: 3,
      title: "3 truths",
      subtitle: "various",
      duration: "1hr 45min",
      category: "Album",
      tracks: "10 songs",
      genre: "Hiphop",
      streamingPlatform: "Spotify",
      platformLogo: "/logos/spotify.png",
      cover:"/images/pod3.png",
      backgroundImage: "/images/sandwich2.jpg",
    },
  ];

  const slidesToRender = slides.length > 0 ? slides : [defaultSlide];

  const settings: SlickSettings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: slidesToRender.length > 1,
    autoplaySpeed: delay,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // afterChange: (i: number) => setActiveIndex(i),
  };

  const goToNext = () => sliderRef.current?.slickNext();
  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToSlide = (i: number) => {
    console.log("slide", i);
    sliderRef.current?.slickGoTo(i);
  };

  const PrevArrow = () => {
    return (
      <button
        onClick={goToPrev}
        className="hidden cursor-pointer md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#2C2C2C] rounded-full p-2 shadow-md hover:bg-[#C62676]"
      >
        <MdChevronLeft className="w-6 h-6 text-white" />
      </button>
    );
  };

  const NextArrow = () => {
    return (
      <button
        onClick={goToNext}
        className="hidden cursor-pointer md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#2C2C2C] rounded-full p-2 shadow-md hover:bg-[#C62676]"
      >
        <MdChevronRight className="w-6 h-6 text-white" />
      </button>
    );
  };

  const handlePodcastSubscribe = () =>{
    router.push("/planselection")
  }

  return (
    <>
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Slider
          {...settings}
          ref={sliderRef}
          beforeChange={(_, next) => setActiveIndex(next)}
          className="w-screen h-[80vh]"
        >
          {slidesToRender.map((slide, index) => (
            <div key={index} className="relative h-[80vh] w-screen">
              {/* Background Cover Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="p-8 pb-6">
                  <div className="flex flex-wrap items-end gap-6 mb-8">
                    {/* Album Cover */}
                    <div className="flex-shrink-0">
                      <img
                        src={slide.cover}
                        alt="DISKO Cover"
                        className="w-30 h-40 rounded-lg object-cover shadow-lg"
                      />
                    </div>

                    {/* Album Info Container */}
                    <div className="flex-1 min-w-[150px] flex flex-col justify-end">
                      {/* Main Album Info */}
                      <div className="mb-0">
                        <h1 className="text-[28px] font-extrabold text-white capitalize leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-white text-[22px] !font-normal leading-tight capitalize">
                          {slide.subtitle}
                        </p>
                        <p className="text-white text-[12px] mt-1">
                          {slide.category} | {slide.duration} | {slide.tracks} | {slide.genre}
                        </p>
                      </div>

                      {/* Stream On and Controls Row */}
                      <div className="flex flex-wrap justify-between items-end w-full">
                        {/* Stream On Section */}
                        <div className="flex items-center mb-2">
                          <p className="text-white text-[14px] uppercase tracking-wide mr-3">
                            stream on:
                          </p>
                          <img
                            src={slide.platformLogo}
                            className="w-[45px] h-[45px]"
                            alt={slide.streamingPlatform}
                          />
                        </div>

                        {/* Right Side Controls */}
                        <div className="flex flex-col flex-wrap items-end gap-4">
                          {/* Audio/Video Controls */}
                          <div className="flex items-center gap-3">
                            <Button className="bg-[#2C2C2C] hover:bg-white dark:bg-[#2C2C2C]/20 text-white px-4 py-2 rounded-[5px] text-xs backdrop-blur-sm border border-white/10 cursor-pointer">
                              <MdOutlineVideocam className="mr-1" />
                              Switch To Video
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-white border-2 rounded-full cursor-pointer w-10 h-10"
                            >
                              <HiOutlineSpeakerXMark />
                            </Button>
                          </div>

                         
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mx-auto md:mx-0">
                    <Button 
                    onClick={handlePodcastSubscribe}
                    className="bg-[#C62676] text-xs hover:bg-[#e91e63]/90 text-white px-8 h-10 rounded-full font-semibold w-40 cursor-pointer">
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

                  {/* Progress Bar */}
                  {/* <div className="flex items-center gap-4 mt-3 mb-4">
                    <span className="text-white text-sm font-medium">1:25</span>
                    <div className="flex-1 bg-white dark:bg-[#2C2C2C]/20 rounded-full h-1.5 relative cursor-pointer">
                      <div className="bg-[#C62676] h-1.5 rounded-full w-1/3 relative">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white dark:bg-[#2C2C2C] rounded-full shadow-sm"></div>
                      </div>
                    </div>
                    <span className="text-white text-sm font-medium">2:45</span>
                  </div> */}

                   {/* Dots Navigation */}
                    <div className="flex items-center justify-center gap-4 mx-auto md:pr-10">
                      <CarouselDots slides={slides} goToSlide={goToSlide} activeIndex={activeIndex}/>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
          {/* Arrows */}
        
        <PrevArrow/>
        <NextArrow/>

          <style jsx global>{`
                .slick-list{
                    height:80vh
                }
                .slick-track{
                  height:80vh
                }
                .dot {
                  transition: background-color 0.2s ease-in-out;
                }
          
          `}</style>
      </div>
    </>
  );
};

export default VybzCarouselPodCast;
