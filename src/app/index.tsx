import { View } from "react-native";
import { useState } from "react";
import { useNotes } from "../hooks/useNotes";
import { FlatList } from "react-native";
import NoteCard from "../components/NoteCard";
import Header from "../components/Header";

export default function Home() {
  const { notes } = useNotes();
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <View style={{ flex: 1, backgroundColor: dark ? "#111" : "#fff" }}>
      <Header toggleTheme={toggleTheme} />

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteCard note={item} />}
      />
    </View>
  );
}
