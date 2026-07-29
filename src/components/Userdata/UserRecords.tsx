"use client";

import { UserRecord } from "@generated/prisma/client";
import { PenBoxIcon, Trash2Icon } from "lucide-react";
import { Badge } from "../shadcnui/badge";
import { Button } from "../shadcnui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcnui/card";

type UserRecordType = {
  createDataShow: UserRecord;
};

const UserRecords = ({
  createDataShow: { fullName, address, gender, email, phone },
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
          {phone}
        </div>
        <p className="w-xs rounded-lg bg-gray-400/10 px-7 py-7 wrap-break-word text-stone-500 font-stretch-50%">
          {address}
        </p>
      </CardContent>

      <CardFooter className="grid w-full grid-cols-2 gap-4 text-stone-500">
        <Button
          type="button"

          className="flex-1 rounded-xl bg-red-300 font-bold text-white hover:bg-red-400">
          Delete <Trash2Icon />
        </Button>
        <Button
          type="submit"
          // disabled={isSubmitting}
          className="flex-1 rounded-xl bg-green-300 font-bold text-white hover:bg-green-400">
          Update <PenBoxIcon />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserRecords;
