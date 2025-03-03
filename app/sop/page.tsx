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
      </BentoGrid>
    </>
  );
}
