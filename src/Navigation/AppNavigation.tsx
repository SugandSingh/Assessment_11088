import * as React from 'react';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddressDetails from '../Screens/AddressDetails/AddressDetails';
import PersonalDetails from '../Screens/PersonalDetails/PersonalDetails';
import ProfessionalDetails from '../Screens/ProfessionalDetails/ProfessionalDetails';
import { Routes } from './Routes';
import HeaderComponent from '../Component/HeaderComponent/HeaderCompoent';

type RegisterParamList = {
  AddressDetails: undefined;
  PersonalDetails: undefined;
  ProfessionalDetails: undefined;
};

const Stack = createNativeStackNavigator<RegisterParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.PERSONAL_DETAILS}
          options={{
            header: ({ navigation, route }: NativeStackHeaderProps) => (
              <HeaderComponent title="Register" headerProps={{ navigation, route }} />
            ),
          }}
          component={PersonalDetails}
        />
        <Stack.Screen
          name={Routes.PROFESSIONAL_DETAILS}
          options={{
            header: ({ navigation, route }: NativeStackHeaderProps) => (
              <HeaderComponent title="Your Info" headerProps={{ navigation, route }} />
            ),
          }}
          component={ProfessionalDetails}
        />
        <Stack.Screen
          name={Routes.ADDRESS_DETAILS}
          options={{
            header: ({ navigation, route }: NativeStackHeaderProps) => (
              <HeaderComponent title="Your Address" headerProps={{ navigation, route }} />
            ),
          }}
          component={AddressDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
