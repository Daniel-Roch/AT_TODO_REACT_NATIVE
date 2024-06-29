import { StyleSheet } from 'react-native';
import { Box, Text } from 'native-base';

export function FinishRegister({text}) {
  return (
    <Box style={styles.successMessage}>
      <Text style={styles.successText}>
        {text}
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  successMessage: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 5,
  },
  successText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});