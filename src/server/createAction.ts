"use server";

import prisma from "@/lib/database/dbClient";
import { recordSchemaType } from "@/lib/SchemaUserRecords";
import { revalidatePath } from "next/cache";

const createAction = async (creteData: recordSchemaType) => {
  try {
    await prisma.userRecord.create({
      data: creteData,
    });

    revalidatePath("/");

    return {
      issuccess: true,
      messege: "Record Store successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      issuccess: false,
      messege: "Record Store Failed",
    };
  }
};

export default createAction;
