import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {rMS} from 'styles/resposive';
const {height} = Dimensions.get('window');

export const SkeletonLoader = () => {
  return (
    <SkeletonPlaceholder borderRadius={4} enabled>
      <SkeletonPlaceholder.Item flex={1} height={height} width="100%">
        <SkeletonPlaceholder.Item
          alignSelf="center"
          width="95%"
          alignItems="center"
          marginVertical="2%">
          <SkeletonPlaceholder.Item
            alignSelf="center"
            height={rMS(42)}
            flexDirection="row"
            marginVertical="2%">
            <SkeletonPlaceholder.Item
              width="50%"
              height={rMS(42)}
              borderRadius={rMS(5)}
            />
            <SkeletonPlaceholder.Item
              width="50%"
              height={rMS(42)}
              borderRadius={rMS(5)}
            />
          </SkeletonPlaceholder.Item>
          {Array.from({length: 10}, (_, i) => i + 1).map((_, index) => (
            <SkeletonPlaceholder.Item
              key={index}
              alignSelf="center"
              height={rMS(80)}
              flexDirection="row"
              marginVertical="2%">
              <SkeletonPlaceholder.Item
                width="95%"
                height={rMS(72)}
                borderRadius={rMS(5)}
                marginHorizontal={rMS(7)}
              />
            </SkeletonPlaceholder.Item>
          ))}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
