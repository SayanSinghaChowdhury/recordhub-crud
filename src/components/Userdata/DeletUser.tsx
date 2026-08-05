"use client";

import deleteAction from "@/server/deleteAction";
import { BrushCleaningIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";

type deletRecord = {
  dAction: string;
};

const DeletUser = ({ dAction }: deletRecord) => {
  const [remove, setRemove] = useState(false);

  const HandleClear = async () => {
    const { issuccess, messege } = await deleteAction(dAction);

    setRemove(true);

    if (issuccess) {
      toast.success(messege);
    } else {
      toast.error(messege);
    }

    // server to client

    await new Promise((r) => {
      setTimeout(r, 500);
    });

    setRemove(false);
  };

  return (
    <Button
      onClick={HandleClear}
      disabled={remove}
      className="w-full"
      variant={"destructive"}>
      {remove ?
        <>
          Deleting
          <BrushCleaningIcon />
        </>
      : <>
          Delete
          <Trash2Icon />
        </>
      }
    </Button>
  );
};

export default DeletUser;
