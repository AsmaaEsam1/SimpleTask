import {moderateScale} from 'react-native-size-matters';

export const rMS = (size: number, factor: number = 0.35) => {
  return moderateScale(size, factor);
};
