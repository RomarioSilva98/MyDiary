import { useMemo } from "react";
import { Note } from "../types/note";

export function useCalendar(notes: Note[]) {
  return useMemo(() => {
    const marked: Record<string, any> = {};

    notes.forEach((note) => {
      marked[note.date] = {
        marked: true,
        customStyles: {
          container: { backgroundColor: "transparent" },
          text: { fontSize: 18 },
        },
        emoji: note.mood,
      };
    });

    return marked;
  }, [notes]);
}
