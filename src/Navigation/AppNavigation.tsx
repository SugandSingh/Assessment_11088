import * as React from 'react';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddressDetails from '../Screens/AddressDetails/AddressDetails'
import PersonalDetails from '../Screens/PersonalDetails/PersonalDetails';
import ProfessionalDetails from '../Screens/ProfessionalDetails/ProfessionalDetails';
import HeaderComponent from '../Component/HeaderComponent/HeaderCompoent';
import { Routes } from './Routes';
type RegisterParamList = {
  AddressDetails: undefined;
  PersonalDetails: undefined;
  ProfessionalDetails: undefined;
};




const Stack = createNativeStackNavigator<RegisterParamList>();

const Header = (title: string, headerProps: NativeStackHeaderProps) => {
  return <HeaderComponent headerProps={headerProps} title={title} />;
};







const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.PERSONAL_DETAILS}
          options={({ route, navigation }) => ({
            header: (headerProps: NativeStackHeaderProps) =>
              Header('Register', headerProps),
          })}
          component={PersonalDetails}
        />
        <Stack.Screen
          name={Routes.PROFESSIONAL_DETAILS}
          options={({ route, navigation }) => ({
            header: (headerProps: NativeStackHeaderProps) =>
              Header('Your Info', headerProps),
          })}
          component={ProfessionalDetails}
        />
        <Stack.Screen
          name={Routes.ADDRESS_DETAILS}
          options={({ route, navigation }) => ({
            header: (headerProps: NativeStackHeaderProps) =>
              Header('Your Address', headerProps),
          })}
          component={ AddressDetails }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
