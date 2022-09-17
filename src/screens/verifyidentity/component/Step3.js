import {View, Text, Image} from 'react-native';
import React from 'react';
import image22 from '../../../assets/images/image22.png';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
const Step3 = ({setStep}) => {
  const navigation = useNavigation();
  return (
    <View style={{alignItems: 'center', paddingTop: 40}}>
      <Image
        source={image22}
        style={{width: 400, height: 220, resizeMode: 'contain'}}
      />
      <Text
        style={{
          color: '#1BA305',
          fontSize: 25,
          fontWeight: '700',
        }}>
        ยืนยันตัวตนสำเร็จ
      </Text>
      <Button
        containerStyle={{
          paddingTop: 15,
          width: 120,
          alignSelf: 'center',
          paddingTop: 80,
        }}
        title=" ตกลง"
        buttonStyle={{backgroundColor: '#FF7A00'}}
        titleStyle={{fontSize: 19, fontWeight: '800'}}
        onPress={() =>
          true
            ? navigation.navigate('ParkingprofileScreen')
            : navigation.navigate('SettingScreen')
        }></Button>
    </View>
  );
};

export default Step3;
