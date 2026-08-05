import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import EditUser from "@/components/Userdata/EditUser";

import prisma from "@/lib/database/dbClient";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    userid: string;
  }>;
};
const page = async ({ params }: PageProps) => {
  const { userid } = await params;

  const user = await prisma.userRecord.findUnique({ where: { id: userid } });

  if (user === null) {
    return (
      <Link
        href={"/create"}
        className={`animate-drop-down grid h-dvh place-items-center delay-200`}>
        <h1 className="animate-bounce font-sans text-2xl delay-300">
          No users avalable
          <span className="hover:text-5xl hover:duration-500">😭</span>
        </h1>
      </Link>
    );
  }

  return (
    <section className="grid h-dvh place-items-center">
      <Card className="grid w-sm place-items-center">
        <CardHeader className="w-full">
          <CardTitle className="text-center font-mono text-2xl font-stretch-50%">
            User Edits Zone
          </CardTitle>
        </CardHeader>

        <EditUser UserData={user} />
      </Card>
    </section>
  );
};

export default page;
