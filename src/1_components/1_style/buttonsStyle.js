import {Dimensions, StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    button: {
      fontSize: 40,
      height: Dimensions.get('window').width /4,
      width: Dimensions.get('window').width /4,
      padding: 20,

      backgroundColor: colors.gray2,

      borderWidth: 1,
      borderColor: colors.gray3,

      color: colors.black,
    },

  }

);