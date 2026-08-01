"use server";

import prisma from "@/lib/database/dbClient";
import { recordSchema } from "@/lib/SchemaUserRecords";
import { revalidatePath } from "next/cache";

const updateAction = async (id: string, newRecord: recordSchema) => {
  try {
    await prisma.userRecord.update({
      where: { id },
      data: newRecord,
    });

    revalidatePath("/");

    return {
      issuccess: true,
      messege: "Record update successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      issuccess: true,
      messege: "Record Update not successfully",
    };
  }
};

export default updateAction;
