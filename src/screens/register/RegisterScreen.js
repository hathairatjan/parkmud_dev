import {View, ScrollView, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAuth} from '../../contexts/AuthProvider';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {color} from 'react-native-elements/dist/helpers';
import {Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';

const RegisterScreen = ({navigation}) => {
  const {logInWithEmail} = useAuth();
  function handleSigninWithEmail() {
    logInWithEmail('test', '1234');
  }

  return (
    <ScrollView Sttyle={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={image2}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
        <Text>Create your account.</Text>
      </View>

      <View style={Style.buttonContainer}>
        <Input
          label="Name"
          labelStyle={{color: '#F8B713'}}
          placeholder="Please enter your name"
          rightIcon={{
            type: 'materail-design',
            name: 'person-outline',
            size: 20,
            color: 'grey',
          }}
        />
        <Input
          label="SurName"
          labelStyle={{color: '#F8B713'}}
          placeholder="Please enter your surname"
          secureTextEntry={true}
          rightIcon={{
            type: 'materail-design',
            name: 'person-outline',
            size: 20,
            color: 'grey',
          }}
        />

        <Input
          label="Address"
          labelStyle={{color: '#F8B713'}}
          placeholder="your address"
          secureTextEntry={true}
          rightIcon={{
            type: 'materail-design',
            name: 'home-work',
            size: 20,
            color: 'grey',
          }}
        />
        <Input
          label="Mobile Phone"
          labelStyle={{color: '#F8B713'}}
          placeholder="your address"
          secureTextEntry={true}
          rightIcon={{
            type: 'materail-design',
            name: 'phone-iphone',
            size: 20,
            color: 'grey',
          }}
        />
        <Input
          label="Email"
          labelStyle={{color: '#F8B713'}}
          placeholder="example@gmail.com   "
          rightIcon={{
            type: 'materail-design',
            name: 'mail-outline',
            size: 20,
            color: 'grey',
          }}
        />
        <Input
          label="Password"
          labelStyle={{color: '#F8B713'}}
          placeholder="..............."
          secureTextEntry={true}
          rightIcon={{
            type: 'materail-design',
            name: 'visibility-off',
            size: 20,
            color: 'grey',
          }}
        />
        <Button
          containerStyle={{paddingTop: 10}}
          title="SIGN UP"
          buttonStyle={{backgroundColor: '#FF7A00'}}
          onPress={handleSigninWithEmail}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text> Already Signed-Up ?</Text>
        <Button
          title="SIGN IN"
          buttonStyle={{backgroundColor: 'transparent'}}
          titleStyle={{color: '#FF8000'}}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    padding: 50,
  },
  rightIconContailer: {
    padding: 10,
    marginRight: 10,
  },
  leftIconContailer: {
    padding: 10,
    marginLeft: 10,
  },
});
