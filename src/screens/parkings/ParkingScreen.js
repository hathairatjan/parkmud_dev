import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image, Header, ListItem, Button} from 'react-native-elements';
import image2 from '../../assets/images/image2.png';
import {BackgroundImage} from 'react-native-elements/dist/config';
const ParkingScreen = ({navigation}) => {
  return (
    <View>
      <Header
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Image
              source={image2}
              style={{width: 150, height: 50, resizeMode: 'contain'}}
            />
          </View>
        }
        containerStyle={{backgroundColor: 'transparent'}}
        leftComponent={
          <Icon
            onPress={() => navigation.navigate('ParkingprofileScreen')}
            name="chevron-left"
            color="grey"
            size={20}></Icon>
        }
        rightComponent={
          <Icon
            onPress={() => navigation.navigate('EditparkingScreen')}
            name="edit"
            color="#FF7A00"
            size={20}></Icon>
        }
      />
      <View style={{paddingLeft: 190}}>
        <Icon
          onPress={() => navigation.navigate('AddparkingScreen')}
          name="plus-circle"
          color="#FF7A00"
          size={30}></Icon>
        <Text
          style={{
            color: '#FF7A00',
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
          <View
            style={{
              alignItems: 'center',
              position: 'absolute',
              paddingLeft: 10,
            }}>
            <Image
              source={{
                uri: 'https://www.gj.mahidol.ac.th/main/wp-content/uploads/2020/03/medicalcenter-parking-02.jpg',
              }}
              style={{width: 140, height: 140}}
            />
          </View>
          <ListItem.Content>
            <ListItem.Title>
              {`     
                               ที่จอดรถติดโรงพยาบาลจุฬาลงกรณ์ 
                               ที่จอดระยะยาวแถวโรงพยาบาล
                               จุฬาลงกรณ์ ราคาประหยัด จ - อา 
                        
              `}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem.Swipeable>
      </View>
    </View>
  );
};
export default ParkingScreen;
