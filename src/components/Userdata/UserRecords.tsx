"use client";

import { UserRecord } from "@generated/prisma/client";
import { PenBoxIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../shadcnui/badge";
import { buttonVariants } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";
import DeletUser from "./DeletUser";

type UserRecordType = {
  createDataShow: UserRecord;
};

const UserRecords = ({
  createDataShow: { fullName, address, gender, email, phone, id },
}: UserRecordType) => {
  return (
    <Card className="grid w-sm place-items-center gap-4 shadow-xl">
      <CardHeader className="grid w-full place-items-center">
        <CardTitle className="flex place-items-center">
          <h1 className="font-semiboldfont-stretch-50% relative left-7 text-center font-mono text-2xl">
            Record
          </h1>
          <Badge className="relative left-20">{gender}</Badge>
        </CardTitle>
        <CardDescription className="w-xs rounded-lg px-2 py-3 text-center wrap-break-word">
          {/* <Badge>{gender}</Badge> */}

          <p className="text-lg">{fullName}</p>

          <p className="text-sm wrap-break-word">{email}</p>
        </CardDescription>
      </CardHeader>

      <CardContent className="grid place-items-baseline">
        <div className="w-xs rounded-lg px-2 py-3 text-center wrap-break-word">
          <span className="text-sm">Ph: {phone}</span>
        </div>
        <p className="wrap-break-wordfont-stretch-50% w-xs rounded-lg bg-gray-400/10 px-7 py-7">
          {address}
        </p>
      </CardContent>

      <CardFooter className="grid w-full grid-cols-2 gap-4">
        <DeletUser dAction={id} />

        <Link
          href={`/${id}`}
          type="submit"

          className={buttonVariants({
            size: "lg",
            variant: "secondary",
          })}>
          Update <PenBoxIcon />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserRecords;
