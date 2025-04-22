import React, {FC, memo} from 'react';
import {Pressable, Text, Image, View} from 'react-native';
import {styles} from './styles';
import {images} from 'theme/images';
import {colors} from 'theme/colors';
interface Props {
  item: taskProps;
  openMore: boolean;
  onOpenMore: () => void;
  handleDeleteTask: () => void;
  handleChangeTaskStatus: () => void;
}
export const Card: FC<Props> = memo(props => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor:
          props.item.status === 'Completed' ? colors.primary : colors.gray,
      }}>
      <Text style={styles.title}>{props.item.title}</Text>
      <View style={styles.content}>
        <Pressable onPress={props.handleDeleteTask}>
          <Image source={images.DeleteImg} style={styles.icon} />
        </Pressable>
        <Pressable onPress={props.onOpenMore}>
          <Image source={images.MoreImg} style={styles.icon} />
        </Pressable>
        {props.openMore && (
          <Pressable
            style={styles.completed_View}
            onPress={props.handleChangeTaskStatus}>
            <Text style={styles.completed_text}>Completed</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
});
