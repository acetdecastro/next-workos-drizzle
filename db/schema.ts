import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// export const usersTable = pgTable("users_table", {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
//   age: integer("age").notNull(),
//   email: text("email").notNull().unique(),
// });

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("title").notNull(),
  description: text("content").notNull(),
  userId: text("user_id").notNull(),
  // .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

// export type InsertUser = typeof usersTable.$inferInsert;
// export type SelectUser = typeof usersTable.$inferSelect;

export type InsertProduct = typeof products.$inferInsert;
export type SelectProduct = typeof products.$inferSelect;
export type UpdateProduct = {
  name?: string;
  description?: string;
};
