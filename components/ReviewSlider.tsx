import RatingDisplay from "./RatingDisplay";

const ReviewSlider = () =>{
    return(
        <div className="overflow-x-auto scrollbar-hide py-5 px-1">
        <div className="flex gap-2 sm:gap-2 md:gap-2 lg:gap-2 text-center min-w-max">
          {[
            {
               image:  "/images/dp.png",
              title: "John Doe",
              date: "Aug 15, 2025",
              description:"One of the standout features of Vybz Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy",
              rating:4
            },
            {
              image:  "/images/dp.png",
              title: "John Doe",
              date: "Aug 15, 2025",
              description:"One of the standout features of Vybz Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy",
              rating:4
            },
            {
              image:  "/images/dp.png",
              title: "John Doe",
              date: "Aug 15, 2025",
              description:"One of the standout features of Vybz Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy",
              rating:4
            },
            {
              image:  "/images/dp.png",
              title: "John Doe",
              date: "Aug 15, 2025",
              description:"One of the standout features of Vybz Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy",
              rating:4
            },
            {
               image:  "/images/dp.png",
              title: "John Doe",
              date: "Aug 15, 2025",
              description:"One of the standout features of Vybz Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy",
              rating:4
            },
            {
              image:  "/images/dp.png",
              title: "John Doe",
              date: "Aug 15, 2025",
              description:"One of the standout features of Vybz Streams is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy",
              rating:4
            },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg sm:rounded-xl flex-shrink-0 w-43 sm:w-64 md:w-72 lg:w-80 p-3 sm:p-4 min-h-[100px] sm:min-h-[220px] md:p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 min-w-0 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="!w-8 !h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 shadow-lg rounded-full object-cover flex-shrink-0"
                  />
                  <span className="font-extrabold ml-1 text-black dark:text-white capitalize text-sm sm:text-base md:text-lg truncate">
                    {item.title}
                  </span>
                </div>
                {/* <span className="bg-[#3bad49] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap ml-2">
                  {item.percentage}% OFF
                </span> */}
              </div>

              <div className="flex flex-wrap md:flex-nowrap justify-between gap-1">
                <div className="flex w-full">

                    <RatingDisplay rating={item.rating}/>
                </div>
                 <div className="inline-block text-left w-full">
                    <p className="text-base text-[#2C2C2C] dark:text-white">{item.date}</p>
                 </div>
              </div>
              
              <div className="pt-3">
                <p className="!text-base min-h-[60px] !leading-[120%] py-1 pr-2 !font-normal line-clamp-3 text-[#2C2C2C] dark:text-[#FFFFFF] text-left mb-3 capitalize">
                  {item.description}
                </p>
              </div>
             
              
             
            </div>
          ))}
        </div>
      </div>
    )
}
export default ReviewSlider;