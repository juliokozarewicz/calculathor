import React from 'react';

import {
    View,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

// import style sheet
import indexStyle from './1_style/indexStyle';


// External components (INIT)
// ===============================
import Buttons from './buttons'
// ===============================
// External components (END)


// index screen function
// -------------------------------------------------------------------------------------
export function IndexScreen() {

    return (

        <View style={indexStyle.allcontent}>
            <Buttons label={'ac'}/>
            <Buttons label={'/'}/>
            <Buttons label={'7'}/>
            <Buttons label={'8'}/>
            <Buttons label={'9'}/>
            <Buttons label={'*'}/>
            <Buttons label={'4'}/>
            <Buttons label={'5'}/>
            <Buttons label={'6'}/>
            <Buttons label={'-'}/>
            <Buttons label={'1'}/>
            <Buttons label={'2'}/>
            <Buttons label={'3'}/>
            <Buttons label={'+'}/>
            <Buttons label={'0'}/>
            <Buttons label={'.'}/>
            <Buttons label={'='}/>
        </View>
        
    );
    
};
// -------------------------------------------------------------------------------------