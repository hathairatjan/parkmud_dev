import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
const SettingScreen = ({navigation}) => {
  return (
    <View>
      <View style={{alignItems: 'center', paddingTop: 20}}>
        <Image
          source={image2}
          style={{width: 150, height: 50, resizeMode: 'contain'}}
        />
      </View>
      <View style={{paddingTop: 10}}>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('PersonScreen')}>
          <Icon size={25} name={'person-pin'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'โปรไฟล์'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('BookingScreen')}>
          <Icon size={25} name={'location-pin'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'ระบบจองที่จอดรถ'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('BookingScreen')}>
          <Icon size={25} name={'account-balance-wallet'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'กระเป๋าเงิน'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('BookinghistoryScreen')}>
          <Icon size={25} name={'history'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'ประวัติการจอง'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('BookingScreen')}>
          <Icon size={25} name={'directions-car'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'รถของฉัน'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('SerViceScreen')}>
          <Icon size={25} name={'photo-camera'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'บริการเสริม'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('ContactScreen')}>
          <Icon size={25} name={'perm-phone-msg'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'ติดต่อเรา'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('PressapplyScreen')}>
          <Icon size={25} name={'person-pin-circle'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'PARKING OWNER'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('LogoutScreen')}>
          <Icon size={25} name={'logout'} />
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'ออกจากระบบ'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>
      </View>
    </View>
  );
};

export default SettingScreen;
const Style = StyleSheet.create({});
