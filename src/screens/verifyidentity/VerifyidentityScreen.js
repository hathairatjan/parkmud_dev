import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-elements/dist/helpers';
import {Image} from 'react-native-elements';
import image15 from '../../assets/images/image15.png';
import StepIndicator from 'react-native-step-indicator';
import {useState} from 'react';
import Step1 from './component/Step1';
import Step2 from './component/Step2';
import Step3 from './component/Step3';
const labels = ['ยืนยันตัวตน', 'ข้อมูลส่วนตัว', 'ยืนยันตัวตนสำเร็จ'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
};

const VerifyidentityScreen = ({navigation}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const goback = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      return;
    }
    navigation.navigate('SettingScreen');
  };
  return (
    <View>
      <Header
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Image
              source={image15}
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
            onPress={goback}
            name="chevron-left"
            color="grey"
            size={30}></Icon>
        }
      />

      <StepIndicator
        stepCount={3}
        customStyles={customStyles}
        currentPosition={currentStep}
        labels={labels}
      />
      {currentStep === 0 && <Step1 setStep={setCurrentStep} />}
      {currentStep === 1 && <Step2 setStep={setCurrentStep} />}
      {currentStep === 2 && <Step3 setStep={setCurrentStep} />}
    </View>
  );
};

export default VerifyidentityScreen;
