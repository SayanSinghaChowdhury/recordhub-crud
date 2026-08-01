"use client";

import { UserRecord } from "@generated/prisma/client";
import { PenBoxIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../shadcnui/badge";
import { Button, buttonVariants } from "../shadcnui/button";
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
    <Card className="grid w-sm place-items-center gap-4 bg-neutral-200 shadow-xl">
      <CardHeader className="grid w-full place-items-center">
        <CardTitle className="flex place-items-center">
          <h1 className="relative left-7 text-center font-mono text-2xl font-semibold text-zinc-400 font-stretch-50%">
            Record
          </h1>
          <Badge
            className="relative left-20 text-pink-400"
            variant="secondary">
            {gender}
          </Badge>
        </CardTitle>
        <CardDescription className="w-xs rounded-lg px-2 py-3 text-center wrap-break-word font-stretch-50%">
          {/* <Badge>{gender}</Badge> */}

          <p className="text-stone-500">{fullName}</p>

          <p className="ext-stone-500 wrap-break-word">{email}</p>
        </CardDescription>
      </CardHeader>

      <CardContent className="grid place-items-baseline">
        <div className="w-xs rounded-lg px-2 py-3 text-center wrap-break-word text-stone-500 font-stretch-50%">
          <span>Ph: {phone}</span>
        </div>
        <p className="w-xs rounded-lg bg-gray-400/10 px-7 py-7 wrap-break-word text-stone-500 font-stretch-50%">
          {address}
        </p>
      </CardContent>

      <CardFooter className="grid w-full grid-cols-2 gap-4 text-stone-500">
        <DeletUser dAction={id} />

        <Link
          href={`/${id}`}
          type="submit"
          // disabled={isSubmitting}
          className={buttonVariants({
            size: "lg",
            className: "w-full bg-green-300 font-bold text-white",
          })}>
          Update <PenBoxIcon />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserRecords;

<Button
  type="submit"
  // disabled={isSubmitting}
  className="flex-1 rounded-xl">
  Update <PenBoxIcon />
</Button>;
