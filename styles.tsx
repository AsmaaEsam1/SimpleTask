import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';
interface Style {
  container: ViewStyle;
}
export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
    alignItems: 'center',
  },
});
