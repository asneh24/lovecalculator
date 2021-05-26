import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


const Displaylove = (prop)=>{
    return(
        <View>
            <Text >Percent :- {prop.data.percentage}</Text>
            <Text>Result :- {prop.data.result}</Text>
        </View>
    )
}

export default Displaylove