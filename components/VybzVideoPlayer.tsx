"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Maximize, Minimize } from "lucide-react";
import CastDisplay from "@/components/CastDisplay";

interface Props {
  toggleFullscreen: () => void;
  isFullscreen: boolean;
  showControls: boolean;
  isHovered: boolean;
  isDragging: boolean;
  showContent: boolean;
  handleContainerClick: (e: React.MouseEvent) => void;
  description: string;
  cast?: string[];
}

export default function VideoContainer({
  toggleFullscreen,
  isFullscreen,
  showControls,
  isHovered,
  isDragging,
  showContent,
  handleContainerClick,
  description,
  cast = [],
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      onClick={handleContainerClick}
    >
      {/* Video Layer */}
      <video
        className="w-full h-full object-cover"
        src="/sample-video.mp4"
        autoPlay
        muted
        loop
      />

      {/* Overlay Controls */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-4 pointer-events-none transition-opacity duration-300 ${
          (showControls && isHovered) || isDragging || showContent
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        {/* Description + Cast Section */}
        <div
          className="no-video-click bg-black/50 rounded-xl p-4 mb-4 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-2xl font-bold text-white mb-2">Mofaya</h1>
          <p className="text-white text-sm">{description}</p>
          {cast.length > 0 && (
            <div className="mt-3">
              <CastDisplay cast={cast} />
            </div>
          )}
        </div>

        {/* Fullscreen Toggle Button - Mobile */}
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
          className={`cursor-pointer absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#2C2C2C]/80 hover:!bg-[#333333] transition-all duration-300 md:hidden ${
            (showControls && isHovered) || isDragging || showContent
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {isFullscreen ? (
            <Minimize className="h-5 w-5 text-white" />
          ) : (
            <Maximize className="h-5 w-5 text-white" />
          )}
        </Button>

        {/* Fullscreen Toggle Button - Desktop */}
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
          className={`cursor-pointer hidden md:flex self-end w-12 h-12 rounded-full bg-[#2C2C2C]/80 hover:!bg-[#333333] transition-all duration-300 ${
            (showControls && isHovered) || isDragging || showContent
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {isFullscreen ? (
            <Minimize className="h-6 w-6 text-white" />
          ) : (
            <Maximize className="h-6 w-6 text-white" />
          )}
        </Button>
      </div>
    </div>
  );
}
