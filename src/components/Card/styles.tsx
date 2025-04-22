import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {rMS} from '../../styles/resposive';
import {colors} from '../../theme/colors';

interface Style {
  container: ViewStyle;
  content: ViewStyle;
  title: TextStyle;
  icon: ImageStyle;
  completed_View: ViewStyle;
  completed_text: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    width: '95%',
    flexDirection: 'row',
    padding: rMS(16),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.gray,
    borderWidth: rMS(1),
    borderRadius: rMS(8),
    backgroundColor: colors.silver,
    marginVertical: '2%',
    shadowColor: colors.box_shadow,
    shadowRadius: 8,
    shadowOffset: {width: 1, height: 1},
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: rMS(16),
    color: colors.dark_gray,
    fontWeight: '700',
    lineHeight: rMS(26),
    textAlign: 'left',
  },
  icon: {
    width: rMS(40),
    height: rMS(40),
    resizeMode: 'contain',
    marginHorizontal: rMS(5),
  },
  completed_View: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rMS(10),
    padding: rMS(5),
    backgroundColor: colors.white,
    shadowColor: colors.box_shadow,
    shadowRadius: 8,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    elevation: 5,
    position: 'absolute',
    zIndex: 100,
    right: '5%',
    top: '80%',
  },
  completed_text: {
    fontSize: rMS(12),
    color: colors.dark_gray,
    fontWeight: '700',
    lineHeight: rMS(26),
    textAlign: 'center',
  },
});
