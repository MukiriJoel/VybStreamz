"use client";
import {
  Search,
  ShoppingCart,
  Bell,
  MoreHorizontal,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { MdArrowForward, MdOutlineVideocam } from "react-icons/md";
import VybzCarouselMusic from "@/components/VybzCarouselMusic";
import PartnersSlider from "@/components/PartnersSlider";
import MusicSlider from "@/components/MusicSlider";


export default function MusicPage() {
  return (
    <div className="bg-[#f2f2f2]">
      {/* Main Content */}
      <main className="">
        {/* Podcast Player Section */}
        <VybzCarouselMusic/>

        <div className="p-8 max-w-8xl mx-auto">
          {/* Episodes Section */}

          <div className="bg-white rounded-lg p-6 mb-8">
            <h3 className="text-[14px] !font-extrabold text-[#4D4D4D] mb-6">
              Tracklist
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Ukichelewa",
                  subtitle: "Edin Finky Ft Lilian Okemo",
                  duration: "4:33",
                },
                { title: "Way Up", subtitle: "Edin Finky", duration: "3:33" },
                {
                  title: "Sweet Mama",
                  subtitle: "Edin Finky",
                  duration: "3:33",
                },
                {
                  title: "Facts",
                  subtitle: "Edin Finky Ft Christine Okemo",
                  duration: "3:33",
                },
                { title: "Gere", subtitle: "Edin Finky", duration: "5:33" },
              ].map((episode, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-1 border-b"
                >
                  <div>
                    <h4 className="font-semibold text-[14px] text-[#2C2C2C]">
                      {episode.title}
                    </h4>
                    <p className="text-[12px] !font-normal text-[#4D4D4D]">
                      {episode.subtitle}
                    </p>
                  </div>
                  <span className="text-sm text-[#4D4D4D]">
                    {episode.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[24px] text-[#1A1A1A] font-bold">Partners</h3>
              <Button
                variant="ghost"
                className="text-[#1A1A1A] text-[16px] !font-medium"
              >
                View More
                <MdArrowForward className="!w-[36px] !h-[36px]" />
              </Button>
            </div>

            {/* Horizontal scrollable container */}
            <PartnersSlider></PartnersSlider>
          </div>

          {/* top ranked Section */}
          <div className="mb-8 pt-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[24px] text-[#1A1A1A] font-bold">
                Top ranked Music
              </h3>
              <Button
                variant="ghost"
                className="text-[#1A1A1A] text-[16px] !font-medium"
              >
                View More
                <MdArrowForward className="!w-[36px] !h-[36px]" />
              </Button>
            </div>
            <MusicSlider></MusicSlider>
          </div>

          {/* albums Section */}
          <div className="mb-8 pt-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[24px] text-[#1A1A1A] font-bold">Albums</h3>
              <Button
                variant="ghost"
                className="text-[#1A1A1A] text-[16px] !font-medium"
              >
                View More
                <MdArrowForward className="!w-[36px] !h-[36px]" />
              </Button>
            </div>
            <MusicSlider></MusicSlider>
          </div>
        </div>
      </main>
    </div>
  );
}
