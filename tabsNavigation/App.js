import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                       if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person' : 'person-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }
                        return <Ionicons name={iconName} size={24} color={color} />
                    },
                    tabBarActiveTintColor: '#007BFF',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        paddingBottom: 5,
                        height: 60,
                    },
                })}
            >
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Profile' component={Profile} />
                <Tab.Screen name='Settings' component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}