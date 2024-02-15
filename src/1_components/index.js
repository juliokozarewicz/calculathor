import React, { useState } from 'react';

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

    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setoperator] = useState('=');

    clearMemory = () => {
        setDisplayValue('0')
    };

    function addDigit(n) {

        if (displayValue === '0') {
            (n.toString() === '0') ? setDisplayValue('0') : 
            (n.toString() === '.') ? setDisplayValue('0.') : setDisplayValue(n)

        } else if (n.toString() === '.' && displayValue.includes('.')) {
            setDisplayValue(displayValue)

        } else {
            setDisplayValue(displayValue => displayValue + '' + n)

        }
    };

    function operatorChange(operator) {
        setoperator(operator)
    };


    return (

        <>
            <StatusBar barStyle="dark-content" backgroundColor={indexStyle.statusbar.backgroundColor} />

            <SafeAreaView style={indexStyle.allcontent}>

            <View style={indexStyle.logotop}>
                <Text style={indexStyle.txlogotop}>calculathor</Text>
            </View>

                <View style={indexStyle.frameDisplay}>
                    <Text
                        numberOfLines={3}
                        style={indexStyle.displayhist}
                    >
                        250 + 300.8447 + 500 + 800
                    </Text>

                    <Text style={indexStyle.equaldisplay}>{operator}</Text>

                    <Text numberOfLines={1} style={indexStyle.resultDisplay}>{displayValue}</Text>

                    <Image source={require('./3_img/hammer.png')} style={indexStyle.imghammer} />
                </View>

                <View style={indexStyle.keyboard}>

                    <Buttons label={'AC'} onClick={() => clearMemory()} />
                    <Buttons label={'÷'} onClick={() => operatorChange('÷')} />
                    <Buttons label={'x'} onClick={() => operatorChange('x')} />
                    <Buttons label={'<'}/>
                    <Buttons label={'7'} onClick={() => addDigit(7)} />
                    <Buttons label={'8'} onClick={() => addDigit(8)} />
                    <Buttons label={'9'} onClick={() => addDigit(9)} />
                    <Buttons label={'-'} onClick={() => operatorChange('-')} />
                    <Buttons label={'4'} onClick={() => addDigit(4)} />
                    <Buttons label={'5'} onClick={() => addDigit(5)} />
                    <Buttons label={'6'} onClick={() => addDigit(6)} />
                    <Buttons label={'+'} onClick={() => operatorChange('+')} />

                    <View style={indexStyle.framebottom}>

                        <View style={indexStyle.bottomnumbers}>
                            <Buttons label={'1'} onClick={() => addDigit(1)} />
                            <Buttons label={'2'} onClick={() => addDigit(2)} />
                            <Buttons label={'3'} onClick={() => addDigit(3)} />
                            <Buttons label={'.'} onClick={() => addDigit('.')} />
                            <Buttons label={'0'} onClick={() => addDigit(0)} />
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