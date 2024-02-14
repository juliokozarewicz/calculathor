import React from 'react';

import {
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
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

        <>
            <StatusBar barStyle="dark-content" backgroundColor={indexStyle.statusbar.backgroundColor} />

            <SafeAreaView style={indexStyle.allcontent}>

            <View style={indexStyle.logotop}>
                <Text style={indexStyle.txlogotop}>calculathor</Text>
            </View>

                <View style={indexStyle.frameDisplay}>
                    <Text
                        numberOfLines={4}
                        style={indexStyle.displayhist}
                    >
                        250 + 300.8447 + 500 + 800
                    </Text>

                    <Text style={indexStyle.equaldisplay}>=</Text>

                    <Text numberOfLines={1} style={indexStyle.resultDisplay}>1580.8447</Text>

                    <Image source={require('./3_img/hammer.png')} style={indexStyle.imghammer} />
                </View>

                <View style={indexStyle.keyboard}>

                    <Buttons label={'AC'}/>
                    <Buttons label={'÷'}/>
                    <Buttons label={'x'}/>
                    <Buttons label={'<'}/>
                    <Buttons label={'7'}/>
                    <Buttons label={'8'}/>
                    <Buttons label={'9'}/>
                    <Buttons label={'-'}/>
                    <Buttons label={'4'}/>
                    <Buttons label={'5'}/>
                    <Buttons label={'6'}/>
                    <Buttons label={'+'}/>

                    <View style={indexStyle.framebottom}>

                        <View style={indexStyle.bottomnumbers}>
                            <Buttons label={'1'}/>
                            <Buttons label={'2'}/>
                            <Buttons label={'3'}/>
                            <Buttons label={'.'}/>
                            <Buttons label={'0'}/>
                            <Buttons label={'%'}/>
                        </View>

                        <TouchableOpacity>
                            <Text style={indexStyle.buttonEqual}>=</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </SafeAreaView>

        </>
        
    );
    
};
// -------------------------------------------------------------------------------------