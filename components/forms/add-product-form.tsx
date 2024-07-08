"use client";

import { addProduct } from "@/actions/product-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "react-toastify";
import { AlertDestructive } from "../alerts/alert-destructive";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Product name must be at least 2 characters." })
    .max(50, { message: "Product name must be at most 50 characters." }),
  description: z
    .string()
    .min(2, { message: "Product description must be at least 2 characters." })
    .max(100, {
      message: "Product description must be at most 100 characters.",
    }),
});

interface AddProductFormProps {
  userId: string;
}

export default function AddProductForm({ userId }: AddProductFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrorAfterSubmit, setHasErrorAfterSubmit] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const { errors } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setHasErrorAfterSubmit(false);
    setIsLoading(true);
    try {
      await addProduct({
        ...values,
        userId,
      });
      setIsLoading(false);
      // toast.success("Successfully added the product.");
    } catch (error: any) {
      console.log(error);
      setHasErrorAfterSubmit(true);
      setIsLoading(false);
      // toast.error("An error occurred while adding the product.");
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-2/4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(errors.name && "text-red-700")}>
                  Name
                </FormLabel>
                <FormControl>
                  <Input className="w-full" placeholder="" {...field} />
                </FormControl>
                <FormDescription>Product name.</FormDescription>
                <FormMessage className={cn(errors.name && "text-red-700")} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(errors.description && "text-red-700")}>
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormDescription>Product description.</FormDescription>
                <FormMessage
                  className={cn(errors.description && "text-red-700")}
                />
              </FormItem>
            )}
          />

          {hasErrorAfterSubmit && (
            <AlertDestructive message="An error occurred while adding the product." />
          )}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
}
