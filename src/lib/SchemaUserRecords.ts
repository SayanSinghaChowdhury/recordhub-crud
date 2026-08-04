import z from "zod";

export const recordSchema = z.object({
  fullName: z
    .string({ error: "Name is required ." })
    .min(6, { error: "Name must be at least 6 characters long ." })
    .max(40, { error: "Name must not exceed 50 characters ." }),
  email: z
    .email({ error: "Please enter a valid email address ." })
    .max(64, { error: "Email must be 64 characters or less ." }),

  phone: z
    .string({ error: "fill your mobile number with country Code ." })
    .length(10, { error: "10 characyter Use ." }),
  gender: z
    .string({
      error: "Select your gender .",
    })
    .min(4, { error: "fill your Gender ." }),

  address: z
    .string({ error: "Fill your Adress ." })
    .min(10, "Address must be at least 10 characters .")
    .max(100, "Address must not exceed 200 characters ."),
});

export type recordSchemaType = z.infer<typeof recordSchema>;
