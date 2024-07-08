"use server";
import { db } from "@/db/drizzle";
import { InsertProduct, products, UpdateProduct } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getProducts = async () => {
  try {
    const data = await db
      .select()
      .from(products)
      .orderBy(desc(products.createdAt));
    return {
      status: 200,
      message: "Successful",
      data,
    };
  } catch (error: any) {
    return {
      status: 400,
      message: "Failed to fetch",
    };
  }
};

export const getProductById = async (id: number) => {
  try {
    const [product] = await db
      .select()
      .from(products)
      .where(eq(products.id, id));
    return {
      status: 200,
      message: "Successful",
      data: product,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addProduct = async (addProductDto: InsertProduct) => {
  let id = 0;
  try {
    const [newProduct] = await db
      .insert(products)
      .values(addProductDto)
      .returning({ insertedId: products.id });
    id = newProduct.insertedId;
  } catch (error: any) {
    throw new Error(error);
  }

  revalidatePath("/app/products");
  redirect(`/app/products/view/${id}`);
};

export const updateProduct = async (
  id: number,
  editProductDto: UpdateProduct
) => {
  try {
    await db.update(products).set(editProductDto).where(eq(products.id, id));
  } catch (error: any) {
    throw new Error(error);
  }

  revalidatePath(`/app/products/edit/${id}`);
};

export const deleteProduct = async (id: number) => {
  try {
    await db.delete(products).where(eq(products.id, id));
  } catch (error: any) {
    throw new Error(error);
  }

  revalidatePath(`/app/products`);
};
