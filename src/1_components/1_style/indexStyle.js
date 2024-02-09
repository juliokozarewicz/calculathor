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

        flexDirection: 'row',

        flexWrap: 'wrap',
    },

  }

);