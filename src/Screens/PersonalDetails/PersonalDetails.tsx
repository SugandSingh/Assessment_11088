import React, {useState} from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
import {Routes} from '../../Navigation/Routes';
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

const RenderGender = ({value, setValue}: RenderGenderProps) => {
  return (
    <View style={Styles.genderContainer}>
      <Text style={Styles.genderText}>Gender</Text>
      <Radio.Group
        direction="row"
        name="gender"
        accessibilityLabel="Select Gender"
        value={value}
        onChange={nextValue => setValue(nextValue as Gender)}>
        <Stack
          direction={{base: 'row', md: 'row'}}
          space={4}
          w="75%"
          maxW="300px">
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

const PersonalDetails: React.FC<{navigation: any}> = ({navigation}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
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
  const RenderIcon = (name: string,disable:Boolean) => {
    return (
      <TouchableOpacity disabled={disable} onPress={() => setSecureTextEntry(!secureTextEntry)}>
        <Entypo name={name} size={hp('3%')} color="#002147" />
      </TouchableOpacity>
    );
  };
  const toast = useToast();

  const validateForm = (): boolean => {
    const {firstname, lastname, password, confirmPassword, phone, email} =
      basicFormData;

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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={Styles.container}>
        <ScrollView>
          <CommonAvatar
            source={
              basicFormData.profileUri ? basicFormData.profileUri : undefined
            }
            onPress={res =>
              setBasicFormData({
                ...basicFormData,
                profileUri: res.assets[0].uri,
              })
            }
          />
          <CommonInput
            RenderIconLeft={() => RenderIcon('user',true)}
            isRequired
            title="First Name"
            placeHolder="Enter your firstname here"
            onChangeText={text =>
              setBasicFormData({...basicFormData, firstname: text})
            }
          />
          <CommonInput
            RenderIconLeft={() => RenderIcon('user',true)}
            isRequired
            title="Last Name"
            placeHolder="Enter your lastname here"
            onChangeText={text =>
              setBasicFormData({...basicFormData, lastname: text})
            }
          />
          <CommonInput
            isRequired
            RenderIconLeft={() => RenderIcon('phone',true)}
            title="Phone Number"
            placeHolder="Enter your 10-digit Phone number here"
            keyboardType="phone-pad"
            onChangeText={text =>
              setBasicFormData({...basicFormData, phone: text})
            }
          />
          <CommonInput
            RenderIconLeft={() => RenderIcon('mail',true)}
            isRequired
            title="Email"
            placeHolder="Enter your email here"
            keyboardType="email-address"
            onChangeText={text =>
              setBasicFormData({...basicFormData, email: text})
            }
          />
          <RenderGender
            value={basicFormData.gender}
            setValue={value =>
              setBasicFormData({...basicFormData, gender: value})
            }
          />
          <CommonInput
            isRequired
            secureTextEntry={secureTextEntry}
            RenderIconRight={() => 
              RenderIcon( secureTextEntry ?'eye-with-line':'eye') 
            }
            RenderIconLeft={() => RenderIcon('lock')}
            title="Password"
            placeHolder="Enter your password here"
            onChangeText={text =>
              setBasicFormData({...basicFormData, password: text})
            }
          />
          <CommonInput
            isRequired
            RenderIconLeft={() => RenderIcon('lock',true)}
            title="Confirm Password"
            placeHolder="Confirm your password here"
            onChangeText={text =>
              setBasicFormData({...basicFormData, confirmPassword: text})
            }
          />
          <CommonButton
            onPress={onNextPressHandle}
            variant="solid"
            label="Next"
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PersonalDetails;
