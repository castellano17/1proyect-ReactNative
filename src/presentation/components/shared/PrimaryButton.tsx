import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface PrimaryButtonProps {
  onPress?: () => void;
  onLongPress?: () => void;
  label: string;
}

export const PrimaryButton = ({
  onPress,
  onLongPress,
  label,
}: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : '#FF9427',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#36348c' : '#FF9427',
  },
});
