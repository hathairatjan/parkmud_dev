import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import {useAuth} from '../../contexts/AuthProvider';
import {Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
const LogoutScreen = ({navigation}) => {
  const {logout} = useAuth();
  return (
    <View style={Style.buttonContainer}>
      <TouchableOpacity style={Style.button}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={image2}
            style={{width: 100, height: 50, resizeMode: 'contain'}}
          />
          <Text
            style={{
              padding: 1,
              color: 'black',
              fontSize: 15,
              fontWeight: '700',
            }}>
            ออกจากระบบ
          </Text>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Button
              title="Cancel"
              buttonStyle={{backgroundColor: '#DADADA', borderRadius: 5}}
              containerStyle={{marginRight: 20}}
              titleStyle={{color: 'black'}}
              onPress={() => navigation.navigate('SettingScreen')}
            />
            <Button
              title="Log out"
              buttonStyle={{backgroundColor: '#FF8000', borderRadius: 5}}
              containerStyle={{marginRight: 10}}
              titleStyle={{color: 'white'}}
              onPress={logout}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 100,
    paddingTop: 200,
  },
  button: {
    backgroundColor: 'white',
    width: 220,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
