"use server";

import prisma from "@/lib/database/dbClient";
import { recordSchemaType } from "@/lib/SchemaUserRecords";
import { revalidatePath } from "next/cache";

const updateAction = async (id: string, newRecord: recordSchemaType) => {
  try {
    await prisma.userRecord.update({
      where: { id },
      data: newRecord,
    });

    revalidatePath("/");

    return {
      issuccess: true,
      messege: "Record update successfully 🚀",
    };
  } catch (error) {
    console.log(error);

    return {
      issuccess: false,
      message: "User Update Failed 🦖",
    };
  }
};

export default updateAction;
