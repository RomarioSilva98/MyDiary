import * as SQLite from "expo-sqlite";
import { Note } from "../types/note";

const db = SQLite.openDatabaseSync("diary.db");

export function initDB() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT,
      date TEXT NOT NULL,
      mood TEXT
    );
  `);
}

export function addNote(title: string, content: string, date: string, mood: string) {
  db.runSync(
    "INSERT INTO notes (title, content, date, mood) VALUES (?, ?, ?, ?)",
    [title, content, date, mood]
  );
}

export function getNotes(): Note[] {
  return db.getAllSync<Note>("SELECT * FROM notes ORDER BY date DESC");
}

export function getNoteById(id: number): Note | null {
  return db.getFirstSync<Note>("SELECT * FROM notes WHERE id = ?", [id]) ?? null;
}

export function updateNote(id: number, title: string, content: string, mood: string) {
  db.runSync("UPDATE notes SET title = ?, content = ?, mood = ? WHERE id = ?", [
    title,
    content,
    mood,
    id,
  ]);
}

export function deleteNote(id: number) {
  db.runSync("DELETE FROM notes WHERE id = ?", [id]);
}
