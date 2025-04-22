import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {AppStack} from './app_stack';
import React from 'react';
import {AppStackParamList} from './app_stack/types';
export const navigationRef = createNavigationContainerRef<AppStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => console.log('Navigation is ready!')}>
      <AppStack />
    </NavigationContainer>
  );
};
