import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAuth} from '../../contexts/AuthProvider';
import {Button, Input, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import {color} from 'react-native-elements/dist/helpers';
import {Image} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
const ForgotPasswordScreen = ({navigation}) => {
  const {logInWithEmail} = useAuth();

  function handleSigninWithEmail() {
    logInWithEmail('test', '1234');
  }
  return (
    <View Sttyle={{flex: 1}}>
      <Header
        containerStyle={{backgroundColor: ''}}
        leftComponent={
          <Icon
            onPress={() => navigation.navigate('LoginScreen')}
            name="chevron-left"
            color="grey"
            size={30}></Icon>
        }
      />
      <View style={{alignItems: 'center'}}>
        <Image
          source={image2}
          style={{width: 150, height: 20, resizeMode: 'contain'}}
        />
      </View>

      <View style={Style.buttonContainer}>
        <Text
          style={{
            color: '#F8B713',
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '700',
            paddingTop: 10,
          }}>
          FORGOT PASSWORD
        </Text>
        <Text
          style={{
            paddingTop: 10,
          }}>
          Create a new, strong password that you don't use on other sites.
        </Text>
        <View
          style={{
            paddingTop: 10,
          }}
        />
        <Input
          label="Your email"
          labelStyle={{color: '#F8B713'}}
          placeholder="...............  "
          rightIcon={{
            type: 'materail-design',
            name: 'visibility-off',
            size: 20,
            color: 'grey',
          }}
        />
        <Input
          label="New  Password"
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

        <Text> at least 8 characters</Text>
        <Button
          containerStyle={{paddingTop: 20}}
          title="CONFIRM"
          buttonStyle={{backgroundColor: '#FF7A00'}}
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
const Style = StyleSheet.create({
  buttonContainer: {
    padding: 50,
  },
  rightIconContailer: {
    padding: 50,
    marginRight: 10,
  },
  leftIconContailer: {
    padding: 40,
    marginLeft: 10,
  },
});
