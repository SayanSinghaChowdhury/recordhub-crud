import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import UserRecords from "@/components/Userdata/UserRecords";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Records Reding Zone",
  description: "User Records Reding Zone||Read page",
};

const page = () => {
  return (
    <section className="grid place-items-center py-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card className="grid w-sm place-items-center gap-4 bg-neutral-200 shadow-xl">
        <CardHeader className="w-full">
          <CardTitle className="text-center font-mono text-2xl font-semibold text-zinc-400 font-stretch-50%">
            User Record
          </CardTitle>
        </CardHeader>

        {/* Componet Call */}

        <UserRecords />
      </Card>
    </section>
  );
};

export default page;
