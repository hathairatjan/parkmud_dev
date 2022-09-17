import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image, Header, ListItem, Button} from 'react-native-elements';
import image9 from '../../assets/images/image9.png';
import {BackgroundImage} from 'react-native-elements/dist/config';
const CarScreen = ({navigation}) => {
  return (
    <View>
      <Header
        containerStyle={{backgroundColor: 'transparent'}}
        rightComponent={
          <Icon
            onPress={() => navigation.navigate('EditCarScreen')}
            name="edit"
            color="grey"
            size={20}></Icon>
        }
      />
      <View style={{paddingLeft: 190}}>
        <Icon
          onPress={() => navigation.navigate('AddCarScreen')}
          name="plus-circle"
          color="grey"
          size={30}></Icon>
        <Text
          style={{
            color: 'grey',
            fontSize: 15,
            fontWeight: '600',
          }}>
          Add
        </Text>
      </View>

      <View style={{paddingTop: 20}}>
        <ListItem.Swipeable
          onPress={() => navigation.navigate('')}
          leftContent={
            <Button
              title="Info"
              icon={{name: 'info', color: 'white'}}
              buttonStyle={{minHeight: '100%'}}
            />
          }
          rightContent={
            <Button
              title="Delete"
              icon={{name: 'delete', color: 'white'}}
              buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
            />
          }>
          <View style={{alignItems: 'center', position: 'absolute', right: 0}}>
            <BackgroundImage
              source={image9}
              style={{width: 150, height: 120}}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title>
              {`     
              ยี้ห้อ Honda 
              รุ่น CR-V 
              ทะเบียนรถ กขค123
              `}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem.Swipeable>
      </View>
    </View>
  );
};
export default CarScreen;
