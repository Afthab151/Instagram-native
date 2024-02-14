import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import HomeScreen from './Screens/HomeScreen';
import Sample from './Screens/Sample';
import Chat from './Screens/Chat';
import CameraScreen from './Screens/CameraScreen';
import PreviewScreen from './Screens/PreviewScreen';
import { Platform } from 'react-native';

const Stack = createStackNavigator();


const AppNavigator = () => {

  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Insta" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Insta" component={HomeScreen} />
        <Stack.Screen name="sample" component={Sample} />
        <Stack.Screen name="Chat" component={Chat} options={{
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
