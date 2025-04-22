import React, {Dispatch, FC, memo, SetStateAction} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {colors} from 'theme/colors';
interface Props {
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  num_Completed: string;
  num_InCompleted: string;
}
export const TaskStatus: FC<Props> = memo(props => {
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          ...styles.status_View,
          backgroundColor:
            props.status === 'InCompleted' ? colors.primary : colors.white,
        }}
        onPress={() => props.setStatus('InCompleted')}>
        <Text
          style={{
            ...styles.status_text,
            color: props.status === 'InCompleted' ? colors.white : colors.black,
          }}>
          InCompleted {`(${props.num_InCompleted})`}
        </Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.status_View,
          backgroundColor:
            props.status === 'Completed' ? colors.primary : colors.white,
        }}
        onPress={() => props.setStatus('Completed')}>
        <Text
          style={{
            ...styles.status_text,
            color: props.status === 'Completed' ? colors.white : colors.black,
          }}>
          Completed {`(${props.num_Completed})`}
        </Text>
      </Pressable>
    </View>
  );
});
