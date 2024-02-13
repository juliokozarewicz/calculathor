import {Dimensions, StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    button: {
      fontSize: 30,
      height: Dimensions.get('window').width /3.5,
      width: Dimensions.get('window').width /4,
      padding: 20,

      backgroundColor: colors.gra1,

      borderWidth: 0.5,
      borderColor: colors.gray3,

      color: colors.gray4,

      textAlign: 'center',
      textAlignVertical: 'center',
    },

    buttonGreen: {
      fontSize: 30,
      height: Dimensions.get('window').width /3.5,
      width: Dimensions.get('window').width /4,
      padding: 20,

      backgroundColor: colors.green,

      borderWidth: 0.5,
      borderColor: colors.gray3,

      color: colors.black,

      textAlign: 'center',
      textAlignVertical: 'center',
    },

    buttonPurple: {
      fontSize: 30,
      height: Dimensions.get('window').width /3.5,
      width: Dimensions.get('window').width /4,
      padding: 20,

      backgroundColor: colors.gra1,

      borderWidth: 0.5,
      borderColor: colors.gray3,

      color: colors.purple,

      textAlign: 'center',
      textAlignVertical: 'center',
    },

  }

);