import UserRecords from "@/components/Userdata/UserRecords";
import prisma from "@/lib/database/dbClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Records Reding Zone",
  description: "User Records Reding Zone||Read page",
};

const page = async () => {
  const userAllRecord = await prisma.userRecord.findMany();

  if (userAllRecord.length === 0) {
    return (
      <section>
        <h1>No Record</h1>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 place-items-center gap-30 pt-24 pb-14 md:grid-cols-2 lg:grid-cols-3">
      {/* Components Call */}
      {userAllRecord.map((cdata) => (
        <UserRecords
          key={cdata.id}
          createDataShow={cdata}
        />
      ))}
    </section>
  );
};

export default page;
