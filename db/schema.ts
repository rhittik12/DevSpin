import { pgTable, serial, text, boolean, date, integer, unique } from "drizzle-orm/pg-core";

// The full topic bank - seeded once from scripts/data/*, grows rarely after that.
export const topics = pgTable("topics", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  shape: text("shape").notNull(), // 'single' | 'pair' | 'pair-standalone' | 'triple' | 'curated'
  domain: text("domain").notNull(),
  technology: text("technology"),
  technology2: text("technology2"),
  concept: text("concept"),
  isUsed: boolean("is_used").notNull().default(false), // has this ever been picked before
});

// Single current pick - one row, overwritten/upserted each day. No growing history.
export const todayPick = pgTable("today_pick", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  topicId: integer("topic_id").notNull().references(() => topics.id),
  covered: boolean("covered").notNull().default(false),
}, (table) => [
  unique("today_pick_date_unique").on(table.date),
]);