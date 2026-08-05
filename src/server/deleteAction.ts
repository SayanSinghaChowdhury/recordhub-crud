"use server";

import prisma from "@/lib/database/dbClient";
import { revalidatePath } from "next/cache";

const deleteAction = async (dAction: string) => {
  try {
    await prisma.userRecord.delete({
      where: { id: dAction },
    });

    revalidatePath("/");

    return {
      issuccess: true,
      messege: "Record Delete successfully",
    };
  } catch (error) {
    console.log(error);

    return {
      issuccess: false,
      messege: "Record Delete Failed",
    };
  }
};

export default deleteAction;
