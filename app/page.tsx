import SessionProvider from "@/components/SessionProvider";

export default async function Home() {
  return (
    <SessionProvider>
      <div className="flex flex-col mx-auto items-center  min-h-screen space-y-6 mt-14 ">
        <h1 className="text-5xl font-bold mt-11">
          Welcome to the SWAT Family.
        </h1>
        <h2 className="text-2xl max-w-[35%] mt-10">
          Welcome to the DHSRP SWAT Team Headquarters—the digital command center
          for the elite operators of DHSRP. As a member of this highly trained
          unit, you are part of a force that executes high-risk operations with
          precision, discipline, and unwavering tactical skill. This site serves
          as your central hub for training resources, mission briefings,
          tactical updates, and everything you need to dominate the streets of
          Los Angeles. Stay sharp, stay ready, and remember—when the call comes,
          we answer with force.
        </h2>
        <h2 className="font-bold text-3xl mt-4">Welcome to the front lines.</h2>
      </div>
    </SessionProvider>
  );
}
