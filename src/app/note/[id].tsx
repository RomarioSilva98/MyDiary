import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNotes } from "../../hooks/useNotes";
import { useState, useEffect } from "react";
import { useTheme } from "../../styles/ThemeContext";
import EmojiPicker from "../../components/EmojiPicker";

export default function NoteDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { notes, updateNote, deleteNote } = useNotes();
  const { theme } = useTheme();
  const router = useRouter();

  const note = notes.find((n) => n.id.toString() === id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("😄");

  // 🔑 Atualiza os estados quando a nota for carregada
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setMood(note.mood);
    }
  }, [note]);

  if (!note) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: theme.text }}>Nota não encontrada</Text>
      </View>
    );
  }
function handleSave() {
  if (!note) return;
  updateNote(note.id, title, content, mood);
  router.back();
}

function handleDelete() {
  if (!note) return;
  deleteNote(note.id);
  router.replace("/");
}


  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 8, color: theme.text }}>
        Título
      </Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{
          color: theme.text,
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 12,
          borderBottomWidth: 1,
          borderColor: "#ccc",
        }}
      />

      <Text style={{ fontSize: 18, marginBottom: 8, color: theme.text }}>
        Conteúdo
      </Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        multiline
        style={{
          color: theme.text,
          fontSize: 16,
          textAlignVertical: "top",
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 6,
          height: 200,
          marginBottom: 12,
        }}
      />

      <Text style={{ fontSize: 18, marginBottom: 8, color: theme.text }}>
        Como você se sente?
      </Text>
      <EmojiPicker selected={mood} onSelect={setMood} />

      <TouchableOpacity
        onPress={handleSave}
        style={{
          backgroundColor: "blue",
          padding: 12,
          borderRadius: 6,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDelete}
        style={{
          backgroundColor: "red",
          padding: 12,
          borderRadius: 6,
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Apagar</Text>
      </TouchableOpacity>
    </View>
  );
}
