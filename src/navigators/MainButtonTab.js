import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  WalletScreen,
  CarScreen,
  PersonScreen,
  SettingScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/MaterialIcons';
const BottomTab = createBottomTabNavigator();

const MainButtonTab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F8B713',
        tabBarStyle: {backgroundColor: '#FF8000'},
      }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon name="home" color={focused ? color : 'white'} size={30} />
          ),
        }}
      />
      <BottomTab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="wallet-travel"
              color={focused ? color : 'white'}
              size={30}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CarScreen"
        component={CarScreen}
        options={{
          tabBarLabel: 'Car',

          tabBarIcon: ({color, focused}) => (
            <Icon
              name="directions-car"
              color={focused ? color : 'white'}
              size={30}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="personScreen"
        component={PersonScreen}
        options={{
          tabBarLabel: 'Person',

          tabBarIcon: ({color, focused}) => (
            <Icon
              name="person-outline"
              color={focused ? color : 'white'}
              size={30}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',

          tabBarIcon: ({color, focused}) => (
            <Icon name="settings" color={focused ? color : 'white'} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainButtonTab;
