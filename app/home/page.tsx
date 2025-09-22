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
import SectionHeader from "@/components/SectionHeader";
import BillboardV2 from "@/components/BillBoardV2";
import BillBoardV3 from "@/components/BillBoardV3";
import PartnerBanner from "@/components/PartnerBanner";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
   const Router=useRouter();
    

     const onViewMoreClick = () =>{
      Router.push(`/partners`)

    }

    const adSlides = [
    {
      id: 1,
      image: "/images/safAd.png",
    },
    {
      id: 2,
      image: "/images/safAd2.png",
    },
    {
      id: 3,
      image: "/images/safAd3.png",
    },
  ];

  return (
    <>
      <div className="bg-[#F2F2F2] dark:bg-[#141414]">
        {/* Hero Section */}
        <main className="">
          <BillBoardV3/>
          {/* <VybzCarouselMain/> */}
          <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
            {/* Partners Section */}
            <section className="">
                <SectionHeader  viewButton={true} title="partners" route='/partners'/>
              <PartnersSlider />
            </section>

            {/* Best Deals Section */}
            <section className="">
               <SectionHeader  viewButton={true} title="best deals 🔥" route='/deals'/>
              <DealsSlider/>
            </section>

            {/* Trending Section */}
            <section className="">
               <SectionHeader  viewButton={true} title="watch" route='/videos'/>
                  <VideoSlider />
            </section>

            {/* Recommended For You Section */}
            {/* <section className="">
               <SectionHeader  viewButton={true} title="recommended for you" route=""/>
              <VideoSlider />
            </section> */}

            {/* partner highligh Section */}
            
            

            {/* Netflix Content Banner */}
            <section>
              <PartnerBanner header="partner highlight" title="netflix" logo="/logos/netflix.png" button="visit site" image="/images/bestNetflix.png"/>
            </section>

            {/* Recommended For You Section */}
            <section className=" ">
              <SectionHeader  viewButton={true} title="listen" route='/music'/>
              <MusicSlider />
            </section>

            {/* Trending Section */}
            <section className="">
                <SectionHeader  viewButton={true} title="games" route='/games'/>
              <GamesSlider />
            </section>

            {/*AD slider */}
            <section>
              <SectionHeader  viewButton={false} title="amazing deals for you" route=''/>
              <AdSlider slides={adSlides}/>
            </section>
              

            {/* Recommended For You Section */}
            <section className=" ">
                <SectionHeader  viewButton={true} title="learn" route='education'/>
              <EducationSlider />
            </section>
            {/* Recommended For You Section */}
            <section className="  ">
                <SectionHeader  viewButton={true} title="tune in" route='/podcasts'/>
              <PodcastSlider />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
