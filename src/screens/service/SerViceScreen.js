import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image, Header, ListItem, Button} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
import image14 from '../../assets/images/image14.png';
import image13 from '../../assets/images/image13.png';
import {BackgroundImage} from 'react-native-elements/dist/config';

const SerViceScreen = ({navigation}) => {
  return (
    <View>
      <Header
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Image
              source={image2}
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
            onPress={() => navigation.navigate('SettingScreen')}
            name="chevron-left"
            color="grey"
            size={30}></Icon>
        }
      />
      <View style={{paddingTop: 10}}>
        <ListItem
          bottomDivider
          onPress={() => navigation.navigate('BookingScreen')}>
          <View style={{alignItems: 'center', position: 'absolute', right: 0}}>
            <BackgroundImage
              source={image13}
              style={{width: 200, height: 100}}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title
              style={{
                fontWeight: '500',
                width: 150,
                height: 120,
                fontSize: 19,
                fontWeight: '700',
                color: 'grey',
              }}>
              {`

บริการขอภาพรถ`}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem bottomDivider>
          <View style={{alignItems: 'center', position: 'absolute', right: 0}}>
            <BackgroundImage
              source={image14}
              style={{width: 220, height: 150}}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title
              style={{
                fontWeight: '500',
                width: 150,
                height: 120,
                fontSize: 19,
                fontWeight: '700',
                color: 'grey',
              }}>
              {`
              
  บริการล้างรถ  [COMING SOON]`}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </View>
  );
};

export default SerViceScreen;
