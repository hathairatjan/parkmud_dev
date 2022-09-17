import {View, Text} from 'react-native';
import React from 'react';
import {Button, ListItem, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-elements/dist/helpers';
import {Image} from 'react-native-elements';
import image3 from '../../assets/images/image3.png';
import image17 from '../../assets/images/image17.png';
import {BackgroundImage} from 'react-native-elements/dist/config';
const ParkingprofileScreen = ({navigation}) => {
  return (
    <View>
      <View style={{alignItems: 'center', paddingTop: 10}}>
        <BackgroundImage
          source={image17}
          style={{
            width: '100%',
            height: 280,
            alignItems: 'center',
            paddingTop: 33,
          }}>
          <View style={{width: '100%'}}>
            <Icon
              onPress={() => navigation.navigate('SettingScreen')}
              name="chevron-left"
              color="#fff"
              size={30}></Icon>
          </View>
          <Image
            source={image3}
            style={{width: 100, height: 100, resizeMode: 'contain'}}
          />
          <Text
            style={{
              paddingLeft: 5,
              color: 'grey',
              fontSize: 15,
              fontWeight: '700',
            }}>
            SAIPAN
          </Text>
          <Text
            style={{
              paddingLeft: 5,
              color: 'grey',
              fontSize: 15,
              fontWeight: '700',
            }}>
            hathairat.jan@spumail.net
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <Icon name="cog-outline" color="grey" size={20}></Icon>
            <Text
              style={{
                paddingLeft: 5,
                color: '#fff',
                fontSize: 15,
                fontWeight: '700',
              }}
              onPress={() => navigation.navigate('ParkingEditScreen')}>
              EDIT PROFILE
            </Text>
          </View>
        </BackgroundImage>
      </View>
      <View style={{paddingTop: 1}}>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('ParkingScreen')}>
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'PARKING'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('ParkingwalletScreen')}>
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'กระเป๋าตัง'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('ServiceScreen')}>
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'ประวัติการให้บริการ'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>

        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('CameraScreen')}>
          <ListItem.Content>
            <ListItem.Title style={{fontWeight: '500'}}>
              {'กล้องวงจรปิด'}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={20} />
        </ListItem>
      </View>
    </View>
  );
};

export default ParkingprofileScreen;
