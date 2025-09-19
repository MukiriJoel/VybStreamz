"use client"
import ReviewsSection from "@/components/reviews-section";
import ReviewTop from "@/components/ReviewTop";

export default function ViewMoreReview(){
    return(
        <>
            <div className="bg-[#F2F2F2] dark:bg-[#141414]">
             <main className="pt-12 mt-12">
                <div className="flex flex-col md:flex-row mt-10 px-2 items-center md:items-start md:ml-10">
                    <div className="w-40 h-40 md:w-50 md:h-50 rounded-2xl shadow-lg flex justify-center overflow-hidden">
                        <img
                        src="/images/vid5.png"
                        className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="flex-1 min-w-0 mt-4  md:ml-10 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] leading-[100%] capitalize">
                        Awinja&apos;s Perfect Wedding
                        </h2>
                        <p className="text-lg md:text-xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] line-clamp-3">
                        Comedy meets romance in this heartwarming wedding story
                        </p>
                    </div>
                </div>

                <section className="pt-8 pb-6 px-2 ">
                    <ReviewTop/>
                </section>
                <section className="">
                    <ReviewsSection/>
                </section>
             </main>
            </div>
        </>
       
    )

}