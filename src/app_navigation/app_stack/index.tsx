import React from 'react';
import {AppStackParamList} from './types';
import {appStackRoutes} from './routes';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

// Define the navigator options, omitting 'children'
const appStackNavigatorProps: StackNavigationOptions = {
  headerShown: false, // Disable the header globally for all screens
  gestureEnabled: false, // Disable gesture navigation globally
};
// strictly typed array of app stack routes
const Stack = createStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={appStackNavigatorProps}>
      {/** mapping the app stack routes */}
      {appStackRoutes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component} // Make sure this is a valid React component
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};
