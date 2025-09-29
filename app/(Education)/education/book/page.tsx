"use client";
import { useState } from "react";
import VybzCarouselEducation from "@/components/VybzCarouselEducation";
import EducationSlider from "@/components/EducationSlider";
import { MdArrowForward } from "react-icons/md";
import { Button } from "@/components/ui/button";
import VybzMusicPlayer from "@/components/VybzMusicPlayer";
import SectionHeader from "@/components/SectionHeader";
import ReviewSlider from "@/components/ReviewSlider";
import RatingsComponent from "@/components/ratings-section";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EducationListing() {
  const [activeTab, setActiveTab] = useState("E-Book");
  const tabs = ["E-Book", "Audio Book"];

  return (
    <>
      <div className="bg-[#F2F2F2] dark:bg-[#141414]">
        {/* Main Content */}
        <main className="">
          {/* <VybzCarouselEducation tabs={tabs} activeTab={activeTab} /> */}
          <VybzMusicPlayer
            audioSrc="/audio/podcast.mp3"
            bannerImage="/images/robert.png"
            albumImage="/images/robertSm.png"
            albumInfo=" 1 Book | 1Hr 40Min | 1 Issue"
            platformLogo="/logos/bazeLg.png"
            title="rich dad poor dad"
            subtitle="robert kiyosaki"
            description="A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous web of secrets, crime, and betrayal. Set in modern Kenya, Mo Faya is a gritty drama where every choice sparks more fire."
          />
          {/* Content Navigation */}
          {/* TABS */}
          <div className="bg-[#F2F2F2] dark:bg-[#141414] mb-8 pt-8  ">
            <nav className="flex space-x-8 overflow-x-auto justify-center scrollbar-hide">
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
          {activeTab === "E-Book" ? (
            <div className="py-2 px-2 md:px-4 lg:px-6 xl:px-6">
              {/* top ranked Section */}

              {/* trending Section */}
              <div className="">
                <SectionHeader
                  title="similar E-Books"
                  viewButton={true}
                  route="/education"
                />
                <EducationSlider></EducationSlider>
              </div>
              <section>
                <RatingsComponent />
              </section>
              <section>
                <SectionHeader
                  viewButton={true}
                  title="user reviews"
                  route={"/viewMore/ContentReview"}
                />
                <ReviewSlider />
              </section>
            </div>
          ) : (
            <div className="py-2 px-2 md:px-4 lg:px-6 xl:px-6">
              {/* top ranked Section */}
              <div className="">
                <SectionHeader
                  title="similar Audio Books"
                  viewButton={true}
                  route="/education"
                />

                <EducationSlider></EducationSlider>
              </div>
              <section>
                <RatingsComponent />
              </section>
              <section>
                <SectionHeader
                  viewButton={true}
                  title="user reviews"
                  route={"/viewMore/ContentReview"}
                />
                <ReviewSlider />
              </section>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
