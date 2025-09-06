import { useEffect, useState } from "react";
import { initDB, getNotes, addNote, updateNote, deleteNote, getNoteById } from "../db";
import { Note } from "../types/note";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    initDB();
    loadNotes();
  }, []);

  function loadNotes() {
    setNotes(getNotes());
  }

  return {
    notes,
    loadNotes,
    addNote,
    updateNote,
    deleteNote,
    getNoteById,
  };
}
