import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useNotes } from '../hooks/useNotes';
import EmojiPicker from '../components/EmojiPicker';
import { useTheme } from '../styles/ThemeContext';

export default function NewNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('😄');

  const { addNote, loadNotes } = useNotes();
  const router = useRouter();
  const { theme } = useTheme();

  function handleSave() {
    if (!title.trim()) return;
    const date = new Date().toISOString().split('T')[0];
    addNote(title, content, date, mood);
    loadNotes();
    router.push('/');
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: theme.background }}>
      <Text style={{ fontSize: 18, marginBottom: 8, color: theme.text }}>
        Título
      </Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder='Digite o título'
        placeholderTextColor='#888'
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          color: theme.text,
          padding: 8,
          marginBottom: 12,
          borderRadius: 6,
        }}
      />

      <Text style={{ fontSize: 18, marginBottom: 8, color: theme.text }}>
        Conteúdo
      </Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder='Escreva sua anotação...'
        placeholderTextColor='#888'
        multiline
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          color: theme.text,
          padding: 8,
          height: 120,
          borderRadius: 6,
          textAlignVertical: 'top',
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
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 8,
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
