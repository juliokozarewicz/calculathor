import React from 'react';

import {
    TouchableOpacity,
    Text,
} from 'react-native';

// import style sheet
import buttonsStyle from './1_style/buttonsStyle';


// External components (INIT)
// ===============================
// ===============================
// External components (END)


// index screen function
// -------------------------------------------------------------------------------------
export default props => {

    return (

        <TouchableOpacity onPress={props.onClick}>

            <Text style={
                ( ['+', '-', '<'].includes(props.label) ) ? buttonsStyle.buttonGreen : 
                ( ['x', '÷', 'AC'].includes(props.label) ) ? buttonsStyle.buttonPurple : 
                buttonsStyle.button}
            >
                {props.label}
            </Text>

        </TouchableOpacity>
        
    );
    
};
// -------------------------------------------------------------------------------------