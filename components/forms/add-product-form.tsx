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
import { AlertDestructive } from "../alerts/alert-destructive";
import { LoadingSpinner } from "../ui/loading-spinner";

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
    } catch (error: any) {
      setIsLoading(false);
      setHasErrorAfterSubmit(true);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full md:w-96"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(errors.name && "text-destructive")}>
                  Name
                </FormLabel>
                <FormControl>
                  <Input className="w-full" placeholder="" {...field} />
                </FormControl>
                <FormDescription>Product name.</FormDescription>
                <FormMessage
                  className={cn(errors.name && "text-destructive")}
                />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={cn(errors.description && "text-destructive")}
                >
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
                <FormDescription>Product description.</FormDescription>
                <FormMessage
                  className={cn(errors.description && "text-destructive")}
                />
              </FormItem>
            )}
          />

          {hasErrorAfterSubmit && (
            <AlertDestructive message="An error occurred while adding the product." />
          )}

          <Button size="sm" type="submit" disabled={isLoading}>
            {isLoading ? (
              <LoadingSpinner className="h-6 w-9 text-primary-foreground/70" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
