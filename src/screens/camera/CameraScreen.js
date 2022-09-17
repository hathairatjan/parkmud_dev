import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header, Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
import car from '../../assets/images/car.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from 'react-native-elements/dist/input/Input';
const CameraScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Header
          centerComponent={
            <View style={{alignItems: 'center'}}>
              <Image
                source={image2}
                style={{
                  width: 150,
                  height: 20,
                  resizeMode: 'contain',
                  paddingTop: 40,
                }}
              />
            </View>
          }
          containerStyle={{backgroundColor: ''}}
          leftComponent={
            <Icon
              onPress={() => navigation.navigate('ParkingprofileScreen')}
              name="chevron-left"
              color="grey"
              size={30}></Icon>
          }
        />
      </View>
    </View>
  );
};

export default CameraScreen;
