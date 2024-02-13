import {Dimensions, StyleSheet} from 'react-native';

//import colors
import * as colors from './1_colors.json';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// styles
export default StyleSheet.create(

  {

    allcontent: {
        width: '100%',
        flex: 1,
        
        alignItems: 'center',
        
        backgroundColor: colors.gray1,
    },

    buttonEqual: {

      fontSize: 30,

      width: Dimensions.get('window').width /4,
      flex: 1,

      padding: 20,

      backgroundColor: colors.purple,

      borderWidth: 0.5,
      borderColor: colors.gray3,

      color: 'white',

      textAlign: 'center',
      textAlignVertical: 'center',
    },

    framebottom: {
      flexDirection: 'row',
    },

    bottomnumbers: {
      flex: 1,
      
      alignItems: 'center',
      
      backgroundColor: colors.gray1,

      flexDirection: 'row',

      flexWrap: 'wrap',
    },

    equalbuttons: {
      position: 'relative',
      
      alignItems: 'center',
      
      backgroundColor: colors.gray1,

      flexDirection: 'row',

      flexWrap: 'wrap',
    },

    frameDisplay: {
      position: 'relative',

      width: '100%',
      flex: 1,      

      backgroundColor: colors.gray5,
    },

    keyboard: {
      width: '100%',
      
      alignItems: 'center',

      flexDirection: 'row',

      flexWrap: 'wrap',
  },

  }

);