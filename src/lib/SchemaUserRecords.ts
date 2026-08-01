import z from "zod";

export const recordSchema = z.object({
  fullName: z
    .string({ error: "Name is required." })
    .min(6, { error: "Name must be at least 6 characters long." })
    .max(40, { error: "Name must not exceed 50 characters." }),
  email: z.email({ error: "Please enter a valid email address." }),

  phone: z
    .string({ error: "fill your mobile number with country Code" })
    .length(13, { error: "13 characyter Use" })
    .startsWith("+91", { error: "+91 For Country Code" }),

  gender: z.string({
    error: "Select your gender",
  }),

  address: z
    .string({ error: "Fill your Adress " })
    .min(10, "Address must be at least 10 characters")
    .max(100, "Address must not exceed 200 characters"),
});

export type recordSchema = z.infer<typeof recordSchema>;
