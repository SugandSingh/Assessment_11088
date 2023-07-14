import React, { useState } from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  View,
  Text,
  Radio,
  Stack,
  ScrollView,
  KeyboardAvoidingView,
  useToast,
} from 'native-base';
import CommonAvatar from '../../Component/Avatar/Avatar';
import CommonInput from '../../Component/TextInput/TextInput';
import CommonButton from '../../Component/Button/Button';
import { Routes } from '../../Navigation/Routes';
import Styles from './PersonalDetailsStyle';

type Gender = 'male' | 'female';

interface RenderGenderProps {
  value: Gender;
  setValue: (value: Gender) => void;
}

interface BasicFormData {
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  phone: string;
  gender: Gender;
  email: string;
  profileUri: string;
}

const RenderIcon = () => {
  return <Icon name="user" size={hp('3%')} color="black" />;
};

const RenderGender = ({ value, setValue }: RenderGenderProps) => {
  return (
    <View style={Styles.genderContainer}>
      <Text style={Styles.genderText}>Gender</Text>
      <Radio.Group
        direction="row"
        name="gender"
        accessibilityLabel="Select Gender"
        value={value}
        onChange={(nextValue) => setValue(nextValue as Gender)}
      >
        <Stack direction={{ base: 'row', md: 'row' }} space={4} w="75%" maxW="300px">
          <Radio value="male" size="sm" my={1}>
            Male
          </Radio>
          <Radio value="female" size="sm" my={1}>
            Female
          </Radio>
        </Stack>
      </Radio.Group>
    </View>
  );
};

const PersonalDetails: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [basicFormData, setBasicFormData] = useState<BasicFormData>({
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: 'male',
    email: '',
    profileUri: '',
  });

  const toast = useToast();

  const validateForm = (): boolean => {
    const { firstname, lastname, password, confirmPassword, phone, email } = basicFormData;

    if (
      firstname.trim() &&
      lastname.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      phone.trim() &&
      email.trim()
    ) {
      if (password === confirmPassword) {
        return true;
      } else {
        toast.show({
          title: 'Password does not match',
          placement: 'bottom',
        });
      }
    } else {
      toast.show({
        title: 'Please fill required data',
        placement: 'bottom',
      });
    }

    return false;
  };

  const onNextPressHandle = () => {
    if (validateForm()) {
      navigation.navigate(Routes.PROFESSIONAL_DETAILS);
    }
  };

  return (
    <KeyboardAvoidingView
      h={{
        base: '100%',
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={Styles.container}>
        <ScrollView>
          <CommonAvatar
            source={basicFormData.profileUri ? basicFormData.profileUri : undefined}
            onPress={(res) => setBasicFormData({ ...basicFormData, profileUri: res.assets[0].uri })}
          />
          <CommonInput
            RenderIcon={RenderIcon}
            isRequired
            title="First Name"
            placeHolder="Enter your firstname here"
            onChangeText={(text) => setBasicFormData({ ...basicFormData, firstname: text })}
          />
          <CommonInput
            RenderIcon={RenderIcon}
            isRequired
            title="Last Name"
            placeHolder="Enter your lastname here"
            onChangeText={(text) => setBasicFormData({ ...basicFormData, lastname: text })}
          />
          <CommonInput
            isRequired
            RenderIcon={RenderIcon}
            title="Phone Number"
            placeHolder="Enter your 10-digit Phone number here"
            keyboardType="phone-pad"
            onChangeText={(text) => setBasicFormData({ ...basicFormData, phone: text })}
          />
          <CommonInput
            isRequired
            RenderIcon={RenderIcon}
            title="Email"
            placeHolder="Enter your email here"
            keyboardType="email-address"
            onChangeText={(text) => setBasicFormData({ ...basicFormData, email: text })}
          />
          <RenderGender
            value={basicFormData.gender}
            setValue={(value) => setBasicFormData({ ...basicFormData, gender: value })}
          />
          <CommonInput
            isRequired
            secureTextEntry
            RenderIcon={RenderIcon}
            title="Password"
            placeHolder="Enter your password here"
            onChangeText={(text) => setBasicFormData({ ...basicFormData, password: text })}
          />
          <CommonInput
            isRequired
            secureTextEntry
            RenderIcon={RenderIcon}
            title="Confirm Password"
            placeHolder="Confirm your password here"
            onChangeText={(text) => setBasicFormData({ ...basicFormData, confirmPassword: text })}
          />
          <CommonButton onPress={onNextPressHandle} variant="solid" label="Next" />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PersonalDetails;


