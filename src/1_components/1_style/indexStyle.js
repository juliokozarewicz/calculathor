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
      fontFamily: 'title',

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
      color: colors.purple,
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

      alignItems: 'center',
    },

    displayhist: {

      zIndex: 15,

      width: '85%',

      position: 'absolute',
      bottom: 170,

      fontFamily: 'title',
      fontSize: 14,
      letterSpacing: 1,

      textTransform: 'uppercase',

      fontWeight: 'bold',

      color: colors.gray4,
      
      textAlign: 'right'
    },

    equaldisplay: {

      zIndex: 15,

      width: '85%',

      position: 'absolute',
      bottom: 105,

      fontFamily: 'title',
      fontSize: 35,
      letterSpacing: 1,

      textTransform: 'uppercase',

      fontWeight: 'bold',

      color: colors.purple,

      textAlign: 'right',
    },

    resultDisplay: {

      zIndex: 15,

      width: '85%',

      position: 'absolute',
      bottom: 30,

      fontFamily: 'title',
      fontSize: 45,
      letterSpacing: 1,

      textTransform: 'uppercase',

      fontWeight: 'bold',

      color: colors.black,

      textAlign: 'right',
    },

    imghammer: {
      zIndex: 10,
  
      position: 'absolute',
      top: 30,

      width: 250,
      height: 250,

      opacity: 0.7,
    },

    errorframe: {
      zIndex: 50,
      position: 'absolute',
      top: 40,

      width: '90%',
      height: 50,

      backgroundColor: colors.orange,

      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 12,

      flexDirection: 'row',
    },

    txterror: {
      width: '85%',
      color: colors.white,

      textAlign: 'left',

      paddingLeft: 20,

      fontFamily: 'title',
      fontSize: 13,
    },

    txtcloseerror: {
      height: '100%',

      flex: 1,
      color: 'black',

      fontFamily: 'title',
      fontSize: 20,

      textAlign: 'center',
      textAlignVertical: 'center',

      paddingBottom: 5,
    },

    loadscreen: {
      zIndex: 999,
      position: 'absolute',
      top: 0,

      width: '100%',
      height: '100%',

      backgroundColor: colors.purple,

      alignItems: 'center',
      justifyContent: 'center',
    },

    loadscreenlogo: {
      width: 110,
      height: 110,
    },
  }

);