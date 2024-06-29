import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './routes.json';
import { Todo } from './UserScreen/Todo'
import { InProgress } from './UserScreen/InProgress'
import { Concluded } from './UserScreen/Concluded'
import { Entypo } from '@expo/vector-icons';


const BottomTab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={routes.todo} screenOptions={{
      headerShown: false, 
      tabBarStyle: { backgroundColor: 'rgb(88, 28, 135)', paddingBottom: 3},
      tabBarActiveTintColor: 'white'
      }}>

    <BottomTab.Screen
        name={routes.todo}
        component={Todo}
        options={{
          tabBarLabel: 'Para fazer',
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="progress-one" color={color} size={size} focused={focused} />
          ),
        }}
      />

      <BottomTab.Screen
        name={routes.inprogress}
        component={InProgress}
        options={{
          tabBarLabel: 'Em andamento',
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="progress-two" color={color} size={size} focused={focused} />
          ),
        }}
      />

      <BottomTab.Screen
        name={routes.concluded}
        component={Concluded}
        options={{
          tabBarLabel: 'Pronto',
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="progress-full" color={color} size={size} focused={focused} />
          ),
        }}
      />

    </BottomTab.Navigator>
  )
}
