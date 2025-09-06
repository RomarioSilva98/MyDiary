import { View, Text, TouchableOpacity } from "react-native";

const emojis = [
  "😄", // feliz
  "😍", // apaixonado
  "😢", // triste
  "😭", // chorando
  "😠", // com raiva
  "😡", // puto
  "🤔", // pensativo
  "😏", // excitado
  "🥱", // cansado
  "😎", // mitei
  "😷", // doente
];

type Props = {
  selected: string;
  onSelect: (emoji: string) => void;
};

export default function EmojiPicker({ selected, onSelect }: Props) {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {emojis.map((emoji) => (
        <TouchableOpacity
          key={emoji}
          onPress={() => onSelect(emoji)}
          style={{
            margin: 6,
            padding: 10,
            borderWidth: selected === emoji ? 2 : 1,
            borderColor: selected === emoji ? "blue" : "#ccc",
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 28 }}>{emoji}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
