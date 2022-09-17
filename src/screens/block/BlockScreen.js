import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image, Header} from 'react-native-elements';
import image5 from '../../assets/images/image5.png';
const BlockScreen = ({navigation}) => {
  return (
    <View>
      <Header
        containerStyle={{backgroundColor: 'transparent'}}
        rightComponent={
          <Icon name="add-circle-outline" color="grey" size={30}></Icon>
        }
      />

      <View style={{alignItems: 'center'}}>
        <Image
          source={image5}
          style={{padding: 10, width: 150, height: 30, resizeMode: 'contain'}}
        />
      </View>

      <Text
        style={{
          padding: 20,
          color: '#F8B713',
          fontSize: 20,
          fontWeight: '700',
        }}>
        BLOCK
      </Text>
      <View style={Style.buttonContainer}>
        <TouchableOpacity
          style={{...Style.button, backgroundColor: '#FF7A00'}}
          onPress={() => navigation.navigate('BookingScreen')}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 50,
              fontWeight: '900',
            }}>
            A
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.button}
          onPress={() => navigation.navigate('BookingScreen')}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 50,
              fontWeight: '900',
            }}>
            B
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...Style.button, backgroundColor: '#FF7A00'}}
          onPress={() => navigation.navigate('BookingScreen')}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 50,
              fontWeight: '700',
            }}>
            C
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.button}
          onPress={() => navigation.navigate('BookingScreen')}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 50,
              fontWeight: '700',
            }}>
            D
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlockScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#DADADA',
    width: 150,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
