import {Dimensions, StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';

// styles
export default StyleSheet.create(

  {

    button: {
      fontFamily: 'title',
      fontSize: 30,
      height: Dimensions.get('window').width /4,
      width: Dimensions.get('window').width /4,
      padding: 20,

      backgroundColor: colors.gra1,

      borderWidth: 0.5,
      borderColor: colors.gray3,

      color: colors.gray3,

      textAlign: 'center',
      textAlignVertical: 'center',
    },

    buttonGreen: {
      fontFamily: 'title',
      fontSize: 30,
      height: Dimensions.get('window').width /4,
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
      fontFamily: 'title',
      fontSize: 30,
      height: Dimensions.get('window').width /4,
      width: Dimensions.get('window').width /4,
      padding: 20,

      backgroundColor: colors.gra1,

      borderWidth: 0.5,
      borderColor: colors.gray3,

      color: colors.orange,

      textAlign: 'center',
      textAlignVertical: 'center',
    },

  }

);