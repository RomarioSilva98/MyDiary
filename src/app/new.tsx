import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useNotes } from "../hooks/useNotes";

const emojis = ["😁", "😢", "😮‍💨"];

export default function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("😁");

  const { addNote, loadNotes } = useNotes();
  const router = useRouter();

  function handleSave() {
    if (!title.trim()) return;

    const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    addNote(title, content, date, mood);
    loadNotes();
    router.push("/"); // volta para Home
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Título</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Digite o título"
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 12,
          borderRadius: 6,
        }}
      />

      <Text style={{ fontSize: 18, marginBottom: 8 }}>Conteúdo</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Escreva sua anotação..."
        multiline
        style={{
          borderWidth: 1,
          padding: 8,
          height: 120,
          borderRadius: 6,
          textAlignVertical: "top",
          marginBottom: 12,
        }}
      />

      <Text style={{ fontSize: 18, marginBottom: 8 }}>Como você se sente?</Text>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        {emojis.map((emoji) => (
          <TouchableOpacity
            key={emoji}
            onPress={() => setMood(emoji)}
            style={{
              marginRight: 10,
              padding: 10,
              borderWidth: mood === emoji ? 2 : 1,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 24 }}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={handleSave}
        style={{
          backgroundColor: "blue",
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
