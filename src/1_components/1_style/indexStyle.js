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

    keyboard: {
      width: '100%',
      
      alignItems: 'center',

      flexDirection: 'row',

      flexWrap: 'wrap',
    },

    statusbar: {
      backgroundColor: colors.green,
    },

    logotop: {
      zIndex: 101,

      position: 'absolute',
      top: 0,

      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 0,
      paddingBottom: 5,

      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,

      backgroundColor: colors.green,
    },

    txlogotop: {
      fontFamily: 'title',

      fontSize: 12,
      letterSpacing: 1,

      textTransform: 'uppercase',

      fontWeight: 'bold',

      color: colors.purple,
    },

    frameDisplay: {
      position: 'relative',

      width: '100%',
      flex: 1,      

      backgroundColor: colors.gray2,
    },

  }

);