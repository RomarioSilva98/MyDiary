import { FlatList, View } from "react-native";
import { useNotes } from "../hooks/useNotes";
import { Link } from "expo-router";
import NoteCard from "../components/NoteCard";

export default function Home() {
  const { notes } = useNotes();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Link href="/new" style={{ fontSize: 20, marginBottom: 10 }}>
        ➕ Nova Anotação
      </Link>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NoteCard note={item} />}
      />
    </View>
  );
}
