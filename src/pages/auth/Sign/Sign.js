import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, Alert } from 'react-native'; 
//style
import styles from './Sign.style';

//components
import Input from '../../../components/Input';
import Button from '../../../components/Button';


//error
import authErrorMessageParser from '../../../utils/authErrorMessageParser';



const Sign = ({ navigation }) => {
    
  
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Derdini Söyle ?</Text>

        </SafeAreaView>
    );
}


export default Sign;
