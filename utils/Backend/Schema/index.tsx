import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const aiOutput = pgTable("aiOutput", {
	id: serial("id").primaryKey(),
	formData: varchar("formData").notNull(),
	aiResponse: text("aiResponse"),
	templateSlug: varchar("templateSlug").notNull(),
	createBy: varchar("createBy").notNull(),
	createAt: varchar("createAt"),
});
