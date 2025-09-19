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
import { usePartners } from "@/hooks/usePartners";
import PlansSlider from "@/components/PlansSlider";
import VideoSlider from "@/components/VideoSlider";
import GamesSlider from "@/components/GamesSlider";
import EducationSlider from "@/components/EducationSlider";
import PodcastSlider from "@/components/PodcastSlider";
import SectionHeader from "@/components/SectionHeader";
import { useRouter } from "next/navigation";
import ReviewSlider from "@/components/ReviewSlider";
import ReviewTop from "@/components/ReviewTop";

interface Partner {
  id: number;
  name: string;
  description: string;
  logo: string;
  image: string;
}

const defaultPartner: Partner = {
  id: 0,
  name: "Unknown Partner",
  logo: "/logos/bazeLg.png",
  description: "No description available",
  image: "/default-image.png",
};

export default function PartnerDetails({ id }: { id: number }) {
  const [activeTab, setActiveTab] = useState("Videos");
  const [isSubscribed, setIsSubscribed] = useState(true);
  const tabs = ["Videos", "Music", "Games", "Education", "Podcast"];

  const partners = usePartners();

  let partnerDetails: Partner = defaultPartner;

  if (partners) {
    const partnersArr = partners.partners;

    const getById = (id: number, array: Partner[]) => {
      return array.find((item: Partner) => item && item.id == id);
    };

    (partnerDetails as any) = getById(id, partnersArr);
  }

  const Router = useRouter();
  const onViewMoreClick = () => {
    Router.push(`/viewMore/`);
  };

  const onViewReviewsClick = () =>{
    Router.push('/viewMore/review')
  }

  return (
    <div className="bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Main Content */}
      <main className="pt-12">
        {/* Hero Section */}
        {partnerDetails && (
          <div className="px-2 pt-8 mt-10">
            <div className="flex rounded-4xl overflow-hidden h-57vh md:h-[65vh] p-0">
              <img
                src={partnerDetails?.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            {isSubscribed ? (
              <div className="flex mt-10 items-center">
                <div className="w-16 h-16 rounded-2xl shadow-lg flex justify-center overflow-hidden">
                  <img
                    src={partnerDetails?.logo}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                    <h2 className="ml-8 text-3xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] leading-[100%] ">
                    {partnerDetails?.name}
                    </h2>
                    <p className="text-xs pt-1 ml-8 !font-normal text-[#2C2C2C] dark:text-[#FFFFFF] line-clamp-3">
                    {partnerDetails?.description}
                    </p>
                </div>
               
              </div>
            ) : (
            
              <div className="flex justify-between">
                <div className="flex mt-10 items-center">
                  <div className="w-14 h-14 rounded-2xl shadow-lg flex justify-center overflow-hidden">
                    <img
                      src={partnerDetails?.logo}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h2 className="ml-8 text-2xl md:text-4xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] leading-[100%] ">
                    {partnerDetails?.name}
                  </h2>
                </div>
                <div className="flex items-center mt-10">
                  <Button className="cursor-pointer bg-[#c62676] hover:bg-[#a91e63] text-white text-xl px-12 py-6 rounded-full font-medium">
                    Visit Site
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {isSubscribed ? (
          <div className="p-2 md:p-4 lg:p-4 max-w-8xl mx-auto">
            {/* Episodes Section */}
            {/* Partners Section */}
            <div className="mb-7">
              <SectionHeader viewButton={false}
                title="explore plans"
                route=""
              />

              {/* Horizontal scrollable container */}
              <div className="pt-2">
                <PlansSlider/>
              </div>
              
            </div>
            
            {/* TABS */}
            <div className="bg-[#F2F2F2] dark:bg-[#141414] mb-0 pt-0">
              <nav className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                                py-3 px-1 border-b-3 cursor-pointer font-semibold text-lg md:text-xl lg:text-xl whitespace-nowrap transition-colors
                                ${
                                  activeTab === tab
                                    ? "border-[#c62676] text-[#c62676]"
                                    : "border-transparent text-[#000000 ] hover:text-[#2C2C2C] dark:text-[#FFFFFF] hover:border-[#cccccc]"
                                }
                            `}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            {activeTab === "Videos" && (
              <div className="p-0">
                <VideoSlider />
                <VideoSlider />
              </div>
            )}
            {activeTab === "Music" && (
              <div className="p-0">
                <MusicSlider />
                <MusicSlider />
              </div>
            )}
            {activeTab === "Games" && (
              <div className="p-0">
                <GamesSlider />
                <GamesSlider />
              </div>
            )}
            {activeTab === "Education" && (
              <div className="p-0">
                <EducationSlider />
                <EducationSlider />
              </div>
            )}
            {activeTab === "Podcast" && (
              <div className="p-0">
                <PodcastSlider />
                <PodcastSlider />
              </div>
            )}
            <section>
                <ReviewTop/>
            </section>
            <section>
                <SectionHeader  viewButton={true} title="user reviews" route={"/viewMore/PartnersReview"}/>
                <ReviewSlider/>
            </section>
          </div>
        ) : (
            
          <div className="p-2 md:p-4 lg:p-4 max-w-8xl mx-auto">
            <section>
                <ReviewTop/>
            </section>
            <section>
                <SectionHeader  viewButton={true} title="user reviews" route=""/>
                <ReviewSlider/>
            </section>
            <VideoSlider />
          </div>
        )}
      </main>
    </div>
  );
}
