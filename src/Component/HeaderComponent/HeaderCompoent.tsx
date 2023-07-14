import React, { useMemo } from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './HeaderComponentStyle';

interface HeaderProps {
  title: string;
  headerProps: NativeStackHeaderProps;
}

const HeaderComponent = ({ title, headerProps: { navigation } }: HeaderProps) => {
  const backButton = useMemo(
    () => (
      <TouchableWithoutFeedback
        onPress={() => navigation.goBack()}
        testID="header-back-button"
      >
        <AntDesign name="arrowleft" size={hp('3%')} color="black" />
      </TouchableWithoutFeedback>
    ),
    [navigation]
  );

  return (
    <View style={Styles.container}>
      {backButton}
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
