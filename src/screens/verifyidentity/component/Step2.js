import {View, Text} from 'react-native';
import React from 'react';
import {Input} from 'react-native-elements/dist/input/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-elements';
const Step2 = ({setStep}) => {
  return (
    <View style={{padding: 10}}>
      <Input
        label="เลขบัตรประชาชน (13 หลัก)"
        labelStyle={{fontSize: 13}}
        inputContainerStyle={{
          borderWidth: 1,
          height: 40,
          borderColor: '#ACB3BF',
        }}
        placeholder=" "
      />
      <Input
        label="รหัสหลังบัตรประชาชน "
        labelStyle={{fontSize: 13}}
        inputContainerStyle={{
          borderWidth: 1,
          height: 40,
          borderColor: '#ACB3BF',
        }}
        placeholder=" "
      />
      <Input
        label="วันบัตรหมดอายุ "
        labelStyle={{fontSize: 13}}
        inputContainerStyle={{
          borderWidth: 1,
          height: 40,
          borderColor: '#ACB3BF',
        }}
        placeholder=" "
      />
      <Input
        label="ชื่อ-นามสกุล "
        labelStyle={{fontSize: 13}}
        inputContainerStyle={{
          borderWidth: 1,
          height: 40,
          borderColor: '#ACB3BF',
        }}
        placeholder=" "
      />

      <Input
        label="ที่อยู่ปัจจุบัน"
        labelStyle={{fontSize: 13}}
        inputContainerStyle={{
          borderWidth: 1,
          height: 40,
          borderColor: '#ACB3BF',
        }}
        placeholder=" "
      />
      <Input
        label="ที่อยู่ปัจจุบันตามบัตรประชาชน"
        labelStyle={{fontSize: 13}}
        inputContainerStyle={{
          borderWidth: 1,
          height: 40,
          borderColor: '#ACB3BF',
        }}
        placeholder=" "
      />
      <View>
        <Button
          containerStyle={{paddingTop: 15, width: 120, alignSelf: 'center'}}
          title=" ยืนยัน "
          buttonStyle={{backgroundColor: '#FF7A00'}}
          titleStyle={{fontSize: 19, fontWeight: '800'}}
          onPress={() => setStep(2)}></Button>
      </View>
    </View>
  );
};

export default Step2;
