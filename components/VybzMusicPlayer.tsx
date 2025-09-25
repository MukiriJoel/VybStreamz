import {
  Pause,
  Play,
  SkipForward,
  Maximize,
  Minimize,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/slider";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  Search,
  ShoppingBag,
  Bell,
  ChevronLeft,
  ChevronRight,
  Bookmark,
} from "lucide-react";
import RatingsComponent from "@/components/ratings-section";
import { MdArrowForward, MdOutlineVideocam } from "react-icons/md";
import ReviewsSection from "@/components/reviews-section";
import MusicSlider from "@/components/MusicSlider";
import { useRouter } from "next/navigation";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";

export interface VybzMusicPlayerProps {
  audioSrc: string;
  albumImage?: string;
  bannerImage?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  albumInfo?: string;
  platformLogo?: string;
}

export default function VybzMusicPlayer({
  audioSrc,
  bannerImage,
  albumImage,
  title,
  subtitle,
  albumInfo,
  description,
  platformLogo,
}: VybzMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [showPosterOverlay, setShowPosterOverlay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseMove, setLastMouseMove] = useState(Date.now());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentHideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const volumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  // Hide controls after 3 seconds when playing or when mouse is stationary
  useEffect(() => {
    const hideControlsTimer = () => {
      if (isHovered && !isDragging) {
        const timeSinceLastMove = Date.now() - lastMouseMove;
        if (timeSinceLastMove >= 3000) {
          setShowControls(false);
          if (isPlaying) {
            setShowContent(false);
          }
        } else {
          controlsTimeoutRef.current = setTimeout(
            hideControlsTimer,
            3000 - timeSinceLastMove
          );
        }
      } else if (isPlaying && !isHovered && !isDragging) {
        controlsTimeoutRef.current = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      } else if (!isPlaying || isHovered || isDragging) {
        setShowControls(true);
        if (!isPlaying) {
          setShowContent(true);
        }
      }
    };

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    hideControlsTimer();

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, isHovered, isDragging, lastMouseMove]);

  // Handle content hiding when audio starts playing
  useEffect(() => {
    if (isPlaying) {
      // Hide content after 300ms when audio starts
      contentHideTimeoutRef.current = setTimeout(() => {
        setShowContent(false);
        setShowPosterOverlay(false);
      }, 300);
    } else {
      // Show content immediately when audio is paused
      setShowContent(true);
      // Clear any existing timeouts
      if (contentHideTimeoutRef.current) {
        clearTimeout(contentHideTimeoutRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      // Show poster overlay after 4 seconds of being paused
      pauseTimeoutRef.current = setTimeout(() => {
        setShowPosterOverlay(true);
      }, 4000);
    }

    return () => {
      if (contentHideTimeoutRef.current) {
        clearTimeout(contentHideTimeoutRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (isDragging) {
        const seekBar = document.querySelector(".seek-bar");
        if (seekBar) {
          const rect = seekBar.getBoundingClientRect();
          const percent = Math.max(
            0,
            Math.min(1, (e.clientX - rect.left) / rect.width)
          );
          const newTime = percent * duration;
          if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
          }
        }
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, duration]);

  //Handle Volume Control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Audio play failed:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  const handleSkip = () => {
    if (audioRef.current) {
      const newTime = Math.min(
        audioRef.current.currentTime + 10,
        audioRef.current.duration
      );
      audioRef.current.currentTime = newTime;
    }
  };

  const handleBannerClick = () => {
    handlePlayPause();
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && !isDragging) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeekClick = (e: any) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
 

  // const handleSeekMouseDown = (e: React.MouseEvent) => {
  // // e.preventDefault();
  // // e.stopPropagation();
  // setIsDragging(true);
  
  // if (audioRef.current) {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   const percent = (e.clientX - rect.left) / rect.width;
  //   const newTime = percent * duration;
  //   audioRef.current.currentTime = newTime;
  //   setCurrentTime(newTime);
  // }
  // };
  const handleSeekMouseDown = (e: any) => {
    setIsDragging(true);
    handleSeekClick(e);
  };

  const handleSeekMouseMove = (e: any) => {
    if (isDragging) {
      handleSeekClick(e);
    }
  };

  const handleSeekMouseUp = () => {
    setIsDragging(false);
  };

  // const formatTime = (time: any) => {
  //   if (isNaN(time) || time === 0) return "0:00";
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);
  //   return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  // };
  const formatTime = (time: any) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setLastMouseMove(Date.now());
    setShowControls(true);
    if (!isPlaying) {
      setShowContent(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setLastMouseMove(Date.now());
  };

  const handleMouseMove = () => {
    setLastMouseMove(Date.now());
    if (isHovered) {
      setShowControls(true);
      if (!isPlaying) {
        setShowContent(true);
      }
    }
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const showVolume = () => {
    if (volumeTimeoutRef.current) clearTimeout(volumeTimeoutRef.current);
    setShowVolumeSlider(true);
  };

  const hideVolume = () => {
    volumeTimeoutRef.current = setTimeout(() => {
      setShowVolumeSlider(false);
    }, 300);
  };

  const Router = useRouter();

  const onHandleClick = () => {
    Router.push(`/viewMore/`);
  };

  const onSubscribeClick = () => {
    Router.push(`/planselection/`);
  };

   const onSaveClick = () =>{
    Router.push('/profile?tab=My Favorites');
  }


  return (
    <>
      <div
        ref={containerRef}
        className={`relative bg-black overflow-hidden cursor-pointer ${
          isFullscreen
            ? "fixed inset-0 z-50 w-screen h-screen"
            : "w-full h-[90vh]"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          data-testid="music-player"
          onEnded={handleAudioEnded}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          preload="metadata"
        >
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Banner Image (Background) */}
        <img
          src={bannerImage}
          alt="Album/Podcast Banner"
          className={`object-cover ${
            isFullscreen ? "w-screen h-screen" : "w-full h-full"
          }`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Left Side Content - Album Info */}
        <div
          className={`absolute w-full left-2 pr-4 md:left-8 top-[77%] md:top-[65%] transform -translate-y-1/2 flex items-center space-x-6 transition-opacity duration-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Album Details */}
          <div className="relative z-10 w-full h-full flex flex-col justify-end">
            <div className="flex flex-wrap items-end gap-6 mb-5 md:mb-8">
              {/* Album Cover */}
              <div className="flex-shrink-0 flex items-center mb-4 w-34 h-46 md:w-35 md:h-50 overflow-hidden">
                <img
                  src={albumImage}
                  alt="DISKO Cover"
                  className="w-full h-full rounded-lg object-cover shadow-lg"
                />
              </div>
              {/* Album Info Container */}
              <div className="flex-1 min-w-[150px] flex flex-col justify-end">
                {/* Main Album Info */}
                <div className="mb-0">
                  <h1 className="text-[20px] md:text-[28px] font-extrabold text-white capitalize leading-tight">
                    {title}
                  </h1>
                  <p className="text-white text-[16px] md:text-[22px] mt-2 !font-normal leading-tight capitalize">
                    {subtitle}
                  </p>
                  <p className="text-white text-[10px] md:text-[12px] mt-2">{albumInfo}</p>

                  {/* Description - New Addition */}
                
                  <p className="text-white text-[12px] mt-1 line-clamp-3  max-w-md leading-relaxed">
                    {description}
                  </p>
              
                </div>

                {/* Stream On and Controls Row */}
                <div className="flex flex-wrap justify-between items-end py-2 w-full">
                  {/* Stream On Section */}
                  <div className="flex items-center mb-2">
                    <p className="text-white text-[14px] uppercase tracking-wide mr-3">
                      stream on:
                    </p>
                    <img src={platformLogo} className="w-[35px] h-[35px] md:w-[45px] md:h-[45px]" alt={title} />
                  </div>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4 pt-8 md:pt-1 pb-4 md:pb-4 lg:pb-15 mx-auto md:mx-0">
              <Button
                onClick={() => onSubscribeClick()}
                className="bg-[#C62676] text-xs hover:bg-[#e91e63]/90 text-white px-8 h-10 rounded-full font-semibold w-40 cursor-pointer"
              >
                Subscribe
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-xs text-white !bg-[#2C2C2C] hover:!bg-[#333333] hover:text-white px-6 h-10 rounded-full  w-40 cursor-pointer"
                onClick={()=>onSaveClick()} 
              >
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Switch to Video Button */}
        <div
          className={`absolute right-4 md:right-16 top-[67%] transition-opacity duration-300 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Right Side Controls */}
          <div className="flex flex-col flex-wrap items-end gap-4 mt-[95px] md:mt-0 lg:mt-0">
            {/* Audio/Video Controls */}
            <div className="flex items-center gap-3">
              <Button className="bg-[#2C2C2C] hover:!bg-[#333333] dark:bg-[#2C2C2C] text-white px-4 py-2 rounded-[5px] text-xs  border border-white/10 cursor-pointer">
                <MdOutlineVideocam className="mr-1" />
                Switch To Video
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer text-white border-2 border-white rounded-full w-10 h-10"
              >
                <HiOutlineSpeakerXMark />
              </Button>
            </div>
          </div>
        </div>

        {/* Music/Podcast Player Controls */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            (showControls && isHovered) || isDragging
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Progress Bar */}
          <div className="mb-4">
            <div
              className="seek-bar w-full h-2 bg-white/30 rounded-full cursor-pointer relative group"
              onMouseDown={handleSeekMouseDown}
              onMouseMove={handleSeekMouseMove}
              onMouseUp={handleSeekMouseUp}
            >
              <div
                className="h-full bg-[#C62676] rounded-full relative"
                style={{
                  width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#C62676]  rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex justify-between text-white text-sm mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          {/* <div className="mb-4">
            <div
            className="seek-bar w-full h-2 bg-white/30 rounded-full cursor-pointer relative group"
            onMouseDown={handleSeekMouseDown}
            onMouseMove={handleSeekMouseMove}
            >
              <div
              className="h-full bg-pink-500 rounded-full relative"
              style={{
              width: `${duration ? (currentTime / duration) * 100 : 0}%`,
              }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="flex justify-between text-white text-sm mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div> */}
                    

          {/* Control Buttons */}
          <div className="flex items-center space-x-4">
            {/* Volume Control */}
            <div
              className="relative flex items-center space-x-2"
              onMouseEnter={showVolume}
              onMouseLeave={hideVolume}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
                className="cursor-pointer w-10 h-10 rounded-full bg-[#2C2C2C]  hover:!bg-[#333333]"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-5 w-5 text-white" />
                ) : volume < 0.5 ? (
                  <Volume1 className="h-5 w-5 text-white" />
                ) : (
                  <Volume2 className="h-5 w-5 text-white" />
                )}
              </Button>
              {showVolumeSlider && (
                <div
                  className={`transition-all duration-200 ${
                    showVolumeSlider ? "opacity-100 w-24" : "opacity-0 w-0"
                  } overflow-hidden`}
                >
                  <div className="bg-[#2C2C2C]  rounded-md p-2">
                    <Slider
                      orientation="horizontal"
                      className="w-20 h-4"
                      value={[volume * 100]}
                      onValueChange={([val]) => {
                        setVolume(val / 100);
                        if (val > 0) setIsMuted(false);
                      }}
                      min={0}
                      max={100}
                      step={1}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4 ml-4">
              {/* Play/Pause Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayPause}
                className="cursor-pointer w-12 h-12 rounded-full bg-[#2C2C2C]  hover:!bg-[#333333]"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 text-white" />
                ) : (
                  <Play className="h-6 w-6 text-white ml-1" />
                )}
              </Button>

              {/* Skip Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSkip}
                className="cursor-pointer w-10 h-10 rounded-full bg-[#2C2C2C]  hover:!bg-[#333333]"
              >
                <SkipForward className="h-5 w-5 text-white" />
              </Button>
            </div>

          </div>
        </div>

        {/* Main play/pause button (center) - show on hover or when paused */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePlayPause}
          className={`cursor-pointer bottom-8 md:bottom-16   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11 h-11 lg:w-16 lg:h-16 rounded-full bg-[#2C2C2C]  hover:!bg-[#333333] transition-all duration-300 ${
            (isHovered && showControls) || !isPlaying
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } z-20`}
        >
          {isPlaying ? (
            <Pause className="h-8 w-8 text-white" />
          ) : (
            <Play className="h-8 w-8 text-white ml-1" />
          )}
        </Button>
      </div>
    </>
  );
}
