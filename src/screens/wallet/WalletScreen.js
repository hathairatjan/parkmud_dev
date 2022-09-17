import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Image, ListItem} from 'react-native-elements';
import image12 from '../../assets/images/image12.png';
const WalletScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Image
            source={image12}
            style={{
              width: 150,
              height: 30,
              resizeMode: 'contain',
              paddingTop: 50,
            }}
          />
        </View>

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
            onPress={() => navigation.navigate('DIPOSITScreen')}>
            <ListItem.Content>
              <ListItem.Title style={{fontWeight: '500'}}>
                {'เติมเงิน'}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron size={20} />
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={{fontWeight: '500'}}>
                {'ประวัติการเติมเงิน'}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron size={20} />
          </ListItem>
          <Text style={{fontWeight: '400'}}>
            {`          
             การเติมเงินสามารถเติมได้ 2 ทางเลือก 
            
             1. ทางเลือกแรกสามารถเติมเงินทางTrue money online       
            และกรอกรายละเอียดให้ครบครัน 
            2.ทางเลือกที่สองสามารถเติมเงินผ่านการโอนทางบัญชี
            ธนาคารได้และกรอกรายละเอียดพร้อมหลักฐานในฟอร์ม`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WalletScreen;
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
