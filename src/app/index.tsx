import { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { useNotes } from "../hooks/useNotes";
import NoteCard from "../components/NoteCard";
import { useTheme } from "../styles/ThemeContext";
import { useCalendar } from "../hooks/useCalendar";
import { formatDate } from "../utils/formatDate";
import { useLocalSearchParams } from "expo-router";

export default function Home() {
  const { notes } = useNotes();
  const { theme } = useTheme();
  const markedDates = useCalendar(notes);

  const { view } = useLocalSearchParams<{ view?: string }>();
  const showCalendar = view === "calendar";

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {showCalendar ? (
        <Calendar
          style={{ borderRadius: 8, marginHorizontal: 10 }}
          theme={{
            calendarBackground: theme.background,
            dayTextColor: theme.text,
            monthTextColor: theme.text,
            textDisabledColor: "#888",
          }}
          dayComponent={({ date }) => {
            if (!date) return null;
            const note = notes.find((n) => n.date === date.dateString);
            return (
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: theme.text }}>{date.day}</Text>
                {note && <Text style={{ fontSize: 16 }}>{note.mood}</Text>}
              </View>
            );
          }}
        />
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <NoteCard note={{ ...item, date: formatDate(item.date) }} />
          )}
        />
      )}
    </View>
  );
}