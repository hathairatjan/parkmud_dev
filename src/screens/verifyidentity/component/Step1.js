import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import image19 from '../../../assets/images/image19.png';
import image20 from '../../../assets/images/image20.png';
import image21 from '../../../assets/images/image21.png';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Step1 = ({setStep}) => {
  return (
    <View>
      <Text style={{paddingLeft: 20, paddingTop: 10}}>
        อัปโหลดรูปภาพสำหรับยืนยันตัวตน
      </Text>
      <View style={Style.buttonContainer}>
        <TouchableOpacity style={Style.button}>
          <View>
            <Icon name="camera-retro" color="#FF7A00" size={30}></Icon>
          </View>
          <Text
            style={{
              color: '#5D5F62',
              fontSize: 10,
              fontWeight: '900',
            }}>
            ถ่ายภาพ
          </Text>
        </TouchableOpacity>
        <Image
          source={image19}
          style={{width: 100, height: 120, resizeMode: 'contain'}}
        />
        <Text style={{paddingLeft: 10, marginBottom: 10}}>
          รูปภาพคู่บัตรประชาชนของคุณ
        </Text>

        <TouchableOpacity style={Style.button}>
          <View>
            <Icon name="camera-retro" color="#FF7A00" size={30}></Icon>
          </View>
          <Text
            style={{
              color: '#5D5F62',
              fontSize: 10,
              fontWeight: '900',
            }}>
            ถ่ายภาพ
          </Text>
        </TouchableOpacity>
        <Image
          source={image20}
          style={{width: 100, height: 120, resizeMode: 'contain'}}
        />
        <Text style={{marginBottom: 10}}>รูปภาพบัตรประชาชนของคุณ ด้านหน้า</Text>

        <TouchableOpacity style={Style.button}>
          <View>
            <Icon name="camera-retro" color="#FF7A00" size={30}></Icon>
          </View>
          <Text
            style={{
              color: '#5D5F62',
              fontSize: 10,
              fontWeight: '900',
            }}>
            ถ่ายภาพ
          </Text>
        </TouchableOpacity>
        <Image
          source={image21}
          style={{width: 100, height: 120, resizeMode: 'contain'}}
        />
        <Text>รูปภาพบัตรประชาชนของคุณ ด้านหลัง</Text>
      </View>
      <Button
        containerStyle={{paddingTop: 20, width: 100, alignSelf: 'center'}}
        title=" ยืนยัน "
        buttonStyle={{backgroundColor: '#FF7A00'}}
        titleStyle={{fontSize: 19, fontWeight: '800'}}
        onPress={() => setStep(1)}></Button>
    </View>
  );
};

export default Step1;
const Style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    flexWrap: 'wrap',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#fff',
    width: 210,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ff7A00',
    marginBottom: 10,
  },
});
