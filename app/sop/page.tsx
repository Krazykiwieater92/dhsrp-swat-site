import { BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
export default function Page() {
  return (
    <>
      <div className="flex">
        <h1 className="mx-auto mt-15 font-bold text-5xl">
          The SWAT Documents page
        </h1>
      </div>
      <BentoGrid className="mt-10 mx-auto max-w-4xl gap-y-40">
        <div className="max-w-xs w-full group/card">
          <a href="https://docs.google.com/document/d/1C2yyHwFWdlzsUhD3iqaYpgxX8WXMYn85G2BAYzcSR9A/edit?tab=t.0">
            SWAT Handbook
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://media.defense.gov/2024/Apr/24/2003448957/1200/1200/0/240417-X-KA902-1171.JPG)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-col">
                  <p className="font-normal text-white relative z-10">
                    B. F. Tape
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  SWAT Handbook
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  The base SWAT SOP Handbook.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-xs w-full group/card">
          <a href="https://docs.google.com/document/d/19ipkdDmFc5sFg7kt0kVqJV8fUUZMINRwEi-4yUgA8lM/edit?tab=t.0">
            {" "}
            SWAT K-9 SOP
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://i.redd.it/hwhav17lcv3e1.jpeg)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-col">
                  <p className="font-normal text-white relative z-10">
                    B. F. Tape
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  SWAT K-9 SOP
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  The SWAT K-9 SOP.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-xs w-full group/card">
          <a href="https://docs.google.com/document/d/14BwQCAMwI46mcH2KWhqgE5N8S9T7j8RkTvKSVzfASDo/edit?tab=t.0">
            {" "}
            SWAT Negotiator SOP
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://pbs.twimg.com/media/C81mTx3VwAAcqOz?format=jpg&name=4096x4096)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-col">
                  <p className="font-normal text-white relative z-10">
                    B. F. Tape
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  SWAT Negotiator SOP
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  The SWAT Negotiator SOP.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-xs w-full group/card">
          <a href="https://docs.google.com/document/d/1cDqBl3vR_EbLLolhLi9dzCzIjt9HgTh3QJHFbLEPYgo/edit?tab=t.0">
            {" "}
            SWAT EOD SOP
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://s.yimg.com/ny/api/res/1.2/rZytldCJlN4eFXp8u8zwww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTg4MDtoPTY2MA--/https://media.zenfs.com/en-us/homerun/deadline.com/f8a6b2c3362b8be66e2f1845ec72c860)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-col">
                  <p className="font-normal text-white relative z-10">
                    B. F. Tape
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  SWAT EOD SOP
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  The SWAT EOD SOP.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-xs w-full group/card">
          <a href="https://docs.google.com/document/d/1VwrJ2ifUTOMAGdIHwMUiiHXg0b5iLfnVk0vV7kNSrtM/edit?tab=t.0">
            {" "}
            SWAT Drone Operator SOP
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://ca-times.brightspotcdn.com/dims4/default/e224ecf/2147483647/strip/true/crop/2048x1152+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F50%2Fd7%2F73df07983fccd01f4fd1dd883823%2Fla-1547599829-owy6l61ife-snap-image)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-col">
                  <p className="font-normal text-white relative z-10">
                    B. F. Tape
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  SWAT Drone Operator SOP
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  The SWAT Drone Ops SOP.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-xs w-full group/card">
          <a href="https://docs.google.com/document/d/1RsSH65oBCJF08mAAyaiPncjNjD6_hN7glb7eLvvaMg8/edit?tab=t.0">
            {" "}
            SWAT Air Unit SOP
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://i.ytimg.com/vi/lEeyxL0KP2E/maxresdefault.jpg)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-col">
                  <p className="font-normal text-white relative z-10">
                    B. F. Tape
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  SWAT Air Unit SOP
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  The SWAT Air Unit SOP.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-xs w-full group/card">
          <a href="https://docs.google.com/document/d/1ULc4M4H-C6WNx098ha6wEQdI_ODmactmx4OL8MaV7yo/edit?tab=t.0">
            {" "}
            SWAT Marksman SOP
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://sniperology.com/cdn/shop/articles/Sniperology-Blog-SWAT-Sniper_750x.jpg?v=1561286354)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-col">
                  <p className="font-normal text-white relative z-10">
                    B. F. Tape
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  SWAT Marksman SOP
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  The SWAT Marksman SOP.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="max-w-xs w-full group/card">
          <a href="https://docs.google.com/document/d/18BNjh_lXdn-SdBlCo-GCYqXzSMk5ZIw2GQCjHHGOIp0/edit?tab=t.0">
            {" "}
            SWAT Combat Medic SOP
            <div
              className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(data:image/jpeg;base64,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)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <div className="flex flex-col">
                  <p className="font-normal text-white relative z-10">
                    B. F. Tape
                  </p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  SWAT Combat Medic SOP
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  The SWAT Combat Medic SOP.
                </p>
              </div>
            </div>
          </a>
        </div>
      </BentoGrid>
    </>
  );
}
