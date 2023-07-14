import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonInput from '../../Component/TextInput/TextInput';
import CommonDropDown from '../../Component/DropDown/DropDown';
import CommonButton from '../../Component/Button/Button';
import Styles from './AddressDetailsStyle';

const States = [
  'Maharashtra',
  'Gujarat',
  'Karnataka',
  'Kerala',
  'Punjab',
  'Andra Pradesh',
];

const RenderBuildingIcon = () => {
  return <Icon name="building" size={hp('3%')} color="black" />;
};

interface AddressFormData {
  address: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string;
}

interface AddressDetailsProps {
  navigation: any; // Replace `any` with the appropriate type
}

const AddressDetails: React.FC<AddressDetailsProps> = ({ navigation }) => {
  const [addressFormData, setAddressFormData] = useState<AddressFormData>({
    address: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleSubmit = () => {
    navigation.navigate('UserList');
  };

  return (
    <View style={Styles.container}>
      <CommonInput
        RenderIcon={RenderBuildingIcon}
        placeHolder="Address"
        onChangeText={(text) =>
          setAddressFormData({ ...addressFormData, address: text })
        }
      />
      <CommonInput
        RenderIcon={RenderBuildingIcon}
        placeHolder="Landmark"
        onChangeText={(text) =>
          setAddressFormData({ ...addressFormData, landmark: text })
        }
      />
      <CommonInput
        RenderIcon={RenderBuildingIcon}
        placeHolder="City"
        onChangeText={(text) =>
          setAddressFormData({ ...addressFormData, city: text })
        }
      />
      <CommonDropDown
        placeholder="Select your state"
        data={States}
        value={addressFormData.state}
        onValueChange={(value) =>
          setAddressFormData({ ...addressFormData, state: value })
        }
      />
      <CommonInput
        RenderIcon={RenderBuildingIcon}
        placeHolder="Pin Code"
        onChangeText={(text) =>
          setAddressFormData({ ...addressFormData, pincode: text })
        }
      />

      <CommonButton variant="solid" label="Next"  onPress={handleSubmit} />
    </View>
  );
};

export default AddressDetails;
