"use client"
import ReviewsSection from "@/components/reviews-section";
import ReviewTop from "@/components/ReviewTop";

export default function ViewMoreReview(){
    return(
        <>
            <div className="bg-[#F2F2F2] dark:bg-[#141414]">
             <main className="pt-12 mt-12">
                <div className="flex mt-10 px-2 items-center">
                    <div className="w-16 h-16 rounded-2xl shadow-lg flex justify-center overflow-hidden">
                    <img
                        src="/logos/baze.png"
                        className="object-cover w-full h-full"
                    />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="ml-8 text-3xl font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] leading-[100%] capitalize">
                        baze
                        </h2>
                        <p className="text-xl ml-8 font-semibold text-[#2C2C2C] dark:text-[#FFFFFF] line-clamp-3">
                            Baze is a digital-first content platform from Safaricom offering a rich mix of on-demand and live entertainment, including short-form videos, trending music,
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