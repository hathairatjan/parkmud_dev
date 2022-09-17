import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainButtonTab from './MainButtonTab';
import {
  BookingScreen,
  LogoutScreen,
  ContactScreen,
  HourlyBookingScreen,
  EditCarScreen,
  AddCarScreen,
  ConFirmScreen,
  DIPOSITScreen,
  SerViceScreen,
  PressapplyScreen,
  VerifyScreen,
  ParkingprofileScreen,
  ParkingEditScreen,
  ServiceScreen,
  CameraScreen,
  ParkingwalletScreen,
  WithdrawmoneyScreen,
  ParkingScreen,
  AddparkingScreen,
  EditparkingScreen,
  VerifyidentityScreen,
  BookinghistoryScreen,
} from '../screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainButtomTab" component={MainButtonTab} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      <Stack.Screen name="LogoutScreen" component={LogoutScreen} />
      <Stack.Screen name="ContactScreen" component={ContactScreen} />
      <Stack.Screen
        name="HourlyBookingScreen"
        component={HourlyBookingScreen}
      />
      <Stack.Screen name="EditCarScreen" component={EditCarScreen} />
      <Stack.Screen name="AddCarScreen" component={AddCarScreen} />
      <Stack.Screen name="ConFirmScreen" component={ConFirmScreen} />
      <Stack.Screen name="DIPOSITScreen" component={DIPOSITScreen} />
      <Stack.Screen name="SerViceScreen" component={SerViceScreen} />
      <Stack.Screen name="PressapplyScreen" component={PressapplyScreen} />
      <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
      <Stack.Screen
        name="ParkingprofileScreen"
        component={ParkingprofileScreen}
      />
      <Stack.Screen name="ParkingEditScreen" component={ParkingEditScreen} />
      <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen
        name="ParkingwalletScreen"
        component={ParkingwalletScreen}
      />
      <Stack.Screen
        name="WithdrawmoneyScreen"
        component={WithdrawmoneyScreen}
      />
      <Stack.Screen name="ParkingScreen" component={ParkingScreen} />
      <Stack.Screen name="AddparkingScreen" component={AddparkingScreen} />
      <Stack.Screen name="EditparkingScreen" component={EditparkingScreen} />
      <Stack.Screen
        name="VerifyidentityScreen"
        component={VerifyidentityScreen}
      />
      <Stack.Screen
        name="BookinghistoryScreen"
        component={BookinghistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
