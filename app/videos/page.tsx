"use client"
import { Button } from "@/components/ui/button";
import VybzCarouselMain from "@/components/VybzCarouselMain";
import { MdArrowForward } from "react-icons/md";
import PartnersSlider from "@/components/PartnersSlider";
import VideoSlider from "@/components/VideoSlider";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  const Router=useRouter();
    
     const onViewMoreClick = () =>{
     
      Router.push(`/viewMore/`)
    }
    
  return (
    <>
      <div className="bg-[#F2F2F2] dark:bg-[#141414]">
        {/* Hero Section */}
        <main className="">
          <VybzCarouselMain />
          <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
            {/* Partners Section */}
            <section className="">
                <SectionHeader  viewButton={true} title="partners" route="/partners"/>
              <PartnersSlider />
            </section>


            {/* Trending Section */}
            <section className="">
                <SectionHeader  viewButton={true} title="trending" route="/videos"/>
               
                  <VideoSlider />
               
         
            </section>

            {/* Recommended For You Section */}
            <section className="">
                <SectionHeader  viewButton={true} title="recommended for you" route="/videos"/>
              <VideoSlider />
            </section>


            {/* Recommended For You Section */}
            <section className="   ">
                <SectionHeader  viewButton={true} title="drama" route="/videos"/>
              <VideoSlider />
            </section>


            {/* Recommended For You Section */}
            <section className=" ">
                <SectionHeader  viewButton={true} title="comedy" route="/videos"/>
              <VideoSlider />
            </section>
           
          </div>
        </main>
      </div>
    </>
  );
}
