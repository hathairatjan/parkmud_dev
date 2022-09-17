import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAuth} from '../../contexts/AuthProvider';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-elements/dist/helpers';
import {Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
const LoginScreen = ({navigation}) => {
  const {logInWithEmail} = useAuth();

  function handleSigninWithEmail() {
    logInWithEmail('test', '1234');
  }

  return (
    <View Sttyle={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={image2}
          style={{width: 150, height: 100, resizeMode: 'contain'}}
        />
        <Text
          style={{
            textAlign: 'center',
          }}>
          Please login to your account. Or Login using email
        </Text>
      </View>

      <View style={Style.buttonContainer}>
        <Text
          style={{
            padding: 5,
            color: '#F8B713',
            fontSize: 17,
            fontWeight: '700',
          }}>
          SIGN IN
        </Text>
        <Text>Hi there! Nice to see you again.</Text>
        <View
          style={{
            paddingTop: 30,
          }}
        />
        <Input
          label="Email/Mobile Phone"
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

        <Text
          style={{textAlign: 'right'}}
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          Forgot Password?
        </Text>
        <Button
          containerStyle={{paddingTop: 20}}
          title="SIGN IN"
          buttonStyle={{backgroundColor: '#FF7A00'}}
          onPress={handleSigninWithEmail}
        />
        <Text style={{textAlign: 'center'}}>
          or use one of your social profiles.
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 5,
        }}>
        <Text> Don't have an account?</Text>
        <Button
          title="SIGN UP"
          buttonStyle={{backgroundColor: 'transparent'}}
          titleStyle={{color: '#FF8000'}}
          onPress={() => navigation.navigate('RegisterScreen')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    padding: 50,
  },
  rightIconContailer: {
    padding: 50,
    marginRight: 10,
  },
  leftIconContailer: {
    padding: 30,
    marginLeft: 10,
  },
});
