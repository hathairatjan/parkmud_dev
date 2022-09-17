import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-elements/dist/helpers';
import {Image} from 'react-native-elements';
import image3 from '../../assets/images/image3.png';
const ParkingEditScreen = ({navigation}) => {
  return (
    <ScrollView Sttyle={{flex: 1}}>
      <View style={{alignItems: 'center', paddingTop: 40}}>
        <Image
          source={image3}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
        <Text>SAIPAN</Text>
        <Text>hathairat.jan@spumail.net</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
          <Icon name="cog-outline" color="grey" size={20}></Icon>
          <Text
            style={{
              paddingLeft: 5,
              color: 'grey',
              fontSize: 15,
              fontWeight: '700',
            }}
            onPress={() => navigation.navigate('PersonScreen')}>
            set up profile
          </Text>
        </View>
      </View>

      <View style={Style.buttonContainer}>
        <Input
          label="Name"
          labelStyle={{color: '#F8B713'}}
          placeholder="Please enter your name"
          rightIcon={{
            type: 'materail-design',
            name: 'person-outline',
            size: 20,
            color: 'grey',
          }}
        />
        <Input
          label="SurName"
          labelStyle={{color: '#F8B713'}}
          placeholder="Please enter your surname"
          secureTextEntry={true}
          rightIcon={{
            type: 'materail-design',
            name: 'person-outline',
            size: 20,
            color: 'grey',
          }}
        />

        <Input
          label="Address"
          labelStyle={{color: '#F8B713'}}
          placeholder="your address"
          secureTextEntry={true}
          rightIcon={{
            type: 'materail-design',
            name: 'home-work',
            size: 20,
            color: 'grey',
          }}
        />
        <Input
          label="Mobile Phone"
          labelStyle={{color: '#F8B713'}}
          placeholder="your address"
          secureTextEntry={true}
          rightIcon={{
            type: 'materail-design',
            name: 'phone-iphone',
            size: 20,
            color: 'grey',
          }}
        />
        <Button
          title="SAVE"
          buttonStyle={{backgroundColor: '#FF7A00'}}
          onPress={() => navigation.navigate('ParkingprofileScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default ParkingEditScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    padding: 50,
  },
});
