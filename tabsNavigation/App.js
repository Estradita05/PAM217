import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import DetalleScreen from './screens/Detalles'; 


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen 
        name="MainTabs" 
        component={Profile} 
        options={{ headerShown: false }} 
      />
    
      <Stack.Screen 
        name="Detalle" 
        component={DetalleScreen} 
        options={{ title: 'Detalle' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false, 
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 5, height: 60 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            
            else if (route.name === 'ProfileStack') iconName = focused ? 'person' : 'person-outline';
            else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
      
        <Tab.Screen 
            name="ProfileStack" 
            component={ProfileStackScreen} 
            options={{ title: 'Profile' }} 
        />

        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}