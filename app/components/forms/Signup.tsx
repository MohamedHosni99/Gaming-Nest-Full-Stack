"use client";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormInput from "../FormInput";
import MotionItem from "../defaults/MotionItem";
import MaxWidthWrapper from "../defaults/MaxWidthWrapper";
import Logo from "../defaults/Logo";
import Link from "next/link";
import { signup } from "@/app/actions/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FileUploadDemo } from "../FileUpload";

const signupSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(5, { message: "Password must be at least 5 characters" }),
    name: z.string().min(5, { message: "Name must be at least 5 characters" }),
    avatar: z.array(z.instanceof(File)).min(1, { message: "Please upload a photo" }),
    confirmPassword: z.string().min(5, { message: "Password must be at least 5 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Signup = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      password: "",
      email: "",
      name: "",
      avatar: [],
      confirmPassword: "",
    },
  });

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("file", data.avatar[0]);
        formData.append("upload_preset", "ml_default");

        const res = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL!, {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const errorResponse = await res.json();
          console.error("Cloudinary Error:", errorResponse);
          throw new Error("Failed to upload photo");
        }

        const cloudinaryData = await res.json();
        const finalData = {
          ...data,
          avatar: {
            secure_url: cloudinaryData.secure_url,
            public_id: cloudinaryData.public_id,
          },
        };

        const response = await signup(finalData);

        if (response?.success) {
          toast.success(response.success);
          form.reset();
          router.push("/login"); 
        } else {
          toast.error(response.error || "Signup failed");
        }
      } catch (err: any) {
        console.error("Photo upload failed:", err);
        toast.error(err.message || "Something went wrong");
      }
    });
  };

  return (
    <MotionItem animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} initial={{ opacity: 0, y: 100 }}>
      <MaxWidthWrapper
        customPadding={" py-14"}
        className="flex flex-col gap-4 items-center w-full bg-black/60 rounded-2xl border border-input"
      >
        <Logo />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-6">
            <FileUploadDemo name="avatar" />
            <FormInput name="name" label="Name" type="text" />
            <FormInput name="email" label="Email" type="text" />
            <FormInput name="password" label="Password" type="password" />
            <FormInput name="confirmPassword" label="Confirm Password" type="password" />
            <Button disabled={isPending} type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <div className="capitalize text-base font-semibold flex items-center gap-2">
          <p className="text-gray-50">Already Have An Account ?!</p>
          <Link className="text-rose-500 hover:underline" href="/login">
            Login In to Your Account
          </Link>
        </div>
      </MaxWidthWrapper>
    </MotionItem>
  );
};

export default Signup;
