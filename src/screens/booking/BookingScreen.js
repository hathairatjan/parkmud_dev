import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Header, ListItem, Image, Input} from 'react-native-elements';

import image2 from '../../assets/images/image2.png';
import Icon from 'react-native-vector-icons/Entypo';
const BookingScreen = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=th&apiKey=e72c5a5e1cd74eaa88e178df3a9dff37',
      {method: 'GET'},
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);

        setNews(response.articles);
      })

      .catch(error => console.log(error));
  }, []);
  return (
    <ScrollView Sttyle={{flex: 1}}>
      <View>
        <View>
          <Header
            centerComponent={
              <View style={{alignItems: 'center'}}>
                <Image
                  source={image2}
                  style={{width: 150, height: 20, resizeMode: 'contain'}}
                />
              </View>
            }
            containerStyle={{backgroundColor: ''}}
            leftComponent={
              <Icon
                onPress={() => navigation.navigate('HomeScreen')}
                name="chevron-left"
                color="grey"
                size={30}></Icon>
            }
          />
        </View>

        <FlatList
          data={new Array(5)}
          ListHeaderComponent={
            <Input
              containerStyle={{width: 300, alignSelf: 'center'}}
              inputContainerStyle={{
                paddingHorizontal: 10,
                borderWidth: 1,
                borderRadius: 10,
                height: 30,
              }}
              leftIcon={{name: 'search'}}
              placeholder="Search...."
            />
          }
          renderItem={({item}) => (
            <ListItem
              bottomDivider
              onPress={() => navigation.navigate('HourlyBookingScreen')}>
              <Image
                source={{
                  uri: 'https://www.gj.mahidol.ac.th/main/wp-content/uploads/2020/03/medicalcenter-parking-02.jpg',
                }}
                style={{width: 100, height: 100}}
              />
              <ListItem.Content>
                <ListItem.Title style={{fontWeight: '400'}}>
                  ที่จอดรถติดโรงพยาบาลจุฬาลง กรณ์ ที่จอดระยะยาว
                  แถวโรงพยาบาลจุฬาลงกรณ์ ราคาประหยัด จ - อา ทั้งวัน
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default BookingScreen;
