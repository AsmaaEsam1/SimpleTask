import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationOptions} from '@react-navigation/stack';

export type AppStackParamList = {
  MainScreen: undefined;
};
export type NavigationProps = NativeStackScreenProps<AppStackParamList>;

// =================================================================================
// generic stack routes type

// Refine the route configuration type to match the screen components
type AppStackRoute = {
  name: keyof AppStackParamList;
  component: any;
  options?: StackNavigationOptions;
};

export type AppStackRoutesType = AppStackRoute[];
