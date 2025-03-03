import { getServerSession } from "next-auth";
import WhoAmIButton from "./whoAmIbutton";
export default async function ServerActionPage() {
  const whoAmI = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.name || "Not logged in";
  };
  return <WhoAmIButton whoAmIAction={whoAmI} />;
}
