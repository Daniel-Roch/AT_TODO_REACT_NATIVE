import { HStack, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import routes from '../routes/routes.json'
import { useNavigation } from '@react-navigation/native';


export const HeaderComponent = () => {
  const navigation = useNavigation();
  const handleClick = () =>{
    navigation.navigate(routes.todo);
  }

  return (
    <HStack bg="purple.900" px="1" py="3" justifyContent='center' alignItems='center'>
      <TouchableOpacity onPress={handleClick}>
        <Text color="white" fontSize="20" style={{ marginTop: 30}} fontWeight='bold'>Veiopads</Text>
      </TouchableOpacity>
    </HStack>
  );
};
