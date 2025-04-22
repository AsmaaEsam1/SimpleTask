import React, {Dispatch, FC, memo, SetStateAction} from 'react';
import {
  Image,
  ImageSourcePropType,
  KeyboardTypeOptions,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import {styles} from './styles';
import {colors} from 'theme/colors';
interface Props {
  value: string;
  icon?: ImageSourcePropType;
  foucs?: boolean;
  placeholder?: string;
  keyboardType: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
  setFocus: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}
export const Inputs: FC<Props> = memo(props => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor: props.foucs ? colors.primary : colors.light_gray,
      }}>
      <TextInput
        style={styles.inputs}
        value={props.value}
        keyboardType={props.keyboardType}
        keyboardAppearance="default"
        autoFocus={props.foucs}
        focusable={props.foucs}
        placeholderTextColor={colors.gray}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        onFocus={() => props.setFocus(true)}
        onBlur={() => props.setFocus(false)}
      />
      <Pressable onPress={props.onClick}>
        <Image source={props.icon} style={styles.icon} />
      </Pressable>
    </View>
  );
});
