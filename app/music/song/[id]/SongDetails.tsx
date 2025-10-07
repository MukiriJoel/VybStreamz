"use client";
import PartnersSlider from "@/components/PartnersSlider";
import MusicSlider from "@/components/MusicSlider"; 
import { useState } from "react";
import { useMusic } from "@/hooks/useMusic";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import VybzCarouselMusic from "@/components/VybzCarouselMusic";
import VybzMusicPlayer from "@/components/VybzMusicPlayer";

interface Song {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  partner: string;
}

const defaultSong: Song = {
  id: 0,
  title: 'Unknown Song',
  subtitle: 'Unknown',
  description: 'No description available',
  image: '/default-image.png',
  partner: '/logos/default.png'
};

export default function SongDetails({id}:{id:number}) {

  const Router=useRouter();
    
     const onViewMoreClick = () =>{
     
      Router.push(`/viewMore/`)
    }

    const  music  = useMusic();

    let songDetails:Song=defaultSong;

    if(music){

      const musicArr=music.music;
      

      const getById=(id:number, array: Song[])=> {
        return array.find((item: Song) =>item && item.id == id);
      }

      (songDetails as any)=getById(id,musicArr)

    }


  return (
    // <div className="bg-[#F2F2F2] dark:bg-[#141414]">
    //   {/* Main Content */}
    //   <main className="pt-12">
    //       {/* Hero Section */}
    //     {artistDetails && (
    //       <div className="px-8 pt-8 mt-10">
    //         <div className="flex rounded-4xl h-[70vh] p-0 overflow-hidden">
    //           <img src={artistDetails?.image} className="w-full h-full object-cover" alt=''/>
    //         </div>

    //         <h2 className="text-4xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-3 mt-4">{artistDetails?.title}</h2>
    //         <p className="text-[#2C2C2C] dark:text-[#FFFFFF] max-w-md max-h-[72px] text-[20px] tracking-normal leading-none">
    //         {artistDetails?.description}
    //         </p>

    //       </div>
    //     )}
        
        
    //     <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
    //       {/* Episodes Section */}
    //       {/* Partners Section */}
    //       <div className="mb-8">
    //          <SectionHeader  viewButton={true} title="partners" route="/partners"/>

    //         {/* Horizontal scrollable container */}
    //         <PartnersSlider></PartnersSlider>
    //       </div>

    //       {/* top ranked Section */}
    //       <div className="mb-8 pt-1">
    //          <SectionHeader  viewButton={true} title="top ranked music" route="/music"/>
    //         <MusicSlider></MusicSlider>
    //       </div>

    //       {/* albums Section */}
    //       <div className="mb-8 pt-1">
    //          <SectionHeader  viewButton={true} title="albums" route="/music"/>
    //         <MusicSlider></MusicSlider>
    //       </div>
    //     </div>
    //   </main>
    // </div>

     <div className="bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Main Content */}
      <main className="">
        {/* Podcast Player Section */}
        <VybzMusicPlayer
         audioSrc="/audio/podcast.mp3"
          bannerImage="/images/albumCover.png"
          albumImage="/images/kodong.png"
          title="Disko"
          subtitle="Kodong Klan"
          albumInfo="Song | 3 min | Hiphop"
          platformLogo="/logos/bazeLg.png"/>

        <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
        

          {/* Partners Section */}
          <div className="">
            <SectionHeader  viewButton={true} title="partners" route="/partners"/>

            {/* Horizontal scrollable container */}
            <PartnersSlider></PartnersSlider>
          </div>

          {/* top ranked Section */}
          <div className="">
              <SectionHeader  viewButton={true} title="top ranked music" route="/music"/>
            <MusicSlider></MusicSlider>
          </div>

          {/* albums Section */}
          <div className="">
              <SectionHeader  viewButton={true} title="albums" route="/music"/>
            <MusicSlider></MusicSlider>
          </div>
        </div>
      </main>
    </div>
  );
}


