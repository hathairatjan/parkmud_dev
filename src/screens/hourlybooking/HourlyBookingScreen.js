import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header, Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
import car from '../../assets/images/car.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from 'react-native-elements/dist/input/Input';
const HourlyBookingScreen = ({navigation}) => {
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
              onPress={() => navigation.navigate('BookingScreen')}
              name="chevron-left"
              color="grey"
              size={30}></Icon>
          }
        />
        <View style={{alignItems: 'center'}}>
          <Image
            source={car}
            style={{
              width: 300,
              height: 200,
              resizeMode: 'contain',
              paddingTop: 40,
            }}
          />
        </View>
        <Text style={{fontSize: 13}}>
          {`                 ที่จอดรถติดโรงพยาบาลจุฬาลงกรณ์ ที่จอดระยะยาวแถว
                 โรงพยาบาลจุฬาลงกรณ์  ราคาประหยัด จ - อา ทั้งวันหลัง
                 จากทำการจองเรียบร้อยแล้วคุณลูกค้าสามารถเช็คข้อมูล 
                 การจองและ  การชำระเงิน   ส่งสลิปรับรหัส  รับการยืนยัน 
                 การจอง รับข้อมูลแผนที่ขาไป เบอร์ติดต่อขากลับ ขั้นตอน
                 ต่าง ๆ ผ่านทางผู้ให้บริการ เมื่อไปสถานที่จอด และภายใน 
                 แอปพลิเคชันได้เลย  ภายในบริการ  ของที่จอดรถ กรุณา
                 ตรวจสอบเงื่อนไข  โดยละเอียด โปรดใช้ความระมัดระวัง
                 ในการเดินทางเพื่อความปลอดภัย`}
        </Text>

        <View style={Style.inputContainer}>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              วันที่เข้าจอด
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 35,
                borderColor: '#ACB3BF',
              }}
              rightIcon={{name: 'today', color: '#50555C'}}
              placeholder=" 24/03/2022"
            />
          </View>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              เวลาเข้าจอด
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 35,
                borderColor: '#ACB3BF',
              }}
              rightIcon={{name: 'more-time', color: '#50555C'}}
              placeholder="00:00"
            />
          </View>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              จำนวนชม.
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 35,
                borderColor: '#ACB3BF',
              }}
              rightIcon={{name: 'timer', color: '#50555C'}}
              placeholder="  ชั่วโมง  "
            />
          </View>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              ราคา
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 35,
                borderColor: '#ACB3BF',
              }}
              rightIcon={{name: 'attach-money', color: '#50555C'}}
              placeholder="บาท"
            />
          </View>
        </View>
      </View>
      <View
        style={Style.buttonContainer}
        style={{
          paddingHorizontal: 90,
        }}>
        <Button
          title="ยืนยัน"
          buttonStyle={{backgroundColor: '#FF7A00'}}
          onPress={() => navigation.navigate('ConFirmScreen')}
        />
      </View>
    </View>
  );
};

export default HourlyBookingScreen;
const Style = StyleSheet.create({
  inputContainer: {
    paddingTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formInput: {width: 174},
});
