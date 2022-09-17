import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Image, ListItem, Header, Button, Input} from 'react-native-elements';
import image18 from '../../assets/images/image18.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select';
const WithdrawmoneyScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Header
          centerComponent={
            <View style={{alignItems: 'center'}}>
              <Image
                source={image18}
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
              onPress={() => navigation.navigate('ParkingwalletScreen')}
              name="chevron-left"
              color="grey"
              size={20}></Icon>
          }
        />

        <View style={Style.buttonContainer}>
          <Text
            style={{
              color: '#50555C',
              fontSize: 18,
              fontWeight: '500',
            }}>
            บัญชีถอนเงิน
          </Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[
              {label: 'ธนาคารกรุงเทพ  ', value: 'ธนาคารกรุงเทพ'},

              {label: 'ธนาคารกสิกรไทย ', value: 'ธนาคารกสิกรไทย'},
              {
                label: 'ธนาคารไทยพาณิชย์  ',
                value: 'ธนาคารไทยพาณิชย์',
              },
              {
                label: 'ธนาคารทีเอ็มบีธนชาต  ',
                value: 'ธนาคารทีเอ็มบีธนชาต',
              },
              {
                label: 'ธนาคารกรุงศรีอยุธยา  ',
                value: 'ธนาคารกรุงศรีอยุธยา',
              },
              {
                label: 'ธนาคาร ซี ไอ เอ็ม บี ไทย  ',
                value: 'ธนาคาร ซี ไอ เอ็ม บี ไทย',
              },
              {label: 'ธนาคารทิสโก้  ', value: 'ธนาคารทิสโก้'},
              {label: 'พร้อมเพย์ ', value: 'พร้อมเพย์ '},
            ]}
          />
          <Input
            label="เลขบัญชี"
            labelStyle={{color: 'grey'}}
            placeholder="xxxxxxxxxxx  "
          />
          <Input
            label="จำนวนถอน"
            labelStyle={{color: 'grey'}}
            placeholder="บาท"
            leftIcon={{
              type: 'materail-design',
              name: 'attach-money',
              size: 30,
              color: 'grey',
            }}
          />
          <Button
            containerStyle={{paddingTop: 20}}
            title="ยืนยัน"
            buttonStyle={{backgroundColor: '#FF7A00'}}
            onPress={() => navigation.navigate('ParkingwalletScreen')}
          />
          <Text style={{fontWeight: '300'}}>
            {`          
      กติกาการแลกเปลี่ยน
             
      1.ในการแลกเงินแต่ละครั้งต้องมีเงินในแอปมากกว่า 100 
      และไม่เกิน 50,000 
      2.คุณสามารถแลกเงินสดได้สัปดาห์ละครั้งเท่านั้น
      3.การถอนเงินมากกว่า1,000ดอลลาร์ ต่อครั้ง ต้องได้รับการ
      อนุมัติและเวลาดำเนินการประมาณ 25-30 วันทำการภายใต้
      สถานการณ์เราจะแจ้งการเปลี่ยนแปลงหรือการปรับปรุงกฎ
      การถอนเงินล่วงหน้าผ่านทาง SMS โปรดติดตามกับข้อความ
      การแจ้งเตือนส่งให้ท่าน
`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WithdrawmoneyScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    padding: 20,
  },
});
