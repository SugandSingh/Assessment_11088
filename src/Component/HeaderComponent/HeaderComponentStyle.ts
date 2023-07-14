import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('8%'),
    flexDirection: 'row',
    padding: hp('2%'),
  elevation:6
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 25,
  },
  title: {
    fontSize: hp('3%'),
    color: 'black',
  },
});
export default Styles;
