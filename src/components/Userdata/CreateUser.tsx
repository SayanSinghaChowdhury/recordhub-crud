"use client";

import { recordSchema } from "@/lib/SchemaUserRecords";
import createAction from "@/server/createAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { CardContent, CardFooter } from "../shadcnui/card";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";
import { Textarea } from "../shadcnui/textarea";

const CreateUser = () => {
  // for dismiss
  const [clear, setClear] = useState(false);

  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(recordSchema),

    defaultValues: {
      fullName: "",
      email: "",
      phone: "+91",
      address: "",
      gender: "",
    },
  });

  const CreateUserHandeler = async (creteData: recordSchema) => {
    const { issuccess, messege } = await createAction(creteData);

    await new Promise((t) => {
      setTimeout(t, 1000);
    });
    reset();

    if (issuccess) {
      toast.success(messege);
    } else {
      toast.dismiss(messege);
    }
    push("/");
  };

  const HandleDismiss = async () => {
    setClear(true);
    await new Promise((r) => {
      setTimeout(r, 500);
    });
    setClear(false);

    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(CreateUserHandeler)}
      className="w-full space-y-7"
      noValidate>
      {/* Full Name */}

      <CardContent className="grid w-sm place-items-center gap-4">
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-semibold text-neutral-700"
                htmlFor={field.name}>
                Full Name :
              </FieldLabel>
              <Input
                className="text-project"
                {...field}
                id={field.name}
                type="text"
                placeholder="Enter your Name"
                autoComplete="name"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Email */}

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-semibold text-neutral-700"
                htmlFor={field.name}>
                Email :
              </FieldLabel>
              <Input
                className="text-project"
                {...field}
                id={field.name}
                type="text"
                placeholder="Enter your email"
                autoComplete="email"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* gender */}

        <Controller
          name="gender"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-semibold text-neutral-700"
                htmlFor={field.name}>
                Gender :
              </FieldLabel>

              <Select
                value={field.value}
                onValueChange={field.onChange}>
                <SelectTrigger
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  className={"w-full"}>
                  <SelectValue placeholder="Genger" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="text-project h-auto w-full">
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* Ph Number */}
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-semibold text-neutral-700"
                htmlFor={field.name}>
                Phone number
              </FieldLabel>
              <Input
                className="text-project"
                {...field}
                id={field.name}
                type="text"
                placeholder="Enter your Number"
                autoComplete="tel"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Address */}

        <Controller
          name="address"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel
                className="font-semibold text-neutral-700"
                htmlFor={field.name}>
                User Adress :
              </FieldLabel>

              <Textarea
                className="text-project"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                autoComplete="address-level2"
                placeholder="Enter your Adress "
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

              {/* <FieldDescription className="text-center">
                Fill Properly
              </FieldDescription> */}
            </Field>
          )}
        />
      </CardContent>
      {/* Actions */}

      <CardFooter className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          onClick={HandleDismiss}
          disabled={isSubmitting}
          className="flex-1 rounded-full bg-red-300 font-bold text-white hover:bg-red-400">
          Dismiss
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 rounded-full bg-green-300 font-bold text-white hover:bg-green-400">
          Submit
        </Button>
      </CardFooter>
    </form>
  );
};

export default CreateUser;
