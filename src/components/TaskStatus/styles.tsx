import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {rMS} from '../../styles/resposive';
import {colors} from '../../theme/colors';

interface Style {
  container: ViewStyle;
  status_View: ViewStyle;
  status_text: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: rMS(6),
    backgroundColor: colors.white,
    marginVertical: '5%',
    shadowColor: colors.box_shadow,
    shadowRadius: 8,
    shadowOpacity: 0.1,
    shadowOffset: {width: 1, height: 1},
  },
  status_View: {
    height: rMS(42),
    borderRadius: rMS(6),
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  status_text: {
    width: '100%',
    fontSize: rMS(14),
    color: colors.dark_gray,
    fontWeight: '700',
    lineHeight: rMS(26),
    textAlign: 'center',
  },
});
