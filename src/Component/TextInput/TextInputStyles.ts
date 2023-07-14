import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    titleStyle: {
      color: 'black',
      fontWeight: 'bold',
    },
    textInputContainer: {
      borderWidth: 1,
      borderRadius: 2,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      height: hp('6.6%'),
    },
    iconWrap: {
      flex: 0.2,
      alignItems: 'center',
    },
    placeholderWrap: {
      flex: 1,
    },
    textInputText: {
      color: 'black',
    },
    requireTextStyle: {
      color: 'red',
    },
  });
  export default Styles;