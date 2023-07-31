import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonInput from '../../Component/TextInput/TextInput';
import CommonDropDown from '../../Component/DropDown/DropDown';
import CommonButton from '../../Component/Button/Button';
import Styles from './AddressDetailsStyle';
import { useToast } from 'native-base';
import { Routes } from '../../Navigation/Routes';

const States = [
  'Maharashtra',
  'Gujarat',
  'Karnataka',
  'Kerala',
  'Punjab',
  'Andra Pradesh',
];

const RenderBuildingIcon = () => {
  return <Icon name="building" size={hp('3%')} color="#002147" />;
};

interface AddressFormData {
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
}

interface AddressDetailsProps {
  navigation: any;
}

const AddressDetails: React.FC<AddressDetailsProps> = ({ navigation }) => {
  const toast = useToast();
  const [addressFormData, setAddressFormData] = useState<AddressFormData>({
    address: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
  });
  const validateForm = (): boolean => {
    const {address, landmark, city, state, pincode, } =
    addressFormData;

    if (
      address.trim() &&
      landmark.trim() &&
      city.trim() &&
      state.trim() &&
      pincode.trim() 
     
    ) {
      return true;
    } else {
      toast.show({
        title: 'Please fill required data',
        placement: 'bottom',
      });
    }

    return false;
  };
  const handleSubmit = () => {
    if(validateForm()){
      navigation.navigte(Routes.PERSONAL_DETAILS)
    }
  };

  return (
    <View style={Styles.container}>
      <CommonInput
       title="Address"
      isRequired
        RenderIconLeft={RenderBuildingIcon}
        placeHolder="Address"
        onChangeText={(text) =>
          setAddressFormData({ ...addressFormData, address: text })
        }
      />
      <CommonInput
       title="Landmark"
       isRequired
        RenderIconLeft={RenderBuildingIcon}
        placeHolder="Landmark"
        onChangeText={(text) =>
          setAddressFormData({ ...addressFormData, landmark: text })
        }
      />
      <CommonInput
       title="City"
       isRequired
        RenderIconLeft={RenderBuildingIcon}
        placeHolder="City"
        onChangeText={(text) =>
          setAddressFormData({ ...addressFormData, city: text })
        }
      />
      <CommonDropDown
       title="State"
       isRequired
        placeholder="Select your state"
        data={States}
        value={addressFormData.state}
        onValueChange={(value) =>
          setAddressFormData({ ...addressFormData, state: value })
        }
      />
      <CommonInput
       title="Pin Code"
       isRequired
        RenderIconLeft={RenderBuildingIcon}
        placeHolder="Pin Code"
        onChangeText={(text) =>
          setAddressFormData({ ...addressFormData, pincode: text })
        }
      />

      <CommonButton variant="solid" label="Submit"  onPress={handleSubmit} />
    </View>
  );
};

export default AddressDetails;
