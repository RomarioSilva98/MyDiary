import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Note } from "../types/note";

type Props = {
  note: Note;
};

export default function NoteCard({ note }: Props) {
  return (
    <Link
      href={{ pathname: "../note/[id]", params: { id: String(note.id) } }}
      asChild
    >
      <TouchableOpacity
        style={{
          padding: 12,
          borderBottomWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <Text style={{ fontSize: 18 }}>
          {note.mood} {note.title}
        </Text>
        <Text style={{ color: "gray" }}>{note.date}</Text>
      </TouchableOpacity>
    </Link>
  );
}
