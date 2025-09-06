import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNotes } from "../../hooks/useNotes";
import { useState } from "react";
import { useTheme } from "../../styles/ThemeContext";

export default function NoteDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { notes, updateNote, deleteNote } = useNotes();
  const { theme } = useTheme();
  const router = useRouter();

  const note = notes.find((n) => n.id.toString() === id);

  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  if (!note) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: theme.text }}>Nota não encontrada</Text>
      </View>
    );
  }

function handleSave() {
  if (!note) return; // garante que não chama sem nota
  updateNote(note.id, title, content, note.mood); // já com os 4 argumentos
  router.back();
}

function handleDelete() {
  if (!note) return;
  deleteNote(note.id);
  router.replace("/");
}


  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 20 }}>
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
        }}
      />

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
