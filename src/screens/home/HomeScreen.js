import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native-elements';
import image1 from '../../assets/images/image1.png';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Image source={image1} style={{width: 440, height: 250}} />
      <View style={Style.buttonContainer}>
        <TouchableOpacity
          style={Style.button}
          onPress={() => navigation.navigate('BookingScreen')}>
          <Icon name="forward-30" color="#F8B713" size={110} />
          <Text
            style={{
              color: '#5D5F62',
              fontSize: 20,
              fontWeight: '900',
            }}>
            Hourly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.button}
          onPress={() => navigation.navigate('BookingScreen')}>
          <Icon name="more-time" color="#F8B713" size={110} />
          <Text
            style={{
              color: '#5D5F62',
              fontSize: 20,
              fontWeight: '900',
            }}>
            Daily
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 300,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={Style.button}
            onPress={() => navigation.navigate('BookingScreen')}>
            <Icon name="access-time" color="#F8B713" size={110} />
            <Text
              style={{
                color: '#5D5F62',
                fontSize: 20,
                fontWeight: '900',
              }}>
              Monthly
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#DADADA',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
});
