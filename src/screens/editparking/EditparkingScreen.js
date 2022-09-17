import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header, Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
import car from '../../assets/images/car.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from 'react-native-elements/dist/input/Input';
const EditparkingScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Header
          centerComponent={
            <View style={{alignItems: 'center'}}>
              <Image
                source={image2}
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
              onPress={() => navigation.navigate('ParkingScreen')}
              name="chevron-left"
              color="grey"
              size={30}></Icon>
          }
        />

        <Text style={{fontSize: 13, paddingLeft: 30, fontWeight: '600'}}>
          แก้ไขลานจอดรถ
        </Text>

        <View style={Style.inputContainer}>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              ที่อยู่เลขที่
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 40,
                borderColor: '#ACB3BF',
              }}
              placeholder=" "
            />
          </View>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              หมู่ที่
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 40,
                borderColor: '#ACB3BF',
              }}
              placeholder=""
            />
          </View>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              แขวง/ตำบล
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 40,
                borderColor: '#ACB3BF',
              }}
              placeholder="   "
            />
          </View>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              เขต/อำเภอ
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 40,
                borderColor: '#ACB3BF',
              }}
              placeholder=""
            />
          </View>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              จังหวัด
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 40,
                borderColor: '#ACB3BF',
              }}
              placeholder="   "
            />
          </View>
          <View style={Style.formInput}>
            <Text style={{fontSize: 12, paddingLeft: 10, fontWeight: '600'}}>
              รหัสไปรษณีย์
            </Text>
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                height: 40,
                borderColor: '#ACB3BF',
              }}
              placeholder=""
            />
          </View>
        </View>
      </View>
      <View
        style={Style.buttonContainer}
        style={{
          paddingHorizontal: 120,
          paddingTop: 20,
        }}>
        <Button
          title="ยืนยัน"
          buttonStyle={{backgroundColor: '#FF7A00', paddingTop: 10}}
          onPress={() => navigation.navigate('ParkingScreen')}
        />
      </View>
    </View>
  );
};

export default EditparkingScreen;
const Style = StyleSheet.create({
  inputContainer: {
    paddingTop: 50,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  formInput: {width: 190},
});
