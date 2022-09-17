import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-elements/dist/helpers';
import {Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
const PressapplyScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Header
          centerComponent={
            <View style={{alignItems: 'center'}}>
              <Image
                source={image2}
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
        <View style={Style.buttonContainer}>
          <Button
            containerStyle={{paddingTop: 30}}
            title="สมัครเลย"
            buttonStyle={{backgroundColor: '#FF7A00'}}
            titleStyle={{fontSize: 30, fontWeight: '800'}}
            onPress={() => navigation.navigate('VerifyScreen')}
          />
          <Text style={{textAlign: 'center', paddingTop: 19, fontSize: 13}}>
            {`โดยการคลิก "สมัครเลย"คุณตกลงยอมรับข้อตกลงและเงื่อนไขการใช้บริการและนโยบายความเป็นส่วนตัวเป็นไปตามที่บริษัทกำหนด`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PressapplyScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    padding: 40,
  },
});
