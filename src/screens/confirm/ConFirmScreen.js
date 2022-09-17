import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header, Image, ListItem} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
import car from '../../assets/images/car.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Input} from 'react-native-elements/dist/input/Input';
const ConFirmScreen = ({navigation}) => {
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
              onPress={() => navigation.navigate('HomeScreen')}
              name="chevron-left"
              color="grey"
              size={30}></Icon>
          }
        />

        <Text
          style={{
            paddingLeft: 40,
            fontSize: 15,
            fontWeight: '700',
            paddingTop: 10,
          }}>
          รายละเอียดการจอง
        </Text>
        <View style={{paddingTop: 10}}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={{paddingLeft: 25, fontWeight: '400'}}>
                {`สถานที่จอดรถ                     โรงพยาบาลจุฬาลงกรณ์
เลขทะเบียนรถ                                            ปปป-011
วันที่จอด                                                 28/02/2565
ตั้งแต่เวลาถึงเวลา                              12:00-17:00 น.
จำนวนชั่วโมง                                                 7 ชั่วโมง
ราคารวม                                                      100 บาท
                                                                    
                                                             เรียบร้อย  `}
                <Icon name="check-circle" color="#1BA305" size={30}></Icon>
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
      </View>
    </View>
  );
};

export default ConFirmScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
  },
  button: {
    backgroundColor: '#DADADA',
    width: 600,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
