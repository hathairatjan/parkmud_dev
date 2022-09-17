import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-elements/dist/helpers';
import {Image} from 'react-native-elements';
import image15 from '../../assets/images/image15.png';
import image16 from '../../assets/images/image16.png';
const VerifyScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Header
          centerComponent={
            <View style={{alignItems: 'center'}}>
              <Image
                source={image15}
                style={{
                  width: 130,
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
              onPress={() => navigation.navigate('SettingScreen')}
              name="chevron-left"
              color="grey"
              size={30}></Icon>
          }
        />
        <View style={{alignItems: 'center'}}>
          <Image
            source={image16}
            style={{
              width: 400,
              height: 400,
              resizeMode: 'contain',
              paddingTop: 50,
            }}
          />
        </View>
        <View style={Style.buttonContainer}>
          <View style={{flexDirection: 'row'}}>
            <Button
              containerStyle={{paddingTop: 1, marginRight: 30}}
              title="ไม่ละ ขอบคุณ"
              buttonStyle={{backgroundColor: '#D0D3D9'}}
              titleStyle={{fontSize: 18, fontWeight: '800'}}
              onPress={() => navigation.navigate('SettingScreen')}></Button>
            <Button
              containerStyle={{paddingTop: 1}}
              title=" ยินยอม "
              buttonStyle={{backgroundColor: '#FF7A00'}}
              titleStyle={{fontSize: 19, fontWeight: '800'}}
              onPress={() =>
                navigation.navigate('VerifyidentityScreen')
              }></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VerifyScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    padding: 70,
  },
});
