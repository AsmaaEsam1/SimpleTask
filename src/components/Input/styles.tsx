import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {rMS} from '../../styles/resposive';
import {colors} from '../../theme/colors';

interface Style {
  container: ViewStyle;
  inputs: TextStyle;
  icon: ImageStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    width: '98%',
    height: rMS(52),
    borderRadius: rMS(12),
    borderColor: colors.light_gray,
    borderWidth: rMS(2),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: rMS(15),
  },
  inputs: {
    width: '90%',
    height: '100%',
    color: colors.dark_gray,
    fontSize: rMS(14),
    textAlign: 'left',
    marginHorizontal: rMS(5),
  },
  icon: {
    width: rMS(24),
    height: rMS(24),
    resizeMode: 'contain',
  },
});
