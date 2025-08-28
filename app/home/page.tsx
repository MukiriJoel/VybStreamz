"use client"
import { Button } from "@/components/ui/button";
import VybzCarouselMain from "@/components/VybzCarouselMain";
import { MdArrowForward } from "react-icons/md";
import PartnersSlider from "@/components/PartnersSlider";
import GamesSlider from "@/components/GamesSlider";
import PodcastSlider from "@/components/PodcastSlider";
import EducationSlider from "@/components/EducationSlider";
import MusicSlider from "@/components/MusicSlider";
import VideoSlider from "@/components/VideoSlider";
import { title } from "process";
import DealsSlider from "@/components/DealsSlider";
import AdSlider from "@/components/AdSlider";
import { useRouter } from "next/navigation";
import PartnerHighlight from "@/components/PartnerHighlight";
import Billboard from "@/components/billboard";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
   const Router=useRouter();
    
     const onHandleClick = () =>{
     
      Router.push(`/viewMore/`)
  }

  return (
    <>
      <div className="bg-[#F2F2F2] dark:bg-[#141414]">
        {/* Hero Section */}
        <main className="">
          <Billboard/>
          {/* <VybzCarouselMain/> */}
          <div className="p-8 max-w-8xl mx-auto">
            {/* Partners Section */}
            <section className="">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-black dark:text-white">Partners</h3>
                <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium" onClick={()=>onHandleClick()}
                >
                  View More
                  <MdArrowForward className="!w-[36px] !h-[36px]" />
                </Button>
              </div>
              <PartnersSlider />
            </section>

            {/* Best Deals Section */}
            <section className=" py-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-black dark:text-white flex items-center">
                  Best Deals
                  <span className="ml-2 text-[#f6b60b]">🔥</span>
                </h3>
                <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium" onClick={()=>onHandleClick()}
                >
                  View More
                  <MdArrowForward className="!w-[36px] !h-[36px]" />
                </Button>
              </div>
              <DealsSlider/>
            </section>

            {/* Trending Section */}
            <section className="">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black dark:text-white">Trending</h3>
                <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium" onClick={()=>onHandleClick()}
                >
                  View More
                  <MdArrowForward className="!w-[36px] !h-[36px]" />
                </Button>
              </div>
               
                  <VideoSlider />
               
         
            </section>

            {/* Recommended For You Section */}
            <section className="">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Recommended For You
                </h3>
                <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium" onClick={()=>onHandleClick()}
                >
                  View More
                  <MdArrowForward className="!w-[36px] !h-[36px]" />
                </Button>
              </div>
              <VideoSlider />
            </section>

            {/* partner highligh Section */}
            
            

            {/* Netflix Content Banner */}
            <div className="relative w-full h-70 sm:h-70 md:h-100 lg:h-120 xl:h-120 rounded-lg overflow-hidden shadow-2xl">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 rounded-xl shadow-2xl">
                <img
                  src="/images/bestNetflix.png"
                  alt="Netflix comedies showcase"
                  className="w-full h-full  object-fit"
                />
              </div>

            
            </div>

            {/* Recommended For You Section */}
            <section className=" py-4  ">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black dark:text-white">Listen</h3>
                <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium" onClick={()=>onHandleClick()}
                >
                  View More
                  <MdArrowForward className="!w-[36px] !h-[36px]" />
                </Button>
              </div>
              <MusicSlider />
            </section>

            {/* Trending Section */}
            <section className="py-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black dark:text-white">Play</h3>

                <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium" onClick={()=>onHandleClick()}
                >
                  View More
                  <MdArrowForward className="!w-[36px] !h-[36px]" />
                </Button>
              </div>
              <GamesSlider />
            </section>

            {/*AD slider */}
           <AdSlider/>

            {/* Recommended For You Section */}
            <section className=" py-4  ">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black dark:text-white">Learn</h3>
                <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium" onClick={()=>onHandleClick()}
                >
                  View More
                  <MdArrowForward className="!w-[36px] !h-[36px]" />
                </Button>
              </div>
              <EducationSlider />
            </section>
            {/* Recommended For You Section */}
            <section className=" py-4  ">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-black dark:text-white">Tune In</h3>
                <Button
                  variant="ghost"
                  className="text-[#333333] dark:text-white text-[16px] !font-medium" onClick={()=>onHandleClick()}
                >
                  View More
                  <MdArrowForward className="!w-[36px] !h-[36px]" />
                </Button>
              </div>
              <PodcastSlider />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
