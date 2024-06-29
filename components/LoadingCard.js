import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const LoadingCard = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: windowWidth / 2 - 20,
    top: windowHeight / 2 - 20,
  },
});

