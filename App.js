import { NativeBaseProvider } from 'native-base';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes/routes.json';
import { TabNavigator } from './routes/TabNavigator';
import { ButtonRegister } from './components/ButtonRegister';
import { RegisterPage } from './routes/RegisterPage'
import { HeaderComponent } from './components/HeaderComponent'
import { ModificPage } from './routes/ModificPage'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
          <HeaderComponent />
          <Stack.Navigator initialRouteName={routes.tabNavigator}>
            <Stack.Screen
              name={routes.tabNavigator}
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={routes.register}
              component={RegisterPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={routes.modific}
              component={ModificPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          <ButtonRegisterWrap/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const ButtonRegisterWrap = () =>{
  const state = useNavigationState(state => state);
  return state?.routes[1]?.name == "RegisterPage" || state?.routes[1]?.name == "ModificPage" ? null : <ButtonRegister/>
}
