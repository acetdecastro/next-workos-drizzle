"use client";
import { ChangeEvent, FC, useState } from "react";
import { Button } from "../ui/button";
import { addProduct as aP } from "@/actions/product-actions";
import { InsertProduct } from "@/db/schema";

interface AddProductProps {
  userId: string;
  addProduct: (addProductDto: InsertProduct) => void;
}

const AddProduct: FC<AddProductProps> = ({ userId, addProduct }) => {
  // State for handling input value
  // const [input, setInput] = useState("");

  // Event handler for input change

  // Event handler for adding a new todo

  // Rendering the AddTodo component
  return (
    <Button
      className="mt-4"
      onClick={async () => {
        await aP({
          userId: "1",
          name: "Test",
          description: "Lagi",
        });
      }}
    >
      Add Product
    </Button>
  );
};

export default AddProduct;
