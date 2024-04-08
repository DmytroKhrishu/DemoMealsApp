import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({ icon, onPress, color }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}
