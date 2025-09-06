import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../styles/ThemeContext';

const emojis = [
  { symbol: '😄', label: 'Feliz' },
  { symbol: '😍', label: 'Apaixonado' },
  { symbol: '😊', label: 'Contente' },
  { symbol: '🥰', label: 'Amoroso' },
  { symbol: '😌', label: 'Relaxado' },
  { symbol: '😢', label: 'Triste' },
  { symbol: '😭', label: 'Chorando' },
  { symbol: '😔', label: 'Desanimado' },
  { symbol: '😠', label: 'Com raiva' },
  { symbol: '😡', label: 'Puto' },
  { symbol: '🤬', label: 'Furioso' },
  { symbol: '🤔', label: 'Pensativo' },
  { symbol: '😏', label: 'Excitado' },
  { symbol: '🫤', label: 'Desapontado' },
  { symbol: '😐', label: 'Neutro' },
  { symbol: '😳', label: 'Envergonhado' },
  { symbol: '🥱', label: 'Cansado' },
  { symbol: '😴', label: 'Sonolento' },
  { symbol: '😎', label: 'Mitei' },
  { symbol: '😷', label: 'Doente' },
  { symbol: '🤒', label: 'Febril' },
];

type Props = {
  selected: string;
  onSelect: (emoji: string) => void;
};

export default function EmojiPicker({ selected, onSelect }: Props) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {emojis.map((emoji) => (
        <TouchableOpacity
          key={emoji.symbol}
          onPress={() => onSelect(emoji.symbol)}
          style={{
            width: '14.2%', // 7 por linha
            alignItems: 'center',
            marginVertical: 8,
          }}
        >
          <View
            style={{
              padding: 8,
              borderWidth: selected === emoji.symbol ? 2 : 1,
              borderColor: selected === emoji.symbol ? 'blue' : theme.text,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 24 }}>{emoji.symbol}</Text>
          </View>
          <Text
            style={{
              fontSize: 8,
              marginTop: 4,
              textAlign: 'center',
              color: theme.text,
            }}
          >
            {emoji.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
