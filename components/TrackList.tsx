interface TrackListProps{
    title:string;

}

const TrackList = ({title}:TrackListProps)=>{
    return(
        <div className="bg-white dark:bg-[#2C2C2C] rounded-lg p-6 ">
            <h3 className="text-[14px] !font-extrabold text-[#4D4D4D] dark:text-white mb-6 capitalize">
              {title}
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Ukichelewa",
                  subtitle: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal.",
                  duration: "4:33",
                },
                { title: "Way Up", subtitle: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal.", duration: "3:33" },
                {
                  title: "Sweet Mama",
                  subtitle: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal.",
                  duration: "3:33",
                },
                {
                  title: "Facts",
                  subtitle: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal.",
                  duration: "3:33",
                },
                { title: "Gere", subtitle: "A young woman moves in with her boyfriend for a fresh start—only to get pulled into a dangerous world of secrets, crime, and betrayal.", duration: "5:33" },
              ].map((episode, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-1 border-b border-[#e5e5e5] dark:!border-[#333333]"
                >
                  <div>
                    <h4 className="font-semibold text-[14px] text-[#2C2C2C] dark:text-[#FFFFFF]">
                      {episode.title}
                    </h4>
                    <p className="text-[12px] !font-normal line-clamp-3 lg:text-[12px] lg:!font-normal text-[#4D4D4D] dark:text-white">
                      {episode.subtitle}
                    </p>
                  </div>
                  <span className="text-sm text-[#4D4D4D] dark:text-white">
                    {episode.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
    )
}
export default TrackList;