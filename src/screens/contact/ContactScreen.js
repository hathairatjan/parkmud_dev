import {View, Text} from 'react-native';
import React from 'react';
import {Button, Header, Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
import image6 from '../../assets/images/image6.png';
import Icon from 'react-native-vector-icons/Entypo';
const ContactScreen = ({navigation}) => {
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
              onPress={() => navigation.navigate('SettingScreen')}
              name="chevron-left"
              color="grey"
              size={30}></Icon>
          }
        />

        <View style={{alignItems: 'center', paddingTop: 50}}>
          <Image
            source={image6}
            style={{width: 500, height: 400, resizeMode: 'contain'}}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactScreen;
