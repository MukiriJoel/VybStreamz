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
import { useState } from "react";
import { useMusic } from "@/hooks/useMusic";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";

interface Artist {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  partner: string;
}

const defaultArtist: Artist = {
  id: 0,
  title: 'Unknown Artist',
  subtitle: 'Unknown',
  description: 'No description available',
  image: '/default-image.png',
  partner: '/logos/default.png'
};

export default function ArtistDetails({id}:{id:number}) {

  const Router=useRouter();
    
     const onViewMoreClick = () =>{
     
      Router.push(`/viewMore/`)
    }

    const  music  = useMusic();

    let artistDetails:Artist=defaultArtist;

    if(music){

      const musicArr=music.music;
      

      const getById=(id:number, array: Artist[])=> {
        return array.find((item: Artist) =>item && item.id == id);
      }

      (artistDetails as any)=getById(id,musicArr)

    }


  return (
    <div className="bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Main Content */}
      <main className="pt-12">
          {/* Hero Section */}
        {artistDetails && (
          <div className="px-8 pt-8 mt-10">
            <div className="flex rounded-4xl h-[70vh] p-0 overflow-hidden">
              <img src={artistDetails?.image} className="w-full h-full object-cover" alt=''/>
            </div>

            <h2 className="text-4xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-3 mt-4">{artistDetails?.title}</h2>
            <p className="text-[#2C2C2C] dark:text-[#FFFFFF] max-w-md max-h-[72px] text-[20px] tracking-normal leading-none">
            {artistDetails?.description}
            </p>

          </div>
        )}
        
        
        <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
          {/* Episodes Section */}
          {/* Partners Section */}
          <div className="mb-8">
             <SectionHeader  viewButton={true} title="partners" route="/partners"/>

            {/* Horizontal scrollable container */}
            <PartnersSlider></PartnersSlider>
          </div>

          {/* top ranked Section */}
          <div className="mb-8 pt-1">
             <SectionHeader  viewButton={true} title="top ranked music" route="/music"/>
            <MusicSlider></MusicSlider>
          </div>

          {/* albums Section */}
          <div className="mb-8 pt-1">
             <SectionHeader  viewButton={true} title="albums" route="/music"/>
            <MusicSlider></MusicSlider>
          </div>
        </div>
      </main>
    </div>
  );
}


