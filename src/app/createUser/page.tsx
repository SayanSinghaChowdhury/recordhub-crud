import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import CreateUser from "@/components/Userdata/CreateUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Records Create Zone",
  description: "User Records-Create Reding Zone||Create page",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="grid w-sm place-items-center gap-4 bg-neutral-200 shadow-xl">
        <CardHeader className="w-full">
          <CardTitle className="text-center font-mono text-2xl font-semibold text-zinc-400 font-stretch-50%">
            Create User Record
          </CardTitle>
        </CardHeader>

        {/* Componet Call */}

        <CreateUser />
      </Card>
    </section>
  );
};

export default page;
