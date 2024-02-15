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

    const [active, setactive] = useState(false);

    const [error, seterror] = useState(false);
    const [errormsg, seterrormsg] = useState('');

    const [previval, setprevival] = useState('0');
    const [operator, setoperator] = useState('=');
    const [displayValue, setDisplayValue] = useState('0');


    function clearMemory() {
        setDisplayValue('0')
        setoperator('=')
        setprevival('0')
        setactive(false)
    };

    function clearLast() {

        let newValue = displayValue.toString().slice(0, -1);
    
        if (newValue === '0' || newValue === '') {
            newValue = '0';
        }
    
        setDisplayValue(newValue);
    }

    function addDigit(n) {

        if (displayValue === '0') {
            (n.toString() === '0') ? setDisplayValue('0') : 
            (n.toString() === '.') ? setDisplayValue('0.') :
            setDisplayValue(n)

        } else if (n.toString() === '.' && displayValue.toString().includes('.')) {
            setDisplayValue(displayValue.toString())

        } else {
            setDisplayValue(displayValue => displayValue + '' + n)

        }

    };

    function operatorChange(operator) {
        setactive(true)
        setoperator(operator)

        if (previval.toString() === '0') {
            setprevival(displayValue.toString())
            setDisplayValue('0')
        };

    };

    function basicOperations() {

        if (operator === '+') {
            setactive(false)
            setprevival('0')
            setDisplayValue( (parseFloat(previval) + parseFloat(displayValue)).toString() )
            setoperator('=')

        } else if (operator === '-') {
            setactive(false)
            setprevival('0')
            setDisplayValue( (parseFloat(previval) - parseFloat(displayValue)).toString() )
            setoperator('=')

        } else if (operator === 'x') {
            setactive(false)
            setprevival('0')
            setDisplayValue( (parseFloat(previval) * parseFloat(displayValue)).toString() )
            setoperator('=')

        } else if (operator === '÷') {

            if (displayValue === '0') {

                seterror(true)
                seterrormsg("You can't divide a number by zero.")
                clearMemory()
                setoperator('=')

            } else {
                setactive(false)
                setprevival('0')
                setDisplayValue( (parseFloat(previval) / parseFloat(displayValue)).toString() )
                setoperator('=')
            };

        };

    };

    return (

        <>
            <StatusBar barStyle="dark-content" backgroundColor={indexStyle.statusbar.backgroundColor} />

            <SafeAreaView style={indexStyle.allcontent}>

                {
                
                    error && (

                        <TouchableOpacity style={indexStyle.errorframe} onPress={() => seterror(false)}>
                            <Text numberOfLines={1} style={indexStyle.txterror}>{errormsg}</Text>
                            <Text numberOfLines={1} style={indexStyle.txtcloseerror}>x</Text>
                        </TouchableOpacity>

                    )
                
                }

                <View style={indexStyle.logotop}>
                    <Text style={indexStyle.txlogotop}>calculathor</Text>
                </View>

                <View style={indexStyle.frameDisplay}>
                    <Text
                        numberOfLines={3}
                        style={active ? indexStyle.displayhist : null}
                    >
                        {previval}
                    </Text>

                    <Text style={active ? indexStyle.equaldisplay : null}>{operator}</Text>

                    <Text numberOfLines={1} style={indexStyle.resultDisplay}>{displayValue}</Text>

                    <Image source={require('./3_img/hammer.png')} style={indexStyle.imghammer} />
                </View>

                <View style={indexStyle.keyboard}>

                    <Buttons label={'AC'} onClick={() => clearMemory()} />
                    <Buttons label={'÷'} onClick={() => operatorChange('÷')} />
                    <Buttons label={'x'} onClick={() => operatorChange('x')} />
                    <Buttons label={'<'} onClick={() => clearLast()} />
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

                        <TouchableOpacity onPress={ () => {basicOperations()} } >
                            <Text style={indexStyle.buttonEqual}>=</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </SafeAreaView>

        </>
    
    );

};
// -------------------------------------------------------------------------------------