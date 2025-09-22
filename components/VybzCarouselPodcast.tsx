"use client";
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
  description?: string; // Added description field
}

interface VybzCarouselPodcastProps {
  slides?: ICarousel[];
  delay?: number;
}

const VybzCarouselPodCast = ({
  slides = [],
  delay = 4000,
}: VybzCarouselPodcastProps) => {
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
    description: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous web of secrets, crime, and betrayal. Set in modern Kenya, Mo Faya is a gritty drama where every choice sparks more fire."
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
      cover: "/images/podcastThumb.png",
      backgroundImage: "/images/sandwich2.jpg",
      description: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous web of secrets, crime, and betrayal. Set in modern Kenya, Mo Faya is a gritty drama where every choice sparks more fire."
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
      cover: "/images/pod4.png",
      backgroundImage: "/images/sandwich2.jpg",
      description: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous web of secrets, crime, and betrayal. Set in modern Kenya, Mo Faya is a gritty drama where every choice sparks more fire."
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
      cover: "/images/pod3.png",
      backgroundImage: "/images/sandwich2.jpg",
      description: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous web of secrets, crime, and betrayal. Set in modern Kenya, Mo Faya is a gritty drama where every choice sparks more fire."
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

  const router = useRouter();

  const onSubscribeClick = () => {
    router.push(`/planselection/`);
  };

  const onSaveClick = () =>{
    router.push('/profile?tab=My Favorites');
  }

  return (
    <>
      <div className="relative h-[90vh] w-full overflow-hidden">
        <Slider
          {...settings}
          ref={sliderRef}
          beforeChange={(_, next) => setActiveIndex(next)}
          className="w-full h-[90vh]"
        >
          {slidesToRender.map((slide, index) => (
            <div key={index} className="relative h-[90vh] w-full">
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
              <div className="relative z-10 pb-9 md:pb-15 px-3 md:px-8 h-full flex flex-col justify-end">
               
                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                  {/* Left Content - Album Info and Description */}
                  <div className="flex-1 max-w-none lg:max-w-[60%]">
                    {/* Album Cover and Basic Info */}
                    <div className="flex items-end gap-4 md:gap-6 mb-4">
                      {/* Album Cover - Hidden on mobile */}
                      <div className="hidden md:flex flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 overflow-hidden">
                        <img
                          src={slide.cover}
                          alt="Album Cover"
                          className="w-full h-full rounded-lg object-cover shadow-lg"
                        />
                      </div>
                      
                      {/* Album Info */}
                      <div className="flex-1">
                        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-white leading-tight mb-2">
                          {slide.title}
                        </h1>
                        <p className="text-white text-[14px] md:text-[16px] mb-2">
                          {slide.subtitle}
                        </p>
                        <p className="text-white/80 text-[12px] md:text-[14px]">
                          {slide.category} | {slide.duration} | {slide.tracks} | {slide.genre}
                        </p>
                      </div>
                    </div>

                    {/* Description - New Addition */}
                    {slide.description && (
                      <div className="line-clamp-3 mb-6 max-w-none lg:max-w-[85%]">
                        <p className="text-white/90 text-[14px] md:text-[16px] leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Content - Stream On */}
                  <div className="flex-shrink-0">
                    <div className="flex flex-col items-start lg:items-end">
                      <div className="flex items-center gap-3 mb-4">
                        <p className="text-white text-[14px] md:text-[16px] uppercase tracking-wider">
                          STREAM ON:
                        </p>
                        <img 
                          src={slide.platformLogo} 
                          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" 
                          alt={slide.streamingPlatform} 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-between flex-wrap">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mx-auto sm:mx-0 md:mx-0">
                    <Button
                      onClick={() => onSubscribeClick()}
                      className="bg-[#C62676] hover:bg-[#e91e63]/90 text-white px-8 h-12 rounded-full font-semibold text-sm w-full sm:w-auto cursor-pointer"
                    >
                      Subscribe
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/20 text-white !bg-[#2C2C2C] hover:!bg-[#333333] hover:text-white px-6 h-12 rounded-full text-sm w-full sm:w-auto cursor-pointer"
                      onClick={()=>onSaveClick()}
                    >
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 mx-auto md:mx-0 md:pr-10">
                    {/* Custom dots */}
                    <CarouselDots
                      slides={slides}
                      goToSlide={goToSlide}
                      activeIndex={activeIndex}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Arrows */}

        <PrevArrow />
        <NextArrow />

        <style jsx global>{`
          .slick-list {
            height: 90vh;
          }
          .slick-track {
            height: 90vh;
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