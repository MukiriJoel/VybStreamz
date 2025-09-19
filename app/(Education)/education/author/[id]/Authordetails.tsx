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
import { useBooks } from "@/hooks/useBooks";

interface Author {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  partner: string;
  backgroundImage: string;
}

const defaultAuthor: Author = {
  id: 0,
  title: 'Unknown Artist',
  subtitle: 'Unknown',
  description: 'No description available',
  image: '/default-image.png',
  partner: '/logos/default.png',
  backgroundImage:"/images/robert.png"
};

export default function AuthorDetails({id}:{id:number}) {

  const Router=useRouter();
    
     const onHandleClick = () =>{
     
      Router.push(`/viewMore/`)
    }

    const  books  = useBooks();

    let authorDetails:Author=defaultAuthor;

    if(books){

      const booksArr=books.books;
      

      const getById=(id:number, array: Author[])=> {
        return array.find((item: Author) =>item && item.id == id);
      }

      (authorDetails as any)=getById(id,booksArr)

    }


  return (
    <div className="bg-[#F2F2F2] dark:bg-[#141414]">
      {/* Main Content */}
      <main className="pt-12">
          {/* Hero Section */}
        {authorDetails && (
          <div className="px-8 pt-8 mt-10">
            <div className="flex rounded-4xl h-[70vh] p-0 overflow-hidden">
              <img src={authorDetails?.backgroundImage} className="w-full h-full object-cover" alt=''/>
            </div>

            <h2 className="text-4xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] mb-3 mt-4 capitalize">{authorDetails?.subtitle}</h2>
            <p className="capitalize text-[#2C2C2C] dark:text-[#FFFFFF] max-w-md max-h-[72px] text-[20px] tracking-normal leading-none">
            {authorDetails?.subtitle}
            </p>

          </div>
        )}
        
        
        <div className="p-2 md:p-4 lg:p-6 xl:p-6 max-w-8xl mx-auto">
          {/* Episodes Section */}
          {/* Partners Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[24px] text-[#333333] dark:text-white font-bold">Partners</h3>
              <Button
                variant="ghost"
                className="text-[#333333] dark:text-white text-[16px] !font-medium"
                onClick={()=>onHandleClick()}
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
              <h3 className="text-[24px] text-[#333333] dark:text-white font-bold">
                Top ranked Music
              </h3>
              <Button
                variant="ghost"
                className="text-[#333333] dark:text-white text-[16px] !font-medium"
                onClick={()=>onHandleClick()}
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
              <h3 className="text-[24px] text-[#333333] dark:text-white font-bold">Albums</h3>
              <Button
                variant="ghost"
                className="text-[#333333] dark:text-white text-[16px] !font-medium"
                onClick={()=>onHandleClick()}
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


