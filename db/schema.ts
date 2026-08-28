import { pgTable, serial, text } from "drizzle-orm/pg-core";

// The full topic bank - seeded once from scripts/data/*, grows rarely after that.
export const topics = pgTable("topics", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  shape: text("shape").notNull(), // 'single' | 'pair' | 'pair-standalone' | 'triple' | 'curated'
  domain: text("domain").notNull(),
  technology: text("technology"),
  technology2: text("technology2"),
  concept: text("concept"),
});
