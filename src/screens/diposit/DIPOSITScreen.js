import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Header, Image, ListItem} from 'react-native-elements';
import image7 from '../../assets/images/image7.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';
const DIPOSITScreen = ({navigation}) => {
  return (
    <View>
      <Header
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Image
              source={image7}
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
            onPress={() => navigation.navigate('WalletScreen')}
            name="chevron-left"
            color="grey"
            size={30}></Icon>
        }
      />
      <View style={{width: '100%'}}>
        <ListItem
          containerStyle={{backgroundColor: '#FF7A00'}}
          bottomDivider
          onPress={() => navigation.navigate('DIPOSITScreen')}>
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '700', color: '#fff'}}>
              {'เลือกชำระธนาคาร'}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={Style.buttonContainer}>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'ธนาคารกรุงเทพ  0123456789', value: 'ธนาคารกรุงเทพ'},
            {label: 'ธนาคารกรุงไทย  0123456789', value: 'ธนาคารกรุงไทย'},
            {label: 'ธนาคารกสิกรไทย  0123456789', value: 'ธนาคารกสิกรไทย'},
            {label: 'ธนาคารไทยพาณิชย์  0123456789', value: 'ธนาคารไทยพาณิชย์'},
            {
              label: 'ธนาคารทีเอ็มบีธนชาต  0123456789',
              value: 'ธนาคารทีเอ็มบีธนชาต',
            },
            {
              label: 'ธนาคารกรุงศรีอยุธยา  0123456789',
              value: 'ธนาคารกรุงศรีอยุธยา',
            },
            {
              label: 'ธนาคาร ซี ไอ เอ็ม บี ไทย  0123456789',
              value: 'ธนาคาร ซี ไอ เอ็ม บี ไทย',
            },
            {label: 'ธนาคารทิสโก้  0123456789', value: 'ธนาคารทิสโก้'},
          ]}
        />
        <Text
          style={{
            paddingLeft: 25,
            color: '#FF7A00',
            fontSize: 15,
            fontWeight: '900',
            paddingTop: 10,
          }}>
          TRUE MONEY
        </Text>
        <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={[
            {label: 'PARKMUD   0123456789', value: 'PARKMUD   0123456789'},
          ]}
        />
      </View>
      <View
        style={{
          width: 400,
          alignItems: 'center',
          paddingTop: 50,
        }}>
        <TouchableOpacity style={Style.button}>
          <Text
            style={{
              color: 'grey',
              fontSize: 15,
              fontWeight: '900',
            }}>
            อัพโหลดหลักฐานการชำระเงิน
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DIPOSITScreen;
const Style = StyleSheet.create({
  button: {
    backgroundColor: '#FAFAFA',
    width: 290,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
});
