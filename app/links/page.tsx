import { BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <div className="flex">
        <h1 className="mt-15 font-bold text-5xl mx-auto">
          The SWAT Links page
        </h1>
      </div>
      <div className="mt-10">
        <BentoGrid className="max-w-4xl gap-y-40 ">
          <div className="max-w-xs w-full group/card">
            <a href="discord.gg/DHSRP">
              Our Discord
              <div
                className={cn(
                  " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                  "bg-[url(https://cdn.discordapp.com/attachments/669769751601348609/1343699077371793419/dhs_pic_hunter.png?ex=67c57908&is=67c42788&hm=d649697725972966348b0533fc1027ed4def8e3ff8ed8a83b4ffc7044ff9326d&)] bg-cover"
                )}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                  <div className="flex flex-col">
                    <p className="font-normal text-white relative z-10">
                      DHSRP
                    </p>
                  </div>
                </div>
                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    DHSRP Discord
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    The server that the LAPD SWAT Team is based on.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="max-w-xs w-full group/card">
            <a href="https://forums.greenbear.network/">
              DHSRP Forums
              <div
                className={cn(
                  " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                  "bg-[url(https://cdn.discordapp.com/attachments/669769751601348609/1343699032777687040/favicon.png?ex=67c578fe&is=67c4277e&hm=858af64ffa3552065f889d81d94073c6e6f66a9999ca074b78ce76fdc002ac1e&)] bg-cover"
                )}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                  <div className="flex flex-col">
                    <p className="font-normal text-white relative z-10">
                      DHSRP Forums
                    </p>
                  </div>
                </div>
                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    DHSRP Forums
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    The DHSRP Community Forums.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="max-w-xs w-full group/card">
            <a href="https://servers.fivem.net/servers/detail/j9p5ml">
              DHSRP FiveM Server
              <div
                className={cn(
                  " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                  "bg-[url(https://cdn.discordapp.com/attachments/669769751601348609/1343699019620290560/gbn-6.png?ex=67c578fa&is=67c4277a&hm=2afbc8f8b64cf9cdbe41493a40a326a0c4b5716a25409026d27cce3e54da6302&)] bg-cover"
                )}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                <div className="flex flex-row items-center space-x-4 z-10">
                  <div className="flex flex-col">
                    <p className="font-normal text-white relative z-10">
                      DHSRP FiveM Server
                    </p>
                  </div>
                </div>
                <div className="text content">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    DHSRP FiveM Server
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    The DHSRP FiveM Server link.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </BentoGrid>
      </div>
    </>
  );
}
