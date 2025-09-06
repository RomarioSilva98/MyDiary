import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Note } from "../types/note";
import { useTheme } from "../styles/ThemeContext";

type Props = {
  note: Note;
};

export default function NoteCard({ note }: Props) {
  const { theme } = useTheme();

  return (
    <Link href={{ pathname: "./note/[id]", params: { id: String(note.id) } }} asChild>
      <TouchableOpacity
        style={{
          padding: 12,
          borderBottomWidth: 1,
          borderColor: theme.card,
        }}
      >
        <Text style={{ fontSize: 18, color: theme.text }}>
          {note.mood} {note.title}
        </Text>
        <Text style={{ color: theme.text }}>{note.date}</Text>
      </TouchableOpacity>
    </Link>
  );
}
