import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton, Tooltip } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import routes from '../routes/routes.json'

//Pedi para a IA este botão, porém tive que fazer modificações para ficar aceitável no código
export const ButtonRegister = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate(routes.register);
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={styles.floatingButton}
    >
      <Tooltip label="Criar Tarefa" openDelay={500}>
        <IconButton
          icon={<FontAwesome5 name="registered" size={30} color="white" />}
          borderRadius="full"
          _icon={{
            color: "white",
          }}
          _hover={{
            bg: "purple.600",
          }}
          _pressed={{
            bg: "purple.800",
          }}
          onPress={handleClick}
        />
      </Tooltip>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: '9%',
    right: 10,
    backgroundColor: 'rgb(88, 28, 135)',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
