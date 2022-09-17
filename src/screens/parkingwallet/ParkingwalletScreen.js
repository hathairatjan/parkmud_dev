import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Image, ListItem, Header} from 'react-native-elements';
import image18 from '../../assets/images/image18.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ParkingwalletScreen = ({navigation}) => {
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
              onPress={() => navigation.navigate('ParkingprofileScreen')}
              name="chevron-left"
              color="grey"
              size={20}></Icon>
          }
        />
        <Text
          style={{
            padding: 20,
            color: '#50555C',
            fontSize: 15,
            fontWeight: '500',
          }}>
          เงินรวม
        </Text>

        <View
          style={{
            width: 400,
            alignItems: 'center',
          }}>
          <TouchableOpacity style={Style.button}>
            <Text
              style={{
                color: '#ffff',
                fontSize: 50,
                fontWeight: '900',
              }}>
              {`$  1000`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%'}}>
          <ListItem
            bottomDivider
            onPress={() => navigation.navigate('WithdrawmoneyScreen')}>
            <ListItem.Content>
              <ListItem.Title style={{fontWeight: '500'}}>
                {'ถอนเงิน'}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron size={20} />
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontWeight: '500'}}>
                {'ประวัติการถอนเงิน'}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron size={20} />
          </ListItem>
          <Text style={{fontWeight: '300'}}>
            {`          
             ตั้งรหัสผ่านสำหรับการถอนเงินสด 
            
             1.หลังจากตั้งรหัสผ่านแล้วผู้ใช้ที่รู้รหัสผ่านเท่านั้นจึงสามรถ
             แลกเงินสดได้
             2.หากคุณลืมรหัสผ่านหรือจำเป็นต้องตั้งค่าใหม่โปรดติดต่อ
             ทางเรากติกาการแลกเปลี่ยน
             
             
`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ParkingwalletScreen;
const Style = StyleSheet.create({
  button: {
    backgroundColor: '#FF8A1F',
    width: 270,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 40,
  },
});
