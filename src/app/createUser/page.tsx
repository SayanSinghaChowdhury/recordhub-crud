import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import CreateUser from "@/components/Userdata/CreateUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Records Create Zone",
  description: "User Records-Create Reding Zone||Create page",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="grid w-sm place-items-center gap-4">
        <CardHeader className="w-full">
          <CardTitle className="text-center text-xl">
            Create User Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Componet Call */}

          <CreateUser />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
