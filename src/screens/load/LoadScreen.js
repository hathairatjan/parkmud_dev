import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import image4 from '../../assets/images/image4.png';
const LoadScreen = () => {
  return (
    <View>
      <Image
        source={image4}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};

export default LoadScreen;
