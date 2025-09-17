import { MdArrowForward, MdClose } from "react-icons/md";
import { Button } from "./ui/button";
import { useState } from "react";

const CastDisplay = () => {
  const [showCastModal, setShowCastModal] = useState(false);

  const onViewMoreCast = () => {
    setShowCastModal(true);
  };

  const actorsData = [
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
    {
      image: "/images/dp.png",
      title: "awinja",
      subTitle: "producer",
    },
  ];

  return (
    <div className="max-w-[230px] md:max-w-[350px] pb-0">
      <div className="flex items-center pt-2 justify-between">
        <h3 className="text-xl md:!text-xl font-bold text-white capitalize">
          cast
        </h3>
      </div>
      <div className="flex flex-nowrap gap-1 md:gap-3 py-2 items-center overflow-x-auto scrollbar-hide">
        {[
          {
            image: "/images/dp.png",
            title: "awinja",
            subTitle: "producer",
          },
          {
            image: "/images/dp.png",
            title: "pascal tokodi",
            subTitle: "producer",
          },
          {
            image: "/images/dp.png",
            title: "awinja",
            subTitle: "producer",
          },
          {
            image: "/images/dp.png",
            title: "awinja",
            subTitle: "producer",
          },
        ].map((actor, index) => (
          <div key={index} className="flex-shrink-0">
            <p className="!font-normal !flex-nowrap !px-0 !text-xs text-white leading-[120%] text-center whitespace-nowrap">
              {actor.title},
            </p>
          </div>
        ))}
        <Button
          variant="ghost"
          className=" !pr-0 cursor-pointer text-white !text-sm !font-normal hover:border-white/20 hover:text-white hover:!bg-[#2C2C2C]"
          onClick={() => onViewMoreCast()}
        >
          View More
          <MdArrowForward className="!w-8 !h-8" />
        </Button>
      </div>
      {showCastModal && (
        <div className="fixed inset-0 backdrop-blur bg-black/16 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-3 w-100 overflow-hidden  mx-4">
            <div className="flex justify-between">
              <h3 className="text-xl font-extrabold text-[#2C2C2C] dark:text-white mb-2">
                Cast
              </h3>
              <MdClose
                onClick={() => setShowCastModal(false)}
                className="text-[#2C2C2C] dark:text-white w-5 h-5 cursor-pointer"
              />
            </div>
            {/* // Move data outside component for better performance */}

            <div className="h-120 overflow-y-auto scrollbar-hide">
              {actorsData.map((actor, index) => (
                <div key={index} className="flex justify-start py-2">
                  <div className="h-17 w-17 overflow-hidden !p-0 rounded-lg border border-white dark:border-[#333333] shadow-sm">
                    <img
                      className="w-full h-full object-cover"
                      src={actor.image}
                      alt={`${actor.title} - ${actor.subTitle}`}
                    />
                  </div>
                  <div className="items-center flex flex-col justify-center ml-5">
                    <p className="text-md font-extrabold leading-[100%] capitalize text-center">
                      {actor.title}
                    </p>
                    <p className="mt-3 text-xs font-normal leading-[120%] capitalize text-center">
                      {actor.subTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CastDisplay;
