import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header, Image, Input} from 'react-native-elements';
import image11 from '../../assets/images/image11.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';
const EditCarScreen = ({navigation}) => {
  return (
    <View>
      <Header
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Image
              source={image11}
              style={{
                width: 120,
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
            onPress={() => navigation.navigate('CarScreen')}
            name="chevron-left"
            color="grey"
            size={30}></Icon>
        }
      />
      <View style={Style.buttonContainer}>
        <Text
          style={{
            paddingLeft: 25,
            color: 'grey',
            fontSize: 15,
            fontWeight: '600',
            paddingTop: 10,
          }}>
          ยี้ห้อ
        </Text>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'TOYOTA ', value: 'TOYOTA '},
            {label: ' ISUZU ', value: ' ISUZU '},
            {label: 'HONDA', value: 'HONDA'},
            {label: 'MITSUBISHI ', value: 'MITSUBISHI '},
            {label: '  NISSAN  ', value: '  NISSAN '},
            {label: 'MAZDA', value: 'MAZDA'},
            {label: 'FORD ', value: 'FORD '},
            {label: ' MG  ', value: ' MG  '},
            {label: 'SUZUKI ', value: 'SUZUKI '},
            {label: 'CHEVROLET ', value: 'CHEVROLET '},
          ]}
        />
        <Text
          style={{
            paddingLeft: 25,
            color: 'grey',
            fontSize: 15,
            fontWeight: '600',
          }}>
          ชื่อรุ่น
        </Text>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'HONDA ACCORD', value: 'HONDA ACCORD'},
            {label: 'HONDA BR-V', value: 'HONDA BR-V'},
            {label: 'HONDA CR-V', value: 'HONDA CR-V'},
            {label: 'HONDA CITY', value: 'HONDA CITY'},
            {label: 'HONDA CIVIC', value: 'HONDA CIVIC'},
            {label: 'HONDA HR-V', value: 'HONDA HR-V'},
            {label: 'HONDA JAZZ', value: 'HONDA JAZZ'},
            {label: 'HONDA MOBILIO', value: 'HONDA MOBILIO'},
          ]}
        />
        <Text
          style={{
            paddingLeft: 25,
            color: 'grey',
            fontSize: 15,
            fontWeight: '600',
          }}>
          ประเภทรถ
        </Text>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'ECO-Car', value: 'ECO-Car'},
            {label: 'Sub-Compact', value: 'Sub-Compact'},
            {label: 'Compact Car', value: 'Compact Car'},
            {label: 'Hot Hatch', value: 'Hot Hatch'},
            {label: 'Sports sedan', value: 'Sports sedan'},
            {label: 'Sports coupe', value: 'Sports coupe'},
            {label: 'Supercar', value: 'Supercar'},
            {label: 'MPV', value: 'MPV'},
            {label: 'SUV', value: 'SUV'},
            {label: 'Pick-Up', value: 'Pick-Up'},
            {label: 'Van', value: 'Van'},
          ]}
        />
        <Text
          style={{
            paddingLeft: 25,
            color: 'grey',
            fontSize: 15,
            fontWeight: '600',
          }}>
          สีรถ
        </Text>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'black', value: 'black'},
            {label: 'white', value: 'white'},
            {label: 'red', value: 'red'},
            {label: 'gray ', value: 'gray '},
            {label: 'blue ', value: 'blue '},
            {label: 'brown', value: 'brown'},
            {label: ' cream ', value: ' cream '},
            {label: 'orange', value: 'orange'},
            {label: ' silver', value: ' silver'},
            {label: 'green  ', value: 'green  '},
            {label: 'gold', value: 'gold'},
            {label: ' pink', value: ' pink'},
            {label: 'crimson  ', value: 'crimson  '},
          ]}
        />
        <Input
          label="ทะเบียนรถ"
          labelStyle={{color: 'grey'}}
          placeholder="กข1991 "
        />
        <Input
          label="น้ำหนักรถ "
          labelStyle={{color: 'grey'}}
          placeholder="00.00 Kg.  "
        />
        <View
          style={{
            paddingHorizontal: 70,
          }}>
          <Button
            title="SAVE"
            buttonStyle={{backgroundColor: '#FF7A00'}}
            onPress={() => navigation.navigate('CarScreen')}
          />
        </View>
      </View>
    </View>
  );
};

export default EditCarScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    padding: 20,
  },
});
